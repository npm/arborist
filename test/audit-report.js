const t = require('tap')
const AuditReport = require('../lib/audit-report.js')
const Node = require('../lib/node.js')
const Vuln = require('../lib/vuln.js')
const Arborist = require('../')
const registryServer = require('./fixtures/registry-mocks/server.js')
const {registry, auditResponse, failAudit} = registryServer
const {resolve} = require('path')
const fixtures = resolve(__dirname, 'fixtures')

t.test('setup server', { bail: true }, registryServer)

t.test('audit outdated nyc and mkdirp', async t => {
  const path = resolve(fixtures, 'audit-nyc-mkdirp')
  const auditFile = resolve(path, 'audit.json')
  t.teardown(auditResponse(auditFile))

  const arb = new Arborist({
    path,
    registry,
  })

  const tree = await arb.loadVirtual()
  const report = await AuditReport.load(tree, arb.options)
  // just a gut-check that the registry server is actually doing stuff
  t.match(report.report, require(auditFile), 'got expected response')

  t.throws(() => report.set('foo', 'bar'), {
    message: 'do not call AuditReport.set() directly',
  })

  t.equal(report.topVulns.size, 1, 'one top node found vulnerable')
  t.equal(report.dependencyVulns.size, 6, 'dep vulns')
  t.equal(report.advisoryVulns.size, 7, 'advisory vulns')
  t.equal(report.get('nyc').simpleRange, '11.0.0-candidate.1 - 13.1.0')
  t.equal(report.get('mkdirp').simpleRange, '0.4.1 - 0.5.1')
})

t.test('audit returns an error', async t => {
  const path = resolve(fixtures, 'audit-nyc-mkdirp')
  const auditFile = resolve(path, 'audit.json')
  t.teardown(auditResponse(auditFile))
  t.teardown(failAudit())

  const logs = []
  const onlog = (...msg) => logs.push(msg)
  process.on('log', onlog)
  t.teardown(() => process.removeListener('log', onlog))

  const arb = new Arborist({
    path,
    registry,
  })

  const tree = await arb.loadVirtual()
  const report = await AuditReport.load(tree, arb.options)
  t.equal(report.report, null, 'did not get audit response')
  t.equal(report.size, 0, 'did not find any vulnerabilities')
  t.match(logs, [
    [
      'verbose',
      'audit error',
      report.error,
    ],
    [ 'silly', 'audit error', 'no audit for you' ],
  ], 'logged audit failure')
  t.match(report.error, Error)
})

t.test('audit disabled by config', async t => {
  const path = resolve(fixtures, 'audit-nyc-mkdirp')

  const logs = []
  const onlog = (...msg) => logs.push(msg)
  process.on('log', onlog)
  t.teardown(() => process.removeListener('log', onlog))

  const arb = new Arborist({
    path,
    registry,
    audit: false,
  })

  const tree = await arb.loadVirtual()
  const report = await AuditReport.load(tree, arb.options)
  t.equal(report.report, null, 'did not get audit response')
  t.equal(report.size, 0, 'did not find any vulnerabilities')
  t.match(logs, [], 'no logs of error')
  t.equal(report.error, null, 'no error encountered')
})

t.test('get advisory about node not in tree', async t => {
  // this should never happen, but if it does, we're prepared for it
  const path = resolve(fixtures, 'audit-nyc-mkdirp')
  const auditFile = resolve(path, 'audit.json')
  t.teardown(auditResponse(auditFile))

  const arb = new Arborist({
    path,
    registry,
  })

  const tree = await arb.loadVirtual()
  tree.children.get('mkdirp').parent = null
  tree.children.get('nyc').parent = null
  tree.children.get('minimist').parent = null
  new Node({
    parent: tree,
    path: resolve(path, 'node_modules/fooo'),
    pkg: { name: 'fooo', version: '1.2.3' },
  })
  tree.package = { dependencies: {
    fooo: ''
  }}

  const report = await AuditReport.load(tree, arb.options)
  // just a gut-check that the registry server is actually doing stuff
  t.match(report.report, require(auditFile), 'got expected response')
  t.equal(report.topVulns.size, 0, 'one top node found vulnerable')
  t.equal(report.dependencyVulns.size, 0, 'dep vulns')
  t.equal(report.advisoryVulns.size, 0, 'advisory vulns')
  t.equal(report.size, 0, 'no vulns that were relevant')
  t.equal(report.get('nyc'), undefined)
  t.equal(report.get('mkdirp'), undefined)
})

t.test('metavuln where dep is not a registry dep', async t => {
  const path = resolve(fixtures, 'minimist-git-metadep')
  const auditFile = resolve(path, 'audit.json')
  t.teardown(auditResponse(auditFile))
  const arb = new Arborist({
    path,
    registry,
  })

  const tree = await arb.loadVirtual()
  const report = await AuditReport.load(tree, arb.options)

  t.equal(report.has('@isaacs/minimist-git-dep'), true)
  t.equal(report.has('minimist'), true)
  t.equal(report.topVulns.has('@isaacs/minimist-git-dep'), true)
})

t.test('metavuln where a dep is not on the registry at all', async t => {
  const path = resolve(fixtures, 'audit-missing-packument')
  const auditFile = resolve(path, 'audit.json')
  t.teardown(auditResponse(auditFile))
  const arb = new Arborist({
    path,
    registry,
  })

  const tree = await arb.loadVirtual()
  const report = await AuditReport.load(tree, arb.options)

  t.equal(report.topVulns.size, 1)
  t.equal(report.advisoryVulns.size, 1)
  t.equal(report.dependencyVulns.size, 1)
})

t.test('get default opts when loaded without opts', async t => {
  const ar = new AuditReport()
  t.equal(ar.tree, undefined)
  t.strictSame(ar.options, {})
})

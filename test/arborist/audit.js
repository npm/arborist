const t = require('tap')
const Arborist = require('../../lib/arborist/index.js')

const { resolve } = require('path')

const fixtures = resolve(__dirname, '../fixtures')

const fixture = (t, p) => require(fixtures + '/reify-cases/' + p)(t)

const {start, stop, registry, auditResponse} = require('../fixtures/registry-mocks/server.js')
const cache = t.testdir()

t.before(start)
t.teardown(stop)

const {
  normalizePath,
  printTree,
} = require('../utils.js')

const cwd = normalizePath(process.cwd())
t.cleanSnapshot = s => s.split(cwd).join('{CWD}')
  .split(registry).join('https://registry.npmjs.org/')

t.test('audit finds the bad deps', async t => {
  const path = resolve(fixtures, 'deprecated-dep')
  t.teardown(auditResponse(resolve(fixtures, 'audit-nyc-mkdirp/audit.json')))

  const arb = new Arborist({
    cache,
    path,
    registry,
  })

  const report = await arb.audit()
  t.equal(report.topVulns.size, 0)
  t.equal(report.size, 2)
})

t.test('audit fix reifies out the bad deps', async t => {
  const path = fixture(t, 'deprecated-dep')
  t.teardown(auditResponse(resolve(fixtures, 'audit-nyc-mkdirp/audit.json')))
  const arb = new Arborist({
    cache,
    path,
    registry,
  })
  const tree = printTree(await arb.audit({fix: true}))
  t.matchSnapshot(tree, 'reified out the bad mkdirp and minimist')
})

t.test('audit does not do globals', t =>
  t.rejects(new Arborist({ cache, path: '.', global: true }).audit(), {
    message: '`npm audit` does not support testing globals',
    code: 'EAUDITGLOBAL',
  }))

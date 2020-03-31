const t = require('tap')
const audit = require('../lib/audit.js')

const calcDepFlags = require('../lib/calc-dep-flags.js')
const { gzipSync, unzipSync } = require('zlib')

const Node = require('../lib/node.js')
const Shrinkwrap = require('../lib/shrinkwrap.js')

const PORT = 15443 + (+process.env.TAP_CHILD_ID || 0)
const registry = `http://localhost:${PORT}/`
let FAIL_AUDIT = false
t.test('setup server', { bail: true }, t => {
  const http = require('http')
  const server = http.createServer((q, s) => {
    const body = []
    q.on('data', c => body.push(c))
    q.on('end', () => {
      // data comes in gzipped
      const req = JSON.parse(unzipSync(Buffer.concat(body)).toString())
      s.setHeader('connection', 'close')
      if (FAIL_AUDIT) {
        s.statusCode = 503
        return s.end('no audit for you')
      }
      const { method, url } = q
      return s.end(gzipSync(Buffer.from(JSON.stringify({
        ...req,
        method,
        url,
      }))))
    })
  })
  t.parent.teardown(() => server.close())
  server.listen(PORT, () => t.end())
})

t.test('submit some audits', async t => {
  const treeWithDeps = calcDepFlags(new Node({
    path: '/some/path',
    realpath: '/some/path',
    meta: await Shrinkwrap.reset({ path: '/some/path' }),
    pkg: {
      name: 'project-with-deps',
      dependencies: { prod: '' },
      devDependencies: { dev: '' },
      peerDependencies: { peer: '' },
      optionalDependencies: { optional: '' },
    },
    children: [
      { name: 'prod', pkg: { name: 'prod', version: '1.2.3' } },
      { name: 'dev', pkg: { name: 'dev', version: '1.2.3' } },
      { name: 'peer', pkg: { name: 'peer', version: '1.2.3' } },
      { name: 'optional', pkg: { name: 'optional', version: '1.2.3' } },
    ],
  }))
  await t.resolveMatchSnapshot(audit.quick(treeWithDeps, { registry }))
  await t.resolveMatchSnapshot(audit.full(treeWithDeps, { registry }))
  t.equal(await audit.quick(treeWithDeps, { registry, audit: false }), null)
  t.equal(await audit.full(treeWithDeps, { registry, audit: false }), null)

  const treePeerOnly = calcDepFlags(new Node({
    path: '/some/path',
    realpath: '/some/path',
    meta: await Shrinkwrap.reset({ path: '/some/path' }),
    pkg: {
      name: 'project-with-deps',
      peerDependencies: { peer: '' },
    },
    children: [
      { name: 'peer', pkg: { name: 'peer', version: '1.2.3' } },
    ],
  }))
  await t.resolveMatchSnapshot(audit.quick(treePeerOnly, { registry }))
  await t.resolveMatchSnapshot(audit.full(treePeerOnly, { registry }))

  const treeNoPeer = calcDepFlags(new Node({
    path: '/some/path',
    realpath: '/some/path',
    meta: await Shrinkwrap.reset({ path: '/some/path' }),
    pkg: {
      name: 'project-with-deps',
      dependencies: { prod: '' },
      devDependencies: { dev: '' },
      optionalDependencies: { optional: '' },
    },
    children: [
      { name: 'prod', pkg: { name: 'prod', version: '1.2.3' } },
      { name: 'dev', pkg: { name: 'dev', version: '1.2.3' } },
      { name: 'optional', pkg: { name: 'optional', version: '1.2.3' } },
    ],
  }))
  await t.resolveMatchSnapshot(audit.quick(treeNoPeer, { registry }))
  await t.resolveMatchSnapshot(audit.full(treeNoPeer, { registry }))

  FAIL_AUDIT = true
  t.equal(await audit.quick(treeWithDeps, { registry }), null)
  t.equal(await audit.full(treeWithDeps, { registry }), null)
  FAIL_AUDIT = false

  const treeNoDeps = new Node({
    path: '/some/path',
    realpath: '/some/path',
    meta: await Shrinkwrap.reset({ path: '/some/path' }),
    pkg: {
      name: 'project-with-deps',
    },
  })
  t.equal(await audit.quick(treeNoDeps, { registry }), null)
  t.equal(await audit.full(treeNoDeps, { registry }), null)
})

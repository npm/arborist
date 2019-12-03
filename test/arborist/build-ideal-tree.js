const {join, resolve} = require('path')
const http = require('http')
const regMocks = resolve(__dirname, '../fixtures/registry-mocks')
const t = require('tap')
const {readFileSync, existsSync} = require('fs')
const PORT = 12345 + (+process.env.TAP_CHILD_ID || 0)
const registry = `http://localhost:${PORT}/`
const Arborist = require('../..')

t.test('setup server', { bail: true }, t => {
  const server = http.createServer((req, res) => {
    res.setHeader('connection', 'close')
    const f = join(regMocks, join('/', req.url.replace(/@/, '').replace(/%2f/i, '/')))
    const file = f + (existsSync(`${f}.json`) ? '.json' : '')

    try {
      const body = readFileSync(file)
      res.setHeader('content-length', body.length)
      res.setHeader('content-type', /\.json$/.test(file)
        ? 'application/json' : 'application/octet-stream')
      res.end(body)
    } catch (er) {
      res.statusCode = er.code === 'ENOENT' ? 404 : 500
      res.setHeader('content-type', 'text/plain')
      res.end(er.stack)
    }
  })
  server.listen(PORT, () => {
    t.parent.teardown(() => server.close())
    t.end()
  })
})

// two little helper functions to make the loaded trees
// easier to look at in the snapshot results.
const printEdge = (edge, inout) => ({
  name: edge.name,
  type: edge.type,
  spec: edge.spec,
  ...(inout === 'in' ? {
    from: edge.from && edge.from.location,
  } : {
    to: edge.to && edge.to.location,
  }),
  ...(edge.error ? { error: edge.error } : {}),
  __proto__: { constructor: edge.constructor },
})

const printTree = tree => ({
  name: tree.name,
  location: tree.location,
  resolved: tree.resolved,
  ...(tree.extraneous ? { extraneous: true } : {
    ...(tree.dev ? { dev: true } : {}),
    ...(tree.optional ? { optional: true } : {}),
    ...(tree.devOptional && !tree.dev && !tree.optional
      ? { devOptional: true } : {}),
  }),
  ...(tree.inBundle ? { bundled: true } : {}),
  ...(tree.error
    ? {
      error: {
        code: tree.error.code,
        ...(tree.error.path ? { path: relative(__dirname, tree.error.path) }
          : {}),
      }
    } : {}),
  ...(tree.isLink ? {
    target: {
      name: tree.target.name,
      parent: tree.target.parent && tree.target.parent.location
    }
  } : {}),
  ...(tree.inBundle ? { bundled: true } : {}),
  ...(tree.edgesIn.size ? {
    edgesIn: new Set([...tree.edgesIn]
      .sort((a, b) => a.from.location.localeCompare(b.from.location))
      .map(edge => printEdge(edge, 'in'))),
  } : {}),
  ...(tree.edgesOut.size ? {
    edgesOut: new Map([...tree.edgesOut.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([name, edge]) => [name, printEdge(edge, 'out')]))
  } : {}),
  ...( tree.target || !tree.children.size ? {}
    : {
      children: new Map([...tree.children.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([name, tree]) => [name, printTree(tree)]))
    }),
  __proto__: { constructor: tree.constructor },
})

const { format } = require('tcompare')

const cwd = process.cwd()
t.cleanSnapshot = s => s.split(cwd).join('{CWD}')

const buildIdeal = path =>
  new Arborist({registry, path}).buildIdealTree().then(printTree)

t.test('testing-peer-deps package', t => {
  const path = resolve(__dirname, '../fixtures/testing-peer-deps')
  return t.resolveMatchSnapshot(buildIdeal(path), 'build ideal tree with peer deps')
})

t.test('tap vs react15', t => {
  const path = resolve(__dirname, '../fixtures/tap-react15-collision')
  return t.resolveMatchSnapshot(buildIdeal(path), 'build ideal tree with tap collision')
})

t.test('tap vs react15 with legacy shrinkwrap', t => {
  const path = resolve(__dirname, '../fixtures/tap-react15-collision-legacy-sw')
  return t.resolveMatchSnapshot(buildIdeal(path), 'tap collision with legacy sw file')
})

t.test('bad shrinkwrap file', t => {
  const path = resolve(__dirname, '../fixtures/testing-peer-deps-bad-sw')
  return t.resolveMatchSnapshot(buildIdeal(path), 'bad shrinkwrap')
})

t.test('dedupe example - not deduped', t => {
  const path = resolve(__dirname, '../fixtures/dedupe-tests')
  return t.resolveMatchSnapshot(buildIdeal(path), 'dedupe testing')
})

t.test('dedupe example - deduped', t => {
  const path = resolve(__dirname, '../fixtures/dedupe-tests-2')
  return t.resolveMatchSnapshot(buildIdeal(path), 'dedupe testing')
})

t.test('unresolveable peer deps', t => {
  const path = resolve(__dirname, '../fixtures/testing-peer-deps-unresolvable')
  return t.rejects(buildIdeal(path), {
    message: 'unable to resolve dependency tree',
    package: '@isaacs/testing-peer-deps-c',
    spec: '2',
    type: 'peer',
    requiredBy: '@isaacs/testing-peer-deps-b@2.0.1',
  }, 'unacceptable')
})

// some cases that are hard to hit without very elaborate dep trees
// and precise race conditions, so we just create some contrived
// examples here.
t.test('contrived dep placement tests', t => {
  const Node = require('../../lib/node.js')
  t.test('keep existing dep', t => {
    const root = new Node({
      path: '/x/y/z',
      realpath: '/x/y/z',
      pkg: {
        dependencies: {
          foo: '1.2.x',
          bar: '1.3.x',
        },
      },
    })
    const existingFoo = new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.2.3',
      },
      integrity: 'sha512-foofoofoo',
      parent: root,
    })
    const existingBar = new Node({
      name: 'bar',
      pkg: {
        name: 'bar',
        version: '1.3.4',
        dependencies: {
          foo: '1.x', // more lax than the root dep
        },
      },
      integrity: 'sha512-barbarbar',
      parent: root,
    })

    const sameFoo = new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.2.3',
      },
      integrity: 'sha512-foofoofoo',
    })
    const a = new Arborist()
    t.match(a.canPlaceDep(sameFoo, root, root.edgesOut.get('foo')),
      Symbol('KEEP'), 'same integrity, keep the one we have')

    t.strictSame(a.placeIdealDep(sameFoo, root, root.edgesOut.get('foo')),
      [], 'nothing placed, keep whats already there')

    const tooNew = new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.3.9',
      },
      integrity: 'sha512-oofoofoof',
    })
    t.match(a.canPlaceDep(tooNew, root, existingBar.edgesOut.get('foo')),
      Symbol('KEEP'), 'keep existing, satisfies the dep anyway')
    t.strictSame(a.placeIdealDep(tooNew, root, existingBar.edgesOut.get('foo')),
      [], 'nothing placed, keep whats already there')

    const newFoo = new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.2.4',
      },
      integrity: 'sha512-forforfor',
    })
    // note: it'll actually not bother replacing in this case, because
    // the original edge is not an error, but the canPlace result is still
    // REPLACE because it's newer.
    t.match(a.canPlaceDep(newFoo, root, existingBar.edgesOut.get('foo')),
      Symbol('REPLACE'), 'replace with newer dependency if allowed')
    t.end()
  })

  t.test('replace nodes with newer nodes', t => {
    const root = new Node({
      path: '/x/y/z',
      realpath: '/x/y/z',
      pkg: {
        dependencies: {
          foo: '1.2.x',
          bar: '1.3.x',
        },
      },
    })
    const existingFoo = new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.2.3',
      },
      integrity: 'sha512-foofoofoo',
      parent: root,
    })
    const existingBar = new Node({
      name: 'bar',
      pkg: {
        name: 'bar',
        version: '1.3.4',
        dependencies: {
          foo: '^1.2.4', // 1.2.3 is not ok!
        },
      },
      integrity: 'sha512-barbarbar',
      parent: root,
    })

    const a = new Arborist()

    const newFoo = new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.2.99',
      },
      integrity: 'sha512-oofoofoof',
    })

    t.match(a.canPlaceDep(newFoo, root, existingBar.edgesOut.get('foo')),
      Symbol('REPLACE'), 'replace with newer node')
    const placed = a.placeIdealDep(newFoo, existingBar, existingBar.edgesOut.get('foo'))
    t.equal(placed.length, 1, 'placed one node')
    t.equal(placed[0], newFoo, 'placed newFoo node')
    t.equal(newFoo.parent, root, 'placed newFoo in root')

    // remove it so we can test a conflict
    newFoo.parent = null
    const tooNew = new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.3.9',
      },
      integrity: 'sha512-oofoofoof',
    })
    t.match(a.canPlaceDep(tooNew, root, existingBar.edgesOut.get('foo')),
      Symbol('CONFLICT'), 'conflicts with root dependency')

    t.end()
  })

  t.end()
})

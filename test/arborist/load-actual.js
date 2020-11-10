const t = require('tap')
const { format } = require('tcompare')
const Arborist = require('../../lib/arborist')

const { resolve, relative } = require('path')
const { realpathSync } = require('fs')
const Node = require('../../lib/node.js')
const Shrinkwrap = require('../../lib/shrinkwrap.js')

const {
  fixtures,
  roots,
  symlinks,
} = require('../fixtures/index.js')

// little helper functions to make the loaded trees
// easier to look at in the snapshot results.
const pp = path => path && normalizePath(path.substr(fixtures.length + 1))
const normalizePath = path => path.replace(/[A-Z]:/, '').replace(/\\/g, '/')

const printEdge = (edge, inout) => ({
  name: edge.name,
  type: edge.type,
  spec: normalizePath(edge.spec),
  ...(inout === 'in' ? {
    from: edge.from && pp(edge.from.realpath),
  } : {
    to: edge.to && pp(edge.to.realpath),
  }),
  ...(edge.from && edge.from.dummy ? { FROM_DUMMY: true } : {}),
  ...(edge.to && edge.to.dummy ? { TO_DUMMY: true } : {}),
  ...(edge.error ? { error: edge.error } : {}),
  __proto__: { constructor: edge.constructor },
})

const stringify = require('json-stringify-nice')
const printTree = tree => ({
  name: tree.name,
  location: tree.location,
  realpath: pp(tree.realpath),
  top: pp(tree.top.realpath),
  ...(tree.extraneous ? { extraneous: true } : {
    ...(tree.dev ? { dev: true } : {}),
    ...(tree.optional ? { optional: true } : {}),
    ...(tree.devOptional && !tree.dev && !tree.optional
      ? { devOptional: true } : {}),
    ...(tree.peer ? { peer: true } : {}),
  }),
  ...(tree.fsParent ? { fsParent: pp(tree.fsParent.path) } : {}),
  ...(tree.errors.length
    ? {
      errors: tree.errors.map(error => ({
        code: error.code,
        ...(error.code ? {} : {
          code: 'no code, wtf???',
          message: error.message,
          stack: ('' + error.stack).split('\n'),
        }),
        ...(error.path ? { path: normalizePath(relative(__dirname, error.path)) }
          : {}),
      })),
    } : {}),
  ...(tree.isLink ? {
    target: {
      name: tree.target.name,
      ...(tree.target.parent ? { parent: pp(tree.target.parent.realpath) } : {}),
      ...(tree.target.fsParent ? { fsParent: pp(tree.target.fsParent.realpath) } : {}),
    }
  } : {}),
  ...(tree.inBundle ? { bundled: true } : {}),
  ...(tree.edgesIn.size ? {
    edgesIn: new Set([...tree.edgesIn]
      .sort((a, b) => pp(a.from.realpath).localeCompare(pp(b.from.realpath)))
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
  ...(tree.target || !tree.fsChildren.size ? {}
    : {
      fsChildren: [...tree.fsChildren]
        .sort((a, b) => a.path.localeCompare(b.path))
        .map(tree => tree.location)
    }),
  __proto__: { constructor: tree.constructor },
  ...( !tree.meta ? {} : {
    // stringify and re-parse to sort consistently
    meta: JSON.parse(stringify(tree.meta.commit())),
  })
})

const cwd = normalizePath(process.cwd())
t.cleanSnapshot = s => s.split(cwd).join('{CWD}')

t.formatSnapshot = tree => format(printTree(tree), { sort: true })

const loadActual = (path, opts) => new Arborist({path}).loadActual(opts)

roots.forEach(path => {
  const dir = resolve(fixtures, path)
  t.test(path, t => loadActual(dir).then(tree =>
    t.matchSnapshot(tree, 'loaded tree')))
})

t.test('look for missing deps by default', t => {
  const paths = ['external-dep/root', 'external-link/root']
  t.plan(paths.length)
  for (const p of paths) {
    t.test(p, async t => {
      const path = resolve(__dirname, '../fixtures', p)
      const arb = new Arborist({path})
      const tree = await arb.loadActual()
      t.matchSnapshot(tree, '"dep" should have missing deps, "link" should not')
    })
  }
})

t.test('already loaded', t => new Arborist({
  path: resolve(__dirname, '../fixtures/selflink'),
}).loadActual({ ignoreMissing: true }).then(actualTree => new Arborist({
  path: resolve(__dirname, '../fixtures/selflink'),
  actualTree,
}).loadActual().then(tree2 => t.equal(tree2, actualTree))))

t.test('already loading', t => {
  const arb = new Arborist({
    path: resolve(__dirname, '../fixtures/selflink'),
  })
  // try repeatedly to get at the actual tree, but it's not there until
  // the end of the process and the promise resolves
  const promise = arb.loadActual()
  const int = setInterval(() => {
    if (arb.actualTree)
      t.fail('set public arb.actualTree before promise resolved')
    arb.loadActual()
  })
  return promise.then(() => clearInterval(int))
})

t.test('load a tree rooted on a different node', async t => {
  const path = resolve(fixtures, 'workspace')
  const other = resolve(fixtures.replace(/[a-z]/gi, 'X'), 'workspace')
  const root = new Node({
    meta: await Shrinkwrap.reset({path: other}),
    path: other,
    realpath: other,
    pkg: require(path + '/package.json'),
  })
  root.extraneous = false
  root.dev = false
  root.devOptional = false
  root.optional = false
  root.peer = false

  const actual = await (new Arborist({path}).loadActual())
  const transp = await (new Arborist({path}).loadActual({ root }))

  // verify that the transp nodes have the right paths
  t.equal(transp.children.get('a').path, resolve(other, 'node_modules/a'))
  t.equal(transp.children.get('b').path, resolve(other, 'node_modules/b'))
  t.equal(transp.children.get('c').path, resolve(other, 'node_modules/c'))
  t.equal(transp.children.get('a').realpath, resolve(other, 'packages/a'))
  t.equal(transp.children.get('b').realpath, resolve(other, 'packages/b'))
  t.equal(transp.children.get('c').realpath, resolve(other, 'packages/c'))

  // should look the same, once we strip off the other/fixture paths
  t.equal(format(printTree(actual)), format(printTree(transp)), 'similar trees')

  // now try with a transplant filter that keeps out the 'a' module
  const rootFiltered = new Node({
    meta: await Shrinkwrap.reset({path: other}),
    path: other,
    realpath: other,
    pkg: require(path + '/package.json'),
  })
  rootFiltered.extraneous = false
  rootFiltered.dev = false
  rootFiltered.devOptional = false
  rootFiltered.optional = false
  rootFiltered.peer = false
  const transpFilter = await new Arborist({path}).loadActual({
    root: rootFiltered,
    transplantFilter: n => n.name !== 'a'
  })
  t.equal(transpFilter.children.get('a'), undefined)
  t.equal(transpFilter.children.get('b').path, resolve(other, 'node_modules/b'))
  t.equal(transpFilter.children.get('c').path, resolve(other, 'node_modules/c'))
  t.equal(transpFilter.children.get('a'), undefined)
  t.equal(transpFilter.children.get('b').realpath, resolve(other, 'packages/b'))
  t.equal(transpFilter.children.get('c').realpath, resolve(other, 'packages/c'))
})

t.test('looking outside of cwd', t => {
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  process.chdir(resolve(__dirname, '../fixtures/selflink'))
  const dir = '../root'
  return loadActual(dir).then(tree =>
    t.matchSnapshot(tree, 'loaded tree'))
})

t.test('cwd is default root', t => {
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  process.chdir('test/fixtures/root')
  return loadActual().then(tree =>
    t.matchSnapshot(tree, 'loaded tree'))
})

t.test('shake out Link target timing issue', t => {
  process.env._TEST_ARBORIST_SLOW_LINK_TARGET_ = '1'
  t.teardown(() => process.env._TEST_ARBORIST_SLOW_LINK_TARGET_ = '')
  const dir = resolve(fixtures, 'selflink')
  return loadActual(dir).then(tree =>
    t.matchSnapshot(tree, 'loaded tree'))
})

t.test('broken json', t =>
  loadActual(resolve(fixtures, 'bad')).then(d => {
    t.ok(d.errors.length, 'Got an error object')
    t.equal(d.errors[0] && d.errors[0].code, 'EJSONPARSE')
    t.ok(d, 'Got a tree')
  }))

t.test('missing json does not obscure deeper errors', t =>
  loadActual(resolve(fixtures, 'empty')).then(d => {
    t.match(d, { errors: [{ code: 'ENOENT' }] },
      'Error reading json of top level')
    t.match(d.children.get('foo'), { errors: [{ code: 'EJSONPARSE' }] },
      'Error parsing JSON of child node')
  }))

t.test('missing folder', t =>
  t.rejects(loadActual(resolve(fixtures, 'does-not-exist')), {
    code: 'ENOENT'
  }))

t.test('missing symlinks', t =>
  loadActual(resolve(fixtures, 'badlink')).then(d => {
    t.is(d.children.size, 2, 'both broken children are included')
    t.match(d.children.get('foo'), { errors: [{ code: 'ELOOP' }] },
      'foo has error')
    t.match(d.children.get('bar'), { errors: [{ code: 'ENOENT' }] },
      'bar has error')
  }))

t.test('load from a hidden lockfile', t =>
  t.resolveMatchSnapshot(loadActual(resolve(fixtures, 'hidden-lockfile'))))

t.test('load a global space', t =>
  t.resolveMatchSnapshot(loadActual(resolve(fixtures, 'global-style/lib'), {
    global: true,
  })))
t.test('load a global space symlink', t =>
  t.resolveMatchSnapshot(loadActual(resolve(fixtures, 'global-style/lib-link'), {
    global: true,
  })))
t.test('load a global space with a filter', t =>
  t.resolveMatchSnapshot(loadActual(resolve(fixtures, 'global-style/lib'), {
    global: true,
    filter: (parent, kid) => parent.parent || kid === 'semver'
  })))

t.test('workspaces', t => {
  t.test('load a simple install tree containing workspaces', t =>
    t.resolveMatchSnapshot(
      loadActual(resolve(fixtures, 'workspaces-simple'))
    ))

  t.end()
})

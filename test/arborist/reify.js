const {basename, resolve} = require('path')
const t = require('tap')
const Arborist = require('../..')
const registryServer = require('../fixtures/registry-mocks/server.js')
const {registry} = registryServer

// there's a lot of fs stuff in this test.
// Parallelize as much as possible.
//t.jobs = Infinity
t.test('setup server', { bail: true, buffered: false }, registryServer)

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
  // 'package': tree.package,
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

const fixture = (t, p) =>
  t.testdir(require('../fixtures/reify-cases/' + p)(t))

const printReified = (path, opt) => reify(path, opt).then(printTree)

const reify = (path, opt) =>
  new Arborist({registry, path, ...(opt || {})}).reify(opt)

t.test('testing-peer-deps package', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'testing-peer-deps'))))

t.test('testing-peer-deps nested', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'testing-peer-deps-nested'))))

t.test('testing-peer-deps nested with update', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'testing-peer-deps-nested'), {
    update: { names: ['@isaacs/testing-peer-deps'] },
  })))

t.test('tap vs react15', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'tap-react15-collision'))))

t.test('tap vs react15 with legacy shrinkwrap', t =>
  t.resolveMatchSnapshot(printReified(
    fixture(t, 'tap-react15-collision-legacy-sw'))))

t.test('update a node without updating all of its deps', t =>
  t.resolveMatchSnapshot(printReified(
    fixture(t, 'tap-react15-collision-legacy-sw'),
    { add: { devDependencies: { tap: '14.10.5' } } })))

t.test('bad shrinkwrap file', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'testing-peer-deps-bad-sw'))))

t.test('bundle deps example 1', t => {
  // ignore the bundled deps when building the ideal tree.  When we reify,
  // we'll have to ignore the deps that got placed as part of the bundle.
  t.test('without update', t =>
    t.resolveMatchSnapshot(printReified(fixture(t, 'testing-bundledeps'))))
  t.test('bundle the bundler', t =>
    t.resolveMatchSnapshot(printReified(fixture(t, 'testing-bundledeps'), {
      add: {
        bundleDependencies: ['@isaacs/testing-bundledeps'],
      },
    })))
  t.end()
})

t.test('bundle deps example 2', t => {
  // bundled deps at the root level are NOT ignored when building ideal trees
  const path = 'testing-bundledeps-2'
  t.test('bundle deps testing', t =>
    t.resolveMatchSnapshot(printReified(fixture(t, path))))

  t.test('add new bundled dep c', t =>
    t.resolveMatchSnapshot(printReified(fixture(t, path), {
      add: {
        bundleDependencies: [ '@isaacs/testing-bundledeps-c' ],
      },
    })))

  t.test('remove bundled dep a', t =>
    t.resolveMatchSnapshot(printReified(fixture(t, path), {
      rm: ['@isaacs/testing-bundledeps-a'],
    })))

  t.end()
})

t.test('multiple bundles at the same level', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'two-bundled-deps'))))

t.test('update a node without updating its children', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'once-outdated'),
    { update: { names: ['once'] } })))

t.test('do not add shrinkwrapped deps', t =>
  t.resolveMatchSnapshot(printReified(
    fixture(t, 'shrinkwrapped-dep-no-lock'))))

t.test('do not update shrinkwrapped deps', t =>
  t.resolveMatchSnapshot(printReified(
    fixture(t, 'shrinkwrapped-dep-with-lock'),
    { update: { names: ['abbrev']}})))

t.test('reifying with shronk warp dep', t => {
  const cases = [
    'shrinkwrapped-dep-with-lock',
    'shrinkwrapped-dep-with-lock-empty',
    'shrinkwrapped-dep-no-lock',
    'shrinkwrapped-dep-no-lock-empty',
  ]
  t.plan(cases.length)
  cases.forEach(c => t.test(c, t =>
    t.resolveMatchSnapshot(printReified(fixture(t, c)))))
})

t.test('link deps already in place', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'link-dep'))))
t.test('create link deps', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'link-dep-empty'))))

t.test('link meta deps, fresh install', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'link-meta-deps-empty'))))
t.test('link meta deps, update', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'link-meta-deps'), {
    // use legacy nesting so we leave the link nested
    legacyNesting: true,
    add: {
      dependencies: {
        '@isaacs/testing-link-dep': '2',
        '@isaacs/testing-link-dev-dep': '2',
      },
    },
  })))

t.test('update a child of a node with bundled deps', t => {
  const path = fixture(t, 'testing-bundledeps-legacy-bundling')
  return t.resolveMatchSnapshot(printReified(path, {
    update: ['@isaacs/testing-bundledeps-c'],
    legacyBundling: true,
  }))
})

t.test('update a node without updating a child that has bundle deps', t => {
  const path = fixture(t, 'testing-bundledeps-3')
  return t.resolveMatchSnapshot(printReified(path, {
    update: ['@isaacs/testing-bundledeps-parent'],
  }))
})

t.test('rollbacks')

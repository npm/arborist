const Arborist = require('../../lib/arborist.js')
const t = require('tap')
const {resolve} = require('path')
const fixture = resolve(__dirname, '../fixtures/install-types')
const badfixture = resolve(__dirname, '../fixtures/root')
const pnpmFixture = resolve(__dirname, '../fixtures/pnpm')

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

const loadVirtual = path => new Arborist({path}).loadVirtual()

t.test('load from fixture', t =>
  loadVirtual(fixture).then(tree =>
    t.matchSnapshot(printTree(tree), 'loaded virtual tree from fixture')))

t.test('load from cwd', t => {
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  process.chdir(fixture)
  return loadVirtual().then(tree =>
    t.matchSnapshot(printTree(tree), 'loaded virtual tree from fixture'))
})

t.test('loading without a package-lock fails', t =>
  t.rejects(loadVirtual(badfixture), {
    message: 'loadVirtual requires existing shrinkwrap file',
  }))

t.test('load from npm-shrinkwrap.json', t => {
  const sw = fixture + '/npm-shrinkwrap.json'
  const lock = fixture + '/package-lock.json'
  const fs = require('fs')
  fs.renameSync(lock, sw)
  t.teardown(() => fs.renameSync(sw, lock))
  return loadVirtual(fixture).then(tree =>
    t.matchSnapshot(printTree(tree), 'loaded virtual tree from fixture'))
})

t.test('load without a root package.json is fine', t => {
  const bak = fixture + '/package.json-bak'
  const pj = fixture + '/package.json'
  const fs = require('fs')
  fs.renameSync(pj, bak)
  t.teardown(() => fs.renameSync(bak, pj))
  return loadVirtual(fixture).then(tree =>
    t.matchSnapshot(printTree(tree), 'loaded virtual no package json'))
})

t.test('load a tree with some links to nodes outside of node_modules', t =>
  loadVirtual(pnpmFixture).then(tree =>
    t.matchSnapshot(printTree(tree), 'loaded virtual tree with fsParents')))

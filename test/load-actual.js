const t = require('tap')
const { format } = require('tcompare')
const loadActual = require('../lib/load-actual.js')
const { resolve, dirname } = require('path')
const { symlinkSync, unlinkSync, realpathSync } = require('fs')
const mkdirp = require('mkdirp').sync
const fixtures = resolve(__dirname, 'fixtures')

const roots = [
  'bundle',
  'deepmixedloop',
  'devloop',
  'linkedroot',
  'links-all-over',
  'mixedloop',
  'mixedmidway',
  'noname',
  'optionalloop',
  'optofdev',
  'other',
  'root',
  'selflink',
  'workspace',
  'deeproot/root',
]

const symlinks = {
  'selflink/node_modules/@scope/z/node_modules/glob':
    '../../../foo/node_modules/glob',
  'other/node_modules/glob':
    '../../root/node_modules/@scope/x/node_modules/glob',
  'linkedroot': 'root',
  'deep/root': '../root',
  'deeproot': 'deep',
  'badlink/node_modules/foo': 'foo',
  'badlink/node_modules/bar': 'baz',

  'workspace/node_modules/a': '../packages/a',
  'workspace/node_modules/b': '../packages/b',
  'workspace/node_modules/c': '../packages/c',
  'workspace/packages/a/node_modules/b': '../../../packages/b',
  'workspace/packages/a/node_modules/c': '../../../packages/c',
  'workspace/packages/b/node_modules/a': '../../../packages/a',
  'workspace/packages/b/node_modules/c': '../../../packages/c',
  'workspace/packages/c/node_modules/a': '../../../packages/a',
  'workspace/packages/c/node_modules/b': '../../../packages/b',

  'test/fixtures/links-all-over/node_modules/link-outside-nest':
    '../real',
  'test/fixtures/links-all-over/node_modules/link-deep':
    'nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep',
  'test/fixtures/links-all-over/node_modules/link-link': 'link-deep',
  'test/fixtures/links-all-over/node_modules/nest/node_modules/link-in-nest':
    '../../../real',
}

const cwd = resolve(__dirname, '..')

const cleanup = () => Object.keys(symlinks).forEach(s => {
  try {
    unlinkSync(resolve(cwd, 'test/fixtures', s))
  } catch (er) {}
})

if (process.env.NO_CLEANUP !== '1')
  t.teardown(cleanup)

t.test('setup symlinks', function (t) {
  cleanup()

  Object.keys(symlinks).forEach(s => {
    const p = resolve(cwd, 'test/fixtures', s)
    mkdirp(dirname(p))
    symlinkSync(symlinks[s], p, 'dir')
  })

  t.end()
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
  ...(tree.isLink ? {
    target: {
      name: tree.target.name,
      parent: tree.target.parent && tree.target.parent.location
    }
  } : {}),
  ...(tree.inBundle ? { bundled: true } : {}),
  ...(tree.edgesIn.size ? {
    edgesIn: [...tree.edgesIn].map(edge => printEdge(edge, 'in')),
  } : {}),
  ...(tree.edgesOut.size ? {
    edgesOut: [...tree.edgesOut.entries()]
      .map(([name, edge]) => [name, printEdge(edge, 'out')])
      .reduce((set, [name, edge]) => (set[name] = edge, set), {})
  } : {}),
  ...( tree.target || !tree.children.length ? {}
    : { children: tree.children.map(printTree) }),
  __proto__: { constructor: tree.constructor },
})

t.formatSnapshot = tree => format(printTree(tree), {
  style: 'js',
  sort: false
})

roots.forEach(root => {
  const dir = resolve(fixtures, root)
  t.test(root, t => loadActual(dir).then(tree =>
    t.matchSnapshot(tree, 'loaded tree')))
})

t.test('looking outside of cwd', t => {
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  process.chdir('test/fixtures/selflink')
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
    t.ok(d.error, 'Got an error object')
    t.equal(d.error && d.error.code, 'EJSONPARSE')
    t.ok(d, 'Got a tree')
  }))

t.test('missing json does not obscure deeper errors', t =>
  loadActual(resolve(fixtures, 'empty')).then(d => {
    const error = d.error
    t.ok(error, 'Error reading json of top level')
    t.equal(error && error.code, 'ENOENT')
    const childError = d.children.length === 1 && d.children[0].error
    t.ok(childError, 'Error parsing JSON of child node')
    t.equal(childError && childError.code, 'EJSONPARSE')
  }))

t.test('missing folder', t =>
  t.rejects(loadActual(resolve(fixtures, 'does-not-exist')), {
    code: 'ENOENT'
  }))

t.test('missing symlinks', t =>
  loadActual(resolve(fixtures, 'badlink')).then(d => {
    t.is(d.children.length, 2, 'both broken children are included')
    d.children.forEach(child =>
      t.ok(child.error, 'Child node has an error'))
  }))

t.test('realpath gutchecks', t => {
  // the realpath module is tested pretty thoroughly, but
  // while we've got a bunch of symlinks being created, may as well
  // give it a quick integration pass.
  const d = resolve(cwd, 'test/fixtures')
  const realpath = require('../lib/realpath.js')
  Object.keys(symlinks).map(link => t.test(link, t =>
    realpath(
      resolve(d, link),
      new Map(),
      new Map(),
      0
    ).then(
      real => t.equal(real, realpathSync(resolve(d, link))),
      er => t.throws(()=> realpathSync(resolve(d, link)))
    )))
  t.end()
})

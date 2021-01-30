const { resolve } = require('path')

const t = require('tap')
const Arborist = require('../../lib/arborist/index.js')

const registryServer = require('../fixtures/registry-mocks/server.js')
const { registry } = registryServer

const {
  normalizePath,
  printTree,
} = require('../utils.js')

const cwd = normalizePath(process.cwd())
t.cleanSnapshot = s => s.split(cwd).join('{CWD}')
  .split(registry).join('https://registry.npmjs.org/')

t.test('setup server', { bail: true, buffered: false }, registryServer)

const fixture = (t, p) => require('../fixtures/reify-cases/' + p)(t)

const cache = t.testdir()
const pruneTree = (path, opt) =>
  new Arborist({registry, path, cache, ...(opt || {})}).prune(opt)

t.test('prune with actual tree', async t => {
  const path = fixture(t, 'prune-actual')
  const tree = await pruneTree(path)
  const dep = tree.children.get('abbrev')
  t.notOk(dep, 'dep was pruned from tree')
  t.matchSnapshot(printTree(tree))
})

t.test('prune with lockfile', async t => {
  const path = fixture(t, 'prune-lockfile')
  const tree = await pruneTree(path)
  const dep = tree.children.get('abbrev')
  t.notOk(dep, 'dep was pruned from tree')
  t.matchSnapshot(printTree(tree))
})

t.test('prune with actual tree omit dev', async t => {
  const path = fixture(t, 'prune-actual-omit-dev')
  const tree = await pruneTree(path, { omit: ['dev'] })

  const prodDep = tree.children.get('abbrev')
  t.notOk(prodDep, 'missing prod dep was pruned from tree')

  const devDep = tree.children.get('once')
  t.notOk(devDep, 'all listed dev deps pruned from tree')

  t.matchSnapshot(
    require(path + '/package-lock.json'),
    'should keep dev dependencies in package-lock.json'
  )
  t.matchSnapshot(
    printTree(tree),
    'should remove all deps from reified tree'
  )
})

t.test('prune with lockfile omit dev', async t => {
  const path = fixture(t, 'prune-lockfile-omit-dev')
  const tree = await pruneTree(path, { omit: ['dev'] })

  const prodDep = tree.children.get('abbrev')
  t.notOk(prodDep, 'missing prod dep was pruned from tree')

  const devDep = tree.children.get('once')
  t.notOk(devDep, 'all listed dev deps pruned from tree')

  t.matchSnapshot(
    require(path + '/package-lock.json'),
    'should keep dev dependencies in package-lock.json'
  )
  t.matchSnapshot(
    printTree(tree),
    'should remove all deps from reified tree'
  )
})

t.test('prune omit dev with bins', async t => {
  const fs = require('fs')
  const { promisify } = require('util')
  const readdir = promisify(fs.readdir)
  const path = fixture(t, 'prune-dev-bins')

  // should have bin files
  const reifiedBin = resolve(path, 'node_modules/.bin/yes')
  if (process.platform === 'win32')
    t.ok(fs.statSync(reifiedBin + '.cmd').isFile(), 'should have shim')
  else
    t.ok(fs.lstatSync(reifiedBin).isSymbolicLink(), 'should have symlink')

  // PRUNE things
  const tree = await pruneTree(path, { prefix: path, omit: ['dev'] })
  const dirs = await readdir(path + '/node_modules')

  // bindirs are never removed
  // they should remain after prune
  t.same(dirs, ['.bin', '.package-lock.json'], 'should keep bin dir')

  const devDep = tree.children.get('yes')
  t.notOk(devDep, 'all listed dev deps pruned from tree')

  // should also remove ./bin/* files
  const bin = resolve(path, 'node_modules/.bin/yes')
  if (process.platform === 'win32')
    t.throws(() => fs.statSync(bin + '.cmd').isFile(), /ENOENT/, 'should not have shim')
  else
    t.throws(() => fs.lstatSync(bin).isSymbolicLink(), /ENOENT/, 'should not have symlink')
})

t.test('prune do not omit duplicated dependecy in prod and dev', async t => {
  const path = fixture(t, 'prune-dev-dep-duplicate')
  const tree = await pruneTree(path, { omit: ['dev'] })

  const dep = tree.children.get('once')
  t.ok(dep, 'dep should exist')
})

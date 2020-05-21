const t = require('tap')
const _trashList = Symbol.for('trashList')
const Arborist = require('../../lib/arborist/index.js')
const {resolve, dirname} = require('path')
const fs = require('fs')
const fixtures = resolve(__dirname, '../fixtures')

const fixture = (t, p) => t.testdir(require(`${fixtures}/reify-cases/${p}`)(t))

const PORT = 12345 + (+process.env.TAP_CHILD_ID || 0)
t.test('setup explosive server', t => {
  // nothing in this should ever hit the server
  const server = require('http').createServer(() => {
    throw new Error('rebuild should not hit the registry')
  })
  server.listen(PORT, () => {
    t.parent.teardown(() => server.close())
    t.end()
  })
})

const registry = `http://localhost:${PORT}`
const newArb = opt => new Arborist({...opt, registry})

t.test('rebuild bin links for all nodes if no nodes specified', async t => {
  const path = fixture(t, 'dep-installed-without-bin-link')
  const semver = resolve(path, 'node_modules/.bin/semver')
  const mkdirp = resolve(path, 'node_modules/.bin/mkdirp')
  await newArb({path}).rebuild()
  t.equal(fs.statSync(semver).isFile(), true, 'semver bin linked')
  t.equal(fs.statSync(mkdirp).isFile(), true, 'mkdirp bin linked')
})

t.test('rebuild bin links only for specified node', async t => {
  const path = fixture(t, 'dep-installed-without-bin-link')
  const semver = resolve(path, 'node_modules/.bin/semver')
  const mkdirp = resolve(path, 'node_modules/.bin/mkdirp')
  const arb = newArb({ path })
  await arb.loadActual()
  await arb.rebuild({
    nodes: arb.actualTree.inventory.query('name', 'semver'),
  })
  t.equal(fs.statSync(semver).isFile(), true, 'semver bin linked')
  t.throws(() => fs.statSync(mkdirp), 'mkdirp bin not linked')
})

t.test('rebuild no matching nodes', async t => {
  const path = fixture(t, 'dep-installed-without-bin-link')
  const semver = resolve(path, 'node_modules/.bin/semver')
  const mkdirp = resolve(path, 'node_modules/.bin/mkdirp')
  const arb = newArb({ path })
  await arb.rebuild({ nodes: [] })
  t.throws(() => fs.statSync(semver), 'semver bin not linked')
  t.throws(() => fs.statSync(mkdirp), 'mkdirp bin not linked')
})

t.test('rebuild skip bin links', async t => {
  const path = fixture(t, 'dep-installed-without-bin-link')
  const semver = resolve(path, 'node_modules/.bin/semver')
  const mkdirp = resolve(path, 'node_modules/.bin/mkdirp')
  const arb = newArb({ path, binLinks: false })
  await arb.rebuild({ nodes: [] })
  t.throws(() => fs.statSync(semver), 'semver bin not linked')
  t.throws(() => fs.statSync(mkdirp), 'mkdirp bin not linked')
})

t.test('rebuild bundled deps', async t => {
  const path = fixture(t, 'testing-rebuild-bundle-reified')
  const file = resolve(path, 'node_modules/@isaacs/testing-rebuild-bundle-a/node_modules/@isaacs/testing-rebuild-bundle-b/cwd')
  t.throws(() => fs.statSync(file), 'file not there already (gut check)')
  const arb = newArb({path})
  await arb.rebuild()
  t.equal(fs.readFileSync(file, 'utf8'), dirname(file), 'bundle build script run')
})

t.test('rebuild bundled dep if bundling parent on the list', async t => {
  const path = fixture(t, 'testing-rebuild-bundle-reified')
  const file = resolve(path, 'node_modules/@isaacs/testing-rebuild-bundle-a/node_modules/@isaacs/testing-rebuild-bundle-b/cwd')
  t.throws(() => fs.statSync(file), 'file not there already (gut check)')
  const arb = newArb({path})
  const nodes = (await arb.loadActual()).inventory.query('name', '@isaacs/testing-rebuild-bundle-a')
  await arb.rebuild({ nodes })
  t.equal(fs.readFileSync(file, 'utf8'), dirname(file), 'bundle build script run')
})

t.test('do not rebuild bundled dep if rebuildBundle=false', async t => {
  const path = fixture(t, 'testing-rebuild-bundle-reified')
  const file = resolve(path, 'node_modules/@isaacs/testing-rebuild-bundle-a/node_modules/@isaacs/testing-rebuild-bundle-b/cwd')
  t.throws(() => fs.statSync(file), 'file not there already (gut check)')
  const arb = newArb({path, rebuildBundle: false})
  const nodes = (await arb.loadActual()).inventory.query('name', '@isaacs/testing-rebuild-bundle-a')
  await arb.rebuild({ nodes })
  t.throws(() => fs.statSync(file), 'bundle build script not run')
})

t.test('do not run scripts if ignoreScripts=true', async t => {
  const path = fixture(t, 'testing-rebuild-bundle-reified')
  const file = resolve(path, 'node_modules/@isaacs/testing-rebuild-bundle-a/node_modules/@isaacs/testing-rebuild-bundle-b/cwd')
  t.throws(() => fs.statSync(file), 'file not there already (gut check)')
  const arb = newArb({path, ignoreScripts: true})
  await arb.rebuild()
  t.throws(() => fs.statSync(file), 'bundle build script not run')
})

t.test('do nothing if ignoreScripts=true and binLinks=false', async t => {
  const path = fixture(t, 'testing-rebuild-bundle-reified')
  const file = resolve(path, 'node_modules/@isaacs/testing-rebuild-bundle-a/node_modules/@isaacs/testing-rebuild-bundle-b/cwd')
  t.throws(() => fs.statSync(file), 'file not there already (gut check)')
  const arb = newArb({path, ignoreScripts: true, binLinks: false})
  await arb.rebuild()
  t.throws(() => fs.statSync(file), 'bundle build script not run')
})

t.test('do not link bins for nodes on trash list', async t => {
  const path = fixture(t, 'dep-installed-without-bin-link')
  const semver = resolve(path, 'node_modules/.bin/semver')
  const mkdirp = resolve(path, 'node_modules/.bin/mkdirp')
  const arb = newArb({ path })
  await arb.loadActual()
  arb[_trashList].add(arb.actualTree.children.get('mkdirp').path)
  // just set this so it calls the fn, the actual test of this function
  // is in the reify rollback tests.
  await arb.rebuild({ handleOptionalFailure: true })
  t.equal(fs.statSync(semver).isFile(), true, 'semver bin linked')
  t.throws(() => fs.statSync(mkdirp), 'mkdirp bin not linked')
})

t.test('do not run scripts for nodes on trash list', async t => {
  const path = fixture(t, 'testing-rebuild-bundle-reified')
  const loc = 'node_modules/@isaacs/testing-rebuild-bundle-a/node_modules/@isaacs/testing-rebuild-bundle-b'
  const file = resolve(path, `${loc}/cwd`)
  t.throws(() => fs.statSync(file), 'file not there already (gut check)')
  const arb = newArb({path})
  await arb.loadActual()
  arb[_trashList].add(arb.actualTree.inventory.get(loc).path)
  await arb.rebuild()
  t.throws(() => fs.statSync(file), 'bundle build script not run')
})

t.test('dont blow up if package.json is borked', async t => {
  const path = fixture(t, 'testing-rebuild-bundle-reified')
  const loc = 'node_modules/@isaacs/testing-rebuild-bundle-a/node_modules/@isaacs/testing-rebuild-bundle-b'
  const file = resolve(path, loc, 'cwd')
  fs.unlinkSync(resolve(path, loc, 'package.json'))
  t.throws(() => fs.statSync(file), 'file not there already (gut check)')
  const arb = newArb({path})
  await arb.rebuild()
  t.throws(() => fs.statSync(file), 'bundle build script not run')
})

t.test('verify dep flags in script environments', async t => {
  const path = fixture(t, 'testing-rebuild-script-env-flags')

  const expect = {
    devdep: ['npm_package_dev'],
    optdep: ['npm_package_optional'],
    'opt-and-dev': ['npm_package_dev', 'npm_package_optional'],
    devopt: ['npm_package_dev_optional'],
  }

  const arb = newArb({path})
  // just set this so it calls the fn, the actual test of this function
  // is in the reify rollback tests.
  await arb.rebuild({ handleOptionalFailure: true })
  for (const [pkg, flags] of Object.entries(expect)) {
    const file = resolve(path, 'node_modules', pkg, 'env')
    t.strictSame(flags, fs.readFileSync(file, 'utf8').split('\n'), pkg)
  }
})

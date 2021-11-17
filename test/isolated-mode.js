const tap = require('tap')
const fs = require('fs')
const path = require('path')
const Arborist = require('../lib/arborist')

tap.test('most simple happy scenario', async t => {
  const package = { name: 'foo', dependencies: { 'which': '2.0.2' } }

  /*
    *
    * Dependency graph:
    * 
    * foo -> which -> isexe
    *
    */

  const cwd = t.testdir({
    'package.json': JSON.stringify(package)
  })

  const arborist = new Arborist({ path: cwd })
  await arborist.reify({ isolated: true })

  const requireChain = setupRequire(cwd)

  // Only direct dependencies are accessible by the node-module resolution algorithm
  t.ok(requireChain('which'), 'repo should be able to require direct dependencies')
  t.notOk(requireChain('isexe'), 'repo should not be able to require transitive dependencies')

  // Transitive dependencies are accessible from their parents
  t.ok(requireChain('which', 'isexe'), 'external dependencies should be able to require their own dependencies')

  // Dependencies cannot require their parents
  t.notOk(requireChain('which', 'isexe', 'which'), 'dependencies are not able to require their parents')

  // Depencies can require themselves
  t.ok(requireChain('which', 'which'), 'which can require itself')
  t.ok(requireChain('which', 'isexe', 'isexe'), 'isexe can require itself')
})

tap.test('simple peer dependencies scenarios', async t => {
  const package = { name: 'foo', dependencies: { 'tsutils': '3.21.0', 'typescript': '4.4.4' } }

  /*
    * Dependencies:
    *
    * foo -> tsutils
    *        tsutils -> typescript (peer dep)
    *        tsutils -> tslib
    * foo -> typescript
    *
    */

  const cwd = t.testdir({
    'package.json': JSON.stringify(package)
  })

  const arborist = new Arborist({ path: cwd })
  await arborist.reify({ isolated: true })

  const requireChain = setupRequire(cwd)

  // Only direct dependencies are accessible by the node-module resolution algorithm
  t.ok(requireChain('typescript'), 'repo should be able to require direct dependency to typescript')
  t.ok(requireChain('tsutils'), 'repo should be able to require direct dependency to tsutils')
  t.notOk(requireChain('tslib'), 'repo should not be able to require transitive dependency to tslib')

  // typescript can only require its direct dependencies and root dependencies
  t.ok(requireChain('typescript', 'typescript'), 'typescript can require itself')
  t.ok(requireChain('typescript', 'tsutils'), 'typescript should be able to require tsutils because it is a root dependency')
  t.notOk(requireChain('typescript', 'tslib'), 'typescript should not be able to require tslib because it is neither a dependency of itself or of the root')

  // tsutils can resolve its deps and dependencies of the root
  t.ok(requireChain('tsutils', 'typescript'), 'tsutils should be able to resolve its peer dependency to typescript')
  t.ok(requireChain('tsutils', 'tslib'), 'tsutils should be able to resolve its dependency to tslib')
  t.ok(requireChain('tsutils', 'tsutils'), 'tsutils should be able to resolve itself')

  // tslib can resolve its deps and dependencies of the root
  t.ok(requireChain('tsutils', 'tslib', 'tslib'), 'tslib can require itself')
  t.ok(requireChain('tsutils', 'tslib', 'typescript'), 'tslib can resolve typescript because it is a root dependency')
  t.ok(requireChain('tsutils', 'tslib', 'tsutils'), 'tslib should be able to resolve tsutils because it is a root dependency')

  // The typescript used by the root and by tsutils is the same because it is a peer dependency
  t.same(requireChain('typescript'), requireChain('tsutils', 'typescript'), 'typescript used by the root and by tsutils should be the same because it is a peer dependency')
})


tap.test('lock file is same in hoisted and in isolatedMode', async t => {
  const package = { name: 'foo', dependencies: { 'which': '2.0.2' } }

  const hoistedModeDir = t.testdir({
    'package.json': JSON.stringify(package)
  })
  const isolatedModeDir = t.testdir({
    'package.json': JSON.stringify(package)
  })
  const arboristHoisted = new Arborist({ path: hoistedModeDir })
  const arboristIsolated = new Arborist({ path: isolatedModeDir })

  await Promise.all([
    arboristHoisted.reify({ isolated: false }),
    arboristIsolated.reify({ isolated: true }),
  ])

  const [hoistedModeLockFile, isolatedModeLockFile] = await Promise.all([
    fs.promises.readFile(path.join(hoistedModeDir, 'package-lock.json'), { encoding: 'utf8' }),
    fs.promises.readFile(path.join(isolatedModeDir, 'package-lock.json'), { encoding: 'utf8' }),
  ])

  t.same(hoistedModeLockFile, isolatedModeLockFile, 'hoited mode and isolated mode produce the same lockfile')
})

tap.test('basic workspaces setup', async t => {
  const projectDir = t.testdir({
    'package.json': JSON.stringify({
      name: 'foo',
      workspaces: ['bar', 'baz', 'cat', 'fish', 'catfish'],
      dependencies: {
        'bar': '*'
      }
    }),
    bar: {
      'package.json': JSON.stringify({
        name: 'bar',
        dependencies: {
          which: '2.0.2'
        }
      })
    },
    baz: {
      'package.json': JSON.stringify({
        name: 'baz',
        dependencies: {
          bar: '*',
          which: '2.0.2'
        }
      }),
    },
    cat: {
      'package.json': JSON.stringify({
        name: 'cat',
        dependencies: {
          which: '2.0.1'
        }
      })
    },
    fish: {
      'package.json': JSON.stringify({
        name: 'fish',
        dependencies: {
          cat: '*',
          which: '2.0.1'
        }
      })
    },
    catfish: {
      'package.json': JSON.stringify({
        name: 'catfish'
      })
    }
  })

  const arborist = new Arborist({ path: projectDir })
  await arborist.reify({ isolated: true })

  const requireChain = setupRequire(projectDir)

  // TODO: maybe come up with a less verbose / more generic way to specific the assert matrix

  // Only the declared workspace relationships are resolvable
  // TODO: are workspaces considered declared dependencies of the root? For now we will assume that the answser is no.
  t.ok(requireChain('bar'), 'repo should be able to require direct dependency to workspace bar')
  t.notOk(requireChain('baz'), 'repo should not be able to require workspace baz because it has no declared dependency on it')
  t.notOk(requireChain('cat'), 'repo should not be able to require workspace cat because it has no declared dependency on it')
  t.notOk(requireChain('fish'), 'repo should not be able to require workspace fish because it has no declared dependency on it')
  t.notOk(requireChain('catfish'), 'repo should not be able to require workspace catfish because it has no declared dependency on it')
  t.notOk(requireChain('which'), 'repo should not be able to require which because it has no declared dependency on it')
  t.notOk(requireChain('isexe'), 'repo should not be able to require isexe because it has no declared dependency on it')

  // workspace bar dependencies
  // TODO: should workspaces always be able to resolve themselves or only when they are dependencies of the root? For now will will assume that the answer is the latter.
  t.ok(requireChain('bar', 'bar'), 'workspace bar can require itself because it is a root dependency')
  t.ok(requireChain('bar', 'baz'), 'workspace bar can require workspace baz because it has a dependency on it')
  t.notOk(requireChain('bar', 'cat'), 'workspace bar cannot require workspace cat because neither bar nor the root has a dependency on it')
  t.notOk(requireChain('bar', 'fish'), 'workspace bar cannot require workspace fish because neither bar nor the root has a dependency on it')
  t.notOk(requireChain('bar', 'catfish'), 'workspace bar cannot require workspace fish because neither bar nor the root has a dependency on it')
  t.ok(requireChain('bar', 'which'), 'workspace bar can require which because it has a dependency on it')
  t.notOk(requireChain('bar', 'isexe'), 'workspace bar cannot require isexe because it only has a transitive dependency on it')

  // workspace baz dependencies
  // TODO: should workspaces always be able to resolve themselves or only when they are dependencies of the root? For now will will assume that the answer is the latter.
  const requireChainFromBaz = setupRequire(path.join(projectDir, 'baz'))
  t.ok(requireChainFromBaz('bar'), 'workspace baz can require workspace bar because it is a root dependency')
  t.notOk(requireChainFromBaz('baz'), 'workspace bar cannot require itself because it is not a root dependency')
  t.notOk(requireChainFromBaz('cat'), 'workspace baz cannot require workspace cat because neither baz nor the root has a dependency on it')
  t.notOk(requireChainFromBaz('fish'), 'workspace baz cannot require workspace fish because neither baz nor the root has a dependency on it')
  t.notOk(requireChainFromBaz('catfish'), 'workspace baz cannot require workspace fish because neither baz nor the root has a dependency on it')
  t.ok(requireChainFromBaz('which'), 'workspace baz can require which because it has a dependency on it')
  t.notOk(requireChainFromBaz('isexe'), 'workspace baz cannot require isexe because it only has a transitive dependency on it')

  // workspace cat dependencies
  const requireChainFromCat = setupRequire(path.join(projectDir, 'cat'))
  t.ok(requireChainFromCat('bar'), 'workspace cat can require workspace bar because it is a root dependency')
  t.notOk(requireChainFromCat('baz'), 'workspace bar cannot require workspace baz because neither cat nor the root has a dependency on it')
  t.notOk(requireChainFromCat('cat'), 'workspace cat cannot require itself because it is not a root dependency')
  t.notOk(requireChainFromCat('fish'), 'workspace cat cannot require workspace fish because neither cat nor the root has a dependency on it')
  t.notOk(requireChainFromCat('catfish'), 'workspace cat cannot require workspace fish because neither cat nor the root has a dependency on it')
  t.ok(requireChainFromCat('which'), 'workspace cat can require which because it has a dependency on it')
  t.notOk(requireChainFromCat('isexe'), 'workspace cat cannot require isexe because it only has a transitive dependency on it')

  // workspace fish dependencies
  const requireChainFromFish = setupRequire(path.join(projectDir, 'fish'))
  t.ok(requireChainFromFish('bar'), 'workspace fish can require workspace bar because it is a root dependency')
  t.notOk(requireChainFromFish('baz'), 'workspace fish cannot require workspace baz because neither fish nor the root has a dependency on it')
  t.notOk(requireChainFromFish('cat'), 'workspace fish cannot require workspace cat because neither fish nor the root has a dependency on it')
  t.notOk(requireChainFromFish('fish'), 'workspace fish cannot require itself because it is not a root dependency')
  t.notOk(requireChainFromFish('catfish'), 'workspace fish cannot require workspace fish because neither fish nor the root has a dependency on it')
  t.ok(requireChainFromFish('which'), 'workspace fish can require which because it has a dependency on it')
  t.notOk(requireChainFromFish('isexe'), 'workspace fish cannot require isexe because it only has a transitive dependency on it')

  // workspace catfish dependencies
  const requireChainFromCatfish = setupRequire(path.join(projectDir, 'catfish'))
  t.ok(requireChainFromCatfish('bar'), 'workspace catfish can require workspace bar because it is a root dependency')
  t.notOk(requireChainFromCatfish('baz'), 'workspace catfish cannot require workspace baz because neither catfish nor the root has a dependency on it')
  t.notOk(requireChainFromCatfish('cat'), 'workspace catfish cannot require workspace cat because neither catfish nor the root has a dependency on it')
  t.notOk(requireChainFromCatfish('fish'), 'workspace catfish cannot require itself because neither catfish nor the root has a dependency on it')
  t.notOk(requireChainFromCatfish('catfish'), 'workspace catfish cannot require itself because it is not a root dependency')
  t.notOk(requireChainFromCatfish('which'), 'workspace catfish cannot require which because it does not have a dependency on it')
  t.notOk(requireChainFromCatfish('isexe'), 'workspace catfish cannot require isexe because it only has a transitive dependency on it')

  // versions of which are correctly shared
  t.same(requireChain('bar', 'which'), requireChainFromBaz('which'), 'bar and baz resolve to the same instance of which')
  t.same(requireChainFromCat('which'), requireChainFromFish('which'), 'cat and fish resolve to the same instance of which')
  t.noSame(requireChain('bar', 'which'), requireChainFromFish('which'), 'bar and fish resolve to the a different instance of which')

  // both versions of which can require isexe
  t.ok(requireChain('bar', 'which', 'isexe'),'bar\'s version of which can require its dependency isexe')
  t.ok(requireChainFromCat('which', 'isexe'),'cat\'s version of which can require its dependency isexe')
  t.same(requireChain('bar', 'which', 'isexe'), requireChainFromCat('which', 'isexe'), 'both versions of which share the same instance of their dependency isexe')
})

function setupRequire(cwd) {
  return function requireChain(...chain) {
    return chain.reduce((path, name) => {
      if (path === undefined) {
        return undefined
      }
      try {
        return require.resolve(name, { paths: [ path ] })
      } catch (_) {
        return undefined
      }
    }, cwd)
  }
}

/*
  t.doesNotThrow(() => require.resolve('ws', { paths: [ bufferutilPath ] }), 'bufferutil should be able to require its parent because it is a root dependency')
  t.throws(() => require.resolve('utf-8-validate', { paths: [ bufferutilPath ] }), 'bufferutil should not be able to require its sibling')
*/
/*
  * TO TEST:
  * - chain of peer dependencies
  * - dependency graph with two different versions
  * - failed optional dependency
  * - shinkwrapped dependency
  * - bundled dependencies
  * - deduplication that happen in isolated mode but not in hoisted
  * - circular dependencies
  * - circular peer dependencies
  * - peer dependencies on the parent
  * - maybe some more convoluted cases copied from other existing tests
  * - case that result in a ERESOLVE error
  * - repos that are already partially installed (the case of `npm install --save-dev react`)
  * - the versions resolved in isolated mode are the same that would have been resolved in hoisting mode
  *
  */

const tap = require('tap')
const fs = require('fs')
const path = require('path')
const Arborist = require('../lib/arborist')
const os = require('os')
const { getRepo } = require('./nock')

function getAllPackages(resolvedGraph) {
  return [resolvedGraph, ...(resolvedGraph.dependencies?.map(d => getAllPackages(d)) || []).reduce((a,n) => ([...a, ...n]), [])]
}

function withRequireChain(resolvedGraph) {
  return {
    ...resolvedGraph,
    chain: [],
    dependencies: resolvedGraph.dependencies?.map(d => 
      withRequireChainRecursive(d, []))
  } 
}
function withRequireChainRecursive(resolvedGraph, chain) {
  const newChain = [...chain, resolvedGraph.name]
  return {
    ...resolvedGraph,
    chain: newChain,
    dependencies: resolvedGraph.dependencies?.map(d => 
      withRequireChainRecursive(d, newChain))
  } 
}



const rule1 = {
  description: 'Any package (except local packages) should be able to require itself.',
  apply: (t, dir, resolvedGraph, alreadyAsserted) => {
    const allPackages = getAllPackages(withRequireChain(resolvedGraph))
    allPackages.filter(p => p.chain.length !== 0).forEach(p => {
      const resolveChain = [...p.chain, p.name]
      const key = resolveChain.join(' => ')
      if (alreadyAsserted.has(key)) { return }
      alreadyAsserted.add(key)
      t.ok(setupRequire(dir)(...resolveChain),
        `Rule 1: Package "${p.chain.join(" => ")}" should have access to itself using its own name.`)

    })
  }
}

const rule2 = {
  description: 'Packages can require their resolved dependencies.',
  apply: (t, dir, resolvedGraph, alreadyAsserted) => {
    const allPackages = getAllPackages(withRequireChain(resolvedGraph))
    allPackages.forEach(p => {
      (p.dependencies || []).map(d => d.name).forEach(n => {
        const resolveChain = [...p.chain, n]
        const key = resolveChain.join(' => ')
        if (alreadyAsserted.has(key)) { return }
        alreadyAsserted.add(key)
        t.ok(setupRequire(dir)(...resolveChain),
          `Rule 2: ${p.chain.length === 0 ? "The root" : `Package "${p.chain.join(" => ")}"`} should have access to "${n}" because it has it as a resolved dependency.`)
      })
    })
  }
}

const rule3 = {
  description: 'Any package can require a package installed at the root.',
  apply: (t, dir, resolvedGraph, alreadyAsserted) => {
    const rootDependencies = resolvedGraph.dependencies.map(o => o.name)
    const allPackages = getAllPackages(withRequireChain(resolvedGraph))


    allPackages.forEach(p => {
      rootDependencies.forEach(d => {
        const resolveChain = [...p.chain, d]
        const key = resolveChain.join(' => ')
        if (alreadyAsserted.has(key)) { return }
        alreadyAsserted.add(key)
        t.ok(setupRequire(dir)(...resolveChain),
          `Rule 3: ${p.chain.length === 0 ? "The root" : `Package "${p.chain.join(" => ")}"`} should have access to "${d}" because it is a root dependency.`)
      })
    })
  }
}

const rule4 = {
  description: 'Packages cannot require packages that are not in their dependencies, not root dependencies or not themselves.',
  apply: (t, dir, resolvedGraph, alreadyAsserted) => {
    const allPackages = getAllPackages(withRequireChain(resolvedGraph))
    const allPackageNames = allPackages.filter(p => p.chain.length !== 0).map(p => p.name)
    const rootDependenciesNames = resolvedGraph.dependencies.map(o => o.name)
    allPackages.forEach(p => {
      const resolvedDependencyNames = (p.dependencies || []).map(d => d.name)
      allPackageNames.filter(n => !rootDependenciesNames.includes(n))
        .filter(n => !resolvedDependencyNames.includes(n))
        .filter(n => n !== p.name)
        .forEach(n => {
          const resolveChain = [...p.chain, n]
          const key = resolveChain.join(' => ')
          if (alreadyAsserted.has(key)) { return }
          alreadyAsserted.add(key)
          t.notOk(setupRequire(dir)(...resolveChain),
            `Rule 4: ${p.chain.length === 0 ? "The root" : `Package "${p.chain.join(" => ")}"`} should not have access to "${n}" because it not a root dependency, not in its resolved dependencies and not itself.`)
        })
    })
  }
}

tap.only('most simple happy scenario', async t => {
  const package = { name: 'foo', dependencies: { 'which': '2.0.2' } }

  /*
    *
    * Dependency graph:
    * 
    * foo -> which -> isexe
    *
    */

  const graph = {
    registry: [
      { name: 'which', version: '1.0.0', dependencies: { isexe: '^1.0.0' } },
      { name: 'isexe', version: '1.0.0' }
    ] ,
    root: {
      name: 'foo', version: '1.2.3', dependencies: { which: '1.0.0' }
    }
  }

  const resolved = {
    name: 'foo',
    version: '1.2.3',
    dependencies: [
      {
        name: 'which',
        version: '1.0.0',
        dependencies: [{
            name: 'isexe',
            version: '1.0.0'
          }]
      }
    ]
  }
  
  const { dir, registry } = await getRepo(graph)

  // Note that we override this cache to prevent interference from other tests
  const cache = fs.mkdtempSync(`${os.tmpdir}/test-`)
  const arborist = new Arborist({ path: dir, registry, packumentCache: new Map(), cache  })
  await arborist.reify({ isolated: true })

  const asserted = new Set()
  rule1.apply(t, dir, resolved, asserted)
  rule2.apply(t, dir, resolved, asserted)
  rule3.apply(t, dir, resolved, asserted)
  rule4.apply(t, dir, resolved, asserted)
})

tap.only('simple peer dependencies scenarios', async t => {
  /*
    * Dependencies:
    *
    * foo -> tsutils
    *        tsutils -> typescript (peer dep)
    * foo -> typescript
    *
    */

  const graph = {
    registry: [
        { name: 'tsutils', version: '1.0.0', dependencies: {}, peerDependencies: { typescript: "*" } },
        { name: 'typescript', version: '1.0.0', dependencies: { baz: "*" } },
        { name: 'baz', version: '2.0.0'},
      ] ,
    root: {
      name: 'foo', version: '1.2.3', dependencies: { tsutils: '1.0.0', typescript: '1.0.0' }
    }
  }

  const resolved = {
    name: 'foo',
    version: '1.2.3',
    dependencies: [
      {
        name: 'tsutils',
        version: '1.0.0',
        dependencies: [{
          name: 'typescript',
          version: '1.0.0',
          dependencies: [{
            name: 'baz',
            version: '2.0.0',
          }]
        }]
      },
      {
        name: 'typescript',
        version: '1.0.0',
        dependencies: [{
          name: 'baz',
          version: '2.0.0',
        }]
      }
    ]
  }

  const { dir, registry } = await getRepo(graph)

  // Note that we override this cache to prevent interference from other tests
  const cache = fs.mkdtempSync(`${os.tmpdir}/test-`)
  const arborist = new Arborist({ path: dir, registry, packumentCache: new Map(), cache  })

  await arborist.reify({ isolated: true })

  const asserted = new Set()
  rule1.apply(t, dir, resolved, asserted)
  rule2.apply(t, dir, resolved, asserted)
  rule3.apply(t, dir, resolved, asserted)
  rule4.apply(t, dir, resolved, asserted)
  const requireChain = setupRequire(dir)

  /*
  // Only direct dependencies are accessible by the node-module resolution algorithm
  t.ok(requireChain('typescript'), 'repo should be able to require direct dependency to typescript')
  t.ok(requireChain('tsutils'), 'repo should be able to require direct dependency to tsutils')

  // typescript can only require its direct dependencies and root dependencies
  t.ok(requireChain('typescript', 'typescript'), 'typescript can require itself')
  t.ok(requireChain('typescript', 'tsutils'), 'typescript should be able to require tsutils because it is a root dependency')

  // tsutils can resolve its deps and dependencies of the root
  t.ok(requireChain('tsutils', 'typescript'), 'tsutils should be able to resolve its peer dependency to typescript')
  t.ok(requireChain('tsutils', 'tsutils'), 'tsutils should be able to resolve itself')

  // The typescript used by the root and by tsutils is the same because it is a peer dependency
  t.same(requireChain('typescript'), requireChain('tsutils', 'typescript'), 'typescript used by the root and by tsutils should be the same because it is a peer dependency')
  */
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
      'index.js': 'console.log(\'okay\')',
      'package.json': JSON.stringify({
        name: 'bar',
        dependencies: {
          which: '2.0.2'
        }
      })
    },
    baz: {
      'index.js': 'console.log(\'okay\')',
      'package.json': JSON.stringify({
        name: 'baz',
        dependencies: {
          bar: '*',
          which: '2.0.2'
        }
      }),
    },
    cat: {
      'index.js': 'console.log(\'okay\')',
      'package.json': JSON.stringify({
        name: 'cat',
        dependencies: {
          which: '2.0.1'
        }
      })
    },
    fish: {
      'index.js': 'console.log(\'okay\')',
      'package.json': JSON.stringify({
        name: 'fish',
        dependencies: {
          cat: '*',
          which: '2.0.1'
        }
      })
    },
    catfish: {
      'index.js': 'console.log(\'okay\')',
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
  t.notSame(requireChain('bar', 'which'), requireChainFromFish('which'), 'bar and fish resolve to the a different instance of which')

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

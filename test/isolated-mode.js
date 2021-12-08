const tap = require('tap')
const fs = require('fs')
const path = require('path')
const Arborist = require('../lib/arborist')
const os = require('os')
const { getRepo } = require('./nock')

/**
  * The testing framework here is work in progress, in particular it does not have nice ergonomics.
  * The syntactic suggar for this framework will be introduced over time as we add more features.
  *
  * The framework has two parts:
  * - Mocking: The tool generates a test repo based on a declarative list of packages.
  * - Asserting: Some generic rules are defined which assert a particular contract of a resolved dependency graph.
  *     For each test we declaratively define the expected resolved dependency graph and apply all the rules to it.
  *     This validates that arborist produced the expected dependency graph and respect all the contracts set by the rules.
  *
  * The automatic assertions aims to make new tests easy.
  * A rule needs to be written only once and can be asserted against many graphs cheaply.
  * The only part that needs to be produced by hand is the conversion from the list of packages to a resolved dependency graph.
  * Automating this part would mean reimplementing the full resolution algorithm for the tests, this would be error prone.
  * Manually defining declaratively the input and the output of arborist is what gives us confidence that the tests do what
  * we want.
  *
  **/


const rule1 = {
  description: 'Any package (except local packages) should be able to require itself.',
  apply: (t, dir, resolvedGraph, alreadyAsserted) => {
    const allPackages = getAllPackages(withRequireChain(resolvedGraph.root))
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
    const allPackages = getAllPackages(withRequireChain(resolvedGraph.root))
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
    const rootDependencies = resolvedGraph.root.dependencies.map(o => o.name)
    const allPackages = getAllPackages(withRequireChain(resolvedGraph.root))


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
    const allPackages = getAllPackages(withRequireChain(resolvedGraph.root))
    const allPackageNames = allPackages.filter(p => p.chain.length !== 0).map(p => p.name)
    const rootDependenciesNames = resolvedGraph.root.dependencies.map(o => o.name)
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

const rule5 = {
  description: 'Peer dependencies should be resolved to same instance as parents',
  apply: (t, dir, resolvedGraph, alreadyAsserted) => {
    const allPackages = getAllPackages(withRequireChain(resolvedGraph))
    allPackages.filter(p => p.peer)
      .forEach(p => {
        const chain = p.chain
        const parentChain = chain.slice(0, -2).concat([p.name])
        t.same(setupRequire(dir)(...parentChain), setupRequire(dir)(...chain),
          `Rule 5: Package "${chain.slice(0, -1).join(' => ')}" should get the same instance of "${p.name}" as its parent`)
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

  // Input of arborist
  const graph = {
    registry: [
      { name: 'which', version: '1.0.0', dependencies: { isexe: '^1.0.0' } },
      { name: 'isexe', version: '1.0.0' }
    ] ,
    root: {
      name: 'foo', version: '1.2.3', dependencies: { which: '1.0.0' }
    }
  }

  // expected output
  const resolved = {
    root: {
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
    *                   typescript -> baz
    * foo -> typescript
    *        typescript -> baz
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
    root: 
    {
      name: 'foo',
      version: '1.2.3',
      dependencies: [
        {
          name: 'tsutils',
          version: '1.0.0',
          dependencies: [{
            name: 'typescript',
            version: '1.0.0',
            peer: true,
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
  rule5.apply(t, dir, resolved, asserted)
})


tap.only('Lock file is same in hoisted and in isolated mode', async t => {
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

tap.only('Basic workspaces setup', async t => {
  const graph = {
    registry: [
        { name: 'which', version: '1.0.0', dependencies: { isexe: '^1.0.0' } },
        { name: 'which', version: '2.0.0', dependencies: { isexe: '^1.0.0' } },
        { name: 'isexe', version: '1.0.0' }
      ] ,
    root: {
      name: 'dog', version: '1.2.3', dependencies: { bar: '*' }
    },
    // todo: make getrepo support workspaced
    workspaces: [
      { name: 'bar', version: '1.0.0', dependencies: { which: '2.0.0' } },
      { name: 'baz', version: '1.0.0', dependencies: { which: '2.0.0', bar: "*" } },
      { name: 'cat', version: '1.0.0', dependencies: { which: '1.0.0' } },
      { name: 'fish', version: '1.0.0', dependencies: { which: '1.0.0', cat: "*" } },
      { name: 'catfish', version: '1.0.0' },
    ]
  }

  // todo: make rules understand workspaces
  // todo: the resolved graph is verbose, maybe we have a simpler textual representation, maybe we could generate these as snapshots
  const resolved = {
    root: {
      name: 'dog',
      version: '1.2.3',
      dependencies: [{
        name: 'bar',
        version: '1.0.0',
        workspace: true,
        dependencies: [{
          name: 'which', version: '2.0.0', dependencies: [{ name: 'isexe', version: '1.0.0' }]
        }]
      }]
    },
    workspaces: [{
      name: 'bar',
      version: '1.0.0',
      workspace: true,
      dependencies: [{
        name: 'which', version: '2.0.0', dependencies: [{ name: 'isexe', version: '1.0.0' }]
      }]
    },{
      name: 'baz',
      version: '1.0.0',
      workspace: true,
      dependencies: [{
        name: 'bar',
        version: '1.0.0',
        workspace: true,
        dependencies: [{
          name: 'which', version: '2.0.0', dependencies: [{ name: 'isexe', version: '1.0.0' }]
        }]
      },{
        name: 'which', version: '2.0.0', dependencies: [{ name: 'isexe', version: '1.0.0' }]
      }]
    },{
      name: 'cat',
      version: '1.0.0',
      workspace: true,
      dependencies: [{
        name: 'which', version: '1.0.0', dependencies: [{ name: 'isexe', version: '1.0.0' }]
      }]
    },{
      name: 'fish',
      version: '1.0.0',
      workspace: true,
      dependencies: [{
        name: 'cat',
        version: '1.0.0',
        workspace: true,
        dependencies: [{
          name: 'which', version: '1.0.0', dependencies: [{ name: 'isexe', version: '1.0.0' }]
        }]
      },{
        name: 'which', version: '1.0.0', dependencies: [{ name: 'isexe', version: '1.0.0' }]
      }]
    },{
      name: 'catfish',
      version: '1.0.0',
      workspace: true
    }]
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


  /*
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
    */
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

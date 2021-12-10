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
  description: 'Any package (except root package and workspace) should be able to require itself.',
  apply: (t, dir, resolvedGraph, alreadyAsserted) => {
    const graph = parseGraph(resolvedGraph)
    const allPackages = getAllPackages(withRequireChain(graph))
    allPackages.filter(p => p.chain.length !== 0 && !p.workspace).forEach(p => {
      const resolveChain = [...p.chain, p.name]
      const key = p.initialDir + ' => ' + resolveChain.join(' => ')
      if (alreadyAsserted.has(key)) { return }
      alreadyAsserted.add(key)
      t.ok(setupRequire(path.join(dir, p.initialDir))(...resolveChain),
        `Rule 1: Package "${[p.initialDir.replace('packages/',''), ...p.chain].join(' => ')}" should have access to itself using its own name.`)

    })
  }
}

const rule2 = {
  description: 'Packages can require their resolved dependencies.',
  apply: (t, dir, resolvedGraph, alreadyAsserted) => {
    const graph = parseGraph(resolvedGraph)
    const allPackages = getAllPackages(withRequireChain(graph))
    allPackages.forEach(p => {
      (p.dependencies || []).map(d => d.name).forEach(n => {
        const resolveChain = [...p.chain, n]
        const key = p.initialDir + ' => ' + resolveChain.join(' => ')
        if (alreadyAsserted.has(key)) { return }
        alreadyAsserted.add(key)
        t.ok(path.join(dir, p.initialDir),
          `Rule 2: ${p.chain.length === 0 && p.initialDir === '.' ? "The root" : `Package "${[p.initialDir.replace('packages/',''), ...p.chain].join(' => ')}"`} should have access to "${n}" because it has it as a resolved dependency.`)
      })
    })
  }
}

const rule3 = {
  description: 'Any package can require a package installed at the root.',
  apply: (t, dir, resolvedGraph, alreadyAsserted) => {
    const graph = parseGraph(resolvedGraph)
    const rootDependencies = graph.root.dependencies.map(o => o.name)
    const allPackages = getAllPackages(withRequireChain(graph))


    allPackages.forEach(p => {
      rootDependencies.forEach(d => {
        const resolveChain = [...p.chain, d]
        const key = p.initialDir + ' => ' + resolveChain.join(' => ')
        if (alreadyAsserted.has(key)) { return }
        alreadyAsserted.add(key)
        t.ok(path.join(dir, p.initialDir),
          `Rule 3: ${p.chain.length === 0 && p.initialDir === '.' ? "The root" : `Package "${[p.initialDir.replace('packages/',''), ...p.chain].join(" => ")}"`} should have access to "${d}" because it is a root dependency.`)
      })
    })
  }
}

const rule4 = {
  description: 'Packages cannot require packages that are not in their dependencies, not root dependencies or not themselves.',
  apply: (t, dir, resolvedGraph, alreadyAsserted) => {
    const graph = parseGraph(resolvedGraph)
    const allPackages = getAllPackages(withRequireChain(graph))
    const allPackageNames = allPackages.filter(p => p.chain.length !== 0 || p.initialDir !== '.').map(p => p.name)
    const rootDependenciesNames = graph.root.dependencies.map(o => o.name)
    allPackages.forEach(p => {
      const resolvedDependencyNames = (p.dependencies || []).map(d => d.name)
      allPackageNames.filter(n => !rootDependenciesNames.includes(n))
        .filter(n => !resolvedDependencyNames.includes(n))
        .filter(n => n !== p.name)
        .forEach(n => {
          const resolveChain = [...p.chain, n]
          const key = p.initialDir + ' => ' + resolveChain.join(' => ')
          if (alreadyAsserted.has(key)) { return }
          alreadyAsserted.add(key)
          t.notOk(path.join(dir, p.initialDir),
            `Rule 4: ${p.chain.length === 0 && p.initialDir === '.' ? "The root" : `Package "${[p.initialDir.replace('packages/',''), ...p.chain].join(" => ")}"`} should not have access to "${n}" because it not a root dependency, not in its resolved dependencies and not itself.`)
        })
    })
  }
}

const rule5 = {
  description: 'Peer dependencies should be resolved to same instance as parents',
  apply: (t, dir, resolvedGraph, alreadyAsserted) => {
    const graph = parseGraph(resolvedGraph)
    const allPackages = getAllPackages(withRequireChain(graph))
    allPackages.filter(p => p.peer)
      .forEach(p => {
        const chain = p.chain
        const parentChain = chain.slice(0, -2).concat([p.name])
        t.same(setupRequire(path.join(dir, p.initialDir))(...parentChain), setupRequire(path.join(dir, p.initialDir))(...chain),
          `Rule 5: Package "${[p.initialDir.replace('packages/',''), ...chain.slice(0, -1)].join(' => ')}" should get the same instance of "${p.name}" as its parent`)
      })
  }
}

const rule6 = {
  description: 'Packages with the same name and same version are installed at the same place on disk',
  apply: (t, dir, resolvedGraph) => {
    const graph = parseGraph(resolvedGraph)
    const allPackages = getAllPackages(withRequireChain(graph))
    const byNameAndVersion = new Map()
    allPackages.forEach(p => {
      const key = `${p.name}@${p.version}`
      if (!byNameAndVersion.has(key)) {
        byNameAndVersion.set(key, [])
      }
      byNameAndVersion.get(key).push(setupRequire(path.join(dir, p.initialDir))(...p.chain))
    })
    byNameAndVersion.forEach((value, key) => {
      if (value.length === 1) {
        return
      }
      const same = value.every(l => l === value[0])
      t.ok(same, `Rule 6: Even though it is referanced multiple times, package "${key}" should be installed only once`)
    })
  }
}

tap.only('most simple happy scenario', async t => {
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
    'foo@1.2.3 (root)': {
      'which@1.0.0': {
        'isexe@1.0.0': {}
      }
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
    'foo@1.2.3 (root)': {
      'tsutils@1.0.0': {
        'typescript@1.0.0 (peer)': {
          'baz@2.0.0': {}
        }
      },
      'typescript@1.0.0': {
        'baz@2.0.0': {}
      }
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
    workspaces: [
      { name: 'bar', version: '1.0.0', dependencies: { which: '2.0.0' } },
      { name: 'baz', version: '1.0.0', dependencies: { which: '2.0.0', bar: "*" } },
      { name: 'cat', version: '1.0.0', dependencies: { which: '1.0.0' } },
      { name: 'fish', version: '1.0.0', dependencies: { which: '1.0.0', cat: "*" } },
      { name: 'catfish', version: '1.0.0' },
    ]
  }


  const resolved = {
    'dog@1.2.3 (root)': {
      'bar@1.0.0 (workspace)': {
        'which@2.0.0': {
          'isexe@1.0.0': {}
        }
      }
    },
    'bar@1.0.0 (workspace)': {
      'which@2.0.0': {
        'isexe@1.0.0': {}
      }
    },
    'baz@1.0.0 (workspace)': {
      'bar@1.0.0 (workspace)': {
        'which@2.0.0': {
          'isexe@1.0.0': {}
        }
      },
      'which@2.0.0': {
        'isexe@1.0.0': {}
      }
    },
    'cat@1.0.0 (workspace)': {
      'which@1.0.0': {
        'isexe@1.0.0': {}
      }
    },
    'fish@1.0.0 (workspace)': {
      'cat@1.0.0 (workspace)': {
        'which@1.0.0': {
          'isexe@1.0.0': {}
        }
      },
      'which@1.0.0': {
        'isexe@1.0.0': {}
      }
    },
    'catfish@1.0.0': {}
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
  rule6.apply(t, dir, resolved, asserted)

  /*
  // versions of which are correctly shared
  t.notSame(requireChain('bar', 'which'), requireChainFromFish('which'), 'bar and fish resolve to the a different instance of which')
    */
})

function setupRequire(cwd) {
  return function requireChain(...chain) {
    return chain.reduce((path, name) => {
      if (path === undefined) {
        return undefined
      }
      try {
        return require('path').dirname(require.resolve(name, { paths: [ path ] }))
      } catch (_) {
        return undefined
      }
    }, cwd)
  }
}

function getAllPackages(resolvedGraph) {
  return [...getAllPackagesRecursive(resolvedGraph.root),
    ...(resolvedGraph.workspaces?.map(w => getAllPackagesRecursive(w)) || []).reduce((a,n) => ([...a, ...n]), [])]
}

function getAllPackagesRecursive(resolvedGraph) {
  return [resolvedGraph, ...(resolvedGraph.dependencies?.map(d => getAllPackagesRecursive(d)) || []).reduce((a,n) => ([...a, ...n]), [])]
}

function withRequireChain(resolvedGraph) {
  return {
    root: {
      ...resolvedGraph.root,
      chain: [],
      initialDir: '.',
      dependencies: resolvedGraph.root.dependencies?.map(d => 
        withRequireChainRecursive(d, [], '.'))
    },
    workspaces: resolvedGraph.workspaces?.map(w => {
      const initialDir = `packages/${w.name}`
      return {
        ...w,
        chain: [],
        initialDir,
        dependencies: w.dependencies?.map(d => withRequireChainRecursive(d, [], initialDir))
      }
    })
  } 
}

function withRequireChainRecursive(resolvedGraph, chain, initialDir) {
  const newChain = [...chain, resolvedGraph.name]
  return {
    ...resolvedGraph,
    chain: newChain,
    initialDir,
    dependencies: resolvedGraph.dependencies?.map(d => 
      withRequireChainRecursive(d, newChain, initialDir))
  } 
}

function parseGraph(graph) {
  const root = Object.entries(graph).find(([key, value]) => key.includes('(root)'))
  const result = { root: parseGraphRecursive(...root), workspaces: [] }

  Object.entries(graph).filter(([key, value]) => key.includes('(workspace)'))
    .forEach(([key, value]) => {
      result.workspaces.push(parseGraphRecursive(key, value))
  })
  return result
}

function parseGraphRecursive(key, deps) {
  const name = /^(.[^@]*)@/.exec(key)[1]
  const version = /^.[^@]*@([^ ]*)/.exec(key)[1]
  const workspace = / \(workspace\)/.test(key)
  const peer = / \(peer\)/.test(key)
  const dependencies = Object.entries(deps).map(([key, value]) => parseGraphRecursive(key, value))
  return { name, version, workspace, peer, dependencies }
  }


/*
  * TO TEST:
  * - chain of peer dependencies
  * - dependency graph with two different versions
  * - failed optional dependency
  * - shinkwrapped dependency
  * - bundled dependencies
  * - circular dependencies
  * - circular peer dependencies
  * - peer dependencies on the parent
  * - maybe some more convoluted cases copied from other existing tests
  * - case that result in a ERESOLVE error
  * - repos that are already partially installed (the case of `npm install --save-dev react`)
  * - scoped installs
  * - the versions resolved in isolated mode are the same that would have been resolved in hoisting mode
  *
  */

const {basename, resolve} = require('path')
const t = require('tap')
const requireInject = require('require-inject')

// mock rimraf so we can make it fail in rollback tests
const realRimraf = require('rimraf')
let failRimraf = false
const rimrafMock = (...args) => {
  if (!failRimraf)
    return realRimraf(...args)
  else
    return args.pop()(new Error('rimraf fail'))
}
rimrafMock.sync = (...args) => {
  if (!failRimraf)
    return realRimraf.sync(...args)
  else
    throw new Error('rimraf fail')
}

const Arborist = requireInject('../../lib/arborist', { rimraf: rimrafMock })
const registryServer = require('../fixtures/registry-mocks/server.js')
const {registry} = registryServer
const fs = require('fs')

// there's a lot of fs stuff in this test.
// Parallelize as much as possible.
t.jobs = Infinity
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

t.test('update a bundling node without updating all of its deps', t =>
  t.resolveMatchSnapshot(printReified(
    fixture(t, 'tap-react15-collision-legacy-sw'),
    { add: { devDependencies: { tap: '14.10.5' } } })))

t.test('bad shrinkwrap file', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'testing-peer-deps-bad-sw'))))

t.test('multiple bundles at the same level', t => {
  const path = fixture(t, 'two-bundled-deps')
  const a = new Arborist({ path, registry })
  return a.reify().then(tree => {
    const root = tree.root
    const p = printTree(tree)
    // just fail on the failures, we don't need a zillion tap lines here
    for (const n of tree.inventory.values()) {
      if (n.root !== root)
        t.equal(n.root, root, 'in same tree')
      else {
        for (const e of n.edgesIn) {
          if (e.from.root !== root)
            t.equal(e.from.root, root,
              `edge in same tree ${e.from.location} -> ${n.location}`)
        }
      }
    }
    return t.matchSnapshot(p)
  })
})

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

t.test('rollbacks', t => {
  t.test('fail retiring shallow nodes', t => {
    const path = fixture(t, 'testing-bundledeps-3')
    const a = new Arborist({ path, registry, legacyBundling: true })
    const kRename = Symbol.for('renamePath')
    const renamePath = a[kRename]
    a[kRename] = () => {
      a[kRename] = renamePath
      return Promise.reject(new Error('poop'))
    }
    const kRollback = Symbol.for('rollbackRetireShallowNodes')
    const rollbackRetireShallowNodes = a[kRollback]
    a[kRollback] = er => {
      t.match(er, new Error('poop'))
      a[kRollback] = rollbackRetireShallowNodes
      return a[kRollback](er)
    }

    return t.rejects(a.reify({
      update: ['@isaacs/testing-bundledeps-parent'],
    }), new Error('poop'))
  })

  t.test('fail creating sparse tree', t => {
    const path = fixture(t, 'testing-bundledeps-3')
    const a = new Arborist({ path, registry, legacyBundling: true })
    const kCreateST = Symbol.for('createSparseTree')
    const createSparseTree = a[kCreateST]
    a[kCreateST] = () => {
      a[kCreateST] = createSparseTree
      const mkdir = fs.mkdir
      fs.mkdir = (...args) => {
        fs.mkdir = mkdir
        Promise.resolve().then(() => args.pop()(new Error('poop')))
      }
      return a[kCreateST]()
    }
    const kRollback = Symbol.for('rollbackCreateSparseTree')
    const rollbackCreateSparseTree = a[kRollback]
    a[kRollback] = er => {
      t.match(er, new Error('poop'))
      a[kRollback] = rollbackCreateSparseTree
      return a[kRollback](er)
    }

    return t.rejects(a.reify({
      update: ['@isaacs/testing-bundledeps-parent'],
    }), new Error('poop'))
  })

  t.test('fail rolling back from creating sparse tree', t => {
    const path = fixture(t, 'testing-bundledeps-3')
    const a = new Arborist({ path, registry, legacyBundling: true })
    const kCreateST = Symbol.for('createSparseTree')
    const createSparseTree = a[kCreateST]
    a[kCreateST] = () => {
      a[kCreateST] = createSparseTree
      const mkdir = fs.mkdir
      fs.mkdir = (...args) => {
        fs.mkdir = mkdir
        Promise.resolve().then(() => args.pop()(new Error('poop')))
      }
      return a[kCreateST]()
    }
    const kRollback = Symbol.for('rollbackCreateSparseTree')
    const rollbackCreateSparseTree = a[kRollback]
    a[kRollback] = er => {
      t.match(er, new Error('poop'))
      a[kRollback] = rollbackCreateSparseTree
      return a[kRollback](er)
    }

    const warnings = []
    a.on('warn', (...warning) => warnings.push(warning))

    failRimraf = true
    return t.rejects(a.reify({
      update: ['@isaacs/testing-bundledeps-parent'],
    }), new Error('poop'))
      .then(() => {
        t.equal(warnings.length, 1)
        t.match(warnings, [[
          'Failed to clean up some directories',
          [[String, new Error('rimraf fail')]],
        ]])
      })
      .then(() => failRimraf = false)
  })

  t.test('fail loading shrinkwraps and updating trees', t => {
    const path = fixture(t, 'shrinkwrapped-dep-no-lock-empty')
    const a = new Arborist({ path, registry, legacyBundling: true })
    const kLoadSW = Symbol.for('loadShrinkwrapsAndUpdateTrees')
    const loadShrinkwrapsAndUpdateTrees = a[kLoadSW]
    a[kLoadSW] = seen => {
      a[kLoadSW] = loadShrinkwrapsAndUpdateTrees
      const kDiff = Symbol.for('diffTrees')
      const diffTrees = a[kDiff]
      a[kDiff] = () => {
        a[kDiff] = diffTrees
        return Promise.reject(new Error('poop'))
      }
      return a[kLoadSW](seen)
    }
    const kRollback = Symbol.for('rollbackCreateSparseTree')
    const rollbackCreateSparseTree = a[kRollback]
    a[kRollback] = er => {
      t.match(er, new Error('poop'))
      a[kRollback] = rollbackCreateSparseTree
      return a[kRollback](er)
    }

    return t.rejects(a.reify(), new Error('poop'))
  })

  t.test('fail loading bundles and updating trees', t => {
    const path = fixture(t, 'two-bundled-deps')
    const a = new Arborist({ path, registry, legacyBundling: true })
    const kLoadBundles = Symbol.for('loadBundlesAndUpdateTrees')
    const loadBundlesAndUpdateTrees = a[kLoadBundles]
    a[kLoadBundles] = (depth, bundlesByDepth) => {
      const kRN = Symbol.for('reifyNode')
      const reifyNode = a[kRN]
      a[kRN] = node => {
        a[kRN] = reifyNode
        return Promise.reject(new Error('poop'))
      }
      a[kLoadBundles] = loadBundlesAndUpdateTrees
      return a[kLoadBundles](depth, bundlesByDepth)
    }
    return t.rejects(a.reify(), new Error('poop'))
  })

  t.test('fail unpacking new modules', t => {
    const path = fixture(t, 'two-bundled-deps')
    const a = new Arborist({ path, registry, legacyBundling: true })
    const kUnpack = Symbol.for('unpackNewModules')
    const unpackNewModules = a[kUnpack]
    a[kUnpack] = () => {
      const kReify = Symbol.for('reifyNode')
      const reifyNode = a[kReify]
      a[kReify] = node => {
        a[kReify] = reifyNode
        return Promise.reject(new Error('poop'))
      }
      a[kUnpack] = unpackNewModules
      return a[kUnpack]()
    }
    return t.rejects(a.reify(), new Error('poop'))
  })

  t.test('fail moving back retired unchanged', t => {
    const path = fixture(t, 'testing-bundledeps-3')
    const a = new Arborist({ path, registry, legacyBundling: true })
    const kMoveback = Symbol.for('moveBackRetiredUnchanged')

    const moveBackRetiredUnchanged = a[kMoveback]
    a[kMoveback] = () => {
      a[kMoveback] = moveBackRetiredUnchanged
      const kMoveContents = Symbol.for('moveContents')
      const moveContents = a[kMoveContents]
      a[kMoveContents] = () => {
        a[kMoveContents] = moveContents
        return Promise.reject(new Error('poop'))
      }
      return a[kMoveback]()
    }
    const kRollback = Symbol.for('rollbackMoveBackRetiredUnchanged')
    const rollbackMoveBackRetiredUnchanged = a[kRollback]
    a[kRollback] = er => {
      t.match(er, new Error('poop'))
      a[kRollback] = rollbackMoveBackRetiredUnchanged
      return a[kRollback](er)
    }
    return t.rejects(a.reify({
      update: ['@isaacs/testing-bundledeps-parent'],
    }), new Error('poop'))
  })

  t.test('fail removing retired and deleted nodes', t => {
    const path = fixture(t, 'testing-bundledeps-3')
    const a = new Arborist({ path, registry, legacyBundling: true })
    const kRemove = Symbol.for('removeRetiredAndDeletedNodes')
    const removeRetiredAndDeletedNodes = a[kRemove]
    a[kRemove] = () => {
      failRimraf = true
      a[kRemove] = removeRetiredAndDeletedNodes
      return a[kRemove]()
    }
    const warnings = []
    a.on('warn', (...warning) => warnings.push(warning))
    return t.resolveMatchSnapshot(a.reify({
      update: ['@isaacs/testing-bundledeps-parent'],
    }).then(tree => printTree(tree))).then(() => {
      t.equal(warnings.length, 1)
      t.match(warnings, [[
        'Failed to clean up some directories',
        [[String, new Error('rimraf fail')]],
      ]])
    }).then(() => failRimraf = false)
  })

  t.end()
})

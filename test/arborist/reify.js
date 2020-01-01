const {basename, resolve} = require('path')
const t = require('tap')
const Arborist = require('../..')
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

t.test('rollbacks', t => {
  t.test('fail retiring shallow nodes', t => {
    const path = fixture(t, 'testing-bundledeps-3')
    const a = new Arborist({ path, registry, legacyBundling: true })
    const renamePath = a.renamePath
    a.renamePath = () => {
      a.renamePath = renamePath
      return Promise.reject(new Error('poop'))
    }
    const rollbackRetireShallowNodes = a.rollbackRetireShallowNodes
    a.rollbackRetireShallowNodes = er => {
      t.match(er, new Error('poop'))
      a.rollbackRetireShallowNodes = rollbackRetireShallowNodes
      return a.rollbackRetireShallowNodes(er)
    }

    return t.rejects(a.reify({
      update: ['@isaacs/testing-bundledeps-parent'],
    }), new Error('poop'))
  })

  t.test('fail creating sparse tree', t => {
    const path = fixture(t, 'testing-bundledeps-3')
    const a = new Arborist({ path, registry, legacyBundling: true })
    const createSparseTree = a.createSparseTree
    a.createSparseTree = () => {
      a.createSparseTree = createSparseTree
      const mkdir = fs.mkdir
      fs.mkdir = (...args) => {
        fs.mkdir = mkdir
        Promise.resolve().then(() => args.pop()(new Error('poop')))
      }
      return a.createSparseTree()
    }
    const rollbackCreateSparseTree = a.rollbackCreateSparseTree
    a.rollbackCreateSparseTree = er => {
      t.match(er, new Error('poop'))
      a.rollbackCreateSparseTree = rollbackCreateSparseTree
      return a.rollbackCreateSparseTree(er)
    }

    return t.rejects(a.reify({
      update: ['@isaacs/testing-bundledeps-parent'],
    }), new Error('poop'))
  })

  t.test('fail loading shrinkwraps and updating trees', t => {
    const path = fixture(t, 'shrinkwrapped-dep-no-lock-empty')
    const a = new Arborist({ path, registry, legacyBundling: true })
    const loadShrinkwrapsAndUpdateTrees = a.loadShrinkwrapsAndUpdateTrees
    a.loadShrinkwrapsAndUpdateTrees = seen => {
      a.loadShrinkwrapsAndUpdateTrees = loadShrinkwrapsAndUpdateTrees
      const diffTrees = a.diffTrees
      a.diffTrees = () => {
        a.diffTrees = diffTrees
        return Promise.reject(new Error('poop'))
      }
      return a.loadShrinkwrapsAndUpdateTrees(seen)
    }
    const rollbackCreateSparseTree = a.rollbackCreateSparseTree
    a.rollbackCreateSparseTree = er => {
      t.match(er, new Error('poop'))
      a.rollbackCreateSparseTree = rollbackCreateSparseTree
      return a.rollbackCreateSparseTree(er)
    }

    return t.rejects(a.reify(), new Error('poop'))
  })

  t.test('fail loading bundles and updating trees', t => {
    const path = fixture(t, 'two-bundled-deps')
    const a = new Arborist({ path, registry, legacyBundling: true })
    const loadBundlesAndUpdateTrees = a.loadBundlesAndUpdateTrees
    a.loadBundlesAndUpdateTrees = (depth, bundlesByDepth) => {
      const reifyNode = a.reifyNode
      a.reifyNode = node => {
        a.reifyNode = reifyNode
        return Promise.reject(new Error('poop'))
      }
      a.loadBundlesAndUpdateTrees = loadBundlesAndUpdateTrees
      return a.loadBundlesAndUpdateTrees(depth, bundlesByDepth)
    }
    return t.rejects(a.reify(), new Error('poop'))
  })

  t.test('fail unpacking new modules', t => {
    const path = fixture(t, 'two-bundled-deps')
    const a = new Arborist({ path, registry, legacyBundling: true })
    const unpackNewModules = a.unpackNewModules
    a.unpackNewModules = () => {
      const reifyNode = a.reifyNode
      a.reifyNode = node => {
        a.reifyNode = reifyNode
        return Promise.reject(new Error('poop'))
      }
      a.unpackNewModules = unpackNewModules
      return a.unpackNewModules()
    }
    return t.rejects(a.reify(), new Error('poop'))
  })

  t.test('fail moving back retired unchanged', t => {
    const path = fixture(t, 'testing-bundledeps-3')
    const a = new Arborist({ path, registry, legacyBundling: true })
    const moveBackRetiredUnchanged = a.moveBackRetiredUnchanged
    a.moveBackRetiredUnchanged = () => {
      a.moveBackRetiredUnchanged = moveBackRetiredUnchanged
      const moveContents = a.moveContents
      a.moveContents = () => {
        a.moveContents = moveContents
        return Promise.reject(new Error('poop'))
      }
      return a.moveBackRetiredUnchanged()
    }
    const rollbackMoveBackRetiredUnchanged = a.rollbackMoveBackRetiredUnchanged
    a.rollbackMoveBackRetiredUnchanged = er => {
      t.match(er, new Error('poop'))
      a.rollbackMoveBackRetiredUnchanged = rollbackMoveBackRetiredUnchanged
      return a.rollbackMoveBackRetiredUnchanged(er)
    }
    return t.rejects(a.reify({
      update: ['@isaacs/testing-bundledeps-parent'],
    }), new Error('poop'))
  })

  t.end()
})

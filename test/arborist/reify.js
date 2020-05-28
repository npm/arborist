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
const fs = require('fs')
let failRename = null
let failRenameOnce = null
let failMkdir = null
const {rename: realRename, mkdir: realMkdir} = fs
const fsMock = {
  ...fs,
  mkdir (...args) {
    if (failMkdir) {
      process.nextTick(() => args.pop()(failMkdir))
    }
    realMkdir(...args)
  },
  rename (...args) {
    if (failRename)
      process.nextTick(() => args.pop()(failRename))
    else if (failRenameOnce) {
      const er = failRenameOnce
      failRenameOnce = null
      process.nextTick(() => args.pop()(er))
    } else
      realRename(...args)
  },
}

// track the warnings that are emitted.  returns a function that removes
// the listener and provides the list of what it saw.
const warningTracker = () => {
  const list = []
  const onlog = (...msg) => msg[0] === 'warn' && list.push(msg)
  process.on('log', onlog)
  return () => {
    process.removeListener('log', onlog)
    return list
  }
}

const Node = requireInject('../../lib/node.js', { fs: fsMock })
const Shrinkwrap = requireInject('../../lib/shrinkwrap.js', {
  fs: fsMock,
  '../../lib/node.js': Node,
})
const Arborist = requireInject('../../lib/arborist', {
  rimraf: rimrafMock,
  fs: fsMock,
  '../../lib/node.js': Node,
})

const registryServer = require('../fixtures/registry-mocks/server.js')
const {registry} = registryServer

const cache = t.testdir()

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
    to: !edge.to || edge.to.name === 'fsevents' ? null
      : edge.to.location,
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
    ...(tree.peer ? { peer: true } : {}),
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
  ...( !tree.fsChildren.size ? {} : {
    fsChildren: new Set([...tree.fsChildren]
      .sort((a, b) => a.path.localeCompare(b.path))
      .map(tree => printTree(tree))),
  }),
  ...( tree.target || !tree.children.size ? {}
    : {
      children: new Map([...tree.children.entries()]
        // this one is specific to darwin, filter it out so CI doesn't fail
        .filter(([name, node]) => name !== 'fsevents')
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
  new Arborist({audit: false, cache, registry, path, ...(opt || {})}).reify(opt)

t.test('tarball deps with transitive tarball deps', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'tarball-dependencies'))))

t.test('update a yarn.lock file', async t => {
  const path = fixture(t, 'yarn-lock-mkdirp')
  t.matchSnapshot(await reify(path, { add: ['abbrev'] }), 'add abbrev')
  t.matchSnapshot(fs.readFileSync(path + '/yarn.lock', 'utf8'), 'updated yarn lock')
})

t.test('weirdly broken lockfile without resolved value', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'dep-missing-resolved'))))

t.test('testing-peer-deps package', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'testing-peer-deps'))))

t.test('just the shrinkwrap', t => {
  const paths = [
    'cli-750-fresh',
    'yarn-lock-mkdirp',
  ]
  t.plan(paths.length)
  for (const p of paths) {
    t.test(p, async t => {
      const path = fixture(t, p)
      const arb = new Arborist({ path, registry, cache, packageLockOnly: true })
      await arb.reify()
      t.ok(arb.auditReport, 'got an audit report')
      t.throws(() => fs.statSync(path + '/node_modules'), { code: 'ENOENT' })
      t.matchSnapshot(fs.readFileSync(path + '/package-lock.json', 'utf8'))
    })
  }
})

t.test('packageLockOnly can add deps', async t => {
  const path = t.testdir({ 'package.json': '{}' })
  await reify(path, { add: ['abbrev'], packageLockOnly: true })
  t.matchSnapshot(fs.readFileSync(path + '/package.json', 'utf8'))
  t.matchSnapshot(fs.readFileSync(path + '/package-lock.json', 'utf8'))
  t.throws(() => fs.statSync(path + '/node_modules'), { code: 'ENOENT' })
})

t.test('packageLockOnly does not work on globals', t => {
  const path = t.testdir({ 'package.json': '{}' })
  return t.rejects(() => reify(path, { global: true, packageLockOnly: true }))
})

t.test('omit peer deps', t => {
  const path = fixture(t, 'testing-peer-deps')
  // in this one we also snapshot the timers, mostly just as a smoke test
  const timers = {}
  const finishedTimers = []
  const onTime = name => {
    t.notOk(timers[name], 'should not have duplicated timers started')
    timers[name] = true
  }
  const onTimeEnd = name => {
    t.ok(timers[name], 'should not end unstarted timer')
    delete timers[name]
    finishedTimers.push(name)
  }
  process.on('time', onTime)
  process.on('timeEnd', onTimeEnd)

  return reify(path, { omit: ['peer'] })
    .then(tree => {
      for (const node of tree.inventory.values()) {
        t.equal(node.peer, false, 'did not reify any peer nodes')
      }
      const lock = require(tree.path + '/package-lock.json')
      for (const [loc, meta] of Object.entries(lock.packages)) {
        if (meta.peer)
          t.throws(() => fs.statSync(resolve(path, loc)), 'peer not reified')
        else
          t.equal(fs.statSync(resolve(path, loc)).isDirectory(), true)
      }
    })
    .then(() => {
      process.removeListener('time', onTime)
      process.removeListener('timeEnd', onTimeEnd)
      finishedTimers.sort((a, b) => a.localeCompare(b))
      t.matchSnapshot(finishedTimers, 'finished timers')
      t.strictSame(timers, {}, 'should have no timers in progress now')
    })
})

t.test('testing-peer-deps nested', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'testing-peer-deps-nested'))))

t.test('a workspace with a duplicated nested conflicted dep', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'workspace4'))))

t.test('testing-peer-deps nested with update', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'testing-peer-deps-nested'), {
    update: { names: ['@isaacs/testing-peer-deps'] },
  })))

t.test('update a bundling node without updating all of its deps', t => {
  const path = fixture(t, 'tap-react15-collision-legacy-sw')

  // check that it links the bin
  const bin = resolve(path, 'node_modules/.bin/tap')
  const checkBin = process.platform === 'win32'
    ? () => t.ok(fs.statSync(bin + '.cmd').isFile(), 'created shim')
    : () => t.ok(fs.lstatSync(bin).isSymbolicLink(), 'created symlink')

  const checkPackageLock = () => {
    t.matchSnapshot(require(path + '/package-lock.json').dependencies.fsevents,
      'contains fsevents in lockfile')
  }

  return t.resolveMatchSnapshot(printReified(path, {
    saveType: 'dev',
    add: [ 'tap@14.10.5' ],
  }))
    .then(checkBin)
    .then(checkPackageLock)
})

t.test('Bundles rebuilt as long as rebuildBundle not false', async t => {
  t.test('rebuild the bundle', async t => {
    const path = fixture(t, 'testing-rebuild-bundle')
    const a = resolve(path, 'node_modules/@isaacs/testing-rebuild-bundle-a')
    const dir = resolve(a, 'node_modules/@isaacs/testing-rebuild-bundle-b')
    const file = resolve(dir, 'cwd')
    await reify(path)
    t.equal(fs.readFileSync(file, 'utf8'), dir)
  })
  t.test('do not rebuild the bundle', async t => {
    const path = fixture(t, 'testing-rebuild-bundle')
    const a = resolve(path, 'node_modules/@isaacs/testing-rebuild-bundle-a')
    const dir = resolve(a, 'node_modules/@isaacs/testing-rebuild-bundle-b')
    const file = resolve(dir, 'cwd')
    await reify(path, { rebuildBundle: false })
    t.throws(() => fs.statSync(file))
  })
})

t.test('transitive deps containing asymmetrical bin no lockfile', t => {
  const path = fixture(t, 'testing-asymmetrical-bin-no-lock')

  // check that it links the bin
  const bin = resolve(path, 'node_modules/.bin/b')
  const checkBin = process.platform === 'win32'
    ? () => t.ok(fs.statSync(bin + '.cmd').isFile(), 'created shim')
    : () => t.ok(fs.lstatSync(bin).isSymbolicLink(), 'created symlink')

  return t.resolveMatchSnapshot(printReified(path, { packageLock: false }))
    .then(checkBin)
    .then(() => t.throws(() => fs.statSync(path + '/package-lock.json')))
})

t.test('transitive deps containing asymmetrical bin with lockfile', t => {
  const path = fixture(t, 'testing-asymmetrical-bin-with-lock')

  // check that it links the bin
  const bin = resolve(path, 'node_modules/.bin/b')
  const checkBin = process.platform === 'win32'
    ? () => t.ok(fs.statSync(bin + '.cmd').isFile(), 'created shim')
    : () => t.ok(fs.lstatSync(bin).isSymbolicLink(), 'created symlink')

  return t.resolveMatchSnapshot(printReified(path, {}))
    .then(checkBin)
})

t.test('omit optional dep', t => {
  const path = fixture(t, 'tap-react15-collision-legacy-sw')
  const ignoreScripts = true

  const arb = new Arborist({ path, ignoreScripts, registry, cache })
  return arb.reify({ omit: ['optional'] })
    .then(tree => {
      t.equal(tree.children.get('fsevents'), undefined, 'no fsevents in tree')
      t.throws(() => fs.statSync(path + '/node_modules/fsevents'), 'no fsevents unpacked')
      t.match(require(path +'/package-lock.json').dependencies.fsevents, {
        dev: true,
        optional: true,
      }, 'fsevents present in lockfile')
    })
    .then(() => t.ok(arb.diff, 'has a diff tree'))
})

t.test('dev, optional, devOptional flags and omissions', t => {
  const path = 'testing-dev-optional-flags'
  const omits = [['dev'], ['dev', 'optional'], ['optional']]
  t.plan(omits.length)
  omits.forEach(omit => t.test(omit.join(','), t =>
    t.resolveMatchSnapshot(printReified(fixture(t, path), {
      omit,
    }))))
})

t.test('omits when both dev and optional flags are set', t => {
  const path = 'testing-dev-optional-flags-2'
  const omits = [['dev'], ['optional']]
  t.plan(omits.length)
  omits.forEach(omit => t.test(omit.join(','), t =>
    t.resolveMatchSnapshot(printReified(fixture(t, path), {
      omit,
    }))))
})

t.test('bad shrinkwrap file', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'testing-peer-deps-bad-sw'))))

t.test('multiple bundles at the same level', t => {
  const path = fixture(t, 'two-bundled-deps')
  const a = new Arborist({ path, registry, cache })
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
    fixture(t, 'shrinkwrapped-dep-no-lock'), { update: true })))

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
    t.resolveMatchSnapshot(printReified(fixture(t, c), {
      update: /no-lock/.test(c),
    }))))
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
    add: [
      '@isaacs/testing-link-dep@2',
      '@isaacs/testing-link-dev-dep@2',
    ],
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

t.test('optional dependency failures', t => {
  const cases = [
    'optional-dep-tgz-missing',
    'optional-metadep-tgz-missing',
    'optional-dep-preinstall-fail',
    'optional-dep-install-fail',
    'optional-dep-postinstall-fail',
    'optional-dep-allinstall-fail',
    'optional-metadep-preinstall-fail',
    'optional-metadep-install-fail',
    'optional-metadep-postinstall-fail',
    'optional-metadep-allinstall-fail',
  ]
  t.plan(cases.length)
  cases.forEach(c => t.test(c, t =>
    t.resolveMatchSnapshot(printReified(fixture(t, c), { update: true }))))
})

t.test('failure to fetch prod dep is failure', t =>
  t.rejects(printReified(fixture(t, 'prod-dep-tgz-missing'))))

t.test('failing script means install failure, unless ignoreScripts', t => {
  const cases = [
    'prod-dep-preinstall-fail',
    'prod-dep-install-fail',
    'prod-dep-postinstall-fail',
    'prod-dep-allinstall-fail',
  ]

  t.plan(cases.length * 2)

  cases.forEach(c => {
    t.test(c, t =>
      t.rejects(printReified(fixture(t, c))))
    t.test(c + ' --ignore-scripts', t =>
      t.resolveMatchSnapshot(printReified(
        fixture(t, c), { ignoreScripts: true })))
  })
})

t.test('link metadep', t => {
  const cases = [
    'cli-750',
    'cli-750-fresh',
  ]
  t.plan(cases.length)
  cases.forEach(c => t.test(c, t =>
    t.resolveMatchSnapshot(printReified(fixture(t, c)))))
})

t.test('fail on mismatched engine when engineStrict is set', t =>
  t.rejects(printReified(fixture(t, 'tap-and-flow'), {
    nodeVersion: '1.2.3',
    engineStrict: true,
  }).then(() => { throw new Error('failed to fail') }), { code: 'EBADENGINE' }))

t.test('warn on mismatched engine when engineStrict is false', t => {
  const path = fixture(t, 'tap-and-flow')
  const a = new Arborist({
    registry,
    path,
    cache,
    engineStrict: false,
    nodeVersion: '1.2.3',
    // just to add coverage for the no-op function for bundleBinLinks
    binLinks: false,
  })
  const check = warningTracker()
  const binPath = `${path}/node_modules/tap/node_modules/.bin`
  return a.reify().then(() => t.match(check(), [
    ['warn', { code: 'EBADENGINE' }],
  ]))
  .then(() => t.throws(() => fs.readdir(binPath)))
})

t.test('warn on reifying deprecated dependency', t => {
  const a = new Arborist({
    registry,
    cache,
    path: fixture(t, 'deprecated-dep'),
  })
  const check = warningTracker()
  return a.reify({ update: true }).then(() => t.match(check(), [
    ['warn', 'deprecated', 'mkdirp@0.5.3: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)'],
  ]))
})

t.test('rollbacks', { buffered: false }, t => {
  t.test('fail retiring shallow nodes', t => {
    const path = fixture(t, 'testing-bundledeps-3')
    const a = new Arborist({ path, registry, legacyBundling: true, cache })
    const expect = new Error('rename fail')
    const kRenamePath = Symbol.for('renamePath')
    const renamePath = a[kRenamePath]
    a[kRenamePath] = (from, to) => {
      a[kRenamePath] = renamePath
      failRename = expect
      return a[kRenamePath](from, to)
    }
    const kRollback = Symbol.for('rollbackRetireShallowNodes')
    const rollbackRetireShallowNodes = a[kRollback]
    let rolledBack = false
    a[kRollback] = er => {
      rolledBack = true
      failRename = null
      t.equal(er, expect)
      a[kRollback] = rollbackRetireShallowNodes
      return a[kRollback](er)
    }

    return t.rejects(a.reify({
      update: ['@isaacs/testing-bundledeps-parent'],
    }), expect).then(() => t.equal(rolledBack, true, 'rolled back'))
  })

  t.test('fail retiring nodes because rimraf fails after eexist', t => {
    const path = fixture(t, 'testing-bundledeps-3')
    const a = new Arborist({ path, registry, legacyBundling: true, cache })
    const eexist = new Error('rename fail')
    eexist.code = 'EEXIST'
    const kRenamePath = Symbol.for('renamePath')
    const renamePath = a[kRenamePath]
    a[kRenamePath] = (from, to) => {
      a[kRenamePath] = renamePath
      failRename = eexist
      failRimraf = true
      return a[kRenamePath](from, to)
    }
    const kRollback = Symbol.for('rollbackRetireShallowNodes')
    const rollbackRetireShallowNodes = a[kRollback]
    let rolledBack = false
    a[kRollback] = er => {
      rolledBack = true
      failRename = new Error('some other error')
      failRimraf = false
      t.match(er, new Error('rimraf fail'))
      a[kRollback] = rollbackRetireShallowNodes
      return a[kRollback](er).then(er => {
        failRename = null
        return er
      }, er => {
        failRename = null
        throw er
      })
    }

    return t.rejects(a.reify({
      update: ['@isaacs/testing-bundledeps-parent'],
    }), new Error('rimraf fail'))
      .then(() => t.equal(rolledBack, true, 'rolled back'))
  })

  t.test('fail retiring node, but then rimraf fixes it', t => {
    const path = fixture(t, 'testing-bundledeps-3')
    const a = new Arborist({ path, registry, legacyBundling: true, cache })
    const eexist = new Error('rename fail')
    eexist.code = 'EEXIST'
    const kRenamePath = Symbol.for('renamePath')
    const renamePath = a[kRenamePath]
    a[kRenamePath] = (from, to) => {
      a[kRenamePath] = renamePath
      failRenameOnce = eexist
      return a[kRenamePath](from, to)
    }
    const kRollback = Symbol.for('rollbackRetireShallowNodes')
    const rollbackRetireShallowNodes = a[kRollback]
    let rolledBack = false
    a[kRollback] = er => {
      t.fail('should not roll back!')
      a[kRollback] = rollbackRetireShallowNodes
      return a[kRollback](er)
    }

    return t.resolveMatchSnapshot(a.reify({
      update: ['@isaacs/testing-bundledeps-parent'],
    }).then(printTree))
  })

  t.test('fail creating sparse tree', t => {
    t.teardown(() => failMkdir = null)
    const path = fixture(t, 'testing-bundledeps-3')
    const a = new Arborist({ path, registry, legacyBundling: true, cache })
    const kCreateST = Symbol.for('createSparseTree')
    const createSparseTree = a[kCreateST]
    a[kCreateST] = () => {
      a[kCreateST] = createSparseTree
      failMkdir = new Error('poop')
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
    }).then(() => 'it worked'), new Error('poop'))
  })

  t.test('fail rolling back from creating sparse tree', t => {
    const path = fixture(t, 'testing-bundledeps-3')
    const a = new Arborist({ path, registry, legacyBundling: true, cache })
    const kCreateST = Symbol.for('createSparseTree')
    const createSparseTree = a[kCreateST]
    t.teardown(() => failMkdir = null)
    a[kCreateST] = () => {
      a[kCreateST] = createSparseTree
      failMkdir = new Error('poop')
      return a[kCreateST]()
    }
    const kRollback = Symbol.for('rollbackCreateSparseTree')
    const rollbackCreateSparseTree = a[kRollback]
    a[kRollback] = er => {
      t.match(er, new Error('poop'))
      a[kRollback] = rollbackCreateSparseTree
      return a[kRollback](er)
    }

    const check = warningTracker()
    failRimraf = true
    return t.rejects(a.reify({
      update: ['@isaacs/testing-bundledeps-parent'],
    }).then(tree => 'it worked'), new Error('poop'))
      .then(() => {
        const warnings = check()
        t.equal(warnings.length, 1)
        t.match(warnings, [[
          'warn',
          'Failed to clean up some directories',
          [[String, new Error('rimraf fail')]],
        ]])
      })
      .then(() => failRimraf = false)
  })

  t.test('fail loading shrinkwraps and updating trees', t => {
    const path = fixture(t, 'shrinkwrapped-dep-no-lock-empty')
    const a = new Arborist({ path, registry, legacyBundling: true, cache })
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
    const a = new Arborist({ path, registry, legacyBundling: true, cache })
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
    const a = new Arborist({ path, registry, legacyBundling: true, cache })
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
    const a = new Arborist({ path, registry, legacyBundling: true, cache })
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
    const a = new Arborist({ path, registry, legacyBundling: true, cache })
    const kRemove = Symbol.for('removeTrash')
    const removeRetiredAndDeletedNodes = a[kRemove]
    a[kRemove] = () => {
      failRimraf = true
      a[kRemove] = removeRetiredAndDeletedNodes
      return a[kRemove]()
    }
    const check = warningTracker()

    return t.resolveMatchSnapshot(a.reify({
      update: ['@isaacs/testing-bundledeps-parent'],
    }).then(tree => printTree(tree))).then(() => {
      const warnings = check()
      t.equal(warnings.length, 1)
      t.match(warnings, [[
        'warn',
        'Failed to clean up some directories',
        [[String, new Error('rimraf fail')]],
      ]])
    })
    .then(() => failRimraf = false)
  })

  t.end()
})

t.test('saving the ideal tree', t => {
  const kSaveIdealTree = Symbol.for('saveIdealTree')
  t.test('save=false', t => {
    // doesn't actually do anything, just for coverage.
    // if it wasn't an early exit, it'd blow up and throw
    // an error though.
    const path = t.testdir()
    const a = new Arborist({ path, registry, cache })
    t.notOk(a[kSaveIdealTree]({ save: false }))
    t.end()
  })

  t.test('save some stuff', t => {
    const pkg = {
      bundleDependencies: ['a', 'b', 'c'],
      dependencies: {
        a: 'git+ssh://git@github.com:foo/bar#baz',
        b: '',
        d: 'd@npm:c@1.x',
      },
      devDependencies: {
        c: `git+ssh://git@githost.com:a/b/c.git#master`,
      },
    }

    const npa = require('npm-package-arg')
    const kResolvedAdd = Symbol.for('resolvedAdd')
    const path = t.testdir({
      'package.json': JSON.stringify(pkg)
    })
    const a = new Arborist({ path, registry, cache })
    const hash = '71f3ccfefba85d2048484569dba8c1829f6f41d7'
    return a.loadActual().then(tree => Shrinkwrap.load({path}).then(meta => {
      tree.meta = meta
      meta.add(tree)
      return tree
    })).then(tree => {
      // saving swaps the ideal tree onto the actual tree
      a.idealTree = tree

      // simulated child nodes
      new Node({
        name: 'a',
        resolved: `git+ssh://git@github.com:foo/bar#${hash}`,
        parent: tree,
        pkg: {},
      })
      new Node({
        name: 'b',
        resolved: 'https://registry.npmjs.org/b/-/b-1.2.3.tgz',
        pkg: { version: '1.2.3', name: 'b' },
        parent: tree,
      })
      new Node({
        name: 'c',
        resolved: `git+ssh://git@githost.com:a/b/c.git#${hash}`,
        parent: tree,
        pkg: {},
      })
      new Node({
        name: 'd',
        resolved: 'https://registry.npmjs.org/c/-/c-1.2.3.tgz',
        pkg: {
          name: 'c',
          version: '1.2.3',
        },
        parent: tree,
      })

      a[kResolvedAdd] = [
        npa('a@git+ssh://git@github.com:foo/bar#baz'),
        npa('b'),
        npa('d@npm:c@1.x'),
        npa(`c@git+ssh://git@githost.com:a/b/c.git#master`),
      ]
      return a[kSaveIdealTree]({
        savePrefix: '~',
      })
    }).then(() => {
      t.matchSnapshot(require(path + '/package-lock.json'), 'lock after save')
      t.strictSame(require(path + '/package.json'), {
        bundleDependencies: [ 'a', 'b', 'c' ],
        dependencies: {
          a: 'github:foo/bar#baz',
          b: '^1.2.3',
          d: 'npm:c@^1.2.3',
        },
        devDependencies: {
          c: 'git+ssh://git@githost.com:a/b/c.git#master',
        },
      })
    })
  })

  t.end()
})

t.test('bin links adding and removing', t => {
  const path = t.testdir({
    'package.json': JSON.stringify({}),
  })
  const rbin = resolve(path, 'node_modules/.bin/rimraf')
  return reify(path, { add: [ 'rimraf@2.7.1' ]})
    .then(() => fs.statSync(rbin)) // should be there
    .then(() => reify(path, { rm: ['rimraf'] }))
    .then(() => t.throws(() => fs.statSync(rbin))) // should be gone
})

t.test('global style', t => {
  const path = t.testdir()
  const nm = resolve(path, 'node_modules')
  const rbinPart = '.bin/rimraf' +
    (process.platform === 'win32' ? '.cmd' : '')
  const rbin = resolve(nm, rbinPart)
  return reify(path, { add: [ 'rimraf@2' ], globalStyle: true})
    .then(() => fs.statSync(rbin))
    .then(() => t.strictSame(fs.readdirSync(nm).sort(), ['.bin', '.package-lock.json', 'rimraf']))
})

t.test('global', t => {
  const isWindows = process.platform === 'win32'

  const path = t.testdir({ lib: {} })
  const lib = resolve(path, 'lib')
  const nm = resolve(lib, 'node_modules')

  const binTarget = isWindows ? lib : resolve(path, 'bin')
  const rimrafBin = resolve(binTarget, isWindows ? 'rimraf.cmd' : 'rimraf')
  const semverBin = resolve(binTarget, isWindows ? 'semver.cmd' : 'semver')

  t.test('add rimraf', t =>
    reify(lib, { add:  [ 'rimraf@2' ], global: true})
      .then(() => fs.statSync(rimrafBin))
      .then(() => t.strictSame(fs.readdirSync(nm), ['rimraf'])))

  t.test('add semver', t =>
    reify(lib, { add: [ 'semver@6.3.0' ], global: true})
      .then(() => fs.statSync(rimrafBin))
      .then(() => fs.statSync(semverBin))
      .then(() => t.strictSame(fs.readdirSync(nm).sort(), [ 'rimraf', 'semver' ])))

  t.test('remove semver', t =>
    reify(lib, { rm: [ 'semver' ], global: true})
      .then(() => fs.statSync(rimrafBin))
      .then(() => t.throws(() => fs.statSync(semverBin)))
      .then(() => t.strictSame(fs.readdirSync(nm), ['rimraf'])))

  t.test('remove rimraf', t =>
    reify(lib, { rm: [ 'rimraf' ], global: true})
      .then(() => t.throws(() => fs.statSync(rimrafBin)))
      .then(() => t.throws(() => fs.statSync(semverBin)))
      .then(() => t.strictSame(fs.readdirSync(nm), [])))

  t.test('add without bin links', t =>
    reify(lib, { add: [ 'rimraf@2' ], global: true, binLinks: false})
      .then(() => t.throws(() => fs.statSync(rimrafBin)))
      .then(() => t.throws(() => fs.statSync(semverBin)))
      .then(() => t.strictSame(fs.readdirSync(nm), ['rimraf'])))

  t.end()
})

t.test('workspaces', t => {
  t.test('reify simple-workspaces', t =>
    t.resolveMatchSnapshot(printReified(fixture(t, 'workspaces-simple')), 'should reify simple workspaces'))

  t.test('reify workspaces lockfile', t => {
    const path = fixture(t, 'workspaces-simple')
    reify(path).then(() => {
      t.matchSnapshot(require(path + '/package-lock.json'), 'should lock workspaces config')
      t.end()
    })
  })

  t.test('reify workspaces bin files', t => {
    const path = fixture(t, 'workspaces-link-bin')

    const bins = [
      resolve(path, 'node_modules/.bin/a'),
      resolve(path, 'node_modules/.bin/b'),
    ]

    const checkBin = () => {
      for (const bin of bins)
        if (process.platform === 'win32')
          t.ok(fs.statSync(bin + '.cmd').isFile(), 'created shim')
        else
          t.ok(fs.lstatSync(bin).isSymbolicLink(), 'created symlink')
    }

    return t.resolveMatchSnapshot(printReified(path, {}))
      .then(checkBin)
  })

  t.end()
})

t.test('add a dep present in the tree, with v1 shrinkwrap', async t => {
  // https://github.com/npm/arborist/issues/70
  const path = fixture(t, 'old-package-lock')
  const tree = await reify(path, { add: ['wrappy'] })
  t.matchSnapshot(fs.readFileSync(path + '/package.json', 'utf8'))
})

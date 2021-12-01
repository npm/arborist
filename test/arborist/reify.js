const { resolve, basename } = require('path')
const t = require('tap')
const runScript = require('@npmcli/run-script')

// mock rimraf so we can make it fail in rollback tests
const realRimraf = require('rimraf')
let failRimraf = false
const rimrafMock = (...args) => {
  if (!failRimraf) {
    return realRimraf(...args)
  } else {
    return args.pop()(new Error('rimraf fail'))
  }
}
rimrafMock.sync = (...args) => {
  if (!failRimraf) {
    return realRimraf.sync(...args)
  } else {
    throw new Error('rimraf fail')
  }
}
const fs = require('fs')
let failRename = null
let failRenameOnce = null
let failMkdir = null
const { rename: realRename, mkdir: realMkdir } = fs
const fsMock = {
  ...fs,
  mkdir (...args) {
    if (failMkdir) {
      process.nextTick(() => args.pop()(failMkdir))
    }

    realMkdir(...args)
  },
  rename (...args) {
    if (failRename) {
      process.nextTick(() => args.pop()(failRename))
    } else if (failRenameOnce) {
      const er = failRenameOnce
      failRenameOnce = null
      process.nextTick(() => args.pop()(er))
    } else {
      realRename(...args)
    }
  },
}
const mocks = {
  fs: fsMock,
  rimraf: rimrafMock,
}

const oldLockfileWarning = [
  'warn',
  'old lockfile',
  `
The package-lock.json file was created with an old version of npm,
so supplemental metadata must be fetched from the registry.

This is a one-time fix-up, please be patient...
`,
]

// need this to be injected so that it doesn't pull from main cache
const moveFile = t.mock('@npmcli/move-file', { fs: fsMock })
mocks['@npmcli/move-file'] = moveFile
const mkdirp = t.mock('mkdirp', mocks)
mocks.mkdirp = mkdirp
const mkdirpInferOwner = t.mock('mkdirp-infer-owner', mocks)
mocks['mkdirp-infer-owner'] = mkdirpInferOwner

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

const debugLogTracker = () => {
  const list = []
  mockDebug.log = (...msg) => list.push(msg)
  return () => {
    mockDebug.log = () => {}
    return list
  }
}
const mockDebug = Object.assign(fn => fn(), { log: () => {} })

const Arborist = t.mock('../../lib/index.js', {
  ...mocks,
  // need to not mock this one, so we still can swap the process object
  '../../lib/signal-handling.js': require('../../lib/signal-handling.js'),

  // mock the debug so we can test these even when not enabled
  '../../lib/debug.js': mockDebug,
})

const { Node, Link, Shrinkwrap } = Arborist

const {
  start,
  stop,
  registry,
  advisoryBulkResponse,
} = require('../fixtures/registry-mocks/server.js')

t.before(start)
t.teardown(stop)

const cache = t.testdir()

const {
  normalizePath,
  normalizePaths,
  printTree,
} = require('../fixtures/utils.js')

const cwd = normalizePath(process.cwd())
t.cleanSnapshot = s => s.split(cwd).join('{CWD}')
  .split(registry).join('https://registry.npmjs.org/')

const fixture = (t, p) => require('../fixtures/reify-cases/' + p)(t)

const printReified = (path, opt) => reify(path, opt).then(printTree)

const newArb = (opt) => new Arborist({
  audit: false,
  cache,
  registry,
  // give it a very long timeout so CI doesn't crash as easily
  timeout: 30 * 60 * 1000,
  ...opt,
})

const reify = (path, opt) => newArb({ path, ...(opt || {}) }).reify(opt)

t.test('tarball deps with transitive tarball deps', t =>
  t.resolveMatchSnapshot(printReified(fixture(t, 'tarball-dependencies'))))

t.test('update a yarn.lock file', async t => {
  const path = fixture(t, 'yarn-lock-mkdirp')
  const tree = await reify(path, { add: ['abbrev'] })
  t.matchSnapshot(printTree(tree), 'add abbrev')
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
      const arb = newArb({ path, audit: true, packageLockOnly: true })
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

t.test('malformed package.json should not be overwitten', async t => {
  t.plan(2)

  const path = fixture(t, 'malformed-json')
  const originalContent = fs.readFileSync(path + '/package.json', 'utf8')

  try {
    await reify(path)
  } catch (err) {
    t.match(err, { code: 'EJSONPARSE' }, 'should throw EJSONPARSE error')
  }

  const resultContent = fs.readFileSync(path + '/package.json', 'utf8')
  t.equal(
    resultContent,
    originalContent,
    'should not touch file contents on malformed json'
  )
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
        if (meta.peer) {
          t.throws(() => fs.statSync(resolve(path, loc)), 'peer not reified')
        } else {
          t.equal(fs.statSync(resolve(path, loc)).isDirectory(), true)
        }
      }
    })
    .then(() => {
      process.removeListener('time', onTime)
      process.removeListener('timeEnd', onTimeEnd)
      finishedTimers.sort((a, b) => a.localeCompare(b, 'en'))
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
    add: ['tap@14.10.5'],
    omit: ['optional'],
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

  const arb = newArb({ path, ignoreScripts })
  return arb.reify({ omit: ['optional'] })
    .then(tree => {
      t.equal(tree.children.get('fsevents'), undefined, 'no fsevents in tree')
      t.throws(() => fs.statSync(path + '/node_modules/fsevents'), 'no fsevents unpacked')
      t.match(require(path + '/package-lock.json').dependencies.fsevents, {
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
  const a = newArb({ path })
  return a.reify().then(tree => {
    const root = tree.root
    const p = printTree(tree)
    // just fail on the failures, we don't need a zillion tap lines here
    for (const n of tree.inventory.values()) {
      if (n.root !== root) {
        t.equal(n.root, root, 'in same tree')
      } else {
        for (const e of n.edgesIn) {
          if (e.from.root !== root) {
            t.equal(e.from.root, root,
              `edge in same tree ${e.from.location} -> ${n.location}`)
          }
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
    { update: { names: ['abbrev'] } })))

t.test('tracks changes of shrinkwrapped dep correctly', async t => {
  const path = t.testdir({
    'package.json': '{}',
  })

  const install1 = await printReified(path, { add: ['@nlf/shrinkwrapped-dep-updates-a@1.0.0'] })
  t.matchSnapshot(install1, 'install added the correct tree')

  const update1 = await printReified(path, { update: true })
  t.match(install1, update1, 'update maintains the same correct tree')

  const install2 = await printReified(path, { add: ['@nlf/shrinkwrapped-dep-updates-a@2.0.0'] })
  t.matchSnapshot(install2, 'installing new version brings in the correct children')

  const update2 = await printReified(path, { update: true })
  t.match(install2, update2, 'update maintains the same correct tree')

  // delete a dependency that was installed as part of the shrinkwrap
  realRimraf.sync(resolve(path, 'node_modules/@nlf/shrinkwrapped-dep-updates-a/node_modules/@nlf/shrinkwrapped-dep-updates-b'))
  const repair = await printReified(path)
  t.match(repair, install2, 'tree got repaired')
})

t.test('do not install optional deps with mismatched platform specifications', t =>
  t.resolveMatchSnapshot(printReified(
    fixture(t, 'optional-platform-specification'))))

t.test('still do not install optional deps with mismatched platform specifications even when forced', t =>
  t.resolveMatchSnapshot(printReified(
    fixture(t, 'optional-platform-specification'), { force: true })))

t.test('fail to install deps with mismatched platform specifications', t =>
  t.rejects(printReified(fixture(t, 'platform-specification')), { code: 'EBADPLATFORM' }))

t.test('dry run, do not get anything wet', async t => {
  const cases = [
    'shrinkwrapped-dep-with-lock-empty',
    'shrinkwrapped-dep-no-lock-empty',
    'link-dep-empty',
    'link-meta-deps-empty',
    'testing-bundledeps-empty',
  ]
  t.plan(cases.length)
  cases.forEach(c => t.test(c, async t => {
    const path = fixture(t, c)
    const arb = newArb({ path, dryRun: true })
    t.matchSnapshot(printTree(await arb.reify()))
    t.throws(() => fs.statSync(resolve(path, 'node_modules')))
    t.ok(arb.diff)
  }))
})

t.test('reifying with shronk warp dep', t => {
  const cases = [
    'shrinkwrapped-dep-with-lock',
    'shrinkwrapped-dep-with-lock-empty',
    'shrinkwrapped-dep-no-lock',
    'shrinkwrapped-dep-no-lock-empty',
  ]
  t.plan(cases.length)
  for (const c of cases) {
    t.test(c, async t => {
      const path = fixture(t, c)
      const tree = await printReified(path, {
        // set update so that we don't start the idealTree
        // with the actualTree, and can see that the deps
        // are indeed getting set up from the shrink wrap
        update: /no-lock/.test(c),
      })
      t.matchSnapshot(tree)
      const dep = `${path}/node_modules/@isaacs/shrinkwrapped-dependency`
      t.equal(fs.statSync(`${dep}/package.json`).isFile(), true, 'has package.json')
    })
  }
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

t.test('warn on reifying deprecated dependency', t => {
  const a = newArb({
    path: fixture(t, 'deprecated-dep'),
    lockfileVersion: 1,
  })
  const check = warningTracker()
  return a.reify({ update: true }).then(() => t.match(check(), [
    [
      'warn',
      'deprecated',
      'mkdirp@0.5.3: Legacy versions of mkdirp are no longer supported. ' +
      'Please update to mkdirp 1.x. (Note that the API surface has changed ' +
      'to use Promises in 1.x.)',
    ],
  ]))
})

t.test('rollbacks', { buffered: false }, t => {
  t.test('fail retiring shallow nodes', t => {
    const path = fixture(t, 'testing-bundledeps-3')
    const a = newArb({ path, legacyBundling: true })
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
    const a = newArb({ path, legacyBundling: true })
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
    const a = newArb({ path, legacyBundling: true })
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
    const a = newArb({ path, legacyBundling: true })
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
    failMkdir = null
    failRimraf = null
    const path = fixture(t, 'testing-bundledeps-3')
    const a = newArb({ path, legacyBundling: true })

    const kCreateST = Symbol.for('createSparseTree')
    const kRetireShallowNodes = Symbol.for('retireShallowNodes')
    const retireShallowNodes = a[kRetireShallowNodes]
    a[kRetireShallowNodes] = async () => {
      a[kRetireShallowNodes] = retireShallowNodes
      await a[kRetireShallowNodes]()
      failRimraf = true
    }
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
    return t.rejects(a.reify({
      update: ['@isaacs/testing-bundledeps-parent'],
    }).then(tree => 'it worked'), new Error('poop'))
      .then(() => {
        const warnings = check()
        t.equal(warnings.length, 2)
        t.match(warnings, [
          oldLockfileWarning,
          [
            'warn',
            'cleanup',
            'Failed to remove some directories',
            [[String, new Error('rimraf fail')]],
          ],
        ])
      })
      .then(() => failRimraf = false)
  })

  t.test('fail loading shrinkwraps and updating trees', t => {
    const path = fixture(t, 'shrinkwrapped-dep-no-lock-empty')
    const a = newArb({ path, legacyBundling: true })
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
    const a = newArb({ path, legacyBundling: true })
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
    const a = newArb({ path, legacyBundling: true })
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
    const a = newArb({ path, legacyBundling: true })
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
    const a = newArb({ path, legacyBundling: true })
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
      t.equal(warnings.length, 2)
      t.match(warnings, [
        oldLockfileWarning,
        [
          'warn',
          'cleanup',
          'Failed to remove some directories',
          [[String, new Error('rimraf fail')]],
        ],
      ])
    })
      .then(() => failRimraf = false)
  })

  t.end()
})

t.test('saving the ideal tree', t => {
  const kSaveIdealTree = Symbol.for('saveIdealTree')
  t.test('save=false', async t => {
    // doesn't actually do anything, just for coverage.
    // if it wasn't an early exit, it'd blow up and throw
    // an error though.
    const path = t.testdir()
    const a = newArb({ path })
    t.notOk(await a[kSaveIdealTree]({ save: false }))
  })

  t.test('save some stuff', t => {
    const pkg = {
      bundleDependencies: ['a', 'b', 'c'],
      dependencies: {
        a: 'git+ssh://git@github.com:foo/bar#baz',
        b: '',
        d: 'npm:c@1.x <1.9.9',
        // XXX: should we remove dependencies that are also workspaces?
        e: 'file:e',
        f: 'git+https://user:pass@github.com/baz/quux#asdf',
        g: '',
        h: '~1.2.3',
      },
      devDependencies: {
        c: `git+ssh://git@githost.com:a/b/c.git#master`,
      },
      workspaces: [
        'e',
      ],
    }

    const npa = require('npm-package-arg')
    const kResolvedAdd = Symbol.for('resolvedAdd')
    const path = t.testdir({
      'package.json': JSON.stringify(pkg),
      e: {
        'package.json': JSON.stringify({ name: 'e' }),
      },
      node_modules: {
        e: t.fixture('symlink', '../e'),
      },
    })
    const a = newArb({ path })
    const hash = '71f3ccfefba85d2048484569dba8c1829f6f41d7'
    return a.loadActual().then(tree => Shrinkwrap.load({ path }).then(meta => {
      tree.meta = meta
      meta.add(tree)
      return tree
    })).then(async tree => {
      // saving swaps the ideal tree onto the actual tree
      a.idealTree = tree

      // simulated child nodes
      // Note: these all show up as "extraneous" in the lockfile,
      // because we don't do the calcDepFlags step in this simulation,
      // but since we're only testing the saving step, that's fine.
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
      new Node({
        name: 'f',
        resolved: `git+https://user:pass@github.com/baz/quux#${hash}`,
        pkg: {
          name: 'f',
          version: '1.2.3',
        },
        parent: tree,
      })
      new Node({
        name: 'g',
        resolved: 'https://registry.npmjs.org/g/-/g-1.2.3.tgz',
        pkg: {
          name: 'g', // no version, somehow
        },
        parent: tree,
      })
      new Node({
        name: 'h',
        resolved: 'https://registry.npmjs.org/h/-/h-1.2.3.tgz',
        pkg: {
          name: 'h',
          version: '1.2.3',
        },
        parent: tree,
      })

      const target = new Node({
        name: 'e',
        pkg: {
          name: 'e',
        },
        path: resolve(tree.path, 'e'),
        fsParent: tree,
      })
      new Link({
        name: 'e',
        realpath: target.path,
        path: resolve(tree.path, 'node_modules/e'),
        resolved: 'file:../e',
        pkg: {
          name: 'e',
        },
      })

      a[kResolvedAdd] = [
        npa('a@git+ssh://git@github.com:foo/bar#baz'),
        npa('b'),
        npa('d@npm:c@1.x <1.9.9'),
        npa('c@git+ssh://git@githost.com:a/b/c.git#master'),
        npa('e'),
        npa('f@git+https://user:pass@github.com/baz/quux#asdf'),
        npa('g'),
        npa('h@~1.2.3'),
      ].map(spec => Object.assign(spec, { tree }))

      // NB: these are all going to be marked as extraneous, because we're
      // skipping the actual buildIdealTree step that flags them properly
      return a[kSaveIdealTree]({})
    }).then(saved => {
      t.ok(saved, 'true, because it was saved')
      t.matchSnapshot(require(path + '/package-lock.json'), 'lock after save')
      t.strictSame(require(path + '/package.json'), {
        bundleDependencies: ['a', 'b', 'c'],
        dependencies: {
          a: 'github:foo/bar#baz',
          b: '^1.2.3',
          d: 'npm:c@1.x <1.9.9',
          e: 'file:e',
          f: 'git+https://user:pass@github.com/baz/quux.git#asdf',
          g: '*',
          h: '~1.2.3',
        },
        workspaces: [
          'e',
        ],
        devDependencies: {
          c: 'git+ssh://git@githost.com:a/b/c.git#master',
        },
      })
    })
  })

  t.end()
})

t.test('scoped registries', async t => {
  const path = t.testdir()

  // this is a very artifical test that is setting a lot of internal things
  // up so that we assert that the intended behavior of sending right
  // resolved data for pacote.extract is working as intended, alternatively
  // we might prefer to replace this with a proper parallel alternative
  // registry server so that we can have more of an integration test instead
  let sawPacoteExtract = false
  const pacote = {
    extract: res => {
      sawPacoteExtract = true
      t.matchSnapshot(
        res,
        'should preserve original resolved value'
      )
      return true
    },
  }
  const ArboristMock = t.mock('../../lib/arborist', {
    ...mocks,
    pacote,
  })
  const a = new ArboristMock({
    audit: false,
    path,
    cache,
    registry,
  })
  const kReify = Symbol.for('reifyNode')
  a.idealTree = new Node({ path })

  const node = new Node({
    name: '@ruyadorno/theoretically-private-pkg',
    resolved: 'https://npm.pkg.github.com/@ruyadorno/' +
      'theoretically-private-pkg/-/theoretically-private-pkg-1.2.3.tgz',
    pkg: { version: '1.2.3', name: '@ruyadorno/theoretically-private-pkg' },
    parent: a.idealTree,
  })
  await a[kReify](node)
  t.equal(sawPacoteExtract, true, 'saw pacote extraction')
})

t.test('bin links adding and removing', t => {
  const path = t.testdir({
    'package.json': JSON.stringify({}),
  })
  const rbin = resolve(path, 'node_modules/.bin/rimraf')
  return reify(path, { add: ['rimraf@2.7.1'] })
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
  return reify(path, { add: ['rimraf@2'], globalStyle: true })
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
    reify(lib, { add: ['rimraf@2'], global: true })
      .then(() => fs.statSync(rimrafBin))
      .then(() => t.strictSame(fs.readdirSync(nm), ['rimraf'])))

  t.test('add semver', t =>
    reify(lib, { add: ['semver@6.3.0'], global: true })
      .then(() => fs.statSync(rimrafBin))
      .then(() => fs.statSync(semverBin))
      .then(() => t.strictSame(fs.readdirSync(nm).sort(), ['rimraf', 'semver'])))

  t.test('remove semver', t =>
    reify(lib, { rm: ['semver'], global: true })
      .then(() => fs.statSync(rimrafBin))
      .then(() => t.throws(() => fs.statSync(semverBin)))
      .then(() => t.strictSame(fs.readdirSync(nm), ['rimraf'])))

  t.test('remove rimraf', t =>
    reify(lib, { rm: ['rimraf'], global: true })
      .then(() => t.throws(() => fs.statSync(rimrafBin)))
      .then(() => t.throws(() => fs.statSync(semverBin)))
      .then(() => t.strictSame(fs.readdirSync(nm), [])))

  t.test('add without bin links', t =>
    reify(lib, { add: ['rimraf@2'], global: true, binLinks: false })
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
      for (const bin of bins) {
        if (process.platform === 'win32') {
          t.ok(fs.statSync(bin + '.cmd').isFile(), 'created shim')
        } else {
          t.ok(fs.lstatSync(bin).isSymbolicLink(), 'created symlink')
        }
      }
    }

    return t.resolveMatchSnapshot(printReified(path, {}))
      .then(checkBin)
  })

  t.test('reify from an actual loaded workspace env', t =>
    t.resolveMatchSnapshot(
      printReified(fixture(t, 'workspaces-non-simplistic')),
      'should not clean up entire nm folder for no reason'
    ))

  t.test('add new workspaces dep', t => {
    const path = fixture(t, 'workspaces-add-new-dep')
    reify(path).then(() => {
      t.matchSnapshot(require(path + '/package-lock.json'), 'should update package-lock with new added dep')
      t.end()
    })
  })

  t.test('root as-a-workspace', t => {
    const path = fixture(t, 'workspaces-root-linked')
    reify(path).then(() => {
      t.matchSnapshot(require(path + '/package-lock.json'), 'should produce expected package-lock file')
      t.end()
    })
  })

  t.end()
})

t.test('reify from old package-lock with bins', async t => {
  const path = fixture(t, 'old-package-lock-with-bins')
  await reify(path, {})

  t.matchSnapshot(
    require(resolve(path, 'package-lock.json')),
    'should add bins entry to package-lock packages entry'
  )

  const bin = resolve(path, 'node_modules/.bin/ruy')
  if (process.platform === 'win32') {
    t.ok(fs.statSync(`${bin}.cmd`).isFile(), 'created shim')
  } else {
    t.ok(fs.lstatSync(bin).isSymbolicLink(), 'created symlink')
  }
})

t.test('fail early if bins will conflict', async t => {
  const path = t.testdir({
    lib: {
      'semver.cmd': 'this is not the linked bin',
    },
    bin: {
      semver: 'this is not the linked bin',
    },
  })
  const arb = newArb({
    global: true,
    path: `${path}/lib`,
  })
  arb.rebuild = async () => {
    throw Object.assign(new Error('nope'), { code: 'NOPE' })
  }
  await t.rejects(arb.reify({ add: ['semver'] }), { code: 'EEXIST' })
})

t.test('add a dep present in the tree, with v1 shrinkwrap', async t => {
  // https://github.com/npm/arborist/issues/70
  const path = fixture(t, 'old-package-lock')
  await reify(path, { add: ['wrappy'] })
  t.matchSnapshot(fs.readFileSync(path + '/package.json', 'utf8'))
})

t.test('store files with a custom indenting', async t => {
  const tabIndentedPackageJson =
    fs.readFileSync(
      resolve(__dirname, '../fixtures/tab-indented-package-json/package.json'),
      'utf8'
    ).replace(/\r\n/g, '\n')
  const path = t.testdir({
    'package.json': tabIndentedPackageJson,
  })
  await reify(path)
  t.matchSnapshot(fs.readFileSync(path + '/package.json', 'utf8'))
  t.matchSnapshot(fs.readFileSync(path + '/package-lock.json', 'utf8'))
})

t.test('do not rewrite valid package.json shorthands', async t => {
  const path = fixture(t, 'package-json-shorthands')
  await reify(path)
  const res = require(path + '/package.json')
  t.equal(res.bin, './index.js', 'should not rewrite bin property')
  t.equal(res.funding, 'https://example.com', 'should not rewrite funding')
})

t.test('modules bundled by the root should be installed', async t => {
  const path = fixture(t, 'root-bundler')
  await reify(path)
  t.matchSnapshot(fs.readFileSync(path + '/node_modules/child/package.json', 'utf8'))
})

t.test('add a new pkg to a prefix that needs to be mkdirpd', async t => {
  const path = resolve(t.testdir(), 'missing/path/to/root')
  const tree = await reify(path, { add: ['abbrev'] })
  t.matchSnapshot(
    printTree(tree),
    'should output a successful tree in mkdirp folder'
  )
  t.matchSnapshot(
    fs.readFileSync(path + '/package.json', 'utf8'),
    'should place expected package.json file into place'
  )
  t.matchSnapshot(
    fs.readFileSync(path + '/package-lock.json', 'utf8'),
    'should place expected lockfile file into place'
  )

  t.test('dry run scenarios', async t => {
    const path = resolve(t.testdir(), 'missing/path/to/root')

    try {
      await reify(path, { add: ['abbrev'], dryRun: true })
    } catch (e) {
      // TODO: should this be throwing?
    }

    t.throws(() =>
      fs.statSync(resolve(path, 'node_modules')), { code: 'ENOENT' })

    t.throws(() =>
      fs.statSync(resolve(path, 'package.json')), { code: 'ENOENT' })
  })
})

t.test('do not delete root-bundled deps in global update', async t => {
  const path = t.testdir()
  const file = resolve(__dirname, '../fixtures/bundle.tgz')
  await reify(path, { global: true, add: [`file:${file}`] })
  const depPJ = resolve(path, 'node_modules/bundle/node_modules/dep/package.json')
  t.matchSnapshot(fs.readFileSync(depPJ, 'utf8'), 'after first install')
  await reify(path, { global: true, add: [`file:${file}`] })
  t.matchSnapshot(fs.readFileSync(depPJ, 'utf8'), 'after second install')
})

t.test('do not excessively duplicate bundled metadeps', async t => {
  const path = fixture(t, 'bundle-metadep-duplication')
  const tree = await reify(path)
  const hidden = path + '/node_modules/.package-lock.json'
  t.matchSnapshot(fs.readFileSync(hidden, 'utf8'), 'hidden lockfile')
  const plock = path + '/package-lock.json'
  t.matchSnapshot(fs.readFileSync(plock, 'utf8'), 'normal lockfile')
  t.matchSnapshot(printTree(tree), 'tree')
})

t.test('do not reify root when root matches duplicated metadep', async t => {
  const path = fixture(t, 'test-root-matches-metadep')
  await reify(path)
  fs.statSync(path + '/do-not-delete-this-file')
})

t.test('reify properly with all deps when lockfile is ancient', async t => {
  const path = fixture(t, 'sax')
  const tree = await reify(path)
  t.matchSnapshot(printTree(tree))
  fs.statSync(path + '/node_modules/tap/node_modules/.bin/nyc')
})

t.test('add multiple pkgs in a specific order', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      name: 'multiple-pkgs',
    }),
  })
  await reify(path, { add: ['wrappy', 'abbrev'] })
  t.matchSnapshot(
    fs.readFileSync(path + '/package.json', 'utf8'),
    'should alphabetically sort dependencies'
  )
  await reify(path, { add: ['once'] })
  t.matchSnapshot(
    fs.readFileSync(path + '/package.json', 'utf8'),
    'should alphabetically sort new added dep'
  )
})

t.test('save complete lockfile on update-all', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      name: 'save-package-lock-after-update-test',
      version: '1.0.0',
    }),
  })
  // install the older version first
  const lock = () => fs.readFileSync(`${path}/package-lock.json`, 'utf8')
  await reify(path, { add: ['abbrev@1.0.4'] })
  t.matchSnapshot(lock(), 'should have abbrev 1.0.4')
  await reify(path, { update: true })
  t.matchSnapshot(lock(), 'should update, but not drop root metadata')
})

t.test('save proper lockfile with bins when upgrading lockfile', t => {
  const completeOpts = [true, false]
  completeOpts.forEach(complete => {
    t.test(`complete=${complete}`, async t => {
      const path = fixture(t, 'semver-installed-with-old-package-lock')
      const lock = () => fs.readFileSync(`${path}/package-lock.json`, 'utf8')
      await reify(path, { complete })
      t.matchSnapshot(lock(), 'should upgrade, with bins in place')
    })
  })

  t.end()
})

t.test('rollback if process is terminated during reify process', async t => {
  const onExit = require('../../lib/signal-handling.js')
  // mock the process so we don't have to kill this test
  // copy-pasta from signal-handling test
  const EE = require('events')
  const proc = onExit.process = new class MockProcess extends EE {
    constructor () {
      super()
      this.pid = process.pid
    }

    // ignore the beforeExit handler, since we won't actually let that happen
    once (ev, ...args) {
      if (ev !== 'beforeExit') {
        return super.once(ev, ...args)
      }
    }

    kill (pid, signal) {
      if (pid !== this.pid) {
        throw Object.assign(new Error('wrong pid sent to kill() method'), {
          expect: this.pid,
          actual: pid,
        })
      }
      return new Promise(res => process.nextTick(() => {
        this.emit(signal)
        res()
      }))
    }
  }()

  t.teardown(() => onExit.process = process)

  const methods = [
    Symbol.for('retireShallowNodes'),
    Symbol.for('createSparseTree'),
    Symbol.for('loadShrinkwrapsAndUpdateTrees'),
    Symbol.for('loadBundlesAndUpdateTrees'),
    Symbol.for('unpackNewModules'),
    Symbol.for('moveBackRetiredUnchanged'),
    Symbol.for('build'),
    Symbol.for('removeTrash'),
  ]

  t.plan(methods.length)
  for (const method of methods) {
    t.test(Symbol.keyFor(method), t => {
      const orig = Arborist.prototype[method]
      t.teardown(() => Arborist.prototype[method] = orig)
      Arborist.prototype[method] = async function (...args) {
        return Promise.resolve(orig.call(this, ...args)).then(() =>
          proc.kill(process.pid, 'SIGINT'))
      }
      const path = t.testdir({
        'package.json': JSON.stringify({ dependencies: { abbrev: '' } }),
      })

      t.test('clean install', async t => {
        const arb = newArb({ path })
        // starting from an empty folder, ends up empty
        await t.rejects(arb.reify(), {
          message: 'process terminated',
          signal: 'SIGINT',
        })
        // if it fails while removing trash well... it's already over.
        // we can't actually roll back at that point, because "trash" is gone
        if (method !== Symbol.for('removeTrash')) {
          t.throws(() => fs.statSync(path + '/node_modules'), { code: 'ENOENT' })
        }
      })

      t.test('upgrade install', async t => {
        // ensure that we end up with the same thing we started with,
        // if it was something other than we're installing
        const a = resolve(path, 'node_modules/abbrev')
        mkdirp.sync(a)
        const pj = resolve(a, 'package.json')
        fs.writeFileSync(pj, JSON.stringify({
          name: 'abbrev',
          version: '0.0.0',
        }))
        const arb = newArb({ path })
        await t.rejects(arb.reify({ add: ['abbrev@1.1.1'] }), {
          message: 'process terminated',
          signal: 'SIGINT',
        })

        // if it fails while removing trash well... it's already over.
        // we can't actually roll back at that point, because "trash" is gone
        if (method !== Symbol.for('removeTrash')) {
          t.same(JSON.parse(fs.readFileSync(pj, 'utf8')), {
            name: 'abbrev',
            version: '0.0.0',
          })
        }
      })

      t.end()
    })
  }
})

t.test('warn and correct if damaged data in lockfile', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      dependencies: {
        abbrev: '',
      },
    }),
    'package-lock.json': JSON.stringify({
      name: 'garbage-in-reify-tree',
      lockfileVersion: 2,
      requires: true,
      packages: {
        '': {
          dependencies: {
            abbrev: '',
          },
        },
        'node_modules/abbrev': {
          integrity: 'sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==',
        },
      },
      dependencies: {
        abbrev: {
          integrity: 'sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==',
        },
      },
    }),
  })

  t.test('first pass logs', async t => {
    const getLogs = warningTracker()
    await reify(path)
    t.strictSame(getLogs(), [
      [
        'warn',
        'reify',
        'invalid or damaged lockfile detected\n' +
        'please re-try this operation once it completes\n' +
        'so that the damage can be corrected, or perform\n' +
        'a fresh install with no lockfile if the problem persists.',
      ],
    ], 'got warnings')
    t.matchSnapshot(fs.readFileSync(path + '/package-lock.json', 'utf8'), '"fixed" lockfile')
  })

  t.test('second pass just does the right thing', async t => {
    const getLogs = warningTracker()
    await reify(path)
    t.strictSame(getLogs(), [], 'no warnings this time')
    t.matchSnapshot(fs.readFileSync(path + '/package-lock.json', 'utf8'), 'actually fixed lockfile')
  })
})

t.test('properly update one module when multiple are present', async t => {
  const path = t.testdir({})
  const abbrevpj = resolve(path, 'node_modules/abbrev/package.json')
  const oncepj = resolve(path, 'node_modules/once/package.json')

  await newArb({ path, global: true }).reify({ add: ['abbrev@1.0.4'] })
  t.equal(JSON.parse(fs.readFileSync(abbrevpj, 'utf8')).version, '1.0.4')
  t.throws(() => fs.readFileSync(oncepj, 'utf8'), 'once should not be yet')

  await newArb({ path, global: true }).reify({ add: ['once'] })
  t.equal(JSON.parse(fs.readFileSync(abbrevpj, 'utf8')).version, '1.0.4')
  t.equal(JSON.parse(fs.readFileSync(oncepj, 'utf8')).version, '1.4.0')

  await newArb({ path, global: true }).reify({ update: ['abbrev'] })
  t.equal(JSON.parse(fs.readFileSync(abbrevpj, 'utf8')).version, '1.1.1')
  t.equal(JSON.parse(fs.readFileSync(oncepj, 'utf8')).version, '1.4.0')
})

t.test('saving should not replace file: dep with version', async t => {
  // need to run in the path, as if the user typed `npm i file:abbrev`
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  const path = t.testdir({
    abbrev: {
      'package.json': JSON.stringify({
        name: 'abbrev',
        version: '1.1.1',
      }),
    },
    'package.json': JSON.stringify({}),
  })
  process.chdir(path)

  const pj = resolve(path, 'package.json')
  await newArb({ path, save: true }).reify({ add: ['file:abbrev'] })
  const pj1 = fs.readFileSync(pj, 'utf8')
  t.equal(JSON.parse(pj1).dependencies.abbrev, 'file:abbrev',
    'saved as file: spec after file: install')
  await newArb({ path, save: true }).reify({ add: ['abbrev'] })
  const pj2 = fs.readFileSync(pj, 'utf8')
  t.equal(JSON.parse(pj2).dependencies.abbrev, 'file:abbrev',
    'still a file: spec after a bare name install')
})

t.test('filtered reification in workspaces', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      workspaces: [
        'apps/*',
        'packages/*',
      ],
    }),
    // 'apps' comes ahead of 'node_modules' alphabetically,
    // included in the test so that we ensure that the copy
    // over works properly in both directions.
    apps: {
      x: {
        'package.json': JSON.stringify({
          name: 'x',
          version: '1.2.3',
        }),
      },
    },
    // this is going to be a workspace that we switch to in the ideal
    // tree, but the actual tree will still be lagging behind.
    foo: {
      x: {
        'package.json': JSON.stringify({
          name: 'x',
          version: '1.2.3',
        }),
      },
    },
    packages: {
      a: {
        'package.json': JSON.stringify({
          name: 'a',
          version: '1.2.3',
          dependencies: {
            once: '',
            wrappy: '1.0.2',
          },
        }),
      },
      b: {
        'package.json': JSON.stringify({
          name: 'b',
          version: '1.2.3',
          dependencies: {
            abbrev: '',
          },
        }),
      },
      c: {
        'package.json': JSON.stringify({
          name: 'c',
          version: '1.2.3',
          dependencies: {
            wrappy: '1.0.0',
          },
        }),
      },
    },
  })

  const hiddenLock = resolve(path, 'node_modules/.package-lock.json')

  t.matchSnapshot(await printReified(path, { workspaces: ['c'] }),
    'reify the c workspace only')

  t.matchSnapshot(fs.readFileSync(hiddenLock, 'utf8'),
    'hidden lockfile - c')

  t.matchSnapshot(await printReified(path, { workspaces: ['x'] }),
    'reify the x workspace after reifying c')

  t.matchSnapshot(fs.readFileSync(hiddenLock, 'utf8'),
    'hidden lockfile - c, x')

  t.matchSnapshot(await printReified(path, { workspaces: ['a'] }),
    'reify the a workspace after reifying c')

  t.matchSnapshot(fs.readFileSync(hiddenLock, 'utf8'),
    'hidden lockfile - c, x, a')

  // now remove the a workspace, and move x to a new target location,
  // but we will not reify the apps->foo change.
  fs.writeFileSync(`${path}/package.json`, JSON.stringify({
    workspaces: [
      'foo/*',
      'packages/b',
      'packages/c',
    ],
  }))

  t.matchSnapshot(await printReified(path, { workspaces: ['a', 'c'] }),
    'reify the workspaces, removing a and leaving c and old x in place')

  t.matchSnapshot(fs.readFileSync(hiddenLock, 'utf8'),
    'hidden lockfile - c, old x, removed a')

  // Same thing, BUT, we now have a reason to already have the foo/x
  // in fsChildren.  fully reify with this package.json, then change
  // the root package.json back to the test above.  This exercises an
  // edge case where the actual and ideal trees are somewhat out of sync,
  // by virtue of the actualTree being generated with a package.json
  // which has changed, but where only PART of the idealTree is reified
  // over it.
  fs.writeFileSync(`${path}/package.json`, JSON.stringify({
    dependencies: {
      foox: 'file:foo/x',
    },
    workspaces: [
      'apps/x',
      'packages/a',
      'packages/c',
    ],
  }))
  await reify(path)
  fs.writeFileSync(`${path}/package.json`, JSON.stringify({
    workspaces: [
      'foo/*',
      'packages/b',
      'packages/c',
    ],
  }))
  t.matchSnapshot(await printReified(path, { workspaces: ['a', 'c'] }),
    'reify the workspaces, foo/x linked, c, old x, removed a')

  t.matchSnapshot(fs.readFileSync(hiddenLock, 'utf8'),
    'hidden lockfile - foo/x linked, c, old x, removed a')
})

t.test('project with bundled deps and a link dep on itself', async t => {
  const pkg = {
    name: '@isaacs/testing-bundle-self-link',
    version: '1.0.0',
    bin: {
      'testing-bundle-self-link': 'bin.js',
    },
    scripts: {
      test: 'testing-bundle-self-link',
      postinstall: 'testing-bundle-self-link',
    },
    bundleDependencies: [
      'abbrev',
    ],
    dependencies: {
      '@isaacs/testing-bundle-self-link': 'file:.',
      abbrev: '',
    },
  }
  const path = t.testdir({
    'package.json': JSON.stringify(pkg),
    'bin.js': `#!/usr/bin/env node
console.log('TAP version 13')
console.log('1..1')
console.log('ok 1 - this is fine')
`,
  })

  t.matchSnapshot(await printReified(path), 'result')
  t.resolves(runScript({
    event: 'test',
    path,
    pkg,
    stdioString: true,
    stdio: 'pipe',
  }), 'test result')
})

t.test('running lifecycle scripts of unchanged link nodes on reify', async t => {
  const path = fixture(t, 'link-dep-lifecycle-scripts')
  t.matchSnapshot(await printReified(path), 'result')

  t.ok(fs.lstatSync(resolve(path, 'a/a-prepare')).isFile(),
    'should run prepare lifecycle scripts for links directly linked to the tree')
})

t.test('save-prod, with optional', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      devDependencies: { abbrev: '*' },
      optionalDependencies: { abbrev: '*' },
    }),
  })
  const arb = newArb({ path })
  await arb.reify({ add: ['abbrev'], saveType: 'prod' })
  t.matchSnapshot(fs.readFileSync(path + '/package.json', 'utf8'))
})

t.test('no saveType: dev w/ compatible peer', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      peerDependencies: { abbrev: '*' },
      devDependencies: { abbrev: '*' },
    }),
  })
  const arb = newArb({ path })
  await arb.reify({ add: ['abbrev'] })
  t.matchSnapshot(fs.readFileSync(path + '/package.json', 'utf8'))
})

t.test('no saveType: dev w/ incompatible peer', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      peerDependencies: { abbrev: '0.0.0' },
      devDependencies: { abbrev: '*' },
    }),
  })
  const arb = newArb({ path })
  await arb.reify({ add: ['abbrev'] })
  t.matchSnapshot(fs.readFileSync(path + '/package.json', 'utf8'))
})

t.test('no saveType: dev w/ compatible optional', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      optionalDependencies: { abbrev: '*' },
      devDependencies: { abbrev: '*' },
    }),
  })
  const arb = newArb({ path })
  await arb.reify({ add: ['abbrev'] })
  t.matchSnapshot(fs.readFileSync(path + '/package.json', 'utf8'))
})

t.test('no saveType: dev w/ incompatible optional', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      optionalDependencies: { abbrev: '0.0.0' },
      devDependencies: { abbrev: '*' },
    }),
  })
  const arb = newArb({ path })
  await arb.reify({ add: ['abbrev'] })
  t.matchSnapshot(fs.readFileSync(path + '/package.json', 'utf8'))
})

t.test('no saveType: prod w/ peer', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      peerDependencies: { abbrev: '*' },
      dependencies: { abbrev: '*' },
    }),
  })
  const arb = newArb({ path })
  await arb.reify({ add: ['abbrev'] })
  t.matchSnapshot(fs.readFileSync(path + '/package.json', 'utf8'))
})

t.test('no saveType: peer only', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      peerDependencies: { abbrev: '*' },
    }),
  })
  const arb = newArb({ path })
  await arb.reify({ add: ['abbrev'] })
  t.matchSnapshot(fs.readFileSync(path + '/package.json', 'utf8'))
})

t.test('no saveType: optional only', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      optionalDependencies: { abbrev: '*' },
    }),
  })
  const arb = newArb({ path })
  await arb.reify({ add: ['abbrev'] })
  t.matchSnapshot(fs.readFileSync(path + '/package.json', 'utf8'))
})

t.test('do not delete linked targets when link omitted', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      devDependencies: {
        foo: 'file:foo',
      },
      dependencies: {
        abbrev: '',
      },
    }),
    node_modules: {
      foo: t.fixture('symlink', '../foo'),
      abbrev: {
        'package.json': JSON.stringify({
          name: 'abbrev',
          version: '1.2.3',
        }),
      },
    },
    foo: {
      'package.json': JSON.stringify({
        name: 'foo',
        version: '1.2.3',
        dependencies: {
          bar: '1.2.3',
        },
      }),
      'index.js': 'console.log("hello from foo")',
      node_modules: {
        bar: {
          'package.json': JSON.stringify({
            name: 'bar',
            version: '1.2.3',
          }),
        },
      },
    },
  })
  const barpj = resolve(path, 'foo/node_modules/bar/package.json')
  const fooindex = resolve(path, 'foo/index.js')
  t.equal(fs.existsSync(barpj), true, 'bar package.json present')
  t.equal(fs.existsSync(fooindex), true, 'foo index.js present')
  const tree = await reify(path, { omit: ['dev'] })
  t.equal(fs.existsSync(barpj), true, 'bar package.json still present')
  t.equal(fs.existsSync(fooindex), true, 'foo index.js still present')
  t.notOk(tree.children.get('foo'), 'does not have foo child any more')
  t.equal(tree.fsChildren.size, 1, 'still has foo fschild')
})

t.test('add spec * with semver prefix range gets updated', async t => {
  const path = t.testdir({ 'package.json': '{}' })
  const arb = newArb({ path })
  await arb.reify({ add: ['latest-is-prerelease'] })
  t.matchSnapshot(fs.readFileSync(path + '/package.json', 'utf8'))
})

t.test('add deps to workspaces', async t => {
  const fixture = {
    'package.json': JSON.stringify({
      workspaces: [
        'packages/*',
      ],
      dependencies: {
        mkdirp: '^1.0.4',
      },
    }),
    packages: {
      a: {
        'package.json': JSON.stringify({
          name: 'a',
          version: '1.2.3',
          dependencies: {
            mkdirp: '^0.5.0',
          },
        }),
      },
      b: {
        'package.json': JSON.stringify({
          name: 'b',
          version: '1.2.3',
        }),
      },
    },
  }

  t.test('no args', async t => {
    const path = t.testdir(fixture)
    const tree = await reify(path)
    t.equal(tree.children.get('mkdirp').version, '1.0.4')
    t.equal(tree.children.get('a').target.children.get('mkdirp').version, '0.5.5')
    t.equal(tree.children.get('b').target.children.get('mkdirp'), undefined)
    t.matchSnapshot(printTree(tree), 'returned tree')
    t.matchSnapshot(require(path + '/package-lock.json'), 'lockfile')
  })

  t.test('add mkdirp 0.5.0 to b', async t => {
    const path = t.testdir(fixture)
    await reify(path)
    const tree = await reify(path, { workspaces: ['b'], add: ['mkdirp@0.5.0'] })
    t.equal(tree.children.get('mkdirp').version, '1.0.4')
    t.equal(tree.children.get('a').target.children.get('mkdirp').version, '0.5.5')
    t.equal(tree.children.get('b').target.children.get('mkdirp').version, '0.5.0')
    t.matchSnapshot(printTree(tree), 'returned tree')
    t.matchSnapshot(require(path + '/packages/b/package.json'), 'package.json b')
    t.matchSnapshot(require(path + '/package-lock.json'), 'lockfile')
  })

  t.test('remove mkdirp from a', async t => {
    const path = t.testdir(fixture)
    await reify(path)
    const tree = await reify(path, { workspaces: ['a'], rm: ['mkdirp'] })
    t.equal(tree.children.get('mkdirp').version, '1.0.4')
    t.equal(tree.children.get('a').target.children.get('mkdirp'), undefined)
    t.equal(tree.children.get('a').target.edgesOut.get('mkdirp'), undefined)
    t.equal(tree.children.get('b').target.children.get('mkdirp'), undefined)
    t.matchSnapshot(printTree(tree), 'returned tree')
    t.matchSnapshot(require(path + '/packages/a/package.json'), 'package.json a')
    t.matchSnapshot(require(path + '/package-lock.json'), 'lockfile')
  })

  t.test('upgrade mkdirp in a, dedupe on root', async t => {
    const path = t.testdir(fixture)
    await reify(path)
    const tree = await reify(path, { workspaces: ['a'], add: ['mkdirp@1'] })
    t.equal(tree.children.get('mkdirp').version, '1.0.4')
    t.equal(tree.children.get('a').target.children.get('mkdirp'), undefined)
    t.equal(tree.children.get('a').target.edgesOut.get('mkdirp').spec, '^1.0.4')
    t.equal(tree.children.get('b').target.children.get('mkdirp'), undefined)
    t.matchSnapshot(printTree(tree), 'returned tree')
    t.matchSnapshot(require(path + '/packages/a/package.json'), 'package.json a')
    t.matchSnapshot(require(path + '/package-lock.json'), 'lockfile')
  })

  t.test('add mkdirp 0.5.0 to b, empty start', async t => {
    const path = t.testdir(fixture)
    const tree = await reify(path, { workspaces: ['b'], add: ['mkdirp@0.5.0'] })
    t.equal(tree.children.get('mkdirp'), undefined)
    t.equal(tree.children.get('a'), undefined, 'did not even link workspace "a"')
    t.equal(tree.children.get('b').target.children.get('mkdirp').version, '0.5.0')
    t.matchSnapshot(printTree(tree), 'returned tree')
    t.matchSnapshot(require(path + '/packages/b/package.json'), 'package.json b')
    t.matchSnapshot(require(path + '/package-lock.json'), 'lockfile')
  })

  t.test('remove mkdirp from a, empty start', async t => {
    const path = t.testdir(fixture)
    const tree = await reify(path, { workspaces: ['a'], rm: ['mkdirp'] })
    t.equal(tree.children.get('mkdirp'), undefined)
    t.equal(tree.children.get('a').target.children.get('mkdirp'), undefined)
    t.equal(tree.children.get('a').target.edgesOut.get('mkdirp'), undefined)
    t.equal(tree.children.get('b'), undefined, 'did not link workspace "b"')
    t.matchSnapshot(printTree(tree), 'returned tree')
    t.matchSnapshot(require(path + '/packages/a/package.json'), 'package.json a')
    t.matchSnapshot(require(path + '/package-lock.json'), 'lockfile')
  })

  t.test('upgrade mkdirp in a, dedupe on root, empty start', async t => {
    const path = t.testdir(fixture)
    const tree = await reify(path, { workspaces: ['a'], add: ['mkdirp@1'] })
    t.equal(tree.children.get('mkdirp').version, '1.0.4')
    t.equal(tree.children.get('a').target.children.get('mkdirp'), undefined)
    t.equal(tree.children.get('a').target.edgesOut.get('mkdirp').spec, '^1.0.4')
    t.equal(tree.children.get('b'), undefined, 'did not link "b" workspace')
    t.matchSnapshot(printTree(tree), 'returned tree')
    t.matchSnapshot(require(path + '/packages/a/package.json'), 'package.json a')
    t.matchSnapshot(require(path + '/package-lock.json'), 'lockfile')
  })
})

t.test('reify audit only workspace deps when reifying workspace', async t => {
  const auditFile = resolve(__dirname, '../fixtures/audit-nyc-mkdirp/advisory-bulk.json')
  t.teardown(advisoryBulkResponse(auditFile))
  const path = t.testdir({
    'package.json': JSON.stringify({
      workspaces: ['packages/*'],
    }),
    packages: {
      a: {
        'package.json': JSON.stringify({
          name: 'a',
          version: '1.2.3',
          dependencies: {
            'kind-of': '6.0.0',
          },
        }),
      },
      b: {
        'package.json': JSON.stringify({
          name: 'b',
          version: '1.2.3',
          dependencies: {
            minimist: '0.0.8',
          },
        }),
      },
    },
  })
  const arb = newArb({ path, audit: true, workspaces: ['a'] })
  const tree = await arb.reify()
  const report = arb.auditReport.toJSON()
  t.equal(report.vulnerabilities.minimist, undefined, 'minimist not audited')
  t.match(report.vulnerabilities['kind-of'], {
    name: 'kind-of',
    severity: 'low',
    range: '6.0.0 - 6.0.2',
    nodes: ['node_modules/kind-of'],
    fixAvailable: {
      name: 'kind-of',
      version: '6.0.3',
      isSemVerMajor: false,
    },
    via: [{
      source: 1490,
      name: 'kind-of',
      dependency: 'kind-of',
      title: 'Validation Bypass',
      url: 'https://npmjs.com/advisories/1490',
      severity: 'low',
      range: '>=6.0.0 <6.0.3',
    }],
  }, 'kind-of audited')
  t.matchSnapshot(printTree(tree), 'resulting tree')
})

t.test('update a dep when the lockfile is lying about it', async t => {
  // lockfile and pj have new version, but old version is in nm
  // no hidden lockfile to provide metadata
  const path = t.testdir({
    'package.json': JSON.stringify({
      dependencies: {
        abbrev: '1.1.1',
      },
    }),
    'package-lock.json': JSON.stringify({
      lockfileVersion: 2,
      requires: true,
      packages: {
        '': {
          devDependencies: {
            abbrev: '1.1.1',
          },
        },
        'node_modules/abbrev': {
          version: '1.1.1',
          resolved: 'https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz',
          integrity: 'sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==',
          dev: true,
        },
      },
      dependencies: {
        abbrev: {
          version: '1.1.1',
          resolved: 'https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz',
          integrity: 'sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==',
          dev: true,
        },
      },
    }),
    node_modules: {
      abbrev: {
        'package.json': JSON.stringify({
          name: 'abbrev',
          version: '1.1.0',
        }),
      },
    },
  })

  const tree = await reify(path)
  const abbrev = tree.children.get('abbrev')
  t.equal(abbrev.version, '1.1.1')
  t.equal(require(abbrev.path + '/package.json').version, '1.1.1')
})

t.test('shrinkwrap which lacks metadata updates deps', async t => {
  const path = t.testdir({
    'package.json': '{}',
  })

  const first = await reify(path, {
    add: ['@isaacs/testing-shrinkwrap-abbrev@1.2.0'],
  })
  const firstAbbrev = first.children.get('@isaacs/testing-shrinkwrap-abbrev')
    .children.get('abbrev')
  t.equal(firstAbbrev.version, '1.1.0')

  const abbrevPath = firstAbbrev.path
  const abbrevpj = () =>
    JSON.parse(fs.readFileSync(abbrevPath + '/package.json', 'utf8'))

  t.equal(abbrevpj().version, firstAbbrev.version)

  const second = await reify(path, {
    add: ['@isaacs/testing-shrinkwrap-abbrev@1.2.1'],
  })
  const secondAbbrev = second.children.get('@isaacs/testing-shrinkwrap-abbrev')
    .children.get('abbrev')
  t.equal(secondAbbrev.version, '1.1.1')
  t.equal(abbrevpj().version, secondAbbrev.version)
})

t.test('move aside symlink clutter', async t => {
  // have to make the clutter manually, because we collide packages based
  // on case-insensitive names, so the ABBREV folder would be removed.
  // not sure how this would ever happen, but defense in depth.
  const path = t.testdir({
    'package.json': JSON.stringify({
      dependencies: {
        abbrev: 'latest',
      },
    }),
    target: {
      file: 'do not delete me please',
      'package.json': JSON.stringify({ name: 'ABBREV', version: '1.0.0' }),
    },
    'sensitivity-test': t.fixture('symlink', './target'),
  })

  // check to see if we're on a case-insensitive fs
  try {
    const st = fs.lstatSync(path + '/SENSITIVITY-TEST')
    t.equal(st.isSymbolicLink(), true, 'fs is case insensitive')
  } catch (er) {
    t.plan(0, 'case sensitive file system, test not relevant')
    return
  }

  const kReifyPackages = Symbol.for('reifyPackages')
  const reifyPackages = Arborist.prototype[kReifyPackages]
  t.teardown(() => Arborist.prototype[kReifyPackages] = reifyPackages)
  Arborist.prototype[kReifyPackages] = async function () {
    fs.mkdirSync(path + '/node_modules')
    fs.symlinkSync('../target', path + '/node_modules/ABBREV')
    Arborist.prototype[kReifyPackages] = reifyPackages
    return this[kReifyPackages]()
  }

  const tree = await printReified(path)
  const st = fs.lstatSync(path + '/node_modules/abbrev')
  t.equal(st.isSymbolicLink(), false)
  t.equal(st.isDirectory(), true)
  const realName = basename(fs.realpathSync.native(path + '/node_modules/abbrev'))
  t.equal(realName, 'abbrev', 'lowercase form is the winner')
  t.equal(fs.readFileSync(path + '/target/file', 'utf8'),
    'do not delete me please')
  const linkPJ = fs.readFileSync(path + '/target/package.json', 'utf8')
  t.strictSame(JSON.parse(linkPJ), {
    name: 'ABBREV',
    version: '1.0.0',
  })
  const abbrevPJ = fs.readFileSync(path + '/node_modules/abbrev/package.json', 'utf8')
  t.match(JSON.parse(abbrevPJ), {
    name: 'abbrev',
    version: '1.1.1',
  })

  t.matchSnapshot(tree)
})

t.test('collide case-variant dep names', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      dependencies: {
        ABBREV: 'file:target',
        abbrev: '1',
      },
    }),
    target: {
      file: 'do not delete me please',
      'package.json': JSON.stringify({ name: 'ABBREV', version: '1.0.0' }),
    },
    node_modules: {
      ABBREV: t.fixture('symlink', '../target'),
    },
  })

  const tree = await printReified(path)
  const st = fs.lstatSync(path + '/node_modules/abbrev')
  t.equal(st.isSymbolicLink(), false)
  const realName = basename(fs.realpathSync.native(path + '/node_modules/abbrev'))
  t.equal(realName, 'abbrev', 'lowercase form is the winner')
  t.equal(fs.readFileSync(path + '/target/file', 'utf8'),
    'do not delete me please')
  const linkPJ = fs.readFileSync(path + '/target/package.json', 'utf8')
  t.strictSame(JSON.parse(linkPJ), {
    name: 'ABBREV',
    version: '1.0.0',
  })

  t.matchSnapshot(tree, 'tree 1')
  const tree2 = await printReified(path, { add: ['abbrev@latest'] })
  t.matchSnapshot(tree2, 'tree 2')
  const linkPJ2 = fs.readFileSync(path + '/target/package.json', 'utf8')
  t.strictSame(JSON.parse(linkPJ2), {
    name: 'ABBREV',
    version: '1.0.0',
  }, 'target was not overwritten')
  t.equal(fs.readFileSync(path + '/target/file', 'utf8'),
    'do not delete me please')
  const abbrevPJ = fs.readFileSync(path + '/node_modules/abbrev/package.json', 'utf8')
  t.match(JSON.parse(abbrevPJ), {
    name: 'abbrev',
    version: '1.1.1',
  })
})

t.test('node_modules may not be a symlink', async t => {
  const path = t.testdir({
    target: {},
    node_modules: t.fixture('symlink', 'target'),
    'package.json': JSON.stringify({
      dependencies: {
        abbrev: '',
      },
    }),
  })
  const warnings = warningTracker()
  const tree = await printReified(path)
  t.matchSnapshot(tree)
  t.matchSnapshot(normalizePaths(warnings()))
})

t.test('never unpack into anything other than a real directory', async t => {
  const kUnpack = Symbol.for('unpackNewModules')
  const unpackNewModules = Arborist.prototype[kUnpack]
  const path = t.testdir({
    'package.json': JSON.stringify({
      dependencies: {
        once: '',
        wrappy: 'file:target',
      },
    }),
    target: {
      donotdeleteme: 'please do not delete this',
      'package.json': JSON.stringify({
        name: 'donotclobberme',
        version: '1.2.3-please-do-not-clobber',
      }),
    },
  })
  const arb = newArb({ path })
  const logs = debugLogTracker()
  const wrappy = resolve(path, 'node_modules/once/node_modules/wrappy')
  arb[kUnpack] = () => {
    // will have already created it
    realRimraf.sync(wrappy)
    const target = resolve(path, 'target')
    fs.symlinkSync(target, wrappy, 'junction')
    arb[kUnpack] = unpackNewModules
    return arb[kUnpack]()
  }
  await t.rejects(arb.reify({ path }), {
    message: 'ENOTDIR: not a directory',
    code: 'ENOTDIR',
    path: wrappy,
  })
  t.match(logs(), [['unpacking into a non-directory', { path: wrappy }]])
})

t.test('adding an unresolvable optional dep is OK', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      optionalDependencies: {
        abbrev: '999999',
      },
    }),
  })
  const tree = await reify(path, { add: ['abbrev'] })
  t.strictSame([...tree.children.values()], [], 'nothing actually added')
  t.matchSnapshot(printTree(tree))
})

t.test('includeWorkspaceRoot in addition to workspace', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      dependencies: {
        once: '',
      },
      workspaces: ['packages/*'],
    }),
    packages: {
      a: {
        'package.json': JSON.stringify({
          name: 'a',
          version: '1.0.1',
          dependencies: {
            abbrev: '',
          },
        }),
      },
      b: {
        'package.json': JSON.stringify({
          name: 'b',
          version: '9.8.1',
          dependencies: {
            semver: '',
          },
        }),
      },
    },
  })
  const tree = await reify(path, { includeWorkspaceRoot: true, workspaces: ['a'] })
  t.matchSnapshot(printTree(tree))
  t.equal(tree.inventory.query('name', 'semver').size, 0)
  t.equal(tree.inventory.query('name', 'abbrev').size, 1)
  t.equal(tree.inventory.query('name', 'once').size, 1)
})

t.test('no workspace', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      dependencies: {
        once: '',
      },
      workspaces: ['packages/*'],
    }),
    packages: {
      a: {
        'package.json': JSON.stringify({
          name: 'a',
          version: '1.0.1',
          dependencies: {
            abbrev: '',
          },
        }),
      },
      b: {
        'package.json': JSON.stringify({
          name: 'b',
          version: '9.8.1',
          dependencies: {
            semver: '',
          },
        }),
      },
    },
  })
  const tree = await reify(path, { workspacesEnabled: false, workspaces: ['a', 'b'] })
  t.matchSnapshot(printTree(tree))
  t.equal(tree.inventory.query('name', 'semver').size, 0)
  t.equal(tree.inventory.query('name', 'abbrev').size, 0)
  t.equal(tree.inventory.query('name', 'once').size, 1)
})

t.test('add local dep with existing dev + peer/optional', async t => {
  const path = t.testdir({
    project: {
      'package.json': JSON.stringify({
        devDependencies: {
          abbrev: '^1.0.0',
        },
        peerDependencies: {
          abbrev: '^1.0.0',
        },
        optionalDependencies: {
          abbrev: '^1.0.0',
        },
      }),
    },
    dep: {
      'package.json': JSON.stringify({
        name: 'abbrev',
        version: '1.0.0',
      }),
    },
  })

  const project = resolve(path, 'project')
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  process.chdir(project)

  const tree = await reify(project, { add: ['../dep'] })

  t.matchSnapshot(printTree(tree), 'tree')
  t.equal(tree.children.get('abbrev').resolved, 'file:../../dep', 'resolved')
  t.equal(tree.children.size, 1, 'children')
})

t.test('run hooks', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      name: 'hook-test',
    }),
  })
  const tree = await reify(path, { hooks: {
    [Symbol.for('beforeReify')]: (arborist) => {
      arborist.idealTree.package.name = 'hook-test-modified'
    } } })
  t.matchSnapshot(printTree(tree))
})

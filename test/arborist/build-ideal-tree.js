const {basename, resolve, relative} = require('path')
const t = require('tap')
const Arborist = require('../..')
const fixtures = resolve(__dirname, '../fixtures')
// load the symbolic links that we depend on
require(fixtures)
const {start, stop, registry, auditResponse} = require('../fixtures/registry-mocks/server.js')
const npa = require('npm-package-arg')
const fs = require('fs')

t.before(start)
t.teardown(stop)

const cache = t.testdir()

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

const {
  normalizePath,
  normalizePaths,
  printTree,
} = require('../utils.js')

const cwd = normalizePath(process.cwd())
t.cleanSnapshot = s => s.split(cwd).join('{CWD}')
  .split(registry).join('https://registry.npmjs.org/')

const printIdeal = (path, opt) => buildIdeal(path, opt).then(printTree)

// give it a very long timeout so CI doesn't crash as easily
const OPT = { cache, registry, timeout: 30 * 60 * 1000 }

const newArb = (path, opt = {}) => new Arborist({ ...OPT, path, ...opt })
const buildIdeal = (path, opt) => newArb(path, opt).buildIdealTree(opt)

t.test('fail on mismatched engine when engineStrict is set', async t => {
  const path = resolve(fixtures, 'engine-specification')

  t.rejects(buildIdeal(path, {
    ...OPT,
    nodeVersion: '12.18.4',
    engineStrict: true,
  }).then(() => {
    throw new Error('failed to fail')
  }), { code: 'EBADENGINE' })
})

t.test('fail on malformed package.json', t => {
  const path = resolve(fixtures, 'malformed-json')

  return t.rejects(
    buildIdeal(path),
    { code: 'EJSONPARSE' },
    'should fail with EJSONPARSE error'
  )
})

t.test('ignore mismatched engine for optional dependencies', async t => {
  const path = resolve(fixtures, 'optional-engine-specification')
  await buildIdeal(path, {
    ...OPT,
    nodeVersion: '12.18.4',
    engineStrict: true,
  })
})

t.test('warn on mismatched engine when engineStrict is false', t => {
  const path = resolve(fixtures, 'engine-specification')
  const check = warningTracker()
  return buildIdeal(path, {
    ...OPT,
    nodeVersion: '12.18.4',
    engineStrict: false,
  }).then(() => t.match(check(), [
    ['warn', 'EBADENGINE'],
  ]))
})

t.test('fail on mismatched platform', async t => {
  const path = resolve(fixtures, 'platform-specification')
  t.rejects(buildIdeal(path, {
    ...OPT,
    nodeVersion: '4.0.0',
  }).then(() => {
    throw new Error('failed to fail')
  }), { code: 'EBADPLATFORM' })
})

t.test('ignore mismatched platform for optional dependencies', async t => {
  const path = resolve(fixtures, 'optional-platform-specification')
  const tree = await buildIdeal(path, {
    ...OPT,
    nodeVersion: '12.18.4',
    engineStrict: true,
  })
  t.equal(tree.children.get('platform-specifying-test-package').package.version, '1.0.0', 'added the optional dep to the ideal tree')
})

t.test('no options', t => {
  const arb = new Arborist()
  t.match(
    arb.registry,
    'https://registry.npmjs.org',
    'should use default registry'
  )
  t.end()
})

t.test('a workspace with a conflicted nested duplicated dep', async t => {
  t.matchSnapshot(await printIdeal(resolve(fixtures, 'workspace4')))
})

t.test('a tree with an outdated dep, missing dep, no lockfile', async t => {
  const path = resolve(fixtures, 'outdated-no-lockfile')
  const tree = await buildIdeal(path)
  const expected = {
    once: '1.3.3',
    wrappy: '1.0.1',
  }
  for (const [name, version] of Object.entries(expected))
    t.equal(tree.children.get(name).package.version, version, `expect ${name}@${version}`)

  t.matchSnapshot(printTree(tree), 'should not update all')
})

t.test('tarball deps with transitive tarball deps', t =>
  t.resolveMatchSnapshot(printIdeal(
    resolve(fixtures, 'tarball-dependencies'))))

t.test('testing-peer-deps-overlap package', t => {
  const path = resolve(fixtures, 'testing-peer-deps-overlap')
  return buildIdeal(path).then(idealTree => new Arborist({ path, idealTree, ...OPT })
    .buildIdealTree().then(tree2 => t.equal(tree2, idealTree))
    .then(() => t.matchSnapshot(printTree(idealTree), 'build ideal tree with overlapping peer dep ranges')))
})

t.test('testing-peer-deps package', t => {
  const path = resolve(fixtures, 'testing-peer-deps')
  return buildIdeal(path).then(idealTree => new Arborist({path, idealTree, ...OPT})
    .buildIdealTree().then(tree2 => t.equal(tree2, idealTree))
    .then(() => t.matchSnapshot(printTree(idealTree), 'build ideal tree with peer deps')))
})

t.test('testing-peer-deps package with symlinked root', t => {
  const path = resolve(fixtures, 'testing-peer-deps-link')
  return buildIdeal(path).then(idealTree => {
    t.ok(idealTree.isLink, 'ideal tree is rooted on a Link')
    return new Arborist({path, idealTree, ...OPT})
      .buildIdealTree().then(tree2 => t.equal(tree2, idealTree))
      .then(() => t.matchSnapshot(printTree(idealTree), 'build ideal tree with peer deps'))
  })
})

t.test('testing-peer-deps nested', t => {
  const path = resolve(fixtures, 'testing-peer-deps-nested')
  return t.resolveMatchSnapshot(printIdeal(path), 'build ideal tree')
    .then(() => t.resolveMatchSnapshot(printIdeal(path, {
      // hit the branch where update is just a list of names
      update: ['@isaacs/testing-peer-deps'],
    }), 'can update a peer dep cycle'))
})

t.test('tap vs react15', t => {
  const path = resolve(fixtures, 'tap-react15-collision')
  return t.resolveMatchSnapshot(printIdeal(path), 'build ideal tree with tap collision')
})

t.test('tap vs react15 with legacy shrinkwrap', t => {
  const path = resolve(fixtures, 'tap-react15-collision-legacy-sw')
  return t.resolveMatchSnapshot(printIdeal(path), 'tap collision with legacy sw file')
})

t.test('bad shrinkwrap file', t => {
  const path = resolve(fixtures, 'testing-peer-deps-bad-sw')
  return t.resolveMatchSnapshot(printIdeal(path), 'bad shrinkwrap')
})

t.test('a direct link dep has a dep with optional dependencies', t => {
  const path = resolve(fixtures, 'link-dep-has-dep-with-optional-dep')
  return t.resolveMatchSnapshot(printIdeal(path), 'should not mark children of the optional dep as extraneous')
})

t.test('cyclical peer deps', t => {
  const paths = [
    resolve(fixtures, 'peer-dep-cycle'),
    resolve(fixtures, 'peer-dep-cycle-with-sw'),
  ]

  t.plan(paths.length)
  paths.forEach(path => t.test(basename(path), t =>
    t.resolveMatchSnapshot(printIdeal(path), 'cyclical peer deps')
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        // just reload the dep at its current required version
        add: ['@isaacs/peer-dep-cycle-a'],
      }), 'cyclical peer deps - reload a dependency'))
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        add: ['@isaacs/peer-dep-cycle-a@2.x'],
      }), 'cyclical peer deps - upgrade a package'))
      .then(() => t.rejects(printIdeal(path, {
        // this conflicts with the direct dep on a@1 PEER-> b@1
        add: ['@isaacs/peer-dep-cycle-b@2.x'],
      })))
    // this conflict is ok since we're using legacy peer deps
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        add: ['@isaacs/peer-dep-cycle-b@2.x'],
        legacyPeerDeps: true,
      })))
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        // use @latest rather than @2.x to exercise the 'explicit tag' path
        add: ['@isaacs/peer-dep-cycle-b@latest'],
        rm: ['@isaacs/peer-dep-cycle-a'],
      }), 'can add b@2 if we remove a@1 dep'))
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        rm: ['@isaacs/peer-dep-cycle-a'],
      }), 'remove the dep, prune everything'))
  ))
})

t.test('nested cyclical peer deps', t => {
  const paths = [
    resolve(fixtures, 'peer-dep-cycle-nested'),
    resolve(fixtures, 'peer-dep-cycle-nested-with-sw'),
  ]

  // if we have a shrinkwrap, then we'll get a collision with the current
  // version already there.  if we don't, then we'll get a peerConflict
  // when we try to put the second one there.
  const ers = {
    [paths[0]]: {
      code: 'ERESOLVE',
    },
    [paths[1]]: {
      code: 'ERESOLVE',
    },
  }

  t.plan(paths.length)
  paths.forEach(path => t.test(basename(path), async t => {
    t.matchSnapshot(await printIdeal(path), 'nested peer deps cycle')

    t.matchSnapshot(await printIdeal(path, {
      // just make sure it works if it gets a spec object
      add: [npa('@isaacs/peer-dep-cycle-a@2.x')],
    }), 'upgrade a')

    t.matchSnapshot(await printIdeal(path, {
      // a dep whose name we don't yet know
      add: [
        '@isaacs/peer-dep-cycle-a@2.x',
        `${registry}@isaacs/peer-dep-cycle-b/-/peer-dep-cycle-b-2.0.0.tgz`,
      ],
    }), 'upgrade b')

    t.matchSnapshot(await printIdeal(path, {
      force: true,
      add: ['@isaacs/peer-dep-cycle-c@2.x'],
    }), 'upgrade c, forcibly')

    await t.rejects(printIdeal(path, {
      add: [
        '@isaacs/peer-dep-cycle-a@1.x',
        '@isaacs/peer-dep-cycle-c@2.x',
      ],
    }), ers[path], 'try (and fail) to upgrade c and a incompatibly')
  }))
})

t.test('dedupe example - not deduped', t => {
  const path = resolve(fixtures, 'dedupe-tests')
  return t.resolveMatchSnapshot(printIdeal(path), 'dedupe testing')
})

t.test('dedupe example - deduped because preferDedupe=true', t => {
  const path = resolve(fixtures, 'dedupe-tests')
  return t.resolveMatchSnapshot(printIdeal(path, { preferDedupe: true }))
})

t.test('dedupe example - nested because legacyBundling=true', t => {
  const path = resolve(fixtures, 'dedupe-tests')
  return t.resolveMatchSnapshot(printIdeal(path, {
    legacyBundling: true,
    preferDedupe: true,
  }))
})

t.test('dedupe example - deduped', t => {
  const path = resolve(fixtures, 'dedupe-tests-2')
  return t.resolveMatchSnapshot(printIdeal(path), 'dedupe testing')
})

t.test('expose explicitRequest', async t => {
  const path = resolve(fixtures, 'simple')
  const arb = new Arborist({...OPT, path})
  await arb.buildIdealTree({ add: ['abbrev'] })
  t.match(arb.explicitRequests, Set, 'exposes the explicit request Set')
  t.strictSame([...arb.explicitRequests].map(e => e.name), ['abbrev'])
  t.end()
})

t.test('bundle deps example 1, empty', t => {
  // NB: this results in ignoring the bundled deps when building the
  // ideal tree.  When we reify, we'll have to ignore the deps that
  // got placed as part of the bundle.
  const path = resolve(fixtures, 'testing-bundledeps-empty')
  return t.resolveMatchSnapshot(printIdeal(path), 'bundle deps testing')
    .then(() => t.resolveMatchSnapshot(printIdeal(path, {
      saveBundle: true,
      add: ['@isaacs/testing-bundledeps'],
    }), 'should have some missing deps in the ideal tree'))
})

t.test('bundle deps example 1, full', t => {
  // In this test, bundle deps show up, because they're present in
  // the actual tree to begin with.
  const path = resolve(fixtures, 'testing-bundledeps')
  return t.resolveMatchSnapshot(printIdeal(path), 'no missing deps')
    .then(() => t.resolveMatchSnapshot(printIdeal(path, {
      saveBundle: true,
      add: ['@isaacs/testing-bundledeps'],
    }), 'add stuff, no missing deps'))
})

t.test('bundle deps example 1, complete:true', async t => {
  // When complete:true is set, we extract into a temp dir to read
  // the bundled deps, so they ARE included, just like during reify()
  const path = resolve(fixtures, 'testing-bundledeps-empty')
  t.matchSnapshot(await printIdeal(path, {
    complete: true,
  }), 'no missing deps, because complete: true')
  t.matchSnapshot(await printIdeal(path, {
    saveBundle: true,
    add: ['@isaacs/testing-bundledeps'],
    complete: true,
  }), 'no missing deps, because complete: true, add dep, save bundled')
})

t.test('bundle deps example 2', t => {
  // bundled deps at the root level are NOT ignored when building ideal trees
  const path = resolve(fixtures, 'testing-bundledeps-2')
  return t.resolveMatchSnapshot(printIdeal(path), 'bundle deps testing')
    .then(() => t.resolveMatchSnapshot(printIdeal(path, {
      saveBundle: true,
      add: ['@isaacs/testing-bundledeps-c'],
    }), 'add new bundled dep c'))
    .then(() => t.resolveMatchSnapshot(printIdeal(path, {
      rm: ['@isaacs/testing-bundledeps-a'],
    }), 'remove bundled dependency a'))
})

t.test('bundle deps example 2, link', t => {
  // bundled deps at the root level are NOT ignored when building ideal trees
  const path = resolve(fixtures, 'testing-bundledeps-link')
  return t.resolveMatchSnapshot(printIdeal(path), 'bundle deps testing')
    .then(() => t.resolveMatchSnapshot(printIdeal(path, {
      saveBundle: true,
      add: ['@isaacs/testing-bundledeps-c'],
    }), 'add new bundled dep c'))
    .then(() => t.resolveMatchSnapshot(printIdeal(path, {
      rm: ['@isaacs/testing-bundledeps-a'],
    }), 'remove bundled dependency a'))
})

t.test('unresolvable peer deps', t => {
  const path = resolve(fixtures, 'testing-peer-deps-unresolvable')

  return t.rejects(printIdeal(path, { strictPeerDeps: true }), {
    message: 'unable to resolve dependency tree',
    code: 'ERESOLVE',
  }, 'unacceptable')
})

t.test('do not add shrinkwrapped deps', t => {
  const path = resolve(fixtures, 'shrinkwrapped-dep-no-lock')
  return t.resolveMatchSnapshot(printIdeal(path, { update: true }))
})

t.test('do add shrinkwrapped deps when complete:true is set', t => {
  const path = resolve(fixtures, 'shrinkwrapped-dep-no-lock')
  return t.resolveMatchSnapshot(printIdeal(path, {
    complete: true,
    update: true,
  }))
})

t.test('do not update shrinkwrapped deps', t => {
  const path = resolve(fixtures, 'shrinkwrapped-dep-with-lock')
  return t.resolveMatchSnapshot(printIdeal(path,
    { update: { names: ['abbrev']}}))
})

t.test('do not update shrinkwrapped deps, ignore lockfile', t => {
  const path = resolve(fixtures, 'shrinkwrapped-dep-with-lock')
  return t.resolveMatchSnapshot(printIdeal(path,
    { packageLock: false, update: { names: ['abbrev']}}))
})

t.test('do not update shrinkwrapped deps when complete:true is set', t => {
  const path = resolve(fixtures, 'shrinkwrapped-dep-with-lock')
  return t.resolveMatchSnapshot(printIdeal(path,
    { update: { names: ['abbrev']}, complete: true }))
})

t.test('deduped transitive deps with asymmetrical bin declaration', t => {
  const path =
    resolve(fixtures, 'testing-asymmetrical-bin-no-lock')
  return t.resolveMatchSnapshot(printIdeal(path), 'with no lockfile')
})

t.test('deduped transitive deps with asymmetrical bin declaration', t => {
  const path =
    resolve(fixtures, 'testing-asymmetrical-bin-with-lock')
  return t.resolveMatchSnapshot(printIdeal(path), 'with lockfile')
})

t.test('update', t => {
  t.test('flow outdated', t => {
    const flowOutdated = resolve(fixtures, 'flow-outdated')

    t.resolveMatchSnapshot(printIdeal(flowOutdated, {
      update: {
        names: ['flow-parser'],
      },
    }), 'update flow parser')

    t.resolveMatchSnapshot(printIdeal(flowOutdated, {
      update: true,
    }), 'update everything')

    t.end()
  })

  t.test('tap and flow', t => {
    const tapAndFlow = resolve(fixtures, 'tap-and-flow')
    t.resolveMatchSnapshot(printIdeal(tapAndFlow, {
      update: {
        all: true,
      },
    }), 'update everything')
    t.resolveMatchSnapshot(printIdeal(tapAndFlow, {
      update: {
        names: ['ink'],
      },
    }), 'update ink')

    t.end()
  })

  t.end()
})

t.test('link meta deps', t =>
  t.resolveMatchSnapshot(printIdeal(
    resolve(fixtures, 'link-meta-deps-empty'))))

t.test('respect the yarn.lock file', t =>
  t.resolveMatchSnapshot(printIdeal(
    resolve(fixtures, 'yarn-lock-mkdirp'))))

t.test('respect the yarn.lock file version, if lacking resolved', t =>
  t.resolveMatchSnapshot(printIdeal(
    resolve(fixtures, 'yarn-lock-mkdirp-no-resolved'))))

t.test('optional dependency failures', t => {
  const cases = [
    'optional-ok',
    'optional-dep-enotarget',
    'optional-dep-missing',
    'optional-metadep-enotarget',
    'optional-metadep-missing',
  ]
  t.plan(cases.length)
  cases.forEach(c => t.resolveMatchSnapshot(printIdeal(
    resolve(fixtures, c)), c))
})

t.test('prod dependency failures', t => {
  const cases = [
    'prod-dep-enotarget',
    'prod-dep-missing',
  ]
  t.plan(cases.length)
  cases.forEach(c => t.rejects(printIdeal(
    resolve(fixtures, c)), c))
})

t.test('link dep with a link dep', t => {
  const path = resolve(fixtures, 'cli-750')
  return Promise.all([
    t.resolveMatchSnapshot(printIdeal(path), 'link metadeps with lockfile'),
    t.resolveMatchSnapshot(printIdeal(path, { update: true }), 'link metadeps without lockfile'),
  ])
})

t.test('link dep within node_modules and outside root', t => {
  const path = resolve(fixtures, 'external-link-dep')
  return Promise.all([
    t.resolveMatchSnapshot(printIdeal(path), 'linky deps with lockfile'),
    t.resolveMatchSnapshot(printIdeal(path, { update: true }), 'linky deps without lockfile'),
    t.resolveMatchSnapshot(printIdeal(path, { follow: true }), 'linky deps followed'),
    t.resolveMatchSnapshot(printIdeal(path, { update: true, follow: true }), 'linky deps followed without lockfile'),
  ])
})

// some cases that are hard to hit without very elaborate dep trees
// and precise race conditions, so we just create some contrived
// examples here.
t.test('contrived dep placement tests', t => {
  const kCanPlaceDep = Symbol.for('canPlaceDep')
  const kPlaceDep = Symbol.for('placeDep')
  const kUpdateNames = Symbol.for('updateNames')
  const kPeerSetSource = Symbol.for('peerSetSource')

  const Node = require('../../lib/node.js')
  const Link = require('../../lib/link.js')
  t.test('keep existing dep', t => {
    const root = new Node({
      path: '/x/y/z',
      realpath: '/x/y/z',
      pkg: {
        dependencies: {
          foo: '1.2.x',
          bar: '1.3.x',
        },
      },
    })
    new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.2.3',
      },
      integrity: 'sha512-foofoofoo',
      parent: root,
    })
    const existingBar = new Node({
      name: 'bar',
      pkg: {
        name: 'bar',
        version: '1.3.4',
        dependencies: {
          foo: '1.x', // more lax than the root dep
        },
      },
      integrity: 'sha512-barbarbar',
      parent: root,
    })

    const sameFoo = new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.2.3',
      },
      integrity: 'sha512-foofoofoo',
      parent: new Node({
        name: 'virtual-root',
        path: '/virtual-root',
        pkg: { ...root.package },
      }),
    })
    const a = new Arborist({ ...OPT })
    a[kPeerSetSource].set(sameFoo, root)
    t.match(a[kCanPlaceDep](sameFoo, root, root.edgesOut.get('foo')),
      Symbol('KEEP'), 'same integrity, keep the one we have')

    t.strictSame(a[kPlaceDep](sameFoo, root, root.edgesOut.get('foo')),
      [], 'nothing placed, keep whats already there')

    const tooNew = new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.3.9',
      },
      integrity: 'sha512-oofoofoof',
      parent: new Node({
        name: 'virtual-root',
        path: '/virtual-root',
        pkg: { ...root.package },
      }),
    })
    a[kPeerSetSource].set(tooNew, root)
    t.match(a[kCanPlaceDep](tooNew, root, existingBar.edgesOut.get('foo')),
      Symbol('KEEP'), 'keep existing, satisfies the dep anyway')
    t.strictSame(a[kPlaceDep](tooNew, root, existingBar.edgesOut.get('foo')),
      [], 'nothing placed, keep whats already there')

    const newFoo = new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.2.4',
      },
      integrity: 'sha512-forforfor',
      parent: new Node({
        name: 'virtual-root',
        path: '/virtual-root',
        pkg: { ...root.package },
      }),
    })
    // note: it'll actually not bother replacing in this case, because
    // the original edge is not an error, but the canPlace result is still
    // REPLACE because it's newer.
    a[kPeerSetSource].set(newFoo, root)
    t.match(a[kCanPlaceDep](newFoo, root, existingBar.edgesOut.get('foo')),
      Symbol('REPLACE'), 'replace with newer dependency if allowed')
    t.end()
  })

  t.test('replace nodes with newer nodes', t => {
    const root = new Node({
      path: '/x/y/z',
      realpath: '/x/y/z',
      pkg: {
        dependencies: {
          foo: '1.2.x',
          bar: '1.3.x',
        },
      },
    })
    new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.2.3',
      },
      integrity: 'sha512-foofoofoo',
      parent: root,
    })
    const existingBar = new Node({
      name: 'bar',
      pkg: {
        name: 'bar',
        version: '1.3.4',
        dependencies: {
          foo: '^1.2.4', // 1.2.3 is not ok!
        },
      },
      integrity: 'sha512-barbarbar',
      parent: root,
    })

    const a = new Arborist({ ...OPT })

    const newFoo = new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.2.99',
      },
      integrity: 'sha512-oofoofoof',
      parent: new Node({
        name: 'virtual-root',
        path: '/virtual-root',
        pkg: { ...root.package },
      }),
    })
    a[kPeerSetSource].set(newFoo, root)

    t.match(a[kCanPlaceDep](newFoo, root, existingBar.edgesOut.get('foo')),
      Symbol('REPLACE'), 'replace with newer node')
    const placed = a[kPlaceDep](newFoo, existingBar, existingBar.edgesOut.get('foo'))
    t.equal(placed.length, 1, 'placed one node')
    t.strictSame(placed[0].package, newFoo.package, 'placed newFoo copy node')
    t.equal(placed[0].parent, root, 'placed in root')

    // remove it so we can test a conflict
    placed[0].parent = null
    const tooNew = new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.3.9',
      },
      integrity: 'sha512-oofoofoof',
      parent: new Node({
        name: 'virtual-root',
        path: '/virtual-root',
        pkg: { ...root.package },
      }),
    })
    t.match(a[kCanPlaceDep](tooNew, root, existingBar.edgesOut.get('foo')),
      Symbol('CONFLICT'), 'conflicts with root dependency')

    t.test('shadow conflict', t => {
      const a = new Arborist({ ...OPT })
      // test the case where we're trying to place a dep somewhere that will
      // cause a conflict deeper in the tree.  The tree looks like this:
      // root
      // +-- b <-- conflict to place d@2 here on behalf of e
      // |   +-- c (dep: d@1)
      // |   +-- e (dep: d@2)
      // +-- d@1
      // If we place d@2 at b, then it'll shadow the d@1 that c is getting.
      // In real life scenarios, the tree may be much more convoluted.
      const shadowConflict = new Node({
        path: '/path/to/project',
        name: 'root',
        pkg: {
          name: 'root',
          version: '1.0.0',
          dependencies: { a: '' },
        },
        children: [
          {
            name: 'b',
            pkg: { name: 'b', version: '1.0.0', dependencies: {c: ''}},
            children: [
              // gets its d1 dep from a's child node
              {
                name: 'c',
                pkg: { name: 'c', version: '1.0.0', dependencies: {d: '1'}},
              },
              // trying to place a d2 on behalf of this one
              {
                name: 'e',
                pkg: { name: 'e', version: '1.0.0', dependencies: {d: '2'}},
              },
            ],
          },
          // the dep being shadowed
          {
            name: 'd',
            pkg: {name: 'd', version: '1.0.0'},
          },
        ],
      })

      const b = shadowConflict.children.get('b')
      const e = b.children.get('e')
      const edge = e.edgesOut.get('d')
      // gut check
      t.match(edge, {
        valid: false,
        name: 'd',
        spec: '2',
        type: 'prod',
      }, 'gut check')
      const d2 = new Node({
        name: 'd',
        pkg: {name: 'd', version: '2.0.0'},
        parent: new Node({ path: '/virtual-root' }),
      })
      a[kPeerSetSource].set(d2, e)

      t.match(a[kCanPlaceDep](d2, b, edge, null), Symbol('CONFLICT'),
        'cannot place dep where it shadows a dependency creating a conflict')

      t.end()
    })

    t.test('shadow no conflict', t => {
      const a = new Arborist({ ...OPT })
      // just like the shadow conflict test above, except it is ok to place
      // root
      // +-- b <-- ok place d@2 here on behalf of e
      // |   +-- c (dep: d@1||2)
      // |   +-- e (dep: d@2)
      // +-- d@1
      const shadowConflict = new Node({
        path: '/path/to/project',
        name: 'root',
        pkg: {
          name: 'root',
          version: '1.0.0',
          dependencies: { b: '' },
        },
        children: [
          {
            name: 'b',
            pkg: { name: 'b', version: '1.0.0', dependencies: {c: ''}},
            children: [
              // gets its d1 dep from a's child node
              {
                name: 'c',
                pkg: { name: 'c', version: '1.0.0', dependencies: {d: '1||2'}},
              },
              // trying to place a d2 on behalf of this one
              {
                name: 'e',
                pkg: { name: 'e', version: '1.0.0', dependencies: {d: '2'}},
              },
            ],
          },
          // the dep being shadowed
          {
            name: 'd',
            pkg: {name: 'd', version: '1.0.0'},
          },
        ],
      })

      const b = shadowConflict.children.get('b')
      const e = b.children.get('e')
      const edge = e.edgesOut.get('d')
      // gut check
      t.match(edge, {
        valid: false,
        name: 'd',
        spec: '2',
        type: 'prod',
      }, 'gut check')
      const d2 = new Node({
        name: 'd',
        pkg: {name: 'd', version: '2.0.0'},
        parent: new Node({ path: '/virtual-root' }),
      })

      a[kPeerSetSource].set(d2, e)
      t.match(a[kCanPlaceDep](d2, b, edge, null), Symbol('OK'),
        'can place dep where it shadows a dependency creating no conflict')

      t.end()
    })

    t.test('update replacing with a better node, dedupe existing', t => {
      const a = new Arborist({ ...OPT })
      // given a tree like this:
      // root
      // +-- b
      //     +-- c@1
      // and updating c to 1.1 by adding it at root, we should end up with
      // a tree like this:
      // root
      // +-- b
      // +-- c@1.1
      // where c has been deduped, rather than leaving it in place:
      // root
      // +-- b
      // |   +-- c@1
      // +-- c@1.1
      // when we place the c@1.1 dep on behalf of b and end up in root.
      const dedupeUpdate = a.idealTree = new Node({
        name: 'root',
        path: '/some/path',
        pkg: { name: 'root', dependencies: { b: '' } },
        children: [
          {
            name: 'b',
            pkg: { name: 'b', version: '1.2.3', dependencies: { c: '1' } },
            children: [{ name: 'c', pkg: { name: 'c', version: '1.0.0' } }],
          },
        ],
      })
      const c11 = new Node({
        name: 'c',
        pkg: { name: 'c', version: '1.1.0' },
        parent: new Node({ path: '/virtual/root' }),
      })
      const b = dedupeUpdate.children.get('b')
      const c1 = b.children.get('c')
      const edge = b.edgesOut.get('c')
      t.equal(edge.to, c1, 'gut check')
      a[kUpdateNames] = ['c']
      a[kPeerSetSource].set(c11, dedupeUpdate)
      const [placedc11] = a[kPlaceDep](c11, b, edge)
      t.equal(c1.root, c1, 'c 1.0 removed from tree')
      t.equal(placedc11.parent, dedupeUpdate, 'c 1.1 placed in root node_modules')
      t.equal(edge.to, placedc11, 'b is resolved by c 1.1')
      t.equal(edge.valid, true, 'b is happy about this')
      t.equal(b.children.size, 0, 'b has no direct children now')
      t.end()
    })

    t.test('update replacing with better node, keep needed dupe', t => {
      const a = new Arborist({ ...OPT })
      // root (a, d, d*)
      // +-- a (b, c2)
      // |   +-- b (c2) <-- place c2 for b, lands at root
      // +-- d (e)
      //     +-- e (c1, d)
      //         +-- c1
      //         +-- f (c2)
      //             +-- c2 <-- pruning this would be bad
      const root = a.idealTree = new Node({
        name: 'root',
        path: '/some/path',
        pkg: {
          name: 'root',
          dependencies: {
            a: '',
            d: '',
          },
        },
        children: [
          {
            name: 'a',
            pkg: {
              name: 'a',
              version: '1.2.3',
              dependencies: { b: '', c: '2' },
            },
            children: [
              {
                name: 'b',
                pkg: {
                  name: 'b',
                  version: '1.2.3',
                  dependencies: { c: '2' },
                },
              },
            ],
          },
          {
            name: 'd',
            pkg: {
              name: 'd',
              version: '1.2.3',
              dependencies: { e: '' },
            },
            children: [
              {
                name: 'e',
                pkg: { name: 'e',
                  dependencies: {
                    c: '1',
                    f: '',
                  }},
                children: [
                  { name: 'c', pkg: { name: 'c', version: '1.2.3' } },
                  {
                    name: 'f',
                    pkg: {
                      name: 'f',
                      dependencies: { c: '2' },
                    },
                    children: [
                      {
                        name: 'c',
                        pkg: {
                          name: 'c',
                          version: '2.3.4',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      })

      const c2 = new Node({
        name: 'c',
        pkg: { name: 'c', version: '2.3.4' },
        parent: new Node({ path: '/virtual/root' }),
      })

      const d = root.children.get('d')
      t.ok(d, 'have d node')

      const e = d.children.get('e')
      t.ok(e, 'have e node')

      const oldc = e.children.get('c')
      const f = e.children.get('f')
      const dupe = f.children.get('c')
      const b = root.children.get('a').children.get('b')
      const edge = b.edgesOut.get('c')
      a[kPeerSetSource].set(c2, b)
      const [placedc2] = a[kPlaceDep](c2, b, edge)
      t.equal(placedc2.parent, root, 'new node landed at the root')
      t.equal(oldc.parent, e, 'old c still in the tree')
      t.equal(dupe.parent, f, 'dupe still in tree')
      t.end()
    })

    t.test('update, but already up to date and fine', t => {
      // this hits the canPlace === KEEP branch in _placeDep,
      // given a tree like this:
      // root (b@1||2)
      // +-- a (b@2)
      // +-- b@2
      // attempting to place b@2 at root on behalf of a is a no-op, because
      // it's already there and fine.
      const root = new Node({
        pkg: { dependencies: {a: '', b: '2'}},
        path: '/root',
        children: [
          { pkg: { name: 'a', version: '1.2.3', dependencies: {b: '2'}}},
          { pkg: { name: 'b', version: '2.3.4'}},
        ],
      })
      const newb = new Node({
        path: '/virtual-root/b',
        pkg: { name: 'b', version: '2.3.3' },
        parent: new Node({
          name: 'virtual-root',
          path: '/virtual-root',
          pkg: { ...root.package },
        }),
      })
      const anode = root.children.get('a')
      const edge = anode.edgesOut.get('b')
      const arb = new Arborist({ path: root.path, ...OPT })
      arb[kUpdateNames] = ['b']
      arb.idealTree = root
      const placed = arb[kPlaceDep](newb, anode, edge)
      t.strictSame(placed, [])
      t.end()
    })

    t.end()
  })

  t.test('linked tops get their peer deps local if no other option', t => {
    const a = new Arborist({ ...OPT })
    const root = new Node({
      path: '/some/path',
      pkg: { name: 'root', dependencies: { foo: '*' }},
    })
    const target = new Node({
      path: '/some/other/path',
      pkg: { name: 'foo', version: '1.2.3', peerDependencies: { bar: '' }},
      root,
    })
    new Link({
      parent: root,
      pkg: target.package,
      realpath: target.path,
      target,
    })
    const bar = new Node({
      name: 'bar',
      pkg: { name: 'bar', version: '1.2.3' },
      parent: new Node({ path: '/virtual-root' }),
    })
    const edge = target.edgesOut.get('bar')
    t.equal(edge.valid, false, 'gut check')
    a[kPeerSetSource].set(bar, root)
    const [placedbar] = a[kPlaceDep](bar, target, edge)
    t.equal(edge.valid, true, 'resolved')
    t.equal(placedbar.parent, target, 'installed peer locally in target top node')
    t.end()
  })

  t.test('linked tops use fsParent if possible', t => {
    const a = new Arborist({ ...OPT })
    const root = new Node({
      path: '/some/path',
      realpath: '/some/path',
      pkg: { name: 'root', dependencies: { foo: '*' }},
    })
    const target = new Node({
      path: '/some/path/to/packages',
      pkg: { name: 'foo', version: '1.2.3', peerDependencies: { bar: '' }},
      fsParent: root,
      root,
    })
    new Link({
      parent: root,
      pkg: target.package,
      realpath: target.path,
      target,
    })
    const bar = new Node({
      name: 'bar',
      pkg: { name: 'bar', version: '1.2.3' },
      parent: new Node({ path: '/virtual-root' }),
    })
    const edge = target.edgesOut.get('bar')
    t.equal(edge.valid, false, 'gut check')
    a[kPeerSetSource].set(bar, root)
    const [placedbar] = a[kPlaceDep](bar, target, edge)
    t.equal(edge.valid, true, edge.error)
    t.equal(placedbar.parent, root, 'installed peer in fsParent node')
    t.end()
  })

  t.end()
})

t.test('global style', t => t.resolveMatchSnapshot(printIdeal(t.testdir(), {
  globalStyle: true,
  add: ['rimraf'],
})))

t.test('global', t => t.resolveMatchSnapshot(printIdeal(t.testdir(), {
  global: true,
  add: ['rimraf'],
})))

t.test('global has to add or remove', t => t.rejects(printIdeal(t.testdir(), {
  global: true,
})))

// somewhat copy-pasta from the test/arborist/audit.js to exercise
// the buildIdealTree code paths
t.test('update mkdirp to non-minimist-using version', async t => {
  const path = resolve(fixtures, 'deprecated-dep')
  t.teardown(auditResponse(resolve(fixtures, 'audit-nyc-mkdirp/audit.json')))

  const arb = new Arborist({ path, ...OPT })

  await arb.audit()
  t.matchSnapshot(printTree(await arb.buildIdealTree()))
})

t.test('force a new nyc (and update mkdirp nicely)', async t => {
  const path = resolve(fixtures, 'audit-nyc-mkdirp')
  t.teardown(auditResponse(resolve(fixtures, 'audit-nyc-mkdirp/audit.json')))

  const arb = new Arborist({
    force: true,
    path,
    ...OPT,
  })

  await arb.audit()
  t.matchSnapshot(printTree(await arb.buildIdealTree()))
  t.equal(arb.idealTree.children.get('mkdirp').package.version, '0.5.5')
  t.equal(arb.idealTree.children.get('nyc').package.version, '15.1.0')
})

t.test('force a new mkdirp (but not semver major)', async t => {
  const path = resolve(fixtures, 'mkdirp-pinned')
  t.teardown(auditResponse(resolve(fixtures, 'audit-nyc-mkdirp/audit.json')))

  const arb = new Arborist({
    force: true,
    path,
    ...OPT,
  })

  await arb.audit()
  t.matchSnapshot(printTree(await arb.buildIdealTree()))
  t.equal(arb.idealTree.children.get('mkdirp').package.version, '0.5.5')
  t.equal(arb.idealTree.children.get('minimist').package.version, '1.2.5')
})

t.test('no fix available', async t => {
  const path = resolve(fixtures, 'audit-mkdirp/mkdirp-unfixable')
  const checkLogs = warningTracker()
  t.teardown(auditResponse(resolve(path, 'audit.json')))

  const arb = new Arborist({
    force: true,
    path,
    ...OPT,
  })

  await arb.audit()
  t.matchSnapshot(printTree(await arb.buildIdealTree()))
  t.equal(arb.idealTree.children.get('mkdirp').package.version, '0.5.1')
  t.match(checkLogs(), [['warn', 'audit', 'No fix available for mkdirp@*']])
})

t.test('no fix available, linked top package', async t => {
  const path = resolve(fixtures, 'audit-mkdirp')
  const checkLogs = warningTracker()
  t.teardown(auditResponse(resolve(path, 'mkdirp-unfixable/audit.json')))

  const arb = new Arborist({
    force: true,
    path,
    ...OPT,
  })

  await arb.audit()
  t.matchSnapshot(printTree(await arb.buildIdealTree()))
  t.strictSame(checkLogs(), [['warn', 'audit',
    'Manual fix required in linked project at ./mkdirp-unfixable for mkdirp@*.\n' +
    "'cd ./mkdirp-unfixable' and run 'npm audit' for details.",
  ]])
})

t.test('workspaces', t => {
  t.test('should install a simple example', t => {
    const path = resolve(__dirname, '../fixtures/workspaces-simple')
    return t.resolveMatchSnapshot(printIdeal(path))
  })

  t.test('should update a simple example', t => {
    const path = resolve(__dirname, '../fixtures/workspaces-simple')
    return t.resolveMatchSnapshot(printIdeal(path, { update: { all: true }}))
  })

  t.test('should install a simple scoped pkg example', t => {
    const path = resolve(__dirname, '../fixtures/workspaces-scoped-pkg')
    return t.resolveMatchSnapshot(printIdeal(path))
  })

  t.test('should not work with duplicate names', t => {
    const path = resolve(__dirname, '../fixtures/workspaces-duplicate')
    return t.rejects(printIdeal(path), { code: 'EDUPLICATEWORKSPACE' }, 'throws EDUPLICATEWORKSPACE error')
  })

  t.test('should install shared dependencies into root folder', t => {
    const path = resolve(__dirname, '../fixtures/workspaces-shared-deps')
    return t.resolveMatchSnapshot(printIdeal(path))
  })

  t.test('should install conflicting dep versions', t => {
    const path = resolve(__dirname, '../fixtures/workspaces-conflicting-versions')
    return t.resolveMatchSnapshot(printIdeal(path))
  })

  t.test('should prefer linking nested workspaces', t => {
    const path = resolve(__dirname, '../fixtures/workspaces-prefer-linking')
    return t.resolveMatchSnapshot(printIdeal(path))
  })

  t.test('should install from registry on version not satisfied', t => {
    const path = resolve(__dirname, '../fixtures/workspaces-version-unsatisfied')
    return t.resolveMatchSnapshot(printIdeal(path))
  })

  t.test('should link top level nested workspaces', t => {
    const path = resolve(__dirname, '../fixtures/workspaces-top-level-link')
    return t.resolveMatchSnapshot(printIdeal(path))
  })

  t.test('should install workspace transitive dependencies', t => {
    const path = resolve(__dirname, '../fixtures/workspaces-transitive-deps')
    return t.resolveMatchSnapshot(printIdeal(path))
  })

  t.test('should ignore nested node_modules folders', t => {
    // packages/a/node_modules/nested-workspaces should not be installed
    const path = resolve(__dirname, '../fixtures/workspaces-ignore-nm')
    return t.resolveMatchSnapshot(printIdeal(path))
  })

  t.test('should work with files spec', t => {
    const path = resolve(__dirname, '../fixtures/workspaces-with-files-spec')
    return t.resolveMatchSnapshot(printIdeal(path))
  })

  t.test('should handle conflicting peer deps ranges', t => {
    const path = resolve(__dirname, '../fixtures/workspaces-peer-ranges')
    return t.rejects(
      printIdeal(path),
      {
        code: 'ERESOLVE',
      },
      'throws ERESOLVE error'
    )
  })

  t.end()
})

t.test('adding tarball to global prefix that is a symlink at a different path depth', async t => {
  const fixt = t.testdir({
    'real-root': {},
    'another-path': {
      'global-root': t.fixture('symlink', '../real-root'),
    },
  })
  const path = resolve(fixt, 'another-path/global-root')
  const arb = new Arborist({
    path,
    global: true,
    ...OPT,
  })

  const tarballpath = resolve(__dirname, '../fixtures/registry-mocks/content/mkdirp/-/mkdirp-1.0.2.tgz')
  const tree = await arb.buildIdealTree({
    path,
    global: true,
    add: [
      // this will be a relative path to the tarball above
      relative(process.cwd(), tarballpath),
    ],
  })
  t.matchSnapshot(printTree(tree))
})

t.test('add symlink that points to a symlink', t => {
  const fixt = t.testdir({
    'global-prefix': {
      lib: {
        node_modules: {
          a: t.fixture('symlink', '../../../linked-pkg'),
        },
      },
    },
    'linked-pkg': {
      'package.json': JSON.stringify({
        name: 'a',
        version: '1.0.0',
      }),
    },
    'my-project': {
      'package.json': JSON.stringify({}),
    },
  })
  const path = resolve(fixt, 'my-project')
  const arb = new Arborist({
    path,
    ...OPT,
  })
  return arb.buildIdealTree({
    add: [
      // simulates the string used by `npm link <pkg>` when
      // installing a package available in the global space
      `file:${resolve(fixt, 'global-prefix/lib/node_modules/a')}`,
    ],
  }).then(tree =>
    t.matchSnapshot(
      printTree(tree),
      'should follow symlinks to find final realpath destination'
    )
  )
})

t.test('update global space single dep', t => {
  const fixt = t.testdir({
    'global-prefix': {
      lib: {
        node_modules: {
          abbrev: {
            'package.json': JSON.stringify({
              name: 'abbrev',
              version: '1.0.0',
            }),
          },
        },
      },
    },
  })
  const path = resolve(fixt, 'global-prefix/lib')
  const opts = {
    path,
    global: true,
    update: true,
    ...OPT,
  }
  const arb = new Arborist(opts)
  return arb.buildIdealTree(opts).then(tree =>
    t.matchSnapshot(
      printTree(tree),
      'should update global dependencies'
    )
  )
})

// if we get this wrong, it'll spin forever and use up all the memory
t.test('pathologically nested dependency cycle', t =>
  t.resolveMatchSnapshot(printIdeal(
    resolve(fixtures, 'pathological-dep-nesting-cycle'))))

t.test('resolve file deps from cwd', t => {
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  const path = t.testdir({
    global: {},
    local: {},
  })
  const fixturedir = resolve(fixtures, 'root-bundler')
  process.chdir(fixturedir)
  const arb = new Arborist({
    global: true,
    path: resolve(path, 'global'),
    ...OPT,
  })
  return arb.buildIdealTree({
    path: `${path}/local`,
    add: ['child-1.2.3.tgz'],
    global: true,
  }).then(tree => {
    const resolved = `file:${resolve(fixturedir, 'child-1.2.3.tgz')}`
    t.equal(normalizePath(tree.children.get('child').resolved), normalizePath(resolved))
  })
})

t.test('resolve links in global mode', t => {
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  const path = t.testdir({
    global: {},
    lib: {
      'my-project': {},
    },
    'linked-dep': {
      'package.json': JSON.stringify({
        name: 'linked-dep',
        version: '1.0.0',
      }),
    },
  })
  const fixturedir = resolve(path, 'lib', 'my-project')
  process.chdir(fixturedir)

  const arb = new Arborist({
    ...OPT,
    global: true,
    path: resolve(path, 'global'),
  })
  return arb.buildIdealTree({
    add: ['file:../../linked-dep'],
    global: true,
  }).then(tree => {
    const resolved = 'file:../../linked-dep'
    t.equal(tree.children.get('linked-dep').resolved, resolved)
  })
})

t.test('dont get confused if root matches duped metadep', async t => {
  const path = resolve(fixtures, 'test-root-matches-metadep')
  const arb = new Arborist({ path, ...OPT })
  const tree = await arb.buildIdealTree()
  t.matchSnapshot(printTree(tree))
})

t.test('inflate an ancient lockfile by hitting the registry', async t => {
  const checkLogs = warningTracker()
  const path = resolve(fixtures, 'sax')
  const arb = new Arborist({ path, ...OPT })
  const tree = await arb.buildIdealTree()
  t.matchSnapshot(printTree(tree))
  t.strictSame(checkLogs(), [
    [
      'warn',
      'ancient lockfile',
      `
The package-lock.json file was created with an old version of npm,
so supplemental metadata must be fetched from the registry.

This is a one-time fix-up, please be patient...
`,
    ],
  ])
})

t.test('inflate an ancient lockfile with a dep gone missing', async t => {
  const checkLogs = warningTracker()
  const path = resolve(fixtures, 'ancient-lockfile-invalid')
  const arb = new Arborist({ path, ...OPT })
  const tree = await arb.buildIdealTree()
  t.matchSnapshot(printTree(tree))
  t.match(checkLogs(), [
    [
      'warn',
      'ancient lockfile',
      `
The package-lock.json file was created with an old version of npm,
so supplemental metadata must be fetched from the registry.

This is a one-time fix-up, please be patient...
`,
    ],
    [
      'warn',
      'ancient lockfile',
      'Could not fetch metadata for @isaacs/this-does-not-exist-at-all@1.2.3',
      { code: 'E404', method: 'GET' },
    ],
  ])
})

t.test('complete build for project with old lockfile', async t => {
  const checkLogs = warningTracker()
  const path = resolve(fixtures, 'link-dep-empty')
  const arb = new Arborist({ path, ...OPT })
  const tree = await arb.buildIdealTree({ complete: true })
  t.matchSnapshot(printTree(tree))
  t.match(checkLogs(), [
    [
      'warn',
      'old lockfile',
      `
The package-lock.json file was created with an old version of npm,
so supplemental metadata must be fetched from the registry.

This is a one-time fix-up, please be patient...
`,
    ],
  ])
})

t.test('override a conflict with the root dep (with force)', async t => {
  const path = resolve(fixtures, 'testing-peer-dep-conflict-chain/override')
  // note: fails because this is the root dep, unless --force used
  await t.rejects(() => buildIdeal(path), {
    code: 'ERESOLVE',
  })
  t.matchSnapshot(await printIdeal(path, { strictPeerDeps: true, force: true }), 'strict and force override')
  t.matchSnapshot(await printIdeal(path, { strictPeerDeps: false, force: true }), 'non-strict and force override')
})

t.test('override a conflict with the root peer dep (with force)', async t => {
  const path = resolve(fixtures, 'testing-peer-dep-conflict-chain/override-peer')
  await t.rejects(() => buildIdeal(path, { strictPeerDeps: true }), {
    code: 'ERESOLVE',
  })
  t.matchSnapshot(await printIdeal(path, { strictPeerDeps: true, force: true }), 'strict and force override')
  t.matchSnapshot(await printIdeal(path, { strictPeerDeps: false, force: true }), 'non-strict and force override')
})

t.test('push conflicted peer deps deeper in to the tree to solve', async t => {
  const path = resolve(fixtures, 'testing-peer-dep-conflict-chain/override-dep')
  t.matchSnapshot(await printIdeal(path))
})

t.test('do not continually re-resolve deps that failed to load', async t => {
  const path = t.testdir({
    node_modules: {
      '@isaacs': {
        'this-does-not-exist-actually': {
          'package.json': JSON.stringify({
            name: '@isaacs/this-does-not-exist-actually',
            version: '1.0.0',
          }),
        },
        'depends-on-load-failer': {
          'package.json': JSON.stringify({
            name: '@isaacs/depends-on-load-failer',
            version: '1.0.0',
            dependencies: {
              '@isaacs/this-does-not-exist-actually': '1.x',
            },
          }),
        },
      },
    },
    'package.json': JSON.stringify({
      name: 'my-project',
      version: '1.2.3',
      dependencies: {
        '@isaacs/depends-on-load-failer': '1.x',
        '@isaacs/this-does-not-exist-actually': '1.x',
      },
    }),
  })
  const arb = new Arborist({...OPT, path })
  t.rejects(() => arb.buildIdealTree({ add: [
    '@isaacs/this-does-not-exist-actually@2.x',
  ]}), { code: 'E404' })
})

t.test('update a node if its bundled by the root project', async t => {
  const path = t.testdir({
    node_modules: {
      abbrev: {
        'package.json': JSON.stringify({
          name: 'abbrev',
          version: '1.0.0',
        }),
      },
    },
    'package.json': JSON.stringify({
      bundleDependencies: ['abbrev'],
      dependencies: {
        abbrev: '1',
      },
    }),
  })
  const arb = new Arborist({ ...OPT, path })
  await arb.buildIdealTree({ update: ['abbrev'] })
  t.equal(arb.idealTree.children.get('abbrev').version, '1.1.1')
})

t.test('more peer dep conflicts', t => {
  // each of these is installed and should pass in force mode,
  // fail in strictPeerDeps mode, and pass/fail based on the
  // 'error' field in non-strict/non-forced mode.
  const cases = Object.entries({
    'this is fine': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-x': '3',
        },
      },
      error: false,
      resolvable: true,
    },

    'prod dep directly on conflicted peer, newer': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-a': '1',
          '@isaacs/testing-peer-dep-conflict-chain-b': '2',
        },
      },
      error: true,
    },

    'prod dep directly on conflicted peer, older': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-a': '2',
          '@isaacs/testing-peer-dep-conflict-chain-b': '1',
        },
      },
      error: true,
    },

    'prod dep directly on conflicted peer, full peer set, newer': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-a': '1',
          '@isaacs/testing-peer-dep-conflict-chain-b': '2',
          '@isaacs/testing-peer-dep-conflict-chain-c': '2',
          '@isaacs/testing-peer-dep-conflict-chain-d': '2',
          '@isaacs/testing-peer-dep-conflict-chain-e': '2',
        },
      },
      error: true,
    },

    'prod dep directly on conflicted peer, full peer set, older': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-a': '2',
          '@isaacs/testing-peer-dep-conflict-chain-b': '1',
          '@isaacs/testing-peer-dep-conflict-chain-c': '1',
          '@isaacs/testing-peer-dep-conflict-chain-d': '1',
          '@isaacs/testing-peer-dep-conflict-chain-e': '1',
        },
      },
      error: true,
    },

    'prod dep directly on conflicted peer, meta peer set, older': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-e': '2',
          '@isaacs/testing-peer-dep-conflict-chain-m': '2',
          '@isaacs/testing-peer-dep-conflict-chain-b': '1',
          '@isaacs/testing-peer-dep-conflict-chain-l': '1',
        },
      },
      error: true,
    },

    'dep indirectly on conflicted peer': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-a': '1',
          '@isaacs/testing-peer-dep-conflict-chain-w': '2',
        },
      },
      error: true,
    },

    'collision forcing duplication, order 1': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-j': '1',
          '@isaacs/testing-peer-dep-conflict-chain-v': '2',
        },
      },
      error: false,
      resolvable: true,
    },

    'collision forcing duplication, order 2': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-a': '2',
          '@isaacs/testing-peer-dep-conflict-chain-j': '1',
        },
      },
      error: false,
      resolvable: true,
    },

    'collision forcing duplication via add, order 1': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-j': '1',
        },
      },
      add: ['@isaacs/testing-peer-dep-conflict-chain-a@2'],
      error: false,
      resolvable: true,
    },

    'collision forcing duplication via add, order 2': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-j': '1',
        },
      },
      add: ['@isaacs/testing-peer-dep-conflict-chain-v@2'],
      error: false,
      resolvable: true,
    },

    'collision forcing metadep duplication, order 1': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-ii': '1',
          '@isaacs/testing-peer-dep-conflict-chain-j': '2',
        },
      },
      error: false,
      resolvable: true,
    },

    'collision forcing metadep duplication, order 2': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-i': '1',
          '@isaacs/testing-peer-dep-conflict-chain-jj': '2',
        },
      },
      error: false,
      resolvable: true,
    },

    'direct collision forcing metadep duplication, order 1': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-jj': '1',
          '@isaacs/testing-peer-dep-conflict-chain-j': '2',
        },
      },
      error: false,
      resolvable: true,
    },

    'direct collision forcing metadep duplication, order 2': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-j': '1',
          '@isaacs/testing-peer-dep-conflict-chain-jj': '2',
        },
      },
      error: false,
      resolvable: true,
    },

    'dep with conflicting peers': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-p': '1',
        },
      },
      // XXX should this be false?  it's not OUR fault, after all?
      // but it is a conflict in a peerSet that the root is sourcing.
      error: true,
    },

    'metadeps with conflicting peers': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-p': '2',
        },
      },
      error: false,
    },

    'metadep conflict that warns because source is target': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-i': '1',
          '@isaacs/testing-peer-dep-conflict-chain-p': '2',
        },
      },
      error: false,
      resolvable: false,
    },

    'metadep conflict triggering the peerConflict code path': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-v': '1',
          '@isaacs/testing-peer-dep-conflict-chain-y': '2',
        },
      },
      error: true,
      resolvable: false,
    },

    'metadep conflict triggering the peerConflict code path, order 2': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-v': '2',
          '@isaacs/testing-peer-dep-conflict-chain-y': '1',
        },
      },
      error: true,
      resolvable: false,
    },

    'conflict on root edge, order 1': {
      pkg: {
        name: '@isaacs/testing-peer-dep-conflict-chain-a',
        version: '2.3.4',
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-a': 'file:.',
          '@isaacs/testing-peer-dep-conflict-chain-d': '1',
        },
      },
      error: true,
      resolvable: false,
    },
    'conflict on root edge, order 2': {
      pkg: {
        name: '@isaacs/testing-peer-dep-conflict-chain-d',
        version: '2.3.4',
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-a': '1',
          '@isaacs/testing-peer-dep-conflict-chain-d': 'file:.',
        },
      },
      error: true,
      resolvable: false,
    },

    'metadep without conflicts, partly overlapping peerSets, resolvable': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-v': '4',
          '@isaacs/testing-peer-dep-conflict-chain-y': '1',
        },
      },
      error: false,
      resolvable: true,
    },
    'metadep without conflicts, partly overlapping peerSets, resolvable order 2': {
      pkg: {
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-v': '1',
          '@isaacs/testing-peer-dep-conflict-chain-y': '4',
        },
      },
      error: false,
      resolvable: true,
    },
  })

  t.jobs = cases.length
  t.plan(cases.length)

  for (const [name, {pkg, error, resolvable, add}] of cases) {
    t.test(name, { buffer: true }, async t => {
      const path = t.testdir({
        'package.json': JSON.stringify(pkg),
      })
      const warnings = []
      const log = {
        silly: () => {},
        http: () => {},
        info: () => {},
        notice: () => {},
        error: () => {},
        warn: (...msg) => warnings.push(normalizePaths(msg)),
      }
      const strict = new Arborist({ ...OPT, path, strictPeerDeps: true })
      const force = new Arborist({ ...OPT, path, force: true })
      const def = new Arborist({ ...OPT, path, log })

      const [strictRes, forceRes, defRes] = await Promise.all([
        strict.buildIdealTree({ add }).catch(er => er),
        force.buildIdealTree({ add }).catch(er => er),
        def.buildIdealTree({ add }).catch(er => er),
      ])

      if (!resolvable) {
        if (!(strictRes instanceof Error))
          console.error(printTree(strictRes))
        t.match(strictRes, { code: 'ERESOLVE' })
      } else if (strictRes instanceof Error)
        t.fail('should not get error in strict mode', strictRes)
      else
        t.matchSnapshot(printTree(strictRes), 'strict result')

      if (forceRes instanceof Error)
        t.fail('should not get error when forced', forceRes)
      else
        t.matchSnapshot(printTree(forceRes), 'force result')

      if (error) {
        if (!(defRes instanceof Error))
          console.error(printTree(defRes))
        t.match(defRes, { code: 'ERESOLVE' })
      } else if (defRes instanceof Error)
        t.fail('should not get error in default mode', defRes)
      else {
        if (resolvable)
          t.strictSame(warnings, [])
        else
          t.matchSnapshot(warnings, 'warnings')
        warnings.length = 0
        t.matchSnapshot(printTree(defRes), 'default result')
      }
    })
  }
})

t.test('cases requiring peer sets to be nested', t => {
  const cases = [
    'multi',
    'simple',
  ]
  t.plan(cases.length)
  for (const c of cases) {
    t.test(c, async t => {
      const path = resolve(`${fixtures}/testing-peer-dep-nesting/${c}`)
      t.matchSnapshot(await printIdeal(path))
    })
  }
})

t.test('make sure yargs works', async t => {
  // While I generally find it's best to use reduced unit tests, to run
  // tests faster and force us to fully understand a problem, yargs has
  // been a bountiful source of complicated eslint peerDep issues.
  const yargs = resolve(fixtures, 'yargs')
  t.matchSnapshot(await printIdeal(yargs), 'yargs should build fine')
})

t.test('allow updating when peer outside of explicit update set', t => {
  // see https://github.com/npm/cli/issues/2000
  t.plan(2)
  t.test('valid, no force required', async t => {
    const path = t.testdir({
      'package.json': JSON.stringify({
        name: 'x',
        version: '1.0.0',
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-a': '1',
          '@isaacs/testing-peer-dep-conflict-chain-single-a': '^1.0.1',
          '@isaacs/testing-peer-dep-conflict-chain-single-b': '^1.0.1',
        },
      }),
      'package-lock.json': JSON.stringify({
        name: 'x',
        version: '1.0.0',
        lockfileVersion: 2,
        requires: true,
        packages: {
          '': {
            dependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-a': '1',
              '@isaacs/testing-peer-dep-conflict-chain-single-a': '^1.0.1',
              '@isaacs/testing-peer-dep-conflict-chain-single-b': '^1.0.1',
            },
          },
          'node_modules/@isaacs/testing-peer-dep-conflict-chain-a': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-a/-/testing-peer-dep-conflict-chain-a-1.0.0.tgz',
            integrity: 'sha512-yUUG0Sem+AzNZ0uPXmEZN/GHHMmAg3kbM/zrijnd+tAAKVV5PhWXVUuLKJ3Q6wSAxz3WuYG08OaJl3lpV4UFOA==',
            peerDependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-b': '1',
            },
          },
          'node_modules/@isaacs/testing-peer-dep-conflict-chain-b': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-b/-/testing-peer-dep-conflict-chain-b-1.0.0.tgz',
            integrity: 'sha512-tbsZ8No4L7h5YiIqDwGlJ14dg44oG4ZstF/wx7eZKUlnZax392thEeac5MNGFsv1T0Uqtiby9+SdpIRpejrHSw==',
            peer: true,
            peerDependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-c': '1',
            },
          },
          'node_modules/@isaacs/testing-peer-dep-conflict-chain-c': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-c/-/testing-peer-dep-conflict-chain-c-1.0.0.tgz',
            integrity: 'sha512-173OUwUJK8QN4CGTF+oPHwoOHbUzgxjC3tzg2kBVLE/eak02ZXJrW9l4LmW03vqcToADVhsVMcFLIaAb6yd1mQ==',
            peer: true,
            peerDependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-d': '1',
            },
          },
          'node_modules/@isaacs/testing-peer-dep-conflict-chain-d': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-d/-/testing-peer-dep-conflict-chain-d-1.0.0.tgz',
            integrity: 'sha512-zOtmaure/xJHmz7yGU7T33hjV6MZpo8Y6v1GuxDBx0PbqGoCxxCMacNtTUsEL5Sj8T19r5UShGZQmirNqPuhww==',
            peer: true,
            peerDependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-e': '1',
            },
          },
          'node_modules/@isaacs/testing-peer-dep-conflict-chain-e': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-e/-/testing-peer-dep-conflict-chain-e-1.0.0.tgz',
            integrity: 'sha512-EDuAVgd6DBGe2tKQKdQt7Z6RoptSWQem4W++F+bqC31E0JuRVJHu44sENtIviUGsi0jVJS5xD75cL6kvvbaw/Q==',
            peer: true,
            peerDependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-a': '1',
            },
          },
          'node_modules/@isaacs/testing-peer-dep-conflict-chain-single-a': {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-single-a/-/testing-peer-dep-conflict-chain-single-a-1.0.1.tgz',
            integrity: 'sha512-NLHsR3z4e5I7+IXbe8l0SXDSdsghDtbsCMAG3deh21djZAH4dawx0bR/V/knYDrd0OZWdr0jDhivmVm42SmB1w==',
            peerDependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-a': '1',
            },
          },
          'node_modules/@isaacs/testing-peer-dep-conflict-chain-single-b': {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-single-b/-/testing-peer-dep-conflict-chain-single-b-1.0.1.tgz',
            integrity: 'sha512-cyXyBAMPJWv28bHI0cJrer64eqQsM59CR+/ideNwthD5X5hZVyvVMTpuai7noDA34jllf9Xgb+jcPgt2xmvR6A==',
            peerDependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-a': '1',
              '@isaacs/testing-peer-dep-conflict-chain-single-a': '1',
            },
          },
        },
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-a': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-a/-/testing-peer-dep-conflict-chain-a-1.0.0.tgz',
            integrity: 'sha512-yUUG0Sem+AzNZ0uPXmEZN/GHHMmAg3kbM/zrijnd+tAAKVV5PhWXVUuLKJ3Q6wSAxz3WuYG08OaJl3lpV4UFOA==',
            requires: {},
          },
          '@isaacs/testing-peer-dep-conflict-chain-b': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-b/-/testing-peer-dep-conflict-chain-b-1.0.0.tgz',
            integrity: 'sha512-tbsZ8No4L7h5YiIqDwGlJ14dg44oG4ZstF/wx7eZKUlnZax392thEeac5MNGFsv1T0Uqtiby9+SdpIRpejrHSw==',
            peer: true,
            requires: {},
          },
          '@isaacs/testing-peer-dep-conflict-chain-c': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-c/-/testing-peer-dep-conflict-chain-c-1.0.0.tgz',
            integrity: 'sha512-173OUwUJK8QN4CGTF+oPHwoOHbUzgxjC3tzg2kBVLE/eak02ZXJrW9l4LmW03vqcToADVhsVMcFLIaAb6yd1mQ==',
            peer: true,
            requires: {},
          },
          '@isaacs/testing-peer-dep-conflict-chain-d': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-d/-/testing-peer-dep-conflict-chain-d-1.0.0.tgz',
            integrity: 'sha512-zOtmaure/xJHmz7yGU7T33hjV6MZpo8Y6v1GuxDBx0PbqGoCxxCMacNtTUsEL5Sj8T19r5UShGZQmirNqPuhww==',
            peer: true,
            requires: {},
          },
          '@isaacs/testing-peer-dep-conflict-chain-e': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-e/-/testing-peer-dep-conflict-chain-e-1.0.0.tgz',
            integrity: 'sha512-EDuAVgd6DBGe2tKQKdQt7Z6RoptSWQem4W++F+bqC31E0JuRVJHu44sENtIviUGsi0jVJS5xD75cL6kvvbaw/Q==',
            peer: true,
            requires: {},
          },
          '@isaacs/testing-peer-dep-conflict-chain-single-a': {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-single-a/-/testing-peer-dep-conflict-chain-single-a-1.0.1.tgz',
            integrity: 'sha512-NLHsR3z4e5I7+IXbe8l0SXDSdsghDtbsCMAG3deh21djZAH4dawx0bR/V/knYDrd0OZWdr0jDhivmVm42SmB1w==',
            requires: {},
          },
          '@isaacs/testing-peer-dep-conflict-chain-single-b': {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-single-b/-/testing-peer-dep-conflict-chain-single-b-1.0.1.tgz',
            integrity: 'sha512-cyXyBAMPJWv28bHI0cJrer64eqQsM59CR+/ideNwthD5X5hZVyvVMTpuai7noDA34jllf9Xgb+jcPgt2xmvR6A==',
            requires: {},
          },
        },
      }),
    })
    t.matchSnapshot(await printIdeal(path, {
      add: [
        '@isaacs/testing-peer-dep-conflict-chain-single-a@2',
        '@isaacs/testing-peer-dep-conflict-chain-single-b@2',
      ],
    }))
  })

  t.test('conflict, but resolves appropriately with --force', async t => {
    const path = t.testdir({
      'package.json': JSON.stringify({
        name: 'x',
        version: '1.0.0',
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-a': '2',
          '@isaacs/testing-peer-dep-conflict-chain-single-a': '^1.0.1',
          '@isaacs/testing-peer-dep-conflict-chain-single-b': '^1.0.1',
        },
      }),
      'package-lock.json': JSON.stringify({
        name: 'x',
        lockfileVersion: 2,
        requires: true,
        packages: {
          '': {
            dependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-a': '2',
              '@isaacs/testing-peer-dep-conflict-chain-single-a': '^1.0.1',
              '@isaacs/testing-peer-dep-conflict-chain-single-b': '^1.0.1',
            },
          },
          'node_modules/@isaacs/testing-peer-dep-conflict-chain-a': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-a/-/testing-peer-dep-conflict-chain-a-2.0.0.tgz',
            integrity: 'sha512-B1L3NDBf8/nZSDM+E0AmotxaSGi5e/EUPRpoGLS0nAqulv3itMULe7s4VREyuS195j4JlhJEaz9C8idB9mA8Bw==',
            peerDependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-b': '2',
            },
          },
          'node_modules/@isaacs/testing-peer-dep-conflict-chain-b': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-b/-/testing-peer-dep-conflict-chain-b-2.0.0.tgz',
            integrity: 'sha512-6Lh4Gj5Nl5i+IhYxCjBmD5acTRkSni5m/wjXZCVaj0xJUVaNO+MprVlktUc0w1WN8E6CM4yhrkVdFTMDxBIZ0Q==',
            peer: true,
            peerDependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-c': '2',
            },
          },
          'node_modules/@isaacs/testing-peer-dep-conflict-chain-c': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-c/-/testing-peer-dep-conflict-chain-c-2.0.0.tgz',
            integrity: 'sha512-iRawfr15PBTW8PHYySyCF/DvgNuEy8hCZQfWkLrdfiQvJfbMWsbSLAdX2HBT2hh0pefc0v+vBKpuhPi/jy6pvQ==',
            peer: true,
            peerDependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-d': '2',
            },
          },
          'node_modules/@isaacs/testing-peer-dep-conflict-chain-d': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-d/-/testing-peer-dep-conflict-chain-d-2.0.0.tgz',
            integrity: 'sha512-zDS6IzO10KmLdtrG1m8M5wZ8wzmHPWaUBc4QaqptvI/nhLrgcH8OZB0hoMmK8tQg4MalbOyam4EdKOg7u9kGGg==',
            peer: true,
            peerDependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-e': '2',
            },
          },
          'node_modules/@isaacs/testing-peer-dep-conflict-chain-e': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-e/-/testing-peer-dep-conflict-chain-e-2.0.0.tgz',
            integrity: 'sha512-HEcKq/WWndty//qXYNL9TxDve0FAJqSPAAFU7t6Hm5AtluOGmIPiGUf7Ei9HGe60iBrrfmnzSxfFRG7j0SbW9Q==',
            peer: true,
            peerDependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-a': '2',
            },
          },
          'node_modules/@isaacs/testing-peer-dep-conflict-chain-single-a': {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-single-a/-/testing-peer-dep-conflict-chain-single-a-1.0.1.tgz',
            integrity: 'sha512-NLHsR3z4e5I7+IXbe8l0SXDSdsghDtbsCMAG3deh21djZAH4dawx0bR/V/knYDrd0OZWdr0jDhivmVm42SmB1w==',
            peerDependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-a': '1',
            },
          },
          'node_modules/@isaacs/testing-peer-dep-conflict-chain-single-b': {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-single-b/-/testing-peer-dep-conflict-chain-single-b-1.0.1.tgz',
            integrity: 'sha512-cyXyBAMPJWv28bHI0cJrer64eqQsM59CR+/ideNwthD5X5hZVyvVMTpuai7noDA34jllf9Xgb+jcPgt2xmvR6A==',
            peerDependencies: {
              '@isaacs/testing-peer-dep-conflict-chain-a': '1',
              '@isaacs/testing-peer-dep-conflict-chain-single-a': '1',
            },
          },
        },
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-a': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-a/-/testing-peer-dep-conflict-chain-a-2.0.0.tgz',
            integrity: 'sha512-B1L3NDBf8/nZSDM+E0AmotxaSGi5e/EUPRpoGLS0nAqulv3itMULe7s4VREyuS195j4JlhJEaz9C8idB9mA8Bw==',
            requires: {},
          },
          '@isaacs/testing-peer-dep-conflict-chain-b': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-b/-/testing-peer-dep-conflict-chain-b-2.0.0.tgz',
            integrity: 'sha512-6Lh4Gj5Nl5i+IhYxCjBmD5acTRkSni5m/wjXZCVaj0xJUVaNO+MprVlktUc0w1WN8E6CM4yhrkVdFTMDxBIZ0Q==',
            peer: true,
            requires: {},
          },
          '@isaacs/testing-peer-dep-conflict-chain-c': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-c/-/testing-peer-dep-conflict-chain-c-2.0.0.tgz',
            integrity: 'sha512-iRawfr15PBTW8PHYySyCF/DvgNuEy8hCZQfWkLrdfiQvJfbMWsbSLAdX2HBT2hh0pefc0v+vBKpuhPi/jy6pvQ==',
            peer: true,
            requires: {},
          },
          '@isaacs/testing-peer-dep-conflict-chain-d': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-d/-/testing-peer-dep-conflict-chain-d-2.0.0.tgz',
            integrity: 'sha512-zDS6IzO10KmLdtrG1m8M5wZ8wzmHPWaUBc4QaqptvI/nhLrgcH8OZB0hoMmK8tQg4MalbOyam4EdKOg7u9kGGg==',
            peer: true,
            requires: {},
          },
          '@isaacs/testing-peer-dep-conflict-chain-e': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-e/-/testing-peer-dep-conflict-chain-e-2.0.0.tgz',
            integrity: 'sha512-HEcKq/WWndty//qXYNL9TxDve0FAJqSPAAFU7t6Hm5AtluOGmIPiGUf7Ei9HGe60iBrrfmnzSxfFRG7j0SbW9Q==',
            peer: true,
            requires: {},
          },
          '@isaacs/testing-peer-dep-conflict-chain-single-a': {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-single-a/-/testing-peer-dep-conflict-chain-single-a-1.0.1.tgz',
            integrity: 'sha512-NLHsR3z4e5I7+IXbe8l0SXDSdsghDtbsCMAG3deh21djZAH4dawx0bR/V/knYDrd0OZWdr0jDhivmVm42SmB1w==',
            requires: {},
          },
          '@isaacs/testing-peer-dep-conflict-chain-single-b': {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/@isaacs/testing-peer-dep-conflict-chain-single-b/-/testing-peer-dep-conflict-chain-single-b-1.0.1.tgz',
            integrity: 'sha512-cyXyBAMPJWv28bHI0cJrer64eqQsM59CR+/ideNwthD5X5hZVyvVMTpuai7noDA34jllf9Xgb+jcPgt2xmvR6A==',
            requires: {},
          },
        },
      }),
    })
    t.matchSnapshot(await printIdeal(path, {
      force: true,
      add: [
        '@isaacs/testing-peer-dep-conflict-chain-single-a@2',
        '@isaacs/testing-peer-dep-conflict-chain-single-b@2',
      ],
    }), 'succeed if force applied')
    await t.rejects(printIdeal(path, {
      add: [
        '@isaacs/testing-peer-dep-conflict-chain-single-a@2',
        '@isaacs/testing-peer-dep-conflict-chain-single-b@2',
      ],
    }), 'fail without force')
  })
})

t.test('carbonium eslint conflicts', async t => {
  const path = resolve(fixtures, 'carbonium')
  t.matchSnapshot(await printIdeal(path, {
    add: [
      '@typescript-eslint/eslint-plugin@4',
      '@typescript-eslint/parser@4',
    ],
  }))
})

t.test('peerOptionals that are devDeps or explicit request', async t => {
  const path = resolve(fixtures, 'peer-optional-installs')
  const arb = new Arborist({ path, ...OPT })
  const tree = await arb.buildIdealTree({ add: ['abbrev'] })
  t.matchSnapshot(printTree(tree), 'should install the abbrev dep')
  t.ok(tree.children.get('abbrev'), 'should install abbrev dep')

  t.matchSnapshot(await printIdeal(path, {
    add: ['wrappy'],
    saveType: 'dev',
  }), 'should install the wrappy dep, and not remove from peerDeps')
})

t.test('weird thing when theres a link to ..', async t => {
  // don't set the fsParent of x to y, that's just not how trees work.
  const path = t.testdir({
    'package.json': JSON.stringify({
      name: 'x',
      version: '1.2.3',
    }),
    y: {
      'package.json': JSON.stringify({
        name: 'y',
        version: '1.2.3',
        dependencies: {
          x: 'file:../',
        },
      }),
    },
  }) + '/y'
  const arb = new Arborist({ path, ...OPT })
  const tree = await arb.buildIdealTree()
  t.equal(tree.children.get('x').target.fsParent, null)
})

t.test('always prefer deduping peer deps', async t => {
  // ink 3.8.0 peer depends on react >=16.8.0, and has deps that peerDepend
  // on react 16.x, so we need to ensure that they get deduped up a level.
  const path = t.testdir({
    'package.json': JSON.stringify({
      dependencies: {
        '@pmmmwh/react-refresh-webpack-plugin': '0.4.2',
        ink: '3.0.8',
        'react-reconciler': '0.25.0',
      },
    }),
  })
  t.matchSnapshot(await printIdeal(path))
})

t.test('do not ever nest peer deps underneath their dependent ever', async t => {
  // ink 3.8.0 peer depends on react >=16.8.0, and has deps that peerDepend
  // on react 16.x, so we need to ensure that they fail when they cannot be
  // deduped up a level.  Tests for a bug where react 16 would end up nested
  // underneath ink, even though it is a peerDep.
  const path = t.testdir({
    'package.json': JSON.stringify({
      dependencies: {
        treport: '1.0.2',
        // this peer depends on react 17
        'react-reconciler': '0.26.0',
      },
    }),
  })
  t.rejects(printIdeal(path), { code: 'ERESOLVE' })
})

t.test('properly fail on conflicted peerOptionals', async t => {
  // react-refresh-webpack-plugin has a peerOptional dep on
  // type-fest 0.13.0, but the root package is stipulating 0.12
  // we would not normally install type-fest, but if we DO install it,
  // it must not be a version that conflicts.
  const path = t.testdir({
    'package.json': JSON.stringify({
      dependencies: {
        '@pmmmwh/react-refresh-webpack-plugin': '0.4.2',
        'type-fest': '^0.12.0',
      },
    }),
  })
  await t.rejects(printIdeal(path), { code: 'ERESOLVE' })
})

t.test('properly assign fsParent when paths have .. in them', async t => {
  const path = resolve(fixtures, 'fs-parent-dots/x/y/z')
  const arb = new Arborist({ ...OPT, path })
  const tree = await arb.buildIdealTree()
  t.matchSnapshot(printTree(tree))
  for (const child of tree.children.values()) {
    t.equal(child.isLink, true, 'all children should be links')
    t.equal(tree.inventory.has(child.target), true, 'target should be known')
  }
  for (const node of tree.inventory.filter(n => n.isLink)) {
    const { target } = node
    if (target.location === '../..')
      t.equal(target.fsParent, null, '../.. has no fsParent')
    else
      t.equal(tree.inventory.has(target.fsParent), true, 'other targets have fsParent')
  }
})

t.test('update global', async t => {
  // global root
  // ├─┬ @isaacs/testing-dev-optional-flags@1.0.0
  // │ ├── own-or@1.0.0
  // │ └── wrappy@1.0.2
  // └─┬ once@1.3.1
  //   └── wrappy@1.0.1

  const path = t.testdir({
    node_modules: {
      '@isaacs': {
        'testing-dev-optional-flags': {
          'package.json': JSON.stringify({
            name: '@isaacs/testing-dev-optional-flags',
            version: '1.0.0',
            dependencies: {
              wrappy: '^1.0.2',
              'own-or': '^1.0.0',
            },
          }),
          node_modules: {
            'own-or': {
              'package.json': JSON.stringify({
                name: 'own-or',
                version: '1.0.0',
              }),
            },
            wrappy: {
              'package.json': JSON.stringify({
                name: 'wrappy',
                version: '1.0.0',
              }),
            },
          },
        },
      },
      once: {
        'package.json': JSON.stringify({
          name: 'once',
          version: '1.3.1',
          dependencies: {
            wrappy: '1',
          },
        }),
        node_modules: {
          wrappy: {
            'package.json': JSON.stringify({
              name: 'wrappy',
              version: '1.0.1',
            }),
          },
        },
      },
    },
  })
  t.matchSnapshot(await printIdeal(path, { global: true, update: ['wrappy'] }),
    'updating sub-dep has no effect')
  t.matchSnapshot(await printIdeal(path, { global: true, update: ['once'] }),
    'update a single dep')
  t.matchSnapshot(await printIdeal(path, { global: true, update: true }),
    'update all the deps')
})

t.test('update global when nothing in global', async t => {
  const path = t.testdir({
    no_nm: {},
    empty_nm: {
      node_modules: {},
    },
  })
  const opts = { global: true, update: true }
  t.matchSnapshot(await printIdeal(path + '/no_nm', opts),
    'update without node_modules')
  t.matchSnapshot(await printIdeal(path + '/empty_nm', opts),
    'update with empty node_modules')
})

t.test('peer dep that needs to be replaced', async t => {
  // this verifies that the webpack 5 that gets placed by default for
  // the initial dep will be successfully replaced by webpack 4 that
  // webpack-dev-server needs, even though webpack 5 has a dep that
  // peer-depends back on it.
  const path = t.testdir({
    'package.json': JSON.stringify({
      dependencies: {
        '@pmmmwh/react-refresh-webpack-plugin': '^0.4.3',
        'webpack-dev-server': '^3.11.0',
      },
    }),
  })
  t.matchSnapshot(await printIdeal(path))
})

t.test('peer dep override with dep sets being replaced', async t => {
  // in this case, because our root depends on webpack 5, and on something
  // that has a peer dependency on webpack 4, it overrides but otherwise fails.
  const path = t.testdir({
    'package.json': JSON.stringify({
      devDependencies: {
        webpack: '5.0.0',
        'webpack-dev-server': '3.11.0',
      },
    }),
  })
  await t.rejects(printIdeal(path), { code: 'ERESOLVE' })
  t.matchSnapshot(await printIdeal(path, { force: true }))
})

t.test('remove deps when initializing tree from actual tree', async t => {
  const path = t.testdir({
    node_modules: {
      foo: {
        'package.json': JSON.stringify({
          name: 'foo',
          version: '1.2.3',
        }),
      },
    },
  })

  const arb = new Arborist({ path, ...OPT })
  const tree = await arb.buildIdealTree({ rm: ['foo'] })
  t.equal(tree.children.get('foo'), undefined, 'removed foo child')
})

t.test('detect conflicts in transitive peerOptional deps', t => {
  t.plan(2)
  const base = resolve(fixtures, 'test-conflicted-optional-peer-dep')

  t.test('nest when peerOptional conflicts', async t => {
    const path = resolve(base, 'nest-peer-optional')
    const tree = await buildIdeal(path)
    t.matchSnapshot(printTree(tree))
    const name = '@isaacs/test-conflicted-optional-peer-dep-peer'
    const peers = tree.inventory.query('name', name)
    t.equal(peers.size, 2, 'installed the peer dep twice to avoid conflict')
  })

  t.test('omit peerOptionals when not needed for conflicts', async t => {
    const path = resolve(base, 'omit-peer-optional')
    const tree = await buildIdeal(path)
    t.matchSnapshot(printTree(tree))
    const name = '@isaacs/test-conflicted-optional-peer-dep-peer'
    const peers = tree.inventory.query('name', name)
    t.equal(peers.size, 0, 'omit peerOptional, not needed')
  })
})

t.test('do not fail if root peerDep looser than meta peerDep', async t => {
  const path = resolve(fixtures, 'test-peer-looser-than-dev')
  t.matchSnapshot(await printIdeal(path))
})

t.test('adding existing dep with updateable version in package.json', async t => {
  const path = t.testdir({
    node_modules: {
      lodash: {
        'package.json': JSON.stringify({
          version: '3.9.1',
        }),
      },
    },
    'package.json': JSON.stringify({
      devDependencies: {
        lodash: '^3.9.1',
      },
    }),
  })

  t.matchSnapshot(await printIdeal(path, { add: ['lodash'] }))
})

t.test('set the current on ERESOLVE triggered by devDeps', async t => {
  // fixes a bug where the dev deps are not loaded properly in the
  // virtual root, leading to incomprehensible ERESOLVE explanations
  const path = t.testdir({
    'package.json': JSON.stringify({
      name: 'root-dev-peer-conflict',
      version: '1.0.0',
      devDependencies: {
        eslint: '^4.19.1',
        'eslint-config-standard': '^11.0.0',
      },
    }),
  })

  const arb = new Arborist({ path, ...OPT })
  t.rejects(arb.buildIdealTree(), {
    code: 'ERESOLVE',
    current: {
      name: 'eslint',
      version: '4.19.1',
      whileInstalling: {
        name: 'root-dev-peer-conflict',
        version: '1.0.0',
        path: resolve(path),
      },
      location: 'node_modules/eslint',
    },
  })
})

t.test('shrinkwrapped dev/optional deps should not clobber flags', t => {
  t.test('optional', async t => {
    const path = t.testdir({
      'package.json': JSON.stringify({
        name: 'project',
        version: '1.2.3',
        optionalDependencies: {
          '@isaacs/test-package-with-shrinkwrap': '^1.0.0',
        },
      }),
    })
    const tree = await buildIdeal(path, { complete: true })
    const swName = '@isaacs/test-package-with-shrinkwrap'
    const swDep = tree.children.get(swName)
    const metaDep = swDep.children.get('abbrev')
    t.equal(swDep.optional, true, 'shrinkwrapped dep is optional')
    t.equal(metaDep.optional, true, 'shrinkwrapped metadep optional')

    // make sure we're not just somehow leaving ALL flags true
    t.equal(swDep.dev, false, 'sw dep is not dev')
    t.equal(metaDep.dev, false, 'meta dep is not dev')
  })

  t.test('dev', async t => {
    const path = t.testdir({
      'package.json': JSON.stringify({
        name: 'project',
        version: '1.2.3',
        devDependencies: {
          '@isaacs/test-package-with-shrinkwrap': '^1.0.0',
        },
      }),
    })
    const tree = await buildIdeal(path, { complete: true })
    const swName = '@isaacs/test-package-with-shrinkwrap'
    const swDep = tree.children.get(swName)
    const metaDep = swDep.children.get('abbrev')
    t.equal(swDep.dev, true, 'shrinkwrapped dep is dev')
    t.equal(metaDep.dev, true, 'shrinkwrapped metadep dev')

    // make sure we're not just somehow leaving ALL flags true
    t.equal(swDep.optional, false, 'sw dep is not optional')
    t.equal(metaDep.optional, false, 'meta dep is not optional')
  })

  t.end()
})

t.test('do not ERESOLVE on peerOptionals that are ignored anyway', t => {
  // this simulates three cases where a conflict occurs during the peerSet
  // generation phase, but will not manifest in the tree building phase.
  const base = resolve(fixtures, 'peer-optional-eresolve')
  const cases = ['a', 'b', 'c', 'd', 'e', 'f']
  t.plan(cases.length)
  for (const c of cases) {
    t.test(`case ${c}`, async t => {
      const path = resolve(base, c)
      t.matchSnapshot(await printIdeal(path))
    })
  }
})

t.test('allow ERESOLVE to be forced when not in the source', async t => {
  const types = [
    'peerDependencies',
    'optionalDependencies',
    'devDependencies',
    'dependencies',
  ]

  // in these tests, the deps are both of the same type.  b has a peerOptional
  // dep on peer, and peer is a direct dependency of the root.
  t.test('both direct and peer of the same type', t => {
    t.plan(types.length)
    const pj = type => ({
      name: '@isaacs/conflicted-peer-optional-from-dev-dep',
      version: '1.2.3',
      [type]: {
        '@isaacs/conflicted-peer-optional-from-dev-dep-peer': '1',
        '@isaacs/conflicted-peer-optional-from-dev-dep-b': '',
      },
    })

    for (const type of types) {
      t.test(type, async t => {
        const path = t.testdir({
          'package.json': JSON.stringify(pj(type)),
        })
        t.matchSnapshot(await printIdeal(path, { force: true }), 'use the force')
        t.rejects(printIdeal(path), { code: 'ERESOLVE' }, 'no force')
      })
    }
  })

  // in these, the peer is a peer dep of the root, and b is a different type
  t.test('peer is peer, b is some other type', t => {
    t.plan(types.length - 1)
    const pj = type => ({
      name: '@isaacs/conflicted-peer-optional-from-dev-dep',
      version: '1.2.3',
      peerDependencies: {
        '@isaacs/conflicted-peer-optional-from-dev-dep-b': '',
      },
      [type]: {
        '@isaacs/conflicted-peer-optional-from-dev-dep-peer': '1',
      },
    })
    for (const type of types) {
      if (type === 'peerDependencies')
        continue
      t.test(type, async t => {
        const path = t.testdir({
          'package.json': JSON.stringify(pj(type)),
        })
        t.matchSnapshot(await printIdeal(path, { force: true }), 'use the force')
        t.rejects(printIdeal(path), { code: 'ERESOLVE' }, 'no force')
      })
    }
  })

  // in these, b is a peer dep, and peer is some other type
  t.test('peer is peer, b is some other type', t => {
    t.plan(types.length - 1)
    const pj = type => ({
      name: '@isaacs/conflicted-peer-optional-from-dev-dep',
      version: '1.2.3',
      peerDependencies: {
        '@isaacs/conflicted-peer-optional-from-dev-dep-peer': '1',
      },
      [type]: {
        '@isaacs/conflicted-peer-optional-from-dev-dep-b': '',
      },
    })
    for (const type of types) {
      if (type === 'peerDependencies')
        continue
      t.test(type, async t => {
        const path = t.testdir({
          'package.json': JSON.stringify(pj(type)),
        })
        t.matchSnapshot(await printIdeal(path, { force: true }), 'use the force')
        t.rejects(printIdeal(path), { code: 'ERESOLVE' }, 'no force')
      })
    }
  })

  t.end()
})

t.test('allow a link dep to satisfy a peer dep', async t => {
  const path = t.testdir({
    v2: {
      'package.json': JSON.stringify({
        name: '@isaacs/testing-peer-dep-conflict-chain-v',
        version: '2.0.0',
      }),
    },
    main: {
      'package.json': JSON.stringify({
        name: 'main',
        version: '1.0.0',
        dependencies: {
          '@isaacs/testing-peer-dep-conflict-chain-v': 'file:../v2',
          '@isaacs/testing-peer-dep-conflict-chain-a': '1',
        },
      }),
      node_modules: {
        '@isaacs': {}, // needed for when we create the link
      },
    },
  })

  const add = ['@isaacs/testing-peer-dep-conflict-chain-vv@2']

  // avoids if the link dep is unmet
  t.matchSnapshot(await printIdeal(path + '/main', { add }), 'unmet link avoids conflict')

  // also avoid the conflict if the link is present
  const link = resolve(path, 'main/node_modules/@isaacs/testing-peer-dep-conflict-chain-v')
  fs.symlinkSync(resolve(path, 'v2'), link, 'junction')

  // avoids if the link dep is unmet
  t.matchSnapshot(await printIdeal(path + '/main', { add }), 'reified link avoids conflict')
})

t.test('replace a link with a matching link when the current one is wrong', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      dependencies: {
        // testing what happens when a user hand-edits the
        // package.json to point to a different target with
        // a matching package.
        x: 'file:correct/x',
        y: 'file:correct/x',
      },
    }),
    correct: {
      x: {
        'package.json': JSON.stringify({
          name: 'x',
          version: '1.2.3',
        }),
      },
    },
    incorrect: {
      x: {
        'package.json': JSON.stringify({
          name: 'x',
          version: '1.2.3',
        }),
      },
    },
    node_modules: {
      x: t.fixture('symlink', '../incorrect/x'),
      y: t.fixture('symlink', '../correct/x'),
    },
    'package-lock.json': JSON.stringify({
      lockfileVersion: 2,
      requires: true,
      packages: {
        '': {
          dependencies: {
            x: 'file:incorrect/x',
            y: 'file:correct/x',
          },
        },
        'incorrect/x': {
          version: '1.2.3',
          name: 'x',
        },
        'node_modules/y': {
          resolved: 'correct/x',
          link: true,
        },
        'correct/x': {
          version: '1.2.3',
          name: 'x',
        },
        'node_modules/x': {
          resolved: 'incorrect/x',
          link: true,
        },
      },
      dependencies: {
        y: {
          version: 'file:correct/x',
        },
        x: {
          version: 'file:incorrect/x',
        },
      },
    }),
  })
  t.matchSnapshot(await printIdeal(path, {
    workspaces: null, // also test that a null workspaces is ignored.
  }), 'replace incorrect with correct')
})

t.test('cannot do workspaces in global mode', t => {
  t.throws(() => printIdeal(t.testdir(), {
    workspaces: ['a', 'b', 'c'],
    global: true,
  }), { message: 'Cannot operate on workspaces in global mode' })
  t.end()
})

t.test('add packages to workspaces, not root', async t => {
  const path = resolve(__dirname, '../fixtures/workspaces-not-root')

  const addTree = await buildIdeal(path, {
    add: ['wrappy@1.0.1'],
    workspaces: ['a', 'c'],
  })
  t.match(addTree.edgesOut.get('wrappy'), { spec: '1.0.0' })
  const a = addTree.children.get('a').target
  const b = addTree.children.get('b').target
  const c = addTree.children.get('c').target
  t.match(a.edgesOut.get('wrappy'), { spec: '1.0.1' })
  t.equal(b.edgesOut.get('wrappy'), undefined)
  t.match(c.edgesOut.get('wrappy'), { spec: '1.0.1' })
  t.matchSnapshot(printTree(addTree), 'tree with wrappy added to a and c')

  const rmTree = await buildIdeal(path, {
    rm: ['abbrev'],
    workspaces: ['a', 'b'],
  })
  t.match(rmTree.edgesOut.get('abbrev'), { spec: '' })
  t.equal(rmTree.children.get('a').target.edgesOut.get('abbrev'), undefined)
  t.equal(rmTree.children.get('b').target.edgesOut.get('abbrev'), undefined)
  t.match(rmTree.children.get('c').target.edgesOut.get('abbrev'), { spec: '' })
  t.matchSnapshot(printTree(rmTree), 'tree with abbrev removed from a and b')
})

t.test('workspace error handling', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      workspaces: ['packages/*'],
      dependencies: {
        wrappy: '1.0.0',
        abbrev: '',
      },
    }),
    packages: {
      a: {
        'package.json': JSON.stringify({
          name: 'a',
          version: '1.2.3',
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
            abbrev: '',
          },
        }),
      },
    },
  })
  t.test('set filter, but no workspaces present', async t => {
    const logs = warningTracker()
    await buildIdeal(resolve(path, 'packages/a'), {
      workspaces: ['a'],
    })
    t.strictSame(logs(), [[
      'warn',
      'workspaces',
      'filter set, but no workspaces present',
    ]], 'got warning')
  })
  t.test('set filter for workspace that is not present', async t => {
    const logs = warningTracker()
    await buildIdeal(path, {
      workspaces: ['not-here'],
    })
    t.strictSame(logs(), [[
      'warn',
      'workspaces',
      'not-here in filter set, but not in workspaces',
    ]], 'got warning')
  })
})

t.test('avoid dedupe when a dep is bundled', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      bundleDependencies: [
        '@isaacs/testing-bundle-dupes-a',
        '@isaacs/testing-bundle-dupes-b',
      ],
      dependencies: {
        '@isaacs/testing-bundle-dupes-a': '2',
        '@isaacs/testing-bundle-dupes-b': '1',
      },
    }),
  })

  // do our install, prior to the publishing of b@2.1.0
  const startTree = await buildIdeal(path, {
    // date between publish times of b@2.0.0 and b@2.1.0
    // so we get a b@2.0.0 nested
    before: new Date('2021-04-23T16:24:00Z'),
  })
  // this causes it to get the package tree:
  // root
  // +-- b@1
  // +-- a@2
  //     +-- b@2.0
  await startTree.meta.save()
  let b200
  t.test('initial tree state', t => {
    const a = startTree.children.get('@isaacs/testing-bundle-dupes-a')
    const b = startTree.children.get('@isaacs/testing-bundle-dupes-b')
    const bNested = a.children.get('@isaacs/testing-bundle-dupes-b')
    t.equal(b.version, '1.0.0')
    t.equal(a.version, '2.0.0')
    t.equal(bNested.version, '2.0.0')
    // save this to synthetically create the dupe later, so we can fix it
    b200 = bNested
    t.end()
  })

  // Now ensure that adding b@2 will install b@2.1.0 AND
  // dedupe the nested b@2.0.0 dep.
  const add = ['@isaacs/testing-bundle-dupes-b@2']
  const newTree = await buildIdeal(path, { add })
  t.test('did not create dupe', t => {
    const a = newTree.children.get('@isaacs/testing-bundle-dupes-a')
    const b = newTree.children.get('@isaacs/testing-bundle-dupes-b')
    const bNested = a.children.get('@isaacs/testing-bundle-dupes-b')
    t.equal(b.version, '2.1.0')
    t.equal(a.version, '2.0.0')
    t.notOk(bNested, 'should not have a nested b')
    t.end()
  })

  // now, synthetically create the bug we just verified no longer happens,
  // so that we can ensure that we can fix it when encountered.
  b200.parent = newTree.children.get('@isaacs/testing-bundle-dupes-a')
  await newTree.meta.save()
  fs.writeFileSync(`${path}/package.json`, JSON.stringify({
    bundleDependencies: [
      '@isaacs/testing-bundle-dupes-a',
      '@isaacs/testing-bundle-dupes-b',
    ],
    dependencies: {
      '@isaacs/testing-bundle-dupes-a': '2',
      '@isaacs/testing-bundle-dupes-b': '2',
    },
  }))

  // gut check that we have reproduced the error condition
  t.test('gut check that dupe synthetically created', t => {
    const a = newTree.children.get('@isaacs/testing-bundle-dupes-a')
    const b = newTree.children.get('@isaacs/testing-bundle-dupes-b')
    const bNested = a.children.get('@isaacs/testing-bundle-dupes-b')
    t.equal(b.version, '2.1.0')
    t.equal(a.version, '2.0.0')
    t.equal(bNested.version, '2.0.0')
    t.end()
  })

  // now we're in the "oh no, a duplicate" mode.  make sure that we can
  // dedupe out of it through any of these reasonable approaches.
  const check = (t, tree) => {
    const a = tree.children.get('@isaacs/testing-bundle-dupes-a')
    const b = tree.children.get('@isaacs/testing-bundle-dupes-b')
    const bNested = a.children.get('@isaacs/testing-bundle-dupes-b')
    t.equal(b.version, '2.1.0')
    t.equal(a.version, '2.0.0')
    t.notOk(bNested, 'should not have a nested b')
  }

  t.test('dedupe to remove dupe', async t => {
    check(t, await buildIdeal(path, {
      update: ['@isaacs/testing-bundle-dupes-b'],
      preferDedupe: true,
    }))
  })

  t.test('update b to remove dupe', async t => {
    check(t, await buildIdeal(path, {
      update: ['@isaacs/testing-bundle-dupes-b'],
    }))
  })

  t.test('update all to remove dupe', async t => {
    check(t, await buildIdeal(path, { update: true }))
  })

  t.test('reinstall a to remove dupe', async t => {
    check(t, await buildIdeal(path, {
      add: ['@isaacs/testing-bundle-dupes-a@2'],
    }))
  })

  t.test('reinstall b to remove dupe', async t => {
    const tree = await buildIdeal(path, {
      add: ['@isaacs/testing-bundle-dupes-b@2'],
    })
    check(t, tree)
  })
})

t.test('upgrade a partly overlapping peer set', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      dependencies: {
        '@isaacs/testing-peer-dep-conflict-chain-b': '2',
        '@isaacs/testing-peer-dep-conflict-chain-m': '2',
      },
    }),
  })
  const tree = await buildIdeal(path)
  await tree.meta.save()
  t.matchSnapshot(await printIdeal(path, {
    add: ['@isaacs/testing-peer-dep-conflict-chain-b@3'],
  }), 'should be able to upgrade dep, nesting the conflict')
})

t.test('fail to upgrade a partly overlapping peer set', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      dependencies: {
        '@isaacs/testing-peer-dep-conflict-chain-v': '2',
        '@isaacs/testing-peer-dep-conflict-chain-y': '2',
        '@isaacs/testing-peer-dep-conflict-chain-m': '2',
      },
    }),
  })
  const tree = await buildIdeal(path)
  await tree.meta.save()
  t.rejects(printIdeal(path, {
    add: ['@isaacs/testing-peer-dep-conflict-chain-y@3'],
  }), { code: 'ERESOLVE' }, 'should not be able to upgrade dep')
})

t.test('add deps to workspaces', async t => {
  const fixtureDef = {
    'package.json': JSON.stringify({
      workspaces: [
        'packages/*',
      ],
      dependencies: {
        mkdirp: '^1.0.4',
        minimist: '1',
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
  const path = t.testdir(fixtureDef)

  t.test('no args', async t => {
    const tree = await buildIdeal(path)
    t.equal(tree.children.get('mkdirp').version, '1.0.4')
    t.equal(tree.children.get('a').target.children.get('mkdirp').version, '0.5.5')
    t.equal(tree.children.get('b').target.children.get('mkdirp'), undefined)
    t.matchSnapshot(printTree(tree))
  })

  t.test('add mkdirp 0.5.0 to b', async t => {
    const tree = await buildIdeal(path, { workspaces: ['b'], add: ['mkdirp@0.5.0'] })
    t.equal(tree.children.get('mkdirp').version, '1.0.4')
    t.equal(tree.children.get('a').target.children.get('mkdirp').version, '0.5.5')
    t.equal(tree.children.get('b').target.children.get('mkdirp').version, '0.5.0')
    t.matchSnapshot(printTree(tree))
  })

  t.test('remove mkdirp from a', async t => {
    const tree = await buildIdeal(path, { workspaces: ['a'], rm: ['mkdirp'] })
    t.equal(tree.children.get('mkdirp').version, '1.0.4')
    t.equal(tree.children.get('a').target.children.get('mkdirp'), undefined)
    t.equal(tree.children.get('b').target.children.get('mkdirp'), undefined)
    t.matchSnapshot(printTree(tree))
  })

  t.test('upgrade mkdirp in a, dedupe on root', async t => {
    const tree = await buildIdeal(path, { workspaces: ['a'], add: ['mkdirp@1'] })
    t.equal(tree.children.get('mkdirp').version, '1.0.4')
    t.equal(tree.children.get('a').target.children.get('mkdirp'), undefined)
    t.equal(tree.children.get('a').target.edgesOut.get('mkdirp').spec, '1')
    t.equal(tree.children.get('b').target.children.get('mkdirp'), undefined)
    t.matchSnapshot(printTree(tree))
  })

  t.test('KEEP in the root, prune out unnecessary dupe', async t => {
    const path = t.testdir(fixtureDef)
    const arb = newArb(path)
    // reify first so that the other mkdirp is present in the tree
    await arb.reify()
    const tree = await buildIdeal(path, { workspaces: ['a'], add: ['mkdirp@1'] })
    t.equal(tree.children.get('mkdirp').version, '1.0.4')
    t.equal(tree.children.get('a').target.children.get('mkdirp'), undefined)
    t.equal(tree.children.get('a').target.edgesOut.get('mkdirp').spec, '1')
    t.equal(tree.children.get('b').target.children.get('mkdirp'), undefined)
    t.matchSnapshot(printTree(tree))
  })
})

const {basename, resolve} = require('path')
const t = require('tap')
const Arborist = require('../..')
const fixtures = resolve(__dirname, '../fixtures')
const registryServer = require('../fixtures/registry-mocks/server.js')
const {registry, auditResponse} = registryServer
const npa = require('npm-package-arg')
const AuditReport = require('../../lib/audit-report.js')

t.test('setup server', { bail: true }, registryServer)

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
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([name, tree]) => [name, printTree(tree)]))
    }),
  __proto__: { constructor: tree.constructor },
})

const cwd = process.cwd()
t.cleanSnapshot = s => s.split(cwd).join('{CWD}')
  .split(registry).join('https://registry.npmjs.org/')

const printIdeal = (path, opt) => buildIdeal(path, opt).then(printTree)

const OPT = { cache, registry }
const buildIdeal = (path, opt) =>
  new Arborist({ ...OPT, path, ...(opt || {}) }).buildIdealTree(opt)

t.test('fail on mismatched engine when engineStrict is set', async t => {
  const path = resolve(fixtures, 'engine-specification')

  t.rejects(buildIdeal(path, {
    ...OPT,
    nodeVersion: '12.18.4',
    engineStrict: true,
  }).then(() => { throw new Error('failed to fail') }), { code: 'EBADENGINE' })
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
    nodeVersion: '4.0.0'
  }).then(() => { throw new Error('failed to fail') }), { code: 'EBADPLATFORM' })
})

t.test('ignore mismatched platform for optional dependencies', async t => {
  const path = resolve(fixtures, 'optional-platform-specification')
  await buildIdeal(path, {
    ...OPT,
    nodeVersion: '12.18.4',
    engineStrict: true,
  })
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

t.test('a workspace with a conflicted nested duplicated dep', t =>
  t.resolveMatchSnapshot(printIdeal(
    resolve(fixtures, 'workspace4'))))

t.test('a tree with an outdated dep, missing dep, no lockfile', async t => {
  const path = resolve(fixtures, 'outdated-no-lockfile')
  const tree = await buildIdeal(path)
  const expected = {
    once: '1.3.3',
    wrappy: '1.0.1',
  }
  for (const [name, version] of Object.entries(expected)) {
    t.equal(tree.children.get(name).package.version, version, `expect ${name}@${version}`)
  }
  t.matchSnapshot(printTree(tree), 'should not update all')
})

t.test('tarball deps with transitive tarball deps', t =>
  t.resolveMatchSnapshot(printIdeal(
    resolve(fixtures, 'tarball-dependencies'))))

t.test('testing-peer-deps package', t => {
  const path = resolve(fixtures, 'testing-peer-deps')
  return buildIdeal(path).then(idealTree => new Arborist({path, idealTree, ...OPT})
    .buildIdealTree().then(tree2 => t.equal(tree2, idealTree))
    .then(() => t.matchSnapshot(printTree(idealTree), 'build ideal tree with peer deps')))
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
        add: [ '@isaacs/peer-dep-cycle-a' ],
      }), 'cyclical peer deps - reload a dependency'))
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        add: [ '@isaacs/peer-dep-cycle-a@2.x' ],
      }), 'cyclical peer deps - upgrade a package'))
      .then(() => t.rejects(printIdeal(path, {
        // this conflicts with the direct dep on a@1 PEER-> b@1
        add: [ '@isaacs/peer-dep-cycle-b@2.x' ],
      })))
        // this conflict is ok since we're using legacy peer deps
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        add: [ '@isaacs/peer-dep-cycle-b@2.x' ],
        legacyPeerDeps: true,
      })))
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        // use @latest rather than @2.x to exercise the 'explicit tag' path
        add: [ '@isaacs/peer-dep-cycle-b@latest' ],
        rm: [ '@isaacs/peer-dep-cycle-a' ],
      }), 'can add b@2 if we remove a@1 dep'))
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        rm: [ '@isaacs/peer-dep-cycle-a' ],
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
      dep: {
        name: '@isaacs/peer-dep-cycle-b',
        version: '1.0.0',
        whileInstalling: { name: '@isaacs/peer-dep-cycle-a', version: '1.0.0' },
        location: 'node_modules/@isaacs/peer-dep-cycle-b',
        dependents: [
          {
            type: 'peer',
            spec: '1',
            from: {
              name: '@isaacs/peer-dep-cycle-a',
              version: '1.0.0',
              location: 'node_modules/@isaacs/peer-dep-cycle-a',
              dependents: [
                {
                  type: 'prod',
                  spec: '1.x',
                  from: { location: paths[0] },
                }
              ]
            }
          }
        ]
      },
      current: {
        name: '@isaacs/peer-dep-cycle-c',
        version: '2.0.0',
        location: 'node_modules/@isaacs/peer-dep-cycle-c',
        dependents: [
          {
            type: 'prod',
            spec: '2.x',
            from: { location: paths[0] },
          }
        ]
      },
      peerConflict: {
        name: '@isaacs/peer-dep-cycle-c',
        version: '1.0.0',
        whileInstalling: { name: '@isaacs/peer-dep-cycle-a', version: '1.0.0' },
        location: 'node_modules/@isaacs/peer-dep-cycle-c',
        dependents: [
          {
            type: 'peer',
            spec: '1',
            from: {
              name: '@isaacs/peer-dep-cycle-b',
              version: '1.0.0',
              whileInstalling: { name: '@isaacs/peer-dep-cycle-a', version: '1.0.0' },
              location: 'node_modules/@isaacs/peer-dep-cycle-b',
              dependents: [
                {
                  type: 'peer',
                  spec: '1',
                  from: {
                    name: '@isaacs/peer-dep-cycle-a',
                    version: '1.0.0',
                    location: 'node_modules/@isaacs/peer-dep-cycle-a',
                    dependents: [
                      {
                        type: 'prod',
                        spec: '1.x',
                        from: { location: paths[0] },
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      fixWithForce: false,
      type: 'peer',
      isPeer: true,
    },
    [paths[1]]: {
      code: 'ERESOLVE',
      dep: {
        name: '@isaacs/peer-dep-cycle-c',
        version: '1.0.0',
        whileInstalling: { name: '@isaacs/peer-dep-cycle-b', version: '1.0.0' },
        location: 'node_modules/@isaacs/peer-dep-cycle-c',
        dependents: [
          {
            type: 'peer',
            spec: '1',
            error: 'INVALID',
            from: {
              name: '@isaacs/peer-dep-cycle-b',
              version: '1.0.0',
              location: 'node_modules/@isaacs/peer-dep-cycle-b',
              dependents: [
                {
                  type: 'peer',
                  spec: '1',
                  from: {
                    name: '@isaacs/peer-dep-cycle-a',
                    version: '1.0.0',
                    location: 'node_modules/@isaacs/peer-dep-cycle-a',
                    dependents: [
                      {
                        type: 'prod',
                        spec: '1.x',
                        from: { location: paths[1] },
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      current: {
        name: '@isaacs/peer-dep-cycle-c',
        version: '2.0.0',
        location: 'node_modules/@isaacs/peer-dep-cycle-c',
        dependents: [
          {
            type: 'prod',
            spec: '2.x',
            from: { location: paths[1] },
          }
        ]
      },
      fixWithForce: true,
      type: 'peer',
    },
  }

  t.plan(paths.length)
  paths.forEach(path => t.test(basename(path), t =>
    t.resolveMatchSnapshot(printIdeal(path), 'nested peer deps cycle')
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        // just make sure it works if it gets a spec object
        add: [ npa('@isaacs/peer-dep-cycle-a@2.x') ],
      }), 'upgrade a'))
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        // a dep whose name we don't yet know
        add: [
          `${registry}@isaacs/peer-dep-cycle-b/-/peer-dep-cycle-b-2.0.0.tgz`,
        ],
      }), 'upgrade b'))
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        add: [ '@isaacs/peer-dep-cycle-c@2.x' ],
      }), 'upgrade c'))
      .then(() => t.rejects(printIdeal(path, {
        strictPeerDeps: true,
        add: [
          '@isaacs/peer-dep-cycle-a@1.x',
          '@isaacs/peer-dep-cycle-c@2.x',
        ],
      }), ers[path], 'try (and fail) to upgrade c and a incompatibly'))
  ))
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
  const arb = new Arborist({...OPT})
  const tree = await arb.buildIdealTree({ add: [ 'abbrev' ] })
  t.ok(arb.explicitRequests, 'exposes the explicit request')
  t.strictSame(arb.explicitRequests, new Set(['abbrev']))
  t.ok(arb.explicitRequests.has('abbrev'), 'should contain explicit item')
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
      add: [ '@isaacs/testing-bundledeps' ],
    }), 'should have some missing deps in the ideal tree'))
})

t.test('bundle deps example 1, full', t => {
  // In this test, bundle deps show up, because they're present in
  // the actual tree to begin with.
  const path = resolve(fixtures, 'testing-bundledeps')
  return t.resolveMatchSnapshot(printIdeal(path), 'no missing deps')
    .then(() => t.resolveMatchSnapshot(printIdeal(path, {
      saveBundle: true,
      add: [ '@isaacs/testing-bundledeps' ],
    }), 'add stuff, no missing deps'))
})

t.test('bundle deps example 1, complete:true', t => {
  // When complete:true is set, we extract into a temp dir to read
  // the bundled deps, so they ARE included, just like during reify()
  const path = resolve(fixtures, 'testing-bundledeps-empty')
  return t.resolveMatchSnapshot(printIdeal(path, {
    complete: true,
  }), 'no missing deps, because complete: true')
    .then(() => t.resolveMatchSnapshot(printIdeal(path, {
      saveBundle: true,
      add: [ '@isaacs/testing-bundledeps' ],
      complete: true,
    }), 'no missing deps, because complete:true'))
})

t.test('bundle deps example 2', t => {
  // bundled deps at the root level are NOT ignored when building ideal trees
  const path = resolve(fixtures, 'testing-bundledeps-2')
  return t.resolveMatchSnapshot(printIdeal(path), 'bundle deps testing')
    .then(() => t.resolveMatchSnapshot(printIdeal(path, {
      saveBundle: true,
      add: [ '@isaacs/testing-bundledeps-c' ],
    }), 'add new bundled dep c'))
    .then(() => t.resolveMatchSnapshot(printIdeal(path, {
      rm: ['@isaacs/testing-bundledeps-a'],
    }), 'remove bundled dependency a'))
})

t.test('unresolveable peer deps', t => {
  const path = resolve(fixtures, 'testing-peer-deps-unresolvable')

  return t.rejects(printIdeal(path, { strictPeerDeps: true }), {
    message: 'unable to resolve dependency tree',
    code: 'ERESOLVE',
    dep: {
      name: '@isaacs/testing-peer-deps-c',
      version: '2.0.0',
      whileInstalling: { name: '@isaacs/testing-peer-deps-b', version: '2.0.1' },
      location: 'node_modules/@isaacs/testing-peer-deps-c',
      dependents: [
        {
          type: 'peer',
          spec: '2',
          error: 'INVALID',
          from: {
            name: '@isaacs/testing-peer-deps-b',
            version: '2.0.1',
            location: 'node_modules/@isaacs/testing-peer-deps-b',
            dependents: [
              {
                type: 'prod',
                spec: '2',
                from: { location: path },
              }
            ]
          }
        }
      ]
    },
    current: {
      name: '@isaacs/testing-peer-deps-c',
      version: '1.2.3',
      location: 'node_modules/@isaacs/testing-peer-deps-c',
      dependents: [
        {
          type: 'prod',
          spec: '1',
          from: { location: path },
        }
      ]
    },
    fixWithForce: true,
    type: 'peer',
    isPeer: true
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
        names: [ 'flow-parser' ],
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
      }
    }), 'update everything')
    t.resolveMatchSnapshot(printIdeal(tapAndFlow, {
      update: {
        names: ['ink'],
      }
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
    const existingFoo = new Node({
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
    })
    const a = new Arborist({ ...OPT })
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
    })
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
    })
    // note: it'll actually not bother replacing in this case, because
    // the original edge is not an error, but the canPlace result is still
    // REPLACE because it's newer.
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
    const existingFoo = new Node({
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
    })

    t.match(a[kCanPlaceDep](newFoo, root, existingBar.edgesOut.get('foo')),
      Symbol('REPLACE'), 'replace with newer node')
    const placed = a[kPlaceDep](newFoo, existingBar, existingBar.edgesOut.get('foo'))
    t.equal(placed.length, 1, 'placed one node')
    t.equal(placed[0], newFoo, 'placed newFoo node')
    t.equal(newFoo.parent, root, 'placed newFoo in root')

    // remove it so we can test a conflict
    newFoo.parent = null
    const tooNew = new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.3.9',
      },
      integrity: 'sha512-oofoofoof',
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
            pkg: { name: 'b', version: '1.0.0', dependencies: {c:''}},
            children: [
              // gets its d1 dep from a's child node
              {
                name: 'c',
                pkg: { name: 'c', version: '1.0.0', dependencies: {d:'1'}},
              },
              // trying to place a d2 on behalf of this one
              {
                name: 'e',
                pkg: { name: 'e', version: '1.0.0', dependencies: {d:'2'}},
              },
            ],
          },
          // the dep being shadowed
          {
            name: 'd',
            pkg: {name:'d', version: '1.0.0'},
          }
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
        pkg: {name:'d', version: '2.0.0'},
        parent: new Node({ path: '/virtual-root' })
      })

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
            pkg: { name: 'b', version: '1.0.0', dependencies: {c:''}},
            children: [
              // gets its d1 dep from a's child node
              {
                name: 'c',
                pkg: { name: 'c', version: '1.0.0', dependencies: {d:'1||2'}},
              },
              // trying to place a d2 on behalf of this one
              {
                name: 'e',
                pkg: { name: 'e', version: '1.0.0', dependencies: {d:'2'}},
              },
            ],
          },
          // the dep being shadowed
          {
            name: 'd',
            pkg: {name:'d', version: '1.0.0'},
          }
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
        pkg: {name:'d', version: '2.0.0'},
        parent: new Node({ path: '/virtual-root' })
      })

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
      a[kPlaceDep](c11, b, edge)
      t.equal(c1.root, c1, 'c 1.0 removed from tree')
      t.equal(c11.parent, dedupeUpdate, 'c 1.1 placed in root node_modules')
      t.equal(edge.to, c11, 'b is resolved by c 1.1')
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
                pkg: { name: 'e', dependencies: {
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
      a[kPlaceDep](c2, b, edge)
      t.equal(c2.parent, root, 'new node landed at the root')
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
        pkg: { dependencies: {a:'', b:'2'}},
        path: '/root',
        children: [
          { pkg: { name: 'a', version: '1.2.3', dependencies: {b:'2'}}},
          { pkg: { name: 'b', version: '2.3.4'}},
        ],
      })
      const newb = new Node({
        path: '/virtual-root/b',
        pkg: { name: 'b', version: '2.3.3' },
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
      pkg: { name: 'root', dependencies: { 'foo': '*' }},
    })
    const target = new Node({
      path: '/some/other/path',
      pkg: { name: 'foo', version: '1.2.3', peerDependencies: { bar: '' }},
      root,
    })
    const link = new Link({
      parent: root,
      pkg: target.package,
      realpath: target.path,
      target,
    })
    const bar = new Node({
      name: 'bar',
      pkg: { name: 'bar', version:'1.2.3' },
      parent: new Node({ path: '/virtual-root' }),
    })
    const edge = target.edgesOut.get('bar')
    t.equal(edge.valid, false, 'gut check')
    a[kPlaceDep](bar, target, edge)
    t.equal(edge.valid, true, 'resolved')
    t.equal(bar.parent, target, 'installed peer locally in target top node')
    t.end()
  })

  t.test('linked tops use fsParent if possible', t => {
    const a = new Arborist({ ...OPT })
    const root = new Node({
      path: '/some/path',
      realpath: '/some/path',
      pkg: { name: 'root', dependencies: { 'foo': '*' }},
    })
    const target = new Node({
      path: '/some/path/to/packages',
      pkg: { name: 'foo', version: '1.2.3', peerDependencies: { bar: '' }},
      fsParent: root,
      root,
    })
    const link = new Link({
      parent: root,
      pkg: target.package,
      realpath: target.path,
      target,
    })
    const bar = new Node({
      name: 'bar',
      pkg: { name: 'bar', version:'1.2.3' },
      parent: new Node({ path: '/virtual-root' }),
    })
    const edge = target.edgesOut.get('bar')
    t.equal(edge.valid, false, 'gut check')
    a[kPlaceDep](bar, target, edge)
    t.equal(edge.valid, true, edge.error)
    t.equal(bar.parent, root, 'installed peer in fsParent node')
    t.end()
  })

  t.end()
})

t.test('global style', t => t.resolveMatchSnapshot(printIdeal(t.testdir(), {
  globalStyle: true,
  add: [ 'rimraf' ],
})))

t.test('global', t => t.resolveMatchSnapshot(printIdeal(t.testdir(), {
  global: true,
  add: [ 'rimraf' ],
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
  t.equal(arb.idealTree.children.get('nyc').package.version, '15.0.0')
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
  const v = arb.auditReport.get('mkdirp')
  t.matchSnapshot(printTree(await arb.buildIdealTree()))
  t.strictSame(checkLogs(), [['warn', 'audit',
    'Manual fix required in linked project at ./mkdirp-unfixable for mkdirp@*.\n' +
    "'cd ./mkdirp-unfixable' and run 'npm audit' for details."
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

  t.end()
})

t.test('add symlink that points to a symlink', t => {
  const fixt = t.testdir({
    'global-prefix': {
      lib: {
        node_modules: {
          a: t.fixture('symlink', '../../../linked-pkg')
        }
      }
    },
    'linked-pkg': {
      'package.json': JSON.stringify({
        name: 'a',
        version: '1.0.0'
      })
    },
    'my-project': {
      'package.json': JSON.stringify({})
    }
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
      `file:${resolve(fixt, 'global-prefix/lib/node_modules/a')}`
    ]
  }).then(tree =>
    t.matchSnapshot(
      printTree(tree),
      'should follow symlinks to find final realpath destination'
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
    t.equal(tree.children.get('child').resolved, resolved)
  })
})

t.test('resolve links in global mode', t => {
  const path = t.testdir({
    global: {},
    lib: {
      'my-project': {}
    },
    'linked-dep': {
      'package.json': JSON.stringify({
        name: 'linked-dep',
        version: '1.0.0'
      })
    }
  })
  const fixturedir = resolve(path, 'lib', 'my-project')

  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
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
  const path = resolve(fixtures, 'eslintme')
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
  await t.rejects(() => buildIdeal(path, { strictPeerDeps: true }), {
    code: 'ERESOLVE',
    dep: {
      name: '@isaacs/testing-peer-dep-conflict-chain-a',
      version: '1.0.0',
      whileInstalling: {
        name: '@isaacs/testing-peer-dep-conflict-chain-v',
        version: '1.0.0'
      },
      location: 'node_modules/@isaacs/testing-peer-dep-conflict-chain-a',
      dependents: [
        {
          type: 'peer',
          spec: '1',
          error: 'INVALID',
          from: {
            name: '@isaacs/testing-peer-dep-conflict-chain-v',
            version: '1.0.0',
            location: 'node_modules/@isaacs/testing-peer-dep-conflict-chain-v',
            dependents: [
              {
                type: 'prod',
                spec: '1',
                from: { location: path },
              }
            ]
          }
        }
      ]
    },
    current: {
      name: '@isaacs/testing-peer-dep-conflict-chain-a',
      version: '2.0.0',
      location: 'node_modules/@isaacs/testing-peer-dep-conflict-chain-a',
      dependents: [
        {
          type: 'prod',
          spec: '2',
          from: { location: path },
        }
      ]
    },
    fixWithForce: true,
    type: 'peer',
    isPeer: true
  })
  t.matchSnapshot(await printIdeal(path, { strictPeerDeps: true, force: true }), 'force override')
  t.matchSnapshot(await printIdeal(path, { strictPeerDeps: false }), 'non-strict (default) override')
})

t.test('override a conflict with the root peer dep (with force)', async t => {
  const path = resolve(fixtures, 'testing-peer-dep-conflict-chain/override-peer')
  await t.rejects(() => buildIdeal(path, { strictPeerDeps: true }), {
    code: 'ERESOLVE',
    dep: {
      name: '@isaacs/testing-peer-dep-conflict-chain-a',
      version: '1.0.0',
      whileInstalling: {
        name: '@isaacs/testing-peer-dep-conflict-chain-v',
        version: '1.0.0'
      },
      location: 'node_modules/@isaacs/testing-peer-dep-conflict-chain-a',
      dependents: [
        {
          type: 'peer',
          spec: '1',
          error: 'INVALID',
          from: {
            name: '@isaacs/testing-peer-dep-conflict-chain-v',
            version: '1.0.0',
            location: 'node_modules/@isaacs/testing-peer-dep-conflict-chain-v',
            dependents: [
              {
                type: 'prod',
                spec: '1',
                from: { location: path },
              }
            ]
          }
        }
      ]
    },
    current: {
      name: '@isaacs/testing-peer-dep-conflict-chain-a',
      version: '2.0.0',
      location: 'node_modules/@isaacs/testing-peer-dep-conflict-chain-a',
      dependents: [
        {
          type: 'peer',
          spec: '2',
          from: { location: path },
        }
      ]
    },
    fixWithForce: true,
    type: 'peer',
    isPeer: true
  })
  t.matchSnapshot(await printIdeal(path, { strictPeerDeps: true, force: true }), 'force override')
  t.matchSnapshot(await printIdeal(path, { strictPeerDeps: false }), 'non-strict (default) override')
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

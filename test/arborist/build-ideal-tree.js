const {basename, resolve} = require('path')
const t = require('tap')
const Arborist = require('../..')
const registryServer = require('../fixtures/registry-mocks/server.js')
const {registry} = registryServer

t.test('setup server', { bail: true }, registryServer)

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

const printIdeal = (path, opt) => buildIdeal(path, opt).then(printTree)

const buildIdeal = (path, opt) =>
  new Arborist({registry, path, ...(opt || {})}).buildIdealTree(opt)

t.test('testing-peer-deps package', t => {
  const path = resolve(__dirname, '../fixtures/testing-peer-deps')
  return t.resolveMatchSnapshot(printIdeal(path), 'build ideal tree with peer deps')
})

t.test('tap vs react15', t => {
  const path = resolve(__dirname, '../fixtures/tap-react15-collision')
  return t.resolveMatchSnapshot(printIdeal(path), 'build ideal tree with tap collision')
})

t.test('tap vs react15 with legacy shrinkwrap', t => {
  const path = resolve(__dirname, '../fixtures/tap-react15-collision-legacy-sw')
  return t.resolveMatchSnapshot(printIdeal(path), 'tap collision with legacy sw file')
})

t.test('bad shrinkwrap file', t => {
  const path = resolve(__dirname, '../fixtures/testing-peer-deps-bad-sw')
  return t.resolveMatchSnapshot(printIdeal(path), 'bad shrinkwrap')
})

t.test('cyclical peer deps', t => {
  const paths = [
    resolve(__dirname, '../fixtures/peer-dep-cycle'),
    resolve(__dirname, '../fixtures/peer-dep-cycle-with-sw'),
  ]

  t.plan(paths.length)
  paths.forEach(path => t.test(basename(path), t =>
    t.resolveMatchSnapshot(printIdeal(path), 'cyclical peer deps')
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        add: {
          dependencies: {
            '@isaacs/peer-dep-cycle-a': '2.x'
          }
        },
      }), 'cyclical peer deps - upgrade a package'))
      .then(() => t.rejects(printIdeal(path, {
        add: {
          dependencies: {
            // this conflicts with the direct dep on a@1 PEER-> b@1
            '@isaacs/peer-dep-cycle-b': '2.x',
          },
        },
      })))
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        add: {
          dependencies: {
            '@isaacs/peer-dep-cycle-b': '2.x',
          },
        },
        rm: [ '@isaacs/peer-dep-cycle-a' ],
      }), 'can add b@2 if we remove a@1 dep'))
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        rm: [ '@isaacs/peer-dep-cycle-a' ],
      }), 'remove the dep, prune everything'))
  ))
})

t.test('nested cyclical peer deps', t => {
  const paths = [
    resolve(__dirname, '../fixtures/peer-dep-cycle-nested'),
    resolve(__dirname, '../fixtures/peer-dep-cycle-nested-with-sw'),
  ]
  t.plan(paths.length)
  paths.forEach(path => t.test(basename(path), t =>
    t.resolveMatchSnapshot(printIdeal(path), 'nested peer deps cycle')
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        add: {
          dependencies: {
            '@isaacs/peer-dep-cycle-a': '2.x',
          },
        },
      }), 'upgrade a'))
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        add: {
          dependencies: {
            '@isaacs/peer-dep-cycle-b': '2.x',
          },
        },
      }), 'upgrade b'))
      .then(() => t.resolveMatchSnapshot(printIdeal(path, {
        add: {
          dependencies: {
            '@isaacs/peer-dep-cycle-c': '2.x',
          },
        },
      }), 'upgrade c'))
      .then(() => t.rejects(printIdeal(path, {
        add: {
          dependencies: {
            '@isaacs/peer-dep-cycle-a': '1.x',
            '@isaacs/peer-dep-cycle-c': '2.x',
          },
        },
      }), 'try (and fail) to upgrade c and a incompatibly'))
  ))
})

t.test('dedupe example - not deduped', t => {
  const path = resolve(__dirname, '../fixtures/dedupe-tests')
  return t.resolveMatchSnapshot(printIdeal(path), 'dedupe testing')
})

t.test('dedupe example - deduped because preferDedupe=true', t => {
  const path = resolve(__dirname, '../fixtures/dedupe-tests')
  return t.resolveMatchSnapshot(printIdeal(path, { preferDedupe: true }), 'dedupe testing')
})

t.test('dedupe example - deduped', t => {
  const path = resolve(__dirname, '../fixtures/dedupe-tests-2')
  return t.resolveMatchSnapshot(printIdeal(path), 'dedupe testing')
})

t.test('bundle deps example 1', t => {
  // NB: this results in ignoring the bundled deps when building the
  // ideal tree.  When we reify, we'll have to ignore the deps that
  // got placed as part of the bundle.
  const path = resolve(__dirname, '../fixtures/testing-bundledeps')
  return t.resolveMatchSnapshot(printIdeal(path), 'bundle deps testing')
    .then(() => t.resolveMatchSnapshot(printIdeal(path, {
      add: {
        bundleDependencies: ['@isaacs/testing-bundledeps'],
      },
    }), 'bundle the bundler'))
})

t.test('bundle deps example 2', t => {
  // bundled deps at the root level are NOT ignored when building ideal trees
  const path = resolve(__dirname, '../fixtures/testing-bundledeps-2')
  return t.resolveMatchSnapshot(printIdeal(path), 'bundle deps testing')
    .then(() => t.resolveMatchSnapshot(printIdeal(path, {
      add: {
        bundleDependencies: [ '@isaacs/testing-bundledeps-c' ],
      },
    }), 'add new bundled dep c'))
    .then(() => t.resolveMatchSnapshot(printIdeal(path, {
      rm: ['@isaacs/testing-bundledeps-a'],
    }), 'remove bundled dependency a'))
})

t.test('unresolveable peer deps', t => {
  const path = resolve(__dirname, '../fixtures/testing-peer-deps-unresolvable')
  return t.rejects(printIdeal(path), {
    message: 'unable to resolve dependency tree',
    package: '@isaacs/testing-peer-deps-c',
    spec: '2',
    type: 'peer',
    requiredBy: '@isaacs/testing-peer-deps-b@2.0.1',
  }, 'unacceptable')
})

t.test('update', t => {
  const flowOutdated = resolve(__dirname, '../fixtures/flow-outdated')

  t.resolveMatchSnapshot(printIdeal(flowOutdated, {
    update: {
      names: [ 'flow-parser' ],
    },
  }), 'update flow parser')

  t.resolveMatchSnapshot(printIdeal(flowOutdated, {
    update: true,
  }), 'update everything')

  const tapAndFlow = resolve(__dirname, '../fixtures/tap-and-flow')
  t.resolveMatchSnapshot(printIdeal(tapAndFlow, {
    update: {
      all: true,
      depth: 1,
    }
  }), 'update everything, depth of 1')
  t.resolveMatchSnapshot(printIdeal(tapAndFlow, {
    update: {
      names: ['ink'],
      depth: 1,
    }
  }), 'update everything, depth of 1')

  t.end()
})

// some cases that are hard to hit without very elaborate dep trees
// and precise race conditions, so we just create some contrived
// examples here.
t.test('contrived dep placement tests', t => {
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
    const a = new Arborist()
    t.match(a.canPlaceDep(sameFoo, root, root.edgesOut.get('foo')),
      Symbol('KEEP'), 'same integrity, keep the one we have')

    t.strictSame(a.placeIdealDep(sameFoo, root, root.edgesOut.get('foo')),
      [], 'nothing placed, keep whats already there')

    const tooNew = new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.3.9',
      },
      integrity: 'sha512-oofoofoof',
    })
    t.match(a.canPlaceDep(tooNew, root, existingBar.edgesOut.get('foo')),
      Symbol('KEEP'), 'keep existing, satisfies the dep anyway')
    t.strictSame(a.placeIdealDep(tooNew, root, existingBar.edgesOut.get('foo')),
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
    t.match(a.canPlaceDep(newFoo, root, existingBar.edgesOut.get('foo')),
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

    const a = new Arborist()

    const newFoo = new Node({
      name: 'foo',
      pkg: {
        name: 'foo',
        version: '1.2.99',
      },
      integrity: 'sha512-oofoofoof',
    })

    t.match(a.canPlaceDep(newFoo, root, existingBar.edgesOut.get('foo')),
      Symbol('REPLACE'), 'replace with newer node')
    const placed = a.placeIdealDep(newFoo, existingBar, existingBar.edgesOut.get('foo'))
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
    t.match(a.canPlaceDep(tooNew, root, existingBar.edgesOut.get('foo')),
      Symbol('CONFLICT'), 'conflicts with root dependency')

    t.test('shadow conflict', t => {
      const a = new Arborist()
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

      t.match(a.canPlaceDep(d2, b, edge, null), Symbol('CONFLICT'),
        'cannot place dep where it shadows a dependency creating a conflict')

      t.end()
    })

    t.test('update replacing with a better node, dedupe existing', t => {
      const a = new Arborist()
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
      const dedupeUpdate = new Node({
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
      a.buildIdealTreeUpdateSettings.names = ['c']
      a.placeIdealDep(c11, b, edge)
      t.equal(c1.root, c1, 'c 1.0 removed from tree')
      t.equal(c11.parent, dedupeUpdate, 'c 1.1 placed in root node_modules')
      t.equal(edge.to, c11, 'b is resolved by c 1.1')
      t.equal(edge.valid, true, 'b is happy about this')
      t.equal(b.children.size, 0, 'b has no direct children now')
      t.end()
    })

    t.end()
  })

  t.test('linked tops get their peer deps local if no other option', t => {
    const a = new Arborist()
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
    a.placeIdealDep(bar, target, edge)
    t.equal(edge.valid, true, 'resolved')
    t.equal(bar.parent, target, 'installed peer locally in target top node')
    t.end()
  })

  t.test('linked tops use fsParent if possible', t => {
    const a = new Arborist()
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
    a.placeIdealDep(bar, target, edge)
    t.equal(edge.valid, true, edge.error)
    t.equal(bar.parent, root, 'installed peer in fsParent node')
    t.end()
  })

  t.end()
})

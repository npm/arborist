const t = require('tap')
const Node = require('../lib/node.js')
const Link = require('../lib/link.js')
const Shrinkwrap = require('../lib/shrinkwrap.js')

t.cleanSnapshot = str =>
  str.split(process.cwd()).join('{CWD}').replace('\\', '/')

t.test('basic instantiation', t => {
  const root = new Node({
    pkg: { name: 'root' },
    path: '/home/user/projects/root',
    realpath: '/home/user/projects/root',
  })

  t.equal(root.depth, 0, 'root is depth 0')
  t.equal(root.isTop, true, 'root is top')
  t.equal(root.isLink, false, 'root is not a link')

  t.matchSnapshot(root, 'just a lone root node')
  t.end()
})

t.test('testing with dep tree', t => {
  const runTest = rootMetadata => t => {
    const root = new Node({
      pkg: {
        name: 'root',
        bundleDependencies: [ 'bundled' ],
        dependencies: { prod: '1.x', bundled: '', missing: '' },
        devDependencies: { dev: '', overlap: '' },
        optionalDependencies: { optional: '', overlap: '', optMissing: '' },
      },
      realpath: '/home/user/projects/root',
      path: '/home/user/projects/root',
      meta: rootMetadata,
      children: [{
        pkg: {
          name: 'prod',
          version: '1.2.3',
          dependencies: { meta: '' },
          peerDependencies: { peer: '' },
        },
        fsChildren: [{
          realpath: '/home/user/projects/root/node_modules/prod/foo',
          path: '/home/user/projects/root/node_modules/prod/foo',
          name: 'foo',
          pkg: { name: 'foo', version: '1.2.3', dependencies: {meta:''}},
        }],
        resolved: 'prod',
        integrity: 'prod',
      }]
    })
    t.equal(root.root, root, 'root is its own root node')
    const prod = root.children.get('prod')
    t.equal(prod.fsChildren.size, 1, 'prod has one fsChild')
    const foo = [...prod.fsChildren][0]
    t.equal(foo.fsParent, prod, 'foo has prod as fsParent')
    t.equal(prod.root, root, 'prod rooted on root')
    t.equal(prod.depth, 1, 'prod is depth 1')
    const meta = new Node({
      pkg: {
        name: 'meta',
        version: '1.2.3',
        devDependencies: { missing: '' },
        dependencies: { bundled: '' },
        _resolved: 'meta',
        _integrity: 'meta',
      },
      path: '/home/user/projects/root/node_modules/prod/node_modules/meta',
      realpath: '/home/user/projects/root/node_modules/prod/node_modules/meta',
      parent: prod,
    })
    t.equal(meta.isDescendantOf(root), true, 'meta descends from root')
    t.equal(meta.root, root, 'meta rooted in same tree via parent')

    const bundled = new Node({
      pkg: {
        name: 'bundled',
        version: '1.2.3',
        dependencies: { meta: '' },
      },
      resolved: 'bundled',
      integrity: 'bundled',
      path: '/home/user/projects/root/node_modules/bundled',
      realpath: '/home/user/projects/root/node_modules/bundled',
      parent: root,
    })
    t.equal(meta.isDescendantOf(bundled), false, 'meta does not descend from bundled')
    t.equal(bundled.root, root, 'bundled root is project root')

    const dev = new Node({
      pkg: {
        name: 'dev',
        version: '1.2.3',
      },
      resolved: 'dev',
      integrity: 'dev',
      path: '/home/user/projects/root/node_modules/dev',
      realpath: '/home/user/projects/root/node_modules/dev',
      parent: root,
    })
    t.equal(dev.root, root, 'dev root is project root')

    const opt = new Node({
      pkg: {
        name: 'optional',
        version: '1.2.3',
      },
      resolved: 'opt',
      integrity: 'opt',
      path: '/home/user/projects/root/node_modules/optional',
      realpath: '/home/user/projects/root/node_modules/optional',
      parent: root,
    })
    t.equal(opt.root, root, 'opt root is project root')

    const peer = new Node({
      pkg: {
        name: 'peer',
        version: '1.2.3',
      },
      resolved: 'peer',
      integrity: 'peer',
      path: '/home/user/projects/root/node_modules/peer',
      realpath: '/home/user/projects/root/node_modules/peer',
      parent: root,
    })
    t.equal(peer.root, root)

    const extraneous = new Node({
      pkg: {
        name: 'extraneous',
        version: '1.2.3',
      },
      resolved: 'extraneous',
      integrity: 'extraneous',
      path: '/home/user/projects/root/node_modules/extraneous',
      realpath: '/home/user/projects/root/node_modules/extraneous',
      parent: root,
    })
    t.equal(extraneous.root, root, 'extraneous.root is project root')

    t.equal(prod.top, root, 'root is top of tree')
    t.equal(prod.root, root, 'root is root of tree')
    t.equal(root.isRoot, true, 'root is root of tree')
    t.equal(prod.isRoot, false, 'prod is not root of tree')
    t.equal(extraneous.extraneous, true, 'extraneous is extraneous')
    t.matchSnapshot(root, 'initial load with some deps')

    // move dep to top level
    meta.parent = root
    t.matchSnapshot(root, 'move meta to top level, update stuff')
    t.equal(meta.root, root, 'meta.root is root still')
    t.equal(meta.parent, root, 'meta.parent is root')
    t.equal(root.inventory.get(meta.location), meta)

    const newMeta = new Node({
      pkg: {
        name: 'meta',
        version: '2.3.4',
        peerDependencies: { asdf: '' },
        peerDependenciesMeta: {
          asdf: { optional: true },
        },
      },
      resolved: 'newMeta',
      integrity: 'newMeta',
      name: 'meta',
      parent: prod,
    })
    t.equal(newMeta.root, root)
    newMeta.root = prod
    t.equal(newMeta.root, root, 'setting root to non-root crawls up root list')
    t.equal(meta.parent, root)
    t.equal(newMeta.parent, prod)
    t.equal(root.inventory.get(meta.location), meta)

    // test that reparenting a link _doesn't_ update realpath
    const metaMeta = new Link({
      pkg: {
        name: 'metameta',
        version: '1.2.3',
        _resolved: 'metameta',
        _integrity: 'metameta',
      },
      path: newMeta.path + '/node_modules/metameta',
      realpath: meta.realpath,
      target: meta,
    })
    metaMeta.parent = newMeta
    t.equal(metaMeta.root, root)
    t.equal(meta.root, root)
    t.equal(meta.parent, root)
    t.equal(root.children.get('meta'), meta)
    t.equal(root.inventory.get(meta.location), meta)

    t.matchSnapshot(root, 'add new meta under prod')

    t.equal(meta.parent, root, 'old meta parent is root before assigning')
    newMeta.parent = root
    t.equal(meta.parent, null, 'old meta parent removed')
    t.notEqual(root.children.get('meta'), meta,
      'root.children no longer has old meta')
    t.matchSnapshot(root, 'move new meta to top level')

    newMeta.parent = root
    t.matchSnapshot(root, 'move new meta to top level second time (no-op)')

    t.test('replacement tests', t => {
      const newProd = new Node({
        pkg: {
          name: 'prod',
          version: '1.2.3',
          dependencies: { meta: '' },
          peerDependencies: { peer: '' },
        },
        resolved: 'prod',
        integrity: 'prod',
      })
      t.equal(newProd.canReplace(prod), true, 'new prod can replace prod')
      const kidCount = prod.children.size
      newProd.replace(prod)
      t.equal(newProd.children.size, kidCount, 'kids moved to newProd')
      t.equal(prod.children.size, 0, 'kids moved to newProd')
      t.equal(prod.root, prod, 'prod excised from tree')
      t.equal(newProd.root, root, 'newProd in the tree')
      t.equal(newProd.fsChildren.size, 1, 'newProd takes over fsChildren')
      t.equal(prod.fsChildren.size, 0, 'prod has no fsChildren now')
      t.equal([...newProd.fsChildren][0], foo, 'foo in newProd fsChildren set')
      t.notEqual(foo.fsParent, prod, 'prod is not foos fsParent')
      t.equal(foo.fsParent, newProd, 'foo fsParent is now newProd')

      const notProd = new Node({
        pkg: {
          name: 'notprod',
          version: '1.2.3',
        },
      })
      t.equal(notProd.canReplace(newProd), false, 'cannot replace with different name')

      const prodV2 = new Node({
        pkg: {
          name: 'prod',
          version: '2.3.4',
        },
      })
      // also call the other alias for this function, from the other dir
      t.equal(newProd.canReplaceWith(prodV2), false, 'cannot replace with 2.x')

      const root2 = new Node({
        pkg: {
          name: 'root',
          bundleDependencies: [ 'bundled' ],
          dependencies: { prod: '1.x', bundled: '', missing: '' },
          devDependencies: { dev: '', overlap: '' },
          optionalDependencies: { optional: '', overlap: '', optMissing: '' },
        },
        realpath: '/home/user/projects/root',
        path: '/home/user/projects/root',
        meta: rootMetadata,
      })
      root2.replace(root)
      t.equal(root2.root, root2, 'replacing root preserves self-rootedness')
      root.replace(root2)

      const prodLink = new Link({
        pkg: prod.package,
        realpath: '/some/other/path/entirely',
        path: '/not/where/it/really/is',
        name: 'prod',
      })
      t.equal(prodLink.canReplace(newProd), true, 'link can replace node')
      prodLink.replace(newProd)
      t.equal(newProd.parent, null, 'newProd removed from tree')
      t.equal(prodLink.path, newProd.path, 'replaced link')
      t.equal(newProd.children.size, 0, 'newProd kids moved over')
      t.equal(prodLink.children.size, 0, 'links do not have child nodes')
      t.equal(prodLink.target.children.size, kidCount, 'link target has children')

      t.end()
    })

    t.end()
  }

  t.test('without meta', runTest())
  const meta = new Shrinkwrap({ path: '/home/user/projects/root' })
  meta.data = {
    lockfileVersion: 2,
    packages: {},
    dependencies: {},
  }
  t.test('with meta', runTest(meta))

  t.end()
})

t.test('edge cases for branch coverage', t => {
  const noPkg = new Node({
    realpath: '/home/user/projects/root',
    path: '/home/user/projects/root',
  })
  t.same(noPkg.package, {}, 'default package is empty object')
  t.equal(noPkg.name, 'root', 'root default name is . if package empty')

  const noPath = new Node({
    realpath: '/home/user/projects/root',
  })
  t.equal(noPath.name, 'root', 'pathless gets named for realpath')

  t.end()
})

t.test('tracks the loading error encountered', t => {
  const error = new Error('this is fine')
  const root = new Node({
    pkg: { name: 'root' },
    path: '/home/user/projects/root',
    realpath: '/home/user/projects/root',
    error,
  })
  t.equal(root.errors[0], error, 'keeps ahold of the error')
  t.end()
})

t.throws(() => new Node({pkg: {}}), TypeError(
  'could not detect node name from path or package'))

t.test('load with integrity and resolved values', t => {
  const node = new Node({
    pkg: { name: 'mything' },
    parent: new Node({
      path: '/home/user/projects/root',
      realpath: '/home/user/projects/root',
      meta: {
        delete: () => {},
        add: () => {},
        get: location =>
          location === '' ? {} : {
            resolved: 'resolved',
            integrity: 'integrity',
          }
      },
    }),
  })

  t.match(node, {
    resolved: 'resolved',
    integrity: 'integrity',
    parent: {
      resolved: null,
      integrity: null,
    },
  })
  t.end()
})

t.test('load with a virtual filesystem parent', t => {
  const root = new Node({
    pkg: { name: 'root', dependencies: { a: '', link: '', link2: '', link3: '' }},
    path: '/home/user/projects/root',
    realpath: '/home/user/projects/root',
  })
  const a = new Node({
    pkg: { name: 'a', version: '1.2.3' },
    parent: root,
    name: 'a',
  })
  const link = new Link({
    pkg: { name: 'link', version: '1.2.3', dependencies: { a: '', kid: '' }},
    realpath: root.realpath + '/link-target',
    parent: root,
  })
  const linkKid = new Node({
    pkg: { name: 'kid', dependencies: {'a': ''} },
    parent: link.target,
  })

  const link2 = new Link({
    pkg: { name: 'link2', version: '1.2.3', dependencies: { link: '' }},
    realpath: a.realpath + '/node_modules/link2-target',
    parent: root,
    fsParent: a,
  })

  t.equal(link2.target.parent, a, 'fsParent=parent sets parent')
  t.equal(link2.target.fsParent, null, 'fsParent=parent does not set fsParent')
  t.equal(link2.target.resolveParent, a, 'resolveParent is parent')

  const target3 = new Node({
    name: 'link3',
    path: root.realpath + '/packages/link3',
    realpath: root.realpath + '/packages/link3',
    pkg: { name: 'link3', version: '1.2.3', dependencies: { link2: '' }},
    fsParent: new Node({
      path: root.realpath + '/packages',
      realpath: root.realpath + '/packages',
      pkg: { name: 'packages', version: '2.3.4', dependencies: { link: '' }},
    })
  })
  const packages = target3.fsParent

  const link3 = new Link({
    pkg: { name: 'link3', version: '1.2.3', dependencies: { link2: '' }},
    realpath: root.realpath + '/packages/link3',
    target: target3,
  })
  // set initially
  packages.fsParent = root
  // XXX probably broken test on Windows
  t.equal(target3.path, root.realpath + '/packages/link3')
  // now move it
  packages.fsParent = link.target
  t.equal(packages.path, root.realpath + '/link-target/packages')
  t.equal(target3.path, root.realpath + '/link-target/packages/link3')
  t.equal(link3.realpath, target3.path, 'link realpath updated')

  t.equal(link.target.edgesOut.get('a').error, 'MISSING')
  t.equal(linkKid.edgesOut.get('a').error, 'MISSING')
  link.target.fsParent = root
  t.equal(link.target.resolveParent, root, 'resolveParent is fsParent')
  t.equal(link.target.edgesOut.get('a').error, null)
  t.equal(linkKid.edgesOut.get('a').error, null)
  link.target.fsParent = null
  t.equal(link.target.fsParent, null)
  t.equal(link.target.edgesOut.get('a').error, 'MISSING')
  t.equal(linkKid.edgesOut.get('a').error, 'MISSING')
  link.target.fsParent = root
  t.equal(link.target.fsParent, root)
  t.equal(link.target.edgesOut.get('a').error, null)
  t.equal(linkKid.edgesOut.get('a').error, null)
  // move it under this other one for some reason
  link.target.fsParent = link2.target
  t.equal(link.target.fsParent, link2.target)
  t.equal(link.target.edgesOut.get('a').error, null)
  t.equal(linkKid.edgesOut.get('a').error, null)

  t.end()
})

t.test('child of link target has path, like parent', t => {
  const root = new Node({
    pkg: { name: 'root', dependencies: { a: '', link: '', link2: '' }},
    path: '/home/user/projects/root',
    realpath: '/home/user/projects/root',
  })
  const a = new Node({
    pkg: { name: 'a', version: '1.2.3' },
    parent: root,
    name: 'a',
  })
  const link = new Link({
    pkg: { name: 'link', version: '1.2.3', dependencies: { a: '', kid: '' }},
    realpath: root.realpath + '/link-target',
    parent: root,
    fsParent: root,
  })
  const linkKid = new Node({
    pkg: { name: 'kid' },
    parent: link,
  })
  t.equal(linkKid.parent, link.target, 'setting link as parent sets target instead')
  t.equal(linkKid.path, linkKid.realpath, 'child of link target path is realpath')
  t.end()
})

t.test('changing root', t => {
  const meta = new Shrinkwrap({ path: '/home/user/projects/root' })
  meta.data = { lockfileVersion: 2, dependencies: {}, packages: {} }
  const root = new Node({
    pkg: { name: 'root', dependencies: { a: '', link: '', link2: '' }},
    path: '/home/user/projects/root',
    realpath: '/home/user/projects/root',
    meta,
  })
  const a = new Node({
    pkg: { name: 'a', version: '1.2.3' },
    parent: root,
    name: 'a',
    resolved: 'https://example.com/a-1.2.3.tgz',
    integrity: 'sha512-asdfasdfasdf'
  })
  const b = new Node({
    pkg: { name: 'b', version: '1.2.3' },
    parent: a,
    name: 'b',
  })
  const meta2 = new Shrinkwrap({ path: '/home/user/projects/root2' })
  meta2.data = { lockfileVersion: 2, dependencies: {}, packages: {} }
  const root2 = new Node({
    pkg: { name: 'root2', dependencies: { a: '', link: '', link2: '' }},
    path: '/home/user/projects/root2',
    realpath: '/home/user/projects/root2',
    meta: meta2,
  })
  t.equal(a.root, root, 'root is root of tree from a')
  t.equal(b.root, root, 'root is root of tree from b')
  a.parent = root2
  t.equal(a.root, root2, 'root is set when parent is changed')
  t.equal(b.root, root2, 'root is set on children when parent is changed')
  t.end()
})

t.test('bundled dependencies logic', t => {
  const root = new Node({
    pkg: {
      name: 'root',
      dependencies: { a: '', b: '', d: '', e: '', f: '' },
      bundleDependencies: ['a'],
    },
    path: '/path/to/root',
    realpath: '/path/to/root',
  })
  const a = new Node({
    pkg: { name: 'a', version: '1.2.3', dependencies: { b: '', aa: '' }},
    parent: root,
  })
  const aa = new Node({
    pkg: { name: 'aa', version: '1.2.3' },
    parent: a,
  })
  const b = new Node({
    pkg: { name: 'b', version: '1.2.3', dependencies: { c: '' }},
    parent: root,
  })
  const c = new Node({
    pkg: { name: 'c', version: '1.2.3', dependencies: { cc: '' }},
    parent: root,
  })
  const cc = new Node({
    pkg: { name: 'cc', version: '1.2.3', dependencies: { d: '' }},
    parent: c,
  })
  const d = new Node({
    pkg: { name: 'd', version: '1.2.3' },
    parent: root,
  })
  const e = new Node({
    pkg: { name: 'e', version: '1.2.3' },
    parent: root,
  })
  const f = new Node({
    pkg: {
      name: 'f',
      version: '1.2.3',
      dependencies: { fa: '', fb: '' },
      bundleDependencies: ['fb'],
    },
    parent: root,
  })
  const fa = new Node({
    pkg: { name: 'fa', version: '1.2.3' },
    parent: f,
  })
  const fb = new Node({
    pkg: { name: 'fb', version: '1.2.3', dependencies: { e: '', fc: '' }},
    parent: f,
  })
  const fc = new Node({
    pkg: { name: 'fc', version: '1.2.3', dependencies: { fb: '' }},
    parent: f,
  })

  t.equal(a.inBundle, true, 'bundled dep is bundled')
  t.equal(aa.inBundle, true, 'child of bundled dep is bundled')
  t.equal(b.inBundle, true, 'dep of bundled dep at peer level is bundled')
  t.equal(c.inBundle, true, 'metadep of bundled dep at peer level is bundled')
  t.equal(d.inBundle, true, 'deduped metadep of bundled metadep is bundled')
  t.equal(e.inBundle, false, 'deduped dep of bundled dep of metadep is not bundled')
  t.equal(fb.inBundle, true, 'bundled dep of dep is bundled')
  t.end()
})

t.test('check if a node is in a node_modules folder or not', t => {
  const a = new Node({
    path: '/path/to/foo/node_modules/a',
    realpath: '/path/to/foo/node_modules/a',
    pkg: { name: 'a' },
  })
  t.equal(a.inNodeModules(), '/path/to/foo', 'basic obvious case')

  const b = new Node({
    path: '/path/to/foo/node_modules/a',
    realpath: '/path/to/foo/node_modules/a',
    pkg: { name: 'b' },
  })
  t.equal(b.inNodeModules(), '/path/to/foo', 'based on path name, not pkg name')

  const c = new Node({
    path: '/path/to/foo/node_modules/a/b/c',
    realpath: '/path/to/foo/node_modules/a/b/c',
    pkg: { name: 'c' },
  })
  t.equal(c.inNodeModules(), false, 'not directly in node_modules')

  const d = new Node({
    path: '/path/to/foo/node_modules/@c/d',
    realpath: '/path/to/foo/node_modules/@c/d',
    pkg: { name: '@a/b/c/d/e' },
  })
  t.equal(d.inNodeModules(), '/path/to/foo', 'scoped package in node_modules')

  t.end()
})

t.test('update metadata when moving between linked top-of-tree parents', t => {
  // this is a bit of a weird edge case, but covered for completeness.
  // When moving the parent of a node, we update the metadata in the root,
  // AND in the top-of-tree node, if it's not also the root (as that would be
  // redundant).

  const rootMeta = new Shrinkwrap({ path: '/home/user/projects/root' })
  rootMeta.data = { lockfileVersion: 2, dependencies: {}, packages: {} }
  const root = new Node({
    pkg: { name: 'root' },
    path: rootMeta.path,
    realpath: rootMeta.path,
    meta: rootMeta,
  })

  const top1Meta = new Shrinkwrap({ path: '/path/to/top1' })
  top1Meta.data = { lockfileVersion: 2, dependencies: {}, packages: {} }
  const top1 = new Node({
    pkg: { name: 'top', version: '1.1.1' },
    path: top1Meta.path,
    realpath: top1Meta.path,
    meta: top1Meta,
  })

  const link1 = new Link({
    name: 'link1',
    parent: root,
    realpath: top1.path,
    target: top1,
  })

  const top2Meta = new Shrinkwrap({ path: '/path/to/top2' })
  top2Meta.data = { lockfileVersion: 2, dependencies: {}, packages: {} }
  const top2 = new Node({
    pkg: { name: 'top', version: '1.1.1' },
    path: top2Meta.path,
    realpath: top2Meta.path,
    meta: top2Meta,
  })

  const link2 = new Link({
    name: 'link2',
    parent: root,
    realpath: top2.path,
    target: top2,
  })

  const child = new Node({
    parent: top1,
    pkg: {
      name: 'child',
      version: '1.2.3',
      dependencies: { child2: '2' },
    },
    resolved: 'https://child.com/-/child-1.2.3.tgz',
    integrity: 'sha512-blortzeyblartzeyfartz',
  })
  const child2 = new Node({
    parent: child,
    pkg: { name: 'child2', version: '2.3.4' },
    resolved: 'https://child.com/-/child-2.3.4.tgz',
    integrity: 'sha512-a childs child is a kidkid',
  })

  t.matchSnapshot(child.location, 'initial child location, pre-move')
  t.equal(child.root, root, 'child root is the shared root node')
  t.equal(child.top, top1, 'child top is top1')
  t.matchSnapshot(child2.location, 'initial child2 location, pre-move')
  t.equal(child2.root, root, 'child2 root is the shared root node')
  t.equal(child2.top, top1, 'child2 top is top1')
  t.matchSnapshot(root.meta.get(child.location), 'metadata from root')
  t.matchSnapshot(top1.meta.get(child.location), 'metadata from top1')

  // now move it over
  const oldLocation = child.location
  const oldLocation2 = child2.location
  child.parent = link2
  t.equal(child.top, top2, 'after move, top points at top2')
  t.equal(child.parent, top2, 'parent assigned to link target')
  t.matchSnapshot(child.location, 'new child location')
  t.equal(child2.top, top2, 'after move, top points at top2')
  t.equal(child2.parent, child, 'parent assigned to link target')
  t.matchSnapshot(child2.location, 'new child2 location')
  t.matchSnapshot(root.meta.get(child.location), 'root metadata updated')
  t.matchSnapshot(root.meta.get(child2.location), 'root metadata updated')
  t.matchSnapshot(root.meta.get(oldLocation), 'old location deleted from root')
  t.matchSnapshot(top1.meta.get(oldLocation), 'old location deleted from top1')
  t.matchSnapshot(root.meta.get(oldLocation2), 'old location2 deleted from root')
  t.matchSnapshot(top1.meta.get(oldLocation2), 'old location2 deleted from top1')
  t.matchSnapshot(top2.meta.get(child.location), 'new top metadata updated')
  t.matchSnapshot(top2.meta.get(child2.location), 'new top metadata updated')

  return t.end()
})

t.test('get meta from yarn.lock', t => {
  const fooEntry = {
    integrity: 'sha512-freebeerisworththeprice',
    resolved: 'https://example.com/foo.tgz',
    version: '1.2.3',
    optionalDependencies: {
      bar: '2.x',
    },
  }
  const foo2Entry = {
    integrity: 'the second coming of fooo',
    resolved: 'https://example.com/foo-2.tgz',
    version: '2.3.4',
  }
  const barEntry = {
    integrity: 'sha512-integrity is allegiance to your truest self',
    resolved: 'file:bar-2.3.4.tgz',
    version: '2.3.4',
  }
  const yarnLock = {
    entries: new Map([
      ['foo@1.x', fooEntry],
      ['foo@1.2.x', fooEntry],
      ['bar@2.x', barEntry],
      ['foo@2.x', foo2Entry],
    ]),
  }

  const root = '/path/to/root'
  const meta = new Shrinkwrap({ path: root })
  meta.data = {
    lockfileVersion: 2,
    packages: {},
    dependencies: {},
    requires: true,
  }
  meta.yarnLock = yarnLock

  const tree = new Node({
    meta,
    path: root,
    realpath: root,
    pkg: {
      name: 'root',
      version: '4.5.6',
      dependencies: {
        foo: '1.x',
      },
      devDependencies: {
        bar: '2.x',
      }
    }
  })

  const foo = new Node({
    name: 'foo',
    parent: tree,
    pkg: {
      name: 'foo',
      version: '1.2.3',
      optionalDependencies: { bar: '2.x' },
    },
  })

  t.equal(foo.integrity, fooEntry.integrity, 'foo integrity from yarn.lock')
  t.equal(foo.resolved, fooEntry.resolved, 'foo resolved from yarn.lock')

  const bar = new Node({
    name: 'bar',
    parent: tree,
    pkg: {
      name: 'bar',
      version: '2.3.4',
    },
  })
  t.equal(bar.integrity, barEntry.integrity, 'bar integrity from yarn.lock')
  t.equal(bar.resolved, 'file:../../bar-2.3.4.tgz', 'bar resolved from yarn.lock')

  bar.parent = null

  const barDiffVersion = new Node({
    name: 'bar',
    parent: tree,
    pkg: {
      name: 'bar',
      description: 'witaf',
      version: '2.4.5',
    },
  })

  t.equal(barDiffVersion.integrity, null, 'version mismatch, no integrity')
  t.equal(barDiffVersion.resolved, null, 'version mismatch, no resolved')

  const barDiffIntegrity = new Node({
    integrity: 'sha512-a fundamental lack of commitment to ideals',
    name: 'bar',
    parent: tree,
    pkg: {
      name: 'bar',
      version: '2.3.4',
    },
  })
  t.equal(barDiffIntegrity.integrity,
    'sha512-a fundamental lack of commitment to ideals',
    'integrity not updated from yarn lock')
  t.equal(barDiffIntegrity.resolved, null, 'integrity mismatch, no resolved')

  const barDiffResolved = new Node({
    resolved: 'https://x.com/b.tgz',
    name: 'bar',
    parent: tree,
    pkg: {
      name: 'bar',
      version: '2.3.4',
    },
  })
  t.equal(barDiffResolved.integrity, null, 'integrity not updated from yarn lock')
  t.equal(barDiffResolved.resolved, 'https://x.com/b.tgz',
    'resolved was not updated from yarn lock')

  const barSameIntegrity = new Node({
    integrity: barEntry.integrity,
    name: 'bar',
    parent: tree,
    pkg: {
      name: 'bar',
      version: '2.3.4',
    },
  })
  t.equal(barSameIntegrity.integrity, barEntry.integrity, 'bar integrity still matches')
  t.equal(barSameIntegrity.resolved, 'file:../../bar-2.3.4.tgz', 'bar resolved from yarn.lock')

  const barSameResolved = new Node({
    resolved: 'file:../../bar-2.3.4.tgz',
    name: 'bar',
    parent: tree,
    pkg: {
      name: 'bar',
      version: '2.3.4',
    },
  })
  t.equal(barSameResolved.integrity, barEntry.integrity, 'bar integrity from yarn.lock')
  t.equal(barSameResolved.resolved, 'file:../../bar-2.3.4.tgz', 'bar resolved still matches')

  // test that we sometimes might not get the resolved/integrity values
  barEntry.resolved = barEntry.integrity = null
  bar.package.description = 'new integrity, no resolved'
  bar.integrity = 'new integrity'
  bar.resolved = undefined
  bar.parent = tree
  t.equal(bar.integrity, 'new integrity', 'integrity unchanged by yarn lock')
  t.equal(bar.resolved, null, 'resolved set to null, not in yarn entry')

  bar.package.description = 'new resolved, no integrity'
  bar.parent = null
  bar.integrity = undefined
  bar.resolved = 'new resolved'
  bar.parent = tree
  t.equal(bar.integrity, null, 'integrity set to null, not in yarn entry')
  t.equal(bar.resolved, 'new resolved', 'resolved unchanged by yarn lock')

  const foo2 = new Node({
    name: 'foo',
    package: {
      name: 'foo',
      version: '2.3.4',
    },
    parent: tree
  })
  t.equal(foo2.integrity, null, 'no integrity, entry invalid')
  t.equal(foo2.resolved, null, 'no resolved, entry invalid')

  t.end()
})

t.test('metadata that only has one of resolved/integrity', t => {
  const root = '/path/to/root'
  const meta = new Shrinkwrap({ path: root })
  meta.data = {
    name: 'root',
    version: '4.5.6',
    lockfileVersion: 2,
    packages: {
      'node_modules/integrity': {
        integrity: 'has integrity no resolved',
      },
      'node_modules/resolved': {
        resolved: 'file:has-resolved-no-integrity.tgz',
      },
      'node_modules/intalready': {
        integrity: 'superceded by node integrity value',
      },
      'node_modules/resalready': {
        resolved: 'superceded by node resolved value',
      },
    },
    dependencies: {},
  }

  const tree = new Node({
    path: root,
    realpath: root,
    meta,
  })
  const integrity = new Node({
    name: 'integrity',
    parent: tree,
  })
  const resolved = new Node({
    name: 'resolved',
    parent: tree,
  })
  const intalready = new Node({
    name: 'intalready',
    parent: tree,
    integrity: 'pre-existing integrity',
  })
  const resalready = new Node({
    name: 'resalready',
    parent: tree,
    resolved: 'pre-existing resolved',
  })

  t.equal(integrity.integrity, 'has integrity no resolved', 'integrity only')
  t.equal(integrity.resolved, null, 'integrity only')

  t.equal(resolved.resolved, 'file:../../has-resolved-no-integrity.tgz',
    'resolved only, made relative to node path')
  t.equal(resolved.integrity, null, 'resolved only')

  t.equal(intalready.resolved, null, 'integrity only, from node settings')
  t.equal(intalready.integrity, 'pre-existing integrity', 'integrity only, from node settings')

  t.equal(resalready.resolved, 'pre-existing resolved', 'resolved only, from node settings')
  t.equal(resalready.integrity, null, 'resolved only, from node settings')

  t.end()
})

t.test('setting package refreshes deps', t => {
  const root = new Node({
    pkg: {
      dependencies: {
        a: '1',
      },
    },
    path: '/path/to/root',
  })
  const a = new Node({
    pkg: {
      name: 'a',
      version: '1.2.3',
    },
    parent: root,
  })
  t.equal(root.edgesOut.get('a').valid, true,
    'dep is valid before updating pkg')
  root.package = { dependencies: { a: '2' } }
  t.equal(root.edgesOut.get('a').valid, false,
    'dep is invalid after updating pkg')
  a.package = { name: 'a', version: '2.3.4' }
  t.equal(root.edgesOut.get('a').valid, true,
    'dep is valid again after updating dep pkg')
  t.end()
})

t.test('nodes in shrinkwraps', t => {
  const root = new Node({
    pkg: { dependencies: { a: '' }},
    path: '/path/to/root',
    children: [
      {
        name: 'a',
        pkg: {
          name: 'a',
          version: '1.2.3',
          dependencies: {b:''},
          _hasShrinkwrap: true,
        },
        children: [
          {
            name: 'b',
            pkg: {
              version: '1.2.3',
              name: 'b', dependencies: { c: '' },
            },
            children: [ {name: 'c', pkg: {name: 'c', version: '1.2.3' }} ],
          },
        ],
      },
    ],
  })
  const a = root.children.get('a')
  const b = a.children.get('b')
  const c = b.children.get('c')

  t.equal(a.hasShrinkwrap, true, 'a has a shrinkwrap')
  t.equal(b.inShrinkwrap, true, 'b is in shrinkwrap')
  t.equal(c.inShrinkwrap, true, 'c is in shrinkwrap')
  t.end()
})

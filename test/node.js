// always run this test in debug mode
const t = require('tap')
const Node = require('../lib/node.js')
const requireInject = require('require-inject')
const Link = require('../lib/link.js')
const Shrinkwrap = require('../lib/shrinkwrap.js')

const normalizePath = path => path.replace(/^[A-Z]:/, '').replace(/\\/g, '/')
const normalizePaths = obj => {
  for (const key in obj) {
    if (['path', 'location'].includes(key)) {
      obj[key] = normalizePath(obj[key])
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      obj[key] = normalizePaths(obj[key])
    }
  }
  return obj
}

t.cleanSnapshot = str =>
  str.split(process.cwd()).join('{CWD}')
  .replace(/[A-Z]:/g, '')
  .replace(/\\\\?/g, '/')

t.test('basic instantiation', t => {
  const root = new Node({
    pkg: { name: 'root' },
    path: '/home/user/projects/root',
    realpath: '/home/user/projects/root',
  })

  t.equal(root.depth, 0, 'root is depth 0')
  t.equal(root.isTop, true, 'root is top')
  t.equal(root.isLink, false, 'root is not a link')

  t.test('dep flags all set true', t => {
    t.equal(root.dummy, false)
    t.equal(root.extraneous, true)
    t.equal(root.dev, true)
    t.equal(root.devOptional, true)
    t.equal(root.optional, true)
    t.equal(root.peer, true)
    t.end()
  })

  t.matchSnapshot(root, 'just a lone root node')

  t.test('dummy node', t => {
    const node = new Node({
      path: '/not/a/real/path',
      dummy: true,
    })
    t.test('dep flags all set false', t => {
      t.equal(node.dummy, true)
      t.equal(node.extraneous, false)
      t.equal(node.dev, false)
      t.equal(node.devOptional, false)
      t.equal(node.optional, false)
      t.equal(node.peer, false)
      t.end()
    })
    t.end()
  })

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
  t.equal(normalizePath(target3.path), normalizePath(root.realpath) + '/packages/link3')
  // now move it
  packages.fsParent = link.target
  t.equal(normalizePath(packages.path), normalizePath(root.realpath) + '/link-target/packages')
  t.equal(normalizePath(target3.path), normalizePath(root.realpath) + '/link-target/packages/link3')
  t.equal(link3.realpath, target3.path, 'link realpath updated')

  // can't set fsParent to a link!
  t.throws(() => packages.fsParent = link, {
    message: 'setting fsParent to link node',
  })

  // can't set fsParent to the same node
  t.throws(() => packages.fsParent = packages, {
    message: 'setting node to its own fsParent',
  })

  t.throws(() => packages.fsParent = new Node({ path: packages.path }), {
    message: 'setting fsParent to same path',
  })

  // can't set fsParent on a new node such that it's outside its path
  const outsideNode = new Node({ path: '/not/the/root/path', pkg: {} })
  t.throws(() => outsideNode.fsParent = root, {
    message: 'setting fsParent improperly',
  })

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

t.test('attempt to assign parent to self on root node', t => {
  // turn off debugging for this one so we don't throw
  const Node = requireInject('../lib/node.js', {
    '../lib/debug.js': () => {},
  })
  const root = new Node({
    pkg: { name: 'root' },
    path: '/',
    realpath: '/'
  })
  root.parent = root.fsParent = root;
  t.equal(root.parent, undefined, 'root node parent should be empty')
  t.equal(root.fsParent, null, 'root node fsParent should be empty')
  t.end();
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
  t.equal(a.inDepBundle, false, 'bundled dep is bundled by root')
  t.equal(aa.inBundle, true, 'child of bundled dep is bundled')
  t.equal(aa.inDepBundle, false, 'child of dep bundled by root is not dep bundled')
  t.equal(b.inBundle, true, 'dep of bundled dep at peer level is bundled')
  t.equal(c.inBundle, true, 'metadep of bundled dep at peer level is bundled')
  t.equal(d.inBundle, true, 'deduped metadep of bundled metadep is bundled')
  t.equal(e.inBundle, false, 'deduped dep of bundled dep of metadep is not bundled')
  t.equal(fb.inBundle, true, 'bundled dep of dep is bundled')
  t.equal(fb.inDepBundle, true, 'bundled dep of dep is dep bundled (not by root)')
  t.end()
})

t.test('check if a node is in a node_modules folder or not', t => {
  const a = new Node({
    path: '/path/to/foo/node_modules/a',
    realpath: '/path/to/foo/node_modules/a',
    pkg: { name: 'a' },
  })
  t.equal(normalizePath(a.inNodeModules()), '/path/to/foo', 'basic obvious case')

  const b = new Node({
    path: '/path/to/foo/node_modules/a',
    realpath: '/path/to/foo/node_modules/a',
    pkg: { name: 'b' },
  })
  t.equal(normalizePath(b.inNodeModules()), '/path/to/foo', 'based on path name, not pkg name')

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
  t.equal(normalizePath(d.inNodeModules()), '/path/to/foo', 'scoped package in node_modules')

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

t.test('bin paths', t => {
  const root = new Node({
    path: '/a/b/c',
    pkg: { bin: { c: 'blorp' }},
    children: [
      { pkg: { name: '@foo/bar', bin: { bar: 'foo' }}},
      { pkg: { name: 'foo', bin: { foo: 'bloo' }},
        children: [{ pkg: { name: 'bar', bin: { bar: 'noscope' }}}]},
      { pkg: { name: 'nobin' } },
    ],
  })

  const link = new Link({
    parent: root,
    name: 'linkfoo',
    pkg: { bin: { d: 'from-link' } },
    realpath: root.path + '/d/e/f',
  })

  const { resolve: r } = require('path')

  t.strictSame(root.binPaths, [])
  t.strictSame(link.binPaths, [
    r('/a/b/c/node_modules/.bin/d'),
    ...(process.platform !== 'win32' ? [] : [
      r('/a/b/c/node_modules/.bin/d.cmd'),
      r('/a/b/c/node_modules/.bin/d.ps1'),
    ]),
  ])
  t.strictSame(link.target.binPaths, [])
  const scoped = root.children.get('@foo/bar')
  t.strictSame(scoped.binPaths, [
    r('/a/b/c/node_modules/.bin/bar'),
    ...(process.platform !== 'win32' ? [] : [
      r('/a/b/c/node_modules/.bin/bar.cmd'),
      r('/a/b/c/node_modules/.bin/bar.ps1'),
    ]),
  ])
  const unscoped = root.children.get('foo')
  t.strictSame(unscoped.binPaths, [
    r('/a/b/c/node_modules/.bin/foo'),
    ...(process.platform !== 'win32' ? [] : [
      r('/a/b/c/node_modules/.bin/foo.cmd'),
      r('/a/b/c/node_modules/.bin/foo.ps1'),
    ]),
  ])
  const nested = unscoped.children.get('bar')
  t.strictSame(nested.binPaths, [
    r('/a/b/c/node_modules/foo/node_modules/.bin/bar'),
    ...(process.platform !== 'win32' ? [] : [
      r('/a/b/c/node_modules/foo/node_modules/.bin/bar.cmd'),
      r('/a/b/c/node_modules/foo/node_modules/.bin/bar.ps1'),
    ]),
  ])
  const nobin = root.children.get('nobin')
  t.strictSame(nobin.binPaths, [])
  t.end()
})

t.test('binPaths, but global', t => {
  const root = new Node({
    global: true,
    path: '/usr/local/lib',
    children: [
      { pkg: { name: '@foo/bar', bin: { bar: 'foo' }}},
      { pkg: { name: 'foo', bin: { foo: 'bloo' }},
        children: [{ pkg: { name: 'bar', bin: { bar: 'noscope' }}}]},
      { pkg: { name: 'nobin' } },
    ],
  })

  const link = new Link({
    parent: root,
    name: 'linkfoo',
    pkg: { bin: { d: 'from-link' } },
    realpath: root.path + '/d/e/f',
  })

  const { resolve: r } = require('path')

  t.strictSame(root.binPaths, [])
  t.strictSame(link.binPaths, process.platform === 'win32'
    ? [
      r('/usr/local/lib/d'),
      r('/usr/local/lib/d.cmd'),
      r('/usr/local/lib/d.ps1'),
    ]
    : [
      r('/usr/local/bin/d'),
    ]
  )
  t.strictSame(link.target.binPaths, [])
  const scoped = root.children.get('@foo/bar')
  t.strictSame(scoped.binPaths, process.platform === 'win32'
    ? [
      r('/usr/local/lib/bar'),
      r('/usr/local/lib/bar.cmd'),
      r('/usr/local/lib/bar.ps1'),
    ]
    : [
      r('/usr/local/bin/bar'),
    ]
  )
  const unscoped = root.children.get('foo')
  t.strictSame(unscoped.binPaths, process.platform === 'win32'
    ? [
      r('/usr/local/lib/foo'),
      r('/usr/local/lib/foo.cmd'),
      r('/usr/local/lib/foo.ps1'),
    ]
    : [
      r('/usr/local/bin/foo'),
    ]
  )
  const nested = unscoped.children.get('bar')
  t.strictSame(nested.binPaths, [
    r('/usr/local/lib/node_modules/foo/node_modules/.bin/bar'),
    ...(process.platform !== 'win32' ? [] : [
      r('/usr/local/lib/node_modules/foo/node_modules/.bin/bar.cmd'),
      r('/usr/local/lib/node_modules/foo/node_modules/.bin/bar.ps1'),
    ]),
  ])
  const nobin = root.children.get('nobin')
  t.strictSame(nobin.binPaths, [])
  t.end()
})

t.test('has install script', t => {
  const node = new Node({
    pkg: {},
    path: '/a/b/c',
  })
  t.equal(node.hasInstallScript, false)
  node.package = { scripts: { postinstall: 'hello' } }
  t.equal(node.hasInstallScript, true)
  node.package = { scripts: { nothing: 'of interest' } }
  t.equal(node.hasInstallScript, false)
  node.package = { hasInstallScript: true }
  t.equal(node.hasInstallScript, true)
  t.end()
})


t.test('legacy peer dependencies', t => {
  const root = new Node({
    pkg: {
      name: 'root',
      peerDependencies: {
        'foo': '1.x'
      }
    },
    path: '/home/user/projects/root',
    realpath: '/home/user/projects/root',
    legacyPeerDeps: true,
  })

  const foo = new Node({
    pkg: {
      name: 'foo',
      version: '1.2.3',
    },
    path: '/home/user/projects/root/foo',
    realpath: '/home/user/projects/root/foo',
    legacyPeerDeps: true,
    parent: root
  })

  t.equal(root.children.get('foo'), foo, 'should be a children')
  t.equal(root.edgesOut.size, 0, 'should have no edges out')
  t.end()
})

t.test('set workspaces', t => {
  const root = new Node({
    pkg: { name: 'workspaces_root' },
    path: '/home/user/projects/workspaces_root',
    realpath: '/home/user/projects/workspaces_root',
  })

  const link = new Link({
    parent: root,
    target: new Node({
      path: '/home/user/projects/workspaces_root/foo',
      pkg: {
        name: 'foo',
        version: '1.2.3',
      },
    }),
  })

  const unknown = new Link({
    parent: root,
    target: new Node({
      path: '/home/user/projects/workspaces_root/unknown',
      pkg: {
        name: 'unknown',
        version: '1.2.3',
      },
    }),
  })

  root.workspaces = new Map([
    ['foo', '/home/user/projects/workspaces_root/foo'],
    ['bar', '/home/user/projects/workspaces_root/bar'],
  ])

  t.matchSnapshot(root, 'should setup edges out for each workspace')
  t.equal(link.isWorkspace, true, 'link node reports isWorkspace true')
  t.equal(link.target.isWorkspace, true, 'target reports isWorkspace true')
  t.equal(root.isWorkspace, false, 'root is not a workspace')
  t.equal(unknown.isWorkspace, false, 'unknown node is not a workspace')
  t.end()
})

t.test('get workspaces', t => {
  const root = new Node({
    pkg: { name: 'workspaces_root' },
    path: '/home/user/projects/workspaces_root',
    realpath: '/home/user/projects/workspaces_root',
  })

  t.equal(root.workspaces, null, 'should default to null when no workspaces defined')

  const ws = new Map()
  root.workspaces = ws

  t.equal(root.workspaces, ws, 'should match set value')
  t.end()
})

t.test('replace workspaces', t => {
  const root = new Node({
    pkg: { name: 'workspaces_root' },
    path: '/home/user/projects/workspaces_root',
    realpath: '/home/user/projects/workspaces_root',
  })

  root.workspaces = new Map([
    ['foo', '/home/user/projects/workspaces_root/foo'],
    ['bar', '/home/user/projects/workspaces_root/bar'],
  ])

  const ws = new Map()
  root.workspaces = ws

  t.equal(root.workspaces, ws, 'should remove previously set workspaces')
  t.end()
})

t.test('replace workspaces keeping existing edges out', t => {
  const root = new Node({
    pkg: { name: 'workspaces_root' },
    path: '/home/user/projects/workspaces_root',
    realpath: '/home/user/projects/workspaces_root',
  })

  root.workspaces = new Map([
    ['foo', '/home/user/projects/workspaces_root/foo'],
  ])

  const ws = new Map([
    ['foo', '/home/user/projects/workspaces_root/foo'],
    ['bar', '/home/user/projects/workspaces_root/bar'],
  ])
  root.workspaces = ws

  t.equal(root.workspaces, ws, 'should keep existing edges out')
  t.end()
})

t.test('dont rely on legacy _resolved for file: nodes', async t => {
  const old = new Node({
    pkg: {
      _resolved: 'file:/x/y/z/blorg.tgz',
      _where: '/why/did/i/think/this/was/a/good/idea',
    },
    path: '/some/completely/different/path',
  })
  t.equal(old.resolved, null)

  // _resolved without _where means it's probably valid though
  const notOld = new Node({
    pkg: {
      _resolved: 'file:/x/y/z/blorg.tgz',
    },
    path: '/some/completely/different/path',
  })
  t.equal(notOld.resolved, 'file:/x/y/z/blorg.tgz')
})

t.test('reparenting keeps children in root inventory', async t => {
  const root = new Node({ path: '/some/path' })
  const nested = new Node({
    fsParent: root,
    path: '/some/path/node_modules/parent/node_modules/nested',
  })
  const fsNested = new Node({
    fsParent: nested,
    path: '/some/path/node_modules/parent/node_modules/nested/x',
  })

  const kid = new Node({
    name: 'kid',
    parent: nested,
  })

  t.equal(root.inventory.has(kid), true)
  t.equal(root.inventory.has(fsNested), true)

  // now reparent, and make sure the kids are still accounted for
  const parent = new Node({ name: 'parent', parent: root })
  nested.parent = parent

  t.equal(root.inventory.has(kid), true)
  t.equal(root.inventory.has(fsNested), true)
})

t.test('reloading named edges should refresh edgesIn', t => {
  // pathological dep nesting scenario:
  //
  // x@1 -> y@1
  // x@2 -> y@2
  // y@1 -> x@2
  // y@2 -> x@1
  //
  // ensure we have the correct edge state at all points along this
  // infinite journey.  (will *prevent* said infinite journey in
  // buildIdealTree, but only if we can detect its presence properly
  // with correct Node edge behavior along the way.)
  //
  // Resulting tree looks like:
  //
  // +-- x1
  // +-- y1
  //     +-- x2
  //     +-- y2
  //         +-- x1
  //         +-- y1 ...and so on forever

  const root = new Node({
    path: '/some/path',
    pkg: { dependencies: { x: '1' } },
  })
  t.match(root.edgesOut.get('x'), { spec: '1', missing: true })

  const x1 = new Node({
    pkg: { name: 'x', version: '1.0.0', dependencies: {y: '1'} },
    parent: root,
  })
  t.match(root.edgesOut.get('x'),  { spec: '1', invalid: false, to: x1 })
  t.match(x1.edgesOut.get('y'), { spec: '1', missing: true })

  const y1 = new Node({
    pkg: { name: 'y', version: '1.0.0', dependencies: {x: '2'} },
    parent: root,
  })
  t.match(root.edgesOut.get('x'),  { spec: '1', invalid: false, to: x1 })
  t.match(x1.edgesOut.get('y'), { spec: '1', invalid: false, to: y1 })
  t.match(y1.edgesOut.get('x'), { spec: '2', invalid: true, to: x1 })

  const y1x2 = new Node({
    pkg: { name: 'x', version: '2.0.0', dependencies: {y: '2'} },
    parent: y1,
  })
  t.match(root.edgesOut.get('x'),  { spec: '1', invalid: false, to: x1 })
  t.match(x1.edgesOut.get('y'), { spec: '1', invalid: false, to: y1 })
  t.match(y1.edgesOut.get('x'), { spec: '2', invalid: false, to: y1x2 })
  t.match(y1x2.edgesOut.get('y'), { spec: '2', invalid: true, to: y1 })

  const y1y2 = new Node({
    pkg: { name: 'y', version: '2.0.0', dependencies: {x: '1'} },
    parent: y1,
  })
  t.match(root.edgesOut.get('x'),  { spec: '1', invalid: false, to: x1 })
  t.match(x1.edgesOut.get('y'), { spec: '1', invalid: false, to: y1 })
  t.match(y1.edgesOut.get('x'), { spec: '2', invalid: false, to: y1x2 })
  t.match(y1x2.edgesOut.get('y'), { spec: '2', invalid: false, to: y1y2 })
  t.match(y1y2.edgesOut.get('x'), { spec: '1', invalid: true, to: y1x2 })

  const y1y2x1 = new Node({
    pkg: { name: 'x', version: '1.0.0', dependencies: {y: '1'} },
    parent: y1y2,
  })
  t.match(root.edgesOut.get('x'),  { spec: '1', invalid: false, to: x1 })
  t.match(x1.edgesOut.get('y'), { spec: '1', invalid: false, to: y1 })
  t.match(y1.edgesOut.get('x'), { spec: '2', invalid: false, to: y1x2 })
  t.match(y1x2.edgesOut.get('y'), { spec: '2', invalid: false, to: y1y2 })
  t.match(y1y2.edgesOut.get('x'), { spec: '1', invalid: false, to: y1y2x1 })
  t.match(y1y2x1.edgesOut.get('y'), { spec: '1', invalid: true, to: y1y2 })

  // this is the point at which can tell for certain it's an infinite cycle
  const y1y2y1 = new Node({
    pkg: { name: 'y', version: '1.0.0', dependencies: {x: '2'} },
    parent: y1y2,
  })
  t.match(root.edgesOut.get('x'),  { spec: '1', invalid: false, to: x1 })
  t.match(x1.edgesOut.get('y'), { spec: '1', invalid: false, to: y1 })
  t.match(y1.edgesOut.get('x'), { spec: '2', invalid: false, to: y1x2 })
  t.match(y1x2.edgesOut.get('y'), { spec: '2', invalid: false, to: y1y2 })
  t.match(y1y2.edgesOut.get('x'), { spec: '1', invalid: false, to: y1y2x1 })
  t.match(y1y2x1.edgesOut.get('y'), { spec: '1', invalid: false, to: y1y2y1 })
  t.match(y1y2y1.edgesOut.get('x'), { spec: '2', invalid: true, to: y1y2x1 })

  t.end()
})

t.test('detect that two nodes are the same thing', async t => {
  const check = (a, b, expect, message) => {
    t.equal(a.matches(b), expect, message)
    if (a !== b)
      t.equal(b.matches(a), expect, message)
  }

  {
    const a = new Node({ path: '/x' })
    check(a, a, true, 'same object is trivially matching')
  }

  {
    const p = new Node({ path: '/foo' })
    const a = new Node({ name: 'a', parent: p, integrity: 'sha512-xyz' })
    const b = new Node({ name: 'b', parent: p, integrity: 'sha512-xyz' })
    check(a, b, false, 'different names mean no match')
  }

  {
    const target = new Node({ path:'/foo', pkg:{name:'x', version:'1.2.3'}})
    const a = new Link({ path: '/a/x', target: target })
    const b = new Link({ path: '/b/x', target: target })
    check(a, b, true, 'links match if targets match')
  }

  {
    const a = new Node({ path: '/foo', pkg: {name:'x',version:'1.2.3'}})
    const b = new Node({ path: '/foo', pkg: {name:'x',version:'1.2.3'}})
    check(a, b, true, 'root nodes match if paths patch')
  }

  {
    const a = new Node({ path: '/a/x', pkg: {name:'x',version:'1.2.3'}})
    const b = new Node({ path: '/b/x', pkg: {name:'x',version:'1.2.3'}})
    check(a, b, false, 'root nodes do not match if paths differ')
  }

  {
    const root = new Node({ path: '/x' })
    const integrity = 'sha512-xyzabc'
    const a = new Node({ parent: root, name: 'x', integrity})
    const b = new Node({ parent: a, name: 'x', integrity})
    t.equal(a.integrity, integrity, 'integrity was set')
    t.equal(a.integrity, b.integrity, 'integrities match')
    check(a, b, true, 'same integrity means same thing')
  }

  {
    const root = new Node({ path: '/x' })
    const inta = 'sha512-xyzabc'
    const intb = 'sha512-foobar'
    const pkg = { name: 'x', version: '1.2.3' }
    const resolved = 'https://registry.npmjs.org/x/-/x-1.2.3.tgz'
    const a = new Node({ parent: root, pkg, integrity: inta, resolved})
    const b = new Node({ parent: a, pkg, integrity: intb, resolved})
    t.equal(a.integrity, inta, 'integrity a was set')
    t.equal(b.integrity, intb, 'integrity b was set')
    check(a, b, false, 'different integrity means different thing')
  }

  {
    const root = new Node({ path: '/x' })
    const resolved = 'https://registry.npmjs.org/x/-/x-1.2.3.tgz'
    const pkga = { name: 'x', version: '1.2.3-a' }
    const pkgb = { name: 'x', version: '1.2.3-b' }
    const a = new Node({ parent: root, pkg: pkga, resolved})
    const b = new Node({ parent: a, pkg: pkgb, resolved})
    check(a, b, true, 'same resolved means same thing, if no integrity')
  }

  {
    const root = new Node({ path: '/x' })
    const pkga = { name: 'x', version: '1.2.3' }
    const pkgb = { name: 'x', version: '1.2.3' }
    const a = new Node({ parent: root, pkg: pkga})
    const b = new Node({ parent: a, pkg: pkgb})
    check(a, b, true, 'name/version match, if no resolved/integrity')
  }

  {
    const root = new Node({ path: '/x' })
    const pkga = { name: 'x', version: '1.2.3-a' }
    const pkgb = { name: 'x', version: '1.2.3-b' }
    const a = new Node({ parent: root, pkg: pkga})
    const b = new Node({ parent: a, pkg: pkgb})
    check(a, b, false, 'name/version mismatch, if no resolved/integrity')
  }
})

t.test('node.satisfies(requested)', t => {
  const node = new Node({
    path: '/some/path/to/foo',
    resolved: 'https://registry.npmjs.org/foo/-/foo-1.2.3.tgz',
    pkg: {
      name: 'foo',
      version: '1.2.3'
    },
  })
  t.equal(node.satisfies('foo'), true)
  t.equal(node.satisfies('foo@1'), true)
  t.equal(node.satisfies('https://registry.npmjs.org/foo/-/foo-1.2.3.tgz'), true)
  t.equal(node.satisfies('foo@2'), false)
  t.equal(node.satisfies('bar'), false)
  t.equal(node.satisfies('https://registry.npmjs.org/foo/-/foo-1.2.5.tgz'), false)
  node.resolved = 'git+ssh://git@github.com/org/foo.git#decafbad1100facefaceface'
  t.equal(node.satisfies('https://registry.npmjs.org/foo/-/foo-1.2.3.tgz'), false)
  t.equal(node.satisfies('org/foo'), true)
  t.equal(node.satisfies('github:org/foo'), true)
  t.end()
})

t.test('node.pkgid', t => {
  const parent = new Node({ path: '/some/path' })
  t.equal(parent.pkgid, 'path@')

  parent.package = { name: 'parent' }
  t.equal(parent.pkgid, 'parent@')

  parent.package = { name: 'parent', version: '1.2.3' }
  t.equal(parent.pkgid, 'parent@1.2.3')

  const n = new Node({ path: '/some/path/node_modules/foo', parent })
  t.equal(n.pkgid, 'foo@')

  n.package = { name: 'foo', version: '1.2.3' }
  t.equal(n.pkgid, 'foo@1.2.3')

  n.package = { name: 'bar', version: '1.2.3' }
  t.equal(n.pkgid, 'foo@npm:bar@1.2.3')

  t.end()
})

t.test('node.version', t => {
  const n = new Node({ path: '/some/path' })
  t.equal(n.version, '')
  n.package.version = '1.2.3'
  t.equal(n.version, '1.2.3')
  t.end()
})

t.test('explain yourself', t => {
  const n = new Node({ path: '/some/path', pkg: {
    dependencies: { x: '1', y: '2' },
  }})
  t.strictSame(normalizePaths(n.explain()), { location: '/some/path' })
  t.equal(n.explain(), n.explain(), 'caches result')
  const x = new Node({ parent: n, pkg: { name: 'x', version: '1.2.3' }})
  t.strictSame(x.explain(), {
    name: 'x',
    version: '1.2.3',
    location: 'node_modules/x',
    dependents: [ { name: 'x', type: 'prod', spec: '1', from: n.explain() } ],
  })

  const virtual = new Node({
    path: '/virtual-root',
    sourceReference: x,
  })

  t.equal(virtual.explain(), x.explain())
  const y = new Node({
    parent: n,
    pkg: { name: 'y', version: '2.3.4', dependencies: { z: '3' }},
    children: [
      {pkg: {name: 'z', version: '3.4.5', dependencies: { a: '4' }},
        children: [
          {pkg: {name: 'a', version: '4.5.6', dependencies: {}}}
        ],
      },
    ],
  })

  const z = y.children.get('z')
  const a = z.children.get('a')

  t.strictSame(y.explain(), {
    name: 'y',
    version: '2.3.4',
    location: 'node_modules/y',
    dependents: [
      {
        type: 'prod',
        name: 'y',
        spec: '2',
        from: n.explain(),
      },
    ],
  })

  t.strictSame(z.explain(), {
    name: 'z',
    version: '3.4.5',
    location: 'node_modules/y/node_modules/z',
    dependents: [
      {
        type: 'prod',
        name: 'z',
        spec: '3',
        from: y.explain(),
      },
    ],
  })

  t.strictSame(a.explain(), {
    name: 'a',
    version: '4.5.6',
    location: 'node_modules/y/node_modules/z/node_modules/a',
    dependents: [
      {
        type: 'prod',
        name: 'a',
        spec: '4',
        from: z.explain(),
      },
    ],
  })

  // ignore invalid edgesIn except from root node
  y.package = {
    ...y.package,
    dependencies: {
      ...y.package.dependencies,
      b: '1.2.3',
    },
  }
  a.package = {
    ...a.package,
    dependencies: {
      ...a.package.dependencies,
      b: '1.2.3',
    },
  }
  const b = new Node({
    parent: n,
    pkg: { name: 'b', version: '9.9.9' },
  })
  t.strictSame(b.explain(), {
    name: 'b',
    version: '9.9.9',
    location: 'node_modules/b',
    dependents: [],
  })
  b.package = { ...b.package }
  n.package = {
    ...n.package,
    dependencies: {
      ...n.package.dependencies,
      b: '1.2.3',
    },
  }
  t.strictSame(b.explain(), {
    name: 'b',
    version: '9.9.9',
    location: 'node_modules/b',
    dependents: [ { type: 'prod', name: 'b', spec: '1.2.3', error: 'INVALID', from: n.explain() } ],
  })

  // explain with a given edge
  b.package = { ...b.package }
  const otherNode = new Node({
    pkg: {
      ...n.package,
      dependencies: {
        ...n.package.dependencies,
        b: '9',
      },
    },
    path: '/virtual-root',
    children: [ { pkg: { ...b.package } }],
  })

  // explain a node with respect to a specific hypothetical edge
  t.strictSame(normalizePaths(b.explain(otherNode.edgesOut.get('b'))), {
    name: 'b',
    version: '9.9.9',
    location: 'node_modules/b',
    dependents: [
      {
        type: 'prod',
        name: 'b',
        spec: '9',
        from: { location: '/virtual-root' },
      },
    ],
  })

  // don't get tripped up by cycles
  const cycle = new Node({
    path: '/cy/cle',
    pkg: { name: 'cycle-root', dependencies: { c: '1' } },
    children: [
      { pkg: { name: 'a', version: '1.1.1', dependencies: { b: '1' } } },
      { pkg: { name: 'b', version: '1.1.1', dependencies: { a: '1' } } },
      { pkg: { name: 'c', version: '1.1.1', dependencies: { a: '1' } } },
    ],
  })

  t.strictSame(normalizePaths(cycle.children.get('b').explain()), {
    name: 'b',
    version: '1.1.1',
    location: 'node_modules/b',
    dependents: [
      {
        type: 'prod',
        name: 'b',
        spec: '1',
        from: {
          name: 'a',
          version: '1.1.1',
          location: 'node_modules/a',
          dependents: [
            {
              type: 'prod',
              name: 'a',
              spec: '1',
              from: {
                name: 'b',
                version: '1.1.1'
                // doesn't keep adding "from" links here.
              }
            },
            {
              type: 'prod',
              name: 'a',
              spec: '1',
              from: {
                name: 'c',
                version: '1.1.1',
                location: 'node_modules/c',
                dependents: [
                  {
                    type: 'prod',
                    name: 'c',
                    spec: '1',
                    from: {
                      location: '/cy/cle'
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  })

  {
    // treat a source reference by explaining the thing it's standing in for
    const actual = new Node({
      path: '/project',
      pkg: { dependencies: { a: '1' } },
      children: [
        { pkg: { name: 'a', version: '1.2.3', dependencies: { b: '1' }}},
        { pkg: { name: 'b', version: '1.2.3', dependencies: { c: '1', d: '1' }}},
      ],
    }).children.get('b')
    const virtual = new Node({
      path: '/virtual-root',
      pkg: { ...actual.package },
      sourceReference: actual,
      children: [
        { pkg: { name: 'c', version: '1.2.3', dependencies: { d: '1' }}},
        { pkg: { name: 'd', version: '1.2.3' }},
      ],
    })

    const edge = virtual.children.get('c').edgesOut.get('d')
    t.strictSame(normalizePaths(virtual.children.get('d').explain(edge)), {
      name: 'd',
      version: '1.2.3',
      whileInstalling: {
        name: 'b',
        version: '1.2.3',
        path: '/project/node_modules/b',
      },
      location: 'node_modules/d',
      dependents: [
        {
          type: 'prod',
          name: 'd',
          spec: '1',
          from: {
            name: 'c',
            version: '1.2.3',
            whileInstalling: {
              name: 'b',
              version: '1.2.3',
              path: '/project/node_modules/b',
            },
            location: 'node_modules/c',
            dependents: [
              {
                type: 'prod',
                name: 'c',
                spec: '1',
                from: {
                  name: 'b',
                  version: '1.2.3',
                  location: 'node_modules/b',
                  dependents: [
                    {
                      type: 'prod',
                      name: 'b',
                      spec: '1',
                      from: {
                        name: 'a',
                        version: '1.2.3',
                        location: 'node_modules/a',
                        dependents: [
                          {
                            type: 'prod',
                            name: 'a',
                            spec: '1',
                            from: {
                              location: '/project'
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    })
  }

  // explain with errors
  const badParent = new Node({ path: '/bad/nodes' })
  const errNode = new Node({
    error: new Error('bad node'),
    pkg: { name: 'bad', version: 'node' },
    parent: badParent,
  })
  t.match(errNode.explain(), {
    errors: [ { message: 'bad node' } ],
    name: 'bad',
    version: 'node',
    package: { name: 'bad', version: 'node' },
  })
  const noPkgDep = new Node({
    pkg: { noname: 'bad', noversion: 'node' },
    parent: badParent,
    path: '/bad/nodes/node_modules/noname',
  })
  t.match(noPkgDep.explain(), {
    errors: [ { message: 'invalid package: lacks name and/or version' } ],
    package: { noname: 'bad', noversion: 'node' },
  })

  t.end()
})

t.test('guard against setting package to something improper', t => {
  // no pkg
  const n = new Node({ path: '/some/path' })
  t.strictSame(n.package, {})
  // falsey pkg
  const o = new Node({ path: '/some/path', pkg: null })
  t.strictSame(o.package, {})
  // non-object pkg
  const p = new Node({ path: '/some/path', pkg: 'hello' })
  t.strictSame(p.package, {})

  // this will throw if we hit the debug, but it'll be an object regardless
  try {
    p.package = 'this is not an object'
  } catch (er) {
    t.match(er, { message: 'setting Node.package to non-object' })
  } finally {
    t.strictSame(p.package, {})
  }
  t.end()
})

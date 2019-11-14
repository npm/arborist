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
        dependencies: { prod: '', bundled: '', missing: '' },
        devDependencies: { dev: '', overlap: '' },
        optionalDependencies: { optional: '', overlap: '', optMissing: '' },
      },
      realpath: '/home/user/projects/root',
      path: '/home/user/projects/root',
      meta: rootMetadata,
    })
    const prod = new Node({
      pkg: {
        name: 'prod',
        version: '1.2.3',
        dependencies: { meta: '' },
        peerDependencies: { peer: '' },
      },
      resolved: 'prod',
      integrity: 'prod',
      parent: root,
    })
    const meta = new Node({
      pkg: {
        name: 'meta',
        version: '1.2.3',
        devDependencies: { missing: '' },
        dependencies: { bundled: '' },
        _resolved: 'meta',
        _integrity: 'meta',
      },
      path: './node_modules/prod/node_modules/meta',
      realpath: '/home/user/projects/root/node_modules/prod/node_modules/meta',
      parent: prod,
    })
    const bundled = new Node({
      pkg: {
        name: 'bundled',
        version: '1.2.3',
        dependencies: { meta: '' },
      },
      resolved: 'bundled',
      integrity: 'bundled',
      path: './node_modules/bundled',
      realpath: '/home/user/projects/root/node_modules/bundled',
      parent: root,
    })
    const dev = new Node({
      pkg: {
        name: 'dev',
        version: '1.2.3',
      },
      resolved: 'dev',
      integrity: 'dev',
      path: './node_modules/dev',
      realpath: '/home/user/projects/root/node_modules/dev',
      parent: root,
    })
    const opt = new Node({
      pkg: {
        name: 'optional',
        version: '1.2.3',
      },
      resolved: 'opt',
      integrity: 'opt',
      path: './node_modules/optional',
      realpath: '/home/user/projects/root/node_modules/optional',
      parent: root,
    })
    const peer = new Node({
      pkg: {
        name: 'peer',
        version: '1.2.3',
      },
      resolved: 'peer',
      integrity: 'peer',
      path: './node_modules/peer',
      realpath: '/home/user/projects/root/node_modules/peer',
      parent: root,
    })
    const extraneous = new Node({
      pkg: {
        name: 'extraneous',
        version: '1.2.3',
      },
      resolved: 'extraneous',
      integrity: 'extraneous',
      path: './node_modules/extraneous',
      realpath: '/home/user/projects/root/node_modules/extraneous',
      parent: root,
    })
    t.equal(prod.top, root, 'root is top of tree')
    t.equal(prod.root, root, 'root is root of tree')
    t.equal(root.isRoot, true, 'root is root of tree')
    t.equal(prod.isRoot, false, 'prod is not root of tree')
    t.equal(extraneous.extraneous, true, 'extraneous is extraneous')
    t.matchSnapshot(root, 'initial load with some deps')

    // move dep to top level
    meta.parent = root
    t.matchSnapshot(root, 'move meta to top level, update stuff')

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
      path: './node_modules/prod/node_modules/meta',
      realpath: '/home/user/projects/root/node_modules/prod/node_modules/meta',
      parent: prod,
    })

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

    t.matchSnapshot(root, 'add new meta under prod')

    t.equal(meta.parent, root, 'old meta parent is root before assigning')
    newMeta.parent = root
    t.equal(meta.parent, null, 'old meta parent removed')
    t.notEqual(root.children.get('meta'), meta,
      'root.children no longer has old meta')
    t.matchSnapshot(root, 'move new meta to top level')

    newMeta.parent = root
    t.matchSnapshot(root, 'move new meta to top level second time (no-op)')

    t.end()
  }

  t.test('without meta', runTest())
  t.test('with meta', runTest({
    data: {},
    get (location) {
      return this.data[location] || {}
    },
    add (node) {
      return this.data[node.location] = node
    },
    delete (location) {
      delete this.data[location]
    },
  }))

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

  t.equal(link.target.edgesOut.get('a').error, 'MISSING')
  t.equal(linkKid.edgesOut.get('a').error, 'MISSING')
  link.target.fsParent = root
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
  const meta = new Shrinkwrap('/home/user/projects/root')
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
  const meta2 = new Shrinkwrap('/home/user/projects/root2')
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

  const rootMeta = new Shrinkwrap('/home/user/projects/root')
  rootMeta.data = { lockfileVersion: 2, dependencies: {}, packages: {} }
  const root = new Node({
    pkg: { name: 'root' },
    path: rootMeta.root,
    realpath: rootMeta.root,
    meta: rootMeta,
  })

  const top1Meta = new Shrinkwrap('/path/to/top1')
  top1Meta.data = { lockfileVersion: 2, dependencies: {}, packages: {} }
  const top1 = new Node({
    pkg: { name: 'top', version: '1.1.1' },
    path: top1Meta.root,
    realpath: top1Meta.root,
    meta: top1Meta,
  })

  const link1 = new Link({
    name: 'link1',
    parent: root,
    realpath: top1.path,
    target: top1,
  })

  const top2Meta = new Shrinkwrap('/path/to/top2')
  top2Meta.data = { lockfileVersion: 2, dependencies: {}, packages: {} }
  const top2 = new Node({
    pkg: { name: 'top', version: '1.1.1' },
    path: top2Meta.root,
    realpath: top2Meta.root,
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
    pkg: { name: 'child', version: '1.2.3' },
    resolved: 'https://child.com/-/child-1.2.3.tgz',
    integrity: 'sha512-blortzeyblartzeyfartz',
  })
  t.matchSnapshot(child.location, 'initial child location, pre-move')
  t.equal(child.root, root, 'child root is the shared root node')
  t.equal(child.top, top1, 'child top is top1')
  t.matchSnapshot(root.meta.get(child.location), 'metadata from root')
  t.matchSnapshot(top1.meta.get(child.location), 'metadata from top1')

  // now move it over
  const oldLocation = child.location
  child.parent = link2
  t.equal(child.top, top2, 'after move, top points at top2')
  t.equal(child.parent, top2, 'parent assigned to link target')
  t.matchSnapshot(child.location, 'new child location')
  t.matchSnapshot(root.meta.get(child.location), 'root metadata updated')
  t.matchSnapshot(root.meta.get(oldLocation), 'old location deleted from root')
  t.matchSnapshot(top1.meta.get(oldLocation), 'old location deleted from top1')
  t.matchSnapshot(top2.meta.get(child.location), 'new top metadata updated')

  return t.end()
})

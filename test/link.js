const t = require('tap')
const Link = require('../lib/link.js')
const Node = require('../lib/node.js')
const Shrinkwrap = require('../lib/shrinkwrap.js')

const normalizePath = path => path.replace(/^[A-Z]:/, '').replace(/\\/g, '/')
const normalizePaths = obj => {
  obj.path = obj.path && normalizePath(obj.path)
  obj.realpath = obj.realpath && normalizePath(obj.realpath)
  for (const key of obj.inventory.keys()) {
    const member = obj.inventory.get(key)
    member.path = member.path && normalizePath(member.path)
    member.realpath = member.realpath && normalizePath(member.realpath)
  }
  return obj
}

const meta = new Shrinkwrap({ path: '/home/user/projects/some/kind/of/path' })
meta.data = {
  lockfileVersion: 2,
  packages: {},
  dependencies: {},
}

const root = new Node({
  pkg: { name: 'root' },
  path: '/home/user/projects/some/kind/of/path',
  meta,
})

const l1 = new Link({
  pkg: { name: 'root' },
  path: '/home/user/some/other/path',
  realpath: '/home/user/projects/some/kind/of/path',
  meta,
})

t.matchSnapshot(normalizePaths(l1), 'instantiate without providing target')
t.equal(l1.isLink, true, 'link is a link')
t.same(l1.children.size, 0, 'children is empty')
l1.children = new Map([[1,2],[3,4]])
t.same(l1.children.size, 0, 'children still empty after being sasigned')
l1.children.set('asdf', 'foo')
t.same(l1.children.size, 0, 'children still empty after setting value')

t.throws(() => new Link({ path: '/x' }), {
  message: 'must provide realpath for Link node',
})

const resolver = new Link({
  path: '/x/y/z',
  realpath: '/x/z/y/a/b/c',
})
t.equal(resolver.resolved,
  'file:../z/y/a/b/c', 'link resolved is relpath to realpath')
resolver.path = null
t.equal(resolver.resolved, null, 'link resolved depends on path')
resolver.path = '/x/z/y/a/b/d'
t.equal(resolver.resolved, 'file:c', 'updates when path changes')

t.matchSnapshot(normalizePaths(new Link({
  path: '/home/user/some/other/path',
  target: root,
})), 'instantiate with target specified')

t.test('link.target setter', t => {
  const link = new Link({
    path: '/path/to/link',
    realpath: '/node-a',
    pkg: { name: 'node-a', version: '1.2.3' },
  })
  const oldTarget = link.target
  t.equal(oldTarget.linksIn.has(link), true, 'target takes note of link')
  t.equal(link.package, oldTarget.package, 'link has same package as target')

  const newTarget = new Node({
    path: '/node-b',
    realpath: '/node-b',
    pkg: { name: 'node-b', version: '1.2.3' },
  })
  link.target = newTarget
  t.equal(oldTarget.linksIn.size, 0, 'old target has no links in now')
  t.equal(link.target, newTarget, 'new target is target')
  t.equal(newTarget.linksIn.has(link), true, 'new target notes the link')
  t.equal(link.package, newTarget.package, 'link package is new target package')

  link.target = null
  t.equal(link.target, null, 'link has no target')
  t.strictSame(link.package, {}, 'no package without link')
  t.equal(oldTarget.linksIn.size, 0, 'old target still has no links')
  t.equal(newTarget.linksIn.size, 0, 'new target has no links in now')

  const laterTarget = new Promise((res) =>
    setTimeout(() => res(new Node({
      path: '/node-later',
      realpath: '/node-later',
      pkg: { name: 'node-later', version: '1.2.3' },
    }))))
  link.target = laterTarget
  t.equal(link.target, laterTarget, 'waiting for a new target to resolve')
  return laterTarget.then(node => {
    t.equal(link.target, node, 'target resolved and assigned')
    t.equal(link.package, node.package, 'took on new targets package')
  })
})

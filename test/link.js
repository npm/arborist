const t = require('tap')
const Link = require('../lib/link.js')
const Node = require('../lib/node.js')
const Shrinkwrap = require('../lib/shrinkwrap.js')
const meta = new Shrinkwrap({ path: '/home/user/projects/some/kind/of/path' })
meta.data = {
  lockfileVersion: 2,
  packages: {},
  dependencies: {},
}

const root = new Node({
  pkg: { name: 'root' },
  path: 'some/kind/of/path',
  realpath: '/home/user/projects/some/kind/of/path',
  meta,
})

const l1 = new Link({
  pkg: { name: 'root' },
  path: '/home/user/some/other/path',
  realpath: '/home/user/projects/some/kind/of/path',
  meta,
})

t.matchSnapshot(l1, 'instantiate without providing target')
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
  'file:../../z/y/a/b/c', 'link resolved is relpath to realpath')
resolver.path = null
t.equal(resolver.resolved, null, 'link resolved depends on path')
resolver.path = '/x/z/y/a/b/d'
t.equal(resolver.resolved, 'file:../c', 'updates when path changes')

t.matchSnapshot(new Link({
  pkg: { name: 'root' },
  path: 'some/kind/of/path',
  realpath: '/home/user/projects/some/kind/of/path',
  target: root,
}), 'instantiate with target specified')

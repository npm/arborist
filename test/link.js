const t = require('tap')
const Link = require('../lib/link.js')
const Node = require('../lib/node.js')

const root = new Node({
  pkg: { name: 'root' },
  path: 'some/kind/of/path',
  realpath: '/home/user/projects/some/kind/of/path',
})

const l1 = new Link({
  pkg: { name: 'root' },
  path: 'some/other/path',
  realpath: '/home/user/projects/some/kind/of/path',
})
t.matchSnapshot(l1, 'instantiate without providing target')
t.equal(l1.isLink, true, 'link is a link')
t.same(l1.children, [], 'children is empty')
l1.children = [1,2,3]
t.same(l1.children, [], 'children still empty after being set')
l1.children.push('asdf')
t.same(l1.children, [], 'children still empty after being set')

t.matchSnapshot(new Link({
  pkg: { name: 'root' },
  path: 'some/kind/of/path',
  realpath: '/home/user/projects/some/kind/of/path',
  target: root,
}), 'instantiate with target specified')

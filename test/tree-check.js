// turn on debug mode, or this does nothing
const requireInject = require('require-inject')
const treeCheck = requireInject('../lib/tree-check.js', {
  '../lib/debug.js': fn => fn(),
})

const t = require('tap')

const Node = require('../lib/node.js')
const Link = require('../lib/link.js')

t.test('basic tree that is a-ok', t => {
  const tree = new Node({
    path: '/some/path',
    pkg: {},
    children: [
      { pkg: { name: 'foo', version: '1.2.3' } },
    ],
  })
  const link = new Link({
    parent: tree,
    name: 'glorb',
    target: new Node({
      fsParent: tree,
      path: '/some/path/glorb',
      pkg: { name: 'glorb', version: '1.2.3' },
    }),
  })
  link.parent = tree
  t.equal(treeCheck(tree), tree)
  t.equal(treeCheck(link), link)
  t.equal(treeCheck(link.target), link.target)
  const nonTree = {}
  t.equal(treeCheck(nonTree), nonTree)
  nonTree.root = {}
  t.equal(treeCheck(nonTree), nonTree)
  t.end()
})

t.test('break some stuff', t => {
  const tree = new Node({
    path: '/some/path',
    pkg: {},
    children: [
      { pkg: { name: 'foo', version: '1.2.3' } },
      { pkg: { name: 'disowned', version: '1.2.3' } },
    ],
  })
  const link = new Link({
    parent: tree,
    name: 'glorb',
    target: new Node({
      fsParent: tree,
      path: '/some/path/glorb',
      pkg: { name: 'glorb', version: '1.2.3' },
    }),
  })
  const disowned = tree.children.get('disowned')
  disowned.parent = null
  // oops...
  tree.inventory.add(disowned)
  t.throws(() => treeCheck(tree), {
    message: 'unreachable in inventory',
    path: '/some/path/node_modules/disowned',
    realpath: '/some/path/node_modules/disowned',
    location: '',
    name: 'Error',
  })

  tree.inventory.delete(disowned)
  disowned.parent = tree
  tree.inventory.delete(disowned)
  t.throws(() => treeCheck(tree), {
    message: 'not in inventory',
    path: '/some/path/node_modules/disowned',
    realpath: '/some/path/node_modules/disowned',
    location: 'node_modules/disowned',
    name: 'Error',
  })

  tree.inventory.add(disowned)
  disowned.root = null
  t.throws(() => treeCheck(tree), {
    message: 'double root',
    path: '/some/path/node_modules/disowned',
    realpath: '/some/path/node_modules/disowned',
    tree: tree.path,
    name: 'Error',
  })
  t.end()
})

t.test('just return the tree if not in debug mode', t => {
  const treeCheck = requireInject('../lib/tree-check.js', {
    '../lib/debug.js': () => {}
  })
  const tree = new Node({
    path: '/some/path',
    pkg: {},
    children: [
      { pkg: { name: 'foo', version: '1.2.3' } },
      { pkg: { name: 'disowned', version: '1.2.3' } },
    ],
  })
  const disowned = tree.children.get('disowned')
  disowned.parent = null
  // oops...
  tree.inventory.add(disowned)
  t.equal(treeCheck(tree), tree, 'error suppressed outside of debug mode')
  t.end()
})

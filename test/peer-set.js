const peerSet = require('../lib/peer-set.js')
const Node = require('../lib/node.js')
const t = require('tap')

const normalizePath = path => path.replace(/[A-Z]:/, '').replace(/\\/g, '/')

const tree = new Node({
  path: '/root/path',
  pkg: {
    dependencies: {
      a: '1',
      b: '1',
      c: '1',
    },
  },
  children: [
    { pkg: { name: 'a', version: '1.2.3', peerDependencies: { aa: '1' }}},
    { pkg: { name: 'aa', version: '1.2.3', peerDependencies: { ab: '1' }}},
    { pkg: { name: 'ab', version: '1.2.3', peerDependencies: { ac: '1' }}},
    { pkg: { name: 'ac', version: '1.2.3', dependencies: { ad: '1' }}},
    { pkg: { name: 'ad', version: '1.2.3', peerDependencies: { a: '1' }}},

    { pkg: { name: 'b', version: '1.2.3', peerDependencies: { ba: '1' }}},
    { pkg: { name: 'ba', version: '1.2.3', peerDependencies: { bb: '1' }}},
    { pkg: { name: 'bb', version: '1.2.3', peerDependencies: { bc: '1' }}},
    { pkg: { name: 'bc', version: '1.2.3', peerDependencies: { bd: '1' }}},
    { pkg: { name: 'bd', version: '1.2.3', peerDependencies: { a: '1' }}},

    { pkg: { name: 'c', version: '1.2.3', peerDependencies: { ca: '1' }}},
    { pkg: { name: 'ca', version: '1.2.3', peerDependencies: { cb: '1' }}},
    { pkg: { name: 'cb', version: '1.2.3', peerDependencies: { cc: '1' }}},
    { pkg: { name: 'cc', version: '1.2.3', peerDependencies: { cd: '1' }}},
    // this one has an invalid edge into the a set
    { pkg: { name: 'cd', version: '1.2.3', peerDependencies: { a: '2' }}},
  ],
})

const cases = {
  aa: [
    '/root/path/node_modules/a',
    '/root/path/node_modules/aa',
    '/root/path/node_modules/ab',
    '/root/path/node_modules/ac',
    '/root/path/node_modules/ad',
    '/root/path/node_modules/b',
    '/root/path/node_modules/ba',
    '/root/path/node_modules/bb',
    '/root/path/node_modules/bc',
    '/root/path/node_modules/bd',
  ],
  bd: [
    '/root/path/node_modules/a',
    '/root/path/node_modules/aa',
    '/root/path/node_modules/ab',
    '/root/path/node_modules/ac',
    '/root/path/node_modules/ad',
    '/root/path/node_modules/b',
    '/root/path/node_modules/ba',
    '/root/path/node_modules/bb',
    '/root/path/node_modules/bc',
    '/root/path/node_modules/bd',
  ],
  b: [
    '/root/path/node_modules/a',
    '/root/path/node_modules/aa',
    '/root/path/node_modules/ab',
    '/root/path/node_modules/ac',
    '/root/path/node_modules/ad',
    '/root/path/node_modules/b',
    '/root/path/node_modules/ba',
    '/root/path/node_modules/bb',
    '/root/path/node_modules/bc',
    '/root/path/node_modules/bd',
  ],
  c: [
    '/root/path/node_modules/c',
    '/root/path/node_modules/ca',
    '/root/path/node_modules/cb',
    '/root/path/node_modules/cc',
    '/root/path/node_modules/cd',
  ]
}

for (const [node, expect] of Object.entries(cases)) {
  t.test(`set from ${node}`, t => {
    const actual = [...peerSet(tree.children.get(node))].map(n => normalizePath(n.path)).sort()
    t.strictSame(actual, expect)
    t.end()
  })
}

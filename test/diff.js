const Diff = require('../lib/diff.js')
const t = require('tap')
const Node = require('../lib/node.js')


// don't print the full node objects because we don't need to track that
// for this test and it makes the snapshot unnecessarily noisy.

const normalizePath = path => path.replace(/^\w:/, '').replace(/\\/g, '/')
const formatNode = node =>
  node && Object.assign(Object.create(node.constructor.prototype), {
    name: node.name,
    path: normalizePath(node.path),
    integrity: node.integrity,
  })

const {format} = require('tcompare')

const path = diff => normalizePath((diff.actual || diff.ideal).path)

const formatDiff = obj =>
  Object.assign(Object.create(obj.constructor.prototype), {
    action: obj.action,
    actual: formatNode(obj.actual),
    ideal: formatNode(obj.ideal),
    leaves: obj.leaves.map(d => path(d)),
    unchanged: obj.unchanged.map(d => normalizePath(d.path)),
    removed: obj.removed.map(d => normalizePath(d.path)),
    children: [...obj.children]
      .map(formatDiff)
      .sort((a, b) => path(a).localeCompare(path(b))),
  })

t.formatSnapshot = obj => format(formatDiff(obj), { sort: false })

const actual = new Node({
  name: 'a',
  path: '/path/to/root',
  realpath: '/path/to/root',
  integrity: 'sha512-aaa',
  fsChildren: [
    {
      name: 'foo',
      path: '/path/to/root/foo',
      children: [
        { name: 'bar', integrity: 'sha512-bar' },
        { name: 'baz', integrity: 'sha512-baz' },
      ],
    },
  ],
  children: [
    {
      name: 'b',
      integrity: 'sha512-bbb',
      children: [
        { name: 'c', integrity: 'sha512-ccc' },
        { name: 'd', integrity: 'sha512-ddd',
          children: [{ name: 'e', integrity: 'sha512-eee'}],
        },
        { name: 'f', integrity: 'sha512-fff' },
      ],
    },
    {
      name: 'x',
      integrity: 'sha512-xxx',
      children: [
        { name: 'y', integrity: 'sha512-yyy', children: [
          { name: 'z', integrity: null, resolved: 'foobarbaz' },
        ]},
      ],
    },
    {
      name: 'p',
      integrity: 'sha512-ppp',
      children: [{name: 'q', integrity: 'sha512-qqq'}],
    },
    {
      name: 'bundler',
      integrity: 'sha512-bundler',
      pkg: {
        bundleDependencies: ['bundled-a'],
      },
      children: [
        {
          name: 'bundled-a',
          pkg: {
            dependencies: { metabundled: '' },
          },
        },
        {
          name: 'metabundled',
          pkg: {
            name: 'metabundled',
            version: '1.2.3'
          }
        },
        {
          name: 'not-bundled',
          integrity: 'sha512-not-bundled',
        },
      ],
    },
    {
      name: 'should-have-bins',
      integrity: 'sha512-should-have-bins',
      pkg: {
        bin: {
          'should-exist': 'should-exist.js'
        }
      },
    },
  ],
})

const ideal = new Node({
  name: 'a',
  path: '/path/to/root',
  realpath: '/path/to/root',
  integrity: 'sha512-aaa',
  fsChildren: [
    {
      name: 'foo',
      path: '/path/to/root/foo',
      children: [
        { name: 'bar', integrity: 'sha512-bar' },
        { name: 'baz', integrity: 'sha512-BAZ' },
        { name: 'boo', integrity: 'sha512-BOO' },
      ],
    },
  ],
  children: [
    {
      name: 'b',
      integrity: 'sha512-BBB',
      children: [
        { name: 'c', integrity: 'sha512-CCC' },
        { name: 'd', integrity: 'sha512-ddd',
          children: [{ name: 'e', integrity: 'sha512-EEE'}],
        },
        { name: 'f', integrity: 'sha512-fff' },
      ],
    },
    {
      name: 'x',
      integrity: 'sha512-xxx',
      children: [
        { name: 'y', integrity: 'sha512-YYY', children: [
          { name: 'z', integrity: null, resolved: 'foobarbaz' },
        ]},
      ],
    },
    {
      name: 'i',
      integrity: 'sha512-III',
      children: [{name: 'j', integrity: 'sha512-JJJ'}],
    },
    {
      name: 'bundler',
      integrity: 'sha512-bundler',
      pkg: {
        bundleDependencies: ['bundled-a'],
      },
      children: [
        {
          name: 'not-bundled',
          integrity: 'sha512-NOT-BUNDLED',
        },
      ],
    },
    {
      name: 'should-have-bins',
      integrity: 'sha512-should-have-bins',
      pkg: {
        bin: {
          'should-exist': 'should-exist.js'
        }
      },
    },
  ],
})

const d = Diff.calculate({actual, ideal})
t.matchSnapshot(d, 'diff two trees')
t.equal(d.parent, null, 'root has no parent')
t.equal([...d.children][0].parent, d, 'parent of root child is root')
t.equal(d.action, null, 'root has no action')

const Diff = require('../lib/diff.js')
const t = require('tap')
const Node = require('../lib/node.js')


// don't print the full node objects because we don't need to track that
// for this test and it makes the snapshot unnecessarily noisy.

const formatNode = node => node && ({
  name: node.name,
  path: node.path,
  integrity: node.integrity,
})

const {format} = require('tcompare')

const name = diff => (diff.actual || diff.ideal).name

const formatDiff = obj =>
  Object.assign(Object.create(obj.constructor.prototype), {
    action: obj.action,
    actual: formatNode(obj.actual),
    ideal: formatNode(obj.ideal),
    children: [...obj.children]
      .map(formatDiff)
      .sort((a, b) => name(a).localeCompare(name(b)))
  })

t.formatSnapshot = obj => format(formatDiff(obj), { sort: false })

const actual = new Node({
  name: 'a',
  path: '/path/to/root',
  integrity: 'sha512-aaa',
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
  ],
})

const ideal = new Node({
  name: 'a',
  path: '/path/to/root',
  integrity: 'sha512-aaa',
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
  ],
})

const d = Diff.calculate({actual, ideal})
t.matchSnapshot(d, 'diff two trees')
t.equal(d.parent, null, 'root has no parent')
t.equal([...d.children][0].parent, d, 'parent of root child is root')
t.equal(d.action, null, 'root has no action')

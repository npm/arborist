const t = require('tap')
const Node = require('../lib/node.js')
const Link = require('../lib/link.js')
const printable = require('../lib/printable.js')
const util = require('util')

t.cleanSnapshot = str => str
  // normalize paths
  .split(process.cwd()).join('{CWD}')
  .replace(/[A-Z]:/g, '')
  .replace(/\\\\?/g, '/')
  // FIXME: once we drop support to node10 we can remove this
  .replace(/:\n +Map/g, ': Map')
  .replace(/:\n +Set/g, ': Set')
  .replace(/\n +/g, '\n')
  .replace(/\n\}/g, ' }')
  .replace(/\n\]/g, ' ]')
  .replace(/\n\[/g, ' [')
  .replace(/\n\{\n/g, ' { ')
  .replace(/Map\([0-9]\)/g, 'Map')
  .replace(/Set\([0-9]\)/g, 'Set')
  .replace(/ArboristNode /g, '')
  .replace(/Edge /g, '')

t.test('printable Node', t => {
  t.test('extraneous tree', t => {
    const tree = new Node({
      name: 'printable-node',
      pkg: {
        name: 'printable-node',
        version: '1.1.1',
        dependencies: { prod: '1.x', b: '', missing: '' },
      },
      path: '/home/user/projects/root',
      realpath: '/home/user/projects/root',
      children: [{
        pkg: {
          name: 'prod',
          version: '1.2.3',
          dependencies: { meta: '', b: '' },
          peerDependencies: { peer: '' },
        },
        fsChildren: [{
          realpath: '/home/user/projects/root/node_modules/prod/foo',
          path: '/home/user/projects/root/node_modules/prod/foo',
          name: 'foo',
          pkg: { name: 'foo', version: '1.2.3', dependencies: {meta: ''}},
        }, {
          realpath: '/home/user/projects/root/node_modules/prod/bar',
          path: '/home/user/projects/root/node_modules/prod/bar',
          name: 'bar',
          pkg: { name: 'bar', version: '1.0.0'},
        }],
        resolved: 'prod',
        integrity: 'prod',
      }, {
        pkg: {
          name: 'b',
          version: '1.2.3',
        },
        resolved: 'b',
        integrity: 'b',
      }, {
        pkg: {
          name: 'c',
        },
        resolved: 'c',
        integrity: 'c',
      }],
    })
    tree.error = { code: 'ERR', path: '/' }
    t.matchSnapshot(util.inspect(tree, { depth: 6 }),
      'should print human readable representation of node tree')
    t.end()
  })

  t.test('variations', t => {
    // manually tweaked variations in the tree to reach for
    // possible different trees output
    const tree = new Node({
      name: 'variations',
      pkg: {
        name: 'variations',
        version: '1.0.0',
        dependencies: { a: '^1.0.0', b: '^1.0.0' },
      },
      extraneous: false,
      path: '/home/user/projects/root',
      realpath: '/home/user/projects/root',
    })

    // append nodes
    const a = new Node({
      name: 'a',
      pkg: {
        name: 'a',
        version: '1.1.1',
      },
      path: '/home/users/projects/root/node_modules/a',
      realpath: '/home/users/projects/root/node_modules/a',
      parent: tree,
    })
    a.extraneous = false
    a.dev = true
    a.optional = true
    a.getBundler = () => true
    a.errors = [Object.assign(new Error('ERR'), { code: 'ERR' })]
    const b = new Link({
      name: 'b',
      pkg: {
        name: 'b',
        version: '1.0.0',
      },
      optional: true,
      path: '/home/users/projects/root/c-link',
      realpath: '/home/users/projects/root/c',
      parent: tree,
    })
    const c = new Node({
      name: 'c',
      pkg: { name: 'c', version: '1.0.0' },
      path: '/home/user/projects/root/c',
      realpath: '/home/user/projects/root/c',
      fsParent: tree,
    })
    b.target = c
    b.extraneous = false
    b.dev = false
    b.optional = false
    b.peer = false
    b.errors = [Object.assign(new Error('ERR'), {
      code: 'ERR',
      path: '/home/users/projects/root/node_modules/b',
    })]

    // another link to c
    new Link({
      name: 'd',
      realpath: '/home/users/projects/root/c',
      target: c,
      parent: tree,
    })

    tree.error = a.errors[0]

    t.matchSnapshot(util.inspect(tree, { depth: 6 }),
      'should match non-extraneous tree representation')
    t.end()
  })

  t.test('do not recurse forever', t => {
    const flags = {
      extraneous: false,
      dev: false,
      devOptional: false,
      optional: false,
      peer: false,
    }
    const tree = new Node({
      name: 'recursive',
      pkg: {
        name: 'recursive',
        version: '1.0.0',
        dependencies: { a: '^1.0.0', b: '^1.0.0' },
      },
      path: '/home/user/projects/root',
      realpath: '/home/user/projects/root',
      ...flags,
    })
    new Node({
      name: 'a',
      pkg: {
        name: 'a',
        version: '1.2.3',
      },
      parent: tree,
      ...flags,
    })
    const target = new Node({
      fsParent: tree,
      path: tree.path + '/b',
      pkg: {
        name: 'b',
        version: '1.2.3',
        dependencies: { c: '' },
      },
      ...flags,
    })
    const c = new Node({
      parent: target,
      pkg: {
        name: 'c',
        version: '1.2.3',
        dependencies: { b: '9.9.9999', notfound: '' },
      },
      ...flags,
    })
    new Link({
      parent: c,
      target,
      ...flags,
    })
    new Link({
      parent: tree,
      target,
      ...flags,
    })
    const s = util.inspect(printable(tree), { depth: Infinity })
    t.matchSnapshot(s)
    t.end()
  })
  t.end()
})

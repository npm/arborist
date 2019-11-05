const t = require('tap')
const calcDepFlags = require('../lib/calc-dep-flags.js')
const Node = require('../lib/node.js')
const Link = require('../lib/link.js')
const { depth } = require('treeverse')

const printTree = tree => depth({
  tree,
  visit: node => ({
    _: node.name,
    ...(!node.extraneous && node.dev ? { _dev: true } : {}),
    ...(!node.extraneous && node.optional ? { _optional: true } : {}),
    ...(!node.extraneous && node.devOptional && !node.optional && !node.dev
      ? { _devOptional: true } : {}),
    ...(node.extraneous ? { _extraneous: true } : {}),
    ...(node.target ? { _target: printTree(node.target) } : {}),
    __proto__ : { constructor: node.constructor },
  }),
  leave: (node, children) => {
    if (children.length)
      node.children = children
    return node
  },
  getChildren: node => [...node.children.values()],
})

t.test('flag stuff', t => {
  const root = new Node({
    path: '.',
    realpath: '/x',
    pkg: {
      dependencies: { prod: '' },
      devDependencies: { dev: '' },
      optionalDependencies: { optional: '' },
    },
  })

  const optional = new Node({
    pkg: {
      name: 'optional',
      version: '1.2.3',
      dependencies: { devoptional: '', missing: '' },
    },
    parent: root,
  })

  const devoptional = new Node({
    pkg: {
      name: 'devoptional',
      version: '1.2.3',
    },
    parent: root,
  })

  const extraneous = new Node({
    pkg: {
      name: 'extraneous',
    },
    parent: root,
  })

  const prod = new Node({
    pkg: {
      name: 'prod',
      version: '1.2.3',
      dependencies: { proddep: '' },
    },
    parent: root,
  })

  const proddep = new Node({
    pkg: {
      name: 'proddep',
      version: '1.2.3',
      dependencies: { proddep: '' },
    },
    parent: root,
  })

  const dev = new Node({
    pkg: {
      name: 'dev',
      version: '1.2.3',
      dependencies: { devdep: '' },
    },
    parent: root,
  })

  const devdep = new Node({
    pkg: {
      name: 'devdep',
      version: '1.2.3',
      dependencies: { proddep: '', linky: '', devoptional: '' },
      optionalDependencies: { devandoptional: '' },
    },
    parent: root,
  })

  const devandoptional = new Node({
    pkg: {
      name: 'devandoptional',
      version: '1.2.3',
    },
    parent: root,
  })

  const linky = new Link({
    pkg: {
      name: 'linky',
      version: '1.2.3',
    },
    realpath: '/x/y/z',
    parent: devdep,
  })

  calcDepFlags(root)

  t.matchSnapshot(printTree(root), 'after')
  t.end()
})

const t = require('tap')

const Edge = require('../../lib/edge.js')
const Link = require('../../lib/link.js')

const Arborist = require('../../lib/arborist/index.js')
const normalizePath = path => path.replace(/[A-Z]:/, '').replace(/\\/g, '/')

const a = new Arborist({ path: '/some/kind/of/path' })
const b = new Arborist()
t.equal(normalizePath(a.path), '/some/kind/of/path')
t.equal(b.path, process.cwd())
t.match(a, {
  buildIdealTree: Function,
  reify: Function,
  loadActual: Function,
  loadVirtual: Function,
})
// make sure we don't mess up the class name with the mixin stack trick
t.equal(Arborist.name, 'Arborist')
const packumentCache = new Map()
const c = new Arborist({ packumentCache })
t.equal(c.options.packumentCache, packumentCache, 'passed in a packument cache')
t.throws(() => {
  new Arborist({ saveType: 'something' })
}, /saveType/, 'rejects invalid saveType')

t.test('workspace nodes and deps', async t => {
  const { resolve } = require('path')
  const fixture = resolve(__dirname, '../fixtures/workspaces-shared-deps-virtual')
  const arb = new Arborist({ path: fixture })
  const tree = await arb.loadVirtual()
  const wsNodes = arb.workspaceNodes(tree, ['b'])
  t.equal(wsNodes.length, 1, 'got one node')
  t.equal(wsNodes[0], tree.children.get('b').target, 'got the right node')

  {
    const wsDepSet = arb.workspaceDependencySet(tree, ['b'])
    t.equal(wsDepSet.size, 2)
    t.equal(wsDepSet.has(tree.children.get('b').target), true)
    t.equal(wsDepSet.has(tree.children.get('abbrev')), true)
  }

  const wsNode = wsNodes[0]
  new Edge({
    from: wsNode,
    type: 'prod',
    name: 'xyz',
    spec: '1.2.3',
  })

  // move abbrev under the 'a' workspace, and make a link to it
  tree.children.get('abbrev').parent = tree.children.get('a').target
  new Link({
    parent: tree,
    target: tree.children.get('a').target.children.get('abbrev'),
  })

  {
    // verify that xyz is not in the set, but abbrev AND its link both are
    const wsDepSet = arb.workspaceDependencySet(tree, ['b'])
    t.equal(wsDepSet.size, 3)
    t.equal(wsDepSet.has(tree.children.get('b').target), true)
    t.equal(wsDepSet.has(tree.children.get('abbrev')), true)
    t.equal(wsDepSet.has(tree.children.get('abbrev').target), true)
  }
})

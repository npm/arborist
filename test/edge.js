const util = require('util')
const Edge = require('../lib/edge.js')
const OverrideSet = require('../lib/override-set.js')
const t = require('tap')

// slight hack to snapshot the getters
// would be nice if tcompare.format showed these by default,
// but it's tricky to know when to show non-iterables and
// when not to.  Really, it'd be best if class getters were
// iterable by default, or had some syntax to allow it, but
// that's outside my sphere of direct influence, and using
// Object.defineProperty(this, 'foo', { get ... }) is a pita.
t.formatSnapshot = obj =>
  obj instanceof Edge ? {
    ...obj,
    spec: obj.spec,
    name: obj.name,
    type: obj.type,
    valid: obj.valid,
    error: obj.error,
    from: obj.from,
    to: obj.to,
    peer: obj.peer,
    dev: obj.dev,
    optional: obj.optional,
    workspace: obj.workspace,
    missing: obj.missing,
    peerLocal: obj.peerLocal,
    invalid: obj.invalid,
    __proto__: { constructor: Edge },
  } : obj

const reset = node => {
  node.edgesOut = new Map()
  node.edgesIn = new Set()
}

// mock nodes
const top = {
  name: 'top',
  packageName: 'top',
  edgesOut: new Map(),
  edgesIn: new Set(),
  explain: () => 'top node explanation',
  package: { name: 'top', version: '1.2.3' },
  get version () {
    return this.package.version
  },
  isTop: true,
  parent: null,
  resolve (n) {
    return n === 'a' ? a : n === 'b' ? b : null
  },
  addEdgeOut (edge) {
    this.edgesOut.set(edge.name, edge)
  },
  addEdgeIn (edge) {
    this.edgesIn.add(edge)
  },
}

const a = {
  name: 'a',
  packageName: 'a',
  edgesOut: new Map(),
  edgesIn: new Set(),
  explain: () => 'a explanation',
  package: { name: 'a', version: '1.2.3' },
  get version () {
    return this.package.version
  },
  isTop: false,
  parent: top,
  resolve (n) {
    return n === 'aa' ? aa : this.parent.resolve(n)
  },
  addEdgeOut (edge) {
    this.edgesOut.set(edge.name, edge)
  },
  addEdgeIn (edge) {
    this.edgesIn.add(edge)
  },
}

const b = {
  name: 'b',
  packageName: 'b',
  edgesOut: new Map(),
  edgesIn: new Set(),
  explain: () => 'b explanation',
  package: { name: 'b', version: '1.2.3' },
  get version () {
    return this.package.version
  },
  isTop: false,
  parent: top,
  resolve (n) {
    return n === 'aa' ? aa : this.parent.resolve(n)
  },
  addEdgeOut (edge) {
    this.edgesOut.set(edge.name, edge)
  },
  addEdgeIn (edge) {
    this.edgesIn.add(edge)
  },
}

const bb = {
  name: 'b',
  packageName: 'bb',
  edgesOut: new Map(),
  edgesIn: new Set(),
  explain: () => 'bb explanation',
  package: { name: 'bb', version: '1.2.3' },
  get version () {
    return this.package.version
  },
  isTop: false,
  parent: b,
  resolve (n) {
    return this.parent.resolve(n)
  },
  addEdgeOut (edge) {
    this.edgesOut.set(edge.name, edge)
  },
  addEdgeIn (edge) {
    this.edgesIn.add(edge)
  },
}

const aa = {
  name: 'aa',
  packageName: 'aa',
  edgesOut: new Map(),
  edgesIn: new Set(),
  explain: () => 'aa explanation',
  package: { name: 'aa', version: '1.2.3' },
  get version () {
    return this.package.version
  },
  isTop: false,
  parent: a,
  resolve (n) {
    return this.parent.resolve(n)
  },
  addEdgeOut (edge) {
    this.edgesOut.set(edge.name, edge)
  },
  addEdgeIn (edge) {
    this.edgesIn.add(edge)
  },
}

const c = {
  name: 'c',
  packageName: 'c',
  edgesOut: new Map(),
  edgesIn: new Set(),
  explain: () => 'c explanation',
  package: { name: 'c', version: '2.3.4' },
  get version () {
    return this.package.version
  },
  isTop: false,
  parent: top,
  resolve (n) {
    return this.parent.resolve(n)
  },
  addEdgeOut (edge) {
    this.edgesOut.set(edge.name, edge)
  },
  addEdgeIn (edge) {
    this.edgesIn.add(edge)
  },
}

t.matchSnapshot(new Edge({
  from: top,
  type: 'peer',
  name: 'a',
  spec: '1.2.3',
}), 'peer dep at top level, nesting is ok')
reset(top)
reset(a)

t.matchSnapshot(new Edge({
  from: top,
  type: 'optional',
  name: 'missing',
  spec: '',
}), 'missing optional dep is fine')
reset(a)

t.matchSnapshot(new Edge({
  from: a,
  type: 'peer',
  name: 'aa',
  spec: '1.2.3',
}), 'peer dep below top level, nesting not ok')
reset(a)
reset(aa)

t.matchSnapshot(new Edge({
  from: a,
  type: 'peer',
  name: 'b',
  spec: '1.2.3',
}), 'peer dep below top level, parallel ok')
reset(a)
reset(b)

t.ok(new Edge({
  from: a,
  type: 'prod',
  name: 'b',
  spec: '1.x',
}).satisfiedBy(b), 'b satisfies b@1.x')
reset(a)
reset(b)

t.ok(new Edge({
  from: a,
  type: 'prod',
  name: 'c',
  spec: '1.x',
  accept: '2.x',
}).satisfiedBy(c), 'c@2 satisfies spec:1.x, accept:2.x')
reset(a)

t.ok(new Edge({
  from: a,
  type: 'prod',
  name: 'c',
  spec: '1.x',
  accept: '',
}).satisfiedBy(c), 'c@2 satisfies spec:1.x, accept:*')
reset(a)

t.not(new Edge({
  from: a,
  type: 'prod',
  name: 'c',
  spec: '1.x',
}).satisfiedBy(b), 'b does not satisfy edge for c')
reset(a)

t.matchSnapshot(new Edge({
  from: a,
  type: 'prod',
  name: 'c',
  spec: '1.x',
  overrides: new OverrideSet({
    overrides: {
      c: '2.x',
    },
  }).getEdgeRule({ name: 'c', spec: '1.x' }),
}).toJSON(), 'printableEdge shows overrides')
reset(a)

const overriddenExplanation = new Edge({
  from: a,
  type: 'prod',
  name: 'c',
  spec: '1.x',
  overrides: new OverrideSet({
    overrides: {
      c: '2.x',
    },
  }).getEdgeRule({ name: 'c', spec: '1.x' }),
}).explain()
t.equal(overriddenExplanation.rawSpec, '1.x', 'rawSpec has original spec')
t.equal(overriddenExplanation.spec, '2.x', 'spec has override spec')
t.equal(overriddenExplanation.overridden, true, 'overridden is set to true')
reset(a)

t.ok(new Edge({
  from: a,
  type: 'prod',
  name: 'c',
  spec: '1.x',
  overrides: new OverrideSet({
    overrides: {
      c: '2.x',
    },
  }).getEdgeRule({ name: 'c', spec: '1.x' }),
}).satisfiedBy(c), 'c@2 satisfies spec:1.x, override:2.x')
reset(a)

t.matchSnapshot(new Edge({
  from: a,
  type: 'prod',
  name: 'c',
  spec: '2.x',
  overrides: new OverrideSet({
    overrides: {
      b: '1.x',
    },
  }).getEdgeRule({ name: 'c', spec: '2.x' }),
}).toJSON(), 'printableEdge does not show non-applicable override')

t.ok(new Edge({
  from: a,
  type: 'prod',
  name: 'c',
  spec: '2.x',
  overrides: new OverrideSet({
    overrides: {
      b: '1.x',
    },
  }).getEdgeRule({ name: 'c', spec: '2.x' }),
}).satisfiedBy(c), 'c@2 satisfies spec:1.x, no matching override')
reset(a)

const referenceTop = {
  name: 'referenceTop',
  packageName: 'referenceTop',
  edgesOut: new Map(),
  edgesIn: new Set(),
  explain: () => 'referenceTop explanation',
  package: {
    name: 'referenceTop',
    version: '1.2.3',
    dependencies: {
      referenceChild: '^1.0.0',
    },
    overrides: {
      referenceGrandchild: '$referenceChild',
    },
  },
  get version () {
    return this.package.version
  },
  isTop: true,
  resolve (n) {
    return n === 'referenceChild'
      ? referenceChild : n === 'referenceGrandchild'
        ? referenceGrandchild : null
  },
  addEdgeOut (edge) {
    edge.overrides = this.overrides.getEdgeRule(edge)
    this.edgesOut.set(edge.name, edge)
  },
  addEdgeIn (edge) {
    this.edgesIn.add(edge)
  },
  overrides: new OverrideSet({
    overrides: {
      referenceGrandchild: '$referenceChild',
    },
  }),
}

const referenceChild = {
  name: 'referenceChild',
  packageName: 'referenceChild',
  edgesOut: new Map(),
  edgesIn: new Set(),
  explain: () => 'referenceChild explanation',
  package: {
    name: 'referenceChild',
    version: '1.2.3',
    dependencies: {
      referenceGrandchild: '^2.0.0',
    },
  },
  get version () {
    return this.package.version
  },
  isTop: false,
  parent: referenceTop,
  root: referenceTop,
  resolve (n) {
    return n === 'referenceChild'
      ? referenceChild : n === 'referenceGrandchild'
        ? referenceGrandchild : null
  },
  addEdgeOut (edge) {
    edge.overrides = this.overrides.getEdgeRule(edge)
    this.edgesOut.set(edge.name, edge)
  },
  addEdgeIn (edge) {
    this.overrides = edge.overrides
    this.edgesIn.add(edge)
  },
}

new Edge({
  from: referenceTop,
  to: referenceChild,
  type: 'prod',
  name: 'referenceChild',
  spec: '^1.0.0',
})

const referenceGrandchild = {
  name: 'referenceGrandchild',
  packageName: 'referenceGrandchild',
  edgesOut: new Map(),
  edgesIn: new Set(),
  explain: () => 'referenceGrandchild explanation',
  package: {
    name: 'referenceGrandchild',
    version: '1.2.3',
  },
  get version () {
    return this.package.version
  },
  isTop: false,
  parent: referenceChild,
  root: referenceTop,
  resolve (n) {
    return n === 'referenceChild'
      ? referenceChild : n === 'referenceGrandchild'
        ? referenceGrandchild : null
  },
  addEdgeOut (edge) {
    edge.overrides = this.overrides.getEdgeRule(edge)
    this.edgesOut.set(edge.name, edge)
  },
  addEdgeIn (edge) {
    this.overrides = edge.overrides
    this.edgesIn.add(edge)
  },
}

const referenceGrandchildEdge = new Edge({
  from: referenceChild,
  to: referenceGrandchild,
  type: 'prod',
  name: 'referenceGrandchild',
  spec: '^2.0.0',
})

t.equal(referenceGrandchildEdge.spec, '^1.0.0', 'resolves spec to prod dep')
t.equal(referenceGrandchildEdge.valid, true, 'edge is valid')

delete referenceTop.package.dependencies.referenceChild
t.throws(() => referenceGrandchildEdge.spec, 'spec getter throws for missing dep')

referenceTop.package.devDependencies = { referenceChild: '^2.0.0' }
t.equal(referenceGrandchildEdge.spec, '^2.0.0', 'resolves spec for dev dep')

delete referenceTop.package.devDependencies
referenceTop.package.optionalDependencies = { referenceChild: '^3.0.0' }
t.equal(referenceGrandchildEdge.spec, '^3.0.0', 'resolves spec for optional dep')

delete referenceTop.package.optionalDependencies
referenceTop.package.peerDependencies = { referenceChild: '^4.0.0' }
t.equal(referenceGrandchildEdge.spec, '^4.0.0', 'resolves spec for peer dep')

const badOverride = {
  name: 'c',
  packageName: 'c',
  edgesOut: new Map(),
  edgesIn: new Set(),
  explain: () => 'c explanation',
  package: { name: 'c', version: '2.3.4' },
  get version () {
    return this.package.version
  },
  isTop: false,
  parent: top,
  resolve (n) {
    return this.parent.resolve(n)
  },
  addEdgeOut (edge) {
    this.edgesOut.set(edge.name, edge)
  },
  addEdgeIn (edge) {
    this.edgesIn.add(edge)
  },
  overrides: new OverrideSet({
    overrides: {
      b: '1.x',
    },
  }),
}

t.not(new Edge({
  from: a,
  type: 'prod',
  name: 'c',
  spec: '2.x',
  overrides: new OverrideSet({
    overrides: {
      b: '1.x',
    },
  }),
}).satisfiedBy(badOverride), 'node with different override fails')
reset(a)

const overrides = new OverrideSet({
  overrides: {
    c: '1.x',
  },
})
const overriddenEdge = new Edge({
  from: a,
  type: 'prod',
  name: 'c',
  spec: '2.x',
  overrides: overrides.getEdgeRule({ name: 'c', spec: '2.x' }),
})
t.equal(overriddenEdge.spec, '1.x', 'override spec takes priority')
t.equal(overriddenEdge.rawSpec, '2.x', 'rawSpec holds original spec')
reset(a)

const old = new Edge({
  from: a,
  type: 'peer',
  name: 'b',
  spec: '1.2.3',
})
const neu = new Edge({
  from: a,
  type: 'prod',
  name: 'b',
  spec: '*',
})
t.matchSnapshot(old, 'clobbered edge')
t.matchSnapshot(neu, 'clobbering edge')

reset(a)
reset(b)

const abInvalid = new Edge({
  from: a,
  name: 'b',
  spec: '1.69.420-nice',
  type: 'optional',
})
t.matchSnapshot(abInvalid, 'invalid dependency')
// make it valid, and then reload
b.package.version = '1.69.420-nice'
abInvalid.reload(true)
t.equal(abInvalid.valid, true, 'valid after updating target and hard reload')
// put it back for other tests
b.package.version = '1.2.3'

const moving = new Edge({
  from: bb,
  name: 'aa',
  spec: '',
  type: 'prod',
})
const explBeforeMove = moving.explain()
t.matchSnapshot(moving, 'old location, missing dep')
bb.parent = a
moving.reload()
const explAfterMove = moving.explain()
t.not(explBeforeMove, explAfterMove, 'moving reloads the explanation')
t.matchSnapshot(moving, 'new location, found dep')
bb.parent = top
moving.reload()
t.matchSnapshot(moving, 'new location, missing dep again')
new Edge({
  from: bb,
  name: 'aa',
  spec: '*',
  type: 'dev',
})
t.matchSnapshot(moving, 'clobbered and detached')

t.throws(() => new Edge({
  from: top,
  type: 'prod',
  name: 'yoinks',
  spec: { yoinks: '1.2.3' },
}), new TypeError('must provide string spec'))

t.throws(() => new Edge({
  from: top,
  type: 'prod',
  name: 'yoinks',
  spec: '1.x',
  accept: { yoinks: '2.2.3' },
}), new TypeError('accept field must be a string if provided'))

t.throws(() => new Edge({
  from: top,
  type: 'not a valid type',
  name: 'yoinks',
  spec: '*',
}), new TypeError('invalid type: not a valid type\n(valid types are: '))

t.throws(() => new Edge({
  type: 'prod',
  spec: '*',
  from: top,
}), new TypeError('must provide dependency name'))

t.throws(() => new Edge({
  type: 'prod',
  name: 'foo',
  spec: '',
}), new TypeError('must provide "from" node'))

t.throws(() => new Edge({
  type: 'workspace',
  name: 'foo',
  spec: '*',
}), new TypeError('workspace edges must be a symlink'))

t.test('convenience type getter flags', async t => {
  t.equal(new Edge({
    from: a,
    type: 'workspace',
    name: 'foo',
    spec: 'file:bar/baz',
  }).workspace, true, 'workspace convenience getter')

  t.equal(new Edge({
    from: a,
    type: 'prod',
    name: 'foo',
    spec: '*',
  }).prod, true, 'prod convenience getter')

  t.equal(new Edge({
    from: a,
    type: 'dev',
    name: 'foo',
    spec: '*',
  }).dev, true, 'dev convenience getter')

  t.equal(new Edge({
    from: a,
    type: 'optional',
    name: 'foo',
    spec: '*',
  }).optional, true, 'optional convenience getter')

  t.equal(new Edge({
    from: a,
    type: 'peer',
    name: 'foo',
    spec: '*',
  }).peer, true, 'peer convenience getter')

  t.equal(new Edge({
    from: a,
    type: 'optional',
    name: 'foo',
    spec: '*',
  }).optional, true, 'optional convenience getter')

  t.equal(new Edge({
    from: a,
    type: 'peerOptional',
    name: 'foo',
    spec: '*',
  }).peer, true, 'peer convenience getter for peerOptional edge')

  t.equal(new Edge({
    from: a,
    type: 'peerOptional',
    name: 'foo',
    spec: '*',
  }).optional, true, 'optional convenience getter for peerOptional edge')

  const explainEdge = new Edge({
    from: a,
    type: 'peerOptional',
    name: 'foo',
    spec: '*',
  })
  const expl = explainEdge.explain([])
  t.equal(explainEdge.explain(), expl)
  t.matchSnapshot(expl, 'explanation')
  explainEdge.detach()
  t.not(explainEdge.explain(), expl)
})

// FIXME: once we drop support to node10 we can remove this
const normalizeNode10compatSnapshots = str =>
  str
    .replace(/\n +/g, '\n')
    .replace(/\n\}/g, ' }')
    .replace(/ArboristEdge /g, '')

const printableTo = {
  ...b,
  location: '/node_modules/b',
}
const printableFrom = {
  ...a,
  resolve () {
    return printableTo
  },
  location: '',
}
const printable = new Edge({
  from: printableFrom,
  type: 'prod',
  name: 'b',
  spec: '1.2.3',
})
t.matchSnapshot(
  normalizeNode10compatSnapshots(
    util.inspect(printable)
  ),
  'should return a human-readable representation of the edge obj'
)
printable.peerConflicted = true
t.matchSnapshot(
  normalizeNode10compatSnapshots(
    util.inspect(printable)
  ),
  'return a human-readable representation of the edge obj, peerConflicted=true'
)

const minimalPrintableFrom = {
  ...a,
  resolve () {
    return null
  },
}
const minimalPrintable = new Edge({
  from: minimalPrintableFrom,
  type: 'dev',
  name: 'b',
  spec: '1.2.3',
})
t.match(
  minimalPrintable.toJSON(),
  {
    name: 'b',
    spec: '1.2.3',
    type: 'dev',
    error: 'MISSING',
  },
  'should return a minimal human-readable representation of the edge obj'
)

const bundleChild = {
  name: 'bundle-child',
  edgesOut: new Map(),
  edgesIn: new Set(),
  explain: () => 'bundleChild explanation',
  package: { name: 'bundle-child', version: '1.2.3' },
  get version () {
    return this.package.version
  },
  isTop: false,
  parent: top,
  resolve (n) {
    return this.parent.resolve(n)
  },
  addEdgeOut (edge) {
    this.edgesOut.set(edge.name, edge)
  },
  addEdgeIn (edge) {
    this.edgesIn.add(edge)
  },
}

const bundleParent = {
  name: 'bundle-parent',
  edgesOut: new Map(),
  edgesIn: new Set(),
  explain: () => 'bundleParent explanation',
  package: { name: 'bundle-parent', version: '5.6.7', bundleDependencies: ['bundle-child'] },
  get version () {
    return this.package.version
  },
  isTop: false,
  parent: top,
  resolve (n) {
    return n === 'bundle-child' ? bundleChild : undefined
  },
  addEdgeOut (edge) {
    this.edgesOut.set(edge.name, edge)
  },
  addEdgeIn (edge) {
    this.edgesIn.add(edge)
  },
}

const bundledEdge = new Edge({
  from: bundleParent,
  type: 'prod',
  name: 'bundle-child',
  spec: '1.2.3',
})

t.ok(bundledEdge.satisfiedBy(bundleChild), 'bundled dependency')
const fromBundleDependencies = bundledEdge.from &&
  bundledEdge.from.package.bundleDependencies
t.same(fromBundleDependencies, ['bundle-child'], 'edge.from bundledDependencies as expected')
t.same(bundledEdge.name, 'bundle-child', 'edge name as expected')
t.equal(bundledEdge.bundled, true, 'bundled prop is true')
t.same(bundledEdge.explain(), {
  type: 'prod',
  name: 'bundle-child',
  spec: '1.2.3',
  bundled: true,
  from: bundleParent.explain(),
}, 'bundled edge.explain as expected')

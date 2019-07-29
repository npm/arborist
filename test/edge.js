const Edge = require('../lib/edge.js')
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
    __proto__: { constructor: Edge },
  } : obj

const reset = node => {
  node.edgesOut = new Map()
  node.edgesIn = new Set()
}

// mock nodes
const top = {
  edgesOut: new Map(),
  edgesIn: new Set(),
  package: { name: 'top', version: '1.2.3' },
  isTop: true,
  parent: null,
  resolve (n) {
    return n === 'a' ? a : n === 'b' ? b : null
  }
}

const a = {
  edgesOut: new Map(),
  edgesIn: new Set(),
  package: { name: 'a', version: '1.2.3' },
  isTop: false,
  parent: top,
  resolve (n) {
    return n === 'aa' ? aa : this.parent.resolve(n)
  }
}

const b = {
  edgesOut: new Map(),
  edgesIn: new Set(),
  package: { name: 'b', version: '1.2.3' },
  isTop: false,
  parent: top,
  resolve (n) {
    return n === 'aa' ? aa : this.parent.resolve(n)
  }
}

const bb = {
  edgesOut: new Map(),
  edgesIn: new Set(),
  package: { name: 'bb', version: '1.2.3' },
  isTop: false,
  parent: b,
  resolve (n) {
    return this.parent.resolve(n)
  }
}

const aa = {
  edgesOut: new Map(),
  edgesIn: new Set(),
  package: { name: 'aa', version: '1.2.3' },
  isTop: false,
  parent: a,
  resolve (n) {
    return this.parent.resolve(n)
  }
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

t.matchSnapshot(new Edge({
  from: a,
  name: 'b',
  spec: '1.69.420-nice',
  type: 'optional',
}), 'invalid dependency')

const moving = new Edge({
  from: bb,
  name: 'aa',
  spec: '',
  type: 'prod',
})
t.matchSnapshot(moving, 'old location, missing dep')
bb.parent = a
moving.reload()
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
  type: 'not a valid type',
  name: 'yoinks',
}), new TypeError('invalid type: not a valid type\n(valid types are: prod, dev, optional, peer)'))

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

const fs = require('fs')
/* istanbul ignore next */
const promisify = require('util').promisify || require('util-promisify')
const { resolve, basename, dirname, join } = require('path')
const rpj = promisify(require('read-package-json'))
const readdir = promisify(require('readdir-scoped-modules'))
const realpath = require('./realpath.js')
const depinfoLoaded = Symbol('depinfoLoaded')
const loadDepinfo = Symbol('loadDepinfo')
const walk = Symbol('walk')
const semver = require('semver')

let ID = 0
class Node {
  constructor (pkg, logical, physical, er, cache) {
    // should be impossible.
    const cached = cache.get(physical)
    /* istanbul ignore next */
    if (cached && !cached.then)
      throw new Error('re-creating already instantiated node')

    cache.set(physical, this)

    this[depinfoLoaded] = false
    const parent = basename(dirname(logical))
    if (parent.charAt(0) === '@')
      this.name = `${parent}/${basename(logical)}`
    else
      this.name = basename(logical)
    this.path = logical
    this.realpath = physical
    this.error = er
    this.id = ID++

    this.package = pkg || {}

    // physical parent dir
    this.parent = null
    this.warnings = []

    // The contents of node_modules
    // use an array because we care about sorting
    this.children = []
    this.requires = new Map()
    this.requiredBy = new Set()
    this.missingDeps = new Map()
    this.invalidDeps = new Map()
    this.invalidTo = new Set()
    this.dependencies = new Map()
    this.dev = true
    this.optional = true
  }

  get isLink () {
    return false
  }

  // enter is called before the children, exit is after.  if either
  // returns a promise, it asynchronizes the walk, and returns a
  // promise to the caller which is resolved on completion to the return
  // value of the initial node.
  // if both enter and exit are provided, then the return value of exit
  // takes precedence in the return of the function.
  [walk] ({enter, exit}, seen, getChildren) {
    if (seen.has(this))
      return seen.get(this)

    seen.set(this, null)

    const enterNode = () => {
      const res = enter ? enter(this) : null
      if (res && res.then) {
        const fullResult = res.then(res => {
          seen.set(this, res)
          return childNodes()
        })
        seen.set(this, fullResult)
        return fullResult
      } else {
        seen.set(this, res)
        return childNodes()
      }
    }

    const childNodes = () => {
      const kids = getChildren(this).map(dep =>
        dep[walk]({enter, exit}, seen, getChildren))
      return kids.some(res => res && res.then)
        ? Promise.all(kids).then(exitNode)
        : exitNode(kids)
    }

    const exitNode = kids => {
      if (!exit)
        return seen.get(this)
      const res = exit(this, kids)
      seen.set(this, res)
      // if it's a promise at this point, the caller deals with it
      return res
    }

    return enterNode(this)
  }

  walkLogical ({enter, exit}) {
    return this[walk]({enter, exit}, new Map(), node =>
      [...node.dependencies.values()])
  }

  walkPhysical ({enter, exit}) {
    return this[walk]({enter, exit}, new Map(), node => node.children)
  }

  undev () {
    this[walk]({ enter (node) {
      node.dev = false
    }}, new Map(), node =>
      Object.keys(node.package.dependencies || {}).concat(
        Object.keys(node.package.optionalDependencies || {}))
        .map(name => node.resolveDep(name))
        .filter(dep => dep)
    )
  }

  unoptional () {
    this[walk]({ enter (node) {
      node.optional = false
    }}, new Map(), node => {
      const deps = Object.keys(node.package.dependencies || {})
      const devDeps = Object.keys(node.package.devDependencies || {})
      const optDeps = Object.keys(node.package.optionalDependencies || {})
      if (node.isTop)
        deps.push(...devDeps)
      const d = deps.filter(d => optDeps.indexOf(d) === -1)
      return d.map(d => node.resolveDep(d)).filter(d => d)
    })
  }

  addChildren (nodes) {
    nodes.forEach(node => node.parent = this)
    this.children = nodes.sort(nodesort)
    return this
  }

  get isTop () {
    return !this.parent
  }

  resolveDep (name) {
    const mine = this.children.filter(node => node.name === name)
    return mine.length ? mine[0]
      : this.isTop ? null
      : this.parent.resolveDep(name)
  }

  [loadDepinfo] ({optional, dev}) {
    const deps = this.package[
      dev ? 'devDependencies'
      : optional ? 'optionalDependencies'
      : 'dependencies'
    ] || {}

    for (const [name, spec] of Object.entries(deps))  {
      const dep = this.resolveDep(name)

      if (!dev && !optional) {
        this.requires.set(name, spec)
      }

      if (!dep) {
        if (!dev && !optional)
          this.missingDeps.set(name, spec)
        continue
      }

      // TODO(isaacs)
      // Use npm-package-arg and verify that the dep actually came from
      // the location in question.
      // - If it's a file: url, then it should be a symbolic link
      // - If it's git/tgz url, it should have a _resolved pointing to that url
      // - If it's a semver range, then do this bit here
      // - If it's a dist-tag, then hope for the best
      if (semver.validRange(spec) &&
          !semver.satisfies(dep.package.version, spec, { loose: true })) {
        dep.invalidTo.add(this)
        this.invalidDeps.set(`${name}@${spec}`, dep)
      }

      this.dependencies.set(name, dep)
      dep.requiredBy.add(this)
      dep.loadDepinfo()
    }
  }

  loadDepinfo () {
    if (this[depinfoLoaded])
      return

    this[depinfoLoaded] = true

    this[loadDepinfo]({})
    this[loadDepinfo]({dev: true})
    this[loadDepinfo]({optional: true})

    if (this.isTop) {
      this.unoptional()
      this.undev()
    }

    return this
  }

  get sortName () {
    return this.package.name ? this.package.name.toLowerCase() : this.name
  }
}

class Link extends Node {
  constructor (pkg, logical, physical, realpath, er, cache) {
    super(pkg, logical, physical, er, cache)

    // if the target has started, but not completed, then
    // a Promise will be in the cache to indicate this.
    const cachedTarget = cache.get(realpath)
    if (cachedTarget && cachedTarget.then)
      cachedTarget.then(node => {
        this.target = node
        this.children = node.children
      })

    this.target = cachedTarget || new Node(pkg, logical, realpath, er, cache)
    this.realpath = realpath
    this.error = er
    this.children = this.target.children
  }

  get isLink () {
    return true
  }

  /* istanbul ignore next */
  get top () {
    return this.target.top
  }

  // not normally called, just here for safety
  /* istanbul ignore next */
  isTop () {
    return this.target.isTop
  }
  /* istanbul ignore next */
  resolveDep (name) {
    return this.target.resolveDep(name)
  }
  /* istanbul ignore next */
  loadDepinfo () {
    this[depinfoLoaded] = true
    this.target.loadDepinfo()
    return this
  }
}

const nodesort = (a, b) => {
  const aname = a.sortName
  const bname = b.sortName
  /* istanbul ignore next */
  return aname === bname ? 0
    : aname > bname ? 1
    : -1
}

// this is the way it is to expose a timing issue which is difficult to
// test otherwise.  The creation of a Node may take slightly longer than
// the creation of a Link that targets it.  If the Node has _begun_ its
// creation phase (and put a Promise in the cache) then the Link will
// get a Promise as its cachedTarget instead of an actual Node object.
// This is not a problem, because it gets resolved prior to returning
// the tree or attempting to load children.  However, it IS remarkably
// difficult to get to happen in a test environment to verify reliably.
// Hence this kludge.
const newNode = (pkg, logical, physical, er, cache) =>
  process.env._TEST_RPT_SLOW_LINK_TARGET_ === '1'
    ? new Promise(res => setTimeout(() =>
      res(new Node(pkg, logical, physical, er, cache)), 10))
    : new Node(pkg, logical, physical, er, cache)

const loadNode = (logical, physical, cache, rpcache, stcache) => {
  // cache temporarily holds a promise placeholder so we
  // don't try to create the same node multiple times.
  // this is very rare to encounter, given the aggressive
  // caching on fs.realpath and fs.lstat calls, but
  // it can happen in theory.
  const cached = cache.get(physical)
  /* istanbul ignore next */
  if (cached)
    return Promise.resolve(cached)

  const p = realpath(physical, rpcache, stcache, 0).then(real =>
    rpj(join(real, 'package.json'))
      .then(pkg => [pkg, null], er => [null, er])
      .then(([pkg, er]) =>
        physical === real ? newNode(pkg, logical, physical, er, cache)
        : new Link(pkg, logical, physical, real, er, cache)
      ),
    // if the realpath fails, don't bother with the rest
    er => new Node(null, logical, physical, er, cache))

  cache.set(physical, p)
  return p
}

const loadChildren = (node, cache, filterWith, rpcache, stcache) => {
  // if a Link target has started, but not completed, then
  // a Promise will be in the cache to indicate this.
  //
  // XXX When we can one day loadChildren on the link *target* instead of
  // the link itself, to match real dep resolution, then we may end up with
  // a node target in the cache that isn't yet done resolving when we get
  // here.  For now, though, this line will never be reached, so it's hidden
  //
  // if (node.then)
  //   return node.then(node => loadChildren(node, cache, filterWith, rpcache, stcache))

  const nm = join(node.path, 'node_modules')
  return realpath(nm, rpcache, stcache, 0)
    .then(rm => readdir(rm).then(kids => [rm, kids]))
    .then(([rm, kids]) => Promise.all(
      kids.filter(kid =>
        kid.charAt(0) !== '.' && (!filterWith || filterWith(node, kid)))
      .map(kid => loadNode(join(nm, kid), join(rm, kid), cache, rpcache, stcache)))
    ).then(kidNodes => node.addChildren(kidNodes))
    .catch(() => node)
}

const loadTree = (node, did, cache, filterWith, rpcache, stcache) => {
  // impossible except in pathological ELOOP cases
  /* istanbul ignore next */
  if (did.has(node.realpath))
    return Promise.resolve(node)

  did.add(node.realpath)

  // load children on the target, not the link
  return loadChildren(node, cache, filterWith, rpcache, stcache)
    .then(node => Promise.all(
      node.children
        .filter(kid => !did.has(kid.realpath))
        .map(kid => loadTree(kid, did, cache, filterWith, rpcache, stcache))
    ))
    .then(() => node.isTop ? node.loadDepinfo() : node)
}

// XXX Drop filterWith and/or cb in next semver major bump
const rpt = (root, filterWith, cb) => {
  if (!cb && typeof filterWith === 'function') {
    cb = filterWith
    filterWith = null
  }

  const cache = new Map()
  // we can assume that the cwd is real enough
  const cwd = process.cwd()
  const rpcache = new Map([[ cwd, cwd ]])
  const stcache = new Map()
  const p = realpath(root, rpcache, stcache, 0)
    .then(realRoot => loadNode(root, realRoot, cache, rpcache, stcache))
    .then(node => loadTree(node, new Set(), cache, filterWith, rpcache, stcache))

  if (typeof cb === 'function')
    p.then(tree => cb(null, tree), cb)

  return p
}

rpt.Node = Node
rpt.Link = Link
module.exports = rpt

// TODO: arborist should keep an inventory of all the nodes in a tree,
// so that it can iterate over the edges and such.  I'm thinking `npm ls pkg`
// could be done by looking for all edges referencing pkg, and then showing
// it as an archy path to simulated under the "from" node, and put a remark
// (deduped: /p/a/t/h) on it if edge.from !== edge.to.parent

const { promisify } = require('util')
const realpath = require('./realpath.js')
const Node = require('./node.js')
const Link = require('./link.js')
const { dirname, resolve, join, basename } = require('path')
const readdir = promisify(require('readdir-scoped-modules'))
const rpj = promisify(require('read-package-json'))
const calcDepFlags = require('./calc-dep-flags.js')
const Metadata = require('./metadata.js')

const loadActual = root => {
  root = root || '.'
  root = root.replace(/[\\\/]+$/, '')
  const cwd = process.cwd()
  const cache = new Map()
  const rpcache = new Map([[ cwd, cwd ]])
  const stcache = new Map()
  const linkTargets = new Set()
  return Promise.all([
    new Metadata(root).load(),
    realpath(root, rpcache, stcache, 0),
  ]).then(([meta, real]) => loadNode({
      meta,
      path: root,
      physical: real,
      cache,
      rpcache,
      stcache,
      linkTargets,
    })
    .then(node => loadTree({
      node,
      did: new Set(),
      root: node,
      cache,
      rpcache,
      stcache,
      linkTargets,
    })))
    .then((tree) => (findFsParents({linkTargets, cache}), tree))
    .then(calcDepFlags)
}

const findFsParents = ({linkTargets, cache}) => {
  for (const path of linkTargets) {
    findFsParent({path, cache})
  }
}

const findFsParent = ({path, cache}) => {
  const node = cache.get(path)
  if (!node.parent && !node.fsParent) {
    for (let p = dirname(path); p;) {
      if (cache.has(p)) {
        node.fsParent = cache.get(p)
        p = null
      } else {
        const pp = dirname(p)
        if (pp === p)
          p = null
        else
          p = pp
      }
    }
  }
}

const loadNode = (options) => {
  const {
    meta,
    path,
    physical,
    cache,
    rpcache,
    stcache,
    parent,
    linkTargets,
  } = options

  // cache temporarily holds a promise placeholder so we
  // don't try to create the same node multiple times.
  // this is very rare to encounter, given the aggressive
  // caching on realpath and lstat calls, but
  // it can happen in theory.
  const cached = cache.get(physical)
  // It's possible that a cached target is already loaded as a tree top,
  // but then gets its parent loaded later.
  if (cached) {
    return Promise.resolve(cached).then(node => {
      node.parent = parent
      return node
    })
  }

  const p = realpath(physical, rpcache, stcache, 0).then(real =>
    rpj(join(real, 'package.json'))
      .then(pkg => [pkg, null], error => [null, error])
      .then(([pkg, error]) => (physical === real ? newNode : newLink)({
        ...options,
        pkg,
        error,
        realpath: real,
      })),
    // if realpath fails, don't bother with the rest
    error => new Node({ ...options, error, realpath: physical }))

  cache.set(physical, p)
  p.then(node => cache.set(physical, node))
  return p
}

const loadTree = options => {
  const { node, did, cache, rpcache, stcache, linkTargets } = options

  // impossible except in pathological ELOOP cases
  /* istanbul ignore next */
  if (did.has(node.realpath))
    return Promise.resolve(node)

  did.add(node.realpath)

  // load children on target, not link
  return loadChildren({
    ...options,
    node: node.target || node,
  })
  .then(node => Promise.all(
    [...node.children.entries()]
      .filter(([name, kid]) => !did.has(kid.realpath))
      .map(([name, kid]) => loadTree({ ...options, node: kid }))
  ))
  .then(() => node)
}

const loadChildren = options => {
  const { node, cache, rpcache, stcache, linkTargets } = options
  // if a Link target has started, but not completed, then
  // a Promise will be in the cache to indicate this.
  if (node.then) {
    return node.then(node =>
      loadChildren({ ...options, node }))
  }

  const nm = join(node.path, 'node_modules')
  return realpath(nm, rpcache, stcache, 0)
    .then(rm => readdir(rm).then(kids => [rm, kids]))
    .then(([rm, kids]) => Promise.all(
      kids.filter(kid => kid.charAt(0) !== '.')
      .map(kid => loadNode({
        ...options,
        parent: node,
        path: join(nm, kid),
        physical: join(rm, kid),
      })))
    )
    .then(() => node)
    .catch(() => node)
}

// if we encounter the link while the target is in progress,
// we cache the promise first, then the node itself.
const newLink = (options) => {
  const {
    pkg,
    error,
    path,
    realpath,
    parent,
    cache,
    linkTargets,
  } = options

  return Metadata.load(realpath).then(targetMeta => {
    linkTargets.add(realpath)
    // Metadata attaches to the target, not the link, since the
    // target of a symlinked dep will be a tree top the vast
    // majority of the time.
    const target = cache.get(realpath)
    const link = new Link({
      ...options,
      target,
      targetMeta,
    })

    if (!target) {
      const nmParent = inNodeModules(link.target)
      cache.set(realpath, link.target)
      if (nmParent) {
        // defer resolving the link until after the target parent tree
        return loadNode({
          ...options,
          parent: null,
          physical: nmParent,
          path: nmParent,
        })
        .then(node => loadTree({ ...options, node }))
        .then(() => link)
      }
    } else if (target.then)
      target.then(node => link.target = node)

    return link
  })
}

// return true if node is a link target within a node_modules folder.
const inNodeModules = node => {
  const rp = node.realpath
  const name = node.name
  const scoped = name.charAt(0) === '@'
  const d = dirname(rp)
  const nm = scoped ? dirname(d) : d
  const dir = dirname(nm)
  const base = scoped ? `${basename(d)}/${basename(rp)}` : basename(rp)
  return base === name && basename(nm) === 'node_modules' ? dir : false
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
const newNode = (options) =>
  process.env._TEST_ARBORIST_SLOW_LINK_TARGET_ === '1'
    ? new Promise(res => setTimeout(() =>
      res(new Node(options)), 10))
    : new Node(options)

module.exports = loadActual

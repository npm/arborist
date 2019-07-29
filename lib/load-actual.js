// TODO: arborist should keep an inventory of all the nodes in a tree,
// so that it can iterate over the edges and such.  I'm thinking `npm ls pkg`
// could be done by looking for all edges referencing pkg, and then showing
// it as an archy path to simulated under the "from" node, and put a remark
// (deduped: /p/a/t/h) on it if edge.from !== edge.to.parent


const { promisify } = require('util')
const realpath = require('./realpath.js')
const Node = require('./node.js')
const Link = require('./link.js')
const { resolve, join } = require('path')
const readdir = promisify(require('readdir-scoped-modules'))
const rpj = promisify(require('read-package-json'))

const loadActual = root => {
  const cwd = process.cwd()
  const cache = new Map()
  const rpcache = new Map([[ cwd, cwd ]])
  const stcache = new Map()
  return realpath(root  || '.', rpcache, stcache, 0)
    .then(real => loadNode({
      path: root,
      physical: real,
      cache,
      rpcache,
      stcache,
    }))
    .then(node => loadTree({
      node,
      did: new Set(),
      cache,
      rpcache,
      stcache,
    }))
}

const loadNode = ({ path, physical, cache, rpcache, stcache, parent }) => {
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
        pkg,
        error,
        path,
        realpath: real,
        parent,
        cache,
      })),
    // if realpath fails, don't bother with the rest
    error => new Node({ error, path, realpath: physical, parent }))

  cache.set(physical, p)
  p.then(node => cache.set(physical, node))
  return p
}

const loadTree = options => {
  const { node, did, cache, rpcache, stcache } = options

  // impossible except in pathological ELOOP cases
  /* istanbul ignore next */
  if (did.has(node.realpath))
    return Promise.resolve(node)

  did.add(node.realpath)

  // load children on target, not link
  return loadChildren({
    node: node.target || node,
    cache,
    rpcache,
    stcache,
  })
  .then(node => Promise.all(
    node.children
      .filter(kid => !did.has(kid.realpath))
      .map(kid => loadTree({ ...options, node: kid }))
  ))
  .then(() => node)
}

const loadChildren = options => {
  const { node, cache, rpcache, stcache } = options
  // if a Link target has started, but not completed, then
  // a Promise will be in the cache to indicate this.
  if (node.then) {
    return node.then(node =>
      loadChildren({ ...options, node }))
  }

  const nm = join(node.path || node.realpath, 'node_modules')
  return realpath(nm, rpcache, stcache, 0)
    .then(rm => readdir(rm).then(kids => [rm, kids]))
    .then(([rm, kids]) => Promise.all(
      kids.filter(kid => kid.charAt(0) !== '.')
      .map(kid => loadNode({
        parent: node,
        path: join(nm, kid),
        physical: join(rm, kid),
        cache,
        rpcache,
        stcache,
      })))
    )
    .then(() => node)
    .catch(() => node)
}

// if we encounter the link while the target is in progress,
// we cache the promise first, then the node itself.
const newLink = ({ pkg, error, path, realpath, parent, cache }) => {
  const target = cache.get(realpath)
  const link = new Link({
    pkg,
    error,
    path,
    realpath,
    parent,
    target,
  })

  if (!target)
    cache.set(realpath, link.target)
  else if (target.then)
    target.then(node => link.target = node)

  return link
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

// The arborist manages two trees:
// - actual
// - ideal
//
// The actual tree is what's present on disk in the node_modules tree
// and elsewhere that links may extend.
//
// The ideal tree is what we WANT that actual tree to become.  This is built
// up based on the various lockfiles we have at our disposal.
//
// Reifying is a process of diffing the ideal and actual trees, and then
// for each package where the `resolved` or `integrity` don't match,
// ${hash} is a path-safe base64 encoding of the path
// - extract all packages to .staging/${pkg}-${hash} or rm .staging
// - mv to node_modules/path/to/${pkg}-${hash} or rm all staged folders
//   -> this includes moving staged deps into their parent folders,
//      so it has to be done in order from root to tip.
// - mv kept deps into staged parents or move back and rm staged folders
// - mv old pkgs to .trash/${pkg}-${hash}, or replace and rm staged folders
// - rename node_modules/path/to/${pkg}-${hash} to node_modules/path/to/${pkg}
//   or move back to staged name and restore trashed folders
// - delete trash (or ignore)
//
// All the extracting and moving can be done in parallel except the step
// where we stage in place.
//
// Each tree has an Inventory at the root.  Metadata is tracked by Arborist
// instance.  It always refers to the actual tree, but is updated (and written
// to disk) on reification.

const Node = require('./node.js')
const Link = require('./link.js')
const EE = require('events')
const cwd = process.cwd()
const { breadth:bfwalk, depth:dfwalk } = require('treeverse')
const {promisify} = require('util')
const realpath = require('./realpath.js')
const {dirname, resolve, join, basename} = require('path')
const readdir = promisify(require('readdir-scoped-modules'))
const rpj = promisify(require('read-package-json'))
// used in load actual and loading from arblock, but NOT from shrinkwrap
const calcDepFlags = require('./calc-dep-flags.js')
const Metadata = require('./metadata.js')

const loadVirtual = require('./load-virtual.js')

class Arborist extends EE {
  constructor (options) {
    const {
      root,
      registry = 'https://registry.npmjs.org',
      auth = null,
      scopes = null,
    } = options
    super()
    this.options = options
    this.root = resolve(root || '.')
    this.registry = registry
    this.auth = auth
    this.scopes = scopes
    this.actualTree = null
    this.idealTree = null
    this.metadata = null
    this.errors = []

    // cache of nodes when loading the actualTree
    this.cache = new Map()

    // cache of link targets for setting fsParent links
    // We don't do fsParent as a magic getter/setter, because
    // it'd be too costly to keep up to date along the walk.
    // And, we know that it can ONLY be relevant when the node
    // is a target of a link, otherwise it'd be in a node_modules
    // folder, so take advantage of that to limit the scans later.
    this.linkTargets = new Set()

    // ensure when walking the tree that we don't call loadTree on the
    // same actual node more than one time.
    this.actualTreeLoaded = null

    // caches for cached realpath calls
    const cwd = process.cwd()
    this.rpcache = new Map([[ cwd, cwd ]])
    this.stcache = new Map()
  }

  loadActual () {
    if (!this.metadata)
      return this.loadMetadata().then(() => this.loadActual())

    // just realpath to throw if the root doesn't exist
    return realpath(this.root, this.rpcache, this.stcache)
      .then(real => this.loadFSNode({ path: this.root, real }))
      .then(node => {
        this.actualTree = node
        this.actualTreeLoaded = new Set()
        // did is a set of all realpaths visited on this walk
        // important when a link points at a node we end up visiting later.
        return  this.loadFSTree(node)
      })
      .then(() => this.findFsParents())
      .then(() => calcDepFlags(this.actualTree))
      .then(() => this.actualTree)
  }

  loadFSNode ({ path, parent, real }) {
    if (!real)
      return realpath(path, this.rpcache, this.stcache)
        .then(
          real => this.loadFSNode({ path, parent, real }),
          // if realpath fails, just provide a dummy error node
          error => new Node({ error, path, realpath: path, parent })
        )

    // cache temporarily holds a promise placeholder so we don't try to create
    // the same node multiple times.  this is rare to encounter, given the
    // aggressive caching on realpath and lstat calls, but it's possible that
    // it's already loaded as a tree top, and then gets its parent loaded
    // later, if a symlink points deeper in the tree.
    const cached = this.cache.get(path)
    if (cached) {
      return Promise.resolve(cached).then(node => {
        node.parent = parent
        return node
      })
    }

    const p = rpj(join(real, 'package.json'))
      // soldier on if rpj raises an error
      .then(pkg => [pkg, null], error => [null, error])
      .then(([pkg, error]) => {
        return this[path === real ? 'newNode' : 'newLink']({
          path,
          realpath: real,
          pkg,
          error,
          parent,
          meta: this.metadata,
        })
      })

    this.cache.set(path, p)
    p.then(node => this.cache.set(path, node))
    return p
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
  newNode (options) {
    return process.env._TEST_ARBORIST_SLOW_LINK_TARGET_ === '1'
      ? new Promise(res => setTimeout(() => res(new Node(options)), 10))
      : new Node(options)
  }

  newLink (options) {
    const { realpath } = options
    this.linkTargets.add(realpath)
    const target = this.cache.get(realpath)
    const link = new Link({ ...options, target })

    if (!target) {
      this.cache.set(realpath, link.target)
      const nmParent = link.target.inNodeModules()
      // if a link points at /path/to/node_modules/foo, and we haven't
      // loaded the node at /path/to, then load that, so that we'll also
      // pick up peers of that node in the node_modules tree.  This is how
      // we can read pnpm trees properly. Defer loading until this is done.
      if (nmParent) {
        return this.loadFSNode({ path: nmParent })
          .then(node => this.loadFSTree(node))
          .then(() => link)
      }
    } else if (target.then)
      target.then(node => link.target = node)

    return link
  }

  loadFSTree (node) {
    const did = this.actualTreeLoaded

    // impossible except in pathological ELOOP cases
    /* istanbul ignore next */
    if (did.has(node.realpath))
      return Promise.resolve(node)

    did.add(node.realpath)
    return this.loadFSChildren(node.target || node)
      .then(() => Promise.all(
        [...node.children.entries()]
          .filter(([name, kid]) => !did.has(kid.realpath))
          .map(([name, kid]) => this.loadFSTree(kid))))
  }

  // create child nodes for all the entries in node_modules
  // and attach them to the node as a parent
  loadFSChildren (node) {
    // if a Link target has started, but not completed, then
    // a Promise will be in the cache to indicate this.
    if (node.then)
      return node.then(node => this.loadFSChildren(node))

    const nm = resolve(node.realpath, 'node_modules')
    return readdir(nm).then(kids => Promise.all(
      kids.filter(kid => kid.charAt(0) !== '.')
      .map(kid => this.loadFSNode({
        parent: node,
        path: resolve(nm, kid),
      }))),
      // error in the readdir is not fatal, just means no kids
      () => {})
  }

  // try to find a node that is the parent in a fs tree sense, but not a
  // node_modules tree sense, of any link targets.  this allows us to
  // resolve deps that node will find, but a legacy npm view of the
  // world would not have noticed.
  findFsParents () {
    for (const path of this.linkTargets) {
      const node = this.cache.get(path)
      if (!node.parent && !node.fsParent) {
        for (let p = dirname(path); p;) {
          if (this.cache.has(p)) {
            node.fsParent = this.cache.get(p)
            p = null
          } else {
            // walk up the tree until p === dirname(p)
            const pp = dirname(p)
            if (pp === p)
              p = null
            else
              p = pp
          }
        }
      }
    }
  }

  loadMetadata () {
    return Metadata.load(this.root).then(meta => this.metadata = meta)
  }

  /* istanbul ignore next */
  loadVirtual () {
    return loadVirtual(this.root).then(tree => this.virtualTree = tree)
  }

  /* istanbul ignore next */
  buildIdealTree (requests) {
    throw new Error('TODO')
  }

  /* istanbul ignore next */
  add (spec) {
    throw new Error('TODO')
  }

  /* istanbul ignore next */
  prune ({
    dev = true,
    optional = true,
    deep = false,
  }) {
    throw new Error('TODO')
  }

  /* istanbul ignore next */
  calculate ({
    dev = true,
    optional = true,
    deep = false,
  }) {
    throw new Error('TODO')
  }

  /* istanbul ignore next */
  update ({
    name = null,
    depth = Infinity,
    restrict = true,
    deep = false,
  }) {
    throw new Error('TODO')
  }

  /* istanbul ignore next */
  reify ({
    save = true,
  }) {
    throw new Error('TODO')
  }
}

module.exports = Arborist

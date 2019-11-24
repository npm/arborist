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
// Each tree has an Inventory at the root.  Shrinkwrap is tracked by Arborist
// instance.  It always refers to the actual tree, but is updated (and written
// to disk) on reification.

const Node = require('./node.js')
const Link = require('./link.js')
const EE = require('events')
const cwd = process.cwd()
const { breadth:bfwalk, depth:dfwalk } = require('treeverse')
const {promisify} = require('util')
const realpath = require('./realpath.js')
const {relative, dirname, resolve, join, basename} = require('path')
const readdir = promisify(require('readdir-scoped-modules'))
const rpj = require('read-package-json-fast')
const calcDepFlags = require('./calc-dep-flags.js')
const Shrinkwrap = require('./shrinkwrap.js')

class Arborist extends EE {
  constructor (options) {
    const {
      path,
      registry = 'https://registry.npmjs.org',
      auth = null,
      scopes = null,
    } = options
    super()
    this.options = options
    this.path = resolve(path || '.')
    this.registry = registry
    this.auth = auth
    this.scopes = scopes
    this.actualTree = null
    this.idealTree = null
    this.virtualTree = null

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

  loadVirtual () {
    return Shrinkwrap.load({ path: this.path }).then(s => {
      if (!s.loadedFromDisk)
        throw new Error('loadVirtual requires existing shrinkwrap file')
      const links = new Map()
      this.virtualTree = null
      const root = this.loadVirtualNode('', s.data.packages[''])
      const nodes = new Map([['', root]])
      root.meta = s
      this.virtualTree = root
      for (const [location, meta] of Object.entries(s.data.packages)) {
        if (!location) // already got this one
          continue
        if (meta.link)
          links.set(location, meta)
        else
          nodes.set(location, this.loadVirtualNode(location, meta))
      }

      // now we've loaded the root, and all real nodes
      // link up the links
      for (const [location, meta] of links.entries()) {
        const targetPath = resolve(this.path, location, meta.resolved)
        const targetLoc = relative(this.path, targetPath)
        const target = nodes.get(targetLoc)
        nodes.set(location, this.loadVirtualLink(location, targetLoc, target))
      }

      // assign parentage
      for (const [location, node] of nodes) {
        if (location === '')
          continue

        // node_modules/foo/node_modules/bar -> node_modules/foo
        // if we have something like node_modules/foo/node_modules/a/b/c,
        // however, then the foo module isn't actually the 'parent' of
        // the c module, but it is the fsparent
        const split = location.split(/(?:^|\/)node_modules\//)
        const name = split.pop()
        const ploc = split.join('/node_modules/').substr(1)
        const parent = nodes.get(ploc)
        /* istanbul ignore else - impossible unless lockfile damaged/invalid */
        if (parent)
          node[ name === node.name ? 'parent' : 'fsParent' ] = parent
      }

      return root
    })
  }

  loadVirtualNode (location, sw) {
    const path = resolve(this.path, location)
    const node = new Node({
      root: this.virtualTree,
      path,
      realpath: path,
      integrity: sw.integrity,
      resolved: sw.resolved,
      pkg: sw,
    })
    // cast to boolean because they're undefined in the lock file when false
    node.extraneous = !!sw.extraneous
    node.devOptional = !!(sw.devOptional || sw.dev || sw.optional)
    node.optional = !!sw.optional
    node.dev = !!sw.dev
    return node
  }

  loadVirtualLink (location, targetLoc, target) {
    const path = resolve(this.path, location)
    const link = new Link({
      path,
      realpath: resolve(this.path, targetLoc),
      target,
      pkg: target && target.package,
    })
    if (target) {
      link.extraneous = target.extraneous
      link.devOptional = target.devOptional
      link.optional = target.optional
      link.dev = target.dev
    }
    return link
  }

  loadActual () {
    // mostly realpath to throw if the root doesn't exist
    return realpath(this.path, this.rpcache, this.stcache)
      .then(real => this.loadFSNode({ path: this.path, real }))
      .then(node => {
        this.actualTree = node
        this.actualTreeLoaded = new Set()
        // did is a set of all realpaths visited on this walk
        // important when a link points at a node we end up visiting later.
        return  this.loadFSTree(node)
      })
      .then(() => this.findFSParents())
      .then(() => calcDepFlags(this.actualTree))
      .then(() => this.actualTree)
  }

  loadFSNode ({ path, parent, real, root }) {
    if (!real)
      return realpath(path, this.rpcache, this.stcache)
        .then(
          real => this.loadFSNode({ path, parent, real, root }),
          // if realpath fails, just provide a dummy error node
          error => new Node({ error, path, realpath: path, parent, root })
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

    // if we're at the root level, then we always load a shrinkwrap/lockfile
    // top-of-tree nodes also load a lockfile, so we can update it if we
    // make changes within their trees.
    // beyond the root level, we only load the shrinkwrap, because it can
    // affect how we build up the ideal tree.
    // basically, if we have a parent, only load shrinkwrap, not pkg-lock
    const p = Shrinkwrap.load({
      path: real,
      shrinkwrapOnly: !!parent,
    }).then(meta => {
      // TODO --no-shrinkwrap support
      if (path !== this.path && !meta.loadedFromDisk)
        meta = null

      return rpj(join(real, 'package.json'))
        // soldier on if read-package-json raises an error
        .then(pkg => [pkg, null], error => [null, error])
        .then(([pkg, error]) => {
          return this[path === real ? 'newNode' : 'newLink']({
            path,
            realpath: real,
            pkg,
            error,
            parent,
            meta,
            root,
          })
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
    // check it for an fsParent if it's a tree top.  there's a decent chance
    // it'll get parented later, making the fsParent scan a no-op, but better
    // safe than sorry, since it's cheap.
    const { parent, realpath, path } = options
    if (!parent && path !== this.path)
      this.linkTargets.add(realpath)
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
        return this.loadFSNode({ path: nmParent, root: link.root })
          .then(node => this.loadFSTree(node))
          .then(() => link)
      }
    } else if (target.then)
      target.then(node => link.target = node)

    return link
  }

  loadFSTree (node) {
    const did = this.actualTreeLoaded
    node = node.target || node

    // if a Link target has started, but not completed, then
    // a Promise will be in the cache to indicate this.
    if (node.then)
      return node.then(node => this.loadFSTree(node))

    // impossible except in pathological ELOOP cases
    /* istanbul ignore next */
    if (did.has(node.realpath))
      return Promise.resolve(node)

    did.add(node.realpath)
    return this.loadFSChildren(node)
      .then(() => Promise.all(
        [...node.children.entries()]
          .filter(([name, kid]) => !did.has(kid.realpath))
          .map(([name, kid]) => this.loadFSTree(kid))))
  }

  // create child nodes for all the entries in node_modules
  // and attach them to the node as a parent
  loadFSChildren (node) {
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
  findFSParents () {
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

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
const {promisify} = require('util')
const realpath = require('./realpath.js')
const {dirname, resolve, join, basename} = require('path')
const readdir = promisify(require('readdir-scoped-modules'))
const rpj = require('read-package-json-fast')
const calcDepFlags = require('./calc-dep-flags.js')
const Shrinkwrap = require('./shrinkwrap.js')
const pacote = require('pacote')
const depValid = require('./dep-valid.js')
const semver = require('semver')
const relpath = require('./relpath.js')
const consistentResolve = require('./consistent-resolve.js')

// enum of return values for canPlaceDep.
// No, this is a conflict, you may not put that package here
const placeDep_CONFLICT = Symbol('CONFLICT')
// Yes, this is fine, and should not be a problem
const placeDep_OK = Symbol('OK')
// No need, because the package already here is fine
const placeDep_KEEP = Symbol('KEEP')
// Yes, clobber the package that is already here
const placeDep_REPLACE = Symbol('REPLACE')

class Arborist extends EE {
  constructor (options = {}) {
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

    this.buildIdealDepsQueue = []
  }

  buildIdealTree (options = {}) {
    // first get the virtual tree, if possible.  If there's a lockfile, then
    // that defines the ideal tree, unless the root package.json is not
    // satisfied by what the ideal tree provides.
    // from there, we start adding nodes to it to satisfy the deps requested
    // by the package.json in the root.

    return rpj(this.path + '/package.json')
      // <-- this is the point where we'll want to get involved if we
      // are calling `npm rm pkg`, to remove it from the root pj
      .then(pkg => this.rootNodeFromPackage(pkg))
        // ok to not have a virtual tree.  probably initial install.
      .then(root => this.loadVirtual({ root }))
      // at this point we have a virtual tree with the actual root node's
      // package deps, which may be partly or entirely incomplete or invalid.
      .then(() => this.buildIdealDeps(this.virtualTree))
      .then(() => calcDepFlags(this.virtualTree))
      .then(() => this.virtualTree)
  }

  rootNodeFromPackage (pkg) {
    return new Node({ path: this.path, pkg })
  }

  buildIdealDeps (node) {
    this.buildIdealDepsQueue = [node]

    return this.buildIdealDepsStep()
  }

  buildIdealDepsStep () {
    const node = this.buildIdealDepsQueue.shift()
    if (!node)
      return

    // if any deps are missing or invalid, then we fetch the manifest for
    // the thing we want, and build a new dep node from that.
    // Then, find the ideal placement for that node.  The ideal placement
    // searches from the node's deps (or parent deps in the case of non-root
    // peer deps), and walks up the tree until it finds the highest spot
    // where it doesn't cause any conflicts.
    //
    // A conflict can be:
    // - A node by that name already exists at that location.
    // - The parent has a peer dep on that name
    // - One of the node's peer deps conflicts at that location, unless the
    //   peer dep is met by a node at that location, which is fine.
    //
    // If we create a new node, then build its ideal deps as well.
    //
    // Note: this is the same "maximally naive" deduping tree-building
    // algorithm that npm has used since v3.  In a case like this:
    //
    // root -> (a@1, b@1||2)
    // a -> (b@1)
    //
    // You'll end up with a tree like this:
    //
    // root
    // +-- a@1
    // |   +-- b@1
    // +-- b@2
    //
    // rather than this, more deduped, but just as correct tree:
    //
    // root
    // +-- a@1
    // +-- b@1
    //
    // Another way to look at it is that this algorithm favors getting higher
    // version deps at higher levels in the tree, even if that reduces
    // potential deduplication.

    // skip over any bundled deps, they're not our problem.
    const bundled = new Set(node.package.bundleDependencies || [])
    const problems = [...node.edgesOut.values()]
      .filter(edge => !edge.valid && !bundled.has(edge.name))
      .sort((a, b) => a.name.localeCompare(b.name))

    return Promise.all(
      // resolve all the edges into nodes using pacote.manifest
      // return a {dep,edge} object so that we can track the reason
      // for this node through the parallelized async operation.
      // note that dep.edgesOut will have all its peer deps resolved,
      // since they're relevant in the calculation about where to place
      // the new and/or updated dependency.
      problems.map(edge => this.newNodeFromEdge(edge)
        .then(dep => ({edge, dep})))
    )
    .then(tasks => tasks.sort((a, b) => a.edge.name.localeCompare(b.edge.name)))
    .then(tasks => tasks.map(
      ({ edge, dep }) => this.placeIdealDep(dep, node, edge)
    ))
    .then(placed => {
      for (const set of placed) {
        this.buildIdealDepsQueue.push(...set)
      }
      this.buildIdealDepsQueue = this.buildIdealDepsQueue
        .sort((a, b) => (a.depth - b.depth) || a.path.localeCompare(b.path))
      return this.buildIdealDepsStep()
    })
  }

  // starting from either node, or in the case of non-root peer deps,
  // the node's parent, walk up the tree until we find the first spot
  // where this dep cannot be placed, and use the one right before that.
  // place dep, requested by node, to satisfy edge
  placeIdealDep (dep, node, edge) {
    if (!edge.error)
      return []

    const start = edge.peer && !node.isTop ? node.parent : node
    let target
    let canPlace
    for (let check = start; check; check = check.parent) {
      const cp = this.canPlaceDep(dep, check, edge)
      // anything other than a conflict is fine to proceed with
      if (cp !== placeDep_CONFLICT) {
        canPlace = cp
        target = check
      } else
        break
    }

    if (!target) {
      throw Object.assign(new Error('unable to resolve dependency tree'), {
        package: edge.name,
        spec: edge.spec,
        type: edge.type,
        requiredBy: node.package._id,
        location: node.path,
      })
    }

    // figure out which of this node's peer deps will get placed as well
    const virtualRoot = dep.parent

    // NB: I'm not sure it's even possible to get a placeDep_KEEP result
    // here, since that would mean that the current dep in place is ok,
    // which would mean that the edge is not in error, which would mean we
    // returned an empty array up at the top of this function.  But the
    // correct behavior if we DID get that result is shown here anyway,
    // just in case some exotic sitution escaped my contemplation.
    const placed = canPlace === placeDep_KEEP ?
      /* istanbul ignore next - see comment above */ [] : [dep]
    /* istanbul ignore else - see comment above */
    if (canPlace === placeDep_REPLACE || canPlace === placeDep_OK) {
      const oldChild = target.children.get(edge.name)
      if (oldChild)
        dep.replace(oldChild)
      else
        dep.parent = target
    }

    // also place its unmet or invalid peer deps at this location
    // note that dep has now been removed from the virtualRoot set
    // by virtue of being placed in the target's node_modules.
    if (virtualRoot) {
      for (const edge of dep.edgesOut.values()) {
        if (edge.peer && !edge.valid) {
          const peer = virtualRoot.children.get(edge.name)
          const peerPlaced = this.placeIdealDep(peer, dep, edge)
          placed.push(...peerPlaced)
        }
      }
    }

    return placed
  }

  // check if we can place DEP in TARGET to satisfy EDGE
  // Need to verify:
  // - no child by that name there already
  // - target does not have a peer dep on name
  // - no higher-level pkg by that name and incompatible spec is depended on
  //   by anything lower in the tree.
  // - node's peer deps and meta-peer deps are siblings in a virtual root at
  //   this point.  make sure that the whole family can come along, so apply
  //   the same checks to each of them.  They may land higher up in the tree,
  //   but we need to know that they CAN live here.
  // Responses:
  // - OK - Yes, because there is nothing there and no conflicts caused
  // - REPLACE - Yes, and you can clobber what's there
  // - KEEP - No, but what's there is fine
  // - CONFLICT - You may not put that there
  canPlaceDep (dep, target, edge, checkingPeer = false) {
    // no child by that name already
    if (target.children.has(dep.name)) {
      const current = target.children.get(dep.name)
      // if the integrities match, then it's literally the same exact thing
      if (dep.integrity && dep.integrity === current.integrity) {
        return placeDep_KEEP
      }

      // if the version is greater, try to use the new one
      const curVer = current.package.version
      const newVer = dep.package.version
      if (curVer && newVer && semver.gte(newVer, curVer)) {
        if (current.canReplaceWith(dep)) {
          return placeDep_REPLACE
        }
      }

      // ok, see if the current one satisfies the edge we're working on then
      if (edge.satisfiedBy(current)) {
        return placeDep_KEEP
      }

      // no agreement could be reached :(
      return placeDep_CONFLICT
    }

    // check to see if the target DOESN'T have a child by that name,
    // but DOES have a conflicting dependency of its own
    if (target.edgesOut.has(dep.name)) {
      const edge = target.edgesOut.get(dep.name)
      // It might be that the dep would not be valid here, BUT some other version
      // would.  Could to try to resolve that, but that makes this no longer
      // a pure synchronous function.  ugh.
      // Or, what we could do is ensure that we're limiting the peer dep
      // specs with the parent spec as well when we create the set of peers,
      // since otherwise we don't have to worry about it, since deeper
      // deps are always processed after shallower ones.
      if (!edge.satisfiedBy(dep)) {
        return placeDep_CONFLICT
      }
    }

    // check to see what the name resolves to here, and who depends on it
    // and if they'd be ok with the new dep being there instead
    const current = target.resolve(dep.name)
    if (current) {
      for (const edge of current.edgesIn.values()) {
        if (edge.from.isDescendantOf(target) && edge.valid) {
          if (!edge.satisfiedBy(dep)) {
            return placeDep_CONFLICT
          }
        }
      }
    }

    // make sure the family of peer deps can live here alongside it.
    if (!checkingPeer && dep.parent) {
      for (const peer of dep.parent.children.values()) {
        if (peer !== dep && dep.edgesOut.has(peer.name)) {
          const peerEdge = dep.edgesOut.get(peer.name)
          const canPlacePeer = this.canPlaceDep(peer, target, peerEdge, true)
          if (canPlacePeer === placeDep_CONFLICT)
            return placeDep_CONFLICT
        }
      }
    }

    return placeDep_OK
  }

  newNodeFromSpec (name, spec, parent) {
    const id = `${name}@${spec}`
    // pacote will slap integrity on its options, so we have to clone
    // the object so it doesn't get mutated.
    // XXX: make pacote clone its own options object, since it mutates it?
    return pacote.manifest(id, Object.create(this.options))
      .then(pkg => new Node({ name, pkg, parent }))
  }

  // loads a node from an edge, and then loads its peer deps (and their
  // peer deps, on down the line) into a virtual root parent.
  newNodeFromEdge (edge, parent) {
    // create a virtual root node with the same deps as the node that
    // is requesting this one, so that we can get all the peer deps in
    // a context where they're likely to be resolvable.
    parent = parent || new Node({
      path: '/virtual-root',
      pkg: edge.from.package,
    })
    return this.newNodeFromSpec(edge.name, edge.spec, parent)
      .then(node => this.loadPeerSet(node))
  }

  // load all peer deps and meta-peer deps into the node's parent
  // At the end of this, the node's peer-type outward edges are all
  // resolved, and so are all of theirs, but other dep types are not.
  // We prefer to get peer deps that meet the requiring node's dependency,
  // if possible, since that almost certainly works (since that package was
  // developed with this set of deps) and will typically be more restrictive.
  loadPeerSet (node) {
    const peerEdges = [...node.edgesOut.values()]
      .filter(e => e.peer && !e.valid)
      .map(e => node.parent && node.parent.edgesOut.get(e.name) || e)
    return Promise.all(
      peerEdges.map(edge => this.newNodeFromEdge(edge, node.parent))
    ).then(() => node)
  }

  loadVirtual (options = {}) {
    return Shrinkwrap.load({ path: this.path }).then(s => {
      if (!s.loadedFromDisk && !options.root)
        throw new Error('loadVirtual requires existing shrinkwrap file')
      const links = new Map()
      // when building the ideal tree, we pass in a root node to this function
      // my apologies for this bit of JS cleverness with the default value.
      const {
        root = this.loadVirtualNode('', s.data.packages[''])
      } = options
      const nodes = new Map([['', root]])
      root.meta = s
      s.add(root)
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
        const targetPath = resolve(this.path, meta.resolved)
        const targetLoc = relpath(this.path, targetPath)
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
      resolved: consistentResolve(sw.resolved, this.path, path),
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

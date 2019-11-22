// inventory, path, realpath, root, and parent
//
// node.root is a reference to the root module in the tree (ie, typically the
// cwd project folder)
//
// node.location is the /-delimited path from the root module to the node.  In
// the case of link targets that may be outside of the root's package tree,
// this can include some number of /../ path segments.  The location of the
// root module is always '.'.  node.location thus never contains drive letters
// or absolute paths, and is portable within a given project, suitable for
// inclusion in lockfiles and metadata.
//
// node.path is the path to the place where this node lives on disk.  It is
// system-specific and absolute.
//
// node.realpath is the path to where the module actually resides on disk.  In
// the case of non-link nodes, node.realpath is equivalent to node.path.  In
// the case of link nodes, it is equivalent to node.target.path.
//
// Setting node.parent will set the node's root to the parent's root, as well
// as updating edgesIn and edgesOut to reload dependency resolutions as needed,
// and setting node.path to parent.path/node_modules/name.
//
// node.inventory is a Map of name to a Set() of all the nodes under a given
// root by that name.  It's empty for non-root nodes, and changing the root
// reference will remove it from the old root's inventory and add it to the new
// one.  This map is useful for cases like `npm update foo` or `npm ls foo`
// where we need to quickly find all instances of a given package name within a
// tree.

const nameFromFolder = require('./name-from-folder.js')
const Edge = require('./edge.js')
const Inventory = require('./inventory.js')
const Shrinkwrap = require('./shrinkwrap.js')

/* istanbul ignore next */
const dassert = /\barborist\b/.test(process.env.NODE_DEBUG || '')
  ? require('assert') : () => {}

const {join, resolve, relative, dirname, basename} = require('path')
const _parent = Symbol('_parent')
const _fsParent = Symbol('_fsParent')
const _reloadEdges = Symbol('_reloadEdges')
const _loadType = Symbol('_loadType')
const _loadDepType = Symbol('_loadDepType')
const _reloadNamedEdges = Symbol('_reloadNamedEdges')
// overridden by Link class
const _loadDeps = Symbol.for('Arborist.Node._loadDeps')
const _root = Symbol('_root')
const _refreshLocation = Symbol('_refreshLocation')
const _refreshTopMeta = Symbol('_refreshTopMeta')
const _refreshPath = Symbol('_refreshPath')
const _delistFromMeta = Symbol('_delistFromMeta')

// for comparing nodes to yarn.lock entries
const mismatch = (a, b) => a && b && a !== b

class Node {
  constructor (options) {
    // NB: path can be null if it's a link target
    const {
      pkg,
      root,
      path,
      realpath,
      parent,
      error,
      meta,
      fsParent,
      resolved,
      integrity,
      // allow setting name explicitly when we haven't set a path yet
      name,
    } = options

    this.resolved = resolved || null
    this.integrity = integrity || null

    this.errors = error ? [error] : []
    this.package = pkg || {}
    this.name = name ||
      nameFromFolder(path || this.package.name || realpath) ||
      this.package.name

    if (!this.name)
      throw new TypeError('could not detect node name from path or package')

    // should be equal if not a link
    this.realpath = realpath
    this.path = path

    this.children = new Map()
    this.inventory = new Inventory({})

    // these three are set by an Arborist taking a catalog
    // after the tree is built.  We don't get this along the way,
    // because they have a tendency to change as new children are
    // added, especially when they're deduped.  Eg, a dev dep may be
    // a 3-levels-deep dependency of a non-dev dep.  If we calc the
    // flags along the way, then they'll tend to be invalid  by the
    // time we need to look at them.
    this.dev = true
    this.optional = true
    this.devOptional = true
    this.extraneous = true

    this.edgesIn = new Set()
    this.edgesOut = new Map()

    // only relevant for the root and top nodes
    this.meta = meta

    // Note: this is _slightly_ less efficient for the initial tree
    // building than it could be, but in exchange, it's a much simpler
    // algorithm.
    // If this node has a bunch of children, and those children satisfy
    // its various deps, then we're going to _first_ create all the
    // edges, and _then_ assign the children into place, re-resolving
    // them all in _reloadNamedEdges.
    // A more efficient, but more complicated, approach would be to
    // flag this node as being a part of a tree build, so it could
    // hold off on resolving its deps until its children are in place.

    // call the parent setter
    // Must be set prior to calling _loadDeps, because top-ness is relevant

    // will also assign root if present on the parent
    this.parent = parent

    this[_fsParent] = null
    this.fsParent = fsParent || null

    // see parent/root setters below.
    // root is set to parent's root if we have a parent, otherwise if it's
    // null, then it's set to the node itself.
    if (!parent && !fsParent)
      this.root = root || null

    if (this.isRoot)
      this.location = ''

    // edges in and out in the dependency graph
    this[_loadDeps]()
  }

  getBundler (path) {
    // made a cycle, definitely not bundled!
    if (path.includes(this))
      return null

    path.push(this)

    const parent = this[_parent]
    if (!parent)
      return null

    const pBundler = parent.getBundler(path)
    if (pBundler)
      return pBundler

    const ppkg = parent.package
    const bd = ppkg && ppkg.bundleDependencies
    // explicit bundling
    if (Array.isArray(bd) && bd.includes(this.name))
      return parent

    // deps that are deduped up to the bundling level are bundled.
    // however, if they get their dep met further up than that,
    // then they are not bundled.  Ie, installing a package with
    // unmet bundled deps will not cause your deps to be bundled.
    for (const edge of this.edgesIn) {
      const eBundler = edge.from.getBundler(path)
      if (!eBundler)
        continue

      if (eBundler === parent)
        return eBundler
    }

    return null
  }

  get inBundle () {
    return !!this.getBundler([])
  }

  get isRoot () {
    return this === this.root
  }

  set root (root) {
    const nullRoot = root === null
    if (nullRoot)
      root = this
    else
      // should only ever be 1 step
      while (root.root !== root) {
        root = root.root
      }

    const oldRoot = this.root

    if (root === oldRoot)
      return

    this[_delistFromMeta]()
    this[_root] = root
    this[_refreshLocation]()

    if (this.top.meta)
      this.top.meta.add(this)

    if (this.target && !nullRoot)
      this.target.root = root

    this.children.forEach(c => c.root = root)
    /* istanbul ignore next */
    dassert(this === root || this.inventory.size === 0)
  }

  get root () {
    return this[_root] || this
  }

  [_loadDeps] () {
    // Caveat!  Order is relevant!
    // packages in optionalDependencies and prod/peer/dev are
    // optional.  Packages in both deps and devDeps are required.
    // Note the subtle breaking change from v6: it is no longer possible
    // to have a different spec for a devDep than production dep.
    this[_loadDepType](this.package.optionalDependencies, 'optional')
    this[_loadDepType](this.package.dependencies, 'prod')

    const pd = this.package.peerDependencies
    if (pd && typeof pd === 'object') {
      const pm = this.package.peerDependenciesMeta || {}
      const peerDependencies = {}
      const peerOptional = {}
      for (const [name, dep] of Object.entries(pd)) {
        if (pm[name] && pm[name].optional)
          peerOptional[name] = dep
        else
          peerDependencies[name] = dep
      }
      this[_loadDepType](peerDependencies, 'peer')
      this[_loadDepType](peerOptional, 'peerOptional')
    }

    // Linked targets that are disconnected from the tree are tops,
    // but don't have a 'path' field, only a 'realpath', because we
    // don't know their canonical location. We don't need their devDeps.
    if (this.isTop && this.path)
      this[_loadDepType](this.package.devDependencies, 'dev')
  }

  [_loadDepType] (obj, type) {
    const from = this
    for (const [name, spec] of Object.entries(obj || {})) {
      // if it's already set, then we keep the existing edge
      // NB: the Edge ctor adds itself to from.edgesOut
      if (!this.edgesOut.get(name)) {
        new Edge({ from, name, spec, type })
      }
    }
  }

  get fsParent () {
    return this[_fsParent]
  }

  set fsParent (fsParent) {
    fsParent = fsParent || null

    if (this[_fsParent] === fsParent)
      return

    if (!fsParent) {
      this[_fsParent] = null
      // reload ALL edges, since they're now all suspect and likely invalid
      this[_reloadEdges](e => true)
      return
    }

    // prune off the original location, so we don't leave edges lying around
    if (this[_fsParent])
      this.fsParent = null

    const fspp = fsParent.realpath
    const nmPath = resolve(fspp, 'node_modules', this.name)
    // actually in the node_modules folder!  this can happen when a link
    // points deep within a node_modules folder, so that the target node
    // is loaded before its parent.
    if (nmPath === this.path) {
      this[_fsParent] = null
      this.parent = fsParent
      return
    }

    // ok!  have a pseudo-parent, meaning that we're contained in
    // the parent node's fs tree, but NOT in its node_modules folder.
    // Almost certainly due to being a linked workspace-style package.
    this[_fsParent] = fsParent
    this.root = fsParent.root
    this[_reloadEdges](e => !e.to)
  }

  // called when we find that we have an fsParent which could account
  // for some missing edges which are actually fine and not missing at all.
  [_reloadEdges] (filter) {
    this.edgesOut.forEach(edge => filter(edge) && edge.reload())
    this.children.forEach(c => c[_reloadEdges](filter))
  }

  get parent () {
    return this[_parent]
  }

  // This setter keeps everything in order when we move a node from
  // one point in a logical tree to another.  Edges get reloaded,
  // metadata updated, etc.  It's also called when we *replace* a node
  // with another by the same name (eg, to update or dedupe).
  // This does a couple of walks out on the node_modules tree, recursing
  // into child nodes.  However, as setting the parent is typically done
  // with nodes that don't have have many children, and (deduped) package
  // trees tend to be broad rather than deep, it's not that bad.
  // The only walk that starts from the parent rather than this node is
  // limited by edge name.
  set parent (parent) {
    const oldParent = this[_parent]

    // link nodes can't contain children directly.
    // children go under the link target.
    if (parent) {
      if (parent.isLink)
        parent = parent.target

      if (oldParent === parent)
        return
    }

    // ok now we know something is actually changing, and parent is not a link

    // check to see if the location is going to change.
    // we can skip some of the inventory/meta stuff if not.
    const newPath = parent ? resolve(parent.path, 'node_modules', this.name)
      : this.path
    const pathChange = newPath !== this.path
    const oldTop = this.top
    const newTop = parent ? parent.top : this
    const topChange = newTop !== oldTop
    const newRoot = parent ? parent.root : null
    const oldRoot = this.root
    const rootChange = newRoot !== oldRoot

    // if the path, top, or root are changing, then we need to delist
    // from metadata and inventory where this module (and its children)
    // are currently tracked.  Need to do this BEFORE updating the
    // path and setting node.root.  We don't have to do this for node.target,
    // because its path isn't changing, so everything we need will happen
    // safely when we set this.root = parent.root.
    if (this.path && (pathChange || topChange || rootChange)) {
      this[_delistFromMeta]()
      // delisting method doesn't walk children by default, since it would
      // be excessive to do so when changing the root reference, as a
      // root change walks children changing root as well.  But in this case,
      // we are about to change the parent, and thus the top, so we have
      // to delist from the metadata now to ensure we remove it from the
      // proper top node metadata if it isn't the root.
      this.children.forEach(c => c[_delistFromMeta]())
    }

    // remove from former parent.
    if (oldParent)
      oldParent.children.delete(this.name)

    // update internal link.  at this point, the node is actually in
    // the new location in the tree, but the paths are not updated yet.
    this[_parent] = parent

    // remove former child.  calls back into this setter to unlist
    if (parent) {
      const oldChild = parent.children.get(this.name)
      if (oldChild)
        oldChild.parent = null

      parent.children.set(this.name, this)
    }

    // this is the point of no return.  this.location is no longer valid,
    // and this.path is no longer going to reference this node in the
    // inventory or shrinkwrap metadata.
    if (parent)
      this[_refreshPath](parent.path)

    // call the root setter.  this updates this.location, and sets the
    // root on all children, and this.target if this is a link.
    // if the root isn't changing, then this is a no-op.
    // the root setter is a no-op if the root didn't change, so we have
    // to manually call the method to update location and metadata
    if (this.root === newRoot)
      this[_refreshLocation]()
    else
      this.root = newRoot

    // if the new top is not the root, and it has meta, then we're updating
    // nodes within a link target's folder.  update it now.
    if (newTop !== newRoot && newTop.meta)
      this[_refreshTopMeta]()

    // refresh dep links
    // note that this is _also_ done when a node is removed from the
    // tree by setting parent=null, so deduplication is covered.
    this.edgesIn.forEach(edge => edge.reload())
    this.edgesOut.forEach(edge => edge.reload())

    // in case any of the parent's other descendants were resolving to
    // a different instance of this package, walk the tree from that point
    // reloading edges by this name.  This only walks until it stops finding
    // changes, so if there's a portion of the tree blocked by a different
    // instance, or already updated by the previous in/out reloading, it won't
    // needlessly re-resolve deps that won't need to be changed.
    if (parent) {
      parent[_reloadNamedEdges](this.name, true)
      // since loading a parent can add resolutions, we also walk the tree
      // from this point reloading any edges that were previously missing.
      this[_reloadEdges](e => !e.to)
    }
  }

  // called after changing the parent (and thus the top), and after changing
  // the path, if the top is tracking metadata, so that we update the top's
  // metadata with the new node.  Note that 
  [_refreshTopMeta] () {
    this.top.meta.add(this)
    this.children.forEach(c => c[_refreshTopMeta]())
  }

  // Call this before changing path or updating the _root reference.
  // Removes the node from all the metadata trackers where it might live.
  [_delistFromMeta] () {
    const top = this.top
    const root = this.root

    root.inventory.delete(this)
    if (root.meta)
      root.meta.delete(this.path)

    // need to also remove from the top meta if that's set.  but, we only do
    // that if the top is not the same as the root, or else we'll remove it
    // twice unnecessarily.  If the top and this have different roots, then
    // that means we're in the process of changing this.parent, which sets the
    // internal _parent reference BEFORE setting the root node, because paths
    // need to be set up before assigning root.  In that case, don't delist,
    // or else we'll delete the metadata before we have a chance to apply it.
    if (top.meta && top !== root && top.root === this.root)
      top.meta.delete(this.path)
  }

  // recurse through the node_modules tree updating path when it changes.
  // called by the parent setter.
  [_refreshPath] (ppath, node) {
    this.path = resolve(ppath, 'node_modules', this.name)
    if (!this.isLink)
      this.realpath = this.path
    this.children.forEach(c => c[_refreshPath](this.path))
  }


  // Called whenever the root/parent is changed.
  // NB: need to remove from former root's meta/inventory and then update
  // this.path BEFORE calling this method!
  [_refreshLocation] () {
    const root = this.root
    this.location = relative(root.path, this.path).replace(/\\/g, '/')

    root.inventory.add(this)

    // try to get metadata, and write to the root's store if we can
    if (root.meta) {
      if (this.resolved === null || this.integrity === null) {
        const {resolved, integrity} = root.meta.get(this.path)
        // if we have one, only set the other if it matches
        // otherwise it could be for a completely different thing.
        const resolvedOk = !resolved || !this.resolved ||
          this.resolved === resolved
        const integrityOk = !integrity || !this.integrity ||
          this.integrity === integrity

        if ((resolved || integrity) && resolvedOk && integrityOk) {
          this.resolved = this.resolved || resolved || null
          this.integrity = this.integrity || integrity || null
        } else {
          // try to read off the package or node itself.
          const {resolved, integrity} = Shrinkwrap.metaFromNode(this)
          this.resolved = this.resolved || resolved || null
          this.integrity = this.integrity || integrity || null
        }
      }

      // add to the root meta so we don't do this dance more than once.
      root.meta.add(this)
    }
  }

  addEdgeOut (edge) {
    this.edgesOut.set(edge.name, edge)
  }

  addEdgeIn (edge) {
    this.edgesIn.add(edge)
    if (!edge.valid)
      return

    // try to get metadata from the yarn.lock file if we need it
    const needsMeta = !this.resolved || !this.integrity
    if (!needsMeta)
      return

    const yarnLock = this.root.meta && this.root.meta.yarnLock
    if (!yarnLock || !yarnLock.entries || !yarnLock.entries.size)
      return

    const entry = yarnLock.entries.get(`${this.name}@${edge.spec}`)
    // skip any entries that don't appear to be referring to this thing
    if (!entry ||
        mismatch(this.package.version, entry.version) ||
        mismatch(this.integrity, entry.integrity) ||
        mismatch(this.resolved, entry.resolved))
      return

    // ok, this is probably it!  get what we can from it.
    this.integrity = this.integrity || entry.integrity || null
    this.resolved = this.resolved || entry.resolved || null
  }

  [_reloadNamedEdges] (name, root) {
    // either it's the node in question, or it's going to block it anyway
    if (this.name === name && !this.isTop)
      return

    const edge = this.edgesOut.get(name)
    // if we don't have an edge, do nothing, but keep descending
    if (edge) {
      const toBefore = edge.to
      edge.reload()
      const toAfter = edge.to
      if (toBefore === toAfter && !root) {
        // nothing changed, we're done here.  either it was already
        // referring to this node (due to its edgesIn reloads), or
        // it is blocked by another node in the tree.  So either its children
        // have already been updated, or don't need to be.
        //
        // but: always descend past the _first_ node, because it's likely
        // that this is being triggered by this node getting a new child,
        // so the whole point is to update the rest of the family.
        return
      }
    }
    for (const c of this.children.values()) {
      c[_reloadNamedEdges](name)
    }
  }

  get isLink () {
    return false
  }

  get isTop () {
    return !this.parent
  }

  get top () {
    return this.isTop ? this : this.parent.top
  }

  resolve (name) {
    const mine = this.children.get(name)
    return mine ? mine
      : this.isTop ? (
        this.fsParent ? this.fsParent.resolve(name) : null
      )
      : this.parent.resolve(name)
  }

  inNodeModules () {
    const rp = this.realpath
    const name = this.name
    const scoped = name.charAt(0) === '@'
    const d = dirname(rp)
    const nm = scoped ? dirname(d) : d
    const dir = dirname(nm)
    const base = scoped ? `${basename(d)}/${basename(rp)}` : basename(rp)
    return base === name && basename(nm) === 'node_modules' ? dir : false
  }
}

module.exports = Node

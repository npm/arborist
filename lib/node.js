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

const {join, resolve, relative} = require('path')
const _parent = Symbol('_parent')
const _fsParent = Symbol('_fsParent')
const _reloadEdges = Symbol('_reloadEdges')
const _loadType = Symbol('_loadType')
const _updateLocation = Symbol('_updateLocation')
const _loadDepType = Symbol('_loadDepType')
const _reloadNamedEdges = Symbol('_reloadNamedEdges')
// overridden by Link class
const _loadDeps = Symbol.for('Arborist.Node._loadDeps')
const _root = Symbol('_root')

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
    } = options

    this.resolved = resolved
    this.integrity = integrity

    this.errors = error ? [error] : []
    this.package = pkg || {}
    this.name = nameFromFolder(path || this.package.name || realpath)
    this.name = this.name || this.package.name
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

    // only relevant for the root node.
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

    // see parent/root setters below.
    // root is set to parent's root if we have a parent, otherwise if it's
    // null, then it's set to the node itself.
    if (!parent)
      this.root = root || null

    this[_fsParent] = null
    this.fsParent = fsParent || null

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
    if (root === null)
      root = this

    // should only ever be 1 step
    while (root.root !== root) {
      root = root.root
    }

    const oldRoot = this[_root] || null

    if (root === oldRoot)
      return

    // rare, but can happen on initial creation of link nodes, if they
    // are created without a parent.  the target gets set to the same
    // root as the link.
    if (oldRoot) {
      oldRoot.inventory.delete(this)
      if (oldRoot.meta)
        oldRoot.meta.dememo(this)
    }
    if (root.path)
      this.location = relative(root.path, this.path).replace(/\\/g, '/')

    this[_root] = root
    root.inventory.add(this)

    if (root.meta) {
      if (this.resolved === undefined && this.integrity === undefined) {
        const {resolved, integrity} = root.meta.get(this)
        this.resolved = resolved
        this.integrity = integrity
      } else
        root.meta.memo(this)
    }

    if (this.target)
      this.target.root = root

    this.children.forEach(c => c.root = root)
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

  set parent (parent) {
    // link nodes can't contain children directly.
    // children go under the link target.
    if (parent) {
      if (parent.isLink)
        parent = parent.target

      if (this[_parent] === parent)
        return
    }

    // It's possible that a cached link target is already loaded as a tree top,
    // but then gets its parent loaded later.  In that case, when the parent
    // loads, it re-sets the child node's parent link, calling this setter,
    // and updating any now-misleading location or parent links in the tree.

    const oldParent = this[_parent]
    if (oldParent)
      oldParent.children.delete(this.name)

    this[_parent] = parent
    if (parent) {
      // remove any existing child
      const oldChild = parent.children.get(this.name)
      if (oldChild)
        oldChild.parent = null

      parent.children.set(this.name, this)

      // path and realpath are always system native
      this.path = resolve(this.parent.path, 'node_modules', this.name)
      if (!this.isLink)
        this.realpath = resolve(this.parent.path, 'node_modules', this.name)
      this.root = parent.root
    } else {
      this.root = null
    }

    this[_updateLocation]()

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

  [_updateLocation] () {
    if (this.parent) {
      if (this.root.meta)
        this.root.meta.dememo(this)

      const ploc = this.parent.location
      const pref = `${ploc}${ploc === '' ? '' : '/'}node_modules`
      // NB: 'location' is always / separated
      this.location = `${pref}/${this.name}`
      // path and realpath are always system native
      this.path = resolve(this.parent.path, 'node_modules', this.name)
      if (!this.isLink)
        this.realpath = resolve(this.parent.path, 'node_modules', this.name)

      if (this.root.meta)
        this.root.meta.memo(this)
    }

    for (const c of this.children.values()) {
      c[_updateLocation]()
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
}

module.exports = Node

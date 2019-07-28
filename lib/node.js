const nameFromFolder = require('./name-from-folder.js')
const Edge = require('./edge.js')

const _parent = Symbol('_parent')
const _loadType = Symbol('_loadType')
const _updateLocation = Symbol('_updateLocation')
const _loadDepType = Symbol('_loadDepType')
const _reloadNamedEdges = Symbol('_reloadNamedEdges')
// overridden by Link class
const _loadDeps = Symbol.for('Arborist.Node._loadDeps')

class Node {
  constructor (options) {
    // NB: path can be null if it's a link target
    const { pkg, path, realpath, parent } = options
    this.package = pkg || {}
    this.name = nameFromFolder(path || realpath)
    // no point naming the root package '.'
    if (this.name === '.')
      this.name = nameFromFolder(this.package.name || realpath)
    this.path = path
    this.realpath = realpath
    this.children = []

    // these three are set by an Arborist taking a catalog
    // after the tree is built.  We don't get this along the way,
    // because they have a tendency to change as new children are
    // added, especially when they're deduped.  Eg, a dev dep may be
    // a 3-levels-deep dependency of a non-dev dep.  If we calc the
    // flags along the way, then they'll tend to be invalid  by the
    // time we need to look at them.
    this.dev = undefined
    this.optional = undefined
    this.devOptional = undefined

    // edges in and out in the dependency graph
    this[_loadDeps]()

    // call the parent setter
    // also assigns inBundle and location
    this.parent = parent
  }

  [_loadDeps] () {
    this.edgesIn = new Set()
    this.edgesOut = new Map()

    // Caveat!  Order is relevant!
    // packages in optionalDependencies and prod/peer/dev are
    // optional.  Packages in both deps and devDeps are required.
    // Note the subtle breaking change from v6: it is no longer possible
    // to have a different spec for a devDep than production dep.
    this[_loadDepType](this.package.optionalDependencies, 'optional')
    this[_loadDepType](this.package.dependencies, 'prod')
    this[_loadDepType](this.package.peerDependencies, 'peer')
    this[_loadDepType](this.package.devDependencies, 'dev')
  }

  [_loadDepType] (obj, type) {
    const from = this
    for (const [name, spec] of Object.entries(obj || {})) {
      // if it's already set, then we keep the existing edge
      // NB: the Edge ctor adds itself to from.edgesOut
      if (!this.edgesOut.get(name))
        new Edge({ from, name, spec, type })
    }
  }

  get extraneous () {
    return this.edgesIn.size === 0
  }

  get parent () {
    return this[_parent]
  }

  set parent (parent) {
    if (parent && this[_parent] === parent)
      return

    // It's possible that a cached link target is already loaded as a tree top,
    // but then gets its parent loaded later.  In that case, when the parent
    // loads, it re-sets the child node's parent link, calling this setter,
    // and updating any now-misleading location or parent links in the tree.

    const oldParent = this[_parent]
    if (oldParent) {
      const i = oldParent.children.indexOf(this)
      oldParent.children.splice(i, 1)
    }

    this[_parent] = parent
    if (!parent) {
      this.inBundle = false
      this.location = '/'
    } else {
      // remove any existing child
      parent.children
        .filter(c => c.name === this.name)
        .forEach(c => c.parent = null)

      parent.children.push(this)
      const pInBundle = parent.inBundle
      const ppkg = parent.package
      const bd = ppkg.bundleDependencies
      this.inBundle = pInBundle || Array.isArray(bd) && bd.includes(this.name)
      this[_updateLocation]()
    }

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
    if (parent)
      parent[_reloadNamedEdges](this.name, true)
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
    this.children.forEach(c => c[_reloadNamedEdges](name))
  }

  [_updateLocation] () {
    const ploc = this.parent.location
    this.location = `${ploc === '/' ? '' : ploc}/${this.name}`
    this.path = this.parent.path + '/node_modules/' + this.name
    this.children.forEach(c => c[_updateLocation]())
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
    const mine = this.children.filter(node => node.name === name)
    return mine.length ? mine[0]
      : this.isTop ? null
      : this.parent.resolve(name)
  }
}

module.exports = Node

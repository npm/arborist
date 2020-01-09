// mixin implementing the buildIdealTree method
//
// XXX auth and scopes settings
// Maybe pacote should just handle that somehow?
// Otherwise we have to parse it out for pacote.manifest/extract each time.

const rpj = require('read-package-json-fast')
const npa = require('npm-package-arg')
const pacote = require('pacote')
const semver = require('semver')

const calcDepFlags = require('../calc-dep-flags.js')
const Shrinkwrap = require('../shrinkwrap.js')
const Node = require('../node.js')
const Link = require('../link.js')
const addRmPkgDeps = require('../add-rm-pkg-deps.js')

// enum of return values for canPlaceDep.
// No, this is a conflict, you may not put that package here
const CONFLICT = Symbol('CONFLICT')
// Yes, this is fine, and should not be a problem
const OK = Symbol('OK')
// No need, because the package already here is fine
const KEEP = Symbol('KEEP')
// Yes, clobber the package that is already here
const REPLACE = Symbol('REPLACE')

const _depsSeen = Symbol('depsSeen')
const _depsQueue = Symbol('depsQueue')
const _updateAll = Symbol('updateAll')
const _mutateTree = Symbol('mutateTree')
const _prune = Symbol('prune')
const _preferDedupe = Symbol('preferDedupe')
const _legacyBundling = Symbol('legacyBundling')
const _parseSettings = Symbol('parseSettings')
const _initTree = Symbol('initTree')
const _applyUserRequests = Symbol('applyUserRequests')
const _buildDeps = Symbol('buildDeps')
const _buildDepStep = Symbol('buildDepStep')
const _nodeFromEdge = Symbol('nodeFromEdge')
const _nodeFromSpec = Symbol('nodeFromSpec')
const _loadPeerSet = Symbol('loadPeerSet')
// shared symbols so we can hit them with unit tests
const _updateNames = Symbol.for('updateNames')
const _placeDep = Symbol.for('placeDep')
const _canPlaceDep = Symbol.for('canPlaceDep')
const _canPlacePeers = Symbol('canPlacePeers')
const _pruneForReplacement = Symbol('pruneForReplacement')
const _fixDepFlags = Symbol('fixDepFlags')
const _rootNodeFromPackage = Symbol('rootNodeFromPackage')
const _addRm = Symbol('addRm')
const _explicitRequests = Symbol('explicitRequests')
const _queueNamedUpdates = Symbol('queueNamedUpdates')
const _shouldUpdateNode = Symbol('shouldUpdateNode')
const _resetDepFlags = Symbol('resetDepFlags')

// used by Reify mixin
const _idealTreePrune = Symbol.for('idealTreePrune')

const Virtual = require('./load-virtual.js')
const Actual = require('./load-actual.js')

module.exports = cls => class IdealTreeBuilder extends Virtual(Actual(cls)) {
  constructor (options) {
    super(options)

    // normalize trailing slash
    const registry = options.registry || 'https://registry.npmjs.org'
    options.registry = this.registry = registry.replace(/\/+$/, '') + '/'

    this.idealTree = null

    this[_explicitRequests] = new Set()
    this[_preferDedupe] = false
    this[_legacyBundling] = false
    this[_depsSeen] = new Set()
    this[_depsQueue] = []
    this[_updateNames] = []
    this[_updateAll] = false
    this[_mutateTree] = false
  }

  // public method
  buildIdealTree (options = {}) {
    if (this.idealTree) {
      return this.idealTree
    }

    // first get the virtual tree, if possible.  If there's a lockfile, then
    // that defines the ideal tree, unless the root package.json is not
    // satisfied by what the ideal tree provides.
    // from there, we start adding nodes to it to satisfy the deps requested
    // by the package.json in the root.

    this[_parseSettings](options)

    return this[_initTree]()
      .then(() => this[_applyUserRequests](options))
      .then(() => this[_buildDeps]())
      .then(() => this[_fixDepFlags]())
      .then(() => this.idealTree)
  }

  [_parseSettings] (options) {
    const update = options.update === true ? { all: true }
      : Array.isArray(options.update) ? { names: options.update }
      : options.update || {}

    if (update.all || !Array.isArray(update.names))
      update.names = []

    this[_preferDedupe] = !!options.preferDedupe
    this[_legacyBundling] = !!options.legacyBundling
    this[_updateNames] = update.names
    this[_updateAll] = update.all
    // we prune by default unless explicitly set to boolean false
    this[_prune] = options.prune !== false

    // set if we add anything, but also set here if we know we'll make
    // changes and thus have to maybe prune later.
    this[_mutateTree] = !!(
      options.add ||
      options.rm ||
      update.all ||
      update.names.length
    )

  }

  // load the initial tree, either the virtualTree from a shrinkwrap,
  // or just the root node from a package.json
  [_initTree] () {
    return rpj(this.path + '/package.json')
      .then(pkg => this[_rootNodeFromPackage](pkg))
      // ok to not have a virtual tree.  probably initial install.
      // When updating all, we load the shrinkwrap, but don't bother
      // to build out the full virtual tree from it, since we'll be
      // reconstructing it anyway.
      .then(root => this[_updateAll]
        ? Shrinkwrap.load({ path: this.path }).then(meta => {
            meta.reset()
            root.meta = meta
            return root
        })
        : this.loadVirtual({ root }))

      .then(tree => {
        // null the virtual tree, because we're about to hack away at it
        // if you want another one, load another copy.
        this.idealTree = tree
        this.virtualTree = null
      })
  }

  [_rootNodeFromPackage] (pkg) {
    return new Node({
      path: this.path,
      pkg,
      extraneous: false,
      dev: false,
      devOptional: false,
      optional: false,
    })
  }

  // process the add/rm requests by modifying the root node, and the
  // update.names request by queueing nodes dependent on those named.
  [_applyUserRequests] (options) {
    // these just add and remove to/from the root node
    // but both mean we have to do a full walk, not just fixing problems
    // and stopping when we no longer see any problems.
    if (options.add || options.rm)
      this[_addRm](options)

    // get the list of deps that we're explicitly requesting, so that
    // 'npm install foo' will reinstall, even if we already have it.
    if (options.add) {
      for (const [type, specs] of Object.entries(options.add)) {
        if (type === 'dependencies' || type === 'devDependencies' ||
            type === 'optionalDependencies' || type === 'peerDependencies') {
          for (const name of Object.keys(options.add[type])) {
            this[_explicitRequests].add(name)
          }
        }
      }
    }

    // If we have a list of package names to update, and we know it's
    // going to update them wherever they are, add any paths into those
    // named nodes to the buildIdealTree queue.
    if (this[_updateNames].length)
      this[_queueNamedUpdates]()
  }

  [_addRm] ({ add, rm }) {
    const pkg = this.idealTree.package
    if (rm && rm.length)
      addRmPkgDeps.rm(pkg, rm)
    if (add)
      addRmPkgDeps.add(pkg, add)
    // triggers a refresh of all edgesOut
    this.idealTree.package = pkg
  }

  [_queueNamedUpdates] () {
    const names = this[_updateNames]
    // ignore top nodes, since they are not loaded the same way, and
    // probably have their own project associated with them.

    // for every node with one of the names on the list, we add its
    // dependents to the queue to be evaluated.  in buildDepStem,
    // anything on the update names list will get refreshed, even if
    // it isn't a problem.

    const set = this.idealTree.inventory
      .filter(n => this[_shouldUpdateNode](n))
    for (const node of set) {
      for (const edge of node.edgesIn) {
        this[_depsQueue].push(edge.from)
      }
    }
  }

  [_shouldUpdateNode] (node) {
    return this[_updateNames].includes(node.name) &&
      !node.isTop &&
      !node.inBundle &&
      !node.inShrinkwrap
  }


  // at this point we have a virtual tree with the actual root node's
  // package deps, which may be partly or entirely incomplete, invalid
  // or extraneous.
  [_buildDeps] (node) {
    this[_depsQueue].push(this.idealTree)

    return this[_buildDepStep]()
  }

  [_buildDepStep] () {
    if (!this[_depsQueue].length)
      return

    // sort physically shallower deps up to the front of the queue,
    // because they'll affect things deeper in, then alphabetical
    this[_depsQueue].sort((a, b) =>
      (a.depth - b.depth) || a.path.localeCompare(b.path))

    const node = this[_depsQueue].shift()

    // if the node was already visited, or has since been removed from the
    // tree, skip over it and process the rest of the queue.  If a node has
    // a shrinkwrap, also skip it, because it's going to get its deps
    // satisfied by whatever's in that file anyway.
    if (this[_depsSeen].has(node) ||
        node.root !== this.idealTree ||
        node.hasShrinkwrap)
      return this[_buildDepStep]()

    this[_depsSeen].add(node)

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
    //
    // Set `preferDedupe: true` in the options to replace the shallower
    // dep if allowed.

    // skip over any bundled deps, they're not our problem.
    // Note that this WILL fetch bundled meta-deps which are also dependencies
    // but not listed as bundled deps.  When reifying, we first unpack any
    // nodes that have bundleDependencies, then do a loadActual on them, move
    // the nodes into the ideal tree, and then prune.  So, fetching those
    // possibly-bundled meta-deps at this point doesn't cause any worse
    // problems than a few unnecessary packument fetches.
    const bd = node.isRoot ? null : node.package.bundleDependencies
    const bundled = new Set(bd || [])

    const problems = [...node.edgesOut.values()]
      .filter(edge => !bundled.has(edge.name) &&
        !(edge.to && edge.to.inShrinkwrap) &&
        (!edge.valid || this[_updateNames].includes(edge.name) ||
          node.isRoot && this[_explicitRequests].has(edge.name)))

    return Promise.all(
      // resolve all the edges into nodes using pacote.manifest
      // return a {dep,edge} object so that we can track the reason
      // for this node through the parallelized async operation.
      // note that dep.edgesOut will have all its peer deps resolved,
      // since they're relevant in the calculation about where to place
      // the new and/or updated dependency.
      problems.map(edge => this[_nodeFromEdge](edge)
        .then(dep => ({edge, dep})))
    )

    .then(tasks =>
      tasks.sort((a, b) => a.edge.name.localeCompare(b.edge.name))
        .map(({ edge, dep }) => this[_placeDep](dep, node, edge)))

    .then(placed => {
      for (const set of placed) {
        for (const node of set) {
          this[_mutateTree] = true
          this[_depsQueue].push(node)
        }
      }
      return this[_buildDepStep]()
    })
  }

  // loads a node from an edge, and then loads its peer deps (and their
  // peer deps, on down the line) into a virtual root parent.
  [_nodeFromEdge] (edge, parent) {
    // create a virtual root node with the same deps as the node that
    // is requesting this one, so that we can get all the peer deps in
    // a context where they're likely to be resolvable.
    parent = parent || new Node({
      path: '/virtual-root',
      pkg: edge.from.package,
    })
    const spec = npa.resolve(edge.name, edge.spec, edge.from.path)
    return this[_nodeFromSpec](edge.name, spec, parent)
      .then(node => this[_loadPeerSet](node))
  }

  [_nodeFromSpec] (name, spec, parent) {
    // pacote will slap integrity on its options, so we have to clone
    // the object so it doesn't get mutated.
    // Don't bother to load the manifest for link deps, because the target
    // might be within another package that doesn't exist yet.
    return spec.type === 'directory'
      ? Promise.resolve(new Link({ name, parent, realpath: spec.fetchSpec }))
      : pacote.manifest(spec, Object.create(this.options))
        .then(pkg => new Node({ name, pkg, parent }))
  }

  // load all peer deps and meta-peer deps into the node's parent
  // At the end of this, the node's peer-type outward edges are all
  // resolved, and so are all of theirs, but other dep types are not.
  // We prefer to get peer deps that meet the requiring node's dependency,
  // if possible, since that almost certainly works (since that package was
  // developed with this set of deps) and will typically be more restrictive.
  [_loadPeerSet] (node) {
    const peerEdges = [...node.edgesOut.values()]
      .filter(e => e.peer && !e.valid)
      .map(e => node.parent && node.parent.edgesOut.get(e.name) || e)
    return Promise.all(
      peerEdges.map(edge => this[_nodeFromEdge](edge, node.parent))
    ).then(() => node)
  }

  // starting from either node, or in the case of non-root peer deps,
  // the node's parent, walk up the tree until we find the first spot
  // where this dep cannot be placed, and use the one right before that.
  // place dep, requested by node, to satisfy edge
  [_placeDep] (dep, node, edge, peerEntryEdge = null) {
    if (!edge.error && !this[_updateNames].includes(edge.name))
      return []

    // top nodes should still get peer deps from their parent or fsParent
    // if possible, and only install locally if there's no other option,
    // eg for a link outside of the project root.
    const start = edge.peer && !node.isRoot
      ? node.resolveParent || node
      : node

    let target
    let canPlace = null
    for (let check = start; check; check = check.resolveParent) {
      const cp = this[_canPlaceDep](dep, check, edge, peerEntryEdge)
      // anything other than a conflict is fine to proceed with
      if (cp !== CONFLICT) {
        canPlace = cp
        target = check
      } else
        break

      // nest packages like npm v1 and v2
      // very disk-inefficient
      if (this[_legacyBundling])
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

    // Can only get KEEP here if the original edge was valid,
    // and we're checking for an update but it's already up to date.
    if (canPlace === KEEP) {
      dep.parent = null
      return []
    }

    // figure out which of this node's peer deps will get placed as well
    const virtualRoot = dep.parent

    const placed = [dep]
    const oldChild = target.children.get(edge.name)
    if (oldChild) {
      // if we're replacing, we should also remove any nodes for edges that
      // are now invalid, and where this (or its deps) is the only dependent,
      // and also recurse on that pruning.  Otherwise leaving that dep node
      // around can result in spurious conflicts pushing nodes deeper into
      // the tree than needed in the case of cycles that will be removed
      // later anyway.
      const oldDeps = []
      for (const [name, edge] of oldChild.edgesOut.entries()) {
        if (!dep.edgesOut.has(name) && edge.to) {
          oldDeps.push(edge.to)
        }
      }
      dep.replace(oldChild)
      this[_pruneForReplacement](dep, oldDeps)
    } else
      dep.parent = target

    // If the edge is not an error, then we're updating something, and
    // MAY end up putting a better/identical node further up the tree in
    // a way that causes an unnecessary duplication.  If so, remove the
    // now-unnecessary node.
    if (edge.valid && edge.to.parent !== target && dep.canReplace(edge.to)) {
      edge.to.parent = null
    }

    // visit any dependents who are upset by this change
    for (const edge of dep.edgesIn) {
      if (!edge.valid)
        this[_depsQueue].push(edge.from)
    }

    // in case we just made some duplicates that can be removed,
    // prune anything deeper in the tree that can be replaced by this
    if (this.idealTree) {

      for (const node of this.idealTree.inventory.query('name', dep.name)) {
        if (node !== dep &&
            node.isDescendantOf(target) &&
            !node.inShrinkwrap &&
            !node.inBundle &&
            node.canReplaceWith(dep)) {

          // don't prune if the is dupe necessary!
          // root (a, d)
          // +-- a (b, c2)
          // |   +-- b (c2) <-- place c2 for b, lands at root
          // +-- d (e)
          //     +-- e (c1, d)
          //         +-- c1
          //         +-- f (c2)
          //             +-- c2 <-- pruning this would be bad

          const mask = node.parent !== target &&
            node.parent.parent !== target &&
            node.parent.parent.resolve(dep.name)

          if (!mask || mask === dep || node.canReplaceWith(mask))
            node.parent = null
        }
      }
    }

    // also place its unmet or invalid peer deps at this location
    // note that dep has now been removed from the virtualRoot set
    // by virtue of being placed in the target's node_modules.
    if (virtualRoot) {
      for (const peerEdge of dep.edgesOut.values()) {
        if (peerEdge.peer && !peerEdge.valid) {
          const peer = virtualRoot.children.get(peerEdge.name)
          const peerPlaced = this[_placeDep](
            peer, dep, peerEdge, peerEntryEdge || edge)
          placed.push(...peerPlaced)
        }
      }
    }

    return placed
  }

  [_pruneForReplacement] (node, oldDeps) {
    // remove this node because the only thing depending on it is being
    // replaced, and also remove any nodes for which the only thing depending
    // on them is the node being replaced, or a node being pruned.
    // - for all invalid/extra edgesOut of initial node, add target to set
    // - for each node in set:
    //   - add all edgesOut to set that are not already in set
    // - for each node in set:
    //   - if any edgesIn are from nodes not in the set, remove from set
    //   - continue until set is empty or no changes made
    // - remove all nodes still in the set
    const set = new Set([...node.edgesOut.values()]
      .filter(e => e.to && !e.valid).map(e => e.to))

    // also include the old dep's edges, since they may have changed.
    oldDeps.forEach(d => set.add(d))

    // build up the set
    for (const dep of set) {
      for (const edge of dep.edgesOut.values()) {
        if (edge.to && edge.to !== node)
          set.add(edge.to)
      }
    }

    // figure out which ones are safe to prune
    // XXX: this is just brutal algorithmically.  we're looping over the
    // entire set of metadeps, times the number of edgesIn for each, and
    // re-checking whenever a link is found from outside the set.  There
    // HAS to be another way to do this.  Yes, n is small, but it can
    // quickly explode to tens or hundreds of thousands of checks if
    // you're updating a popular module that's shallow in the dep tree.
    // The set itself will be limited to the overall dep count (~2-5k nodes),
    // but the edge checking turns this into an O(n!) worst case.
    let changed = true
    while (changed === true && set.size > 0) {
      // loop until no changes made or until the set evaporates
      changed = false
      for (const dep of set) {
        for (const edge of dep.edgesIn) {
          if (!set.has(edge.from) && edge.from !== node) {
            // dep has dependent from outside the set
            changed = true
            set.delete(dep)
            break
          }
        }
      }
    }

    // now just delete whatever's left, because it's junk
    for (const node of set) {
      node.parent = null
    }
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
  //
  // Check peers on OK or REPLACE.  KEEP and CONFLICT do not require peer
  // checking, because either we're leaving it alone, or it won't work anyway.
  // When we check peers, we pass along the peerEntryEdge to track the
  // original edge that caused us to load the family of peer dependencies.
  [_canPlaceDep] (dep, target, edge, peerEntryEdge = null) {
    // peer deps of root deps are effectively root deps
    const isRootDep = target.isRoot && (
      // a direct dependency from the root node
      edge.from === target ||
      // a member of the peer set of a direct root dependency
      peerEntryEdge && peerEntryEdge.from === target
    )

    const entryEdge = peerEntryEdge || edge

    // has child by that name already
    if (target.children.has(dep.name)) {
      const current = target.children.get(dep.name)
      // if the integrities match, then it's literally the same exact bytes,
      // even if it came from somewhere else.
      if (dep.integrity && dep.integrity === current.integrity) {
        return KEEP
      }

      // we can always place the root's deps in the root nm folder
      if (isRootDep) {
        return this[_canPlacePeers](dep, target, edge, REPLACE, peerEntryEdge)
      }

      // if the version is greater, try to use the new one
      const curVer = current.package.version
      const newVer = dep.package.version
      // always try to replace if the version is greater
      const tryReplace = curVer && newVer && semver.gte(newVer, curVer)
      if (tryReplace && current.canReplaceWith(dep)) {
        return this[_canPlacePeers](dep, target, edge, REPLACE, peerEntryEdge)
      }

      // ok, see if the current one satisfies the edge we're working on then
      if (edge.satisfiedBy(current)) {
        return KEEP
      }

      // last try, if we prefer deduplication over novelty, check to see if
      // this (older) dep can satisfy the needs of the less nested instance
      if (this[_preferDedupe] && current.canReplaceWith(dep)) {
        return this[_canPlacePeers](dep, target, edge, REPLACE, peerEntryEdge)
      }

      // no agreement could be reached :(
      return CONFLICT
    }

    // check to see if the target DOESN'T have a child by that name,
    // but DOES have a conflicting dependency of its own.  no need to check
    // if this is the edge we're already looking to resolve!
    if (target !== entryEdge.from && target.edgesOut.has(dep.name)) {
      const edge = target.edgesOut.get(dep.name)
      // It might be that the dep would not be valid here, BUT some other
      // version would.  Could to try to resolve that, but that makes this no
      // longer a pure synchronous function.  ugh.
      // This is a pretty unlikely scenario in a normal install, because we
      // resolve the peer dep set against the parent dependencies, and
      // presumably they all worked together SOMEWHERE to get published in the
      // first place, and since we resolve shallower deps before deeper ones,
      // this can only occur by a child having a peer dep that does not satisfy
      // the parent.  It can happen if we're doing a deep update limited by
      // a specific name, however, or if a dep makes an incompatible change
      // to its peer dep in a non-semver-major version bump, or if the parent
      // is unbounded in its dependency list.
      if (!edge.satisfiedBy(dep)) {
        return CONFLICT
      }
    }

    // check to see what the name resolves to here, and who depends on it
    // and if they'd be ok with the new dep being there instead.  we know
    // at this point that it's not the target's direct child node.  this is
    // only a check we do when deduping.  if it's a direct dep of the target,
    // then we just make the invalid edge and resolve it later.
    const current = target !== entryEdge.from && target.resolve(dep.name)
    if (current) {
      for (const edge of current.edgesIn.values()) {
        if (edge.from.isDescendantOf(target) && edge.valid) {
          if (!edge.satisfiedBy(dep)) {
            return CONFLICT
          }
        }
      }
    }

    return this[_canPlacePeers](dep, target, edge, OK, peerEntryEdge)
  }

  // make sure the family of peer deps can live here alongside it.
  // this doesn't guarantee that THIS solution will be the one we take,
  // but it does establish that SOME solution exists at this level in
  // the tree.
  [_canPlacePeers] (dep, target, edge, ret, peerEntryEdge) {
    if (!dep.parent || peerEntryEdge)
      return ret

    for (const peer of dep.parent.children.values()) {
      if (peer !== dep) {
        const peerEdge = dep.edgesOut.get(peer.name) ||
          [...peer.edgesIn].find(e => e.peer)
        /* istanbul ignore else - pretty sure this is impossible, but just
           being cautious */
        if (peerEdge) {
          const canPlacePeer = this[_canPlaceDep](peer, target, peerEdge, edge)
          if (canPlacePeer === CONFLICT)
            return CONFLICT
        }
      }
    }

    return ret
  }

  [_fixDepFlags] () {
    const metaFromDisk = this.idealTree.meta.loadedFromDisk
    // if the options set prune:false, then we don't prune, but we still
    // mark the extraneous items in the tree if we modified it at all.
    // If we did no modifications, we just iterate over the extraneous nodes.
    // if we started with an empty tree, then the dep flags are already
    // all set to true, and there can be nothing extraneous, so there's
    // nothing to prune, because we built it from scratch.  if we didn't
    // add or remove anything, then also nothing to do.
    if (metaFromDisk && this[_mutateTree])
      this[_resetDepFlags]()

    // update all the dev/optional/etc flags in the tree
    // either we started with a fresh tree, or we
    // reset all the flags to find the extraneous nodes.
    //
    // if we started from a blank slate, or changed something, then
    // the dep flags will be all set to true.
    if (!metaFromDisk || this[_mutateTree])
      calcDepFlags(this.idealTree)
    else {
      // otherwise just unset all the flags on the root node
      // since they will sometimes have the default value
      this.idealTree.extraneous = false
      this.idealTree.dev = false
      this.idealTree.optional = false
      this.idealTree.devOptional = false
    }

    // at this point, any node marked as extraneous should be pruned.
    // if we started from a shrinkwrap, and then added/removed something,
    // then the tree is suspect.  Prune what is marked as extraneous.
    // otherwise, don't bother.
    if (this[_prune] && metaFromDisk && this[_mutateTree]) {
      this[_idealTreePrune]()
    }
  }

  [_idealTreePrune] () {
    for (const node of this.idealTree.inventory.filter(n => n.extraneous)) {
      node.parent = null
    }
  }

  // we'll need to actually do a walk from the root, because you can have
  // a cycle of deps that all depend on each other, but no path from root.
  // Also, since the ideal tree is loaded from the shrinkwrap, it had
  // extraneous flags set false that might now be actually extraneous, and
  // dev/optional flags that are also now incorrect.  This method sets
  // all flags to true, and returns the set that is actually extraneous.
  [_resetDepFlags] () {
    const tree = this.idealTree
    const marked = new Set()
    for (const node of this.idealTree.inventory.values()) {
      node.extraneous = true
      node.dev = true
      node.devOptional = true
      node.optional = true
    }
  }
}

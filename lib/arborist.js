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

/* istanbul ignore next */
const dassert = /\barborist\b/.test(process.env.NODE_DEBUG || '')
  ? require('assert') : () => {}

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
      preferDedupe = false,
      legacyBundling = false
    } = options
    super()
    this.options = options
    this.preferDedupe = !!preferDedupe
    this.legacyBundling = !!legacyBundling
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

    this.buildIdealDepsSeen = new Set()
    this.buildIdealDepsQueue = []
    this.buildIdealTreeUpdateSettings = {}
  }

  buildIdealTree (options = {}) {
    // first get the virtual tree, if possible.  If there's a lockfile, then
    // that defines the ideal tree, unless the root package.json is not
    // satisfied by what the ideal tree provides.
    // from there, we start adding nodes to it to satisfy the deps requested
    // by the package.json in the root.
    const update = options.update === true ? { all: true }
      : Array.isArray(options.update) ? { names: options.update }
      : options.update || {}

    if (update.all || !Array.isArray(update.names))
      update.names = []

    this.buildIdealTreeUpdateSettings = update

    // set if we make any changes, but also if we know we will
    this.mutateIdealTree = !!(
      options.add ||
      options.rm ||
      update.all ||
      update.names.length
    )

    return rpj(this.path + '/package.json')
      .then(pkg => this.rootNodeFromPackage(pkg))
      // ok to not have a virtual tree.  probably initial install.
      // When updating all, we load the shrinkwrap, but don't bother
      // to build out the full virtual tree from it, since we'll be
      // reconstructing it anyway.
      .then(root => update.all
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

      // these just add and remove to/from the root node
      // but both mean we have to do a full walk, not just fixing problems
      // and stopping when we no longer see any problems.
      .then(() => {
        if (options.add || options.rm)
          this.idealTreeAddRm(options)
      })

      // If we have a list of package names to update, and we know it's
      // going to update them wherever they are, add any paths into those
      // named nodes to the buildIdealTree queue.
      .then(() => {
        if (update.names.length)
          this.idealTreeQueueNamedUpdates(update.names)
      })

      // at this point we have a virtual tree with the actual root node's
      // package deps, which may be partly or entirely incomplete, invalid
      // or extraneous.
      .then(() => this.buildIdealDeps(this.idealTree))

      // if the options set prune:false, then we don't prune, but we still
      // mark the extraneous items in the tree if we modified it at all.
      // If we did no modifications, we just iterate over the extraneous nodes.
      .then(() => {
        // if we started with an empty tree, then the dep flags are already
        // all set to true, and there can be nothing extraneous, so there's
        // nothing to prune, because we built it from scratch.  if we didn't
        // add or remove anything, then also nothing to do.
        if (this.idealTree.meta.loadedFromDisk && this.mutateIdealTree)
          this.idealTreeResetDepFlags()
      })

      // update all the dev/optional/etc flags in the tree
      // This works because either we started with a fresh tree, or we
      // reset all the flags to find the extraneous nodes.
      .then(() => {
        // if we started from a blank slate, or changed something, then
        // the dep flags will be all set to true.
        if (!this.idealTree.meta.loadedFromDisk || this.mutateIdealTree)
          calcDepFlags(this.idealTree)
        else {
          // otherwise just unset all the flags on the root node
          // since they will sometimes have the default value
          this.idealTree.extraneous = false
          this.idealTree.dev = false
          this.idealTree.optional = false
          this.idealTree.devOptional = false
        }
      })

      .then(() => {
        // at this point, any node marked as extraneous should be pruned.
        // if we started from a shrinkwrap, and then added/removed something,
        // then the tree is suspect.  Prune what is marked as extraneous.
        // otherwise, don't bother.
        if (options.prune !== false &&
            this.idealTree.meta.loadedFromDisk &&
            this.mutateIdealTree)
          this.idealTreePrune()
      })
      .then(() => this.idealTree)
  }

  idealTreeQueueNamedUpdates (names) {
    // XXX ignore top nodes, since they are not loaded the same way, and
    // probably have their own project associated with them?

    // for every node with one of the names on the list, we add its
    // dependents to the queue to be evaluated.  in buildIdealDepsStep,
    // anything on the update names list will get refreshed, even if
    // it isn't a problem.
    const updateNode = node => names.includes(node.name) &&
      !node.inBundle && !node.inShrinkwrap
    for (const node of this.idealTree.inventory.filter(updateNode)) {
      for (const edge of node.edgesIn) {
        this.buildIdealDepsQueue.push(edge.from)
      }
    }
  }

  idealTreeAddRm (options) {
    // XXX if adding to one kind of dependency set, remove from others
    const pkg = this.idealTree.package
    const {add = {}, rm = []} = options

    for (const type of [
      'dependencies',
      'optionalDependencies',
      'peerDependencies',
      'peerDependenciesMeta',
      'devDependencies',
    ]) {
      for (const name of rm) {
        if (pkg[type])
          delete pkg[type][name]
      }
    }
    if (pkg.bundleDependencies) {
      pkg.bundleDependencies = pkg.bundleDependencies
        .filter(name => !rm.includes(name))
    }

    for (const [type, specs] of Object.entries(add)) {
      if (type === 'bundleDependencies') {
        pkg.bundleDependencies = pkg.bundleDependencies || []
        pkg.bundleDependencies.push(...specs)
      } else {
        // XXX: need to use the existing value if it's '', and
        // take note of the saveSpec so we can save with the ^ or ~,
        // or the shorthand for hosted git repos.
        for (const [name, spec] of Object.entries(specs)) {
          pkg[type] = pkg[type] || {}
          pkg[type][name] = spec
        }
      }
    }

    // triggers a refresh of all edgesOut
    this.idealTree.package = pkg
  }

  // we'll need to actually do a walk from the root, because you can have
  // a cycle of deps that all depend on each other, but no path from root.
  // Also, since the ideal tree is loaded from the shrinkwrap, it had
  // extraneous flags set false that might now be actually extraneous, and
  // dev/optional flags that are also now incorrect.  This method sets
  // all flags to true, and returns the set that is actually extraneous.
  idealTreeResetDepFlags () {
    const tree = this.idealTree
    const marked = new Set()
    for (const node of this.idealTree.inventory.values()) {
      node.extraneous = true
      node.dev = true
      node.devOptional = true
      node.optional = true
    }
  }

  idealTreePrune () {
    for (const node of this.idealTree.inventory.filter(n => n.extraneous)) {
      node.parent = null
    }
  }

  rootNodeFromPackage (pkg) {
    return new Node({
      path: this.path,
      pkg,
      extraneous: false,
      dev: false,
      devOptional: false,
      optional: false,
    })
  }

  buildIdealDeps (node) {
    this.buildIdealDepsQueue.push(node)

    return this.buildIdealDepsStep()
  }

  buildIdealDepsStep () {
    if (!this.buildIdealDepsQueue.length)
      return

    // sort physically shallower deps up to the front of the queue,
    // because they'll affect things deeper in, then alphabetical
    this.buildIdealDepsQueue.sort((a, b) =>
      (a.depth - b.depth) || a.path.localeCompare(b.path))

    const node = this.buildIdealDepsQueue.shift()

    // if the node was already visited, or has since been removed from the
    // tree, skip over it and process the rest of the queue.  If a node has
    // a shrinkwrap, also skip it, because it's going to get its deps
    // satisfied by whatever's in that file anyway.
    if (this.buildIdealDepsSeen.has(node) ||
        node.root !== this.idealTree ||
        node.hasShrinkwrap)
      return this.buildIdealDepsStep()

    this.buildIdealDepsSeen.add(node)

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
    // Set `preferDedupe: true` in the ctor options to replace the shallower
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
    const updateNames = this.buildIdealTreeUpdateSettings.names

    const problems = [...node.edgesOut.values()]
      .filter(edge => !bundled.has(edge.name) &&
        !(edge.to && edge.to.inShrinkwrap) &&
        (!edge.valid || updateNames.includes(edge.name)))

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

    .then(tasks =>
      tasks.sort((a, b) => a.edge.name.localeCompare(b.edge.name))
        .map(({ edge, dep }) => this.placeIdealDep(dep, node, edge)))

    .then(placed => {
      for (const set of placed) {
        for (const node of set) {
          this.mutateIdealTree = true
          this.buildIdealDepsQueue.push(node)
        }
      }
      return this.buildIdealDepsStep()
    })
  }

  // starting from either node, or in the case of non-root peer deps,
  // the node's parent, walk up the tree until we find the first spot
  // where this dep cannot be placed, and use the one right before that.
  // place dep, requested by node, to satisfy edge
  placeIdealDep (dep, node, edge, peerEntryEdge = null) {
    const updateNames = this.buildIdealTreeUpdateSettings.names || []
    if (!edge.error && !updateNames.includes(edge.name))
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
      const cp = this.canPlaceDep(dep, check, edge, peerEntryEdge)
      // anything other than a conflict is fine to proceed with
      if (cp !== placeDep_CONFLICT) {
        canPlace = cp
        target = check
      } else
        break

      // nest packages like npm v1 and v2
      // very disk-inefficient
      if (this.legacyBundling)
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

    // Can only get placeDep_KEEP here if the original edge was valid,
    // and we're checking for an update but it's already up to date.
    if (canPlace === placeDep_KEEP) {
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
      this.pruneForReplacement(dep, oldDeps)
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
        this.buildIdealDepsQueue.push(edge.from)
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
          const peerPlaced = this.placeIdealDep(
            peer, dep, peerEdge, peerEntryEdge || edge)
          placed.push(...peerPlaced)
        }
      }
    }

    return placed
  }

  pruneForReplacement (node, oldDeps) {
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
  canPlaceDep (dep, target, edge, peerEntryEdge = null) {
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
        return placeDep_KEEP
      }

      // we can always place the root's deps in the root nm folder
      if (isRootDep) {
        return this.canPlacePeers(dep, target, edge, placeDep_REPLACE, peerEntryEdge)
      }

      // if the version is greater, try to use the new one
      const curVer = current.package.version
      const newVer = dep.package.version
      // always try to replace if the version is greater
      const tryReplace = curVer && newVer && semver.gte(newVer, curVer)
      if (tryReplace && current.canReplaceWith(dep)) {
        return this.canPlacePeers(dep, target, edge, placeDep_REPLACE, peerEntryEdge)
      }

      // ok, see if the current one satisfies the edge we're working on then
      if (edge.satisfiedBy(current)) {
        return placeDep_KEEP
      }

      // last try, if we prefer deduplication over novelty, check to see if
      // this (older) dep can satisfy the needs of the less nested instance
      if (this.preferDedupe && current.canReplaceWith(dep)) {
        return this.canPlacePeers(dep, target, edge, placeDep_REPLACE, peerEntryEdge)
      }

      // no agreement could be reached :(
      return placeDep_CONFLICT
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
        return placeDep_CONFLICT
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
            return placeDep_CONFLICT
          }
        }
      }
    }

    return this.canPlacePeers(dep, target, edge, placeDep_OK, peerEntryEdge)
  }

  // make sure the family of peer deps can live here alongside it.
  // this doesn't guarantee that THIS solution will be the one we take,
  // but it does establish that SOME solution exists at this level in
  // the tree.
  canPlacePeers (dep, target, edge, ret, peerEntryEdge) {
    if (!dep.parent || peerEntryEdge)
      return ret

    for (const peer of dep.parent.children.values()) {
      if (peer !== dep) {
        const peerEdge = dep.edgesOut.get(peer.name) ||
          [...peer.edgesIn].find(e => e.peer)
        /* istanbul ignore else - pretty sure this is impossible, but just
           being cautious */
        if (peerEdge) {
          const canPlacePeer = this.canPlaceDep(peer, target, peerEdge, edge)
          if (canPlacePeer === placeDep_CONFLICT)
            return placeDep_CONFLICT
        }
      }
    }

    return ret
  }

  newNodeFromSpec (name, spec, parent) {
    // pacote will slap integrity on its options, so we have to clone
    // the object so it doesn't get mutated.
    // Don't bother to load the manifest for link deps, because the target
    // might be within another package that doesn't exist yet.
    return spec.type === 'directory'
      ? Promise.resolve(new Link({ name, parent, realpath: spec.fetchSpec }))
      : pacote.manifest(spec, Object.create(this.options))
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
    const spec = npa.resolve(edge.name, edge.spec, edge.from.path)
    return this.newNodeFromSpec(edge.name, spec, parent)
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
        const link = this.loadVirtualLink(location, targetLoc, target, meta)
        nodes.set(location, link)
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
        if (parent) {
          node[ name === node.name ? 'parent' : 'fsParent' ] = parent
          // read inBundle from package because 'package' here is
          // actually a v2 lockfile metadata entry.
          if (node.package.inBundle && parent.edgesOut.has(name)) {
            const ppkg = parent.package
            if (!ppkg.bundleDependencies)
              ppkg.bundleDependencies = [name]
            else
              ppkg.bundleDependencies.push(name)
          }
        }
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
      hasShrinkwrap: sw.hasShrinkwrap,
    })
    // cast to boolean because they're undefined in the lock file when false
    node.extraneous = !!sw.extraneous
    node.devOptional = !!(sw.devOptional || sw.dev || sw.optional)
    node.optional = !!sw.optional
    node.dev = !!sw.dev
    return node
  }

  loadVirtualLink (location, targetLoc, target, meta) {
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
    } else {
      // probably only had a legacy shrinkwrap.  assume that it
      // ought to be here.
      link.extraneous = link.target.extraneous = !!meta.extraneous
      link.optional = link.target.optional = !!meta.optional
      link.dev = link.target.dev = !!meta.dev
      link.devOptional = link.target.devOptional =
        !!meta.devOptional ||
        !!meta.dev ||
        !!meta.optional
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
    const shrinkwrapOnly = !!parent
    const p = Shrinkwrap.load({
      path: real,
      shrinkwrapOnly,
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
            hasShrinkwrap: meta && shrinkwrapOnly,
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
}

module.exports = Arborist

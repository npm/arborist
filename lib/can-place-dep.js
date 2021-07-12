// Internal methods used by buildIdealTree.
// Answer the question: "can I put this dep here?"
//
// IMPORTANT: *nothing* in this class should *ever* modify or mutate the tree
// at all.  The contract here is strictly limited to read operations.  We call
// this in the process of walking through the ideal tree checking many
// different potential placement targets for a given node.  If a change is made
// to the tree along the way, that can cause serious problems!
//
// In order to enforce this restriction, in debug mode, canPlaceDep() will
// snapshot the tree at the start of the process, and then at the end, will
// verify that it still matches the snapshot, and throw an error if any changes
// occurred.
//
// The algorithm is roughly like this:
// - check the node itself:
//   - if there is no version present, and no conflicting edges from target,
//     OK, provided all peers can be placed at or above the target.
//   - if the current version matches, KEEP
//   - if there is an older version present, which can be replaced, then
//     - if satisfying and preferDedupe? KEEP
//     - else: REPLACE
//   - if there is a newer version present, and preferDedupe, REPLACE
//   - if the version present satisfies the edge, KEEP
//   - else: CONFLICT
// - if the node is not in conflict, check each of its peers:
//   - if the peer can be placed in the target, continue
//   - else if the peer can be placed in a parent, and there is no other
//     conflicting version shadowing it, continue
//   - else CONFLICT
// - If the peers are not in conflict, return the original node's value
//
// An exception to this logic is that if the target is the deepest location
// that a node can be placed, and the conflicting node can be placed deeper,
// then we will return REPLACE rather than CONFLICT, and Arborist will queue
// the replaced node for resolution elsewhere.

const semver = require('semver')
const debug = require('./debug.js')
const peerEntrySets = require('./peer-entry-sets.js')
const deepestNestingTarget = require('./deepest-nesting-target.js')

const CONFLICT = Symbol('CONFLICT')
const OK = Symbol('OK')
const REPLACE = Symbol('REPLACE')
const KEEP = Symbol('KEEP')

class CanPlaceDep {
  // dep is a dep that we're trying to place.  it should already live in
  // a virtual tree where its peer set is loaded as children of the root.
  // target is the actual place where we're trying to place this dep
  // in a node_modules folder.
  // edge is the edge that we're trying to satisfy with this placement.
  // parent is the CanPlaceDep object of the entry node when placing a peer.
  constructor (options) {
    const {
      dep,
      target,
      edge,
      preferDedupe,
      parent = null,
      peerPath = [],
      explicitRequest = false,
    } = options

    debug(() => {
      if (!dep)
        throw new Error('no dep provided to CanPlaceDep')

      if (!target)
        throw new Error('no target provided to CanPlaceDep')

      if (!edge)
        throw new Error('no edge provided to CanPlaceDep')

      this._nodeSnapshot = JSON.stringify(dep)
      this._treeSnapshot = JSON.stringify(target.root)
    })

    // the result of whether we can place it or not
    this.canPlace = null
    // if peers conflict, but this one doesn't, then that is useful info
    this.canPlaceSelf = null

    this.dep = dep
    this.target = target
    this.edge = edge
    this.explicitRequest = explicitRequest

    // preventing cycles when we check peer sets
    this.peerPath = peerPath
    // we always prefer to dedupe peers, because they are trying
    // a bit harder to be singletons.
    this.preferDedupe = !!preferDedupe || edge.peer
    this.parent = parent
    this.children = []

    this.isSource = target === this.peerSetSource
    this.name = edge.name
    this.current = target.children.get(this.name)
    this.targetEdge = target.edgesOut.get(this.name)
    this.conflicts = new Map()

    // check if this dep was already subject to a peerDep override while
    // building the peerSet.
    this.edgeOverride = !dep.satisfies(edge)

    this.canPlace = this.checkCanPlace()
    if (!this.canPlaceSelf)
      this.canPlaceSelf = this.canPlace

    debug(() => {
      const nodeSnapshot = JSON.stringify(dep)
      const treeSnapshot = JSON.stringify(target.root)
      /* istanbul ignore if */
      if (this._nodeSnapshot !== nodeSnapshot) {
        throw Object.assign(new Error('dep changed in CanPlaceDep'), {
          expect: this._nodeSnapshot,
          actual: nodeSnapshot,
        })
      }
      /* istanbul ignore if */
      if (this._treeSnapshot !== treeSnapshot) {
        throw Object.assign(new Error('tree changed in CanPlaceDep'), {
          expect: this._treeSnapshot,
          actual: treeSnapshot,
        })
      }
    })
  }

  checkCanPlace () {
    const { name, edge, target, targetEdge, current, dep } = this

    // if the dep failed to load, we're going to fail the build or
    // prune it out anyway, so just move forward placing/replacing it.
    if (dep.errors.length)
      return current ? REPLACE : OK

    // cannot place peers inside their dependents, except for tops
    if (targetEdge && targetEdge.peer && !target.isTop)
      return CONFLICT

    if (targetEdge && !dep.satisfies(targetEdge))
      return CONFLICT

    if (current)
      return this.checkCanPlaceCurrent()
    else
      return this.checkCanPlaceNoCurrent()
  }

  // we know that the target has a dep by this name in its node_modules
  // already.  Can return KEEP, REPLACE, or CONFLICT.
  checkCanPlaceCurrent () {
    const { preferDedupe, explicitRequest, current, target, edge, dep } = this
    if (dep.matches(current)) {
      if (current.satisfies(edge) || this.edgeOverride)
        return explicitRequest ? REPLACE : KEEP
    }

    const { version: curVer } = current
    const { version: newVer } = dep
    const tryReplace = curVer && newVer && semver.gte(newVer, curVer)
    if (tryReplace && dep.canReplace(current)) {
      /* XXX-istanbul ignore else - It's extremely rare that a replaceable
       * node would be a conflict, if the current one wasn't a conflict,
       * but it is theoretically possible if peer deps are pinned.  In
       * that case we treat it like any other conflict, and keep trying */
      const cpp = this.canPlacePeers(REPLACE)
      if (cpp !== CONFLICT)
        return cpp
    }

    // ok, can't replace the current with new one, but maybe current is ok?
    if (current.satisfies(edge) && (!explicitRequest || preferDedupe))
      return KEEP

    // if we prefer deduping, then try replacing newer with older
    if (preferDedupe && !tryReplace && dep.canReplace(current)) {
      const cpp = this.canPlacePeers(REPLACE)
      if (cpp !== CONFLICT)
        return cpp
    }

    // Check for interesting cases!
    // First, is this the deepest place that this thing can go, and NOT the
    // deepest place where the conflicting dep can go?  If so, replace it,
    // and let it re-resolve deeper in the tree.
    const myDeepest = this.deepestNestingTarget

    // ok, i COULD be placed deeper, so leave the current one alone.
    if (target !== myDeepest)
      return CONFLICT

    // if we are not checking a peerDep, then we MUST place it here, in the
    // target that has a non-peer dep on it.
    if (!edge.peer && target === edge.from)
      return this.canPlacePeers(REPLACE)

    // if we aren't placing a peer in a set, then we're done here.
    if (!this.parent && !edge.peer)
      return CONFLICT

    console.error('CPD INTERESTING CASE', {
      dep: [dep.name, dep.version],
      peers: [...dep.parent.children.values()].map(p => [p.name, p.version]),
      edge: [edge.from.location, edge.type, edge.name, edge.spec],
      entryEdge: this.peerEntryEdge && this.peerEntryEdge !== edge &&
        [this.peerEntryEdge.from.location, this.peerEntryEdge.type, this.peerEntryEdge.name, this.peerEntryEdge.spec],
      current: [current.location, current.version],
    })

    // check the deps in the peer group for each edge into that peer group
    // if ALL of them can be pushed deeper, or if it's ok to replace its
    // members with the contents of the new peer group, then we're good.
    let canReplace = true
    OUTER: for (const [entryEdge, currentPeers] of peerEntrySets(current)) {
      console.error('>> check current peers', [entryEdge.from.location, entryEdge.type, entryEdge.name, entryEdge.spec],
        [...currentPeers].map(p => [p.location, p.version]))

      if (entryEdge === this.edge || entryEdge === this.peerEntryEdge) {
        console.error('>>> is the edge being replaced')
        continue
      }

      let canNestCurrent = true
      let replaced = new Set()
      for (const currentPeer of currentPeers) {
        console.error('>> currentPeer', [currentPeer.location, currentPeer.version])

        if (canNestCurrent && currentPeer !== entryEdge.to) {
          // still possible to nest this peerSet
          const curDeep = deepestNestingTarget(entryEdge.from, currentPeer.name)
          console.error('>> check nesting of peer, deepest =', [currentPeer.location, currentPeer.version, curDeep.location])
          if (curDeep === target || target.isDescendantOf(curDeep)) {
            console.error('>>> cannot nest', curDeep === target, target.isDescendantOf(curDeep), [...currentPeer.edgesIn].filter(e => e.peer).map(e => [e.from.location, e.type, e.name, e.spec]))
            canNestCurrent = false
          }
          if (canNestCurrent) {
            console.error('>>> can nest')
            continue
          }
        }

        // ok we can't nest this one, let's see if we can replace it.
        const rep = dep.parent.children.get(currentPeer.name)
        console.error('>>> check replacement', {
          current: [currentPeer.location, currentPeer.version],
          rep: rep && [rep.name, rep.version],
        })
        if (!rep || rep.canReplace(currentPeer)) {
          console.error('>>>> no replacement, or can replace, continue')
          continue
        }
        console.error('>>>> cannot replace', [...currentPeer.edgesIn].map(e => [e.from.location, e.from.version, e.type, e.name, e.spec]))
        canReplace = false
        break OUTER
      }
    }

    // if we can nest or replace all the current peer groups, we can replace.
    if (canReplace) {
      console.error('> can replace!')
      return this.canPlacePeers(REPLACE)
    }

    console.error('> cannot replace!', {
      dep: [dep.name, dep.version],
      peers: [...dep.parent.children.values()].map(p => [p.name, p.version]),
      edge: [edge.from.location, edge.type, edge.name, edge.spec],
      entryEdge: this.peerEntryEdge && this.peerEntryEdge !== edge &&
        [this.peerEntryEdge.from.location, this.peerEntryEdge.type, this.peerEntryEdge.name, this.peerEntryEdge.spec],
      current: [current.location, current.version],
    })
    return CONFLICT
  }

  checkCanPlaceNoCurrent () {
    const { target, targetEdge, peerEntryEdge, dep, name } = this

    // check to see if the target doesn't have a child by that name,
    // but WANTS one, and won't be happy with this one.  if this is the
    // edge we're looking to resolve, then not relevant, of course.
    if (targetEdge && targetEdge !== peerEntryEdge) {
      if (!dep.satisfies(targetEdge))
        return CONFLICT
    }

    // check to see what that name resolves to here, and who may depend on
    // being able to reach it by crawling up past the parent.  we know
    // that it's not the target's direct child node, and if it was a direct
    // dep of the target, we would have conflicted earlier.
    const current = target !== peerEntryEdge.from && target.resolve(name)
    if (current) {
      for (const edge of current.edgesIn.values()) {
        if (edge.from.isDescendantOf(target) && edge.valid) {
          if (!dep.satisfies(edge))
            return CONFLICT
        }
      }
    }

    // no objections, so this is fine as long as peers are ok here.
    return this.canPlacePeers(OK)
  }

  get deepestNestingTarget () {
    const start = this.parent ? this.parent.deepestNestingTarget
      : this.edge.from
    return deepestNestingTarget(start, this.name)
  }

  get conflictChildren () {
    return this.allChildren.filter(c => c.canPlace === CONFLICT)
  }

  get allChildren () {
    const set = new Set(this.children)
    for (const child of set) {
      for (const grandchild of child.children)
        set.add(grandchild)
    }
    return [...set]
  }

  get top () {
    return this.parent ? this.parent.top : this
  }

  get allRelations () {
    return this.top.allChildren
  }

  // check if peers can go here.  returns state or CONFLICT
  canPlacePeers (state) {
    this.canPlaceSelf = state
    // if the dep is going into a top node, or we've already checked this
    // dep, then just return the state unchanged.
    if (!this.dep.parent || this.peerPath.includes(this.dep))
      return state

    // TODO: represent peerPath in ERESOLVE error somehow?
    const peerPath = [...this.peerPath, this.dep]
    let sawConflict = false
    for (const peerEdge of this.dep.edgesOut.values()) {
      if (!peerEdge.peer || !peerEdge.to || peerPath.includes(peerEdge.to))
        continue
      const peer = peerEdge.to
      // it may be the case that the *initial* dep can be nested, but a peer
      // of that dep needs to be placed shallower, because the target has
      // a peer dep on the peer as well.
      const target = deepestNestingTarget(this.target, peer.name)
      const cpp = new CanPlaceDep({
        dep: peer,
        target,
        parent: this,
        edge: peerEdge,
        peerPath,
        // always place peers in preferDedupe mode
        preferDedupe: true,
      })
      this.children.push(cpp)

      if (cpp.canPlace === CONFLICT)
        sawConflict = true
    }

    return sawConflict ? CONFLICT : state
  }

  // what is the node that is causing this peerSet to be placed?
  get peerSetSource () {
    return this.parent ? this.parent.peerSetSource : this.edge.from
  }

  get peerEntryEdge () {
    return this.top.edge
  }

  static get CONFLICT () {
    return CONFLICT
  }

  static get OK () {
    return OK
  }

  static get REPLACE () {
    return REPLACE
  }

  static get KEEP () {
    return KEEP
  }

  get description () {
    const { canPlace } = this
    return canPlace && canPlace.description || canPlace
  }
}

module.exports = CanPlaceDep

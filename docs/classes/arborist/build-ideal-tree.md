# Arborist.buildIdealTree(options)

This method is used to calculate the `idealTree`, which satisfies
dependencies, complies with the lockfile if one exists, and makes the
changes to the tree that the user has requested.

## Algorithm

1. **Init Tree** Load the [virtualTree](./load-virtual.md) or
   [actualTree](./load-actual.md) as a starting point.  (The `actualTree`
   is used only if no lockfile exists, or if we have been instructed not to
   use it.)
2. **Inflate Ancient Lockfile** If using a lockfile, and we detect that the
   lockfile is from npm v6 or npm v5, attempt to load missing metadata from
   the npm registry and/or from `package.json` files.  Log a warning for
   any nodes that could not be inflated in this way.
3. **Apply User Requests** If an `add` or `rm` action was specified, then
   update the dependencies in the root project (or in specified
   `workspaces`).  For any node so modified, add it to the `Deps Queue`.
4. **Build Deps** Enter the recursive `buildDeps` process described below.
5. **Fix Dep Flags** Calculate dependency flags for all Node objects within
   the tree.
6. **Prune Failed Optional** Any `optional` dependencies that failed to
   resolve are removed from the tree.
7. **Check Engine and Platform** Ensure that any non-`optional`
   dependencies are compatible with the current environment.

### Build Deps

Iterate over the queue of deps, placing them in the tree and resolving all
of their missing dependencies, until all have been visited and placed.

1. While the `Deps Queue` contains nodes:
    1. Sort `Deps Queue` by depth, and then alphabetically by node name.
    2. Set `node ` to next item in `Deps Queue`
    3. If `node` has been seen, or has been removed from the tree, loop.
    4. Set `hasShrinkwrap` and `hasBundle` based on the node's
       `node.hasShrinkwrap` and `node.package.bundleDependencies` fields.
    5. If `complete` is true, and `hasShrinkwrap` or `hasBundle` are set,
        1. Extract node resolved value into a temp directory
        2. If `hasBundle`, call [`loadActual`](./load-actual.md) in the temp
           directory, rooted on the node
        3. Else, if `hasShrinkwrap`, call [`loadVirtual`](./load-virtual.md) in
           the temp directory, rooted on the node
    6. Set `peerSource` to the `peerSetSource` for this node, or the node
       itself if none is found.
    7. Set `tasks` to empty list
    8. For each `Problem Edges` of the node:
        1. If the edge is marked as an overridden `peer` dependency, loop
        2. Set `source` to `peerSource` if edge.type is `peer`, otherwise the
           node being built.
        3. If a `virtual root` for the node exists, then:
            1. set `virtualRoot` to the node's virtual root
            2. set `vrEdge` to the edge from the virtual root by this edge name
            3. set `vrDep` to the resolution of the edge in the virtual root
               tree, if valid.
        4. If `vrDep` is set, and satisfies the edge, then set `dep` to `vrDep`
        5. Else, set `dep` to `Node From Edge`, requiring `edge.from`
        6. Push edge and dep onto the `tasks` list
    9. Sort tasks alphabetically by edge name.
    10. Attempt to `Place Dep` each dep/edge in the task list, returning list
        of `placed` nodes.
    11. For each `placed` node:
        1. Push node onto `Deps Queue`
        2. Pre-fetch manifests for all of the node's Problem Edges
    12. Loop
2. **Resolve Links** For every `Link` node placed within the tree,
    1. If the link target is outside of the project root folder, and `follow`
       is not set, then do nothing.
    2. Else, if the link target was not already visited, push the link target
       onto the `Deps Queue` and restart loop.

### Node From Edge (edge, parent, secondEdge, required)

This creates a new Node in a virtual root to satisfy the edge provided,
and the secondEdge if provided, tracking which nodes along the journey are
required (ie, not `peerOptional` dependencies or their deps).

The end result is a Node that lives within a Virtual Root, where all of its
peer dependencies and transitive peer dependencies have been resolved as
well, assigned with an appropriate `peerSetSource` so that we know why they
are included.

1. If `parent` is not set, then set to new `Virtual Root` based on
   `edge.from`
2. Set `first` to `Node From Spec` based on `edge.spec`
3. If `secondEdge` is provided, and not satisfied by `first`, then set
   `second` to `Node From Spec` based on `secondEdge.spec`
4. If `second` is set, and the edge is valid, then set `node` to `second`.
   Else: set `node` to `first`
5. If `required` contains `edge.from`, and `edge.type` is not
   `peerOptional`, add node to `required`
6. If `required` contains `secondEdge.from` and `secondEdge.type` is not
   `peerOptional`, add node to `required`
7. If a matching node can be found in the tree above the level of
   `edge.from`, then return a `Link` to the matching node, to prevent
   infinite recursion in `a1->b2->a2->b1->...` cases.
8. Set `parent.sourceReference` as the `peerSetSource` for the node.
9. `Load Peer Set` on the node

### Load Peer Set

Load the set of nodes that need to be loaded as peerDependencies for the
node being resolved.  This builds up the peerSet within a Virtual Root, so
that we can know which versions ought to be placed in the idealTree.

Note that this calls `Node From Edge`, which in turn calls back into `Load
Peer Set` with the same parent, building up the set until it is complete.

1. Get the list of peerEdges that are not currently resolved and valid,
   sorted by name.
2. For each edge in peerEdges,
    1. If the edge is valid and has resolution, loop (this can happen
       because the function is re-entered for each node as it is resolved,
       and peerDep sets can overlap)
    2. Set `parentEdge` to the edge from `node.parent` by this name
    3. Set `isMine` if parent source reference is either the project root
       or a workspace.
    4. If `force`, or `strictPeerDeps` is not set and `isMine` is false,
       then `Conflict is OK`
    4. If no `edge.to` exists:
        1. If there is no parent edge, call `Node From Edge` with the edge,
           in `node.parent`, loop
        2. Else:
            1. set `dep` to `Node From Edge` with the parentEdge as `edge`,
               `node.parent` as the `parent`, and `edge` as `secondEdge`
            2. If the `edge` is now valid, loop
            3. Conflict is ok, or if the dep is not found in the `required`
               set, loop
            4. Throw `ERESOLVE` failure.  (We do not warn for the "allowed"
               failures, because they *may* be resolvable later.)
    5. Else (`edge.to` exists):
        1. Set `current` to the current `edge.to` value
        2. Set `dep` to `Node From Edge` with the `edge` and `required`
           list (do not provide `parent` or `secondEdge`)
        3. If `dep` can safely replace `current`
            1. call `Node From Edge` with `edge`, `parent`, and `required`
            2. loop
        4. If conflict is ok or `edge.from` is not required, loop
        5. Throw ERESOLVE

### Place Dep (dep, node, edge, peerEntryEdge = null, peerPath = [])

Starting with the dependent node location (or its `resolveParent` if a peer
dep), walk up the tree finding the shallowest location within the tree
where it can be safely placed without violating any other dependency
contracts.

This function recurses to place peer dependencies at or above the location
where we are placing `dep`.  When re-entering, `peerEntryEdge` is set to
the non-peer edge that caused the inclusion of the peer set.

1. If edge is resolved, and valid, and not within explicitRequests, and its
   name is not within updateNames, and the edge resolution is not
   a known vulnerability, return an empty list.
2. Set `start` to `node.resolveParent` if edge is a peerDep and node is not
   the project root, otherwise set to `node`
3. Set `check` to start
4. Set `source` to the `peerSetSource` for `dep`
5. While `check` is set, setting `check` to `check.resolveParent` at each
   step:
    1. Set `isSource` to `true` if `check` is `source`
    2. If `check` has an edge by that name, and `check` is not a `top` node,
       and the `check` edge is a peerDep, loop
    3. Set `canPlace` to `Can Place Dep` with (dep, check, edge,
       peerEntryEdge, peerPath, isSource)
    4. If `canPlace` is anything other than `CONFLICT`, then set `target` to
       `check`.
    5. Else: break loop
    6. If `legacyBundling` is set, break loop. (Accept first valid placement)
    7. If `globalStyle` is set, and `check.resolveParent` is the root of the
       tree, break loop.  (Global style only includes direct deps in top
       level.)
6. If no target was found, then we know there is a conflict
    1. if `force` is set,
        1. set `target` to `edge.to.resolveParent` (Ie, the parent of whichever
          unsatisfying version was found in the tree)
        2. set `canPlace` to `KEEP` (Keep the conflicting dependency)
    2. Else: throw ERESOLVE
7. At this point, a target has been found, and `canPlace` is either `KEEP`,
   `REPLACE`, or `OK`
8. If `canPlace` is `KEEP`,
    1. If edge is a `peerDep` and the placed node does not satisfy the edge,
       raise a peer dep conflict warning.  If we got to this location, it's
       because either `force` was set, or the peerDep conflict comes from a
       transitive dependency.  In either case, we warn and move on.
    2. `Prune Dedupable` on the target to remove any nodes that will become
       extraneous.
    3. Return empty list.
9. Set `virtualRoot` to `dep.parent`
10. Clone `dep` to `newDep`
11. Set `placed` to a new list containing `newDep`
12. If a child by the same name of `dep` exists in `target.children`
    1. Gather set of all deps that are solely depended upon by the current
       child or other deps within the set.
    2. Replace current child with newDep
    3. Prune all nodes in old dep set that are not valid resolutions within
       the set of dependencies of the new dep
    4. For each invalid `edgeIn` of newDep, where `edgeIn` is not the `edge`,
        re-evaluate the now-invalid resolution.  We may need to _re-resolve_
        nodes that were previously visited, in this case.
        1. Add `edgeIn.from` to Deps Queue
        2. Remove `edgeIn.from` from Deps Seen
13. Else: set `newDep.parent` to `target`
14. If edge is a peerDep, and newDep does not satisfy edge, raise warning
    on peer conflict.
15. If edge is valid, and edge is not resolving to newDep, `Prune
    Dedupable` on `edge.to`, but do not descend
16. For each invalid `edgeIn` resolving to `newDep`, where `edge.from` is
    not within Deps Seen, add `edgeIn.from` to Deps Queue
17. For each node by the same name as `newDep`, descending from `target`,
    call Prune Dedupable, not descending
18. Place missing or invalid peer deps at or above this location as well.
    For each `peer` edge of `newDep.edgesOut`,
    1. If the `edge.to` is not set, then it's a non-required peerOptional,
       and can be skipped.  Loop.
    2. Set `peerPlaced` to `Place Dep` with (peer, newDep, peerEdge,
       peerEntryEdge (or `edge`), peerPath)
    3. Add all `peerPlaced` nodes to `placed`
19. Remove virtualRoot.sourceReference from `virtualRoots` map
20. Return `placed`

### Can Place Dep (dep, target, edge, peerEntryEdge, peerPath, isSource)

Answers the question: can we place `dep` in `target` safely, along with its
peer deps?

This function is re-entered from `Can Place Peers`, with a `peerEntryEdge`
and `peerPath` set in order to avoid infinite regress.

Placement return values:

- `OK` It is ok to put the dep in this location, and there are no
  conflicting versions present.
- `KEEP` There is a node present in this location, and we ought to keep it
  and use it to resolve the edge.
- `REPLACE` There is a node present, but we ought to replace it with the
  new dependency.
- `CONFLICT` There is a node present which does not meet the dependency,
  and we cannot safely replace it.

1. set `entryEdge` to `peerEntryEdge` if set, otherwise `edge`
2. set `source` to `peerSetSource` for `dep`
3. If `isSource` is not true, set it to true if `target` is equal to
   `source`
4. If `isSource` is true, then set `effectiveSource` to `target`.
   Otherwise, set `effectiveSource` to `source`.
5. Set `isProjectRoot` and `isWorkspace` from effectiveSource
6. Set `isMine` to `isProjectRoot` or `isWorkspace`
7. If target has a child by the name of `edge.name`, then
    1. set `current` to target's child
    2. if the dep matches `current`, then we keep it unless the current
       doesn't match the edge and the new dep does.  If current satisfies
       edge OR dep does NOT satisfy edge, return KEEP
    3. set `curVer` to `current.version`
    4. set `newVer` to `dep.version`
    5. set `tryReplace` to true if `newVer` is greater than `curVer`
    6. if `tryReplace` is true and dep can replace current, then:
        1. set result to `Can Place Peers` with (dep, target, edge,
           `REPLACE`, peerEntryEdge, peerPath, isSource)
        2. If `res` is not `CONFLICT`, return res
    7. if edge satisfied by current, return `KEEP`
    8. if `preferDedupe` is set or if the edge is a peer dep, and
       `tryReplace` is false, and dep can replace current, try to replace
       it anyway.
        1. set res to `Can Place Peers` with (dep, target, edge, `REPLACE`,
           peerEntryEdge, peerPath, isSource)
        2. if res is not `CONFLICT` return res
    9. If `isSource` is true, then **Check for Conflict Override Cases**
       If this is the only place the thing can go, and the current thing
       there can potentially be nested, we MAY opt to replace it anyway.
       The complexity arises when we are replacing a dep set, not merely
       one node.
        1. set `canReplace` to `true`
        2. If `peerEntryEdge` is set, then:
            1. set `currentPeerSet` to the peer set of the `current` node
            2. set `targetEdges` to new Set.  This will be the set of all
               edges coming from the target to nodes within the
               currentPeerSet.
            3. for each peer of currentPeerSet
                1. for each `edgeIn` of peer.edgesIn
                    1. if the currentPeerSet has edgeIn.from, loop
                    2. if edgeIn.from is not the target, or is not valid,
                       loop
                    3. add edgeIn to `targetEdges`
            4. for each edge of targetEdges
                1. set rep to `dep.parent.children(edge.name)`  (That is,
                   the replacement that will be placed, coming from the
                   virtualRoot tree)
                2. set current to `edge.to`
                3. if rep is not set, then no replacement is intended.
                   However, it was still included in the peerSet, so we
                   need to make sure that it is ok with the _other_ nodes
                   coming in as part of the new peerSet.
                    1. for each edge as `curEdge` of `current`'s edgesOut,
                        1. set `newRepDep` (new replacement dependency) to
                           `dep.parent.children.get(curEdge.name)` (Ie, the
                           replacement node from the virtual root
                        2. if curEdge is valid, and newRepDep exists, and
                           does not satisfy curEdge, set `canReplace` to
                           false, and break
                    2. loop
                4. Check if the replacement is already an override of some
                   sort.  If any `rep.edgesIn` is not valid, set `override`
                   to `true`.
                5. If rep satisfies edge, and is not an override, loop
                6. Else, we cannot replace.  Set `canReplace` to false.
                7. break
            5. If `canReplace` is true, then we need to determine if we
               need nesting.
                1. set `needNesting` to `false
                2. `OUTER`: for each node of `currentPeerSet`
                    1. set rep to `dep.parent.children.get(node.name)`
                    2. if rep, continue (already addressed above)
                    3. for each edge of node.edgesOut
                        1. set repDep to dep.parent.children.get(edge.name)
                        2. if no repDep, loop
                        3. if repDep satisfies edge, loop
                        4. Otherwise, nesting is required.  Set
                           `needNesting` to true, and break `OUTER`
                3. If `needNesting` is true, then we delete everything in
                   the current peerSet that does not have a corresponding
                   target dep, and add their dependents to the Deps Queue.
                   Some or all of them MAY end up in the same location,
                   which is fine if allowed.
                    1. set `dependents` to a new Set
                    2. set `reresolve` to a new Set
                    3. `OUTER`: for each node of currentPeerSet
                        1. set rep to `dep.parent.children.get(node.name)`
                        2. if rep, loop (already addressed)
                        3. set deps to new Set
                        4. for each edge of node.edgesIn
                            1. if edge.from is target, loop `OUTER`  (This
                               is not one that we can replace)
                            2. If currentPeerSet has edge.from, loop
                            3. add edge.from to deps
                        5. add node to reresolve
                        6. add each dep in deps to dependents
                    4. for each dependent in dependents,
                        1. add dependent to Deps Queue
                        2. remove dependent from Deps Seen
                    5. for each node of reresolve, remove from tree
        3. If `canReplace` is true, then
            1. set `ret` to `Can Place Peers` with (dep, target, edge,
               `REPLACE`, peerEntryEdge, peerPath, isSource)
            2. if ret is not `CONFLICT`, return ret
        4. At this point, we know that it is not a deeper dependency that
           was deduped up to this location, and not something we can
           replace or accept.  This is a peer conflict.
        5. If conflict is ok, then raise peer conflict warning, and return
           `KEEP`
    10. Conflicting node at this location, and no justification for
        overriding.  Return `CONFLICT`
8. No node by that name here.  Check to see if the target perhaps doens't
   have a child by that name, but wants one, and will not be satisfied by
   this one.
9. If target is not entryEdge.from and target has an edge for dep.name,
    1. if target edge is not satisfied by dep, return `CONFLICT`
10. Check for deduping dependents that may be upset by the placement.  If
    target is not entryEdge.from, then set current to
    target.resolve(dep.name)
11. If current, then for each edge of current.edgesIn
    1. if edge.from is a descendant of target, and the edge is valid, and
       the edge is not satisfied by dep, then return `CONFLICT`
12. No objections!  Return `Can Place Peers` (dep, target, edge, `OK`,
    peerEntryEdge, peerPath, isSource)

### Can Place Peers (dep, target, edge, returnValue, peerEntryEdge, peerPath, isSource)

Answers the question: can we place the _peers_ of `dep` at or above this
target.  If so, return the `returnValue` (the original return value of
placing `dep` in the target without peers).  If not, return `CONFLICT`.

This always operates on a `dep` in a virtual root, where its peers have
been placed already.  We check each one for placement within `target`.
Note that they might not actually _end up_ in `target`, but this
establishes that they _could_, and thus have at least one valid resolution.
If they cannot be placed in `target`, then it means something else is there
which will prevent the valid placement of `dep` anyway.

1. If `dep.parent` is not set (because the node was already removed or
   replaced in the peer set), return `returnValue`
2. if a `peerEntryEdge` is set, and the `peerPath` includes the dep
   (cycle), return `returnValue`
3. Set `entryEdge` to `peerEntryEdge` if set, otherwise `edge`
4. Set `peerPath` to the concatenation of `peerPath` and `dep`
5. For each `peerEdge` of dep.edgesOut
    1. If peerEdge.to is not set, loop
    2. set `peer` to `peerEdge.to`
    3. set `canPlacePeer` to `Can Place Dep` with (peer, target, peerEdge,
       entryEdge, peerPath, isSource).  This re-enters the `Can Place Dep`
       flow with the peer, noting that it is part of a peer set, so only
       its un-checked peers will still be checked for placement.
    4. If `canPlacePeer` is `CONFLICT`, return `CONFLICT`
    5. Loop
6. Return `returnValue`

### Problem Edges

Figure out which edges of a node have to get some attention paid to them.

Return the set of `node.edgesOut` where:

- The edge is not a bundled dependency (unless the bundling node is the
  project root)
- The edge resolves to a module that is already a known load failure
- The edge does not have a resolution, and either its type is not
  `peerOptional` or it is in the `explicitRequests`
- One of the following are true:
  - The edge is not valid
  - The `updateNames` includes the edge name
  - The edge resolution is marked as vulnerable
  - The edge is present in `explicitRequests`

### Prune Dedupable (node, descend = true)

1. If `node.canDedupe()`, set `node.root` to null, and return
2. If `descend`,
    1. For each `node.children`, sorted by `location`, call `Prune Dedupable`
    2. For each `node.fsChildren`, sorted by location, call `Prune Dedupable`

### Virtual Root (node, reuse = false)

Create a virtual parent node based on the provided node, so that we have a
safe space in which to resolve its set of dependencies and their
peerDependencies, prior to moving into the idealTree.

This is a bit like growing a small bush that will be grafted onto the tree
we are building.

1. If reuse, and virtual root exists for `node`, return the virtual root
   previously created for node
2. Set `virtualRoot` to a new Node using the source node's `realpath` and
   setting the source node as `sourceReference`
3. For all children of node,
    1. if child is a link, create a new node at the child's `realpath`,
       rooted on `virtualRoot`.  This ensures that subsequent resolutions of
       `file:` dependencies will be found within the virtual root tree.
4. Save the `virtualRoot` as the virtual root for `node`, and return it


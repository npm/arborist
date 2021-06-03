# Node class

A `node` represents a package on disk.  This class does not do I/O.  It is
strictly a data structure that can refer to either a virtual or ideal node,
or a folder with a `package.json` file read from the disk.

## Folder Tree vs Dependency Graph

Some fields on the Node object describe the Node's physical location within
the directory structure of a project.  Other fields describe the dependency
relationship between Nodes.

While directories form a hierarchical _tree_ structure, dependencies form a
cyclical _graph_ structure.

All of these references are kept up to date as a tree of nodes is built or
mutated, and all are bi-directional.  This means that it is possible to
walk a package folder tree or a dependency graph, in any direction.

## Properties

### node.name

The name of this package, typically (but not always) matching the `name`
field in `package.json`.

When a node is assigned as a child of another node, its path is set to
`{parent.path}/node_modules/{node.name}`.

### node.packageName

The `name` field in `package.json`.

### node.version

The `version` field in `package.json`.

### node.package

The package metadata, typically found in `package.json`.  Note that this
might be only a subset of the `package.json` file contents, if the Node was
loaded from a [Shrinkwrap](./shrinkwrap.md) or via a request to the
registry.

### node.path

The path on disk where this node lives.

### node.realpath

The realpath, which will be identical to `node.path` for Node objects, and
always different for [Link](./link.md) objects.

### node.location

A Posix-style relative path from the `node.root.realpath` to `node.path`.

Used as the primary key in the [Inventory](./inventory.md) and
[Shrinkwrap](./shrinkwrap.md) data structures.

### node.edgesOut

A `Map` of [Edge](./edge.md) objects representing this Node's dependencies.

### node.edgesIn

A `Set` of [Edge](./edge.md) objects resolving to this Node.

### node.root

The root node of the tree.

### node.isRoot

### node.isProjectRoot

### node.top

### node.isTop

### node.parent

### node.children

### node.fsParent

### node.fsChildren

### node.tops

### node.resolveParent

### node.workspaces

### node.isWorksace

### node.glogal

### node.globalTop

### node.meta

### node.linksIn

### node.sourceReference

### node.resolved

### node.integrity

### node.hasShrinkwrap

### node.legacyPeerDeps

### node.inBundle

### node.isLink

Boolean `true` if an instance of the Link class.  False otherwise.

## Methods

### node.explain(edge = null)

### node.isDescendantOf(parentNode)

### node.getBundler()

### node.canReplaceWith(otherNode)

### node.canReplace(otherNode)

### node.satisfies(edgeOrSpec)

### node.matches(otherNode)

### node.replaceWith(otherNode)

### node.replace(otherNode)

### node.addEdgeOut(edge)

### node.addEdgeIn(edge)

### node.resolve(name)

### node.inNodeModules()

### Package Dependency Flags

* node.dev
* node.devOptional
* node.optional
* node.peer
* node.extraneous

The dependency type of a node can be determined efficiently by looking at
the `dev`, `optional`, and `devOptional` flags on the node object.  These
are updated by arborist when necessary whenever the tree is modified in
such a way that the dependency graph can change, and are relevant when
pruning nodes from the tree.

```
| extraneous | peer | dev | optional | devOptional | meaning             | prune?            |
|------------+------+-----+----------+-------------+---------------------+-------------------|
|            |      |     |          |             | production dep      | never             |
|------------+------+-----+----------+-------------+---------------------+-------------------|
|     X      | N/A  | N/A |   N/A    |     N/A     | nothing depends on  | always            |
|            |      |     |          |             | this, it is trash   |                   |
|------------+------+-----+----------+-------------+---------------------+-------------------|
|            |      |  X  |          |      X      | devDependency, or   | if pruning dev    |
|            |      |     |          | not in lock | only depended upon  |                   |
|            |      |     |          |             | by devDependencies  |                   |
|------------+------+-----+----------+-------------+---------------------+-------------------|
|            |      |     |    X     |      X      | optionalDependency, | if pruning        |
|            |      |     |          | not in lock | or only depended on | optional          |
|            |      |     |          |             | by optionalDeps     |                   |
|------------+------+-----+----------+-------------+---------------------+-------------------|
|            |      |  X  |    X     |      X      | Optional dependency | if pruning EITHER |
|            |      |     |          | not in lock | of dep(s) in the    | dev OR optional   |
|            |      |     |          |             | dev hierarchy       |                   |
|------------+------+-----+----------+-------------+---------------------+-------------------|
|            |      |     |          |      X      | BOTH a non-optional | if pruning BOTH   |
|            |      |     |          |   in lock   | dep within the dev  | dev AND optional  |
|            |      |     |          |             | hierarchy, AND a    |                   |
|            |      |     |          |             | dep within the      |                   |
|            |      |     |          |             | optional hierarchy  |                   |
|------------+------+-----+----------+-------------+---------------------+-------------------|
|            |  X   |     |          |             | peer dependency, or | if pruning peers  |
|            |      |     |          |             | only depended on by |                   |
|            |      |     |          |             | peer dependencies   |                   |
|------------+------+-----+----------+-------------+---------------------+-------------------|
|            |  X   |  X  |          |      X      | peer dependency of  | if pruning peer   |
|            |      |     |          | not in lock | dev node hierarchy  | OR dev deps       |
|------------+------+-----+----------+-------------+---------------------+-------------------|
|            |  X   |     |    X     |      X      | peer dependency of  | if pruning peer   |
|            |      |     |          | not in lock | optional nodes, or  | OR optional deps  |
|            |      |     |          |             | peerOptional dep    |                   |
|------------+------+-----+----------+-------------+---------------------+-------------------|
|            |  X   |  X  |    X     |      X      | peer optional deps  | if pruning peer   |
|            |      |     |          | not in lock | of the dev dep      | OR optional OR    |
|            |      |     |          |             | hierarchy           | dev               |
|------------+------+-----+----------+-------------+---------------------+-------------------|
|            |  X   |     |          |      X      | BOTH a non-optional | if pruning peers  |
|            |      |     |          |   in lock   | peer dep within the | OR:               |
|            |      |     |          |             | dev hierarchy, AND  | BOTH optional     |
|            |      |     |          |             | a peer optional dep | AND dev deps      |
+------------+------+-----+----------+-------------+---------------------+-------------------+
```

* If none of these flags are set, then the node is required by the
  dependency and/or peerDependency hierarchy.  It should not be pruned.
* If _both_ `node.dev` and `node.optional` are set, then the node is an
  optional dependency of one of the packages in the devDependency
  hierarchy.  It should be pruned if _either_ dev or optional deps are
  being removed.
* If `node.dev` is set, but `node.optional` is not, then the node is
  required in the devDependency hierarchy.  It should be pruned if dev
  dependencies are being removed.
* If `node.optional` is set, but `node.dev` is not, then the node is
  required in the optionalDependency hierarchy.  It should be pruned if
  optional dependencies are being removed.
* If `node.devOptional` is set, then the node is a (non-optional)
  dependency within the devDependency hierarchy, _and_ a dependency
  within the `optionalDependency` hierarchy.  It should be pruned if
  _both_ dev and optional dependencies are being removed.
* If `node.peer` is set, then all the same semantics apply as above, except
  that the dep is brought in by a peer dep at some point, rather than a
  normal non-peer dependency.

Note: `devOptional` is only set in the shrinkwrap/package-lock file if
_neither_ `dev` nor `optional` are set, as it would be redundant.

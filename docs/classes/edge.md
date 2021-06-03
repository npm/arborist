# Edge class

An Edge represents a dependency relationship between two Nodes.

## Properties

### edge.type

A string representing the type of dependency.  Can be one of the following
values:

* prod - Listed in `dependencies`.
* dev - Listed in `devDependencies`.  Only loaded for the root project and
  workspaces.
* optional - Listed in `optionalDependencies`.
* peer - Listed in `peerDependencies`, and not set as optional in
  `peerDependenciesMeta`.
* peerOptional - Listed in `peerDependencies`, and set as optional in
  `peerDependenciesMeta`.
* workspace - Defined by the root project's `workspaces` property.

### edge.name

The `name` of a node that can satisfy this dependency.  The key in the
relevant `dependencies` field in package.json.

### edge.spec

The specifier that satisfies the dependency.  The value in the relevant
`dependencies` field in package.json.

### edge.from

The node that has the dependency.  The edge is always the value of
`edge.from.edgesOut.get(edge.name)`.

### edge.to

The node in the tree that this dependency resolves to.

The edge is always found in `edge.to.edgesIn`.

### edge.accept

A second specifier which will be considered as satisfying the dependency,
but which will not be used to resolve the dependency when building the
ideal tree.

### edge.bundled

True if the package that has this dependency includes the name in
`bundleDependencies`.

### edge.workspace

True if the type is `workspace`.

### edge.prod

True if the type is `prod`.

### edge.dev

True if the type is `dev`.

### edge.optional

True if the type is `optional` or `peerOptional`.

### edge.peer

True if the type is `peer` or `peerOptional`.

### edge.missing

True if the `edge.error` is `'MISSING'`.  Note that this will _not_ be set
if the edge.type is `optional` or `peerOptional`.

### edge.invalid

True if the `edge.error` is `'INVALID'`.

### edge.valid

True if `edge.error` is null.

### edge.error

One of the following values:

* `null` Edge is satisfied appropriately.
* `'MISSING'` Edge does not resolve to anything, and is not optional.
* `'INVALID'` Edge resolves to something that does not satisfy the
  `edge.spec` properly.
* `'PEER LOCAL'` Edge is `peer` or `peerOptional`, and resolves to a node
  that is a child of `edge.from`.
* `'DETACHED'` Edge has been detached from its `edge.from` node, and should
  be discarded.

## Methods

### edge.reload(hard = false)

Recalculate resolution and set `edge.to`.  If `hard` is set to `true`, then
recalculate the `edge.error` even if the `edge.to` field has not changed.

### edge.detach()

Remove an edge from its `from` node.  Edges should not be used once
detached.

### edge.satisfiedBy(node)

True if the node argument would successfully satisfy the dependency.

### edge.explain()

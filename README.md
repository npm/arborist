# @npmcli/arborist

Inspect and manage `node_modules` trees.

## USAGE

```javascript
const Arborist = require('@npmcli/arborist')

const arb = new Arborist({
  // options object

  // where the packages are.  defaults to cwd.
  root: '/path/to/package/root',

  // url to the default registry.  defaults to npm's default registry
  registry: 'https://regisry.npmjs.org',

  // if not provided, registry requests are unauthenticated
  auth: {
    'registry.npmjs.org': 'deadbeefcafebad',
    'npm.internal.acme.com': 'correcthorsebatterystaple',
  },

  // map scopes to specific registries
  scopes: {
    '@acme-internal': 'npm.internal.acme.com'
  },
})

// READING FUNCTIONS

// returns a promise.  reads the actual contents of node_modules
arb.loadActual().then(() => {
  // now arb.tree is loaded
})

// read just what the package-lock.json says
arb.loadLogical().then(() => {
  // now arb.logicalTree is loaded
  // this fails if there's no package-lock.json or package.json in the folder
  // note that loading this way should only be done if there's no
  // node_modules folder
})

// trust package-lock.json, but fall back to loadActual if not found
arb.loadFast().then(() => ...)


// OPTIMIZATION FUNCTIONS

// These make changes to the objects in memory, but do not update
// what's actually stored in `node_modules`.  They do add things
// to the cache, however, using cacache to talk to the registry.

// All of these return a promise, and update arb.targetTree and arb.actions

// add a package at the root level.
arb.add(spec).then(() => {
  // arb.targetTree is updated
  // arb.actions tracks a list of operations to be performed
})

// remove extraneous/dev/optional deps
arb.prune({
  // both of these default to true
  dev: true, // include dev deps, at the top level
  optional: true, // include optional deps
}).then(() => ...)

// just calculate the target tree for installation
// If a package-lock.json is present, then it generates the list of actions
// required to bring the node_modules folder into sync with the lock
arb.calculate({
  dev: true, // include devDeps at the top level
  optional: true, // include optional dependencies
  deep: false, // install deps in linked trees as well
}).then(() => ...)

// upgrade one dependency, or all of them
// effectively the same as calculate, but without a package-lock
arb.update({
  name: null, // update just one named dependency
  depth: Infinity, // how deep to traverse the tree updating?
  restrict: true, // limit to the semver requirements in package.json
  deep: false, // whether to update the contents of linked trees as well
}).then(() => ...)


// WRITING ACTIONS

// Make the targetTree be the thing that's on disk
// This takes all the actions in arb.actions,
// and writes package-lock.json and package.json appropriately
arb.reify({
  save: true, // write package-lock.json and package.json files
}).then(() => { /* node_modules is written */ })
```


## DATA STRUCTURES

A `node_modules` tree is a logical graph of dependencies overlaid on a
physical tree of folders.

A `Node` represents a package folder on disk, either at the root of the
package, or within a `node_modules` folder.  The physical structure of the
folder tree is represented by the `node.parent` reference to the containing
folder, and `node.children` map of nodes within its `node_modules`
folder, where the key in the map is the name of the folder in
`node_modules`, and the value is the child node.

A node without a parent is a top of tree.

A `Link` represents a symbolic link to a package on disk.  This can be a
symbolic link to a package folder within the current tree, or elsewhere on
disk.  The `link.target` is a reference to the actual node.  Links differ
from Nodes in that dependencies are resolved from the _target_ location,
rather than from the link location.

An `Edge` represents a dependency relationship.  Each node has an `edgesIn`
set, and an `edgesOut` map.  Each edge has a `type` which specifies what
kind of dependency it represents: `'req'` for regular dependencies,
`'peer'` for peerDependencies, `'dev'` for devDependencies, and
`'optional'` for optionalDependencies.  `edge.from` is a reference to the
node that has the dependency, and `edge.to` is a reference to the node that 

As nodes are moved around in the tree, the graph edges are automatically
updated to point at the new module resolution targets.

### class Node

Both `arb.tree` and `arb.targetTree` are `Node` objects.  A `Node` refers
to a package folder, which may have children in `node_modules`.

* `node.name` The name of this node's folder in `node_modules`.
* `node.parent` Physical parent node in the tree.  The package in whose
  `node_modules` folder this package lives.  Null if node is top of tree.

    Setting `node.parent` will automatically update `node.location` and all
    graph edges affected by the move.

* `node.children` Map of packages located in the node's `node_modules` folder.
* `node.package` The contents of this node's `package.json` file.
* `node.path` File path to this package.  If a node is a link target, and
  lives outside of the tree, then `node.path` will be null.
* `node.realpath` The full real filepath on disk where this node lives.
* `node.location` A logical unix-style `/package/package/...` style path
  indicating where this package lives in its tree.  Note that link targets
  typically always have a location of `/`, as they are the root of their
  tree.
* `node.isLink` Whether this represents a symlink.  Always `false` for Node
  objects, always `true` for Link objects.
* `node.isTop` True if this node is the top of its tree, false otherwise.
* `node.top` The top node in this node's tree.
* `node.dev`, `node.optional`, `node.devOptional` Indicators as to whether
  this node is a dev dependency and/or optional dependency.  These flags
  are relevant when pruning optional and/or dev dependencies out of the
  tree.
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
* `node.edgesOut` Edges in the dependency graph indicating nodes that this
  node depends on, which resolve its dependencies.
* `node.edgesIn` Edges in the dependency graph indicating nodes that depend
  on this node.

* `extraneous` True if this package is not required by any other for any
  reason.  False for top of tree.

* `node.resolve(name)`  Identify the node that will be returned when code
  in this package runs `require(name)`

### class Link

Link objects represent a symbolic link within the `node_modules` folder.
They have most of the same properties and methods as `Node` objects, with a
few differences.

* `link.target` A Node object representing the package that the link
  references.  If this is a Node already present within the tree, then it
  will be the same object.  If it's outside of the tree, then it will be
  treated as the top of its own tree.
* `link.isLink` Always true.
* `link.children` This is always an empty map, since links don't have their
  own children directly.

### class Edge

* TODO: document this

## Errors

Errors parsing or finding a package.json in `node_modules` will result in a
node with the error property set.  We will still find deeper `node_modules`
if any exist. *Prior to `5.0.0` these aborted tree reading with an error
callback.*

Only a few classes of errors are fatal (result in an error callback):

* If the top level location is entirely missing, that will error.
* If `fs.realpath` returns an error for any path it's trying to resolve.

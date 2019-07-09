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

### class Node

Both `arb.tree` and `arb.targetTree` are `Node` objects.  A `Node` refers
to a package folder, which may have children in `node_modules`.

* `node.name` The name of this node's folder in `node_modules`.
* `node.parent` Physical parent node in the tree.  The package in whose
  `node_modules` folder this package lives.  Null if node is top of tree.
* `node.children` The packages located in the node's `node_modules` folder.
* `node.package` The contents of this node's `package.json` file.
* `node.path` Full real file path to this package.
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
* `node.warnings` A list of warnings pertaining to this package.
* `node.dependencies` Nodes that this one depends on, which resolve its
  dependencies.
* `node.requires` A map of `name => spec` for all the packages this package
  requires.  Dev dependencies are included at the top level.  Optional
  dependencies are included only if the dependency is resolved.
* `node.requiredBy` A `Set` of packages in the tree that require this one.
* `node.missingDeps` A `Map` of `name => spec` of dependencies that are
  missing.  Optional deps are not included in this list.
* `invalidDeps` A `Map` of `name => node` of dependencies that this package
  will resolve, but which are invalid according to its stated dependency
  list.
* `invalidTo` A `Set` of packages within the tree for which this package is
  an invalid dependency.
* `missingPeerDeps` Like `missingDeps`, but for peer dependencies.
* `extraneous` True if this package is not required by any other for any
  reason.  False for top of tree.
* `dev` True if this package is only required as a dev dependency, or a
  dependency of a dev dependency.
* `optional` True if this package is only required as an optional
  dependency, or a dependency of an optional dependency.
  Note that packages which are loaded as part of both the `devDependency`
  tree _and_ the `optionalDependency` tree will have _neither_ flag set, as
  they are neither "only dev" nor "only optional".
  XXX: This will be changed to set both flags instead of neither flag prior
  to release.
* `packageLock` The `package-lock.json` data for this tree.  Typically only
  relevant at the top level.
* `node.walkLogical({ enter(node), exit(node, children), filter(node) })`
  Perform a depth-first traversal through the logical dependency graph,
  visiting each node once.

  The `enter()` function is called prior to visiting dependencies.  The
  `enter()` function's return value is used as the arguments to `exit()`,
  allowing a map-reduce style transform.

  The method return value is the return value of `exit()` called on the
  initial node at the end of the traversal.  If `enter()` or `exit()` ever
  return a Promise, then this function will return a Promise that resolves
  to that value.

  When there are loops in the logical dependency graph, each node is
  visited only one time.  As a result, it is _not_ guaranteed that `exit()`
  has already been called on the child nodes, as this would create deadlock
  await cycles.  Therefor, it is safest to return an object from `enter()`
  and then mutate the object on `exit()`, so that the `children` array is
  consistent.

* `node.walkPhysical({ enter(node), exit(node, children), fitler(node) })`
  Perform a depth-first traversal of the physical `node_modules` tree,
  visiting each node once.

  The `enter()` function is called prior to visiting dependencies.  The
  `enter()` function's return value is used as the arguments to `exit()`,
  allowing a map-reduce style transform.

  The method return value is the return value of `exit()` called on the
  initial node at the end of the traversal.  If `enter()` or `exit()` ever
  return a Promise, then this function will return a Promise that resolves
  to that value.

  There can be loops in the physical graph when there are symbolic links
  within a `node_modules` tree.  When this happens, each node is visited
  only one time.  As a result, it is _not_ guaranteed that `exit()` has
  already been called on the child nodes, as this would create deadlock
  await cycles.  Therefor, it is safest to return an object from `enter()`
  and then mutate the object on `exit()`, so that the `children` array is
  consistent.

* `node.resolveDep(name)`  Identify the node that will be returned when
  code in this package runs `require(name)`

### class Link

Link objects represent a symbolic link within the `node_modules` folder.
They have most of the same properties and methods as `Node` objects, with a
few differences.

* `link.target` A Node object representing the package that the link
  references.  If this is a Node already present within the tree, then it
  will be the same object.  If it's outside of the tree, then it will be
  treated as the top of its own tree.
* `link.isLink` Always true.
* `link.children` This is a reference to `link.target.children`, since
  links don't have their own children directly.

## Errors

Errors parsing or finding a package.json in node_modules will result in a
node with the error property set.  We will still find deeper node_modules
if any exist. *Prior to `5.0.0` these aborted tree reading with an error
callback.*

Only a few classes of errors are fatal (result in an error callback):

* If the top level location is entirely missing, that will error.
* If `fs.realpath` returns an error for any path it's trying to resolve.

# Arborist class

This is the main export of the `@npmcli/arborist` module, and the primary
interface for all tree operations.

## Properties

### arb.options

All options provided to the constructor.  These are passed along to the
various dependencies that Arborist uses.

These options are always set:

* `nodeVersion` defaults to `process.version`
* `registry` defaults to `https://registry.npmjs.org/`
* `path` defaults to `'.'`
* `cache` defaults to `~/.npm/_cacache`
* `packumentCache` defaults to a new `Map` object
* `log` defaults to a [proc-log](http://npm.im/proc-log)

### arb.cache
### arb.path
### arb.log

[`npmlog`](http://npm.im/npmlog) or [`proc-loc`](http://npm.im/proc-log)
object used for logging.

### arb.registry

The registry where packages are fetched from.

### arb.scriptsRun

Set of all of scripts executed to build packages while reifying the tree.

### arb.legacyPeerDeps

True if peer dependencies are ignored.

### arb.explicitRequests

A `Set` of all the explicit requests made to `Arborist.buildIdealTree`.

### arb.diff

A [Diff](../diff.md) object, if one was calculated.

### arb.auditReport

The [AuditReport](../audit-report.md) if one was generated.

### arb.actualTree

The actual tree as it exists within the `node_modules` folder.  See
[Arborist.loadActual](./load-actual.md)

### arb.virtualTree

The virtual tree as defined by a `package-lock.json` or
`npm-shrinkwrap.json` file.  See [Arborist.loadVirtual](./load-virtual.md)

### arb.idealTree

The ideal tree that would satisfy all dependencies and comply with the
`package-lock.json` file if one exists.  See
[Arborist.buildIdealTree](./build-ideal-tree.md)

## Methods

### arb.loadActual

Load the actual tree as it appears on disk in `node_modules`.  See
[Arborist.loadActual](./load-actual.md)

### arb.loadVirtual

Load the tree as it is defined in a `package-lock.json` or
`npm-shrinkwrap.json` file.  See [Arborist.loadVirtual](./load-virtual.md)

### arb.buildIdealTree

Calculate the ideal tree to satisfy the root dependencies, lockfile, and
options provided.  See [Arborist.buildIdealTree](./build-ideal-tree.md)

### arb.reify

Calculate the ideal tree, and then extract and build dependencies so that
the ideal tree is reified onto the disk.  See [Arborist.reify](./reify.md)

### arb.rebuild()

Execute appropriate `preinstall`, `postinstall`, and `install` scripts for
dependencies.  Called as part of the `reify()` process.

### arb.prune()

Build the ideal tree, then explicitly remove any extraneous nodes, and
reify.

### arb.dedupe()

Build the ideal tree in such a way as to minimize duplication, and reify to
disk.

Only duplicated nodes are checked for updates.

### arb.audit(options)

Query the registry for advisories about known vulnerabilities within the
tree.  Calculate an [AuditReport](../audit-report.md) of
[Vulns](../vuln.md).  If `options.fix` is set to `true`, then reify
whichever fixes can be made to address the issues.

### arb.workspaceNodes(tree, [...workspaces])

The nodes that are workspaces within the tree provided and included within
the `workspaces` list.

### arb.workspaceDependencySet(tree, [...workspaces])

The set of all dependencies within the tree that are dependened upon
(directly or transitively) by any of the workspaces listed.

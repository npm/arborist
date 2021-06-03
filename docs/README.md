# @npmcli/arborist Documentation

* Classes
  * [Node](./classes/node.md)
  * [Link](./classes/link.md)
  * [Edge](./classes/node.md)
  * [Shrinkwrap](./classes/shrinkwrap.md)
  * [YarnLock](./classes/yarn.md)
  * [Diff](./classes/diff.md)
  * [Inventory](./classes/inventory.md)
  * [Vuln](./classes/vuln.md)
  * [AuditReport](./classes/audit-report.md)
  * [Arborist](./classes/arborist/README.md)

## Overview and Concepts

Arborist is a utility for inspecting, building, and reifying package
dependency trees.

A `node_modules` folder tree is a tree which satisfies a logical graph of
dependency relationships.

A [`Node`](./classes/node.md) represents a package folder on disk, either
in the `node_modules` tree, or somewhere else.

A [`Link`](./classes/link.md) represents a symbolic link to a `Node`.

An [`Edge`](./classes/edge.md) represents a dependency relationship of some
sort.

A [`Shrinkwrap`](./classes/shrinkwrap.md) holds the metadata stored within
a `package-lock.json` or `npm-shrinkwrap.json` file.  It is continually
updated, and consulted for package metadata, and can save its tree back to
disk.  A tree built from a Shrinkwrap is functionally identical to one
built from a `node_modules` folder structure.  It uses the
[`YarnLock`](./classes/yarn-lock.md) class to represent a `yarn.lock` file
if one exists.

A [`Diff`](./classes/diff.md) object represents the changes required to
turn one tree into another.

The [`Inventory`](./classes/inventory.md) object on the root node provides
a way to quickly query for nodes within the tree based on common
attributes, or iterate over all nodes in the tree.

A [`Vuln`](./classes/vuln.md) object represents all vulnerabilities known
about a particular package name (including meta-vulnerabilities, where
one package is vulnerable by virtue of depending exclusively on vulnerable
versions of a dependency).

The [`AuditReport`](./classes/audit-report.md) object represents the full
report from `npm audit` for an Arborist tree.

The [`Arborist`](./classes/arborist/README.md) class is the main way that
consumers of this tool should interact with trees.  It provides methods to
examine and mutate `node_modules` hierarchies, calculate ideal trees, and
so on.

## `parent` vs `fsParent`, `root` vs `top`

The `root` Node is the location where Arborist is operating.  It represents
the project being worked on.  There can be only one `root` for any given
tree.

If a node has a `parent`, then it means that node lives within the parent's
`node_modules` folder.

A node without a `parent` is a `top` node.  There is no requirement that
the `root` node be a `top` node, though that is obviously quite common.

A top node may have a `fsParent`, which is a node above it in the directory
tree.

All of these references are kept up to date as Nodes are moved around
within a tree.

## Timing

Arborist emits events on the node `process` object in order to track the
time spent on various actions.

* `process.on('time', name)` Starts an action
* `process.on('timeEnd', name)` Ends the action

To track timing, note the time that a given action starts, and the time
that it ends.

## Logging

An [npmlog](http://npm.im/npmlog) or [proc-log](http://npm.im/proc-log)
object may be provided to capture log output.

// The arborist manages three trees:
// - actual
// - virtual
// - ideal
//
// The actual tree is what's present on disk in the node_modules tree
// and elsewhere that links may extend.
//
// The virtual tree is loaded from metadata (package.json and lock files).
//
// The ideal tree is what we WANT that actual tree to become.  This starts
// with the virtual tree, and then applies the options requesting
// add/remove/update actions.
//
// To reify a tree, we calculate a diff between the ideal and actual trees,
// and then turn the actual tree into the ideal tree by taking the actions
// required.  At the end of the reification process, the actualTree is
// updated to reflect the changes.
//
// Each tree has an Inventory at the root.  Shrinkwrap is tracked by Arborist
// instance.  It always refers to the actual tree, but is updated (and written
// to disk) on reification.

// Each of the mixin "classes" adds functionality, but are not dependent on
// constructor call order.  So, we just load them in an array, and build up
// the base class, so that the overall voltron class is easier to test and
// cover, and separation of concerns can be maintained.

const {resolve} = require('path')
const {homedir} = require('os')
const procLog = require('proc-log')
const { saveTypeMap } = require('../add-rm-pkg-deps.js')
const { depth } = require('treeverse')
const calcDepFlags = require('../calc-dep-flags.js')

const mixins = [
  require('../tracker.js'),
  require('./pruner.js'),
  require('./deduper.js'),
  require('./audit.js'),
  require('./build-ideal-tree.js'),
  require('./load-workspaces.js'),
  require('./load-actual.js'),
  require('./load-virtual.js'),
  require('./rebuild.js'),
  require('./reify.js'),
]

const _workspacesEnabled = Symbol.for('workspacesEnabled')
const Base = mixins.reduce((a, b) => b(a), require('events'))
const getWorkspaceNodes = require('../get-workspace-nodes.js')

// if it's 1, 2, or 3, set it explicitly that.
// if undefined or null, set it null
// otherwise, throw.
const lockfileVersion = lfv => {
  if (lfv === 1 || lfv === 2 || lfv === 3) {
    return lfv
  }

  if (lfv === undefined || lfv === null) {
    return null
  }

  throw new TypeError('Invalid lockfileVersion config: ' + lfv)
}

class Arborist extends Base {
  constructor (options = {}) {
    process.emit('time', 'arborist:ctor')
    super(options)
    this.options = {
      nodeVersion: process.version,
      ...options,
      path: options.path || '.',
      cache: options.cache || `${homedir()}/.npm/_cacache`,
      packumentCache: options.packumentCache || new Map(),
      log: options.log || procLog,
      workspacesEnabled: options.workspacesEnabled !== false,
      lockfileVersion: lockfileVersion(options.lockfileVersion),
    }

    this[_workspacesEnabled] = this.options.workspacesEnabled

    if (options.saveType && !saveTypeMap.get(options.saveType)) {
      throw new Error(`Invalid saveType ${options.saveType}`)
    }
    this.cache = resolve(this.options.cache)
    this.path = resolve(this.options.path)
    process.emit('timeEnd', 'arborist:ctor')
  }

  // returns an array of the actual nodes for all the workspaces
  workspaceNodes (tree, workspaces) {
    return getWorkspaceNodes(tree, workspaces, this.log)
  }

  // returns a set of workspace nodes and all their deps
  workspaceDependencySet (tree, workspaces, includeWorkspaceRoot) {
    calcDepFlags(tree)
    const wsNodes = this.workspaceNodes(tree, workspaces)
    const deps = new Set()
    const extraneous = new Set()
    if (includeWorkspaceRoot) {
      const rootDeps = this.rootDependencySet(tree)
      for (const node of rootDeps) {
        deps.add(node)
      }
    }
    for (const node of wsNodes) {
      depth({
        tree: node,
        visit: node => {
          /* istanbul ignore else - should always be the case */
          if (node.workspaceDep || node.isWorkspace) {
            deps.add(node)
            if (node.isLink) {
              deps.add(node.target)
            }
            for (const child of node.children.values()) {
              if (child.extraneous) {
                extraneous.add(child)
              }
            }
          }
          return node
        },
        filter: node => node,
        getChildren: (node, tree) =>
          [...tree.edgesOut.values()].map(edge => edge.to),
      })
    }
    for (const node of extraneous) {
      deps.add(node)
    }

    return deps
  }

  rootDependencySet (tree) {
    calcDepFlags(tree)
    const set = new Set()
    depth({
      tree,
      visit: node => {
        if (node.rootDep && !node.isWorkspace) {
          set.add(node)
        }
        return node
      },
      filter: node => node,
      getChildren: (node, tree) =>
        [...tree.edgesOut.values()].map(edge => edge.to),
    })
    return set
  }

  excludeWorkspacesDependencySet (tree) {
    return this.rootDependencySet(tree)
  }
}

module.exports = Arborist

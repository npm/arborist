// mixin implementing the reify method
// XXX link bins
// XXX provide list of scripts that need to be run

const npa = require('npm-package-arg')
const pacote = require('pacote')

const {dirname, resolve, relative} = require('path')
const {depth: dfwalk} = require('treeverse')
const fs = require('fs')
const {promisify} = require('util')
const rename = promisify(fs.rename)
const symlink = promisify(fs.symlink)
const writeFile = promisify(fs.writeFile)
const mkdirp = promisify(require('mkdirp'))
const rimraf = promisify(require('rimraf'))
const packageContents = require('@npmcli/installed-package-contents')

const Diff = require('../diff.js')
const retirePath = require('../retire-path.js')
const promiseAllRejectLate = require('promise-all-reject-late')
const Ideal = require('./build-ideal-tree.js')


const _diff = Symbol('diff')
const _retiredNodes = Symbol('retiredNodes')
const _retiredUnchanged = Symbol('retiredUnchanged')
const _sparseTreeDirs = Symbol('sparseTreeDirs')
const _savePrefix = Symbol('savePrefix')
const _retireShallowNodes = Symbol('retireShallowNodes')
const _getBundlesByDepth = Symbol('getBundlesByDepth')
const _registryResolved = Symbol('registryResolved')

// shared symbols for swapping out when testing
const _diffTrees = Symbol.for('diffTrees')
const _createSparseTree = Symbol.for('createSparseTree')
const _loadShrinkwrapsAndUpdateTrees = Symbol.for('loadShrinkwrapsAndUpdateTrees')
const _reifyNode = Symbol.for('reifyNode')
const _loadBundlesAndUpdateTrees = Symbol.for('loadBundlesAndUpdateTrees')
const _unpackNewModules = Symbol.for('unpackNewModules')
const _moveContents = Symbol.for('moveContents')
const _moveBackRetiredUnchanged = Symbol.for('moveBackRetiredUnchanged')
const _removeRetiredAndDeletedNodes = Symbol.for('removeRetiredAndDeletedNodes')
const _renamePath = Symbol.for('renamePath')
const _rollbackRetireShallowNodes = Symbol.for('rollbackRetireShallowNodes')
const _rollbackCreateSparseTree = Symbol.for('rollbackCreateSparseTree')
const _rollbackMoveBackRetiredUnchanged = Symbol.for('rollbackMoveBackRetiredUnchanged')
const _saveIdealTree = Symbol.for('saveIdealTree')

// defined by Ideal mixin
const _idealTreePrune = Symbol.for('idealTreePrune')
const _explicitRootInstalls = Symbol.for('explicitRootInstalls')

module.exports = cls => class Reifier extends Ideal(cls) {
  constructor (options) {
    super(options)

    this[_savePrefix] = options.savePrefix || '^'
    this[_diff] = null
    this[_retiredNodes] = {}
    this[_retiredUnchanged] = {}
    this[_sparseTreeDirs] = new Set()
  }

  // public method
  reify (options) {
    return Promise.all([this.loadActual(), this.buildIdealTree(options)])
      .then(() => this[_diffTrees]())
      .then(() => this[_retireShallowNodes]())
      .then(() => this[_createSparseTree]())
      .then(() => this[_loadShrinkwrapsAndUpdateTrees]())
      .then(() => this[_loadBundlesAndUpdateTrees]())
      .then(() => this[_unpackNewModules]())
      .then(() => this[_moveBackRetiredUnchanged]())
      .then(() => this[_removeRetiredAndDeletedNodes]())
      .then(() => this[_saveIdealTree](options))
      .then(() => this.actualTree)
  }

  [_diffTrees] () {
    // XXX if we have an existing diff already, there should be a way
    // to just invalidate the parts that changed, but avoid walking the
    // whole tree again.

    // find all the nodes that need to change between the actual
    // and ideal trees.
    this.diff = Diff.calculate({
      actual: this.actualTree,
      ideal: this.idealTree,
    })
  }

  // move aside the shallowest nodes in the tree that have to be
  // changed or removed, so that we can rollback if necessary.
  [_retireShallowNodes] () {
    const moves = this[_retiredNodes] = {}
    for (const diff of this.diff.children) {
      if (diff.action === 'CHANGE' || diff.action === 'REMOVE') {
        const from = diff.actual.path
        const to = retirePath(from)
        moves[from] = to
      }
    }
    let errState = null
    const movePromises = Object.entries(moves)
      .map(([from, to]) => this[_renamePath](from, to))
    return promiseAllRejectLate(movePromises)
      .catch(er => this[_rollbackRetireShallowNodes](er))
  }

  [_renamePath] (from, to) {
    return rename(from, to)
  }

  [_rollbackRetireShallowNodes] (er) {
    const moves = this[_retiredNodes]
    const movePromises = Object.entries(moves)
      .map(([from, to]) => this[_renamePath](to, from))
    return promiseAllRejectLate(movePromises)
      // ignore subsequent rollback errors
      .catch(er => {})
      .then(() => { throw er })
  }

  [_createSparseTree] () {
    // if we call this fn again, we look for the previous list
    // so that we can avoid making the same directory multiple times
    const dirs = this.diff.leaves
      .filter(diff => {
        return (diff.action === 'ADD' || diff.action === 'CHANGE') &&
          !this[_sparseTreeDirs].has(diff.ideal.path)
      })
      .map(diff => diff.ideal.path)

    return promiseAllRejectLate(dirs.map(d => mkdirp(d)))
      .then(() => dirs.forEach(dir => this[_sparseTreeDirs].add(dir)))
      .catch(er => this[_rollbackCreateSparseTree](er))
  }

  [_rollbackCreateSparseTree] (er) {
    // cut the roots of the sparse tree, not the leaves
    const moves = this[_retiredNodes]
    const failures = []
    const unlinks = Object.entries(moves)
      .map(([from, to]) => rimraf(from).catch(er => failures.push([from, er])))
    return promiseAllRejectLate(unlinks)
      .then(() => {
        if (failures.length)
          this.emit('warn', 'Failed to clean up some directories', failures)
      })
      .then(() => this[_rollbackRetireShallowNodes](er))
  }

  // shrinkwrap nodes define their dependency branches with a file, so
  // we need to unpack them, read that shrinkwrap file, and then update
  // the tree by calling loadVirtual with the node as the root.
  [_loadShrinkwrapsAndUpdateTrees] (seen = new Set()) {
    const shrinkwraps = this.diff.leaves
      .filter(d => (d.action === 'CHANGE' || d.action === 'ADD') &&
        d.ideal.hasShrinkwrap && !seen.has(d.ideal))

    if (!shrinkwraps.length)
      return

    const Arborist = this.constructor
    return promiseAllRejectLate(shrinkwraps.map(diff => {
      const node = diff.ideal
      seen.add(node)
      return this[_reifyNode](node)
    }))
      .then(nodes => promiseAllRejectLate(nodes.map(node => new Arborist({
        ...this.options,
        path: node.path,
      }).loadVirtual({ root: node }))))
      // reload the diff and sparse tree because the ideal tree changed
      .then(() => this[_diffTrees]())
      .then(() => this[_createSparseTree]())
      .catch(er => this[_rollbackCreateSparseTree](er))
  }

  // create a symlink for Links, extract for Nodes
  // return the node object, since we usually want that
  [_reifyNode] (node) {
    return (node.isLink
      ? rimraf(node.path).then(() => symlink(node.realpath, node.path, 'dir'))
      : pacote.extract(this[_registryResolved](node.resolved), node.path, {
          ...this.options,
          resolved: node.resolved,
          integrity: node.integrity,
        })).then(() => node)
  }

  [_registryResolved] (resolved) {
    // the default registry url is a magic value meaning "the currently
    // configured registry".
    //
    // XXX: use a magic string that isn't also a valid value, like
    // ${REGISTRY} or something.  This has to be threaded through the
    // Shrinkwrap and Node classes carefully, so for now, just treat
    // the default reg as the magical animal that it has been.
    return resolved && resolved
      .replace(/^https?:\/\/registry.npmjs.org\//, this.registry)
  }



  // bundles are *sort of* like shrinkwraps, in that the branch is defined
  // by the contents of the package.  however, in their case, rather than
  // shipping a virtual tree that must be reified, they ship an entire
  // reified actual tree that must be unpacked and not modified.
  [_loadBundlesAndUpdateTrees] (
    depth = 0, bundlesByDepth = this[_getBundlesByDepth]()
  ) {
    const maxBundleDepth = bundlesByDepth.get('maxBundleDepth')
    if (depth > maxBundleDepth) {
      // if we did something, then prune the tree and update the diffs
      // XXX this is two full tree scans, find a better way to do this.
      if (maxBundleDepth !== -1) {
        this[_idealTreePrune]()
        this[_diffTrees]()
      }
      return
    }

    // skip any that have since been removed from the tree, eg by a
    // shallower bundle overwriting them with a bundled meta-dep.
    const set = (bundlesByDepth.get(depth) || [])
      .filter(node => node.root === this.idealTree)

    if (!set.length) {
      return this[_loadBundlesAndUpdateTrees](depth + 1, bundlesByDepth)
    }

    const Arborist = this.constructor
    // extract all the nodes with bundles
    return promiseAllRejectLate(set.map(node => this[_reifyNode](node)))
    // then load their unpacked children and move into the ideal tree
    .then(nodes => promiseAllRejectLate(nodes.map(node =>
      new Arborist({
        ...this.options,
        path: node.path,
      }).loadActual().then(tree => {
        for (const child of tree.children.values()) {
          // skip the empty sparse tree folders
          if (child.package._id)
            child.parent = node
        }
        return node
      }))))
    // move onto the next level of bundled items
    .then(() => this[_loadBundlesAndUpdateTrees](depth + 1, bundlesByDepth))
    .catch(er => this[_rollbackCreateSparseTree](er))
  }

  [_getBundlesByDepth] () {
    const bundlesByDepth = new Map()
    let maxBundleDepth = -1
    dfwalk({
      tree: this.diff,
      visit: diff => {
        const node = diff.ideal
        if (node && !node.isRoot && node.package.bundleDependencies &&
            node.package.bundleDependencies.length) {
          maxBundleDepth = Math.max(maxBundleDepth, node.depth)
          if (!bundlesByDepth.has(node.depth))
            bundlesByDepth.set(node.depth, [node])
          else
            bundlesByDepth.get(node.depth).push(node)
        }
      },
      getChildren: diff => diff.children,
    })

    bundlesByDepth.set('maxBundleDepth', maxBundleDepth)
    return bundlesByDepth
  }

  // ok!  actually unpack stuff into their target locations!
  // The sparse tree has already been created, so we walk the diff
  // kicking off each unpack job.  If any fail, we rimraf the sparse
  // tree entirely and try to put everything back where it was.
  [_unpackNewModules] () {
    const unpacks = []
    dfwalk({
      tree: this.diff,
      filter: diff => diff.ideal,
      visit: diff => {
        const node = diff.ideal
        const bd = node.package.bundleDependencies
        const sw = node.hasShrinkwrap
        // should inBundle differentiate if it's in the root's bundle?
        // because in that case, it should still be installed.
        if (node && !node.isRoot && !(bd && bd.length) && !sw && !node.inBundle)
          unpacks.push(this[_reifyNode](node))
      },
      getChildren: diff => diff.children,
    })
    return promiseAllRejectLate(unpacks)
      .catch(er => this[_rollbackCreateSparseTree](er))
  }

  // This is the part where we move back the unchanging nodes that were
  // the children of a node that did change.  If this fails, the rollback
  // is a three-step process.  First, we try to move the retired unchanged
  // nodes BACK to their retirement folders, then delete the sparse tree,
  // then move everything out of retirement.
  [_moveBackRetiredUnchanged] () {
    // get a list of all unchanging children of any shallow retired nodes
    // if they are not the ancestor of any node in the diff set, then the
    // directory won't already exist, so just rename it over.
    // This is sort of an inverse diff tree, of all the nodes where
    // the actualTree and idealTree _don't_ differ, starting from the
    // shallowest nodes that we moved aside in the first place.
    const moves = this[_retiredNodes]
    this[_retiredUnchanged] = {}
    return promiseAllRejectLate(this.diff.children.map(diff => {
      const realFolder = (diff.actual || diff.ideal).path
      const retireFolder = moves[realFolder]
      this[_retiredUnchanged][retireFolder] = []
      return promiseAllRejectLate(diff.unchanged.map(node => {
        // no need to roll back links, since we'll just delete them anyway
        if (node.isLink)
          return mkdirp(dirname(node.path)).then(() => this[_reifyNode](node))

        if (node.inBundle) {
          // will have been moved/unpacked along with bundler
          return
        }

        this[_retiredUnchanged][retireFolder].push(node)

        const rel = relative(realFolder, node.path)
        const fromPath = resolve(retireFolder, rel)
        // if it has bundleDependencies, then make node_modules.  otherwise
        // skip it.
        const bd = node.package.bundleDependencies
        const dir = bd && bd.length ? node.path + '/node_modules' : node.path
        return mkdirp(dir).then(() => this[_moveContents](node, fromPath))
      }))
    }))
    .catch(er => this[_rollbackMoveBackRetiredUnchanged](er))
  }

  // move the contents from the fromPath to the node.path
  [_moveContents] (node, fromPath) {
    return packageContents({
      path: fromPath,
      depth: 1,
      packageJsonCache: new Map([[fromPath + '/package.json', node.package]]),
    }).then(res => promiseAllRejectLate(res.map(path => {
      const rel = relative(fromPath, path)
      const to = resolve(node.path, rel)
      return this[_renamePath](path, to)
    })))
  }


  [_rollbackMoveBackRetiredUnchanged] (er) {
    const moves = this[_retiredNodes]
    // flip the mapping around to go back
    const realFolders = new Map(Object.entries(moves).map(([k, v]) => [v, k]))
    const promises = Object.entries(this[_retiredUnchanged])
      .map(([retireFolder, nodes]) => promiseAllRejectLate(nodes.map(node => {
        const realFolder = realFolders.get(retireFolder)
        const rel = relative(realFolder, node.path)
        const fromPath = resolve(retireFolder, rel)
        return this[_moveContents]({ ...node, path: fromPath }, node.path)
      })))
    return promiseAllRejectLate(promises)
      .then(() => this[_rollbackCreateSparseTree](er))
  }

  // the tree is pretty much built now, so it's cleanup time.
  // remove the retired folders, and any deleted nodes
  // If this fails, there isn't much we can do but tell the user about it.
  // Thankfully, it's pretty unlikely that it'll fail, since rimraf is a tank.
  [_removeRetiredAndDeletedNodes] () {
    const moves = this[_retiredNodes]
    const promises = []
    const failures = []
    const rm = path => rimraf(path).catch(er => failures.push([path, er]))

    // XXX get list of removal nodes in an earlier walk instead of here
    dfwalk({
      tree: this.diff,
      visit: diff => {
        if (diff.action === 'REMOVE')
          promises.push(rm(diff.actual.path))
      },
      getChildren: diff => diff.action === 'REMOVE' ? [] : diff.children,
    })

    for (const [realPath, retirePath] of Object.entries(moves)) {
      promises.push(rm(retirePath))
    }

    return promiseAllRejectLate(promises).then(() => {
      if (failures.length)
        this.emit('warn', 'Failed to clean up some directories', failures)
    })
  }

  // last but not least, we save the ideal tree metadata to the package-lock
  // or shrinkwrap file, and any additions or removals to package.json
  [_saveIdealTree] (options = {}) {
    // the ideal tree is actualized now, hooray!
    this.actualTree = this.idealTree

    // support save=false option
    if (options.save === false)
      return

    if (options.add) {
      const pkg = this.actualTree.package
      // need to save these more nicely, now that we know what they are
      for (const [type, specs] of Object.entries(options.add)) {
        if (!specs || typeof specs !== 'object' || Array.isArray(specs))
          continue

        for (const [name, spec] of Object.entries(specs)) {
          const child = this.actualTree.children.get(name)
          const resolved = child.resolved
          const req = npa(spec)
          const res = npa(resolved)
          const version = child.package.version
          if (req.registry) {
            const range = this[_savePrefix] + version
            const pname = child.package.name
            const alias = name !== pname
            pkg[type][name] = (alias ? `npm:${pname}@` : '') + `${range}`
          } else if (req.hosted) {
            pkg[type][name] = req.hosted.shortcut({ noCommittish: false })
          } else {
            pkg[type][name] = req.saveSpec
          }
        }
      }
      // refresh the edges so they have the correct specs
      this.actualTree.package = pkg
    }

    // XXX preserve indentation maybe?
    const pj = resolve(this.actualTree.path, 'package.json')
    return Promise.all([
      this.actualTree.meta.save(),
      writeFile(pj, JSON.stringify({
        ...this.actualTree.package,
        _id: undefined,
      }, null, 2) + '\n'),
    ])
  }
}

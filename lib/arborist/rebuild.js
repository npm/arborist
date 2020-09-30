// Arborist.rebuild({path = this.path}) will do all the binlinks and
// bundle building needed.  Called by reify, and by `npm rebuild`.

const {depth: dfwalk} = require('treeverse')
const promiseAllRejectLate = require('promise-all-reject-late')
const rpj = require('read-package-json-fast')
const binLinks = require('bin-links')
const runScript = require('@npmcli/run-script')
const promiseCallLimit = require('promise-call-limit')
const {resolve} = require('path')
const { isNodeGypPackage } = require('@npmcli/node-gyp')

const boolEnv = b => b ? '1' : ''
const sortNodes = (a, b) => (a.depth - b.depth) || a.path.localeCompare(b.path)

const _rebuildBundle = Symbol('rebuildBundle')
const _ignoreScripts = Symbol('ignoreScripts')
const _binLinks = Symbol('binLinks')
const _oldMeta = Symbol('oldMeta')
const _createBinLinks = Symbol('createBinLinks')
const _doHandleOptionalFailure = Symbol('doHandleOptionalFailure')
const _linkAllBins = Symbol('linkAllBins')
const _runScripts = Symbol('runScripts')
const _buildQueues = Symbol('buildQueues')
const _addToBuildSet = Symbol('addToBuildSet')
const _checkBins = Symbol.for('checkBins')
const _queues = Symbol('queues')
const _scriptShell = Symbol('scriptShell')

const _force = Symbol.for('force')

// defined by reify mixin
const _handleOptionalFailure = Symbol.for('handleOptionalFailure')
const _trashList = Symbol.for('trashList')

module.exports = cls => class Builder extends cls {
  constructor (options) {
    super(options)

    const {
      ignoreScripts = false,
      scriptShell,
      binLinks = true,
      rebuildBundle = true,
    } = options

    this[_binLinks] = binLinks
    this[_ignoreScripts] = !!ignoreScripts
    this[_scriptShell] = scriptShell
    this[_rebuildBundle] = !!rebuildBundle
    this[_queues] = {
      preinstall: [],
      install: [],
      postinstall: [],
      bin: [],
    }
    this[_oldMeta] = null
  }

  async rebuild ({ nodes, handleOptionalFailure = false } = {}) {
    // nothing to do if we're not building anything!
    if (this[_ignoreScripts] && !this[_binLinks])
      return

    // when building for the first time, as part of reify, we ignore
    // failures in optional nodes, and just delete them.  however, when
    // running JUST a rebuild, we treat optional failures as real fails
    this[_doHandleOptionalFailure] = handleOptionalFailure

    // if we don't have a set of nodes, then just rebuild
    // the actual tree on disk.
    if (!nodes)
      nodes = (await this.loadActual()).inventory.values()

    process.emit('time', 'build')

    await this[_buildQueues](nodes)
    if (!this[_ignoreScripts])
      await this[_runScripts]('preinstall')
    if (this[_binLinks])
      await this[_linkAllBins]()
    if (!this[_ignoreScripts]) {
      await this[_runScripts]('install')
      await this[_runScripts]('postinstall')
    }

    process.emit('timeEnd', 'build')
  }

  async [_buildQueues] (nodes) {
    process.emit('time', 'build:queue')
    const set = new Set()

    const promises = []
    for (const node of nodes) {
      promises.push(this[_addToBuildSet](node, set))

      // if it has bundle deps, add those too, if rebuildBundle
      if (this[_rebuildBundle] !== false) {
        const bd = node.package.bundleDependencies
        if (bd && bd.length) {
          dfwalk({
            tree: node,
            leave: node => promises.push(this[_addToBuildSet](node, set)),
            getChildren: node => [...node.children.values()],
            filter: node => node.inBundle,
          })
        }
      }
    }
    await promiseAllRejectLate(promises)

    // now sort into the queues for the 4 things we have to do
    // run in the same predictable order that buildIdealTree uses
    // there's no particular reason for doing it in this order rather
    // than another, but sorting *somehow* makes it consistent.
    const queue = [...set].sort(sortNodes)

    for (const node of queue) {
      const { package: { bin, scripts = {} } } = node
      const { preinstall, install, postinstall } = scripts
      const tests = { bin, preinstall, install, postinstall }
      for (const [key, has] of Object.entries(tests)) {
        if (has)
          this[_queues][key].push(node)
      }
    }
    process.emit('timeEnd', 'build:queue')
  }

  async [_checkBins] (node) {
    // if the node is a global top, and we're not in force mode, then
    // any existing bins need to either be missing, or a symlink into
    // the node path.  Otherwise a package can have a preinstall script
    // that unlinks something, to allow them to silently overwrite system
    // binaries, which is unsafe and insecure.
    if (!node.globalTop || this[_force])
      return
    const { path, package: pkg } = node
    await binLinks.checkBins({ pkg, path, top: true, global: true })
  }

  async [_addToBuildSet] (node, set) {
    if (set.has(node))
      return

    if (this[_oldMeta] === null) {
      const {root: {meta}} = node
      this[_oldMeta] = meta && meta.loadedFromDisk &&
        !(meta.originalLockfileVersion >= 2)
    }

    const { package: pkg, hasInstallScript } = node
    const { bin, scripts = {} } = pkg

    const { preinstall, install, postinstall } = scripts
    const anyScript = preinstall || install || postinstall

    if (!anyScript && (hasInstallScript || this[_oldMeta])) {
      // we either have an old metadata (and thus might have scripts)
      // or we have an indication that there's install scripts (but
      // don't yet know what they are) so we have to load the package.json
      // from disk to see what the deal is.  Failure here just means
      // no scripts to add, probably borked package.json.
      // add to the set then remove while we're reading the pj, so we
      // don't accidentally hit it multiple times.
      set.add(node)
      const pkg = await rpj(node.path + '/package.json').catch(() => ({}))
      set.delete(node)

      const {scripts = {}} = pkg
      if (scripts.preinstall || scripts.install || scripts.postinstall) {
        node.package.scripts = pkg.scripts
        return this[_addToBuildSet](node, set)
      }
    }

    if (bin || preinstall || install || postinstall) {
      if (bin)
        await this[_checkBins](node)
      set.add(node)
    } else if (!install && !preinstall && await isNodeGypPackage(node.path)) {
      // Rebuild node-gyp dependencies lacking an install or preinstall script
      node.package.scripts.install = 'node-gyp rebuild'
      set.add(node)
    }
  }

  async [_runScripts] (event) {
    const queue = this[_queues][event]

    if (!queue.length)
      return

    process.emit('time', `build:run:${event}`)
    await promiseCallLimit(queue.map(node => async () => {
      const {
        path,
        integrity,
        resolved,
        optional,
        peer,
        dev,
        devOptional,
        package: pkg,
        location,
      } = node

      // skip any that we know we'll be deleting
      if (this[_trashList].has(path))
        return

      const timer = `build:run:${event}:${location}`
      process.emit('time', timer)
      this.log.info('run', pkg._id, event, location, pkg.scripts[event])
      const p = runScript({
        event,
        path,
        pkg,
        stdioString: true,
        env: {
          npm_package_resolved: resolved,
          npm_package_integrity: integrity,
          npm_package_json: resolve(path, 'package.json'),
          npm_package_optional: boolEnv(optional),
          npm_package_dev: boolEnv(dev),
          npm_package_peer: boolEnv(peer),
          npm_package_dev_optional:
            boolEnv(devOptional && !dev && !optional),
        },
        scriptShell: this[_scriptShell],
      }).catch(er => {
        const { code, signal } = er
        this.log.info('run', pkg._id, event, {code, signal})
        throw er
      }).then(({code, signal}) => {
        this.log.info('run', pkg._id, event, {code, signal})
      })

      await (this[_doHandleOptionalFailure]
        ? this[_handleOptionalFailure](node, p)
        : p)

      process.emit('timeEnd', timer)
    }))
    process.emit('timeEnd', `build:run:${event}`)
  }

  async [_linkAllBins] () {
    const queue = this[_queues].bin
    if (!queue.length)
      return

    process.emit('time', 'build:link')
    const promises = []
    // sort the queue by node path, so that the module-local collision
    // detector in bin-links will always resolve the same way.
    for (const node of queue.sort(sortNodes))
      promises.push(this[_createBinLinks](node))

    await promiseAllRejectLate(promises)
    process.emit('timeEnd', 'build:link')
  }

  async [_createBinLinks] (node) {
    if (this[_trashList].has(node.path))
      return

    process.emit('time', `build:link:${node.location}`)

    const p = binLinks({
      pkg: node.package,
      path: node.path,
      top: !!(node.isTop || node.globalTop),
      force: this[_force],
      global: !!node.globalTop,
    })

    await (this[_doHandleOptionalFailure]
      ? this[_handleOptionalFailure](node, p)
      : p)

    process.emit('timeEnd', `build:link:${node.location}`)
  }
}

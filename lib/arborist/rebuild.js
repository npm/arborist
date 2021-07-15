// Arborist.rebuild({path = this.path}) will do all the binlinks and
// bundle building needed.  Called by reify, and by `npm rebuild`.

const {depth: dfwalk} = require('treeverse')
const promiseAllRejectLate = require('promise-all-reject-late')
const rpj = require('read-package-json-fast')
const binLinks = require('bin-links')
const runScript = require('@npmcli/run-script')
const promiseCallLimit = require('promise-call-limit')
const {resolve} = require('path')
const {
  isNodeGypPackage,
  defaultGypInstallScript,
} = require('@npmcli/node-gyp')

const boolEnv = b => b ? '1' : ''
const sortNodes = (a, b) => (a.depth - b.depth) || a.path.localeCompare(b.path, 'en')

const _workspaces = Symbol.for('workspaces')
const _build = Symbol('build')
const _resetQueues = Symbol('resetQueues')
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

    this.scriptsRun = new Set()
    this[_binLinks] = binLinks
    this[_ignoreScripts] = !!ignoreScripts
    this[_scriptShell] = scriptShell
    this[_rebuildBundle] = !!rebuildBundle
    this[_resetQueues]()
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
    if (!nodes) {
      const tree = await this.loadActual()
      if (this[_workspaces] && this[_workspaces].length) {
        const filterSet = this.workspaceDependencySet(tree, this[_workspaces])
        nodes = tree.inventory.filter(node => filterSet.has(node))
      } else
        nodes = tree.inventory.values()
    }

    // separates links nodes so that it can run
    // prepare scripts and link bins in the expected order
    process.emit('time', 'build')
    const depNodes = new Set()
    const linkNodes = new Set()
    for (const node of nodes) {
      // we skip the target nodes to that workspace in order to make sure
      // we only run lifecycle scripts / place bin links once per workspace
      if (node.isLink)
        linkNodes.add(node)
      else
        depNodes.add(node)
    }

    await this[_build](depNodes, {})

    if (linkNodes.size) {
      this[_resetQueues]()
      await this[_build](linkNodes, { type: 'links' })
    }

    process.emit('timeEnd', 'build')
  }

  [_resetQueues] () {
    this[_queues] = {
      preinstall: [],
      install: [],
      postinstall: [],
      prepare: [],
      bin: [],
    }
  }

  async [_build] (nodes, { type = 'deps' }) {
    process.emit('time', `build:${type}`)

    await this[_buildQueues](nodes)
    if (!this[_ignoreScripts])
      await this[_runScripts]('preinstall')
    if (this[_binLinks] && type !== 'links')
      await this[_linkAllBins]()

    // links should also run prepare scripts and only link bins after that
    if (type === 'links') {
      await this[_runScripts]('prepare')

      if (this[_binLinks])
        await this[_linkAllBins]()
    }

    if (!this[_ignoreScripts]) {
      await this[_runScripts]('install')
      await this[_runScripts]('postinstall')
    }

    process.emit('timeEnd', `build:${type}`)
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
      const { package: { bin, scripts = {} } } = node.target
      const { preinstall, install, postinstall, prepare } = scripts
      const tests = { bin, preinstall, install, postinstall, prepare }
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

  async [_addToBuildSet] (node, set, refreshed = false) {
    if (set.has(node))
      return

    if (this[_oldMeta] === null) {
      const {root: {meta}} = node
      this[_oldMeta] = meta && meta.loadedFromDisk &&
        !(meta.originalLockfileVersion >= 2)
    }

    const { package: pkg, hasInstallScript } = node.target
    const { gypfile, bin, scripts = {} } = pkg

    const { preinstall, install, postinstall, prepare } = scripts
    const anyScript = preinstall || install || postinstall || prepare
    if (!refreshed && !anyScript && (hasInstallScript || this[_oldMeta])) {
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
      node.package.scripts = scripts
      return this[_addToBuildSet](node, set, true)
    }

    // Rebuild node-gyp dependencies lacking an install or preinstall script
    // note that 'scripts' might be missing entirely, and the package may
    // set gypfile:false to avoid this automatic detection.
    const isGyp = gypfile !== false &&
      !install &&
      !preinstall &&
      await isNodeGypPackage(node.path)

    if (bin || preinstall || install || postinstall || prepare || isGyp) {
      if (bin)
        await this[_checkBins](node)
      if (isGyp) {
        scripts.install = defaultGypInstallScript
        node.package.scripts = scripts
      }
      set.add(node)
    }
  }

  async [_runScripts] (event) {
    const queue = this[_queues][event]

    if (!queue.length)
      return

    // helper class to manage script execution
    class Script {
      constructor (opts) {
        const {
          node,
          timer,
          ...runScriptOpts
        } = opts
        this.node = node
        this.timer = timer
        this.opts = runScriptOpts
        this.pkg = opts.pkg
        this.path = opts.path
        this.env = opts.env
        this.ref = this.node.target.path

        if (!Script.runPromises)
          Script.runPromises = new Map()
      }

      // releases any refs used in the pool and polling systems
      static end () {
        if (Script.runPromises)
          Script.runPromises.clear()

        if (Script.pollRefs)
          Script.pollRefs.clear()
      }

      // make sure there's always just a single, polling system running
      // at a given time, this method will return a promise that resolves
      // once the original promise tracked in Script.runPromises is available
      static waitRunPromise (ref) {
        if (!Script.pollRefs)
          Script.pollRefs = new Map()

        const pollAgain = () => setTimeout(poll, 10)
        const poll = () => {
          // check if the run-script promise is available for each entry
          // in the polling queue, if so take it out of the queue
          // and resolve its pending promise
          for (const [pollRef, resolve] of Script.pollRefs.entries()) {
            const p = Script.runPromises.get(pollRef)
            if (p) {
              Script.pollRefs.delete(pollRef)
              resolve(p)
            }
          }

          // only poll again if there are still refs left in the queue
          if (Script.pollRefs.size)
            pollAgain()
        }

        // starts the polling system for the first time, given that this
        // part of the code is still synchronous, it's going to only start
        // it once the poll refs are empty
        if (!Script.pollRefs.size)
          pollAgain()

        // creates a new promise that is going to be returned by this fuction
        // and also be tracked in the polling system along with its queue ref
        let resolve
        const p = new Promise((res) => {
          resolve = res
        })
        Script.pollRefs.set(ref, resolve)
        return p
      }

      // when the script to be run belongs to a link node, this method
      // retrieves a list of all other link nodes that are direct dependencies
      // of the current node, their scripts also have to be part of the current
      // queue, otherwise it just returns an empty list
      // this is necessary in order to enable workspaces lifecycle scripts
      // that depend on each other
      linkLinkedDeps () {
        const res = []

        if (!this.node.isLink)
          return res

        for (const edge of this.node.target.edgesOut.values()) {
          if (edge.to.isLink &&
            queue.some(node => node.isLink && node.target.name === edge.name))
            res.push(edge.to.target.path)
        }

        return res
      }

      // use the list of depended scripts from linkLinkedDeps()
      // and returns a Promise that resolves once all scripts
      // this current script depends are resolved
      async linkLinkedDepsResolved () {
        return await Promise.all(
          this.linkLinkedDeps().map(ref => Script.waitRunPromise(ref)))
      }

      async run () {
        // in case the current script belongs to a link node that also has
        // linked nodes dependencies (e.g: workspaces that depend on each other)
        // then we await for that dependency script to be resolved before
        // executing the current script
        await this.linkLinkedDepsResolved()

        // executes the current script using @npmcli/run-script
        const p = runScript(this.opts)

        // keeps a pool of executing scripts in order to track
        // inter-dependencies between these scripts
        Script.runPromises.set(this.ref, p)
        return p
      }
    }

    process.emit('time', `build:run:${event}`)
    const stdio = this.options.foregroundScripts ? 'inherit' : 'pipe'
    const limit = this.options.foregroundScripts ? 1 : undefined
    await promiseCallLimit(queue
      .map(node => {
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
        } = node.target

        // skip any that we know we'll be deleting
        if (this[_trashList].has(path))
          return

        const timer = `build:run:${event}:${location}`
        process.emit('time', timer)
        this.log.info('run', pkg._id, event, location, pkg.scripts[event])
        const env = {
          npm_package_resolved: resolved,
          npm_package_integrity: integrity,
          npm_package_json: resolve(path, 'package.json'),
          npm_package_optional: boolEnv(optional),
          npm_package_dev: boolEnv(dev),
          npm_package_peer: boolEnv(peer),
          npm_package_dev_optional:
            boolEnv(devOptional && !dev && !optional),
        }
        return new Script({
          node,
          timer,
          event,
          path,
          pkg,
          stdioString: true,
          stdio,
          env,
          scriptShell: this[_scriptShell],
        })
      })
      .filter(Boolean)
      .map(script => async () => {
        const p = script.run().catch(er => {
          const { code, signal } = er
          this.log.info('run', script.pkg._id, event, {code, signal})
          throw er
        }).then(({args, code, signal, stdout, stderr}) => {
          this.scriptsRun.add({
            pkg: script.pkg,
            path: script.path,
            event,
            cmd: args && args[args.length - 1],
            env: script.env,
            code,
            signal,
            stdout,
            stderr,
          })
          this.log.info('run', script.pkg._id, event, {code, signal})
        })

        await (this[_doHandleOptionalFailure]
          ? this[_handleOptionalFailure](script.node, p)
          : p)

        process.emit('timeEnd', script.timer)
      }), limit)

    // releases pool refs
    Script.end()

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

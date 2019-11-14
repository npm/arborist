// a module that manages a shrinkwrap file (npm-shrinkwrap.json or
// package-lock.json).

// Increment whenever the lockfile version updates
// v1 - npm <=6
// v2 - arborist v1, npm v7, backwards compatible with v1, add 'packages'
// v3 will drop the 'dependencies' field, backwards comp with v2, not v1
//
// We cannot bump to v3 until npm v6 is out of common usage, and
// definitely not before npm v8.
//
// TODO: load yarn.lock, use it for getting resolved and integrity, and save
// it back when saving the shrinkwrap
const lockfileVersion = 2

// don't update this.data right away when doing this.add(node) Just add the
// node to a set of nodes needing an update.  When this.get(location) or
// this.save() is called, then update the data for the location(s) in question.
// That way, it doesn't matter whether the node.devOptional/etc is set when
// adding, since we'll look at it's current state when it's time to check,
// which will be when the caller is ready to do something with the data.

const {promisify} = require('util')
const fs = require('fs')
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const link = promisify(fs.link)
const mkdirp = promisify(require('mkdirp'))
const { resolve, dirname, relative, basename } = require('path')
const specFromLock = require('./spec-from-lock.js')
const npa = require('npm-package-arg')
const parseJSON = require('parse-conflict-json')
const stringify = require('json-stringify-nice')
const swKeyOrder = [
  'name',
  'version',
  'lockfileVersion',
  'resolved',
  'integrity',
  'requires',
  'packages',
  'dependencies',
]

const maybeReadFile = file => {
  return readFile(file, 'utf8').then(d => d, er => {
    /* istanbul ignore else - can't test without breaking module itself */
    if (er.code === 'ENOENT')
      return ''
    else
      throw er
  })
}

const pkgMetaKeys = [
  'name',
  'version',
  'dependencies',
  'peerDependencies',
  'peerDependenciesMeta',
  'optionalDependencies',
  'bundleDependencies',
  '_resolved',
  '_integrity',
]

const nodeMetaKeys = [
  'resolved',
  'integrity',
  'inBundle',
]

const _awaitingUpdate = Symbol('_awaitingUpdate')
const _updateWaitingNode = Symbol('_updateWaitingNode')
const _lockFromLoc = Symbol('_lockFromLoc')
const _createLockFromLoc = Symbol('_createLockFromLoc')
const _pathToLoc = Symbol('_pathToLoc')
const _loadAll = Symbol('_loadAll')
const _metaFromLock = Symbol('_metaFromLock')
class Shrinkwrap {
  static load (root, indent, swonly) {
    return new Shrinkwrap(root, indent).load(swonly)
  }

  static metaFromNode (node) {
    if (node.isLink)
      return {
        resolved: relative(node.path, node.realpath).replace(/\\/g, '/'),
        link: true,
      }

    const meta = {}
    pkgMetaKeys.forEach(key => {
      const val = node.package[key]
      // skip empty objects and falsey values
      if (val && !(typeof val === 'object' && !Object.keys(val).length))
        meta[key.replace(/^_/, '')] = node.package[key]
    })
    if (node.isTop && node.package.devDependencies)
      meta.devDependencies = node.package.devDependencies

    nodeMetaKeys.forEach(key => {
      if (node[key])
        meta[key] = node[key]
    })
    return meta
  }

  constructor (root, indent = 2) {
    this[_awaitingUpdate] = new Map()
    this.root = resolve(root || '.')
    this.filename = null
    this.data = null
    this.indent = indent
    this.loadedFromDisk = false
    this.type = null
  }

  load (swonly) {
    // we don't need to load package-lock.json except for top of tree nodes,
    // only npm-shrinkwrap.json.
    return Promise.all(swonly ? [
      null,
      maybeReadFile(this.root + '/npm-shrinkwrap.json'),
    ] : [
      maybeReadFile(this.root + '/package-lock.json'),
      maybeReadFile(this.root + '/npm-shrinkwrap.json'),
    ]).then(([lock, sw]) => {
      const data = lock || sw
      // don't use detect-indent, just pick the first line.
      const indent = data.match(/^\{\n([\s\t]+)/)
      if (indent)
        this.indent = indent[1]
      this.filename = `${this.root}/${
        swonly || sw && !lock ? 'npm-shrinkwrap' : 'package-lock'}.json`
      this.type = basename(this.filename)
      this.loadedFromDisk = !!data
      return data ? parseJSON(data) : {}
    }).then(lock => {
      this.data = {
        ...lock,
        lockfileVersion,
        requires: true,
        packages: lock.packages || {},
        dependencies: lock.dependencies || {},
      }
      if (lock.packagelockVersion === 1 || lock.dependencies && !lock.packages)
        this[_loadAll]('', null, this.data)

      return this
    })
  }

  [_loadAll] (location, name, lock) {
    // migrate a v1 package lock to the new format.
    this[_metaFromLock](location, name, lock)
    if (lock.dependencies) {
      Object.keys(lock.dependencies).forEach(name =>
        this[_loadAll](
          location + (location ? '/' : '') + 'node_modules/' + name,
          name,
          lock.dependencies[name]
        ))
    }
  }

  [_lockFromLoc] (lock, path, i = 0) {
    if (!lock)
      return null

    if (path[i] === '')
      i++

    if (i >= path.length)
      return lock

    if (!lock.dependencies)
      return null

    return this[_lockFromLoc](lock.dependencies[path[i]], path, i + 1)
  }

  [_createLockFromLoc] (lock, path, i = 0) {
    if (path[i] === '')
      i++

    if (i === path.length)
      return lock

    lock.dependencies = lock.dependencies || {}
    lock.dependencies[path[i]] = lock.dependencies[path[i]] || {}
    return this[_createLockFromLoc](lock.dependencies[path[i]], path, i + 1)
  }

  // pass in a path relative to the root, or an absolute path,
  // get back a /-normalized location based on root path.
  [_pathToLoc] (path) {
    return relative(this.root, resolve(this.root, path)).replace(/\\/g, '/')
  }

  delete (nodePath) {
    if (!this.data)
      throw new Error('run load() before getting or setting data')
    const location = this[_pathToLoc](nodePath)
    this[_awaitingUpdate].delete(location)

    delete this.data.packages[location]
    const path = location.split(/(?:^|\/)node_modules\//)
    const name = path.pop()
    const pLock = this[_lockFromLoc](this.data, path)
    if (pLock && pLock.dependencies)
      delete pLock.dependencies[name]
  }

  get (nodePath) {
    if (!this.data)
      throw new Error('run load() before getting or setting data')

    const location = this[_pathToLoc](nodePath)
    if (this[_awaitingUpdate].has(location))
      this[_updateWaitingNode](location)

    // first try to get from the newer spot, which we know has
    // all the things we need.
    if (this.data.packages[location])
      return this.data.packages[location]

    // otherwise, fall back to the legacy metadata, and hope for the best
    // get the node in the shrinkwrap corresponding to this spot
    const path = location.split(/(?:^|\/)node_modules\//)
    const name = path[path.length - 1]
    const lock = this[_lockFromLoc](this.data, path)

    return this[_metaFromLock](location, name, lock)
  }

  [_metaFromLock] (location, name, lock) {
    if (!lock)
      return {}

    const meta = {
      name: name || lock.name,
      ...(lock.requires && typeof lock.requires === 'object'
        ? { dependencies: lock.requires } : {}),
    }

    if (lock.version && !lock.integrity) {
      // this is generally always going to be a git url or symlink
      // If it's a symlink, we fall through and pick up the resolved path.
      //
      // For git, always save the full SSH url.  we'll actually fetch the
      // tgz most of the time, since it's faster, but it won't work for
      // private repos, and we can't get back to the ssh from the tgz,
      // so we store the ssh instead.
      // For unknown git hosts, just resolve to the raw spec in lock.version
      const spec = npa.resolve(name, lock.version, this.root)
      if (spec && spec.type === 'git') {
        if (spec.hosted)
          meta.resolved = 'git+' + spec.hosted.sshurl({ noCommittish: false })
        else
          meta.resolved = lock.version
        return this.data.packages[location] = meta
      } else if (spec && spec.registry)
        meta.version = lock.version
    }

    // at this point, we know that the spec is either a registry dep
    // (ie, version, because locking, which means a resolved url),
    // or a remote dep, or file: url.  Remote deps and file urls
    // have a fetchSpec equal to the fully resolved thing.
    // Registry deps, we take what's in the lockfile.
    const spec = specFromLock(name, lock, this.root)
    if (lock.integrity)
      meta.integrity = lock.integrity
    if (spec && (lock.resolved || !spec.registry))
      meta.resolved = spec.registry ? lock.resolved : spec.fetchSpec

    // save it for next time
    return this.data.packages[location] = meta
  }

  add (node) {
    if (!this.data)
      throw new Error('run load() before getting or setting data')

    // will be actually updated on read
    const loc = relative(this.root, node.path).replace(/\\/g, '/')
    this[_awaitingUpdate].set(loc, node)
    return
  }

  [_updateWaitingNode] (loc) {
    const node = this[_awaitingUpdate].get(loc)
    this[_awaitingUpdate].delete(loc)

    const meta = Shrinkwrap.metaFromNode(node)
    this.data.packages[loc] = meta
    const path = loc.split(/(?:^|\/)node_modules\//)
    const lock = this[_createLockFromLoc](this.data, path)

    // set legacy shrinkwrap data
    if (node.path === this.root) {
      lock.name = node.name
      if (node.package && node.package.version)
        lock.version = node.package.version
    }

    // npm v6 and before tracked 'from', meaning "the request that led
    // to this package being installed".  However, that's inherently
    // racey and non-deterministic in a world where deps are deduped
    // ahead of fetch time.  In order to maintain backwards compatibility
    // with v6 in the lockfile, we do this trick where we pick a valid
    // dep link out of the edgesIn set.  Choose the edge with the fewest
    // number of `node_modules` sections in the requestor path, and then
    // lexically sort afterwards.
    const edge = [...node.edgesIn].filter(edge => edge.valid).sort((a, b) => {
      const aloc = a.from.location.split('node_modules')
      const bloc = b.from.location.split('node_modules')
      /* istanbul ignore next - sort calling order is indeterminate */
      return aloc.length > bloc.length ? 1
        : bloc.length > aloc.length ? -1
        : aloc[aloc.length - 1].localeCompare(bloc[bloc.length - 1])
    })[0]
    // if we don't have one, just an empty object so nothing matches below
    // This will effectively just save the version and resolved, as if it's
    // a standard version/range dep, which is a reasonable default.
    const spec = !edge ? {}
      : npa.resolve(node.name, edge.spec, edge.from.realpath)

    const rSpec = node.resolved ? npa.resolve(node.name, node.resolved)
      : {}

    if (node.target)
      lock.version = `file:${relative(this.root, node.realpath)}`
    else if (spec && (spec.type === 'file' || spec.type === 'remote'))
      lock.version = spec.saveSpec
    else if (spec && spec.type === 'git' || rSpec && rSpec.type === 'git') {
      lock.version = node.resolved
      if (spec.raw)
        lock.from = spec.raw
    } else if (node.package && node.package.name && node.package.name !== node.name)
      lock.version = `npm:${node.package.name}@${node.package.version}`
    else if (node.package && node.package.version)
      lock.version = node.package.version

    if (node.inBundle)
      lock.inBundle = true

    // when we didn't resolve to git, file, or dir, and didn't request
    // git, file, dir, or remote, then the resolved value is necessary.
    if (node.resolved &&
        !node.target &&
        rSpec.type !== 'git' &&
        rSpec.type !== 'file' &&
        rSpec.type !== 'directory' &&
        spec.type !== 'directory' &&
        spec.type !== 'git' &&
        spec.type !== 'file' &&
        spec.type !== 'remote')
      lock.resolved = node.resolved

    if (node.integrity)
      lock.integrity = node.integrity

    if (node.extraneous)
      lock.extraneous = true

    if (node.devOptional)
      lock.devOptional = true

    if (node.dev)
      lock.dev = true

    if (node.optional)
      lock.optional = true

    if (node.edgesOut.size > 0) {
      if (node.path !== this.root) {
        lock.requires = [...node.edgesOut.entries()].reduce((set, [k, v]) => {
          set[k] = v.spec
          return set
        }, {})
      } else {
        lock.requires = true
      }
    }
  }

  commit () {
    if (this[_awaitingUpdate].size > 0) {
      for (const loc of this[_awaitingUpdate].keys()) {
        this[_updateWaitingNode](loc)
      }
    }
    return this.data
  }

  save () {
    if (!this.data)
      throw new Error('run load() before saving data')

    const json = stringify(this.commit(), swKeyOrder, this.indent)
    // XXX should we also hard-link to node_modules/arborist-lock.json?
    return writeFile(this.filename, json)
  }
}

module.exports = Shrinkwrap

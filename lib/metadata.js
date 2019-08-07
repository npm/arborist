// load resolved and integrity fields from (in order of precedence):
// - node_modules/.arborist-metadata.json
// - npm-shrinkwrap.json
// - package-lock.json
// - package.json
//
// TODO:
// - yarn.lock

const {promisify} = require('util')
const readFile = promisify(require('fs').readFile)
const { join } = require('path')
const specFromLock = require('./spec-from-lock.js')
const npa = require('npm-package-arg')

// best-effort reading of a json file
const readJson = f => readFile(f, 'utf8')
  .then(d => JSON.parse(d), er => null)

const sriSha1 = sha1 => `sha1-${Buffer.from(sha1, 'hex').toString('base64')}`

// git specs on known hosts will have a 'hosted' object which
// can give us a fully resolved ssh url.
// if we don't already have integrity for a reg dep (spooky) then
// we can't infer without actually fetching the tarball.
// It's tempting to think we can infer the resolved url for registry deps
// if it isn't already present in the lock, but while dist.tarball is
// generally consistent and guessable, it's up to the registry to
// decide, and the CLI contract is that we fetch what we're given.
const metaFromLock = (lock, path, where, name) => {
  if (!lock)
    return null

  if (path[0] === '')
    path.shift()

  if (path.length) {
    if (!lock.dependencies)
      return null

    const parent = path.shift()
    const scoped = parent.charAt(0) === '@' ? path.shift() : null
    name = scoped ? `${parent}/${scoped}` : parent
    const dep = lock.dependencies[name]
    return metaFromLock(dep, path, where, name)
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
    const spec = npa.resolve(name, lock.version, where)
    if (spec && spec.type === 'git') {
      return {
        resolved: !spec.hosted ? lock.version
          : 'git+ssh://' + spec.hosted.ssh({ noCommittish: false })
      }
    }
  }

  // at this point, we know that the spec is either a registry dep
  // (ie, version, because locking, which means a resolved url),
  // or a remote dep, or file: url.  Remote deps and file urls
  // have a fetchSpec equal to the fully resolved thing.
  // Registry deps, we take what's in the lockfile.
  const spec = specFromLock(name, lock, where)
  const meta = {
    integrity: lock.integrity,
    // prefer the resolved from the spec, so we get full path for file/dir
    resolved: spec.registry ? lock.resolved : spec.fetchSpec
  }

  return meta
}

const _metaFromLock = Symbol('_metaFromLock')
const _metaFromPkg = Symbol('_metaFromPkg')

class Metadata {
  constructor (root) {
    root = root || '.'
    this.root = root
    this.files = {
      arbmeta: root + '/node_modules/.arborist-metadata.json',
      lockfile: root + '/package-lock.json',
      shrinkwrap: root + '/npm-shrinkwrap.json',
    }
    this.data = null
  }

  load () {
    return Promise.all([
      readJson(this.files.arbmeta),
      readJson(this.files.lockfile),
      readJson(this.files.shrinkwrap),
    ]).then(([arbmeta, lockfile, shrinkwrap]) => {
      this.data = { arbmeta: arbmeta || {}, lockfile, shrinkwrap }
      return this
    })
  }

  [_metaFromLock] (node) {
    if (!node.location)
      return null
    const lock = this.data.shrinkwrap || this.data.lockfile
    return metaFromLock(lock, node.location.split('/'), this.root, node.name)
  }

  [_metaFromPkg] (node) {
    let resolved = node.package._resolved || null
    if (resolved) {
      const spec = npa.resolve(node.name, resolved)
      if (spec && spec.type === 'git' && spec.hosted)
        resolved = 'git+ssh://' + spec.hosted.ssh({ noCommittish: false })
    }
    const sri = node.package._integrity
    const shasum = node.package._shasum
    const integrity = sri ? sri : shasum ? sriSha1(shasum) : null
    return (resolved || integrity) ? {
      resolved,
      integrity,
    } : null
  }

  memo (node, meta) {
    if (!meta) {
      const { resolved, integrity } = node
      meta = { resolved, integrity }
    }
    if (node.location && (meta.resolved || meta.integrity))
      this.data.arbmeta[node.location] = meta
    return meta
  }

  dememo (node) {
    if (node.location)
      delete this.data.arbmeta[node.location]
  }

  get (node) {
    if (!this.data)
      throw new Error('attemping to read metadata before loading')

    if (node.location === '/')
      return {}

    if (this.data.arbmeta[node.location])
      return this.data.arbmeta[node.location]

    const fromLock = this[_metaFromLock](node)
    if (fromLock)
      return this.memo(node, fromLock)

    if (node.isLink)
      return this.memo(node, { resolved: node.realpath })

    if (node.package) {
      const fromPkg = this[_metaFromPkg](node)
      if (fromPkg)
        return this.memo(node, fromPkg)
    }

    return {}
  }
}

Metadata.load = root => new Metadata(root).load()

module.exports = Metadata

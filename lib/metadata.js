// load resolved and integrity fields from (in order of precedence):
// - node_modules/.arborist-lock.json
// - npm-shrinkwrap.json
// - package-lock.json
// - package.json
//
// TODO:
// - yarn.lock
// - pnpm-lock.yaml

const {promisify} = require('util')
const readFile = promisify(require('fs').readFile)
const { join, relative } = require('path')
const specFromLock = require('./spec-from-lock.js')
const npa = require('npm-package-arg')
const parseJSON = require('parse-conflict-json')
const readShrinkwrap = require('./read-shrinkwrap.js')

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

const pkgMetaKeys = [
  'name',
  'version',
  'dependencies',
  'peerDependencies',
  'peerDependenciesMeta',
  'optionalDependencies',
  'bundleDependencies',
]
const nodeMetaKeys = [
  'resolved',
  'integrity',
  'inBundle',
]
const metaFromNode = node => {
  if (node.isLink)
    return { resolved: relative(node.path, node.realpath) }

  const meta = {}
  if (node.package) {
    pkgMetaKeys.forEach(key => {
      const val = node.package[key]
      // skip empty objects and falsey values
      if (val && !(typeof val === 'object' && !Object.keys(val).length))
        meta[key] = node.package[key]
    })
    if (node.isTop && node.package.devDependencies)
      meta.devDependencies = node.package.devDependencies
  }
  nodeMetaKeys.forEach(key => {
    if (node[key])
      meta[key] = node[key]
  })
  return meta
}

class Metadata {
  constructor (root) {
    root = root || '.'
    this.root = root
    this.files = {
      arblock: root + '/node_modules/.arborist-lock.json',
      lockfile: root + '/package-lock.json',
      shrinkwrap: root + '/npm-shrinkwrap.json',
    }
    this.data = null
  }

  load () {
    return Promise.all([
      readJson(this.files.arblock),
      readShrinkwrap(this.files.lockfile),
      readShrinkwrap(this.files.shrinkwrap),
    ]).then(([arblock, lockfile, shrinkwrap]) => {
      this.data = {
        arblock: arblock || {
          lockfileVersion: 2,
          packages: {},
        },
        lockfile: lockfile || shrinkwrap,
      }
      return this
    })
  }

  [_metaFromLock] (node) {
    if (!node.location)
      return null
    const lock = this.data.lockfile
    return metaFromLock(lock, node.location.split(/(?:^|\/)node_modules\//), this.root, node.name)
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
      ...(resolved ? { resolved } : {}),
      ...(integrity ? { integrity } : {}),
    } : null
  }

  memo (node, meta) {
    meta = {
      ...(metaFromNode(node)),
      ...(meta || {}),
    }
    this.data.arblock.packages[node.location || '.'] = meta
    return meta
  }

  dememo (node) {
    delete this.data.arblock.packages[node.location || '.']
  }

  get (node) {
    if (!this.data)
      throw new Error('attemping to read metadata before loading')

    // always save what we have, but keep looking if the memoized
    // version doesn't have resolved or integrity.

    const loc = node.location || '.'
    const fromMemo = this.data.arblock.packages[loc]
    if (fromMemo && (fromMemo.resolved || fromMemo.integrity))
      return fromMemo

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

    return fromMemo || {}
  }
}

Metadata.load = root => new Metadata(root).load()

module.exports = Metadata

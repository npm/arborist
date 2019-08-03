// load resolved and integrity fields from (in order of precedence):
// - node_modules/.arborist-metadata.json
// - package-lock.json
// - npm-shrinkwrap.json
// - package.json
//
// TODO:
// - yarn.lock

const {promisify} = require('util')
const readFile = promisify(require('fs').readFile)
const { join } = require('path')
// best-effort reading of a json file
const readJson = f => readFile(f, 'utf8')
  .then(d => JSON.parse(d), er => null)

const sriSha1 = sha1 => `sha1-${Buffer.from(sha1, 'hex').toString('base64')}`

const metaFromLock = (lock, path) => {
  if (path[0] === '')
    path.shift()

  if (!lock)
    return null

  if (!path.length)
    return {
      integrity: lock.integrity,
      resolved: lock.resolved ? lock.resolved : lock.version,
    }

  const parent = path.shift()
  const scoped = parent.charAt(0) === '@' ? path.shift() : null
  const name = scoped ? `${parent}/${scoped}` : parent

  return metaFromLock(lock.dependencies[name], path)
}

class Metadata {
  constructor (root) {
    root = root || '.'
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
      this.data = { arbmeta, lockfile, shrinkwrap }
      return this
    })
  }

  get (node) {
    if (!this.data)
      throw new Error('attemping to read metadata before loading')

    if (node.location === '/')
      return {}

    if (this.data.arbmeta) {
      const meta = this.data.arbmeta[node.location]
      if (meta)
        return meta
    }

    if (this.data.lockfile) {
      const meta = metaFromLock(this.data.lockfile, node.location.split('/'))
      if (meta)
        return meta
    }

    if (this.data.shrinkwrap) {
      const meta = metaFromLock(this.data.shrinkwrap, node.location.split('/'))
      if (meta)
        return meta
    }

    if (node.package) {
      const resolved = node.package._resolved || null
      const integrity = node.package._integrity
      const shasum = node.package._shasum
      return {
        resolved: node.package._resolved,
        integrity: integrity ? integrity : shasum ? sriSha1(shasum) : null,
      }
    }

    return {}
  }
}

module.exports = Metadata

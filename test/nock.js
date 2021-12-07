const nock = require('nock')
const tar = require('tar-stream')
const Stream = require('stream')
const tap = require('tap')
const fs = require('fs')

/* Utility to extract a buffer out of a stream */
class StreamToBuffer extends Stream.Writable {
  constructor (opts) {
    super(opts)
    this._bufferArray = []
  }

  _write (chunk, encoding, callback) {
    this._bufferArray.push(chunk)
    callback()
  }

  _final (callback) {
    this.buffer = Buffer.concat(this._bufferArray)
    callback()
  }
}

/**
 * packPackageToStream
 * Uses 'tar-stream' to create the tar stream without touching the file system.
 */
function packPackageToStream (name, version, dependencies) {
  const pack = tar.pack()
  const manifest = JSON.stringify({
    name,
    version,
    dependencies
  })
  const index = `console.log('Hello from ${name}@${version}!')`

  pack.entry({ name, type: 'directory' })
  pack.entry({ name: `${name}/package.json` }, manifest)
  pack.entry({ name: `${name}/index.js` }, index)

  pack.finalize()
  return pack
}


/**
 * Pack a package for publish.
 * Returns a buffer containing a tarball of the package.
 */
async function packPackage (name, version, dependencies) {
  const packStream = packPackageToStream(name, version, dependencies)

  const tarBuffer = packStream.pipe(new StreamToBuffer())

  return new Promise((resolve, reject) => {
    tarBuffer.on('close', () => {
      resolve(tarBuffer.buffer)
    })
    tarBuffer.on('error', reject)
  })
}

/**
 * Publish the given package to the given registry.
 */
async function publishPackage (registry, name, version, dependencies) {
  const packument = {
    name,
    'dist-tags': {
      latest: version
    },
    versions: {
      [version]: {
        name,
        version,
        dependencies,
        dist: {
          tarball: `${registry}/${name}/${version}.tar`
        }
      }
    }
  }

  const tarball = await packPackage(name, version, dependencies)

  nock(registry)
    .get(`/${name}`)
    .reply(200, packument)
    .get(`/${name}/${version}.tar`)
    .reply(200, tarball)
}

/**
 * Given an object decribing a dependency graph, this funcion will materialize
 * this dependency graph on disk and in a registry.
 * 
 * The input has the following shape:
 * {
 *   registry: [ package1, package2,... ],
 *   root: { name: <name>, version: <version>, dependencies: <dependencies> }
 * }
 * package# represent a registry package and is of the following shape: 
 * { name: <name>, version: <version>, dependencies?: <dependencies> }
 *
 * The return value is of the form { dir, registry } where:
 * - dir is the location on disk of the root package
 * - registry is the url of the registry which has the necessary packages
 *
 * Only simple graphs are currenly supported, the following features will come in further iterations:
 * - workspaces
 * - dev and peer dependencies
 * - multiple versions of the same package
 * - lockfile
 * - shinkwrap
 * - bundled dependencies
 *
 * The API of this function is not stable and is likely to evolve as we add more features.  
 */
async function getRepo (graph) {
  // Generate a new random registry every time to prevent interference between tests
  const registry = `https://${Math.random().toString(36).substring(2)}.test`
  
  // Publish all the registery packages
  await Promise.all(graph.registry.map(o => 
    publishPackage(registry, o.name, o.version, o.dependencies)))

  // Generate the root of the graph on disk
  const root = graph.root
  const dir = tap.testdir({
    'package.json': JSON.stringify({
      name: root.name,
      version: root.version,
      dependencies: root.dependencies
    })
  })
  return { dir, registry }
}

exports.getRepo = getRepo

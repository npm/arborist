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
function packPackageToStream (manifest) {
  const {
    name,
    version,
    dependencies,
    peerDependencies
  } = manifest

  const pack = tar.pack()
  const manifestString = JSON.stringify({
    name,
    version,
    dependencies,
    peerDependencies
  })
  const index = `console.log('Hello from ${name}@${version}!')`

  pack.entry({ name, type: 'directory' })
  pack.entry({ name: `${name}/package.json` }, manifestString)
  pack.entry({ name: `${name}/index.js` }, index)

  pack.finalize()
  return pack
}


/**
 * Pack a package for publish.
 * Returns a buffer containing a tarball of the package.
 */
async function packPackage (manifest) {
  const packStream = packPackageToStream(manifest)

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
async function publishPackage (registry, manifest, packuments) {
  const {
    name,
    version,
    dependencies,
    peerDependencies
  } = manifest

  if (packuments.has(name)) {
    packuments.get(name).versions[version] = {
      name,
      version,
      dependencies,
      peerDependencies,
      dist: {
        tarball: `${registry}/${name}/${version}.tar`
      }
    }
  } else {
    packuments.set(name, {
      name,
      'dist-tags': {
        latest: version
      },
      versions: {
        [version]: {
          name,
          version,
          dependencies,
          peerDependencies,
          dist: {
            tarball: `${registry}/${name}/${version}.tar`
          }
        }
      }
    })
  }


  const tarball = await packPackage(manifest)

  nock(registry)
    .persist()
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
  
  const packuments = new Map()
  // Publish all the registery packages
  await Promise.all(graph.registry.map(o => 
    publishPackage(registry, o, packuments)))

  packuments.forEach((packument, name) => {
    nock(registry)
      .get(`/${name}`)
      .reply(200, packument)
  })


  // Generate the root of the graph on disk
  const root = graph.root
  const workspaces = graph.workspaces || []
  const repo = {
    'package.json': JSON.stringify({
      workspaces: workspaces.length !== 0 ? ["packages/*"] : undefined,
      name: root.name,
      version: root.version,
      dependencies: root.dependencies
    }),
    'packages': {}
  }
  workspaces.forEach(wp => {
    repo.packages[wp.name] = { 
      'package.json': JSON.stringify({
        name: wp.name,
        version: wp.version,
        dependencies: wp.dependencies
      }),
      'index.js': `console.log('Hello from workspace ${wp.name}')`
    }
  })
  const dir = tap.testdir(repo)
  return { dir, registry }
}

exports.getRepo = getRepo

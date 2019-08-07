// Load the tree from the package-lock.json file.  This is the fastest
// and most trusting approach to building the tree.
//
// This ignores node_modules entirely.
//
// Note that depending on the dep type, we may or may not know
// that the tree is valid!  We assume that it must be valid because
// the lockfile got here somehow, and we are planning to lay it out
// based on what the lockfile says, valid or not.
//
// Dep types we'll expect to see in a shrinkwrap:
// version: { version, resolved, integrity }
//   - package is {name, version}
// alias: { version (npm:name@<otherSpec>), resolved, integrity }
//   - package is {name,npa(version).subSpec.version}
// remote: { version (resolved url), integrity }
//   - package is {name, version: null}
// file: { version (file url), integrity }
//   - package is {name, version: null}
// dir: { version (file url), integrity, no dependencies }
//   - package is {name, version:null}
// git: { version (full resolved git url with committish), from (requested) }
//   - package is {name, version:null}
// git shorthand: { version (shortand + committish), from (requested) }
//   - package is {name, version:null}
//
// In any of these except dir, we'll have a "requires" object which can be
// assumed to be "dependencies" of the package as a rough approximation.  This
// loses the fidelity of the TYPE of dep, but that's ok, because the
// dev/optional flags are set explicitly in the shrinkwrap.  Thus, it's
// important that we NOT run calcDepFlags on the resulting tree.
//
// We load a Metadata object just to get the resolved and integrity
// values in a consistent way without duplicating all the logic to
// read those things out of the shrinkwrap. Presumably node_modules
// doesn't exist yet, so that's where it'll be getting stuff from.
//
// Load tree this way and then reify it == npm ci (minus lifecycles)

const { promisify } = require('util')
const Node = require('./node.js')
const Link = require('./link.js')
const readFile = promisify(require('fs').readFile)
const { resolve, join, relative } = require('path')
const url = require('url')
const rpj = promisify(require('read-package-json'))
const Metadata = require('./metadata.js')
const specFromLock = require('./spec-from-lock.js')
const versionFromTgz = require('./version-from-tgz.js')

const loadVirtual = root => {
  root = root || '.'
  return Promise.all([
    new Metadata(root).load(),
    rpj(resolve(root, 'package.json')).then(pkg => pkg, er => {}),
  ]).then(([meta, pkg]) => loadNode({
    root,
    path: root,
    physical: resolve(root),
    lock: meta.data.shrinkwrap || meta.data.lockfile,
    pkg,
    meta
  }))
}

// only called for case where we're lacking a package.json.
// ie, all packages beyond the top level, and top level only
// if a package.json is missing.
const pkgFromLock = ({ name, lock, where, spec }) => {
  const pkg = pkgFromSpec({ name, lock, where, spec })

  // assign deps for lock.requires, if it's not top level
  // otherwise, assign from lock.dependencies
  // always set the value to lock.dependencies[name].version
  // which is likely not the actual dep in the package.json,
  // but will certainly be satisfied by the thing it actually gets.
  if (lock.requires && typeof lock.requires === 'object')
    pkg.dependencies = lock.requires
  else if (lock.dependencies) {
    pkg.dependencies = Object.keys(lock.dependencies).reduce((deps, name) => {
      const ldep = lock.dependencies[name]
      deps[name] = ldep.version || ldep.from || ldep.resolved || ''
      return deps
    }, {})
  }

  return pkg
}

const pkgFromSpec = ({ name, lock, where, spec }) => {
  switch (spec.type) {
    case 'version':
      // commonest and highest fidelity
      return { name, version: lock.version }

    case 'alias':
      return pkgFromSpec({
        name,
        spec: spec.subSpec,
        where,
        lock: {
          ...lock,
          version: spec.subSpec.fetchSpec,
        },
      })

    case 'remote':
    case 'file':
      // try to parse the version from the tgz, often possible
      return { name, version: versionFromTgz(name, spec.fetchSpec) }

    case 'git':
    case 'dir':
    default:
      // best we can do
      return { name }
  }
}

const loadNode = ({ name, path, physical, lock, pkg, parent, meta, root }) => {
  if (!lock) {
    throw new Error(
      'loadVirtual requires a package-lock.json or npm-shrinkwrap.json')
  }

  const spec = pkg ? {} : specFromLock(name, lock, root)
  pkg = pkg || pkgFromLock({ name, lock, where: path, spec })

  pkg.bundleDependencies = []
  const node = spec.type === 'directory'
    ? new Link({
        pkg,
        path,
        realpath: spec.fetchSpec,
        parent,
        meta,
      })
    : new Node({ pkg, path, realpath: physical, parent, meta })

  node.extraneous = false
  if (name)
    node.name = name

  if (!parent) {
    node.dev = false
    node.devOptional = false
    node.optional = false
  } else {
    node.dev = lock.dev
    node.optional = lock.optional
    node.devOptional = lock.devOptional || lock.dev || lock.optional
  }

  if (lock.dependencies && !node.isLink) {
    for (const [name, dep] of Object.entries(lock.dependencies)) {
      if (dep.bundled)
        node.package.bundleDependencies.push(name)

      loadNode({
        name,
        lock: dep,
        path: join(path, 'node_modules', name),
        physical: join(physical, 'node_modules', name),
        parent: node,
        meta,
        root,
      })
    }
  }

  return node
}

module.exports = loadVirtual

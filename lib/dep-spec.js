const types = [
  'peerDependencies',
  'devDependencies',
  'optionalDependencies',
  'dependencies',
]

const findType = (pkg, name) => {
  for (const t of types) {
    if (pkg[t] && typeof pkg[t] === 'object' && pkg[t][name] !== undefined)
      return t
  }
  return 'dependencies'
}

// given a dep name and spec, update it wherever it exists in
// the manifest, or add the spec to 'dependencies' if not found.
const updateDepSpec = (pkg, name, newSpec) => {
  const type = findType(pkg, name)
  pkg[type] = pkg[type] || {}
  pkg[type][name] = newSpec
  return pkg
}

const shouldAddToDependencies = (pkg, type, key) =>
  type !== 'dependencies'
    // make sure the dependency is not already listed as an optional dep
    || !Object.prototype.hasOwnProperty.call(pkg.optionalDependencies || {}, key)

// sort alphabetically all types of deps for a given package
const updateDeps = (pkg) => {
  for (const type of types) {
    if (pkg && pkg[type]) {
      pkg[type] = Object.keys(pkg[type])
        .sort((a, b) => a.localeCompare(b))
        .reduce((res, key) => {
          if (shouldAddToDependencies(pkg, type, key))
            res[key] = pkg[type][key]
          return res
        }, {})
    }
  }
  return pkg
}

module.exports = {
  updateDeps,
  updateDepSpec,
}

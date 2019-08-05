const npa = require('npm-package-arg')

const _spec = Symbol('_spec')

// extracted from cli/lib/install/realize-shrinkwrap-specifier.js
const specFromLock = (name, lock, where) => {
  try {
    if (lock.version && lock.integrity)
      return npa.resolve(name, lock.version, where)
    else if (lock.from) {
      // legacy metadata includes "from", but not integrity
      const spec = npa.resolve(name, lock.from, where)
      if (spec.registry && lock.version) {
        return npa.resolve(name, lock.version, where)
      } else if (!lock.resolved) {
        return spec
      }
    }
    if (lock.resolved)
      return npa.resolve(name, lock.resolved, where)
  } catch (_) { }
  return npa.resolve(name, lock.version, where)
}

module.exports = (name, lock, where) => specFromLock(name, lock, where)
  //lock[_spec] ? lock[_spec] : lock[_spec] = specFromLock(name, lock, where)

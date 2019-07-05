// extracted from npm cli's lib/install/deps.js
const semver = require('semver')
const npa = require('npm-package-arg')
const {relative} = require('path')
const registryTypes = { range: true, version: true }

const depValid = (child, requested, requestor) => {
  // XXX types not being checked here:
  // - tag - name matches and fetchSpec is the tag
  // - remote - url matches _requested.fetchSpec
  //
  // Also, NB that npa.resolve() can throw!  In that case, add as a
  // error on the requestor tree, but return true so we don't flag it
  // as invalid.  (The request is invalid, not the dep.)
  if (typeof requested === 'string') {
    // '' is equivalent to '*'
    requested = npa.resolve(child.name, requested || '*', requestor.realpath)
  }

  // ranges of * ALWAYS count as a match, because when downloading we allow
  // prereleases to match * if there are ONLY prereleases
  if (requested.type === 'range' && requested.fetchSpec === '*')
    return true

  if (requested.type === 'directory') {
    if (!child.isLink)
      return false
    return relative(child.realpath, requested.fetchSpec) === ''
  }

  // XXX relevant when loading tree from shrinkwrap rather than node_modules
  // the fromShrinkwrap field is the npa parsed dependency requirement.
  //
  // if (requested.type === 'git' && child.fromShrinkwrap) {
  //   const fromSw = child.package._from ? npa(child.package._from)
  //     : child.fromShrinkwrap
  //   fromSw.name = requested.name // we're only checking specifiers here
  //   if (fromSw.toString() === requested.toString())
  //     return true
  // }

  if (requested.type === 'git' && requested.gitRange) {
    const sameRepo = npa(child.package._from).fetchSpec === requested.fetchSpec
    return sameRepo &&
      semver.satisfies(child.package.version, requested.gitRange, true)
  }

  if (requested.type === 'alias') {
    return depValid(child, requested.subSpec, requestor)
  }

  if (registryTypes[requested.type]) {
    // it's a registry type, try to semver it.
    return semver.satisfies(child.package.version, requested.fetchSpec, true)
  }

  const childReq = child.package._requested
  if (childReq) {
    if (childReq.rawSpec === requested.rawSpec)
      return true
    if (childReq.type === requested.type &&
        childReq.saveSpec === requested.saveSpec)
      return true
  }

  // If _requested didn't exist OR if it didn't match then we'll try using
  // _from. We pass it through npa to normalize the specifier.
  //
  // This can happen when installing from an `npm-shrinkwrap.json` where
  // `_requested` will be the tarball URL from `resolved` and thus can't
  // match what's in the `package.json`.
  //
  // In those cases _from, will be preserved and we can compare that to
  // ensure that they really came from the same sources.
  //
  // You'll see this scenario happen with at least tags and git dependencies.
  // Some buggy clients will write spaces into the module name part of a
  // _from.
  if (child.package._from) {
    const fromReq = npa(child.package._from)
    if (fromReq.rawSpec === requested.rawSpec)
      return true
    if (fromReq.type === requested.type &&
        fromReq.saveSpec &&
        fromReq.saveSpec === requested.saveSpec)
      return true
  }

  // nothing matched
  return false
}

module.exports = depValid

// take a path and a resolved value, and turn it into a resolution from
// the given new path.  This is used with converting a package.json's
// relative file: path into one suitable for a lockfile, or between
// lockfiles, and for converting hosted git repos to a consistent url type.
const npa = require('npm-package-arg')
const relpath = require('./relpath.js')
const consistentResolve = (resolved, fromPath, toPath) => {
  if (!resolved)
    return resolved || null

  try {
    const {fetchSpec, saveSpec, type, hosted, rawSpec} = npa(resolved, fromPath)
    return type === 'file' || type === 'directory'
        ? 'file:' + (toPath ? relpath(toPath, fetchSpec) : fetchSpec)
      : hosted ? 'git+' + hosted.sshurl({ noCommittish: false })
      : type === 'git' ? saveSpec
      // just strip off the name, but otherwise return as-is
      : rawSpec
  } catch (_) {
    // whatever we passed in was not acceptable to npa.
    // leave it 100% untouched.
    return resolved
  }
}
module.exports = consistentResolve

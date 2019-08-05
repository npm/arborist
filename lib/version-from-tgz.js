const semver = require('semver')
const {basename} = require('path')
module.exports = (name, tgz) => {
  const base = basename(tgz)
  if (!base.endsWith('.tgz'))
    return null
  if (!base.startsWith(name + '-'))
    return null
  const parsed = semver.parse(base.substring(name.length + 1, base.length - 4))
  return parsed ? parsed.version : null
}

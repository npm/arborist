// prepares a tree for sending to the audit registry endpoint,
// and returns the resulting audit object.  Arborists call this
// as soon as the eventual ideal tree is known (ie, after loading
// all bundled and shrinkwrapped deps).
//
// Quick audit: POST /-/npm/v1/security/audits/quick
// Full audit: POST /-/npm/v1/security/audits
//
// The only difference between the two results is that the quick audit
// does not provide remediation actions.
//
// Data submitted is:
// {
//   ...shrinkwrap data,
//   requires: { top level package requirements },
//   install: [ list of added deps ], // todo
//   remove: [ list of removed deps ], // todo
//   npm_version,
//   node_version,
//   platform,
//   node_env,
// }

const fetch = require('npm-registry-fetch')

const full = (tree, opts) =>
  submit('/-/npm/v1/security/audits', tree, opts)

const quick = (tree, opts) =>
  submit('/-/npm/v1/security/audits/quick', tree, opts)

const procLog = require('./proc-log.js')

const submit = async (url, tree, opts) => {
  const {
    log = procLog,
    audit = true,
  } = opts

  if (tree.inventory.size === 0)
    return null

  if (audit === false)
    return null

  try {
    const res = await fetch(url, {
      ...opts,
      method: 'POST',
      gzip: true,
      body: prepareData(tree, opts),
    })

    return await res.json()
  } catch (er) {
    log.verbose('audit error', er)
    log.silly('audit error', String(er.body))
    return null
  }
}

// TODO: handle omit so you can do npm audit --production
const prepareData = (tree, opts) => {
  const { npmVersion: npm_version } = opts
  const node_version = process.version
  const { platform, arch } = process
  const { NODE_ENV: node_env } = process.env
  const data = tree.meta.commit()
  return JSON.stringify({
    ...data,
    requires: {
      ...(tree.package.devDependencies || {}),
      ...(tree.package.peerDependencies|| {}),
      ...(tree.package.optionalDependencies|| {}),
      ...(tree.package.dependencies|| {}),
    },
    node_version,
    npm_version,
    platform,
    arch,
    node_env,
  }, 0, 2)
}

module.exports = { quick, full }

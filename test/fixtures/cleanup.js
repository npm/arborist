process.env.ARBORIST_FIXTURE_CLEANUP = '1'
require('./index.js')

// now make sure it actually did clean up everything
const { readdirSync } = require('fs')
const { resolve } = require('path')
const walk = dir => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory())
      walk(resolve(dir, entry.name))
    else if (entry.isSymbolicLink())
      throw Object.assign(new Error('symlink left in fixtures dir'), {
        path: resolve(dir, entry.name),
      })
  }
}
walk(__dirname)

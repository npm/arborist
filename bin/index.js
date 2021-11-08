#!/usr/bin/env node

const usage = () => `Arborist - the npm tree doctor

Version: ${require('../package.json').version}

# USAGE
  arborist <cmd> [path] [options...]

# COMMANDS

* reify: reify ideal tree to node_modules (install, update, rm, ...)
* prune: prune the ideal tree and reify (like npm prune)
* ideal: generate and print the ideal tree
* actual: read and print the actual tree in node_modules
* virtual: read and print the virtual tree in the local shrinkwrap file
* shrinkwrap: load a local shrinkwrap and print its data
* audit: perform a security audit on project dependencies
* funding: query funding information in the local package tree.  A second
  positional argument after the path name can limit to a package name.
* license: query license information in the local package tree.  A second
  positional argument after the path name can limit to a license type.
* help: print this text

# OPTIONS

Most npm options are supported, but in camelCase rather than css-case.  For
example, instead of '--dry-run', use '--dryRun'.

Additionally:

* --quiet will supppress the printing of package trees
* --logfile <file> will output logs to a file
* Instead of 'npm install <pkg>', use 'arborist reify --add=<pkg>'.
  The '--add=<pkg>' option can be specified multiple times.
* Instead of 'npm rm <pkg>', use 'arborist reify --rm=<pkg>'.
  The '--rm=<pkg>' option can be specified multiple times.
* Instead of 'npm update', use 'arborist reify --update-all'.
* 'npm audit fix' is 'arborist audit --fix'
`

require('./lib/timers')
const { cmd, ...options } = require('./lib/options')
const log = require('./lib/logging')
log.info(cmd, options)
let task = null

switch (cmd) {
  case 'actual':
  case 'audit':
  case 'funding':
  case 'ideal':
  case 'license':
  case 'prune':
  case 'reify':
  case 'shrinkwrap':
  case 'virtual':
    task = require(`./${cmd}.js`)
    break
  case 'help':
  case '-h':
  case '--help':
    console.log(usage())
    break
  default:
    process.exitCode = 1
    console.error(usage())
    break
}

if (task) {
  const start = process.hrtime.bigint()
  process.emit('time', 'init')
  process.emit('time', `${cmd} script`)
  task(options, (result) => {
    process.emit('timeEnd', `${cmd} script`)
    const elapsed = Number(process.hrtime.bigint() - start)
    const ms = elapsed / 1000000
    const s = elapsed / 1000000000
    return {
      timing: {
        seconds: `${s}s`,
        ms: `${ms}ms`,
      },
      result,
    }
  })
    .then((result) => {
      log.info(result)
      process.emit('timeEnd', 'init')
      console.log('Result:', result)
    })
    .catch((err) => {
      process.exitCode = 1
      log.error(err)
      process.emit('timeEnd', 'init')
      console.error('Result:', err)
    })
}

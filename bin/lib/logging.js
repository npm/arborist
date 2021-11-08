const log = require('proc-log')
const mkdirp = require('mkdirp')
const fs = require('fs')
const { resolve, dirname } = require('path')
const os = require('os')
const { inspect, format } = require('util')

const {
  cmd,
  path,
  quiet = false,
  logfile = null,
  colors: useColors = !!process.stdout.isTTY,
  loglevel: useLevel = quiet ? 'warn' : 'silly',
} = require('./options.js')

const levels = new Map([
  'silly',
  'verbose',
  'info',
  'timing',
  'http',
  'notice',
  'warn',
  'error',
  'silent',
].map((level, index) => [level, index]))

const initStream = (write, { eol = os.EOL, colors = false, loglevel: showLevel = 'silly' } = {}) => {
  const magenta = m => colors ? `\x1B[35m${m}\x1B[39m` : m
  const dim = m => colors ? `\x1B[2m${m}\x1B[22m` : m
  const red = m => colors ? `\x1B[31m${m}\x1B[39m` : m

  const formatter = (level, ...args) => {
    const depth = level === 'error' && args[0] && args[0].code === 'ERESOLVE' ? Infinity : 10

    if (level === 'info' && args[0] === 'timeEnd') {
      args[1] = dim(args[1])
    } else if (level === 'error' && args[0] === 'timeError') {
      args[1] = red(args[1])
    }

    const messages = args.map(a => typeof a === 'string' ? a : inspect(a, { depth, colors }))
    const pref = `${process.pid} ${magenta(level)} `

    return pref + format(...messages).trim().split('\n').join(`${eol}${pref}`) + eol
  }

  const showMessage = (level) => levels.get(showLevel) >= levels.get(level)

  process.on('log', (level, ...args) => {
    showMessage(level) && write(formatter(level, ...args))
  })
}

if (useLevel !== 'silent') {
  initStream((str) => process.stderr.write(str), { eol: '\n', colors: useColors, loglevel: useLevel })
}

if (logfile) {
  const filename = resolve(path, typeof logfile === 'string' ? logfile : `_log-${cmd}-${Date.now()}.log`)
  mkdirp.sync(dirname(filename))
  const fd = fs.openSync(filename, 'a')
  initStream((str) => fs.writeSync(fd, str))
}

module.exports = log

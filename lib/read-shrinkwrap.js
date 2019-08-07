const { promisify } = require('util')
const readFile = promisify(require('fs').readFile)
const { basename, dirname, join } = require('path')
const parseJSON = require('parse-conflict-json')

const readShrinkwrap = file =>
  Promise.all([
    maybeReadFile(file),
    basename(file) === 'package-lock.json' ?
      maybeReadFile(join(dirname(file), 'npm-shrinkwrap.json')) : null,
  ]).then(([lock, sw]) => sw || lock ? parseJSON(sw || lock) : null)

const maybeReadFile = file =>
  readFile(file, 'utf8').then(d => d, er => {
    if (er.code === 'ENOENT')
      return null
    throw er
  })

module.exports = readShrinkwrap

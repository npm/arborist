// Give it a directory, and it'll create a reify test case
// In order to support symlinks with the t.fixture(), it creates a
// function that takes a tap test object as an argument.
// usage: t.testdir(require(testCase)(t))
const {readdirSync, readFileSync, readlinkSync, writeFileSync} = require('fs')

const {resolve, relative, basename} = require('path')

if (!process.argv[2]) {
  console.error('pass in a folder as an argument')
  process.exit(1)
}

const fixture = resolve(process.argv[2])
const rel = relative(resolve(__dirname, '../../..'), fixture)
const outFile = resolve(__dirname, basename(fixture)) + '.js'

// we build up an object and then JSON.stringify it, and string replace
// the tokens with `t.fixture('symlink', ${symlinks.get(token)})`
const symlinks = new Map()
const jsonFiles = new Map()
const crypto = require('crypto')
const token = p => p + crypto.randomBytes(8).toString('base64')

const readFixture = dir => {
  const res = {}
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    const p = resolve(dir, ent.name)
    if (ent.isDirectory())
      res[ent.name] = readFixture(p)
    else if (ent.isFile()) {
      const content = readFileSync(p, 'utf8')
      // if it's JSON, then store it in a way that's easier to look at
      try {
        const o = JSON.parse(content)
        const t = token(p)
        jsonFiles.set(t, o)
        res[ent.name] = t
      } catch (_) {
        res[ent.name] = content
      }
    } else if (ent.isSymbolicLink()) {
      const t = token(p)
      const v = readlinkSync(p)
      symlinks.set(t, v)
      res[ent.name] = t
    }
  }
  return res
}

let output = JSON.stringify(readFixture(fixture), null, 2)
for (const [token, value] of symlinks.entries()) {
  output = output
    .split(JSON.stringify(token))
    .join(`t.fixture('symlink', ${JSON.stringify(value)})`)
}
const resc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
for (const [token, obj] of jsonFiles.entries()) {
  const re = new RegExp('^([\\s]*)("[^"]+": )' + resc(JSON.stringify(token)), 'm')
  const replace = (_0, _1, _2) => {
    return _1 + _2 +
      'JSON.stringify(' +
      JSON.stringify(obj, null, 2).replace(/^/gm, _1).trimLeft() +
      ')'
  }
  output = output.replace(re, replace)
}

writeFileSync(outFile, `// generated from ${rel}
module.exports = t => (${output})
`)

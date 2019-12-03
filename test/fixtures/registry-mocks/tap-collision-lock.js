// fetch all the deps and tarballs in a v2 lockfile
const pacote = require('pacote')
const url = require('url')
const mkdirp = require('mkdirp')
const {dirname, resolve} = require('path')
const {writeFileSync} = require('fs')
const main = async lock => {
  for (const [loc, meta] of Object.entries(lock.packages)) {
    if (!loc)
      continue

    const name = meta.name ||
      loc.replace(/^.*node_modules\/(@[^\/]+\/[^\/]+|[^@\/][^\/]*)$/, '$1')

    console.error('FETCHING', name)

    const paku = await pacote.packument(name)
    const saveTo = name.replace(/^@/, '') + '.json'
    mkdirp.sync(dirname(saveTo))
    writeFileSync(saveTo, JSON.stringify(paku, 0, 2))
    const tgzFile = url.parse(meta.resolved).pathname.replace(/^\/@?/, '')
    await pacote.tarball.file(meta.resolved, tgzFile)
  }
  console.log('OK!')
}

main(require(resolve(process.argv[2])))

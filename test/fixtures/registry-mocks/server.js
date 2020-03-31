const {join, dirname} = require('path')
const {existsSync, readFileSync, createWriteStream, writeFileSync} = require('fs')
const PORT = 12345 + (+process.env.TAP_CHILD_ID || 0)
const http = require('http')
const https = require('https')

const mkdirp = require('mkdirp')
const doProxy = process.env.ARBORIST_TEST_PROXY
const missing = /\/@isaacs(\/|%2[fF])(this-does-not-exist-at-all|testing-missing-tgz\/-\/)/
const corgiDoc = 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*'

const startServer = cb => {
  const server = module.exports.server = http.createServer((req, res) => {
    res.setHeader('connection', 'close')
    const f = join(__dirname, 'content', join('/', req.url.replace(/@/, '').replace(/%2f/i, '/')))
    const isCorgi = req.headers.accept.includes('application/vnd.npm.install-v1+json')
    const file = f + (
      isCorgi && existsSync(`${f}.min.json`) ? '.min.json'
      : existsSync(`${f}.json`) ? '.json'
      : existsSync(`${f}/index.json`) ? 'index.json'
      : ''
    )

    try {
      const body = readFileSync(file)
      res.setHeader('content-length', body.length)
      res.setHeader('content-type', /\.min\.json$/.test(file) ? corgiDoc
        : /\.json$/.test(file) ? 'application/json'
        : 'application/octet-stream')
      res.end(body)
    } catch (er) {

      // testing things going missing from the registry somehow
      if (missing.test(req.url)) {
        res.statusCode = 404
        res.end('{"error": "not found"}')
        return
      }

      if (doProxy) {
        return https.get({
          host: 'registry.npmjs.org',
          path: req.url,
          headers: {
            ...req.headers,
            accept: '*',
            'accept-encoding': 'identity',
            host: 'registry.npmjs.org',
            connection: 'close',
            'if-none-match': '',
          },
        }).on('response', upstream => {
          const ct = upstream.headers['content-type']
          const isJson = ct.includes('application/json')
          const file = isJson ? f + '.json' : f
          console.error('PROXY', `${req.url} -> ${file} ${ct}`)
          mkdirp.sync(dirname(file))
          const data = []
          res.statusCode = upstream.statusCode
          res.setHeader('content-type', ct)
          upstream.on('end', () => {
            console.error('ENDING', req.url)
            const out = Buffer.concat(data)
            if (isJson) {
              const obj = JSON.parse(out.toString())
              writeFileSync(file, JSON.stringify(obj, 0, 2) + '\n')
              const mrm = require('minify-registry-metadata')
              const minFile = file.replace(/\.json$/, '.min.json')
              writeFileSync(minFile, JSON.stringify(mrm(obj), 0, 2) + '\n')
              console.error('WROTE JSONS', [file, minFile])
            } else
              writeFileSync(file, out)
            res.end(out)
          })
          upstream.on('data', c => data.push(c))
        }).end()
      }

      res.statusCode = er.code === 'ENOENT' ? 404 : 500
      if (res.method === 'GET')
        console.error(er)
      res.setHeader('content-type', 'text/plain')
      res.end(er.stack)
    }
  })
  server.listen(PORT, cb)
}

module.exports = t => startServer(() => {
  t.parent.teardown(() => module.exports.server.close())
  t.end()
})

module.exports.registry = `http://localhost:${PORT}/`

if (require.main === module) {
  startServer(() => {
    console.log(`Mock registry live at:
  ${module.exports.registry}
Press ^D to close gracefully.`)
  })
  process.openStdin()
  process.stdin.on('end', () => module.exports.server.close())
}

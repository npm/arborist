const {join} = require('path')
const {existsSync, readFileSync} = require('fs')
const PORT = 12345 + (+process.env.TAP_CHILD_ID || 0)
const http = require('http')

const startServer = cb => {
  const server = module.exports.server = http.createServer((req, res) => {
    res.setHeader('connection', 'close')
    const f = join(__dirname, 'content', join('/', req.url.replace(/@/, '').replace(/%2f/i, '/')))
    const file = f + (
      existsSync(`${f}.json`) ? '.json'
      : existsSync(`${f}/index.json`) ? 'index.json'
      : ''
    )

    try {
      const body = readFileSync(file)
      res.setHeader('content-length', body.length)
      res.setHeader('content-type', /\.json$/.test(file)
        ? 'application/json' : 'application/octet-stream')
      res.end(body)
    } catch (er) {
      res.statusCode = er.code === 'ENOENT' ? 404 : 500
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

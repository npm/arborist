const {join} = require('path')
const {existsSync, readFileSync} = require('fs')
const PORT = 12345 + (+process.env.TAP_CHILD_ID || 0)
const http = require('http')

module.exports = t => {
  const server = http.createServer((req, res) => {
    res.setHeader('connection', 'close')
    const f = join(__dirname, 'content', join('/', req.url.replace(/@/, '').replace(/%2f/i, '/')))
    const file = f + (existsSync(`${f}.json`) ? '.json' : '')

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
  server.listen(PORT, () => {
    t.parent.teardown(() => server.close())
    t.end()
  })
}
module.exports.registry = `http://localhost:${PORT}/`

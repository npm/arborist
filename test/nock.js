const nock = require('nock')
const tar = require('tar-stream')
const Stream = require('stream')

const packument = {
  name: 'foo',
  'dist-tags': {
    latest: '1.0.0',
  },
  versions: {
    '1.0.0': {
      'name': 'foo',
      'version': '1.0.0'
    }
  }
}

nock('registry.npmjs.org')
  .persist()
  .get(`/foo`)
  .reply(200, packument)

const pack = tar.pack()

pack.entry({ name: 'package.json' }, JSON.stringify({
  name: 'foo',
  version: '1.0.0'
}))
pack.entry({ name: 'index.js' }, 'console.log("Hello World!")')


class ToBuffer extends Stream.Writable {
  constructor(opts) {
    super(opts)
    this.bufferArray = []
  }
  _write(chunk, encoding, callback) {
    this.bufferArray.push(chunk)
    callback()
  }
  _final(callback) {
    this.finalBuffer = Buffer.concat(this.bufferArray)
    callback()
  }
}

pack.finalize()

const tarBuffer = pack.pipe(new ToBuffer())
tarBuffer.on('close', () => {
  console.log('the buffer is closed')
  console.log(tarBuffer.finalBuffer.toString('utf-8'))
})


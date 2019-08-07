const fs = require('fs')
const readFile = fs.readFile
const EE = require('events')
const emitter = new EE()
let er, json
function mockReadFile (path, options, cb) {
  emitter.emit('read', path)
  process.nextTick(() => cb(er, json))
}
// pick up node's secret symbol for promisify to work
mockReadFile.__proto__ = readFile
fs.readFile = mockReadFile

const readShrinkwrap = require('../lib/read-shrinkwrap.js')

const t = require('tap')

t.test('read a package-lock.json, also reads shrinkwrap.json', t => {
  const saw = {}
  const handler = path => saw[path] = true
  emitter.on('read', handler)
  json = '{"hello": "world"}'

  return readShrinkwrap('package-lock.json').then(data => {
    t.same(data, { hello: 'world' })
    t.same(saw, {
      'package-lock.json': true,
      'npm-shrinkwrap.json': true,
    }, 'read both files')
    emitter.removeListener('read', handler)
  })
})

t.test('read shrinkwrap only reads shrinkwrap', t => {
  const saw = {}
  const handler = path => saw[path] = true
  emitter.on('read', handler)
  json = '{"world": "hello"}'

  return readShrinkwrap('npm-shrinkwrap.json').then(data => {
    t.same(data, { world: 'hello' })
    t.same(saw, {
      'npm-shrinkwrap.json': true,
    }, 'read both files')
    emitter.removeListener('read', handler)
  })
})

t.test('ENOENT failures return null', t => {
  er = new Error('yolo')
  er.code = 'ENOENT'
  return readShrinkwrap('npm-shrinkwrap.json').then(data => {
    t.equal(data, null)
  })
})

t.test('other errors throw', t => {
  er = new Error('oloy')
  er.code = 'you only live once so live well'
  return t.rejects(readShrinkwrap('npm-shrinkwrap.json').then(data => {
    t.equal(data, null)
  }))
})

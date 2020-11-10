const t = require('tap')
const Arborist = require('../../lib/arborist/index.js')
const normalizePath = path => path.replace(/[A-Z]:/, '').replace(/\\/g, '/')

const a = new Arborist({ path: '/some/kind/of/path' })
const b = new Arborist()
t.equal(normalizePath(a.path), '/some/kind/of/path')
t.equal(b.path, process.cwd())
t.match(a, {
  buildIdealTree: Function,
  reify: Function,
  loadActual: Function,
  loadVirtual: Function,
})
// make sure we don't mess up the class name with the mixin stack trick
t.equal(Arborist.name, 'Arborist')

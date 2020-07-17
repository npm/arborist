const rpj = require('read-package-json-fast')
const requireInject = require('require-inject')
const t = require('tap')
const rpjMock = Object.assign((...args) => rpj(...args), {
  ...rpj,
  normalize: (...args) => {
    throw new Error('boom')
  }
})
const Node = requireInject.installGlobally('../../lib/node.js', {
  'read-package-json-fast': rpjMock,
})
const Shrinkwrap = requireInject.installGlobally('../../lib/shrinkwrap.js', {
  '../../lib/node.js': Node,
  'read-package-json-fast': rpjMock,
})
const Arborist = requireInject.installGlobally('../../lib/arborist', {
  '../../lib/shrinkwrap.js': Shrinkwrap,
  '../../lib/node.js': Node,
  'read-package-json-fast': rpjMock,
})

const { resolve } = require('path')
const {
  fixtures,
  roots,
  symlinks,
} = require('../fixtures/index.js')

t.test('blow up and catch error if Node ctor blows up', t => {
  // mock rpj so that we can blow up on the 'normalize' method called
  // in the Node constructor, because it's (by design) extremely hard
  // to make the ctor throw.
  const path = resolve(fixtures, 'root')
  return t.rejects(new Arborist({path}).loadActual(), { message: 'boom' })
})

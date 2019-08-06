// not much to this test, just verify exports
const t = require('tap')
const Arborist = require('../index.js')
const {Node} = Arborist

t.equal(Arborist, require('../lib/arborist.js'), 'default esm import')
t.equal(Node, require('../lib/node.js'), 'node is exported')
t.equal(Arborist.Link, require('../lib/link.js'), 'link is exported')

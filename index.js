const Node = require('./lib/node.js')
const Link = require('./lib/link.js')
const loadActual = require('./lib/load-actual.js')

const rpt = (root, cb) => loadActual(root, cb)

rpt.Node = Node
rpt.Link = Link
module.exports = rpt

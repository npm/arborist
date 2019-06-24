const Node = require('./lib/node.js')
const Link = require('./lib/link.js')
const loadActual = require('./lib/load-actual.js')

// XXX Drop filterWith and/or cb in next semver major bump
const rpt = (root, filterWith, cb) => loadActual(root, filterWith, cb)

rpt.Node = Node
rpt.Link = Link
module.exports = rpt

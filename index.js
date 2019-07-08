const Node = require('./lib/node.js')
const Link = require('./lib/link.js')
const Arborist = require('./lib/arborist.js')

const rpt = root => new Arborist({ root }).loadActual()

rpt.Arborist = Arborist
rpt.Node = Node
rpt.Link = Link
module.exports = rpt

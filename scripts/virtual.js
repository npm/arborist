const Arborist = require('../lib/arborist.js')
const {format} = require('tcompare')

const print = tree => console.log(format(printTree(tree), { style: 'js' }))
const printEdge = require('./lib/print-edge.js')
const printTree = require('./lib/print-tree.js')

const path = process.argv[2] || '.'

const YarnLock = require('../lib/yarn-lock.js')

const start = process.hrtime()
new Arborist({path}).loadVirtual().then(tree => {
  const end = process.hrtime(start)
  if (!process.argv.includes('--quiet'))
    print(tree)
  if (process.argv.includes('--save'))
    tree.meta.save()
  console.error(`read ${tree.inventory.size} deps in ${end[0]*1000 + end[0] / 1000}ms`)
}).catch(er => console.error(er))

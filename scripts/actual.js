const Arborist = require('../')
const {format} = require('tcompare')

const print = tree => console.log(format(printTree(tree), { style: 'js' }))
const printEdge = require('./lib/print-edge.js')
const printTree = require('./lib/print-tree.js')

const path = process.argv[2] || '.'

const YarnLock = require('../lib/yarn-lock.js')

const start = process.hrtime()
new Arborist({path}).loadActual().then(tree => {
  const end = process.hrtime(start)
  if (!process.argv.includes('--quiet')) {
    print(tree)
    const y = new YarnLock()
    y.fromTree(tree)
    console.log(y.toString())
  }
  console.error(`read ${tree.inventory.size} deps in ${end[0]*1000 + end[1] / 10e6}ms`)
  if (process.argv.includes('--save'))
    tree.meta.save()
  if (process.argv.includes('--save-hidden')) {
    tree.meta.hiddenLockfile = true
    tree.meta.filename = path + '/node_modules/.package-lock.json'
    tree.meta.save()
  }
}).catch(er => console.error(er))

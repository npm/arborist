const Arborist = require('../')
const {format} = require('tcompare')

require('./lib/timers.js')
const print = tree => console.log(format(tree.toJSON()))

const path = process.argv[2] || '.'
const options = require('./lib/options.js')

const start = process.hrtime()
new Arborist(options).loadActual(options).then(tree => {
  const end = process.hrtime(start)
  if (!process.argv.includes('--quiet')) {
    print(tree)
  }
  console.error(`read ${tree.inventory.size} deps in ${end[0]*1000 + end[1] / 1e6}ms`)
  if (options.save)
    tree.meta.save()
  if (options.saveHidden) {
    tree.meta.hiddenLockfile = true
    tree.meta.filename = path + '/node_modules/.package-lock.json'
    tree.meta.save()
  }
}).catch(er => console.error(er))

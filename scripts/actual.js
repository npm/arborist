const Arborist = require('../')
const {format} = require('tcompare')

const print = tree => console.log(format(printTree(tree), { style: 'js' }))
const printEdge = require('./lib/print-edge.js')
const printTree = require('./lib/print-tree.js')

const path = process.argv[2] || '.'

const options = {path}
for (let i = 2; i < process.argv.length; i++) {
  const arg = process.argv[i]
  if (arg === '--save')
    options.save = true
  else if (arg === '--quiet')
    options.quiet = true
  else if (/^--[^=]+=/.test(arg)) {
    const [key, ...v] = arg.replace(/^--/, '').split('=')
    const val = v.join('=')
    options[key] = val === 'false' ? false : val === 'true' ? true : val
  } else if (/^--.+/.test(arg)) {
    options[arg.replace(/^--/, '')] = true
  }
}

const start = process.hrtime()
new Arborist(options).loadActual(options).then(tree => {
  const end = process.hrtime(start)
  if (!process.argv.includes('--quiet')) {
    print(tree)
  }
  console.error(`read ${tree.inventory.size} deps in ${end[0]*1000 + end[1] / 10e6}ms`)
  if (options.save)
    tree.meta.save()
  if (options.saveHidden) {
    tree.meta.hiddenLockfile = true
    tree.meta.filename = path + '/node_modules/.package-lock.json'
    tree.meta.save()
  }
}).catch(er => console.error(er))

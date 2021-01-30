const Arborist = require('../')
const path = process.argv[2] || '.'

require('./lib/timers.js')

const {format} = require('tcompare')
const print = tree => console.log(format(tree.toJSON()))

const options = require('./lib/options.js')

const printDiff = diff => {
  const {depth} = require('treeverse')
  depth({
    tree: diff,
    visit: d => {
      if (d.location === '')
        return
      switch (d.action) {
        case 'REMOVE':
          console.error('REMOVE', d.actual.location)
          break
        case 'ADD':
          console.error('ADD', d.ideal.location, d.ideal.resolved)
          break
        case 'CHANGE':
          console.error('CHANGE', d.actual.location, {
            from: d.actual.resolved,
            to: d.ideal.resolved,
          })
          break
      }
    },
    getChildren: d => d.children,
  })
}

console.error(options)
process.on('log', (level, ...args) => {
  if (level === 'warn' && args[0] === 'ERESOLVE') {
    args[2] = require('util').inspect(args[2], { depth: Infinity })
  }
  if (options.quiet)
    return
  return console.error(level, ...args)
})

const start = process.hrtime()
process.emit('time', 'install')
const arb = new Arborist(options)
arb.reify(options).then(tree => {
  process.emit('timeEnd', 'install')
  const end = process.hrtime(start)
  if (!options.quiet)
    print(tree)
  if (options.dryRun)
    printDiff(arb.diff)
  console.error(`resolved ${tree.inventory.size} deps in ${end[0] + end[1] / 1e9}s`)
  if (tree.meta && options.save)
    tree.meta.save()
}).catch(er => console.error(require('util').inspect(er, { depth: Infinity })))

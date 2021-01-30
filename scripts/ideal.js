const Arborist = require('../')
const path = process.argv[2] || '.'

require('./lib/timers.js')

const {format} = require('tcompare')
const print = tree => console.log(format(tree.toJSON()))
const { inspect, format: fmt } = require('util')
process.on('log', (level, ...msg) => {
  if (options.quiet)
    return

  if (false && level === 'silly') {
    const cols = process.stdout.columns || 80
    const str = fmt(level, ...msg).replace(/\n/g, '').substr(0, cols)
    const pad = ' '.repeat(cols - str.length)
    return process.stderr.write('\r' + str + pad)
  } else if (level === 'warn' && msg[0] === 'ERESOLVE') {
    console.error(level, msg[0], msg[1], inspect(msg[2], { depth: Infinity }), ...msg.slice(3))
  } else {
    console.error(level, ...msg)
  }
})

const options = require('./lib/options.js')

console.error(options)

const c = require('chalk')

const whichIsA = (name, dependents, indent = '  ') => {
  if (!dependents || dependents.length === 0)
    return ''
  const str = `\nfor: ` +
    dependents.map(dep => {
      return dep.more ? `${dep.more} more (${dep.names.join(', ')})`
        : `${dep.type} dependency ` +
          `${c.bold(name)}@"${c.bold(dep.spec)}"` + `\nfrom:` +
          (dep.from.location ? (dep.from.name
            ? ` ${c.bold(dep.from.name)}@${c.bold(dep.from.version)} ` +
              c.dim(`at ${dep.from.location}`)
            : ' the root project')
          : ` ${c.bold(dep.from.name)}@${c.bold(dep.from.version)}`) +
          whichIsA(dep.from.name, dep.from.dependents, '  ')
      }).join('\nand: ')

  return str.split(/\n/).join(`\n${indent}`)
}

const explainEresolve = ({ dep, current, peerConflict, fixWithForce }) => {
  return (!dep.whileInstalling ? '' : `While resolving: ` +
  `${c.bold(dep.whileInstalling.name)}@${c.bold(dep.whileInstalling.version)}\n`) +

  `Found: ` +
    `${c.bold(current.name)}@${c.bold(current.version)} ` +
    c.dim(`at ${current.location}`) +
    `${whichIsA(current.name, current.dependents)}` +

  `\n\nCould not add conflicting dependency: ` +
    `${c.bold(dep.name)}@${c.bold(dep.version)} ` +
    c.dim(`at ${dep.location}`) +
   `${whichIsA(dep.name, dep.dependents)}\n` +

  (!peerConflict ? '' :
    `\nConflicting peer dependency: ` +
      `${c.bold(peerConflict.name)}@${c.bold(peerConflict.version)} ` + 
      c.dim(`at ${peerConflict.location}`) +
      `${whichIsA(peerConflict.name, peerConflict.dependents)}\n`
  ) +

  `\nFix the upstream dependency conflict, or
run this command with  --legacy-peer-deps${
  fixWithForce ? ' or --force' : '' }
to accept an incorrect (and potentially broken) dependency resolution.
`
}

const start = process.hrtime()
new Arborist(options).buildIdealTree(options).then(tree => {
  const end = process.hrtime(start)
  if (!options.quiet)
    print(tree)
  console.error(`resolved ${tree.inventory.size} deps in ${end[0] + end[1] / 10e9}s`)
  if (tree.meta && options.save)
    tree.meta.save()
}).catch(er => {
  console.error(inspect(er, { depth: Infinity, color: true }))
  //if (er.code === 'ERESOLVE') {
    //console.error(er)
    //console.error(explainEresolve(er))
  //}
})

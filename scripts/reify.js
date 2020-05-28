const Arborist = require('../')
const path = process.argv[2] || '.'

const ms = require('ms')
const timers = {}
process.on('time', name => {
  if (timers[name]) {
    throw new Error('conflicting timer! ' + name)
  }
  timers[name] = process.hrtime()
})
process.on('timeEnd', name => {
  if (!timers[name]) {
    throw new Error('timer not started! ' + name)
  }
  const res = process.hrtime(timers[name])
  delete timers[name]
  console.error(name, res[0] * 1e3 + res[1] / 1e6)
})

const {format} = require('tcompare')
const print = tree => console.log(format(printTree(tree), { style: 'js' }))
const printEdge = require('./lib/print-edge.js')
const printTree = require('./lib/print-tree.js')

const options = {path, cache: process.env.HOME + '/.npm/_cacache'}
const npa = require('npm-package-arg')
for (let i = 2; i < process.argv.length; i++) {
  const arg = process.argv[i]
  if (/^--add=/.test(arg)) {
    options.add = options.add || []
    options.add.push(arg.substr('--add='.length))
  } else if (/^--rm=/.test(arg)) {
    options.rm = options.rm || []
    options.rm.push(arg.substr('--rm='.length))
  } else if (arg === '--global') {
    options.global = true
  } else if (arg === '--global-style') {
    options.globalStyle = true
  } else if (arg === '--prefer-dedupe')
    options.preferDedupe = true
  else if (arg === '--save')
    options.save = true
  else if (arg === '--quiet')
    options.quiet = true
  else if (arg === '--legacy-peer-deps')
    options.legacyPeerDeps = true
  else if (arg === '--update-all') {
    options.update = options.update || {}
    options.update.all = true
  } else if (/^--update-depth=/.test(arg)) {
    options.update = options.update || {}
    options.update.depth = +(arg.substr('--update-depth='.length))
  } else if (/^--update=/.test(arg)) {
    options.update = options.update || {}
    options.update.names = options.update.names || []
    options.update.names.push(arg.substr('--update='.length))
  } else if (/^--omit=/.test(arg)) {
    options.omit = options.omit || []
    options.omit.push(arg.substr('--omit='.length))
  } else if (/^--[^=]+=/.test(arg)) {
    const [key, ...v] = arg.replace(/^--/, '').split('=')
    const val = v.join('=')
    options[key] = val === 'false' ? false : val === 'true' ? true : val
  } else if (/^--.+/.test(arg)) {
    options[arg.replace(/^--/, '')] = true
  }
}

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
process.on('log', console.error)

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
}).catch(er => console.error(er))

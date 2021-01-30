const Arborist = require('../')
const path = process.argv[2] || '.'

require('./lib/timers.js')

const {format} = require('tcompare')
const print = tree => console.log(format(tree.toJSON(), { style: 'js' }))

const options = require('./lib/options.js')

const Vuln = require('../lib/vuln.js')
const printReport = report => {
  const res = {}
  for (const [name, vuln] of report.entries()) {
    console.log(printVuln(vuln))
  }
  for (const set of ['topVulns']) {
    console.log(`# ${set}`)
    for (const [name, vuln] of report[set].entries()) {
      console.log(printVuln(vuln))
    }
  }
}

const printVuln = vuln => {
  return {
    __proto__: { constructor: Vuln },
    name: vuln.name,
    issues: [...vuln.advisories].map(a => printAdvisory(a)),
    range: vuln.simpleRange,
    nodes: [...vuln.nodes].map(node => `${node.name} ${node.location || '#ROOT'}`),
    ...(vuln.topNodes.size === 0 ? {} : {
      topNodes: [...vuln.topNodes].map(node => `${node.location || '#ROOT'}`),
    })
  }
}

const printAdvisory = a => `${a.title}${a.url ? ' ' + a.url : ''}`

console.error(options)
process.on('log', console.error)

const start = process.hrtime()
process.emit('time', 'audit script')
const arb = new Arborist(options)
arb.audit(options).then(tree => {
  process.emit('timeEnd', 'audit script')
  const end = process.hrtime(start)
  if (!options.quiet && options.fix)
    print(tree)
  if (!options.quiet)
    printReport(arb.auditReport)
  if (options.fix)
    console.error(`resolved ${tree.inventory.size} deps in ${end[0] + end[1] / 1e9}s`)
  if (tree.meta && options.save)
    tree.meta.save()
}).catch(er => console.error(er))

const Arborist = require('../')
const path = process.argv[2] || '.'
const a = new Arborist({ path })
const query = process.argv[3]
const start = process.hrtime()
a.loadVirtual().then(tree => {
  // only load the actual tree if the virtual one doesn't have modern metadata
  if (!tree.meta || !(tree.meta.originalLockfileVersion >= 2)) {
    console.error('old metadata, load actual')
    throw 'load actual'
  } else {
    console.error('meta ok, return virtual tree')
    return tree
  }
}).catch(() => a.loadActual()).then(tree => {
  const end = process.hrtime(start)
  if (!query) {
    for (const node of tree.inventory.values()) {
      if (node.package.funding)
        console.log(node.name, node.package.funding)
    }
  } else {
    for (const node of tree.inventory.query('name', query)) {
      if (node.package.funding)
        console.log(node.name, node.package.funding)
    }
  }
  console.error(`read ${tree.inventory.size} deps in ${end[0]*1000 + end[0] / 1000}ms`)
})

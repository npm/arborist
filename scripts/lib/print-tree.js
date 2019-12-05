const printEdge = require('./print-edge.js')
const printTree = (tree, path = []) => (path.includes(tree) ? tree.location : (path.push(tree), {
  name: tree.name,
  version: tree.package.version,
  location: tree.location,
  path: tree.path,
  root: tree.root.path,
  resolved: tree.resolved,
  ...(tree.dev ? { dev: tree.dev } : {}),
  ...(tree.optional ? { optional: tree.optional } : {}),
  ...(tree.devOptional ? { devOptional: tree.devOptional } : {}),
  ...(tree.extraneous ? { extraneous: tree.extraneous } : {}),
  ...(tree.isLink ? {
    target: printTree(tree.target, path),
  } : { /*package: tree.package*/ }),
  ...(tree.errors.length ? { errors: tree.errors } : {}),
  ...(tree.inBundle ? { bundled: true } : {}),
  ...(tree.edgesIn.size ? {
    edgesIn: [...tree.edgesIn]
      .sort((a, b) => a.type.localeCompare(b.type) || a.from.location.localeCompare(b.from.location))
      .map(edge => printEdge(edge, 'in')),
  } : {}),
  ...(tree.edgesOut.size ? {
    edgesOut: Object.fromEntries([...tree.edgesOut.entries()]
      .sort((a, b) => a[1].type.localeCompare(b[1].type) || a[0].localeCompare(b[0]))
      .map(([name, edge]) => [name, printEdge(edge, 'out')]))
  } : {}),
  ...( tree.target || !tree.children.size ? {}
    : {
      children: Object.fromEntries([...tree.children.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([name, tree]) => [name, printTree(tree, path)]))
    }),
  ...( tree.meta ? { meta: tree.meta.commit() } : {}),
  __proto__: { constructor: tree.constructor },
}))
module.exports = printTree

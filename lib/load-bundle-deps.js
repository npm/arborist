// unpack a module with bundleDependencies, and update a tree
// This is used by reify, and buildIdealTree({complete:true})

const binLinks = require('bin-links')
const {depth: dfwalk} = require('treeverse')
const promiseAllRejectLate = require('promise-all-reject-late')

// pass in the Arborist object so we don't have a require() cycle,
// which does weird things in our tests using require-inject, and
// is less future-proof if we ever want to transpile or move to esm
const loadBundleDeps = async (node, arb, options) => {
  const {
    path = node.path,
    binLinks = true,
    force = false
  } = options

  const Arborist = arb.constructor
  const tree = await new Arborist({ ...arb.options, path }).loadActual()
  for (const child of tree.children.values()) {
    // skip any empty sparse folders that might be present, which
    // is common during reification.
    if (child.package._id)
      child.parent = node
  }

  // only create the bin links if we're loading in the node's actual location
  // if it's just in a temp dir for an ideal tree, don't bother.
  if (path === node.path && binLinks)
    await createBinLinks(node, force)

  return node
}

const createBinLinks = async (node, force) => {
  // link the bins for any bundled deps in its tree.
  // these are often required for build scripts.
  const set = new Set()
  dfwalk({
    tree: node,
    visit: node => set.add(node),
    getChildren: node => [...node.children.values()],
    filter: node => node.inBundle,
  })
  const promises = []
  for (const node of set) {
    promises.push(binLinks({
      pkg: node.package,
      path: node.path,
      top: node.isTop || node.globalTop,
      force,
      global: node.globalTop,
    }))
  }
  await promiseAllRejectLate(promises)
}

module.exports = loadBundleDeps

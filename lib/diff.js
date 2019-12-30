// a tree representing the difference between two trees
// A Diff node's parent is not necessarily the parent of
// the node location it refers to, but rather the highest level
// node that needs to be either changed or removed.
// Thus, the root Diff node is the shallowest change required
// for a given branch of the tree being mutated.

const {depth} = require('treeverse')

const ssri = require('ssri')

class Diff {
  constructor ({actual, ideal}) {
    this.children = []
    this.actual = actual
    this.ideal = ideal
    if (this.ideal) {
      this.resolved = this.ideal.resolved
      this.integrity = this.ideal.integrity
    }
    this.action = getAction(this)
    this.parent = null
    // the set of leaf nodes that we rake up to the top level
    this.leaves = []
    // the set of nodes that don't change in this branch of the tree
    this.unchanged = []
  }

  static calculate ({actual, ideal}) {
    return depth({
      tree: new Diff({actual, ideal}),
      getChildren,
      leave,
    })
  }
}

const getAction = ({actual, ideal}) =>
  !ideal ? 'REMOVE'
  // bundled deps are copied over to the ideal tree when we visit it, so
  // they'll appear to be missing here.  There's no need to handle them in
  // the diff, though, because they'll be replaced at reify time anyway
  // Otherwise, add the missing node.
  : !actual ? (ideal.inBundle ? null : 'ADD')
  // always ignore the root node
  : ideal.isRoot && actual.isRoot ||
  // top nodes, links, and git deps won't have integrity, but do have resolved
    !ideal.integrity && !actual.integrity &&
      ideal.resolved === actual.resolved ||
  // otherwise, verify that it's the same bits
  // note that if ideal has integrity, and resolved doesn't, we treat
  // that as a 'change', so that it gets re-fetched and locked down.
    ideal.integrity &&
    actual.integrity &&
    ssri.parse(ideal.integrity).match(actual.integrity) ? null
  : 'CHANGE'

// functions for the walk options when we traverse the trees
// to create the diff tree
const getChildren = diff => {
  const children = []
  const unchanged = diff.unchanged

  // diff all the children
  const actualKids = diff.actual ? diff.actual.children : new Map()
  const idealKids = diff.ideal ? diff.ideal.children : new Map()
  const names = new Set([...actualKids.keys(), ...idealKids.keys()])
  for (const name of names) {
    const actual = actualKids.get(name)
    const ideal = idealKids.get(name)
    diffNode(actual, ideal, children, unchanged)
  }

  // diff fsChildren as well
  const actualFsKids = diff.actual ? pathMap(diff.actual.fsChildren) : new Map()
  const idealFsKids = diff.ideal ? pathMap(diff.ideal.fsChildren) : new Map()
  const fsPaths = new Set([...actualFsKids.keys(), ...idealFsKids.keys()])
  for (const path of fsPaths) {
    const actual = actualFsKids.get(path)
    const ideal = idealFsKids.get(path)
    diffNode(actual, ideal, children, unchanged)
  }

  if (diff.leaves && !children.length)
    diff.leaves.push(diff)

  return children
}

// Set([node, node,...]) => Map([[path, node], [path, node], ...])
const pathMap = set => new Map([...set].map(n => [n.path, n]))

const diffNode = (actual, ideal, children, unchanged) => {
  const action = getAction({actual, ideal})
  // if it's a match, then get its children
  // otherwise, this is the child diff node
  if (action)
    children.push(new Diff({actual, ideal}))
  else {
    unchanged.push(ideal)
    // !*! Weird dirty hack warning !*!
    //
    // Bundled deps aren't loaded in the ideal tree, because we don't know
    // what they are going to be without unpacking.  Swap them over now if
    // the bundling node isn't changing, so we don't prune them later.
    //
    // It's a little bit dirty to be doing this here, since it means that
    // diffing trees can mutate them, but otherwise we have to walk over
    // all unchanging bundlers and correct the diff later, so it's more
    // efficient to just fix it while we're passing through already.
    const bd = ideal.package.bundleDependencies
    if (actual && bd && bd.length) {
      for (const [name, node] of actual.children.entries()) {
        if (node.inBundle)
          node.parent = ideal
      }
    }
    children.push(...getChildren({actual, ideal, unchanged}))
  }
}

// set the parentage in the leave step so that we aren't attaching
// child nodes only to remove them later.  also bubble up the unchanged
// nodes so that we can move them out of staging in the reification step.
const leave = (diff, children) => {
  children.forEach(kid => {
    kid.parent = diff
    diff.leaves.push(...kid.leaves)
    diff.unchanged.push(...kid.unchanged)
  })
  diff.children = children
  return diff
}

module.exports = Diff

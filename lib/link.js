const Node = require('./node.js')
const _loadDeps = Symbol.for('Arborist.Node._loadDeps')

class Link extends Node {
  constructor (options) {
    super(options)
    this.target = options.target || new Node({
      ...options,
      path: null,
      parent: null,
    })
  }

  // deps are resolved on the target, not the Link
  // just reset the collections, but then do nothing
  [_loadDeps] () {
    this.edgesIn = new Set()
    this.edgesOut = new Map()
  }

  // links can't have children, only their targets can
  // fix it to an empty list so that we can still call
  // things that iterate over them, just as a no-op
  get children () {
    return []
  }
  set children (c) {}

  get isLink () {
    return true
  }
}

module.exports = Link

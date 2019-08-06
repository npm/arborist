const Node = require('./node.js')
const _loadDeps = Symbol.for('Arborist.Node._loadDeps')

class Link extends Node {
  constructor (options) {
    super(options)
    const { target, targetMeta } = options
    this.target = target || new Node({
      ...options,
      targetMeta,
      meta: null,
      path: null,
      parent: null,
    })
  }

  // deps are resolved on the target, not the Link
  // so this is a no-op
  [_loadDeps] () {}

  // links can't have children, only their targets can
  // fix it to an empty list so that we can still call
  // things that iterate over them, just as a no-op
  get children () {
    return new Map()
  }
  set children (c) {}

  get isLink () {
    return true
  }
}

module.exports = Link

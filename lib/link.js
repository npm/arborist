const Node = require('./node.js')
const _loadDeps = Symbol.for('Arborist.Node._loadDeps')

class Link extends Node {
  constructor (options) {
    super(options)
    const { realpath, target } = options

    if (!realpath)
      throw new TypeError('must provide realpath for Link node')

    this.target = target || new Node({
      ...options,
      path: realpath,
      parent: null,
      root: this.root,
    })

    if (target && target.root === target)
      target.root = this.root

    if (this.root.meta)
      this.root.meta.add(this)
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

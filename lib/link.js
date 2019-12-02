const relpath = require('./relpath.js')
const Node = require('./node.js')
const _loadDeps = Symbol.for('Arborist.Node._loadDeps')

class Link extends Node {
  constructor (options) {
    const { realpath, target } = options

    if (!realpath)
      throw new TypeError('must provide realpath for Link node')

    super(options)
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

  // a link always resolves to the relative path to its target
  get resolved () {
    return this.path && this.realpath
      ? `file:${relpath(this.path, this.realpath)}`
      : null
  }
  set resolved (r) {}

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

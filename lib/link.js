
const Node = require('./node.js')

class Link extends Node {
  constructor (options) {
    const { physical, cache, realpath } = options
    super(options)

    // if the target has started, but not completed, then
    // a Promise will be in the cache to indicate this.
    const cachedTarget = cache.get(realpath)
    if (cachedTarget && cachedTarget.then)
      cachedTarget.then(node => this.target = node)

    this.target = cachedTarget || new Node({
      ...options,
      parent: null,
      logical: null,
      physical: realpath,
      arborist: this.arborist,
    })
    this.realpath = realpath

    // convenience methods only
    /* istanbul ignore next */
    Object.defineProperty(this, 'children', {
      get () {
        return this.target.children
      },
      set (c) {
        this.target.children  = c
      },
      enumerable: true
    })
  }

  get isLink () {
    return true
  }

  /* istanbul ignore next */
  get top () {
    return this.target.top
  }

  // not normally called, just here for safety
  /* istanbul ignore next */
  isTop () {
    return this.target.isTop
  }
  /* istanbul ignore next */
  resolveDep (name) {
    return this.target.resolveDep(name)
  }
  /* istanbul ignore next */
  loadDepinfo () {
    this.target.loadDepinfo()
    return this
  }
}

module.exports = Link

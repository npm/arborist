
const Node = require('./node.js')

class Link extends Node {
  constructor (pkg, logical, physical, realpath, er, cache) {
    super(pkg, logical, physical, er, cache)

    // if the target has started, but not completed, then
    // a Promise will be in the cache to indicate this.
    const cachedTarget = cache.get(realpath)
    if (cachedTarget && cachedTarget.then)
      cachedTarget.then(node => this.target = node)

    this.target = cachedTarget || new Node(pkg, logical, realpath, er, cache)
    this.realpath = realpath
    this.error = er

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

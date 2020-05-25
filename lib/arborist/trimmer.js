// mixin providing prune and dedupe methods

// shared with buildIdealTree
const _depsQueue = Symbol.for('depsQueue')
const _dedupeList = Symbol.for('dedupeList')
const _preferDedupe = Symbol.for('preferDedupe')

module.exports = cls => class Trimmer extends cls {
  constructor (options) {
    super(options)
    this[_depsQueue] = []
    this[_dedupeList] = []
    this[_preferDedupe] = false
  }

  async dedupe () {
    let tree
    try {
      tree = await this.loadVirtual()
    } catch {
      tree = await this.loadActual()
    }
    this[_preferDedupe] = true
    for (const node of tree.inventory.values()) {
      const nodes = tree.inventory.query('name', node.name)
      if (nodes.size === 1) continue;

      for (const node of nodes) {
        this[_dedupeList].push(node.path)
        for (const edge of node.edgesIn) {
          this[_depsQueue].push(edge.from)
        }
      }
    }
    this.idealTree = tree
    return this.reify()
  }
}

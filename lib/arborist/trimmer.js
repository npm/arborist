// mixin providing prune and dedupe methods

// shared with buildIdealTree
const _depsQueue = Symbol.for('depsQueue')
const _dedupeList = Symbol.for('dedupeList')

module.exports = cls => class Trimmer extends cls {
  constructor (options) {
    super(options)
    this[_dedupeList] = new Set()
  }

  async dedupe () {
    let tree
    try {
      tree = await this.loadVirtual()
    } catch {
      tree = await this.loadActual()
    }
    for (const node of tree.inventory.values()) {
      const nodes = tree.inventory.query('name', node.name)
      if (nodes.size === 1) continue

      for (const node of nodes) {
        this[_dedupeList].add(node.path)
        for (const edge of node.edgesIn) {
          this[_depsQueue].push(edge.from)
        }
      }
    }
    return this.reify({
      preferDedupe: true
    })
  }
}

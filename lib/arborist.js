const Node = require('./node.js')
const Link = require('./link.js')
const EE = require('events')
const cwd = process.cwd()
const { breadth:bfwalk, depth:dfwalk } = require('treeverse')

const loadActual = require('./load-actual.js')
const loadVirtual = require('./load-virtual.js')

class Arborist extends EE {
  constructor ({
    root,
    registry = 'https://registry.npmjs.org',
    auth = null,
    scopes = null,
  }) {
    super()
    this.root = root || '.'
    this.registry = registry
    this.auth = auth
    this.scopes = scopes
    this.tree = null
    this.virtualTree = null
    this.targetTree = null
    this.errors = []
    this.inventory = {}
  }

  loadActual () {
    return loadActual(this.root).then(tree => this.tree = tree)
  }

  loadVirtual () {
    return loadVirtual(this.root).then(tree => this.virtualTree = tree)
  }

  /* istanbul ignore next */
  loadLogical () {
    throw new Error('TODO')
  }

  /* istanbul ignore next */
  loadFast () {
    return this.loadLogical().catch(() => this.loadActual())
  }

  /* istanbul ignore next */
  add (spec) {
    throw new Error('TODO')
  }

  /* istanbul ignore next */
  prune ({
    dev = true,
    optional = true,
    deep = false,
  }) {
    throw new Error('TODO')
  }

  /* istanbul ignore next */
  calculate ({
    dev = true,
    optional = true,
    deep = false,
  }) {
    throw new Error('TODO')
  }

  /* istanbul ignore next */
  update ({
    name = null,
    depth = Infinity,
    restrict = true,
    deep = false,
  }) {
    throw new Error('TODO')
  }

  /* istanbul ignore next */
  reify ({
    save = true,
  }) {
    throw new Error('TODO')
  }
}

module.exports = Arborist

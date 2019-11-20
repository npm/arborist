// An edge in the dependency graph
// Represents a dependency relationship of some kind

const depValid = require('./dep-valid.js')
const _from = Symbol('_from')
const _to = Symbol('_to')
const _type = Symbol('_type')
const _spec = Symbol('_spec')
const _name = Symbol('_name')
const _error = Symbol('_error')
const _loadError = Symbol('_loadError')
const _setFrom = Symbol('_setFrom')
const _detach = Symbol('_detach')

const types = new Set([
  'prod',
  'dev',
  'optional',
  'peer',
  'peerOptional',
])

class Edge {
  constructor (options) {
    const { type, name, spec, from } = options

    this[_spec] = spec
    if (typeof name !== 'string')
      throw new TypeError('must provide dependency name')
    this[_name] = name
    if (!types.has(type)) {
      throw new TypeError(
        `invalid type: ${type}\n` +
        `(valid types are: ${Edge.types.join(', ')})`)
    }
    this[_type] = type
    if (!from)
      throw new TypeError('must provide "from" node')
    this[_setFrom](from)
    this[_error] = this[_loadError]()
  }

  get optional () {
    return this[_type] === 'optional' || this[_type] === 'peerOptional'
  }

  get peer () {
    return this[_type] === 'peer' || this[_type] === 'peerOptional'
  }

  get type () {
    return this[_type]
  }

  get name () {
    return this[_name]
  }

  get spec () {
    return this[_spec]
  }

  get valid () {
    return !this.error
  }

  get error () {
    this[_error] = this[_error] || this[_loadError]()
    return this[_error] === 'OK' ? null : this[_error]
  }

  [_loadError] () {
    return !this[_to] ? (this.optional ? null : 'MISSING')
      : this.peer &&
          this.from === this.to.parent &&
          !this.from.isTop
        ? 'PEER LOCAL'
      : !depValid(this.to, this.spec, this.from)
        ? 'INVALID'
      : 'OK'
  }

  reload () {
    const newTo = this[_from].resolve(this.name)
    if (newTo !== this[_to]) {
      if (this[_to])
        this[_to].edgesIn.delete(this)
      this[_to] = newTo
      this[_error] = this[_loadError]()
      if (this[_to])
        this[_to].addEdgeIn(this)
    }
  }

  [_detach] () {
    if (this[_to])
      this[_to].edgesIn.delete(this)
    this[_from].edgesOut.delete(this.name)
    this[_to] = null
    this[_error] = 'DETACHED'
    this[_from] = null
  }

  [_setFrom] (node) {
    this[_from] = node
    if (node.edgesOut.has(this.name))
      node.edgesOut.get(this.name)[_detach]()
    node.addEdgeOut(this)
    this.reload()
  }

  get from () {
    return this[_from]
  }

  get to () {
    return this[_to]
  }
}

Edge.types = [...types]
Edge.errors = [
  'DETACHED',
  'MISSING',
  'PEER LOCAL',
  'INVALID',
]

module.exports = Edge

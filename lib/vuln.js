// An object representing a vulnerability either as the result of an
// advisory or due to the package in question depending exclusively on
// vulnerable versions of a dep.
//
// - name: package name
// - range: Set of vulnerable versions
// - nodes: Set of nodes affected
// - effects: Set of vulns triggered by this one
// - via: Set of advisories or vulnerabilities causing this vuln
//
// These objects are filled in by the operations in the VulnSet
// class, which sets the the packument and calls addRange() with
// the vulnerable range.

const {satisfies, simplifyRange} = require('semver')
const semverOpt = { loose: true, includePrerelease: true }

const _range = Symbol('_range')
const _ranges = Symbol('_ranges')
const _simpleRange = Symbol('_simpleRange')
class Vuln {
  constructor ({ name, via }) {
    this.name = name
    this.via = new Set()
    this.addVia(via)
    this.effects = new Set()
    this.topNodes = new Set()
    this[_ranges] = new Set()
    this[_range] = null
    this[_simpleRange] = null
    this.nodes = new Set()
    this.packument = null
  }

  addVia (via) {
    this.via.add(via)
    if (via instanceof Vuln)
      via.effects.add(this)
  }

  hasRange (range) {
    return this[_ranges].has(range)
  }

  addRange (range) {
    this[_ranges].add(range)
    this[_range] = [...this[_ranges]].join(' || ')
    this[_simpleRange] = null
  }

  get range () {
    return this[_range] || (this[_range] = [...this[_ranges]].join(' || '))
  }

  get simpleRange () {
    if (this[_simpleRange] && this[_simpleRange] === this[_range])
      return this[_simpleRange]
    const range = this.range
    const versions = Object.keys(this.packument.versions)
    const simple = simplifyRange(versions, range, semverOpt)
    return this[_simpleRange] = this[_range] = simple
  }

  isVulnerable (node) {
    if (this.nodes.has(node))
      return true

    const { version } = node.package
    if (version && satisfies(version, this.range, semverOpt)) {
      this.nodes.add(node)
      return true
    }

    return false
  }
}

module.exports = Vuln

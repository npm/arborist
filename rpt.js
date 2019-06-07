const fs = require('fs')
const { promisify } = require('util')
const realpath = promisify(fs.realpath)
const { basename, dirname, join } = require('path')
const rpj = promisify(require('read-package-json'))
const readdir = promisify(require('readdir-scoped-modules'))

let ID = 0
class Node {
  constructor (pkg, logical, physical, er, cache) {
    // should be impossible.
    /* istanbul ignore next */
    if (cache.get(physical))
      throw new Error('re-creating already instantiated node')

    cache.set(physical, this)

    const parent = basename(dirname(logical))
    if (parent.charAt(0) === '@')
      this.name = `${parent}/${basename(logical)}`
    else
      this.name = basename(logical)
    this.path = logical
    this.realpath = physical
    this.error = er
    this.id = ID++
    this.package = pkg || {}
    this.parent = null
    this.isLink = false
    this.children = []
  }
}

class Link extends Node {
  constructor (pkg, logical, physical, realpath, er, cache) {
    super(pkg, logical, physical, er, cache)
    const cachedTarget = cache.get(realpath)
    this.target = cachedTarget || new Node(pkg, logical, realpath, er, cache)
    this.realpath = realpath
    this.isLink = true
    this.children = this.target.children
    this.error = er
  }
}

const loadNode = (logical, physical, cache) => new Promise((res, rej) => {
  res(cache.get(physical) || realpath(physical)
    .then(real =>
      rpj(join(real, 'package.json'))
        .then(pkg => [real, pkg, null], er => [real, null, er])
        .then(([real, pkg, er]) =>
          physical === real ? new Node(pkg, logical, physical, er, cache)
          : new Link(pkg, logical, physical, real, er, cache)
        ),
      // if the realpath fails, don't bother with the rest
      er => new Node(null, logical, physical, er, cache))
    )
})

const loadChildren = (node, cache, filterWith) => {
  const nm = join(node.path, 'node_modules')
  return realpath(nm)
    .then(rm => readdir(rm).then(kids => [rm, kids]))
    .then(([rm, kids]) => Promise.all(
      kids.filter(kid =>
        kid.charAt(0) !== '.' && (!filterWith || filterWith(node, kid)))
      .map(kid => loadNode(join(nm, kid), join(rm, kid), cache)))
    ).then(kidNodes => {
      kidNodes.forEach(k => k.parent = node)
      node.children = kidNodes.sort((a, b) =>
        (a.package.name ? a.package.name.toLowerCase() : a.path)
        .localeCompare(
          (b.package.name ? b.package.name.toLowerCase() : b.path)
        ))
      return node
    })
    .catch(() => node)
}

const loadTree = (node, did, cache, filterWith) => {
  // impossible except in pathological ELOOP cases
  /* istanbul ignore next */
  if (did.has(node.realpath))
    return Promise.resolve(node)

  did.add(node.realpath)

  return loadChildren(node, cache, filterWith)
    .then(node => Promise.all(
      node.children
        .filter(kid => !did.has(kid.realpath))
        .map(kid => loadTree(kid, did, cache, filterWith))
    )).then(() => node)
}

// XXX Drop filterWith and/or cb in next semver major bump
const rpt = (root, filterWith, cb) => {
  if (!cb && typeof filterWith === 'function') {
    cb = filterWith
    filterWith = null
  }

  const cache = new Map()
  const p = realpath(root)
    .then(realRoot => loadNode(root, realRoot, cache))
    .then(node => loadTree(node, new Set(), cache, filterWith))

  if (typeof cb === 'function')
    p.then(tree => cb(null, tree), cb)

  return p
}

rpt.Node = Node
rpt.Link = Link
module.exports = rpt

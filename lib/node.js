const { relative, basename, dirname } = require('path')
const walk = Symbol('walk')
const depinfoLoaded = Symbol('depinfoLoaded')
const loadDepinfo = Symbol('loadDepinfo')
const depValid = require('./dep-valid.js')

let ID = 0
class Node {
  constructor (options) {
    const { pkg, logical, physical, er, cache, parent, arborist } = options
    // should be impossible.
    const cached = cache.get(physical)

    /* istanbul ignore next */
    if (cached && !cached.then)
      throw new Error('re-creating already instantiated node')

    cache.set(physical, this)

    this[depinfoLoaded] = false
    const parentDir = basename(dirname(logical))
    if (parentDir.charAt(0) === '@')
      this.name = `${parentDir}/${basename(logical)}`
    else
      this.name = basename(logical)

    this.path = logical
    this.realpath = physical
    this.error = er
    this.id = ID++

    this.package = pkg || {}

    // physical parent dir
    this.parent = parent || null
    if (this.parent)
      this.parent.children.push(this)

    // The contents of node_modules
    // use an array because we care about sorting
    this.children = []
    this.requires = new Map()
    this.requiredBy = new Set()
    this.missingDeps = new Map()
    this.invalidDeps = new Map()
    this.invalidTo = new Set()
    this.dependencies = new Map()

    this.missingPeerDeps = new Map()

    // XXX update location on re-parenting
    const ploc = this.parent && this.parent.location
    this.location = !this.parent ? '/'
      : `${ploc === '/' ? '' : ploc}/${this.name}`

    this.arborist = arborist || parent.arborist

    // these get unset along the walk, so they're on by default.
    this.extraneous = true
    this.dev = true
    this.optional = true
    this.devOptional = true
  }

  get isLink () {
    return false
  }

  // enter is called before the children, exit is after.  if either
  // returns a promise, it asynchronizes the walk, and returns a
  // promise to the caller which is resolved on completion to the return
  // value of the initial node.
  // if both enter and exit are provided, then the return value of exit
  // takes precedence in the return of the function.
  // Note that in the case of loops, the children passed to the exit
  // function may be the result of the enter() function, not exit().
  [walk] ({enter, exit, filter}, seen, getChildren) {
    if (seen.has(this))
      return seen.get(this)

    filter = filter || (() => true)
    seen.set(this, null)

    const enterNode = () => {
      const res = enter ? enter(this) : this
      if (res && res.then) {
        const fullResult = res.then(res => {
          seen.set(this, res)
          return childNodes()
        })
        seen.set(this, fullResult)
        return fullResult
      } else {
        seen.set(this, res)
        return childNodes()
      }
    }

    const childNodes = () => {
      const kids = getChildren(this).filter(filter).map(dep =>
        dep[walk]({enter, exit}, seen, getChildren))
      return kids.some(res => res && res.then)
        ? Promise.all(kids).then(exitNode)
        : exitNode(kids)
    }

    const exitNode = kids => {
      if (!exit)
        return seen.get(this)
      const res = exit(seen.get(this), kids)
      seen.set(this, res)
      // if it's a promise at this point, the caller deals with it
      return res
    }

    return enterNode(this)
  }

  walkLogical ({enter, exit, filter}) {
    return this[walk]({enter, exit, filter}, new Map(),
      node => [...node.dependencies.values()])
  }

  walkPhysical ({enter, exit, filter}) {
    return this[walk]({enter, exit, filter}, new Map(), node => node.children)
  }

  sortChildren () {
    this.children = this.children.sort(nodesort)
    return this
  }

  get isTop () {
    return !this.parent
  }

  resolveDep (name) {
    const mine = this.children.filter(node => node.name === name)
    return mine.length ? mine[0]
      : this.isTop ? null
      : this.parent.resolveDep(name)
  }

  loadDepinfo () {
    // do this as a breadth-first walk so that we can accurately
    // set dev and optional flags in a single pass, rather than
    // having to walk the tree again later.
    const depNodes = [this]
    while (depNodes.length) {
      depNodes.shift()[loadDepinfo](depNodes)
    }
    return this
  }

  [loadDepinfo] (depNodes) {
    if (this[depinfoLoaded])
      return

    this[depinfoLoaded] = true

    if (this.isTop) {
      this.extraneous = false
      this.dev = false
      this.optional = false
      this.devOptional = false
    }
    const optionals = new Set(
      Object.keys(this.package.optionalDependencies || {})
    )
    const devs = new Set(
      Object.keys(this.package.devDependencies || {})
    )
    const peers = new Set(
      Object.keys(this.package.peerDependencies || {})
    )
    const reqs = new Set(
      Object.keys(this.package.dependencies || {})
    )

    const depEntries = Object.entries({
      ...(this.package.dependencies || {}),
      ...(this.package.peerDependencies || {}),
      ...(this.package.optionalDependencies || {}),
      ...(this.isTop ? this.package.devDependencies || {} : {}),
    })

    for (const [name, spec] of depEntries)  {
      // the top node needs its peer deps locally.
      // everyone else starts resolving peerdeps at their parent's level
      // ie, in the same node_modules folder where they themselves live
      //
      // XXX this isn't _quite_ right.  It _should_ find it there, but if
      // it exists in its own folder, it'll get it from there instead, and that
      // would probably be a problem.  This could occur if A has a peerdep on
      // B@1, and a regular dep on C@1, where C@1.1 has a peerdep on B@1, but
      // C@1.2 has a peerDep on B@2.  In that case, we need to constraint solve
      // and install C@1.1 instead of C@1.2, or fail if the constraint can't
      // be met.
      const resolver = peers.has(name) ? this.parent || this : this
      const dep = resolver.resolveDep(name)
      const inReq = reqs.has(name)
      const inPeer = !inReq && peers.has(name)
      const inOptional = optionals.has(name)

      if (inReq && !inOptional)
        this.requires.set(name, spec)

      if (!dep) {
        if ((inReq || inPeer) && !inOptional)
          this[inPeer ? 'missingPeerDeps' : 'missingDeps'].set(name, spec)
        continue
      }

      // optional deps are only listed in requires when they exist
      if (inOptional)
        this.requires.set(name, spec)

      if (!depValid(dep, spec, this)) {
        dep.invalidTo.add(this)
        this.invalidDeps.set(`${name}@${spec}`, dep)
      }

      // This rewalk is necessary to handle cases where devDep and optional
      // or normal dependency graphs overlap deep in the dep graph.
      // Since we're only walking through deps that are not already flagged
      // as non-dev/non-optional, it's typically a very shallow traversal
      const devsHas = devs.has(name)
      const optionalsHas = optionals.has(name)
      const unsetDevOpt = !this.devOptional && !devsHas && !optionalsHas
      const unsetDev = unsetDevOpt || !this.dev && !devsHas
      const unsetOpt = unsetDevOpt || !this.optional && !optionalsHas

      if (unsetDev)
        dep.unsetFlag('dev')

      if (unsetOpt)
        dep.unsetFlag('optional')

      if (unsetDevOpt)
        dep.unsetFlag('devOptional')

      dep.unsetFlag('extraneous')

      this.dependencies.set(name, dep)
      dep.requiredBy.add(this)
      if (!dep[depinfoLoaded])
        depNodes.push(dep)
    }
  }

  unsetFlag (flag) {
    if (this[flag]) {
      this[flag] = false
      this.walkLogical({
        enter: node => node[flag] = false,
        filter: node => node[flag],
      })
    }
  }

  // XXX don't depend on special _fields in package.json
  // Yarn and old npm clients don't put them there, and
  // `npm ci` does slightly differently than `npm install`
  get packageLock () {
    return this.walkPhysical({
      enter: tree => ({
        // stash this here, will remove later
        _target: tree.target,
        _tree: tree,
        _isTop: tree.isTop,
        name: tree.isTop && tree.package && tree.package.name || tree.name,

        version: (
          tree.target ? 'file:' + relative('.', tree.realpath)
          : tree.package._requested &&
            tree.package._requested.type === 'remote'
          ? tree.package._requested.saveSpec
          : tree.package._id &&
            !tree.isTop &&
            tree.package.name !== tree.name ? `npm:${tree.package._id}`
          : tree.package.version
        ),
        ...(tree.package._inBundle ? { bundled: true } : {
          ...(
            tree.package._resolved &&
            !(tree.package._requested &&
              tree.package._requested.type === 'remote')
            ? { resolved: tree.package._resolved }
            : {}
          ),
          ...(
            tree.package._integrity ? { integrity: tree.package._integrity }
            : tree.package._shasum ? {
              integrity: `sha1-${
                Buffer.from(tree.package._shasum, 'hex').toString('base64')
              }`
            }
            : {}
          ),
        }),
        ...(tree.extraneous ? { extraneous: true } : {
          ...(tree.dev ? { dev: true } : {}),
          ...(tree.optional ? { optional: true } : {}),
          ...(tree.devOptional && !tree.optional && !tree.dev
              ? { devOptional: true } : {}),
        }),
        ...(tree.isTop && !tree.target ? { lockfileVersion: 1, requires: true }
          : tree.requires.size ? {
            requires: [...tree.requires.entries()].reduce((set, [k, v]) => {
              set[k] = v
              return set
            }, {})
          }
          : {}),
      }),
      exit: (tree, children) => {
        if (!tree._target && children.length) {
          tree.dependencies = children.reduce((set, kid) => {
            // If a child node is a link to another spot shallower
            // in the tree, then it can have already been visited,
            // so we can't delete the name entirely.
            set[kid.name] = kid
            delete kid._tree
            delete kid._target
            delete kid._isTop
            Object.defineProperty(kid, 'name', {
              value: kid.name,
              enumerable: false,
            })
            return set
          }, {})
        }
        if (tree._isTop) {
          delete tree._target
          delete tree._tree
          delete tree._isTop
        }
        return tree
      }
    })
  }
}

const nodesort = (a, b) => {
  const aname = a.name.toLowerCase()
  const bname = b.name.toLowerCase()
  /* istanbul ignore next */
  return aname === bname ? 0
    : aname > bname ? 1
    : -1
}

module.exports = Node

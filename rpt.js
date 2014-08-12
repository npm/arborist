var fs = require ('fs')
var rpj = require ('read-package-json')
var path = require ('path')
var dz = require ('dezalgo')
var once = require ('once')
var readdir = require ('readdir-scoped-modules')
var debug = require ('debuglog') ('rpt')

function dpath (p) {
  if (p . indexOf (process.cwd()) === 0)
    p = p . substr (process.cwd().length + 1)
  return p
}

module . exports = rpt

function Node (package, path) {
  if (! (this instanceof Node))
    return new Node (package, path)

  debug ('Node', dpath (path), package && package . _id)
  this . package = package
  this . path = path
  this . children = []
}
Node . prototype . package = null
Node . prototype . path = ''
Node . prototype . children = null

function loadNode (p, cb) {
  debug ('loadNode', dpath (p))
  fs . realpath (p, function (er, real) {
    if (er)
      return cb (er)
    debug ('realpath p=%j real=%j', dpath (p), dpath (real))
    var pj = path . resolve (real, 'package.json')
    rpj (pj, function (er, package) {
      cb (er, new Node (package || null, real))
    })
  })
}

function loadChildren (node, cb) {
  debug ('loadChildren', dpath(node . path))
  // don't let it be called more than once
  cb = once (cb)
  var nm = path . resolve (node . path, 'node_modules')
  readdir (nm, function (er, kids) {
    // If there are no children, that's fine, just return
    if (er)
      return cb (null, node)

    kids = kids . filter (function (kid) {
      return kid !== '.bin'
    })

    var l = kids . length
    if (l === 0)
      return cb (null, node)

    kids . forEach (function (kid) {
      var p = path . resolve (nm, kid)
      loadNode (p, then)
    })

    function then (er, kid) {
      if (er)
        return cb (er)
      node . children . push (kid)
      if (-- l === 0) {
        sortChildren (node)
        return cb (null, node)
      }
    }
  })
}

function sortChildren (node) {
  node . children = node . children . sort (function (a, b) {
    a = a . package . name . toLowerCase ()
    b = b . package . name . toLowerCase ()
    return a > b ? 1 : -1
  })
}

function loadTree (node, cb, did) {
  did = did || Object . create (null)
  debug ('loadTree', dpath (node . path), !! did [ node . path ])
  if (did [ node . path ])
    return dz (cb) (null, node)

  did [ node . path ] = true

  cb = once (cb)
  loadChildren (node, function (er, node) {
    if (er)
      return cb (er)

    var kids = node . children . filter (function (kid) {
      return ! did [ kid . path ]
    })
    var l = kids . length
    if (l === 0)
      return cb (null, node)

    kids . forEach (function (kid) {
      loadTree (kid, then, did)
    })

    function then (er, kid) {
      if (er)
        return cb (er)

      if (--l === 0)
        cb (null, node)
    }
  })
}

function rpt (root, cb) {
  debug ('rpt', dpath (root))
  loadNode (root, function (er, node) {
    // if there's an error, it's fine, as long as we got a node
    if (!node)
      return cb (er)
    loadTree (node, cb)
  })
}

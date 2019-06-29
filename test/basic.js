var test = require('tap').test
var rpt = require('../rpt.js')
var path = require('path')
var resolve = path.resolve
var fs = require('fs')
var archy = require('archy')
var mkdirp = require('mkdirp')
var fixtures = path.resolve(__dirname, 'fixtures')
var roots = [ 'root', 'other', 'selflink', 'noname' ]
var cwd = path.resolve(__dirname, '..')

var symlinks = {
  'selflink/node_modules/@scope/z/node_modules/glob':
    '../../../foo/node_modules/glob',
  'other/node_modules/glob':
    '../../root/node_modules/@scope/x/node_modules/glob',
  'linkedroot':
    'root',
  'deep/root':
    '../root',
  'deeproot':
    'deep',
  'badlink/node_modules/foo':
    'foo',
  'badlink/node_modules/bar':
    'baz'
}

function cleanup () {
  Object.keys(symlinks).forEach(function (s) {
    var p = path.resolve(cwd, 'test/fixtures', s)
    try {
      fs.unlinkSync(p)
    } catch (er) {}
  })
}

test('setup symlinks', function (t) {
  cleanup()

  Object.keys(symlinks).forEach(function (s) {
    var p = path.resolve(cwd, 'test/fixtures', s)
    mkdirp.sync(path.dirname(p))
    fs.symlinkSync(symlinks [ s ], p, 'dir')
  })

  t.end()
})

roots.forEach(function (root) {
  var dir = path.resolve(fixtures, root)

  // test promisey nature
  test(root, t => rpt(dir).then(d =>
    t.matchSnapshot(archy(archyize(d)).trim(), root + ' tree')))
})

test('linkedroot', function (t) {
  var dir = path.resolve(fixtures, 'linkedroot')
  // test legacy cb nature
  rpt(dir, function (er, d) {
    if (er && er.code !== 'ENOENT') throw er

    var actual = archy(archyize(d)).trim()
    t.matchSnapshot(actual, 'linkedroot tree')
    t.end()
  })
})

test('deeproot', function (t) {
  var dir = path.resolve(fixtures, 'deeproot/root')
  rpt(dir, function (er, d) {
    if (er && er.code !== 'ENOENT') throw er

    var actual = archy(archyize(d)).trim()
    t.matchSnapshot(actual, 'deeproot tree')
    t.end()
  })
})

test('filterWith', t =>
  rpt(
    path.join(fixtures, 'root'),
    (node, kid) => !node.parent,
    true
  ).then(d => t.matchSnapshot(archy(archyize(d)).trim()), 'only 1 level deep')
)

test('looking outside of cwd', t => {
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  process.chdir('test/fixtures/selflink')
  return rpt('../root').then(d =>
    t.matchSnapshot(archy(archyize(d)).trim()))
})

test('shake out Link target timing issue', t => {
  process.env._TEST_RPT_SLOW_LINK_TARGET_ = '1'
  const cwd = process.cwd()
  t.teardown(() => process.env._TEST_RPT_SLOW_LINK_TARGET_ = '')
  return rpt(path.resolve(fixtures, 'selflink')).then(d =>
    t.matchSnapshot(archy(archyize(d)).trim()))
})

test('broken json', function (t) {
  rpt(path.resolve(fixtures, 'bad'), function (er, d) {
    t.ok(d.error, 'Got an error object')
    t.equal(d.error && d.error.code, 'EJSONPARSE')
    t.ok(d, 'Got a tree')
    t.end()
  })
})

test('missing json does not obscure deeper errors', function (t) {
  rpt(path.resolve(fixtures, 'empty'), function (er, d) {
    var error = d.error
    t.ok(error, 'Error reading json of top level')
    t.equal(error && error.code, 'ENOENT')
    var childError = d.children.length===1 && d.children[0].error
    t.ok(childError, 'Error parsing JSON of child node')
    t.equal(childError && childError.code, 'EJSONPARSE')
    t.end()
  })
})

test('missing folder', function (t) {
  rpt(path.resolve(fixtures, 'does-not-exist'), function (er, d) {
    t.ok(er, 'Got an error object')
    t.equal(er && er.code, 'ENOENT')
    t.ok(!d, 'No tree on top level error')
    t.end()
  })
})

test('missing symlinks', function (t) {
  rpt(path.resolve(fixtures, 'badlink'), function (er, d) {
    if (er && er.code !== 'ENOENT') throw er
    t.is(d.children.length, 2, 'both broken children are included')
    d.children.forEach(function (child) {
      t.ok(child.error, 'Child node has an error')
    })
    t.end()
  })
})

function archyize (d, seen) {
  seen = seen || {}
  var path = d.realpath

  var label = !Object.keys(d.package).length ? '' :
              d.package._id ? d.package._id + ' ' :
              d.name ? d.name + (d.package.version ? '@' + d.package.version : '') + ' ' :
              d.package.name ? d.package.name + (d.package.version ? '@' + d.package.version : '') + ' ' :
              ''
  label += path.substr(cwd.length + 1)

  if (d . target) {
    return { label: label + ' (symlink)', nodes: [] }
  }

  return {
    label: label,
    nodes: d.children.map(function (kid) {
      return archyize(kid, seen)
    })
  }
}

test('realpath gutchecks', t => {
  const d = path.resolve(cwd, 'test/fixtures')
  const realpath = require('../realpath.js')
  const {realpathSync} = fs
  Object.keys(symlinks).map(link => t.test(link, t =>
    realpath(
      path.resolve(d, link),
      new Map(),
      new Map(),
      0
    ).then(
      real => t.equal(real, realpathSync(path.resolve(d, link))),
      er => t.throws(()=> realpathSync(path.resolve(d, link)))
    )))
  t.end()
})

test('cleanup', function (t) {
  cleanup()
  t.end()
})

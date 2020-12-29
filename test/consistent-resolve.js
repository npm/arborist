const t = require('tap')
const cr = require('../lib/consistent-resolve.js')

// normalize windows paths to unix ones
// we only need this when the relpaths parameter is falsey and the
// spec is a relative path
const normalizePath = path => path.replace(/^file:\w:(.*)/g, 'file:$1').replace(/\\/g, '/')

t.test('file and directories resolved to toPath', t => {
  const tp = '/foo'
  const fp = '/foo/bar'
  t.equal(cr('/foo/bar/baz', fp, tp, true), 'file:bar/baz')
  t.equal(cr('/foo/bar/baz', fp, tp), 'file:/foo/bar/baz')

  t.equal(cr('./baz', fp, tp, true), 'file:bar/baz')
  t.equal(normalizePath(cr('./baz', fp, tp)), 'file:/foo/bar/baz')

  t.equal(cr('/foo/bar/baz.tgz', fp, tp, true), 'file:bar/baz.tgz')
  t.equal(cr('/foo/bar/baz.tgz', fp, tp), 'file:/foo/bar/baz.tgz')

  t.equal(cr('baz.tgz', fp, tp, true), 'file:bar/baz.tgz')
  t.equal(normalizePath(cr('baz.tgz', fp, tp)), 'file:/foo/bar/baz.tgz')

  t.equal(cr('file:/foo/bar/baz', fp, tp, true), 'file:bar/baz')
  t.equal(cr('file:/foo/bar/baz', fp, tp), 'file:/foo/bar/baz')

  t.equal(cr('file:baz', fp, tp, true), 'file:bar/baz')
  t.equal(normalizePath(cr('file:baz', fp, tp)), 'file:/foo/bar/baz')

  t.equal(cr('file:/foo/bar/baz.tgz', fp, tp, true), 'file:bar/baz.tgz')
  t.equal(cr('file:/foo/bar/baz.tgz', fp, tp), 'file:/foo/bar/baz.tgz')

  t.equal(cr('file:baz.tgz', fp, tp, true), 'file:bar/baz.tgz')
  t.equal(normalizePath(cr('file:baz.tgz', fp, tp)), 'file:/foo/bar/baz.tgz')
  t.end()
})

t.test('file and directories made consistent if toPath not set', t => {
  const fp = '/foo/bar'
  for (const rel of [true, false]) {
    // relative doesn't matter if toPath not set
    t.test(`rel=${rel}`, t => {
      t.equal(cr('/foo/bar/baz', fp, null, rel), 'file:/foo/bar/baz')
      t.equal(normalizePath(cr('./baz', fp, null, rel)), 'file:/foo/bar/baz')
      t.equal(cr('/foo/bar/baz.tgz', fp, null, rel), 'file:/foo/bar/baz.tgz')
      t.equal(normalizePath(cr('baz.tgz', fp, null, rel)), 'file:/foo/bar/baz.tgz')
      t.equal(cr('file:/foo/bar/baz', fp, null, rel), 'file:/foo/bar/baz')
      t.equal(normalizePath(cr('file:baz', fp, null, rel)), 'file:/foo/bar/baz')
      t.equal(cr('file:/foo/bar/baz.tgz', fp, null, rel), 'file:/foo/bar/baz.tgz')
      t.equal(normalizePath(cr('file:baz.tgz', fp, null, rel)), 'file:/foo/bar/baz.tgz')
      t.end()
    })
  }
  t.end()
})

t.test('consistent hosted git info urls', t => {
  const auth_user = 'git@'
  const variations = [
    {},
    { auth: auth_user },
    { hash: '#0000000000000000000000000000000000000000' },
  ]

  let auth, hash;
  const expect_url = 'github.com/a/b.git';

  variations.forEach((opts) => {
    auth = opts.auth ? opts.auth : '';
    hash = opts.hash ? opts.hash : '';

    let expect_github = 'github:' + 'a/b' + hash
    t.equal(cr('a/b' + hash), expect_github)
    t.equal(cr('github:a/b' + hash), expect_github)
    t.equal(cr('xyz@a/b' + hash), expect_github)
    t.equal(cr('xyz@github:a/b' + hash), expect_github)

    let expect_git = 'git://' + auth + expect_url + hash
    t.equal(cr('git://' + auth + 'github.com/a/b' + hash), expect_git)
    t.equal(cr('git://' + auth + 'github.com/a/b.git' + hash), expect_git)
    t.equal(cr('xyz@git://' + auth + 'github.com/a/b' + hash), expect_git)
    t.equal(cr('xyz@git://' + auth + 'github.com/a/b.git' + hash), expect_git)

    let expect_https = 'git+https://' + auth + expect_url + hash
    t.equal(cr('git+https://' + auth + 'github.com/a/b' + hash), expect_https)
    t.equal(cr('git+https://' + auth + 'github.com/a/b.git' + hash), expect_https)
    t.equal(cr('xyz@git+https://' + auth + 'github.com/a/b' + hash), expect_https)
    t.equal(cr('xyz@git+https://' + auth + 'github.com/a/b.git' + hash), expect_https)

    let expect_ssh = 'git+ssh://' + auth_user + expect_url + hash // always has an auth
    t.equal(cr('git+ssh://' + auth + 'github.com/a/b' + hash), expect_ssh)
    t.equal(cr('git+ssh://' + auth + 'github.com/a/b.git' + hash), expect_ssh)
    t.equal(cr('xyz@git+ssh://' + auth + 'github.com/a/b' + hash), expect_ssh)
    t.equal(cr('xyz@git+ssh://' + auth + 'github.com/a/b.git' + hash), expect_ssh)
  });

  t.end()
})

t.test('unhosted git returns saveSpec', t => {
  const r = 'git+https://x.com/y.git#0000000000000000000000000000000000000000'
  t.equal(cr(r), r)
  t.equal(cr('xyz@' + r), r)
  t.end()
})

t.test('remotes returned as-is', t => {
  const r = 'http://x.com/y.tgz'
  t.equal(cr(r), r)
  t.equal(cr('xyz@' + r), r)
  t.end()
})

t.test('just a tag name interpreted as a tag name, not a name@', t => {
  t.equal(cr('foo'), 'foo')
  t.equal(cr('foo@'), '')
  t.end()
})

t.test('falsey resolved returns null', t => {
  t.equal(cr(null), null)
  t.equal(cr(0), null)
  t.equal(cr(false), null)
  t.equal(cr(undefined), null)
  t.end()
})

t.test('invalid resolved returns as-is', t => {
  t.equal(cr('not ! a : v@lid t*A*g'), 'not ! a : v@lid t*A*g')
  t.end()
})

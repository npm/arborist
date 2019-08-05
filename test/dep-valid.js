const t = require('tap')
const depValid = require('../lib/dep-valid.js')
const npa =  require('npm-package-arg')

t.ok(depValid({}, '', {}), '* is always ok')

t.ok(depValid({
  package: {
    version: '1.2.3',
  },
}, '1.x', {}), 'range that is satisfied')

t.ok(depValid({
  isLink: true,
  realpath: '/some/path'
}, npa('file:/some/path'), {}), 'links must point at intended target')

t.notOk(depValid({
  isLink: true,
  realpath: '/some/other/path'
}, 'file:/some/path', {}), 'links must point at intended target')

t.notOk(depValid({
  realpath: '/some/path'
}, 'file:/some/path', {}), 'file:// must be a link')


t.ok(depValid({
  name: 'foo',
  resolved: 'git://host/repo#somebranch',
  package: {
    version: '1.2.3',
  },
}, 'git://host/repo#semver:1.x', {}), 'git url with semver range')

t.ok(depValid({
  name: 'foo',
  package: {
    name: 'bar',
    version: '1.2.3',
  },
}, 'npm:bar@1.2.3', {}), 'alias is ok')

t.ok(depValid({
  resolved: 'https://registry/abbrev-1.1.1.tgz',
  package: {},
}, 'https://registry/abbrev-1.1.1.tgz', {}), 'remote url match')

t.ok(depValid({
  resolved: 'git+ssh://git@github.com/foo/bar',
  package: {},
}, 'git+ssh://git@github.com/foo/bar.git', {}), 'matching _from saveSpec')

t.notOk(depValid({
  resolved: 'git+ssh://git@github.com/foo/bar',
  package: {},
}, 'git+ssh://git@github.com/bar/foo.git', {}), 'different repo')

t.notOk(depValid({
  package: {},
}, 'git+ssh://git@github.com/bar/foo.git', {}), 'missing repo')

t.ok(depValid({
  resolved: '/path/to/tarball.tgz',
}, '/path/to/tarball.tgz', {}), 'same tarball')

t.notOk(depValid({
  resolved: '/path/to/other/tarball.tgz',
}, '/path/to/tarball.tgz', {}), 'different tarball')

t.ok(depValid({
  resolved: 'https://registry.npmjs.org/foo/foo-1.2.3.tgz',
}, 'latest', {}), 'tagged registry version needs remote tarball')

t.notOk(depValid({
  resolved: 'git+https://registry.npmjs.org/foo/foo-1.2.3.git',
}, 'latest', {}), 'tagged registry version needs remote tarball, not git')

t.notOk(depValid({}, 'latest', {}),
  'tagged registry version needs remote tarball resolution')

t.throws(() => depValid({}, { type: 'not a type' }),
  Error('Unknown dependency type: not a type'))

t.test('invalid tag name', t => {
  const requestor = { errors: [] }
  const child = {}
  const request = '!!@#$%!#@$!'
  t.notOk(depValid(child, request, requestor))
  t.match(requestor, {
    errors: [ { message: 'Invalid tag name "!!@#$%!#@$!"' } ],
  }, 'parent got an error for their invalid request')
  t.end()
})

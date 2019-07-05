const t = require('tap')
const depValid = require('../lib/dep-valid.js')
const npa =  require('npm-package-arg')

t.ok(depValid({}, '', {}), '* is always ok')

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
  package: {
    version: '1.2.3',
    _from: 'git://host/repo',
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
  package: {
    _requested: {
      type: 'remote',
      raw: 'https://registry/abbrev-1.1.1.tgz',
      rawSpec: 'https://registry/abbrev-1.1.1.tgz',
      saveSpec: 'https://registry/abbrev-1.1.1.tgz',
      fetchSpec: 'https://registry/abbrev-1.1.1.tgz',
    },
  },
}, 'https://registry/abbrev-1.1.1.tgz', {}), 'child with matching rawSpec')

t.ok(depValid({
  package: {
    _requested: {
      type: 'remote',
      saveSpec: 'https://registry/abbrev-1.1.1.tgz',
    },
  },
}, 'https://registry/abbrev-1.1.1.tgz', {}), 'child with matching saveSpec')

t.notOk(depValid({
  package: {
    _requested: {
      type: 'remote',
      saveSpec: 'https://registry/abbrev-1.1.2.tgz',
    },
  },
}, 'https://registry/abbrev-1.1.1.tgz', {}), 'child with ummatched saveSpec')


t.ok(depValid({
  package: {
    _from: 'https://registry/abbrev-1.1.1.tgz',
  },
}, 'https://registry/abbrev-1.1.1.tgz', {}), 'matching _from spec')

t.ok(depValid({
  package: {
    _from: 'git+ssh://git@github.com/foo/bar',
  },
}, 'git+ssh://git@github.com/foo/bar.git', {}), 'matching _from saveSpec')

t.notOk(depValid({
  package: {
    _from: 'git+ssh://git@github.com/foo/bar',
  },
}, 'git+ssh://git@github.com/bar/foo.git', {}), 'nothing matched')

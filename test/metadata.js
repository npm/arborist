const Metadata = require('../lib/metadata.js')
const t = require('tap')

t.cleanSnapshot = s => s.split(process.cwd()).join('{CWD}')

const {resolve} = require('path')
const fixture = resolve(__dirname, 'fixtures/install-types')

t.test('root defaults to .', t => {
  const m = new Metadata()
  t.equal(m.files.arbmeta, './node_modules/.arborist-metadata.json')
  t.end()
})

t.test('loading in bad dir fails to get lock files', t =>
  Metadata.load('path/which/does/not/exist').then(m =>
    t.match(m.data, {arbmeta: {}, lockfile: null, shrinkwrap: null})))

t.test('look up from locks and such', t =>
  new Metadata(fixture).load().then(m => {
    t.strictSame(m.get({location:'/'}), {}, 'root has no integrity')
    t.match(m.data, { arbmeta: Object, lockfile: Object, shrinkwrap: null })
    t.matchSnapshot(m.get({location: '/abbrev'}), 'from arbmeta')
    t.matchSnapshot(m.get({
      location: '/abbrev/@scope/name/@otherscope/othername',
    }, 'scoped name from arbmeta'))
    t.matchSnapshot(m.get({ location: '/package/not/found' }), 'not found arb')

    t.matchSnapshot(m.get({ location: '/old/notfound' }), 'fall off the dep tree')

    const arbmeta = m.data.arbmeta
    m.data.arbmeta = {}
    t.matchSnapshot(m.get({location: '/abbrev'}), 'from lockfile')
    t.matchSnapshot(m.get({
      location: '/abbrev/@scope/name/@otherscope/othername',
    }, 'scoped name from lockfile'))
    t.matchSnapshot(m.get({ location: '/package/not/found' }), 'not found lock')
    m.data.arbmeta = {}
    m.data.shrinkwrap = m.data.lockfile
    m.data.lockfile = null
    t.matchSnapshot(m.get({location: '/full-git-url'}), 'from shrinkwrap')
    m.data.arbmeta = {}
    t.matchSnapshot(m.get({
      location: '/abbrev/@scope/name/@otherscope/othername',
    }, 'scoped name from shrinkwrap'))
    t.matchSnapshot(m.get({ location: '/package/not/found' }), 'not found sw')
    t.matchSnapshot(m.get({ location: '/symlink' }), 'symlink from sw')
    t.matchSnapshot(m.get({ location: '/unhosted-git' }), 'unhosted git from sw')

    m.data.arbmeta = {}
    m.data.shrinkwrap = null
    t.matchSnapshot(m.get({
      package: require(fixture + '/node_modules/abbrev/package.json'),
    }), 'get from basic package.json')
    t.matchSnapshot(m.get({
      location: '/symlink',
      path: './node_modules/symlink',
      realpath: fixture + '/abbrev-link-target',
      isLink: true,
      package: require(fixture + '/abbrev-link-target/package.json'),
    }), 'get from symlinked package.json')
    t.matchSnapshot(m.get({
      package: require(fixture + '/node_modules/old/package.json'),
    }), 'get from pinned-version package.json')
    t.matchSnapshot(m.get({
      package: require(fixture + '/node_modules/ghshort/package.json'),
    }), 'get from gh shorthand package.json')
    t.matchSnapshot(m.get({
      package: require(fixture + '/node_modules/full-git-url/package.json'),
    }), 'get from gh shorthand package.json')

    t.matchSnapshot(m.get({
      package: {nothing: 'here'},
    }), 'package with no metas')

    t.matchSnapshot(m.get({ location: '/package/not/found' }), 'not found pkg')
  }))

t.throws(() =>
  new Metadata().get(), Error('attemping to read metadata before loading'))

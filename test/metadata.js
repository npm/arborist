const Metadata = require('../lib/metadata.js')
const t = require('tap')

const {resolve} = require('path')
const fixture = resolve(__dirname, 'fixtures/install-types')

t.test('root defaults to .', t => {
  const m = new Metadata()
  t.equal(m.files.arbmeta, './node_modules/.arborist-metadata.json')
  t.end()
})

t.test('loading in bad dir fails to get lock files', t =>
  new Metadata('path/which/does/not/exist').load().then(m =>
    t.match(m.data, {arbmeta: null, lockfile: null, shrinkwrap: null})))

t.test('look up from locks and such', t =>
  new Metadata(fixture).load().then(m => {
    t.strictSame(m.get({location:'/'}), {}, 'root has no integrity')
    t.match(m.data, { arbmeta: Object, lockfile: Object, shrinkwrap: null })
    t.matchSnapshot(m.get({location: '/abbrev'}), 'from arbmeta')
    t.matchSnapshot(m.get({
      location: '/abbrev/@scope/name/@otherscope/othername',
    }, 'scoped name from arbmeta'))
    t.matchSnapshot(m.get({ location: '/package/not/found' }), 'not found arb')

    const arbmeta = m.data.arbmeta
    m.data.arbmeta = null
    t.matchSnapshot(m.get({location: '/abbrev'}), 'from lockfile')
    t.matchSnapshot(m.get({
      location: '/abbrev/@scope/name/@otherscope/othername',
    }, 'scoped name from lockfile'))
    t.matchSnapshot(m.get({ location: '/package/not/found' }), 'not found lock')
    m.data.shrinkwrap = m.data.lockfile
    m.data.lockfile = null
    t.matchSnapshot(m.get({location: '/full-git-url'}), 'from shrinkwrap')
    t.matchSnapshot(m.get({
      location: '/abbrev/@scope/name/@otherscope/othername',
    }, 'scoped name from shrinkwrap'))
    t.matchSnapshot(m.get({ location: '/package/not/found' }), 'not found sw')

    m.data.shrinkwrap = null
    m.get({
      package: require(fixture + '/node_modules/abbrev/package.json'),
    }, 'get from basic package.json')
    m.get({
      package: require(fixture + '/abbrev-link-target/package.json'),
    }, 'get from symlinked package.json')
    m.get({
      package: require(fixture + '/node_modules/old/package.json'),
    }, 'get from symlinked package.json')

    t.matchSnapshot(m.get({ location: '/package/not/found' }), 'not found pkg')
  }))

t.throws(() =>
  new Metadata().get(), Error('attemping to read metadata before loading'))

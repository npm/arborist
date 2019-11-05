const Metadata = require('../lib/metadata.js')
const Node = require('../lib/node.js')
const Link = require('../lib/link.js')

const t = require('tap')

t.cleanSnapshot = s => s.split(process.cwd()).join('{CWD}')

const {resolve} = require('path')
const fixture = resolve(__dirname, 'fixtures/install-types')

t.test('root defaults to .', t => {
  const m = new Metadata()
  t.equal(m.files.arblock, './node_modules/.arborist-lock.json')
  t.end()
})

t.test('loading in bad dir fails to get lock files', t =>
  Metadata.load('path/which/does/not/exist').then(m =>
    t.match(m.data, {arblock: {packages:{}}, lockfile: null})))

t.test('look up from locks and such', t =>
  new Metadata(fixture).load().then(m => {
    t.strictSame(m.get({location:''}), {}, 'root has no integrity')
    t.match(m.data, { arblock: Object, lockfile: Object })
    t.matchSnapshot(m.get({location: 'node_modules/abbrev'}), 'from arblock')
    t.matchSnapshot(m.get({
      location: 'node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername',
    }, 'scoped name from arblock'))
    t.matchSnapshot(m.get({ location: 'package/not/found' }), 'not found arb')

    t.matchSnapshot(m.get({ location: 'node_modules/old/node_modules/notfound' }), 'fall off the dep tree')

    t.test('lockfile', t => {
      m.data.arblock = {packages:{}}
      t.matchSnapshot(m.get({location: 'node_modules/abbrev'}), 'basic pkg')
      t.matchSnapshot(m.get({
        location: 'node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername',
      }, 'scoped name'))
      t.matchSnapshot(m.get({ location: 'package/not/found' }), 'not found')
      t.matchSnapshot(m.get({location: 'node_modules/full-git-url'}), 'full git')
      t.matchSnapshot(m.get({ location: 'node_modules/symlink' }), 'symlink')
      t.matchSnapshot(m.get({ location: 'node_modules/unhosted-git' }), 'unhosted git')
      t.end()
    })

    t.test('package', t => {
      m.data.arblock = {packages:{}}
      m.data.lockfile = null
      t.matchSnapshot(m.get({
        package: require(fixture + '/node_modules/abbrev/package.json'),
      }), 'get from basic package.json')
      t.matchSnapshot(m.get({
        location: 'node_modules/symlink',
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

      t.matchSnapshot(m.get({ location: 'package/not/found' }), 'not found pkg')
      t.end()
    })
  }))

t.throws(() =>
  new Metadata().get(), Error('attemping to read metadata before loading'))

t.test('memoize and dememoize', t => {
  const n = {
    location: '/asdf',
    integrity: 'integral',
    resolved: 'resolute',
  }
  const m = new Metadata()
  m.data = { arblock: {packages:{}}, lockfile: null }
  m.memo(n)
  t.matchSnapshot(m.data.arblock, 'memoized node')
  m.dememo(n)
  t.matchSnapshot(m.data.arblock, 'dememoized node')

  const empty = { location: '/whatever' }
  m.memo(empty)
  t.matchSnapshot(m.data.arblock, 'memoized empty node, no-op')

  m.memo(n)
  m.dememo({ ...n, location: null })
  t.matchSnapshot(m.data.arblock, 'dememoized locationless node, no-op')

  t.end()
})

t.test('construct metadata from node and package data', t => {
  const meta = new Metadata('/home/user/projects/root')
  meta.data = { arblock: { packages: {}}}
  const root = new Node({
    pkg: {
      name: 'root',
      dependencies: { a: '', link: '', link2: '' },
      devDependencies: { d: '', e: '' },
    },
    path: '/home/user/projects/root',
    realpath: '/home/user/projects/root',
    meta,
  })
  const link = new Link({
    path: '/home/user/projects/root/node_modules/link',
    realpath: '/home/user/projects/root/target',
    parent: root,
    pkg: {
      name: 'link',
      version: '1.2.3',
      _resolved: 'github:isaacs/foobarbaz#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    },
    target: new Node({
      realpath: '/home/user/projects/root/target',
      path: '/home/user/projects/root/target',
      root,
      pkg: {
        name: 'link',
        version: '1.2.3',
        _resolved: 'github:isaacs/foobarbaz#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      },
    }),
  })
  const a = new Node({
    resolved: 'https://example.com/a.tgz',
    integrity: 'sha512-helloyesthisisdog',
    pkg: {
      name: 'a',
      version: '1.2.3',
    },
    parent: root,
  })
  const d = new Node({
    pkg: {
      name: 'd',
      version: '1.2.3',
      _shasum: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    },
    parent: root,
  })

  meta.memo(root)
  t.matchSnapshot(meta.get(root), 'root metadata')
  t.matchSnapshot(meta.get(link), 'link metadata')
  t.matchSnapshot(meta.get(link.target), 'link target metadata')
  t.matchSnapshot(meta.get(a), 'dep a metadata')
  t.matchSnapshot(meta.data, 'data calculated from nodes themselves')
  t.end()
})

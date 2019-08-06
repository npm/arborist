const sfl = require('../lib/spec-from-lock.js')
const t = require('tap')
const cwd = process.cwd()
const dirname = require('path').dirname(cwd)
t.cleanSnapshot = s => s
  .split(cwd).join('{CWD}')
  .split(dirname).join('{..}')

t.matchSnapshot(sfl('x', {
  version: '1.2.3',
  integrity: 'integral',
}), 'version and integrity')

t.matchSnapshot(sfl('x', {
  version: 'foo.tgz',
  integrity: 'integral',
}), 'version (file) and integrity set')

t.matchSnapshot(sfl('x', {
  version: '1.2.3',
  from: '^1.2.0',
  shasum: 'deadbeef0cafebad',
  resolved: 'https://registry.npmjs.org/x/-/x-1.2.3.tgz',
}), 'version and range, no integrity')

t.matchSnapshot(sfl('x', {
  version: 'file:x-1.2.3.tgz',
  from: 'x-1.2.3.tgz',
}), 'file with from, no integrity')

t.matchSnapshot(sfl('x', {
  version: 'file:x-1.2.3.tgz',
  resolved: '/path/to/x-1.2.3.tgz',
}), 'file with resolved, no integrity')

t.matchSnapshot(sfl('x', {
  version: 'file:x-1.2.3.tgz',
  from: 'file:x-1.2.3.tgz',
  resolved: '/path/to/x-1.2.3.tgz',
}), 'file with resolved and from')

t.matchSnapshot(sfl('x', {
  version: 'file:../some/path',
}), 'directory symlink')

const nff = require('../lib/name-from-folder.js')
const t = require('tap')
t.equal(nff('/a/b/c/@foo/bar'), '@foo/bar')
t.equal(nff('/a/b/c/foo/bar'), 'bar')

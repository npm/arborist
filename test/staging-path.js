const t = require('tap')
const stagingPath = require('../lib/staging-path.js')
t.equal(stagingPath('/path/to/some/thing'), '/path/to/some/.thing-4GeEMv8c')

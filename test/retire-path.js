const t = require('tap')
const retirePath = require('../lib/retire-path.js')
t.equal(retirePath('/path/to/some/thing'), '/path/to/some/.thing-4GeEMv8c')

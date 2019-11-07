const {basename, dirname} = require('path')
module.exports = test =>
  basename(dirname(test)) === 'arborist' ? 'lib/arborist.js'
  : basename(test) === 'index.js' ? 'index.js'
  : 'lib/' + basename(test)

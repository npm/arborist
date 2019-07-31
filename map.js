const {basename} = require('path')
module.exports = test => 'lib/' + basename(test)

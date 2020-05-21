const {writeFileSync} = require('fs')
writeFileSync('env', Object.keys(process.env).sort()
  .filter(k => process.env[k] === '1' && /^npm_package_(dev|optional)/.test(k))
  .join('\n'))

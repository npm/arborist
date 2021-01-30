const path = process.argv[2] || '.'

const options = {
  path,
  cache: `${process.env.HOME}/.npm/_cacache`,
}
for (let i = 2; i < process.argv.length; i++) {
  const arg = process.argv[i]
  if (/^--add=/.test(arg)) {
    options.add = options.add || []
    options.add.push(arg.substr('--add='.length))
  } else if (/^--rm=/.test(arg)) {
    options.rm = options.rm || []
    options.rm.push(arg.substr('--rm='.length))
  } else if (arg === '--global') {
    options.global = true
  } else if (arg === '--global-style') {
    options.globalStyle = true
  } else if (arg === '--prefer-dedupe')
    options.preferDedupe = true
  else if (arg === '--fix')
    options.fix = true
  else if (arg === '--save')
    options.save = true
  else if (arg === '--quiet')
    options.quiet = true
  else if (arg === '--legacy-peer-deps')
    options.legacyPeerDeps = true
  else if (arg === '--force')
    options.force = true
  else if (arg === '--update-all') {
    options.update = options.update || {}
    options.update.all = true
  } else if (/^--update=/.test(arg)) {
    options.update = options.update || {}
    options.update.names = options.update.names || []
    options.update.names.push(arg.substr('--update='.length))
  } else if (/^--omit=/.test(arg)) {
    options.omit = options.omit || []
    options.omit.push(arg.substr('--omit='.length))
  } else if (/^--[^=]+=/.test(arg)) {
    const [key, ...v] = arg.replace(/^--/, '').split('=')
    const val = v.join('=')
    options[key] = val === 'false' ? false : val === 'true' ? true : val
  } else if (/^--.+/.test(arg)) {
    options[arg.replace(/^--/, '')] = true
  }
}

module.exports = options

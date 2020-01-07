// default logger.
// emits 'log' events on the process
const LEVELS = [
  'notice',
  'error',
  'warn',
  'info',
  'verbose',
  'http',
  'silly',
  'pause',
  'resume'
]

const log = level => (...args) => process.emit('log', level, ...args)

const logger = {}
for (const level of LEVELS) {
  logger[level] = log(level)
}

process.on('log', (level, ...args) => {console.log('LOG EVENT:', level, args)})

module.exports = logger

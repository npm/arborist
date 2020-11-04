const t = require('tap')
const requireInject = require('require-inject')

// start from clean slate
delete process.env.ARBORIST_DEBUG
delete process.env.NODE_DEBUG
delete process.env.npm_lifecycle_event
delete process.env.npm_package_name

t.test('debug does nothing by default', t => {
  const debug = requireInject('../lib/debug.js', {})
  debug(() => {
    throw new Error('this should not happen')
  })
  t.end()
})

t.test('debug runs when NODE_DEBUG contains "arborist"', t => {
  t.teardown(() => {
    delete process.env.NODE_DEBUG
  })
  process.env.NODE_DEBUG = 'fooo, bar, arborist, etc'
  const debug = requireInject('../lib/debug.js', {})
  t.plan(1)
  debug(() => {
    t.pass('called debug function')
  })
})

t.test('debug runs when ARBORIST_DEBUG=1', t => {
  t.teardown(() => {
    delete process.env.ARBORIST_DEBUG
  })
  process.env.ARBORIST_DEBUG = '1'
  const debug = requireInject('../lib/debug.js', {})
  t.plan(1)
  debug(() => {
    t.pass('called debug function')
  })
})

t.test('debug runs when testing arborist', t => {
  t.teardown(() => {
    delete process.env.npm_lifecycle_event
    delete process.env.npm_package_name
  })
  process.env.npm_lifecycle_event = 'test'
  process.env.npm_package_name = '@npmcli/arborist'
  const debug = requireInject('../lib/debug.js', {})
  t.plan(1)
  debug(() => {
    t.pass('called debug function')
  })
})

t.test('debug runs when generating snapshots', t => {
  t.teardown(() => {
    delete process.env.npm_lifecycle_event
    delete process.env.npm_package_name
  })
  process.env.npm_lifecycle_event = 'snap'
  process.env.npm_package_name = '@npmcli/arborist'
  const debug = requireInject('../lib/debug.js', {})
  t.plan(1)
  debug(() => {
    t.pass('called debug function')
  })
})

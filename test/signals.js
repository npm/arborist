const t = require('tap')
const requireInject = require('require-inject')

const runTest = platform => async t => {
  global.__ARBORIST_FAKE_PLATFORM__ = process.platform === platform ? null
  : platform
  t.matchSnapshot(requireInject('../lib/signals.js'))
}

t.test('signals on darwin', runTest('darwin'))
t.test('signals on linux', runTest('linux'))
t.test('signals on win32', runTest('win32'))

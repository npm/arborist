const t = require('tap')
const Vuln = require('../lib/vuln.js')
const Node = require('../lib/node.js')

t.test('basic vulnerability object tests', async t => {
  const v = new Vuln({ name: 'name', via: { some: 'advisory', severity: 'critical' } })
  t.isa(v, Vuln)
  t.match(v.via, new Set([{some: 'advisory', severity: 'critical'}]))
  t.equal(v.severity, 'critical')
  v.addVia({ another: 'advisory', severity: 'low' })
  t.equal(v.severity, 'critical')
  t.match(v.via, new Set([{some: 'advisory', severity: 'critical'}, {another: 'advisory', severity: 'low'}]))

  t.matchSnapshot(JSON.stringify(v, 0, 2), 'json formatted before packument')
  const v2 = new Vuln({ name: 'another', via: v })
  t.match(v.effects, new Set([v2]))
  t.match(v2.via, new Set([v]))
  t.equal(v.range, '')

  v.addRange('1.x < 1.3')
  v.addRange('2.x < 2.3.2 || 3.x <3.0.1')
  t.equal(v.range, '1.x < 1.3 || 2.x < 2.3.2 || 3.x <3.0.1')
  v.packument = {
    versions: {
      '0.0.1': {},
      '0.0.2': {},
      '0.0.3': {},
      '0.1.0': {},
      '1.0.0': {},
      '1.0.1': {},
      '1.1.0': {},
      '1.2.0': {},
      '1.2.1': {},
      '2.0.0': {},
      '2.0.1': {},
      '2.1.0': {},
      '2.2.0': {},
      '2.2.0-pre.0': {},
      '3.0.0-pre.0': {},
      '3.0.0-pre.1': {},
      '3.0.0': {},
      '3.0.1': {},
      '3.1.0': {},
      '3.2.0': {},
    }
  }
  // when the simple range is loaded, it memoizes and sets range as well
  t.equal(v.simpleRange, '1.0.0 - 3.0.0')
  t.equal(v.simpleRange, '1.0.0 - 3.0.0')
  t.equal(v.range, v.simpleRange)

  // when we add a range, it throws away any memoized calculations
  v.addRange('1.2.1')
  t.equal(v.hasRange('1.2.1'), true)
  t.equal(v.hasRange('1.2.3'), false)
  t.equal(v.range, '1.x < 1.3 || 2.x < 2.3.2 || 3.x <3.0.1 || 1.2.1')
  t.equal(v.simpleRange, '1.0.0 - 3.0.0')
  t.equal(v.range, v.simpleRange)

  const node = new Node({
    path: '/path/to/node_modules/thing',
    pkg: {
      name: 'name',
      version: '1.2.1',
    },
  })
  // check twice to hit memoizing code path
  t.equal(v.isVulnerable(node), true)
  t.equal(v.isVulnerable(node), true)
  t.match(v.nodes, new Set([node]))
  v2.fixAvailable = { isSemVerMajor: true }
  t.matchSnapshot(JSON.stringify(v, 0, 2), 'json formatted after loading')
  t.matchSnapshot(JSON.stringify(v2, 0, 2), 'json formatted metavuln')

  const ok = new Node({
    path: '/path/to/node_modules/thing',
    pkg: {
      name: 'name',
      version: '3.2.0',
    },
  })
  t.match(v.isVulnerable(ok), false)
})

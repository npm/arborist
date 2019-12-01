const Inventory = require('../lib/inventory.js')
const t = require('tap')

t.test('basic operations', t => {
  const i = new Inventory()
  t.equal(i.primaryKey, 'location')
  t.same(i.indexes, ['name', 'license'])

  i.add({ location: 'x', name: 'x', 'package': { license: 'MIT' }})
  i.add({ location: 'y', name: 'x', 'package': { license: 'ISC' }})
  i.add({ location: 'z', name: 'z', 'package': { license: 'MIT' }})
  t.same([...i.query('license', 'MIT')], [
    { location: 'x', name: 'x', 'package': { license: 'MIT' }},
    { location: 'z', name: 'z', 'package': { license: 'MIT' }},
  ], 'can query by license')
  t.same([...i.query('name', 'x')], [
    { location: 'x', name: 'x', 'package': { license: 'MIT' }},
    { location: 'y', name: 'x', 'package': { license: 'ISC' }},
  ], 'can query by name')

  t.same([...i.query('license')], [ 'MIT', 'ISC' ],
    'can get the list of license values')

  const x = i.get('x')
  t.same(x, { location: 'x', name: 'x', 'package': { license: 'MIT' }}, 'get by location')
  i.add(x)
  t.same(i.get('x'), x, 'adding a second time has no effect')
  t.equal(i.has(x), true, 'has a node')
  i.add({ location: 'x', name: 'a', 'package': { license: 'ABC' }})
  t.same(i.get('x'), { location: 'x', name: 'a', 'package': { license: 'ABC' }},
    'new node at same location overwrites')
  t.equal(i.has(x), false, 'node has been overwritten')

  t.throws(() => i.set('a', 'b'), {
    message: 'direct set() not supported, use inventory.add(node)',
  })
  const y = i.get('y')
  i.delete({ location: 'y' })
  t.equal(i.get('y'), y, 'deleting other node with same key has no effect')
  i.delete(y)
  t.equal(i.has(y), false, 'no longer has the y node')
  t.equal(i.get('y'), undefined, 'get returns undefined')

  t.end()
})

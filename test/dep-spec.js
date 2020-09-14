const t = require('tap')
const { orderDeps, updateDepSpec } = require('../lib/dep-spec.js')

t.test('updates existing record if found', t => {
  t.strictSame(updateDepSpec({
    dependencies: { foo: '' },
  }, 'foo', '1.2.3'), {
    dependencies: { foo: '1.2.3' },
  })

  t.strictSame(updateDepSpec({
    devDependencies: { foo: '' },
  }, 'foo', '1.2.3'), {
    devDependencies: { foo: '1.2.3' },
  })

  t.strictSame(updateDepSpec({
    optionalDependencies: { foo: '' },
  }, 'foo', '1.2.3'), {
    optionalDependencies: { foo: '1.2.3' },
  })

  t.strictSame(updateDepSpec({
    peerDependencies: { foo: '' },
  }, 'foo', '1.2.3'), {
    peerDependencies: { foo: '1.2.3' },
  })

  t.end()
})

t.test('adds to pkg.dependencies if not', t => {
  t.strictSame(updateDepSpec({}, 'foo', '1.2.3'), {
    dependencies: { foo: '1.2.3' },
  })

  t.end()
})

t.test('reorder deps properly', (t) => {
  t.strictSame(orderDeps({
    dependencies: { b: '1.0.0', a: '1.0.0', d: '1.0.0', c: '1.0.0' },
  }), {
    dependencies: { a: '1.0.0', b: '1.0.0', c: '1.0.0', d: '1.0.0' },
  }, 'should reorder deps by name')
  t.end()
})

t.test('reorder deps with no values', (t) => {
  t.strictSame(orderDeps({}), {})
  t.strictSame(orderDeps(), undefined)
  t.end()
})

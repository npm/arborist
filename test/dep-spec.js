const t = require('tap')
const { updateDeps, updateDepSpec } = require('../lib/dep-spec.js')

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
  t.strictSame(updateDeps({
    dependencies: { b: '1.0.0', a: '1.0.0', d: '1.0.0', c: '1.0.0' },
  }), {
    dependencies: { a: '1.0.0', b: '1.0.0', c: '1.0.0', d: '1.0.0' },
  }, 'should reorder deps by name')
  t.end()
})

t.test('reorder deps with no values', (t) => {
  t.strictSame(updateDeps({}), {})
  t.strictSame(updateDeps(), undefined)
  t.end()
})

t.test('items in both dependencies and optional deps lists', (t) => {
  t.strictSame(updateDeps({
    dependencies: {
      a: '1.0.0',
    },
    optionalDependencies: {
      a: '1.0.0',
    },
  }), {
    dependencies: {},
    optionalDependencies: {
      a: '1.0.0',
    },
  }, 'should removes item from deps if already listed in optional deps')
  t.end()
})

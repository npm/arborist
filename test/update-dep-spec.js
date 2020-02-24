const t = require('tap')
const updateDepSpec = require('../lib/update-dep-spec.js')

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

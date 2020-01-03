const t = require('tap')
addRm = require('../lib/add-rm-pkg-deps.js')

t.test('add', t => {
  const {add} = addRm
  t.strictSame(add({
    dependencies: { bar: '1' },
    devDependencies: { foo: '2' },
  }, {
    dependencies: { foo: '1', bar: '' },
  }), {
    dependencies: { foo: '1', bar: '1' },
  }, 'move foo to prod, leave bar as-is')
  t.strictSame(add({
    dependencies: { bar: '1' },
    devDependencies: { foo: '2' },
  }, {
    dependencies: { foo: '1', bar: '' },
    bundleDependencies: ['bar'],
  }), {
    dependencies: { foo: '1', bar: '1' },
    bundleDependencies: ['bar'],
  }, 'move bar to bundle deps, foo to deps, leave bar version unchanged')
  t.strictSame(add({}, {
    dependencies: { foo: '1', bar: '' },
    bundleDependencies: ['bar'],
  }), {
    dependencies: { foo: '1', bar: '' },
    bundleDependencies: ['bar'],
  }, 'add all new stuff')
  t.strictSame(add({
    peerDependencies: { foo: '1' },
    peerDependenciesMeta: { foo: { optional: true }},
  }, {
    optionalDependencies: { foo: '1' },
  }), {
    optionalDependencies: { foo: '1' },
  }, 'move from peerOptional to optional')
  t.strictSame(add({
    optionalDependencies: { foo: '1' },
  }, {
    peerDependencies: { foo: '1' },
    peerDependenciesMeta: { foo: { optional: true }},
  }), {
    peerDependencies: { foo: '1' },
    peerDependenciesMeta: { foo: { optional: true }},
  }, 'move from optional to peerOptional')

  t.end()
})

t.test('rm', t => {
  const {rm} = addRm
  t.strictSame(rm({
    dependencies: { bar: '1' },
    devDependencies: { foo: '2' },
  }, ['foo']), {
    dependencies: { bar: '1' },
  }, 'remove foo, leave bar as-is')
  t.strictSame(rm({
    dependencies: { bar: '1' },
    devDependencies: { foo: '2' },
    bundleDependencies: [ 'foo' ],
  }, ['foo']), {
    dependencies: { bar: '1' },
  }, 'remove foo from bundle deps too, leave bar as-is')
  t.strictSame(rm({
    dependencies: { bar: '1' },
    devDependencies: { foo: '2' },
    bundleDependencies: [ 'foo', 'bar' ],
  }, ['foo']), {
    dependencies: { bar: '1' },
    bundleDependencies: [ 'bar' ],
  }, 'remove foo from bundle deps too, leave bar as-is')

  t.end()
})

const t = require('tap')
addRm = require('../lib/add-rm-pkg-deps.js')

t.test('add', t => {
  const {add} = addRm
  const npa = require('npm-package-arg')
  const foo = npa('foo')
  const foo1 = npa('foo@1')
  const foo2 = npa('foo@2')
  const bar = npa('bar')
  const bar1 = npa('bar@1')
  const bar2 = npa('bar@2')

  t.strictSame(add({
    pkg: {
      dependencies: { bar: '1' },
      devDependencies: { foo: '2' },
    },
    add: [
      foo1,
      bar,
    ],
    saveType: 'prod',
  }), {
    dependencies: { foo: '1', bar: '1' },
  }, 'move foo to prod, leave bar as-is')

  t.strictSame(add({
    pkg: {
      dependencies: { bar: '1' },
      devDependencies: { foo: '2' },
    },
    add: [ foo1, bar ],
    saveBundle: true,
    saveType: 'prod',
  }), {
    dependencies: { foo: '1', bar: '1' },
    bundleDependencies: ['bar', 'foo'],
  }, 'move to bundle deps, foo to deps, leave bar version unchanged')

  t.strictSame(add({
    pkg: {},
    add: [ foo1, bar ],
    saveBundle: true,
  }), {
    dependencies: { foo: '1', bar: '*' },
    bundleDependencies: ['bar', 'foo'],
  }, 'add all new stuff')

  t.strictSame(add({
    pkg: {
      peerDependencies: { foo: '1' },
      peerDependenciesMeta: { foo: { optional: true }},
    },
    add: [ foo1 ],
    saveType: 'optional',
  }), {
    optionalDependencies: { foo: '1' },
  }, 'move from peerOptional to optional')

  t.strictSame(add({
    pkg: {
      optionalDependencies: { foo: '1' },
    },
    add: [ foo1 ],
    saveType: 'peerOptional',
  }), {
    peerDependencies: { foo: '1' },
    peerDependenciesMeta: { foo: { optional: true }},
  }, 'move from optional to peerOptional')

  t.strictSame(add({
    pkg: {
      peerDependencies: { foo: '1' },
      peerDependenciesMeta: { foo: { optional: true }},
    },
    add: [ foo1 ],
    saveType: 'peer',
  }), {
    peerDependencies: { foo: '1' },
    peerDependenciesMeta: { foo: { optional: false }},
  }, 'move from peerOptional to peer')

  t.strictSame(add({
    pkg: {
      peerDependencies: { foo: '1' },
      peerDependenciesMeta: { foo: { optional: true }},
    },
    add: [ foo2 ],
  }), {
    peerDependencies: { foo: '2' },
    peerDependenciesMeta: { foo: { optional: true }},
  }, 'update peerOptional')

  t.strictSame(add({
    pkg: {
      peerDependencies: { foo: '1' },
    },
    add: [ foo2 ],
  }), {
    peerDependencies: { foo: '2' },
  }, 'update peer')

  t.strictSame(add({
    pkg: {
      optionalDependencies: { foo: '1' },
    },
    add: [ foo2 ],
  }), {
    optionalDependencies: { foo: '2' },
  }, 'update optional')

  t.strictSame(add({
    pkg: {
      devDependencies: { foo: '1' },
    },
    add: [ foo2 ],
  }), {
    devDependencies: { foo: '2' },
  }, 'update dev')

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
    bundleDependencies: ['bar', 'foo'],
  }, ['foo']), {
    dependencies: { bar: '1' },
    bundleDependencies: [ 'bar' ],
  }, 'remove foo from bundle deps too, leave bar as-is')

  t.end()
})

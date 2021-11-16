const tap = require('tap')
const fs = require('fs')
const path = require('path')
const Arborist = require('../lib/arborist')

tap.test('most simple happy scenario', async t => {
  const package = { name: 'foo', dependencies: { 'which': '2.0.2' } }

  const cwd = t.testdir({
    'package.json': JSON.stringify(package)
  })

  const arborist = new Arborist({ path: cwd })
  await arborist.reify({ isolated: true })

  // Only direct dependencies are accessible by the node-module resolution algorithm
  t.throws(() => require.resolve('isexe', { paths: [ cwd ] }), 'repo should be able to require direct dependencies')
  t.doesNotThrow(() => require.resolve('which', { paths: [ cwd ] }), 'repo should not be able to require transitive dependencies')

  // Transitive dependencies are accessible from their parents
  const whichPath = path.dirname(require.resolve("which", { paths: [ cwd ] }))
  t.doesNotThrow(() => require.resolve('isexe', { paths: [ whichPath ] }), 'external dependencies should be able to require their own dependencies')

})

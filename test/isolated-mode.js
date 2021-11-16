const tap = require('tap')
const fs = require('fs')
const path = require('path')
const Arborist = require('../lib/arborist')

tap.test('most simple happy scenario', async t => {
  const package = { name: 'foo', dependencies: { 'which': '2.0.2' } }

  /*
    *
    * Dependency graph:
    * 
    * foo -> which -> isexe
    *
    */

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

  const isexePath = require.resolve('isexe', { paths: [ whichPath ] })
  t.throws(() => require.resolve('which', { paths: [ isexePath ] }), 'dependencies are not able to require their parents')
})

tap.test('simple peer dependencies scenarios', async t => {
  const package = { name: 'foo', dependencies: { 'ws': '7.5.2', 'bufferutil': '4.0.1' } }

  /*
    * Dependencies:
    *
    * foo -> ws
    *        ws -> bufferutil (peer dep)
    *              bufferutil -> node-gyp-build
    *        ws -> utf-8-validate (peer dep)
    *              utf8-validate -> node-gyp-build
    * foo -> bufferutil
    *        bufferutil -> node-gyp-build
    *
    */

  const cwd = t.testdir({
    'package.json': JSON.stringify(package)
  })

  const arborist = new Arborist({ path: cwd })
  await arborist.reify({ isolated: true })

  // Only direct dependencies are accessible by the node-module resolution algorithm
  t.doesNotThrow(() => require.resolve('ws', { paths: [ cwd ] }), 'repo should be able to require direct dependency to ws')
  t.doesNotThrow(() => require.resolve('bufferutil', { paths: [ cwd ] }), 'repo should be able to require direct dependency to bufferutil')
  t.throws(() => require.resolve('node-gyp-build', { paths: [ cwd ] }), 'repo should not be able to require transitive dependency to node-gyp-build')
  t.throws(() => require.resolve('utf-8-validate', { paths: [ cwd ] }), 'repo should not be able to require transitive dependency to utf-8-validate')

  // ws can only require its direct dependencies
  const wsPath = path.dirname(require.resolve('ws', { paths: [ cwd ] }))
  t.doesNotThrow(() => require.resolve('bufferutil', { paths: [ wsPath ] }), 'ws should be able to require its own peer dependency to bufferutil')
  t.doesNotThrow(() => require.resolve('utf-8-validate', { paths: [ wsPath ] }), 'ws should be able to require its own peer dependency to utf-8-validate')
  t.doesNotThrow(() => require.resolve('ws', { paths: [ wsPath ] }), 'ws should be able to require itself')
  t.throws(() => require.resolve('node-gyp-build', { paths: [ wsPath ] }), 'ws should not be able to require transitive dependency to node-gyp-build')

  // bufferutil can resolve its deps and dependencies of the root
  const bufferutilPath = path.dirname(require.resolve('bufferutil', { paths: [ wsPath ] }))
  t.doesNotThrow(() => require.resolve('node-gyp-build', { paths: [ bufferutilPath ] }), 'bufferutil should be able to require its own dependency to node-gyp-build')
  t.doesNotThrow(() => require.resolve('bufferutil', { paths: [ bufferutilPath ] }), 'bufferutil should be able to require itself')
  t.doesNotThrow(() => require.resolve('ws', { paths: [ bufferutilPath ] }), 'bufferutil should be able to require its parent because it is a root dependency')
  t.throws(() => require.resolve('utf-8-validate', { paths: [ bufferutilPath ] }), 'bufferutil should not be able to require its sibling')

  // utf-8-validate can resolve its deps and dependencies of the root
  const utf8validatePaty = path.dirname(require.resolve('utf-8-validate', { paths: [ wsPath ] }))
  t.doesNotThrow(() => require.resolve('node-gyp-build', { paths: [ utf8validatePaty ] }), 'utf-8-validate should be able to require its own dependency to node-gyp-build')
  t.doesNotThrow(() => require.resolve('utf-8-validate', { paths: [ utf8validatePaty ] }), 'utf-8-validate should be able to require itself')
  t.doesNotThrow(() => require.resolve('ws', { paths: [ utf8validatePaty ] }), 'utf-8-validate should be able to require ws because it is a root dependency')
  t.doesNotThrow(() => require.resolve('bufferutil', { paths: [ utf8validatePaty ] }), 'utf-8-validate should be able to require bufferutil because it is a root dependency')

  // foo and ws share the same instance of bufferutil (due to it being a peer dependency)
  t.same(require.resolve('bufferutil', { paths: [ cwd ] }), require.resolve('bufferutil', { paths: [ wsPath ] }), 'peer dependencies are correctly shared with the parents')
})


/*
  * TO TEST:
  * - chain of peer dependencies
  * - dependency graph with two different versions
  * - failed optional dependency
  * - workspaces
  * - shinkwrapped dependency
  * - bundled dependencies
  * - deduplication that happen in isolated mode but not in hoisted
  * - circular dependencies
  * - circular peer dependencies
  * - peer dependencies on the parent
  * - maybe some more convoluted cases copied from other existing tests
  * - case that result in a ERESOLVE error
  * - repos that are already partially installed (the case of `npm install --save-dev react`)
  * - the lock file is the same in hoisting and isolated mode
  * - the versions resolved in isolated mode are the same that would have been resolved in hoisting mode
  *
  */

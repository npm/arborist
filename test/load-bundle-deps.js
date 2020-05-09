const t = require('tap')
const loadBundle = require('../lib/load-bundle-deps.js')
const Node = require('../lib/node.js')
const Arborist = require('../lib/arborist/index.js')

const pkg = {
  name: 'root',
  dependencies: { xyz: '', ijk: '' },
  bundleDependencies: ['xyz'],
}

const fixture = {
  node_modules: {
    // simulating the presence of a sparse folder during reification
    empty: {},
    xyz: {
      'package.json': JSON.stringify({
        name: 'xyz',
        version: '1.2.3',
        bin: 'xyz.js',
        dependencies: {
          abc: '',
        },
      }),
      'xyz.js': '#!/usr/bin/env node\nconsole.log("xyz")',
    },
    abc: {
      'package.json': JSON.stringify({
        name: 'abc',
        version: '1.2.3',
        bin: 'abc.js',
      }),
      'abc.js': '#!/usr/bin/env node\nconsole.log("abc")',
    },
  },
  'package.json': JSON.stringify(pkg),
}

const { existsSync } = require('fs')

t.test('read bundling dep in its current position', async t => {
  const path = t.testdir(fixture)
  const node = new Node({ path, pkg })
  const arb = new Arborist({ path })
  await loadBundle(node, arb, {})
  t.strictSame([...node.children.keys()].sort((a, b) => a.localeCompare(b)), ['abc', 'xyz'])
  t.equal(existsSync(path + '/node_modules/.bin/xyz'), true, 'xyz bin exists')
  t.equal(existsSync(path + '/node_modules/.bin/abc'), true, 'abc bin exists')
})

t.test('read bundling dep in current position, binLinks false', async t => {
  const path = t.testdir(fixture)
  const node = new Node({ path, pkg })
  const arb = new Arborist({ path })
  await loadBundle(node, arb, { binLinks: false })
  t.strictSame([...node.children.keys()].sort((a, b) => a.localeCompare(b)), ['abc', 'xyz'])
  t.equal(existsSync(path + '/node_modules/.bin/xyz'), false, 'xyz bin not present')
  t.equal(existsSync(path + '/node_modules/.bin/abc'), false, 'abc bin not present')
})

t.test('read bundling dep in temp folder', async t => {
  const path = t.testdir(fixture)
  const node = new Node({ path: '/some/other/path', pkg })
  const arb = new Arborist({ path })
  // doesn't load binLinks unless it's a build-in-place
  await loadBundle(node, arb, { binLinks: true, path })
  t.strictSame([...node.children.keys()].sort((a, b) => a.localeCompare(b)), ['abc', 'xyz'])
  t.equal(existsSync(path + '/node_modules/.bin/xyz'), false, 'xyz bin not present')
  t.equal(existsSync(path + '/node_modules/.bin/abc'), false, 'abc bin not present')
})

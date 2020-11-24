const {resolve} = require('path')

const t = require('tap')

const savePackageJson = require('../lib/save-package-json.js')

t.test('missing package.json', async t => {
  const path = t.testdir({})
  await savePackageJson({
    tree: {
      path: path,
      package: {
        name: 'missing-package-json-test',
        version: '1.0.0',
        dependencies: {
          abbrev: '^1.0.0',
        },
      },
    },
  })
  t.match(
    require(resolve(path, 'package.json')),
    {
      name: 'missing-package-json-test',
      version: '1.0.0',
      dependencies: {
        abbrev: '^1.0.0',
      },
    },
    'should write new package.json with tree data'
  )
})

t.test('existing package.json', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      name: 'existing-package-json-test',
      version: '1.0.0',
      bin: './file.js',
      funding: 'http://example.com',
      dependencies: {
        abbrev: '^1.0.0',
      },
    }),
  })
  await savePackageJson({
    tree: {
      path: path,
      package: {
        name: 'missing-package-json-test',
        version: '1.0.0',
        dependencies: {},
      },
    },
  })
  t.match(
    require(resolve(path, 'package.json')),
    {
      name: 'existing-package-json-test',
      version: '1.0.0',
      bin: './file.js',
      funding: 'http://example.com',
      dependencies: {},
    },
    'should write new package.json with tree data'
  )
})

t.test('custom formatting', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      name: 'custom-formatting-test',
      version: '1.0.0',
    }),
  })
  await savePackageJson({
    tree: {
      path: path,
      package: {
        name: 'custom-formatting-test',
        version: '1.0.0',
        [Symbol.for('indent')]: 4,
        [Symbol.for('newline')]: '',
      },
    },
  })
  t.match(
    require(resolve(path, 'package.json')),
    {
      name: 'custom-formatting-test',
      version: '1.0.0',
    },
    'should write new package.json with tree data'
  )
})

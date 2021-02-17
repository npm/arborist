const {resolve} = require('path')
const {statSync} = require('fs')

const t = require('tap')

const updateRootPackageJson = require('../lib/update-root-package-json.js')

t.test('missing package.json', async t => {
  const path = t.testdir({})
  await updateRootPackageJson({
    path: path,
    package: {
      name: 'missing-package-json-test',
      version: '1.0.0',
      dependencies: {
        abbrev: '^1.0.0',
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

t.test('invalid package.json', async t => {
  const path = t.testdir({
    'package.json': 'this! is! not! json!',
  })
  await updateRootPackageJson({
    path: path,
    package: {
      name: 'invalid-package-json-test',
      version: '1.0.0',
      dependencies: {
        abbrev: '^1.0.0',
      },
    },
  })
  t.match(
    require(resolve(path, 'package.json')),
    {
      name: 'invalid-package-json-test',
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
  await updateRootPackageJson({
    path: path,
    package: {
      name: 'missing-package-json-test',
      version: '1.0.0',
      dependencies: {},
    },
  })
  t.match(
    require(resolve(path, 'package.json')),
    {
      name: 'existing-package-json-test',
      version: '1.0.0',
      bin: './file.js',
      funding: 'http://example.com',
      dependencies: undefined,
    },
    'should write new package.json with tree data'
  )
})

t.test('unchanged package.json', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      name: 'existing-package-json-test',
      version: '1.0.0',
      bin: './file.js',
      funding: 'http://example.com',
      dependencies: {
        abbrev: '^1.0.0',
      },
    }, null, 2) + '\n',
  })
  const { mtime } = statSync(path + '/package.json')
  await updateRootPackageJson({
    path: path,
    package: {
      name: 'existing-package-json-test',
      version: '1.0.0',
      bin: './file.js',
      funding: 'http://example.com',
      dependencies: {
        abbrev: '^1.0.0',
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
      dependencies: {
        abbrev: '^1.0.0',
      },
    },
    'should write new package.json with tree data'
  )
  const { mtime: newMtime } = statSync(path + '/package.json')
  t.equal(newMtime.toISOString(), mtime.toISOString(), 'mtime not changed')
})

t.test('existing package.json with optionalDependencies', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      name: 'existing-package-json-optional-test',
      version: '1.0.0',
      bin: './file.js',
      funding: 'http://example.com',
      dependencies: {},
    }),
  })
  await updateRootPackageJson({
    path: path,
    package: {
      name: 'missing-package-json-optional-test',
      version: '1.0.0',
      dependencies: {
        abbrev: '^1.0.0',
      },
      optionalDependencies: {
        abbrev: '^1.0.0',
      },
    },
  })
  t.match(
    require(resolve(path, 'package.json')),
    {
      name: 'existing-package-json-optional-test',
      version: '1.0.0',
      bin: './file.js',
      funding: 'http://example.com',
      dependencies: undefined,
      optionalDependencies: {
        abbrev: '^1.0.0',
      },
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
  await updateRootPackageJson({
    path: path,
    package: {
      name: 'custom-formatting-test',
      version: '1.0.0',
      [Symbol.for('indent')]: 4,
      [Symbol.for('newline')]: '',
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

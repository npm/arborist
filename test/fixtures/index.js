const mkdirp = require('mkdirp').sync
const { unlinkSync, symlinkSync } = require('fs')
const { resolve, dirname } = require('path')

const fixtures = __dirname

const roots = [
  'bundle',
  'deepmixedloop',
  'deeproot/root',
  'devloop',
  'linkedroot',
  'links-all-over',
  'mixedloop',
  'mixedmidway',
  'noname',
  'optionalloop',
  'optofdev',
  'other',
  'root',
  'selflink',
  'symlinked-node-modules/example',
  'workspace',
  'install-types',
]

const symlinks = {
  'selflink/node_modules/@scope/z/node_modules/glob':
    '../../../foo/node_modules/glob',
  'selflink/node_modules/foo/node_modules/selflink':
    '../../..',
  'other/node_modules/glob':
    '../../root/node_modules/@scope/x/node_modules/glob',
  'linkedroot': 'root',
  'deep/root': '../root',
  'deeproot': 'deep',
  'badlink/node_modules/foo': 'foo',
  'badlink/node_modules/bar': 'baz',

  'workspace/node_modules/a': '../packages/a',
  'workspace/node_modules/b': '../packages/b',
  'workspace/node_modules/c': '../packages/c',
  'workspace/packages/a/node_modules/b': '../../../packages/b',
  'workspace/packages/a/node_modules/c': '../../../packages/c',
  'workspace/packages/b/node_modules/a': '../../../packages/a',
  'workspace/packages/b/node_modules/c': '../../../packages/c',
  'workspace/packages/c/node_modules/a': '../../../packages/a',
  'workspace/packages/c/node_modules/b': '../../../packages/b',

  'links-all-over/node_modules/link-outside-nest':
    '../real',
  'links-all-over/node_modules/link-deep':
    'nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep',
  'links-all-over/node_modules/link-link': 'link-deep',
  'links-all-over/node_modules/nest/node_modules/link-in-nest':
    '../../../real',

  'symlinked-node-modules/example/node_modules':
    '../linked-node-modules/',
  'symlinked-node-modules/linked-node-modules/bar': '../bar',

  'install-types/node_modules/symlink': '../abbrev-link-target',
}

const cleanup = () => Object.keys(symlinks).forEach(s => {
  try {
    unlinkSync(resolve(__dirname, s))
  } catch (er) {}
})

if (process.env.NO_CLEANUP !== '1')
  require('tap').teardown(cleanup)

const setup = () => {
  cleanup()
  Object.keys(symlinks).forEach(s => {
    const p = resolve(__dirname, s)
    mkdirp(dirname(p))
    symlinkSync(symlinks[s], p, 'dir')
  })
}

setup()

module.exports = {
  roots,
  symlinks,
  cleanup,
  fixtures,
}

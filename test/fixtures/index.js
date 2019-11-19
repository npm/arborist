const mkdirp = require('mkdirp').sync
const { unlinkSync, symlinkSync } = require('fs')
const { relative, resolve, dirname } = require('path')

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
  'workspace2',
  'workspace3',
  'install-types',
  'pnpm',
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

  'workspace2/node_modules/c/node_modules/d': '../../b/node_modules/d',
  'workspace2/node_modules/c/node_modules/x': '../../../x',

  'workspace3/node_modules/app': '../app',
  'workspace3/node_modules/a': '../packages/a',
  'workspace3/node_modules/b': '../packages/b',
  'workspace3/node_modules/c': '../packages/c',

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

  'pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/a':
    '../../../../a/1.0.0/node_modules/a',
  'pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/b':
    '../../../../b/1.0.0/node_modules/b',
  'pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/c':
    '../../../../c/1.0.0/node_modules/c',
  'pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/b':
    '../../../b/1.0.0/node_modules/b',
  'pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/c':
    '../../../c/1.0.0/node_modules/c',
  'pnpm/node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/c':
    '../../../c/1.0.0/node_modules/c',
  'pnpm/node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/@scope/x':
    '../../../../@scope/x/1.0.0/node_modules/@scope/x',
  'pnpm/node_modules/@scope/x':
    '../.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x',
  'pnpm/node_modules/a': '.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a',
}

const cleanup = () => Object.keys(symlinks).forEach(s => {
  try {
    unlinkSync(resolve(__dirname, s))
  } catch (er) {}
})

const setup = () => {
  Object.keys(symlinks).forEach(s => {
    const p = resolve(__dirname, s)
    mkdirp(dirname(p))
    // console.log(relative(process.cwd(), p))

    // it's fine for this to throw, since it typically means
    // that the links already exist.
    try { symlinkSync(symlinks[s], p, 'dir') } catch (_) {}
  })
}

if (process.argv[2] === 'cleanup' && require.main === module)
  cleanup()
else
  setup()

module.exports = {
  roots,
  symlinks,
  fixtures,
}

// generated from test/fixtures/dep-installed-without-bin-link
module.exports = t => ({
  "node_modules": {
    ".package-lock.json": JSON.stringify({
      "name": "@isaacs/dep-installed-without-bin-link",
      "version": "1.0.0",
      "lockfileVersion": 2,
      "requires": true,
      "packages": {
        "": {
          "name": "@isaacs/dep-installed-without-bin-link",
          "version": "1.0.0",
          "dependencies": {
            "mkdirp": "^1.0.4",
            "semver": "^7.3.2"
          }
        },
        "node_modules/mkdirp": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
          "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
          "bin": {
            "mkdirp": "bin/cmd.js"
          },
          "engines": {
            "node": ">=10"
          }
        },
        "node_modules/semver": {
          "version": "7.3.2",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
          "integrity": "sha512-OrOb32TeeambH6UrhtShmF7CRDqhL6/5XpPNp2DuRH6+9QLw/orhp72j87v8Qa1ScDkvrrBNpZcDejAirJmfXQ==",
          "bin": {
            "semver": "bin/semver.js"
          },
          "engines": {
            "node": ">=10"
          }
        }
      }
    }),
    "mkdirp": {
      "bin": {
        "cmd.js": "#!/usr/bin/env node\n\nconst usage = () => `\nusage: mkdirp [DIR1,DIR2..] {OPTIONS}\n\n  Create each supplied directory including any necessary parent directories\n  that don't yet exist.\n\n  If the directory already exists, do nothing.\n\nOPTIONS are:\n\n  -m<mode>       If a directory needs to be created, set the mode as an octal\n  --mode=<mode>  permission string.\n\n  -v --version   Print the mkdirp version number\n\n  -h --help      Print this helpful banner\n\n  -p --print     Print the first directories created for each path provided\n\n  --manual       Use manual implementation, even if native is available\n`\n\nconst dirs = []\nconst opts = {}\nlet print = false\nlet dashdash = false\nlet manual = false\nfor (const arg of process.argv.slice(2)) {\n  if (dashdash)\n    dirs.push(arg)\n  else if (arg === '--')\n    dashdash = true\n  else if (arg === '--manual')\n    manual = true\n  else if (/^-h/.test(arg) || /^--help/.test(arg)) {\n    console.log(usage())\n    process.exit(0)\n  } else if (arg === '-v' || arg === '--version') {\n    console.log(require('../package.json').version)\n    process.exit(0)\n  } else if (arg === '-p' || arg === '--print') {\n    print = true\n  } else if (/^-m/.test(arg) || /^--mode=/.test(arg)) {\n    const mode = parseInt(arg.replace(/^(-m|--mode=)/, ''), 8)\n    if (isNaN(mode)) {\n      console.error(`invalid mode argument: ${arg}\\nMust be an octal number.`)\n      process.exit(1)\n    }\n    opts.mode = mode\n  } else\n    dirs.push(arg)\n}\n\nconst mkdirp = require('../')\nconst impl = manual ? mkdirp.manual : mkdirp\nif (dirs.length === 0)\n  console.error(usage())\n\nPromise.all(dirs.map(dir => impl(dir, opts)))\n  .then(made => print ? made.forEach(m => m && console.log(m)) : null)\n  .catch(er => {\n    console.error(er.message)\n    if (er.code)\n      console.error('  code: ' + er.code)\n    process.exit(1)\n  })\n"
      },
      "index.js": "const optsArg = require('./lib/opts-arg.js')\nconst pathArg = require('./lib/path-arg.js')\n\nconst {mkdirpNative, mkdirpNativeSync} = require('./lib/mkdirp-native.js')\nconst {mkdirpManual, mkdirpManualSync} = require('./lib/mkdirp-manual.js')\nconst {useNative, useNativeSync} = require('./lib/use-native.js')\n\n\nconst mkdirp = (path, opts) => {\n  path = pathArg(path)\n  opts = optsArg(opts)\n  return useNative(opts)\n    ? mkdirpNative(path, opts)\n    : mkdirpManual(path, opts)\n}\n\nconst mkdirpSync = (path, opts) => {\n  path = pathArg(path)\n  opts = optsArg(opts)\n  return useNativeSync(opts)\n    ? mkdirpNativeSync(path, opts)\n    : mkdirpManualSync(path, opts)\n}\n\nmkdirp.sync = mkdirpSync\nmkdirp.native = (path, opts) => mkdirpNative(pathArg(path), optsArg(opts))\nmkdirp.manual = (path, opts) => mkdirpManual(pathArg(path), optsArg(opts))\nmkdirp.nativeSync = (path, opts) => mkdirpNativeSync(pathArg(path), optsArg(opts))\nmkdirp.manualSync = (path, opts) => mkdirpManualSync(pathArg(path), optsArg(opts))\n\nmodule.exports = mkdirp\n",
      "package.json": JSON.stringify({
        "name": "mkdirp",
        "description": "Recursively mkdir, like `mkdir -p`",
        "version": "1.0.4",
        "main": "index.js",
        "keywords": [
          "mkdir",
          "directory",
          "make dir",
          "make",
          "dir",
          "recursive",
          "native"
        ],
        "repository": {
          "type": "git",
          "url": "https://github.com/isaacs/node-mkdirp.git"
        },
        "scripts": {
          "test": "tap",
          "snap": "tap",
          "preversion": "npm test",
          "postversion": "npm publish",
          "postpublish": "git push origin --follow-tags"
        },
        "tap": {
          "check-coverage": true,
          "coverage-map": "map.js"
        },
        "devDependencies": {
          "require-inject": "^1.4.4",
          "tap": "^14.10.7"
        },
        "bin": "bin/cmd.js",
        "license": "MIT",
        "engines": {
          "node": ">=10"
        },
        "files": [
          "bin",
          "lib",
          "index.js"
        ]
      })
    },
    "semver": {
      "bin": {
        "semver.js": "#!/usr/bin/env node\n// Standalone semver comparison program.\n// Exits successfully and prints matching version(s) if\n// any supplied version is valid and passes all tests.\n\nconst argv = process.argv.slice(2)\n\nlet versions = []\n\nconst range = []\n\nlet inc = null\n\nconst version = require('../package.json').version\n\nlet loose = false\n\nlet includePrerelease = false\n\nlet coerce = false\n\nlet rtl = false\n\nlet identifier\n\nconst semver = require('../')\n\nlet reverse = false\n\nconst options = {}\n\nconst main = () => {\n  if (!argv.length) return help()\n  while (argv.length) {\n    let a = argv.shift()\n    const indexOfEqualSign = a.indexOf('=')\n    if (indexOfEqualSign !== -1) {\n      a = a.slice(0, indexOfEqualSign)\n      argv.unshift(a.slice(indexOfEqualSign + 1))\n    }\n    switch (a) {\n      case '-rv': case '-rev': case '--rev': case '--reverse':\n        reverse = true\n        break\n      case '-l': case '--loose':\n        loose = true\n        break\n      case '-p': case '--include-prerelease':\n        includePrerelease = true\n        break\n      case '-v': case '--version':\n        versions.push(argv.shift())\n        break\n      case '-i': case '--inc': case '--increment':\n        switch (argv[0]) {\n          case 'major': case 'minor': case 'patch': case 'prerelease':\n          case 'premajor': case 'preminor': case 'prepatch':\n            inc = argv.shift()\n            break\n          default:\n            inc = 'patch'\n            break\n        }\n        break\n      case '--preid':\n        identifier = argv.shift()\n        break\n      case '-r': case '--range':\n        range.push(argv.shift())\n        break\n      case '-c': case '--coerce':\n        coerce = true\n        break\n      case '--rtl':\n        rtl = true\n        break\n      case '--ltr':\n        rtl = false\n        break\n      case '-h': case '--help': case '-?':\n        return help()\n      default:\n        versions.push(a)\n        break\n    }\n  }\n\n  const options = { loose: loose, includePrerelease: includePrerelease, rtl: rtl }\n\n  versions = versions.map((v) => {\n    return coerce ? (semver.coerce(v, options) || { version: v }).version : v\n  }).filter((v) => {\n    return semver.valid(v)\n  })\n  if (!versions.length) return fail()\n  if (inc && (versions.length !== 1 || range.length)) { return failInc() }\n\n  for (let i = 0, l = range.length; i < l; i++) {\n    versions = versions.filter((v) => {\n      return semver.satisfies(v, range[i], options)\n    })\n    if (!versions.length) return fail()\n  }\n  return success(versions)\n}\n\n\nconst failInc = () => {\n  console.error('--inc can only be used on a single version with no range')\n  fail()\n}\n\nconst fail = () => process.exit(1)\n\nconst success = () => {\n  const compare = reverse ? 'rcompare' : 'compare'\n  versions.sort((a, b) => {\n    return semver[compare](a, b, options)\n  }).map((v) => {\n    return semver.clean(v, options)\n  }).map((v) => {\n    return inc ? semver.inc(v, inc, options, identifier) : v\n  }).forEach((v, i, _) => { console.log(v) })\n}\n\nconst help = () => console.log(\n`SemVer ${version}\n\nA JavaScript implementation of the https://semver.org/ specification\nCopyright Isaac Z. Schlueter\n\nUsage: semver [options] <version> [<version> [...]]\nPrints valid versions sorted by SemVer precedence\n\nOptions:\n-r --range <range>\n        Print versions that match the specified range.\n\n-i --increment [<level>]\n        Increment a version by the specified level.  Level can\n        be one of: major, minor, patch, premajor, preminor,\n        prepatch, or prerelease.  Default level is 'patch'.\n        Only one version may be specified.\n\n--preid <identifier>\n        Identifier to be used to prefix premajor, preminor,\n        prepatch or prerelease version increments.\n\n-l --loose\n        Interpret versions and ranges loosely\n\n-p --include-prerelease\n        Always include prerelease versions in range matching\n\n-c --coerce\n        Coerce a string into SemVer if possible\n        (does not imply --loose)\n\n--rtl\n        Coerce version strings right to left\n\n--ltr\n        Coerce version strings left to right (default)\n\nProgram exits successfully if any valid version satisfies\nall supplied ranges, and prints all satisfying versions.\n\nIf no satisfying versions are found, then exits failure.\n\nVersions are printed in ascending order, so supplying\nmultiple versions to the utility will just sort them.`)\n\nmain()\n"
      },
      "index.js": "// just pre-load all the stuff that index.js lazily exports\nconst internalRe = require('./internal/re')\nmodule.exports = {\n  re: internalRe.re,\n  src: internalRe.src,\n  tokens: internalRe.t,\n  SEMVER_SPEC_VERSION: require('./internal/constants').SEMVER_SPEC_VERSION,\n  SemVer: require('./classes/semver'),\n  compareIdentifiers: require('./internal/identifiers').compareIdentifiers,\n  rcompareIdentifiers: require('./internal/identifiers').rcompareIdentifiers,\n  parse: require('./functions/parse'),\n  valid: require('./functions/valid'),\n  clean: require('./functions/clean'),\n  inc: require('./functions/inc'),\n  diff: require('./functions/diff'),\n  major: require('./functions/major'),\n  minor: require('./functions/minor'),\n  patch: require('./functions/patch'),\n  prerelease: require('./functions/prerelease'),\n  compare: require('./functions/compare'),\n  rcompare: require('./functions/rcompare'),\n  compareLoose: require('./functions/compare-loose'),\n  compareBuild: require('./functions/compare-build'),\n  sort: require('./functions/sort'),\n  rsort: require('./functions/rsort'),\n  gt: require('./functions/gt'),\n  lt: require('./functions/lt'),\n  eq: require('./functions/eq'),\n  neq: require('./functions/neq'),\n  gte: require('./functions/gte'),\n  lte: require('./functions/lte'),\n  cmp: require('./functions/cmp'),\n  coerce: require('./functions/coerce'),\n  Comparator: require('./classes/comparator'),\n  Range: require('./classes/range'),\n  satisfies: require('./functions/satisfies'),\n  toComparators: require('./ranges/to-comparators'),\n  maxSatisfying: require('./ranges/max-satisfying'),\n  minSatisfying: require('./ranges/min-satisfying'),\n  minVersion: require('./ranges/min-version'),\n  validRange: require('./ranges/valid'),\n  outside: require('./ranges/outside'),\n  gtr: require('./ranges/gtr'),\n  ltr: require('./ranges/ltr'),\n  intersects: require('./ranges/intersects'),\n  simplifyRange: require('./ranges/simplify'),\n  subset: require('./ranges/subset'),\n}\n",
      "package.json": JSON.stringify({
        "name": "semver",
        "version": "7.3.2",
        "description": "The semantic version parser used by npm.",
        "main": "index.js",
        "scripts": {
          "test": "tap",
          "snap": "tap",
          "preversion": "npm test",
          "postversion": "npm publish",
          "postpublish": "git push origin --follow-tags"
        },
        "devDependencies": {
          "tap": "^14.10.7"
        },
        "license": "ISC",
        "repository": "https://github.com/npm/node-semver",
        "bin": {
          "semver": "./bin/semver.js"
        },
        "files": [
          "bin/**/*.js",
          "range.bnf",
          "classes/**/*.js",
          "functions/**/*.js",
          "internal/**/*.js",
          "ranges/**/*.js",
          "index.js",
          "preload.js"
        ],
        "tap": {
          "check-coverage": true,
          "coverage-map": "map.js"
        },
        "engines": {
          "node": ">=10"
        }
      })
    }
  },
  "package-lock.json": JSON.stringify({
    "name": "@isaacs/dep-installed-without-bin-link",
    "version": "1.0.0",
    "lockfileVersion": 2,
    "requires": true,
    "packages": {
      "": {
        "name": "@isaacs/dep-installed-without-bin-link",
        "version": "1.0.0",
        "dependencies": {
          "mkdirp": "^1.0.4",
          "semver": "^7.3.2"
        }
      },
      "node_modules/mkdirp": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
        "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
        "bin": {
          "mkdirp": "bin/cmd.js"
        },
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/semver": {
        "version": "7.3.2",
        "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
        "integrity": "sha512-OrOb32TeeambH6UrhtShmF7CRDqhL6/5XpPNp2DuRH6+9QLw/orhp72j87v8Qa1ScDkvrrBNpZcDejAirJmfXQ==",
        "bin": {
          "semver": "bin/semver.js"
        },
        "engines": {
          "node": ">=10"
        }
      }
    },
    "dependencies": {
      "mkdirp": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
        "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw=="
      },
      "semver": {
        "version": "7.3.2",
        "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
        "integrity": "sha512-OrOb32TeeambH6UrhtShmF7CRDqhL6/5XpPNp2DuRH6+9QLw/orhp72j87v8Qa1ScDkvrrBNpZcDejAirJmfXQ=="
      }
    }
  }),
  "package.json": JSON.stringify({
    "name": "@isaacs/dep-installed-without-bin-link",
    "version": "1.0.0",
    "description": "has some deps without bins linked, for rebuilding",
    "dependencies": {
      "semver": "^7.3.2",
      "mkdirp": "^1.0.4"
    }
  })
})

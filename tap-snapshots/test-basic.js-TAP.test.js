/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/basic.js TAP linkedroot > physical 1`] = `
root@1.2.3 test/fixtures/linkedroot
├─┬ @scope/x@1.2.3 test/fixtures/linkedroot/node_modules/@scope/x
│ └─┬ glob@4.0.5 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob
│   ├── graceful-fs@3.0.2 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs
│   ├── inherits@2.0.1 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/inherits
│   ├─┬ minimatch@1.0.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/minimatch
│   │ ├── lru-cache@2.5.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache
│   │ └── sigmund@1.0.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund
│   └── once@1.3.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/once
├── @scope/y@1.2.3 test/fixtures/linkedroot/node_modules/@scope/y
└─┬ foo@1.2.3 test/fixtures/linkedroot/node_modules/foo (invalid for test/fixtures/linkedroot/node_modules/@scope/y)
  └── abbrev@1.1.1 test/fixtures/linkedroot/node_modules/foo/node_modules/express
`

exports[`test/basic.js TAP noname > logical 1`] = `
test/fixtures/noname
`

exports[`test/basic.js TAP noname > physical 1`] = `
test/fixtures/noname
└── test/fixtures/noname/node_modules/foo
`

exports[`test/basic.js TAP other > logical 1`] = `
test/fixtures/other
`

exports[`test/basic.js TAP other > physical 1`] = `
test/fixtures/other
└── glob@4.0.5 test/fixtures/other/node_modules/glob (symlink)
`

exports[`test/basic.js TAP root > physical 1`] = `
root@1.2.3 test/fixtures/root
├─┬ @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x
│ └─┬ glob@4.0.5 test/fixtures/root/node_modules/@scope/x/node_modules/glob
│   ├── graceful-fs@3.0.2 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs
│   ├── inherits@2.0.1 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/inherits
│   ├─┬ minimatch@1.0.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch
│   │ ├── lru-cache@2.5.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache
│   │ └── sigmund@1.0.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund
│   └── once@1.3.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/once
├── @scope/y@1.2.3 test/fixtures/root/node_modules/@scope/y
└─┬ foo@1.2.3 test/fixtures/root/node_modules/foo (invalid for test/fixtures/root/node_modules/@scope/y)
  └── abbrev@1.1.1 test/fixtures/root/node_modules/foo/node_modules/express
`

exports[`test/basic.js TAP selflink > logical 1`] = `
selflink@1.2.3 test/fixtures/selflink
├─┬ foo@1.2.3 test/fixtures/selflink/node_modules/foo
│ ├── selflink@1.2.3 test/fixtures/selflink (symlink)
│ └── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob
└─┬ @scope/y@1.2.3 test/fixtures/selflink/node_modules/@scope/y
  └─┬ foo@1.2.3 test/fixtures/selflink/node_modules/foo (deduped)
    ├── selflink@1.2.3 test/fixtures/selflink (symlink)
    └── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob
`

exports[`test/basic.js TAP selflink > physical 1`] = `
selflink@1.2.3 test/fixtures/selflink
├── @scope/y@1.2.3 test/fixtures/selflink/node_modules/@scope/y
├─┬ @scope/z@1.2.3 test/fixtures/selflink/node_modules/@scope/z
│ └── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob (symlink)
└─┬ foo@1.2.3 test/fixtures/selflink/node_modules/foo
  ├── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob
  └── selflink@1.2.3 test/fixtures/selflink (symlink)
`

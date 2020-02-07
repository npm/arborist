/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/link.js TAP > instantiate with target specified 1`] = `
&ref_1 Link {
  "dev": true,
  "devOptional": true,
  "edgesIn": Set {},
  "edgesOut": Map {},
  "errors": Array [],
  "extraneous": true,
  "fsChildren": Set {},
  "hasShrinkwrap": false,
  "integrity": null,
  "inventory": Inventory {
    "" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {},
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "fsChildren": Set {},
      "hasShrinkwrap": false,
      "integrity": null,
      "inventory": Inventory {},
      "linksIn": Set {
        <*ref_1>,
      },
      "location": "",
      "meta": Shrinkwrap {
        "data": Object {
          "dependencies": Object {},
          "lockfileVersion": 2,
          "packages": Object {},
        },
        "filename": null,
        "hiddenLockfile": false,
        "indent": 2,
        "loadedFromDisk": false,
        "path": "/home/user/projects/some/kind/of/path",
        "shrinkwrapOnly": false,
        "type": null,
        "yarnLock": null,
      },
      "name": "path",
      "optional": true,
      "path": "/home/user/projects/some/kind/of/path",
      "peer": true,
      "realpath": "/home/user/projects/some/kind/of/path",
      "resolved": null,
    },
  },
  "linksIn": Set {},
  "location": "",
  "meta": undefined,
  "name": "path",
  "optional": true,
  "path": "/home/user/some/other/path",
  "peer": true,
  "realpath": "/home/user/projects/some/kind/of/path",
}
`

exports[`test/link.js TAP > instantiate without providing target 1`] = `
&ref_1 Link {
  "dev": true,
  "devOptional": true,
  "edgesIn": Set {},
  "edgesOut": Map {},
  "errors": Array [],
  "extraneous": true,
  "fsChildren": Set {},
  "hasShrinkwrap": false,
  "integrity": null,
  "inventory": Inventory {
    "" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {},
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "fsChildren": Set {},
      "hasShrinkwrap": false,
      "integrity": null,
      "inventory": Inventory {},
      "linksIn": Set {
        <*ref_1>,
      },
      "location": "",
      "meta": Shrinkwrap {
        "data": Object {
          "dependencies": Object {},
          "lockfileVersion": 2,
          "packages": Object {
            "": Object {
              "name": undefined,
            },
          },
        },
        "filename": null,
        "hiddenLockfile": false,
        "indent": 2,
        "loadedFromDisk": false,
        "path": "/home/user/projects/some/kind/of/path",
        "shrinkwrapOnly": false,
        "type": null,
        "yarnLock": null,
      },
      "name": "path",
      "optional": true,
      "path": "/home/user/projects/some/kind/of/path",
      "peer": true,
      "realpath": "/home/user/projects/some/kind/of/path",
      "resolved": null,
    },
  },
  "linksIn": Set {},
  "location": "",
  "meta": Shrinkwrap {
    "data": Object {
      "dependencies": Object {},
      "lockfileVersion": 2,
      "packages": Object {
        "": Object {
          "name": undefined,
        },
      },
    },
    "filename": null,
    "hiddenLockfile": false,
    "indent": 2,
    "loadedFromDisk": false,
    "path": "/home/user/projects/some/kind/of/path",
    "shrinkwrapOnly": false,
    "type": null,
    "yarnLock": null,
  },
  "name": "path",
  "optional": true,
  "path": "/home/user/some/other/path",
  "peer": true,
  "realpath": "/home/user/projects/some/kind/of/path",
}
`

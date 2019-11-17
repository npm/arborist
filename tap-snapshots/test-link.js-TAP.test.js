/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/link.js TAP > instantiate with target specified 1`] = `
Link {
  "dev": true,
  "devOptional": true,
  "edgesIn": Set {},
  "edgesOut": Map {},
  "errors": Array [],
  "extraneous": true,
  "integrity": undefined,
  "inventory": Inventory {
    "" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {},
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "integrity": undefined,
      "inventory": Inventory {},
      "location": "",
      "meta": Shrinkwrap {
        "data": Object {
          "dependencies": Object {},
          "lockfileVersion": 2,
          "packages": Object {},
        },
        "filename": null,
        "indent": 2,
        "loadedFromDisk": false,
        "root": "/home/user/projects/some/kind/of/path",
        "type": null,
      },
      "name": "path",
      "optional": true,
      "package": Object {
        "name": "root",
      },
      "path": "some/kind/of/path",
      "realpath": "/home/user/projects/some/kind/of/path",
      "resolved": undefined,
    },
  },
  "location": "",
  "meta": undefined,
  "name": "path",
  "optional": true,
  "package": Object {
    "name": "root",
  },
  "path": "some/kind/of/path",
  "realpath": "/home/user/projects/some/kind/of/path",
  "resolved": undefined,
  "target": Node {
    "children": Map {},
    "dev": true,
    "devOptional": true,
    "edgesIn": Set {},
    "edgesOut": Map {},
    "errors": Array [],
    "extraneous": true,
    "integrity": undefined,
    "inventory": Inventory {},
    "location": "",
    "meta": Shrinkwrap {
      "data": Object {
        "dependencies": Object {},
        "lockfileVersion": 2,
        "packages": Object {},
      },
      "filename": null,
      "indent": 2,
      "loadedFromDisk": false,
      "root": "/home/user/projects/some/kind/of/path",
      "type": null,
    },
    "name": "path",
    "optional": true,
    "package": Object {
      "name": "root",
    },
    "path": "some/kind/of/path",
    "realpath": "/home/user/projects/some/kind/of/path",
    "resolved": undefined,
  },
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
  "integrity": undefined,
  "inventory": Inventory {
    "" => <*ref_1>,
    "../../../projects/some/kind/of/path" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {},
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "integrity": undefined,
      "inventory": Inventory {},
      "location": "../../../projects/some/kind/of/path",
      "meta": Shrinkwrap {
        "data": Object {
          "dependencies": Object {},
          "lockfileVersion": 2,
          "packages": Object {},
        },
        "filename": null,
        "indent": 2,
        "loadedFromDisk": false,
        "root": "/home/user/projects/some/kind/of/path",
        "type": null,
      },
      "name": "path",
      "optional": true,
      "package": Object {
        "name": "root",
      },
      "path": "/home/user/projects/some/kind/of/path",
      "realpath": "/home/user/projects/some/kind/of/path",
      "resolved": undefined,
    },
  },
  "location": "",
  "meta": Shrinkwrap {
    "data": Object {
      "dependencies": Object {},
      "lockfileVersion": 2,
      "packages": Object {},
    },
    "filename": null,
    "indent": 2,
    "loadedFromDisk": false,
    "root": "/home/user/projects/some/kind/of/path",
    "type": null,
  },
  "name": "path",
  "optional": true,
  "package": Object {
    "name": "root",
  },
  "path": "/home/user/some/other/path",
  "realpath": "/home/user/projects/some/kind/of/path",
  "resolved": "../../../projects/some/kind/of/path",
  "target": Node {
    "children": Map {},
    "dev": true,
    "devOptional": true,
    "edgesIn": Set {},
    "edgesOut": Map {},
    "errors": Array [],
    "extraneous": true,
    "integrity": undefined,
    "inventory": Inventory {},
    "location": "../../../projects/some/kind/of/path",
    "meta": Shrinkwrap {
      "data": Object {
        "dependencies": Object {},
        "lockfileVersion": 2,
        "packages": Object {},
      },
      "filename": null,
      "indent": 2,
      "loadedFromDisk": false,
      "root": "/home/user/projects/some/kind/of/path",
      "type": null,
    },
    "name": "path",
    "optional": true,
    "package": Object {
      "name": "root",
    },
    "path": "/home/user/projects/some/kind/of/path",
    "realpath": "/home/user/projects/some/kind/of/path",
    "resolved": undefined,
  },
}
`

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
  "integrity": undefined,
  "inventory": Inventory {
    "" => <*ref_1>,
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
  "target": &ref_2 Node {
    "children": Map {},
    "dev": true,
    "devOptional": true,
    "edgesIn": Set {},
    "edgesOut": Map {},
    "errors": Array [],
    "extraneous": true,
    "integrity": undefined,
    "inventory": Inventory {
      "" => <*ref_2>,
    },
    "location": "",
    "meta": Metadata {
      "data": Object {
        "arblock": Object {
          "packages": Object {
            ".": Object {
              "link": true,
              "resolved": "../../../../../../../../home/user/projects/some/kind/of/path",
            },
          },
        },
      },
      "files": Object {
        "arblock": "/home/user/projects/some/kind/of/path/node_modules/.arborist-lock.json",
        "lockfile": "/home/user/projects/some/kind/of/path/package-lock.json",
        "shrinkwrap": "/home/user/projects/some/kind/of/path/npm-shrinkwrap.json",
      },
      "root": "/home/user/projects/some/kind/of/path",
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
    "../../../../../../../../home/user/projects/some/kind/of/path" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {},
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "integrity": undefined,
      "inventory": Inventory {},
      "location": "../../../../../../../../home/user/projects/some/kind/of/path",
      "meta": undefined,
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
  "meta": Metadata {
    "data": Object {
      "arblock": Object {
        "packages": Object {
          ".": Object {
            "link": true,
            "resolved": "../../../../../../../../home/user/projects/some/kind/of/path",
          },
        },
      },
    },
    "files": Object {
      "arblock": "/home/user/projects/some/kind/of/path/node_modules/.arborist-lock.json",
      "lockfile": "/home/user/projects/some/kind/of/path/package-lock.json",
      "shrinkwrap": "/home/user/projects/some/kind/of/path/npm-shrinkwrap.json",
    },
    "root": "/home/user/projects/some/kind/of/path",
  },
  "name": "path",
  "optional": true,
  "package": Object {
    "name": "root",
  },
  "path": "some/other/path",
  "realpath": "/home/user/projects/some/kind/of/path",
  "resolved": "../../../../../../../../home/user/projects/some/kind/of/path",
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
    "location": "../../../../../../../../home/user/projects/some/kind/of/path",
    "meta": undefined,
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

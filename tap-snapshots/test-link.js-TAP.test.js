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
  "error": undefined,
  "extraneous": true,
  "inBundle": false,
  "location": "/",
  "name": "path",
  "optional": true,
  "package": Object {
    "name": "root",
  },
  "path": "some/kind/of/path",
  "realpath": "/home/user/projects/some/kind/of/path",
  "target": Node {
    "children": Map {},
    "dev": true,
    "devOptional": true,
    "edgesIn": Set {},
    "edgesOut": Map {},
    "error": undefined,
    "extraneous": true,
    "inBundle": false,
    "location": "/",
    "name": "path",
    "optional": true,
    "package": Object {
      "name": "root",
    },
    "path": "some/kind/of/path",
    "realpath": "/home/user/projects/some/kind/of/path",
  },
}
`

exports[`test/link.js TAP > instantiate without providing target 1`] = `
Link {
  "dev": true,
  "devOptional": true,
  "edgesIn": Set {},
  "edgesOut": Map {},
  "error": undefined,
  "extraneous": true,
  "inBundle": false,
  "location": "/",
  "name": "path",
  "optional": true,
  "package": Object {
    "name": "root",
  },
  "path": "some/other/path",
  "realpath": "/home/user/projects/some/kind/of/path",
  "target": Node {
    "children": Map {},
    "dev": true,
    "devOptional": true,
    "edgesIn": Set {},
    "edgesOut": Map {},
    "error": undefined,
    "extraneous": true,
    "inBundle": false,
    "location": "/",
    "name": "path",
    "optional": true,
    "package": Object {
      "name": "root",
    },
    "path": null,
    "realpath": "/home/user/projects/some/kind/of/path",
  },
}
`

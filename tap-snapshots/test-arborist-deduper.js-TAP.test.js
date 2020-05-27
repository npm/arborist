/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/arborist/deduper.js TAP dedupes with actual tree > must match snapshot 1`] = `
Node {
  "children": Map {
    "@isaacs/dedupe-tests-a" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "@isaacs/dedupe-tests-a",
          "spec": "1.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@isaacs/dedupe-tests-b" => Edge {
          "name": "@isaacs/dedupe-tests-b",
          "spec": "1",
          "to": "node_modules/@isaacs/dedupe-tests-b",
          "type": "prod",
        },
      },
      "location": "node_modules/@isaacs/dedupe-tests-a",
      "name": "@isaacs/dedupe-tests-a",
      "resolved": null,
    },
    "@isaacs/dedupe-tests-b" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "@isaacs/dedupe-tests-b",
          "spec": "1||2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@isaacs/dedupe-tests-a",
          "name": "@isaacs/dedupe-tests-b",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/@isaacs/dedupe-tests-b",
      "name": "@isaacs/dedupe-tests-b",
      "resolved": "https://registry.npmjs.org/@isaacs/dedupe-tests-b/-/dedupe-tests-b-1.0.0.tgz",
    },
  },
  "edgesOut": Map {
    "@isaacs/dedupe-tests-a" => Edge {
      "name": "@isaacs/dedupe-tests-a",
      "spec": "1.0.1",
      "to": "node_modules/@isaacs/dedupe-tests-a",
      "type": "prod",
    },
    "@isaacs/dedupe-tests-b" => Edge {
      "name": "@isaacs/dedupe-tests-b",
      "spec": "1||2",
      "to": "node_modules/@isaacs/dedupe-tests-b",
      "type": "prod",
    },
  },
  "location": "",
  "name": "deduper-dedupes-with-actual-tree",
  "resolved": null,
}
`

exports[`test/arborist/deduper.js TAP dedupes with lockfile > must match snapshot 1`] = `
Node {
  "children": Map {
    "@isaacs/dedupe-tests-a" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "@isaacs/dedupe-tests-a",
          "spec": "1.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@isaacs/dedupe-tests-b" => Edge {
          "name": "@isaacs/dedupe-tests-b",
          "spec": "1",
          "to": "node_modules/@isaacs/dedupe-tests-b",
          "type": "prod",
        },
      },
      "location": "node_modules/@isaacs/dedupe-tests-a",
      "name": "@isaacs/dedupe-tests-a",
      "resolved": "https://registry.npmjs.org/@isaacs/dedupe-tests-a/-/dedupe-tests-a-1.0.1.tgz",
    },
    "@isaacs/dedupe-tests-b" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "@isaacs/dedupe-tests-b",
          "spec": "1||2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@isaacs/dedupe-tests-a",
          "name": "@isaacs/dedupe-tests-b",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/@isaacs/dedupe-tests-b",
      "name": "@isaacs/dedupe-tests-b",
      "resolved": "https://registry.npmjs.org/@isaacs/dedupe-tests-b/-/dedupe-tests-b-1.0.0.tgz",
    },
  },
  "edgesOut": Map {
    "@isaacs/dedupe-tests-a" => Edge {
      "name": "@isaacs/dedupe-tests-a",
      "spec": "1.0.1",
      "to": "node_modules/@isaacs/dedupe-tests-a",
      "type": "prod",
    },
    "@isaacs/dedupe-tests-b" => Edge {
      "name": "@isaacs/dedupe-tests-b",
      "spec": "1||2",
      "to": "node_modules/@isaacs/dedupe-tests-b",
      "type": "prod",
    },
  },
  "location": "",
  "name": "deduper-dedupes-with-lockfile",
  "resolved": null,
}
`

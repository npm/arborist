/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/arborist/audit.js TAP audit fix reifies out the bad deps > reified out the bad mkdirp and minimist 1`] = `
Node {
  "children": Map {
    "minimist" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/mkdirp",
          "name": "minimist",
          "spec": "^1.2.5",
          "type": "prod",
        },
      },
      "location": "node_modules/minimist",
      "name": "minimist",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
    },
    "mkdirp" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "mkdirp",
          "spec": "0.5.1 - 0.5.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "minimist" => Edge {
          "name": "minimist",
          "spec": "^1.2.5",
          "to": "node_modules/minimist",
          "type": "prod",
        },
      },
      "location": "node_modules/mkdirp",
      "name": "mkdirp",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.3.tgz",
    },
  },
  "edgesOut": Map {
    "mkdirp" => Edge {
      "name": "mkdirp",
      "spec": "0.5.1 - 0.5.3",
      "to": "node_modules/mkdirp",
      "type": "prod",
    },
  },
  "location": "",
  "name": "audit-audit-fix-reifies-out-the-bad-deps",
  "resolved": null,
}
`

/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/arborist/load-virtual.js TAP load a tree where package.json edited > changed, but re-using the same root that already has meta 1`] = `
Node {
  "children": Map {
    "abbrev" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "json-parse-even-better-errors" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "json-parse-even-better-errors",
          "spec": "",
          "type": "optional",
        },
      },
      "location": "node_modules/json-parse-even-better-errors",
      "name": "json-parse-even-better-errors",
      "optional": true,
      "package": Object {
        "name": "json-parse-even-better-errors",
        "version": "2.3.1",
      },
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "once",
          "spec": "",
          "type": "peer",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "package": Object {
        "name": "once",
        "version": "1.4.0",
      },
      "peer": true,
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
    },
    "opener" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/walden",
          "name": "opener",
          "spec": "^1.4.2",
          "type": "prod",
        },
      },
      "location": "node_modules/opener",
      "name": "opener",
      "package": Object {
        "name": "opener",
        "version": "1.5.2",
      },
      "resolved": "https://registry.npmjs.org/opener/-/opener-1.5.2.tgz",
    },
    "semver" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "semver",
          "spec": "",
          "type": "peerOptional",
        },
      },
      "location": "node_modules/semver",
      "name": "semver",
      "optional": true,
      "package": Object {
        "name": "semver",
        "version": "7.3.2",
      },
      "peer": true,
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
    },
    "walden" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "walden",
          "spec": "",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "opener" => Edge {
          "name": "opener",
          "spec": "^1.4.2",
          "to": "node_modules/opener",
          "type": "prod",
        },
      },
      "location": "node_modules/walden",
      "name": "walden",
      "package": Object {
        "name": "walden",
        "version": "1.0.3",
      },
      "resolved": "https://registry.npmjs.org/walden/-/walden-1.0.3.tgz",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "package": Object {
        "name": "wrappy",
        "version": "1.0.2",
      },
      "peer": true,
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.0",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "json-parse-even-better-errors" => Edge {
      "name": "json-parse-even-better-errors",
      "spec": "",
      "to": "node_modules/json-parse-even-better-errors",
      "type": "optional",
    },
    "once" => Edge {
      "name": "once",
      "spec": "",
      "to": "node_modules/once",
      "type": "peer",
    },
    "semver" => Edge {
      "name": "semver",
      "spec": "",
      "to": "node_modules/semver",
      "type": "peerOptional",
    },
    "walden" => Edge {
      "name": "walden",
      "spec": "",
      "to": "node_modules/walden",
      "type": "dev",
    },
  },
  "location": "",
  "name": "changed",
  "package": Object {
    "name": "changed",
    "version": undefined,
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load a tree where package.json edited > deps changed 1`] = `
Node {
  "children": Map {
    "abbrev" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "json-parse-even-better-errors" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "json-parse-even-better-errors",
          "spec": "",
          "type": "optional",
        },
      },
      "location": "node_modules/json-parse-even-better-errors",
      "name": "json-parse-even-better-errors",
      "optional": true,
      "package": Object {
        "name": "json-parse-even-better-errors",
        "version": "2.3.1",
      },
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "once",
          "spec": "",
          "type": "peer",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "package": Object {
        "name": "once",
        "version": "1.4.0",
      },
      "peer": true,
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
    },
    "opener" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/walden",
          "name": "opener",
          "spec": "^1.4.2",
          "type": "prod",
        },
      },
      "location": "node_modules/opener",
      "name": "opener",
      "package": Object {
        "name": "opener",
        "version": "1.5.2",
      },
      "resolved": "https://registry.npmjs.org/opener/-/opener-1.5.2.tgz",
    },
    "semver" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "semver",
          "spec": "",
          "type": "peerOptional",
        },
      },
      "location": "node_modules/semver",
      "name": "semver",
      "optional": true,
      "package": Object {
        "name": "semver",
        "version": "7.3.2",
      },
      "peer": true,
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
    },
    "walden" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "walden",
          "spec": "",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "opener" => Edge {
          "name": "opener",
          "spec": "^1.4.2",
          "to": "node_modules/opener",
          "type": "prod",
        },
      },
      "location": "node_modules/walden",
      "name": "walden",
      "package": Object {
        "name": "walden",
        "version": "1.0.3",
      },
      "resolved": "https://registry.npmjs.org/walden/-/walden-1.0.3.tgz",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "package": Object {
        "name": "wrappy",
        "version": "1.0.2",
      },
      "peer": true,
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.0",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "json-parse-even-better-errors" => Edge {
      "name": "json-parse-even-better-errors",
      "spec": "",
      "to": "node_modules/json-parse-even-better-errors",
      "type": "optional",
    },
    "once" => Edge {
      "name": "once",
      "spec": "",
      "to": "node_modules/once",
      "type": "peer",
    },
    "semver" => Edge {
      "name": "semver",
      "spec": "",
      "to": "node_modules/semver",
      "type": "peerOptional",
    },
    "walden" => Edge {
      "name": "walden",
      "spec": "",
      "to": "node_modules/walden",
      "type": "dev",
    },
  },
  "location": "",
  "name": "changed",
  "package": Object {
    "name": "changed",
    "version": undefined,
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load a tree where package.json edited > deps match 1`] = `
Node {
  "children": Map {
    "abbrev" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "json-parse-even-better-errors" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "json-parse-even-better-errors",
          "spec": "",
          "type": "optional",
        },
      },
      "location": "node_modules/json-parse-even-better-errors",
      "name": "json-parse-even-better-errors",
      "optional": true,
      "package": Object {
        "name": "json-parse-even-better-errors",
        "version": "2.3.1",
      },
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "once",
          "spec": "",
          "type": "peer",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "package": Object {
        "name": "once",
        "version": "1.4.0",
      },
      "peer": true,
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
    },
    "opener" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/walden",
          "name": "opener",
          "spec": "^1.4.2",
          "type": "prod",
        },
      },
      "location": "node_modules/opener",
      "name": "opener",
      "package": Object {
        "name": "opener",
        "version": "1.5.2",
      },
      "resolved": "https://registry.npmjs.org/opener/-/opener-1.5.2.tgz",
    },
    "semver" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "semver",
          "spec": "",
          "type": "peerOptional",
        },
      },
      "location": "node_modules/semver",
      "name": "semver",
      "optional": true,
      "package": Object {
        "name": "semver",
        "version": "7.3.2",
      },
      "peer": true,
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
    },
    "walden" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "walden",
          "spec": "",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "opener" => Edge {
          "name": "opener",
          "spec": "^1.4.2",
          "to": "node_modules/opener",
          "type": "prod",
        },
      },
      "location": "node_modules/walden",
      "name": "walden",
      "package": Object {
        "name": "walden",
        "version": "1.0.3",
      },
      "resolved": "https://registry.npmjs.org/walden/-/walden-1.0.3.tgz",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "package": Object {
        "name": "wrappy",
        "version": "1.0.2",
      },
      "peer": true,
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "json-parse-even-better-errors" => Edge {
      "name": "json-parse-even-better-errors",
      "spec": "",
      "to": "node_modules/json-parse-even-better-errors",
      "type": "optional",
    },
    "once" => Edge {
      "name": "once",
      "spec": "",
      "to": "node_modules/once",
      "type": "peer",
    },
    "semver" => Edge {
      "name": "semver",
      "spec": "",
      "to": "node_modules/semver",
      "type": "peerOptional",
    },
    "walden" => Edge {
      "name": "walden",
      "spec": "",
      "to": "node_modules/walden",
      "type": "dev",
    },
  },
  "location": "",
  "name": "ok",
  "package": Object {
    "name": "ok",
    "version": undefined,
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load a tree where package.json edited > deps removed 1`] = `
Node {
  "children": Map {
    "abbrev" => Node {
      "extraneous": true,
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "json-parse-even-better-errors" => Node {
      "extraneous": true,
      "location": "node_modules/json-parse-even-better-errors",
      "name": "json-parse-even-better-errors",
      "package": Object {
        "name": "json-parse-even-better-errors",
        "version": "2.3.1",
      },
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
    },
    "once" => Node {
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/once",
      "name": "once",
      "package": Object {
        "name": "once",
        "version": "1.4.0",
      },
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
    },
    "opener" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/walden",
          "name": "opener",
          "spec": "^1.4.2",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/opener",
      "name": "opener",
      "package": Object {
        "name": "opener",
        "version": "1.5.2",
      },
      "resolved": "https://registry.npmjs.org/opener/-/opener-1.5.2.tgz",
    },
    "semver" => Node {
      "extraneous": true,
      "location": "node_modules/semver",
      "name": "semver",
      "package": Object {
        "name": "semver",
        "version": "7.3.2",
      },
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
    },
    "walden" => Node {
      "edgesOut": Map {
        "opener" => Edge {
          "name": "opener",
          "spec": "^1.4.2",
          "to": "node_modules/opener",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/walden",
      "name": "walden",
      "package": Object {
        "name": "walden",
        "version": "1.0.3",
      },
      "resolved": "https://registry.npmjs.org/walden/-/walden-1.0.3.tgz",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "package": Object {
        "name": "wrappy",
        "version": "1.0.2",
      },
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "location": "",
  "name": "removed",
  "package": Object {
    "name": "removed",
    "version": undefined,
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load a tree where package.json edited > ws changed 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/edit-package-json/workspaces-changed/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "package": Object {
        "name": "a",
        "version": "1.0.0",
      },
      "resolved": "file:../a",
      "target": Object {
        "name": "a",
        "parent": null,
      },
    },
    "b" => Link {
      "edgesIn": Set {
        Edge {
          "from": "a",
          "name": "b",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "package": Object {
        "name": "b",
        "version": "1.0.0",
      },
      "resolved": "file:../b",
      "target": Object {
        "name": "b",
        "parent": null,
      },
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/edit-package-json/workspaces-changed/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
    "c" => Edge {
      "error": "MISSING",
      "name": "c",
      "spec": "file:{CWD}/test/fixtures/edit-package-json/workspaces-changed/c",
      "to": null,
      "type": "workspace",
    },
  },
  "location": "",
  "name": "workspaces-changed",
  "package": Object {
    "name": "workspace-simple",
    "version": undefined,
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load a tree where package.json edited > ws match 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "package": Object {
        "name": "a",
        "version": "1.0.0",
      },
      "resolved": "file:../a",
      "target": Object {
        "name": "a",
        "parent": null,
      },
    },
    "b" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "b",
          "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/b",
          "type": "workspace",
        },
        Edge {
          "from": "a",
          "name": "b",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "package": Object {
        "name": "b",
        "version": "1.0.0",
      },
      "resolved": "file:../b",
      "target": Object {
        "name": "b",
        "parent": null,
      },
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
    "b" => Edge {
      "name": "b",
      "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/b",
      "to": "node_modules/b",
      "type": "workspace",
    },
  },
  "location": "",
  "name": "workspaces-simple-virtual",
  "package": Object {
    "name": "workspace-simple",
    "version": undefined,
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load a tree with a bunch of bundles > virtual tree with multiple bundles 1`] = `
Node {
  "children": Map {
    "@babel/code-frame" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/template",
          "name": "@babel/code-frame",
          "spec": "^7.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/code-frame",
          "spec": "^7.5.5",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/highlight" => Edge {
          "name": "@babel/highlight",
          "spec": "^7.0.0",
          "to": "node_modules/@babel/highlight",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/code-frame",
      "name": "@babel/code-frame",
      "package": Object {
        "name": "@babel/code-frame",
        "version": "7.5.5",
      },
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.5.5.tgz",
    },
    "@babel/generator" => Node {
      "children": Map {
        "source-map" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/@babel/generator",
              "name": "source-map",
              "spec": "^0.5.0",
              "type": "prod",
            },
          },
          "location": "node_modules/@babel/generator/node_modules/source-map",
          "name": "source-map",
          "package": Object {
            "name": "source-map",
            "version": "0.5.7",
          },
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/generator",
          "spec": "^7.7.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "@babel/generator",
          "spec": "^7.4.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/types" => Edge {
          "name": "@babel/types",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
        "jsesc" => Edge {
          "name": "jsesc",
          "spec": "^2.5.1",
          "to": "node_modules/jsesc",
          "type": "prod",
        },
        "lodash" => Edge {
          "name": "lodash",
          "spec": "^4.17.13",
          "to": "node_modules/lodash",
          "type": "prod",
        },
        "source-map" => Edge {
          "name": "source-map",
          "spec": "^0.5.0",
          "to": "node_modules/@babel/generator/node_modules/source-map",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/generator",
      "name": "@babel/generator",
      "package": Object {
        "name": "@babel/generator",
        "version": "7.7.7",
      },
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.7.7.tgz",
    },
    "@babel/helper-function-name" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/helper-function-name",
          "spec": "^7.7.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/helper-get-function-arity" => Edge {
          "name": "@babel/helper-get-function-arity",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/helper-get-function-arity",
          "type": "prod",
        },
        "@babel/template" => Edge {
          "name": "@babel/template",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/template",
          "type": "prod",
        },
        "@babel/types" => Edge {
          "name": "@babel/types",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/helper-function-name",
      "name": "@babel/helper-function-name",
      "package": Object {
        "name": "@babel/helper-function-name",
        "version": "7.7.4",
      },
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.7.4.tgz",
    },
    "@babel/helper-get-function-arity" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/helper-function-name",
          "name": "@babel/helper-get-function-arity",
          "spec": "^7.7.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/types" => Edge {
          "name": "@babel/types",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/helper-get-function-arity",
      "name": "@babel/helper-get-function-arity",
      "package": Object {
        "name": "@babel/helper-get-function-arity",
        "version": "7.7.4",
      },
      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.7.4.tgz",
    },
    "@babel/helper-split-export-declaration" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/helper-split-export-declaration",
          "spec": "^7.7.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/types" => Edge {
          "name": "@babel/types",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/helper-split-export-declaration",
      "name": "@babel/helper-split-export-declaration",
      "package": Object {
        "name": "@babel/helper-split-export-declaration",
        "version": "7.7.4",
      },
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.7.4.tgz",
    },
    "@babel/highlight" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/code-frame",
          "name": "@babel/highlight",
          "spec": "^7.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "chalk" => Edge {
          "name": "chalk",
          "spec": "^2.0.0",
          "to": "node_modules/chalk",
          "type": "prod",
        },
        "esutils" => Edge {
          "name": "esutils",
          "spec": "^2.0.2",
          "to": "node_modules/esutils",
          "type": "prod",
        },
        "js-tokens" => Edge {
          "name": "js-tokens",
          "spec": "^4.0.0",
          "to": "node_modules/js-tokens",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/highlight",
      "name": "@babel/highlight",
      "package": Object {
        "name": "@babel/highlight",
        "version": "7.5.0",
      },
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.5.0.tgz",
    },
    "@babel/parser" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/template",
          "name": "@babel/parser",
          "spec": "^7.7.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/parser",
          "spec": "^7.7.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "@babel/parser",
          "spec": "^7.4.3",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/parser",
      "name": "@babel/parser",
      "package": Object {
        "name": "@babel/parser",
        "version": "7.7.7",
      },
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.7.7.tgz",
    },
    "@babel/runtime" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yaml",
          "name": "@babel/runtime",
          "spec": "^7.6.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "regenerator-runtime" => Edge {
          "name": "regenerator-runtime",
          "spec": "^0.13.2",
          "to": "node_modules/regenerator-runtime",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/runtime",
      "name": "@babel/runtime",
      "package": Object {
        "name": "@babel/runtime",
        "version": "7.7.7",
      },
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.7.7.tgz",
    },
    "@babel/template" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/helper-function-name",
          "name": "@babel/template",
          "spec": "^7.7.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "@babel/template",
          "spec": "^7.4.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/code-frame" => Edge {
          "name": "@babel/code-frame",
          "spec": "^7.0.0",
          "to": "node_modules/@babel/code-frame",
          "type": "prod",
        },
        "@babel/parser" => Edge {
          "name": "@babel/parser",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/parser",
          "type": "prod",
        },
        "@babel/types" => Edge {
          "name": "@babel/types",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/template",
      "name": "@babel/template",
      "package": Object {
        "name": "@babel/template",
        "version": "7.7.4",
      },
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.7.4.tgz",
    },
    "@babel/traverse" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "@babel/traverse",
          "spec": "^7.4.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/code-frame" => Edge {
          "name": "@babel/code-frame",
          "spec": "^7.5.5",
          "to": "node_modules/@babel/code-frame",
          "type": "prod",
        },
        "@babel/generator" => Edge {
          "name": "@babel/generator",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/generator",
          "type": "prod",
        },
        "@babel/helper-function-name" => Edge {
          "name": "@babel/helper-function-name",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/helper-function-name",
          "type": "prod",
        },
        "@babel/helper-split-export-declaration" => Edge {
          "name": "@babel/helper-split-export-declaration",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/helper-split-export-declaration",
          "type": "prod",
        },
        "@babel/parser" => Edge {
          "name": "@babel/parser",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/parser",
          "type": "prod",
        },
        "@babel/types" => Edge {
          "name": "@babel/types",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
        "debug" => Edge {
          "name": "debug",
          "spec": "^4.1.0",
          "to": "node_modules/debug",
          "type": "prod",
        },
        "globals" => Edge {
          "name": "globals",
          "spec": "^11.1.0",
          "to": "node_modules/globals",
          "type": "prod",
        },
        "lodash" => Edge {
          "name": "lodash",
          "spec": "^4.17.13",
          "to": "node_modules/lodash",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/traverse",
      "name": "@babel/traverse",
      "package": Object {
        "name": "@babel/traverse",
        "version": "7.7.4",
      },
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.7.4.tgz",
    },
    "@babel/types" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/generator",
          "name": "@babel/types",
          "spec": "^7.7.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/helper-function-name",
          "name": "@babel/types",
          "spec": "^7.7.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/helper-get-function-arity",
          "name": "@babel/types",
          "spec": "^7.7.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/helper-split-export-declaration",
          "name": "@babel/types",
          "spec": "^7.7.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/template",
          "name": "@babel/types",
          "spec": "^7.7.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/types",
          "spec": "^7.7.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "@babel/types",
          "spec": "^7.4.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "esutils" => Edge {
          "name": "esutils",
          "spec": "^2.0.2",
          "to": "node_modules/esutils",
          "type": "prod",
        },
        "lodash" => Edge {
          "name": "lodash",
          "spec": "^4.17.13",
          "to": "node_modules/lodash",
          "type": "prod",
        },
        "to-fast-properties" => Edge {
          "name": "to-fast-properties",
          "spec": "^2.0.0",
          "to": "node_modules/to-fast-properties",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/types",
      "name": "@babel/types",
      "package": Object {
        "name": "@babel/types",
        "version": "7.7.4",
      },
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.7.4.tgz",
    },
    "@isaacs/testing-bundledeps" => Node {
      "children": Map {
        "@isaacs/testing-bundledeps-a" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/@isaacs/testing-bundledeps",
              "name": "@isaacs/testing-bundledeps-a",
              "spec": "*",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@isaacs/testing-bundledeps-b" => Edge {
              "name": "@isaacs/testing-bundledeps-b",
              "spec": "*",
              "to": "node_modules/@isaacs/testing-bundledeps/node_modules/@isaacs/testing-bundledeps-b",
              "type": "prod",
            },
          },
          "location": "node_modules/@isaacs/testing-bundledeps/node_modules/@isaacs/testing-bundledeps-a",
          "name": "@isaacs/testing-bundledeps-a",
          "package": Object {
            "name": "@isaacs/testing-bundledeps-a",
            "version": "1.0.0",
          },
          "resolved": null,
        },
        "@isaacs/testing-bundledeps-b" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/@isaacs/testing-bundledeps/node_modules/@isaacs/testing-bundledeps-a",
              "name": "@isaacs/testing-bundledeps-b",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/@isaacs/testing-bundledeps/node_modules/@isaacs/testing-bundledeps-b",
          "name": "@isaacs/testing-bundledeps-b",
          "package": Object {
            "name": "@isaacs/testing-bundledeps-b",
            "version": "1.0.0",
          },
          "resolved": null,
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "@isaacs/testing-bundledeps",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@isaacs/testing-bundledeps-a" => Edge {
          "name": "@isaacs/testing-bundledeps-a",
          "spec": "*",
          "to": "node_modules/@isaacs/testing-bundledeps/node_modules/@isaacs/testing-bundledeps-a",
          "type": "prod",
        },
        "@isaacs/testing-bundledeps-c" => Edge {
          "name": "@isaacs/testing-bundledeps-c",
          "spec": "*",
          "to": "node_modules/@isaacs/testing-bundledeps-c",
          "type": "prod",
        },
      },
      "location": "node_modules/@isaacs/testing-bundledeps",
      "name": "@isaacs/testing-bundledeps",
      "package": Object {
        "name": "@isaacs/testing-bundledeps",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/@isaacs/testing-bundledeps/-/testing-bundledeps-1.0.0.tgz",
    },
    "@isaacs/testing-bundledeps-b" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@isaacs/testing-bundledeps-c",
          "name": "@isaacs/testing-bundledeps-b",
          "spec": "*",
          "type": "prod",
        },
      },
      "location": "node_modules/@isaacs/testing-bundledeps-b",
      "name": "@isaacs/testing-bundledeps-b",
      "package": Object {
        "name": "@isaacs/testing-bundledeps-b",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/@isaacs/testing-bundledeps-b/-/testing-bundledeps-b-1.0.0.tgz",
    },
    "@isaacs/testing-bundledeps-c" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@isaacs/testing-bundledeps",
          "name": "@isaacs/testing-bundledeps-c",
          "spec": "*",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@isaacs/testing-bundledeps-b" => Edge {
          "name": "@isaacs/testing-bundledeps-b",
          "spec": "*",
          "to": "node_modules/@isaacs/testing-bundledeps-b",
          "type": "prod",
        },
      },
      "location": "node_modules/@isaacs/testing-bundledeps-c",
      "name": "@isaacs/testing-bundledeps-c",
      "package": Object {
        "name": "@isaacs/testing-bundledeps-c",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/@isaacs/testing-bundledeps-c/-/testing-bundledeps-c-1.0.0.tgz",
    },
    "abbrev" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "optional",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "optional": true,
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "ajv" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/har-validator",
          "name": "ajv",
          "spec": "^6.5.5",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "fast-deep-equal" => Edge {
          "name": "fast-deep-equal",
          "spec": "^2.0.1",
          "to": "node_modules/fast-deep-equal",
          "type": "prod",
        },
        "fast-json-stable-stringify" => Edge {
          "name": "fast-json-stable-stringify",
          "spec": "^2.0.0",
          "to": "node_modules/fast-json-stable-stringify",
          "type": "prod",
        },
        "json-schema-traverse" => Edge {
          "name": "json-schema-traverse",
          "spec": "^0.4.1",
          "to": "node_modules/json-schema-traverse",
          "type": "prod",
        },
        "uri-js" => Edge {
          "name": "uri-js",
          "spec": "^4.2.2",
          "to": "node_modules/uri-js",
          "type": "prod",
        },
      },
      "location": "node_modules/ajv",
      "name": "ajv",
      "package": Object {
        "name": "ajv",
        "version": "6.10.2",
      },
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.10.2.tgz",
    },
    "ansi-regex" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/strip-ansi",
          "name": "ansi-regex",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/ansi-regex",
      "name": "ansi-regex",
      "package": Object {
        "name": "ansi-regex",
        "version": "3.0.0",
      },
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
    },
    "ansi-styles" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chalk",
          "name": "ansi-styles",
          "spec": "^3.2.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/yargs/node_modules/wrap-ansi",
          "name": "ansi-styles",
          "spec": "^3.2.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "color-convert" => Edge {
          "name": "color-convert",
          "spec": "^1.9.0",
          "to": "node_modules/color-convert",
          "type": "prod",
        },
      },
      "location": "node_modules/ansi-styles",
      "name": "ansi-styles",
      "package": Object {
        "name": "ansi-styles",
        "version": "3.2.1",
      },
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
    },
    "anymatch" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chokidar",
          "name": "anymatch",
          "spec": "~3.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "normalize-path" => Edge {
          "name": "normalize-path",
          "spec": "^3.0.0",
          "to": "node_modules/normalize-path",
          "type": "prod",
        },
        "picomatch" => Edge {
          "name": "picomatch",
          "spec": "^2.0.4",
          "to": "node_modules/picomatch",
          "type": "prod",
        },
      },
      "location": "node_modules/anymatch",
      "name": "anymatch",
      "package": Object {
        "name": "anymatch",
        "version": "3.1.1",
      },
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.1.tgz",
    },
    "append-transform" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-hook",
          "name": "append-transform",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "default-require-extensions" => Edge {
          "name": "default-require-extensions",
          "spec": "^2.0.0",
          "to": "node_modules/default-require-extensions",
          "type": "prod",
        },
      },
      "location": "node_modules/append-transform",
      "name": "append-transform",
      "package": Object {
        "name": "append-transform",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/append-transform/-/append-transform-1.0.0.tgz",
    },
    "archy" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-processinfo",
          "name": "archy",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/nyc",
          "name": "archy",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/archy",
      "name": "archy",
      "package": Object {
        "name": "archy",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/archy/-/archy-1.0.0.tgz",
    },
    "arg" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ts-node",
          "name": "arg",
          "spec": "^4.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/arg",
      "name": "arg",
      "package": Object {
        "name": "arg",
        "version": "4.1.2",
      },
      "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.2.tgz",
    },
    "argparse" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/js-yaml",
          "name": "argparse",
          "spec": "^1.0.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "sprintf-js" => Edge {
          "name": "sprintf-js",
          "spec": "~1.0.2",
          "to": "node_modules/sprintf-js",
          "type": "prod",
        },
      },
      "location": "node_modules/argparse",
      "name": "argparse",
      "package": Object {
        "name": "argparse",
        "version": "1.0.10",
      },
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
    },
    "asn1" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/sshpk",
          "name": "asn1",
          "spec": "~0.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "safer-buffer" => Edge {
          "name": "safer-buffer",
          "spec": "~2.1.0",
          "to": "node_modules/safer-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/asn1",
      "name": "asn1",
      "package": Object {
        "name": "asn1",
        "version": "0.2.4",
      },
      "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
    },
    "assert-plus" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/dashdash",
          "name": "assert-plus",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/getpass",
          "name": "assert-plus",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/http-signature",
          "name": "assert-plus",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/jsprim",
          "name": "assert-plus",
          "spec": "1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/sshpk",
          "name": "assert-plus",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/verror",
          "name": "assert-plus",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/assert-plus",
      "name": "assert-plus",
      "package": Object {
        "name": "assert-plus",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
    },
    "async-hook-domain" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "async-hook-domain",
          "spec": "^1.1.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "source-map-support" => Edge {
          "name": "source-map-support",
          "spec": "^0.5.11",
          "to": "node_modules/source-map-support",
          "type": "prod",
        },
      },
      "location": "node_modules/async-hook-domain",
      "name": "async-hook-domain",
      "package": Object {
        "name": "async-hook-domain",
        "version": "1.1.3",
      },
      "resolved": "https://registry.npmjs.org/async-hook-domain/-/async-hook-domain-1.1.3.tgz",
    },
    "asynckit" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/form-data",
          "name": "asynckit",
          "spec": "^0.4.0",
          "type": "prod",
        },
      },
      "location": "node_modules/asynckit",
      "name": "asynckit",
      "package": Object {
        "name": "asynckit",
        "version": "0.4.0",
      },
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
    },
    "aws-sign2" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "aws-sign2",
          "spec": "~0.7.0",
          "type": "prod",
        },
      },
      "location": "node_modules/aws-sign2",
      "name": "aws-sign2",
      "package": Object {
        "name": "aws-sign2",
        "version": "0.7.0",
      },
      "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
    },
    "aws4" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "aws4",
          "spec": "^1.8.0",
          "type": "prod",
        },
      },
      "location": "node_modules/aws4",
      "name": "aws4",
      "package": Object {
        "name": "aws4",
        "version": "1.9.0",
      },
      "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.9.0.tgz",
    },
    "balanced-match" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "package": Object {
        "name": "balanced-match",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
    },
    "bcrypt-pbkdf" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/sshpk",
          "name": "bcrypt-pbkdf",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "tweetnacl" => Edge {
          "name": "tweetnacl",
          "spec": "^0.14.3",
          "to": "node_modules/tweetnacl",
          "type": "prod",
        },
      },
      "location": "node_modules/bcrypt-pbkdf",
      "name": "bcrypt-pbkdf",
      "package": Object {
        "name": "bcrypt-pbkdf",
        "version": "1.0.2",
      },
      "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
    },
    "binary-extensions" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/is-binary-path",
          "name": "binary-extensions",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/binary-extensions",
      "name": "binary-extensions",
      "package": Object {
        "name": "binary-extensions",
        "version": "2.0.0",
      },
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.0.0.tgz",
    },
    "bind-obj-methods" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "bind-obj-methods",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/bind-obj-methods",
      "name": "bind-obj-methods",
      "package": Object {
        "name": "bind-obj-methods",
        "version": "2.0.0",
      },
      "resolved": "https://registry.npmjs.org/bind-obj-methods/-/bind-obj-methods-2.0.0.tgz",
    },
    "brace-expansion" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "node_modules/concat-map",
          "type": "prod",
        },
      },
      "location": "node_modules/brace-expansion",
      "name": "brace-expansion",
      "package": Object {
        "name": "brace-expansion",
        "version": "1.1.11",
      },
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
    },
    "braces" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chokidar",
          "name": "braces",
          "spec": "~3.0.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "fill-range" => Edge {
          "name": "fill-range",
          "spec": "^7.0.1",
          "to": "node_modules/fill-range",
          "type": "prod",
        },
      },
      "location": "node_modules/braces",
      "name": "braces",
      "package": Object {
        "name": "braces",
        "version": "3.0.2",
      },
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
    },
    "browser-process-hrtime" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "browser-process-hrtime",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/browser-process-hrtime",
      "name": "browser-process-hrtime",
      "package": Object {
        "name": "browser-process-hrtime",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
    },
    "buffer-from" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/source-map-support",
          "name": "buffer-from",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/buffer-from",
      "name": "buffer-from",
      "package": Object {
        "name": "buffer-from",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
    },
    "caching-transform" => Node {
      "children": Map {
        "write-file-atomic" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/caching-transform",
              "name": "write-file-atomic",
              "spec": "^2.4.2",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "spec": "^4.1.11",
              "to": "node_modules/graceful-fs",
              "type": "prod",
            },
            "imurmurhash" => Edge {
              "name": "imurmurhash",
              "spec": "^0.1.4",
              "to": "node_modules/imurmurhash",
              "type": "prod",
            },
            "signal-exit" => Edge {
              "name": "signal-exit",
              "spec": "^3.0.2",
              "to": "node_modules/signal-exit",
              "type": "prod",
            },
          },
          "location": "node_modules/caching-transform/node_modules/write-file-atomic",
          "name": "write-file-atomic",
          "package": Object {
            "name": "write-file-atomic",
            "version": "2.4.3",
          },
          "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-2.4.3.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "caching-transform",
          "spec": "^3.0.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "hasha" => Edge {
          "name": "hasha",
          "spec": "^3.0.0",
          "to": "node_modules/hasha",
          "type": "prod",
        },
        "make-dir" => Edge {
          "name": "make-dir",
          "spec": "^2.0.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "package-hash" => Edge {
          "name": "package-hash",
          "spec": "^3.0.0",
          "to": "node_modules/package-hash",
          "type": "prod",
        },
        "write-file-atomic" => Edge {
          "name": "write-file-atomic",
          "spec": "^2.4.2",
          "to": "node_modules/caching-transform/node_modules/write-file-atomic",
          "type": "prod",
        },
      },
      "location": "node_modules/caching-transform",
      "name": "caching-transform",
      "package": Object {
        "name": "caching-transform",
        "version": "3.0.2",
      },
      "resolved": "https://registry.npmjs.org/caching-transform/-/caching-transform-3.0.2.tgz",
    },
    "camelcase" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yargs-parser",
          "name": "camelcase",
          "spec": "^5.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/camelcase",
      "name": "camelcase",
      "package": Object {
        "name": "camelcase",
        "version": "5.3.1",
      },
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
    },
    "caseless" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "caseless",
          "spec": "~0.12.0",
          "type": "prod",
        },
      },
      "location": "node_modules/caseless",
      "name": "caseless",
      "package": Object {
        "name": "caseless",
        "version": "0.12.0",
      },
      "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
    },
    "chalk" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/highlight",
          "name": "chalk",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ansi-styles" => Edge {
          "name": "ansi-styles",
          "spec": "^3.2.1",
          "to": "node_modules/ansi-styles",
          "type": "prod",
        },
        "escape-string-regexp" => Edge {
          "name": "escape-string-regexp",
          "spec": "^1.0.5",
          "to": "node_modules/escape-string-regexp",
          "type": "prod",
        },
        "supports-color" => Edge {
          "name": "supports-color",
          "spec": "^5.3.0",
          "to": "node_modules/supports-color",
          "type": "prod",
        },
      },
      "location": "node_modules/chalk",
      "name": "chalk",
      "package": Object {
        "name": "chalk",
        "version": "2.4.2",
      },
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
    },
    "chokidar" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "chokidar",
          "spec": "^3.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "anymatch" => Edge {
          "name": "anymatch",
          "spec": "~3.1.1",
          "to": "node_modules/anymatch",
          "type": "prod",
        },
        "braces" => Edge {
          "name": "braces",
          "spec": "~3.0.2",
          "to": "node_modules/braces",
          "type": "prod",
        },
        "fsevents" => Edge {
          "name": "fsevents",
          "spec": "~2.1.2",
          "to": "node_modules/fsevents",
          "type": "optional",
        },
        "glob-parent" => Edge {
          "name": "glob-parent",
          "spec": "~5.1.0",
          "to": "node_modules/glob-parent",
          "type": "prod",
        },
        "is-binary-path" => Edge {
          "name": "is-binary-path",
          "spec": "~2.1.0",
          "to": "node_modules/is-binary-path",
          "type": "prod",
        },
        "is-glob" => Edge {
          "name": "is-glob",
          "spec": "~4.0.1",
          "to": "node_modules/is-glob",
          "type": "prod",
        },
        "normalize-path" => Edge {
          "name": "normalize-path",
          "spec": "~3.0.0",
          "to": "node_modules/normalize-path",
          "type": "prod",
        },
        "readdirp" => Edge {
          "name": "readdirp",
          "spec": "~3.3.0",
          "to": "node_modules/readdirp",
          "type": "prod",
        },
      },
      "location": "node_modules/chokidar",
      "name": "chokidar",
      "package": Object {
        "name": "chokidar",
        "version": "3.3.1",
      },
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.3.1.tgz",
    },
    "cliui" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/jackspeak",
          "name": "cliui",
          "spec": "^4.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "string-width" => Edge {
          "name": "string-width",
          "spec": "^2.1.1",
          "to": "node_modules/string-width",
          "type": "prod",
        },
        "strip-ansi" => Edge {
          "name": "strip-ansi",
          "spec": "^4.0.0",
          "to": "node_modules/strip-ansi",
          "type": "prod",
        },
        "wrap-ansi" => Edge {
          "name": "wrap-ansi",
          "spec": "^2.0.0",
          "to": "node_modules/wrap-ansi",
          "type": "prod",
        },
      },
      "location": "node_modules/cliui",
      "name": "cliui",
      "package": Object {
        "name": "cliui",
        "version": "4.1.0",
      },
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-4.1.0.tgz",
    },
    "code-point-at" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/wrap-ansi/node_modules/string-width",
          "name": "code-point-at",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/code-point-at",
      "name": "code-point-at",
      "package": Object {
        "name": "code-point-at",
        "version": "1.1.0",
      },
      "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
    },
    "color-convert" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ansi-styles",
          "name": "color-convert",
          "spec": "^1.9.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "color-name" => Edge {
          "name": "color-name",
          "spec": "1.1.3",
          "to": "node_modules/color-name",
          "type": "prod",
        },
      },
      "location": "node_modules/color-convert",
      "name": "color-convert",
      "package": Object {
        "name": "color-convert",
        "version": "1.9.3",
      },
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
    },
    "color-name" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/color-convert",
          "name": "color-name",
          "spec": "1.1.3",
          "type": "prod",
        },
      },
      "location": "node_modules/color-name",
      "name": "color-name",
      "package": Object {
        "name": "color-name",
        "version": "1.1.3",
      },
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
    },
    "color-support" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "color-support",
          "spec": "^1.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap-mocha-reporter",
          "name": "color-support",
          "spec": "^1.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/color-support",
      "name": "color-support",
      "package": Object {
        "name": "color-support",
        "version": "1.1.3",
      },
      "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",
    },
    "combined-stream" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/form-data",
          "name": "combined-stream",
          "spec": "^1.0.6",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/request",
          "name": "combined-stream",
          "spec": "~1.0.6",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "delayed-stream" => Edge {
          "name": "delayed-stream",
          "spec": "~1.0.0",
          "to": "node_modules/delayed-stream",
          "type": "prod",
        },
      },
      "location": "node_modules/combined-stream",
      "name": "combined-stream",
      "package": Object {
        "name": "combined-stream",
        "version": "1.0.8",
      },
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
    },
    "commander" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/uglify-js",
          "name": "commander",
          "spec": "~2.20.3",
          "type": "prod",
        },
      },
      "location": "node_modules/commander",
      "name": "commander",
      "optional": true,
      "package": Object {
        "name": "commander",
        "version": "2.20.3",
      },
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
    },
    "commondir" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/find-cache-dir",
          "name": "commondir",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/commondir",
      "name": "commondir",
      "package": Object {
        "name": "commondir",
        "version": "1.0.1",
      },
      "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
    },
    "concat-map" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "package": Object {
        "name": "concat-map",
        "version": "0.0.1",
      },
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
    },
    "convert-source-map" => Node {
      "children": Map {
        "safe-buffer" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/convert-source-map",
              "name": "safe-buffer",
              "spec": "~5.1.1",
              "type": "prod",
            },
          },
          "location": "node_modules/convert-source-map/node_modules/safe-buffer",
          "name": "safe-buffer",
          "package": Object {
            "name": "safe-buffer",
            "version": "5.1.2",
          },
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "convert-source-map",
          "spec": "^1.6.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "safe-buffer" => Edge {
          "name": "safe-buffer",
          "spec": "~5.1.1",
          "to": "node_modules/convert-source-map/node_modules/safe-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/convert-source-map",
      "name": "convert-source-map",
      "package": Object {
        "name": "convert-source-map",
        "version": "1.7.0",
      },
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
    },
    "core-util-is" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/readable-stream",
          "name": "core-util-is",
          "spec": "~1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/verror",
          "name": "core-util-is",
          "spec": "1.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/core-util-is",
      "name": "core-util-is",
      "package": Object {
        "name": "core-util-is",
        "version": "1.0.2",
      },
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
    },
    "coveralls" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "coveralls",
          "spec": "^3.0.8",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "js-yaml" => Edge {
          "name": "js-yaml",
          "spec": "^3.13.1",
          "to": "node_modules/js-yaml",
          "type": "prod",
        },
        "lcov-parse" => Edge {
          "name": "lcov-parse",
          "spec": "^1.0.0",
          "to": "node_modules/lcov-parse",
          "type": "prod",
        },
        "log-driver" => Edge {
          "name": "log-driver",
          "spec": "^1.2.7",
          "to": "node_modules/log-driver",
          "type": "prod",
        },
        "minimist" => Edge {
          "name": "minimist",
          "spec": "^1.2.0",
          "to": "node_modules/minimist",
          "type": "prod",
        },
        "request" => Edge {
          "name": "request",
          "spec": "^2.88.0",
          "to": "node_modules/request",
          "type": "prod",
        },
      },
      "location": "node_modules/coveralls",
      "name": "coveralls",
      "package": Object {
        "name": "coveralls",
        "version": "3.0.9",
      },
      "resolved": "https://registry.npmjs.org/coveralls/-/coveralls-3.0.9.tgz",
    },
    "cp-file" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "cp-file",
          "spec": "^6.2.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "graceful-fs" => Edge {
          "name": "graceful-fs",
          "spec": "^4.1.2",
          "to": "node_modules/graceful-fs",
          "type": "prod",
        },
        "make-dir" => Edge {
          "name": "make-dir",
          "spec": "^2.0.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "nested-error-stacks" => Edge {
          "name": "nested-error-stacks",
          "spec": "^2.0.0",
          "to": "node_modules/nested-error-stacks",
          "type": "prod",
        },
        "pify" => Edge {
          "name": "pify",
          "spec": "^4.0.1",
          "to": "node_modules/pify",
          "type": "prod",
        },
        "safe-buffer" => Edge {
          "name": "safe-buffer",
          "spec": "^5.0.1",
          "to": "node_modules/safe-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/cp-file",
      "name": "cp-file",
      "package": Object {
        "name": "cp-file",
        "version": "6.2.0",
      },
      "resolved": "https://registry.npmjs.org/cp-file/-/cp-file-6.2.0.tgz",
    },
    "cross-spawn" => Node {
      "children": Map {
        "which" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/cross-spawn",
              "name": "which",
              "spec": "^1.2.9",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "isexe" => Edge {
              "name": "isexe",
              "spec": "^2.0.0",
              "to": "node_modules/isexe",
              "type": "prod",
            },
          },
          "location": "node_modules/cross-spawn/node_modules/which",
          "name": "which",
          "package": Object {
            "name": "which",
            "version": "1.3.1",
          },
          "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/foreground-child",
          "name": "cross-spawn",
          "spec": "^4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "lru-cache" => Edge {
          "name": "lru-cache",
          "spec": "^4.0.1",
          "to": "node_modules/lru-cache",
          "type": "prod",
        },
        "which" => Edge {
          "name": "which",
          "spec": "^1.2.9",
          "to": "node_modules/cross-spawn/node_modules/which",
          "type": "prod",
        },
      },
      "location": "node_modules/cross-spawn",
      "name": "cross-spawn",
      "package": Object {
        "name": "cross-spawn",
        "version": "4.0.2",
      },
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-4.0.2.tgz",
    },
    "dashdash" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/sshpk",
          "name": "dashdash",
          "spec": "^1.12.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "assert-plus" => Edge {
          "name": "assert-plus",
          "spec": "^1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
      },
      "location": "node_modules/dashdash",
      "name": "dashdash",
      "package": Object {
        "name": "dashdash",
        "version": "1.14.1",
      },
      "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
    },
    "debug" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "debug",
          "spec": "^4.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-source-maps",
          "name": "debug",
          "spec": "^4.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ms" => Edge {
          "name": "ms",
          "spec": "^2.1.1",
          "to": "node_modules/ms",
          "type": "prod",
        },
      },
      "location": "node_modules/debug",
      "name": "debug",
      "package": Object {
        "name": "debug",
        "version": "4.1.1",
      },
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
    },
    "decamelize" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yargs-parser",
          "name": "decamelize",
          "spec": "^1.2.0",
          "type": "prod",
        },
      },
      "location": "node_modules/decamelize",
      "name": "decamelize",
      "package": Object {
        "name": "decamelize",
        "version": "1.2.0",
      },
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
    },
    "default-require-extensions" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/append-transform",
          "name": "default-require-extensions",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "strip-bom" => Edge {
          "name": "strip-bom",
          "spec": "^3.0.0",
          "to": "node_modules/strip-bom",
          "type": "prod",
        },
      },
      "location": "node_modules/default-require-extensions",
      "name": "default-require-extensions",
      "package": Object {
        "name": "default-require-extensions",
        "version": "2.0.0",
      },
      "resolved": "https://registry.npmjs.org/default-require-extensions/-/default-require-extensions-2.0.0.tgz",
    },
    "delayed-stream" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/combined-stream",
          "name": "delayed-stream",
          "spec": "~1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/delayed-stream",
      "name": "delayed-stream",
      "package": Object {
        "name": "delayed-stream",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
    },
    "diff" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "diff",
          "spec": "^4.0.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/ts-node",
          "name": "diff",
          "spec": "^4.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/diff",
      "name": "diff",
      "package": Object {
        "name": "diff",
        "version": "4.0.1",
      },
      "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.1.tgz",
    },
    "diff-frag" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tcompare",
          "name": "diff-frag",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/diff-frag",
      "name": "diff-frag",
      "package": Object {
        "name": "diff-frag",
        "version": "1.0.1",
      },
      "resolved": "https://registry.npmjs.org/diff-frag/-/diff-frag-1.0.1.tgz",
    },
    "ecc-jsbn" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/sshpk",
          "name": "ecc-jsbn",
          "spec": "~0.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "jsbn" => Edge {
          "name": "jsbn",
          "spec": "~0.1.0",
          "to": "node_modules/jsbn",
          "type": "prod",
        },
        "safer-buffer" => Edge {
          "name": "safer-buffer",
          "spec": "^2.1.0",
          "to": "node_modules/safer-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/ecc-jsbn",
      "name": "ecc-jsbn",
      "package": Object {
        "name": "ecc-jsbn",
        "version": "0.1.2",
      },
      "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
    },
    "emoji-regex" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yargs/node_modules/string-width",
          "name": "emoji-regex",
          "spec": "^7.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/emoji-regex",
      "name": "emoji-regex",
      "package": Object {
        "name": "emoji-regex",
        "version": "7.0.3",
      },
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
    },
    "error-ex" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/parse-json",
          "name": "error-ex",
          "spec": "^1.3.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-arrayish" => Edge {
          "name": "is-arrayish",
          "spec": "^0.2.1",
          "to": "node_modules/is-arrayish",
          "type": "prod",
        },
      },
      "location": "node_modules/error-ex",
      "name": "error-ex",
      "package": Object {
        "name": "error-ex",
        "version": "1.3.2",
      },
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
    },
    "es6-error" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/release-zalgo",
          "name": "es6-error",
          "spec": "^4.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/es6-error",
      "name": "es6-error",
      "package": Object {
        "name": "es6-error",
        "version": "4.1.1",
      },
      "resolved": "https://registry.npmjs.org/es6-error/-/es6-error-4.1.1.tgz",
    },
    "escape-string-regexp" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chalk",
          "name": "escape-string-regexp",
          "spec": "^1.0.5",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap-mocha-reporter",
          "name": "escape-string-regexp",
          "spec": "^1.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/escape-string-regexp",
      "name": "escape-string-regexp",
      "package": Object {
        "name": "escape-string-regexp",
        "version": "1.0.5",
      },
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
    },
    "esm" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "esm",
          "spec": "^3.2.25",
          "type": "prod",
        },
      },
      "location": "node_modules/esm",
      "name": "esm",
      "package": Object {
        "name": "esm",
        "version": "3.2.25",
      },
      "resolved": "https://registry.npmjs.org/esm/-/esm-3.2.25.tgz",
    },
    "esprima" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/js-yaml",
          "name": "esprima",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/esprima",
      "name": "esprima",
      "package": Object {
        "name": "esprima",
        "version": "4.0.1",
      },
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
    },
    "esutils" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/highlight",
          "name": "esutils",
          "spec": "^2.0.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/types",
          "name": "esutils",
          "spec": "^2.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/esutils",
      "name": "esutils",
      "package": Object {
        "name": "esutils",
        "version": "2.0.3",
      },
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
    },
    "events-to-array" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap-parser",
          "name": "events-to-array",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/events-to-array",
      "name": "events-to-array",
      "package": Object {
        "name": "events-to-array",
        "version": "1.1.2",
      },
      "resolved": "https://registry.npmjs.org/events-to-array/-/events-to-array-1.1.2.tgz",
    },
    "extend" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "extend",
          "spec": "~3.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/extend",
      "name": "extend",
      "package": Object {
        "name": "extend",
        "version": "3.0.2",
      },
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
    },
    "extsprintf" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/jsprim",
          "name": "extsprintf",
          "spec": "1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/verror",
          "name": "extsprintf",
          "spec": "^1.2.0",
          "type": "prod",
        },
      },
      "location": "node_modules/extsprintf",
      "name": "extsprintf",
      "package": Object {
        "name": "extsprintf",
        "version": "1.3.0",
      },
      "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
    },
    "fast-deep-equal" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ajv",
          "name": "fast-deep-equal",
          "spec": "^2.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/fast-deep-equal",
      "name": "fast-deep-equal",
      "package": Object {
        "name": "fast-deep-equal",
        "version": "2.0.1",
      },
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
    },
    "fast-json-stable-stringify" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ajv",
          "name": "fast-json-stable-stringify",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fast-json-stable-stringify",
      "name": "fast-json-stable-stringify",
      "package": Object {
        "name": "fast-json-stable-stringify",
        "version": "2.1.0",
      },
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
    },
    "fill-range" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/braces",
          "name": "fill-range",
          "spec": "^7.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "to-regex-range" => Edge {
          "name": "to-regex-range",
          "spec": "^5.0.1",
          "to": "node_modules/to-regex-range",
          "type": "prod",
        },
      },
      "location": "node_modules/fill-range",
      "name": "fill-range",
      "package": Object {
        "name": "fill-range",
        "version": "7.0.1",
      },
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
    },
    "find-cache-dir" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "find-cache-dir",
          "spec": "^2.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "commondir" => Edge {
          "name": "commondir",
          "spec": "^1.0.1",
          "to": "node_modules/commondir",
          "type": "prod",
        },
        "make-dir" => Edge {
          "name": "make-dir",
          "spec": "^2.0.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "pkg-dir" => Edge {
          "name": "pkg-dir",
          "spec": "^3.0.0",
          "to": "node_modules/pkg-dir",
          "type": "prod",
        },
      },
      "location": "node_modules/find-cache-dir",
      "name": "find-cache-dir",
      "package": Object {
        "name": "find-cache-dir",
        "version": "2.1.0",
      },
      "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-2.1.0.tgz",
    },
    "find-up" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "find-up",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/pkg-dir",
          "name": "find-up",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/read-pkg-up",
          "name": "find-up",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/yargs",
          "name": "find-up",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "locate-path" => Edge {
          "name": "locate-path",
          "spec": "^3.0.0",
          "to": "node_modules/locate-path",
          "type": "prod",
        },
      },
      "location": "node_modules/find-up",
      "name": "find-up",
      "package": Object {
        "name": "find-up",
        "version": "3.0.0",
      },
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
    },
    "findit" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "findit",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/findit",
      "name": "findit",
      "package": Object {
        "name": "findit",
        "version": "2.0.0",
      },
      "resolved": "https://registry.npmjs.org/findit/-/findit-2.0.0.tgz",
    },
    "flow-parser" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/flow-remove-types",
          "name": "flow-parser",
          "spec": "^0.114.0",
          "type": "prod",
        },
      },
      "location": "node_modules/flow-parser",
      "name": "flow-parser",
      "package": Object {
        "name": "flow-parser",
        "version": "0.114.0",
      },
      "resolved": "https://registry.npmjs.org/flow-parser/-/flow-parser-0.114.0.tgz",
    },
    "flow-remove-types" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "flow-remove-types",
          "spec": "^2.112.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "flow-parser" => Edge {
          "name": "flow-parser",
          "spec": "^0.114.0",
          "to": "node_modules/flow-parser",
          "type": "prod",
        },
        "pirates" => Edge {
          "name": "pirates",
          "spec": "^3.0.2",
          "to": "node_modules/pirates",
          "type": "prod",
        },
        "vlq" => Edge {
          "name": "vlq",
          "spec": "^0.2.1",
          "to": "node_modules/vlq",
          "type": "prod",
        },
      },
      "location": "node_modules/flow-remove-types",
      "name": "flow-remove-types",
      "package": Object {
        "name": "flow-remove-types",
        "version": "2.114.0",
      },
      "resolved": "https://registry.npmjs.org/flow-remove-types/-/flow-remove-types-2.114.0.tgz",
    },
    "foreground-child" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "foreground-child",
          "spec": "^1.5.6",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/spawn-wrap",
          "name": "foreground-child",
          "spec": "^1.5.6",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "foreground-child",
          "spec": "^1.3.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "cross-spawn" => Edge {
          "name": "cross-spawn",
          "spec": "^4",
          "to": "node_modules/cross-spawn",
          "type": "prod",
        },
        "signal-exit" => Edge {
          "name": "signal-exit",
          "spec": "^3.0.0",
          "to": "node_modules/signal-exit",
          "type": "prod",
        },
      },
      "location": "node_modules/foreground-child",
      "name": "foreground-child",
      "package": Object {
        "name": "foreground-child",
        "version": "1.5.6",
      },
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-1.5.6.tgz",
    },
    "forever-agent" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "forever-agent",
          "spec": "~0.6.1",
          "type": "prod",
        },
      },
      "location": "node_modules/forever-agent",
      "name": "forever-agent",
      "package": Object {
        "name": "forever-agent",
        "version": "0.6.1",
      },
      "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
    },
    "form-data" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "form-data",
          "spec": "~2.3.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "asynckit" => Edge {
          "name": "asynckit",
          "spec": "^0.4.0",
          "to": "node_modules/asynckit",
          "type": "prod",
        },
        "combined-stream" => Edge {
          "name": "combined-stream",
          "spec": "^1.0.6",
          "to": "node_modules/combined-stream",
          "type": "prod",
        },
        "mime-types" => Edge {
          "name": "mime-types",
          "spec": "^2.1.12",
          "to": "node_modules/mime-types",
          "type": "prod",
        },
      },
      "location": "node_modules/form-data",
      "name": "form-data",
      "package": Object {
        "name": "form-data",
        "version": "2.3.3",
      },
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
    },
    "fs-exists-cached" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "fs-exists-cached",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs-exists-cached",
      "name": "fs-exists-cached",
      "package": Object {
        "name": "fs-exists-cached",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/fs-exists-cached/-/fs-exists-cached-1.0.0.tgz",
    },
    "fs.realpath" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "package": Object {
        "name": "fs.realpath",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
    },
    "fsevents" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chokidar",
          "name": "fsevents",
          "spec": "~2.1.2",
          "type": "optional",
        },
      },
      "location": "node_modules/fsevents",
      "name": "fsevents",
      "optional": true,
      "package": Object {
        "name": "fsevents",
        "version": "2.1.2",
      },
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.1.2.tgz",
    },
    "function-loop" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "function-loop",
          "spec": "^1.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/function-loop",
      "name": "function-loop",
      "package": Object {
        "name": "function-loop",
        "version": "1.0.2",
      },
      "resolved": "https://registry.npmjs.org/function-loop/-/function-loop-1.0.2.tgz",
    },
    "get-caller-file" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yargs",
          "name": "get-caller-file",
          "spec": "^2.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/get-caller-file",
      "name": "get-caller-file",
      "package": Object {
        "name": "get-caller-file",
        "version": "2.0.5",
      },
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
    },
    "getpass" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/sshpk",
          "name": "getpass",
          "spec": "^0.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "assert-plus" => Edge {
          "name": "assert-plus",
          "spec": "^1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
      },
      "location": "node_modules/getpass",
      "name": "getpass",
      "package": Object {
        "name": "getpass",
        "version": "0.1.7",
      },
      "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
    },
    "glob" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "glob",
          "spec": "^7.1.6",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap-mocha-reporter",
          "name": "glob",
          "spec": "^7.0.5",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/test-exclude",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => Edge {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "node_modules/inflight",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "2",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "node_modules/glob",
      "name": "glob",
      "package": Object {
        "name": "glob",
        "version": "7.1.6",
      },
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
    },
    "glob-parent" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chokidar",
          "name": "glob-parent",
          "spec": "~5.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-glob" => Edge {
          "name": "is-glob",
          "spec": "^4.0.1",
          "to": "node_modules/is-glob",
          "type": "prod",
        },
      },
      "location": "node_modules/glob-parent",
      "name": "glob-parent",
      "package": Object {
        "name": "glob-parent",
        "version": "5.1.0",
      },
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.0.tgz",
    },
    "globals" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "globals",
          "spec": "^11.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/globals",
      "name": "globals",
      "package": Object {
        "name": "globals",
        "version": "11.12.0",
      },
      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
    },
    "graceful-fs" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/caching-transform/node_modules/write-file-atomic",
          "name": "graceful-fs",
          "spec": "^4.1.11",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/cp-file",
          "name": "graceful-fs",
          "spec": "^4.1.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/load-json-file",
          "name": "graceful-fs",
          "spec": "^4.1.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/package-hash",
          "name": "graceful-fs",
          "spec": "^4.1.15",
          "type": "prod",
        },
      },
      "location": "node_modules/graceful-fs",
      "name": "graceful-fs",
      "package": Object {
        "name": "graceful-fs",
        "version": "4.2.3",
      },
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.3.tgz",
    },
    "handlebars" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-reports",
          "name": "handlebars",
          "spec": "^4.1.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "neo-async" => Edge {
          "name": "neo-async",
          "spec": "^2.6.0",
          "to": "node_modules/neo-async",
          "type": "prod",
        },
        "optimist" => Edge {
          "name": "optimist",
          "spec": "^0.6.1",
          "to": "node_modules/optimist",
          "type": "prod",
        },
        "source-map" => Edge {
          "name": "source-map",
          "spec": "^0.6.1",
          "to": "node_modules/source-map",
          "type": "prod",
        },
        "uglify-js" => Edge {
          "name": "uglify-js",
          "spec": "^3.1.4",
          "to": "node_modules/uglify-js",
          "type": "optional",
        },
      },
      "location": "node_modules/handlebars",
      "name": "handlebars",
      "package": Object {
        "name": "handlebars",
        "version": "4.5.3",
      },
      "resolved": "https://registry.npmjs.org/handlebars/-/handlebars-4.5.3.tgz",
    },
    "har-schema" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/har-validator",
          "name": "har-schema",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/har-schema",
      "name": "har-schema",
      "package": Object {
        "name": "har-schema",
        "version": "2.0.0",
      },
      "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
    },
    "har-validator" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "har-validator",
          "spec": "~5.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ajv" => Edge {
          "name": "ajv",
          "spec": "^6.5.5",
          "to": "node_modules/ajv",
          "type": "prod",
        },
        "har-schema" => Edge {
          "name": "har-schema",
          "spec": "^2.0.0",
          "to": "node_modules/har-schema",
          "type": "prod",
        },
      },
      "location": "node_modules/har-validator",
      "name": "har-validator",
      "package": Object {
        "name": "har-validator",
        "version": "5.1.3",
      },
      "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.3.tgz",
    },
    "has-flag" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-report/node_modules/supports-color",
          "name": "has-flag",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/supports-color",
          "name": "has-flag",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/has-flag",
      "name": "has-flag",
      "package": Object {
        "name": "has-flag",
        "version": "3.0.0",
      },
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
    },
    "hasha" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/caching-transform",
          "name": "hasha",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/package-hash",
          "name": "hasha",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-stream" => Edge {
          "name": "is-stream",
          "spec": "^1.0.1",
          "to": "node_modules/is-stream",
          "type": "prod",
        },
      },
      "location": "node_modules/hasha",
      "name": "hasha",
      "package": Object {
        "name": "hasha",
        "version": "3.0.0",
      },
      "resolved": "https://registry.npmjs.org/hasha/-/hasha-3.0.0.tgz",
    },
    "hosted-git-info" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/normalize-package-data",
          "name": "hosted-git-info",
          "spec": "^2.1.4",
          "type": "prod",
        },
      },
      "location": "node_modules/hosted-git-info",
      "name": "hosted-git-info",
      "package": Object {
        "name": "hosted-git-info",
        "version": "2.8.5",
      },
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.5.tgz",
    },
    "http-signature" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "http-signature",
          "spec": "~1.2.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "assert-plus" => Edge {
          "name": "assert-plus",
          "spec": "^1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
        "jsprim" => Edge {
          "name": "jsprim",
          "spec": "^1.2.2",
          "to": "node_modules/jsprim",
          "type": "prod",
        },
        "sshpk" => Edge {
          "name": "sshpk",
          "spec": "^1.7.0",
          "to": "node_modules/sshpk",
          "type": "prod",
        },
      },
      "location": "node_modules/http-signature",
      "name": "http-signature",
      "package": Object {
        "name": "http-signature",
        "version": "1.2.0",
      },
      "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
    },
    "imurmurhash" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/caching-transform/node_modules/write-file-atomic",
          "name": "imurmurhash",
          "spec": "^0.1.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/write-file-atomic",
          "name": "imurmurhash",
          "spec": "^0.1.4",
          "type": "prod",
        },
      },
      "location": "node_modules/imurmurhash",
      "name": "imurmurhash",
      "package": Object {
        "name": "imurmurhash",
        "version": "0.1.4",
      },
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
    },
    "inflight" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "package": Object {
        "name": "inflight",
        "version": "1.0.6",
      },
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
    },
    "inherits" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/readable-stream",
          "name": "inherits",
          "spec": "~2.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/inherits",
      "name": "inherits",
      "package": Object {
        "name": "inherits",
        "version": "2.0.4",
      },
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
    },
    "is-arrayish" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/error-ex",
          "name": "is-arrayish",
          "spec": "^0.2.1",
          "type": "prod",
        },
      },
      "location": "node_modules/is-arrayish",
      "name": "is-arrayish",
      "package": Object {
        "name": "is-arrayish",
        "version": "0.2.1",
      },
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
    },
    "is-binary-path" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chokidar",
          "name": "is-binary-path",
          "spec": "~2.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "binary-extensions" => Edge {
          "name": "binary-extensions",
          "spec": "^2.0.0",
          "to": "node_modules/binary-extensions",
          "type": "prod",
        },
      },
      "location": "node_modules/is-binary-path",
      "name": "is-binary-path",
      "package": Object {
        "name": "is-binary-path",
        "version": "2.1.0",
      },
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
    },
    "is-extglob" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/is-glob",
          "name": "is-extglob",
          "spec": "^2.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/is-extglob",
      "name": "is-extglob",
      "package": Object {
        "name": "is-extglob",
        "version": "2.1.1",
      },
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
    },
    "is-fullwidth-code-point" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/string-width",
          "name": "is-fullwidth-code-point",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/yargs/node_modules/string-width",
          "name": "is-fullwidth-code-point",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/is-fullwidth-code-point",
      "name": "is-fullwidth-code-point",
      "package": Object {
        "name": "is-fullwidth-code-point",
        "version": "2.0.0",
      },
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
    },
    "is-glob" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chokidar",
          "name": "is-glob",
          "spec": "~4.0.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/glob-parent",
          "name": "is-glob",
          "spec": "^4.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-extglob" => Edge {
          "name": "is-extglob",
          "spec": "^2.1.1",
          "to": "node_modules/is-extglob",
          "type": "prod",
        },
      },
      "location": "node_modules/is-glob",
      "name": "is-glob",
      "package": Object {
        "name": "is-glob",
        "version": "4.0.1",
      },
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
    },
    "is-number" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/to-regex-range",
          "name": "is-number",
          "spec": "^7.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/is-number",
      "name": "is-number",
      "package": Object {
        "name": "is-number",
        "version": "7.0.0",
      },
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
    },
    "is-stream" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/hasha",
          "name": "is-stream",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/is-stream",
      "name": "is-stream",
      "package": Object {
        "name": "is-stream",
        "version": "1.1.0",
      },
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
    },
    "is-typedarray" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "is-typedarray",
          "spec": "~1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/typedarray-to-buffer",
          "name": "is-typedarray",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/write-file-atomic",
          "name": "is-typedarray",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/is-typedarray",
      "name": "is-typedarray",
      "package": Object {
        "name": "is-typedarray",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
    },
    "isarray" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/readable-stream",
          "name": "isarray",
          "spec": "~1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/isarray",
      "name": "isarray",
      "optional": true,
      "package": Object {
        "name": "isarray",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
    },
    "isexe" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cross-spawn/node_modules/which",
          "name": "isexe",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-processinfo/node_modules/which",
          "name": "isexe",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/spawn-wrap/node_modules/which",
          "name": "isexe",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "isexe",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/which",
          "name": "isexe",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/isexe",
      "name": "isexe",
      "package": Object {
        "name": "isexe",
        "version": "2.0.0",
      },
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
    },
    "isstream" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "isstream",
          "spec": "~0.1.2",
          "type": "prod",
        },
      },
      "location": "node_modules/isstream",
      "name": "isstream",
      "package": Object {
        "name": "isstream",
        "version": "0.1.2",
      },
      "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
    },
    "istanbul-lib-coverage" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-processinfo",
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-report",
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-source-maps",
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/nyc",
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-coverage",
      "name": "istanbul-lib-coverage",
      "package": Object {
        "name": "istanbul-lib-coverage",
        "version": "2.0.5",
      },
      "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.5.tgz",
    },
    "istanbul-lib-hook" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "istanbul-lib-hook",
          "spec": "^2.0.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "append-transform" => Edge {
          "name": "append-transform",
          "spec": "^1.0.0",
          "to": "node_modules/append-transform",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-hook",
      "name": "istanbul-lib-hook",
      "package": Object {
        "name": "istanbul-lib-hook",
        "version": "2.0.7",
      },
      "resolved": "https://registry.npmjs.org/istanbul-lib-hook/-/istanbul-lib-hook-2.0.7.tgz",
    },
    "istanbul-lib-instrument" => Node {
      "children": Map {
        "semver" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/istanbul-lib-instrument",
              "name": "semver",
              "spec": "^6.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/istanbul-lib-instrument/node_modules/semver",
          "name": "semver",
          "package": Object {
            "name": "semver",
            "version": "6.3.0",
          },
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "istanbul-lib-instrument",
          "spec": "^3.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/generator" => Edge {
          "name": "@babel/generator",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/generator",
          "type": "prod",
        },
        "@babel/parser" => Edge {
          "name": "@babel/parser",
          "spec": "^7.4.3",
          "to": "node_modules/@babel/parser",
          "type": "prod",
        },
        "@babel/template" => Edge {
          "name": "@babel/template",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/template",
          "type": "prod",
        },
        "@babel/traverse" => Edge {
          "name": "@babel/traverse",
          "spec": "^7.4.3",
          "to": "node_modules/@babel/traverse",
          "type": "prod",
        },
        "@babel/types" => Edge {
          "name": "@babel/types",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
        "istanbul-lib-coverage" => Edge {
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "to": "node_modules/istanbul-lib-coverage",
          "type": "prod",
        },
        "semver" => Edge {
          "name": "semver",
          "spec": "^6.0.0",
          "to": "node_modules/istanbul-lib-instrument/node_modules/semver",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-instrument",
      "name": "istanbul-lib-instrument",
      "package": Object {
        "name": "istanbul-lib-instrument",
        "version": "3.3.0",
      },
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-3.3.0.tgz",
    },
    "istanbul-lib-processinfo" => Node {
      "children": Map {
        "cross-spawn" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/istanbul-lib-processinfo",
              "name": "cross-spawn",
              "spec": "^6.0.5",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "nice-try" => Edge {
              "name": "nice-try",
              "spec": "^1.0.4",
              "to": "node_modules/nice-try",
              "type": "prod",
            },
            "path-key" => Edge {
              "name": "path-key",
              "spec": "^2.0.1",
              "to": "node_modules/path-key",
              "type": "prod",
            },
            "semver" => Edge {
              "name": "semver",
              "spec": "^5.5.0",
              "to": "node_modules/semver",
              "type": "prod",
            },
            "shebang-command" => Edge {
              "name": "shebang-command",
              "spec": "^1.2.0",
              "to": "node_modules/shebang-command",
              "type": "prod",
            },
            "which" => Edge {
              "name": "which",
              "spec": "^1.2.9",
              "to": "node_modules/istanbul-lib-processinfo/node_modules/which",
              "type": "prod",
            },
          },
          "location": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "name": "cross-spawn",
          "package": Object {
            "name": "cross-spawn",
            "version": "6.0.5",
          },
          "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
        },
        "which" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
              "name": "which",
              "spec": "^1.2.9",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "isexe" => Edge {
              "name": "isexe",
              "spec": "^2.0.0",
              "to": "node_modules/isexe",
              "type": "prod",
            },
          },
          "location": "node_modules/istanbul-lib-processinfo/node_modules/which",
          "name": "which",
          "package": Object {
            "name": "which",
            "version": "1.3.1",
          },
          "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "istanbul-lib-processinfo",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "archy" => Edge {
          "name": "archy",
          "spec": "^1.0.0",
          "to": "node_modules/archy",
          "type": "prod",
        },
        "cross-spawn" => Edge {
          "name": "cross-spawn",
          "spec": "^6.0.5",
          "to": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "type": "prod",
        },
        "istanbul-lib-coverage" => Edge {
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.3",
          "to": "node_modules/istanbul-lib-coverage",
          "type": "prod",
        },
        "rimraf" => Edge {
          "name": "rimraf",
          "spec": "^2.6.3",
          "to": "node_modules/rimraf",
          "type": "prod",
        },
        "uuid" => Edge {
          "name": "uuid",
          "spec": "^3.3.2",
          "to": "node_modules/uuid",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-processinfo",
      "name": "istanbul-lib-processinfo",
      "package": Object {
        "name": "istanbul-lib-processinfo",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/istanbul-lib-processinfo/-/istanbul-lib-processinfo-1.0.0.tgz",
    },
    "istanbul-lib-report" => Node {
      "children": Map {
        "supports-color" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/istanbul-lib-report",
              "name": "supports-color",
              "spec": "^6.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "has-flag" => Edge {
              "name": "has-flag",
              "spec": "^3.0.0",
              "to": "node_modules/has-flag",
              "type": "prod",
            },
          },
          "location": "node_modules/istanbul-lib-report/node_modules/supports-color",
          "name": "supports-color",
          "package": Object {
            "name": "supports-color",
            "version": "6.1.0",
          },
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "istanbul-lib-report",
          "spec": "^2.0.8",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "istanbul-lib-coverage" => Edge {
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "to": "node_modules/istanbul-lib-coverage",
          "type": "prod",
        },
        "make-dir" => Edge {
          "name": "make-dir",
          "spec": "^2.1.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "supports-color" => Edge {
          "name": "supports-color",
          "spec": "^6.1.0",
          "to": "node_modules/istanbul-lib-report/node_modules/supports-color",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-report",
      "name": "istanbul-lib-report",
      "package": Object {
        "name": "istanbul-lib-report",
        "version": "2.0.8",
      },
      "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-2.0.8.tgz",
    },
    "istanbul-lib-source-maps" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "istanbul-lib-source-maps",
          "spec": "^3.0.6",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "debug" => Edge {
          "name": "debug",
          "spec": "^4.1.1",
          "to": "node_modules/debug",
          "type": "prod",
        },
        "istanbul-lib-coverage" => Edge {
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "to": "node_modules/istanbul-lib-coverage",
          "type": "prod",
        },
        "make-dir" => Edge {
          "name": "make-dir",
          "spec": "^2.1.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "rimraf" => Edge {
          "name": "rimraf",
          "spec": "^2.6.3",
          "to": "node_modules/rimraf",
          "type": "prod",
        },
        "source-map" => Edge {
          "name": "source-map",
          "spec": "^0.6.1",
          "to": "node_modules/source-map",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-source-maps",
      "name": "istanbul-lib-source-maps",
      "package": Object {
        "name": "istanbul-lib-source-maps",
        "version": "3.0.6",
      },
      "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-3.0.6.tgz",
    },
    "istanbul-reports" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "istanbul-reports",
          "spec": "^2.2.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "handlebars" => Edge {
          "name": "handlebars",
          "spec": "^4.1.2",
          "to": "node_modules/handlebars",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-reports",
      "name": "istanbul-reports",
      "package": Object {
        "name": "istanbul-reports",
        "version": "2.2.6",
      },
      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-2.2.6.tgz",
    },
    "jackspeak" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "jackspeak",
          "spec": "^1.4.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "cliui" => Edge {
          "name": "cliui",
          "spec": "^4.1.0",
          "to": "node_modules/cliui",
          "type": "prod",
        },
      },
      "location": "node_modules/jackspeak",
      "name": "jackspeak",
      "package": Object {
        "name": "jackspeak",
        "version": "1.4.0",
      },
      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-1.4.0.tgz",
    },
    "js-tokens" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/highlight",
          "name": "js-tokens",
          "spec": "^4.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/loose-envify",
          "name": "js-tokens",
          "spec": "^3.0.0 || ^4.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/js-tokens",
      "name": "js-tokens",
      "package": Object {
        "name": "js-tokens",
        "version": "4.0.0",
      },
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
    },
    "js-yaml" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/coveralls",
          "name": "js-yaml",
          "spec": "^3.13.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/nyc",
          "name": "js-yaml",
          "spec": "^3.13.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "argparse" => Edge {
          "name": "argparse",
          "spec": "^1.0.7",
          "to": "node_modules/argparse",
          "type": "prod",
        },
        "esprima" => Edge {
          "name": "esprima",
          "spec": "^4.0.0",
          "to": "node_modules/esprima",
          "type": "prod",
        },
      },
      "location": "node_modules/js-yaml",
      "name": "js-yaml",
      "package": Object {
        "name": "js-yaml",
        "version": "3.13.1",
      },
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.13.1.tgz",
    },
    "jsbn" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ecc-jsbn",
          "name": "jsbn",
          "spec": "~0.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/sshpk",
          "name": "jsbn",
          "spec": "~0.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/jsbn",
      "name": "jsbn",
      "package": Object {
        "name": "jsbn",
        "version": "0.1.1",
      },
      "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
    },
    "jsesc" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/generator",
          "name": "jsesc",
          "spec": "^2.5.1",
          "type": "prod",
        },
      },
      "location": "node_modules/jsesc",
      "name": "jsesc",
      "package": Object {
        "name": "jsesc",
        "version": "2.5.2",
      },
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
    },
    "json-parse-better-errors" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/parse-json",
          "name": "json-parse-better-errors",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/json-parse-better-errors",
      "name": "json-parse-better-errors",
      "package": Object {
        "name": "json-parse-better-errors",
        "version": "1.0.2",
      },
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
    },
    "json-schema" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/jsprim",
          "name": "json-schema",
          "spec": "0.2.3",
          "type": "prod",
        },
      },
      "location": "node_modules/json-schema",
      "name": "json-schema",
      "package": Object {
        "name": "json-schema",
        "version": "0.2.3",
      },
      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
    },
    "json-schema-traverse" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ajv",
          "name": "json-schema-traverse",
          "spec": "^0.4.1",
          "type": "prod",
        },
      },
      "location": "node_modules/json-schema-traverse",
      "name": "json-schema-traverse",
      "package": Object {
        "name": "json-schema-traverse",
        "version": "0.4.1",
      },
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
    },
    "json-stringify-safe" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "json-stringify-safe",
          "spec": "~5.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/json-stringify-safe",
      "name": "json-stringify-safe",
      "package": Object {
        "name": "json-stringify-safe",
        "version": "5.0.1",
      },
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
    },
    "jsprim" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/http-signature",
          "name": "jsprim",
          "spec": "^1.2.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "assert-plus" => Edge {
          "name": "assert-plus",
          "spec": "1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
        "extsprintf" => Edge {
          "name": "extsprintf",
          "spec": "1.3.0",
          "to": "node_modules/extsprintf",
          "type": "prod",
        },
        "json-schema" => Edge {
          "name": "json-schema",
          "spec": "0.2.3",
          "to": "node_modules/json-schema",
          "type": "prod",
        },
        "verror" => Edge {
          "name": "verror",
          "spec": "1.10.0",
          "to": "node_modules/verror",
          "type": "prod",
        },
      },
      "location": "node_modules/jsprim",
      "name": "jsprim",
      "package": Object {
        "name": "jsprim",
        "version": "1.4.1",
      },
      "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
    },
    "lcov-parse" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/coveralls",
          "name": "lcov-parse",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/lcov-parse",
      "name": "lcov-parse",
      "package": Object {
        "name": "lcov-parse",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/lcov-parse/-/lcov-parse-1.0.0.tgz",
    },
    "load-json-file" => Node {
      "children": Map {
        "pify" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/load-json-file",
              "name": "pify",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/load-json-file/node_modules/pify",
          "name": "pify",
          "package": Object {
            "name": "pify",
            "version": "3.0.0",
          },
          "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/read-pkg",
          "name": "load-json-file",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "graceful-fs" => Edge {
          "name": "graceful-fs",
          "spec": "^4.1.2",
          "to": "node_modules/graceful-fs",
          "type": "prod",
        },
        "parse-json" => Edge {
          "name": "parse-json",
          "spec": "^4.0.0",
          "to": "node_modules/parse-json",
          "type": "prod",
        },
        "pify" => Edge {
          "name": "pify",
          "spec": "^3.0.0",
          "to": "node_modules/load-json-file/node_modules/pify",
          "type": "prod",
        },
        "strip-bom" => Edge {
          "name": "strip-bom",
          "spec": "^3.0.0",
          "to": "node_modules/strip-bom",
          "type": "prod",
        },
      },
      "location": "node_modules/load-json-file",
      "name": "load-json-file",
      "package": Object {
        "name": "load-json-file",
        "version": "4.0.0",
      },
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-4.0.0.tgz",
    },
    "locate-path" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/find-up",
          "name": "locate-path",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "p-locate" => Edge {
          "name": "p-locate",
          "spec": "^3.0.0",
          "to": "node_modules/p-locate",
          "type": "prod",
        },
        "path-exists" => Edge {
          "name": "path-exists",
          "spec": "^3.0.0",
          "to": "node_modules/path-exists",
          "type": "prod",
        },
      },
      "location": "node_modules/locate-path",
      "name": "locate-path",
      "package": Object {
        "name": "locate-path",
        "version": "3.0.0",
      },
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
    },
    "lodash" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/generator",
          "name": "lodash",
          "spec": "^4.17.13",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "lodash",
          "spec": "^4.17.13",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/types",
          "name": "lodash",
          "spec": "^4.17.13",
          "type": "prod",
        },
      },
      "location": "node_modules/lodash",
      "name": "lodash",
      "package": Object {
        "name": "lodash",
        "version": "4.17.15",
      },
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.15.tgz",
    },
    "lodash.flattendeep" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/package-hash",
          "name": "lodash.flattendeep",
          "spec": "^4.4.0",
          "type": "prod",
        },
      },
      "location": "node_modules/lodash.flattendeep",
      "name": "lodash.flattendeep",
      "package": Object {
        "name": "lodash.flattendeep",
        "version": "4.4.0",
      },
      "resolved": "https://registry.npmjs.org/lodash.flattendeep/-/lodash.flattendeep-4.4.0.tgz",
    },
    "log-driver" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/coveralls",
          "name": "log-driver",
          "spec": "^1.2.7",
          "type": "prod",
        },
      },
      "location": "node_modules/log-driver",
      "name": "log-driver",
      "package": Object {
        "name": "log-driver",
        "version": "1.2.7",
      },
      "resolved": "https://registry.npmjs.org/log-driver/-/log-driver-1.2.7.tgz",
    },
    "loose-envify" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/prop-types",
          "name": "loose-envify",
          "spec": "^1.4.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/react",
          "name": "loose-envify",
          "spec": "^1.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "js-tokens" => Edge {
          "name": "js-tokens",
          "spec": "^3.0.0 || ^4.0.0",
          "to": "node_modules/js-tokens",
          "type": "prod",
        },
      },
      "location": "node_modules/loose-envify",
      "name": "loose-envify",
      "package": Object {
        "name": "loose-envify",
        "version": "1.4.0",
      },
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
    },
    "lru-cache" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cross-spawn",
          "name": "lru-cache",
          "spec": "^4.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "pseudomap" => Edge {
          "name": "pseudomap",
          "spec": "^1.0.2",
          "to": "node_modules/pseudomap",
          "type": "prod",
        },
        "yallist" => Edge {
          "name": "yallist",
          "spec": "^2.1.2",
          "to": "node_modules/yallist",
          "type": "prod",
        },
      },
      "location": "node_modules/lru-cache",
      "name": "lru-cache",
      "package": Object {
        "name": "lru-cache",
        "version": "4.1.5",
      },
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
    },
    "make-dir" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/caching-transform",
          "name": "make-dir",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/cp-file",
          "name": "make-dir",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/find-cache-dir",
          "name": "make-dir",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-report",
          "name": "make-dir",
          "spec": "^2.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-source-maps",
          "name": "make-dir",
          "spec": "^2.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/nyc",
          "name": "make-dir",
          "spec": "^2.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "pify" => Edge {
          "name": "pify",
          "spec": "^4.0.1",
          "to": "node_modules/pify",
          "type": "prod",
        },
        "semver" => Edge {
          "name": "semver",
          "spec": "^5.6.0",
          "to": "node_modules/semver",
          "type": "prod",
        },
      },
      "location": "node_modules/make-dir",
      "name": "make-dir",
      "package": Object {
        "name": "make-dir",
        "version": "2.1.0",
      },
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
    },
    "make-error" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ts-node",
          "name": "make-error",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/make-error",
      "name": "make-error",
      "package": Object {
        "name": "make-error",
        "version": "1.3.5",
      },
      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.5.tgz",
    },
    "merge-source-map" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "merge-source-map",
          "spec": "^1.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "source-map" => Edge {
          "name": "source-map",
          "spec": "^0.6.1",
          "to": "node_modules/source-map",
          "type": "prod",
        },
      },
      "location": "node_modules/merge-source-map",
      "name": "merge-source-map",
      "package": Object {
        "name": "merge-source-map",
        "version": "1.1.0",
      },
      "resolved": "https://registry.npmjs.org/merge-source-map/-/merge-source-map-1.1.0.tgz",
    },
    "mime-db" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/mime-types",
          "name": "mime-db",
          "spec": "1.42.0",
          "type": "prod",
        },
      },
      "location": "node_modules/mime-db",
      "name": "mime-db",
      "package": Object {
        "name": "mime-db",
        "version": "1.42.0",
      },
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.42.0.tgz",
    },
    "mime-types" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/form-data",
          "name": "mime-types",
          "spec": "^2.1.12",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/request",
          "name": "mime-types",
          "spec": "~2.1.19",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "mime-db" => Edge {
          "name": "mime-db",
          "spec": "1.42.0",
          "to": "node_modules/mime-db",
          "type": "prod",
        },
      },
      "location": "node_modules/mime-types",
      "name": "mime-types",
      "package": Object {
        "name": "mime-types",
        "version": "2.1.25",
      },
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.25.tgz",
    },
    "minimatch" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/test-exclude",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "package": Object {
        "name": "minimatch",
        "version": "3.0.4",
      },
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
    },
    "minimist" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/coveralls",
          "name": "minimist",
          "spec": "^1.2.0",
          "type": "prod",
        },
      },
      "location": "node_modules/minimist",
      "name": "minimist",
      "package": Object {
        "name": "minimist",
        "version": "1.2.0",
      },
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
    },
    "minipass" => Node {
      "children": Map {
        "yallist" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/minipass",
              "name": "yallist",
              "spec": "^4.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/minipass/node_modules/yallist",
          "name": "yallist",
          "package": Object {
            "name": "yallist",
            "version": "4.0.0",
          },
          "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap-parser",
          "name": "minipass",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "yallist" => Edge {
          "name": "yallist",
          "spec": "^4.0.0",
          "to": "node_modules/minipass/node_modules/yallist",
          "type": "prod",
        },
      },
      "location": "node_modules/minipass",
      "name": "minipass",
      "package": Object {
        "name": "minipass",
        "version": "3.1.1",
      },
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.1.1.tgz",
    },
    "mkdirp" => Node {
      "children": Map {
        "minimist" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/mkdirp",
              "name": "minimist",
              "spec": "0.0.8",
              "type": "prod",
            },
          },
          "location": "node_modules/mkdirp/node_modules/minimist",
          "name": "minimist",
          "package": Object {
            "name": "minimist",
            "version": "0.0.8",
          },
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/spawn-wrap",
          "name": "mkdirp",
          "spec": "^0.5.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "mkdirp",
          "spec": "^0.5.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "minimist" => Edge {
          "name": "minimist",
          "spec": "0.0.8",
          "to": "node_modules/mkdirp/node_modules/minimist",
          "type": "prod",
        },
      },
      "location": "node_modules/mkdirp",
      "name": "mkdirp",
      "package": Object {
        "name": "mkdirp",
        "version": "0.5.1",
      },
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz",
    },
    "ms" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/debug",
          "name": "ms",
          "spec": "^2.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/ms",
      "name": "ms",
      "package": Object {
        "name": "ms",
        "version": "2.1.2",
      },
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
    },
    "neo-async" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/handlebars",
          "name": "neo-async",
          "spec": "^2.6.0",
          "type": "prod",
        },
      },
      "location": "node_modules/neo-async",
      "name": "neo-async",
      "package": Object {
        "name": "neo-async",
        "version": "2.6.1",
      },
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.1.tgz",
    },
    "nested-error-stacks" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cp-file",
          "name": "nested-error-stacks",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/nested-error-stacks",
      "name": "nested-error-stacks",
      "package": Object {
        "name": "nested-error-stacks",
        "version": "2.1.0",
      },
      "resolved": "https://registry.npmjs.org/nested-error-stacks/-/nested-error-stacks-2.1.0.tgz",
    },
    "nice-try" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "name": "nice-try",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "location": "node_modules/nice-try",
      "name": "nice-try",
      "package": Object {
        "name": "nice-try",
        "version": "1.0.5",
      },
      "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
    },
    "node-modules-regexp" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/pirates",
          "name": "node-modules-regexp",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/node-modules-regexp",
      "name": "node-modules-regexp",
      "package": Object {
        "name": "node-modules-regexp",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/node-modules-regexp/-/node-modules-regexp-1.0.0.tgz",
    },
    "normalize-package-data" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/read-pkg",
          "name": "normalize-package-data",
          "spec": "^2.3.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "hosted-git-info" => Edge {
          "name": "hosted-git-info",
          "spec": "^2.1.4",
          "to": "node_modules/hosted-git-info",
          "type": "prod",
        },
        "resolve" => Edge {
          "name": "resolve",
          "spec": "^1.10.0",
          "to": "node_modules/resolve",
          "type": "prod",
        },
        "semver" => Edge {
          "name": "semver",
          "spec": "2 || 3 || 4 || 5",
          "to": "node_modules/semver",
          "type": "prod",
        },
        "validate-npm-package-license" => Edge {
          "name": "validate-npm-package-license",
          "spec": "^3.0.1",
          "to": "node_modules/validate-npm-package-license",
          "type": "prod",
        },
      },
      "location": "node_modules/normalize-package-data",
      "name": "normalize-package-data",
      "package": Object {
        "name": "normalize-package-data",
        "version": "2.5.0",
      },
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
    },
    "normalize-path" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/anymatch",
          "name": "normalize-path",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/chokidar",
          "name": "normalize-path",
          "spec": "~3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/normalize-path",
      "name": "normalize-path",
      "package": Object {
        "name": "normalize-path",
        "version": "3.0.0",
      },
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
    },
    "number-is-nan" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/wrap-ansi/node_modules/is-fullwidth-code-point",
          "name": "number-is-nan",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/number-is-nan",
      "name": "number-is-nan",
      "package": Object {
        "name": "number-is-nan",
        "version": "1.0.1",
      },
      "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
    },
    "nyc" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "nyc",
          "spec": "^14.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "archy" => Edge {
          "name": "archy",
          "spec": "^1.0.0",
          "to": "node_modules/archy",
          "type": "prod",
        },
        "caching-transform" => Edge {
          "name": "caching-transform",
          "spec": "^3.0.2",
          "to": "node_modules/caching-transform",
          "type": "prod",
        },
        "convert-source-map" => Edge {
          "name": "convert-source-map",
          "spec": "^1.6.0",
          "to": "node_modules/convert-source-map",
          "type": "prod",
        },
        "cp-file" => Edge {
          "name": "cp-file",
          "spec": "^6.2.0",
          "to": "node_modules/cp-file",
          "type": "prod",
        },
        "find-cache-dir" => Edge {
          "name": "find-cache-dir",
          "spec": "^2.1.0",
          "to": "node_modules/find-cache-dir",
          "type": "prod",
        },
        "find-up" => Edge {
          "name": "find-up",
          "spec": "^3.0.0",
          "to": "node_modules/find-up",
          "type": "prod",
        },
        "foreground-child" => Edge {
          "name": "foreground-child",
          "spec": "^1.5.6",
          "to": "node_modules/foreground-child",
          "type": "prod",
        },
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "prod",
        },
        "istanbul-lib-coverage" => Edge {
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "to": "node_modules/istanbul-lib-coverage",
          "type": "prod",
        },
        "istanbul-lib-hook" => Edge {
          "name": "istanbul-lib-hook",
          "spec": "^2.0.7",
          "to": "node_modules/istanbul-lib-hook",
          "type": "prod",
        },
        "istanbul-lib-instrument" => Edge {
          "name": "istanbul-lib-instrument",
          "spec": "^3.3.0",
          "to": "node_modules/istanbul-lib-instrument",
          "type": "prod",
        },
        "istanbul-lib-report" => Edge {
          "name": "istanbul-lib-report",
          "spec": "^2.0.8",
          "to": "node_modules/istanbul-lib-report",
          "type": "prod",
        },
        "istanbul-lib-source-maps" => Edge {
          "name": "istanbul-lib-source-maps",
          "spec": "^3.0.6",
          "to": "node_modules/istanbul-lib-source-maps",
          "type": "prod",
        },
        "istanbul-reports" => Edge {
          "name": "istanbul-reports",
          "spec": "^2.2.4",
          "to": "node_modules/istanbul-reports",
          "type": "prod",
        },
        "js-yaml" => Edge {
          "name": "js-yaml",
          "spec": "^3.13.1",
          "to": "node_modules/js-yaml",
          "type": "prod",
        },
        "make-dir" => Edge {
          "name": "make-dir",
          "spec": "^2.1.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "merge-source-map" => Edge {
          "name": "merge-source-map",
          "spec": "^1.1.0",
          "to": "node_modules/merge-source-map",
          "type": "prod",
        },
        "resolve-from" => Edge {
          "name": "resolve-from",
          "spec": "^4.0.0",
          "to": "node_modules/resolve-from",
          "type": "prod",
        },
        "rimraf" => Edge {
          "name": "rimraf",
          "spec": "^2.6.3",
          "to": "node_modules/rimraf",
          "type": "prod",
        },
        "signal-exit" => Edge {
          "name": "signal-exit",
          "spec": "^3.0.2",
          "to": "node_modules/signal-exit",
          "type": "prod",
        },
        "spawn-wrap" => Edge {
          "name": "spawn-wrap",
          "spec": "^1.4.2",
          "to": "node_modules/spawn-wrap",
          "type": "prod",
        },
        "test-exclude" => Edge {
          "name": "test-exclude",
          "spec": "^5.2.3",
          "to": "node_modules/test-exclude",
          "type": "prod",
        },
        "uuid" => Edge {
          "name": "uuid",
          "spec": "^3.3.2",
          "to": "node_modules/uuid",
          "type": "prod",
        },
        "yargs" => Edge {
          "name": "yargs",
          "spec": "^13.2.2",
          "to": "node_modules/yargs",
          "type": "prod",
        },
        "yargs-parser" => Edge {
          "name": "yargs-parser",
          "spec": "^13.0.0",
          "to": "node_modules/yargs-parser",
          "type": "prod",
        },
      },
      "location": "node_modules/nyc",
      "name": "nyc",
      "package": Object {
        "name": "nyc",
        "version": "14.1.1",
      },
      "resolved": "https://registry.npmjs.org/nyc/-/nyc-14.1.1.tgz",
    },
    "oauth-sign" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "oauth-sign",
          "spec": "~0.9.0",
          "type": "prod",
        },
      },
      "location": "node_modules/oauth-sign",
      "name": "oauth-sign",
      "package": Object {
        "name": "oauth-sign",
        "version": "0.9.0",
      },
      "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
    },
    "object-assign" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/prop-types",
          "name": "object-assign",
          "spec": "^4.1.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/react",
          "name": "object-assign",
          "spec": "^4.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/object-assign",
      "name": "object-assign",
      "package": Object {
        "name": "object-assign",
        "version": "4.1.1",
      },
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
    },
    "once" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "package": Object {
        "name": "once",
        "version": "1.4.0",
      },
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
    },
    "opener" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "opener",
          "spec": "^1.5.1",
          "type": "prod",
        },
      },
      "location": "node_modules/opener",
      "name": "opener",
      "package": Object {
        "name": "opener",
        "version": "1.5.1",
      },
      "resolved": "https://registry.npmjs.org/opener/-/opener-1.5.1.tgz",
    },
    "optimist" => Node {
      "children": Map {
        "minimist" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/optimist",
              "name": "minimist",
              "spec": "~0.0.1",
              "type": "prod",
            },
          },
          "location": "node_modules/optimist/node_modules/minimist",
          "name": "minimist",
          "package": Object {
            "name": "minimist",
            "version": "0.0.10",
          },
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.10.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/handlebars",
          "name": "optimist",
          "spec": "^0.6.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "minimist" => Edge {
          "name": "minimist",
          "spec": "~0.0.1",
          "to": "node_modules/optimist/node_modules/minimist",
          "type": "prod",
        },
        "wordwrap" => Edge {
          "name": "wordwrap",
          "spec": "~0.0.2",
          "to": "node_modules/wordwrap",
          "type": "prod",
        },
      },
      "location": "node_modules/optimist",
      "name": "optimist",
      "package": Object {
        "name": "optimist",
        "version": "0.6.1",
      },
      "resolved": "https://registry.npmjs.org/optimist/-/optimist-0.6.1.tgz",
    },
    "os-homedir" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/spawn-wrap",
          "name": "os-homedir",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/os-homedir",
      "name": "os-homedir",
      "package": Object {
        "name": "os-homedir",
        "version": "1.0.2",
      },
      "resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
    },
    "own-or" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/own-or-env",
          "name": "own-or",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "own-or",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/own-or",
      "name": "own-or",
      "package": Object {
        "name": "own-or",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/own-or/-/own-or-1.0.0.tgz",
    },
    "own-or-env" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "own-or-env",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "own-or" => Edge {
          "name": "own-or",
          "spec": "^1.0.0",
          "to": "node_modules/own-or",
          "type": "prod",
        },
      },
      "location": "node_modules/own-or-env",
      "name": "own-or-env",
      "package": Object {
        "name": "own-or-env",
        "version": "1.0.1",
      },
      "resolved": "https://registry.npmjs.org/own-or-env/-/own-or-env-1.0.1.tgz",
    },
    "p-limit" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/p-locate",
          "name": "p-limit",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "p-try" => Edge {
          "name": "p-try",
          "spec": "^2.0.0",
          "to": "node_modules/p-try",
          "type": "prod",
        },
      },
      "location": "node_modules/p-limit",
      "name": "p-limit",
      "package": Object {
        "name": "p-limit",
        "version": "2.2.1",
      },
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.2.1.tgz",
    },
    "p-locate" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/locate-path",
          "name": "p-locate",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "p-limit" => Edge {
          "name": "p-limit",
          "spec": "^2.0.0",
          "to": "node_modules/p-limit",
          "type": "prod",
        },
      },
      "location": "node_modules/p-locate",
      "name": "p-locate",
      "package": Object {
        "name": "p-locate",
        "version": "3.0.0",
      },
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
    },
    "p-try" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/p-limit",
          "name": "p-try",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/p-try",
      "name": "p-try",
      "package": Object {
        "name": "p-try",
        "version": "2.2.0",
      },
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
    },
    "package-hash" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/caching-transform",
          "name": "package-hash",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "graceful-fs" => Edge {
          "name": "graceful-fs",
          "spec": "^4.1.15",
          "to": "node_modules/graceful-fs",
          "type": "prod",
        },
        "hasha" => Edge {
          "name": "hasha",
          "spec": "^3.0.0",
          "to": "node_modules/hasha",
          "type": "prod",
        },
        "lodash.flattendeep" => Edge {
          "name": "lodash.flattendeep",
          "spec": "^4.4.0",
          "to": "node_modules/lodash.flattendeep",
          "type": "prod",
        },
        "release-zalgo" => Edge {
          "name": "release-zalgo",
          "spec": "^1.0.0",
          "to": "node_modules/release-zalgo",
          "type": "prod",
        },
      },
      "location": "node_modules/package-hash",
      "name": "package-hash",
      "package": Object {
        "name": "package-hash",
        "version": "3.0.0",
      },
      "resolved": "https://registry.npmjs.org/package-hash/-/package-hash-3.0.0.tgz",
    },
    "parse-json" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/load-json-file",
          "name": "parse-json",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "error-ex" => Edge {
          "name": "error-ex",
          "spec": "^1.3.1",
          "to": "node_modules/error-ex",
          "type": "prod",
        },
        "json-parse-better-errors" => Edge {
          "name": "json-parse-better-errors",
          "spec": "^1.0.1",
          "to": "node_modules/json-parse-better-errors",
          "type": "prod",
        },
      },
      "location": "node_modules/parse-json",
      "name": "parse-json",
      "package": Object {
        "name": "parse-json",
        "version": "4.0.0",
      },
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
    },
    "path-exists" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/locate-path",
          "name": "path-exists",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-exists",
      "name": "path-exists",
      "package": Object {
        "name": "path-exists",
        "version": "3.0.0",
      },
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
    },
    "path-is-absolute" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "package": Object {
        "name": "path-is-absolute",
        "version": "1.0.1",
      },
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
    },
    "path-key" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "name": "path-key",
          "spec": "^2.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/path-key",
      "name": "path-key",
      "package": Object {
        "name": "path-key",
        "version": "2.0.1",
      },
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
    },
    "path-parse" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/resolve",
          "name": "path-parse",
          "spec": "^1.0.6",
          "type": "prod",
        },
      },
      "location": "node_modules/path-parse",
      "name": "path-parse",
      "package": Object {
        "name": "path-parse",
        "version": "1.0.6",
      },
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
    },
    "path-type" => Node {
      "children": Map {
        "pify" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/path-type",
              "name": "pify",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/path-type/node_modules/pify",
          "name": "pify",
          "package": Object {
            "name": "pify",
            "version": "3.0.0",
          },
          "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/read-pkg",
          "name": "path-type",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "pify" => Edge {
          "name": "pify",
          "spec": "^3.0.0",
          "to": "node_modules/path-type/node_modules/pify",
          "type": "prod",
        },
      },
      "location": "node_modules/path-type",
      "name": "path-type",
      "package": Object {
        "name": "path-type",
        "version": "3.0.0",
      },
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
    },
    "performance-now" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "performance-now",
          "spec": "^2.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/performance-now",
      "name": "performance-now",
      "package": Object {
        "name": "performance-now",
        "version": "2.1.0",
      },
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
    },
    "picomatch" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/anymatch",
          "name": "picomatch",
          "spec": "^2.0.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/readdirp",
          "name": "picomatch",
          "spec": "^2.0.7",
          "type": "prod",
        },
      },
      "location": "node_modules/picomatch",
      "name": "picomatch",
      "package": Object {
        "name": "picomatch",
        "version": "2.1.1",
      },
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.1.1.tgz",
    },
    "pify" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cp-file",
          "name": "pify",
          "spec": "^4.0.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/make-dir",
          "name": "pify",
          "spec": "^4.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/pify",
      "name": "pify",
      "package": Object {
        "name": "pify",
        "version": "4.0.1",
      },
      "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
    },
    "pirates" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/flow-remove-types",
          "name": "pirates",
          "spec": "^3.0.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "node-modules-regexp" => Edge {
          "name": "node-modules-regexp",
          "spec": "^1.0.0",
          "to": "node_modules/node-modules-regexp",
          "type": "prod",
        },
      },
      "location": "node_modules/pirates",
      "name": "pirates",
      "package": Object {
        "name": "pirates",
        "version": "3.0.2",
      },
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-3.0.2.tgz",
    },
    "pkg-dir" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/find-cache-dir",
          "name": "pkg-dir",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "find-up" => Edge {
          "name": "find-up",
          "spec": "^3.0.0",
          "to": "node_modules/find-up",
          "type": "prod",
        },
      },
      "location": "node_modules/pkg-dir",
      "name": "pkg-dir",
      "package": Object {
        "name": "pkg-dir",
        "version": "3.0.0",
      },
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
    },
    "process-nextick-args" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/readable-stream",
          "name": "process-nextick-args",
          "spec": "~2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/process-nextick-args",
      "name": "process-nextick-args",
      "optional": true,
      "package": Object {
        "name": "process-nextick-args",
        "version": "2.0.1",
      },
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
    },
    "prop-types" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/react",
          "name": "prop-types",
          "spec": "^15.6.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "loose-envify" => Edge {
          "name": "loose-envify",
          "spec": "^1.4.0",
          "to": "node_modules/loose-envify",
          "type": "prod",
        },
        "object-assign" => Edge {
          "name": "object-assign",
          "spec": "^4.1.1",
          "to": "node_modules/object-assign",
          "type": "prod",
        },
        "react-is" => Edge {
          "name": "react-is",
          "spec": "^16.8.1",
          "to": "node_modules/react-is",
          "type": "prod",
        },
      },
      "location": "node_modules/prop-types",
      "name": "prop-types",
      "package": Object {
        "name": "prop-types",
        "version": "15.7.2",
      },
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.7.2.tgz",
    },
    "pseudomap" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/lru-cache",
          "name": "pseudomap",
          "spec": "^1.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/pseudomap",
      "name": "pseudomap",
      "package": Object {
        "name": "pseudomap",
        "version": "1.0.2",
      },
      "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
    },
    "psl" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tough-cookie",
          "name": "psl",
          "spec": "^1.1.24",
          "type": "prod",
        },
      },
      "location": "node_modules/psl",
      "name": "psl",
      "package": Object {
        "name": "psl",
        "version": "1.7.0",
      },
      "resolved": "https://registry.npmjs.org/psl/-/psl-1.7.0.tgz",
    },
    "punycode" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/uri-js",
          "name": "punycode",
          "spec": "^2.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/punycode",
      "name": "punycode",
      "package": Object {
        "name": "punycode",
        "version": "2.1.1",
      },
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
    },
    "qs" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "qs",
          "spec": "~6.5.2",
          "type": "prod",
        },
      },
      "location": "node_modules/qs",
      "name": "qs",
      "package": Object {
        "name": "qs",
        "version": "6.5.2",
      },
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
    },
    "react" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "react",
          "spec": "^16.12.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "loose-envify" => Edge {
          "name": "loose-envify",
          "spec": "^1.1.0",
          "to": "node_modules/loose-envify",
          "type": "prod",
        },
        "object-assign" => Edge {
          "name": "object-assign",
          "spec": "^4.1.1",
          "to": "node_modules/object-assign",
          "type": "prod",
        },
        "prop-types" => Edge {
          "name": "prop-types",
          "spec": "^15.6.2",
          "to": "node_modules/prop-types",
          "type": "prod",
        },
      },
      "location": "node_modules/react",
      "name": "react",
      "package": Object {
        "name": "react",
        "version": "16.12.0",
      },
      "resolved": "https://registry.npmjs.org/react/-/react-16.12.0.tgz",
    },
    "react-is" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/prop-types",
          "name": "react-is",
          "spec": "^16.8.1",
          "type": "prod",
        },
      },
      "location": "node_modules/react-is",
      "name": "react-is",
      "package": Object {
        "name": "react-is",
        "version": "16.12.0",
      },
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.12.0.tgz",
    },
    "read-pkg" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/read-pkg-up",
          "name": "read-pkg",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "load-json-file" => Edge {
          "name": "load-json-file",
          "spec": "^4.0.0",
          "to": "node_modules/load-json-file",
          "type": "prod",
        },
        "normalize-package-data" => Edge {
          "name": "normalize-package-data",
          "spec": "^2.3.2",
          "to": "node_modules/normalize-package-data",
          "type": "prod",
        },
        "path-type" => Edge {
          "name": "path-type",
          "spec": "^3.0.0",
          "to": "node_modules/path-type",
          "type": "prod",
        },
      },
      "location": "node_modules/read-pkg",
      "name": "read-pkg",
      "package": Object {
        "name": "read-pkg",
        "version": "3.0.0",
      },
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
    },
    "read-pkg-up" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/test-exclude",
          "name": "read-pkg-up",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "find-up" => Edge {
          "name": "find-up",
          "spec": "^3.0.0",
          "to": "node_modules/find-up",
          "type": "prod",
        },
        "read-pkg" => Edge {
          "name": "read-pkg",
          "spec": "^3.0.0",
          "to": "node_modules/read-pkg",
          "type": "prod",
        },
      },
      "location": "node_modules/read-pkg-up",
      "name": "read-pkg-up",
      "package": Object {
        "name": "read-pkg-up",
        "version": "4.0.0",
      },
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-4.0.0.tgz",
    },
    "readable-stream" => Node {
      "children": Map {
        "safe-buffer" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/readable-stream",
              "name": "safe-buffer",
              "spec": "~5.1.1",
              "type": "prod",
            },
          },
          "location": "node_modules/readable-stream/node_modules/safe-buffer",
          "name": "safe-buffer",
          "optional": true,
          "package": Object {
            "name": "safe-buffer",
            "version": "5.1.2",
          },
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap-mocha-reporter",
          "name": "readable-stream",
          "spec": "^2.1.5",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "core-util-is" => Edge {
          "name": "core-util-is",
          "spec": "~1.0.0",
          "to": "node_modules/core-util-is",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "~2.0.3",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "isarray" => Edge {
          "name": "isarray",
          "spec": "~1.0.0",
          "to": "node_modules/isarray",
          "type": "prod",
        },
        "process-nextick-args" => Edge {
          "name": "process-nextick-args",
          "spec": "~2.0.0",
          "to": "node_modules/process-nextick-args",
          "type": "prod",
        },
        "safe-buffer" => Edge {
          "name": "safe-buffer",
          "spec": "~5.1.1",
          "to": "node_modules/readable-stream/node_modules/safe-buffer",
          "type": "prod",
        },
        "string_decoder" => Edge {
          "name": "string_decoder",
          "spec": "~1.1.1",
          "to": "node_modules/string_decoder",
          "type": "prod",
        },
        "util-deprecate" => Edge {
          "name": "util-deprecate",
          "spec": "~1.0.1",
          "to": "node_modules/util-deprecate",
          "type": "prod",
        },
      },
      "location": "node_modules/readable-stream",
      "name": "readable-stream",
      "optional": true,
      "package": Object {
        "name": "readable-stream",
        "version": "2.3.6",
      },
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
    },
    "readdirp" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chokidar",
          "name": "readdirp",
          "spec": "~3.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "picomatch" => Edge {
          "name": "picomatch",
          "spec": "^2.0.7",
          "to": "node_modules/picomatch",
          "type": "prod",
        },
      },
      "location": "node_modules/readdirp",
      "name": "readdirp",
      "package": Object {
        "name": "readdirp",
        "version": "3.3.0",
      },
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.3.0.tgz",
    },
    "regenerator-runtime" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/runtime",
          "name": "regenerator-runtime",
          "spec": "^0.13.2",
          "type": "prod",
        },
      },
      "location": "node_modules/regenerator-runtime",
      "name": "regenerator-runtime",
      "package": Object {
        "name": "regenerator-runtime",
        "version": "0.13.3",
      },
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.3.tgz",
    },
    "release-zalgo" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/package-hash",
          "name": "release-zalgo",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "es6-error" => Edge {
          "name": "es6-error",
          "spec": "^4.0.1",
          "to": "node_modules/es6-error",
          "type": "prod",
        },
      },
      "location": "node_modules/release-zalgo",
      "name": "release-zalgo",
      "package": Object {
        "name": "release-zalgo",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/release-zalgo/-/release-zalgo-1.0.0.tgz",
    },
    "request" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/coveralls",
          "name": "request",
          "spec": "^2.88.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "aws-sign2" => Edge {
          "name": "aws-sign2",
          "spec": "~0.7.0",
          "to": "node_modules/aws-sign2",
          "type": "prod",
        },
        "aws4" => Edge {
          "name": "aws4",
          "spec": "^1.8.0",
          "to": "node_modules/aws4",
          "type": "prod",
        },
        "caseless" => Edge {
          "name": "caseless",
          "spec": "~0.12.0",
          "to": "node_modules/caseless",
          "type": "prod",
        },
        "combined-stream" => Edge {
          "name": "combined-stream",
          "spec": "~1.0.6",
          "to": "node_modules/combined-stream",
          "type": "prod",
        },
        "extend" => Edge {
          "name": "extend",
          "spec": "~3.0.2",
          "to": "node_modules/extend",
          "type": "prod",
        },
        "forever-agent" => Edge {
          "name": "forever-agent",
          "spec": "~0.6.1",
          "to": "node_modules/forever-agent",
          "type": "prod",
        },
        "form-data" => Edge {
          "name": "form-data",
          "spec": "~2.3.2",
          "to": "node_modules/form-data",
          "type": "prod",
        },
        "har-validator" => Edge {
          "name": "har-validator",
          "spec": "~5.1.0",
          "to": "node_modules/har-validator",
          "type": "prod",
        },
        "http-signature" => Edge {
          "name": "http-signature",
          "spec": "~1.2.0",
          "to": "node_modules/http-signature",
          "type": "prod",
        },
        "is-typedarray" => Edge {
          "name": "is-typedarray",
          "spec": "~1.0.0",
          "to": "node_modules/is-typedarray",
          "type": "prod",
        },
        "isstream" => Edge {
          "name": "isstream",
          "spec": "~0.1.2",
          "to": "node_modules/isstream",
          "type": "prod",
        },
        "json-stringify-safe" => Edge {
          "name": "json-stringify-safe",
          "spec": "~5.0.1",
          "to": "node_modules/json-stringify-safe",
          "type": "prod",
        },
        "mime-types" => Edge {
          "name": "mime-types",
          "spec": "~2.1.19",
          "to": "node_modules/mime-types",
          "type": "prod",
        },
        "oauth-sign" => Edge {
          "name": "oauth-sign",
          "spec": "~0.9.0",
          "to": "node_modules/oauth-sign",
          "type": "prod",
        },
        "performance-now" => Edge {
          "name": "performance-now",
          "spec": "^2.1.0",
          "to": "node_modules/performance-now",
          "type": "prod",
        },
        "qs" => Edge {
          "name": "qs",
          "spec": "~6.5.2",
          "to": "node_modules/qs",
          "type": "prod",
        },
        "safe-buffer" => Edge {
          "name": "safe-buffer",
          "spec": "^5.1.2",
          "to": "node_modules/safe-buffer",
          "type": "prod",
        },
        "tough-cookie" => Edge {
          "name": "tough-cookie",
          "spec": "~2.4.3",
          "to": "node_modules/tough-cookie",
          "type": "prod",
        },
        "tunnel-agent" => Edge {
          "name": "tunnel-agent",
          "spec": "^0.6.0",
          "to": "node_modules/tunnel-agent",
          "type": "prod",
        },
        "uuid" => Edge {
          "name": "uuid",
          "spec": "^3.3.2",
          "to": "node_modules/uuid",
          "type": "prod",
        },
      },
      "location": "node_modules/request",
      "name": "request",
      "package": Object {
        "name": "request",
        "version": "2.88.0",
      },
      "resolved": "https://registry.npmjs.org/request/-/request-2.88.0.tgz",
    },
    "require-directory" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yargs",
          "name": "require-directory",
          "spec": "^2.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/require-directory",
      "name": "require-directory",
      "package": Object {
        "name": "require-directory",
        "version": "2.1.1",
      },
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
    },
    "require-main-filename" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/test-exclude",
          "name": "require-main-filename",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/yargs",
          "name": "require-main-filename",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/require-main-filename",
      "name": "require-main-filename",
      "package": Object {
        "name": "require-main-filename",
        "version": "2.0.0",
      },
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
    },
    "resolve" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/normalize-package-data",
          "name": "resolve",
          "spec": "^1.10.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "path-parse" => Edge {
          "name": "path-parse",
          "spec": "^1.0.6",
          "to": "node_modules/path-parse",
          "type": "prod",
        },
      },
      "location": "node_modules/resolve",
      "name": "resolve",
      "package": Object {
        "name": "resolve",
        "version": "1.14.1",
      },
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.14.1.tgz",
    },
    "resolve-from" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "resolve-from",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/resolve-from",
      "name": "resolve-from",
      "package": Object {
        "name": "resolve-from",
        "version": "4.0.0",
      },
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
    },
    "rimraf" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-processinfo",
          "name": "rimraf",
          "spec": "^2.6.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-source-maps",
          "name": "rimraf",
          "spec": "^2.6.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/nyc",
          "name": "rimraf",
          "spec": "^2.6.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/spawn-wrap",
          "name": "rimraf",
          "spec": "^2.6.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "rimraf",
          "spec": "^2.7.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "prod",
        },
      },
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "package": Object {
        "name": "rimraf",
        "version": "2.7.1",
      },
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
    },
    "safe-buffer" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cp-file",
          "name": "safe-buffer",
          "spec": "^5.0.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/request",
          "name": "safe-buffer",
          "spec": "^5.1.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tunnel-agent",
          "name": "safe-buffer",
          "spec": "^5.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/safe-buffer",
      "name": "safe-buffer",
      "package": Object {
        "name": "safe-buffer",
        "version": "5.2.0",
      },
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.0.tgz",
    },
    "safer-buffer" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/asn1",
          "name": "safer-buffer",
          "spec": "~2.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/ecc-jsbn",
          "name": "safer-buffer",
          "spec": "^2.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/sshpk",
          "name": "safer-buffer",
          "spec": "^2.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/safer-buffer",
      "name": "safer-buffer",
      "package": Object {
        "name": "safer-buffer",
        "version": "2.1.2",
      },
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
    },
    "semver" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "name": "semver",
          "spec": "^5.5.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/make-dir",
          "name": "semver",
          "spec": "^5.6.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/normalize-package-data",
          "name": "semver",
          "spec": "2 || 3 || 4 || 5",
          "type": "prod",
        },
      },
      "location": "node_modules/semver",
      "name": "semver",
      "package": Object {
        "name": "semver",
        "version": "5.7.1",
      },
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
    },
    "set-blocking" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yargs",
          "name": "set-blocking",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/set-blocking",
      "name": "set-blocking",
      "package": Object {
        "name": "set-blocking",
        "version": "2.0.0",
      },
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
    },
    "shebang-command" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "name": "shebang-command",
          "spec": "^1.2.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "shebang-regex" => Edge {
          "name": "shebang-regex",
          "spec": "^1.0.0",
          "to": "node_modules/shebang-regex",
          "type": "prod",
        },
      },
      "location": "node_modules/shebang-command",
      "name": "shebang-command",
      "package": Object {
        "name": "shebang-command",
        "version": "1.2.0",
      },
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
    },
    "shebang-regex" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/shebang-command",
          "name": "shebang-regex",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/shebang-regex",
      "name": "shebang-regex",
      "package": Object {
        "name": "shebang-regex",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
    },
    "signal-exit" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/caching-transform/node_modules/write-file-atomic",
          "name": "signal-exit",
          "spec": "^3.0.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/foreground-child",
          "name": "signal-exit",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/nyc",
          "name": "signal-exit",
          "spec": "^3.0.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/spawn-wrap",
          "name": "signal-exit",
          "spec": "^3.0.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/write-file-atomic",
          "name": "signal-exit",
          "spec": "^3.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/signal-exit",
      "name": "signal-exit",
      "package": Object {
        "name": "signal-exit",
        "version": "3.0.2",
      },
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz",
    },
    "source-map" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/handlebars",
          "name": "source-map",
          "spec": "^0.6.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-source-maps",
          "name": "source-map",
          "spec": "^0.6.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/merge-source-map",
          "name": "source-map",
          "spec": "^0.6.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/source-map-support",
          "name": "source-map",
          "spec": "^0.6.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/uglify-js",
          "name": "source-map",
          "spec": "~0.6.1",
          "type": "prod",
        },
      },
      "location": "node_modules/source-map",
      "name": "source-map",
      "package": Object {
        "name": "source-map",
        "version": "0.6.1",
      },
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
    },
    "source-map-support" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/async-hook-domain",
          "name": "source-map-support",
          "spec": "^0.5.11",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "source-map-support",
          "spec": "^0.5.16",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/ts-node",
          "name": "source-map-support",
          "spec": "^0.5.6",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "buffer-from" => Edge {
          "name": "buffer-from",
          "spec": "^1.0.0",
          "to": "node_modules/buffer-from",
          "type": "prod",
        },
        "source-map" => Edge {
          "name": "source-map",
          "spec": "^0.6.0",
          "to": "node_modules/source-map",
          "type": "prod",
        },
      },
      "location": "node_modules/source-map-support",
      "name": "source-map-support",
      "package": Object {
        "name": "source-map-support",
        "version": "0.5.16",
      },
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.16.tgz",
    },
    "spawn-wrap" => Node {
      "children": Map {
        "which" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/spawn-wrap",
              "name": "which",
              "spec": "^1.3.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "isexe" => Edge {
              "name": "isexe",
              "spec": "^2.0.0",
              "to": "node_modules/isexe",
              "type": "prod",
            },
          },
          "location": "node_modules/spawn-wrap/node_modules/which",
          "name": "which",
          "package": Object {
            "name": "which",
            "version": "1.3.1",
          },
          "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "spawn-wrap",
          "spec": "^1.4.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "foreground-child" => Edge {
          "name": "foreground-child",
          "spec": "^1.5.6",
          "to": "node_modules/foreground-child",
          "type": "prod",
        },
        "mkdirp" => Edge {
          "name": "mkdirp",
          "spec": "^0.5.0",
          "to": "node_modules/mkdirp",
          "type": "prod",
        },
        "os-homedir" => Edge {
          "name": "os-homedir",
          "spec": "^1.0.1",
          "to": "node_modules/os-homedir",
          "type": "prod",
        },
        "rimraf" => Edge {
          "name": "rimraf",
          "spec": "^2.6.2",
          "to": "node_modules/rimraf",
          "type": "prod",
        },
        "signal-exit" => Edge {
          "name": "signal-exit",
          "spec": "^3.0.2",
          "to": "node_modules/signal-exit",
          "type": "prod",
        },
        "which" => Edge {
          "name": "which",
          "spec": "^1.3.0",
          "to": "node_modules/spawn-wrap/node_modules/which",
          "type": "prod",
        },
      },
      "location": "node_modules/spawn-wrap",
      "name": "spawn-wrap",
      "package": Object {
        "name": "spawn-wrap",
        "version": "1.4.3",
      },
      "resolved": "https://registry.npmjs.org/spawn-wrap/-/spawn-wrap-1.4.3.tgz",
    },
    "spdx-correct" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/validate-npm-package-license",
          "name": "spdx-correct",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "spdx-expression-parse" => Edge {
          "name": "spdx-expression-parse",
          "spec": "^3.0.0",
          "to": "node_modules/spdx-expression-parse",
          "type": "prod",
        },
        "spdx-license-ids" => Edge {
          "name": "spdx-license-ids",
          "spec": "^3.0.0",
          "to": "node_modules/spdx-license-ids",
          "type": "prod",
        },
      },
      "location": "node_modules/spdx-correct",
      "name": "spdx-correct",
      "package": Object {
        "name": "spdx-correct",
        "version": "3.1.0",
      },
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.0.tgz",
    },
    "spdx-exceptions" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/spdx-expression-parse",
          "name": "spdx-exceptions",
          "spec": "^2.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/spdx-exceptions",
      "name": "spdx-exceptions",
      "package": Object {
        "name": "spdx-exceptions",
        "version": "2.2.0",
      },
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.2.0.tgz",
    },
    "spdx-expression-parse" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/spdx-correct",
          "name": "spdx-expression-parse",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/validate-npm-package-license",
          "name": "spdx-expression-parse",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "spdx-exceptions" => Edge {
          "name": "spdx-exceptions",
          "spec": "^2.1.0",
          "to": "node_modules/spdx-exceptions",
          "type": "prod",
        },
        "spdx-license-ids" => Edge {
          "name": "spdx-license-ids",
          "spec": "^3.0.0",
          "to": "node_modules/spdx-license-ids",
          "type": "prod",
        },
      },
      "location": "node_modules/spdx-expression-parse",
      "name": "spdx-expression-parse",
      "package": Object {
        "name": "spdx-expression-parse",
        "version": "3.0.0",
      },
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.0.tgz",
    },
    "spdx-license-ids" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/spdx-correct",
          "name": "spdx-license-ids",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/spdx-expression-parse",
          "name": "spdx-license-ids",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/spdx-license-ids",
      "name": "spdx-license-ids",
      "package": Object {
        "name": "spdx-license-ids",
        "version": "3.0.5",
      },
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.5.tgz",
    },
    "sprintf-js" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/argparse",
          "name": "sprintf-js",
          "spec": "~1.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/sprintf-js",
      "name": "sprintf-js",
      "package": Object {
        "name": "sprintf-js",
        "version": "1.0.3",
      },
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
    },
    "sshpk" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/http-signature",
          "name": "sshpk",
          "spec": "^1.7.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "asn1" => Edge {
          "name": "asn1",
          "spec": "~0.2.3",
          "to": "node_modules/asn1",
          "type": "prod",
        },
        "assert-plus" => Edge {
          "name": "assert-plus",
          "spec": "^1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
        "bcrypt-pbkdf" => Edge {
          "name": "bcrypt-pbkdf",
          "spec": "^1.0.0",
          "to": "node_modules/bcrypt-pbkdf",
          "type": "prod",
        },
        "dashdash" => Edge {
          "name": "dashdash",
          "spec": "^1.12.0",
          "to": "node_modules/dashdash",
          "type": "prod",
        },
        "ecc-jsbn" => Edge {
          "name": "ecc-jsbn",
          "spec": "~0.1.1",
          "to": "node_modules/ecc-jsbn",
          "type": "prod",
        },
        "getpass" => Edge {
          "name": "getpass",
          "spec": "^0.1.1",
          "to": "node_modules/getpass",
          "type": "prod",
        },
        "jsbn" => Edge {
          "name": "jsbn",
          "spec": "~0.1.0",
          "to": "node_modules/jsbn",
          "type": "prod",
        },
        "safer-buffer" => Edge {
          "name": "safer-buffer",
          "spec": "^2.0.2",
          "to": "node_modules/safer-buffer",
          "type": "prod",
        },
        "tweetnacl" => Edge {
          "name": "tweetnacl",
          "spec": "~0.14.0",
          "to": "node_modules/tweetnacl",
          "type": "prod",
        },
      },
      "location": "node_modules/sshpk",
      "name": "sshpk",
      "package": Object {
        "name": "sshpk",
        "version": "1.16.1",
      },
      "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
    },
    "stack-utils" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "stack-utils",
          "spec": "^1.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/stack-utils",
      "name": "stack-utils",
      "package": Object {
        "name": "stack-utils",
        "version": "1.0.2",
      },
      "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-1.0.2.tgz",
    },
    "string_decoder" => Node {
      "children": Map {
        "safe-buffer" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/string_decoder",
              "name": "safe-buffer",
              "spec": "~5.1.0",
              "type": "prod",
            },
          },
          "location": "node_modules/string_decoder/node_modules/safe-buffer",
          "name": "safe-buffer",
          "optional": true,
          "package": Object {
            "name": "safe-buffer",
            "version": "5.1.2",
          },
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/readable-stream",
          "name": "string_decoder",
          "spec": "~1.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "safe-buffer" => Edge {
          "name": "safe-buffer",
          "spec": "~5.1.0",
          "to": "node_modules/string_decoder/node_modules/safe-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/string_decoder",
      "name": "string_decoder",
      "optional": true,
      "package": Object {
        "name": "string_decoder",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
    },
    "string-width" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cliui",
          "name": "string-width",
          "spec": "^2.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-fullwidth-code-point" => Edge {
          "name": "is-fullwidth-code-point",
          "spec": "^2.0.0",
          "to": "node_modules/is-fullwidth-code-point",
          "type": "prod",
        },
        "strip-ansi" => Edge {
          "name": "strip-ansi",
          "spec": "^4.0.0",
          "to": "node_modules/strip-ansi",
          "type": "prod",
        },
      },
      "location": "node_modules/string-width",
      "name": "string-width",
      "package": Object {
        "name": "string-width",
        "version": "2.1.1",
      },
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
    },
    "strip-ansi" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cliui",
          "name": "strip-ansi",
          "spec": "^4.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/string-width",
          "name": "strip-ansi",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ansi-regex" => Edge {
          "name": "ansi-regex",
          "spec": "^3.0.0",
          "to": "node_modules/ansi-regex",
          "type": "prod",
        },
      },
      "location": "node_modules/strip-ansi",
      "name": "strip-ansi",
      "package": Object {
        "name": "strip-ansi",
        "version": "4.0.0",
      },
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
    },
    "strip-bom" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/default-require-extensions",
          "name": "strip-bom",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/load-json-file",
          "name": "strip-bom",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/strip-bom",
      "name": "strip-bom",
      "package": Object {
        "name": "strip-bom",
        "version": "3.0.0",
      },
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
    },
    "supports-color" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chalk",
          "name": "supports-color",
          "spec": "^5.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "has-flag" => Edge {
          "name": "has-flag",
          "spec": "^3.0.0",
          "to": "node_modules/has-flag",
          "type": "prod",
        },
      },
      "location": "node_modules/supports-color",
      "name": "supports-color",
      "package": Object {
        "name": "supports-color",
        "version": "5.5.0",
      },
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
    },
    "tap" => Node {
      "children": Map {
        "@babel/code-frame" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "@babel/code-frame",
              "spec": "^7.5.5",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/template",
              "name": "@babel/code-frame",
              "spec": "^7.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "@babel/code-frame",
              "spec": "^7.5.5",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/highlight" => Edge {
              "name": "@babel/highlight",
              "spec": "^7.0.0",
              "to": "node_modules/tap/node_modules/@babel/highlight",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/code-frame",
          "name": "@babel/code-frame",
          "package": Object {
            "name": "@babel/code-frame",
            "version": "7.5.5",
          },
          "resolved": null,
        },
        "@babel/core" => Node {
          "bundled": true,
          "children": Map {
            "source-map" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/@babel/core",
                  "name": "source-map",
                  "spec": "^0.5.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/@babel/core/node_modules/source-map",
              "name": "source-map",
              "package": Object {
                "name": "source-map",
                "version": "0.5.7",
              },
              "resolved": null,
            },
          },
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/import-jsx",
              "name": "@babel/core",
              "spec": "^7.5.5",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/code-frame" => Edge {
              "name": "@babel/code-frame",
              "spec": "^7.5.5",
              "to": "node_modules/tap/node_modules/@babel/code-frame",
              "type": "prod",
            },
            "@babel/generator" => Edge {
              "name": "@babel/generator",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/generator",
              "type": "prod",
            },
            "@babel/helpers" => Edge {
              "name": "@babel/helpers",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/helpers",
              "type": "prod",
            },
            "@babel/parser" => Edge {
              "name": "@babel/parser",
              "spec": "^7.7.5",
              "to": "node_modules/tap/node_modules/@babel/parser",
              "type": "prod",
            },
            "@babel/template" => Edge {
              "name": "@babel/template",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/template",
              "type": "prod",
            },
            "@babel/traverse" => Edge {
              "name": "@babel/traverse",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/traverse",
              "type": "prod",
            },
            "@babel/types" => Edge {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
            "convert-source-map" => Edge {
              "name": "convert-source-map",
              "spec": "^1.7.0",
              "to": "node_modules/tap/node_modules/convert-source-map",
              "type": "prod",
            },
            "debug" => Edge {
              "name": "debug",
              "spec": "^4.1.0",
              "to": "node_modules/tap/node_modules/debug",
              "type": "prod",
            },
            "json5" => Edge {
              "name": "json5",
              "spec": "^2.1.0",
              "to": "node_modules/tap/node_modules/json5",
              "type": "prod",
            },
            "lodash" => Edge {
              "name": "lodash",
              "spec": "^4.17.13",
              "to": "node_modules/tap/node_modules/lodash",
              "type": "prod",
            },
            "resolve" => Edge {
              "name": "resolve",
              "spec": "^1.3.2",
              "to": "node_modules/tap/node_modules/resolve",
              "type": "prod",
            },
            "semver" => Edge {
              "name": "semver",
              "spec": "^5.4.1",
              "to": "node_modules/tap/node_modules/semver",
              "type": "prod",
            },
            "source-map" => Edge {
              "name": "source-map",
              "spec": "^0.5.0",
              "to": "node_modules/tap/node_modules/@babel/core/node_modules/source-map",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/core",
          "name": "@babel/core",
          "package": Object {
            "name": "@babel/core",
            "version": "7.7.5",
          },
          "resolved": null,
        },
        "@babel/generator" => Node {
          "bundled": true,
          "children": Map {
            "source-map" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/@babel/generator",
                  "name": "source-map",
                  "spec": "^0.5.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/@babel/generator/node_modules/source-map",
              "name": "source-map",
              "package": Object {
                "name": "source-map",
                "version": "0.5.7",
              },
              "resolved": null,
            },
          },
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "@babel/generator",
              "spec": "^7.7.4",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "@babel/generator",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/types" => Edge {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
            "jsesc" => Edge {
              "name": "jsesc",
              "spec": "^2.5.1",
              "to": "node_modules/tap/node_modules/jsesc",
              "type": "prod",
            },
            "lodash" => Edge {
              "name": "lodash",
              "spec": "^4.17.13",
              "to": "node_modules/tap/node_modules/lodash",
              "type": "prod",
            },
            "source-map" => Edge {
              "name": "source-map",
              "spec": "^0.5.0",
              "to": "node_modules/tap/node_modules/@babel/generator/node_modules/source-map",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/generator",
          "name": "@babel/generator",
          "package": Object {
            "name": "@babel/generator",
            "version": "7.7.4",
          },
          "resolved": null,
        },
        "@babel/helper-builder-react-jsx" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/plugin-transform-react-jsx",
              "name": "@babel/helper-builder-react-jsx",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/types" => Edge {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
            "esutils" => Edge {
              "name": "esutils",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/esutils",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/helper-builder-react-jsx",
          "name": "@babel/helper-builder-react-jsx",
          "package": Object {
            "name": "@babel/helper-builder-react-jsx",
            "version": "7.7.4",
          },
          "resolved": null,
        },
        "@babel/helper-function-name" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "@babel/helper-function-name",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/helper-get-function-arity" => Edge {
              "name": "@babel/helper-get-function-arity",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/helper-get-function-arity",
              "type": "prod",
            },
            "@babel/template" => Edge {
              "name": "@babel/template",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/template",
              "type": "prod",
            },
            "@babel/types" => Edge {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/helper-function-name",
          "name": "@babel/helper-function-name",
          "package": Object {
            "name": "@babel/helper-function-name",
            "version": "7.7.4",
          },
          "resolved": null,
        },
        "@babel/helper-get-function-arity" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/helper-function-name",
              "name": "@babel/helper-get-function-arity",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/types" => Edge {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/helper-get-function-arity",
          "name": "@babel/helper-get-function-arity",
          "package": Object {
            "name": "@babel/helper-get-function-arity",
            "version": "7.7.4",
          },
          "resolved": null,
        },
        "@babel/helper-plugin-utils" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/plugin-proposal-object-rest-spread",
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/plugin-syntax-jsx",
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/plugin-syntax-object-rest-spread",
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/plugin-transform-destructuring",
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/plugin-transform-react-jsx",
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/helper-plugin-utils",
          "name": "@babel/helper-plugin-utils",
          "package": Object {
            "name": "@babel/helper-plugin-utils",
            "version": "7.0.0",
          },
          "resolved": null,
        },
        "@babel/helper-split-export-declaration" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "@babel/helper-split-export-declaration",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/types" => Edge {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/helper-split-export-declaration",
          "name": "@babel/helper-split-export-declaration",
          "package": Object {
            "name": "@babel/helper-split-export-declaration",
            "version": "7.7.4",
          },
          "resolved": null,
        },
        "@babel/helpers" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "@babel/helpers",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/template" => Edge {
              "name": "@babel/template",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/template",
              "type": "prod",
            },
            "@babel/traverse" => Edge {
              "name": "@babel/traverse",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/traverse",
              "type": "prod",
            },
            "@babel/types" => Edge {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/helpers",
          "name": "@babel/helpers",
          "package": Object {
            "name": "@babel/helpers",
            "version": "7.7.4",
          },
          "resolved": null,
        },
        "@babel/highlight" => Node {
          "bundled": true,
          "children": Map {
            "chalk" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/@babel/highlight",
                  "name": "chalk",
                  "spec": "^2.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "ansi-styles" => Edge {
                  "name": "ansi-styles",
                  "spec": "^3.2.1",
                  "to": "node_modules/tap/node_modules/ansi-styles",
                  "type": "prod",
                },
                "escape-string-regexp" => Edge {
                  "name": "escape-string-regexp",
                  "spec": "^1.0.5",
                  "to": "node_modules/tap/node_modules/escape-string-regexp",
                  "type": "prod",
                },
                "supports-color" => Edge {
                  "name": "supports-color",
                  "spec": "^5.3.0",
                  "to": "node_modules/tap/node_modules/@babel/highlight/node_modules/supports-color",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/@babel/highlight/node_modules/chalk",
              "name": "chalk",
              "package": Object {
                "name": "chalk",
                "version": "2.4.2",
              },
              "resolved": null,
            },
            "supports-color" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/@babel/highlight/node_modules/chalk",
                  "name": "supports-color",
                  "spec": "^5.3.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "has-flag" => Edge {
                  "name": "has-flag",
                  "spec": "^3.0.0",
                  "to": "node_modules/tap/node_modules/has-flag",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/@babel/highlight/node_modules/supports-color",
              "name": "supports-color",
              "package": Object {
                "name": "supports-color",
                "version": "5.5.0",
              },
              "resolved": null,
            },
          },
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/code-frame",
              "name": "@babel/highlight",
              "spec": "^7.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "chalk" => Edge {
              "name": "chalk",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/@babel/highlight/node_modules/chalk",
              "type": "prod",
            },
            "esutils" => Edge {
              "name": "esutils",
              "spec": "^2.0.2",
              "to": "node_modules/tap/node_modules/esutils",
              "type": "prod",
            },
            "js-tokens" => Edge {
              "name": "js-tokens",
              "spec": "^4.0.0",
              "to": "node_modules/tap/node_modules/js-tokens",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/highlight",
          "name": "@babel/highlight",
          "package": Object {
            "name": "@babel/highlight",
            "version": "7.5.0",
          },
          "resolved": null,
        },
        "@babel/parser" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "@babel/parser",
              "spec": "^7.7.5",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/template",
              "name": "@babel/parser",
              "spec": "^7.7.4",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "@babel/parser",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/parser",
          "name": "@babel/parser",
          "package": Object {
            "name": "@babel/parser",
            "version": "7.7.5",
          },
          "resolved": null,
        },
        "@babel/plugin-proposal-object-rest-spread" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/import-jsx",
              "name": "@babel/plugin-proposal-object-rest-spread",
              "spec": "^7.5.5",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/helper-plugin-utils" => Edge {
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "to": "node_modules/tap/node_modules/@babel/helper-plugin-utils",
              "type": "prod",
            },
            "@babel/plugin-syntax-object-rest-spread" => Edge {
              "name": "@babel/plugin-syntax-object-rest-spread",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/plugin-syntax-object-rest-spread",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/plugin-proposal-object-rest-spread",
          "name": "@babel/plugin-proposal-object-rest-spread",
          "package": Object {
            "name": "@babel/plugin-proposal-object-rest-spread",
            "version": "7.7.4",
          },
          "resolved": null,
        },
        "@babel/plugin-syntax-jsx" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/plugin-transform-react-jsx",
              "name": "@babel/plugin-syntax-jsx",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/helper-plugin-utils" => Edge {
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "to": "node_modules/tap/node_modules/@babel/helper-plugin-utils",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/plugin-syntax-jsx",
          "name": "@babel/plugin-syntax-jsx",
          "package": Object {
            "name": "@babel/plugin-syntax-jsx",
            "version": "7.7.4",
          },
          "resolved": null,
        },
        "@babel/plugin-syntax-object-rest-spread" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/plugin-proposal-object-rest-spread",
              "name": "@babel/plugin-syntax-object-rest-spread",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/helper-plugin-utils" => Edge {
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "to": "node_modules/tap/node_modules/@babel/helper-plugin-utils",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/plugin-syntax-object-rest-spread",
          "name": "@babel/plugin-syntax-object-rest-spread",
          "package": Object {
            "name": "@babel/plugin-syntax-object-rest-spread",
            "version": "7.7.4",
          },
          "resolved": null,
        },
        "@babel/plugin-transform-destructuring" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/import-jsx",
              "name": "@babel/plugin-transform-destructuring",
              "spec": "^7.5.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/helper-plugin-utils" => Edge {
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "to": "node_modules/tap/node_modules/@babel/helper-plugin-utils",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/plugin-transform-destructuring",
          "name": "@babel/plugin-transform-destructuring",
          "package": Object {
            "name": "@babel/plugin-transform-destructuring",
            "version": "7.7.4",
          },
          "resolved": null,
        },
        "@babel/plugin-transform-react-jsx" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/import-jsx",
              "name": "@babel/plugin-transform-react-jsx",
              "spec": "^7.3.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/helper-builder-react-jsx" => Edge {
              "name": "@babel/helper-builder-react-jsx",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/helper-builder-react-jsx",
              "type": "prod",
            },
            "@babel/helper-plugin-utils" => Edge {
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "to": "node_modules/tap/node_modules/@babel/helper-plugin-utils",
              "type": "prod",
            },
            "@babel/plugin-syntax-jsx" => Edge {
              "name": "@babel/plugin-syntax-jsx",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/plugin-syntax-jsx",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/plugin-transform-react-jsx",
          "name": "@babel/plugin-transform-react-jsx",
          "package": Object {
            "name": "@babel/plugin-transform-react-jsx",
            "version": "7.7.4",
          },
          "resolved": null,
        },
        "@babel/runtime" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/yaml",
              "name": "@babel/runtime",
              "spec": "^7.6.3",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "regenerator-runtime" => Edge {
              "name": "regenerator-runtime",
              "spec": "^0.13.2",
              "to": "node_modules/tap/node_modules/regenerator-runtime",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/runtime",
          "name": "@babel/runtime",
          "package": Object {
            "name": "@babel/runtime",
            "version": "7.7.6",
          },
          "resolved": null,
        },
        "@babel/template" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "@babel/template",
              "spec": "^7.7.4",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/helper-function-name",
              "name": "@babel/template",
              "spec": "^7.7.4",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/helpers",
              "name": "@babel/template",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/code-frame" => Edge {
              "name": "@babel/code-frame",
              "spec": "^7.0.0",
              "to": "node_modules/tap/node_modules/@babel/code-frame",
              "type": "prod",
            },
            "@babel/parser" => Edge {
              "name": "@babel/parser",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/parser",
              "type": "prod",
            },
            "@babel/types" => Edge {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/template",
          "name": "@babel/template",
          "package": Object {
            "name": "@babel/template",
            "version": "7.7.4",
          },
          "resolved": null,
        },
        "@babel/traverse" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "@babel/traverse",
              "spec": "^7.7.4",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/helpers",
              "name": "@babel/traverse",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/code-frame" => Edge {
              "name": "@babel/code-frame",
              "spec": "^7.5.5",
              "to": "node_modules/tap/node_modules/@babel/code-frame",
              "type": "prod",
            },
            "@babel/generator" => Edge {
              "name": "@babel/generator",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/generator",
              "type": "prod",
            },
            "@babel/helper-function-name" => Edge {
              "name": "@babel/helper-function-name",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/helper-function-name",
              "type": "prod",
            },
            "@babel/helper-split-export-declaration" => Edge {
              "name": "@babel/helper-split-export-declaration",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/helper-split-export-declaration",
              "type": "prod",
            },
            "@babel/parser" => Edge {
              "name": "@babel/parser",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/parser",
              "type": "prod",
            },
            "@babel/types" => Edge {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
            "debug" => Edge {
              "name": "debug",
              "spec": "^4.1.0",
              "to": "node_modules/tap/node_modules/debug",
              "type": "prod",
            },
            "globals" => Edge {
              "name": "globals",
              "spec": "^11.1.0",
              "to": "node_modules/tap/node_modules/globals",
              "type": "prod",
            },
            "lodash" => Edge {
              "name": "lodash",
              "spec": "^4.17.13",
              "to": "node_modules/tap/node_modules/lodash",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/traverse",
          "name": "@babel/traverse",
          "package": Object {
            "name": "@babel/traverse",
            "version": "7.7.4",
          },
          "resolved": null,
        },
        "@babel/types" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/generator",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/helper-builder-react-jsx",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/helper-function-name",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/helper-get-function-arity",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/helper-split-export-declaration",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/helpers",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/template",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "esutils" => Edge {
              "name": "esutils",
              "spec": "^2.0.2",
              "to": "node_modules/tap/node_modules/esutils",
              "type": "prod",
            },
            "lodash" => Edge {
              "name": "lodash",
              "spec": "^4.17.13",
              "to": "node_modules/tap/node_modules/lodash",
              "type": "prod",
            },
            "to-fast-properties" => Edge {
              "name": "to-fast-properties",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/to-fast-properties",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/types",
          "name": "@babel/types",
          "package": Object {
            "name": "@babel/types",
            "version": "7.7.4",
          },
          "resolved": null,
        },
        "@types/color-name" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/chalk/node_modules/ansi-styles",
              "name": "@types/color-name",
              "spec": "^1.1.1",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/slice-ansi/node_modules/ansi-styles",
              "name": "@types/color-name",
              "spec": "^1.1.1",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/wrap-ansi/node_modules/ansi-styles",
              "name": "@types/color-name",
              "spec": "^1.1.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@types/color-name",
          "name": "@types/color-name",
          "package": Object {
            "name": "@types/color-name",
            "version": "1.1.1",
          },
          "resolved": null,
        },
        "@types/prop-types" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@types/react",
              "name": "@types/prop-types",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@types/prop-types",
          "name": "@types/prop-types",
          "package": Object {
            "name": "@types/prop-types",
            "version": "15.7.3",
          },
          "resolved": null,
        },
        "@types/react" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap",
              "name": "@types/react",
              "spec": "^16.9.16",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@types/prop-types" => Edge {
              "name": "@types/prop-types",
              "spec": "*",
              "to": "node_modules/tap/node_modules/@types/prop-types",
              "type": "prod",
            },
            "csstype" => Edge {
              "name": "csstype",
              "spec": "^2.2.0",
              "to": "node_modules/tap/node_modules/csstype",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@types/react",
          "name": "@types/react",
          "package": Object {
            "name": "@types/react",
            "version": "16.9.16",
          },
          "resolved": null,
        },
        "ansi-escapes" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "ansi-escapes",
              "spec": "^4.2.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "type-fest" => Edge {
              "name": "type-fest",
              "spec": "^0.8.1",
              "to": "node_modules/tap/node_modules/type-fest",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/ansi-escapes",
          "name": "ansi-escapes",
          "package": Object {
            "name": "ansi-escapes",
            "version": "4.3.0",
          },
          "resolved": null,
        },
        "ansi-regex" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/strip-ansi",
              "name": "ansi-regex",
              "spec": "^5.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/ansi-regex",
          "name": "ansi-regex",
          "package": Object {
            "name": "ansi-regex",
            "version": "5.0.0",
          },
          "resolved": null,
        },
        "ansi-styles" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/highlight/node_modules/chalk",
              "name": "ansi-styles",
              "spec": "^3.2.1",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/log-update/node_modules/wrap-ansi",
              "name": "ansi-styles",
              "spec": "^3.2.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "color-convert" => Edge {
              "name": "color-convert",
              "spec": "^1.9.0",
              "to": "node_modules/tap/node_modules/color-convert",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/ansi-styles",
          "name": "ansi-styles",
          "package": Object {
            "name": "ansi-styles",
            "version": "3.2.1",
          },
          "resolved": null,
        },
        "ansicolors" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/cardinal",
              "name": "ansicolors",
              "spec": "~0.3.2",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/ansicolors",
          "name": "ansicolors",
          "package": Object {
            "name": "ansicolors",
            "version": "0.3.2",
          },
          "resolved": null,
        },
        "arrify" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "arrify",
              "spec": "^2.0.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/arrify",
          "name": "arrify",
          "package": Object {
            "name": "arrify",
            "version": "2.0.1",
          },
          "resolved": null,
        },
        "astral-regex" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/slice-ansi",
              "name": "astral-regex",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/astral-regex",
          "name": "astral-regex",
          "package": Object {
            "name": "astral-regex",
            "version": "2.0.0",
          },
          "resolved": null,
        },
        "auto-bind" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "auto-bind",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/auto-bind",
          "name": "auto-bind",
          "package": Object {
            "name": "auto-bind",
            "version": "3.0.0",
          },
          "resolved": null,
        },
        "caller-callsite" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/caller-path",
              "name": "caller-callsite",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "callsites" => Edge {
              "name": "callsites",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/callsites",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/caller-callsite",
          "name": "caller-callsite",
          "package": Object {
            "name": "caller-callsite",
            "version": "2.0.0",
          },
          "resolved": null,
        },
        "caller-path" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/import-jsx",
              "name": "caller-path",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "caller-callsite" => Edge {
              "name": "caller-callsite",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/caller-callsite",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/caller-path",
          "name": "caller-path",
          "package": Object {
            "name": "caller-path",
            "version": "2.0.0",
          },
          "resolved": null,
        },
        "callsites" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/caller-callsite",
              "name": "callsites",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/callsites",
          "name": "callsites",
          "package": Object {
            "name": "callsites",
            "version": "2.0.0",
          },
          "resolved": null,
        },
        "cardinal" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/treport",
              "name": "cardinal",
              "spec": "^2.1.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansicolors" => Edge {
              "name": "ansicolors",
              "spec": "~0.3.2",
              "to": "node_modules/tap/node_modules/ansicolors",
              "type": "prod",
            },
            "redeyed" => Edge {
              "name": "redeyed",
              "spec": "~2.1.0",
              "to": "node_modules/tap/node_modules/redeyed",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/cardinal",
          "name": "cardinal",
          "package": Object {
            "name": "cardinal",
            "version": "2.1.1",
          },
          "resolved": null,
        },
        "chalk" => Node {
          "bundled": true,
          "children": Map {
            "ansi-styles" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/chalk",
                  "name": "ansi-styles",
                  "spec": "^4.1.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "@types/color-name" => Edge {
                  "name": "@types/color-name",
                  "spec": "^1.1.1",
                  "to": "node_modules/tap/node_modules/@types/color-name",
                  "type": "prod",
                },
                "color-convert" => Edge {
                  "name": "color-convert",
                  "spec": "^2.0.1",
                  "to": "node_modules/tap/node_modules/chalk/node_modules/color-convert",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/chalk/node_modules/ansi-styles",
              "name": "ansi-styles",
              "package": Object {
                "name": "ansi-styles",
                "version": "4.2.0",
              },
              "resolved": null,
            },
            "color-convert" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/chalk/node_modules/ansi-styles",
                  "name": "color-convert",
                  "spec": "^2.0.1",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "color-name" => Edge {
                  "name": "color-name",
                  "spec": "~1.1.4",
                  "to": "node_modules/tap/node_modules/chalk/node_modules/color-name",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/chalk/node_modules/color-convert",
              "name": "color-convert",
              "package": Object {
                "name": "color-convert",
                "version": "2.0.1",
              },
              "resolved": null,
            },
            "color-name" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/chalk/node_modules/color-convert",
                  "name": "color-name",
                  "spec": "~1.1.4",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/chalk/node_modules/color-name",
              "name": "color-name",
              "package": Object {
                "name": "color-name",
                "version": "1.1.4",
              },
              "resolved": null,
            },
          },
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "chalk",
              "spec": "^3.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/treport",
              "name": "chalk",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-styles" => Edge {
              "name": "ansi-styles",
              "spec": "^4.1.0",
              "to": "node_modules/tap/node_modules/chalk/node_modules/ansi-styles",
              "type": "prod",
            },
            "supports-color" => Edge {
              "name": "supports-color",
              "spec": "^7.1.0",
              "to": "node_modules/tap/node_modules/supports-color",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/chalk",
          "name": "chalk",
          "package": Object {
            "name": "chalk",
            "version": "3.0.0",
          },
          "resolved": null,
        },
        "ci-info" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/is-ci",
              "name": "ci-info",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/ci-info",
          "name": "ci-info",
          "package": Object {
            "name": "ci-info",
            "version": "2.0.0",
          },
          "resolved": null,
        },
        "cli-cursor" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "cli-cursor",
              "spec": "^3.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "restore-cursor" => Edge {
              "name": "restore-cursor",
              "spec": "^3.1.0",
              "to": "node_modules/tap/node_modules/restore-cursor",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/cli-cursor",
          "name": "cli-cursor",
          "package": Object {
            "name": "cli-cursor",
            "version": "3.1.0",
          },
          "resolved": null,
        },
        "cli-truncate" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "cli-truncate",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "slice-ansi" => Edge {
              "name": "slice-ansi",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/slice-ansi",
              "type": "prod",
            },
            "string-width" => Edge {
              "name": "string-width",
              "spec": "^4.2.0",
              "to": "node_modules/tap/node_modules/string-width",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/cli-truncate",
          "name": "cli-truncate",
          "package": Object {
            "name": "cli-truncate",
            "version": "2.1.0",
          },
          "resolved": null,
        },
        "color-convert" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ansi-styles",
              "name": "color-convert",
              "spec": "^1.9.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "color-name" => Edge {
              "name": "color-name",
              "spec": "1.1.3",
              "to": "node_modules/tap/node_modules/color-name",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/color-convert",
          "name": "color-convert",
          "package": Object {
            "name": "color-convert",
            "version": "1.9.3",
          },
          "resolved": null,
        },
        "color-name" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/color-convert",
              "name": "color-name",
              "spec": "1.1.3",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/color-name",
          "name": "color-name",
          "package": Object {
            "name": "color-name",
            "version": "1.1.3",
          },
          "resolved": null,
        },
        "convert-source-map" => Node {
          "bundled": true,
          "children": Map {
            "safe-buffer" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/convert-source-map",
                  "name": "safe-buffer",
                  "spec": "~5.1.1",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/convert-source-map/node_modules/safe-buffer",
              "name": "safe-buffer",
              "package": Object {
                "name": "safe-buffer",
                "version": "5.1.2",
              },
              "resolved": null,
            },
          },
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "convert-source-map",
              "spec": "^1.7.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "safe-buffer" => Edge {
              "name": "safe-buffer",
              "spec": "~5.1.1",
              "to": "node_modules/tap/node_modules/convert-source-map/node_modules/safe-buffer",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/convert-source-map",
          "name": "convert-source-map",
          "package": Object {
            "name": "convert-source-map",
            "version": "1.7.0",
          },
          "resolved": null,
        },
        "csstype" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@types/react",
              "name": "csstype",
              "spec": "^2.2.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/csstype",
          "name": "csstype",
          "package": Object {
            "name": "csstype",
            "version": "2.6.8",
          },
          "resolved": null,
        },
        "debug" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "debug",
              "spec": "^4.1.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "debug",
              "spec": "^4.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ms" => Edge {
              "name": "ms",
              "spec": "^2.1.1",
              "to": "node_modules/tap/node_modules/ms",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/debug",
          "name": "debug",
          "package": Object {
            "name": "debug",
            "version": "4.1.1",
          },
          "resolved": null,
        },
        "emoji-regex" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/string-width",
              "name": "emoji-regex",
              "spec": "^8.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/emoji-regex",
          "name": "emoji-regex",
          "package": Object {
            "name": "emoji-regex",
            "version": "8.0.0",
          },
          "resolved": null,
        },
        "escape-string-regexp" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/highlight/node_modules/chalk",
              "name": "escape-string-regexp",
              "spec": "^1.0.5",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/escape-string-regexp",
          "name": "escape-string-regexp",
          "package": Object {
            "name": "escape-string-regexp",
            "version": "1.0.5",
          },
          "resolved": null,
        },
        "esprima" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/redeyed",
              "name": "esprima",
              "spec": "~4.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/esprima",
          "name": "esprima",
          "package": Object {
            "name": "esprima",
            "version": "4.0.1",
          },
          "resolved": null,
        },
        "esutils" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/helper-builder-react-jsx",
              "name": "esutils",
              "spec": "^2.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/highlight",
              "name": "esutils",
              "spec": "^2.0.2",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/types",
              "name": "esutils",
              "spec": "^2.0.2",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/esutils",
          "name": "esutils",
          "package": Object {
            "name": "esutils",
            "version": "2.0.3",
          },
          "resolved": null,
        },
        "events-to-array" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/tap-parser",
              "name": "events-to-array",
              "spec": "^1.0.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/events-to-array",
          "name": "events-to-array",
          "package": Object {
            "name": "events-to-array",
            "version": "1.1.2",
          },
          "resolved": null,
        },
        "globals" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "globals",
              "spec": "^11.1.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/globals",
          "name": "globals",
          "package": Object {
            "name": "globals",
            "version": "11.12.0",
          },
          "resolved": null,
        },
        "has-flag" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/highlight/node_modules/supports-color",
              "name": "has-flag",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/has-flag",
          "name": "has-flag",
          "package": Object {
            "name": "has-flag",
            "version": "3.0.0",
          },
          "resolved": null,
        },
        "import-jsx" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap",
              "name": "import-jsx",
              "spec": "^3.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/treport",
              "name": "import-jsx",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/core" => Edge {
              "name": "@babel/core",
              "spec": "^7.5.5",
              "to": "node_modules/tap/node_modules/@babel/core",
              "type": "prod",
            },
            "@babel/plugin-proposal-object-rest-spread" => Edge {
              "name": "@babel/plugin-proposal-object-rest-spread",
              "spec": "^7.5.5",
              "to": "node_modules/tap/node_modules/@babel/plugin-proposal-object-rest-spread",
              "type": "prod",
            },
            "@babel/plugin-transform-destructuring" => Edge {
              "name": "@babel/plugin-transform-destructuring",
              "spec": "^7.5.0",
              "to": "node_modules/tap/node_modules/@babel/plugin-transform-destructuring",
              "type": "prod",
            },
            "@babel/plugin-transform-react-jsx" => Edge {
              "name": "@babel/plugin-transform-react-jsx",
              "spec": "^7.3.0",
              "to": "node_modules/tap/node_modules/@babel/plugin-transform-react-jsx",
              "type": "prod",
            },
            "caller-path" => Edge {
              "name": "caller-path",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/caller-path",
              "type": "prod",
            },
            "resolve-from" => Edge {
              "name": "resolve-from",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/resolve-from",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/import-jsx",
          "name": "import-jsx",
          "package": Object {
            "name": "import-jsx",
            "version": "3.0.0",
          },
          "resolved": null,
        },
        "ink" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap",
              "name": "ink",
              "spec": "^2.5.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/treport",
              "name": "ink",
              "spec": "^2.5.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-escapes" => Edge {
              "name": "ansi-escapes",
              "spec": "^4.2.1",
              "to": "node_modules/tap/node_modules/ansi-escapes",
              "type": "prod",
            },
            "arrify" => Edge {
              "name": "arrify",
              "spec": "^2.0.1",
              "to": "node_modules/tap/node_modules/arrify",
              "type": "prod",
            },
            "auto-bind" => Edge {
              "name": "auto-bind",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/auto-bind",
              "type": "prod",
            },
            "chalk" => Edge {
              "name": "chalk",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/chalk",
              "type": "prod",
            },
            "cli-cursor" => Edge {
              "name": "cli-cursor",
              "spec": "^3.1.0",
              "to": "node_modules/tap/node_modules/cli-cursor",
              "type": "prod",
            },
            "cli-truncate" => Edge {
              "name": "cli-truncate",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/cli-truncate",
              "type": "prod",
            },
            "is-ci" => Edge {
              "name": "is-ci",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/is-ci",
              "type": "prod",
            },
            "lodash.throttle" => Edge {
              "name": "lodash.throttle",
              "spec": "^4.1.1",
              "to": "node_modules/tap/node_modules/lodash.throttle",
              "type": "prod",
            },
            "log-update" => Edge {
              "name": "log-update",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/log-update",
              "type": "prod",
            },
            "prop-types" => Edge {
              "name": "prop-types",
              "spec": "^15.6.2",
              "to": "node_modules/tap/node_modules/prop-types",
              "type": "prod",
            },
            "react-reconciler" => Edge {
              "name": "react-reconciler",
              "spec": "^0.24.0",
              "to": "node_modules/tap/node_modules/react-reconciler",
              "type": "prod",
            },
            "scheduler" => Edge {
              "name": "scheduler",
              "spec": "^0.18.0",
              "to": "node_modules/tap/node_modules/scheduler",
              "type": "prod",
            },
            "signal-exit" => Edge {
              "name": "signal-exit",
              "spec": "^3.0.2",
              "to": "node_modules/tap/node_modules/signal-exit",
              "type": "prod",
            },
            "slice-ansi" => Edge {
              "name": "slice-ansi",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/slice-ansi",
              "type": "prod",
            },
            "string-length" => Edge {
              "name": "string-length",
              "spec": "^3.1.0",
              "to": "node_modules/tap/node_modules/string-length",
              "type": "prod",
            },
            "widest-line" => Edge {
              "name": "widest-line",
              "spec": "^3.1.0",
              "to": "node_modules/tap/node_modules/widest-line",
              "type": "prod",
            },
            "wrap-ansi" => Edge {
              "name": "wrap-ansi",
              "spec": "^6.2.0",
              "to": "node_modules/tap/node_modules/wrap-ansi",
              "type": "prod",
            },
            "yoga-layout-prebuilt" => Edge {
              "name": "yoga-layout-prebuilt",
              "spec": "^1.9.3",
              "to": "node_modules/tap/node_modules/yoga-layout-prebuilt",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/ink",
          "name": "ink",
          "package": Object {
            "name": "ink",
            "version": "2.6.0",
          },
          "resolved": null,
        },
        "is-ci" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "is-ci",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ci-info" => Edge {
              "name": "ci-info",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/ci-info",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/is-ci",
          "name": "is-ci",
          "package": Object {
            "name": "is-ci",
            "version": "2.0.0",
          },
          "resolved": null,
        },
        "is-fullwidth-code-point" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/slice-ansi",
              "name": "is-fullwidth-code-point",
              "spec": "^3.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/string-width",
              "name": "is-fullwidth-code-point",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/is-fullwidth-code-point",
          "name": "is-fullwidth-code-point",
          "package": Object {
            "name": "is-fullwidth-code-point",
            "version": "3.0.0",
          },
          "resolved": null,
        },
        "js-tokens" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/highlight",
              "name": "js-tokens",
              "spec": "^4.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/loose-envify",
              "name": "js-tokens",
              "spec": "^3.0.0 || ^4.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/js-tokens",
          "name": "js-tokens",
          "package": Object {
            "name": "js-tokens",
            "version": "4.0.0",
          },
          "resolved": null,
        },
        "jsesc" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/generator",
              "name": "jsesc",
              "spec": "^2.5.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/jsesc",
          "name": "jsesc",
          "package": Object {
            "name": "jsesc",
            "version": "2.5.2",
          },
          "resolved": null,
        },
        "json5" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "json5",
              "spec": "^2.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "minimist" => Edge {
              "name": "minimist",
              "spec": "^1.2.0",
              "to": "node_modules/tap/node_modules/minimist",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/json5",
          "name": "json5",
          "package": Object {
            "name": "json5",
            "version": "2.1.1",
          },
          "resolved": null,
        },
        "lodash" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "lodash",
              "spec": "^4.17.13",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/generator",
              "name": "lodash",
              "spec": "^4.17.13",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "lodash",
              "spec": "^4.17.13",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/@babel/types",
              "name": "lodash",
              "spec": "^4.17.13",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/lodash",
          "name": "lodash",
          "package": Object {
            "name": "lodash",
            "version": "4.17.15",
          },
          "resolved": null,
        },
        "lodash.throttle" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "lodash.throttle",
              "spec": "^4.1.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/lodash.throttle",
          "name": "lodash.throttle",
          "package": Object {
            "name": "lodash.throttle",
            "version": "4.1.1",
          },
          "resolved": null,
        },
        "log-update" => Node {
          "bundled": true,
          "children": Map {
            "ansi-escapes" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/log-update",
                  "name": "ansi-escapes",
                  "spec": "^3.2.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/ansi-escapes",
              "name": "ansi-escapes",
              "package": Object {
                "name": "ansi-escapes",
                "version": "3.2.0",
              },
              "resolved": null,
            },
            "ansi-regex" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/strip-ansi",
                  "name": "ansi-regex",
                  "spec": "^4.1.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/ansi-regex",
              "name": "ansi-regex",
              "package": Object {
                "name": "ansi-regex",
                "version": "4.1.0",
              },
              "resolved": null,
            },
            "cli-cursor" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/log-update",
                  "name": "cli-cursor",
                  "spec": "^2.1.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "restore-cursor" => Edge {
                  "name": "restore-cursor",
                  "spec": "^2.0.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/restore-cursor",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/cli-cursor",
              "name": "cli-cursor",
              "package": Object {
                "name": "cli-cursor",
                "version": "2.1.0",
              },
              "resolved": null,
            },
            "emoji-regex" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/string-width",
                  "name": "emoji-regex",
                  "spec": "^7.0.1",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/emoji-regex",
              "name": "emoji-regex",
              "package": Object {
                "name": "emoji-regex",
                "version": "7.0.3",
              },
              "resolved": null,
            },
            "is-fullwidth-code-point" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/string-width",
                  "name": "is-fullwidth-code-point",
                  "spec": "^2.0.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/is-fullwidth-code-point",
              "name": "is-fullwidth-code-point",
              "package": Object {
                "name": "is-fullwidth-code-point",
                "version": "2.0.0",
              },
              "resolved": null,
            },
            "mimic-fn" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/onetime",
                  "name": "mimic-fn",
                  "spec": "^1.0.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/mimic-fn",
              "name": "mimic-fn",
              "package": Object {
                "name": "mimic-fn",
                "version": "1.2.0",
              },
              "resolved": null,
            },
            "onetime" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/restore-cursor",
                  "name": "onetime",
                  "spec": "^2.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "mimic-fn" => Edge {
                  "name": "mimic-fn",
                  "spec": "^1.0.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/mimic-fn",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/onetime",
              "name": "onetime",
              "package": Object {
                "name": "onetime",
                "version": "2.0.1",
              },
              "resolved": null,
            },
            "restore-cursor" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/cli-cursor",
                  "name": "restore-cursor",
                  "spec": "^2.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "onetime" => Edge {
                  "name": "onetime",
                  "spec": "^2.0.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/onetime",
                  "type": "prod",
                },
                "signal-exit" => Edge {
                  "name": "signal-exit",
                  "spec": "^3.0.2",
                  "to": "node_modules/tap/node_modules/signal-exit",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/restore-cursor",
              "name": "restore-cursor",
              "package": Object {
                "name": "restore-cursor",
                "version": "2.0.0",
              },
              "resolved": null,
            },
            "string-width" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/wrap-ansi",
                  "name": "string-width",
                  "spec": "^3.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "emoji-regex" => Edge {
                  "name": "emoji-regex",
                  "spec": "^7.0.1",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/emoji-regex",
                  "type": "prod",
                },
                "is-fullwidth-code-point" => Edge {
                  "name": "is-fullwidth-code-point",
                  "spec": "^2.0.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/is-fullwidth-code-point",
                  "type": "prod",
                },
                "strip-ansi" => Edge {
                  "name": "strip-ansi",
                  "spec": "^5.1.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/strip-ansi",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/string-width",
              "name": "string-width",
              "package": Object {
                "name": "string-width",
                "version": "3.1.0",
              },
              "resolved": null,
            },
            "strip-ansi" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/string-width",
                  "name": "strip-ansi",
                  "spec": "^5.1.0",
                  "type": "prod",
                },
                Edge {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/wrap-ansi",
                  "name": "strip-ansi",
                  "spec": "^5.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "ansi-regex" => Edge {
                  "name": "ansi-regex",
                  "spec": "^4.1.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/ansi-regex",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/strip-ansi",
              "name": "strip-ansi",
              "package": Object {
                "name": "strip-ansi",
                "version": "5.2.0",
              },
              "resolved": null,
            },
            "wrap-ansi" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/log-update",
                  "name": "wrap-ansi",
                  "spec": "^5.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "ansi-styles" => Edge {
                  "name": "ansi-styles",
                  "spec": "^3.2.0",
                  "to": "node_modules/tap/node_modules/ansi-styles",
                  "type": "prod",
                },
                "string-width" => Edge {
                  "name": "string-width",
                  "spec": "^3.0.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/string-width",
                  "type": "prod",
                },
                "strip-ansi" => Edge {
                  "name": "strip-ansi",
                  "spec": "^5.0.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/strip-ansi",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/wrap-ansi",
              "name": "wrap-ansi",
              "package": Object {
                "name": "wrap-ansi",
                "version": "5.1.0",
              },
              "resolved": null,
            },
          },
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "log-update",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-escapes" => Edge {
              "name": "ansi-escapes",
              "spec": "^3.2.0",
              "to": "node_modules/tap/node_modules/log-update/node_modules/ansi-escapes",
              "type": "prod",
            },
            "cli-cursor" => Edge {
              "name": "cli-cursor",
              "spec": "^2.1.0",
              "to": "node_modules/tap/node_modules/log-update/node_modules/cli-cursor",
              "type": "prod",
            },
            "wrap-ansi" => Edge {
              "name": "wrap-ansi",
              "spec": "^5.0.0",
              "to": "node_modules/tap/node_modules/log-update/node_modules/wrap-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/log-update",
          "name": "log-update",
          "package": Object {
            "name": "log-update",
            "version": "3.3.0",
          },
          "resolved": null,
        },
        "loose-envify" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/prop-types",
              "name": "loose-envify",
              "spec": "^1.4.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/react-reconciler",
              "name": "loose-envify",
              "spec": "^1.1.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/scheduler",
              "name": "loose-envify",
              "spec": "^1.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "js-tokens" => Edge {
              "name": "js-tokens",
              "spec": "^3.0.0 || ^4.0.0",
              "to": "node_modules/tap/node_modules/js-tokens",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/loose-envify",
          "name": "loose-envify",
          "package": Object {
            "name": "loose-envify",
            "version": "1.4.0",
          },
          "resolved": null,
        },
        "mimic-fn" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/onetime",
              "name": "mimic-fn",
              "spec": "^2.1.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/mimic-fn",
          "name": "mimic-fn",
          "package": Object {
            "name": "mimic-fn",
            "version": "2.1.0",
          },
          "resolved": null,
        },
        "minimist" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/json5",
              "name": "minimist",
              "spec": "^1.2.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/minimist",
          "name": "minimist",
          "package": Object {
            "name": "minimist",
            "version": "1.2.0",
          },
          "resolved": null,
        },
        "minipass" => Node {
          "bundled": true,
          "children": Map {
            "yallist" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/minipass",
                  "name": "yallist",
                  "spec": "^4.0.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/minipass/node_modules/yallist",
              "name": "yallist",
              "package": Object {
                "name": "yallist",
                "version": "4.0.0",
              },
              "resolved": null,
            },
          },
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap",
              "name": "minipass",
              "spec": "^3.1.1",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/tap-parser",
              "name": "minipass",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "yallist" => Edge {
              "name": "yallist",
              "spec": "^4.0.0",
              "to": "node_modules/tap/node_modules/minipass/node_modules/yallist",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/minipass",
          "name": "minipass",
          "package": Object {
            "name": "minipass",
            "version": "3.1.1",
          },
          "resolved": null,
        },
        "ms" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/debug",
              "name": "ms",
              "spec": "^2.1.1",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/treport",
              "name": "ms",
              "spec": "^2.1.2",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/ms",
          "name": "ms",
          "package": Object {
            "name": "ms",
            "version": "2.1.2",
          },
          "resolved": null,
        },
        "object-assign" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/prop-types",
              "name": "object-assign",
              "spec": "^4.1.1",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/react-reconciler",
              "name": "object-assign",
              "spec": "^4.1.1",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/scheduler",
              "name": "object-assign",
              "spec": "^4.1.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/object-assign",
          "name": "object-assign",
          "package": Object {
            "name": "object-assign",
            "version": "4.1.1",
          },
          "resolved": null,
        },
        "onetime" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/restore-cursor",
              "name": "onetime",
              "spec": "^5.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "mimic-fn" => Edge {
              "name": "mimic-fn",
              "spec": "^2.1.0",
              "to": "node_modules/tap/node_modules/mimic-fn",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/onetime",
          "name": "onetime",
          "package": Object {
            "name": "onetime",
            "version": "5.1.0",
          },
          "resolved": null,
        },
        "path-parse" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/resolve",
              "name": "path-parse",
              "spec": "^1.0.6",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/path-parse",
          "name": "path-parse",
          "package": Object {
            "name": "path-parse",
            "version": "1.0.6",
          },
          "resolved": null,
        },
        "prop-types" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "prop-types",
              "spec": "^15.6.2",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/react-reconciler",
              "name": "prop-types",
              "spec": "^15.6.2",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "loose-envify" => Edge {
              "name": "loose-envify",
              "spec": "^1.4.0",
              "to": "node_modules/tap/node_modules/loose-envify",
              "type": "prod",
            },
            "object-assign" => Edge {
              "name": "object-assign",
              "spec": "^4.1.1",
              "to": "node_modules/tap/node_modules/object-assign",
              "type": "prod",
            },
            "react-is" => Edge {
              "name": "react-is",
              "spec": "^16.8.1",
              "to": "node_modules/tap/node_modules/react-is",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/prop-types",
          "name": "prop-types",
          "package": Object {
            "name": "prop-types",
            "version": "15.7.2",
          },
          "resolved": null,
        },
        "punycode" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/treport/node_modules/unicode-length",
              "name": "punycode",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/punycode",
          "name": "punycode",
          "package": Object {
            "name": "punycode",
            "version": "2.1.1",
          },
          "resolved": null,
        },
        "react-is" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/prop-types",
              "name": "react-is",
              "spec": "^16.8.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/react-is",
          "name": "react-is",
          "package": Object {
            "name": "react-is",
            "version": "16.12.0",
          },
          "resolved": null,
        },
        "react-reconciler" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "react-reconciler",
              "spec": "^0.24.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "loose-envify" => Edge {
              "name": "loose-envify",
              "spec": "^1.1.0",
              "to": "node_modules/tap/node_modules/loose-envify",
              "type": "prod",
            },
            "object-assign" => Edge {
              "name": "object-assign",
              "spec": "^4.1.1",
              "to": "node_modules/tap/node_modules/object-assign",
              "type": "prod",
            },
            "prop-types" => Edge {
              "name": "prop-types",
              "spec": "^15.6.2",
              "to": "node_modules/tap/node_modules/prop-types",
              "type": "prod",
            },
            "scheduler" => Edge {
              "name": "scheduler",
              "spec": "^0.18.0",
              "to": "node_modules/tap/node_modules/scheduler",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/react-reconciler",
          "name": "react-reconciler",
          "package": Object {
            "name": "react-reconciler",
            "version": "0.24.0",
          },
          "resolved": null,
        },
        "redeyed" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/cardinal",
              "name": "redeyed",
              "spec": "~2.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "esprima" => Edge {
              "name": "esprima",
              "spec": "~4.0.0",
              "to": "node_modules/tap/node_modules/esprima",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/redeyed",
          "name": "redeyed",
          "package": Object {
            "name": "redeyed",
            "version": "2.1.1",
          },
          "resolved": null,
        },
        "regenerator-runtime" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/runtime",
              "name": "regenerator-runtime",
              "spec": "^0.13.2",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/regenerator-runtime",
          "name": "regenerator-runtime",
          "package": Object {
            "name": "regenerator-runtime",
            "version": "0.13.3",
          },
          "resolved": null,
        },
        "resolve" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "resolve",
              "spec": "^1.3.2",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "path-parse" => Edge {
              "name": "path-parse",
              "spec": "^1.0.6",
              "to": "node_modules/tap/node_modules/path-parse",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/resolve",
          "name": "resolve",
          "package": Object {
            "name": "resolve",
            "version": "1.13.1",
          },
          "resolved": null,
        },
        "resolve-from" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/import-jsx",
              "name": "resolve-from",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/resolve-from",
          "name": "resolve-from",
          "package": Object {
            "name": "resolve-from",
            "version": "3.0.0",
          },
          "resolved": null,
        },
        "restore-cursor" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/cli-cursor",
              "name": "restore-cursor",
              "spec": "^3.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "onetime" => Edge {
              "name": "onetime",
              "spec": "^5.1.0",
              "to": "node_modules/tap/node_modules/onetime",
              "type": "prod",
            },
            "signal-exit" => Edge {
              "name": "signal-exit",
              "spec": "^3.0.2",
              "to": "node_modules/tap/node_modules/signal-exit",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/restore-cursor",
          "name": "restore-cursor",
          "package": Object {
            "name": "restore-cursor",
            "version": "3.1.0",
          },
          "resolved": null,
        },
        "scheduler" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "scheduler",
              "spec": "^0.18.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/react-reconciler",
              "name": "scheduler",
              "spec": "^0.18.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "loose-envify" => Edge {
              "name": "loose-envify",
              "spec": "^1.1.0",
              "to": "node_modules/tap/node_modules/loose-envify",
              "type": "prod",
            },
            "object-assign" => Edge {
              "name": "object-assign",
              "spec": "^4.1.1",
              "to": "node_modules/tap/node_modules/object-assign",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/scheduler",
          "name": "scheduler",
          "package": Object {
            "name": "scheduler",
            "version": "0.18.0",
          },
          "resolved": null,
        },
        "semver" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "semver",
              "spec": "^5.4.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/semver",
          "name": "semver",
          "package": Object {
            "name": "semver",
            "version": "5.7.1",
          },
          "resolved": null,
        },
        "signal-exit" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap",
              "name": "signal-exit",
              "spec": "^3.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "signal-exit",
              "spec": "^3.0.2",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/log-update/node_modules/restore-cursor",
              "name": "signal-exit",
              "spec": "^3.0.2",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/restore-cursor",
              "name": "signal-exit",
              "spec": "^3.0.2",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/signal-exit",
          "name": "signal-exit",
          "package": Object {
            "name": "signal-exit",
            "version": "3.0.2",
          },
          "resolved": null,
        },
        "slice-ansi" => Node {
          "bundled": true,
          "children": Map {
            "ansi-styles" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/slice-ansi",
                  "name": "ansi-styles",
                  "spec": "^4.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "@types/color-name" => Edge {
                  "name": "@types/color-name",
                  "spec": "^1.1.1",
                  "to": "node_modules/tap/node_modules/@types/color-name",
                  "type": "prod",
                },
                "color-convert" => Edge {
                  "name": "color-convert",
                  "spec": "^2.0.1",
                  "to": "node_modules/tap/node_modules/slice-ansi/node_modules/color-convert",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/slice-ansi/node_modules/ansi-styles",
              "name": "ansi-styles",
              "package": Object {
                "name": "ansi-styles",
                "version": "4.2.0",
              },
              "resolved": null,
            },
            "color-convert" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/slice-ansi/node_modules/ansi-styles",
                  "name": "color-convert",
                  "spec": "^2.0.1",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "color-name" => Edge {
                  "name": "color-name",
                  "spec": "~1.1.4",
                  "to": "node_modules/tap/node_modules/slice-ansi/node_modules/color-name",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/slice-ansi/node_modules/color-convert",
              "name": "color-convert",
              "package": Object {
                "name": "color-convert",
                "version": "2.0.1",
              },
              "resolved": null,
            },
            "color-name" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/slice-ansi/node_modules/color-convert",
                  "name": "color-name",
                  "spec": "~1.1.4",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/slice-ansi/node_modules/color-name",
              "name": "color-name",
              "package": Object {
                "name": "color-name",
                "version": "1.1.4",
              },
              "resolved": null,
            },
          },
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/cli-truncate",
              "name": "slice-ansi",
              "spec": "^3.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "slice-ansi",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-styles" => Edge {
              "name": "ansi-styles",
              "spec": "^4.0.0",
              "to": "node_modules/tap/node_modules/slice-ansi/node_modules/ansi-styles",
              "type": "prod",
            },
            "astral-regex" => Edge {
              "name": "astral-regex",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/astral-regex",
              "type": "prod",
            },
            "is-fullwidth-code-point" => Edge {
              "name": "is-fullwidth-code-point",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/is-fullwidth-code-point",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/slice-ansi",
          "name": "slice-ansi",
          "package": Object {
            "name": "slice-ansi",
            "version": "3.0.0",
          },
          "resolved": null,
        },
        "string-length" => Node {
          "bundled": true,
          "children": Map {
            "ansi-regex" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/string-length/node_modules/strip-ansi",
                  "name": "ansi-regex",
                  "spec": "^4.1.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/string-length/node_modules/ansi-regex",
              "name": "ansi-regex",
              "package": Object {
                "name": "ansi-regex",
                "version": "4.1.0",
              },
              "resolved": null,
            },
            "astral-regex" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/string-length",
                  "name": "astral-regex",
                  "spec": "^1.0.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/string-length/node_modules/astral-regex",
              "name": "astral-regex",
              "package": Object {
                "name": "astral-regex",
                "version": "1.0.0",
              },
              "resolved": null,
            },
            "strip-ansi" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/string-length",
                  "name": "strip-ansi",
                  "spec": "^5.2.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "ansi-regex" => Edge {
                  "name": "ansi-regex",
                  "spec": "^4.1.0",
                  "to": "node_modules/tap/node_modules/string-length/node_modules/ansi-regex",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/string-length/node_modules/strip-ansi",
              "name": "strip-ansi",
              "package": Object {
                "name": "strip-ansi",
                "version": "5.2.0",
              },
              "resolved": null,
            },
          },
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "string-length",
              "spec": "^3.1.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/treport",
              "name": "string-length",
              "spec": "^3.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "astral-regex" => Edge {
              "name": "astral-regex",
              "spec": "^1.0.0",
              "to": "node_modules/tap/node_modules/string-length/node_modules/astral-regex",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^5.2.0",
              "to": "node_modules/tap/node_modules/string-length/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/string-length",
          "name": "string-length",
          "package": Object {
            "name": "string-length",
            "version": "3.1.0",
          },
          "resolved": null,
        },
        "string-width" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/cli-truncate",
              "name": "string-width",
              "spec": "^4.2.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/widest-line",
              "name": "string-width",
              "spec": "^4.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/wrap-ansi",
              "name": "string-width",
              "spec": "^4.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "emoji-regex" => Edge {
              "name": "emoji-regex",
              "spec": "^8.0.0",
              "to": "node_modules/tap/node_modules/emoji-regex",
              "type": "prod",
            },
            "is-fullwidth-code-point" => Edge {
              "name": "is-fullwidth-code-point",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/is-fullwidth-code-point",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^6.0.0",
              "to": "node_modules/tap/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/string-width",
          "name": "string-width",
          "package": Object {
            "name": "string-width",
            "version": "4.2.0",
          },
          "resolved": null,
        },
        "strip-ansi" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/string-width",
              "name": "strip-ansi",
              "spec": "^6.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/wrap-ansi",
              "name": "strip-ansi",
              "spec": "^6.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-regex" => Edge {
              "name": "ansi-regex",
              "spec": "^5.0.0",
              "to": "node_modules/tap/node_modules/ansi-regex",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/strip-ansi",
          "name": "strip-ansi",
          "package": Object {
            "name": "strip-ansi",
            "version": "6.0.0",
          },
          "resolved": null,
        },
        "supports-color" => Node {
          "bundled": true,
          "children": Map {
            "has-flag" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/supports-color",
                  "name": "has-flag",
                  "spec": "^4.0.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/supports-color/node_modules/has-flag",
              "name": "has-flag",
              "package": Object {
                "name": "has-flag",
                "version": "4.0.0",
              },
              "resolved": null,
            },
          },
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/chalk",
              "name": "supports-color",
              "spec": "^7.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "has-flag" => Edge {
              "name": "has-flag",
              "spec": "^4.0.0",
              "to": "node_modules/tap/node_modules/supports-color/node_modules/has-flag",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/supports-color",
          "name": "supports-color",
          "package": Object {
            "name": "supports-color",
            "version": "7.1.0",
          },
          "resolved": null,
        },
        "tap-parser" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap",
              "name": "tap-parser",
              "spec": "^10.0.1",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/treport",
              "name": "tap-parser",
              "spec": "^10.0.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "events-to-array" => Edge {
              "name": "events-to-array",
              "spec": "^1.0.1",
              "to": "node_modules/tap/node_modules/events-to-array",
              "type": "prod",
            },
            "minipass" => Edge {
              "name": "minipass",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/minipass",
              "type": "prod",
            },
            "tap-yaml" => Edge {
              "name": "tap-yaml",
              "spec": "^1.0.0",
              "to": "node_modules/tap/node_modules/tap-yaml",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/tap-parser",
          "name": "tap-parser",
          "package": Object {
            "name": "tap-parser",
            "version": "10.0.1",
          },
          "resolved": null,
        },
        "tap-yaml" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap",
              "name": "tap-yaml",
              "spec": "^1.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/tap-parser",
              "name": "tap-yaml",
              "spec": "^1.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "yaml" => Edge {
              "name": "yaml",
              "spec": "^1.5.0",
              "to": "node_modules/tap/node_modules/yaml",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/tap-yaml",
          "name": "tap-yaml",
          "package": Object {
            "name": "tap-yaml",
            "version": "1.0.0",
          },
          "resolved": null,
        },
        "to-fast-properties" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/@babel/types",
              "name": "to-fast-properties",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/to-fast-properties",
          "name": "to-fast-properties",
          "package": Object {
            "name": "to-fast-properties",
            "version": "2.0.0",
          },
          "resolved": null,
        },
        "treport" => Node {
          "bundled": true,
          "children": Map {
            "ansi-regex" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/treport/node_modules/strip-ansi",
                  "name": "ansi-regex",
                  "spec": "^2.0.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/treport/node_modules/ansi-regex",
              "name": "ansi-regex",
              "package": Object {
                "name": "ansi-regex",
                "version": "2.1.1",
              },
              "resolved": null,
            },
            "strip-ansi" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/treport/node_modules/unicode-length",
                  "name": "strip-ansi",
                  "spec": "^3.0.1",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "ansi-regex" => Edge {
                  "name": "ansi-regex",
                  "spec": "^2.0.0",
                  "to": "node_modules/tap/node_modules/treport/node_modules/ansi-regex",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/treport/node_modules/strip-ansi",
              "name": "strip-ansi",
              "package": Object {
                "name": "strip-ansi",
                "version": "3.0.1",
              },
              "resolved": null,
            },
            "unicode-length" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/treport",
                  "name": "unicode-length",
                  "spec": "^2.0.2",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "punycode" => Edge {
                  "name": "punycode",
                  "spec": "^2.0.0",
                  "to": "node_modules/tap/node_modules/punycode",
                  "type": "prod",
                },
                "strip-ansi" => Edge {
                  "name": "strip-ansi",
                  "spec": "^3.0.1",
                  "to": "node_modules/tap/node_modules/treport/node_modules/strip-ansi",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/treport/node_modules/unicode-length",
              "name": "unicode-length",
              "package": Object {
                "name": "unicode-length",
                "version": "2.0.2",
              },
              "resolved": null,
            },
          },
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap",
              "name": "treport",
              "spec": "^1.0.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "cardinal" => Edge {
              "name": "cardinal",
              "spec": "^2.1.1",
              "to": "node_modules/tap/node_modules/cardinal",
              "type": "prod",
            },
            "chalk" => Edge {
              "name": "chalk",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/chalk",
              "type": "prod",
            },
            "import-jsx" => Edge {
              "name": "import-jsx",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/import-jsx",
              "type": "prod",
            },
            "ink" => Edge {
              "name": "ink",
              "spec": "^2.5.0",
              "to": "node_modules/tap/node_modules/ink",
              "type": "prod",
            },
            "ms" => Edge {
              "name": "ms",
              "spec": "^2.1.2",
              "to": "node_modules/tap/node_modules/ms",
              "type": "prod",
            },
            "string-length" => Edge {
              "name": "string-length",
              "spec": "^3.1.0",
              "to": "node_modules/tap/node_modules/string-length",
              "type": "prod",
            },
            "tap-parser" => Edge {
              "name": "tap-parser",
              "spec": "^10.0.1",
              "to": "node_modules/tap/node_modules/tap-parser",
              "type": "prod",
            },
            "unicode-length" => Edge {
              "name": "unicode-length",
              "spec": "^2.0.2",
              "to": "node_modules/tap/node_modules/treport/node_modules/unicode-length",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/treport",
          "name": "treport",
          "package": Object {
            "name": "treport",
            "version": "1.0.1",
          },
          "resolved": null,
        },
        "type-fest" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ansi-escapes",
              "name": "type-fest",
              "spec": "^0.8.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/type-fest",
          "name": "type-fest",
          "package": Object {
            "name": "type-fest",
            "version": "0.8.1",
          },
          "resolved": null,
        },
        "widest-line" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "widest-line",
              "spec": "^3.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "string-width" => Edge {
              "name": "string-width",
              "spec": "^4.0.0",
              "to": "node_modules/tap/node_modules/string-width",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/widest-line",
          "name": "widest-line",
          "package": Object {
            "name": "widest-line",
            "version": "3.1.0",
          },
          "resolved": null,
        },
        "wrap-ansi" => Node {
          "bundled": true,
          "children": Map {
            "ansi-styles" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/wrap-ansi",
                  "name": "ansi-styles",
                  "spec": "^4.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "@types/color-name" => Edge {
                  "name": "@types/color-name",
                  "spec": "^1.1.1",
                  "to": "node_modules/tap/node_modules/@types/color-name",
                  "type": "prod",
                },
                "color-convert" => Edge {
                  "name": "color-convert",
                  "spec": "^2.0.1",
                  "to": "node_modules/tap/node_modules/wrap-ansi/node_modules/color-convert",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/wrap-ansi/node_modules/ansi-styles",
              "name": "ansi-styles",
              "package": Object {
                "name": "ansi-styles",
                "version": "4.2.0",
              },
              "resolved": null,
            },
            "color-convert" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/wrap-ansi/node_modules/ansi-styles",
                  "name": "color-convert",
                  "spec": "^2.0.1",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "color-name" => Edge {
                  "name": "color-name",
                  "spec": "~1.1.4",
                  "to": "node_modules/tap/node_modules/wrap-ansi/node_modules/color-name",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/wrap-ansi/node_modules/color-convert",
              "name": "color-convert",
              "package": Object {
                "name": "color-convert",
                "version": "2.0.1",
              },
              "resolved": null,
            },
            "color-name" => Node {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                Edge {
                  "from": "node_modules/tap/node_modules/wrap-ansi/node_modules/color-convert",
                  "name": "color-name",
                  "spec": "~1.1.4",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/wrap-ansi/node_modules/color-name",
              "name": "color-name",
              "package": Object {
                "name": "color-name",
                "version": "1.1.4",
              },
              "resolved": null,
            },
          },
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "wrap-ansi",
              "spec": "^6.2.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-styles" => Edge {
              "name": "ansi-styles",
              "spec": "^4.0.0",
              "to": "node_modules/tap/node_modules/wrap-ansi/node_modules/ansi-styles",
              "type": "prod",
            },
            "string-width" => Edge {
              "name": "string-width",
              "spec": "^4.1.0",
              "to": "node_modules/tap/node_modules/string-width",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^6.0.0",
              "to": "node_modules/tap/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/wrap-ansi",
          "name": "wrap-ansi",
          "package": Object {
            "name": "wrap-ansi",
            "version": "6.2.0",
          },
          "resolved": null,
        },
        "yaml" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap",
              "name": "yaml",
              "spec": "^1.7.2",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/tap/node_modules/tap-yaml",
              "name": "yaml",
              "spec": "^1.5.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/runtime" => Edge {
              "name": "@babel/runtime",
              "spec": "^7.6.3",
              "to": "node_modules/tap/node_modules/@babel/runtime",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/yaml",
          "name": "yaml",
          "package": Object {
            "name": "yaml",
            "version": "1.7.2",
          },
          "resolved": null,
        },
        "yoga-layout-prebuilt" => Node {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap/node_modules/ink",
              "name": "yoga-layout-prebuilt",
              "spec": "^1.9.3",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/yoga-layout-prebuilt",
          "name": "yoga-layout-prebuilt",
          "package": Object {
            "name": "yoga-layout-prebuilt",
            "version": "1.9.3",
          },
          "resolved": null,
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "tap",
          "spec": "^14.10.5",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "@types/react" => Edge {
          "name": "@types/react",
          "spec": "^16.9.16",
          "to": "node_modules/tap/node_modules/@types/react",
          "type": "prod",
        },
        "async-hook-domain" => Edge {
          "name": "async-hook-domain",
          "spec": "^1.1.3",
          "to": "node_modules/async-hook-domain",
          "type": "prod",
        },
        "bind-obj-methods" => Edge {
          "name": "bind-obj-methods",
          "spec": "^2.0.0",
          "to": "node_modules/bind-obj-methods",
          "type": "prod",
        },
        "browser-process-hrtime" => Edge {
          "name": "browser-process-hrtime",
          "spec": "^1.0.0",
          "to": "node_modules/browser-process-hrtime",
          "type": "prod",
        },
        "chokidar" => Edge {
          "name": "chokidar",
          "spec": "^3.3.0",
          "to": "node_modules/chokidar",
          "type": "prod",
        },
        "color-support" => Edge {
          "name": "color-support",
          "spec": "^1.1.0",
          "to": "node_modules/color-support",
          "type": "prod",
        },
        "coveralls" => Edge {
          "name": "coveralls",
          "spec": "^3.0.8",
          "to": "node_modules/coveralls",
          "type": "prod",
        },
        "diff" => Edge {
          "name": "diff",
          "spec": "^4.0.1",
          "to": "node_modules/diff",
          "type": "prod",
        },
        "esm" => Edge {
          "name": "esm",
          "spec": "^3.2.25",
          "to": "node_modules/esm",
          "type": "prod",
        },
        "findit" => Edge {
          "name": "findit",
          "spec": "^2.0.0",
          "to": "node_modules/findit",
          "type": "prod",
        },
        "flow-remove-types" => Edge {
          "name": "flow-remove-types",
          "spec": "^2.112.0",
          "to": "node_modules/flow-remove-types",
          "type": "prod",
        },
        "foreground-child" => Edge {
          "name": "foreground-child",
          "spec": "^1.3.3",
          "to": "node_modules/foreground-child",
          "type": "prod",
        },
        "fs-exists-cached" => Edge {
          "name": "fs-exists-cached",
          "spec": "^1.0.0",
          "to": "node_modules/fs-exists-cached",
          "type": "prod",
        },
        "function-loop" => Edge {
          "name": "function-loop",
          "spec": "^1.0.2",
          "to": "node_modules/function-loop",
          "type": "prod",
        },
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.6",
          "to": "node_modules/glob",
          "type": "prod",
        },
        "import-jsx" => Edge {
          "name": "import-jsx",
          "spec": "^3.0.0",
          "to": "node_modules/tap/node_modules/import-jsx",
          "type": "prod",
        },
        "ink" => Edge {
          "name": "ink",
          "spec": "^2.5.0",
          "to": "node_modules/tap/node_modules/ink",
          "type": "prod",
        },
        "isexe" => Edge {
          "name": "isexe",
          "spec": "^2.0.0",
          "to": "node_modules/isexe",
          "type": "prod",
        },
        "istanbul-lib-processinfo" => Edge {
          "name": "istanbul-lib-processinfo",
          "spec": "^1.0.0",
          "to": "node_modules/istanbul-lib-processinfo",
          "type": "prod",
        },
        "jackspeak" => Edge {
          "name": "jackspeak",
          "spec": "^1.4.0",
          "to": "node_modules/jackspeak",
          "type": "prod",
        },
        "minipass" => Edge {
          "name": "minipass",
          "spec": "^3.1.1",
          "to": "node_modules/tap/node_modules/minipass",
          "type": "prod",
        },
        "mkdirp" => Edge {
          "name": "mkdirp",
          "spec": "^0.5.1",
          "to": "node_modules/mkdirp",
          "type": "prod",
        },
        "nyc" => Edge {
          "name": "nyc",
          "spec": "^14.1.1",
          "to": "node_modules/nyc",
          "type": "prod",
        },
        "opener" => Edge {
          "name": "opener",
          "spec": "^1.5.1",
          "to": "node_modules/opener",
          "type": "prod",
        },
        "own-or" => Edge {
          "name": "own-or",
          "spec": "^1.0.0",
          "to": "node_modules/own-or",
          "type": "prod",
        },
        "own-or-env" => Edge {
          "name": "own-or-env",
          "spec": "^1.0.1",
          "to": "node_modules/own-or-env",
          "type": "prod",
        },
        "react" => Edge {
          "name": "react",
          "spec": "^16.12.0",
          "to": "node_modules/react",
          "type": "prod",
        },
        "rimraf" => Edge {
          "name": "rimraf",
          "spec": "^2.7.1",
          "to": "node_modules/rimraf",
          "type": "prod",
        },
        "signal-exit" => Edge {
          "name": "signal-exit",
          "spec": "^3.0.0",
          "to": "node_modules/tap/node_modules/signal-exit",
          "type": "prod",
        },
        "source-map-support" => Edge {
          "name": "source-map-support",
          "spec": "^0.5.16",
          "to": "node_modules/source-map-support",
          "type": "prod",
        },
        "stack-utils" => Edge {
          "name": "stack-utils",
          "spec": "^1.0.2",
          "to": "node_modules/stack-utils",
          "type": "prod",
        },
        "tap-mocha-reporter" => Edge {
          "name": "tap-mocha-reporter",
          "spec": "^5.0.0",
          "to": "node_modules/tap-mocha-reporter",
          "type": "prod",
        },
        "tap-parser" => Edge {
          "name": "tap-parser",
          "spec": "^10.0.1",
          "to": "node_modules/tap/node_modules/tap-parser",
          "type": "prod",
        },
        "tap-yaml" => Edge {
          "name": "tap-yaml",
          "spec": "^1.0.0",
          "to": "node_modules/tap/node_modules/tap-yaml",
          "type": "prod",
        },
        "tcompare" => Edge {
          "name": "tcompare",
          "spec": "^3.0.0",
          "to": "node_modules/tcompare",
          "type": "prod",
        },
        "treport" => Edge {
          "name": "treport",
          "spec": "^1.0.1",
          "to": "node_modules/tap/node_modules/treport",
          "type": "prod",
        },
        "trivial-deferred" => Edge {
          "name": "trivial-deferred",
          "spec": "^1.0.1",
          "to": "node_modules/trivial-deferred",
          "type": "prod",
        },
        "ts-node" => Edge {
          "name": "ts-node",
          "spec": "^8.5.2",
          "to": "node_modules/ts-node",
          "type": "prod",
        },
        "typescript" => Edge {
          "name": "typescript",
          "spec": "^3.7.2",
          "to": "node_modules/typescript",
          "type": "prod",
        },
        "which" => Edge {
          "name": "which",
          "spec": "^2.0.2",
          "to": "node_modules/which",
          "type": "prod",
        },
        "write-file-atomic" => Edge {
          "name": "write-file-atomic",
          "spec": "^3.0.1",
          "to": "node_modules/write-file-atomic",
          "type": "prod",
        },
        "yaml" => Edge {
          "name": "yaml",
          "spec": "^1.7.2",
          "to": "node_modules/tap/node_modules/yaml",
          "type": "prod",
        },
        "yapool" => Edge {
          "name": "yapool",
          "spec": "^1.0.0",
          "to": "node_modules/yapool",
          "type": "prod",
        },
      },
      "location": "node_modules/tap",
      "name": "tap",
      "package": Object {
        "name": "tap",
        "version": "14.10.5",
      },
      "resolved": "https://registry.npmjs.org/tap/-/tap-14.10.5.tgz",
    },
    "tap-mocha-reporter" => Node {
      "children": Map {
        "debug" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap-mocha-reporter",
              "name": "debug",
              "spec": "^2.1.3",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ms" => Edge {
              "name": "ms",
              "spec": "2.0.0",
              "to": "node_modules/tap-mocha-reporter/node_modules/ms",
              "type": "prod",
            },
          },
          "location": "node_modules/tap-mocha-reporter/node_modules/debug",
          "name": "debug",
          "package": Object {
            "name": "debug",
            "version": "2.6.9",
          },
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
        },
        "diff" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap-mocha-reporter",
              "name": "diff",
              "spec": "^1.3.2",
              "type": "prod",
            },
          },
          "location": "node_modules/tap-mocha-reporter/node_modules/diff",
          "name": "diff",
          "package": Object {
            "name": "diff",
            "version": "1.4.0",
          },
          "resolved": "https://registry.npmjs.org/diff/-/diff-1.4.0.tgz",
        },
        "ms" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap-mocha-reporter/node_modules/debug",
              "name": "ms",
              "spec": "2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap-mocha-reporter/node_modules/ms",
          "name": "ms",
          "package": Object {
            "name": "ms",
            "version": "2.0.0",
          },
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "tap-mocha-reporter",
          "spec": "^5.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "color-support" => Edge {
          "name": "color-support",
          "spec": "^1.1.0",
          "to": "node_modules/color-support",
          "type": "prod",
        },
        "debug" => Edge {
          "name": "debug",
          "spec": "^2.1.3",
          "to": "node_modules/tap-mocha-reporter/node_modules/debug",
          "type": "prod",
        },
        "diff" => Edge {
          "name": "diff",
          "spec": "^1.3.2",
          "to": "node_modules/tap-mocha-reporter/node_modules/diff",
          "type": "prod",
        },
        "escape-string-regexp" => Edge {
          "name": "escape-string-regexp",
          "spec": "^1.0.3",
          "to": "node_modules/escape-string-regexp",
          "type": "prod",
        },
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.0.5",
          "to": "node_modules/glob",
          "type": "prod",
        },
        "readable-stream" => Edge {
          "name": "readable-stream",
          "spec": "^2.1.5",
          "to": "node_modules/readable-stream",
          "type": "optional",
        },
        "tap-parser" => Edge {
          "name": "tap-parser",
          "spec": "^10.0.0",
          "to": "node_modules/tap-parser",
          "type": "prod",
        },
        "tap-yaml" => Edge {
          "name": "tap-yaml",
          "spec": "^1.0.0",
          "to": "node_modules/tap-yaml",
          "type": "prod",
        },
        "unicode-length" => Edge {
          "name": "unicode-length",
          "spec": "^1.0.0",
          "to": "node_modules/unicode-length",
          "type": "prod",
        },
      },
      "location": "node_modules/tap-mocha-reporter",
      "name": "tap-mocha-reporter",
      "package": Object {
        "name": "tap-mocha-reporter",
        "version": "5.0.0",
      },
      "resolved": "https://registry.npmjs.org/tap-mocha-reporter/-/tap-mocha-reporter-5.0.0.tgz",
    },
    "tap-parser" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap-mocha-reporter",
          "name": "tap-parser",
          "spec": "^10.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "events-to-array" => Edge {
          "name": "events-to-array",
          "spec": "^1.0.1",
          "to": "node_modules/events-to-array",
          "type": "prod",
        },
        "minipass" => Edge {
          "name": "minipass",
          "spec": "^3.0.0",
          "to": "node_modules/minipass",
          "type": "prod",
        },
        "tap-yaml" => Edge {
          "name": "tap-yaml",
          "spec": "^1.0.0",
          "to": "node_modules/tap-yaml",
          "type": "prod",
        },
      },
      "location": "node_modules/tap-parser",
      "name": "tap-parser",
      "package": Object {
        "name": "tap-parser",
        "version": "10.0.1",
      },
      "resolved": "https://registry.npmjs.org/tap-parser/-/tap-parser-10.0.1.tgz",
    },
    "tap-yaml" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap-mocha-reporter",
          "name": "tap-yaml",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap-parser",
          "name": "tap-yaml",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "yaml" => Edge {
          "name": "yaml",
          "spec": "^1.5.0",
          "to": "node_modules/yaml",
          "type": "prod",
        },
      },
      "location": "node_modules/tap-yaml",
      "name": "tap-yaml",
      "package": Object {
        "name": "tap-yaml",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/tap-yaml/-/tap-yaml-1.0.0.tgz",
    },
    "tcompare" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "tcompare",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "diff-frag" => Edge {
          "name": "diff-frag",
          "spec": "^1.0.1",
          "to": "node_modules/diff-frag",
          "type": "prod",
        },
      },
      "location": "node_modules/tcompare",
      "name": "tcompare",
      "package": Object {
        "name": "tcompare",
        "version": "3.0.4",
      },
      "resolved": "https://registry.npmjs.org/tcompare/-/tcompare-3.0.4.tgz",
    },
    "test-exclude" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "test-exclude",
          "spec": "^5.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "read-pkg-up" => Edge {
          "name": "read-pkg-up",
          "spec": "^4.0.0",
          "to": "node_modules/read-pkg-up",
          "type": "prod",
        },
        "require-main-filename" => Edge {
          "name": "require-main-filename",
          "spec": "^2.0.0",
          "to": "node_modules/require-main-filename",
          "type": "prod",
        },
      },
      "location": "node_modules/test-exclude",
      "name": "test-exclude",
      "package": Object {
        "name": "test-exclude",
        "version": "5.2.3",
      },
      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-5.2.3.tgz",
    },
    "to-fast-properties" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/types",
          "name": "to-fast-properties",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/to-fast-properties",
      "name": "to-fast-properties",
      "package": Object {
        "name": "to-fast-properties",
        "version": "2.0.0",
      },
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
    },
    "to-regex-range" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/fill-range",
          "name": "to-regex-range",
          "spec": "^5.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-number" => Edge {
          "name": "is-number",
          "spec": "^7.0.0",
          "to": "node_modules/is-number",
          "type": "prod",
        },
      },
      "location": "node_modules/to-regex-range",
      "name": "to-regex-range",
      "package": Object {
        "name": "to-regex-range",
        "version": "5.0.1",
      },
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
    },
    "tough-cookie" => Node {
      "children": Map {
        "punycode" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tough-cookie",
              "name": "punycode",
              "spec": "^1.4.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tough-cookie/node_modules/punycode",
          "name": "punycode",
          "package": Object {
            "name": "punycode",
            "version": "1.4.1",
          },
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "tough-cookie",
          "spec": "~2.4.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "psl" => Edge {
          "name": "psl",
          "spec": "^1.1.24",
          "to": "node_modules/psl",
          "type": "prod",
        },
        "punycode" => Edge {
          "name": "punycode",
          "spec": "^1.4.1",
          "to": "node_modules/tough-cookie/node_modules/punycode",
          "type": "prod",
        },
      },
      "location": "node_modules/tough-cookie",
      "name": "tough-cookie",
      "package": Object {
        "name": "tough-cookie",
        "version": "2.4.3",
      },
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.4.3.tgz",
    },
    "trivial-deferred" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "trivial-deferred",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/trivial-deferred",
      "name": "trivial-deferred",
      "package": Object {
        "name": "trivial-deferred",
        "version": "1.0.1",
      },
      "resolved": "https://registry.npmjs.org/trivial-deferred/-/trivial-deferred-1.0.1.tgz",
    },
    "ts-node" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "ts-node",
          "spec": "^8.5.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "arg" => Edge {
          "name": "arg",
          "spec": "^4.1.0",
          "to": "node_modules/arg",
          "type": "prod",
        },
        "diff" => Edge {
          "name": "diff",
          "spec": "^4.0.1",
          "to": "node_modules/diff",
          "type": "prod",
        },
        "make-error" => Edge {
          "name": "make-error",
          "spec": "^1.1.1",
          "to": "node_modules/make-error",
          "type": "prod",
        },
        "source-map-support" => Edge {
          "name": "source-map-support",
          "spec": "^0.5.6",
          "to": "node_modules/source-map-support",
          "type": "prod",
        },
        "yn" => Edge {
          "name": "yn",
          "spec": "^3.0.0",
          "to": "node_modules/yn",
          "type": "prod",
        },
      },
      "location": "node_modules/ts-node",
      "name": "ts-node",
      "package": Object {
        "name": "ts-node",
        "version": "8.5.4",
      },
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-8.5.4.tgz",
    },
    "tunnel-agent" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "tunnel-agent",
          "spec": "^0.6.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "safe-buffer" => Edge {
          "name": "safe-buffer",
          "spec": "^5.0.1",
          "to": "node_modules/safe-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/tunnel-agent",
      "name": "tunnel-agent",
      "package": Object {
        "name": "tunnel-agent",
        "version": "0.6.0",
      },
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
    },
    "tweetnacl" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/bcrypt-pbkdf",
          "name": "tweetnacl",
          "spec": "^0.14.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/sshpk",
          "name": "tweetnacl",
          "spec": "~0.14.0",
          "type": "prod",
        },
      },
      "location": "node_modules/tweetnacl",
      "name": "tweetnacl",
      "package": Object {
        "name": "tweetnacl",
        "version": "0.14.5",
      },
      "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
    },
    "typedarray-to-buffer" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/write-file-atomic",
          "name": "typedarray-to-buffer",
          "spec": "^3.1.5",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-typedarray" => Edge {
          "name": "is-typedarray",
          "spec": "^1.0.0",
          "to": "node_modules/is-typedarray",
          "type": "prod",
        },
      },
      "location": "node_modules/typedarray-to-buffer",
      "name": "typedarray-to-buffer",
      "package": Object {
        "name": "typedarray-to-buffer",
        "version": "3.1.5",
      },
      "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
    },
    "typescript" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "typescript",
          "spec": "^3.7.2",
          "type": "prod",
        },
      },
      "location": "node_modules/typescript",
      "name": "typescript",
      "package": Object {
        "name": "typescript",
        "version": "3.7.4",
      },
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-3.7.4.tgz",
    },
    "uglify-js" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/handlebars",
          "name": "uglify-js",
          "spec": "^3.1.4",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "commander" => Edge {
          "name": "commander",
          "spec": "~2.20.3",
          "to": "node_modules/commander",
          "type": "prod",
        },
        "source-map" => Edge {
          "name": "source-map",
          "spec": "~0.6.1",
          "to": "node_modules/source-map",
          "type": "prod",
        },
      },
      "location": "node_modules/uglify-js",
      "name": "uglify-js",
      "optional": true,
      "package": Object {
        "name": "uglify-js",
        "version": "3.7.3",
      },
      "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.7.3.tgz",
    },
    "unicode-length" => Node {
      "children": Map {
        "ansi-regex" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/unicode-length/node_modules/strip-ansi",
              "name": "ansi-regex",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/unicode-length/node_modules/ansi-regex",
          "name": "ansi-regex",
          "package": Object {
            "name": "ansi-regex",
            "version": "2.1.1",
          },
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
        },
        "punycode" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/unicode-length",
              "name": "punycode",
              "spec": "^1.3.2",
              "type": "prod",
            },
          },
          "location": "node_modules/unicode-length/node_modules/punycode",
          "name": "punycode",
          "package": Object {
            "name": "punycode",
            "version": "1.4.1",
          },
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
        },
        "strip-ansi" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/unicode-length",
              "name": "strip-ansi",
              "spec": "^3.0.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-regex" => Edge {
              "name": "ansi-regex",
              "spec": "^2.0.0",
              "to": "node_modules/unicode-length/node_modules/ansi-regex",
              "type": "prod",
            },
          },
          "location": "node_modules/unicode-length/node_modules/strip-ansi",
          "name": "strip-ansi",
          "package": Object {
            "name": "strip-ansi",
            "version": "3.0.1",
          },
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap-mocha-reporter",
          "name": "unicode-length",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "punycode" => Edge {
          "name": "punycode",
          "spec": "^1.3.2",
          "to": "node_modules/unicode-length/node_modules/punycode",
          "type": "prod",
        },
        "strip-ansi" => Edge {
          "name": "strip-ansi",
          "spec": "^3.0.1",
          "to": "node_modules/unicode-length/node_modules/strip-ansi",
          "type": "prod",
        },
      },
      "location": "node_modules/unicode-length",
      "name": "unicode-length",
      "package": Object {
        "name": "unicode-length",
        "version": "1.0.3",
      },
      "resolved": "https://registry.npmjs.org/unicode-length/-/unicode-length-1.0.3.tgz",
    },
    "uri-js" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ajv",
          "name": "uri-js",
          "spec": "^4.2.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "punycode" => Edge {
          "name": "punycode",
          "spec": "^2.1.0",
          "to": "node_modules/punycode",
          "type": "prod",
        },
      },
      "location": "node_modules/uri-js",
      "name": "uri-js",
      "package": Object {
        "name": "uri-js",
        "version": "4.2.2",
      },
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
    },
    "util-deprecate" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/readable-stream",
          "name": "util-deprecate",
          "spec": "~1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/util-deprecate",
      "name": "util-deprecate",
      "optional": true,
      "package": Object {
        "name": "util-deprecate",
        "version": "1.0.2",
      },
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
    },
    "uuid" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-processinfo",
          "name": "uuid",
          "spec": "^3.3.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/nyc",
          "name": "uuid",
          "spec": "^3.3.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/request",
          "name": "uuid",
          "spec": "^3.3.2",
          "type": "prod",
        },
      },
      "location": "node_modules/uuid",
      "name": "uuid",
      "package": Object {
        "name": "uuid",
        "version": "3.3.3",
      },
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.3.3.tgz",
    },
    "validate-npm-package-license" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/normalize-package-data",
          "name": "validate-npm-package-license",
          "spec": "^3.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "spdx-correct" => Edge {
          "name": "spdx-correct",
          "spec": "^3.0.0",
          "to": "node_modules/spdx-correct",
          "type": "prod",
        },
        "spdx-expression-parse" => Edge {
          "name": "spdx-expression-parse",
          "spec": "^3.0.0",
          "to": "node_modules/spdx-expression-parse",
          "type": "prod",
        },
      },
      "location": "node_modules/validate-npm-package-license",
      "name": "validate-npm-package-license",
      "package": Object {
        "name": "validate-npm-package-license",
        "version": "3.0.4",
      },
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
    },
    "verror" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/jsprim",
          "name": "verror",
          "spec": "1.10.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "assert-plus" => Edge {
          "name": "assert-plus",
          "spec": "^1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
        "core-util-is" => Edge {
          "name": "core-util-is",
          "spec": "1.0.2",
          "to": "node_modules/core-util-is",
          "type": "prod",
        },
        "extsprintf" => Edge {
          "name": "extsprintf",
          "spec": "^1.2.0",
          "to": "node_modules/extsprintf",
          "type": "prod",
        },
      },
      "location": "node_modules/verror",
      "name": "verror",
      "package": Object {
        "name": "verror",
        "version": "1.10.0",
      },
      "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
    },
    "vlq" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/flow-remove-types",
          "name": "vlq",
          "spec": "^0.2.1",
          "type": "prod",
        },
      },
      "location": "node_modules/vlq",
      "name": "vlq",
      "package": Object {
        "name": "vlq",
        "version": "0.2.3",
      },
      "resolved": "https://registry.npmjs.org/vlq/-/vlq-0.2.3.tgz",
    },
    "which" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "which",
          "spec": "^2.0.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "isexe" => Edge {
          "name": "isexe",
          "spec": "^2.0.0",
          "to": "node_modules/isexe",
          "type": "prod",
        },
      },
      "location": "node_modules/which",
      "name": "which",
      "package": Object {
        "name": "which",
        "version": "2.0.2",
      },
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
    },
    "which-module" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yargs",
          "name": "which-module",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/which-module",
      "name": "which-module",
      "package": Object {
        "name": "which-module",
        "version": "2.0.0",
      },
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
    },
    "wordwrap" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/optimist",
          "name": "wordwrap",
          "spec": "~0.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/wordwrap",
      "name": "wordwrap",
      "package": Object {
        "name": "wordwrap",
        "version": "0.0.3",
      },
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.3.tgz",
    },
    "wrap-ansi" => Node {
      "children": Map {
        "ansi-regex" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/wrap-ansi/node_modules/strip-ansi",
              "name": "ansi-regex",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/wrap-ansi/node_modules/ansi-regex",
          "name": "ansi-regex",
          "package": Object {
            "name": "ansi-regex",
            "version": "2.1.1",
          },
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
        },
        "is-fullwidth-code-point" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/wrap-ansi/node_modules/string-width",
              "name": "is-fullwidth-code-point",
              "spec": "^1.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "number-is-nan" => Edge {
              "name": "number-is-nan",
              "spec": "^1.0.0",
              "to": "node_modules/number-is-nan",
              "type": "prod",
            },
          },
          "location": "node_modules/wrap-ansi/node_modules/is-fullwidth-code-point",
          "name": "is-fullwidth-code-point",
          "package": Object {
            "name": "is-fullwidth-code-point",
            "version": "1.0.0",
          },
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
        },
        "string-width" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/wrap-ansi",
              "name": "string-width",
              "spec": "^1.0.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "code-point-at" => Edge {
              "name": "code-point-at",
              "spec": "^1.0.0",
              "to": "node_modules/code-point-at",
              "type": "prod",
            },
            "is-fullwidth-code-point" => Edge {
              "name": "is-fullwidth-code-point",
              "spec": "^1.0.0",
              "to": "node_modules/wrap-ansi/node_modules/is-fullwidth-code-point",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^3.0.0",
              "to": "node_modules/wrap-ansi/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/wrap-ansi/node_modules/string-width",
          "name": "string-width",
          "package": Object {
            "name": "string-width",
            "version": "1.0.2",
          },
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
        },
        "strip-ansi" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/wrap-ansi",
              "name": "strip-ansi",
              "spec": "^3.0.1",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/wrap-ansi/node_modules/string-width",
              "name": "strip-ansi",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-regex" => Edge {
              "name": "ansi-regex",
              "spec": "^2.0.0",
              "to": "node_modules/wrap-ansi/node_modules/ansi-regex",
              "type": "prod",
            },
          },
          "location": "node_modules/wrap-ansi/node_modules/strip-ansi",
          "name": "strip-ansi",
          "package": Object {
            "name": "strip-ansi",
            "version": "3.0.1",
          },
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cliui",
          "name": "wrap-ansi",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "string-width" => Edge {
          "name": "string-width",
          "spec": "^1.0.1",
          "to": "node_modules/wrap-ansi/node_modules/string-width",
          "type": "prod",
        },
        "strip-ansi" => Edge {
          "name": "strip-ansi",
          "spec": "^3.0.1",
          "to": "node_modules/wrap-ansi/node_modules/strip-ansi",
          "type": "prod",
        },
      },
      "location": "node_modules/wrap-ansi",
      "name": "wrap-ansi",
      "package": Object {
        "name": "wrap-ansi",
        "version": "2.1.0",
      },
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
    },
    "wrappy" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "package": Object {
        "name": "wrappy",
        "version": "1.0.2",
      },
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
    },
    "write-file-atomic" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "write-file-atomic",
          "spec": "^3.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "imurmurhash" => Edge {
          "name": "imurmurhash",
          "spec": "^0.1.4",
          "to": "node_modules/imurmurhash",
          "type": "prod",
        },
        "is-typedarray" => Edge {
          "name": "is-typedarray",
          "spec": "^1.0.0",
          "to": "node_modules/is-typedarray",
          "type": "prod",
        },
        "signal-exit" => Edge {
          "name": "signal-exit",
          "spec": "^3.0.2",
          "to": "node_modules/signal-exit",
          "type": "prod",
        },
        "typedarray-to-buffer" => Edge {
          "name": "typedarray-to-buffer",
          "spec": "^3.1.5",
          "to": "node_modules/typedarray-to-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/write-file-atomic",
      "name": "write-file-atomic",
      "package": Object {
        "name": "write-file-atomic",
        "version": "3.0.1",
      },
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.1.tgz",
    },
    "y18n" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yargs",
          "name": "y18n",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/y18n",
      "name": "y18n",
      "package": Object {
        "name": "y18n",
        "version": "4.0.0",
      },
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.0.tgz",
    },
    "yallist" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/lru-cache",
          "name": "yallist",
          "spec": "^2.1.2",
          "type": "prod",
        },
      },
      "location": "node_modules/yallist",
      "name": "yallist",
      "package": Object {
        "name": "yallist",
        "version": "2.1.2",
      },
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
    },
    "yaml" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap-yaml",
          "name": "yaml",
          "spec": "^1.5.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/runtime" => Edge {
          "name": "@babel/runtime",
          "spec": "^7.6.3",
          "to": "node_modules/@babel/runtime",
          "type": "prod",
        },
      },
      "location": "node_modules/yaml",
      "name": "yaml",
      "package": Object {
        "name": "yaml",
        "version": "1.7.2",
      },
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.7.2.tgz",
    },
    "yapool" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "yapool",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/yapool",
      "name": "yapool",
      "package": Object {
        "name": "yapool",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/yapool/-/yapool-1.0.0.tgz",
    },
    "yargs" => Node {
      "children": Map {
        "ansi-regex" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/yargs/node_modules/strip-ansi",
              "name": "ansi-regex",
              "spec": "^4.1.0",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/ansi-regex",
          "name": "ansi-regex",
          "package": Object {
            "name": "ansi-regex",
            "version": "4.1.0",
          },
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
        },
        "cliui" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/yargs",
              "name": "cliui",
              "spec": "^5.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "string-width" => Edge {
              "name": "string-width",
              "spec": "^3.1.0",
              "to": "node_modules/yargs/node_modules/string-width",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^5.2.0",
              "to": "node_modules/yargs/node_modules/strip-ansi",
              "type": "prod",
            },
            "wrap-ansi" => Edge {
              "name": "wrap-ansi",
              "spec": "^5.1.0",
              "to": "node_modules/yargs/node_modules/wrap-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/cliui",
          "name": "cliui",
          "package": Object {
            "name": "cliui",
            "version": "5.0.0",
          },
          "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
        },
        "string-width" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/yargs",
              "name": "string-width",
              "spec": "^3.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/yargs/node_modules/cliui",
              "name": "string-width",
              "spec": "^3.1.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/yargs/node_modules/wrap-ansi",
              "name": "string-width",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "emoji-regex" => Edge {
              "name": "emoji-regex",
              "spec": "^7.0.1",
              "to": "node_modules/emoji-regex",
              "type": "prod",
            },
            "is-fullwidth-code-point" => Edge {
              "name": "is-fullwidth-code-point",
              "spec": "^2.0.0",
              "to": "node_modules/is-fullwidth-code-point",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^5.1.0",
              "to": "node_modules/yargs/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/string-width",
          "name": "string-width",
          "package": Object {
            "name": "string-width",
            "version": "3.1.0",
          },
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
        },
        "strip-ansi" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/yargs/node_modules/cliui",
              "name": "strip-ansi",
              "spec": "^5.2.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/yargs/node_modules/string-width",
              "name": "strip-ansi",
              "spec": "^5.1.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/yargs/node_modules/wrap-ansi",
              "name": "strip-ansi",
              "spec": "^5.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-regex" => Edge {
              "name": "ansi-regex",
              "spec": "^4.1.0",
              "to": "node_modules/yargs/node_modules/ansi-regex",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/strip-ansi",
          "name": "strip-ansi",
          "package": Object {
            "name": "strip-ansi",
            "version": "5.2.0",
          },
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
        },
        "wrap-ansi" => Node {
          "dev": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/yargs/node_modules/cliui",
              "name": "wrap-ansi",
              "spec": "^5.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-styles" => Edge {
              "name": "ansi-styles",
              "spec": "^3.2.0",
              "to": "node_modules/ansi-styles",
              "type": "prod",
            },
            "string-width" => Edge {
              "name": "string-width",
              "spec": "^3.0.0",
              "to": "node_modules/yargs/node_modules/string-width",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^5.0.0",
              "to": "node_modules/yargs/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/wrap-ansi",
          "name": "wrap-ansi",
          "package": Object {
            "name": "wrap-ansi",
            "version": "5.1.0",
          },
          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
        },
      },
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "yargs",
          "spec": "^13.2.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "cliui" => Edge {
          "name": "cliui",
          "spec": "^5.0.0",
          "to": "node_modules/yargs/node_modules/cliui",
          "type": "prod",
        },
        "find-up" => Edge {
          "name": "find-up",
          "spec": "^3.0.0",
          "to": "node_modules/find-up",
          "type": "prod",
        },
        "get-caller-file" => Edge {
          "name": "get-caller-file",
          "spec": "^2.0.1",
          "to": "node_modules/get-caller-file",
          "type": "prod",
        },
        "require-directory" => Edge {
          "name": "require-directory",
          "spec": "^2.1.1",
          "to": "node_modules/require-directory",
          "type": "prod",
        },
        "require-main-filename" => Edge {
          "name": "require-main-filename",
          "spec": "^2.0.0",
          "to": "node_modules/require-main-filename",
          "type": "prod",
        },
        "set-blocking" => Edge {
          "name": "set-blocking",
          "spec": "^2.0.0",
          "to": "node_modules/set-blocking",
          "type": "prod",
        },
        "string-width" => Edge {
          "name": "string-width",
          "spec": "^3.0.0",
          "to": "node_modules/yargs/node_modules/string-width",
          "type": "prod",
        },
        "which-module" => Edge {
          "name": "which-module",
          "spec": "^2.0.0",
          "to": "node_modules/which-module",
          "type": "prod",
        },
        "y18n" => Edge {
          "name": "y18n",
          "spec": "^4.0.0",
          "to": "node_modules/y18n",
          "type": "prod",
        },
        "yargs-parser" => Edge {
          "name": "yargs-parser",
          "spec": "^13.1.1",
          "to": "node_modules/yargs-parser",
          "type": "prod",
        },
      },
      "location": "node_modules/yargs",
      "name": "yargs",
      "package": Object {
        "name": "yargs",
        "version": "13.3.0",
      },
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-13.3.0.tgz",
    },
    "yargs-parser" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "yargs-parser",
          "spec": "^13.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/yargs",
          "name": "yargs-parser",
          "spec": "^13.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "camelcase" => Edge {
          "name": "camelcase",
          "spec": "^5.0.0",
          "to": "node_modules/camelcase",
          "type": "prod",
        },
        "decamelize" => Edge {
          "name": "decamelize",
          "spec": "^1.2.0",
          "to": "node_modules/decamelize",
          "type": "prod",
        },
      },
      "location": "node_modules/yargs-parser",
      "name": "yargs-parser",
      "package": Object {
        "name": "yargs-parser",
        "version": "13.1.1",
      },
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-13.1.1.tgz",
    },
    "yn" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ts-node",
          "name": "yn",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/yn",
      "name": "yn",
      "package": Object {
        "name": "yn",
        "version": "3.1.1",
      },
      "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
    },
  },
  "edgesOut": Map {
    "@isaacs/testing-bundledeps" => Edge {
      "name": "@isaacs/testing-bundledeps",
      "spec": "^1.0.0",
      "to": "node_modules/@isaacs/testing-bundledeps",
      "type": "prod",
    },
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "node_modules/abbrev",
      "type": "optional",
    },
    "tap" => Edge {
      "name": "tap",
      "spec": "^14.10.5",
      "to": "node_modules/tap",
      "type": "dev",
    },
  },
  "location": "",
  "name": "two-bundled-deps",
  "package": Object {
    "name": "two-bundled-deps",
    "version": "1.0.0",
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load a tree with a v1 lockfile > virtual tree with v1 shronk 1`] = `
Node {
  "children": Map {
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "once",
          "spec": "^1.4.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "package": Object {
        "name": "once",
        "version": "1.4.0",
      },
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "package": Object {
        "name": "wrappy",
        "version": "1.0.2",
      },
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "once" => Edge {
      "name": "once",
      "spec": "^1.4.0",
      "to": "node_modules/once",
      "type": "prod",
    },
  },
  "location": "",
  "name": "old-package-lock",
  "package": Object {
    "name": "old-package-lock",
    "version": undefined,
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load a tree with an empty root, no pj, and a lockfile > virtual tree with no deps 1`] = `
Node {
  "location": "",
  "name": "empty-with-shrinkwrap-no-pj",
  "package": Object {
    "name": "empty-with-shrinkwrap-no-pj",
    "version": undefined,
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load a tree with optional and dev dependencies > loaded virtual tree with dev/optional deps 1`] = `
Node {
  "children": Map {
    "diff-frag" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tcompare",
          "name": "diff-frag",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/diff-frag",
      "name": "diff-frag",
      "package": Object {
        "name": "diff-frag",
        "version": "1.0.1",
      },
      "resolved": "https://registry.npmjs.org/diff-frag/-/diff-frag-1.0.1.tgz",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "inflight",
          "spec": "^1.0.6",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "optional": true,
      "package": Object {
        "name": "inflight",
        "version": "1.0.6",
      },
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "once",
          "spec": "^1.4.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "package": Object {
        "name": "once",
        "version": "1.4.0",
      },
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
    },
    "tcompare" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "tcompare",
          "spec": "^4.0.1",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "diff-frag" => Edge {
          "name": "diff-frag",
          "spec": "^1.0.1",
          "to": "node_modules/diff-frag",
          "type": "prod",
        },
      },
      "location": "node_modules/tcompare",
      "name": "tcompare",
      "package": Object {
        "name": "tcompare",
        "version": "4.0.1",
      },
      "resolved": "https://registry.npmjs.org/tcompare/-/tcompare-4.0.1.tgz",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "package": Object {
        "name": "wrappy",
        "version": "1.0.2",
      },
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "inflight" => Edge {
      "name": "inflight",
      "spec": "^1.0.6",
      "to": "node_modules/inflight",
      "type": "optional",
    },
    "once" => Edge {
      "name": "once",
      "spec": "^1.4.0",
      "to": "node_modules/once",
      "type": "prod",
    },
    "tcompare" => Edge {
      "name": "tcompare",
      "spec": "^4.0.1",
      "to": "node_modules/tcompare",
      "type": "dev",
    },
  },
  "location": "",
  "name": "dev-deps",
  "package": Object {
    "name": "dev-deps",
    "version": "1.0.0",
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load a tree with some links to nodes outside of node_modules > loaded virtual tree with fsParents 1`] = `
Node {
  "children": Map {
    "@scope/x" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "@scope/x",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/x",
      "name": "@scope/x",
      "package": Object {
        "name": "@scope/x",
        "version": "1.0.0",
      },
      "resolved": "file:../.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
      "target": Object {
        "name": "@scope/x",
        "parent": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0",
      },
    },
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "a",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "package": Object {
        "name": "a",
        "version": "1.0.0",
      },
      "resolved": "file:.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
      "target": Object {
        "name": "a",
        "parent": "node_modules/.pnpm/registry.npmjs.org/a/1.0.0",
      },
    },
  },
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "spec": "",
      "to": "node_modules/@scope/x",
      "type": "prod",
    },
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "node_modules/a",
      "type": "prod",
    },
  },
  "location": "",
  "name": "pnpm",
  "package": Object {
    "name": "pnpm-root",
    "version": "1.0.0",
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load from cwd > loaded virtual tree from fixture 1`] = `
Node {
  "children": Map {
    "abbrev" => Node {
      "children": Map {
        "@scope/name" => Node {
          "children": Map {
            "@otherscope/othername" => Node {
              "edgesIn": Set {
                Edge {
                  "error": "INVALID",
                  "from": "node_modules/abbrev/node_modules/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "1.2.3",
                  "type": "prod",
                },
              },
              "location": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "name": "@otherscope/othername",
              "package": Object {
                "name": "@otherscope/othername",
                "version": undefined,
              },
              "resolved": "fake resolved value",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => Edge {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "1.2.3",
              "to": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "type": "prod",
            },
            "a-thing-which-is-not-here" => Edge {
              "error": "MISSING",
              "name": "a-thing-which-is-not-here",
              "spec": "2.4.5",
              "to": null,
              "type": "prod",
            },
          },
          "location": "node_modules/abbrev/node_modules/@scope/name",
          "name": "@scope/name",
          "package": Object {
            "name": "@scope/name",
            "version": undefined,
          },
          "resolved": null,
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "balanced-match" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "package": Object {
        "name": "balanced-match",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
    },
    "brace-expansion" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "node_modules/concat-map",
          "type": "prod",
        },
      },
      "location": "node_modules/brace-expansion",
      "name": "brace-expansion",
      "optional": true,
      "package": Object {
        "name": "brace-expansion",
        "version": "1.1.11",
      },
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
    },
    "bundler" => Node {
      "children": Map {
        "a" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "node_modules/bundler/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/a",
          "name": "a",
          "package": Object {
            "name": "a",
            "version": "1.2.3",
          },
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
        },
        "b" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/a",
              "name": "b",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "spec": "",
              "to": "node_modules/bundler/node_modules/c",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/b",
          "name": "b",
          "package": Object {
            "name": "b",
            "version": "1.2.3",
          },
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
        },
        "c" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/b",
              "name": "c",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/c",
          "name": "c",
          "package": Object {
            "name": "c",
            "version": "1.2.3",
          },
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "bundler",
          "spec": "1.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "node_modules/bundler/node_modules/a",
          "type": "prod",
        },
      },
      "location": "node_modules/bundler",
      "name": "bundler",
      "package": Object {
        "name": "bundler",
        "version": "1.2.3",
      },
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
    },
    "concat-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "optional": true,
      "package": Object {
        "name": "concat-map",
        "version": "0.0.1",
      },
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
    },
    "fs.realpath" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "package": Object {
        "name": "fs.realpath",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
    },
    "full-git-url" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "full-git-url",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "type": "prod",
        },
      },
      "location": "node_modules/full-git-url",
      "name": "full-git-url",
      "package": Object {
        "name": "full-git-url",
        "version": undefined,
      },
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "ghshort",
          "spec": "github:isaacs/abbrev-js",
          "type": "prod",
        },
      },
      "location": "node_modules/ghshort",
      "name": "ghshort",
      "package": Object {
        "name": "ghshort",
        "version": undefined,
      },
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => Node {
      "location": "node_modules/ghtgz",
      "name": "ghtgz",
      "package": Object {
        "name": "ghtgz",
        "version": undefined,
      },
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => Edge {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "node_modules/inflight",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "2",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "node_modules/glob",
      "name": "glob",
      "optional": true,
      "package": Object {
        "name": "glob",
        "version": "7.1.4",
      },
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "optional": true,
      "package": Object {
        "name": "inflight",
        "version": "1.0.6",
      },
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
    },
    "inherits" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "node_modules/inherits",
      "name": "inherits",
      "optional": true,
      "package": Object {
        "name": "inherits",
        "version": "2.0.4",
      },
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
    },
    "minimatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "optional": true,
      "package": Object {
        "name": "minimatch",
        "version": "3.0.4",
      },
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
    },
    "old" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "old",
          "spec": "npm:abbrev@^1.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/old",
      "name": "old",
      "package": Object {
        "name": "abbrev",
        "version": "1.0.3",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "package": Object {
        "name": "once",
        "version": "1.4.0",
      },
      "resolved": "file:{CWD}/test/fixtures/install-types/once-1.4.0.tgz",
    },
    "path-is-absolute" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "package": Object {
        "name": "path-is-absolute",
        "version": "1.0.1",
      },
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
    },
    "pinned" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "pinned",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/pinned",
      "name": "pinned",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "really-bad-invalid" => Node {
      "location": "node_modules/really-bad-invalid",
      "name": "really-bad-invalid",
      "package": Object {
        "name": "really-bad-invalid",
        "version": undefined,
      },
      "resolved": null,
    },
    "reg" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "reg",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/reg",
      "name": "reg",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
    },
    "remote" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "remote",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/remote",
      "name": "remote",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "rimraf" => Node {
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "optional",
        },
      },
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "package": Object {
        "name": "rimraf",
        "version": "2.6.3",
      },
      "resolved": "file:{CWD}/test/fixtures/install-types/rimraf-2.6.3.tgz",
    },
    "symlink" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "symlink",
          "spec": "file:./abbrev-link-target",
          "type": "prod",
        },
      },
      "location": "node_modules/symlink",
      "name": "symlink",
      "package": Object {
        "name": "abbrev-link-target",
        "version": undefined,
      },
      "resolved": "file:../abbrev-link-target",
      "target": Object {
        "name": "abbrev-link-target",
        "parent": null,
      },
    },
    "symlink-in-tree" => Link {
      "location": "node_modules/symlink-in-tree",
      "name": "symlink-in-tree",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "file:abbrev",
      "target": Object {
        "name": "abbrev",
        "parent": "",
      },
    },
    "tarball" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "tarball",
          "spec": "file:abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/tarball",
      "name": "tarball",
      "package": Object {
        "name": "tarball",
        "version": undefined,
      },
      "resolved": "file:{CWD}/test/fixtures/install-types/abbrev-1.1.1.tgz",
    },
    "tarball-no-integrity" => Node {
      "dev": true,
      "location": "node_modules/tarball-no-integrity",
      "name": "tarball-no-integrity",
      "package": Object {
        "name": "tarball-no-integrity",
        "version": undefined,
      },
      "resolved": "file:{CWD}/test/fixtures/install-types/abbrev-1.1.1.tgz",
    },
    "unhosted-git" => Node {
      "location": "node_modules/unhosted-git",
      "name": "unhosted-git",
      "package": Object {
        "name": "unhosted-git",
        "version": undefined,
      },
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "package": Object {
        "name": "wrappy",
        "version": "1.0.2",
      },
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "bundler" => Edge {
      "name": "bundler",
      "spec": "1.2.3",
      "to": "node_modules/bundler",
      "type": "prod",
    },
    "full-git-url" => Edge {
      "name": "full-git-url",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "node_modules/full-git-url",
      "type": "prod",
    },
    "ghshort" => Edge {
      "name": "ghshort",
      "spec": "github:isaacs/abbrev-js",
      "to": "node_modules/ghshort",
      "type": "prod",
    },
    "old" => Edge {
      "name": "old",
      "spec": "npm:abbrev@^1.0.3",
      "to": "node_modules/old",
      "type": "prod",
    },
    "pinned" => Edge {
      "name": "pinned",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/pinned",
      "type": "prod",
    },
    "reg" => Edge {
      "name": "reg",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/reg",
      "type": "prod",
    },
    "remote" => Edge {
      "name": "remote",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "node_modules/remote",
      "type": "prod",
    },
    "symlink" => Edge {
      "name": "symlink",
      "spec": "file:./abbrev-link-target",
      "to": "node_modules/symlink",
      "type": "prod",
    },
    "tarball" => Edge {
      "name": "tarball",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "node_modules/tarball",
      "type": "prod",
    },
  },
  "location": "",
  "name": "install-types",
  "package": Object {
    "name": "a",
    "version": "1.2.3",
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load from fixture > loaded virtual tree from fixture 1`] = `
Node {
  "children": Map {
    "abbrev" => Node {
      "children": Map {
        "@scope/name" => Node {
          "children": Map {
            "@otherscope/othername" => Node {
              "edgesIn": Set {
                Edge {
                  "error": "INVALID",
                  "from": "node_modules/abbrev/node_modules/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "1.2.3",
                  "type": "prod",
                },
              },
              "location": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "name": "@otherscope/othername",
              "package": Object {
                "name": "@otherscope/othername",
                "version": undefined,
              },
              "resolved": "fake resolved value",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => Edge {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "1.2.3",
              "to": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "type": "prod",
            },
            "a-thing-which-is-not-here" => Edge {
              "error": "MISSING",
              "name": "a-thing-which-is-not-here",
              "spec": "2.4.5",
              "to": null,
              "type": "prod",
            },
          },
          "location": "node_modules/abbrev/node_modules/@scope/name",
          "name": "@scope/name",
          "package": Object {
            "name": "@scope/name",
            "version": undefined,
          },
          "resolved": null,
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "balanced-match" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "package": Object {
        "name": "balanced-match",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
    },
    "brace-expansion" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "node_modules/concat-map",
          "type": "prod",
        },
      },
      "location": "node_modules/brace-expansion",
      "name": "brace-expansion",
      "optional": true,
      "package": Object {
        "name": "brace-expansion",
        "version": "1.1.11",
      },
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
    },
    "bundler" => Node {
      "children": Map {
        "a" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "node_modules/bundler/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/a",
          "name": "a",
          "package": Object {
            "name": "a",
            "version": "1.2.3",
          },
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
        },
        "b" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/a",
              "name": "b",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "spec": "",
              "to": "node_modules/bundler/node_modules/c",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/b",
          "name": "b",
          "package": Object {
            "name": "b",
            "version": "1.2.3",
          },
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
        },
        "c" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/b",
              "name": "c",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/c",
          "name": "c",
          "package": Object {
            "name": "c",
            "version": "1.2.3",
          },
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "bundler",
          "spec": "1.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "node_modules/bundler/node_modules/a",
          "type": "prod",
        },
      },
      "location": "node_modules/bundler",
      "name": "bundler",
      "package": Object {
        "name": "bundler",
        "version": "1.2.3",
      },
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
    },
    "concat-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "optional": true,
      "package": Object {
        "name": "concat-map",
        "version": "0.0.1",
      },
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
    },
    "fs.realpath" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "package": Object {
        "name": "fs.realpath",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
    },
    "full-git-url" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "full-git-url",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "type": "prod",
        },
      },
      "location": "node_modules/full-git-url",
      "name": "full-git-url",
      "package": Object {
        "name": "full-git-url",
        "version": undefined,
      },
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "ghshort",
          "spec": "github:isaacs/abbrev-js",
          "type": "prod",
        },
      },
      "location": "node_modules/ghshort",
      "name": "ghshort",
      "package": Object {
        "name": "ghshort",
        "version": undefined,
      },
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => Node {
      "location": "node_modules/ghtgz",
      "name": "ghtgz",
      "package": Object {
        "name": "ghtgz",
        "version": undefined,
      },
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => Edge {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "node_modules/inflight",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "2",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "node_modules/glob",
      "name": "glob",
      "optional": true,
      "package": Object {
        "name": "glob",
        "version": "7.1.4",
      },
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "optional": true,
      "package": Object {
        "name": "inflight",
        "version": "1.0.6",
      },
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
    },
    "inherits" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "node_modules/inherits",
      "name": "inherits",
      "optional": true,
      "package": Object {
        "name": "inherits",
        "version": "2.0.4",
      },
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
    },
    "minimatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "optional": true,
      "package": Object {
        "name": "minimatch",
        "version": "3.0.4",
      },
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
    },
    "old" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "old",
          "spec": "npm:abbrev@^1.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/old",
      "name": "old",
      "package": Object {
        "name": "abbrev",
        "version": "1.0.3",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "package": Object {
        "name": "once",
        "version": "1.4.0",
      },
      "resolved": "file:{CWD}/test/fixtures/install-types/once-1.4.0.tgz",
    },
    "path-is-absolute" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "package": Object {
        "name": "path-is-absolute",
        "version": "1.0.1",
      },
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
    },
    "pinned" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "pinned",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/pinned",
      "name": "pinned",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "really-bad-invalid" => Node {
      "location": "node_modules/really-bad-invalid",
      "name": "really-bad-invalid",
      "package": Object {
        "name": "really-bad-invalid",
        "version": undefined,
      },
      "resolved": null,
    },
    "reg" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "reg",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/reg",
      "name": "reg",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
    },
    "remote" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "remote",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/remote",
      "name": "remote",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "rimraf" => Node {
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "optional",
        },
      },
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "package": Object {
        "name": "rimraf",
        "version": "2.6.3",
      },
      "resolved": "file:{CWD}/test/fixtures/install-types/rimraf-2.6.3.tgz",
    },
    "symlink" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "symlink",
          "spec": "file:./abbrev-link-target",
          "type": "prod",
        },
      },
      "location": "node_modules/symlink",
      "name": "symlink",
      "package": Object {
        "name": "abbrev-link-target",
        "version": undefined,
      },
      "resolved": "file:../abbrev-link-target",
      "target": Object {
        "name": "abbrev-link-target",
        "parent": null,
      },
    },
    "symlink-in-tree" => Link {
      "location": "node_modules/symlink-in-tree",
      "name": "symlink-in-tree",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "file:abbrev",
      "target": Object {
        "name": "abbrev",
        "parent": "",
      },
    },
    "tarball" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "tarball",
          "spec": "file:abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/tarball",
      "name": "tarball",
      "package": Object {
        "name": "tarball",
        "version": undefined,
      },
      "resolved": "file:{CWD}/test/fixtures/install-types/abbrev-1.1.1.tgz",
    },
    "tarball-no-integrity" => Node {
      "dev": true,
      "location": "node_modules/tarball-no-integrity",
      "name": "tarball-no-integrity",
      "package": Object {
        "name": "tarball-no-integrity",
        "version": undefined,
      },
      "resolved": "file:{CWD}/test/fixtures/install-types/abbrev-1.1.1.tgz",
    },
    "unhosted-git" => Node {
      "location": "node_modules/unhosted-git",
      "name": "unhosted-git",
      "package": Object {
        "name": "unhosted-git",
        "version": undefined,
      },
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "package": Object {
        "name": "wrappy",
        "version": "1.0.2",
      },
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "bundler" => Edge {
      "name": "bundler",
      "spec": "1.2.3",
      "to": "node_modules/bundler",
      "type": "prod",
    },
    "full-git-url" => Edge {
      "name": "full-git-url",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "node_modules/full-git-url",
      "type": "prod",
    },
    "ghshort" => Edge {
      "name": "ghshort",
      "spec": "github:isaacs/abbrev-js",
      "to": "node_modules/ghshort",
      "type": "prod",
    },
    "old" => Edge {
      "name": "old",
      "spec": "npm:abbrev@^1.0.3",
      "to": "node_modules/old",
      "type": "prod",
    },
    "pinned" => Edge {
      "name": "pinned",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/pinned",
      "type": "prod",
    },
    "reg" => Edge {
      "name": "reg",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/reg",
      "type": "prod",
    },
    "remote" => Edge {
      "name": "remote",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "node_modules/remote",
      "type": "prod",
    },
    "symlink" => Edge {
      "name": "symlink",
      "spec": "file:./abbrev-link-target",
      "to": "node_modules/symlink",
      "type": "prod",
    },
    "tarball" => Edge {
      "name": "tarball",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "node_modules/tarball",
      "type": "prod",
    },
  },
  "location": "",
  "name": "install-types",
  "package": Object {
    "name": "a",
    "version": "1.2.3",
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load from npm-shrinkwrap.json > loaded virtual tree from fixture 1`] = `
Node {
  "children": Map {
    "abbrev" => Node {
      "children": Map {
        "@scope/name" => Node {
          "children": Map {
            "@otherscope/othername" => Node {
              "edgesIn": Set {
                Edge {
                  "error": "INVALID",
                  "from": "node_modules/abbrev/node_modules/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "1.2.3",
                  "type": "prod",
                },
              },
              "location": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "name": "@otherscope/othername",
              "package": Object {
                "name": "@otherscope/othername",
                "version": undefined,
              },
              "resolved": "fake resolved value",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => Edge {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "1.2.3",
              "to": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "type": "prod",
            },
            "a-thing-which-is-not-here" => Edge {
              "error": "MISSING",
              "name": "a-thing-which-is-not-here",
              "spec": "2.4.5",
              "to": null,
              "type": "prod",
            },
          },
          "location": "node_modules/abbrev/node_modules/@scope/name",
          "name": "@scope/name",
          "package": Object {
            "name": "@scope/name",
            "version": undefined,
          },
          "resolved": null,
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "balanced-match" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "package": Object {
        "name": "balanced-match",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
    },
    "brace-expansion" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "node_modules/concat-map",
          "type": "prod",
        },
      },
      "location": "node_modules/brace-expansion",
      "name": "brace-expansion",
      "optional": true,
      "package": Object {
        "name": "brace-expansion",
        "version": "1.1.11",
      },
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
    },
    "bundler" => Node {
      "children": Map {
        "a" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "node_modules/bundler/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/a",
          "name": "a",
          "package": Object {
            "name": "a",
            "version": "1.2.3",
          },
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
        },
        "b" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/a",
              "name": "b",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "spec": "",
              "to": "node_modules/bundler/node_modules/c",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/b",
          "name": "b",
          "package": Object {
            "name": "b",
            "version": "1.2.3",
          },
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
        },
        "c" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/b",
              "name": "c",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/c",
          "name": "c",
          "package": Object {
            "name": "c",
            "version": "1.2.3",
          },
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "bundler",
          "spec": "1.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "node_modules/bundler/node_modules/a",
          "type": "prod",
        },
      },
      "location": "node_modules/bundler",
      "name": "bundler",
      "package": Object {
        "name": "bundler",
        "version": "1.2.3",
      },
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
    },
    "concat-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "optional": true,
      "package": Object {
        "name": "concat-map",
        "version": "0.0.1",
      },
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
    },
    "fs.realpath" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "package": Object {
        "name": "fs.realpath",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
    },
    "full-git-url" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "full-git-url",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "type": "prod",
        },
      },
      "location": "node_modules/full-git-url",
      "name": "full-git-url",
      "package": Object {
        "name": "full-git-url",
        "version": undefined,
      },
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "ghshort",
          "spec": "github:isaacs/abbrev-js",
          "type": "prod",
        },
      },
      "location": "node_modules/ghshort",
      "name": "ghshort",
      "package": Object {
        "name": "ghshort",
        "version": undefined,
      },
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => Node {
      "location": "node_modules/ghtgz",
      "name": "ghtgz",
      "package": Object {
        "name": "ghtgz",
        "version": undefined,
      },
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => Edge {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "node_modules/inflight",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "2",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "node_modules/glob",
      "name": "glob",
      "optional": true,
      "package": Object {
        "name": "glob",
        "version": "7.1.4",
      },
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "optional": true,
      "package": Object {
        "name": "inflight",
        "version": "1.0.6",
      },
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
    },
    "inherits" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "node_modules/inherits",
      "name": "inherits",
      "optional": true,
      "package": Object {
        "name": "inherits",
        "version": "2.0.4",
      },
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
    },
    "minimatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "optional": true,
      "package": Object {
        "name": "minimatch",
        "version": "3.0.4",
      },
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
    },
    "old" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "old",
          "spec": "npm:abbrev@^1.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/old",
      "name": "old",
      "package": Object {
        "name": "abbrev",
        "version": "1.0.3",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "package": Object {
        "name": "once",
        "version": "1.4.0",
      },
      "resolved": "file:{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/once-1.4.0.tgz",
    },
    "path-is-absolute" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "package": Object {
        "name": "path-is-absolute",
        "version": "1.0.1",
      },
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
    },
    "pinned" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "pinned",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/pinned",
      "name": "pinned",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "really-bad-invalid" => Node {
      "location": "node_modules/really-bad-invalid",
      "name": "really-bad-invalid",
      "package": Object {
        "name": "really-bad-invalid",
        "version": undefined,
      },
      "resolved": null,
    },
    "reg" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "reg",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/reg",
      "name": "reg",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
    },
    "remote" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "remote",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/remote",
      "name": "remote",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "rimraf" => Node {
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "optional",
        },
      },
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "package": Object {
        "name": "rimraf",
        "version": "2.6.3",
      },
      "resolved": "file:{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/rimraf-2.6.3.tgz",
    },
    "symlink" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "symlink",
          "spec": "file:./abbrev-link-target",
          "type": "prod",
        },
      },
      "location": "node_modules/symlink",
      "name": "symlink",
      "package": Object {
        "name": "abbrev-link-target",
        "version": undefined,
      },
      "resolved": "file:../abbrev-link-target",
      "target": Object {
        "name": "abbrev-link-target",
        "parent": null,
      },
    },
    "symlink-in-tree" => Link {
      "location": "node_modules/symlink-in-tree",
      "name": "symlink-in-tree",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "file:abbrev",
      "target": Object {
        "name": "abbrev",
        "parent": "",
      },
    },
    "tarball" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "tarball",
          "spec": "file:abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/tarball",
      "name": "tarball",
      "package": Object {
        "name": "tarball",
        "version": undefined,
      },
      "resolved": "file:{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/abbrev-1.1.1.tgz",
    },
    "tarball-no-integrity" => Node {
      "dev": true,
      "location": "node_modules/tarball-no-integrity",
      "name": "tarball-no-integrity",
      "package": Object {
        "name": "tarball-no-integrity",
        "version": undefined,
      },
      "resolved": "file:{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/abbrev-1.1.1.tgz",
    },
    "unhosted-git" => Node {
      "location": "node_modules/unhosted-git",
      "name": "unhosted-git",
      "package": Object {
        "name": "unhosted-git",
        "version": undefined,
      },
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "package": Object {
        "name": "wrappy",
        "version": "1.0.2",
      },
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "bundler" => Edge {
      "name": "bundler",
      "spec": "1.2.3",
      "to": "node_modules/bundler",
      "type": "prod",
    },
    "full-git-url" => Edge {
      "name": "full-git-url",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "node_modules/full-git-url",
      "type": "prod",
    },
    "ghshort" => Edge {
      "name": "ghshort",
      "spec": "github:isaacs/abbrev-js",
      "to": "node_modules/ghshort",
      "type": "prod",
    },
    "old" => Edge {
      "name": "old",
      "spec": "npm:abbrev@^1.0.3",
      "to": "node_modules/old",
      "type": "prod",
    },
    "pinned" => Edge {
      "name": "pinned",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/pinned",
      "type": "prod",
    },
    "reg" => Edge {
      "name": "reg",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/reg",
      "type": "prod",
    },
    "remote" => Edge {
      "name": "remote",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "node_modules/remote",
      "type": "prod",
    },
    "symlink" => Edge {
      "name": "symlink",
      "spec": "file:./abbrev-link-target",
      "to": "node_modules/symlink",
      "type": "prod",
    },
    "tarball" => Edge {
      "name": "tarball",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "node_modules/tarball",
      "type": "prod",
    },
  },
  "location": "",
  "name": "load-virtual-load-from-npm-shrinkwrap-json",
  "package": Object {
    "name": "a",
    "version": "1.2.3",
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load without a root package.json is fine > loaded virtual no package json 1`] = `
Node {
  "children": Map {
    "abbrev" => Node {
      "children": Map {
        "@scope/name" => Node {
          "children": Map {
            "@otherscope/othername" => Node {
              "edgesIn": Set {
                Edge {
                  "error": "INVALID",
                  "from": "node_modules/abbrev/node_modules/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "1.2.3",
                  "type": "prod",
                },
              },
              "location": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "name": "@otherscope/othername",
              "package": Object {
                "name": "@otherscope/othername",
                "version": undefined,
              },
              "resolved": "fake resolved value",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => Edge {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "1.2.3",
              "to": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "type": "prod",
            },
            "a-thing-which-is-not-here" => Edge {
              "error": "MISSING",
              "name": "a-thing-which-is-not-here",
              "spec": "2.4.5",
              "to": null,
              "type": "prod",
            },
          },
          "location": "node_modules/abbrev/node_modules/@scope/name",
          "name": "@scope/name",
          "package": Object {
            "name": "@scope/name",
            "version": undefined,
          },
          "resolved": null,
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "balanced-match" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "package": Object {
        "name": "balanced-match",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
    },
    "brace-expansion" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "node_modules/concat-map",
          "type": "prod",
        },
      },
      "location": "node_modules/brace-expansion",
      "name": "brace-expansion",
      "optional": true,
      "package": Object {
        "name": "brace-expansion",
        "version": "1.1.11",
      },
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
    },
    "bundler" => Node {
      "children": Map {
        "a" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "node_modules/bundler/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/a",
          "name": "a",
          "package": Object {
            "name": "a",
            "version": "1.2.3",
          },
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
        },
        "b" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/a",
              "name": "b",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "spec": "",
              "to": "node_modules/bundler/node_modules/c",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/b",
          "name": "b",
          "package": Object {
            "name": "b",
            "version": "1.2.3",
          },
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
        },
        "c" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/b",
              "name": "c",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/c",
          "name": "c",
          "package": Object {
            "name": "c",
            "version": "1.2.3",
          },
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "node_modules/bundler/node_modules/a",
          "type": "prod",
        },
      },
      "location": "node_modules/bundler",
      "name": "bundler",
      "package": Object {
        "name": "bundler",
        "version": "1.2.3",
      },
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
    },
    "concat-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "optional": true,
      "package": Object {
        "name": "concat-map",
        "version": "0.0.1",
      },
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
    },
    "fs.realpath" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "package": Object {
        "name": "fs.realpath",
        "version": "1.0.0",
      },
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
    },
    "full-git-url" => Node {
      "location": "node_modules/full-git-url",
      "name": "full-git-url",
      "package": Object {
        "name": "full-git-url",
        "version": undefined,
      },
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => Node {
      "location": "node_modules/ghshort",
      "name": "ghshort",
      "package": Object {
        "name": "ghshort",
        "version": undefined,
      },
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => Node {
      "location": "node_modules/ghtgz",
      "name": "ghtgz",
      "package": Object {
        "name": "ghtgz",
        "version": undefined,
      },
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => Edge {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "node_modules/inflight",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "2",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "node_modules/glob",
      "name": "glob",
      "optional": true,
      "package": Object {
        "name": "glob",
        "version": "7.1.4",
      },
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "optional": true,
      "package": Object {
        "name": "inflight",
        "version": "1.0.6",
      },
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
    },
    "inherits" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "node_modules/inherits",
      "name": "inherits",
      "optional": true,
      "package": Object {
        "name": "inherits",
        "version": "2.0.4",
      },
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
    },
    "minimatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "optional": true,
      "package": Object {
        "name": "minimatch",
        "version": "3.0.4",
      },
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
    },
    "old" => Node {
      "location": "node_modules/old",
      "name": "old",
      "package": Object {
        "name": "abbrev",
        "version": "1.0.3",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "package": Object {
        "name": "once",
        "version": "1.4.0",
      },
      "resolved": "file:{CWD}/test/fixtures/install-types-sw-only/once-1.4.0.tgz",
    },
    "path-is-absolute" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "package": Object {
        "name": "path-is-absolute",
        "version": "1.0.1",
      },
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
    },
    "pinned" => Node {
      "location": "node_modules/pinned",
      "name": "pinned",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "really-bad-invalid" => Node {
      "location": "node_modules/really-bad-invalid",
      "name": "really-bad-invalid",
      "package": Object {
        "name": "really-bad-invalid",
        "version": undefined,
      },
      "resolved": null,
    },
    "reg" => Node {
      "location": "node_modules/reg",
      "name": "reg",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
    },
    "remote" => Node {
      "location": "node_modules/remote",
      "name": "remote",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "rimraf" => Node {
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "optional",
        },
      },
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "package": Object {
        "name": "rimraf",
        "version": "2.6.3",
      },
      "resolved": "file:{CWD}/test/fixtures/install-types-sw-only/rimraf-2.6.3.tgz",
    },
    "symlink" => Link {
      "location": "node_modules/symlink",
      "name": "symlink",
      "package": Object {
        "name": "abbrev-link-target",
        "version": undefined,
      },
      "resolved": "file:../abbrev-link-target",
      "target": Object {
        "name": "abbrev-link-target",
        "parent": null,
      },
    },
    "symlink-in-tree" => Link {
      "location": "node_modules/symlink-in-tree",
      "name": "symlink-in-tree",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "file:abbrev",
      "target": Object {
        "name": "abbrev",
        "parent": "",
      },
    },
    "tarball" => Node {
      "dev": true,
      "location": "node_modules/tarball",
      "name": "tarball",
      "package": Object {
        "name": "tarball",
        "version": undefined,
      },
      "resolved": "file:{CWD}/test/fixtures/install-types-sw-only/abbrev-1.1.1.tgz",
    },
    "tarball-no-integrity" => Node {
      "dev": true,
      "location": "node_modules/tarball-no-integrity",
      "name": "tarball-no-integrity",
      "package": Object {
        "name": "tarball-no-integrity",
        "version": undefined,
      },
      "resolved": "file:{CWD}/test/fixtures/install-types-sw-only/abbrev-1.1.1.tgz",
    },
    "unhosted-git" => Node {
      "location": "node_modules/unhosted-git",
      "name": "unhosted-git",
      "package": Object {
        "name": "unhosted-git",
        "version": undefined,
      },
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "package": Object {
        "name": "wrappy",
        "version": "1.0.2",
      },
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "location": "",
  "name": "install-types-sw-only",
  "package": Object {
    "name": "a",
    "version": "1.2.3",
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP tree with link deps of link deps > expect resolving Promise 1`] = `
Node {
  "children": Map {
    "app" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "app",
          "spec": "file:./app",
          "type": "prod",
        },
      },
      "location": "node_modules/app",
      "name": "app",
      "package": Object {
        "name": "app",
        "version": undefined,
      },
      "resolved": "file:../app",
      "target": Object {
        "name": "app",
        "parent": null,
      },
    },
    "lib" => Link {
      "edgesIn": Set {
        Edge {
          "from": "app",
          "name": "lib",
          "spec": "file:../lib",
          "type": "prod",
        },
      },
      "location": "node_modules/lib",
      "name": "lib",
      "package": Object {
        "name": "lib",
        "version": undefined,
      },
      "resolved": "file:../lib",
      "target": Object {
        "name": "lib",
        "parent": null,
      },
    },
  },
  "edgesOut": Map {
    "app" => Edge {
      "name": "app",
      "spec": "file:./app",
      "to": "node_modules/app",
      "type": "prod",
    },
  },
  "location": "",
  "name": "cli-750",
  "package": Object {
    "name": "monorepo",
    "version": undefined,
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load a simple example > virtual tree with multiple bundles 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "package": Object {
        "name": "a",
        "version": "1.0.0",
      },
      "resolved": "file:../a",
      "target": Object {
        "name": "a",
        "parent": null,
      },
    },
    "b" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "b",
          "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/b",
          "type": "workspace",
        },
        Edge {
          "from": "a",
          "name": "b",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "package": Object {
        "name": "b",
        "version": "1.0.0",
      },
      "resolved": "file:../b",
      "target": Object {
        "name": "b",
        "parent": null,
      },
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
    "b" => Edge {
      "name": "b",
      "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/b",
      "to": "node_modules/b",
      "type": "workspace",
    },
  },
  "location": "",
  "name": "workspaces-simple-virtual",
  "package": Object {
    "name": "workspace-simple",
    "version": undefined,
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load conflicting dep versions example > virtual tree with resolved conflicting dependencies 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/packages/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "package": Object {
        "name": "a",
        "version": "1.0.0",
      },
      "resolved": "file:../packages/a",
      "target": Object {
        "name": "a",
        "parent": null,
      },
    },
    "abbrev" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "b" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "b",
          "spec": "file:{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/packages/b",
          "type": "workspace",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "package": Object {
        "name": "b",
        "version": "1.0.0",
      },
      "resolved": "file:../packages/b",
      "target": Object {
        "name": "b",
        "parent": null,
      },
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/packages/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "b" => Edge {
      "name": "b",
      "spec": "file:{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/packages/b",
      "to": "node_modules/b",
      "type": "workspace",
    },
  },
  "location": "",
  "name": "workspaces-conflicting-versions-virtual",
  "package": Object {
    "name": "workspaces-conflicting-deps",
    "version": "1.0.0",
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load installed from registry on version not satisfied > virtual tree with deduped dep 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual/packages/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "package": Object {
        "name": "a",
        "version": "1.0.0",
      },
      "resolved": "file:../packages/a",
      "target": Object {
        "name": "a",
        "parent": null,
      },
    },
    "abbrev" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "abbrev",
          "spec": "file:{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual/packages/abbrev",
          "type": "workspace",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "package": Object {
        "name": "abbrev",
        "version": "2.0.0",
      },
      "resolved": "file:../packages/abbrev",
      "target": Object {
        "name": "abbrev",
        "parent": null,
      },
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual/packages/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "file:{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual/packages/abbrev",
      "to": "node_modules/abbrev",
      "type": "workspace",
    },
  },
  "location": "",
  "name": "workspaces-version-unsatisfied-virtual",
  "package": Object {
    "name": "workspaces-version-unsatisfied",
    "version": "1.0.0",
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load installed tree with ignored nested node_modules folders > virtual tree ignoring nested node_modules 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-ignore-nm-virtual/packages/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "package": Object {
        "name": "a",
        "version": "1.0.0",
      },
      "resolved": "file:../packages/a",
      "target": Object {
        "name": "a",
        "parent": null,
      },
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-ignore-nm-virtual/packages/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
  },
  "location": "",
  "name": "workspaces-ignore-nm-virtual",
  "package": Object {
    "name": "workspace-ignore-nm",
    "version": undefined,
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load installed workspace with transitive dependencies > virtual tree with transitive deps 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-transitive-deps-virtual/packages/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "package": Object {
        "name": "a",
        "version": "1.0.0",
      },
      "resolved": "file:../packages/a",
      "target": Object {
        "name": "a",
        "parent": null,
      },
    },
    "once" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "packages/a",
          "name": "once",
          "spec": "^1.4.0",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "package": Object {
        "name": "once",
        "version": "1.4.0",
      },
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
    },
    "wrappy" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "package": Object {
        "name": "wrappy",
        "version": "1.0.2",
      },
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-transitive-deps-virtual/packages/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
  },
  "location": "",
  "name": "workspaces-transitive-deps-virtual",
  "package": Object {
    "name": "workspaces-transitive-deps",
    "version": "1.0.0",
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load linked top level nested workspaces > virtual tree top level dep 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-top-level-link-virtual/packages/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "package": Object {
        "name": "a",
        "version": "1.0.0",
      },
      "resolved": "file:../packages/a",
      "target": Object {
        "name": "a",
        "parent": null,
      },
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-top-level-link-virtual/packages/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
  },
  "location": "",
  "name": "workspaces-top-level-link-virtual",
  "package": Object {
    "name": "workspaces-top-level-link",
    "version": "1.0.0",
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load prefer linking nested workspaces > virtual tree linking to local workspaces 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-prefer-linking-virtual/packages/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "package": Object {
        "name": "a",
        "version": "1.0.0",
      },
      "resolved": "file:../packages/a",
      "target": Object {
        "name": "a",
        "parent": null,
      },
    },
    "abbrev" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "abbrev",
          "spec": "file:{CWD}/test/fixtures/workspaces-prefer-linking-virtual/packages/abbrev",
          "type": "workspace",
        },
        Edge {
          "from": "packages/a",
          "name": "abbrev",
          "spec": "*",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "package": Object {
        "name": "abbrev",
        "version": "2.0.0",
      },
      "resolved": "file:../packages/abbrev",
      "target": Object {
        "name": "abbrev",
        "parent": null,
      },
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-prefer-linking-virtual/packages/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "file:{CWD}/test/fixtures/workspaces-prefer-linking-virtual/packages/abbrev",
      "to": "node_modules/abbrev",
      "type": "workspace",
    },
  },
  "location": "",
  "name": "workspaces-prefer-linking-virtual",
  "package": Object {
    "name": "workspaces-prefer-linking",
    "version": "1.0.0",
  },
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load shared dependencies example > virtual tree with shared dependencies 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "package": Object {
        "name": "a",
        "version": "1.0.0",
      },
      "resolved": "file:../packages/a",
      "target": Object {
        "name": "a",
        "parent": null,
      },
    },
    "abbrev" => Node {
      "edgesIn": Set {
        Edge {
          "from": "packages/a",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
        Edge {
          "from": "packages/b",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "package": Object {
        "name": "abbrev",
        "version": "1.1.1",
      },
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "b" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "b",
          "spec": "file:{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/b",
          "type": "workspace",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "package": Object {
        "name": "b",
        "version": "1.0.0",
      },
      "resolved": "file:../packages/b",
      "target": Object {
        "name": "b",
        "parent": null,
      },
    },
    "c" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "c",
          "spec": "file:{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/c",
          "type": "workspace",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "package": Object {
        "name": "c",
        "version": "1.0.0",
      },
      "resolved": "file:../packages/c",
      "target": Object {
        "name": "c",
        "parent": null,
      },
    },
    "uuid" => Node {
      "edgesIn": Set {
        Edge {
          "from": "packages/c",
          "name": "uuid",
          "spec": "=3.3.3",
          "type": "prod",
        },
      },
      "location": "node_modules/uuid",
      "name": "uuid",
      "package": Object {
        "name": "uuid",
        "version": "3.3.3",
      },
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.3.3.tgz",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
    "b" => Edge {
      "name": "b",
      "spec": "file:{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/b",
      "to": "node_modules/b",
      "type": "workspace",
    },
    "c" => Edge {
      "name": "c",
      "spec": "file:{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/c",
      "to": "node_modules/c",
      "type": "workspace",
    },
  },
  "location": "",
  "name": "workspaces-shared-deps-virtual",
  "package": Object {
    "name": "workspaces-shared-deps",
    "version": "1.0.0",
  },
  "resolved": null,
}
`

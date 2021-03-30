/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/arborist/load-virtual.js TAP load a tree where package.json edited > changed, but re-using the same root that already has meta 1`] = `
ArboristNode {
  "children": Map {
    "abbrev" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "path": "{CWD}/test/fixtures/edit-package-json/changed/node_modules/abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "json-parse-even-better-errors" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "json-parse-even-better-errors",
          "spec": "*",
          "type": "optional",
        },
      },
      "location": "node_modules/json-parse-even-better-errors",
      "name": "json-parse-even-better-errors",
      "optional": true,
      "path": "{CWD}/test/fixtures/edit-package-json/changed/node_modules/json-parse-even-better-errors",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "version": "2.3.1",
    },
    "once" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "once",
          "spec": "*",
          "type": "peer",
        },
      },
      "edgesOut": Map {
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "path": "{CWD}/test/fixtures/edit-package-json/changed/node_modules/once",
      "peer": true,
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "version": "1.4.0",
    },
    "opener" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/walden",
          "name": "opener",
          "spec": "^1.4.2",
          "type": "prod",
        },
      },
      "location": "node_modules/opener",
      "name": "opener",
      "path": "{CWD}/test/fixtures/edit-package-json/changed/node_modules/opener",
      "resolved": "https://registry.npmjs.org/opener/-/opener-1.5.2.tgz",
      "version": "1.5.2",
    },
    "semver" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "semver",
          "spec": "*",
          "type": "peerOptional",
        },
      },
      "location": "node_modules/semver",
      "name": "semver",
      "optional": true,
      "path": "{CWD}/test/fixtures/edit-package-json/changed/node_modules/semver",
      "peer": true,
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
      "version": "7.3.2",
    },
    "walden" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "walden",
          "spec": "*",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "opener" => EdgeOut {
          "name": "opener",
          "spec": "^1.4.2",
          "to": "node_modules/opener",
          "type": "prod",
        },
      },
      "location": "node_modules/walden",
      "name": "walden",
      "path": "{CWD}/test/fixtures/edit-package-json/changed/node_modules/walden",
      "resolved": "https://registry.npmjs.org/walden/-/walden-1.0.3.tgz",
      "version": "1.0.3",
    },
    "wrappy" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "path": "{CWD}/test/fixtures/edit-package-json/changed/node_modules/wrappy",
      "peer": true,
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
  },
  "edgesOut": Map {
    "abbrev" => EdgeOut {
      "name": "abbrev",
      "spec": "^1.1.0",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "json-parse-even-better-errors" => EdgeOut {
      "name": "json-parse-even-better-errors",
      "spec": "*",
      "to": "node_modules/json-parse-even-better-errors",
      "type": "optional",
    },
    "once" => EdgeOut {
      "name": "once",
      "spec": "*",
      "to": "node_modules/once",
      "type": "peer",
    },
    "semver" => EdgeOut {
      "name": "semver",
      "spec": "*",
      "to": "node_modules/semver",
      "type": "peerOptional",
    },
    "walden" => EdgeOut {
      "name": "walden",
      "spec": "*",
      "to": "node_modules/walden",
      "type": "dev",
    },
  },
  "location": "",
  "name": "changed",
  "path": "{CWD}/test/fixtures/edit-package-json/changed",
}
`

exports[`test/arborist/load-virtual.js TAP load a tree where package.json edited > deps changed 1`] = `
ArboristNode {
  "children": Map {
    "abbrev" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "path": "{CWD}/test/fixtures/edit-package-json/changed/node_modules/abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "json-parse-even-better-errors" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "json-parse-even-better-errors",
          "spec": "*",
          "type": "optional",
        },
      },
      "location": "node_modules/json-parse-even-better-errors",
      "name": "json-parse-even-better-errors",
      "optional": true,
      "path": "{CWD}/test/fixtures/edit-package-json/changed/node_modules/json-parse-even-better-errors",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "version": "2.3.1",
    },
    "once" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "once",
          "spec": "*",
          "type": "peer",
        },
      },
      "edgesOut": Map {
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "path": "{CWD}/test/fixtures/edit-package-json/changed/node_modules/once",
      "peer": true,
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "version": "1.4.0",
    },
    "opener" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/walden",
          "name": "opener",
          "spec": "^1.4.2",
          "type": "prod",
        },
      },
      "location": "node_modules/opener",
      "name": "opener",
      "path": "{CWD}/test/fixtures/edit-package-json/changed/node_modules/opener",
      "resolved": "https://registry.npmjs.org/opener/-/opener-1.5.2.tgz",
      "version": "1.5.2",
    },
    "semver" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "semver",
          "spec": "*",
          "type": "peerOptional",
        },
      },
      "location": "node_modules/semver",
      "name": "semver",
      "optional": true,
      "path": "{CWD}/test/fixtures/edit-package-json/changed/node_modules/semver",
      "peer": true,
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
      "version": "7.3.2",
    },
    "walden" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "walden",
          "spec": "*",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "opener" => EdgeOut {
          "name": "opener",
          "spec": "^1.4.2",
          "to": "node_modules/opener",
          "type": "prod",
        },
      },
      "location": "node_modules/walden",
      "name": "walden",
      "path": "{CWD}/test/fixtures/edit-package-json/changed/node_modules/walden",
      "resolved": "https://registry.npmjs.org/walden/-/walden-1.0.3.tgz",
      "version": "1.0.3",
    },
    "wrappy" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "path": "{CWD}/test/fixtures/edit-package-json/changed/node_modules/wrappy",
      "peer": true,
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
  },
  "edgesOut": Map {
    "abbrev" => EdgeOut {
      "name": "abbrev",
      "spec": "^1.1.0",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "json-parse-even-better-errors" => EdgeOut {
      "name": "json-parse-even-better-errors",
      "spec": "*",
      "to": "node_modules/json-parse-even-better-errors",
      "type": "optional",
    },
    "once" => EdgeOut {
      "name": "once",
      "spec": "*",
      "to": "node_modules/once",
      "type": "peer",
    },
    "semver" => EdgeOut {
      "name": "semver",
      "spec": "*",
      "to": "node_modules/semver",
      "type": "peerOptional",
    },
    "walden" => EdgeOut {
      "name": "walden",
      "spec": "*",
      "to": "node_modules/walden",
      "type": "dev",
    },
  },
  "location": "",
  "name": "changed",
  "path": "{CWD}/test/fixtures/edit-package-json/changed",
}
`

exports[`test/arborist/load-virtual.js TAP load a tree where package.json edited > deps match 1`] = `
ArboristNode {
  "children": Map {
    "abbrev" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "path": "{CWD}/test/fixtures/edit-package-json/ok/node_modules/abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "json-parse-even-better-errors" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "json-parse-even-better-errors",
          "spec": "*",
          "type": "optional",
        },
      },
      "location": "node_modules/json-parse-even-better-errors",
      "name": "json-parse-even-better-errors",
      "optional": true,
      "path": "{CWD}/test/fixtures/edit-package-json/ok/node_modules/json-parse-even-better-errors",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "version": "2.3.1",
    },
    "once" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "once",
          "spec": "*",
          "type": "peer",
        },
      },
      "edgesOut": Map {
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "path": "{CWD}/test/fixtures/edit-package-json/ok/node_modules/once",
      "peer": true,
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "version": "1.4.0",
    },
    "opener" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/walden",
          "name": "opener",
          "spec": "^1.4.2",
          "type": "prod",
        },
      },
      "location": "node_modules/opener",
      "name": "opener",
      "path": "{CWD}/test/fixtures/edit-package-json/ok/node_modules/opener",
      "resolved": "https://registry.npmjs.org/opener/-/opener-1.5.2.tgz",
      "version": "1.5.2",
    },
    "semver" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "semver",
          "spec": "*",
          "type": "peerOptional",
        },
      },
      "location": "node_modules/semver",
      "name": "semver",
      "optional": true,
      "path": "{CWD}/test/fixtures/edit-package-json/ok/node_modules/semver",
      "peer": true,
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
      "version": "7.3.2",
    },
    "walden" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "walden",
          "spec": "*",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "opener" => EdgeOut {
          "name": "opener",
          "spec": "^1.4.2",
          "to": "node_modules/opener",
          "type": "prod",
        },
      },
      "location": "node_modules/walden",
      "name": "walden",
      "path": "{CWD}/test/fixtures/edit-package-json/ok/node_modules/walden",
      "resolved": "https://registry.npmjs.org/walden/-/walden-1.0.3.tgz",
      "version": "1.0.3",
    },
    "wrappy" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "path": "{CWD}/test/fixtures/edit-package-json/ok/node_modules/wrappy",
      "peer": true,
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
  },
  "edgesOut": Map {
    "abbrev" => EdgeOut {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "json-parse-even-better-errors" => EdgeOut {
      "name": "json-parse-even-better-errors",
      "spec": "*",
      "to": "node_modules/json-parse-even-better-errors",
      "type": "optional",
    },
    "once" => EdgeOut {
      "name": "once",
      "spec": "*",
      "to": "node_modules/once",
      "type": "peer",
    },
    "semver" => EdgeOut {
      "name": "semver",
      "spec": "*",
      "to": "node_modules/semver",
      "type": "peerOptional",
    },
    "walden" => EdgeOut {
      "name": "walden",
      "spec": "*",
      "to": "node_modules/walden",
      "type": "dev",
    },
  },
  "location": "",
  "name": "ok",
  "path": "{CWD}/test/fixtures/edit-package-json/ok",
}
`

exports[`test/arborist/load-virtual.js TAP load a tree where package.json edited > deps removed 1`] = `
ArboristNode {
  "children": Map {
    "abbrev" => ArboristNode {
      "dev": true,
      "extraneous": true,
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "optional": true,
      "path": "{CWD}/test/fixtures/edit-package-json/removed/node_modules/abbrev",
      "peer": true,
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "json-parse-even-better-errors" => ArboristNode {
      "dev": true,
      "extraneous": true,
      "location": "node_modules/json-parse-even-better-errors",
      "name": "json-parse-even-better-errors",
      "optional": true,
      "path": "{CWD}/test/fixtures/edit-package-json/removed/node_modules/json-parse-even-better-errors",
      "peer": true,
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "version": "2.3.1",
    },
    "once" => ArboristNode {
      "dev": true,
      "edgesOut": Map {
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/once",
      "name": "once",
      "optional": true,
      "path": "{CWD}/test/fixtures/edit-package-json/removed/node_modules/once",
      "peer": true,
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "version": "1.4.0",
    },
    "opener" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/walden",
          "name": "opener",
          "spec": "^1.4.2",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/opener",
      "name": "opener",
      "optional": true,
      "path": "{CWD}/test/fixtures/edit-package-json/removed/node_modules/opener",
      "peer": true,
      "resolved": "https://registry.npmjs.org/opener/-/opener-1.5.2.tgz",
      "version": "1.5.2",
    },
    "semver" => ArboristNode {
      "dev": true,
      "extraneous": true,
      "location": "node_modules/semver",
      "name": "semver",
      "optional": true,
      "path": "{CWD}/test/fixtures/edit-package-json/removed/node_modules/semver",
      "peer": true,
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
      "version": "7.3.2",
    },
    "walden" => ArboristNode {
      "dev": true,
      "edgesOut": Map {
        "opener" => EdgeOut {
          "name": "opener",
          "spec": "^1.4.2",
          "to": "node_modules/opener",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/walden",
      "name": "walden",
      "optional": true,
      "path": "{CWD}/test/fixtures/edit-package-json/removed/node_modules/walden",
      "peer": true,
      "resolved": "https://registry.npmjs.org/walden/-/walden-1.0.3.tgz",
      "version": "1.0.3",
    },
    "wrappy" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "optional": true,
      "path": "{CWD}/test/fixtures/edit-package-json/removed/node_modules/wrappy",
      "peer": true,
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
  },
  "location": "",
  "name": "removed",
  "path": "{CWD}/test/fixtures/edit-package-json/removed",
}
`

exports[`test/arborist/load-virtual.js TAP load a tree where package.json edited > ws changed 1`] = `
ArboristNode {
  "children": Map {
    "a" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/edit-package-json/workspaces-changed/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/edit-package-json/workspaces-changed/node_modules/a",
      "realpath": "{CWD}/test/fixtures/edit-package-json/workspaces-changed/a",
      "resolved": "file:../a",
      "target": ArboristNode {
        "location": "a",
      },
      "version": "1.0.0",
    },
    "b" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "a",
          "name": "b",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "path": "{CWD}/test/fixtures/edit-package-json/workspaces-changed/node_modules/b",
      "realpath": "{CWD}/test/fixtures/edit-package-json/workspaces-changed/b",
      "resolved": "file:../b",
      "target": ArboristNode {
        "location": "b",
      },
      "version": "1.0.0",
    },
  },
  "edgesOut": Map {
    "a" => EdgeOut {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/edit-package-json/workspaces-changed/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
    "c" => EdgeOut {
      "error": "MISSING",
      "name": "c",
      "spec": "file:{CWD}/test/fixtures/edit-package-json/workspaces-changed/c",
      "to": null,
      "type": "workspace",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "edgesOut": Map {
        "b" => EdgeOut {
          "name": "b",
          "spec": "^1.0.0",
          "to": "node_modules/b",
          "type": "prod",
        },
      },
      "location": "a",
      "name": "a",
      "path": "{CWD}/test/fixtures/edit-package-json/workspaces-changed/a",
      "version": "1.0.0",
    },
    ArboristNode {
      "location": "b",
      "name": "b",
      "path": "{CWD}/test/fixtures/edit-package-json/workspaces-changed/b",
      "version": "1.0.0",
    },
  },
  "location": "",
  "name": "workspaces-changed",
  "packageName": "workspace-simple",
  "path": "{CWD}/test/fixtures/edit-package-json/workspaces-changed",
  "workspaces": Map {
    "a" => "a",
    "c" => "c",
  },
}
`

exports[`test/arborist/load-virtual.js TAP load a tree where package.json edited > ws match 1`] = `
ArboristNode {
  "children": Map {
    "a" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-simple-virtual/node_modules/a",
      "realpath": "{CWD}/test/fixtures/workspaces-simple-virtual/a",
      "resolved": "file:../a",
      "target": ArboristNode {
        "location": "a",
      },
      "version": "1.0.0",
    },
    "b" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "b",
          "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/b",
          "type": "workspace",
        },
        EdgeIn {
          "from": "a",
          "name": "b",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "path": "{CWD}/test/fixtures/workspaces-simple-virtual/node_modules/b",
      "realpath": "{CWD}/test/fixtures/workspaces-simple-virtual/b",
      "resolved": "file:../b",
      "target": ArboristNode {
        "location": "b",
      },
      "version": "1.0.0",
    },
  },
  "edgesOut": Map {
    "a" => EdgeOut {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
    "b" => EdgeOut {
      "name": "b",
      "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/b",
      "to": "node_modules/b",
      "type": "workspace",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "edgesOut": Map {
        "b" => EdgeOut {
          "name": "b",
          "spec": "^1.0.0",
          "to": "node_modules/b",
          "type": "prod",
        },
      },
      "location": "a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-simple-virtual/a",
      "version": "1.0.0",
    },
    ArboristNode {
      "location": "b",
      "name": "b",
      "path": "{CWD}/test/fixtures/workspaces-simple-virtual/b",
      "version": "1.0.0",
    },
  },
  "location": "",
  "name": "workspaces-simple-virtual",
  "packageName": "workspace-simple",
  "path": "{CWD}/test/fixtures/workspaces-simple-virtual",
  "workspaces": Map {
    "a" => "a",
    "b" => "b",
  },
}
`

exports[`test/arborist/load-virtual.js TAP load a tree with a bunch of bundles > virtual tree with multiple bundles 1`] = `
ArboristNode {
  "children": Map {
    "@babel/code-frame" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/template",
          "name": "@babel/code-frame",
          "spec": "^7.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/code-frame",
          "spec": "^7.5.5",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/highlight" => EdgeOut {
          "name": "@babel/highlight",
          "spec": "^7.0.0",
          "to": "node_modules/@babel/highlight",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/code-frame",
      "name": "@babel/code-frame",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@babel/code-frame",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.5.5.tgz",
      "version": "7.5.5",
    },
    "@babel/generator" => ArboristNode {
      "children": Map {
        "source-map" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/@babel/generator",
              "name": "source-map",
              "spec": "^0.5.0",
              "type": "prod",
            },
          },
          "location": "node_modules/@babel/generator/node_modules/source-map",
          "name": "source-map",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@babel/generator/node_modules/source-map",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
          "version": "0.5.7",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/generator",
          "spec": "^7.7.4",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "@babel/generator",
          "spec": "^7.4.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/types" => EdgeOut {
          "name": "@babel/types",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
        "jsesc" => EdgeOut {
          "name": "jsesc",
          "spec": "^2.5.1",
          "to": "node_modules/jsesc",
          "type": "prod",
        },
        "lodash" => EdgeOut {
          "name": "lodash",
          "spec": "^4.17.13",
          "to": "node_modules/lodash",
          "type": "prod",
        },
        "source-map" => EdgeOut {
          "name": "source-map",
          "spec": "^0.5.0",
          "to": "node_modules/@babel/generator/node_modules/source-map",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/generator",
      "name": "@babel/generator",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@babel/generator",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.7.7.tgz",
      "version": "7.7.7",
    },
    "@babel/helper-function-name" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/helper-function-name",
          "spec": "^7.7.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/helper-get-function-arity" => EdgeOut {
          "name": "@babel/helper-get-function-arity",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/helper-get-function-arity",
          "type": "prod",
        },
        "@babel/template" => EdgeOut {
          "name": "@babel/template",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/template",
          "type": "prod",
        },
        "@babel/types" => EdgeOut {
          "name": "@babel/types",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/helper-function-name",
      "name": "@babel/helper-function-name",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@babel/helper-function-name",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.7.4.tgz",
      "version": "7.7.4",
    },
    "@babel/helper-get-function-arity" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/helper-function-name",
          "name": "@babel/helper-get-function-arity",
          "spec": "^7.7.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/types" => EdgeOut {
          "name": "@babel/types",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/helper-get-function-arity",
      "name": "@babel/helper-get-function-arity",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@babel/helper-get-function-arity",
      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.7.4.tgz",
      "version": "7.7.4",
    },
    "@babel/helper-split-export-declaration" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/helper-split-export-declaration",
          "spec": "^7.7.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/types" => EdgeOut {
          "name": "@babel/types",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/helper-split-export-declaration",
      "name": "@babel/helper-split-export-declaration",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@babel/helper-split-export-declaration",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.7.4.tgz",
      "version": "7.7.4",
    },
    "@babel/highlight" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/code-frame",
          "name": "@babel/highlight",
          "spec": "^7.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "chalk" => EdgeOut {
          "name": "chalk",
          "spec": "^2.0.0",
          "to": "node_modules/chalk",
          "type": "prod",
        },
        "esutils" => EdgeOut {
          "name": "esutils",
          "spec": "^2.0.2",
          "to": "node_modules/esutils",
          "type": "prod",
        },
        "js-tokens" => EdgeOut {
          "name": "js-tokens",
          "spec": "^4.0.0",
          "to": "node_modules/js-tokens",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/highlight",
      "name": "@babel/highlight",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@babel/highlight",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.5.0.tgz",
      "version": "7.5.0",
    },
    "@babel/parser" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/template",
          "name": "@babel/parser",
          "spec": "^7.7.4",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/parser",
          "spec": "^7.7.4",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "@babel/parser",
          "spec": "^7.4.3",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/parser",
      "name": "@babel/parser",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@babel/parser",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.7.7.tgz",
      "version": "7.7.7",
    },
    "@babel/runtime" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/yaml",
          "name": "@babel/runtime",
          "spec": "^7.6.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "regenerator-runtime" => EdgeOut {
          "name": "regenerator-runtime",
          "spec": "^0.13.2",
          "to": "node_modules/regenerator-runtime",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/runtime",
      "name": "@babel/runtime",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@babel/runtime",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.7.7.tgz",
      "version": "7.7.7",
    },
    "@babel/template" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/helper-function-name",
          "name": "@babel/template",
          "spec": "^7.7.4",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "@babel/template",
          "spec": "^7.4.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/code-frame" => EdgeOut {
          "name": "@babel/code-frame",
          "spec": "^7.0.0",
          "to": "node_modules/@babel/code-frame",
          "type": "prod",
        },
        "@babel/parser" => EdgeOut {
          "name": "@babel/parser",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/parser",
          "type": "prod",
        },
        "@babel/types" => EdgeOut {
          "name": "@babel/types",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/template",
      "name": "@babel/template",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@babel/template",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.7.4.tgz",
      "version": "7.7.4",
    },
    "@babel/traverse" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "@babel/traverse",
          "spec": "^7.4.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/code-frame" => EdgeOut {
          "name": "@babel/code-frame",
          "spec": "^7.5.5",
          "to": "node_modules/@babel/code-frame",
          "type": "prod",
        },
        "@babel/generator" => EdgeOut {
          "name": "@babel/generator",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/generator",
          "type": "prod",
        },
        "@babel/helper-function-name" => EdgeOut {
          "name": "@babel/helper-function-name",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/helper-function-name",
          "type": "prod",
        },
        "@babel/helper-split-export-declaration" => EdgeOut {
          "name": "@babel/helper-split-export-declaration",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/helper-split-export-declaration",
          "type": "prod",
        },
        "@babel/parser" => EdgeOut {
          "name": "@babel/parser",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/parser",
          "type": "prod",
        },
        "@babel/types" => EdgeOut {
          "name": "@babel/types",
          "spec": "^7.7.4",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
        "debug" => EdgeOut {
          "name": "debug",
          "spec": "^4.1.0",
          "to": "node_modules/debug",
          "type": "prod",
        },
        "globals" => EdgeOut {
          "name": "globals",
          "spec": "^11.1.0",
          "to": "node_modules/globals",
          "type": "prod",
        },
        "lodash" => EdgeOut {
          "name": "lodash",
          "spec": "^4.17.13",
          "to": "node_modules/lodash",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/traverse",
      "name": "@babel/traverse",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@babel/traverse",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.7.4.tgz",
      "version": "7.7.4",
    },
    "@babel/types" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/generator",
          "name": "@babel/types",
          "spec": "^7.7.4",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/@babel/helper-function-name",
          "name": "@babel/types",
          "spec": "^7.7.4",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/@babel/helper-get-function-arity",
          "name": "@babel/types",
          "spec": "^7.7.4",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/@babel/helper-split-export-declaration",
          "name": "@babel/types",
          "spec": "^7.7.4",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/@babel/template",
          "name": "@babel/types",
          "spec": "^7.7.4",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/types",
          "spec": "^7.7.4",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "@babel/types",
          "spec": "^7.4.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "esutils" => EdgeOut {
          "name": "esutils",
          "spec": "^2.0.2",
          "to": "node_modules/esutils",
          "type": "prod",
        },
        "lodash" => EdgeOut {
          "name": "lodash",
          "spec": "^4.17.13",
          "to": "node_modules/lodash",
          "type": "prod",
        },
        "to-fast-properties" => EdgeOut {
          "name": "to-fast-properties",
          "spec": "^2.0.0",
          "to": "node_modules/to-fast-properties",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/types",
      "name": "@babel/types",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@babel/types",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.7.4.tgz",
      "version": "7.7.4",
    },
    "@isaacs/testing-bundledeps" => ArboristNode {
      "children": Map {
        "@isaacs/testing-bundledeps-a" => ArboristNode {
          "bundled": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/@isaacs/testing-bundledeps",
              "name": "@isaacs/testing-bundledeps-a",
              "spec": "*",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@isaacs/testing-bundledeps-b" => EdgeOut {
              "name": "@isaacs/testing-bundledeps-b",
              "spec": "*",
              "to": "node_modules/@isaacs/testing-bundledeps/node_modules/@isaacs/testing-bundledeps-b",
              "type": "prod",
            },
          },
          "location": "node_modules/@isaacs/testing-bundledeps/node_modules/@isaacs/testing-bundledeps-a",
          "name": "@isaacs/testing-bundledeps-a",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@isaacs/testing-bundledeps/node_modules/@isaacs/testing-bundledeps-a",
          "version": "1.0.0",
        },
        "@isaacs/testing-bundledeps-b" => ArboristNode {
          "bundled": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/@isaacs/testing-bundledeps/node_modules/@isaacs/testing-bundledeps-a",
              "name": "@isaacs/testing-bundledeps-b",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/@isaacs/testing-bundledeps/node_modules/@isaacs/testing-bundledeps-b",
          "name": "@isaacs/testing-bundledeps-b",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@isaacs/testing-bundledeps/node_modules/@isaacs/testing-bundledeps-b",
          "version": "1.0.0",
        },
      },
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "@isaacs/testing-bundledeps",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@isaacs/testing-bundledeps-a" => EdgeOut {
          "name": "@isaacs/testing-bundledeps-a",
          "spec": "*",
          "to": "node_modules/@isaacs/testing-bundledeps/node_modules/@isaacs/testing-bundledeps-a",
          "type": "prod",
        },
        "@isaacs/testing-bundledeps-c" => EdgeOut {
          "name": "@isaacs/testing-bundledeps-c",
          "spec": "*",
          "to": "node_modules/@isaacs/testing-bundledeps-c",
          "type": "prod",
        },
      },
      "location": "node_modules/@isaacs/testing-bundledeps",
      "name": "@isaacs/testing-bundledeps",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@isaacs/testing-bundledeps",
      "resolved": "https://registry.npmjs.org/@isaacs/testing-bundledeps/-/testing-bundledeps-1.0.0.tgz",
      "version": "1.0.0",
    },
    "@isaacs/testing-bundledeps-b" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@isaacs/testing-bundledeps-c",
          "name": "@isaacs/testing-bundledeps-b",
          "spec": "*",
          "type": "prod",
        },
      },
      "location": "node_modules/@isaacs/testing-bundledeps-b",
      "name": "@isaacs/testing-bundledeps-b",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@isaacs/testing-bundledeps-b",
      "resolved": "https://registry.npmjs.org/@isaacs/testing-bundledeps-b/-/testing-bundledeps-b-1.0.0.tgz",
      "version": "1.0.0",
    },
    "@isaacs/testing-bundledeps-c" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@isaacs/testing-bundledeps",
          "name": "@isaacs/testing-bundledeps-c",
          "spec": "*",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@isaacs/testing-bundledeps-b" => EdgeOut {
          "name": "@isaacs/testing-bundledeps-b",
          "spec": "*",
          "to": "node_modules/@isaacs/testing-bundledeps-b",
          "type": "prod",
        },
      },
      "location": "node_modules/@isaacs/testing-bundledeps-c",
      "name": "@isaacs/testing-bundledeps-c",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/@isaacs/testing-bundledeps-c",
      "resolved": "https://registry.npmjs.org/@isaacs/testing-bundledeps-c/-/testing-bundledeps-c-1.0.0.tgz",
      "version": "1.0.0",
    },
    "abbrev" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "optional",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "optional": true,
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "ajv" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/har-validator",
          "name": "ajv",
          "spec": "^6.5.5",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "fast-deep-equal" => EdgeOut {
          "name": "fast-deep-equal",
          "spec": "^2.0.1",
          "to": "node_modules/fast-deep-equal",
          "type": "prod",
        },
        "fast-json-stable-stringify" => EdgeOut {
          "name": "fast-json-stable-stringify",
          "spec": "^2.0.0",
          "to": "node_modules/fast-json-stable-stringify",
          "type": "prod",
        },
        "json-schema-traverse" => EdgeOut {
          "name": "json-schema-traverse",
          "spec": "^0.4.1",
          "to": "node_modules/json-schema-traverse",
          "type": "prod",
        },
        "uri-js" => EdgeOut {
          "name": "uri-js",
          "spec": "^4.2.2",
          "to": "node_modules/uri-js",
          "type": "prod",
        },
      },
      "location": "node_modules/ajv",
      "name": "ajv",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/ajv",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.10.2.tgz",
      "version": "6.10.2",
    },
    "ansi-regex" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/strip-ansi",
          "name": "ansi-regex",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/ansi-regex",
      "name": "ansi-regex",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/ansi-regex",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
      "version": "3.0.0",
    },
    "ansi-styles" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/chalk",
          "name": "ansi-styles",
          "spec": "^3.2.1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/yargs/node_modules/wrap-ansi",
          "name": "ansi-styles",
          "spec": "^3.2.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "color-convert" => EdgeOut {
          "name": "color-convert",
          "spec": "^1.9.0",
          "to": "node_modules/color-convert",
          "type": "prod",
        },
      },
      "location": "node_modules/ansi-styles",
      "name": "ansi-styles",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/ansi-styles",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "version": "3.2.1",
    },
    "anymatch" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/chokidar",
          "name": "anymatch",
          "spec": "~3.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "normalize-path" => EdgeOut {
          "name": "normalize-path",
          "spec": "^3.0.0",
          "to": "node_modules/normalize-path",
          "type": "prod",
        },
        "picomatch" => EdgeOut {
          "name": "picomatch",
          "spec": "^2.0.4",
          "to": "node_modules/picomatch",
          "type": "prod",
        },
      },
      "location": "node_modules/anymatch",
      "name": "anymatch",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/anymatch",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.1.tgz",
      "version": "3.1.1",
    },
    "append-transform" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/istanbul-lib-hook",
          "name": "append-transform",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "default-require-extensions" => EdgeOut {
          "name": "default-require-extensions",
          "spec": "^2.0.0",
          "to": "node_modules/default-require-extensions",
          "type": "prod",
        },
      },
      "location": "node_modules/append-transform",
      "name": "append-transform",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/append-transform",
      "resolved": "https://registry.npmjs.org/append-transform/-/append-transform-1.0.0.tgz",
      "version": "1.0.0",
    },
    "archy" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/istanbul-lib-processinfo",
          "name": "archy",
          "spec": "^1.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "archy",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/archy",
      "name": "archy",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/archy",
      "resolved": "https://registry.npmjs.org/archy/-/archy-1.0.0.tgz",
      "version": "1.0.0",
    },
    "arg" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/ts-node",
          "name": "arg",
          "spec": "^4.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/arg",
      "name": "arg",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/arg",
      "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.2.tgz",
      "version": "4.1.2",
    },
    "argparse" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/js-yaml",
          "name": "argparse",
          "spec": "^1.0.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "sprintf-js" => EdgeOut {
          "name": "sprintf-js",
          "spec": "~1.0.2",
          "to": "node_modules/sprintf-js",
          "type": "prod",
        },
      },
      "location": "node_modules/argparse",
      "name": "argparse",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/argparse",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "version": "1.0.10",
    },
    "asn1" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/sshpk",
          "name": "asn1",
          "spec": "~0.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "safer-buffer" => EdgeOut {
          "name": "safer-buffer",
          "spec": "~2.1.0",
          "to": "node_modules/safer-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/asn1",
      "name": "asn1",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/asn1",
      "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
      "version": "0.2.4",
    },
    "assert-plus" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/dashdash",
          "name": "assert-plus",
          "spec": "^1.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/getpass",
          "name": "assert-plus",
          "spec": "^1.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/http-signature",
          "name": "assert-plus",
          "spec": "^1.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/jsprim",
          "name": "assert-plus",
          "spec": "1.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/sshpk",
          "name": "assert-plus",
          "spec": "^1.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/verror",
          "name": "assert-plus",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/assert-plus",
      "name": "assert-plus",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/assert-plus",
      "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
      "version": "1.0.0",
    },
    "async-hook-domain" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "async-hook-domain",
          "spec": "^1.1.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "source-map-support" => EdgeOut {
          "name": "source-map-support",
          "spec": "^0.5.11",
          "to": "node_modules/source-map-support",
          "type": "prod",
        },
      },
      "location": "node_modules/async-hook-domain",
      "name": "async-hook-domain",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/async-hook-domain",
      "resolved": "https://registry.npmjs.org/async-hook-domain/-/async-hook-domain-1.1.3.tgz",
      "version": "1.1.3",
    },
    "asynckit" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/form-data",
          "name": "asynckit",
          "spec": "^0.4.0",
          "type": "prod",
        },
      },
      "location": "node_modules/asynckit",
      "name": "asynckit",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/asynckit",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "version": "0.4.0",
    },
    "aws-sign2" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "aws-sign2",
          "spec": "~0.7.0",
          "type": "prod",
        },
      },
      "location": "node_modules/aws-sign2",
      "name": "aws-sign2",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/aws-sign2",
      "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
      "version": "0.7.0",
    },
    "aws4" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "aws4",
          "spec": "^1.8.0",
          "type": "prod",
        },
      },
      "location": "node_modules/aws4",
      "name": "aws4",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/aws4",
      "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.9.0.tgz",
      "version": "1.9.0",
    },
    "balanced-match" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/balanced-match",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "version": "1.0.0",
    },
    "bcrypt-pbkdf" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/sshpk",
          "name": "bcrypt-pbkdf",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "tweetnacl" => EdgeOut {
          "name": "tweetnacl",
          "spec": "^0.14.3",
          "to": "node_modules/tweetnacl",
          "type": "prod",
        },
      },
      "location": "node_modules/bcrypt-pbkdf",
      "name": "bcrypt-pbkdf",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/bcrypt-pbkdf",
      "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
      "version": "1.0.2",
    },
    "binary-extensions" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/is-binary-path",
          "name": "binary-extensions",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/binary-extensions",
      "name": "binary-extensions",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/binary-extensions",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.0.0.tgz",
      "version": "2.0.0",
    },
    "bind-obj-methods" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "bind-obj-methods",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/bind-obj-methods",
      "name": "bind-obj-methods",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/bind-obj-methods",
      "resolved": "https://registry.npmjs.org/bind-obj-methods/-/bind-obj-methods-2.0.0.tgz",
      "version": "2.0.0",
    },
    "brace-expansion" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => EdgeOut {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => EdgeOut {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "node_modules/concat-map",
          "type": "prod",
        },
      },
      "location": "node_modules/brace-expansion",
      "name": "brace-expansion",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/brace-expansion",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "version": "1.1.11",
    },
    "braces" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/chokidar",
          "name": "braces",
          "spec": "~3.0.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "fill-range" => EdgeOut {
          "name": "fill-range",
          "spec": "^7.0.1",
          "to": "node_modules/fill-range",
          "type": "prod",
        },
      },
      "location": "node_modules/braces",
      "name": "braces",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/braces",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "version": "3.0.2",
    },
    "browser-process-hrtime" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "browser-process-hrtime",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/browser-process-hrtime",
      "name": "browser-process-hrtime",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/browser-process-hrtime",
      "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
      "version": "1.0.0",
    },
    "buffer-from" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/source-map-support",
          "name": "buffer-from",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/buffer-from",
      "name": "buffer-from",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/buffer-from",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
      "version": "1.1.1",
    },
    "caching-transform" => ArboristNode {
      "children": Map {
        "write-file-atomic" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/caching-transform",
              "name": "write-file-atomic",
              "spec": "^2.4.2",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => EdgeOut {
              "name": "graceful-fs",
              "spec": "^4.1.11",
              "to": "node_modules/graceful-fs",
              "type": "prod",
            },
            "imurmurhash" => EdgeOut {
              "name": "imurmurhash",
              "spec": "^0.1.4",
              "to": "node_modules/imurmurhash",
              "type": "prod",
            },
            "signal-exit" => EdgeOut {
              "name": "signal-exit",
              "spec": "^3.0.2",
              "to": "node_modules/signal-exit",
              "type": "prod",
            },
          },
          "location": "node_modules/caching-transform/node_modules/write-file-atomic",
          "name": "write-file-atomic",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/caching-transform/node_modules/write-file-atomic",
          "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-2.4.3.tgz",
          "version": "2.4.3",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "caching-transform",
          "spec": "^3.0.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "hasha" => EdgeOut {
          "name": "hasha",
          "spec": "^3.0.0",
          "to": "node_modules/hasha",
          "type": "prod",
        },
        "make-dir" => EdgeOut {
          "name": "make-dir",
          "spec": "^2.0.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "package-hash" => EdgeOut {
          "name": "package-hash",
          "spec": "^3.0.0",
          "to": "node_modules/package-hash",
          "type": "prod",
        },
        "write-file-atomic" => EdgeOut {
          "name": "write-file-atomic",
          "spec": "^2.4.2",
          "to": "node_modules/caching-transform/node_modules/write-file-atomic",
          "type": "prod",
        },
      },
      "location": "node_modules/caching-transform",
      "name": "caching-transform",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/caching-transform",
      "resolved": "https://registry.npmjs.org/caching-transform/-/caching-transform-3.0.2.tgz",
      "version": "3.0.2",
    },
    "camelcase" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/yargs-parser",
          "name": "camelcase",
          "spec": "^5.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/camelcase",
      "name": "camelcase",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/camelcase",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "version": "5.3.1",
    },
    "caseless" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "caseless",
          "spec": "~0.12.0",
          "type": "prod",
        },
      },
      "location": "node_modules/caseless",
      "name": "caseless",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/caseless",
      "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
      "version": "0.12.0",
    },
    "chalk" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/highlight",
          "name": "chalk",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ansi-styles" => EdgeOut {
          "name": "ansi-styles",
          "spec": "^3.2.1",
          "to": "node_modules/ansi-styles",
          "type": "prod",
        },
        "escape-string-regexp" => EdgeOut {
          "name": "escape-string-regexp",
          "spec": "^1.0.5",
          "to": "node_modules/escape-string-regexp",
          "type": "prod",
        },
        "supports-color" => EdgeOut {
          "name": "supports-color",
          "spec": "^5.3.0",
          "to": "node_modules/supports-color",
          "type": "prod",
        },
      },
      "location": "node_modules/chalk",
      "name": "chalk",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/chalk",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "version": "2.4.2",
    },
    "chokidar" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "chokidar",
          "spec": "^3.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "anymatch" => EdgeOut {
          "name": "anymatch",
          "spec": "~3.1.1",
          "to": "node_modules/anymatch",
          "type": "prod",
        },
        "braces" => EdgeOut {
          "name": "braces",
          "spec": "~3.0.2",
          "to": "node_modules/braces",
          "type": "prod",
        },
        "fsevents" => EdgeOut {
          "name": "fsevents",
          "spec": "~2.1.2",
          "to": "node_modules/fsevents",
          "type": "optional",
        },
        "glob-parent" => EdgeOut {
          "name": "glob-parent",
          "spec": "~5.1.0",
          "to": "node_modules/glob-parent",
          "type": "prod",
        },
        "is-binary-path" => EdgeOut {
          "name": "is-binary-path",
          "spec": "~2.1.0",
          "to": "node_modules/is-binary-path",
          "type": "prod",
        },
        "is-glob" => EdgeOut {
          "name": "is-glob",
          "spec": "~4.0.1",
          "to": "node_modules/is-glob",
          "type": "prod",
        },
        "normalize-path" => EdgeOut {
          "name": "normalize-path",
          "spec": "~3.0.0",
          "to": "node_modules/normalize-path",
          "type": "prod",
        },
        "readdirp" => EdgeOut {
          "name": "readdirp",
          "spec": "~3.3.0",
          "to": "node_modules/readdirp",
          "type": "prod",
        },
      },
      "location": "node_modules/chokidar",
      "name": "chokidar",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/chokidar",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.3.1.tgz",
      "version": "3.3.1",
    },
    "cliui" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/jackspeak",
          "name": "cliui",
          "spec": "^4.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "string-width" => EdgeOut {
          "name": "string-width",
          "spec": "^2.1.1",
          "to": "node_modules/string-width",
          "type": "prod",
        },
        "strip-ansi" => EdgeOut {
          "name": "strip-ansi",
          "spec": "^4.0.0",
          "to": "node_modules/strip-ansi",
          "type": "prod",
        },
        "wrap-ansi" => EdgeOut {
          "name": "wrap-ansi",
          "spec": "^2.0.0",
          "to": "node_modules/wrap-ansi",
          "type": "prod",
        },
      },
      "location": "node_modules/cliui",
      "name": "cliui",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/cliui",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-4.1.0.tgz",
      "version": "4.1.0",
    },
    "code-point-at" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/wrap-ansi/node_modules/string-width",
          "name": "code-point-at",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/code-point-at",
      "name": "code-point-at",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/code-point-at",
      "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
      "version": "1.1.0",
    },
    "color-convert" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/ansi-styles",
          "name": "color-convert",
          "spec": "^1.9.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "color-name" => EdgeOut {
          "name": "color-name",
          "spec": "1.1.3",
          "to": "node_modules/color-name",
          "type": "prod",
        },
      },
      "location": "node_modules/color-convert",
      "name": "color-convert",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/color-convert",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "version": "1.9.3",
    },
    "color-name" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/color-convert",
          "name": "color-name",
          "spec": "1.1.3",
          "type": "prod",
        },
      },
      "location": "node_modules/color-name",
      "name": "color-name",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/color-name",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "version": "1.1.3",
    },
    "color-support" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "color-support",
          "spec": "^1.1.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/tap-mocha-reporter",
          "name": "color-support",
          "spec": "^1.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/color-support",
      "name": "color-support",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/color-support",
      "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",
      "version": "1.1.3",
    },
    "combined-stream" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/form-data",
          "name": "combined-stream",
          "spec": "^1.0.6",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/request",
          "name": "combined-stream",
          "spec": "~1.0.6",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "delayed-stream" => EdgeOut {
          "name": "delayed-stream",
          "spec": "~1.0.0",
          "to": "node_modules/delayed-stream",
          "type": "prod",
        },
      },
      "location": "node_modules/combined-stream",
      "name": "combined-stream",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/combined-stream",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "version": "1.0.8",
    },
    "commander" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/uglify-js",
          "name": "commander",
          "spec": "~2.20.3",
          "type": "prod",
        },
      },
      "location": "node_modules/commander",
      "name": "commander",
      "optional": true,
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/commander",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
      "version": "2.20.3",
    },
    "commondir" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/find-cache-dir",
          "name": "commondir",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/commondir",
      "name": "commondir",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/commondir",
      "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
      "version": "1.0.1",
    },
    "concat-map" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/concat-map",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "version": "0.0.1",
    },
    "convert-source-map" => ArboristNode {
      "children": Map {
        "safe-buffer" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/convert-source-map",
              "name": "safe-buffer",
              "spec": "~5.1.1",
              "type": "prod",
            },
          },
          "location": "node_modules/convert-source-map/node_modules/safe-buffer",
          "name": "safe-buffer",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/convert-source-map/node_modules/safe-buffer",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
          "version": "5.1.2",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "convert-source-map",
          "spec": "^1.6.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "safe-buffer" => EdgeOut {
          "name": "safe-buffer",
          "spec": "~5.1.1",
          "to": "node_modules/convert-source-map/node_modules/safe-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/convert-source-map",
      "name": "convert-source-map",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/convert-source-map",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
      "version": "1.7.0",
    },
    "core-util-is" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/readable-stream",
          "name": "core-util-is",
          "spec": "~1.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/verror",
          "name": "core-util-is",
          "spec": "1.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/core-util-is",
      "name": "core-util-is",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/core-util-is",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "version": "1.0.2",
    },
    "coveralls" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "coveralls",
          "spec": "^3.0.8",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "js-yaml" => EdgeOut {
          "name": "js-yaml",
          "spec": "^3.13.1",
          "to": "node_modules/js-yaml",
          "type": "prod",
        },
        "lcov-parse" => EdgeOut {
          "name": "lcov-parse",
          "spec": "^1.0.0",
          "to": "node_modules/lcov-parse",
          "type": "prod",
        },
        "log-driver" => EdgeOut {
          "name": "log-driver",
          "spec": "^1.2.7",
          "to": "node_modules/log-driver",
          "type": "prod",
        },
        "minimist" => EdgeOut {
          "name": "minimist",
          "spec": "^1.2.0",
          "to": "node_modules/minimist",
          "type": "prod",
        },
        "request" => EdgeOut {
          "name": "request",
          "spec": "^2.88.0",
          "to": "node_modules/request",
          "type": "prod",
        },
      },
      "location": "node_modules/coveralls",
      "name": "coveralls",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/coveralls",
      "resolved": "https://registry.npmjs.org/coveralls/-/coveralls-3.0.9.tgz",
      "version": "3.0.9",
    },
    "cp-file" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "cp-file",
          "spec": "^6.2.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "graceful-fs" => EdgeOut {
          "name": "graceful-fs",
          "spec": "^4.1.2",
          "to": "node_modules/graceful-fs",
          "type": "prod",
        },
        "make-dir" => EdgeOut {
          "name": "make-dir",
          "spec": "^2.0.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "nested-error-stacks" => EdgeOut {
          "name": "nested-error-stacks",
          "spec": "^2.0.0",
          "to": "node_modules/nested-error-stacks",
          "type": "prod",
        },
        "pify" => EdgeOut {
          "name": "pify",
          "spec": "^4.0.1",
          "to": "node_modules/pify",
          "type": "prod",
        },
        "safe-buffer" => EdgeOut {
          "name": "safe-buffer",
          "spec": "^5.0.1",
          "to": "node_modules/safe-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/cp-file",
      "name": "cp-file",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/cp-file",
      "resolved": "https://registry.npmjs.org/cp-file/-/cp-file-6.2.0.tgz",
      "version": "6.2.0",
    },
    "cross-spawn" => ArboristNode {
      "children": Map {
        "which" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/cross-spawn",
              "name": "which",
              "spec": "^1.2.9",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "isexe" => EdgeOut {
              "name": "isexe",
              "spec": "^2.0.0",
              "to": "node_modules/isexe",
              "type": "prod",
            },
          },
          "location": "node_modules/cross-spawn/node_modules/which",
          "name": "which",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/cross-spawn/node_modules/which",
          "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
          "version": "1.3.1",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/foreground-child",
          "name": "cross-spawn",
          "spec": "^4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "lru-cache" => EdgeOut {
          "name": "lru-cache",
          "spec": "^4.0.1",
          "to": "node_modules/lru-cache",
          "type": "prod",
        },
        "which" => EdgeOut {
          "name": "which",
          "spec": "^1.2.9",
          "to": "node_modules/cross-spawn/node_modules/which",
          "type": "prod",
        },
      },
      "location": "node_modules/cross-spawn",
      "name": "cross-spawn",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/cross-spawn",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-4.0.2.tgz",
      "version": "4.0.2",
    },
    "dashdash" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/sshpk",
          "name": "dashdash",
          "spec": "^1.12.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "assert-plus" => EdgeOut {
          "name": "assert-plus",
          "spec": "^1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
      },
      "location": "node_modules/dashdash",
      "name": "dashdash",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/dashdash",
      "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
      "version": "1.14.1",
    },
    "debug" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/traverse",
          "name": "debug",
          "spec": "^4.1.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/istanbul-lib-source-maps",
          "name": "debug",
          "spec": "^4.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ms" => EdgeOut {
          "name": "ms",
          "spec": "^2.1.1",
          "to": "node_modules/ms",
          "type": "prod",
        },
      },
      "location": "node_modules/debug",
      "name": "debug",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/debug",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
      "version": "4.1.1",
    },
    "decamelize" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/yargs-parser",
          "name": "decamelize",
          "spec": "^1.2.0",
          "type": "prod",
        },
      },
      "location": "node_modules/decamelize",
      "name": "decamelize",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/decamelize",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "version": "1.2.0",
    },
    "default-require-extensions" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/append-transform",
          "name": "default-require-extensions",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "strip-bom" => EdgeOut {
          "name": "strip-bom",
          "spec": "^3.0.0",
          "to": "node_modules/strip-bom",
          "type": "prod",
        },
      },
      "location": "node_modules/default-require-extensions",
      "name": "default-require-extensions",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/default-require-extensions",
      "resolved": "https://registry.npmjs.org/default-require-extensions/-/default-require-extensions-2.0.0.tgz",
      "version": "2.0.0",
    },
    "delayed-stream" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/combined-stream",
          "name": "delayed-stream",
          "spec": "~1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/delayed-stream",
      "name": "delayed-stream",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/delayed-stream",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "version": "1.0.0",
    },
    "diff" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "diff",
          "spec": "^4.0.1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/ts-node",
          "name": "diff",
          "spec": "^4.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/diff",
      "name": "diff",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/diff",
      "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.1.tgz",
      "version": "4.0.1",
    },
    "diff-frag" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tcompare",
          "name": "diff-frag",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/diff-frag",
      "name": "diff-frag",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/diff-frag",
      "resolved": "https://registry.npmjs.org/diff-frag/-/diff-frag-1.0.1.tgz",
      "version": "1.0.1",
    },
    "ecc-jsbn" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/sshpk",
          "name": "ecc-jsbn",
          "spec": "~0.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "jsbn" => EdgeOut {
          "name": "jsbn",
          "spec": "~0.1.0",
          "to": "node_modules/jsbn",
          "type": "prod",
        },
        "safer-buffer" => EdgeOut {
          "name": "safer-buffer",
          "spec": "^2.1.0",
          "to": "node_modules/safer-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/ecc-jsbn",
      "name": "ecc-jsbn",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/ecc-jsbn",
      "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
      "version": "0.1.2",
    },
    "emoji-regex" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/yargs/node_modules/string-width",
          "name": "emoji-regex",
          "spec": "^7.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/emoji-regex",
      "name": "emoji-regex",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/emoji-regex",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
      "version": "7.0.3",
    },
    "error-ex" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/parse-json",
          "name": "error-ex",
          "spec": "^1.3.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-arrayish" => EdgeOut {
          "name": "is-arrayish",
          "spec": "^0.2.1",
          "to": "node_modules/is-arrayish",
          "type": "prod",
        },
      },
      "location": "node_modules/error-ex",
      "name": "error-ex",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/error-ex",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "version": "1.3.2",
    },
    "es6-error" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/release-zalgo",
          "name": "es6-error",
          "spec": "^4.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/es6-error",
      "name": "es6-error",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/es6-error",
      "resolved": "https://registry.npmjs.org/es6-error/-/es6-error-4.1.1.tgz",
      "version": "4.1.1",
    },
    "escape-string-regexp" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/chalk",
          "name": "escape-string-regexp",
          "spec": "^1.0.5",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/tap-mocha-reporter",
          "name": "escape-string-regexp",
          "spec": "^1.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/escape-string-regexp",
      "name": "escape-string-regexp",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/escape-string-regexp",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "version": "1.0.5",
    },
    "esm" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "esm",
          "spec": "^3.2.25",
          "type": "prod",
        },
      },
      "location": "node_modules/esm",
      "name": "esm",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/esm",
      "resolved": "https://registry.npmjs.org/esm/-/esm-3.2.25.tgz",
      "version": "3.2.25",
    },
    "esprima" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/js-yaml",
          "name": "esprima",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/esprima",
      "name": "esprima",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/esprima",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "version": "4.0.1",
    },
    "esutils" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/highlight",
          "name": "esutils",
          "spec": "^2.0.2",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/@babel/types",
          "name": "esutils",
          "spec": "^2.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/esutils",
      "name": "esutils",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/esutils",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "version": "2.0.3",
    },
    "events-to-array" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap-parser",
          "name": "events-to-array",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/events-to-array",
      "name": "events-to-array",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/events-to-array",
      "resolved": "https://registry.npmjs.org/events-to-array/-/events-to-array-1.1.2.tgz",
      "version": "1.1.2",
    },
    "extend" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "extend",
          "spec": "~3.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/extend",
      "name": "extend",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/extend",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "version": "3.0.2",
    },
    "extsprintf" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/jsprim",
          "name": "extsprintf",
          "spec": "1.3.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/verror",
          "name": "extsprintf",
          "spec": "^1.2.0",
          "type": "prod",
        },
      },
      "location": "node_modules/extsprintf",
      "name": "extsprintf",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/extsprintf",
      "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
      "version": "1.3.0",
    },
    "fast-deep-equal" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/ajv",
          "name": "fast-deep-equal",
          "spec": "^2.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/fast-deep-equal",
      "name": "fast-deep-equal",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/fast-deep-equal",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
      "version": "2.0.1",
    },
    "fast-json-stable-stringify" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/ajv",
          "name": "fast-json-stable-stringify",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fast-json-stable-stringify",
      "name": "fast-json-stable-stringify",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/fast-json-stable-stringify",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "version": "2.1.0",
    },
    "fill-range" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/braces",
          "name": "fill-range",
          "spec": "^7.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "to-regex-range" => EdgeOut {
          "name": "to-regex-range",
          "spec": "^5.0.1",
          "to": "node_modules/to-regex-range",
          "type": "prod",
        },
      },
      "location": "node_modules/fill-range",
      "name": "fill-range",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/fill-range",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "version": "7.0.1",
    },
    "find-cache-dir" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "find-cache-dir",
          "spec": "^2.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "commondir" => EdgeOut {
          "name": "commondir",
          "spec": "^1.0.1",
          "to": "node_modules/commondir",
          "type": "prod",
        },
        "make-dir" => EdgeOut {
          "name": "make-dir",
          "spec": "^2.0.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "pkg-dir" => EdgeOut {
          "name": "pkg-dir",
          "spec": "^3.0.0",
          "to": "node_modules/pkg-dir",
          "type": "prod",
        },
      },
      "location": "node_modules/find-cache-dir",
      "name": "find-cache-dir",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/find-cache-dir",
      "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-2.1.0.tgz",
      "version": "2.1.0",
    },
    "find-up" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "find-up",
          "spec": "^3.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/pkg-dir",
          "name": "find-up",
          "spec": "^3.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/read-pkg-up",
          "name": "find-up",
          "spec": "^3.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/yargs",
          "name": "find-up",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "locate-path" => EdgeOut {
          "name": "locate-path",
          "spec": "^3.0.0",
          "to": "node_modules/locate-path",
          "type": "prod",
        },
      },
      "location": "node_modules/find-up",
      "name": "find-up",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/find-up",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
      "version": "3.0.0",
    },
    "findit" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "findit",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/findit",
      "name": "findit",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/findit",
      "resolved": "https://registry.npmjs.org/findit/-/findit-2.0.0.tgz",
      "version": "2.0.0",
    },
    "flow-parser" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/flow-remove-types",
          "name": "flow-parser",
          "spec": "^0.114.0",
          "type": "prod",
        },
      },
      "location": "node_modules/flow-parser",
      "name": "flow-parser",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/flow-parser",
      "resolved": "https://registry.npmjs.org/flow-parser/-/flow-parser-0.114.0.tgz",
      "version": "0.114.0",
    },
    "flow-remove-types" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "flow-remove-types",
          "spec": "^2.112.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "flow-parser" => EdgeOut {
          "name": "flow-parser",
          "spec": "^0.114.0",
          "to": "node_modules/flow-parser",
          "type": "prod",
        },
        "pirates" => EdgeOut {
          "name": "pirates",
          "spec": "^3.0.2",
          "to": "node_modules/pirates",
          "type": "prod",
        },
        "vlq" => EdgeOut {
          "name": "vlq",
          "spec": "^0.2.1",
          "to": "node_modules/vlq",
          "type": "prod",
        },
      },
      "location": "node_modules/flow-remove-types",
      "name": "flow-remove-types",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/flow-remove-types",
      "resolved": "https://registry.npmjs.org/flow-remove-types/-/flow-remove-types-2.114.0.tgz",
      "version": "2.114.0",
    },
    "foreground-child" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "foreground-child",
          "spec": "^1.5.6",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/spawn-wrap",
          "name": "foreground-child",
          "spec": "^1.5.6",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/tap",
          "name": "foreground-child",
          "spec": "^1.3.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "cross-spawn" => EdgeOut {
          "name": "cross-spawn",
          "spec": "^4",
          "to": "node_modules/cross-spawn",
          "type": "prod",
        },
        "signal-exit" => EdgeOut {
          "name": "signal-exit",
          "spec": "^3.0.0",
          "to": "node_modules/signal-exit",
          "type": "prod",
        },
      },
      "location": "node_modules/foreground-child",
      "name": "foreground-child",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/foreground-child",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-1.5.6.tgz",
      "version": "1.5.6",
    },
    "forever-agent" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "forever-agent",
          "spec": "~0.6.1",
          "type": "prod",
        },
      },
      "location": "node_modules/forever-agent",
      "name": "forever-agent",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/forever-agent",
      "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
      "version": "0.6.1",
    },
    "form-data" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "form-data",
          "spec": "~2.3.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "asynckit" => EdgeOut {
          "name": "asynckit",
          "spec": "^0.4.0",
          "to": "node_modules/asynckit",
          "type": "prod",
        },
        "combined-stream" => EdgeOut {
          "name": "combined-stream",
          "spec": "^1.0.6",
          "to": "node_modules/combined-stream",
          "type": "prod",
        },
        "mime-types" => EdgeOut {
          "name": "mime-types",
          "spec": "^2.1.12",
          "to": "node_modules/mime-types",
          "type": "prod",
        },
      },
      "location": "node_modules/form-data",
      "name": "form-data",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/form-data",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
      "version": "2.3.3",
    },
    "fs-exists-cached" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "fs-exists-cached",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs-exists-cached",
      "name": "fs-exists-cached",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/fs-exists-cached",
      "resolved": "https://registry.npmjs.org/fs-exists-cached/-/fs-exists-cached-1.0.0.tgz",
      "version": "1.0.0",
    },
    "fs.realpath" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/fs.realpath",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "version": "1.0.0",
    },
    "fsevents" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/chokidar",
          "name": "fsevents",
          "spec": "~2.1.2",
          "type": "optional",
        },
      },
      "location": "node_modules/fsevents",
      "name": "fsevents",
      "optional": true,
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/fsevents",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.1.2.tgz",
      "version": "2.1.2",
    },
    "function-loop" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "function-loop",
          "spec": "^1.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/function-loop",
      "name": "function-loop",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/function-loop",
      "resolved": "https://registry.npmjs.org/function-loop/-/function-loop-1.0.2.tgz",
      "version": "1.0.2",
    },
    "get-caller-file" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/yargs",
          "name": "get-caller-file",
          "spec": "^2.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/get-caller-file",
      "name": "get-caller-file",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/get-caller-file",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "version": "2.0.5",
    },
    "getpass" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/sshpk",
          "name": "getpass",
          "spec": "^0.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "assert-plus" => EdgeOut {
          "name": "assert-plus",
          "spec": "^1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
      },
      "location": "node_modules/getpass",
      "name": "getpass",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/getpass",
      "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
      "version": "0.1.7",
    },
    "glob" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/tap",
          "name": "glob",
          "spec": "^7.1.6",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/tap-mocha-reporter",
          "name": "glob",
          "spec": "^7.0.5",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/test-exclude",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => EdgeOut {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => EdgeOut {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "node_modules/inflight",
          "type": "prod",
        },
        "inherits" => EdgeOut {
          "name": "inherits",
          "spec": "2",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => EdgeOut {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "once" => EdgeOut {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => EdgeOut {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "node_modules/glob",
      "name": "glob",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/glob",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
      "version": "7.1.6",
    },
    "glob-parent" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/chokidar",
          "name": "glob-parent",
          "spec": "~5.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-glob" => EdgeOut {
          "name": "is-glob",
          "spec": "^4.0.1",
          "to": "node_modules/is-glob",
          "type": "prod",
        },
      },
      "location": "node_modules/glob-parent",
      "name": "glob-parent",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/glob-parent",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.0.tgz",
      "version": "5.1.0",
    },
    "globals" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/traverse",
          "name": "globals",
          "spec": "^11.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/globals",
      "name": "globals",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/globals",
      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
      "version": "11.12.0",
    },
    "graceful-fs" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/caching-transform/node_modules/write-file-atomic",
          "name": "graceful-fs",
          "spec": "^4.1.11",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/cp-file",
          "name": "graceful-fs",
          "spec": "^4.1.2",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/load-json-file",
          "name": "graceful-fs",
          "spec": "^4.1.2",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/package-hash",
          "name": "graceful-fs",
          "spec": "^4.1.15",
          "type": "prod",
        },
      },
      "location": "node_modules/graceful-fs",
      "name": "graceful-fs",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/graceful-fs",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.3.tgz",
      "version": "4.2.3",
    },
    "handlebars" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/istanbul-reports",
          "name": "handlebars",
          "spec": "^4.1.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "neo-async" => EdgeOut {
          "name": "neo-async",
          "spec": "^2.6.0",
          "to": "node_modules/neo-async",
          "type": "prod",
        },
        "optimist" => EdgeOut {
          "name": "optimist",
          "spec": "^0.6.1",
          "to": "node_modules/optimist",
          "type": "prod",
        },
        "source-map" => EdgeOut {
          "name": "source-map",
          "spec": "^0.6.1",
          "to": "node_modules/source-map",
          "type": "prod",
        },
        "uglify-js" => EdgeOut {
          "name": "uglify-js",
          "spec": "^3.1.4",
          "to": "node_modules/uglify-js",
          "type": "optional",
        },
      },
      "location": "node_modules/handlebars",
      "name": "handlebars",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/handlebars",
      "resolved": "https://registry.npmjs.org/handlebars/-/handlebars-4.5.3.tgz",
      "version": "4.5.3",
    },
    "har-schema" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/har-validator",
          "name": "har-schema",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/har-schema",
      "name": "har-schema",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/har-schema",
      "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
      "version": "2.0.0",
    },
    "har-validator" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "har-validator",
          "spec": "~5.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ajv" => EdgeOut {
          "name": "ajv",
          "spec": "^6.5.5",
          "to": "node_modules/ajv",
          "type": "prod",
        },
        "har-schema" => EdgeOut {
          "name": "har-schema",
          "spec": "^2.0.0",
          "to": "node_modules/har-schema",
          "type": "prod",
        },
      },
      "location": "node_modules/har-validator",
      "name": "har-validator",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/har-validator",
      "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.3.tgz",
      "version": "5.1.3",
    },
    "has-flag" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/istanbul-lib-report/node_modules/supports-color",
          "name": "has-flag",
          "spec": "^3.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/supports-color",
          "name": "has-flag",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/has-flag",
      "name": "has-flag",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/has-flag",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "version": "3.0.0",
    },
    "hasha" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/caching-transform",
          "name": "hasha",
          "spec": "^3.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/package-hash",
          "name": "hasha",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-stream" => EdgeOut {
          "name": "is-stream",
          "spec": "^1.0.1",
          "to": "node_modules/is-stream",
          "type": "prod",
        },
      },
      "location": "node_modules/hasha",
      "name": "hasha",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/hasha",
      "resolved": "https://registry.npmjs.org/hasha/-/hasha-3.0.0.tgz",
      "version": "3.0.0",
    },
    "hosted-git-info" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/normalize-package-data",
          "name": "hosted-git-info",
          "spec": "^2.1.4",
          "type": "prod",
        },
      },
      "location": "node_modules/hosted-git-info",
      "name": "hosted-git-info",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/hosted-git-info",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.5.tgz",
      "version": "2.8.5",
    },
    "http-signature" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "http-signature",
          "spec": "~1.2.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "assert-plus" => EdgeOut {
          "name": "assert-plus",
          "spec": "^1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
        "jsprim" => EdgeOut {
          "name": "jsprim",
          "spec": "^1.2.2",
          "to": "node_modules/jsprim",
          "type": "prod",
        },
        "sshpk" => EdgeOut {
          "name": "sshpk",
          "spec": "^1.7.0",
          "to": "node_modules/sshpk",
          "type": "prod",
        },
      },
      "location": "node_modules/http-signature",
      "name": "http-signature",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/http-signature",
      "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
      "version": "1.2.0",
    },
    "imurmurhash" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/caching-transform/node_modules/write-file-atomic",
          "name": "imurmurhash",
          "spec": "^0.1.4",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/write-file-atomic",
          "name": "imurmurhash",
          "spec": "^0.1.4",
          "type": "prod",
        },
      },
      "location": "node_modules/imurmurhash",
      "name": "imurmurhash",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/imurmurhash",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "version": "0.1.4",
    },
    "inflight" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => EdgeOut {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/inflight",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "version": "1.0.6",
    },
    "inherits" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/readable-stream",
          "name": "inherits",
          "spec": "~2.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/inherits",
      "name": "inherits",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/inherits",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "version": "2.0.4",
    },
    "is-arrayish" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/error-ex",
          "name": "is-arrayish",
          "spec": "^0.2.1",
          "type": "prod",
        },
      },
      "location": "node_modules/is-arrayish",
      "name": "is-arrayish",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/is-arrayish",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "version": "0.2.1",
    },
    "is-binary-path" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/chokidar",
          "name": "is-binary-path",
          "spec": "~2.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "binary-extensions" => EdgeOut {
          "name": "binary-extensions",
          "spec": "^2.0.0",
          "to": "node_modules/binary-extensions",
          "type": "prod",
        },
      },
      "location": "node_modules/is-binary-path",
      "name": "is-binary-path",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/is-binary-path",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "version": "2.1.0",
    },
    "is-extglob" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/is-glob",
          "name": "is-extglob",
          "spec": "^2.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/is-extglob",
      "name": "is-extglob",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/is-extglob",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "version": "2.1.1",
    },
    "is-fullwidth-code-point" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/string-width",
          "name": "is-fullwidth-code-point",
          "spec": "^2.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/yargs/node_modules/string-width",
          "name": "is-fullwidth-code-point",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/is-fullwidth-code-point",
      "name": "is-fullwidth-code-point",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/is-fullwidth-code-point",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
      "version": "2.0.0",
    },
    "is-glob" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/chokidar",
          "name": "is-glob",
          "spec": "~4.0.1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/glob-parent",
          "name": "is-glob",
          "spec": "^4.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-extglob" => EdgeOut {
          "name": "is-extglob",
          "spec": "^2.1.1",
          "to": "node_modules/is-extglob",
          "type": "prod",
        },
      },
      "location": "node_modules/is-glob",
      "name": "is-glob",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/is-glob",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
      "version": "4.0.1",
    },
    "is-number" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/to-regex-range",
          "name": "is-number",
          "spec": "^7.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/is-number",
      "name": "is-number",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/is-number",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "version": "7.0.0",
    },
    "is-stream" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/hasha",
          "name": "is-stream",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/is-stream",
      "name": "is-stream",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/is-stream",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
      "version": "1.1.0",
    },
    "is-typedarray" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "is-typedarray",
          "spec": "~1.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/typedarray-to-buffer",
          "name": "is-typedarray",
          "spec": "^1.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/write-file-atomic",
          "name": "is-typedarray",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/is-typedarray",
      "name": "is-typedarray",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/is-typedarray",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "version": "1.0.0",
    },
    "isarray" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/readable-stream",
          "name": "isarray",
          "spec": "~1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/isarray",
      "name": "isarray",
      "optional": true,
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/isarray",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "version": "1.0.0",
    },
    "isexe" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/cross-spawn/node_modules/which",
          "name": "isexe",
          "spec": "^2.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/istanbul-lib-processinfo/node_modules/which",
          "name": "isexe",
          "spec": "^2.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/spawn-wrap/node_modules/which",
          "name": "isexe",
          "spec": "^2.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/tap",
          "name": "isexe",
          "spec": "^2.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/which",
          "name": "isexe",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/isexe",
      "name": "isexe",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/isexe",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "version": "2.0.0",
    },
    "isstream" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "isstream",
          "spec": "~0.1.2",
          "type": "prod",
        },
      },
      "location": "node_modules/isstream",
      "name": "isstream",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/isstream",
      "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
      "version": "0.1.2",
    },
    "istanbul-lib-coverage" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/istanbul-lib-processinfo",
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.3",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/istanbul-lib-report",
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/istanbul-lib-source-maps",
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-coverage",
      "name": "istanbul-lib-coverage",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/istanbul-lib-coverage",
      "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.5.tgz",
      "version": "2.0.5",
    },
    "istanbul-lib-hook" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "istanbul-lib-hook",
          "spec": "^2.0.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "append-transform" => EdgeOut {
          "name": "append-transform",
          "spec": "^1.0.0",
          "to": "node_modules/append-transform",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-hook",
      "name": "istanbul-lib-hook",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/istanbul-lib-hook",
      "resolved": "https://registry.npmjs.org/istanbul-lib-hook/-/istanbul-lib-hook-2.0.7.tgz",
      "version": "2.0.7",
    },
    "istanbul-lib-instrument" => ArboristNode {
      "children": Map {
        "semver" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/istanbul-lib-instrument",
              "name": "semver",
              "spec": "^6.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/istanbul-lib-instrument/node_modules/semver",
          "name": "semver",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/istanbul-lib-instrument/node_modules/semver",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "version": "6.3.0",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "istanbul-lib-instrument",
          "spec": "^3.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/generator" => EdgeOut {
          "name": "@babel/generator",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/generator",
          "type": "prod",
        },
        "@babel/parser" => EdgeOut {
          "name": "@babel/parser",
          "spec": "^7.4.3",
          "to": "node_modules/@babel/parser",
          "type": "prod",
        },
        "@babel/template" => EdgeOut {
          "name": "@babel/template",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/template",
          "type": "prod",
        },
        "@babel/traverse" => EdgeOut {
          "name": "@babel/traverse",
          "spec": "^7.4.3",
          "to": "node_modules/@babel/traverse",
          "type": "prod",
        },
        "@babel/types" => EdgeOut {
          "name": "@babel/types",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
        "istanbul-lib-coverage" => EdgeOut {
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "to": "node_modules/istanbul-lib-coverage",
          "type": "prod",
        },
        "semver" => EdgeOut {
          "name": "semver",
          "spec": "^6.0.0",
          "to": "node_modules/istanbul-lib-instrument/node_modules/semver",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-instrument",
      "name": "istanbul-lib-instrument",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/istanbul-lib-instrument",
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-3.3.0.tgz",
      "version": "3.3.0",
    },
    "istanbul-lib-processinfo" => ArboristNode {
      "children": Map {
        "cross-spawn" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/istanbul-lib-processinfo",
              "name": "cross-spawn",
              "spec": "^6.0.5",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "nice-try" => EdgeOut {
              "name": "nice-try",
              "spec": "^1.0.4",
              "to": "node_modules/nice-try",
              "type": "prod",
            },
            "path-key" => EdgeOut {
              "name": "path-key",
              "spec": "^2.0.1",
              "to": "node_modules/path-key",
              "type": "prod",
            },
            "semver" => EdgeOut {
              "name": "semver",
              "spec": "^5.5.0",
              "to": "node_modules/semver",
              "type": "prod",
            },
            "shebang-command" => EdgeOut {
              "name": "shebang-command",
              "spec": "^1.2.0",
              "to": "node_modules/shebang-command",
              "type": "prod",
            },
            "which" => EdgeOut {
              "name": "which",
              "spec": "^1.2.9",
              "to": "node_modules/istanbul-lib-processinfo/node_modules/which",
              "type": "prod",
            },
          },
          "location": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "name": "cross-spawn",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
          "version": "6.0.5",
        },
        "which" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
              "name": "which",
              "spec": "^1.2.9",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "isexe" => EdgeOut {
              "name": "isexe",
              "spec": "^2.0.0",
              "to": "node_modules/isexe",
              "type": "prod",
            },
          },
          "location": "node_modules/istanbul-lib-processinfo/node_modules/which",
          "name": "which",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/istanbul-lib-processinfo/node_modules/which",
          "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
          "version": "1.3.1",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "istanbul-lib-processinfo",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "archy" => EdgeOut {
          "name": "archy",
          "spec": "^1.0.0",
          "to": "node_modules/archy",
          "type": "prod",
        },
        "cross-spawn" => EdgeOut {
          "name": "cross-spawn",
          "spec": "^6.0.5",
          "to": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "type": "prod",
        },
        "istanbul-lib-coverage" => EdgeOut {
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.3",
          "to": "node_modules/istanbul-lib-coverage",
          "type": "prod",
        },
        "rimraf" => EdgeOut {
          "name": "rimraf",
          "spec": "^2.6.3",
          "to": "node_modules/rimraf",
          "type": "prod",
        },
        "uuid" => EdgeOut {
          "name": "uuid",
          "spec": "^3.3.2",
          "to": "node_modules/uuid",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-processinfo",
      "name": "istanbul-lib-processinfo",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/istanbul-lib-processinfo",
      "resolved": "https://registry.npmjs.org/istanbul-lib-processinfo/-/istanbul-lib-processinfo-1.0.0.tgz",
      "version": "1.0.0",
    },
    "istanbul-lib-report" => ArboristNode {
      "children": Map {
        "supports-color" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/istanbul-lib-report",
              "name": "supports-color",
              "spec": "^6.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "has-flag" => EdgeOut {
              "name": "has-flag",
              "spec": "^3.0.0",
              "to": "node_modules/has-flag",
              "type": "prod",
            },
          },
          "location": "node_modules/istanbul-lib-report/node_modules/supports-color",
          "name": "supports-color",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/istanbul-lib-report/node_modules/supports-color",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
          "version": "6.1.0",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "istanbul-lib-report",
          "spec": "^2.0.8",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "istanbul-lib-coverage" => EdgeOut {
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "to": "node_modules/istanbul-lib-coverage",
          "type": "prod",
        },
        "make-dir" => EdgeOut {
          "name": "make-dir",
          "spec": "^2.1.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "supports-color" => EdgeOut {
          "name": "supports-color",
          "spec": "^6.1.0",
          "to": "node_modules/istanbul-lib-report/node_modules/supports-color",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-report",
      "name": "istanbul-lib-report",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/istanbul-lib-report",
      "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-2.0.8.tgz",
      "version": "2.0.8",
    },
    "istanbul-lib-source-maps" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "istanbul-lib-source-maps",
          "spec": "^3.0.6",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "debug" => EdgeOut {
          "name": "debug",
          "spec": "^4.1.1",
          "to": "node_modules/debug",
          "type": "prod",
        },
        "istanbul-lib-coverage" => EdgeOut {
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "to": "node_modules/istanbul-lib-coverage",
          "type": "prod",
        },
        "make-dir" => EdgeOut {
          "name": "make-dir",
          "spec": "^2.1.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "rimraf" => EdgeOut {
          "name": "rimraf",
          "spec": "^2.6.3",
          "to": "node_modules/rimraf",
          "type": "prod",
        },
        "source-map" => EdgeOut {
          "name": "source-map",
          "spec": "^0.6.1",
          "to": "node_modules/source-map",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-source-maps",
      "name": "istanbul-lib-source-maps",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/istanbul-lib-source-maps",
      "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-3.0.6.tgz",
      "version": "3.0.6",
    },
    "istanbul-reports" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "istanbul-reports",
          "spec": "^2.2.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "handlebars" => EdgeOut {
          "name": "handlebars",
          "spec": "^4.1.2",
          "to": "node_modules/handlebars",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-reports",
      "name": "istanbul-reports",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/istanbul-reports",
      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-2.2.6.tgz",
      "version": "2.2.6",
    },
    "jackspeak" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "jackspeak",
          "spec": "^1.4.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "cliui" => EdgeOut {
          "name": "cliui",
          "spec": "^4.1.0",
          "to": "node_modules/cliui",
          "type": "prod",
        },
      },
      "location": "node_modules/jackspeak",
      "name": "jackspeak",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/jackspeak",
      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-1.4.0.tgz",
      "version": "1.4.0",
    },
    "js-tokens" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/highlight",
          "name": "js-tokens",
          "spec": "^4.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/loose-envify",
          "name": "js-tokens",
          "spec": "^3.0.0 || ^4.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/js-tokens",
      "name": "js-tokens",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/js-tokens",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "version": "4.0.0",
    },
    "js-yaml" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/coveralls",
          "name": "js-yaml",
          "spec": "^3.13.1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "js-yaml",
          "spec": "^3.13.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "argparse" => EdgeOut {
          "name": "argparse",
          "spec": "^1.0.7",
          "to": "node_modules/argparse",
          "type": "prod",
        },
        "esprima" => EdgeOut {
          "name": "esprima",
          "spec": "^4.0.0",
          "to": "node_modules/esprima",
          "type": "prod",
        },
      },
      "location": "node_modules/js-yaml",
      "name": "js-yaml",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/js-yaml",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.13.1.tgz",
      "version": "3.13.1",
    },
    "jsbn" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/ecc-jsbn",
          "name": "jsbn",
          "spec": "~0.1.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/sshpk",
          "name": "jsbn",
          "spec": "~0.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/jsbn",
      "name": "jsbn",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/jsbn",
      "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
      "version": "0.1.1",
    },
    "jsesc" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/generator",
          "name": "jsesc",
          "spec": "^2.5.1",
          "type": "prod",
        },
      },
      "location": "node_modules/jsesc",
      "name": "jsesc",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/jsesc",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
      "version": "2.5.2",
    },
    "json-parse-better-errors" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/parse-json",
          "name": "json-parse-better-errors",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/json-parse-better-errors",
      "name": "json-parse-better-errors",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/json-parse-better-errors",
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
      "version": "1.0.2",
    },
    "json-schema" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/jsprim",
          "name": "json-schema",
          "spec": "0.2.3",
          "type": "prod",
        },
      },
      "location": "node_modules/json-schema",
      "name": "json-schema",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/json-schema",
      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
      "version": "0.2.3",
    },
    "json-schema-traverse" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/ajv",
          "name": "json-schema-traverse",
          "spec": "^0.4.1",
          "type": "prod",
        },
      },
      "location": "node_modules/json-schema-traverse",
      "name": "json-schema-traverse",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/json-schema-traverse",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "version": "0.4.1",
    },
    "json-stringify-safe" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "json-stringify-safe",
          "spec": "~5.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/json-stringify-safe",
      "name": "json-stringify-safe",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/json-stringify-safe",
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
      "version": "5.0.1",
    },
    "jsprim" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/http-signature",
          "name": "jsprim",
          "spec": "^1.2.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "assert-plus" => EdgeOut {
          "name": "assert-plus",
          "spec": "1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
        "extsprintf" => EdgeOut {
          "name": "extsprintf",
          "spec": "1.3.0",
          "to": "node_modules/extsprintf",
          "type": "prod",
        },
        "json-schema" => EdgeOut {
          "name": "json-schema",
          "spec": "0.2.3",
          "to": "node_modules/json-schema",
          "type": "prod",
        },
        "verror" => EdgeOut {
          "name": "verror",
          "spec": "1.10.0",
          "to": "node_modules/verror",
          "type": "prod",
        },
      },
      "location": "node_modules/jsprim",
      "name": "jsprim",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/jsprim",
      "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
      "version": "1.4.1",
    },
    "lcov-parse" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/coveralls",
          "name": "lcov-parse",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/lcov-parse",
      "name": "lcov-parse",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/lcov-parse",
      "resolved": "https://registry.npmjs.org/lcov-parse/-/lcov-parse-1.0.0.tgz",
      "version": "1.0.0",
    },
    "load-json-file" => ArboristNode {
      "children": Map {
        "pify" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/load-json-file",
              "name": "pify",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/load-json-file/node_modules/pify",
          "name": "pify",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/load-json-file/node_modules/pify",
          "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
          "version": "3.0.0",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/read-pkg",
          "name": "load-json-file",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "graceful-fs" => EdgeOut {
          "name": "graceful-fs",
          "spec": "^4.1.2",
          "to": "node_modules/graceful-fs",
          "type": "prod",
        },
        "parse-json" => EdgeOut {
          "name": "parse-json",
          "spec": "^4.0.0",
          "to": "node_modules/parse-json",
          "type": "prod",
        },
        "pify" => EdgeOut {
          "name": "pify",
          "spec": "^3.0.0",
          "to": "node_modules/load-json-file/node_modules/pify",
          "type": "prod",
        },
        "strip-bom" => EdgeOut {
          "name": "strip-bom",
          "spec": "^3.0.0",
          "to": "node_modules/strip-bom",
          "type": "prod",
        },
      },
      "location": "node_modules/load-json-file",
      "name": "load-json-file",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/load-json-file",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-4.0.0.tgz",
      "version": "4.0.0",
    },
    "locate-path" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/find-up",
          "name": "locate-path",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "p-locate" => EdgeOut {
          "name": "p-locate",
          "spec": "^3.0.0",
          "to": "node_modules/p-locate",
          "type": "prod",
        },
        "path-exists" => EdgeOut {
          "name": "path-exists",
          "spec": "^3.0.0",
          "to": "node_modules/path-exists",
          "type": "prod",
        },
      },
      "location": "node_modules/locate-path",
      "name": "locate-path",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/locate-path",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
      "version": "3.0.0",
    },
    "lodash" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/generator",
          "name": "lodash",
          "spec": "^4.17.13",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/@babel/traverse",
          "name": "lodash",
          "spec": "^4.17.13",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/@babel/types",
          "name": "lodash",
          "spec": "^4.17.13",
          "type": "prod",
        },
      },
      "location": "node_modules/lodash",
      "name": "lodash",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/lodash",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.15.tgz",
      "version": "4.17.15",
    },
    "lodash.flattendeep" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/package-hash",
          "name": "lodash.flattendeep",
          "spec": "^4.4.0",
          "type": "prod",
        },
      },
      "location": "node_modules/lodash.flattendeep",
      "name": "lodash.flattendeep",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/lodash.flattendeep",
      "resolved": "https://registry.npmjs.org/lodash.flattendeep/-/lodash.flattendeep-4.4.0.tgz",
      "version": "4.4.0",
    },
    "log-driver" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/coveralls",
          "name": "log-driver",
          "spec": "^1.2.7",
          "type": "prod",
        },
      },
      "location": "node_modules/log-driver",
      "name": "log-driver",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/log-driver",
      "resolved": "https://registry.npmjs.org/log-driver/-/log-driver-1.2.7.tgz",
      "version": "1.2.7",
    },
    "loose-envify" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/prop-types",
          "name": "loose-envify",
          "spec": "^1.4.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/react",
          "name": "loose-envify",
          "spec": "^1.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "js-tokens" => EdgeOut {
          "name": "js-tokens",
          "spec": "^3.0.0 || ^4.0.0",
          "to": "node_modules/js-tokens",
          "type": "prod",
        },
      },
      "location": "node_modules/loose-envify",
      "name": "loose-envify",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/loose-envify",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "version": "1.4.0",
    },
    "lru-cache" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/cross-spawn",
          "name": "lru-cache",
          "spec": "^4.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "pseudomap" => EdgeOut {
          "name": "pseudomap",
          "spec": "^1.0.2",
          "to": "node_modules/pseudomap",
          "type": "prod",
        },
        "yallist" => EdgeOut {
          "name": "yallist",
          "spec": "^2.1.2",
          "to": "node_modules/yallist",
          "type": "prod",
        },
      },
      "location": "node_modules/lru-cache",
      "name": "lru-cache",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/lru-cache",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
      "version": "4.1.5",
    },
    "make-dir" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/caching-transform",
          "name": "make-dir",
          "spec": "^2.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/cp-file",
          "name": "make-dir",
          "spec": "^2.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/find-cache-dir",
          "name": "make-dir",
          "spec": "^2.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/istanbul-lib-report",
          "name": "make-dir",
          "spec": "^2.1.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/istanbul-lib-source-maps",
          "name": "make-dir",
          "spec": "^2.1.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "make-dir",
          "spec": "^2.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "pify" => EdgeOut {
          "name": "pify",
          "spec": "^4.0.1",
          "to": "node_modules/pify",
          "type": "prod",
        },
        "semver" => EdgeOut {
          "name": "semver",
          "spec": "^5.6.0",
          "to": "node_modules/semver",
          "type": "prod",
        },
      },
      "location": "node_modules/make-dir",
      "name": "make-dir",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/make-dir",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
      "version": "2.1.0",
    },
    "make-error" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/ts-node",
          "name": "make-error",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/make-error",
      "name": "make-error",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/make-error",
      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.5.tgz",
      "version": "1.3.5",
    },
    "merge-source-map" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "merge-source-map",
          "spec": "^1.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "source-map" => EdgeOut {
          "name": "source-map",
          "spec": "^0.6.1",
          "to": "node_modules/source-map",
          "type": "prod",
        },
      },
      "location": "node_modules/merge-source-map",
      "name": "merge-source-map",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/merge-source-map",
      "resolved": "https://registry.npmjs.org/merge-source-map/-/merge-source-map-1.1.0.tgz",
      "version": "1.1.0",
    },
    "mime-db" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/mime-types",
          "name": "mime-db",
          "spec": "1.42.0",
          "type": "prod",
        },
      },
      "location": "node_modules/mime-db",
      "name": "mime-db",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/mime-db",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.42.0.tgz",
      "version": "1.42.0",
    },
    "mime-types" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/form-data",
          "name": "mime-types",
          "spec": "^2.1.12",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/request",
          "name": "mime-types",
          "spec": "~2.1.19",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "mime-db" => EdgeOut {
          "name": "mime-db",
          "spec": "1.42.0",
          "to": "node_modules/mime-db",
          "type": "prod",
        },
      },
      "location": "node_modules/mime-types",
      "name": "mime-types",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/mime-types",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.25.tgz",
      "version": "2.1.25",
    },
    "minimatch" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/test-exclude",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => EdgeOut {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/minimatch",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "version": "3.0.4",
    },
    "minimist" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/coveralls",
          "name": "minimist",
          "spec": "^1.2.0",
          "type": "prod",
        },
      },
      "location": "node_modules/minimist",
      "name": "minimist",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/minimist",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
      "version": "1.2.0",
    },
    "minipass" => ArboristNode {
      "children": Map {
        "yallist" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/minipass",
              "name": "yallist",
              "spec": "^4.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/minipass/node_modules/yallist",
          "name": "yallist",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/minipass/node_modules/yallist",
          "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
          "version": "4.0.0",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap-parser",
          "name": "minipass",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "yallist" => EdgeOut {
          "name": "yallist",
          "spec": "^4.0.0",
          "to": "node_modules/minipass/node_modules/yallist",
          "type": "prod",
        },
      },
      "location": "node_modules/minipass",
      "name": "minipass",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/minipass",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.1.1.tgz",
      "version": "3.1.1",
    },
    "mkdirp" => ArboristNode {
      "children": Map {
        "minimist" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/mkdirp",
              "name": "minimist",
              "spec": "0.0.8",
              "type": "prod",
            },
          },
          "location": "node_modules/mkdirp/node_modules/minimist",
          "name": "minimist",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/mkdirp/node_modules/minimist",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz",
          "version": "0.0.8",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/spawn-wrap",
          "name": "mkdirp",
          "spec": "^0.5.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/tap",
          "name": "mkdirp",
          "spec": "^0.5.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "minimist" => EdgeOut {
          "name": "minimist",
          "spec": "0.0.8",
          "to": "node_modules/mkdirp/node_modules/minimist",
          "type": "prod",
        },
      },
      "location": "node_modules/mkdirp",
      "name": "mkdirp",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/mkdirp",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz",
      "version": "0.5.1",
    },
    "ms" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/debug",
          "name": "ms",
          "spec": "^2.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/ms",
      "name": "ms",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/ms",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "version": "2.1.2",
    },
    "neo-async" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/handlebars",
          "name": "neo-async",
          "spec": "^2.6.0",
          "type": "prod",
        },
      },
      "location": "node_modules/neo-async",
      "name": "neo-async",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/neo-async",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.1.tgz",
      "version": "2.6.1",
    },
    "nested-error-stacks" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/cp-file",
          "name": "nested-error-stacks",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/nested-error-stacks",
      "name": "nested-error-stacks",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/nested-error-stacks",
      "resolved": "https://registry.npmjs.org/nested-error-stacks/-/nested-error-stacks-2.1.0.tgz",
      "version": "2.1.0",
    },
    "nice-try" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "name": "nice-try",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "location": "node_modules/nice-try",
      "name": "nice-try",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/nice-try",
      "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
      "version": "1.0.5",
    },
    "node-modules-regexp" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/pirates",
          "name": "node-modules-regexp",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/node-modules-regexp",
      "name": "node-modules-regexp",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/node-modules-regexp",
      "resolved": "https://registry.npmjs.org/node-modules-regexp/-/node-modules-regexp-1.0.0.tgz",
      "version": "1.0.0",
    },
    "normalize-package-data" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/read-pkg",
          "name": "normalize-package-data",
          "spec": "^2.3.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "hosted-git-info" => EdgeOut {
          "name": "hosted-git-info",
          "spec": "^2.1.4",
          "to": "node_modules/hosted-git-info",
          "type": "prod",
        },
        "resolve" => EdgeOut {
          "name": "resolve",
          "spec": "^1.10.0",
          "to": "node_modules/resolve",
          "type": "prod",
        },
        "semver" => EdgeOut {
          "name": "semver",
          "spec": "2 || 3 || 4 || 5",
          "to": "node_modules/semver",
          "type": "prod",
        },
        "validate-npm-package-license" => EdgeOut {
          "name": "validate-npm-package-license",
          "spec": "^3.0.1",
          "to": "node_modules/validate-npm-package-license",
          "type": "prod",
        },
      },
      "location": "node_modules/normalize-package-data",
      "name": "normalize-package-data",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/normalize-package-data",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
      "version": "2.5.0",
    },
    "normalize-path" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/anymatch",
          "name": "normalize-path",
          "spec": "^3.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/chokidar",
          "name": "normalize-path",
          "spec": "~3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/normalize-path",
      "name": "normalize-path",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/normalize-path",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "version": "3.0.0",
    },
    "number-is-nan" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/wrap-ansi/node_modules/is-fullwidth-code-point",
          "name": "number-is-nan",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/number-is-nan",
      "name": "number-is-nan",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/number-is-nan",
      "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
      "version": "1.0.1",
    },
    "nyc" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "nyc",
          "spec": "^14.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "archy" => EdgeOut {
          "name": "archy",
          "spec": "^1.0.0",
          "to": "node_modules/archy",
          "type": "prod",
        },
        "caching-transform" => EdgeOut {
          "name": "caching-transform",
          "spec": "^3.0.2",
          "to": "node_modules/caching-transform",
          "type": "prod",
        },
        "convert-source-map" => EdgeOut {
          "name": "convert-source-map",
          "spec": "^1.6.0",
          "to": "node_modules/convert-source-map",
          "type": "prod",
        },
        "cp-file" => EdgeOut {
          "name": "cp-file",
          "spec": "^6.2.0",
          "to": "node_modules/cp-file",
          "type": "prod",
        },
        "find-cache-dir" => EdgeOut {
          "name": "find-cache-dir",
          "spec": "^2.1.0",
          "to": "node_modules/find-cache-dir",
          "type": "prod",
        },
        "find-up" => EdgeOut {
          "name": "find-up",
          "spec": "^3.0.0",
          "to": "node_modules/find-up",
          "type": "prod",
        },
        "foreground-child" => EdgeOut {
          "name": "foreground-child",
          "spec": "^1.5.6",
          "to": "node_modules/foreground-child",
          "type": "prod",
        },
        "glob" => EdgeOut {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "prod",
        },
        "istanbul-lib-coverage" => EdgeOut {
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "to": "node_modules/istanbul-lib-coverage",
          "type": "prod",
        },
        "istanbul-lib-hook" => EdgeOut {
          "name": "istanbul-lib-hook",
          "spec": "^2.0.7",
          "to": "node_modules/istanbul-lib-hook",
          "type": "prod",
        },
        "istanbul-lib-instrument" => EdgeOut {
          "name": "istanbul-lib-instrument",
          "spec": "^3.3.0",
          "to": "node_modules/istanbul-lib-instrument",
          "type": "prod",
        },
        "istanbul-lib-report" => EdgeOut {
          "name": "istanbul-lib-report",
          "spec": "^2.0.8",
          "to": "node_modules/istanbul-lib-report",
          "type": "prod",
        },
        "istanbul-lib-source-maps" => EdgeOut {
          "name": "istanbul-lib-source-maps",
          "spec": "^3.0.6",
          "to": "node_modules/istanbul-lib-source-maps",
          "type": "prod",
        },
        "istanbul-reports" => EdgeOut {
          "name": "istanbul-reports",
          "spec": "^2.2.4",
          "to": "node_modules/istanbul-reports",
          "type": "prod",
        },
        "js-yaml" => EdgeOut {
          "name": "js-yaml",
          "spec": "^3.13.1",
          "to": "node_modules/js-yaml",
          "type": "prod",
        },
        "make-dir" => EdgeOut {
          "name": "make-dir",
          "spec": "^2.1.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "merge-source-map" => EdgeOut {
          "name": "merge-source-map",
          "spec": "^1.1.0",
          "to": "node_modules/merge-source-map",
          "type": "prod",
        },
        "resolve-from" => EdgeOut {
          "name": "resolve-from",
          "spec": "^4.0.0",
          "to": "node_modules/resolve-from",
          "type": "prod",
        },
        "rimraf" => EdgeOut {
          "name": "rimraf",
          "spec": "^2.6.3",
          "to": "node_modules/rimraf",
          "type": "prod",
        },
        "signal-exit" => EdgeOut {
          "name": "signal-exit",
          "spec": "^3.0.2",
          "to": "node_modules/signal-exit",
          "type": "prod",
        },
        "spawn-wrap" => EdgeOut {
          "name": "spawn-wrap",
          "spec": "^1.4.2",
          "to": "node_modules/spawn-wrap",
          "type": "prod",
        },
        "test-exclude" => EdgeOut {
          "name": "test-exclude",
          "spec": "^5.2.3",
          "to": "node_modules/test-exclude",
          "type": "prod",
        },
        "uuid" => EdgeOut {
          "name": "uuid",
          "spec": "^3.3.2",
          "to": "node_modules/uuid",
          "type": "prod",
        },
        "yargs" => EdgeOut {
          "name": "yargs",
          "spec": "^13.2.2",
          "to": "node_modules/yargs",
          "type": "prod",
        },
        "yargs-parser" => EdgeOut {
          "name": "yargs-parser",
          "spec": "^13.0.0",
          "to": "node_modules/yargs-parser",
          "type": "prod",
        },
      },
      "location": "node_modules/nyc",
      "name": "nyc",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/nyc",
      "resolved": "https://registry.npmjs.org/nyc/-/nyc-14.1.1.tgz",
      "version": "14.1.1",
    },
    "oauth-sign" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "oauth-sign",
          "spec": "~0.9.0",
          "type": "prod",
        },
      },
      "location": "node_modules/oauth-sign",
      "name": "oauth-sign",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/oauth-sign",
      "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
      "version": "0.9.0",
    },
    "object-assign" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/prop-types",
          "name": "object-assign",
          "spec": "^4.1.1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/react",
          "name": "object-assign",
          "spec": "^4.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/object-assign",
      "name": "object-assign",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/object-assign",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "version": "4.1.1",
    },
    "once" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/once",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "version": "1.4.0",
    },
    "opener" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "opener",
          "spec": "^1.5.1",
          "type": "prod",
        },
      },
      "location": "node_modules/opener",
      "name": "opener",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/opener",
      "resolved": "https://registry.npmjs.org/opener/-/opener-1.5.1.tgz",
      "version": "1.5.1",
    },
    "optimist" => ArboristNode {
      "children": Map {
        "minimist" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/optimist",
              "name": "minimist",
              "spec": "~0.0.1",
              "type": "prod",
            },
          },
          "location": "node_modules/optimist/node_modules/minimist",
          "name": "minimist",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/optimist/node_modules/minimist",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.10.tgz",
          "version": "0.0.10",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/handlebars",
          "name": "optimist",
          "spec": "^0.6.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "minimist" => EdgeOut {
          "name": "minimist",
          "spec": "~0.0.1",
          "to": "node_modules/optimist/node_modules/minimist",
          "type": "prod",
        },
        "wordwrap" => EdgeOut {
          "name": "wordwrap",
          "spec": "~0.0.2",
          "to": "node_modules/wordwrap",
          "type": "prod",
        },
      },
      "location": "node_modules/optimist",
      "name": "optimist",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/optimist",
      "resolved": "https://registry.npmjs.org/optimist/-/optimist-0.6.1.tgz",
      "version": "0.6.1",
    },
    "os-homedir" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/spawn-wrap",
          "name": "os-homedir",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/os-homedir",
      "name": "os-homedir",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/os-homedir",
      "resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
      "version": "1.0.2",
    },
    "own-or" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/own-or-env",
          "name": "own-or",
          "spec": "^1.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/tap",
          "name": "own-or",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/own-or",
      "name": "own-or",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/own-or",
      "resolved": "https://registry.npmjs.org/own-or/-/own-or-1.0.0.tgz",
      "version": "1.0.0",
    },
    "own-or-env" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "own-or-env",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "own-or" => EdgeOut {
          "name": "own-or",
          "spec": "^1.0.0",
          "to": "node_modules/own-or",
          "type": "prod",
        },
      },
      "location": "node_modules/own-or-env",
      "name": "own-or-env",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/own-or-env",
      "resolved": "https://registry.npmjs.org/own-or-env/-/own-or-env-1.0.1.tgz",
      "version": "1.0.1",
    },
    "p-limit" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/p-locate",
          "name": "p-limit",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "p-try" => EdgeOut {
          "name": "p-try",
          "spec": "^2.0.0",
          "to": "node_modules/p-try",
          "type": "prod",
        },
      },
      "location": "node_modules/p-limit",
      "name": "p-limit",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/p-limit",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.2.1.tgz",
      "version": "2.2.1",
    },
    "p-locate" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/locate-path",
          "name": "p-locate",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "p-limit" => EdgeOut {
          "name": "p-limit",
          "spec": "^2.0.0",
          "to": "node_modules/p-limit",
          "type": "prod",
        },
      },
      "location": "node_modules/p-locate",
      "name": "p-locate",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/p-locate",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
      "version": "3.0.0",
    },
    "p-try" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/p-limit",
          "name": "p-try",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/p-try",
      "name": "p-try",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/p-try",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
      "version": "2.2.0",
    },
    "package-hash" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/caching-transform",
          "name": "package-hash",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "graceful-fs" => EdgeOut {
          "name": "graceful-fs",
          "spec": "^4.1.15",
          "to": "node_modules/graceful-fs",
          "type": "prod",
        },
        "hasha" => EdgeOut {
          "name": "hasha",
          "spec": "^3.0.0",
          "to": "node_modules/hasha",
          "type": "prod",
        },
        "lodash.flattendeep" => EdgeOut {
          "name": "lodash.flattendeep",
          "spec": "^4.4.0",
          "to": "node_modules/lodash.flattendeep",
          "type": "prod",
        },
        "release-zalgo" => EdgeOut {
          "name": "release-zalgo",
          "spec": "^1.0.0",
          "to": "node_modules/release-zalgo",
          "type": "prod",
        },
      },
      "location": "node_modules/package-hash",
      "name": "package-hash",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/package-hash",
      "resolved": "https://registry.npmjs.org/package-hash/-/package-hash-3.0.0.tgz",
      "version": "3.0.0",
    },
    "parse-json" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/load-json-file",
          "name": "parse-json",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "error-ex" => EdgeOut {
          "name": "error-ex",
          "spec": "^1.3.1",
          "to": "node_modules/error-ex",
          "type": "prod",
        },
        "json-parse-better-errors" => EdgeOut {
          "name": "json-parse-better-errors",
          "spec": "^1.0.1",
          "to": "node_modules/json-parse-better-errors",
          "type": "prod",
        },
      },
      "location": "node_modules/parse-json",
      "name": "parse-json",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/parse-json",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
      "version": "4.0.0",
    },
    "path-exists" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/locate-path",
          "name": "path-exists",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-exists",
      "name": "path-exists",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/path-exists",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "version": "3.0.0",
    },
    "path-is-absolute" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/path-is-absolute",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "version": "1.0.1",
    },
    "path-key" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "name": "path-key",
          "spec": "^2.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/path-key",
      "name": "path-key",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/path-key",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
      "version": "2.0.1",
    },
    "path-parse" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/resolve",
          "name": "path-parse",
          "spec": "^1.0.6",
          "type": "prod",
        },
      },
      "location": "node_modules/path-parse",
      "name": "path-parse",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/path-parse",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
      "version": "1.0.6",
    },
    "path-type" => ArboristNode {
      "children": Map {
        "pify" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/path-type",
              "name": "pify",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/path-type/node_modules/pify",
          "name": "pify",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/path-type/node_modules/pify",
          "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
          "version": "3.0.0",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/read-pkg",
          "name": "path-type",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "pify" => EdgeOut {
          "name": "pify",
          "spec": "^3.0.0",
          "to": "node_modules/path-type/node_modules/pify",
          "type": "prod",
        },
      },
      "location": "node_modules/path-type",
      "name": "path-type",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/path-type",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
      "version": "3.0.0",
    },
    "performance-now" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "performance-now",
          "spec": "^2.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/performance-now",
      "name": "performance-now",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/performance-now",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
      "version": "2.1.0",
    },
    "picomatch" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/anymatch",
          "name": "picomatch",
          "spec": "^2.0.4",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/readdirp",
          "name": "picomatch",
          "spec": "^2.0.7",
          "type": "prod",
        },
      },
      "location": "node_modules/picomatch",
      "name": "picomatch",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/picomatch",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.1.1.tgz",
      "version": "2.1.1",
    },
    "pify" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/cp-file",
          "name": "pify",
          "spec": "^4.0.1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/make-dir",
          "name": "pify",
          "spec": "^4.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/pify",
      "name": "pify",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/pify",
      "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
      "version": "4.0.1",
    },
    "pirates" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/flow-remove-types",
          "name": "pirates",
          "spec": "^3.0.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "node-modules-regexp" => EdgeOut {
          "name": "node-modules-regexp",
          "spec": "^1.0.0",
          "to": "node_modules/node-modules-regexp",
          "type": "prod",
        },
      },
      "location": "node_modules/pirates",
      "name": "pirates",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/pirates",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-3.0.2.tgz",
      "version": "3.0.2",
    },
    "pkg-dir" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/find-cache-dir",
          "name": "pkg-dir",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "find-up" => EdgeOut {
          "name": "find-up",
          "spec": "^3.0.0",
          "to": "node_modules/find-up",
          "type": "prod",
        },
      },
      "location": "node_modules/pkg-dir",
      "name": "pkg-dir",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/pkg-dir",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
      "version": "3.0.0",
    },
    "process-nextick-args" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/readable-stream",
          "name": "process-nextick-args",
          "spec": "~2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/process-nextick-args",
      "name": "process-nextick-args",
      "optional": true,
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/process-nextick-args",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "version": "2.0.1",
    },
    "prop-types" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/react",
          "name": "prop-types",
          "spec": "^15.6.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "loose-envify" => EdgeOut {
          "name": "loose-envify",
          "spec": "^1.4.0",
          "to": "node_modules/loose-envify",
          "type": "prod",
        },
        "object-assign" => EdgeOut {
          "name": "object-assign",
          "spec": "^4.1.1",
          "to": "node_modules/object-assign",
          "type": "prod",
        },
        "react-is" => EdgeOut {
          "name": "react-is",
          "spec": "^16.8.1",
          "to": "node_modules/react-is",
          "type": "prod",
        },
      },
      "location": "node_modules/prop-types",
      "name": "prop-types",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/prop-types",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.7.2.tgz",
      "version": "15.7.2",
    },
    "pseudomap" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/lru-cache",
          "name": "pseudomap",
          "spec": "^1.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/pseudomap",
      "name": "pseudomap",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/pseudomap",
      "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
      "version": "1.0.2",
    },
    "psl" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tough-cookie",
          "name": "psl",
          "spec": "^1.1.24",
          "type": "prod",
        },
      },
      "location": "node_modules/psl",
      "name": "psl",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/psl",
      "resolved": "https://registry.npmjs.org/psl/-/psl-1.7.0.tgz",
      "version": "1.7.0",
    },
    "punycode" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/uri-js",
          "name": "punycode",
          "spec": "^2.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/punycode",
      "name": "punycode",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/punycode",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
      "version": "2.1.1",
    },
    "qs" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "qs",
          "spec": "~6.5.2",
          "type": "prod",
        },
      },
      "location": "node_modules/qs",
      "name": "qs",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/qs",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
      "version": "6.5.2",
    },
    "react" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "react",
          "spec": "^16.12.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "loose-envify" => EdgeOut {
          "name": "loose-envify",
          "spec": "^1.1.0",
          "to": "node_modules/loose-envify",
          "type": "prod",
        },
        "object-assign" => EdgeOut {
          "name": "object-assign",
          "spec": "^4.1.1",
          "to": "node_modules/object-assign",
          "type": "prod",
        },
        "prop-types" => EdgeOut {
          "name": "prop-types",
          "spec": "^15.6.2",
          "to": "node_modules/prop-types",
          "type": "prod",
        },
      },
      "location": "node_modules/react",
      "name": "react",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/react",
      "resolved": "https://registry.npmjs.org/react/-/react-16.12.0.tgz",
      "version": "16.12.0",
    },
    "react-is" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/prop-types",
          "name": "react-is",
          "spec": "^16.8.1",
          "type": "prod",
        },
      },
      "location": "node_modules/react-is",
      "name": "react-is",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/react-is",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.12.0.tgz",
      "version": "16.12.0",
    },
    "read-pkg" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/read-pkg-up",
          "name": "read-pkg",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "load-json-file" => EdgeOut {
          "name": "load-json-file",
          "spec": "^4.0.0",
          "to": "node_modules/load-json-file",
          "type": "prod",
        },
        "normalize-package-data" => EdgeOut {
          "name": "normalize-package-data",
          "spec": "^2.3.2",
          "to": "node_modules/normalize-package-data",
          "type": "prod",
        },
        "path-type" => EdgeOut {
          "name": "path-type",
          "spec": "^3.0.0",
          "to": "node_modules/path-type",
          "type": "prod",
        },
      },
      "location": "node_modules/read-pkg",
      "name": "read-pkg",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/read-pkg",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
      "version": "3.0.0",
    },
    "read-pkg-up" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/test-exclude",
          "name": "read-pkg-up",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "find-up" => EdgeOut {
          "name": "find-up",
          "spec": "^3.0.0",
          "to": "node_modules/find-up",
          "type": "prod",
        },
        "read-pkg" => EdgeOut {
          "name": "read-pkg",
          "spec": "^3.0.0",
          "to": "node_modules/read-pkg",
          "type": "prod",
        },
      },
      "location": "node_modules/read-pkg-up",
      "name": "read-pkg-up",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/read-pkg-up",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-4.0.0.tgz",
      "version": "4.0.0",
    },
    "readable-stream" => ArboristNode {
      "children": Map {
        "safe-buffer" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/readable-stream",
              "name": "safe-buffer",
              "spec": "~5.1.1",
              "type": "prod",
            },
          },
          "location": "node_modules/readable-stream/node_modules/safe-buffer",
          "name": "safe-buffer",
          "optional": true,
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/readable-stream/node_modules/safe-buffer",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
          "version": "5.1.2",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap-mocha-reporter",
          "name": "readable-stream",
          "spec": "^2.1.5",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "core-util-is" => EdgeOut {
          "name": "core-util-is",
          "spec": "~1.0.0",
          "to": "node_modules/core-util-is",
          "type": "prod",
        },
        "inherits" => EdgeOut {
          "name": "inherits",
          "spec": "~2.0.3",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "isarray" => EdgeOut {
          "name": "isarray",
          "spec": "~1.0.0",
          "to": "node_modules/isarray",
          "type": "prod",
        },
        "process-nextick-args" => EdgeOut {
          "name": "process-nextick-args",
          "spec": "~2.0.0",
          "to": "node_modules/process-nextick-args",
          "type": "prod",
        },
        "safe-buffer" => EdgeOut {
          "name": "safe-buffer",
          "spec": "~5.1.1",
          "to": "node_modules/readable-stream/node_modules/safe-buffer",
          "type": "prod",
        },
        "string_decoder" => EdgeOut {
          "name": "string_decoder",
          "spec": "~1.1.1",
          "to": "node_modules/string_decoder",
          "type": "prod",
        },
        "util-deprecate" => EdgeOut {
          "name": "util-deprecate",
          "spec": "~1.0.1",
          "to": "node_modules/util-deprecate",
          "type": "prod",
        },
      },
      "location": "node_modules/readable-stream",
      "name": "readable-stream",
      "optional": true,
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/readable-stream",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
      "version": "2.3.6",
    },
    "readdirp" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/chokidar",
          "name": "readdirp",
          "spec": "~3.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "picomatch" => EdgeOut {
          "name": "picomatch",
          "spec": "^2.0.7",
          "to": "node_modules/picomatch",
          "type": "prod",
        },
      },
      "location": "node_modules/readdirp",
      "name": "readdirp",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/readdirp",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.3.0.tgz",
      "version": "3.3.0",
    },
    "regenerator-runtime" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/runtime",
          "name": "regenerator-runtime",
          "spec": "^0.13.2",
          "type": "prod",
        },
      },
      "location": "node_modules/regenerator-runtime",
      "name": "regenerator-runtime",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/regenerator-runtime",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.3.tgz",
      "version": "0.13.3",
    },
    "release-zalgo" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/package-hash",
          "name": "release-zalgo",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "es6-error" => EdgeOut {
          "name": "es6-error",
          "spec": "^4.0.1",
          "to": "node_modules/es6-error",
          "type": "prod",
        },
      },
      "location": "node_modules/release-zalgo",
      "name": "release-zalgo",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/release-zalgo",
      "resolved": "https://registry.npmjs.org/release-zalgo/-/release-zalgo-1.0.0.tgz",
      "version": "1.0.0",
    },
    "request" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/coveralls",
          "name": "request",
          "spec": "^2.88.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "aws-sign2" => EdgeOut {
          "name": "aws-sign2",
          "spec": "~0.7.0",
          "to": "node_modules/aws-sign2",
          "type": "prod",
        },
        "aws4" => EdgeOut {
          "name": "aws4",
          "spec": "^1.8.0",
          "to": "node_modules/aws4",
          "type": "prod",
        },
        "caseless" => EdgeOut {
          "name": "caseless",
          "spec": "~0.12.0",
          "to": "node_modules/caseless",
          "type": "prod",
        },
        "combined-stream" => EdgeOut {
          "name": "combined-stream",
          "spec": "~1.0.6",
          "to": "node_modules/combined-stream",
          "type": "prod",
        },
        "extend" => EdgeOut {
          "name": "extend",
          "spec": "~3.0.2",
          "to": "node_modules/extend",
          "type": "prod",
        },
        "forever-agent" => EdgeOut {
          "name": "forever-agent",
          "spec": "~0.6.1",
          "to": "node_modules/forever-agent",
          "type": "prod",
        },
        "form-data" => EdgeOut {
          "name": "form-data",
          "spec": "~2.3.2",
          "to": "node_modules/form-data",
          "type": "prod",
        },
        "har-validator" => EdgeOut {
          "name": "har-validator",
          "spec": "~5.1.0",
          "to": "node_modules/har-validator",
          "type": "prod",
        },
        "http-signature" => EdgeOut {
          "name": "http-signature",
          "spec": "~1.2.0",
          "to": "node_modules/http-signature",
          "type": "prod",
        },
        "is-typedarray" => EdgeOut {
          "name": "is-typedarray",
          "spec": "~1.0.0",
          "to": "node_modules/is-typedarray",
          "type": "prod",
        },
        "isstream" => EdgeOut {
          "name": "isstream",
          "spec": "~0.1.2",
          "to": "node_modules/isstream",
          "type": "prod",
        },
        "json-stringify-safe" => EdgeOut {
          "name": "json-stringify-safe",
          "spec": "~5.0.1",
          "to": "node_modules/json-stringify-safe",
          "type": "prod",
        },
        "mime-types" => EdgeOut {
          "name": "mime-types",
          "spec": "~2.1.19",
          "to": "node_modules/mime-types",
          "type": "prod",
        },
        "oauth-sign" => EdgeOut {
          "name": "oauth-sign",
          "spec": "~0.9.0",
          "to": "node_modules/oauth-sign",
          "type": "prod",
        },
        "performance-now" => EdgeOut {
          "name": "performance-now",
          "spec": "^2.1.0",
          "to": "node_modules/performance-now",
          "type": "prod",
        },
        "qs" => EdgeOut {
          "name": "qs",
          "spec": "~6.5.2",
          "to": "node_modules/qs",
          "type": "prod",
        },
        "safe-buffer" => EdgeOut {
          "name": "safe-buffer",
          "spec": "^5.1.2",
          "to": "node_modules/safe-buffer",
          "type": "prod",
        },
        "tough-cookie" => EdgeOut {
          "name": "tough-cookie",
          "spec": "~2.4.3",
          "to": "node_modules/tough-cookie",
          "type": "prod",
        },
        "tunnel-agent" => EdgeOut {
          "name": "tunnel-agent",
          "spec": "^0.6.0",
          "to": "node_modules/tunnel-agent",
          "type": "prod",
        },
        "uuid" => EdgeOut {
          "name": "uuid",
          "spec": "^3.3.2",
          "to": "node_modules/uuid",
          "type": "prod",
        },
      },
      "location": "node_modules/request",
      "name": "request",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/request",
      "resolved": "https://registry.npmjs.org/request/-/request-2.88.0.tgz",
      "version": "2.88.0",
    },
    "require-directory" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/yargs",
          "name": "require-directory",
          "spec": "^2.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/require-directory",
      "name": "require-directory",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/require-directory",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "version": "2.1.1",
    },
    "require-main-filename" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/test-exclude",
          "name": "require-main-filename",
          "spec": "^2.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/yargs",
          "name": "require-main-filename",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/require-main-filename",
      "name": "require-main-filename",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/require-main-filename",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
      "version": "2.0.0",
    },
    "resolve" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/normalize-package-data",
          "name": "resolve",
          "spec": "^1.10.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "path-parse" => EdgeOut {
          "name": "path-parse",
          "spec": "^1.0.6",
          "to": "node_modules/path-parse",
          "type": "prod",
        },
      },
      "location": "node_modules/resolve",
      "name": "resolve",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/resolve",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.14.1.tgz",
      "version": "1.14.1",
    },
    "resolve-from" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "resolve-from",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/resolve-from",
      "name": "resolve-from",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/resolve-from",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "version": "4.0.0",
    },
    "rimraf" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/istanbul-lib-processinfo",
          "name": "rimraf",
          "spec": "^2.6.3",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/istanbul-lib-source-maps",
          "name": "rimraf",
          "spec": "^2.6.3",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "rimraf",
          "spec": "^2.6.3",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/spawn-wrap",
          "name": "rimraf",
          "spec": "^2.6.2",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/tap",
          "name": "rimraf",
          "spec": "^2.7.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "glob" => EdgeOut {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "prod",
        },
      },
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/rimraf",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
      "version": "2.7.1",
    },
    "safe-buffer" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/cp-file",
          "name": "safe-buffer",
          "spec": "^5.0.1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/request",
          "name": "safe-buffer",
          "spec": "^5.1.2",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/tunnel-agent",
          "name": "safe-buffer",
          "spec": "^5.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/safe-buffer",
      "name": "safe-buffer",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/safe-buffer",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.0.tgz",
      "version": "5.2.0",
    },
    "safer-buffer" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/asn1",
          "name": "safer-buffer",
          "spec": "~2.1.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/ecc-jsbn",
          "name": "safer-buffer",
          "spec": "^2.1.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/sshpk",
          "name": "safer-buffer",
          "spec": "^2.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/safer-buffer",
      "name": "safer-buffer",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/safer-buffer",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "version": "2.1.2",
    },
    "semver" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "name": "semver",
          "spec": "^5.5.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/make-dir",
          "name": "semver",
          "spec": "^5.6.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/normalize-package-data",
          "name": "semver",
          "spec": "2 || 3 || 4 || 5",
          "type": "prod",
        },
      },
      "location": "node_modules/semver",
      "name": "semver",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/semver",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "version": "5.7.1",
    },
    "set-blocking" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/yargs",
          "name": "set-blocking",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/set-blocking",
      "name": "set-blocking",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/set-blocking",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "version": "2.0.0",
    },
    "shebang-command" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "name": "shebang-command",
          "spec": "^1.2.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "shebang-regex" => EdgeOut {
          "name": "shebang-regex",
          "spec": "^1.0.0",
          "to": "node_modules/shebang-regex",
          "type": "prod",
        },
      },
      "location": "node_modules/shebang-command",
      "name": "shebang-command",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/shebang-command",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
      "version": "1.2.0",
    },
    "shebang-regex" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/shebang-command",
          "name": "shebang-regex",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/shebang-regex",
      "name": "shebang-regex",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/shebang-regex",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
      "version": "1.0.0",
    },
    "signal-exit" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/caching-transform/node_modules/write-file-atomic",
          "name": "signal-exit",
          "spec": "^3.0.2",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/foreground-child",
          "name": "signal-exit",
          "spec": "^3.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "signal-exit",
          "spec": "^3.0.2",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/spawn-wrap",
          "name": "signal-exit",
          "spec": "^3.0.2",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/write-file-atomic",
          "name": "signal-exit",
          "spec": "^3.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/signal-exit",
      "name": "signal-exit",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/signal-exit",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz",
      "version": "3.0.2",
    },
    "source-map" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/handlebars",
          "name": "source-map",
          "spec": "^0.6.1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/istanbul-lib-source-maps",
          "name": "source-map",
          "spec": "^0.6.1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/merge-source-map",
          "name": "source-map",
          "spec": "^0.6.1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/source-map-support",
          "name": "source-map",
          "spec": "^0.6.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/uglify-js",
          "name": "source-map",
          "spec": "~0.6.1",
          "type": "prod",
        },
      },
      "location": "node_modules/source-map",
      "name": "source-map",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/source-map",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "version": "0.6.1",
    },
    "source-map-support" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/async-hook-domain",
          "name": "source-map-support",
          "spec": "^0.5.11",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/tap",
          "name": "source-map-support",
          "spec": "^0.5.16",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/ts-node",
          "name": "source-map-support",
          "spec": "^0.5.6",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "buffer-from" => EdgeOut {
          "name": "buffer-from",
          "spec": "^1.0.0",
          "to": "node_modules/buffer-from",
          "type": "prod",
        },
        "source-map" => EdgeOut {
          "name": "source-map",
          "spec": "^0.6.0",
          "to": "node_modules/source-map",
          "type": "prod",
        },
      },
      "location": "node_modules/source-map-support",
      "name": "source-map-support",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/source-map-support",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.16.tgz",
      "version": "0.5.16",
    },
    "spawn-wrap" => ArboristNode {
      "children": Map {
        "which" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/spawn-wrap",
              "name": "which",
              "spec": "^1.3.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "isexe" => EdgeOut {
              "name": "isexe",
              "spec": "^2.0.0",
              "to": "node_modules/isexe",
              "type": "prod",
            },
          },
          "location": "node_modules/spawn-wrap/node_modules/which",
          "name": "which",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/spawn-wrap/node_modules/which",
          "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
          "version": "1.3.1",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "spawn-wrap",
          "spec": "^1.4.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "foreground-child" => EdgeOut {
          "name": "foreground-child",
          "spec": "^1.5.6",
          "to": "node_modules/foreground-child",
          "type": "prod",
        },
        "mkdirp" => EdgeOut {
          "name": "mkdirp",
          "spec": "^0.5.0",
          "to": "node_modules/mkdirp",
          "type": "prod",
        },
        "os-homedir" => EdgeOut {
          "name": "os-homedir",
          "spec": "^1.0.1",
          "to": "node_modules/os-homedir",
          "type": "prod",
        },
        "rimraf" => EdgeOut {
          "name": "rimraf",
          "spec": "^2.6.2",
          "to": "node_modules/rimraf",
          "type": "prod",
        },
        "signal-exit" => EdgeOut {
          "name": "signal-exit",
          "spec": "^3.0.2",
          "to": "node_modules/signal-exit",
          "type": "prod",
        },
        "which" => EdgeOut {
          "name": "which",
          "spec": "^1.3.0",
          "to": "node_modules/spawn-wrap/node_modules/which",
          "type": "prod",
        },
      },
      "location": "node_modules/spawn-wrap",
      "name": "spawn-wrap",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/spawn-wrap",
      "resolved": "https://registry.npmjs.org/spawn-wrap/-/spawn-wrap-1.4.3.tgz",
      "version": "1.4.3",
    },
    "spdx-correct" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/validate-npm-package-license",
          "name": "spdx-correct",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "spdx-expression-parse" => EdgeOut {
          "name": "spdx-expression-parse",
          "spec": "^3.0.0",
          "to": "node_modules/spdx-expression-parse",
          "type": "prod",
        },
        "spdx-license-ids" => EdgeOut {
          "name": "spdx-license-ids",
          "spec": "^3.0.0",
          "to": "node_modules/spdx-license-ids",
          "type": "prod",
        },
      },
      "location": "node_modules/spdx-correct",
      "name": "spdx-correct",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/spdx-correct",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.0.tgz",
      "version": "3.1.0",
    },
    "spdx-exceptions" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/spdx-expression-parse",
          "name": "spdx-exceptions",
          "spec": "^2.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/spdx-exceptions",
      "name": "spdx-exceptions",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/spdx-exceptions",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.2.0.tgz",
      "version": "2.2.0",
    },
    "spdx-expression-parse" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/spdx-correct",
          "name": "spdx-expression-parse",
          "spec": "^3.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/validate-npm-package-license",
          "name": "spdx-expression-parse",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "spdx-exceptions" => EdgeOut {
          "name": "spdx-exceptions",
          "spec": "^2.1.0",
          "to": "node_modules/spdx-exceptions",
          "type": "prod",
        },
        "spdx-license-ids" => EdgeOut {
          "name": "spdx-license-ids",
          "spec": "^3.0.0",
          "to": "node_modules/spdx-license-ids",
          "type": "prod",
        },
      },
      "location": "node_modules/spdx-expression-parse",
      "name": "spdx-expression-parse",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/spdx-expression-parse",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.0.tgz",
      "version": "3.0.0",
    },
    "spdx-license-ids" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/spdx-correct",
          "name": "spdx-license-ids",
          "spec": "^3.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/spdx-expression-parse",
          "name": "spdx-license-ids",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/spdx-license-ids",
      "name": "spdx-license-ids",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/spdx-license-ids",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.5.tgz",
      "version": "3.0.5",
    },
    "sprintf-js" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/argparse",
          "name": "sprintf-js",
          "spec": "~1.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/sprintf-js",
      "name": "sprintf-js",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/sprintf-js",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "version": "1.0.3",
    },
    "sshpk" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/http-signature",
          "name": "sshpk",
          "spec": "^1.7.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "asn1" => EdgeOut {
          "name": "asn1",
          "spec": "~0.2.3",
          "to": "node_modules/asn1",
          "type": "prod",
        },
        "assert-plus" => EdgeOut {
          "name": "assert-plus",
          "spec": "^1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
        "bcrypt-pbkdf" => EdgeOut {
          "name": "bcrypt-pbkdf",
          "spec": "^1.0.0",
          "to": "node_modules/bcrypt-pbkdf",
          "type": "prod",
        },
        "dashdash" => EdgeOut {
          "name": "dashdash",
          "spec": "^1.12.0",
          "to": "node_modules/dashdash",
          "type": "prod",
        },
        "ecc-jsbn" => EdgeOut {
          "name": "ecc-jsbn",
          "spec": "~0.1.1",
          "to": "node_modules/ecc-jsbn",
          "type": "prod",
        },
        "getpass" => EdgeOut {
          "name": "getpass",
          "spec": "^0.1.1",
          "to": "node_modules/getpass",
          "type": "prod",
        },
        "jsbn" => EdgeOut {
          "name": "jsbn",
          "spec": "~0.1.0",
          "to": "node_modules/jsbn",
          "type": "prod",
        },
        "safer-buffer" => EdgeOut {
          "name": "safer-buffer",
          "spec": "^2.0.2",
          "to": "node_modules/safer-buffer",
          "type": "prod",
        },
        "tweetnacl" => EdgeOut {
          "name": "tweetnacl",
          "spec": "~0.14.0",
          "to": "node_modules/tweetnacl",
          "type": "prod",
        },
      },
      "location": "node_modules/sshpk",
      "name": "sshpk",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/sshpk",
      "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
      "version": "1.16.1",
    },
    "stack-utils" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "stack-utils",
          "spec": "^1.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/stack-utils",
      "name": "stack-utils",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/stack-utils",
      "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-1.0.2.tgz",
      "version": "1.0.2",
    },
    "string_decoder" => ArboristNode {
      "children": Map {
        "safe-buffer" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/string_decoder",
              "name": "safe-buffer",
              "spec": "~5.1.0",
              "type": "prod",
            },
          },
          "location": "node_modules/string_decoder/node_modules/safe-buffer",
          "name": "safe-buffer",
          "optional": true,
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/string_decoder/node_modules/safe-buffer",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
          "version": "5.1.2",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/readable-stream",
          "name": "string_decoder",
          "spec": "~1.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "safe-buffer" => EdgeOut {
          "name": "safe-buffer",
          "spec": "~5.1.0",
          "to": "node_modules/string_decoder/node_modules/safe-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/string_decoder",
      "name": "string_decoder",
      "optional": true,
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/string_decoder",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "version": "1.1.1",
    },
    "string-width" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/cliui",
          "name": "string-width",
          "spec": "^2.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-fullwidth-code-point" => EdgeOut {
          "name": "is-fullwidth-code-point",
          "spec": "^2.0.0",
          "to": "node_modules/is-fullwidth-code-point",
          "type": "prod",
        },
        "strip-ansi" => EdgeOut {
          "name": "strip-ansi",
          "spec": "^4.0.0",
          "to": "node_modules/strip-ansi",
          "type": "prod",
        },
      },
      "location": "node_modules/string-width",
      "name": "string-width",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/string-width",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
      "version": "2.1.1",
    },
    "strip-ansi" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/cliui",
          "name": "strip-ansi",
          "spec": "^4.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/string-width",
          "name": "strip-ansi",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ansi-regex" => EdgeOut {
          "name": "ansi-regex",
          "spec": "^3.0.0",
          "to": "node_modules/ansi-regex",
          "type": "prod",
        },
      },
      "location": "node_modules/strip-ansi",
      "name": "strip-ansi",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/strip-ansi",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "version": "4.0.0",
    },
    "strip-bom" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/default-require-extensions",
          "name": "strip-bom",
          "spec": "^3.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/load-json-file",
          "name": "strip-bom",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/strip-bom",
      "name": "strip-bom",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/strip-bom",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "version": "3.0.0",
    },
    "supports-color" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/chalk",
          "name": "supports-color",
          "spec": "^5.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "has-flag" => EdgeOut {
          "name": "has-flag",
          "spec": "^3.0.0",
          "to": "node_modules/has-flag",
          "type": "prod",
        },
      },
      "location": "node_modules/supports-color",
      "name": "supports-color",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/supports-color",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "version": "5.5.0",
    },
    "tap" => ArboristNode {
      "children": Map {
        "@babel/code-frame" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "@babel/code-frame",
              "spec": "^7.5.5",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/template",
              "name": "@babel/code-frame",
              "spec": "^7.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "@babel/code-frame",
              "spec": "^7.5.5",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/highlight" => EdgeOut {
              "name": "@babel/highlight",
              "spec": "^7.0.0",
              "to": "node_modules/tap/node_modules/@babel/highlight",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/code-frame",
          "name": "@babel/code-frame",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/code-frame",
          "version": "7.5.5",
        },
        "@babel/core" => ArboristNode {
          "bundled": true,
          "children": Map {
            "source-map" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/@babel/core",
                  "name": "source-map",
                  "spec": "^0.5.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/@babel/core/node_modules/source-map",
              "name": "source-map",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/core/node_modules/source-map",
              "version": "0.5.7",
            },
          },
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/import-jsx",
              "name": "@babel/core",
              "spec": "^7.5.5",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/code-frame" => EdgeOut {
              "name": "@babel/code-frame",
              "spec": "^7.5.5",
              "to": "node_modules/tap/node_modules/@babel/code-frame",
              "type": "prod",
            },
            "@babel/generator" => EdgeOut {
              "name": "@babel/generator",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/generator",
              "type": "prod",
            },
            "@babel/helpers" => EdgeOut {
              "name": "@babel/helpers",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/helpers",
              "type": "prod",
            },
            "@babel/parser" => EdgeOut {
              "name": "@babel/parser",
              "spec": "^7.7.5",
              "to": "node_modules/tap/node_modules/@babel/parser",
              "type": "prod",
            },
            "@babel/template" => EdgeOut {
              "name": "@babel/template",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/template",
              "type": "prod",
            },
            "@babel/traverse" => EdgeOut {
              "name": "@babel/traverse",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/traverse",
              "type": "prod",
            },
            "@babel/types" => EdgeOut {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
            "convert-source-map" => EdgeOut {
              "name": "convert-source-map",
              "spec": "^1.7.0",
              "to": "node_modules/tap/node_modules/convert-source-map",
              "type": "prod",
            },
            "debug" => EdgeOut {
              "name": "debug",
              "spec": "^4.1.0",
              "to": "node_modules/tap/node_modules/debug",
              "type": "prod",
            },
            "json5" => EdgeOut {
              "name": "json5",
              "spec": "^2.1.0",
              "to": "node_modules/tap/node_modules/json5",
              "type": "prod",
            },
            "lodash" => EdgeOut {
              "name": "lodash",
              "spec": "^4.17.13",
              "to": "node_modules/tap/node_modules/lodash",
              "type": "prod",
            },
            "resolve" => EdgeOut {
              "name": "resolve",
              "spec": "^1.3.2",
              "to": "node_modules/tap/node_modules/resolve",
              "type": "prod",
            },
            "semver" => EdgeOut {
              "name": "semver",
              "spec": "^5.4.1",
              "to": "node_modules/tap/node_modules/semver",
              "type": "prod",
            },
            "source-map" => EdgeOut {
              "name": "source-map",
              "spec": "^0.5.0",
              "to": "node_modules/tap/node_modules/@babel/core/node_modules/source-map",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/core",
          "name": "@babel/core",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/core",
          "version": "7.7.5",
        },
        "@babel/generator" => ArboristNode {
          "bundled": true,
          "children": Map {
            "source-map" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/@babel/generator",
                  "name": "source-map",
                  "spec": "^0.5.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/@babel/generator/node_modules/source-map",
              "name": "source-map",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/generator/node_modules/source-map",
              "version": "0.5.7",
            },
          },
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "@babel/generator",
              "spec": "^7.7.4",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "@babel/generator",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/types" => EdgeOut {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
            "jsesc" => EdgeOut {
              "name": "jsesc",
              "spec": "^2.5.1",
              "to": "node_modules/tap/node_modules/jsesc",
              "type": "prod",
            },
            "lodash" => EdgeOut {
              "name": "lodash",
              "spec": "^4.17.13",
              "to": "node_modules/tap/node_modules/lodash",
              "type": "prod",
            },
            "source-map" => EdgeOut {
              "name": "source-map",
              "spec": "^0.5.0",
              "to": "node_modules/tap/node_modules/@babel/generator/node_modules/source-map",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/generator",
          "name": "@babel/generator",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/generator",
          "version": "7.7.4",
        },
        "@babel/helper-builder-react-jsx" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/plugin-transform-react-jsx",
              "name": "@babel/helper-builder-react-jsx",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/types" => EdgeOut {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
            "esutils" => EdgeOut {
              "name": "esutils",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/esutils",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/helper-builder-react-jsx",
          "name": "@babel/helper-builder-react-jsx",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/helper-builder-react-jsx",
          "version": "7.7.4",
        },
        "@babel/helper-function-name" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "@babel/helper-function-name",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/helper-get-function-arity" => EdgeOut {
              "name": "@babel/helper-get-function-arity",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/helper-get-function-arity",
              "type": "prod",
            },
            "@babel/template" => EdgeOut {
              "name": "@babel/template",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/template",
              "type": "prod",
            },
            "@babel/types" => EdgeOut {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/helper-function-name",
          "name": "@babel/helper-function-name",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/helper-function-name",
          "version": "7.7.4",
        },
        "@babel/helper-get-function-arity" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/helper-function-name",
              "name": "@babel/helper-get-function-arity",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/types" => EdgeOut {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/helper-get-function-arity",
          "name": "@babel/helper-get-function-arity",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/helper-get-function-arity",
          "version": "7.7.4",
        },
        "@babel/helper-plugin-utils" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/plugin-proposal-object-rest-spread",
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/plugin-syntax-jsx",
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/plugin-syntax-object-rest-spread",
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/plugin-transform-destructuring",
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/plugin-transform-react-jsx",
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/helper-plugin-utils",
          "name": "@babel/helper-plugin-utils",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/helper-plugin-utils",
          "version": "7.0.0",
        },
        "@babel/helper-split-export-declaration" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "@babel/helper-split-export-declaration",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/types" => EdgeOut {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/helper-split-export-declaration",
          "name": "@babel/helper-split-export-declaration",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/helper-split-export-declaration",
          "version": "7.7.4",
        },
        "@babel/helpers" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "@babel/helpers",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/template" => EdgeOut {
              "name": "@babel/template",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/template",
              "type": "prod",
            },
            "@babel/traverse" => EdgeOut {
              "name": "@babel/traverse",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/traverse",
              "type": "prod",
            },
            "@babel/types" => EdgeOut {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/helpers",
          "name": "@babel/helpers",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/helpers",
          "version": "7.7.4",
        },
        "@babel/highlight" => ArboristNode {
          "bundled": true,
          "children": Map {
            "chalk" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/@babel/highlight",
                  "name": "chalk",
                  "spec": "^2.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "ansi-styles" => EdgeOut {
                  "name": "ansi-styles",
                  "spec": "^3.2.1",
                  "to": "node_modules/tap/node_modules/ansi-styles",
                  "type": "prod",
                },
                "escape-string-regexp" => EdgeOut {
                  "name": "escape-string-regexp",
                  "spec": "^1.0.5",
                  "to": "node_modules/tap/node_modules/escape-string-regexp",
                  "type": "prod",
                },
                "supports-color" => EdgeOut {
                  "name": "supports-color",
                  "spec": "^5.3.0",
                  "to": "node_modules/tap/node_modules/@babel/highlight/node_modules/supports-color",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/@babel/highlight/node_modules/chalk",
              "name": "chalk",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/highlight/node_modules/chalk",
              "version": "2.4.2",
            },
            "supports-color" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/@babel/highlight/node_modules/chalk",
                  "name": "supports-color",
                  "spec": "^5.3.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "has-flag" => EdgeOut {
                  "name": "has-flag",
                  "spec": "^3.0.0",
                  "to": "node_modules/tap/node_modules/has-flag",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/@babel/highlight/node_modules/supports-color",
              "name": "supports-color",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/highlight/node_modules/supports-color",
              "version": "5.5.0",
            },
          },
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/code-frame",
              "name": "@babel/highlight",
              "spec": "^7.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "chalk" => EdgeOut {
              "name": "chalk",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/@babel/highlight/node_modules/chalk",
              "type": "prod",
            },
            "esutils" => EdgeOut {
              "name": "esutils",
              "spec": "^2.0.2",
              "to": "node_modules/tap/node_modules/esutils",
              "type": "prod",
            },
            "js-tokens" => EdgeOut {
              "name": "js-tokens",
              "spec": "^4.0.0",
              "to": "node_modules/tap/node_modules/js-tokens",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/highlight",
          "name": "@babel/highlight",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/highlight",
          "version": "7.5.0",
        },
        "@babel/parser" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "@babel/parser",
              "spec": "^7.7.5",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/template",
              "name": "@babel/parser",
              "spec": "^7.7.4",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "@babel/parser",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/parser",
          "name": "@babel/parser",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/parser",
          "version": "7.7.5",
        },
        "@babel/plugin-proposal-object-rest-spread" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/import-jsx",
              "name": "@babel/plugin-proposal-object-rest-spread",
              "spec": "^7.5.5",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/helper-plugin-utils" => EdgeOut {
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "to": "node_modules/tap/node_modules/@babel/helper-plugin-utils",
              "type": "prod",
            },
            "@babel/plugin-syntax-object-rest-spread" => EdgeOut {
              "name": "@babel/plugin-syntax-object-rest-spread",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/plugin-syntax-object-rest-spread",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/plugin-proposal-object-rest-spread",
          "name": "@babel/plugin-proposal-object-rest-spread",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/plugin-proposal-object-rest-spread",
          "version": "7.7.4",
        },
        "@babel/plugin-syntax-jsx" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/plugin-transform-react-jsx",
              "name": "@babel/plugin-syntax-jsx",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/helper-plugin-utils" => EdgeOut {
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "to": "node_modules/tap/node_modules/@babel/helper-plugin-utils",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/plugin-syntax-jsx",
          "name": "@babel/plugin-syntax-jsx",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/plugin-syntax-jsx",
          "version": "7.7.4",
        },
        "@babel/plugin-syntax-object-rest-spread" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/plugin-proposal-object-rest-spread",
              "name": "@babel/plugin-syntax-object-rest-spread",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/helper-plugin-utils" => EdgeOut {
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "to": "node_modules/tap/node_modules/@babel/helper-plugin-utils",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/plugin-syntax-object-rest-spread",
          "name": "@babel/plugin-syntax-object-rest-spread",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/plugin-syntax-object-rest-spread",
          "version": "7.7.4",
        },
        "@babel/plugin-transform-destructuring" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/import-jsx",
              "name": "@babel/plugin-transform-destructuring",
              "spec": "^7.5.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/helper-plugin-utils" => EdgeOut {
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "to": "node_modules/tap/node_modules/@babel/helper-plugin-utils",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/plugin-transform-destructuring",
          "name": "@babel/plugin-transform-destructuring",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/plugin-transform-destructuring",
          "version": "7.7.4",
        },
        "@babel/plugin-transform-react-jsx" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/import-jsx",
              "name": "@babel/plugin-transform-react-jsx",
              "spec": "^7.3.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/helper-builder-react-jsx" => EdgeOut {
              "name": "@babel/helper-builder-react-jsx",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/helper-builder-react-jsx",
              "type": "prod",
            },
            "@babel/helper-plugin-utils" => EdgeOut {
              "name": "@babel/helper-plugin-utils",
              "spec": "^7.0.0",
              "to": "node_modules/tap/node_modules/@babel/helper-plugin-utils",
              "type": "prod",
            },
            "@babel/plugin-syntax-jsx" => EdgeOut {
              "name": "@babel/plugin-syntax-jsx",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/plugin-syntax-jsx",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/plugin-transform-react-jsx",
          "name": "@babel/plugin-transform-react-jsx",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/plugin-transform-react-jsx",
          "version": "7.7.4",
        },
        "@babel/runtime" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/yaml",
              "name": "@babel/runtime",
              "spec": "^7.6.3",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "regenerator-runtime" => EdgeOut {
              "name": "regenerator-runtime",
              "spec": "^0.13.2",
              "to": "node_modules/tap/node_modules/regenerator-runtime",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/runtime",
          "name": "@babel/runtime",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/runtime",
          "version": "7.7.6",
        },
        "@babel/template" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "@babel/template",
              "spec": "^7.7.4",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/helper-function-name",
              "name": "@babel/template",
              "spec": "^7.7.4",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/helpers",
              "name": "@babel/template",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/code-frame" => EdgeOut {
              "name": "@babel/code-frame",
              "spec": "^7.0.0",
              "to": "node_modules/tap/node_modules/@babel/code-frame",
              "type": "prod",
            },
            "@babel/parser" => EdgeOut {
              "name": "@babel/parser",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/parser",
              "type": "prod",
            },
            "@babel/types" => EdgeOut {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/template",
          "name": "@babel/template",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/template",
          "version": "7.7.4",
        },
        "@babel/traverse" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "@babel/traverse",
              "spec": "^7.7.4",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/helpers",
              "name": "@babel/traverse",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/code-frame" => EdgeOut {
              "name": "@babel/code-frame",
              "spec": "^7.5.5",
              "to": "node_modules/tap/node_modules/@babel/code-frame",
              "type": "prod",
            },
            "@babel/generator" => EdgeOut {
              "name": "@babel/generator",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/generator",
              "type": "prod",
            },
            "@babel/helper-function-name" => EdgeOut {
              "name": "@babel/helper-function-name",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/helper-function-name",
              "type": "prod",
            },
            "@babel/helper-split-export-declaration" => EdgeOut {
              "name": "@babel/helper-split-export-declaration",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/helper-split-export-declaration",
              "type": "prod",
            },
            "@babel/parser" => EdgeOut {
              "name": "@babel/parser",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/parser",
              "type": "prod",
            },
            "@babel/types" => EdgeOut {
              "name": "@babel/types",
              "spec": "^7.7.4",
              "to": "node_modules/tap/node_modules/@babel/types",
              "type": "prod",
            },
            "debug" => EdgeOut {
              "name": "debug",
              "spec": "^4.1.0",
              "to": "node_modules/tap/node_modules/debug",
              "type": "prod",
            },
            "globals" => EdgeOut {
              "name": "globals",
              "spec": "^11.1.0",
              "to": "node_modules/tap/node_modules/globals",
              "type": "prod",
            },
            "lodash" => EdgeOut {
              "name": "lodash",
              "spec": "^4.17.13",
              "to": "node_modules/tap/node_modules/lodash",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/traverse",
          "name": "@babel/traverse",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/traverse",
          "version": "7.7.4",
        },
        "@babel/types" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/generator",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/helper-builder-react-jsx",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/helper-function-name",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/helper-get-function-arity",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/helper-split-export-declaration",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/helpers",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/template",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "@babel/types",
              "spec": "^7.7.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "esutils" => EdgeOut {
              "name": "esutils",
              "spec": "^2.0.2",
              "to": "node_modules/tap/node_modules/esutils",
              "type": "prod",
            },
            "lodash" => EdgeOut {
              "name": "lodash",
              "spec": "^4.17.13",
              "to": "node_modules/tap/node_modules/lodash",
              "type": "prod",
            },
            "to-fast-properties" => EdgeOut {
              "name": "to-fast-properties",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/to-fast-properties",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@babel/types",
          "name": "@babel/types",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@babel/types",
          "version": "7.7.4",
        },
        "@types/color-name" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/chalk/node_modules/ansi-styles",
              "name": "@types/color-name",
              "spec": "^1.1.1",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/slice-ansi/node_modules/ansi-styles",
              "name": "@types/color-name",
              "spec": "^1.1.1",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/wrap-ansi/node_modules/ansi-styles",
              "name": "@types/color-name",
              "spec": "^1.1.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@types/color-name",
          "name": "@types/color-name",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@types/color-name",
          "version": "1.1.1",
        },
        "@types/prop-types" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@types/react",
              "name": "@types/prop-types",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@types/prop-types",
          "name": "@types/prop-types",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@types/prop-types",
          "version": "15.7.3",
        },
        "@types/react" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap",
              "name": "@types/react",
              "spec": "^16.9.16",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@types/prop-types" => EdgeOut {
              "name": "@types/prop-types",
              "spec": "*",
              "to": "node_modules/tap/node_modules/@types/prop-types",
              "type": "prod",
            },
            "csstype" => EdgeOut {
              "name": "csstype",
              "spec": "^2.2.0",
              "to": "node_modules/tap/node_modules/csstype",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/@types/react",
          "name": "@types/react",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/@types/react",
          "version": "16.9.16",
        },
        "ansi-escapes" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "ansi-escapes",
              "spec": "^4.2.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "type-fest" => EdgeOut {
              "name": "type-fest",
              "spec": "^0.8.1",
              "to": "node_modules/tap/node_modules/type-fest",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/ansi-escapes",
          "name": "ansi-escapes",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/ansi-escapes",
          "version": "4.3.0",
        },
        "ansi-regex" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/strip-ansi",
              "name": "ansi-regex",
              "spec": "^5.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/ansi-regex",
          "name": "ansi-regex",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/ansi-regex",
          "version": "5.0.0",
        },
        "ansi-styles" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/highlight/node_modules/chalk",
              "name": "ansi-styles",
              "spec": "^3.2.1",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/log-update/node_modules/wrap-ansi",
              "name": "ansi-styles",
              "spec": "^3.2.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "color-convert" => EdgeOut {
              "name": "color-convert",
              "spec": "^1.9.0",
              "to": "node_modules/tap/node_modules/color-convert",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/ansi-styles",
          "name": "ansi-styles",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/ansi-styles",
          "version": "3.2.1",
        },
        "ansicolors" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/cardinal",
              "name": "ansicolors",
              "spec": "~0.3.2",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/ansicolors",
          "name": "ansicolors",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/ansicolors",
          "version": "0.3.2",
        },
        "arrify" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "arrify",
              "spec": "^2.0.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/arrify",
          "name": "arrify",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/arrify",
          "version": "2.0.1",
        },
        "astral-regex" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/slice-ansi",
              "name": "astral-regex",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/astral-regex",
          "name": "astral-regex",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/astral-regex",
          "version": "2.0.0",
        },
        "auto-bind" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "auto-bind",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/auto-bind",
          "name": "auto-bind",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/auto-bind",
          "version": "3.0.0",
        },
        "caller-callsite" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/caller-path",
              "name": "caller-callsite",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "callsites" => EdgeOut {
              "name": "callsites",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/callsites",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/caller-callsite",
          "name": "caller-callsite",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/caller-callsite",
          "version": "2.0.0",
        },
        "caller-path" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/import-jsx",
              "name": "caller-path",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "caller-callsite" => EdgeOut {
              "name": "caller-callsite",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/caller-callsite",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/caller-path",
          "name": "caller-path",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/caller-path",
          "version": "2.0.0",
        },
        "callsites" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/caller-callsite",
              "name": "callsites",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/callsites",
          "name": "callsites",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/callsites",
          "version": "2.0.0",
        },
        "cardinal" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/treport",
              "name": "cardinal",
              "spec": "^2.1.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansicolors" => EdgeOut {
              "name": "ansicolors",
              "spec": "~0.3.2",
              "to": "node_modules/tap/node_modules/ansicolors",
              "type": "prod",
            },
            "redeyed" => EdgeOut {
              "name": "redeyed",
              "spec": "~2.1.0",
              "to": "node_modules/tap/node_modules/redeyed",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/cardinal",
          "name": "cardinal",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/cardinal",
          "version": "2.1.1",
        },
        "chalk" => ArboristNode {
          "bundled": true,
          "children": Map {
            "ansi-styles" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/chalk",
                  "name": "ansi-styles",
                  "spec": "^4.1.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "@types/color-name" => EdgeOut {
                  "name": "@types/color-name",
                  "spec": "^1.1.1",
                  "to": "node_modules/tap/node_modules/@types/color-name",
                  "type": "prod",
                },
                "color-convert" => EdgeOut {
                  "name": "color-convert",
                  "spec": "^2.0.1",
                  "to": "node_modules/tap/node_modules/chalk/node_modules/color-convert",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/chalk/node_modules/ansi-styles",
              "name": "ansi-styles",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/chalk/node_modules/ansi-styles",
              "version": "4.2.0",
            },
            "color-convert" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/chalk/node_modules/ansi-styles",
                  "name": "color-convert",
                  "spec": "^2.0.1",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "color-name" => EdgeOut {
                  "name": "color-name",
                  "spec": "~1.1.4",
                  "to": "node_modules/tap/node_modules/chalk/node_modules/color-name",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/chalk/node_modules/color-convert",
              "name": "color-convert",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/chalk/node_modules/color-convert",
              "version": "2.0.1",
            },
            "color-name" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/chalk/node_modules/color-convert",
                  "name": "color-name",
                  "spec": "~1.1.4",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/chalk/node_modules/color-name",
              "name": "color-name",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/chalk/node_modules/color-name",
              "version": "1.1.4",
            },
          },
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "chalk",
              "spec": "^3.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/treport",
              "name": "chalk",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-styles" => EdgeOut {
              "name": "ansi-styles",
              "spec": "^4.1.0",
              "to": "node_modules/tap/node_modules/chalk/node_modules/ansi-styles",
              "type": "prod",
            },
            "supports-color" => EdgeOut {
              "name": "supports-color",
              "spec": "^7.1.0",
              "to": "node_modules/tap/node_modules/supports-color",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/chalk",
          "name": "chalk",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/chalk",
          "version": "3.0.0",
        },
        "ci-info" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/is-ci",
              "name": "ci-info",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/ci-info",
          "name": "ci-info",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/ci-info",
          "version": "2.0.0",
        },
        "cli-cursor" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "cli-cursor",
              "spec": "^3.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "restore-cursor" => EdgeOut {
              "name": "restore-cursor",
              "spec": "^3.1.0",
              "to": "node_modules/tap/node_modules/restore-cursor",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/cli-cursor",
          "name": "cli-cursor",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/cli-cursor",
          "version": "3.1.0",
        },
        "cli-truncate" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "cli-truncate",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "slice-ansi" => EdgeOut {
              "name": "slice-ansi",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/slice-ansi",
              "type": "prod",
            },
            "string-width" => EdgeOut {
              "name": "string-width",
              "spec": "^4.2.0",
              "to": "node_modules/tap/node_modules/string-width",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/cli-truncate",
          "name": "cli-truncate",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/cli-truncate",
          "version": "2.1.0",
        },
        "color-convert" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ansi-styles",
              "name": "color-convert",
              "spec": "^1.9.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "color-name" => EdgeOut {
              "name": "color-name",
              "spec": "1.1.3",
              "to": "node_modules/tap/node_modules/color-name",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/color-convert",
          "name": "color-convert",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/color-convert",
          "version": "1.9.3",
        },
        "color-name" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/color-convert",
              "name": "color-name",
              "spec": "1.1.3",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/color-name",
          "name": "color-name",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/color-name",
          "version": "1.1.3",
        },
        "convert-source-map" => ArboristNode {
          "bundled": true,
          "children": Map {
            "safe-buffer" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/convert-source-map",
                  "name": "safe-buffer",
                  "spec": "~5.1.1",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/convert-source-map/node_modules/safe-buffer",
              "name": "safe-buffer",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/convert-source-map/node_modules/safe-buffer",
              "version": "5.1.2",
            },
          },
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "convert-source-map",
              "spec": "^1.7.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "safe-buffer" => EdgeOut {
              "name": "safe-buffer",
              "spec": "~5.1.1",
              "to": "node_modules/tap/node_modules/convert-source-map/node_modules/safe-buffer",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/convert-source-map",
          "name": "convert-source-map",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/convert-source-map",
          "version": "1.7.0",
        },
        "csstype" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@types/react",
              "name": "csstype",
              "spec": "^2.2.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/csstype",
          "name": "csstype",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/csstype",
          "version": "2.6.8",
        },
        "debug" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "debug",
              "spec": "^4.1.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "debug",
              "spec": "^4.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ms" => EdgeOut {
              "name": "ms",
              "spec": "^2.1.1",
              "to": "node_modules/tap/node_modules/ms",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/debug",
          "name": "debug",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/debug",
          "version": "4.1.1",
        },
        "emoji-regex" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/string-width",
              "name": "emoji-regex",
              "spec": "^8.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/emoji-regex",
          "name": "emoji-regex",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/emoji-regex",
          "version": "8.0.0",
        },
        "escape-string-regexp" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/highlight/node_modules/chalk",
              "name": "escape-string-regexp",
              "spec": "^1.0.5",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/escape-string-regexp",
          "name": "escape-string-regexp",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/escape-string-regexp",
          "version": "1.0.5",
        },
        "esprima" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/redeyed",
              "name": "esprima",
              "spec": "~4.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/esprima",
          "name": "esprima",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/esprima",
          "version": "4.0.1",
        },
        "esutils" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/helper-builder-react-jsx",
              "name": "esutils",
              "spec": "^2.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/highlight",
              "name": "esutils",
              "spec": "^2.0.2",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/types",
              "name": "esutils",
              "spec": "^2.0.2",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/esutils",
          "name": "esutils",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/esutils",
          "version": "2.0.3",
        },
        "events-to-array" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/tap-parser",
              "name": "events-to-array",
              "spec": "^1.0.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/events-to-array",
          "name": "events-to-array",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/events-to-array",
          "version": "1.1.2",
        },
        "globals" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "globals",
              "spec": "^11.1.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/globals",
          "name": "globals",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/globals",
          "version": "11.12.0",
        },
        "has-flag" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/highlight/node_modules/supports-color",
              "name": "has-flag",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/has-flag",
          "name": "has-flag",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/has-flag",
          "version": "3.0.0",
        },
        "import-jsx" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap",
              "name": "import-jsx",
              "spec": "^3.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/treport",
              "name": "import-jsx",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/core" => EdgeOut {
              "name": "@babel/core",
              "spec": "^7.5.5",
              "to": "node_modules/tap/node_modules/@babel/core",
              "type": "prod",
            },
            "@babel/plugin-proposal-object-rest-spread" => EdgeOut {
              "name": "@babel/plugin-proposal-object-rest-spread",
              "spec": "^7.5.5",
              "to": "node_modules/tap/node_modules/@babel/plugin-proposal-object-rest-spread",
              "type": "prod",
            },
            "@babel/plugin-transform-destructuring" => EdgeOut {
              "name": "@babel/plugin-transform-destructuring",
              "spec": "^7.5.0",
              "to": "node_modules/tap/node_modules/@babel/plugin-transform-destructuring",
              "type": "prod",
            },
            "@babel/plugin-transform-react-jsx" => EdgeOut {
              "name": "@babel/plugin-transform-react-jsx",
              "spec": "^7.3.0",
              "to": "node_modules/tap/node_modules/@babel/plugin-transform-react-jsx",
              "type": "prod",
            },
            "caller-path" => EdgeOut {
              "name": "caller-path",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/caller-path",
              "type": "prod",
            },
            "resolve-from" => EdgeOut {
              "name": "resolve-from",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/resolve-from",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/import-jsx",
          "name": "import-jsx",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/import-jsx",
          "version": "3.0.0",
        },
        "ink" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap",
              "name": "ink",
              "spec": "^2.5.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/treport",
              "name": "ink",
              "spec": "^2.5.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-escapes" => EdgeOut {
              "name": "ansi-escapes",
              "spec": "^4.2.1",
              "to": "node_modules/tap/node_modules/ansi-escapes",
              "type": "prod",
            },
            "arrify" => EdgeOut {
              "name": "arrify",
              "spec": "^2.0.1",
              "to": "node_modules/tap/node_modules/arrify",
              "type": "prod",
            },
            "auto-bind" => EdgeOut {
              "name": "auto-bind",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/auto-bind",
              "type": "prod",
            },
            "chalk" => EdgeOut {
              "name": "chalk",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/chalk",
              "type": "prod",
            },
            "cli-cursor" => EdgeOut {
              "name": "cli-cursor",
              "spec": "^3.1.0",
              "to": "node_modules/tap/node_modules/cli-cursor",
              "type": "prod",
            },
            "cli-truncate" => EdgeOut {
              "name": "cli-truncate",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/cli-truncate",
              "type": "prod",
            },
            "is-ci" => EdgeOut {
              "name": "is-ci",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/is-ci",
              "type": "prod",
            },
            "lodash.throttle" => EdgeOut {
              "name": "lodash.throttle",
              "spec": "^4.1.1",
              "to": "node_modules/tap/node_modules/lodash.throttle",
              "type": "prod",
            },
            "log-update" => EdgeOut {
              "name": "log-update",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/log-update",
              "type": "prod",
            },
            "prop-types" => EdgeOut {
              "name": "prop-types",
              "spec": "^15.6.2",
              "to": "node_modules/tap/node_modules/prop-types",
              "type": "prod",
            },
            "react-reconciler" => EdgeOut {
              "name": "react-reconciler",
              "spec": "^0.24.0",
              "to": "node_modules/tap/node_modules/react-reconciler",
              "type": "prod",
            },
            "scheduler" => EdgeOut {
              "name": "scheduler",
              "spec": "^0.18.0",
              "to": "node_modules/tap/node_modules/scheduler",
              "type": "prod",
            },
            "signal-exit" => EdgeOut {
              "name": "signal-exit",
              "spec": "^3.0.2",
              "to": "node_modules/tap/node_modules/signal-exit",
              "type": "prod",
            },
            "slice-ansi" => EdgeOut {
              "name": "slice-ansi",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/slice-ansi",
              "type": "prod",
            },
            "string-length" => EdgeOut {
              "name": "string-length",
              "spec": "^3.1.0",
              "to": "node_modules/tap/node_modules/string-length",
              "type": "prod",
            },
            "widest-line" => EdgeOut {
              "name": "widest-line",
              "spec": "^3.1.0",
              "to": "node_modules/tap/node_modules/widest-line",
              "type": "prod",
            },
            "wrap-ansi" => EdgeOut {
              "name": "wrap-ansi",
              "spec": "^6.2.0",
              "to": "node_modules/tap/node_modules/wrap-ansi",
              "type": "prod",
            },
            "yoga-layout-prebuilt" => EdgeOut {
              "name": "yoga-layout-prebuilt",
              "spec": "^1.9.3",
              "to": "node_modules/tap/node_modules/yoga-layout-prebuilt",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/ink",
          "name": "ink",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/ink",
          "version": "2.6.0",
        },
        "is-ci" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "is-ci",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ci-info" => EdgeOut {
              "name": "ci-info",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/ci-info",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/is-ci",
          "name": "is-ci",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/is-ci",
          "version": "2.0.0",
        },
        "is-fullwidth-code-point" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/slice-ansi",
              "name": "is-fullwidth-code-point",
              "spec": "^3.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/string-width",
              "name": "is-fullwidth-code-point",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/is-fullwidth-code-point",
          "name": "is-fullwidth-code-point",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/is-fullwidth-code-point",
          "version": "3.0.0",
        },
        "js-tokens" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/highlight",
              "name": "js-tokens",
              "spec": "^4.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/loose-envify",
              "name": "js-tokens",
              "spec": "^3.0.0 || ^4.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/js-tokens",
          "name": "js-tokens",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/js-tokens",
          "version": "4.0.0",
        },
        "jsesc" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/generator",
              "name": "jsesc",
              "spec": "^2.5.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/jsesc",
          "name": "jsesc",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/jsesc",
          "version": "2.5.2",
        },
        "json5" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "json5",
              "spec": "^2.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "minimist" => EdgeOut {
              "name": "minimist",
              "spec": "^1.2.0",
              "to": "node_modules/tap/node_modules/minimist",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/json5",
          "name": "json5",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/json5",
          "version": "2.1.1",
        },
        "lodash" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "lodash",
              "spec": "^4.17.13",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/generator",
              "name": "lodash",
              "spec": "^4.17.13",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/traverse",
              "name": "lodash",
              "spec": "^4.17.13",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/types",
              "name": "lodash",
              "spec": "^4.17.13",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/lodash",
          "name": "lodash",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/lodash",
          "version": "4.17.15",
        },
        "lodash.throttle" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "lodash.throttle",
              "spec": "^4.1.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/lodash.throttle",
          "name": "lodash.throttle",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/lodash.throttle",
          "version": "4.1.1",
        },
        "log-update" => ArboristNode {
          "bundled": true,
          "children": Map {
            "ansi-escapes" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/log-update",
                  "name": "ansi-escapes",
                  "spec": "^3.2.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/ansi-escapes",
              "name": "ansi-escapes",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/log-update/node_modules/ansi-escapes",
              "version": "3.2.0",
            },
            "ansi-regex" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/strip-ansi",
                  "name": "ansi-regex",
                  "spec": "^4.1.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/ansi-regex",
              "name": "ansi-regex",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/log-update/node_modules/ansi-regex",
              "version": "4.1.0",
            },
            "cli-cursor" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/log-update",
                  "name": "cli-cursor",
                  "spec": "^2.1.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "restore-cursor" => EdgeOut {
                  "name": "restore-cursor",
                  "spec": "^2.0.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/restore-cursor",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/cli-cursor",
              "name": "cli-cursor",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/log-update/node_modules/cli-cursor",
              "version": "2.1.0",
            },
            "emoji-regex" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/string-width",
                  "name": "emoji-regex",
                  "spec": "^7.0.1",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/emoji-regex",
              "name": "emoji-regex",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/log-update/node_modules/emoji-regex",
              "version": "7.0.3",
            },
            "is-fullwidth-code-point" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/string-width",
                  "name": "is-fullwidth-code-point",
                  "spec": "^2.0.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/is-fullwidth-code-point",
              "name": "is-fullwidth-code-point",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/log-update/node_modules/is-fullwidth-code-point",
              "version": "2.0.0",
            },
            "mimic-fn" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/onetime",
                  "name": "mimic-fn",
                  "spec": "^1.0.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/mimic-fn",
              "name": "mimic-fn",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/log-update/node_modules/mimic-fn",
              "version": "1.2.0",
            },
            "onetime" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/restore-cursor",
                  "name": "onetime",
                  "spec": "^2.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "mimic-fn" => EdgeOut {
                  "name": "mimic-fn",
                  "spec": "^1.0.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/mimic-fn",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/onetime",
              "name": "onetime",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/log-update/node_modules/onetime",
              "version": "2.0.1",
            },
            "restore-cursor" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/cli-cursor",
                  "name": "restore-cursor",
                  "spec": "^2.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "onetime" => EdgeOut {
                  "name": "onetime",
                  "spec": "^2.0.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/onetime",
                  "type": "prod",
                },
                "signal-exit" => EdgeOut {
                  "name": "signal-exit",
                  "spec": "^3.0.2",
                  "to": "node_modules/tap/node_modules/signal-exit",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/restore-cursor",
              "name": "restore-cursor",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/log-update/node_modules/restore-cursor",
              "version": "2.0.0",
            },
            "string-width" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/wrap-ansi",
                  "name": "string-width",
                  "spec": "^3.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "emoji-regex" => EdgeOut {
                  "name": "emoji-regex",
                  "spec": "^7.0.1",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/emoji-regex",
                  "type": "prod",
                },
                "is-fullwidth-code-point" => EdgeOut {
                  "name": "is-fullwidth-code-point",
                  "spec": "^2.0.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/is-fullwidth-code-point",
                  "type": "prod",
                },
                "strip-ansi" => EdgeOut {
                  "name": "strip-ansi",
                  "spec": "^5.1.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/strip-ansi",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/string-width",
              "name": "string-width",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/log-update/node_modules/string-width",
              "version": "3.1.0",
            },
            "strip-ansi" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/string-width",
                  "name": "strip-ansi",
                  "spec": "^5.1.0",
                  "type": "prod",
                },
                EdgeIn {
                  "from": "node_modules/tap/node_modules/log-update/node_modules/wrap-ansi",
                  "name": "strip-ansi",
                  "spec": "^5.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "ansi-regex" => EdgeOut {
                  "name": "ansi-regex",
                  "spec": "^4.1.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/ansi-regex",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/strip-ansi",
              "name": "strip-ansi",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/log-update/node_modules/strip-ansi",
              "version": "5.2.0",
            },
            "wrap-ansi" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/log-update",
                  "name": "wrap-ansi",
                  "spec": "^5.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "ansi-styles" => EdgeOut {
                  "name": "ansi-styles",
                  "spec": "^3.2.0",
                  "to": "node_modules/tap/node_modules/ansi-styles",
                  "type": "prod",
                },
                "string-width" => EdgeOut {
                  "name": "string-width",
                  "spec": "^3.0.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/string-width",
                  "type": "prod",
                },
                "strip-ansi" => EdgeOut {
                  "name": "strip-ansi",
                  "spec": "^5.0.0",
                  "to": "node_modules/tap/node_modules/log-update/node_modules/strip-ansi",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/log-update/node_modules/wrap-ansi",
              "name": "wrap-ansi",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/log-update/node_modules/wrap-ansi",
              "version": "5.1.0",
            },
          },
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "log-update",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-escapes" => EdgeOut {
              "name": "ansi-escapes",
              "spec": "^3.2.0",
              "to": "node_modules/tap/node_modules/log-update/node_modules/ansi-escapes",
              "type": "prod",
            },
            "cli-cursor" => EdgeOut {
              "name": "cli-cursor",
              "spec": "^2.1.0",
              "to": "node_modules/tap/node_modules/log-update/node_modules/cli-cursor",
              "type": "prod",
            },
            "wrap-ansi" => EdgeOut {
              "name": "wrap-ansi",
              "spec": "^5.0.0",
              "to": "node_modules/tap/node_modules/log-update/node_modules/wrap-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/log-update",
          "name": "log-update",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/log-update",
          "version": "3.3.0",
        },
        "loose-envify" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/prop-types",
              "name": "loose-envify",
              "spec": "^1.4.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/react-reconciler",
              "name": "loose-envify",
              "spec": "^1.1.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/scheduler",
              "name": "loose-envify",
              "spec": "^1.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "js-tokens" => EdgeOut {
              "name": "js-tokens",
              "spec": "^3.0.0 || ^4.0.0",
              "to": "node_modules/tap/node_modules/js-tokens",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/loose-envify",
          "name": "loose-envify",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/loose-envify",
          "version": "1.4.0",
        },
        "mimic-fn" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/onetime",
              "name": "mimic-fn",
              "spec": "^2.1.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/mimic-fn",
          "name": "mimic-fn",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/mimic-fn",
          "version": "2.1.0",
        },
        "minimist" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/json5",
              "name": "minimist",
              "spec": "^1.2.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/minimist",
          "name": "minimist",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/minimist",
          "version": "1.2.0",
        },
        "minipass" => ArboristNode {
          "bundled": true,
          "children": Map {
            "yallist" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/minipass",
                  "name": "yallist",
                  "spec": "^4.0.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/minipass/node_modules/yallist",
              "name": "yallist",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/minipass/node_modules/yallist",
              "version": "4.0.0",
            },
          },
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap",
              "name": "minipass",
              "spec": "^3.1.1",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/tap-parser",
              "name": "minipass",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "yallist" => EdgeOut {
              "name": "yallist",
              "spec": "^4.0.0",
              "to": "node_modules/tap/node_modules/minipass/node_modules/yallist",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/minipass",
          "name": "minipass",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/minipass",
          "version": "3.1.1",
        },
        "ms" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/debug",
              "name": "ms",
              "spec": "^2.1.1",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/treport",
              "name": "ms",
              "spec": "^2.1.2",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/ms",
          "name": "ms",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/ms",
          "version": "2.1.2",
        },
        "object-assign" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/prop-types",
              "name": "object-assign",
              "spec": "^4.1.1",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/react-reconciler",
              "name": "object-assign",
              "spec": "^4.1.1",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/scheduler",
              "name": "object-assign",
              "spec": "^4.1.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/object-assign",
          "name": "object-assign",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/object-assign",
          "version": "4.1.1",
        },
        "onetime" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/restore-cursor",
              "name": "onetime",
              "spec": "^5.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "mimic-fn" => EdgeOut {
              "name": "mimic-fn",
              "spec": "^2.1.0",
              "to": "node_modules/tap/node_modules/mimic-fn",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/onetime",
          "name": "onetime",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/onetime",
          "version": "5.1.0",
        },
        "path-parse" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/resolve",
              "name": "path-parse",
              "spec": "^1.0.6",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/path-parse",
          "name": "path-parse",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/path-parse",
          "version": "1.0.6",
        },
        "prop-types" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "prop-types",
              "spec": "^15.6.2",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/react-reconciler",
              "name": "prop-types",
              "spec": "^15.6.2",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "loose-envify" => EdgeOut {
              "name": "loose-envify",
              "spec": "^1.4.0",
              "to": "node_modules/tap/node_modules/loose-envify",
              "type": "prod",
            },
            "object-assign" => EdgeOut {
              "name": "object-assign",
              "spec": "^4.1.1",
              "to": "node_modules/tap/node_modules/object-assign",
              "type": "prod",
            },
            "react-is" => EdgeOut {
              "name": "react-is",
              "spec": "^16.8.1",
              "to": "node_modules/tap/node_modules/react-is",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/prop-types",
          "name": "prop-types",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/prop-types",
          "version": "15.7.2",
        },
        "punycode" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/treport/node_modules/unicode-length",
              "name": "punycode",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/punycode",
          "name": "punycode",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/punycode",
          "version": "2.1.1",
        },
        "react-is" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/prop-types",
              "name": "react-is",
              "spec": "^16.8.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/react-is",
          "name": "react-is",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/react-is",
          "version": "16.12.0",
        },
        "react-reconciler" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "react-reconciler",
              "spec": "^0.24.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "loose-envify" => EdgeOut {
              "name": "loose-envify",
              "spec": "^1.1.0",
              "to": "node_modules/tap/node_modules/loose-envify",
              "type": "prod",
            },
            "object-assign" => EdgeOut {
              "name": "object-assign",
              "spec": "^4.1.1",
              "to": "node_modules/tap/node_modules/object-assign",
              "type": "prod",
            },
            "prop-types" => EdgeOut {
              "name": "prop-types",
              "spec": "^15.6.2",
              "to": "node_modules/tap/node_modules/prop-types",
              "type": "prod",
            },
            "scheduler" => EdgeOut {
              "name": "scheduler",
              "spec": "^0.18.0",
              "to": "node_modules/tap/node_modules/scheduler",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/react-reconciler",
          "name": "react-reconciler",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/react-reconciler",
          "version": "0.24.0",
        },
        "redeyed" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/cardinal",
              "name": "redeyed",
              "spec": "~2.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "esprima" => EdgeOut {
              "name": "esprima",
              "spec": "~4.0.0",
              "to": "node_modules/tap/node_modules/esprima",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/redeyed",
          "name": "redeyed",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/redeyed",
          "version": "2.1.1",
        },
        "regenerator-runtime" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/runtime",
              "name": "regenerator-runtime",
              "spec": "^0.13.2",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/regenerator-runtime",
          "name": "regenerator-runtime",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/regenerator-runtime",
          "version": "0.13.3",
        },
        "resolve" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "resolve",
              "spec": "^1.3.2",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "path-parse" => EdgeOut {
              "name": "path-parse",
              "spec": "^1.0.6",
              "to": "node_modules/tap/node_modules/path-parse",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/resolve",
          "name": "resolve",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/resolve",
          "version": "1.13.1",
        },
        "resolve-from" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/import-jsx",
              "name": "resolve-from",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/resolve-from",
          "name": "resolve-from",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/resolve-from",
          "version": "3.0.0",
        },
        "restore-cursor" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/cli-cursor",
              "name": "restore-cursor",
              "spec": "^3.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "onetime" => EdgeOut {
              "name": "onetime",
              "spec": "^5.1.0",
              "to": "node_modules/tap/node_modules/onetime",
              "type": "prod",
            },
            "signal-exit" => EdgeOut {
              "name": "signal-exit",
              "spec": "^3.0.2",
              "to": "node_modules/tap/node_modules/signal-exit",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/restore-cursor",
          "name": "restore-cursor",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/restore-cursor",
          "version": "3.1.0",
        },
        "scheduler" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "scheduler",
              "spec": "^0.18.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/react-reconciler",
              "name": "scheduler",
              "spec": "^0.18.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "loose-envify" => EdgeOut {
              "name": "loose-envify",
              "spec": "^1.1.0",
              "to": "node_modules/tap/node_modules/loose-envify",
              "type": "prod",
            },
            "object-assign" => EdgeOut {
              "name": "object-assign",
              "spec": "^4.1.1",
              "to": "node_modules/tap/node_modules/object-assign",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/scheduler",
          "name": "scheduler",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/scheduler",
          "version": "0.18.0",
        },
        "semver" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/core",
              "name": "semver",
              "spec": "^5.4.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/semver",
          "name": "semver",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/semver",
          "version": "5.7.1",
        },
        "signal-exit" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap",
              "name": "signal-exit",
              "spec": "^3.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "signal-exit",
              "spec": "^3.0.2",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/log-update/node_modules/restore-cursor",
              "name": "signal-exit",
              "spec": "^3.0.2",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/restore-cursor",
              "name": "signal-exit",
              "spec": "^3.0.2",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/signal-exit",
          "name": "signal-exit",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/signal-exit",
          "version": "3.0.2",
        },
        "slice-ansi" => ArboristNode {
          "bundled": true,
          "children": Map {
            "ansi-styles" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/slice-ansi",
                  "name": "ansi-styles",
                  "spec": "^4.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "@types/color-name" => EdgeOut {
                  "name": "@types/color-name",
                  "spec": "^1.1.1",
                  "to": "node_modules/tap/node_modules/@types/color-name",
                  "type": "prod",
                },
                "color-convert" => EdgeOut {
                  "name": "color-convert",
                  "spec": "^2.0.1",
                  "to": "node_modules/tap/node_modules/slice-ansi/node_modules/color-convert",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/slice-ansi/node_modules/ansi-styles",
              "name": "ansi-styles",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/slice-ansi/node_modules/ansi-styles",
              "version": "4.2.0",
            },
            "color-convert" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/slice-ansi/node_modules/ansi-styles",
                  "name": "color-convert",
                  "spec": "^2.0.1",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "color-name" => EdgeOut {
                  "name": "color-name",
                  "spec": "~1.1.4",
                  "to": "node_modules/tap/node_modules/slice-ansi/node_modules/color-name",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/slice-ansi/node_modules/color-convert",
              "name": "color-convert",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/slice-ansi/node_modules/color-convert",
              "version": "2.0.1",
            },
            "color-name" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/slice-ansi/node_modules/color-convert",
                  "name": "color-name",
                  "spec": "~1.1.4",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/slice-ansi/node_modules/color-name",
              "name": "color-name",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/slice-ansi/node_modules/color-name",
              "version": "1.1.4",
            },
          },
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/cli-truncate",
              "name": "slice-ansi",
              "spec": "^3.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "slice-ansi",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-styles" => EdgeOut {
              "name": "ansi-styles",
              "spec": "^4.0.0",
              "to": "node_modules/tap/node_modules/slice-ansi/node_modules/ansi-styles",
              "type": "prod",
            },
            "astral-regex" => EdgeOut {
              "name": "astral-regex",
              "spec": "^2.0.0",
              "to": "node_modules/tap/node_modules/astral-regex",
              "type": "prod",
            },
            "is-fullwidth-code-point" => EdgeOut {
              "name": "is-fullwidth-code-point",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/is-fullwidth-code-point",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/slice-ansi",
          "name": "slice-ansi",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/slice-ansi",
          "version": "3.0.0",
        },
        "string-length" => ArboristNode {
          "bundled": true,
          "children": Map {
            "ansi-regex" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/string-length/node_modules/strip-ansi",
                  "name": "ansi-regex",
                  "spec": "^4.1.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/string-length/node_modules/ansi-regex",
              "name": "ansi-regex",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/string-length/node_modules/ansi-regex",
              "version": "4.1.0",
            },
            "astral-regex" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/string-length",
                  "name": "astral-regex",
                  "spec": "^1.0.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/string-length/node_modules/astral-regex",
              "name": "astral-regex",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/string-length/node_modules/astral-regex",
              "version": "1.0.0",
            },
            "strip-ansi" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/string-length",
                  "name": "strip-ansi",
                  "spec": "^5.2.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "ansi-regex" => EdgeOut {
                  "name": "ansi-regex",
                  "spec": "^4.1.0",
                  "to": "node_modules/tap/node_modules/string-length/node_modules/ansi-regex",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/string-length/node_modules/strip-ansi",
              "name": "strip-ansi",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/string-length/node_modules/strip-ansi",
              "version": "5.2.0",
            },
          },
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "string-length",
              "spec": "^3.1.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/treport",
              "name": "string-length",
              "spec": "^3.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "astral-regex" => EdgeOut {
              "name": "astral-regex",
              "spec": "^1.0.0",
              "to": "node_modules/tap/node_modules/string-length/node_modules/astral-regex",
              "type": "prod",
            },
            "strip-ansi" => EdgeOut {
              "name": "strip-ansi",
              "spec": "^5.2.0",
              "to": "node_modules/tap/node_modules/string-length/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/string-length",
          "name": "string-length",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/string-length",
          "version": "3.1.0",
        },
        "string-width" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/cli-truncate",
              "name": "string-width",
              "spec": "^4.2.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/widest-line",
              "name": "string-width",
              "spec": "^4.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/wrap-ansi",
              "name": "string-width",
              "spec": "^4.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "emoji-regex" => EdgeOut {
              "name": "emoji-regex",
              "spec": "^8.0.0",
              "to": "node_modules/tap/node_modules/emoji-regex",
              "type": "prod",
            },
            "is-fullwidth-code-point" => EdgeOut {
              "name": "is-fullwidth-code-point",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/is-fullwidth-code-point",
              "type": "prod",
            },
            "strip-ansi" => EdgeOut {
              "name": "strip-ansi",
              "spec": "^6.0.0",
              "to": "node_modules/tap/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/string-width",
          "name": "string-width",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/string-width",
          "version": "4.2.0",
        },
        "strip-ansi" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/string-width",
              "name": "strip-ansi",
              "spec": "^6.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/wrap-ansi",
              "name": "strip-ansi",
              "spec": "^6.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-regex" => EdgeOut {
              "name": "ansi-regex",
              "spec": "^5.0.0",
              "to": "node_modules/tap/node_modules/ansi-regex",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/strip-ansi",
          "name": "strip-ansi",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/strip-ansi",
          "version": "6.0.0",
        },
        "supports-color" => ArboristNode {
          "bundled": true,
          "children": Map {
            "has-flag" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/supports-color",
                  "name": "has-flag",
                  "spec": "^4.0.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/supports-color/node_modules/has-flag",
              "name": "has-flag",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/supports-color/node_modules/has-flag",
              "version": "4.0.0",
            },
          },
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/chalk",
              "name": "supports-color",
              "spec": "^7.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "has-flag" => EdgeOut {
              "name": "has-flag",
              "spec": "^4.0.0",
              "to": "node_modules/tap/node_modules/supports-color/node_modules/has-flag",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/supports-color",
          "name": "supports-color",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/supports-color",
          "version": "7.1.0",
        },
        "tap-parser" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap",
              "name": "tap-parser",
              "spec": "^10.0.1",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/treport",
              "name": "tap-parser",
              "spec": "^10.0.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "events-to-array" => EdgeOut {
              "name": "events-to-array",
              "spec": "^1.0.1",
              "to": "node_modules/tap/node_modules/events-to-array",
              "type": "prod",
            },
            "minipass" => EdgeOut {
              "name": "minipass",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/minipass",
              "type": "prod",
            },
            "tap-yaml" => EdgeOut {
              "name": "tap-yaml",
              "spec": "^1.0.0",
              "to": "node_modules/tap/node_modules/tap-yaml",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/tap-parser",
          "name": "tap-parser",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/tap-parser",
          "version": "10.0.1",
        },
        "tap-yaml" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap",
              "name": "tap-yaml",
              "spec": "^1.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/tap-parser",
              "name": "tap-yaml",
              "spec": "^1.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "yaml" => EdgeOut {
              "name": "yaml",
              "spec": "^1.5.0",
              "to": "node_modules/tap/node_modules/yaml",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/tap-yaml",
          "name": "tap-yaml",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/tap-yaml",
          "version": "1.0.0",
        },
        "to-fast-properties" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/@babel/types",
              "name": "to-fast-properties",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/to-fast-properties",
          "name": "to-fast-properties",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/to-fast-properties",
          "version": "2.0.0",
        },
        "treport" => ArboristNode {
          "bundled": true,
          "children": Map {
            "ansi-regex" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/treport/node_modules/strip-ansi",
                  "name": "ansi-regex",
                  "spec": "^2.0.0",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/treport/node_modules/ansi-regex",
              "name": "ansi-regex",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/treport/node_modules/ansi-regex",
              "version": "2.1.1",
            },
            "strip-ansi" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/treport/node_modules/unicode-length",
                  "name": "strip-ansi",
                  "spec": "^3.0.1",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "ansi-regex" => EdgeOut {
                  "name": "ansi-regex",
                  "spec": "^2.0.0",
                  "to": "node_modules/tap/node_modules/treport/node_modules/ansi-regex",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/treport/node_modules/strip-ansi",
              "name": "strip-ansi",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/treport/node_modules/strip-ansi",
              "version": "3.0.1",
            },
            "unicode-length" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/treport",
                  "name": "unicode-length",
                  "spec": "^2.0.2",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "punycode" => EdgeOut {
                  "name": "punycode",
                  "spec": "^2.0.0",
                  "to": "node_modules/tap/node_modules/punycode",
                  "type": "prod",
                },
                "strip-ansi" => EdgeOut {
                  "name": "strip-ansi",
                  "spec": "^3.0.1",
                  "to": "node_modules/tap/node_modules/treport/node_modules/strip-ansi",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/treport/node_modules/unicode-length",
              "name": "unicode-length",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/treport/node_modules/unicode-length",
              "version": "2.0.2",
            },
          },
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap",
              "name": "treport",
              "spec": "^1.0.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "cardinal" => EdgeOut {
              "name": "cardinal",
              "spec": "^2.1.1",
              "to": "node_modules/tap/node_modules/cardinal",
              "type": "prod",
            },
            "chalk" => EdgeOut {
              "name": "chalk",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/chalk",
              "type": "prod",
            },
            "import-jsx" => EdgeOut {
              "name": "import-jsx",
              "spec": "^3.0.0",
              "to": "node_modules/tap/node_modules/import-jsx",
              "type": "prod",
            },
            "ink" => EdgeOut {
              "name": "ink",
              "spec": "^2.5.0",
              "to": "node_modules/tap/node_modules/ink",
              "type": "prod",
            },
            "ms" => EdgeOut {
              "name": "ms",
              "spec": "^2.1.2",
              "to": "node_modules/tap/node_modules/ms",
              "type": "prod",
            },
            "string-length" => EdgeOut {
              "name": "string-length",
              "spec": "^3.1.0",
              "to": "node_modules/tap/node_modules/string-length",
              "type": "prod",
            },
            "tap-parser" => EdgeOut {
              "name": "tap-parser",
              "spec": "^10.0.1",
              "to": "node_modules/tap/node_modules/tap-parser",
              "type": "prod",
            },
            "unicode-length" => EdgeOut {
              "name": "unicode-length",
              "spec": "^2.0.2",
              "to": "node_modules/tap/node_modules/treport/node_modules/unicode-length",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/treport",
          "name": "treport",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/treport",
          "version": "1.0.1",
        },
        "type-fest" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ansi-escapes",
              "name": "type-fest",
              "spec": "^0.8.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/type-fest",
          "name": "type-fest",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/type-fest",
          "version": "0.8.1",
        },
        "widest-line" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "widest-line",
              "spec": "^3.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "string-width" => EdgeOut {
              "name": "string-width",
              "spec": "^4.0.0",
              "to": "node_modules/tap/node_modules/string-width",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/widest-line",
          "name": "widest-line",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/widest-line",
          "version": "3.1.0",
        },
        "wrap-ansi" => ArboristNode {
          "bundled": true,
          "children": Map {
            "ansi-styles" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/wrap-ansi",
                  "name": "ansi-styles",
                  "spec": "^4.0.0",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "@types/color-name" => EdgeOut {
                  "name": "@types/color-name",
                  "spec": "^1.1.1",
                  "to": "node_modules/tap/node_modules/@types/color-name",
                  "type": "prod",
                },
                "color-convert" => EdgeOut {
                  "name": "color-convert",
                  "spec": "^2.0.1",
                  "to": "node_modules/tap/node_modules/wrap-ansi/node_modules/color-convert",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/wrap-ansi/node_modules/ansi-styles",
              "name": "ansi-styles",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/wrap-ansi/node_modules/ansi-styles",
              "version": "4.2.0",
            },
            "color-convert" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/wrap-ansi/node_modules/ansi-styles",
                  "name": "color-convert",
                  "spec": "^2.0.1",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "color-name" => EdgeOut {
                  "name": "color-name",
                  "spec": "~1.1.4",
                  "to": "node_modules/tap/node_modules/wrap-ansi/node_modules/color-name",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/wrap-ansi/node_modules/color-convert",
              "name": "color-convert",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/wrap-ansi/node_modules/color-convert",
              "version": "2.0.1",
            },
            "color-name" => ArboristNode {
              "bundled": true,
              "dev": true,
              "edgesIn": Set {
                EdgeIn {
                  "from": "node_modules/tap/node_modules/wrap-ansi/node_modules/color-convert",
                  "name": "color-name",
                  "spec": "~1.1.4",
                  "type": "prod",
                },
              },
              "location": "node_modules/tap/node_modules/wrap-ansi/node_modules/color-name",
              "name": "color-name",
              "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/wrap-ansi/node_modules/color-name",
              "version": "1.1.4",
            },
          },
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "wrap-ansi",
              "spec": "^6.2.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-styles" => EdgeOut {
              "name": "ansi-styles",
              "spec": "^4.0.0",
              "to": "node_modules/tap/node_modules/wrap-ansi/node_modules/ansi-styles",
              "type": "prod",
            },
            "string-width" => EdgeOut {
              "name": "string-width",
              "spec": "^4.1.0",
              "to": "node_modules/tap/node_modules/string-width",
              "type": "prod",
            },
            "strip-ansi" => EdgeOut {
              "name": "strip-ansi",
              "spec": "^6.0.0",
              "to": "node_modules/tap/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/wrap-ansi",
          "name": "wrap-ansi",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/wrap-ansi",
          "version": "6.2.0",
        },
        "yaml" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap",
              "name": "yaml",
              "spec": "^1.7.2",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/tap/node_modules/tap-yaml",
              "name": "yaml",
              "spec": "^1.5.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@babel/runtime" => EdgeOut {
              "name": "@babel/runtime",
              "spec": "^7.6.3",
              "to": "node_modules/tap/node_modules/@babel/runtime",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/yaml",
          "name": "yaml",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/yaml",
          "version": "1.7.2",
        },
        "yoga-layout-prebuilt" => ArboristNode {
          "bundled": true,
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap/node_modules/ink",
              "name": "yoga-layout-prebuilt",
              "spec": "^1.9.3",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/yoga-layout-prebuilt",
          "name": "yoga-layout-prebuilt",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap/node_modules/yoga-layout-prebuilt",
          "version": "1.9.3",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "tap",
          "spec": "^14.10.5",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "@types/react" => EdgeOut {
          "name": "@types/react",
          "spec": "^16.9.16",
          "to": "node_modules/tap/node_modules/@types/react",
          "type": "prod",
        },
        "async-hook-domain" => EdgeOut {
          "name": "async-hook-domain",
          "spec": "^1.1.3",
          "to": "node_modules/async-hook-domain",
          "type": "prod",
        },
        "bind-obj-methods" => EdgeOut {
          "name": "bind-obj-methods",
          "spec": "^2.0.0",
          "to": "node_modules/bind-obj-methods",
          "type": "prod",
        },
        "browser-process-hrtime" => EdgeOut {
          "name": "browser-process-hrtime",
          "spec": "^1.0.0",
          "to": "node_modules/browser-process-hrtime",
          "type": "prod",
        },
        "chokidar" => EdgeOut {
          "name": "chokidar",
          "spec": "^3.3.0",
          "to": "node_modules/chokidar",
          "type": "prod",
        },
        "color-support" => EdgeOut {
          "name": "color-support",
          "spec": "^1.1.0",
          "to": "node_modules/color-support",
          "type": "prod",
        },
        "coveralls" => EdgeOut {
          "name": "coveralls",
          "spec": "^3.0.8",
          "to": "node_modules/coveralls",
          "type": "prod",
        },
        "diff" => EdgeOut {
          "name": "diff",
          "spec": "^4.0.1",
          "to": "node_modules/diff",
          "type": "prod",
        },
        "esm" => EdgeOut {
          "name": "esm",
          "spec": "^3.2.25",
          "to": "node_modules/esm",
          "type": "prod",
        },
        "findit" => EdgeOut {
          "name": "findit",
          "spec": "^2.0.0",
          "to": "node_modules/findit",
          "type": "prod",
        },
        "flow-remove-types" => EdgeOut {
          "name": "flow-remove-types",
          "spec": "^2.112.0",
          "to": "node_modules/flow-remove-types",
          "type": "prod",
        },
        "foreground-child" => EdgeOut {
          "name": "foreground-child",
          "spec": "^1.3.3",
          "to": "node_modules/foreground-child",
          "type": "prod",
        },
        "fs-exists-cached" => EdgeOut {
          "name": "fs-exists-cached",
          "spec": "^1.0.0",
          "to": "node_modules/fs-exists-cached",
          "type": "prod",
        },
        "function-loop" => EdgeOut {
          "name": "function-loop",
          "spec": "^1.0.2",
          "to": "node_modules/function-loop",
          "type": "prod",
        },
        "glob" => EdgeOut {
          "name": "glob",
          "spec": "^7.1.6",
          "to": "node_modules/glob",
          "type": "prod",
        },
        "import-jsx" => EdgeOut {
          "name": "import-jsx",
          "spec": "^3.0.0",
          "to": "node_modules/tap/node_modules/import-jsx",
          "type": "prod",
        },
        "ink" => EdgeOut {
          "name": "ink",
          "spec": "^2.5.0",
          "to": "node_modules/tap/node_modules/ink",
          "type": "prod",
        },
        "isexe" => EdgeOut {
          "name": "isexe",
          "spec": "^2.0.0",
          "to": "node_modules/isexe",
          "type": "prod",
        },
        "istanbul-lib-processinfo" => EdgeOut {
          "name": "istanbul-lib-processinfo",
          "spec": "^1.0.0",
          "to": "node_modules/istanbul-lib-processinfo",
          "type": "prod",
        },
        "jackspeak" => EdgeOut {
          "name": "jackspeak",
          "spec": "^1.4.0",
          "to": "node_modules/jackspeak",
          "type": "prod",
        },
        "minipass" => EdgeOut {
          "name": "minipass",
          "spec": "^3.1.1",
          "to": "node_modules/tap/node_modules/minipass",
          "type": "prod",
        },
        "mkdirp" => EdgeOut {
          "name": "mkdirp",
          "spec": "^0.5.1",
          "to": "node_modules/mkdirp",
          "type": "prod",
        },
        "nyc" => EdgeOut {
          "name": "nyc",
          "spec": "^14.1.1",
          "to": "node_modules/nyc",
          "type": "prod",
        },
        "opener" => EdgeOut {
          "name": "opener",
          "spec": "^1.5.1",
          "to": "node_modules/opener",
          "type": "prod",
        },
        "own-or" => EdgeOut {
          "name": "own-or",
          "spec": "^1.0.0",
          "to": "node_modules/own-or",
          "type": "prod",
        },
        "own-or-env" => EdgeOut {
          "name": "own-or-env",
          "spec": "^1.0.1",
          "to": "node_modules/own-or-env",
          "type": "prod",
        },
        "react" => EdgeOut {
          "name": "react",
          "spec": "^16.12.0",
          "to": "node_modules/react",
          "type": "prod",
        },
        "rimraf" => EdgeOut {
          "name": "rimraf",
          "spec": "^2.7.1",
          "to": "node_modules/rimraf",
          "type": "prod",
        },
        "signal-exit" => EdgeOut {
          "name": "signal-exit",
          "spec": "^3.0.0",
          "to": "node_modules/tap/node_modules/signal-exit",
          "type": "prod",
        },
        "source-map-support" => EdgeOut {
          "name": "source-map-support",
          "spec": "^0.5.16",
          "to": "node_modules/source-map-support",
          "type": "prod",
        },
        "stack-utils" => EdgeOut {
          "name": "stack-utils",
          "spec": "^1.0.2",
          "to": "node_modules/stack-utils",
          "type": "prod",
        },
        "tap-mocha-reporter" => EdgeOut {
          "name": "tap-mocha-reporter",
          "spec": "^5.0.0",
          "to": "node_modules/tap-mocha-reporter",
          "type": "prod",
        },
        "tap-parser" => EdgeOut {
          "name": "tap-parser",
          "spec": "^10.0.1",
          "to": "node_modules/tap/node_modules/tap-parser",
          "type": "prod",
        },
        "tap-yaml" => EdgeOut {
          "name": "tap-yaml",
          "spec": "^1.0.0",
          "to": "node_modules/tap/node_modules/tap-yaml",
          "type": "prod",
        },
        "tcompare" => EdgeOut {
          "name": "tcompare",
          "spec": "^3.0.0",
          "to": "node_modules/tcompare",
          "type": "prod",
        },
        "treport" => EdgeOut {
          "name": "treport",
          "spec": "^1.0.1",
          "to": "node_modules/tap/node_modules/treport",
          "type": "prod",
        },
        "trivial-deferred" => EdgeOut {
          "name": "trivial-deferred",
          "spec": "^1.0.1",
          "to": "node_modules/trivial-deferred",
          "type": "prod",
        },
        "ts-node" => EdgeOut {
          "name": "ts-node",
          "spec": "^8.5.2",
          "to": "node_modules/ts-node",
          "type": "prod",
        },
        "typescript" => EdgeOut {
          "name": "typescript",
          "spec": "^3.7.2",
          "to": "node_modules/typescript",
          "type": "prod",
        },
        "which" => EdgeOut {
          "name": "which",
          "spec": "^2.0.2",
          "to": "node_modules/which",
          "type": "prod",
        },
        "write-file-atomic" => EdgeOut {
          "name": "write-file-atomic",
          "spec": "^3.0.1",
          "to": "node_modules/write-file-atomic",
          "type": "prod",
        },
        "yaml" => EdgeOut {
          "name": "yaml",
          "spec": "^1.7.2",
          "to": "node_modules/tap/node_modules/yaml",
          "type": "prod",
        },
        "yapool" => EdgeOut {
          "name": "yapool",
          "spec": "^1.0.0",
          "to": "node_modules/yapool",
          "type": "prod",
        },
      },
      "location": "node_modules/tap",
      "name": "tap",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap",
      "resolved": "https://registry.npmjs.org/tap/-/tap-14.10.5.tgz",
      "version": "14.10.5",
    },
    "tap-mocha-reporter" => ArboristNode {
      "children": Map {
        "debug" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap-mocha-reporter",
              "name": "debug",
              "spec": "^2.1.3",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ms" => EdgeOut {
              "name": "ms",
              "spec": "2.0.0",
              "to": "node_modules/tap-mocha-reporter/node_modules/ms",
              "type": "prod",
            },
          },
          "location": "node_modules/tap-mocha-reporter/node_modules/debug",
          "name": "debug",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap-mocha-reporter/node_modules/debug",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "version": "2.6.9",
        },
        "diff" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap-mocha-reporter",
              "name": "diff",
              "spec": "^1.3.2",
              "type": "prod",
            },
          },
          "location": "node_modules/tap-mocha-reporter/node_modules/diff",
          "name": "diff",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap-mocha-reporter/node_modules/diff",
          "resolved": "https://registry.npmjs.org/diff/-/diff-1.4.0.tgz",
          "version": "1.4.0",
        },
        "ms" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tap-mocha-reporter/node_modules/debug",
              "name": "ms",
              "spec": "2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/tap-mocha-reporter/node_modules/ms",
          "name": "ms",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap-mocha-reporter/node_modules/ms",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "version": "2.0.0",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "tap-mocha-reporter",
          "spec": "^5.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "color-support" => EdgeOut {
          "name": "color-support",
          "spec": "^1.1.0",
          "to": "node_modules/color-support",
          "type": "prod",
        },
        "debug" => EdgeOut {
          "name": "debug",
          "spec": "^2.1.3",
          "to": "node_modules/tap-mocha-reporter/node_modules/debug",
          "type": "prod",
        },
        "diff" => EdgeOut {
          "name": "diff",
          "spec": "^1.3.2",
          "to": "node_modules/tap-mocha-reporter/node_modules/diff",
          "type": "prod",
        },
        "escape-string-regexp" => EdgeOut {
          "name": "escape-string-regexp",
          "spec": "^1.0.3",
          "to": "node_modules/escape-string-regexp",
          "type": "prod",
        },
        "glob" => EdgeOut {
          "name": "glob",
          "spec": "^7.0.5",
          "to": "node_modules/glob",
          "type": "prod",
        },
        "readable-stream" => EdgeOut {
          "name": "readable-stream",
          "spec": "^2.1.5",
          "to": "node_modules/readable-stream",
          "type": "optional",
        },
        "tap-parser" => EdgeOut {
          "name": "tap-parser",
          "spec": "^10.0.0",
          "to": "node_modules/tap-parser",
          "type": "prod",
        },
        "tap-yaml" => EdgeOut {
          "name": "tap-yaml",
          "spec": "^1.0.0",
          "to": "node_modules/tap-yaml",
          "type": "prod",
        },
        "unicode-length" => EdgeOut {
          "name": "unicode-length",
          "spec": "^1.0.0",
          "to": "node_modules/unicode-length",
          "type": "prod",
        },
      },
      "location": "node_modules/tap-mocha-reporter",
      "name": "tap-mocha-reporter",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap-mocha-reporter",
      "resolved": "https://registry.npmjs.org/tap-mocha-reporter/-/tap-mocha-reporter-5.0.0.tgz",
      "version": "5.0.0",
    },
    "tap-parser" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap-mocha-reporter",
          "name": "tap-parser",
          "spec": "^10.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "events-to-array" => EdgeOut {
          "name": "events-to-array",
          "spec": "^1.0.1",
          "to": "node_modules/events-to-array",
          "type": "prod",
        },
        "minipass" => EdgeOut {
          "name": "minipass",
          "spec": "^3.0.0",
          "to": "node_modules/minipass",
          "type": "prod",
        },
        "tap-yaml" => EdgeOut {
          "name": "tap-yaml",
          "spec": "^1.0.0",
          "to": "node_modules/tap-yaml",
          "type": "prod",
        },
      },
      "location": "node_modules/tap-parser",
      "name": "tap-parser",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap-parser",
      "resolved": "https://registry.npmjs.org/tap-parser/-/tap-parser-10.0.1.tgz",
      "version": "10.0.1",
    },
    "tap-yaml" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap-mocha-reporter",
          "name": "tap-yaml",
          "spec": "^1.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/tap-parser",
          "name": "tap-yaml",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "yaml" => EdgeOut {
          "name": "yaml",
          "spec": "^1.5.0",
          "to": "node_modules/yaml",
          "type": "prod",
        },
      },
      "location": "node_modules/tap-yaml",
      "name": "tap-yaml",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tap-yaml",
      "resolved": "https://registry.npmjs.org/tap-yaml/-/tap-yaml-1.0.0.tgz",
      "version": "1.0.0",
    },
    "tcompare" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "tcompare",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "diff-frag" => EdgeOut {
          "name": "diff-frag",
          "spec": "^1.0.1",
          "to": "node_modules/diff-frag",
          "type": "prod",
        },
      },
      "location": "node_modules/tcompare",
      "name": "tcompare",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tcompare",
      "resolved": "https://registry.npmjs.org/tcompare/-/tcompare-3.0.4.tgz",
      "version": "3.0.4",
    },
    "test-exclude" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "test-exclude",
          "spec": "^5.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "glob" => EdgeOut {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "prod",
        },
        "minimatch" => EdgeOut {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "read-pkg-up" => EdgeOut {
          "name": "read-pkg-up",
          "spec": "^4.0.0",
          "to": "node_modules/read-pkg-up",
          "type": "prod",
        },
        "require-main-filename" => EdgeOut {
          "name": "require-main-filename",
          "spec": "^2.0.0",
          "to": "node_modules/require-main-filename",
          "type": "prod",
        },
      },
      "location": "node_modules/test-exclude",
      "name": "test-exclude",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/test-exclude",
      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-5.2.3.tgz",
      "version": "5.2.3",
    },
    "to-fast-properties" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/@babel/types",
          "name": "to-fast-properties",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/to-fast-properties",
      "name": "to-fast-properties",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/to-fast-properties",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
      "version": "2.0.0",
    },
    "to-regex-range" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/fill-range",
          "name": "to-regex-range",
          "spec": "^5.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-number" => EdgeOut {
          "name": "is-number",
          "spec": "^7.0.0",
          "to": "node_modules/is-number",
          "type": "prod",
        },
      },
      "location": "node_modules/to-regex-range",
      "name": "to-regex-range",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/to-regex-range",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "version": "5.0.1",
    },
    "tough-cookie" => ArboristNode {
      "children": Map {
        "punycode" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/tough-cookie",
              "name": "punycode",
              "spec": "^1.4.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tough-cookie/node_modules/punycode",
          "name": "punycode",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tough-cookie/node_modules/punycode",
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
          "version": "1.4.1",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "tough-cookie",
          "spec": "~2.4.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "psl" => EdgeOut {
          "name": "psl",
          "spec": "^1.1.24",
          "to": "node_modules/psl",
          "type": "prod",
        },
        "punycode" => EdgeOut {
          "name": "punycode",
          "spec": "^1.4.1",
          "to": "node_modules/tough-cookie/node_modules/punycode",
          "type": "prod",
        },
      },
      "location": "node_modules/tough-cookie",
      "name": "tough-cookie",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tough-cookie",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.4.3.tgz",
      "version": "2.4.3",
    },
    "trivial-deferred" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "trivial-deferred",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/trivial-deferred",
      "name": "trivial-deferred",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/trivial-deferred",
      "resolved": "https://registry.npmjs.org/trivial-deferred/-/trivial-deferred-1.0.1.tgz",
      "version": "1.0.1",
    },
    "ts-node" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "ts-node",
          "spec": "^8.5.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "arg" => EdgeOut {
          "name": "arg",
          "spec": "^4.1.0",
          "to": "node_modules/arg",
          "type": "prod",
        },
        "diff" => EdgeOut {
          "name": "diff",
          "spec": "^4.0.1",
          "to": "node_modules/diff",
          "type": "prod",
        },
        "make-error" => EdgeOut {
          "name": "make-error",
          "spec": "^1.1.1",
          "to": "node_modules/make-error",
          "type": "prod",
        },
        "source-map-support" => EdgeOut {
          "name": "source-map-support",
          "spec": "^0.5.6",
          "to": "node_modules/source-map-support",
          "type": "prod",
        },
        "yn" => EdgeOut {
          "name": "yn",
          "spec": "^3.0.0",
          "to": "node_modules/yn",
          "type": "prod",
        },
      },
      "location": "node_modules/ts-node",
      "name": "ts-node",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/ts-node",
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-8.5.4.tgz",
      "version": "8.5.4",
    },
    "tunnel-agent" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/request",
          "name": "tunnel-agent",
          "spec": "^0.6.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "safe-buffer" => EdgeOut {
          "name": "safe-buffer",
          "spec": "^5.0.1",
          "to": "node_modules/safe-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/tunnel-agent",
      "name": "tunnel-agent",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tunnel-agent",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "version": "0.6.0",
    },
    "tweetnacl" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/bcrypt-pbkdf",
          "name": "tweetnacl",
          "spec": "^0.14.3",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/sshpk",
          "name": "tweetnacl",
          "spec": "~0.14.0",
          "type": "prod",
        },
      },
      "location": "node_modules/tweetnacl",
      "name": "tweetnacl",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/tweetnacl",
      "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
      "version": "0.14.5",
    },
    "typedarray-to-buffer" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/write-file-atomic",
          "name": "typedarray-to-buffer",
          "spec": "^3.1.5",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-typedarray" => EdgeOut {
          "name": "is-typedarray",
          "spec": "^1.0.0",
          "to": "node_modules/is-typedarray",
          "type": "prod",
        },
      },
      "location": "node_modules/typedarray-to-buffer",
      "name": "typedarray-to-buffer",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/typedarray-to-buffer",
      "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
      "version": "3.1.5",
    },
    "typescript" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "typescript",
          "spec": "^3.7.2",
          "type": "prod",
        },
      },
      "location": "node_modules/typescript",
      "name": "typescript",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/typescript",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-3.7.4.tgz",
      "version": "3.7.4",
    },
    "uglify-js" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/handlebars",
          "name": "uglify-js",
          "spec": "^3.1.4",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "commander" => EdgeOut {
          "name": "commander",
          "spec": "~2.20.3",
          "to": "node_modules/commander",
          "type": "prod",
        },
        "source-map" => EdgeOut {
          "name": "source-map",
          "spec": "~0.6.1",
          "to": "node_modules/source-map",
          "type": "prod",
        },
      },
      "location": "node_modules/uglify-js",
      "name": "uglify-js",
      "optional": true,
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/uglify-js",
      "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.7.3.tgz",
      "version": "3.7.3",
    },
    "unicode-length" => ArboristNode {
      "children": Map {
        "ansi-regex" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/unicode-length/node_modules/strip-ansi",
              "name": "ansi-regex",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/unicode-length/node_modules/ansi-regex",
          "name": "ansi-regex",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/unicode-length/node_modules/ansi-regex",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "version": "2.1.1",
        },
        "punycode" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/unicode-length",
              "name": "punycode",
              "spec": "^1.3.2",
              "type": "prod",
            },
          },
          "location": "node_modules/unicode-length/node_modules/punycode",
          "name": "punycode",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/unicode-length/node_modules/punycode",
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
          "version": "1.4.1",
        },
        "strip-ansi" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/unicode-length",
              "name": "strip-ansi",
              "spec": "^3.0.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-regex" => EdgeOut {
              "name": "ansi-regex",
              "spec": "^2.0.0",
              "to": "node_modules/unicode-length/node_modules/ansi-regex",
              "type": "prod",
            },
          },
          "location": "node_modules/unicode-length/node_modules/strip-ansi",
          "name": "strip-ansi",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/unicode-length/node_modules/strip-ansi",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "version": "3.0.1",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap-mocha-reporter",
          "name": "unicode-length",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "punycode" => EdgeOut {
          "name": "punycode",
          "spec": "^1.3.2",
          "to": "node_modules/unicode-length/node_modules/punycode",
          "type": "prod",
        },
        "strip-ansi" => EdgeOut {
          "name": "strip-ansi",
          "spec": "^3.0.1",
          "to": "node_modules/unicode-length/node_modules/strip-ansi",
          "type": "prod",
        },
      },
      "location": "node_modules/unicode-length",
      "name": "unicode-length",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/unicode-length",
      "resolved": "https://registry.npmjs.org/unicode-length/-/unicode-length-1.0.3.tgz",
      "version": "1.0.3",
    },
    "uri-js" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/ajv",
          "name": "uri-js",
          "spec": "^4.2.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "punycode" => EdgeOut {
          "name": "punycode",
          "spec": "^2.1.0",
          "to": "node_modules/punycode",
          "type": "prod",
        },
      },
      "location": "node_modules/uri-js",
      "name": "uri-js",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/uri-js",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
      "version": "4.2.2",
    },
    "util-deprecate" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/readable-stream",
          "name": "util-deprecate",
          "spec": "~1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/util-deprecate",
      "name": "util-deprecate",
      "optional": true,
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/util-deprecate",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "version": "1.0.2",
    },
    "uuid" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/istanbul-lib-processinfo",
          "name": "uuid",
          "spec": "^3.3.2",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "uuid",
          "spec": "^3.3.2",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/request",
          "name": "uuid",
          "spec": "^3.3.2",
          "type": "prod",
        },
      },
      "location": "node_modules/uuid",
      "name": "uuid",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/uuid",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.3.3.tgz",
      "version": "3.3.3",
    },
    "validate-npm-package-license" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/normalize-package-data",
          "name": "validate-npm-package-license",
          "spec": "^3.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "spdx-correct" => EdgeOut {
          "name": "spdx-correct",
          "spec": "^3.0.0",
          "to": "node_modules/spdx-correct",
          "type": "prod",
        },
        "spdx-expression-parse" => EdgeOut {
          "name": "spdx-expression-parse",
          "spec": "^3.0.0",
          "to": "node_modules/spdx-expression-parse",
          "type": "prod",
        },
      },
      "location": "node_modules/validate-npm-package-license",
      "name": "validate-npm-package-license",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/validate-npm-package-license",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "version": "3.0.4",
    },
    "verror" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/jsprim",
          "name": "verror",
          "spec": "1.10.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "assert-plus" => EdgeOut {
          "name": "assert-plus",
          "spec": "^1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
        "core-util-is" => EdgeOut {
          "name": "core-util-is",
          "spec": "1.0.2",
          "to": "node_modules/core-util-is",
          "type": "prod",
        },
        "extsprintf" => EdgeOut {
          "name": "extsprintf",
          "spec": "^1.2.0",
          "to": "node_modules/extsprintf",
          "type": "prod",
        },
      },
      "location": "node_modules/verror",
      "name": "verror",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/verror",
      "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
      "version": "1.10.0",
    },
    "vlq" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/flow-remove-types",
          "name": "vlq",
          "spec": "^0.2.1",
          "type": "prod",
        },
      },
      "location": "node_modules/vlq",
      "name": "vlq",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/vlq",
      "resolved": "https://registry.npmjs.org/vlq/-/vlq-0.2.3.tgz",
      "version": "0.2.3",
    },
    "which" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "which",
          "spec": "^2.0.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "isexe" => EdgeOut {
          "name": "isexe",
          "spec": "^2.0.0",
          "to": "node_modules/isexe",
          "type": "prod",
        },
      },
      "location": "node_modules/which",
      "name": "which",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/which",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "version": "2.0.2",
    },
    "which-module" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/yargs",
          "name": "which-module",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/which-module",
      "name": "which-module",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/which-module",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
      "version": "2.0.0",
    },
    "wordwrap" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/optimist",
          "name": "wordwrap",
          "spec": "~0.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/wordwrap",
      "name": "wordwrap",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/wordwrap",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.3.tgz",
      "version": "0.0.3",
    },
    "wrap-ansi" => ArboristNode {
      "children": Map {
        "ansi-regex" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/wrap-ansi/node_modules/strip-ansi",
              "name": "ansi-regex",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/wrap-ansi/node_modules/ansi-regex",
          "name": "ansi-regex",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/wrap-ansi/node_modules/ansi-regex",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "version": "2.1.1",
        },
        "is-fullwidth-code-point" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/wrap-ansi/node_modules/string-width",
              "name": "is-fullwidth-code-point",
              "spec": "^1.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "number-is-nan" => EdgeOut {
              "name": "number-is-nan",
              "spec": "^1.0.0",
              "to": "node_modules/number-is-nan",
              "type": "prod",
            },
          },
          "location": "node_modules/wrap-ansi/node_modules/is-fullwidth-code-point",
          "name": "is-fullwidth-code-point",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/wrap-ansi/node_modules/is-fullwidth-code-point",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
          "version": "1.0.0",
        },
        "string-width" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/wrap-ansi",
              "name": "string-width",
              "spec": "^1.0.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "code-point-at" => EdgeOut {
              "name": "code-point-at",
              "spec": "^1.0.0",
              "to": "node_modules/code-point-at",
              "type": "prod",
            },
            "is-fullwidth-code-point" => EdgeOut {
              "name": "is-fullwidth-code-point",
              "spec": "^1.0.0",
              "to": "node_modules/wrap-ansi/node_modules/is-fullwidth-code-point",
              "type": "prod",
            },
            "strip-ansi" => EdgeOut {
              "name": "strip-ansi",
              "spec": "^3.0.0",
              "to": "node_modules/wrap-ansi/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/wrap-ansi/node_modules/string-width",
          "name": "string-width",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/wrap-ansi/node_modules/string-width",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
          "version": "1.0.2",
        },
        "strip-ansi" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/wrap-ansi",
              "name": "strip-ansi",
              "spec": "^3.0.1",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/wrap-ansi/node_modules/string-width",
              "name": "strip-ansi",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-regex" => EdgeOut {
              "name": "ansi-regex",
              "spec": "^2.0.0",
              "to": "node_modules/wrap-ansi/node_modules/ansi-regex",
              "type": "prod",
            },
          },
          "location": "node_modules/wrap-ansi/node_modules/strip-ansi",
          "name": "strip-ansi",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/wrap-ansi/node_modules/strip-ansi",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "version": "3.0.1",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/cliui",
          "name": "wrap-ansi",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "string-width" => EdgeOut {
          "name": "string-width",
          "spec": "^1.0.1",
          "to": "node_modules/wrap-ansi/node_modules/string-width",
          "type": "prod",
        },
        "strip-ansi" => EdgeOut {
          "name": "strip-ansi",
          "spec": "^3.0.1",
          "to": "node_modules/wrap-ansi/node_modules/strip-ansi",
          "type": "prod",
        },
      },
      "location": "node_modules/wrap-ansi",
      "name": "wrap-ansi",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/wrap-ansi",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
      "version": "2.1.0",
    },
    "wrappy" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/wrappy",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
    "write-file-atomic" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "write-file-atomic",
          "spec": "^3.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "imurmurhash" => EdgeOut {
          "name": "imurmurhash",
          "spec": "^0.1.4",
          "to": "node_modules/imurmurhash",
          "type": "prod",
        },
        "is-typedarray" => EdgeOut {
          "name": "is-typedarray",
          "spec": "^1.0.0",
          "to": "node_modules/is-typedarray",
          "type": "prod",
        },
        "signal-exit" => EdgeOut {
          "name": "signal-exit",
          "spec": "^3.0.2",
          "to": "node_modules/signal-exit",
          "type": "prod",
        },
        "typedarray-to-buffer" => EdgeOut {
          "name": "typedarray-to-buffer",
          "spec": "^3.1.5",
          "to": "node_modules/typedarray-to-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/write-file-atomic",
      "name": "write-file-atomic",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/write-file-atomic",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.1.tgz",
      "version": "3.0.1",
    },
    "y18n" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/yargs",
          "name": "y18n",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/y18n",
      "name": "y18n",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/y18n",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.0.tgz",
      "version": "4.0.0",
    },
    "yallist" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/lru-cache",
          "name": "yallist",
          "spec": "^2.1.2",
          "type": "prod",
        },
      },
      "location": "node_modules/yallist",
      "name": "yallist",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/yallist",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
      "version": "2.1.2",
    },
    "yaml" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap-yaml",
          "name": "yaml",
          "spec": "^1.5.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/runtime" => EdgeOut {
          "name": "@babel/runtime",
          "spec": "^7.6.3",
          "to": "node_modules/@babel/runtime",
          "type": "prod",
        },
      },
      "location": "node_modules/yaml",
      "name": "yaml",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/yaml",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.7.2.tgz",
      "version": "1.7.2",
    },
    "yapool" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tap",
          "name": "yapool",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/yapool",
      "name": "yapool",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/yapool",
      "resolved": "https://registry.npmjs.org/yapool/-/yapool-1.0.0.tgz",
      "version": "1.0.0",
    },
    "yargs" => ArboristNode {
      "children": Map {
        "ansi-regex" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/yargs/node_modules/strip-ansi",
              "name": "ansi-regex",
              "spec": "^4.1.0",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/ansi-regex",
          "name": "ansi-regex",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/yargs/node_modules/ansi-regex",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
          "version": "4.1.0",
        },
        "cliui" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/yargs",
              "name": "cliui",
              "spec": "^5.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "string-width" => EdgeOut {
              "name": "string-width",
              "spec": "^3.1.0",
              "to": "node_modules/yargs/node_modules/string-width",
              "type": "prod",
            },
            "strip-ansi" => EdgeOut {
              "name": "strip-ansi",
              "spec": "^5.2.0",
              "to": "node_modules/yargs/node_modules/strip-ansi",
              "type": "prod",
            },
            "wrap-ansi" => EdgeOut {
              "name": "wrap-ansi",
              "spec": "^5.1.0",
              "to": "node_modules/yargs/node_modules/wrap-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/cliui",
          "name": "cliui",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/yargs/node_modules/cliui",
          "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
          "version": "5.0.0",
        },
        "string-width" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/yargs",
              "name": "string-width",
              "spec": "^3.0.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/yargs/node_modules/cliui",
              "name": "string-width",
              "spec": "^3.1.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/yargs/node_modules/wrap-ansi",
              "name": "string-width",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "emoji-regex" => EdgeOut {
              "name": "emoji-regex",
              "spec": "^7.0.1",
              "to": "node_modules/emoji-regex",
              "type": "prod",
            },
            "is-fullwidth-code-point" => EdgeOut {
              "name": "is-fullwidth-code-point",
              "spec": "^2.0.0",
              "to": "node_modules/is-fullwidth-code-point",
              "type": "prod",
            },
            "strip-ansi" => EdgeOut {
              "name": "strip-ansi",
              "spec": "^5.1.0",
              "to": "node_modules/yargs/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/string-width",
          "name": "string-width",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/yargs/node_modules/string-width",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
          "version": "3.1.0",
        },
        "strip-ansi" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/yargs/node_modules/cliui",
              "name": "strip-ansi",
              "spec": "^5.2.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/yargs/node_modules/string-width",
              "name": "strip-ansi",
              "spec": "^5.1.0",
              "type": "prod",
            },
            EdgeIn {
              "from": "node_modules/yargs/node_modules/wrap-ansi",
              "name": "strip-ansi",
              "spec": "^5.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-regex" => EdgeOut {
              "name": "ansi-regex",
              "spec": "^4.1.0",
              "to": "node_modules/yargs/node_modules/ansi-regex",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/strip-ansi",
          "name": "strip-ansi",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/yargs/node_modules/strip-ansi",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
          "version": "5.2.0",
        },
        "wrap-ansi" => ArboristNode {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/yargs/node_modules/cliui",
              "name": "wrap-ansi",
              "spec": "^5.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-styles" => EdgeOut {
              "name": "ansi-styles",
              "spec": "^3.2.0",
              "to": "node_modules/ansi-styles",
              "type": "prod",
            },
            "string-width" => EdgeOut {
              "name": "string-width",
              "spec": "^3.0.0",
              "to": "node_modules/yargs/node_modules/string-width",
              "type": "prod",
            },
            "strip-ansi" => EdgeOut {
              "name": "strip-ansi",
              "spec": "^5.0.0",
              "to": "node_modules/yargs/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/wrap-ansi",
          "name": "wrap-ansi",
          "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/yargs/node_modules/wrap-ansi",
          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
          "version": "5.1.0",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "yargs",
          "spec": "^13.2.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "cliui" => EdgeOut {
          "name": "cliui",
          "spec": "^5.0.0",
          "to": "node_modules/yargs/node_modules/cliui",
          "type": "prod",
        },
        "find-up" => EdgeOut {
          "name": "find-up",
          "spec": "^3.0.0",
          "to": "node_modules/find-up",
          "type": "prod",
        },
        "get-caller-file" => EdgeOut {
          "name": "get-caller-file",
          "spec": "^2.0.1",
          "to": "node_modules/get-caller-file",
          "type": "prod",
        },
        "require-directory" => EdgeOut {
          "name": "require-directory",
          "spec": "^2.1.1",
          "to": "node_modules/require-directory",
          "type": "prod",
        },
        "require-main-filename" => EdgeOut {
          "name": "require-main-filename",
          "spec": "^2.0.0",
          "to": "node_modules/require-main-filename",
          "type": "prod",
        },
        "set-blocking" => EdgeOut {
          "name": "set-blocking",
          "spec": "^2.0.0",
          "to": "node_modules/set-blocking",
          "type": "prod",
        },
        "string-width" => EdgeOut {
          "name": "string-width",
          "spec": "^3.0.0",
          "to": "node_modules/yargs/node_modules/string-width",
          "type": "prod",
        },
        "which-module" => EdgeOut {
          "name": "which-module",
          "spec": "^2.0.0",
          "to": "node_modules/which-module",
          "type": "prod",
        },
        "y18n" => EdgeOut {
          "name": "y18n",
          "spec": "^4.0.0",
          "to": "node_modules/y18n",
          "type": "prod",
        },
        "yargs-parser" => EdgeOut {
          "name": "yargs-parser",
          "spec": "^13.1.1",
          "to": "node_modules/yargs-parser",
          "type": "prod",
        },
      },
      "location": "node_modules/yargs",
      "name": "yargs",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/yargs",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-13.3.0.tgz",
      "version": "13.3.0",
    },
    "yargs-parser" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/nyc",
          "name": "yargs-parser",
          "spec": "^13.0.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/yargs",
          "name": "yargs-parser",
          "spec": "^13.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "camelcase" => EdgeOut {
          "name": "camelcase",
          "spec": "^5.0.0",
          "to": "node_modules/camelcase",
          "type": "prod",
        },
        "decamelize" => EdgeOut {
          "name": "decamelize",
          "spec": "^1.2.0",
          "to": "node_modules/decamelize",
          "type": "prod",
        },
      },
      "location": "node_modules/yargs-parser",
      "name": "yargs-parser",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/yargs-parser",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-13.1.1.tgz",
      "version": "13.1.1",
    },
    "yn" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/ts-node",
          "name": "yn",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/yn",
      "name": "yn",
      "path": "{CWD}/test/fixtures/two-bundled-deps/node_modules/yn",
      "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
      "version": "3.1.1",
    },
  },
  "edgesOut": Map {
    "@isaacs/testing-bundledeps" => EdgeOut {
      "name": "@isaacs/testing-bundledeps",
      "spec": "^1.0.0",
      "to": "node_modules/@isaacs/testing-bundledeps",
      "type": "prod",
    },
    "abbrev" => EdgeOut {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "node_modules/abbrev",
      "type": "optional",
    },
    "tap" => EdgeOut {
      "name": "tap",
      "spec": "^14.10.5",
      "to": "node_modules/tap",
      "type": "dev",
    },
  },
  "location": "",
  "name": "two-bundled-deps",
  "path": "{CWD}/test/fixtures/two-bundled-deps",
  "version": "1.0.0",
}
`

exports[`test/arborist/load-virtual.js TAP load a tree with a v1 lockfile > virtual tree with v1 shronk 1`] = `
ArboristNode {
  "children": Map {
    "once" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "once",
          "spec": "^1.4.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "path": "{CWD}/test/fixtures/old-package-lock/node_modules/once",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "version": "1.4.0",
    },
    "wrappy" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "path": "{CWD}/test/fixtures/old-package-lock/node_modules/wrappy",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
  },
  "edgesOut": Map {
    "once" => EdgeOut {
      "name": "once",
      "spec": "^1.4.0",
      "to": "node_modules/once",
      "type": "prod",
    },
  },
  "location": "",
  "name": "old-package-lock",
  "path": "{CWD}/test/fixtures/old-package-lock",
}
`

exports[`test/arborist/load-virtual.js TAP load a tree with an empty root, no pj, and a lockfile > virtual tree with no deps 1`] = `
ArboristNode {
  "location": "",
  "name": "empty-with-shrinkwrap-no-pj",
  "path": "{CWD}/test/fixtures/empty-with-shrinkwrap-no-pj",
}
`

exports[`test/arborist/load-virtual.js TAP load a tree with an empty root, pj, and a lockfile > virtual tree with no deps 1`] = `
ArboristNode {
  "location": "",
  "name": "empty-with-shrinkwrap",
  "path": "{CWD}/test/fixtures/empty-with-shrinkwrap",
}
`

exports[`test/arborist/load-virtual.js TAP load a tree with optional and dev dependencies > loaded virtual tree with dev/optional deps 1`] = `
ArboristNode {
  "children": Map {
    "diff-frag" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/tcompare",
          "name": "diff-frag",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/diff-frag",
      "name": "diff-frag",
      "path": "{CWD}/test/fixtures/dev-deps/node_modules/diff-frag",
      "resolved": "https://registry.npmjs.org/diff-frag/-/diff-frag-1.0.1.tgz",
      "version": "1.0.1",
    },
    "inflight" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "inflight",
          "spec": "^1.0.6",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "once" => EdgeOut {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "optional": true,
      "path": "{CWD}/test/fixtures/dev-deps/node_modules/inflight",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "version": "1.0.6",
    },
    "once" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "once",
          "spec": "^1.4.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "path": "{CWD}/test/fixtures/dev-deps/node_modules/once",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "version": "1.4.0",
    },
    "tcompare" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "tcompare",
          "spec": "^4.0.1",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "diff-frag" => EdgeOut {
          "name": "diff-frag",
          "spec": "^1.0.1",
          "to": "node_modules/diff-frag",
          "type": "prod",
        },
      },
      "location": "node_modules/tcompare",
      "name": "tcompare",
      "path": "{CWD}/test/fixtures/dev-deps/node_modules/tcompare",
      "resolved": "https://registry.npmjs.org/tcompare/-/tcompare-4.0.1.tgz",
      "version": "4.0.1",
    },
    "wrappy" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "path": "{CWD}/test/fixtures/dev-deps/node_modules/wrappy",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
  },
  "edgesOut": Map {
    "inflight" => EdgeOut {
      "name": "inflight",
      "spec": "^1.0.6",
      "to": "node_modules/inflight",
      "type": "optional",
    },
    "once" => EdgeOut {
      "name": "once",
      "spec": "^1.4.0",
      "to": "node_modules/once",
      "type": "prod",
    },
    "tcompare" => EdgeOut {
      "name": "tcompare",
      "spec": "^4.0.1",
      "to": "node_modules/tcompare",
      "type": "dev",
    },
  },
  "location": "",
  "name": "dev-deps",
  "path": "{CWD}/test/fixtures/dev-deps",
  "version": "1.0.0",
}
`

exports[`test/arborist/load-virtual.js TAP load a tree with some links to nodes outside of node_modules > loaded virtual tree with fsParents 1`] = `
ArboristNode {
  "children": Map {
    "@scope/x" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "@scope/x",
          "spec": "*",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/x",
      "name": "@scope/x",
      "path": "{CWD}/test/fixtures/pnpm/node_modules/@scope/x",
      "realpath": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
      "resolved": "file:../.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
      "target": ArboristNode {
        "location": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
      },
      "version": "1.0.0",
    },
    "a" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "a",
          "spec": "*",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/pnpm/node_modules/a",
      "realpath": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
      "resolved": "file:.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
      "target": ArboristNode {
        "location": "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
      },
      "version": "1.0.0",
    },
  },
  "edgesOut": Map {
    "@scope/x" => EdgeOut {
      "name": "@scope/x",
      "spec": "*",
      "to": "node_modules/@scope/x",
      "type": "prod",
    },
    "a" => EdgeOut {
      "name": "a",
      "spec": "*",
      "to": "node_modules/a",
      "type": "prod",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "children": Map {
        "@scope/x" => ArboristNode {
          "edgesOut": Map {
            "a" => EdgeOut {
              "name": "a",
              "spec": "*",
              "to": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/a",
              "type": "prod",
            },
            "b" => EdgeOut {
              "name": "b",
              "spec": "*",
              "to": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/b",
              "type": "prod",
            },
            "c" => EdgeOut {
              "name": "c",
              "spec": "*",
              "to": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/c",
              "type": "prod",
            },
          },
          "location": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
          "name": "@scope/x",
          "path": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
          "version": "1.0.0",
        },
        "a" => ArboristLink {
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
              "name": "a",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/a",
          "name": "a",
          "path": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/a",
          "realpath": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
          "resolved": "file:../../../../a/1.0.0/node_modules/a",
          "target": ArboristNode {
            "edgesOut": Map {
              "b" => EdgeOut {
                "name": "b",
                "spec": "*",
                "to": "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/b",
                "type": "prod",
              },
              "c" => EdgeOut {
                "name": "c",
                "spec": "*",
                "to": "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/c",
                "type": "prod",
              },
            },
            "location": "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
            "name": "a",
            "path": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
            "version": "1.0.0",
          },
          "version": "1.0.0",
        },
        "b" => ArboristLink {
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
              "name": "b",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/b",
          "name": "b",
          "path": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/b",
          "realpath": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/b",
          "resolved": "file:../../../../b/1.0.0/node_modules/b",
          "target": ArboristNode {
            "edgesOut": Map {
              "c" => EdgeOut {
                "name": "c",
                "spec": "*",
                "to": "node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/c",
                "type": "prod",
              },
            },
            "location": "node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/b",
            "name": "b",
            "path": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/b",
            "version": "1.0.0",
          },
          "version": "1.0.0",
        },
        "c" => ArboristLink {
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
              "name": "c",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/c",
          "name": "c",
          "path": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/c",
          "realpath": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c",
          "resolved": "file:../../../../c/1.0.0/node_modules/c",
          "target": ArboristNode {
            "edgesOut": Map {
              "@scope/x" => EdgeOut {
                "name": "@scope/x",
                "spec": "*",
                "to": "node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/@scope/x",
                "type": "prod",
              },
            },
            "location": "node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c",
            "name": "c",
            "path": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c",
            "version": "1.0.0",
          },
          "version": "1.0.0",
        },
      },
      "location": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0",
      "name": "1.0.0",
      "path": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0",
    },
    ArboristNode {
      "children": Map {
        "a" => ArboristNode {
          "location": "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
        },
        "b" => ArboristLink {
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
              "name": "b",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/b",
          "name": "b",
          "path": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/b",
          "realpath": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/b",
          "resolved": "file:../../../b/1.0.0/node_modules/b",
          "target": ArboristNode {
            "location": "node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/b",
          },
          "version": "1.0.0",
        },
        "c" => ArboristLink {
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
              "name": "c",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/c",
          "name": "c",
          "path": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/c",
          "realpath": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c",
          "resolved": "file:../../../c/1.0.0/node_modules/c",
          "target": ArboristNode {
            "location": "node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c",
          },
          "version": "1.0.0",
        },
      },
      "location": "node_modules/.pnpm/registry.npmjs.org/a/1.0.0",
      "name": "1.0.0",
      "path": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0",
    },
    ArboristNode {
      "children": Map {
        "b" => ArboristNode {
          "location": "node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/b",
        },
        "c" => ArboristLink {
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/b",
              "name": "c",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/c",
          "name": "c",
          "path": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/c",
          "realpath": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c",
          "resolved": "file:../../../c/1.0.0/node_modules/c",
          "target": ArboristNode {
            "location": "node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c",
          },
          "version": "1.0.0",
        },
      },
      "location": "node_modules/.pnpm/registry.npmjs.org/b/1.0.0",
      "name": "1.0.0",
      "path": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/b/1.0.0",
    },
    ArboristNode {
      "children": Map {
        "@scope/x" => ArboristLink {
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c",
              "name": "@scope/x",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/@scope/x",
          "name": "@scope/x",
          "path": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/@scope/x",
          "realpath": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
          "resolved": "file:../../../../@scope/x/1.0.0/node_modules/@scope/x",
          "target": ArboristNode {
            "location": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
          },
          "version": "1.0.0",
        },
        "c" => ArboristNode {
          "location": "node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c",
        },
      },
      "location": "node_modules/.pnpm/registry.npmjs.org/c/1.0.0",
      "name": "1.0.0",
      "path": "{CWD}/test/fixtures/pnpm/node_modules/.pnpm/registry.npmjs.org/c/1.0.0",
    },
  },
  "location": "",
  "name": "pnpm",
  "packageName": "pnpm-root",
  "path": "{CWD}/test/fixtures/pnpm",
  "version": "1.0.0",
}
`

exports[`test/arborist/load-virtual.js TAP load from cwd > loaded virtual tree from fixture 1`] = `
ArboristNode {
  "children": Map {
    "abbrev" => ArboristNode {
      "children": Map {
        "@scope/name" => ArboristNode {
          "children": Map {
            "@otherscope/othername" => ArboristNode {
              "edgesIn": Set {
                EdgeIn {
                  "error": "INVALID",
                  "from": "node_modules/abbrev/node_modules/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "1.2.3",
                  "type": "prod",
                },
              },
              "location": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "name": "@otherscope/othername",
              "path": "{CWD}/test/fixtures/install-types/node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "resolved": "fake resolved value",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => EdgeOut {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "1.2.3",
              "to": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "type": "prod",
            },
            "a-thing-which-is-not-here" => EdgeOut {
              "error": "MISSING",
              "name": "a-thing-which-is-not-here",
              "spec": "2.4.5",
              "to": null,
              "type": "prod",
            },
          },
          "location": "node_modules/abbrev/node_modules/@scope/name",
          "name": "@scope/name",
          "path": "{CWD}/test/fixtures/install-types/node_modules/abbrev/node_modules/@scope/name",
        },
      },
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "path": "{CWD}/test/fixtures/install-types/node_modules/abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "balanced-match" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/balanced-match",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "version": "1.0.0",
    },
    "brace-expansion" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => EdgeOut {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => EdgeOut {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "node_modules/concat-map",
          "type": "prod",
        },
      },
      "location": "node_modules/brace-expansion",
      "name": "brace-expansion",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/brace-expansion",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "version": "1.1.11",
    },
    "bundler" => ArboristNode {
      "children": Map {
        "a" => ArboristNode {
          "bundled": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/bundler",
              "name": "a",
              "spec": "*",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => EdgeOut {
              "name": "b",
              "spec": "*",
              "to": "node_modules/bundler/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/a",
          "name": "a",
          "path": "{CWD}/test/fixtures/install-types/node_modules/bundler/node_modules/a",
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
          "version": "1.2.3",
        },
        "b" => ArboristNode {
          "bundled": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/bundler/node_modules/a",
              "name": "b",
              "spec": "*",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => EdgeOut {
              "name": "c",
              "spec": "*",
              "to": "node_modules/bundler/node_modules/c",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/b",
          "name": "b",
          "path": "{CWD}/test/fixtures/install-types/node_modules/bundler/node_modules/b",
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
          "version": "1.2.3",
        },
        "c" => ArboristNode {
          "bundled": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/bundler/node_modules/b",
              "name": "c",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/c",
          "name": "c",
          "path": "{CWD}/test/fixtures/install-types/node_modules/bundler/node_modules/c",
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
          "version": "1.2.3",
        },
      },
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "bundler",
          "spec": "1.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => EdgeOut {
          "name": "a",
          "spec": "*",
          "to": "node_modules/bundler/node_modules/a",
          "type": "prod",
        },
      },
      "location": "node_modules/bundler",
      "name": "bundler",
      "path": "{CWD}/test/fixtures/install-types/node_modules/bundler",
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
      "version": "1.2.3",
    },
    "concat-map" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/concat-map",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "version": "0.0.1",
    },
    "fs.realpath" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/fs.realpath",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "version": "1.0.0",
    },
    "full-git-url" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "full-git-url",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "type": "prod",
        },
      },
      "location": "node_modules/full-git-url",
      "name": "full-git-url",
      "path": "{CWD}/test/fixtures/install-types/node_modules/full-git-url",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "ghshort",
          "spec": "github:isaacs/abbrev-js",
          "type": "prod",
        },
      },
      "location": "node_modules/ghshort",
      "name": "ghshort",
      "path": "{CWD}/test/fixtures/install-types/node_modules/ghshort",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => ArboristNode {
      "location": "node_modules/ghtgz",
      "name": "ghtgz",
      "path": "{CWD}/test/fixtures/install-types/node_modules/ghtgz",
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => EdgeOut {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => EdgeOut {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "node_modules/inflight",
          "type": "prod",
        },
        "inherits" => EdgeOut {
          "name": "inherits",
          "spec": "2",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => EdgeOut {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "once" => EdgeOut {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => EdgeOut {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "node_modules/glob",
      "name": "glob",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/glob",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
      "version": "7.1.4",
    },
    "inflight" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => EdgeOut {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/inflight",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "version": "1.0.6",
    },
    "inherits" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "node_modules/inherits",
      "name": "inherits",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/inherits",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "version": "2.0.4",
    },
    "minimatch" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => EdgeOut {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/minimatch",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "version": "3.0.4",
    },
    "old" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "old",
          "spec": "npm:abbrev@^1.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/old",
      "name": "old",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types/node_modules/old",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
      "version": "1.0.3",
    },
    "once" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "path": "{CWD}/test/fixtures/install-types/node_modules/once",
      "resolved": "file:{CWD}/test/fixtures/install-types/once-1.4.0.tgz",
      "version": "1.4.0",
    },
    "path-is-absolute" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/path-is-absolute",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "version": "1.0.1",
    },
    "pinned" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "pinned",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/pinned",
      "name": "pinned",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types/node_modules/pinned",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "really-bad-invalid" => ArboristNode {
      "location": "node_modules/really-bad-invalid",
      "name": "really-bad-invalid",
      "path": "{CWD}/test/fixtures/install-types/node_modules/really-bad-invalid",
    },
    "reg" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "reg",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/reg",
      "name": "reg",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types/node_modules/reg",
      "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "remote" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "remote",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/remote",
      "name": "remote",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types/node_modules/remote",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "rimraf" => ArboristNode {
      "edgesOut": Map {
        "glob" => EdgeOut {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "optional",
        },
      },
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "path": "{CWD}/test/fixtures/install-types/node_modules/rimraf",
      "resolved": "file:{CWD}/test/fixtures/install-types/rimraf-2.6.3.tgz",
      "version": "2.6.3",
    },
    "symlink" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "symlink",
          "spec": "file:./abbrev-link-target",
          "type": "prod",
        },
      },
      "location": "node_modules/symlink",
      "name": "symlink",
      "packageName": "abbrev-link-target",
      "path": "{CWD}/test/fixtures/install-types/node_modules/symlink",
      "realpath": "{CWD}/test/fixtures/install-types/abbrev-link-target",
      "resolved": "file:../abbrev-link-target",
      "target": ArboristNode {
        "location": "abbrev-link-target",
      },
      "version": "1.1.1",
    },
    "symlink-in-tree" => ArboristLink {
      "location": "node_modules/symlink-in-tree",
      "name": "symlink-in-tree",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types/node_modules/symlink-in-tree",
      "realpath": "{CWD}/test/fixtures/install-types/node_modules/abbrev",
      "resolved": "file:abbrev",
      "target": ArboristNode {
        "location": "node_modules/abbrev",
      },
      "version": "1.1.1",
    },
    "tarball" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "tarball",
          "spec": "file:abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/tarball",
      "name": "tarball",
      "path": "{CWD}/test/fixtures/install-types/node_modules/tarball",
      "resolved": "file:{CWD}/test/fixtures/install-types/abbrev-1.1.1.tgz",
    },
    "tarball-no-integrity" => ArboristNode {
      "dev": true,
      "location": "node_modules/tarball-no-integrity",
      "name": "tarball-no-integrity",
      "path": "{CWD}/test/fixtures/install-types/node_modules/tarball-no-integrity",
      "resolved": "file:{CWD}/test/fixtures/install-types/abbrev-1.1.1.tgz",
    },
    "unhosted-git" => ArboristNode {
      "location": "node_modules/unhosted-git",
      "name": "unhosted-git",
      "path": "{CWD}/test/fixtures/install-types/node_modules/unhosted-git",
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "path": "{CWD}/test/fixtures/install-types/node_modules/wrappy",
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
  },
  "edgesOut": Map {
    "abbrev" => EdgeOut {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "bundler" => EdgeOut {
      "name": "bundler",
      "spec": "1.2.3",
      "to": "node_modules/bundler",
      "type": "prod",
    },
    "full-git-url" => EdgeOut {
      "name": "full-git-url",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "node_modules/full-git-url",
      "type": "prod",
    },
    "ghshort" => EdgeOut {
      "name": "ghshort",
      "spec": "github:isaacs/abbrev-js",
      "to": "node_modules/ghshort",
      "type": "prod",
    },
    "old" => EdgeOut {
      "name": "old",
      "spec": "npm:abbrev@^1.0.3",
      "to": "node_modules/old",
      "type": "prod",
    },
    "pinned" => EdgeOut {
      "name": "pinned",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/pinned",
      "type": "prod",
    },
    "reg" => EdgeOut {
      "name": "reg",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/reg",
      "type": "prod",
    },
    "remote" => EdgeOut {
      "name": "remote",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "node_modules/remote",
      "type": "prod",
    },
    "symlink" => EdgeOut {
      "name": "symlink",
      "spec": "file:./abbrev-link-target",
      "to": "node_modules/symlink",
      "type": "prod",
    },
    "tarball" => EdgeOut {
      "name": "tarball",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "node_modules/tarball",
      "type": "prod",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "edgesOut": Map {
        "tap" => EdgeOut {
          "error": "MISSING",
          "name": "tap",
          "spec": "^14.4.1",
          "to": null,
          "type": "dev",
        },
      },
      "location": "abbrev-link-target",
      "name": "abbrev-link-target",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types/abbrev-link-target",
      "version": "1.1.1",
    },
  },
  "location": "",
  "name": "install-types",
  "packageName": "a",
  "path": "{CWD}/test/fixtures/install-types",
  "version": "1.2.3",
}
`

exports[`test/arborist/load-virtual.js TAP load from fixture > loaded virtual tree from fixture 1`] = `
ArboristNode {
  "children": Map {
    "abbrev" => ArboristNode {
      "children": Map {
        "@scope/name" => ArboristNode {
          "children": Map {
            "@otherscope/othername" => ArboristNode {
              "edgesIn": Set {
                EdgeIn {
                  "error": "INVALID",
                  "from": "node_modules/abbrev/node_modules/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "1.2.3",
                  "type": "prod",
                },
              },
              "location": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "name": "@otherscope/othername",
              "path": "{CWD}/test/fixtures/install-types/node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "resolved": "fake resolved value",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => EdgeOut {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "1.2.3",
              "to": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "type": "prod",
            },
            "a-thing-which-is-not-here" => EdgeOut {
              "error": "MISSING",
              "name": "a-thing-which-is-not-here",
              "spec": "2.4.5",
              "to": null,
              "type": "prod",
            },
          },
          "location": "node_modules/abbrev/node_modules/@scope/name",
          "name": "@scope/name",
          "path": "{CWD}/test/fixtures/install-types/node_modules/abbrev/node_modules/@scope/name",
        },
      },
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "path": "{CWD}/test/fixtures/install-types/node_modules/abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "balanced-match" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/balanced-match",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "version": "1.0.0",
    },
    "brace-expansion" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => EdgeOut {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => EdgeOut {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "node_modules/concat-map",
          "type": "prod",
        },
      },
      "location": "node_modules/brace-expansion",
      "name": "brace-expansion",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/brace-expansion",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "version": "1.1.11",
    },
    "bundler" => ArboristNode {
      "children": Map {
        "a" => ArboristNode {
          "bundled": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/bundler",
              "name": "a",
              "spec": "*",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => EdgeOut {
              "name": "b",
              "spec": "*",
              "to": "node_modules/bundler/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/a",
          "name": "a",
          "path": "{CWD}/test/fixtures/install-types/node_modules/bundler/node_modules/a",
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
          "version": "1.2.3",
        },
        "b" => ArboristNode {
          "bundled": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/bundler/node_modules/a",
              "name": "b",
              "spec": "*",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => EdgeOut {
              "name": "c",
              "spec": "*",
              "to": "node_modules/bundler/node_modules/c",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/b",
          "name": "b",
          "path": "{CWD}/test/fixtures/install-types/node_modules/bundler/node_modules/b",
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
          "version": "1.2.3",
        },
        "c" => ArboristNode {
          "bundled": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/bundler/node_modules/b",
              "name": "c",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/c",
          "name": "c",
          "path": "{CWD}/test/fixtures/install-types/node_modules/bundler/node_modules/c",
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
          "version": "1.2.3",
        },
      },
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "bundler",
          "spec": "1.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => EdgeOut {
          "name": "a",
          "spec": "*",
          "to": "node_modules/bundler/node_modules/a",
          "type": "prod",
        },
      },
      "location": "node_modules/bundler",
      "name": "bundler",
      "path": "{CWD}/test/fixtures/install-types/node_modules/bundler",
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
      "version": "1.2.3",
    },
    "concat-map" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/concat-map",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "version": "0.0.1",
    },
    "fs.realpath" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/fs.realpath",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "version": "1.0.0",
    },
    "full-git-url" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "full-git-url",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "type": "prod",
        },
      },
      "location": "node_modules/full-git-url",
      "name": "full-git-url",
      "path": "{CWD}/test/fixtures/install-types/node_modules/full-git-url",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "ghshort",
          "spec": "github:isaacs/abbrev-js",
          "type": "prod",
        },
      },
      "location": "node_modules/ghshort",
      "name": "ghshort",
      "path": "{CWD}/test/fixtures/install-types/node_modules/ghshort",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => ArboristNode {
      "location": "node_modules/ghtgz",
      "name": "ghtgz",
      "path": "{CWD}/test/fixtures/install-types/node_modules/ghtgz",
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => EdgeOut {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => EdgeOut {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "node_modules/inflight",
          "type": "prod",
        },
        "inherits" => EdgeOut {
          "name": "inherits",
          "spec": "2",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => EdgeOut {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "once" => EdgeOut {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => EdgeOut {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "node_modules/glob",
      "name": "glob",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/glob",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
      "version": "7.1.4",
    },
    "inflight" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => EdgeOut {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/inflight",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "version": "1.0.6",
    },
    "inherits" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "node_modules/inherits",
      "name": "inherits",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/inherits",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "version": "2.0.4",
    },
    "minimatch" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => EdgeOut {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/minimatch",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "version": "3.0.4",
    },
    "old" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "old",
          "spec": "npm:abbrev@^1.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/old",
      "name": "old",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types/node_modules/old",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
      "version": "1.0.3",
    },
    "once" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "path": "{CWD}/test/fixtures/install-types/node_modules/once",
      "resolved": "file:{CWD}/test/fixtures/install-types/once-1.4.0.tgz",
      "version": "1.4.0",
    },
    "path-is-absolute" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types/node_modules/path-is-absolute",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "version": "1.0.1",
    },
    "pinned" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "pinned",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/pinned",
      "name": "pinned",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types/node_modules/pinned",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "really-bad-invalid" => ArboristNode {
      "location": "node_modules/really-bad-invalid",
      "name": "really-bad-invalid",
      "path": "{CWD}/test/fixtures/install-types/node_modules/really-bad-invalid",
    },
    "reg" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "reg",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/reg",
      "name": "reg",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types/node_modules/reg",
      "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "remote" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "remote",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/remote",
      "name": "remote",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types/node_modules/remote",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "rimraf" => ArboristNode {
      "edgesOut": Map {
        "glob" => EdgeOut {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "optional",
        },
      },
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "path": "{CWD}/test/fixtures/install-types/node_modules/rimraf",
      "resolved": "file:{CWD}/test/fixtures/install-types/rimraf-2.6.3.tgz",
      "version": "2.6.3",
    },
    "symlink" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "symlink",
          "spec": "file:./abbrev-link-target",
          "type": "prod",
        },
      },
      "location": "node_modules/symlink",
      "name": "symlink",
      "packageName": "abbrev-link-target",
      "path": "{CWD}/test/fixtures/install-types/node_modules/symlink",
      "realpath": "{CWD}/test/fixtures/install-types/abbrev-link-target",
      "resolved": "file:../abbrev-link-target",
      "target": ArboristNode {
        "location": "abbrev-link-target",
      },
      "version": "1.1.1",
    },
    "symlink-in-tree" => ArboristLink {
      "location": "node_modules/symlink-in-tree",
      "name": "symlink-in-tree",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types/node_modules/symlink-in-tree",
      "realpath": "{CWD}/test/fixtures/install-types/node_modules/abbrev",
      "resolved": "file:abbrev",
      "target": ArboristNode {
        "location": "node_modules/abbrev",
      },
      "version": "1.1.1",
    },
    "tarball" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "tarball",
          "spec": "file:abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/tarball",
      "name": "tarball",
      "path": "{CWD}/test/fixtures/install-types/node_modules/tarball",
      "resolved": "file:{CWD}/test/fixtures/install-types/abbrev-1.1.1.tgz",
    },
    "tarball-no-integrity" => ArboristNode {
      "dev": true,
      "location": "node_modules/tarball-no-integrity",
      "name": "tarball-no-integrity",
      "path": "{CWD}/test/fixtures/install-types/node_modules/tarball-no-integrity",
      "resolved": "file:{CWD}/test/fixtures/install-types/abbrev-1.1.1.tgz",
    },
    "unhosted-git" => ArboristNode {
      "location": "node_modules/unhosted-git",
      "name": "unhosted-git",
      "path": "{CWD}/test/fixtures/install-types/node_modules/unhosted-git",
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "path": "{CWD}/test/fixtures/install-types/node_modules/wrappy",
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
  },
  "edgesOut": Map {
    "abbrev" => EdgeOut {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "bundler" => EdgeOut {
      "name": "bundler",
      "spec": "1.2.3",
      "to": "node_modules/bundler",
      "type": "prod",
    },
    "full-git-url" => EdgeOut {
      "name": "full-git-url",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "node_modules/full-git-url",
      "type": "prod",
    },
    "ghshort" => EdgeOut {
      "name": "ghshort",
      "spec": "github:isaacs/abbrev-js",
      "to": "node_modules/ghshort",
      "type": "prod",
    },
    "old" => EdgeOut {
      "name": "old",
      "spec": "npm:abbrev@^1.0.3",
      "to": "node_modules/old",
      "type": "prod",
    },
    "pinned" => EdgeOut {
      "name": "pinned",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/pinned",
      "type": "prod",
    },
    "reg" => EdgeOut {
      "name": "reg",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/reg",
      "type": "prod",
    },
    "remote" => EdgeOut {
      "name": "remote",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "node_modules/remote",
      "type": "prod",
    },
    "symlink" => EdgeOut {
      "name": "symlink",
      "spec": "file:./abbrev-link-target",
      "to": "node_modules/symlink",
      "type": "prod",
    },
    "tarball" => EdgeOut {
      "name": "tarball",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "node_modules/tarball",
      "type": "prod",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "edgesOut": Map {
        "tap" => EdgeOut {
          "error": "MISSING",
          "name": "tap",
          "spec": "^14.4.1",
          "to": null,
          "type": "dev",
        },
      },
      "location": "abbrev-link-target",
      "name": "abbrev-link-target",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types/abbrev-link-target",
      "version": "1.1.1",
    },
  },
  "location": "",
  "name": "install-types",
  "packageName": "a",
  "path": "{CWD}/test/fixtures/install-types",
  "version": "1.2.3",
}
`

exports[`test/arborist/load-virtual.js TAP load from npm-shrinkwrap.json > loaded virtual tree from fixture 1`] = `
ArboristNode {
  "children": Map {
    "abbrev" => ArboristNode {
      "children": Map {
        "@scope/name" => ArboristNode {
          "children": Map {
            "@otherscope/othername" => ArboristNode {
              "edgesIn": Set {
                EdgeIn {
                  "error": "INVALID",
                  "from": "node_modules/abbrev/node_modules/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "1.2.3",
                  "type": "prod",
                },
              },
              "location": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "name": "@otherscope/othername",
              "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "resolved": "fake resolved value",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => EdgeOut {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "1.2.3",
              "to": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "type": "prod",
            },
            "a-thing-which-is-not-here" => EdgeOut {
              "error": "MISSING",
              "name": "a-thing-which-is-not-here",
              "spec": "2.4.5",
              "to": null,
              "type": "prod",
            },
          },
          "location": "node_modules/abbrev/node_modules/@scope/name",
          "name": "@scope/name",
          "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/abbrev/node_modules/@scope/name",
        },
      },
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "balanced-match" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/balanced-match",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "version": "1.0.0",
    },
    "brace-expansion" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => EdgeOut {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => EdgeOut {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "node_modules/concat-map",
          "type": "prod",
        },
      },
      "location": "node_modules/brace-expansion",
      "name": "brace-expansion",
      "optional": true,
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/brace-expansion",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "version": "1.1.11",
    },
    "bundler" => ArboristNode {
      "children": Map {
        "a" => ArboristNode {
          "bundled": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/bundler",
              "name": "a",
              "spec": "*",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => EdgeOut {
              "name": "b",
              "spec": "*",
              "to": "node_modules/bundler/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/a",
          "name": "a",
          "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/bundler/node_modules/a",
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
          "version": "1.2.3",
        },
        "b" => ArboristNode {
          "bundled": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/bundler/node_modules/a",
              "name": "b",
              "spec": "*",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => EdgeOut {
              "name": "c",
              "spec": "*",
              "to": "node_modules/bundler/node_modules/c",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/b",
          "name": "b",
          "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/bundler/node_modules/b",
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
          "version": "1.2.3",
        },
        "c" => ArboristNode {
          "bundled": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/bundler/node_modules/b",
              "name": "c",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/c",
          "name": "c",
          "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/bundler/node_modules/c",
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
          "version": "1.2.3",
        },
      },
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "bundler",
          "spec": "1.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => EdgeOut {
          "name": "a",
          "spec": "*",
          "to": "node_modules/bundler/node_modules/a",
          "type": "prod",
        },
      },
      "location": "node_modules/bundler",
      "name": "bundler",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/bundler",
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
      "version": "1.2.3",
    },
    "concat-map" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "optional": true,
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/concat-map",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "version": "0.0.1",
    },
    "fs.realpath" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/fs.realpath",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "version": "1.0.0",
    },
    "full-git-url" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "full-git-url",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "type": "prod",
        },
      },
      "location": "node_modules/full-git-url",
      "name": "full-git-url",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/full-git-url",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "ghshort",
          "spec": "github:isaacs/abbrev-js",
          "type": "prod",
        },
      },
      "location": "node_modules/ghshort",
      "name": "ghshort",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/ghshort",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => ArboristNode {
      "location": "node_modules/ghtgz",
      "name": "ghtgz",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/ghtgz",
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => EdgeOut {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => EdgeOut {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "node_modules/inflight",
          "type": "prod",
        },
        "inherits" => EdgeOut {
          "name": "inherits",
          "spec": "2",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => EdgeOut {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "once" => EdgeOut {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => EdgeOut {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "node_modules/glob",
      "name": "glob",
      "optional": true,
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/glob",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
      "version": "7.1.4",
    },
    "inflight" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => EdgeOut {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "optional": true,
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/inflight",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "version": "1.0.6",
    },
    "inherits" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "node_modules/inherits",
      "name": "inherits",
      "optional": true,
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/inherits",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "version": "2.0.4",
    },
    "minimatch" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => EdgeOut {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "optional": true,
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/minimatch",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "version": "3.0.4",
    },
    "old" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "old",
          "spec": "npm:abbrev@^1.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/old",
      "name": "old",
      "packageName": "abbrev",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/old",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
      "version": "1.0.3",
    },
    "once" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/once",
      "resolved": "file:{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/once-1.4.0.tgz",
      "version": "1.4.0",
    },
    "path-is-absolute" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/path-is-absolute",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "version": "1.0.1",
    },
    "pinned" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "pinned",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/pinned",
      "name": "pinned",
      "packageName": "abbrev",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/pinned",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "really-bad-invalid" => ArboristNode {
      "location": "node_modules/really-bad-invalid",
      "name": "really-bad-invalid",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/really-bad-invalid",
    },
    "reg" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "reg",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/reg",
      "name": "reg",
      "packageName": "abbrev",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/reg",
      "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "remote" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "remote",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/remote",
      "name": "remote",
      "packageName": "abbrev",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/remote",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "rimraf" => ArboristNode {
      "edgesOut": Map {
        "glob" => EdgeOut {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "optional",
        },
      },
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/rimraf",
      "resolved": "file:{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/rimraf-2.6.3.tgz",
      "version": "2.6.3",
    },
    "symlink" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "symlink",
          "spec": "file:./abbrev-link-target",
          "type": "prod",
        },
      },
      "location": "node_modules/symlink",
      "name": "symlink",
      "packageName": "abbrev-link-target",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/symlink",
      "realpath": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/abbrev-link-target",
      "resolved": "file:../abbrev-link-target",
      "target": ArboristNode {
        "location": "abbrev-link-target",
      },
    },
    "symlink-in-tree" => ArboristLink {
      "location": "node_modules/symlink-in-tree",
      "name": "symlink-in-tree",
      "packageName": "abbrev",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/symlink-in-tree",
      "realpath": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/abbrev",
      "resolved": "file:abbrev",
      "target": ArboristNode {
        "location": "node_modules/abbrev",
      },
      "version": "1.1.1",
    },
    "tarball" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "tarball",
          "spec": "file:abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/tarball",
      "name": "tarball",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/tarball",
      "resolved": "file:{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/abbrev-1.1.1.tgz",
    },
    "tarball-no-integrity" => ArboristNode {
      "dev": true,
      "location": "node_modules/tarball-no-integrity",
      "name": "tarball-no-integrity",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/tarball-no-integrity",
      "resolved": "file:{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/abbrev-1.1.1.tgz",
    },
    "unhosted-git" => ArboristNode {
      "location": "node_modules/unhosted-git",
      "name": "unhosted-git",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/unhosted-git",
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/node_modules/wrappy",
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
  },
  "edgesOut": Map {
    "abbrev" => EdgeOut {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "bundler" => EdgeOut {
      "name": "bundler",
      "spec": "1.2.3",
      "to": "node_modules/bundler",
      "type": "prod",
    },
    "full-git-url" => EdgeOut {
      "name": "full-git-url",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "node_modules/full-git-url",
      "type": "prod",
    },
    "ghshort" => EdgeOut {
      "name": "ghshort",
      "spec": "github:isaacs/abbrev-js",
      "to": "node_modules/ghshort",
      "type": "prod",
    },
    "old" => EdgeOut {
      "name": "old",
      "spec": "npm:abbrev@^1.0.3",
      "to": "node_modules/old",
      "type": "prod",
    },
    "pinned" => EdgeOut {
      "name": "pinned",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/pinned",
      "type": "prod",
    },
    "reg" => EdgeOut {
      "name": "reg",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/reg",
      "type": "prod",
    },
    "remote" => EdgeOut {
      "name": "remote",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "node_modules/remote",
      "type": "prod",
    },
    "symlink" => EdgeOut {
      "name": "symlink",
      "spec": "file:./abbrev-link-target",
      "to": "node_modules/symlink",
      "type": "prod",
    },
    "tarball" => EdgeOut {
      "name": "tarball",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "node_modules/tarball",
      "type": "prod",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "location": "abbrev-link-target",
      "name": "abbrev-link-target",
      "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json/abbrev-link-target",
    },
  },
  "location": "",
  "name": "load-virtual-load-from-npm-shrinkwrap-json",
  "packageName": "a",
  "path": "{CWD}/test/arborist/load-virtual-load-from-npm-shrinkwrap-json",
  "version": "1.2.3",
}
`

exports[`test/arborist/load-virtual.js TAP load without a root package.json is fine > loaded virtual no package json 1`] = `
ArboristNode {
  "children": Map {
    "abbrev" => ArboristNode {
      "children": Map {
        "@scope/name" => ArboristNode {
          "children": Map {
            "@otherscope/othername" => ArboristNode {
              "edgesIn": Set {
                EdgeIn {
                  "error": "INVALID",
                  "from": "node_modules/abbrev/node_modules/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "1.2.3",
                  "type": "prod",
                },
              },
              "location": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "name": "@otherscope/othername",
              "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "resolved": "fake resolved value",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => EdgeOut {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "1.2.3",
              "to": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "type": "prod",
            },
            "a-thing-which-is-not-here" => EdgeOut {
              "error": "MISSING",
              "name": "a-thing-which-is-not-here",
              "spec": "2.4.5",
              "to": null,
              "type": "prod",
            },
          },
          "location": "node_modules/abbrev/node_modules/@scope/name",
          "name": "@scope/name",
          "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/abbrev/node_modules/@scope/name",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "balanced-match" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/balanced-match",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "version": "1.0.0",
    },
    "brace-expansion" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => EdgeOut {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => EdgeOut {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "node_modules/concat-map",
          "type": "prod",
        },
      },
      "location": "node_modules/brace-expansion",
      "name": "brace-expansion",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/brace-expansion",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "version": "1.1.11",
    },
    "bundler" => ArboristNode {
      "children": Map {
        "a" => ArboristNode {
          "bundled": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/bundler",
              "name": "a",
              "spec": "*",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => EdgeOut {
              "name": "b",
              "spec": "*",
              "to": "node_modules/bundler/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/a",
          "name": "a",
          "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/bundler/node_modules/a",
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
          "version": "1.2.3",
        },
        "b" => ArboristNode {
          "bundled": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/bundler/node_modules/a",
              "name": "b",
              "spec": "*",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => EdgeOut {
              "name": "c",
              "spec": "*",
              "to": "node_modules/bundler/node_modules/c",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/b",
          "name": "b",
          "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/bundler/node_modules/b",
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
          "version": "1.2.3",
        },
        "c" => ArboristNode {
          "bundled": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/bundler/node_modules/b",
              "name": "c",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/c",
          "name": "c",
          "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/bundler/node_modules/c",
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
          "version": "1.2.3",
        },
      },
      "edgesOut": Map {
        "a" => EdgeOut {
          "name": "a",
          "spec": "*",
          "to": "node_modules/bundler/node_modules/a",
          "type": "prod",
        },
      },
      "location": "node_modules/bundler",
      "name": "bundler",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/bundler",
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
      "version": "1.2.3",
    },
    "concat-map" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/concat-map",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "version": "0.0.1",
    },
    "fs.realpath" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/fs.realpath",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "version": "1.0.0",
    },
    "full-git-url" => ArboristNode {
      "location": "node_modules/full-git-url",
      "name": "full-git-url",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/full-git-url",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => ArboristNode {
      "location": "node_modules/ghshort",
      "name": "ghshort",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/ghshort",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => ArboristNode {
      "location": "node_modules/ghtgz",
      "name": "ghtgz",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/ghtgz",
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => EdgeOut {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => EdgeOut {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "node_modules/inflight",
          "type": "prod",
        },
        "inherits" => EdgeOut {
          "name": "inherits",
          "spec": "2",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => EdgeOut {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "once" => EdgeOut {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => EdgeOut {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "node_modules/glob",
      "name": "glob",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/glob",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
      "version": "7.1.4",
    },
    "inflight" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => EdgeOut {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/inflight",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "version": "1.0.6",
    },
    "inherits" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "node_modules/inherits",
      "name": "inherits",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/inherits",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "version": "2.0.4",
    },
    "minimatch" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => EdgeOut {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/minimatch",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "version": "3.0.4",
    },
    "old" => ArboristNode {
      "location": "node_modules/old",
      "name": "old",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/old",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
      "version": "1.0.3",
    },
    "once" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/once",
      "resolved": "file:{CWD}/test/fixtures/install-types-sw-only/once-1.4.0.tgz",
      "version": "1.4.0",
    },
    "path-is-absolute" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/path-is-absolute",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "version": "1.0.1",
    },
    "pinned" => ArboristNode {
      "location": "node_modules/pinned",
      "name": "pinned",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/pinned",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "really-bad-invalid" => ArboristNode {
      "location": "node_modules/really-bad-invalid",
      "name": "really-bad-invalid",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/really-bad-invalid",
    },
    "reg" => ArboristNode {
      "location": "node_modules/reg",
      "name": "reg",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/reg",
      "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "remote" => ArboristNode {
      "location": "node_modules/remote",
      "name": "remote",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/remote",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "rimraf" => ArboristNode {
      "edgesOut": Map {
        "glob" => EdgeOut {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "optional",
        },
      },
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/rimraf",
      "resolved": "file:{CWD}/test/fixtures/install-types-sw-only/rimraf-2.6.3.tgz",
      "version": "2.6.3",
    },
    "symlink" => ArboristLink {
      "location": "node_modules/symlink",
      "name": "symlink",
      "packageName": "abbrev-link-target",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/symlink",
      "realpath": "{CWD}/test/fixtures/install-types-sw-only/abbrev-link-target",
      "resolved": "file:../abbrev-link-target",
      "target": ArboristNode {
        "location": "abbrev-link-target",
      },
    },
    "symlink-in-tree" => ArboristLink {
      "location": "node_modules/symlink-in-tree",
      "name": "symlink-in-tree",
      "packageName": "abbrev",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/symlink-in-tree",
      "realpath": "{CWD}/test/fixtures/install-types-sw-only/node_modules/abbrev",
      "resolved": "file:abbrev",
      "target": ArboristNode {
        "location": "node_modules/abbrev",
      },
      "version": "1.1.1",
    },
    "tarball" => ArboristNode {
      "dev": true,
      "location": "node_modules/tarball",
      "name": "tarball",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/tarball",
      "resolved": "file:{CWD}/test/fixtures/install-types-sw-only/abbrev-1.1.1.tgz",
    },
    "tarball-no-integrity" => ArboristNode {
      "dev": true,
      "location": "node_modules/tarball-no-integrity",
      "name": "tarball-no-integrity",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/tarball-no-integrity",
      "resolved": "file:{CWD}/test/fixtures/install-types-sw-only/abbrev-1.1.1.tgz",
    },
    "unhosted-git" => ArboristNode {
      "location": "node_modules/unhosted-git",
      "name": "unhosted-git",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/unhosted-git",
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "path": "{CWD}/test/fixtures/install-types-sw-only/node_modules/wrappy",
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "location": "abbrev-link-target",
      "name": "abbrev-link-target",
      "path": "{CWD}/test/fixtures/install-types-sw-only/abbrev-link-target",
    },
  },
  "location": "",
  "name": "install-types-sw-only",
  "packageName": "a",
  "path": "{CWD}/test/fixtures/install-types-sw-only",
  "version": "1.2.3",
}
`

exports[`test/arborist/load-virtual.js TAP tree with link deps of link deps > expect resolving Promise 1`] = `
ArboristNode {
  "children": Map {
    "app" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "app",
          "spec": "file:./app",
          "type": "prod",
        },
      },
      "location": "node_modules/app",
      "name": "app",
      "path": "{CWD}/test/fixtures/cli-750/node_modules/app",
      "realpath": "{CWD}/test/fixtures/cli-750/app",
      "resolved": "file:../app",
      "target": ArboristNode {
        "location": "app",
      },
    },
    "lib" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "app",
          "name": "lib",
          "spec": "file:../lib",
          "type": "prod",
        },
      },
      "location": "node_modules/lib",
      "name": "lib",
      "path": "{CWD}/test/fixtures/cli-750/node_modules/lib",
      "realpath": "{CWD}/test/fixtures/cli-750/lib",
      "resolved": "file:../lib",
      "target": ArboristNode {
        "location": "lib",
      },
    },
  },
  "edgesOut": Map {
    "app" => EdgeOut {
      "name": "app",
      "spec": "file:./app",
      "to": "node_modules/app",
      "type": "prod",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "edgesOut": Map {
        "lib" => EdgeOut {
          "name": "lib",
          "spec": "file:../lib",
          "to": "node_modules/lib",
          "type": "prod",
        },
      },
      "location": "app",
      "name": "app",
      "path": "{CWD}/test/fixtures/cli-750/app",
    },
    ArboristNode {
      "location": "lib",
      "name": "lib",
      "path": "{CWD}/test/fixtures/cli-750/lib",
    },
  },
  "location": "",
  "name": "cli-750",
  "packageName": "monorepo",
  "path": "{CWD}/test/fixtures/cli-750",
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load a simple example > virtual tree with multiple bundles 1`] = `
ArboristNode {
  "children": Map {
    "a" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-simple-virtual/node_modules/a",
      "realpath": "{CWD}/test/fixtures/workspaces-simple-virtual/a",
      "resolved": "file:../a",
      "target": ArboristNode {
        "location": "a",
      },
      "version": "1.0.0",
    },
    "b" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "b",
          "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/b",
          "type": "workspace",
        },
        EdgeIn {
          "from": "a",
          "name": "b",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "path": "{CWD}/test/fixtures/workspaces-simple-virtual/node_modules/b",
      "realpath": "{CWD}/test/fixtures/workspaces-simple-virtual/b",
      "resolved": "file:../b",
      "target": ArboristNode {
        "location": "b",
      },
      "version": "1.0.0",
    },
  },
  "edgesOut": Map {
    "a" => EdgeOut {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
    "b" => EdgeOut {
      "name": "b",
      "spec": "file:{CWD}/test/fixtures/workspaces-simple-virtual/b",
      "to": "node_modules/b",
      "type": "workspace",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "edgesOut": Map {
        "b" => EdgeOut {
          "name": "b",
          "spec": "^1.0.0",
          "to": "node_modules/b",
          "type": "prod",
        },
      },
      "location": "a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-simple-virtual/a",
      "version": "1.0.0",
    },
    ArboristNode {
      "location": "b",
      "name": "b",
      "path": "{CWD}/test/fixtures/workspaces-simple-virtual/b",
      "version": "1.0.0",
    },
  },
  "location": "",
  "name": "workspaces-simple-virtual",
  "packageName": "workspace-simple",
  "path": "{CWD}/test/fixtures/workspaces-simple-virtual",
  "workspaces": Map {
    "a" => "a",
    "b" => "b",
  },
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load conflicting dep versions example > virtual tree with resolved conflicting dependencies 1`] = `
ArboristNode {
  "children": Map {
    "a" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/packages/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/node_modules/a",
      "realpath": "{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/packages/a",
      "resolved": "file:../packages/a",
      "target": ArboristNode {
        "location": "packages/a",
      },
      "version": "1.0.0",
    },
    "abbrev" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "path": "{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/node_modules/abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "b" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "b",
          "spec": "file:{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/packages/b",
          "type": "workspace",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "path": "{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/node_modules/b",
      "realpath": "{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/packages/b",
      "resolved": "file:../packages/b",
      "target": ArboristNode {
        "location": "packages/b",
      },
      "version": "1.0.0",
    },
  },
  "edgesOut": Map {
    "a" => EdgeOut {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/packages/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
    "abbrev" => EdgeOut {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "b" => EdgeOut {
      "name": "b",
      "spec": "file:{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/packages/b",
      "to": "node_modules/b",
      "type": "workspace",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "children": Map {
        "abbrev" => ArboristNode {
          "edgesIn": Set {
            EdgeIn {
              "from": "packages/a",
              "name": "abbrev",
              "spec": "=1.0.4",
              "type": "prod",
            },
          },
          "location": "packages/a/node_modules/abbrev",
          "name": "abbrev",
          "path": "{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/packages/a/node_modules/abbrev",
          "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.4.tgz",
          "version": "1.0.4",
        },
      },
      "edgesOut": Map {
        "abbrev" => EdgeOut {
          "name": "abbrev",
          "spec": "=1.0.4",
          "to": "packages/a/node_modules/abbrev",
          "type": "prod",
        },
      },
      "location": "packages/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/packages/a",
      "version": "1.0.0",
    },
    ArboristNode {
      "children": Map {
        "abbrev" => ArboristNode {
          "edgesIn": Set {
            EdgeIn {
              "from": "packages/b",
              "name": "abbrev",
              "spec": "=1.1.0",
              "type": "prod",
            },
          },
          "location": "packages/b/node_modules/abbrev",
          "name": "abbrev",
          "path": "{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/packages/b/node_modules/abbrev",
          "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.0.tgz",
          "version": "1.1.0",
        },
      },
      "edgesOut": Map {
        "abbrev" => EdgeOut {
          "name": "abbrev",
          "spec": "=1.1.0",
          "to": "packages/b/node_modules/abbrev",
          "type": "prod",
        },
      },
      "location": "packages/b",
      "name": "b",
      "path": "{CWD}/test/fixtures/workspaces-conflicting-versions-virtual/packages/b",
      "version": "1.0.0",
    },
  },
  "location": "",
  "name": "workspaces-conflicting-versions-virtual",
  "packageName": "workspaces-conflicting-deps",
  "path": "{CWD}/test/fixtures/workspaces-conflicting-versions-virtual",
  "version": "1.0.0",
  "workspaces": Map {
    "a" => "packages/a",
    "b" => "packages/b",
  },
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load installed from registry on version not satisfied > virtual tree with deduped dep 1`] = `
ArboristNode {
  "children": Map {
    "a" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual/packages/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual/node_modules/a",
      "realpath": "{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual/packages/a",
      "resolved": "file:../packages/a",
      "target": ArboristNode {
        "location": "packages/a",
      },
      "version": "1.0.0",
    },
    "abbrev" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "abbrev",
          "spec": "file:{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual/packages/abbrev",
          "type": "workspace",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "path": "{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual/node_modules/abbrev",
      "realpath": "{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual/packages/abbrev",
      "resolved": "file:../packages/abbrev",
      "target": ArboristNode {
        "location": "packages/abbrev",
      },
      "version": "2.0.0",
    },
  },
  "edgesOut": Map {
    "a" => EdgeOut {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual/packages/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
    "abbrev" => EdgeOut {
      "name": "abbrev",
      "spec": "file:{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual/packages/abbrev",
      "to": "node_modules/abbrev",
      "type": "workspace",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "children": Map {
        "abbrev" => ArboristNode {
          "edgesIn": Set {
            EdgeIn {
              "from": "packages/a",
              "name": "abbrev",
              "spec": "=1.1.1",
              "type": "prod",
            },
          },
          "location": "packages/a/node_modules/abbrev",
          "name": "abbrev",
          "path": "{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual/packages/a/node_modules/abbrev",
          "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "version": "1.1.1",
        },
      },
      "edgesOut": Map {
        "abbrev" => EdgeOut {
          "name": "abbrev",
          "spec": "=1.1.1",
          "to": "packages/a/node_modules/abbrev",
          "type": "prod",
        },
      },
      "location": "packages/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual/packages/a",
      "version": "1.0.0",
    },
    ArboristNode {
      "location": "packages/abbrev",
      "name": "abbrev",
      "path": "{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual/packages/abbrev",
      "version": "2.0.0",
    },
  },
  "location": "",
  "name": "workspaces-version-unsatisfied-virtual",
  "packageName": "workspaces-version-unsatisfied",
  "path": "{CWD}/test/fixtures/workspaces-version-unsatisfied-virtual",
  "version": "1.0.0",
  "workspaces": Map {
    "a" => "packages/a",
    "abbrev" => "packages/abbrev",
  },
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load installed tree with ignored nested node_modules folders > virtual tree ignoring nested node_modules 1`] = `
ArboristNode {
  "children": Map {
    "a" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-ignore-nm-virtual/packages/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-ignore-nm-virtual/node_modules/a",
      "realpath": "{CWD}/test/fixtures/workspaces-ignore-nm-virtual/packages/a",
      "resolved": "file:../packages/a",
      "target": ArboristNode {
        "location": "packages/a",
      },
      "version": "1.0.0",
    },
  },
  "edgesOut": Map {
    "a" => EdgeOut {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-ignore-nm-virtual/packages/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "location": "packages/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-ignore-nm-virtual/packages/a",
      "version": "1.0.0",
    },
  },
  "location": "",
  "name": "workspaces-ignore-nm-virtual",
  "packageName": "workspace-ignore-nm",
  "path": "{CWD}/test/fixtures/workspaces-ignore-nm-virtual",
  "workspaces": Map {
    "a" => "packages/a",
  },
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load installed workspace with transitive dependencies > virtual tree with transitive deps 1`] = `
ArboristNode {
  "children": Map {
    "a" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-transitive-deps-virtual/packages/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-transitive-deps-virtual/node_modules/a",
      "realpath": "{CWD}/test/fixtures/workspaces-transitive-deps-virtual/packages/a",
      "resolved": "file:../packages/a",
      "target": ArboristNode {
        "location": "packages/a",
      },
      "version": "1.0.0",
    },
    "once" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "packages/a",
          "name": "once",
          "spec": "^1.4.0",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "wrappy" => EdgeOut {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "path": "{CWD}/test/fixtures/workspaces-transitive-deps-virtual/node_modules/once",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "version": "1.4.0",
    },
    "wrappy" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "path": "{CWD}/test/fixtures/workspaces-transitive-deps-virtual/node_modules/wrappy",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
  },
  "edgesOut": Map {
    "a" => EdgeOut {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-transitive-deps-virtual/packages/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "edgesOut": Map {
        "once" => EdgeOut {
          "name": "once",
          "spec": "^1.4.0",
          "to": "node_modules/once",
          "type": "dev",
        },
      },
      "location": "packages/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-transitive-deps-virtual/packages/a",
      "version": "1.0.0",
    },
  },
  "location": "",
  "name": "workspaces-transitive-deps-virtual",
  "packageName": "workspaces-transitive-deps",
  "path": "{CWD}/test/fixtures/workspaces-transitive-deps-virtual",
  "version": "1.0.0",
  "workspaces": Map {
    "a" => "packages/a",
  },
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load linked top level nested workspaces > virtual tree top level dep 1`] = `
ArboristNode {
  "children": Map {
    "a" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-top-level-link-virtual/packages/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-top-level-link-virtual/node_modules/a",
      "realpath": "{CWD}/test/fixtures/workspaces-top-level-link-virtual/packages/a",
      "resolved": "file:../packages/a",
      "target": ArboristNode {
        "location": "packages/a",
      },
      "version": "1.0.0",
    },
  },
  "edgesOut": Map {
    "a" => EdgeOut {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-top-level-link-virtual/packages/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "location": "packages/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-top-level-link-virtual/packages/a",
      "version": "1.0.0",
    },
  },
  "location": "",
  "name": "workspaces-top-level-link-virtual",
  "packageName": "workspaces-top-level-link",
  "path": "{CWD}/test/fixtures/workspaces-top-level-link-virtual",
  "version": "1.0.0",
  "workspaces": Map {
    "a" => "packages/a",
  },
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load prefer linking nested workspaces > virtual tree linking to local workspaces 1`] = `
ArboristNode {
  "children": Map {
    "a" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-prefer-linking-virtual/packages/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-prefer-linking-virtual/node_modules/a",
      "realpath": "{CWD}/test/fixtures/workspaces-prefer-linking-virtual/packages/a",
      "resolved": "file:../packages/a",
      "target": ArboristNode {
        "location": "packages/a",
      },
      "version": "1.0.0",
    },
    "abbrev" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "abbrev",
          "spec": "file:{CWD}/test/fixtures/workspaces-prefer-linking-virtual/packages/abbrev",
          "type": "workspace",
        },
        EdgeIn {
          "from": "packages/a",
          "name": "abbrev",
          "spec": "*",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "path": "{CWD}/test/fixtures/workspaces-prefer-linking-virtual/node_modules/abbrev",
      "realpath": "{CWD}/test/fixtures/workspaces-prefer-linking-virtual/packages/abbrev",
      "resolved": "file:../packages/abbrev",
      "target": ArboristNode {
        "location": "packages/abbrev",
      },
      "version": "2.0.0",
    },
  },
  "edgesOut": Map {
    "a" => EdgeOut {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-prefer-linking-virtual/packages/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
    "abbrev" => EdgeOut {
      "name": "abbrev",
      "spec": "file:{CWD}/test/fixtures/workspaces-prefer-linking-virtual/packages/abbrev",
      "to": "node_modules/abbrev",
      "type": "workspace",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "edgesOut": Map {
        "abbrev" => EdgeOut {
          "name": "abbrev",
          "spec": "*",
          "to": "node_modules/abbrev",
          "type": "prod",
        },
      },
      "location": "packages/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-prefer-linking-virtual/packages/a",
      "version": "1.0.0",
    },
    ArboristNode {
      "location": "packages/abbrev",
      "name": "abbrev",
      "path": "{CWD}/test/fixtures/workspaces-prefer-linking-virtual/packages/abbrev",
      "version": "2.0.0",
    },
  },
  "location": "",
  "name": "workspaces-prefer-linking-virtual",
  "packageName": "workspaces-prefer-linking",
  "path": "{CWD}/test/fixtures/workspaces-prefer-linking-virtual",
  "version": "1.0.0",
  "workspaces": Map {
    "a" => "packages/a",
    "abbrev" => "packages/abbrev",
  },
}
`

exports[`test/arborist/load-virtual.js TAP workspaces load shared dependencies example > virtual tree with shared dependencies 1`] = `
ArboristNode {
  "children": Map {
    "a" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-shared-deps-virtual/node_modules/a",
      "realpath": "{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/a",
      "resolved": "file:../packages/a",
      "target": ArboristNode {
        "location": "packages/a",
      },
      "version": "1.0.0",
    },
    "abbrev" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "packages/a",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
        EdgeIn {
          "from": "packages/b",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "path": "{CWD}/test/fixtures/workspaces-shared-deps-virtual/node_modules/abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "b" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "b",
          "spec": "file:{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/b",
          "type": "workspace",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "path": "{CWD}/test/fixtures/workspaces-shared-deps-virtual/node_modules/b",
      "realpath": "{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/b",
      "resolved": "file:../packages/b",
      "target": ArboristNode {
        "location": "packages/b",
      },
      "version": "1.0.0",
    },
    "c" => ArboristLink {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "c",
          "spec": "file:{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/c",
          "type": "workspace",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "path": "{CWD}/test/fixtures/workspaces-shared-deps-virtual/node_modules/c",
      "realpath": "{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/c",
      "resolved": "file:../packages/c",
      "target": ArboristNode {
        "location": "packages/c",
      },
      "version": "1.0.0",
    },
    "uuid" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "packages/c",
          "name": "uuid",
          "spec": "=3.3.3",
          "type": "prod",
        },
      },
      "location": "node_modules/uuid",
      "name": "uuid",
      "path": "{CWD}/test/fixtures/workspaces-shared-deps-virtual/node_modules/uuid",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.3.3.tgz",
      "version": "3.3.3",
    },
  },
  "edgesOut": Map {
    "a" => EdgeOut {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/a",
      "to": "node_modules/a",
      "type": "workspace",
    },
    "b" => EdgeOut {
      "name": "b",
      "spec": "file:{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/b",
      "to": "node_modules/b",
      "type": "workspace",
    },
    "c" => EdgeOut {
      "name": "c",
      "spec": "file:{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/c",
      "to": "node_modules/c",
      "type": "workspace",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "edgesOut": Map {
        "abbrev" => EdgeOut {
          "name": "abbrev",
          "spec": "^1.1.1",
          "to": "node_modules/abbrev",
          "type": "prod",
        },
      },
      "location": "packages/a",
      "name": "a",
      "path": "{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/a",
      "version": "1.0.0",
    },
    ArboristNode {
      "edgesOut": Map {
        "abbrev" => EdgeOut {
          "name": "abbrev",
          "spec": "^1.1.1",
          "to": "node_modules/abbrev",
          "type": "prod",
        },
      },
      "location": "packages/b",
      "name": "b",
      "path": "{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/b",
      "version": "1.0.0",
    },
    ArboristNode {
      "edgesOut": Map {
        "uuid" => EdgeOut {
          "name": "uuid",
          "spec": "=3.3.3",
          "to": "node_modules/uuid",
          "type": "prod",
        },
      },
      "location": "packages/c",
      "name": "c",
      "path": "{CWD}/test/fixtures/workspaces-shared-deps-virtual/packages/c",
      "version": "1.0.0",
    },
  },
  "location": "",
  "name": "workspaces-shared-deps-virtual",
  "packageName": "workspaces-shared-deps",
  "path": "{CWD}/test/fixtures/workspaces-shared-deps-virtual",
  "version": "1.0.0",
  "workspaces": Map {
    "a" => "packages/a",
    "b" => "packages/b",
    "c" => "packages/c",
  },
}
`

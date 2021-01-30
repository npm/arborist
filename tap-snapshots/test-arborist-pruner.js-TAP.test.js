/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/arborist/pruner.js TAP prune with actual tree > must match snapshot 1`] = `
ArboristNode {
  "location": "",
  "name": "pruner-prune-with-actual-tree",
  "packageName": "prune-actual",
  "path": "{CWD}/test/arborist/pruner-prune-with-actual-tree",
  "version": "1.0.0",
}
`

exports[`test/arborist/pruner.js TAP prune with actual tree omit dev > should keep dev dependencies in package-lock.json 1`] = `
Object {
  "dependencies": Object {
    "once": Object {
      "dev": true,
      "version": "1.4.0",
    },
  },
  "lockfileVersion": 2,
  "name": "prune-actual",
  "packages": Object {
    "": Object {
      "devDependencies": Object {
        "once": "^1.4.0",
      },
      "name": "prune-actual",
      "version": "1.0.0",
    },
    "node_modules/once": Object {
      "dev": true,
      "version": "1.4.0",
    },
  },
  "requires": true,
  "version": "1.0.0",
}
`

exports[`test/arborist/pruner.js TAP prune with actual tree omit dev > should remove all deps from reified tree 1`] = `
ArboristNode {
  "edgesOut": Map {
    "once" => EdgeOut {
      "error": "MISSING",
      "name": "once",
      "spec": "^1.4.0",
      "to": null,
      "type": "dev",
    },
  },
  "location": "",
  "name": "pruner-prune-with-actual-tree-omit-dev",
  "packageName": "prune-actual",
  "path": "{CWD}/test/arborist/pruner-prune-with-actual-tree-omit-dev",
  "version": "1.0.0",
}
`

exports[`test/arborist/pruner.js TAP prune with lockfile > must match snapshot 1`] = `
ArboristNode {
  "location": "",
  "name": "pruner-prune-with-lockfile",
  "packageName": "prune-actual",
  "path": "{CWD}/test/arborist/pruner-prune-with-lockfile",
  "version": "1.0.0",
}
`

exports[`test/arborist/pruner.js TAP prune with lockfile omit dev > should keep dev dependencies in package-lock.json 1`] = `
Object {
  "dependencies": Object {
    "once": Object {
      "dev": true,
      "version": "1.4.0",
    },
  },
  "lockfileVersion": 2,
  "name": "prune-actual",
  "packages": Object {
    "": Object {
      "devDependencies": Object {
        "once": "^1.4.0",
      },
      "name": "prune-actual",
      "version": "1.0.0",
    },
    "node_modules/once": Object {
      "dev": true,
      "version": "1.4.0",
    },
  },
  "requires": true,
  "version": "1.0.0",
}
`

exports[`test/arborist/pruner.js TAP prune with lockfile omit dev > should remove all deps from reified tree 1`] = `
ArboristNode {
  "edgesOut": Map {
    "once" => EdgeOut {
      "error": "MISSING",
      "name": "once",
      "spec": "^1.4.0",
      "to": null,
      "type": "dev",
    },
  },
  "location": "",
  "name": "pruner-prune-with-lockfile-omit-dev",
  "packageName": "prune-actual",
  "path": "{CWD}/test/arborist/pruner-prune-with-lockfile-omit-dev",
  "version": "1.0.0",
}
`

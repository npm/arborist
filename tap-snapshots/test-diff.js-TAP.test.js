/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/diff.js TAP > diff two trees 1`] = `
Diff {
  "action": null,
  "actual": Object {
    "name": "a",
    "path": "/path/to/root",
    "integrity": "sha512-aaa",
  },
  "ideal": Object {
    "name": "a",
    "path": "/path/to/root",
    "integrity": "sha512-aaa",
  },
  "children": Array [
    Diff {
      "action": "CHANGE",
      "actual": Object {
        "name": "b",
        "path": "/path/to/root/node_modules/b",
        "integrity": "sha512-bbb",
      },
      "ideal": Object {
        "name": "b",
        "path": "/path/to/root/node_modules/b",
        "integrity": "sha512-BBB",
      },
      "children": Array [
        Diff {
          "action": "CHANGE",
          "actual": Object {
            "name": "c",
            "path": "/path/to/root/node_modules/b/node_modules/c",
            "integrity": "sha512-ccc",
          },
          "ideal": Object {
            "name": "c",
            "path": "/path/to/root/node_modules/b/node_modules/c",
            "integrity": "sha512-CCC",
          },
          "children": Array [],
        },
        Diff {
          "action": "CHANGE",
          "actual": Object {
            "name": "e",
            "path": "/path/to/root/node_modules/b/node_modules/d/node_modules/e",
            "integrity": "sha512-eee",
          },
          "ideal": Object {
            "name": "e",
            "path": "/path/to/root/node_modules/b/node_modules/d/node_modules/e",
            "integrity": "sha512-EEE",
          },
          "children": Array [],
        },
      ],
    },
    Diff {
      "action": "ADD",
      "actual": undefined,
      "ideal": Object {
        "name": "i",
        "path": "/path/to/root/node_modules/i",
        "integrity": "sha512-III",
      },
      "children": Array [
        Diff {
          "action": "ADD",
          "actual": undefined,
          "ideal": Object {
            "name": "j",
            "path": "/path/to/root/node_modules/i/node_modules/j",
            "integrity": "sha512-JJJ",
          },
          "children": Array [],
        },
      ],
    },
    Diff {
      "action": "REMOVE",
      "actual": Object {
        "name": "p",
        "path": "/path/to/root/node_modules/p",
        "integrity": "sha512-ppp",
      },
      "ideal": undefined,
      "children": Array [
        Diff {
          "action": "REMOVE",
          "actual": Object {
            "name": "q",
            "path": "/path/to/root/node_modules/p/node_modules/q",
            "integrity": "sha512-qqq",
          },
          "ideal": undefined,
          "children": Array [],
        },
      ],
    },
    Diff {
      "action": "CHANGE",
      "actual": Object {
        "name": "y",
        "path": "/path/to/root/node_modules/x/node_modules/y",
        "integrity": "sha512-yyy",
      },
      "ideal": Object {
        "name": "y",
        "path": "/path/to/root/node_modules/x/node_modules/y",
        "integrity": "sha512-YYY",
      },
      "children": Array [],
    },
  ],
}
`

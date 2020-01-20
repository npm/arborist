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
  "actual": Node {
    "name": "a",
    "path": "/path/to/root",
    "integrity": "sha512-aaa",
  },
  "ideal": Node {
    "name": "a",
    "path": "/path/to/root",
    "integrity": "sha512-aaa",
  },
  "leaves": Array [
    "/path/to/root/node_modules/b/node_modules/c",
    "/path/to/root/node_modules/b/node_modules/d/node_modules/e",
    "/path/to/root/node_modules/x/node_modules/y",
    "/path/to/root/node_modules/p/node_modules/q",
    "/path/to/root/node_modules/bundler/node_modules/metabundled",
    "/path/to/root/node_modules/bundler/node_modules/not-bundled",
    "/path/to/root/node_modules/i/node_modules/j",
  ],
  "unchanged": Array [
    "/path/to/root/node_modules/x",
    "/path/to/root/node_modules/bundler",
    "/path/to/root/node_modules/bundler/node_modules/bundled-a",
    "/path/to/root/node_modules/b/node_modules/d",
    "/path/to/root/node_modules/b/node_modules/f",
    "/path/to/root/node_modules/x/node_modules/y/node_modules/z",
  ],
  "removed": Array [
    "/path/to/root/node_modules/p",
    "/path/to/root/node_modules/bundler/node_modules/metabundled",
    "/path/to/root/node_modules/p/node_modules/q",
  ],
  "children": Array [
    Diff {
      "action": "CHANGE",
      "actual": Node {
        "name": "b",
        "path": "/path/to/root/node_modules/b",
        "integrity": "sha512-bbb",
      },
      "ideal": Node {
        "name": "b",
        "path": "/path/to/root/node_modules/b",
        "integrity": "sha512-BBB",
      },
      "leaves": Array [
        "/path/to/root/node_modules/b/node_modules/c",
        "/path/to/root/node_modules/b/node_modules/d/node_modules/e",
      ],
      "unchanged": Array [
        "/path/to/root/node_modules/b/node_modules/d",
        "/path/to/root/node_modules/b/node_modules/f",
      ],
      "removed": Array [],
      "children": Array [
        Diff {
          "action": "CHANGE",
          "actual": Node {
            "name": "c",
            "path": "/path/to/root/node_modules/b/node_modules/c",
            "integrity": "sha512-ccc",
          },
          "ideal": Node {
            "name": "c",
            "path": "/path/to/root/node_modules/b/node_modules/c",
            "integrity": "sha512-CCC",
          },
          "leaves": Array [
            "/path/to/root/node_modules/b/node_modules/c",
          ],
          "unchanged": Array [],
          "removed": Array [],
          "children": Array [],
        },
        Diff {
          "action": "CHANGE",
          "actual": Node {
            "name": "e",
            "path": "/path/to/root/node_modules/b/node_modules/d/node_modules/e",
            "integrity": "sha512-eee",
          },
          "ideal": Node {
            "name": "e",
            "path": "/path/to/root/node_modules/b/node_modules/d/node_modules/e",
            "integrity": "sha512-EEE",
          },
          "leaves": Array [
            "/path/to/root/node_modules/b/node_modules/d/node_modules/e",
          ],
          "unchanged": Array [],
          "removed": Array [],
          "children": Array [],
        },
      ],
    },
    Diff {
      "action": "REMOVE",
      "actual": Node {
        "name": "metabundled",
        "path": "/path/to/root/node_modules/bundler/node_modules/metabundled",
        "integrity": null,
      },
      "ideal": undefined,
      "leaves": Array [
        "/path/to/root/node_modules/bundler/node_modules/metabundled",
      ],
      "unchanged": Array [],
      "removed": Array [],
      "children": Array [],
    },
    Diff {
      "action": "CHANGE",
      "actual": Node {
        "name": "not-bundled",
        "path": "/path/to/root/node_modules/bundler/node_modules/not-bundled",
        "integrity": "sha512-not-bundled",
      },
      "ideal": Node {
        "name": "not-bundled",
        "path": "/path/to/root/node_modules/bundler/node_modules/not-bundled",
        "integrity": "sha512-NOT-BUNDLED",
      },
      "leaves": Array [
        "/path/to/root/node_modules/bundler/node_modules/not-bundled",
      ],
      "unchanged": Array [],
      "removed": Array [],
      "children": Array [],
    },
    Diff {
      "action": "ADD",
      "actual": undefined,
      "ideal": Node {
        "name": "i",
        "path": "/path/to/root/node_modules/i",
        "integrity": "sha512-III",
      },
      "leaves": Array [
        "/path/to/root/node_modules/i/node_modules/j",
      ],
      "unchanged": Array [],
      "removed": Array [],
      "children": Array [
        Diff {
          "action": "ADD",
          "actual": undefined,
          "ideal": Node {
            "name": "j",
            "path": "/path/to/root/node_modules/i/node_modules/j",
            "integrity": "sha512-JJJ",
          },
          "leaves": Array [
            "/path/to/root/node_modules/i/node_modules/j",
          ],
          "unchanged": Array [],
          "removed": Array [],
          "children": Array [],
        },
      ],
    },
    Diff {
      "action": "REMOVE",
      "actual": Node {
        "name": "p",
        "path": "/path/to/root/node_modules/p",
        "integrity": "sha512-ppp",
      },
      "ideal": undefined,
      "leaves": Array [
        "/path/to/root/node_modules/p/node_modules/q",
      ],
      "unchanged": Array [],
      "removed": Array [
        "/path/to/root/node_modules/p/node_modules/q",
      ],
      "children": Array [
        Diff {
          "action": "REMOVE",
          "actual": Node {
            "name": "q",
            "path": "/path/to/root/node_modules/p/node_modules/q",
            "integrity": "sha512-qqq",
          },
          "ideal": undefined,
          "leaves": Array [
            "/path/to/root/node_modules/p/node_modules/q",
          ],
          "unchanged": Array [],
          "removed": Array [],
          "children": Array [],
        },
      ],
    },
    Diff {
      "action": "CHANGE",
      "actual": Node {
        "name": "y",
        "path": "/path/to/root/node_modules/x/node_modules/y",
        "integrity": "sha512-yyy",
      },
      "ideal": Node {
        "name": "y",
        "path": "/path/to/root/node_modules/x/node_modules/y",
        "integrity": "sha512-YYY",
      },
      "leaves": Array [
        "/path/to/root/node_modules/x/node_modules/y",
      ],
      "unchanged": Array [
        "/path/to/root/node_modules/x/node_modules/y/node_modules/z",
      ],
      "removed": Array [],
      "children": Array [],
    },
  ],
}
`

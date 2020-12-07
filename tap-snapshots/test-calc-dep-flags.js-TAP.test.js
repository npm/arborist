/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/calc-dep-flags.js TAP flag stuff > after 1`] = `
Node {
  "_": "x",
  "children": Array [
    Node {
      "_": "optional",
      "_optional": true,
    },
    Node {
      "_": "devoptional",
      "_devOptional": true,
    },
    Node {
      "_": "extraneous",
      "_extraneous": true,
    },
    Node {
      "_": "peer",
    },
    Node {
      "_": "peerdep",
    },
    Node {
      "_": "prod",
    },
    Node {
      "_": "metapeer",
    },
    Node {
      "_": "metapeerdep",
    },
    Node {
      "_": "proddep",
    },
    Node {
      "_": "dev",
      "_dev": true,
    },
    Node {
      "_": "devdep",
      "_dev": true,
      "children": Array [
        Link {
          "_": "linky",
          "_dev": true,
          "_target": Node {
            "_": "z",
            "_dev": true,
            "children": Array [
              Link {
                "_": "linklink",
                "_dev": true,
                "_target": Node {
                  "_": "link",
                  "_dev": true,
                },
              },
            ],
          },
        },
      ],
    },
    Node {
      "_": "devandoptional",
      "_dev": true,
      "_optional": true,
    },
  ],
}
`

exports[`test/calc-dep-flags.js TAP no reset > after 1`] = `
Node {
  "_": "path",
  "_dev": true,
  "children": Array [
    Node {
      "_": "foo",
      "_dev": true,
    },
  ],
}
`

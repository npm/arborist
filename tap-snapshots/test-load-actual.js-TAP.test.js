/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/load-actual.js TAP bundle > loaded tree 1`] = `
{
  "name": "bundle",
  "location": "/",
  "edgesOut": {
    "dep": {
      "name": "dep",
      "type": "prod",
      "spec": "",
      "to": "/dep",
    },
  },
  "children": [
    {
      "name": "dep",
      "location": "/dep",
      "bundled": true,
      "edgesIn": [
        {
          "name": "dep",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      ],
    },
  ],
}
`

exports[`test/load-actual.js TAP cwd is default root > loaded tree 1`] = `
{
  "name": "root",
  "location": "/",
  "edgesOut": {
    "notinstalledhere": {
      "name": "notinstalledhere",
      "type": "optional",
      "spec": "",
      "to": null,
      "error": "MISSING",
    },
    "@scope/x": {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "/@scope/x",
    },
    "@scope/y": {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "/@scope/y",
    },
    "foo": {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "/foo",
    },
  },
  "children": [
    {
      "name": "foo",
      "location": "/foo",
      "edgesIn": [
        {
          "name": "foo",
          "type": "dev",
          "spec": "*",
          "from": "/",
        },
        {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "from": "/@scope/y",
          "error": "INVALID",
        },
      ],
      "edgesOut": {
        "@scope/x": {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "/@scope/x",
        },
        "express": {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": null,
          "error": "MISSING",
        },
      },
    },
    {
      "name": "@scope/x",
      "location": "/@scope/x",
      "edgesIn": [
        {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "/@scope/x",
        },
        {
          "name": "@scope/x",
          "type": "prod",
          "spec": "1",
          "from": "/",
        },
        {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "/foo",
        },
      ],
      "edgesOut": {
        "@scope/y": {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "/@scope/y",
        },
        "glob": {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": null,
          "error": "MISSING",
        },
        "express": {
          "name": "express",
          "type": "peer",
          "spec": "420.69.0-nice",
          "to": null,
          "error": "MISSING",
        },
        "@scope/x": {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "/@scope/x",
        },
      },
    },
    {
      "name": "@scope/y",
      "location": "/@scope/y",
      "edgesIn": [
        {
          "name": "@scope/y",
          "type": "peer",
          "spec": ">0.99.0",
          "from": "/",
        },
        {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "from": "/@scope/x",
        },
      ],
      "edgesOut": {
        "foo": {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "/foo",
          "error": "INVALID",
        },
      },
    },
  ],
}
`

exports[`test/load-actual.js TAP deepmixedloop > loaded tree 1`] = `
{
  "name": "deepmixedloop",
  "location": "/",
  "edgesOut": {
    "x": {
      "name": "x",
      "type": "prod",
      "spec": "",
      "to": "/x",
    },
    "i": {
      "name": "i",
      "type": "dev",
      "spec": "",
      "to": "/i",
    },
  },
  "children": [
    {
      "name": "a",
      "location": "/a",
      "edgesIn": [
        {
          "name": "a",
          "type": "optional",
          "spec": "",
          "from": "/z",
        },
      ],
      "edgesOut": {
        "b": {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
        },
      },
    },
    {
      "name": "b",
      "location": "/b",
      "edgesIn": [
        {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
      ],
      "edgesOut": {
        "c": {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "/c",
        },
      },
    },
    {
      "name": "c",
      "location": "/c",
      "edgesIn": [
        {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/b",
        },
        {
          "name": "c",
          "type": "dev",
          "spec": "",
          "from": "/z",
        },
      ],
      "edgesOut": {
        "d": {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "/d",
        },
      },
    },
    {
      "name": "d",
      "location": "/d",
      "edgesIn": [
        {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "/c",
        },
      ],
      "edgesOut": {
        "e": {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "/e",
        },
      },
    },
    {
      "name": "e",
      "location": "/e",
      "edgesIn": [
        {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "/d",
        },
      ],
    },
    {
      "name": "i",
      "location": "/i",
      "edgesIn": [
        {
          "name": "i",
          "type": "dev",
          "spec": "",
          "from": "/",
        },
      ],
      "edgesOut": {
        "j": {
          "name": "j",
          "type": "prod",
          "spec": "",
          "to": "/j",
        },
      },
    },
    {
      "name": "j",
      "location": "/j",
      "edgesIn": [
        {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "/i",
        },
      ],
      "edgesOut": {
        "k": {
          "name": "k",
          "type": "prod",
          "spec": "",
          "to": "/k",
        },
      },
    },
    {
      "name": "k",
      "location": "/k",
      "edgesIn": [
        {
          "name": "k",
          "type": "prod",
          "spec": "",
          "from": "/j",
        },
      ],
    },
    {
      "name": "x",
      "location": "/x",
      "edgesIn": [
        {
          "name": "x",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      ],
      "edgesOut": {
        "y": {
          "name": "y",
          "type": "prod",
          "spec": "",
          "to": "/y",
        },
      },
    },
    {
      "name": "y",
      "location": "/y",
      "edgesIn": [
        {
          "name": "y",
          "type": "prod",
          "spec": "",
          "from": "/x",
        },
      ],
      "edgesOut": {
        "z": {
          "name": "z",
          "type": "prod",
          "spec": "",
          "to": "/z",
        },
      },
    },
    {
      "name": "z",
      "location": "/z",
      "edgesIn": [
        {
          "name": "z",
          "type": "prod",
          "spec": "",
          "from": "/y",
        },
      ],
      "edgesOut": {
        "a": {
          "name": "a",
          "type": "optional",
          "spec": "",
          "to": "/a",
        },
        "c": {
          "name": "c",
          "type": "dev",
          "spec": "",
          "to": "/c",
        },
      },
    },
  ],
}
`

exports[`test/load-actual.js TAP deeproot/root > loaded tree 1`] = `
{
  "name": "root",
  "location": "/",
  "edgesOut": {
    "notinstalledhere": {
      "name": "notinstalledhere",
      "type": "optional",
      "spec": "",
      "to": null,
      "error": "MISSING",
    },
    "@scope/x": {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "/@scope/x",
    },
    "@scope/y": {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "/@scope/y",
    },
    "foo": {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "/foo",
    },
  },
  "children": [
    {
      "name": "foo",
      "location": "/foo",
      "edgesIn": [
        {
          "name": "foo",
          "type": "dev",
          "spec": "*",
          "from": "/",
        },
        {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "from": "/@scope/y",
          "error": "INVALID",
        },
      ],
      "edgesOut": {
        "@scope/x": {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "/@scope/x",
        },
        "express": {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "/foo/express",
        },
      },
      "children": [
        {
          "name": "express",
          "location": "/foo/express",
          "edgesIn": [
            {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "/foo",
            },
          ],
          "edgesOut": {
            "tap": {
              "name": "tap",
              "type": "dev",
              "spec": "^10.1",
              "to": null,
              "error": "MISSING",
            },
          },
        },
      ],
    },
    {
      "name": "@scope/x",
      "location": "/@scope/x",
      "edgesIn": [
        {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "/@scope/x",
        },
        {
          "name": "@scope/x",
          "type": "prod",
          "spec": "1",
          "from": "/",
        },
        {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "/foo",
        },
      ],
      "edgesOut": {
        "@scope/y": {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "/@scope/y",
        },
        "glob": {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "/@scope/x/glob",
        },
        "express": {
          "name": "express",
          "type": "peer",
          "spec": "420.69.0-nice",
          "to": null,
          "error": "MISSING",
        },
        "@scope/x": {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "/@scope/x",
        },
      },
      "children": [
        {
          "name": "glob",
          "location": "/@scope/x/glob",
          "edgesIn": [
            {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/@scope/x",
            },
          ],
          "edgesOut": {
            "graceful-fs": {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/graceful-fs",
            },
            "inherits": {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/inherits",
            },
            "minimatch": {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/minimatch",
            },
            "once": {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/once",
            },
          },
          "children": [
            {
              "name": "graceful-fs",
              "location": "/@scope/x/glob/graceful-fs",
              "edgesIn": [
                {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              ],
            },
            {
              "name": "inherits",
              "location": "/@scope/x/glob/inherits",
              "edgesIn": [
                {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              ],
            },
            {
              "name": "minimatch",
              "location": "/@scope/x/glob/minimatch",
              "edgesIn": [
                {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              ],
              "edgesOut": {
                "sigmund": {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/sigmund",
                },
                "lru-cache": {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/lru-cache",
                },
                "once": {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/once",
                },
              },
              "children": [
                {
                  "name": "lru-cache",
                  "location": "/@scope/x/glob/minimatch/lru-cache",
                  "edgesIn": [
                    {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  ],
                },
                {
                  "name": "sigmund",
                  "location": "/@scope/x/glob/minimatch/sigmund",
                  "edgesIn": [
                    {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  ],
                },
              ],
            },
            {
              "name": "once",
              "location": "/@scope/x/glob/once",
              "edgesIn": [
                {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
                {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob/minimatch",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      "name": "@scope/y",
      "location": "/@scope/y",
      "edgesIn": [
        {
          "name": "@scope/y",
          "type": "peer",
          "spec": ">0.99.0",
          "from": "/",
        },
        {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "from": "/@scope/x",
        },
      ],
      "edgesOut": {
        "foo": {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "/foo",
          "error": "INVALID",
        },
      },
    },
  ],
}
`

exports[`test/load-actual.js TAP devloop > loaded tree 1`] = `
{
  "name": "devloop",
  "location": "/",
  "edgesOut": {
    "c": {
      "name": "c",
      "type": "prod",
      "spec": "",
      "to": "/c",
    },
    "a": {
      "name": "a",
      "type": "dev",
      "spec": "",
      "to": "/a",
    },
  },
  "children": [
    {
      "name": "a",
      "location": "/a",
      "edgesIn": [
        {
          "name": "a",
          "type": "dev",
          "spec": "",
          "from": "/",
        },
      ],
      "edgesOut": {
        "b": {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
        },
        "d": {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "/d",
        },
      },
    },
    {
      "name": "c",
      "location": "/c",
      "edgesIn": [
        {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      ],
      "edgesOut": {
        "d": {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "/d",
        },
      },
    },
    {
      "name": "b",
      "location": "/b",
      "edgesIn": [
        {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
        {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/d",
        },
      ],
    },
    {
      "name": "d",
      "location": "/d",
      "edgesIn": [
        {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
        {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "/c",
        },
      ],
      "edgesOut": {
        "b": {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
        },
      },
    },
  ],
}
`

exports[`test/load-actual.js TAP linkedroot > loaded tree 1`] = `
{
  "name": "linkedroot",
  "location": "/",
  "edgesOut": {
    "notinstalledhere": {
      "name": "notinstalledhere",
      "type": "optional",
      "spec": "",
      "to": null,
      "error": "MISSING",
    },
    "@scope/x": {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "/@scope/x",
    },
    "@scope/y": {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "/@scope/y",
    },
    "foo": {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "/foo",
    },
  },
  "children": [
    {
      "name": "foo",
      "location": "/foo",
      "edgesIn": [
        {
          "name": "foo",
          "type": "dev",
          "spec": "*",
          "from": "/",
        },
        {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "from": "/@scope/y",
          "error": "INVALID",
        },
      ],
      "edgesOut": {
        "@scope/x": {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "/@scope/x",
        },
        "express": {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "/foo/express",
        },
      },
      "children": [
        {
          "name": "express",
          "location": "/foo/express",
          "edgesIn": [
            {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "/foo",
            },
          ],
          "edgesOut": {
            "tap": {
              "name": "tap",
              "type": "dev",
              "spec": "^10.1",
              "to": null,
              "error": "MISSING",
            },
          },
        },
      ],
    },
    {
      "name": "@scope/x",
      "location": "/@scope/x",
      "edgesIn": [
        {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "/@scope/x",
        },
        {
          "name": "@scope/x",
          "type": "prod",
          "spec": "1",
          "from": "/",
        },
        {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "/foo",
        },
      ],
      "edgesOut": {
        "@scope/y": {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "/@scope/y",
        },
        "glob": {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "/@scope/x/glob",
        },
        "express": {
          "name": "express",
          "type": "peer",
          "spec": "420.69.0-nice",
          "to": null,
          "error": "MISSING",
        },
        "@scope/x": {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "/@scope/x",
        },
      },
      "children": [
        {
          "name": "glob",
          "location": "/@scope/x/glob",
          "edgesIn": [
            {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/@scope/x",
            },
          ],
          "edgesOut": {
            "graceful-fs": {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/graceful-fs",
            },
            "inherits": {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/inherits",
            },
            "minimatch": {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/minimatch",
            },
            "once": {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/once",
            },
          },
          "children": [
            {
              "name": "graceful-fs",
              "location": "/@scope/x/glob/graceful-fs",
              "edgesIn": [
                {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              ],
            },
            {
              "name": "inherits",
              "location": "/@scope/x/glob/inherits",
              "edgesIn": [
                {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              ],
            },
            {
              "name": "minimatch",
              "location": "/@scope/x/glob/minimatch",
              "edgesIn": [
                {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              ],
              "edgesOut": {
                "sigmund": {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/sigmund",
                },
                "lru-cache": {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/lru-cache",
                },
                "once": {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/once",
                },
              },
              "children": [
                {
                  "name": "lru-cache",
                  "location": "/@scope/x/glob/minimatch/lru-cache",
                  "edgesIn": [
                    {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  ],
                },
                {
                  "name": "sigmund",
                  "location": "/@scope/x/glob/minimatch/sigmund",
                  "edgesIn": [
                    {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  ],
                },
              ],
            },
            {
              "name": "once",
              "location": "/@scope/x/glob/once",
              "edgesIn": [
                {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
                {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob/minimatch",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      "name": "@scope/y",
      "location": "/@scope/y",
      "edgesIn": [
        {
          "name": "@scope/y",
          "type": "peer",
          "spec": ">0.99.0",
          "from": "/",
        },
        {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "from": "/@scope/x",
        },
      ],
      "edgesOut": {
        "foo": {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "/foo",
          "error": "INVALID",
        },
      },
    },
  ],
}
`

exports[`test/load-actual.js TAP links-all-over > loaded tree 1`] = `
{
  "name": "links-all-over",
  "location": "/",
  "edgesOut": {
    "nest": {
      "name": "nest",
      "type": "prod",
      "spec": "",
      "to": "/nest",
    },
    "link-outside-nest": {
      "name": "link-outside-nest",
      "type": "prod",
      "spec": "",
      "to": "/link-outside-nest",
    },
    "link-deep": {
      "name": "link-deep",
      "type": "prod",
      "spec": "",
      "to": "/link-deep",
    },
    "link-link": {
      "name": "link-link",
      "type": "prod",
      "spec": "",
      "to": "/link-link",
    },
  },
  "children": [
    {
      "name": "nest",
      "location": "/nest",
      "edgesIn": [
        {
          "name": "nest",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      ],
      "edgesOut": {
        "a": {
          "name": "a",
          "type": "prod",
          "spec": "",
          "to": "/nest/a",
        },
        "link-in-nest": {
          "name": "link-in-nest",
          "type": "prod",
          "spec": "",
          "to": "/nest/link-in-nest",
        },
      },
      "children": [
        {
          "name": "a",
          "location": "/nest/a",
          "edgesIn": [
            {
              "name": "a",
              "type": "prod",
              "spec": "",
              "from": "/nest",
            },
          ],
          "edgesOut": {
            "b": {
              "name": "b",
              "type": "prod",
              "spec": "",
              "to": "/nest/a/b",
            },
          },
          "children": [
            {
              "name": "b",
              "location": "/nest/a/b",
              "edgesIn": [
                {
                  "name": "b",
                  "type": "prod",
                  "spec": "",
                  "from": "/nest/a",
                },
              ],
              "edgesOut": {
                "c": {
                  "name": "c",
                  "type": "prod",
                  "spec": "",
                  "to": "/nest/a/b/c",
                },
              },
              "children": [
                {
                  "name": "c",
                  "location": "/nest/a/b/c",
                  "edgesIn": [
                    {
                      "name": "c",
                      "type": "prod",
                      "spec": "",
                      "from": "/nest/a/b",
                    },
                  ],
                  "edgesOut": {
                    "d": {
                      "name": "d",
                      "type": "prod",
                      "spec": "",
                      "to": "/nest/a/b/c/d",
                    },
                  },
                  "children": [
                    {
                      "name": "d",
                      "location": "/nest/a/b/c/d",
                      "edgesIn": [
                        {
                          "name": "d",
                          "type": "prod",
                          "spec": "",
                          "from": "/nest/a/b/c",
                        },
                      ],
                      "edgesOut": {
                        "deep": {
                          "name": "deep",
                          "type": "prod",
                          "spec": "",
                          "to": "/nest/a/b/c/d/deep",
                        },
                      },
                      "children": [
                        {
                          "name": "deep",
                          "location": "/nest/a/b/c/d/deep",
                          "edgesIn": [
                            {
                              "name": "deep",
                              "type": "prod",
                              "spec": "",
                              "from": "/nest/a/b/c/d",
                            },
                          ],
                          "edgesOut": {
                            "deep-a": {
                              "name": "deep-a",
                              "type": "prod",
                              "spec": "",
                              "to": "/nest/a/b/c/d/deep/deep-a",
                            },
                          },
                          "children": [
                            {
                              "name": "deep-a",
                              "location": "/nest/a/b/c/d/deep/deep-a",
                              "edgesIn": [
                                {
                                  "name": "deep-a",
                                  "type": "prod",
                                  "spec": "",
                                  "from": "/nest/a/b/c/d/deep",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          "name": "link-in-nest",
          "location": "/nest/link-in-nest",
          "target": {
            "name": "real",
            "parent": null,
          },
          "edgesIn": [
            {
              "name": "link-in-nest",
              "type": "prod",
              "spec": "",
              "from": "/nest",
            },
          ],
        },
      ],
    },
    {
      "name": "link-outside-nest",
      "location": "/link-outside-nest",
      "target": {
        "name": "real",
        "parent": null,
      },
      "edgesIn": [
        {
          "name": "link-outside-nest",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      ],
    },
    {
      "name": "link-deep",
      "location": "/link-deep",
      "target": {
        "name": "deep",
        "parent": "/nest/a/b/c/d",
      },
      "edgesIn": [
        {
          "name": "link-deep",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      ],
    },
    {
      "name": "link-link",
      "location": "/link-link",
      "target": {
        "name": "deep",
        "parent": "/nest/a/b/c/d",
      },
      "edgesIn": [
        {
          "name": "link-link",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      ],
    },
  ],
}
`

exports[`test/load-actual.js TAP looking outside of cwd > loaded tree 1`] = `
{
  "name": "root",
  "location": "/",
  "edgesOut": {
    "notinstalledhere": {
      "name": "notinstalledhere",
      "type": "optional",
      "spec": "",
      "to": null,
      "error": "MISSING",
    },
    "@scope/x": {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "/@scope/x",
    },
    "@scope/y": {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "/@scope/y",
    },
    "foo": {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "/foo",
    },
  },
  "children": [
    {
      "name": "foo",
      "location": "/foo",
      "edgesIn": [
        {
          "name": "foo",
          "type": "dev",
          "spec": "*",
          "from": "/",
        },
        {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "from": "/@scope/y",
          "error": "INVALID",
        },
      ],
      "edgesOut": {
        "@scope/x": {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "/@scope/x",
        },
        "express": {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "/foo/express",
        },
      },
      "children": [
        {
          "name": "express",
          "location": "/foo/express",
          "edgesIn": [
            {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "/foo",
            },
          ],
          "edgesOut": {
            "tap": {
              "name": "tap",
              "type": "dev",
              "spec": "^10.1",
              "to": null,
              "error": "MISSING",
            },
          },
        },
      ],
    },
    {
      "name": "@scope/x",
      "location": "/@scope/x",
      "edgesIn": [
        {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "/@scope/x",
        },
        {
          "name": "@scope/x",
          "type": "prod",
          "spec": "1",
          "from": "/",
        },
        {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "/foo",
        },
      ],
      "edgesOut": {
        "@scope/y": {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "/@scope/y",
        },
        "glob": {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "/@scope/x/glob",
        },
        "express": {
          "name": "express",
          "type": "peer",
          "spec": "420.69.0-nice",
          "to": null,
          "error": "MISSING",
        },
        "@scope/x": {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "/@scope/x",
        },
      },
      "children": [
        {
          "name": "glob",
          "location": "/@scope/x/glob",
          "edgesIn": [
            {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/@scope/x",
            },
          ],
          "edgesOut": {
            "graceful-fs": {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/graceful-fs",
            },
            "inherits": {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/inherits",
            },
            "minimatch": {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/minimatch",
            },
            "once": {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/once",
            },
          },
          "children": [
            {
              "name": "graceful-fs",
              "location": "/@scope/x/glob/graceful-fs",
              "edgesIn": [
                {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              ],
            },
            {
              "name": "inherits",
              "location": "/@scope/x/glob/inherits",
              "edgesIn": [
                {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              ],
            },
            {
              "name": "minimatch",
              "location": "/@scope/x/glob/minimatch",
              "edgesIn": [
                {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              ],
              "edgesOut": {
                "sigmund": {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/sigmund",
                },
                "lru-cache": {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/lru-cache",
                },
                "once": {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/once",
                },
              },
              "children": [
                {
                  "name": "lru-cache",
                  "location": "/@scope/x/glob/minimatch/lru-cache",
                  "edgesIn": [
                    {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  ],
                },
                {
                  "name": "sigmund",
                  "location": "/@scope/x/glob/minimatch/sigmund",
                  "edgesIn": [
                    {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  ],
                },
              ],
            },
            {
              "name": "once",
              "location": "/@scope/x/glob/once",
              "edgesIn": [
                {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
                {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob/minimatch",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      "name": "@scope/y",
      "location": "/@scope/y",
      "edgesIn": [
        {
          "name": "@scope/y",
          "type": "peer",
          "spec": ">0.99.0",
          "from": "/",
        },
        {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "from": "/@scope/x",
        },
      ],
      "edgesOut": {
        "foo": {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "/foo",
          "error": "INVALID",
        },
      },
    },
  ],
}
`

exports[`test/load-actual.js TAP mixedloop > loaded tree 1`] = `
{
  "name": "mixedloop",
  "location": "/",
  "edgesOut": {
    "a": {
      "name": "a",
      "type": "optional",
      "spec": "",
      "to": "/a",
    },
    "c": {
      "name": "c",
      "type": "dev",
      "spec": "",
      "to": "/c",
    },
  },
  "children": [
    {
      "name": "a",
      "location": "/a",
      "edgesIn": [
        {
          "name": "a",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
      ],
      "edgesOut": {
        "b": {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
        },
      },
    },
    {
      "name": "b",
      "location": "/b",
      "edgesIn": [
        {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
      ],
      "edgesOut": {
        "c": {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "/c",
        },
      },
    },
    {
      "name": "c",
      "location": "/c",
      "edgesIn": [
        {
          "name": "c",
          "type": "dev",
          "spec": "",
          "from": "/",
        },
        {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/b",
        },
      ],
      "edgesOut": {
        "d": {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "/d",
        },
      },
    },
    {
      "name": "d",
      "location": "/d",
      "edgesIn": [
        {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "/c",
        },
      ],
      "edgesOut": {
        "e": {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "/e",
        },
      },
    },
    {
      "name": "e",
      "location": "/e",
      "edgesIn": [
        {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "/d",
        },
      ],
    },
  ],
}
`

exports[`test/load-actual.js TAP mixedmidway > loaded tree 1`] = `
{
  "name": "mixedmidway",
  "location": "/",
  "edgesOut": {
    "a": {
      "name": "a",
      "type": "optional",
      "spec": "",
      "to": "/a",
    },
    "b": {
      "name": "b",
      "type": "optional",
      "spec": "",
      "to": "/b",
    },
    "c": {
      "name": "c",
      "type": "optional",
      "spec": "",
      "to": "/c",
    },
    "k": {
      "name": "k",
      "type": "optional",
      "spec": "",
      "to": "/k",
    },
    "l": {
      "name": "l",
      "type": "optional",
      "spec": "",
      "to": "/l",
    },
    "m": {
      "name": "m",
      "type": "optional",
      "spec": "",
      "to": "/m",
    },
    "y": {
      "name": "y",
      "type": "optional",
      "spec": "",
      "to": "/y",
    },
    "x": {
      "name": "x",
      "type": "prod",
      "spec": "",
      "to": "/x",
    },
    "i": {
      "name": "i",
      "type": "dev",
      "spec": "",
      "to": "/i",
    },
  },
  "children": [
    {
      "name": "a",
      "location": "/a",
      "edgesIn": [
        {
          "name": "a",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
      ],
      "edgesOut": {
        "b": {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
        },
      },
    },
    {
      "name": "b",
      "location": "/b",
      "edgesIn": [
        {
          "name": "b",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
        {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
        {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/n",
        },
      ],
      "edgesOut": {
        "c": {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "/c",
        },
        "j": {
          "name": "j",
          "type": "prod",
          "spec": "",
          "to": "/j",
        },
      },
    },
    {
      "name": "c",
      "location": "/c",
      "edgesIn": [
        {
          "name": "c",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
        {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/b",
        },
        {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/k",
        },
      ],
    },
    {
      "name": "i",
      "location": "/i",
      "edgesIn": [
        {
          "name": "i",
          "type": "dev",
          "spec": "",
          "from": "/",
        },
      ],
      "edgesOut": {
        "j": {
          "name": "j",
          "type": "prod",
          "spec": "",
          "to": "/j",
        },
      },
    },
    {
      "name": "j",
      "location": "/j",
      "edgesIn": [
        {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "/b",
        },
        {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "/i",
        },
        {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "/n",
        },
      ],
      "edgesOut": {
        "k": {
          "name": "k",
          "type": "prod",
          "spec": "",
          "to": "/k",
        },
      },
    },
    {
      "name": "k",
      "location": "/k",
      "edgesIn": [
        {
          "name": "k",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
        {
          "name": "k",
          "type": "prod",
          "spec": "",
          "from": "/j",
        },
      ],
      "edgesOut": {
        "c": {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "/c",
        },
      },
    },
    {
      "name": "l",
      "location": "/l",
      "edgesIn": [
        {
          "name": "l",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
        {
          "name": "l",
          "type": "prod",
          "spec": "",
          "from": "/z",
        },
      ],
      "edgesOut": {
        "m": {
          "name": "m",
          "type": "prod",
          "spec": "",
          "to": "/m",
        },
      },
    },
    {
      "name": "m",
      "location": "/m",
      "edgesIn": [
        {
          "name": "m",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
        {
          "name": "m",
          "type": "prod",
          "spec": "",
          "from": "/l",
        },
      ],
    },
    {
      "name": "n",
      "location": "/n",
      "edgesOut": {
        "b": {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
        },
        "j": {
          "name": "j",
          "type": "prod",
          "spec": "",
          "to": "/j",
        },
      },
    },
    {
      "name": "x",
      "location": "/x",
      "edgesIn": [
        {
          "name": "x",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      ],
      "edgesOut": {
        "y": {
          "name": "y",
          "type": "prod",
          "spec": "",
          "to": "/y",
        },
      },
    },
    {
      "name": "y",
      "location": "/y",
      "edgesIn": [
        {
          "name": "y",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
        {
          "name": "y",
          "type": "prod",
          "spec": "",
          "from": "/x",
        },
      ],
      "edgesOut": {
        "z": {
          "name": "z",
          "type": "prod",
          "spec": "",
          "to": "/z",
        },
      },
    },
    {
      "name": "z",
      "location": "/z",
      "edgesIn": [
        {
          "name": "z",
          "type": "prod",
          "spec": "",
          "from": "/y",
        },
      ],
      "edgesOut": {
        "l": {
          "name": "l",
          "type": "prod",
          "spec": "",
          "to": "/l",
        },
      },
    },
  ],
}
`

exports[`test/load-actual.js TAP noname > loaded tree 1`] = `
{
  "name": "noname",
  "location": "/",
  "children": [
    {
      "name": "foo",
      "location": "/foo",
    },
  ],
}
`

exports[`test/load-actual.js TAP optionalloop > loaded tree 1`] = `
{
  "name": "optionalloop",
  "location": "/",
  "edgesOut": {
    "a": {
      "name": "a",
      "type": "optional",
      "spec": "",
      "to": "/a",
    },
    "c": {
      "name": "c",
      "type": "prod",
      "spec": "",
      "to": "/c",
    },
  },
  "children": [
    {
      "name": "a",
      "location": "/a",
      "edgesIn": [
        {
          "name": "a",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
      ],
      "edgesOut": {
        "b": {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
        },
        "d": {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "/d",
        },
      },
    },
    {
      "name": "b",
      "location": "/b",
      "edgesIn": [
        {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
        {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/d",
        },
      ],
    },
    {
      "name": "c",
      "location": "/c",
      "edgesIn": [
        {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      ],
      "edgesOut": {
        "d": {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "/d",
        },
      },
    },
    {
      "name": "d",
      "location": "/d",
      "edgesIn": [
        {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
        {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "/c",
        },
      ],
      "edgesOut": {
        "b": {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
        },
      },
    },
  ],
}
`

exports[`test/load-actual.js TAP optofdev > loaded tree 1`] = `
{
  "name": "optofdev",
  "location": "/",
  "edgesOut": {
    "a": {
      "name": "a",
      "type": "dev",
      "spec": "",
      "to": "/a",
    },
  },
  "children": [
    {
      "name": "a",
      "location": "/a",
      "edgesIn": [
        {
          "name": "a",
          "type": "dev",
          "spec": "",
          "from": "/",
        },
      ],
      "edgesOut": {
        "b": {
          "name": "b",
          "type": "optional",
          "spec": "",
          "to": "/b",
        },
        "d": {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "/d",
        },
      },
    },
    {
      "name": "c",
      "location": "/c",
      "edgesIn": [
        {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/b",
        },
      ],
      "edgesOut": {
        "e": {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "/e",
        },
      },
    },
    {
      "name": "d",
      "location": "/d",
      "edgesIn": [
        {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
      ],
      "edgesOut": {
        "e": {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "/e",
        },
      },
    },
    {
      "name": "b",
      "location": "/b",
      "edgesIn": [
        {
          "name": "b",
          "type": "optional",
          "spec": "",
          "from": "/a",
        },
      ],
      "edgesOut": {
        "c": {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "/c",
        },
      },
    },
    {
      "name": "e",
      "location": "/e",
      "edgesIn": [
        {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "/c",
        },
        {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "/d",
        },
      ],
    },
  ],
}
`

exports[`test/load-actual.js TAP other > loaded tree 1`] = `
{
  "name": "other",
  "location": "/",
  "children": [
    {
      "name": "glob",
      "location": "/glob",
      "target": {
        "name": "glob",
        "parent": null,
      },
    },
  ],
}
`

exports[`test/load-actual.js TAP root > loaded tree 1`] = `
{
  "name": "root",
  "location": "/",
  "edgesOut": {
    "notinstalledhere": {
      "name": "notinstalledhere",
      "type": "optional",
      "spec": "",
      "to": null,
      "error": "MISSING",
    },
    "@scope/x": {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "/@scope/x",
    },
    "@scope/y": {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "/@scope/y",
    },
    "foo": {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "/foo",
    },
  },
  "children": [
    {
      "name": "foo",
      "location": "/foo",
      "edgesIn": [
        {
          "name": "foo",
          "type": "dev",
          "spec": "*",
          "from": "/",
        },
        {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "from": "/@scope/y",
          "error": "INVALID",
        },
      ],
      "edgesOut": {
        "@scope/x": {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "/@scope/x",
        },
        "express": {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "/foo/express",
        },
      },
      "children": [
        {
          "name": "express",
          "location": "/foo/express",
          "edgesIn": [
            {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "/foo",
            },
          ],
          "edgesOut": {
            "tap": {
              "name": "tap",
              "type": "dev",
              "spec": "^10.1",
              "to": null,
              "error": "MISSING",
            },
          },
        },
      ],
    },
    {
      "name": "@scope/x",
      "location": "/@scope/x",
      "edgesIn": [
        {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "/@scope/x",
        },
        {
          "name": "@scope/x",
          "type": "prod",
          "spec": "1",
          "from": "/",
        },
        {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "/foo",
        },
      ],
      "edgesOut": {
        "@scope/y": {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "/@scope/y",
        },
        "glob": {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "/@scope/x/glob",
        },
        "express": {
          "name": "express",
          "type": "peer",
          "spec": "420.69.0-nice",
          "to": null,
          "error": "MISSING",
        },
        "@scope/x": {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "/@scope/x",
        },
      },
      "children": [
        {
          "name": "glob",
          "location": "/@scope/x/glob",
          "edgesIn": [
            {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/@scope/x",
            },
          ],
          "edgesOut": {
            "graceful-fs": {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/graceful-fs",
            },
            "inherits": {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/inherits",
            },
            "minimatch": {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/minimatch",
            },
            "once": {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/once",
            },
          },
          "children": [
            {
              "name": "graceful-fs",
              "location": "/@scope/x/glob/graceful-fs",
              "edgesIn": [
                {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              ],
            },
            {
              "name": "inherits",
              "location": "/@scope/x/glob/inherits",
              "edgesIn": [
                {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              ],
            },
            {
              "name": "minimatch",
              "location": "/@scope/x/glob/minimatch",
              "edgesIn": [
                {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              ],
              "edgesOut": {
                "sigmund": {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/sigmund",
                },
                "lru-cache": {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/lru-cache",
                },
                "once": {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/once",
                },
              },
              "children": [
                {
                  "name": "lru-cache",
                  "location": "/@scope/x/glob/minimatch/lru-cache",
                  "edgesIn": [
                    {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  ],
                },
                {
                  "name": "sigmund",
                  "location": "/@scope/x/glob/minimatch/sigmund",
                  "edgesIn": [
                    {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  ],
                },
              ],
            },
            {
              "name": "once",
              "location": "/@scope/x/glob/once",
              "edgesIn": [
                {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
                {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob/minimatch",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      "name": "@scope/y",
      "location": "/@scope/y",
      "edgesIn": [
        {
          "name": "@scope/y",
          "type": "peer",
          "spec": ">0.99.0",
          "from": "/",
        },
        {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "from": "/@scope/x",
        },
      ],
      "edgesOut": {
        "foo": {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "/foo",
          "error": "INVALID",
        },
      },
    },
  ],
}
`

exports[`test/load-actual.js TAP selflink > loaded tree 1`] = `
{
  "name": "selflink",
  "location": "/",
  "edgesOut": {
    "foo": {
      "name": "foo",
      "type": "prod",
      "spec": "",
      "to": "/foo",
    },
    "@scope/x": {
      "name": "@scope/x",
      "type": "prod",
      "spec": "",
      "to": null,
      "error": "MISSING",
    },
    "@scope/y": {
      "name": "@scope/y",
      "type": "prod",
      "spec": "",
      "to": "/@scope/y",
    },
  },
  "children": [
    {
      "name": "foo",
      "location": "/foo",
      "edgesIn": [
        {
          "name": "foo",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
        {
          "name": "foo",
          "type": "prod",
          "spec": "*",
          "from": "/@scope/y",
        },
      ],
      "edgesOut": {
        "selflink": {
          "name": "selflink",
          "type": "prod",
          "spec": "*",
          "to": "/foo/selflink",
        },
        "glob": {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "/foo/glob",
        },
      },
      "children": [
        {
          "name": "glob",
          "location": "/foo/glob",
          "edgesIn": [
            {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/foo",
            },
          ],
          "children": [
            {
              "name": "graceful-fs",
              "location": "/foo/glob/graceful-fs",
            },
            {
              "name": "inherits",
              "location": "/foo/glob/inherits",
            },
            {
              "name": "minimatch",
              "location": "/foo/glob/minimatch",
              "children": [
                {
                  "name": "lru-cache",
                  "location": "/foo/glob/minimatch/lru-cache",
                },
                {
                  "name": "sigmund",
                  "location": "/foo/glob/minimatch/sigmund",
                },
              ],
            },
            {
              "name": "once",
              "location": "/foo/glob/once",
            },
          ],
        },
        {
          "name": "selflink",
          "location": "/foo/selflink",
          "target": {
            "name": "selflink",
            "parent": undefined,
          },
          "edgesIn": [
            {
              "name": "selflink",
              "type": "prod",
              "spec": "*",
              "from": "/foo",
            },
          ],
        },
      ],
    },
    {
      "name": "@scope/y",
      "location": "/@scope/y",
      "edgesIn": [
        {
          "name": "@scope/y",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      ],
      "edgesOut": {
        "foo": {
          "name": "foo",
          "type": "prod",
          "spec": "*",
          "to": "/foo",
        },
      },
    },
    {
      "name": "@scope/z",
      "location": "/@scope/z",
      "edgesOut": {
        "glob": {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "/@scope/z/glob",
        },
      },
      "children": [
        {
          "name": "glob",
          "location": "/@scope/z/glob",
          "target": {
            "name": "glob",
            "parent": "/foo",
          },
          "edgesIn": [
            {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/@scope/z",
            },
          ],
        },
      ],
    },
  ],
}
`

exports[`test/load-actual.js TAP shake out Link target timing issue > loaded tree 1`] = `
{
  "name": "selflink",
  "location": "/",
  "edgesOut": {
    "foo": {
      "name": "foo",
      "type": "prod",
      "spec": "",
      "to": "/foo",
    },
    "@scope/x": {
      "name": "@scope/x",
      "type": "prod",
      "spec": "",
      "to": null,
      "error": "MISSING",
    },
    "@scope/y": {
      "name": "@scope/y",
      "type": "prod",
      "spec": "",
      "to": "/@scope/y",
    },
  },
  "children": [
    {
      "name": "foo",
      "location": "/foo",
      "edgesIn": [
        {
          "name": "foo",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
        {
          "name": "foo",
          "type": "prod",
          "spec": "*",
          "from": "/@scope/y",
        },
      ],
      "edgesOut": {
        "selflink": {
          "name": "selflink",
          "type": "prod",
          "spec": "*",
          "to": "/foo/selflink",
        },
        "glob": {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "/foo/glob",
        },
      },
      "children": [
        {
          "name": "selflink",
          "location": "/foo/selflink",
          "target": {
            "name": "selflink",
            "parent": undefined,
          },
          "edgesIn": [
            {
              "name": "selflink",
              "type": "prod",
              "spec": "*",
              "from": "/foo",
            },
          ],
        },
        {
          "name": "glob",
          "location": "/foo/glob",
          "edgesIn": [
            {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/foo",
            },
          ],
          "children": [
            {
              "name": "graceful-fs",
              "location": "/foo/glob/graceful-fs",
            },
            {
              "name": "minimatch",
              "location": "/foo/glob/minimatch",
              "children": [
                {
                  "name": "lru-cache",
                  "location": "/foo/glob/minimatch/lru-cache",
                },
                {
                  "name": "sigmund",
                  "location": "/foo/glob/minimatch/sigmund",
                },
              ],
            },
            {
              "name": "inherits",
              "location": "/foo/glob/inherits",
            },
            {
              "name": "once",
              "location": "/foo/glob/once",
            },
          ],
        },
      ],
    },
    {
      "name": "@scope/z",
      "location": "/@scope/z",
      "edgesOut": {
        "glob": {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "/@scope/z/glob",
        },
      },
      "children": [
        {
          "name": "glob",
          "location": "/@scope/z/glob",
          "target": {
            "name": "glob",
            "parent": "/foo",
          },
          "edgesIn": [
            {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/@scope/z",
            },
          ],
        },
      ],
    },
    {
      "name": "@scope/y",
      "location": "/@scope/y",
      "edgesIn": [
        {
          "name": "@scope/y",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      ],
      "edgesOut": {
        "foo": {
          "name": "foo",
          "type": "prod",
          "spec": "*",
          "to": "/foo",
        },
      },
    },
  ],
}
`

exports[`test/load-actual.js TAP workspace > loaded tree 1`] = `
{
  "name": "workspace",
  "location": "/",
  "edgesOut": {
    "a": {
      "name": "a",
      "type": "prod",
      "spec": "",
      "to": "/a",
    },
    "b": {
      "name": "b",
      "type": "prod",
      "spec": "",
      "to": "/b",
    },
    "c": {
      "name": "c",
      "type": "prod",
      "spec": "",
      "to": "/c",
    },
  },
  "children": [
    {
      "name": "a",
      "location": "/a",
      "target": {
        "name": "a",
        "parent": null,
      },
      "edgesIn": [
        {
          "name": "a",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      ],
    },
    {
      "name": "b",
      "location": "/b",
      "target": {
        "name": "b",
        "parent": null,
      },
      "edgesIn": [
        {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      ],
    },
    {
      "name": "c",
      "location": "/c",
      "target": {
        "name": "c",
        "parent": null,
      },
      "edgesIn": [
        {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      ],
    },
  ],
}
`

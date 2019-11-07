/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/arborist/load-actual.js TAP bundle > loaded tree 1`] = `
Node {
  "name": "bundle",
  "location": "",
  "realpath": "bundle",
  "top": "bundle",
  "edgesOut": Map {
    "dep" => Edge {
      "name": "dep",
      "type": "prod",
      "spec": "",
      "to": "bundle/node_modules/dep",
    },
  },
  "children": Map {
    "dep" => Node {
      "name": "dep",
      "location": "node_modules/dep",
      "realpath": "bundle/node_modules/dep",
      "top": "bundle",
      "bundled": true,
      "edgesIn": Set {
        Edge {
          "name": "dep",
          "type": "prod",
          "spec": "",
          "from": "bundle",
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP cwd is default root > loaded tree 1`] = `
Node {
  "name": "root",
  "location": "",
  "realpath": "root",
  "top": "root",
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "root/node_modules/@scope/x",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "root/node_modules/@scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "root/node_modules/foo",
    },
    "notinstalledhere" => Edge {
      "name": "notinstalledhere",
      "type": "optional",
      "spec": "",
      "to": null,
    },
  },
  "children": Map {
    "@scope/x" => Node {
      "name": "@scope/x",
      "location": "node_modules/@scope/x",
      "realpath": "root/node_modules/@scope/x",
      "top": "root",
      "edgesIn": Set {
        Edge {
          "name": "@scope/x",
          "type": "prod",
          "spec": "1",
          "from": "root",
        },
        Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "root/node_modules/@scope/x",
        },
        Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "root/node_modules/foo",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "root/node_modules/@scope/x",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "root/node_modules/@scope/y",
        },
        "express" => Edge {
          "name": "express",
          "type": "peer",
          "spec": "420.69.0-nice",
          "to": null,
          "error": "MISSING",
        },
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "root/node_modules/@scope/x/node_modules/glob",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "node_modules/@scope/x/node_modules/glob",
          "realpath": "root/node_modules/@scope/x/node_modules/glob",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "root/node_modules/@scope/x",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
            },
            "inherits" => Edge {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
            },
            "once" => Edge {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                },
              },
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                },
              },
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                },
                "once" => Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                },
              },
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                    },
                  },
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                    },
                  },
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/once",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                },
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                },
              },
            },
          },
        },
      },
    },
    "@scope/y" => Node {
      "name": "@scope/y",
      "location": "node_modules/@scope/y",
      "realpath": "root/node_modules/@scope/y",
      "top": "root",
      "edgesIn": Set {
        Edge {
          "name": "@scope/y",
          "type": "peer",
          "spec": ">0.99.0",
          "from": "root",
        },
        Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "from": "root/node_modules/@scope/x",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "root/node_modules/foo",
          "error": "INVALID",
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "node_modules/foo",
      "realpath": "root/node_modules/foo",
      "top": "root",
      "edgesIn": Set {
        Edge {
          "name": "foo",
          "type": "dev",
          "spec": "*",
          "from": "root",
        },
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "from": "root/node_modules/@scope/y",
          "error": "INVALID",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "root/node_modules/@scope/x",
        },
        "express" => Edge {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "root/node_modules/foo/node_modules/express",
        },
      },
      "children": Map {
        "express" => Node {
          "name": "express",
          "location": "node_modules/foo/node_modules/express",
          "realpath": "root/node_modules/foo/node_modules/express",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "root/node_modules/foo",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP deepmixedloop > loaded tree 1`] = `
Node {
  "name": "deepmixedloop",
  "location": "",
  "realpath": "deepmixedloop",
  "top": "deepmixedloop",
  "edgesOut": Map {
    "i" => Edge {
      "name": "i",
      "type": "dev",
      "spec": "",
      "to": "deepmixedloop/node_modules/i",
    },
    "x" => Edge {
      "name": "x",
      "type": "prod",
      "spec": "",
      "to": "deepmixedloop/node_modules/x",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "node_modules/a",
      "realpath": "deepmixedloop/node_modules/a",
      "top": "deepmixedloop",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "optional",
          "spec": "",
          "from": "deepmixedloop/node_modules/z",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "deepmixedloop/node_modules/b",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "node_modules/b",
      "realpath": "deepmixedloop/node_modules/b",
      "top": "deepmixedloop",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop/node_modules/a",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "deepmixedloop/node_modules/c",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "node_modules/c",
      "realpath": "deepmixedloop/node_modules/c",
      "top": "deepmixedloop",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop/node_modules/b",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "deepmixedloop/node_modules/d",
        },
      },
    },
    "d" => Node {
      "name": "d",
      "location": "node_modules/d",
      "realpath": "deepmixedloop/node_modules/d",
      "top": "deepmixedloop",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop/node_modules/c",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "deepmixedloop/node_modules/e",
        },
      },
    },
    "e" => Node {
      "name": "e",
      "location": "node_modules/e",
      "realpath": "deepmixedloop/node_modules/e",
      "top": "deepmixedloop",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop/node_modules/d",
        },
      },
    },
    "i" => Node {
      "name": "i",
      "location": "node_modules/i",
      "realpath": "deepmixedloop/node_modules/i",
      "top": "deepmixedloop",
      "dev": true,
      "edgesIn": Set {
        Edge {
          "name": "i",
          "type": "dev",
          "spec": "",
          "from": "deepmixedloop",
        },
      },
      "edgesOut": Map {
        "j" => Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "to": "deepmixedloop/node_modules/j",
        },
      },
    },
    "j" => Node {
      "name": "j",
      "location": "node_modules/j",
      "realpath": "deepmixedloop/node_modules/j",
      "top": "deepmixedloop",
      "dev": true,
      "edgesIn": Set {
        Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop/node_modules/i",
        },
      },
      "edgesOut": Map {
        "k" => Edge {
          "name": "k",
          "type": "prod",
          "spec": "",
          "to": "deepmixedloop/node_modules/k",
        },
      },
    },
    "k" => Node {
      "name": "k",
      "location": "node_modules/k",
      "realpath": "deepmixedloop/node_modules/k",
      "top": "deepmixedloop",
      "dev": true,
      "edgesIn": Set {
        Edge {
          "name": "k",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop/node_modules/j",
        },
      },
    },
    "x" => Node {
      "name": "x",
      "location": "node_modules/x",
      "realpath": "deepmixedloop/node_modules/x",
      "top": "deepmixedloop",
      "edgesIn": Set {
        Edge {
          "name": "x",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop",
        },
      },
      "edgesOut": Map {
        "y" => Edge {
          "name": "y",
          "type": "prod",
          "spec": "",
          "to": "deepmixedloop/node_modules/y",
        },
      },
    },
    "y" => Node {
      "name": "y",
      "location": "node_modules/y",
      "realpath": "deepmixedloop/node_modules/y",
      "top": "deepmixedloop",
      "edgesIn": Set {
        Edge {
          "name": "y",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop/node_modules/x",
        },
      },
      "edgesOut": Map {
        "z" => Edge {
          "name": "z",
          "type": "prod",
          "spec": "",
          "to": "deepmixedloop/node_modules/z",
        },
      },
    },
    "z" => Node {
      "name": "z",
      "location": "node_modules/z",
      "realpath": "deepmixedloop/node_modules/z",
      "top": "deepmixedloop",
      "edgesIn": Set {
        Edge {
          "name": "z",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop/node_modules/y",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "type": "optional",
          "spec": "",
          "to": "deepmixedloop/node_modules/a",
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP deeproot/root > loaded tree 1`] = `
Link {
  "name": "root",
  "location": "",
  "realpath": "root",
  "top": "root",
  "target": Object {
    "name": "root",
    "parent": null,
  },
}
`

exports[`test/arborist/load-actual.js TAP devloop > loaded tree 1`] = `
Node {
  "name": "devloop",
  "location": "",
  "realpath": "devloop",
  "top": "devloop",
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "dev",
      "spec": "",
      "to": "devloop/node_modules/a",
    },
    "c" => Edge {
      "name": "c",
      "type": "prod",
      "spec": "",
      "to": "devloop/node_modules/c",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "node_modules/a",
      "realpath": "devloop/node_modules/a",
      "top": "devloop",
      "dev": true,
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "dev",
          "spec": "",
          "from": "devloop",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "devloop/node_modules/b",
        },
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "devloop/node_modules/d",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "node_modules/b",
      "realpath": "devloop/node_modules/b",
      "top": "devloop",
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "devloop/node_modules/a",
        },
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "devloop/node_modules/d",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "node_modules/c",
      "realpath": "devloop/node_modules/c",
      "top": "devloop",
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "devloop",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "devloop/node_modules/d",
        },
      },
    },
    "d" => Node {
      "name": "d",
      "location": "node_modules/d",
      "realpath": "devloop/node_modules/d",
      "top": "devloop",
      "edgesIn": Set {
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "devloop/node_modules/a",
        },
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "devloop/node_modules/c",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "devloop/node_modules/b",
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP install-types > loaded tree 1`] = `
Node {
  "name": "install-types",
  "location": "",
  "realpath": "install-types",
  "top": "install-types",
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "type": "prod",
      "spec": "^1.1.1",
      "to": "install-types/node_modules/abbrev",
    },
    "bundler" => Edge {
      "name": "bundler",
      "type": "prod",
      "spec": "1.2.3",
      "to": "install-types/node_modules/bundler",
    },
    "full-git-url" => Edge {
      "name": "full-git-url",
      "type": "prod",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "install-types/node_modules/full-git-url",
    },
    "ghshort" => Edge {
      "name": "ghshort",
      "type": "prod",
      "spec": "github:isaacs/abbrev-js",
      "to": "install-types/node_modules/ghshort",
    },
    "old" => Edge {
      "name": "old",
      "type": "prod",
      "spec": "npm:abbrev@^1.0.3",
      "to": "install-types/node_modules/old",
    },
    "pinned" => Edge {
      "name": "pinned",
      "type": "prod",
      "spec": "npm:abbrev@^1.1.1",
      "to": "install-types/node_modules/pinned",
    },
    "reg" => Edge {
      "name": "reg",
      "type": "prod",
      "spec": "npm:abbrev@^1.1.1",
      "to": "install-types/node_modules/reg",
    },
    "remote" => Edge {
      "name": "remote",
      "type": "prod",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "install-types/node_modules/remote",
    },
    "symlink" => Edge {
      "name": "symlink",
      "type": "prod",
      "spec": "file:./abbrev-link-target",
      "to": "install-types/abbrev-link-target",
    },
    "tarball" => Edge {
      "name": "tarball",
      "type": "prod",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "install-types/node_modules/tarball",
    },
  },
  "children": Map {
    "abbrev" => Node {
      "name": "abbrev",
      "location": "node_modules/abbrev",
      "realpath": "install-types/node_modules/abbrev",
      "top": "install-types",
      "edgesIn": Set {
        Edge {
          "name": "abbrev",
          "type": "prod",
          "spec": "^1.1.1",
          "from": "install-types",
        },
      },
    },
    "balanced-match" => Node {
      "name": "balanced-match",
      "location": "node_modules/balanced-match",
      "realpath": "install-types/node_modules/balanced-match",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "balanced-match",
          "type": "prod",
          "spec": "^1.0.0",
          "from": "install-types/node_modules/brace-expansion",
        },
      },
    },
    "brace-expansion" => Node {
      "name": "brace-expansion",
      "location": "node_modules/brace-expansion",
      "realpath": "install-types/node_modules/brace-expansion",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "brace-expansion",
          "type": "prod",
          "spec": "^1.1.7",
          "from": "install-types/node_modules/minimatch",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "type": "prod",
          "spec": "^1.0.0",
          "to": "install-types/node_modules/balanced-match",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "type": "prod",
          "spec": "0.0.1",
          "to": "install-types/node_modules/concat-map",
        },
      },
    },
    "bundler" => Node {
      "name": "bundler",
      "location": "node_modules/bundler",
      "realpath": "install-types/node_modules/bundler",
      "top": "install-types",
      "edgesIn": Set {
        Edge {
          "name": "bundler",
          "type": "prod",
          "spec": "1.2.3",
          "from": "install-types",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "type": "prod",
          "spec": "",
          "to": "install-types/node_modules/bundler/node_modules/a",
        },
      },
      "children": Map {
        "a" => Node {
          "name": "a",
          "location": "node_modules/bundler/node_modules/a",
          "realpath": "install-types/node_modules/bundler/node_modules/a",
          "top": "install-types",
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "name": "a",
              "type": "prod",
              "spec": "",
              "from": "install-types/node_modules/bundler",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "type": "prod",
              "spec": "",
              "to": "install-types/node_modules/bundler/node_modules/b",
            },
          },
        },
        "b" => Node {
          "name": "b",
          "location": "node_modules/bundler/node_modules/b",
          "realpath": "install-types/node_modules/bundler/node_modules/b",
          "top": "install-types",
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "name": "b",
              "type": "prod",
              "spec": "",
              "from": "install-types/node_modules/bundler/node_modules/a",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "type": "prod",
              "spec": "",
              "to": "install-types/node_modules/bundler/node_modules/c",
            },
          },
        },
        "c" => Node {
          "name": "c",
          "location": "node_modules/bundler/node_modules/c",
          "realpath": "install-types/node_modules/bundler/node_modules/c",
          "top": "install-types",
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "name": "c",
              "type": "prod",
              "spec": "",
              "from": "install-types/node_modules/bundler/node_modules/b",
            },
          },
        },
      },
    },
    "concat-map" => Node {
      "name": "concat-map",
      "location": "node_modules/concat-map",
      "realpath": "install-types/node_modules/concat-map",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "concat-map",
          "type": "prod",
          "spec": "0.0.1",
          "from": "install-types/node_modules/brace-expansion",
        },
      },
    },
    "fs.realpath" => Node {
      "name": "fs.realpath",
      "location": "node_modules/fs.realpath",
      "realpath": "install-types/node_modules/fs.realpath",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "fs.realpath",
          "type": "prod",
          "spec": "^1.0.0",
          "from": "install-types/node_modules/glob",
        },
      },
    },
    "full-git-url" => Node {
      "name": "full-git-url",
      "location": "node_modules/full-git-url",
      "realpath": "install-types/node_modules/full-git-url",
      "top": "install-types",
      "edgesIn": Set {
        Edge {
          "name": "full-git-url",
          "type": "prod",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "from": "install-types",
        },
      },
    },
    "ghshort" => Node {
      "name": "ghshort",
      "location": "node_modules/ghshort",
      "realpath": "install-types/node_modules/ghshort",
      "top": "install-types",
      "edgesIn": Set {
        Edge {
          "name": "ghshort",
          "type": "prod",
          "spec": "github:isaacs/abbrev-js",
          "from": "install-types",
        },
      },
    },
    "ghtgz" => Node {
      "name": "ghtgz",
      "location": "node_modules/ghtgz",
      "realpath": "install-types/node_modules/ghtgz",
      "top": "install-types",
      "extraneous": true,
    },
    "glob" => Node {
      "name": "glob",
      "location": "node_modules/glob",
      "realpath": "install-types/node_modules/glob",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "glob",
          "type": "optional",
          "spec": "^7.1.3",
          "from": "install-types/node_modules/rimraf",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "type": "prod",
          "spec": "^1.0.0",
          "to": "install-types/node_modules/fs.realpath",
        },
        "inflight" => Edge {
          "name": "inflight",
          "type": "prod",
          "spec": "^1.0.4",
          "to": "install-types/node_modules/inflight",
        },
        "inherits" => Edge {
          "name": "inherits",
          "type": "prod",
          "spec": "2",
          "to": "install-types/node_modules/inherits",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "type": "prod",
          "spec": "^3.0.4",
          "to": "install-types/node_modules/minimatch",
        },
        "once" => Edge {
          "name": "once",
          "type": "prod",
          "spec": "^1.3.0",
          "to": "install-types/node_modules/once",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "type": "prod",
          "spec": "^1.0.0",
          "to": "install-types/node_modules/path-is-absolute",
        },
      },
    },
    "inflight" => Node {
      "name": "inflight",
      "location": "node_modules/inflight",
      "realpath": "install-types/node_modules/inflight",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "inflight",
          "type": "prod",
          "spec": "^1.0.4",
          "from": "install-types/node_modules/glob",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "type": "prod",
          "spec": "^1.3.0",
          "to": "install-types/node_modules/once",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "type": "prod",
          "spec": "1",
          "to": "install-types/node_modules/wrappy",
        },
      },
    },
    "inherits" => Node {
      "name": "inherits",
      "location": "node_modules/inherits",
      "realpath": "install-types/node_modules/inherits",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "inherits",
          "type": "prod",
          "spec": "2",
          "from": "install-types/node_modules/glob",
        },
      },
    },
    "minimatch" => Node {
      "name": "minimatch",
      "location": "node_modules/minimatch",
      "realpath": "install-types/node_modules/minimatch",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "minimatch",
          "type": "prod",
          "spec": "^3.0.4",
          "from": "install-types/node_modules/glob",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "type": "prod",
          "spec": "^1.1.7",
          "to": "install-types/node_modules/brace-expansion",
        },
      },
    },
    "old" => Node {
      "name": "old",
      "location": "node_modules/old",
      "realpath": "install-types/node_modules/old",
      "top": "install-types",
      "edgesIn": Set {
        Edge {
          "name": "old",
          "type": "prod",
          "spec": "npm:abbrev@^1.0.3",
          "from": "install-types",
        },
      },
    },
    "once" => Node {
      "name": "once",
      "location": "node_modules/once",
      "realpath": "install-types/node_modules/once",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "once",
          "type": "prod",
          "spec": "^1.3.0",
          "from": "install-types/node_modules/glob",
        },
        Edge {
          "name": "once",
          "type": "prod",
          "spec": "^1.3.0",
          "from": "install-types/node_modules/inflight",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "type": "prod",
          "spec": "1",
          "to": "install-types/node_modules/wrappy",
        },
      },
    },
    "path-is-absolute" => Node {
      "name": "path-is-absolute",
      "location": "node_modules/path-is-absolute",
      "realpath": "install-types/node_modules/path-is-absolute",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "path-is-absolute",
          "type": "prod",
          "spec": "^1.0.0",
          "from": "install-types/node_modules/glob",
        },
      },
    },
    "pinned" => Node {
      "name": "pinned",
      "location": "node_modules/pinned",
      "realpath": "install-types/node_modules/pinned",
      "top": "install-types",
      "edgesIn": Set {
        Edge {
          "name": "pinned",
          "type": "prod",
          "spec": "npm:abbrev@^1.1.1",
          "from": "install-types",
        },
      },
    },
    "reg" => Node {
      "name": "reg",
      "location": "node_modules/reg",
      "realpath": "install-types/node_modules/reg",
      "top": "install-types",
      "edgesIn": Set {
        Edge {
          "name": "reg",
          "type": "prod",
          "spec": "npm:abbrev@^1.1.1",
          "from": "install-types",
        },
      },
    },
    "remote" => Node {
      "name": "remote",
      "location": "node_modules/remote",
      "realpath": "install-types/node_modules/remote",
      "top": "install-types",
      "edgesIn": Set {
        Edge {
          "name": "remote",
          "type": "prod",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "from": "install-types",
        },
      },
    },
    "rimraf" => Node {
      "name": "rimraf",
      "location": "node_modules/rimraf",
      "realpath": "install-types/node_modules/rimraf",
      "top": "install-types",
      "extraneous": true,
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "type": "optional",
          "spec": "^7.1.3",
          "to": "install-types/node_modules/glob",
        },
      },
    },
    "symlink" => Link {
      "name": "symlink",
      "location": "node_modules/symlink",
      "realpath": "install-types/abbrev-link-target",
      "top": "install-types",
      "target": Object {
        "name": "abbrev-link-target",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "symlink",
          "type": "prod",
          "spec": "file:./abbrev-link-target",
          "from": "install-types",
        },
      },
    },
    "tarball" => Node {
      "name": "tarball",
      "location": "node_modules/tarball",
      "realpath": "install-types/node_modules/tarball",
      "top": "install-types",
      "edgesIn": Set {
        Edge {
          "name": "tarball",
          "type": "prod",
          "spec": "file:abbrev-1.1.1.tgz",
          "from": "install-types",
        },
      },
    },
    "wrappy" => Node {
      "name": "wrappy",
      "location": "node_modules/wrappy",
      "realpath": "install-types/node_modules/wrappy",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "wrappy",
          "type": "prod",
          "spec": "1",
          "from": "install-types/node_modules/inflight",
        },
        Edge {
          "name": "wrappy",
          "type": "prod",
          "spec": "1",
          "from": "install-types/node_modules/once",
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP linkedroot > loaded tree 1`] = `
Link {
  "name": "linkedroot",
  "location": "",
  "realpath": "root",
  "top": "root",
  "target": Object {
    "name": "root",
    "parent": null,
  },
}
`

exports[`test/arborist/load-actual.js TAP links-all-over > loaded tree 1`] = `
Node {
  "name": "links-all-over",
  "location": "",
  "realpath": "links-all-over",
  "top": "links-all-over",
  "edgesOut": Map {
    "link-deep" => Edge {
      "name": "link-deep",
      "type": "prod",
      "spec": "",
      "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
    },
    "link-link" => Edge {
      "name": "link-link",
      "type": "prod",
      "spec": "",
      "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
    },
    "link-outside-nest" => Edge {
      "name": "link-outside-nest",
      "type": "prod",
      "spec": "",
      "to": "links-all-over/real",
    },
    "nest" => Edge {
      "name": "nest",
      "type": "prod",
      "spec": "",
      "to": "links-all-over/node_modules/nest",
    },
  },
  "children": Map {
    "link-deep" => Link {
      "name": "link-deep",
      "location": "node_modules/link-deep",
      "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      "top": "links-all-over",
      "target": Object {
        "name": "deep",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "link-deep",
          "type": "prod",
          "spec": "",
          "from": "links-all-over",
        },
      },
    },
    "link-link" => Link {
      "name": "link-link",
      "location": "node_modules/link-link",
      "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      "top": "links-all-over",
      "target": Object {
        "name": "deep",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "link-link",
          "type": "prod",
          "spec": "",
          "from": "links-all-over",
        },
        Edge {
          "name": "link-link",
          "type": "prod",
          "spec": "",
          "from": "links-all-over/real",
        },
      },
    },
    "link-outside-nest" => Link {
      "name": "link-outside-nest",
      "location": "node_modules/link-outside-nest",
      "realpath": "links-all-over/real",
      "top": "links-all-over",
      "target": Object {
        "name": "real",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "link-outside-nest",
          "type": "prod",
          "spec": "",
          "from": "links-all-over",
        },
      },
    },
    "nest" => Node {
      "name": "nest",
      "location": "node_modules/nest",
      "realpath": "links-all-over/node_modules/nest",
      "top": "links-all-over",
      "edgesIn": Set {
        Edge {
          "name": "nest",
          "type": "prod",
          "spec": "",
          "from": "links-all-over",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "type": "prod",
          "spec": "",
          "to": "links-all-over/node_modules/nest/node_modules/a",
        },
        "link-in-nest" => Edge {
          "name": "link-in-nest",
          "type": "prod",
          "spec": "",
          "to": "links-all-over/real",
        },
      },
      "children": Map {
        "a" => Node {
          "name": "a",
          "location": "node_modules/nest/node_modules/a",
          "realpath": "links-all-over/node_modules/nest/node_modules/a",
          "top": "links-all-over",
          "edgesIn": Set {
            Edge {
              "name": "a",
              "type": "prod",
              "spec": "",
              "from": "links-all-over/node_modules/nest",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "type": "prod",
              "spec": "",
              "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b",
            },
          },
          "children": Map {
            "b" => Node {
              "name": "b",
              "location": "node_modules/nest/node_modules/a/node_modules/b",
              "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b",
              "top": "links-all-over",
              "errors": Array [
                Object {
                  "code": "EJSONPARSE",
                },
              ],
              "edgesIn": Set {
                Edge {
                  "name": "b",
                  "type": "prod",
                  "spec": "",
                  "from": "links-all-over/node_modules/nest/node_modules/a",
                },
              },
              "children": Map {
                "c" => Node {
                  "name": "c",
                  "location": "node_modules/nest/node_modules/a/node_modules/b/node_modules/c",
                  "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c",
                  "top": "links-all-over",
                  "extraneous": true,
                  "edgesOut": Map {
                    "d" => Edge {
                      "name": "d",
                      "type": "prod",
                      "spec": "",
                      "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
                    },
                  },
                  "children": Map {
                    "d" => Node {
                      "name": "d",
                      "location": "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
                      "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
                      "top": "links-all-over",
                      "extraneous": true,
                      "edgesIn": Set {
                        Edge {
                          "name": "d",
                          "type": "prod",
                          "spec": "",
                          "from": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c",
                        },
                      },
                      "edgesOut": Map {
                        "deep" => Edge {
                          "name": "deep",
                          "type": "prod",
                          "spec": "",
                          "to": null,
                          "error": "MISSING",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "link-in-nest" => Link {
          "name": "link-in-nest",
          "location": "node_modules/nest/node_modules/link-in-nest",
          "realpath": "links-all-over/real",
          "top": "links-all-over",
          "target": Object {
            "name": "real",
            "parent": null,
          },
          "edgesIn": Set {
            Edge {
              "name": "link-in-nest",
              "type": "prod",
              "spec": "",
              "from": "links-all-over/node_modules/nest",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP looking outside of cwd > loaded tree 1`] = `
Node {
  "name": "root",
  "location": "",
  "realpath": "root",
  "top": "root",
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "root/node_modules/@scope/x",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "root/node_modules/@scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "root/node_modules/foo",
    },
    "notinstalledhere" => Edge {
      "name": "notinstalledhere",
      "type": "optional",
      "spec": "",
      "to": null,
    },
  },
  "children": Map {
    "@scope/x" => Node {
      "name": "@scope/x",
      "location": "node_modules/@scope/x",
      "realpath": "root/node_modules/@scope/x",
      "top": "root",
      "edgesIn": Set {
        Edge {
          "name": "@scope/x",
          "type": "prod",
          "spec": "1",
          "from": "root",
        },
        Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "root/node_modules/@scope/x",
        },
        Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "root/node_modules/foo",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "root/node_modules/@scope/x",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "root/node_modules/@scope/y",
        },
        "express" => Edge {
          "name": "express",
          "type": "peer",
          "spec": "420.69.0-nice",
          "to": null,
          "error": "MISSING",
        },
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "root/node_modules/@scope/x/node_modules/glob",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "node_modules/@scope/x/node_modules/glob",
          "realpath": "root/node_modules/@scope/x/node_modules/glob",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "root/node_modules/@scope/x",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
            },
            "inherits" => Edge {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
            },
            "once" => Edge {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                },
              },
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                },
              },
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                },
                "once" => Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                },
              },
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                    },
                  },
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                    },
                  },
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/once",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                },
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                },
              },
            },
          },
        },
      },
    },
    "@scope/y" => Node {
      "name": "@scope/y",
      "location": "node_modules/@scope/y",
      "realpath": "root/node_modules/@scope/y",
      "top": "root",
      "edgesIn": Set {
        Edge {
          "name": "@scope/y",
          "type": "peer",
          "spec": ">0.99.0",
          "from": "root",
        },
        Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "from": "root/node_modules/@scope/x",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "root/node_modules/foo",
          "error": "INVALID",
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "node_modules/foo",
      "realpath": "root/node_modules/foo",
      "top": "root",
      "edgesIn": Set {
        Edge {
          "name": "foo",
          "type": "dev",
          "spec": "*",
          "from": "root",
        },
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "from": "root/node_modules/@scope/y",
          "error": "INVALID",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "root/node_modules/@scope/x",
        },
        "express" => Edge {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "root/node_modules/foo/node_modules/express",
        },
      },
      "children": Map {
        "express" => Node {
          "name": "express",
          "location": "node_modules/foo/node_modules/express",
          "realpath": "root/node_modules/foo/node_modules/express",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "root/node_modules/foo",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP mixedloop > loaded tree 1`] = `
Node {
  "name": "mixedloop",
  "location": "",
  "realpath": "mixedloop",
  "top": "mixedloop",
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "optional",
      "spec": "",
      "to": "mixedloop/node_modules/a",
    },
    "c" => Edge {
      "name": "c",
      "type": "dev",
      "spec": "",
      "to": "mixedloop/node_modules/c",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "node_modules/a",
      "realpath": "mixedloop/node_modules/a",
      "top": "mixedloop",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "optional",
          "spec": "",
          "from": "mixedloop",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "mixedloop/node_modules/b",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "node_modules/b",
      "realpath": "mixedloop/node_modules/b",
      "top": "mixedloop",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "mixedloop/node_modules/a",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "mixedloop/node_modules/c",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "node_modules/c",
      "realpath": "mixedloop/node_modules/c",
      "top": "mixedloop",
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "dev",
          "spec": "",
          "from": "mixedloop",
        },
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "mixedloop/node_modules/b",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "mixedloop/node_modules/d",
        },
      },
    },
    "d" => Node {
      "name": "d",
      "location": "node_modules/d",
      "realpath": "mixedloop/node_modules/d",
      "top": "mixedloop",
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "mixedloop/node_modules/c",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "mixedloop/node_modules/e",
        },
      },
    },
    "e" => Node {
      "name": "e",
      "location": "node_modules/e",
      "realpath": "mixedloop/node_modules/e",
      "top": "mixedloop",
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "mixedloop/node_modules/d",
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP mixedmidway > loaded tree 1`] = `
Node {
  "name": "mixedmidway",
  "location": "",
  "realpath": "mixedmidway",
  "top": "mixedmidway",
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "optional",
      "spec": "",
      "to": "mixedmidway/node_modules/a",
    },
    "b" => Edge {
      "name": "b",
      "type": "optional",
      "spec": "",
      "to": "mixedmidway/node_modules/b",
    },
    "c" => Edge {
      "name": "c",
      "type": "optional",
      "spec": "",
      "to": "mixedmidway/node_modules/c",
    },
    "i" => Edge {
      "name": "i",
      "type": "dev",
      "spec": "",
      "to": "mixedmidway/node_modules/i",
    },
    "k" => Edge {
      "name": "k",
      "type": "optional",
      "spec": "",
      "to": "mixedmidway/node_modules/k",
    },
    "l" => Edge {
      "name": "l",
      "type": "optional",
      "spec": "",
      "to": "mixedmidway/node_modules/l",
    },
    "m" => Edge {
      "name": "m",
      "type": "optional",
      "spec": "",
      "to": "mixedmidway/node_modules/m",
    },
    "x" => Edge {
      "name": "x",
      "type": "prod",
      "spec": "",
      "to": "mixedmidway/node_modules/x",
    },
    "y" => Edge {
      "name": "y",
      "type": "optional",
      "spec": "",
      "to": "mixedmidway/node_modules/y",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "node_modules/a",
      "realpath": "mixedmidway/node_modules/a",
      "top": "mixedmidway",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "optional",
          "spec": "",
          "from": "mixedmidway",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway/node_modules/b",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "node_modules/b",
      "realpath": "mixedmidway/node_modules/b",
      "top": "mixedmidway",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "optional",
          "spec": "",
          "from": "mixedmidway",
        },
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway/node_modules/a",
        },
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway/node_modules/n",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway/node_modules/c",
        },
        "j" => Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway/node_modules/j",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "node_modules/c",
      "realpath": "mixedmidway/node_modules/c",
      "top": "mixedmidway",
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "optional",
          "spec": "",
          "from": "mixedmidway",
        },
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway/node_modules/b",
        },
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway/node_modules/k",
        },
      },
    },
    "i" => Node {
      "name": "i",
      "location": "node_modules/i",
      "realpath": "mixedmidway/node_modules/i",
      "top": "mixedmidway",
      "dev": true,
      "edgesIn": Set {
        Edge {
          "name": "i",
          "type": "dev",
          "spec": "",
          "from": "mixedmidway",
        },
      },
      "edgesOut": Map {
        "j" => Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway/node_modules/j",
        },
      },
    },
    "j" => Node {
      "name": "j",
      "location": "node_modules/j",
      "realpath": "mixedmidway/node_modules/j",
      "top": "mixedmidway",
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway/node_modules/b",
        },
        Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway/node_modules/i",
        },
        Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway/node_modules/n",
        },
      },
      "edgesOut": Map {
        "k" => Edge {
          "name": "k",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway/node_modules/k",
        },
      },
    },
    "k" => Node {
      "name": "k",
      "location": "node_modules/k",
      "realpath": "mixedmidway/node_modules/k",
      "top": "mixedmidway",
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "name": "k",
          "type": "optional",
          "spec": "",
          "from": "mixedmidway",
        },
        Edge {
          "name": "k",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway/node_modules/j",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway/node_modules/c",
        },
      },
    },
    "l" => Node {
      "name": "l",
      "location": "node_modules/l",
      "realpath": "mixedmidway/node_modules/l",
      "top": "mixedmidway",
      "edgesIn": Set {
        Edge {
          "name": "l",
          "type": "optional",
          "spec": "",
          "from": "mixedmidway",
        },
        Edge {
          "name": "l",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway/node_modules/z",
        },
      },
      "edgesOut": Map {
        "m" => Edge {
          "name": "m",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway/node_modules/m",
        },
      },
    },
    "m" => Node {
      "name": "m",
      "location": "node_modules/m",
      "realpath": "mixedmidway/node_modules/m",
      "top": "mixedmidway",
      "edgesIn": Set {
        Edge {
          "name": "m",
          "type": "optional",
          "spec": "",
          "from": "mixedmidway",
        },
        Edge {
          "name": "m",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway/node_modules/l",
        },
      },
    },
    "n" => Node {
      "name": "n",
      "location": "node_modules/n",
      "realpath": "mixedmidway/node_modules/n",
      "top": "mixedmidway",
      "extraneous": true,
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway/node_modules/b",
        },
        "j" => Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway/node_modules/j",
        },
      },
    },
    "x" => Node {
      "name": "x",
      "location": "node_modules/x",
      "realpath": "mixedmidway/node_modules/x",
      "top": "mixedmidway",
      "edgesIn": Set {
        Edge {
          "name": "x",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway",
        },
      },
      "edgesOut": Map {
        "y" => Edge {
          "name": "y",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway/node_modules/y",
        },
      },
    },
    "y" => Node {
      "name": "y",
      "location": "node_modules/y",
      "realpath": "mixedmidway/node_modules/y",
      "top": "mixedmidway",
      "edgesIn": Set {
        Edge {
          "name": "y",
          "type": "optional",
          "spec": "",
          "from": "mixedmidway",
        },
        Edge {
          "name": "y",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway/node_modules/x",
        },
      },
      "edgesOut": Map {
        "z" => Edge {
          "name": "z",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway/node_modules/z",
        },
      },
    },
    "z" => Node {
      "name": "z",
      "location": "node_modules/z",
      "realpath": "mixedmidway/node_modules/z",
      "top": "mixedmidway",
      "edgesIn": Set {
        Edge {
          "name": "z",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway/node_modules/y",
        },
      },
      "edgesOut": Map {
        "l" => Edge {
          "name": "l",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway/node_modules/l",
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP noname > loaded tree 1`] = `
Node {
  "name": "noname",
  "location": "",
  "realpath": "noname",
  "top": "noname",
  "errors": Array [
    Object {
      "code": "ENOENT",
      "path": "../fixtures/noname/package.json",
    },
  ],
  "children": Map {
    "foo" => Node {
      "name": "foo",
      "location": "node_modules/foo",
      "realpath": "noname/node_modules/foo",
      "top": "noname",
      "extraneous": true,
      "errors": Array [
        Object {
          "code": "ENOENT",
          "path": "../fixtures/noname/node_modules/foo/package.json",
        },
      ],
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP optionalloop > loaded tree 1`] = `
Node {
  "name": "optionalloop",
  "location": "",
  "realpath": "optionalloop",
  "top": "optionalloop",
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "optional",
      "spec": "",
      "to": "optionalloop/node_modules/a",
    },
    "c" => Edge {
      "name": "c",
      "type": "prod",
      "spec": "",
      "to": "optionalloop/node_modules/c",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "node_modules/a",
      "realpath": "optionalloop/node_modules/a",
      "top": "optionalloop",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "optional",
          "spec": "",
          "from": "optionalloop",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "optionalloop/node_modules/b",
        },
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "optionalloop/node_modules/d",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "node_modules/b",
      "realpath": "optionalloop/node_modules/b",
      "top": "optionalloop",
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "optionalloop/node_modules/a",
        },
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "optionalloop/node_modules/d",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "node_modules/c",
      "realpath": "optionalloop/node_modules/c",
      "top": "optionalloop",
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "optionalloop",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "optionalloop/node_modules/d",
        },
      },
    },
    "d" => Node {
      "name": "d",
      "location": "node_modules/d",
      "realpath": "optionalloop/node_modules/d",
      "top": "optionalloop",
      "edgesIn": Set {
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "optionalloop/node_modules/a",
        },
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "optionalloop/node_modules/c",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "optionalloop/node_modules/b",
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP optofdev > loaded tree 1`] = `
Node {
  "name": "optofdev",
  "location": "",
  "realpath": "optofdev",
  "top": "optofdev",
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "dev",
      "spec": "",
      "to": "optofdev/node_modules/a",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "node_modules/a",
      "realpath": "optofdev/node_modules/a",
      "top": "optofdev",
      "dev": true,
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "dev",
          "spec": "",
          "from": "optofdev",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "optional",
          "spec": "",
          "to": "optofdev/node_modules/b",
        },
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "optofdev/node_modules/d",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "node_modules/b",
      "realpath": "optofdev/node_modules/b",
      "top": "optofdev",
      "dev": true,
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "optional",
          "spec": "",
          "from": "optofdev/node_modules/a",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "optofdev/node_modules/c",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "node_modules/c",
      "realpath": "optofdev/node_modules/c",
      "top": "optofdev",
      "dev": true,
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "optofdev/node_modules/b",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "optofdev/node_modules/e",
        },
      },
    },
    "d" => Node {
      "name": "d",
      "location": "node_modules/d",
      "realpath": "optofdev/node_modules/d",
      "top": "optofdev",
      "dev": true,
      "edgesIn": Set {
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "optofdev/node_modules/a",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "optofdev/node_modules/e",
        },
      },
    },
    "e" => Node {
      "name": "e",
      "location": "node_modules/e",
      "realpath": "optofdev/node_modules/e",
      "top": "optofdev",
      "dev": true,
      "edgesIn": Set {
        Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "optofdev/node_modules/c",
        },
        Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "optofdev/node_modules/d",
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP other > loaded tree 1`] = `
Node {
  "name": "other",
  "location": "",
  "realpath": "other",
  "top": "other",
  "errors": Array [
    Object {
      "code": "ENOENT",
      "path": "../fixtures/other/package.json",
    },
  ],
  "children": Map {
    "glob" => Link {
      "name": "glob",
      "location": "node_modules/glob",
      "realpath": "root/node_modules/@scope/x/node_modules/glob",
      "top": "other",
      "extraneous": true,
      "target": Object {
        "name": "glob",
        "parent": null,
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP pnpm > loaded tree 1`] = `
Node {
  "name": "pnpm",
  "location": "",
  "realpath": "pnpm",
  "top": "pnpm",
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "",
      "to": "pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
    },
    "a" => Edge {
      "name": "a",
      "type": "prod",
      "spec": "",
      "to": "pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
    },
  },
  "children": Map {
    "@scope/x" => Link {
      "name": "@scope/x",
      "location": "node_modules/@scope/x",
      "realpath": "pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
      "top": "pnpm",
      "target": Object {
        "name": "@scope/x",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "@scope/x",
          "type": "prod",
          "spec": "",
          "from": "pnpm",
        },
      },
    },
    "a" => Link {
      "name": "a",
      "location": "node_modules/a",
      "realpath": "pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
      "top": "pnpm",
      "target": Object {
        "name": "a",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "prod",
          "spec": "",
          "from": "pnpm",
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP root > loaded tree 1`] = `
Node {
  "name": "root",
  "location": "",
  "realpath": "root",
  "top": "root",
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "root/node_modules/@scope/x",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "root/node_modules/@scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "root/node_modules/foo",
    },
    "notinstalledhere" => Edge {
      "name": "notinstalledhere",
      "type": "optional",
      "spec": "",
      "to": null,
    },
  },
  "children": Map {
    "@scope/x" => Node {
      "name": "@scope/x",
      "location": "node_modules/@scope/x",
      "realpath": "root/node_modules/@scope/x",
      "top": "root",
      "edgesIn": Set {
        Edge {
          "name": "@scope/x",
          "type": "prod",
          "spec": "1",
          "from": "root",
        },
        Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "root/node_modules/@scope/x",
        },
        Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "root/node_modules/foo",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "root/node_modules/@scope/x",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "root/node_modules/@scope/y",
        },
        "express" => Edge {
          "name": "express",
          "type": "peer",
          "spec": "420.69.0-nice",
          "to": null,
          "error": "MISSING",
        },
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "root/node_modules/@scope/x/node_modules/glob",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "node_modules/@scope/x/node_modules/glob",
          "realpath": "root/node_modules/@scope/x/node_modules/glob",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "root/node_modules/@scope/x",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
            },
            "inherits" => Edge {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
            },
            "once" => Edge {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                },
              },
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                },
              },
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                },
                "once" => Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                },
              },
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                    },
                  },
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                    },
                  },
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/once",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                },
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                },
              },
            },
          },
        },
      },
    },
    "@scope/y" => Node {
      "name": "@scope/y",
      "location": "node_modules/@scope/y",
      "realpath": "root/node_modules/@scope/y",
      "top": "root",
      "edgesIn": Set {
        Edge {
          "name": "@scope/y",
          "type": "peer",
          "spec": ">0.99.0",
          "from": "root",
        },
        Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "from": "root/node_modules/@scope/x",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "root/node_modules/foo",
          "error": "INVALID",
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "node_modules/foo",
      "realpath": "root/node_modules/foo",
      "top": "root",
      "edgesIn": Set {
        Edge {
          "name": "foo",
          "type": "dev",
          "spec": "*",
          "from": "root",
        },
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "from": "root/node_modules/@scope/y",
          "error": "INVALID",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "root/node_modules/@scope/x",
        },
        "express" => Edge {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "root/node_modules/foo/node_modules/express",
        },
      },
      "children": Map {
        "express" => Node {
          "name": "express",
          "location": "node_modules/foo/node_modules/express",
          "realpath": "root/node_modules/foo/node_modules/express",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "root/node_modules/foo",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP selflink > loaded tree 1`] = `
Node {
  "name": "selflink",
  "location": "",
  "realpath": "selflink",
  "top": "selflink",
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "",
      "to": null,
      "error": "MISSING",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "type": "prod",
      "spec": "",
      "to": "selflink/node_modules/@scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "prod",
      "spec": "",
      "to": "selflink/node_modules/foo",
    },
  },
  "children": Map {
    "@scope/y" => Node {
      "name": "@scope/y",
      "location": "node_modules/@scope/y",
      "realpath": "selflink/node_modules/@scope/y",
      "top": "selflink",
      "edgesIn": Set {
        Edge {
          "name": "@scope/y",
          "type": "prod",
          "spec": "",
          "from": "selflink",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "*",
          "to": "selflink/node_modules/foo",
        },
      },
    },
    "@scope/z" => Node {
      "name": "@scope/z",
      "location": "node_modules/@scope/z",
      "realpath": "selflink/node_modules/@scope/z",
      "top": "selflink",
      "extraneous": true,
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "selflink/node_modules/foo/node_modules/glob",
        },
      },
      "children": Map {
        "glob" => Link {
          "name": "glob",
          "location": "node_modules/@scope/z/node_modules/glob",
          "realpath": "selflink/node_modules/foo/node_modules/glob",
          "top": "selflink",
          "extraneous": true,
          "target": Object {
            "name": "glob",
            "parent": "selflink/node_modules/foo",
          },
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "selflink/node_modules/@scope/z",
            },
          },
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "node_modules/foo",
      "realpath": "selflink/node_modules/foo",
      "top": "selflink",
      "edgesIn": Set {
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "",
          "from": "selflink",
        },
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "*",
          "from": "selflink/node_modules/@scope/y",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "selflink/node_modules/foo/node_modules/glob",
        },
        "selflink" => Edge {
          "name": "selflink",
          "type": "prod",
          "spec": "*",
          "to": "selflink",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "node_modules/foo/node_modules/glob",
          "realpath": "selflink/node_modules/foo/node_modules/glob",
          "top": "selflink",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "selflink/node_modules/foo",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "node_modules/foo/node_modules/glob/node_modules/graceful-fs",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/graceful-fs",
              "top": "selflink",
              "extraneous": true,
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "node_modules/foo/node_modules/glob/node_modules/inherits",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/inherits",
              "top": "selflink",
              "extraneous": true,
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "node_modules/foo/node_modules/glob/node_modules/minimatch",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch",
              "top": "selflink",
              "extraneous": true,
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "top": "selflink",
                  "extraneous": true,
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "top": "selflink",
                  "extraneous": true,
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "node_modules/foo/node_modules/glob/node_modules/once",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/once",
              "top": "selflink",
              "extraneous": true,
            },
          },
        },
        "selflink" => Link {
          "name": "selflink",
          "location": "node_modules/foo/node_modules/selflink",
          "realpath": "selflink",
          "top": "selflink",
          "target": Object {
            "name": "selflink",
            "parent": undefined,
          },
          "edgesIn": Set {
            Edge {
              "name": "selflink",
              "type": "prod",
              "spec": "*",
              "from": "selflink/node_modules/foo",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP shake out Link target timing issue > loaded tree 1`] = `
Node {
  "name": "selflink",
  "location": "",
  "realpath": "selflink",
  "top": "selflink",
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "",
      "to": null,
      "error": "MISSING",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "type": "prod",
      "spec": "",
      "to": "selflink/node_modules/@scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "prod",
      "spec": "",
      "to": "selflink/node_modules/foo",
    },
  },
  "children": Map {
    "@scope/y" => Node {
      "name": "@scope/y",
      "location": "node_modules/@scope/y",
      "realpath": "selflink/node_modules/@scope/y",
      "top": "selflink",
      "edgesIn": Set {
        Edge {
          "name": "@scope/y",
          "type": "prod",
          "spec": "",
          "from": "selflink",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "*",
          "to": "selflink/node_modules/foo",
        },
      },
    },
    "@scope/z" => Node {
      "name": "@scope/z",
      "location": "node_modules/@scope/z",
      "realpath": "selflink/node_modules/@scope/z",
      "top": "selflink",
      "extraneous": true,
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "selflink/node_modules/foo/node_modules/glob",
        },
      },
      "children": Map {
        "glob" => Link {
          "name": "glob",
          "location": "node_modules/@scope/z/node_modules/glob",
          "realpath": "selflink/node_modules/foo/node_modules/glob",
          "top": "selflink",
          "extraneous": true,
          "target": Object {
            "name": "glob",
            "parent": "selflink/node_modules/foo",
          },
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "selflink/node_modules/@scope/z",
            },
          },
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "node_modules/foo",
      "realpath": "selflink/node_modules/foo",
      "top": "selflink",
      "edgesIn": Set {
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "",
          "from": "selflink",
        },
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "*",
          "from": "selflink/node_modules/@scope/y",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "selflink/node_modules/foo/node_modules/glob",
        },
        "selflink" => Edge {
          "name": "selflink",
          "type": "prod",
          "spec": "*",
          "to": "selflink",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "node_modules/foo/node_modules/glob",
          "realpath": "selflink/node_modules/foo/node_modules/glob",
          "top": "selflink",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "selflink/node_modules/foo",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "node_modules/foo/node_modules/glob/node_modules/graceful-fs",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/graceful-fs",
              "top": "selflink",
              "extraneous": true,
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "node_modules/foo/node_modules/glob/node_modules/inherits",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/inherits",
              "top": "selflink",
              "extraneous": true,
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "node_modules/foo/node_modules/glob/node_modules/minimatch",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch",
              "top": "selflink",
              "extraneous": true,
            },
            "once" => Node {
              "name": "once",
              "location": "node_modules/foo/node_modules/glob/node_modules/once",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/once",
              "top": "selflink",
              "extraneous": true,
            },
          },
        },
        "selflink" => Link {
          "name": "selflink",
          "location": "node_modules/foo/node_modules/selflink",
          "realpath": "selflink",
          "top": "selflink",
          "target": Object {
            "name": "selflink",
            "parent": undefined,
          },
          "edgesIn": Set {
            Edge {
              "name": "selflink",
              "type": "prod",
              "spec": "*",
              "from": "selflink/node_modules/foo",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP symlinked-node-modules/example > loaded tree 1`] = `
Node {
  "name": "example",
  "location": "",
  "realpath": "symlinked-node-modules/example",
  "top": "symlinked-node-modules/example",
  "children": Map {
    "bar" => Link {
      "name": "bar",
      "location": "node_modules/bar",
      "realpath": "symlinked-node-modules/bar",
      "top": "symlinked-node-modules/example",
      "extraneous": true,
      "target": Object {
        "name": "bar",
        "parent": null,
      },
    },
    "foo" => Link {
      "name": "foo",
      "location": "node_modules/foo",
      "realpath": "symlinked-node-modules/linked-node-modules/foo",
      "top": "symlinked-node-modules/example",
      "extraneous": true,
      "target": Object {
        "name": "foo",
        "parent": null,
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP workspace > loaded tree 1`] = `
Node {
  "name": "workspace",
  "location": "",
  "realpath": "workspace",
  "top": "workspace",
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "prod",
      "spec": "",
      "to": "workspace/packages/a",
    },
    "b" => Edge {
      "name": "b",
      "type": "prod",
      "spec": "",
      "to": "workspace/packages/b",
    },
    "c" => Edge {
      "name": "c",
      "type": "prod",
      "spec": "",
      "to": "workspace/packages/c",
    },
  },
  "children": Map {
    "a" => Link {
      "name": "a",
      "location": "node_modules/a",
      "realpath": "workspace/packages/a",
      "top": "workspace",
      "target": Object {
        "name": "a",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "prod",
          "spec": "",
          "from": "workspace",
        },
      },
    },
    "b" => Link {
      "name": "b",
      "location": "node_modules/b",
      "realpath": "workspace/packages/b",
      "top": "workspace",
      "target": Object {
        "name": "b",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "workspace",
        },
      },
    },
    "c" => Link {
      "name": "c",
      "location": "node_modules/c",
      "realpath": "workspace/packages/c",
      "top": "workspace",
      "target": Object {
        "name": "c",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "workspace",
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP workspace2 > loaded tree 1`] = `
Node {
  "name": "workspace2",
  "location": "",
  "realpath": "workspace2",
  "top": "workspace2",
  "edgesOut": Map {
    "b" => Edge {
      "name": "b",
      "type": "prod",
      "spec": "",
      "to": "workspace2/node_modules/b",
    },
    "c" => Edge {
      "name": "c",
      "type": "prod",
      "spec": "",
      "to": "workspace2/node_modules/c",
    },
  },
  "children": Map {
    "b" => Node {
      "name": "b",
      "location": "node_modules/b",
      "realpath": "workspace2/node_modules/b",
      "top": "workspace2",
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "workspace2",
        },
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "workspace2/node_modules/b/node_modules/d",
        },
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "workspace2/x",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "workspace2/node_modules/b/node_modules/d",
        },
      },
      "children": Map {
        "d" => Node {
          "name": "d",
          "location": "node_modules/b/node_modules/d",
          "realpath": "workspace2/node_modules/b/node_modules/d",
          "top": "workspace2",
          "edgesIn": Set {
            Edge {
              "name": "d",
              "type": "prod",
              "spec": "",
              "from": "workspace2/node_modules/b",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "type": "prod",
              "spec": "",
              "to": "workspace2/node_modules/b",
            },
          },
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "node_modules/c",
      "realpath": "workspace2/node_modules/c",
      "top": "workspace2",
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "workspace2",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "workspace2/node_modules/b/node_modules/d",
        },
        "x" => Edge {
          "name": "x",
          "type": "prod",
          "spec": "",
          "to": "workspace2/x",
        },
      },
      "children": Map {
        "d" => Link {
          "name": "d",
          "location": "node_modules/c/node_modules/d",
          "realpath": "workspace2/node_modules/b/node_modules/d",
          "top": "workspace2",
          "target": Object {
            "name": "d",
            "parent": "workspace2/node_modules/b",
          },
          "edgesIn": Set {
            Edge {
              "name": "d",
              "type": "prod",
              "spec": "",
              "from": "workspace2/node_modules/c",
            },
          },
        },
        "x" => Link {
          "name": "x",
          "location": "node_modules/c/node_modules/x",
          "realpath": "workspace2/x",
          "top": "workspace2",
          "target": Object {
            "name": "x",
            "parent": null,
          },
          "edgesIn": Set {
            Edge {
              "name": "x",
              "type": "prod",
              "spec": "",
              "from": "workspace2/node_modules/c",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/arborist/load-actual.js TAP workspace3 > loaded tree 1`] = `
Node {
  "name": "workspace3",
  "location": "",
  "realpath": "workspace3",
  "top": "workspace3",
  "children": Map {
    "a" => Link {
      "name": "a",
      "location": "node_modules/a",
      "realpath": "workspace3/packages/a",
      "top": "workspace3",
      "extraneous": true,
      "target": Object {
        "name": "a",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "prod",
          "spec": "",
          "from": "workspace3/app",
        },
        Edge {
          "name": "a",
          "type": "prod",
          "spec": "",
          "from": "workspace3/packages/b",
        },
        Edge {
          "name": "a",
          "type": "prod",
          "spec": "",
          "from": "workspace3/packages/c",
        },
      },
    },
    "app" => Link {
      "name": "app",
      "location": "node_modules/app",
      "realpath": "workspace3/app",
      "top": "workspace3",
      "extraneous": true,
      "target": Object {
        "name": "app",
        "parent": null,
      },
    },
    "b" => Link {
      "name": "b",
      "location": "node_modules/b",
      "realpath": "workspace3/packages/b",
      "top": "workspace3",
      "extraneous": true,
      "target": Object {
        "name": "b",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "workspace3/app",
        },
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "workspace3/packages/a",
        },
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "workspace3/packages/c",
        },
      },
    },
    "c" => Link {
      "name": "c",
      "location": "node_modules/c",
      "realpath": "workspace3/packages/c",
      "top": "workspace3",
      "extraneous": true,
      "target": Object {
        "name": "c",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "workspace3/app",
        },
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "workspace3/packages/a",
        },
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "workspace3/packages/b",
        },
      },
    },
  },
}
`

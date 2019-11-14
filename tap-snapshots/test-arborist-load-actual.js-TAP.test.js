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
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "bundle",
        "dependencies": Object {
          "dep": "",
        },
        "bundleDependencies": Array [
          "dep",
        ],
      },
      "node_modules/dep": Object {
        "name": "dep",
        "inBundle": true,
      },
    },
    "dependencies": Object {
      "dep": Object {
        "inBundle": true,
      },
    },
    "name": "bundle",
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
    "notinstalledhere" => Edge {
      "name": "notinstalledhere",
      "type": "optional",
      "spec": "",
      "to": null,
    },
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
  },
  "children": Map {
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
          "type": "optional",
          "spec": "",
          "from": "root/node_modules/foo",
        },
        Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "root/node_modules/@scope/x",
        },
      },
      "edgesOut": Map {
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "root/node_modules/@scope/y",
        },
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "root/node_modules/@scope/x/node_modules/glob",
        },
        "express" => Edge {
          "name": "express",
          "type": "peer",
          "spec": "420.69.0-nice",
          "to": null,
          "error": "MISSING",
        },
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "root/node_modules/@scope/x",
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
                "sigmund" => Edge {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                },
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
  },
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "root",
        "version": "1.2.3",
        "dependencies": Object {
          "@scope/x": "1",
          "notinstalledhere": "",
        },
        "peerDependencies": Object {
          "@scope/y": ">0.99.0",
        },
        "optionalDependencies": Object {
          "notinstalledhere": "",
        },
        "devDependencies": Object {
          "foo": "*",
        },
      },
      "node_modules/foo": Object {
        "name": "foo",
        "version": "1.2.3",
        "dependencies": Object {
          "express": "npm:abbrev@*",
          "@scope/x": "",
        },
        "optionalDependencies": Object {
          "@scope/x": "",
        },
      },
      "node_modules/@scope/x": Object {
        "name": "@scope/x",
        "version": "1.2.3",
        "dependencies": Object {
          "glob": "4",
          "@scope/y": "",
        },
        "peerDependencies": Object {
          "express": "420.69.0-nice",
          "@scope/x": "",
        },
        "optionalDependencies": Object {
          "@scope/y": "",
        },
      },
      "node_modules/@scope/y": Object {
        "name": "@scope/y",
        "version": "1.2.3",
        "dependencies": Object {
          "foo": "99.x",
        },
      },
      "node_modules/foo/node_modules/express": Object {
        "name": "abbrev",
        "version": "1.1.1",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      },
      "node_modules/@scope/x/node_modules/glob": Object {
        "name": "glob",
        "version": "4.0.5",
        "dependencies": Object {
          "graceful-fs": "",
          "inherits": "",
          "minimatch": "",
          "once": "",
        },
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs": Object {
        "name": "graceful-fs",
        "version": "3.0.2",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/inherits": Object {
        "name": "inherits",
        "version": "2.0.1",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch": Object {
        "name": "minimatch",
        "version": "1.0.0",
        "dependencies": Object {
          "sigmund": "",
          "lru-cache": "",
          "once": "",
        },
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/once": Object {
        "name": "once",
        "version": "1.3.0",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache": Object {
        "name": "lru-cache",
        "version": "2.5.0",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund": Object {
        "name": "sigmund",
        "version": "1.0.0",
      },
    },
    "dependencies": Object {
      "foo": Object {
        "version": "1.2.3",
        "requires": Object {
          "@scope/x": "",
          "express": "npm:abbrev@*",
        },
        "dependencies": Object {
          "express": Object {
            "version": "npm:abbrev@1.1.1",
            "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
            "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
          },
        },
      },
      "@scope/x": Object {
        "version": "1.2.3",
        "requires": Object {
          "@scope/y": "",
          "glob": "4",
          "express": "420.69.0-nice",
          "@scope/x": "",
        },
        "dependencies": Object {
          "glob": Object {
            "version": "4.0.5",
            "requires": Object {
              "graceful-fs": "",
              "inherits": "",
              "minimatch": "",
              "once": "",
            },
            "dependencies": Object {
              "graceful-fs": Object {
                "version": "3.0.2",
              },
              "inherits": Object {
                "version": "2.0.1",
              },
              "minimatch": Object {
                "version": "1.0.0",
                "requires": Object {
                  "sigmund": "",
                  "lru-cache": "",
                  "once": "",
                },
                "dependencies": Object {
                  "lru-cache": Object {
                    "version": "2.5.0",
                  },
                  "sigmund": Object {
                    "version": "1.0.0",
                  },
                },
              },
              "once": Object {
                "version": "1.3.0",
              },
            },
          },
        },
      },
      "@scope/y": Object {
        "version": "1.2.3",
        "requires": Object {
          "foo": "99.x",
        },
      },
    },
    "name": "root",
    "version": "1.2.3",
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
    "x" => Edge {
      "name": "x",
      "type": "prod",
      "spec": "",
      "to": "deepmixedloop/node_modules/x",
    },
    "i" => Edge {
      "name": "i",
      "type": "dev",
      "spec": "",
      "to": "deepmixedloop/node_modules/i",
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
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "root",
        "dependencies": Object {
          "x": "",
        },
        "devDependencies": Object {
          "i": "",
        },
      },
      "node_modules/a": Object {
        "name": "a",
        "version": "1.2.3",
        "dependencies": Object {
          "b": "",
        },
      },
      "node_modules/b": Object {
        "name": "b",
        "version": "1.2.3",
        "dependencies": Object {
          "c": "",
        },
      },
      "node_modules/c": Object {
        "name": "c",
        "version": "1.2.3",
        "dependencies": Object {
          "d": "",
        },
      },
      "node_modules/e": Object {
        "name": "e",
        "version": "1.2.3",
      },
      "node_modules/d": Object {
        "name": "d",
        "version": "1.2.3",
        "dependencies": Object {
          "e": "",
        },
      },
      "node_modules/i": Object {
        "name": "i",
        "dependencies": Object {
          "j": "",
        },
      },
      "node_modules/j": Object {
        "name": "j",
        "dependencies": Object {
          "k": "",
        },
      },
      "node_modules/k": Object {
        "name": "k",
      },
      "node_modules/x": Object {
        "name": "x",
        "dependencies": Object {
          "y": "",
        },
      },
      "node_modules/y": Object {
        "name": "y",
        "dependencies": Object {
          "z": "",
        },
      },
      "node_modules/z": Object {
        "name": "z",
        "dependencies": Object {
          "a": "",
        },
        "optionalDependencies": Object {
          "a": "",
        },
      },
    },
    "dependencies": Object {
      "a": Object {
        "version": "1.2.3",
        "devOptional": true,
        "optional": true,
        "requires": Object {
          "b": "",
        },
      },
      "b": Object {
        "version": "1.2.3",
        "devOptional": true,
        "optional": true,
        "requires": Object {
          "c": "",
        },
      },
      "c": Object {
        "version": "1.2.3",
        "devOptional": true,
        "optional": true,
        "requires": Object {
          "d": "",
        },
      },
      "e": Object {
        "version": "1.2.3",
        "devOptional": true,
        "optional": true,
      },
      "d": Object {
        "version": "1.2.3",
        "devOptional": true,
        "optional": true,
        "requires": Object {
          "e": "",
        },
      },
      "i": Object {
        "devOptional": true,
        "dev": true,
        "requires": Object {
          "j": "",
        },
      },
      "j": Object {
        "devOptional": true,
        "dev": true,
        "requires": Object {
          "k": "",
        },
      },
      "k": Object {
        "devOptional": true,
        "dev": true,
      },
      "x": Object {
        "requires": Object {
          "y": "",
        },
      },
      "y": Object {
        "requires": Object {
          "z": "",
        },
      },
      "z": Object {
        "requires": Object {
          "a": "",
        },
      },
    },
    "name": "deepmixedloop",
    "version": "npm:root@",
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
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "../deeproot/root": Object {
        "resolved": "../../root",
        "link": true,
      },
      "": Object {
        "name": "root",
        "version": "1.2.3",
        "dependencies": Object {
          "@scope/x": "1",
          "notinstalledhere": "",
        },
        "peerDependencies": Object {
          "@scope/y": ">0.99.0",
        },
        "optionalDependencies": Object {
          "notinstalledhere": "",
        },
        "devDependencies": Object {
          "foo": "*",
        },
      },
      "node_modules/foo": Object {
        "name": "foo",
        "version": "1.2.3",
        "dependencies": Object {
          "express": "npm:abbrev@*",
          "@scope/x": "",
        },
        "optionalDependencies": Object {
          "@scope/x": "",
        },
      },
      "node_modules/@scope/y": Object {
        "name": "@scope/y",
        "version": "1.2.3",
        "dependencies": Object {
          "foo": "99.x",
        },
      },
      "node_modules/@scope/x": Object {
        "name": "@scope/x",
        "version": "1.2.3",
        "dependencies": Object {
          "glob": "4",
          "@scope/y": "",
        },
        "peerDependencies": Object {
          "express": "420.69.0-nice",
          "@scope/x": "",
        },
        "optionalDependencies": Object {
          "@scope/y": "",
        },
      },
    },
    "dependencies": Object {
      "../deeproot/root": Object {
        "version": "file:",
      },
      "foo": Object {
        "version": "1.2.3",
        "requires": Object {
          "@scope/x": "",
          "express": "npm:abbrev@*",
        },
      },
      "@scope/y": Object {
        "version": "1.2.3",
        "requires": Object {
          "foo": "99.x",
        },
      },
      "@scope/x": Object {
        "version": "1.2.3",
        "requires": Object {
          "@scope/y": "",
          "glob": "4",
          "express": "420.69.0-nice",
          "@scope/x": "",
        },
      },
    },
    "name": "root",
    "version": "1.2.3",
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
    "c" => Edge {
      "name": "c",
      "type": "prod",
      "spec": "",
      "to": "devloop/node_modules/c",
    },
    "a" => Edge {
      "name": "a",
      "type": "dev",
      "spec": "",
      "to": "devloop/node_modules/a",
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
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "devloop",
        "dependencies": Object {
          "c": "",
        },
        "devDependencies": Object {
          "a": "",
        },
      },
      "node_modules/a": Object {
        "name": "a",
        "version": "1.2.3",
        "dependencies": Object {
          "b": "",
          "d": "",
        },
      },
      "node_modules/b": Object {
        "name": "b",
        "version": "1.2.3",
      },
      "node_modules/c": Object {
        "name": "c",
        "version": "1.2.3",
        "dependencies": Object {
          "d": "",
        },
      },
      "node_modules/d": Object {
        "name": "d",
        "version": "1.2.3",
        "dependencies": Object {
          "b": "",
        },
      },
    },
    "dependencies": Object {
      "a": Object {
        "version": "1.2.3",
        "devOptional": true,
        "dev": true,
        "requires": Object {
          "b": "",
          "d": "",
        },
      },
      "b": Object {
        "version": "1.2.3",
      },
      "c": Object {
        "version": "1.2.3",
        "requires": Object {
          "d": "",
        },
      },
      "d": Object {
        "version": "1.2.3",
        "requires": Object {
          "b": "",
        },
      },
    },
    "name": "devloop",
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
    "bundler" => Edge {
      "name": "bundler",
      "type": "prod",
      "spec": "1.2.3",
      "to": "install-types/node_modules/bundler",
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
    "ghtgz" => Node {
      "name": "ghtgz",
      "location": "node_modules/ghtgz",
      "realpath": "install-types/node_modules/ghtgz",
      "top": "install-types",
      "extraneous": true,
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
          "from": "install-types/node_modules/inflight",
        },
        Edge {
          "name": "once",
          "type": "prod",
          "spec": "^1.3.0",
          "from": "install-types/node_modules/glob",
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
  },
  "meta": Object {
    "name": "install-types",
    "version": "npm:a@1.2.3",
    "lockfileVersion": 2,
    "requires": true,
    "dependencies": Object {
      "unhosted-git": Object {
        "version": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
        "from": "git+https://mygit.com/isaacs/abbrev-js.git",
      },
      "abbrev": Object {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      },
      "brace-expansion": Object {
        "version": "1.1.11",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
        "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "requires": Object {
          "balanced-match": "^1.0.0",
          "concat-map": "0.0.1",
        },
      },
      "balanced-match": Object {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
        "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
      "bundler": Object {
        "version": "1.2.3",
        "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
        "requires": Object {
          "a": "",
        },
        "dependencies": Object {
          "a": Object {
            "version": "1.2.3",
            "inBundle": true,
            "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
            "integrity": "sha1-3Klr13/Wjfd5OnMDajug1UBdR3s=",
            "requires": Object {
              "b": "",
            },
          },
          "c": Object {
            "version": "1.2.3",
            "inBundle": true,
            "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
            "integrity": "sha1-5Klr13/Wjfd5OnMDajug1UBdR3s=",
          },
          "b": Object {
            "version": "1.2.3",
            "inBundle": true,
            "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
            "integrity": "sha1-4Klr13/Wjfd5OnMDajug1UBdR3s=",
            "requires": Object {
              "c": "",
            },
          },
        },
      },
      "concat-map": Object {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
      "fs.realpath": Object {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
        "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
      "ghshort": Object {
        "version": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
        "from": "ghshort@github:isaacs/abbrev-js",
      },
      "full-git-url": Object {
        "version": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
        "from": "full-git-url@git+https://github.com/isaacs/abbrev-js.git",
      },
      "ghtgz": Object {
        "version": "npm:abbrev@1.1.1",
        "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
        "integrity": "sha512-yowslMd9y/lGBCDVO0RwZoXRK5X0zMsf6XECM6DdeqN7qwVnFQ6IAwJai7BD4mVe1xOdWWqWNkuzyuStvSBnHw==",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
      "inflight": Object {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
        "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "requires": Object {
          "once": "^1.3.0",
          "wrappy": "1",
        },
      },
      "glob": Object {
        "version": "7.1.4",
        "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
        "integrity": "sha512-hkLPepehmnKk41pUGm3sYxoFs/umurYfYJCerbXEyFIWcAzvpipAgVkBqqT9RBKMGjnq6kMuyYwha6csxbiM1A==",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "requires": Object {
          "fs.realpath": "^1.0.0",
          "inflight": "^1.0.4",
          "inherits": "2",
          "minimatch": "^3.0.4",
          "once": "^1.3.0",
          "path-is-absolute": "^1.0.0",
        },
      },
      "inherits": Object {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
        "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
      "minimatch": Object {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
        "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "requires": Object {
          "brace-expansion": "^1.1.7",
        },
      },
      "path-is-absolute": Object {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
        "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
      "old": Object {
        "version": "npm:abbrev@1.0.3",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
        "integrity": "sha1-qgScln+ZkiKqQuFENPDFYu9GgkE=",
      },
      "pinned": Object {
        "version": "npm:abbrev@1.1.1",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      },
      "once": Object {
        "version": "1.4.0",
        "integrity": "sha512-oic2VxBO6ZRyhk4W/amcN3D4tGpSELjpXwShWPBHNVDvVXo2+JcNnNx6Dth+Y961vfz7SmCCc6RP2oNQE2yVwQ==",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "requires": Object {
          "wrappy": "1",
        },
      },
      "reg": Object {
        "version": "npm:abbrev@1.1.1",
        "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      },
      "remote": Object {
        "version": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      },
      "tarball": Object {
        "version": "file:abbrev-1.1.1.tgz",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      },
      "wrappy": Object {
        "version": "1.0.2",
        "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
        "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
      "rimraf": Object {
        "version": "2.6.3",
        "integrity": "sha512-hKCr1HweNbIu6JN4K8WYBwikeg2ISRHU2D7OTX0fivTb+2dOM7mITni0cAjgWCsNGUQDFI+4BTNeGBVp/WbBow==",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "requires": Object {
          "glob": "^7.1.3",
        },
      },
      "symlink": Object {
        "version": "file:abbrev-link-target",
      },
      "abbrev-link-target": Object {
        "version": "npm:abbrev@1.1.1",
        "requires": Object {
          "tap": "^14.4.1",
        },
      },
    },
    "packages": Object {
      "": Object {
        "name": "a",
        "version": "1.2.3",
        "dependencies": Object {
          "abbrev": "^1.1.1",
          "full-git-url": "git+https://github.com/isaacs/abbrev-js.git",
          "ghshort": "github:isaacs/abbrev-js",
          "old": "npm:abbrev@^1.0.3",
          "pinned": "npm:abbrev@^1.1.1",
          "reg": "npm:abbrev@^1.1.1",
          "remote": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "symlink": "file:./abbrev-link-target",
          "tarball": "file:abbrev-1.1.1.tgz",
          "bundler": "1.2.3",
        },
      },
      "node_modules/abbrev/node_modules/@scope/name": Object {
        "name": "@scope/name",
      },
      "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername": Object {
        "name": "@otherscope/othername",
        "integrity": "the integrity is not valid, clearly",
        "resolved": "fake resolved value",
      },
      "node_modules/unhosted-git": Object {
        "name": "unhosted-git",
        "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
      },
      "node_modules/abbrev": Object {
        "name": "abbrev",
        "version": "1.1.1",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      },
      "node_modules/brace-expansion": Object {
        "name": "brace-expansion",
        "version": "1.1.11",
        "dependencies": Object {
          "balanced-match": "^1.0.0",
          "concat-map": "0.0.1",
        },
        "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      },
      "node_modules/balanced-match": Object {
        "name": "balanced-match",
        "version": "1.0.0",
        "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
        "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      },
      "node_modules/bundler": Object {
        "name": "bundler",
        "version": "1.2.3",
        "dependencies": Object {
          "a": "",
        },
        "bundleDependencies": Array [
          "a",
        ],
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
        "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
      },
      "node_modules/concat-map": Object {
        "name": "concat-map",
        "version": "0.0.1",
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
        "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      },
      "node_modules/fs.realpath": Object {
        "name": "fs.realpath",
        "version": "1.0.0",
        "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
        "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      },
      "node_modules/ghshort": Object {
        "name": "abbrev",
        "version": "1.1.1",
        "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
      },
      "node_modules/full-git-url": Object {
        "name": "abbrev",
        "version": "1.1.1",
        "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
      },
      "node_modules/ghtgz": Object {
        "name": "abbrev",
        "version": "1.1.1",
        "integrity": "sha512-yowslMd9y/lGBCDVO0RwZoXRK5X0zMsf6XECM6DdeqN7qwVnFQ6IAwJai7BD4mVe1xOdWWqWNkuzyuStvSBnHw==",
        "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
      },
      "node_modules/inflight": Object {
        "name": "inflight",
        "version": "1.0.6",
        "dependencies": Object {
          "once": "^1.3.0",
          "wrappy": "1",
        },
        "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
        "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      },
      "node_modules/glob": Object {
        "name": "glob",
        "version": "7.1.4",
        "dependencies": Object {
          "fs.realpath": "^1.0.0",
          "inflight": "^1.0.4",
          "inherits": "2",
          "minimatch": "^3.0.4",
          "once": "^1.3.0",
          "path-is-absolute": "^1.0.0",
        },
        "integrity": "sha512-hkLPepehmnKk41pUGm3sYxoFs/umurYfYJCerbXEyFIWcAzvpipAgVkBqqT9RBKMGjnq6kMuyYwha6csxbiM1A==",
        "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
      },
      "node_modules/inherits": Object {
        "name": "inherits",
        "version": "2.0.4",
        "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      },
      "node_modules/minimatch": Object {
        "name": "minimatch",
        "version": "3.0.4",
        "dependencies": Object {
          "brace-expansion": "^1.1.7",
        },
        "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      },
      "node_modules/path-is-absolute": Object {
        "name": "path-is-absolute",
        "version": "1.0.1",
        "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
        "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      },
      "node_modules/old": Object {
        "name": "abbrev",
        "version": "1.0.3",
        "integrity": "sha1-qgScln+ZkiKqQuFENPDFYu9GgkE=",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
      },
      "node_modules/pinned": Object {
        "name": "abbrev",
        "version": "1.1.1",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      },
      "node_modules/once": Object {
        "name": "once",
        "version": "1.4.0",
        "dependencies": Object {
          "wrappy": "1",
        },
        "integrity": "sha512-oic2VxBO6ZRyhk4W/amcN3D4tGpSELjpXwShWPBHNVDvVXo2+JcNnNx6Dth+Y961vfz7SmCCc6RP2oNQE2yVwQ==",
        "resolved": "file:once-1.4.0.tgz",
      },
      "node_modules/reg": Object {
        "name": "abbrev",
        "version": "1.1.1",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
      },
      "node_modules/remote": Object {
        "name": "abbrev",
        "version": "1.1.1",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      },
      "node_modules/tarball": Object {
        "name": "abbrev",
        "version": "1.1.1",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "resolved": "file:abbrev-1.1.1.tgz",
      },
      "node_modules/wrappy": Object {
        "name": "wrappy",
        "version": "1.0.2",
        "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
        "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
      },
      "node_modules/rimraf": Object {
        "name": "rimraf",
        "version": "2.6.3",
        "dependencies": Object {
          "glob": "^7.1.3",
        },
        "optionalDependencies": Object {
          "glob": "^7.1.3",
        },
        "integrity": "sha512-hKCr1HweNbIu6JN4K8WYBwikeg2ISRHU2D7OTX0fivTb+2dOM7mITni0cAjgWCsNGUQDFI+4BTNeGBVp/WbBow==",
        "resolved": "file:rimraf-2.6.3.tgz",
      },
      "node_modules/symlink": Object {
        "resolved": "../../abbrev-link-target",
        "link": true,
      },
      "abbrev-link-target": Object {
        "name": "abbrev",
        "version": "1.1.1",
        "devDependencies": Object {
          "tap": "^14.4.1",
        },
      },
      "node_modules/bundler/node_modules/a": Object {
        "name": "a",
        "version": "1.2.3",
        "dependencies": Object {
          "b": "",
        },
        "integrity": "sha1-3Klr13/Wjfd5OnMDajug1UBdR3s=",
        "inBundle": true,
        "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
      },
      "node_modules/bundler/node_modules/c": Object {
        "name": "c",
        "version": "1.2.3",
        "integrity": "sha1-5Klr13/Wjfd5OnMDajug1UBdR3s=",
        "inBundle": true,
        "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
      },
      "node_modules/bundler/node_modules/b": Object {
        "name": "b",
        "version": "1.2.3",
        "dependencies": Object {
          "c": "",
        },
        "integrity": "sha1-4Klr13/Wjfd5OnMDajug1UBdR3s=",
        "inBundle": true,
        "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
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
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "root",
        "version": "1.2.3",
        "dependencies": Object {
          "@scope/x": "1",
          "notinstalledhere": "",
        },
        "peerDependencies": Object {
          "@scope/y": ">0.99.0",
        },
        "optionalDependencies": Object {
          "notinstalledhere": "",
        },
        "devDependencies": Object {
          "foo": "*",
        },
      },
      "../linkedroot": Object {
        "resolved": "../root",
        "link": true,
      },
      "node_modules/foo": Object {
        "name": "foo",
        "version": "1.2.3",
        "dependencies": Object {
          "express": "npm:abbrev@*",
          "@scope/x": "",
        },
        "optionalDependencies": Object {
          "@scope/x": "",
        },
      },
      "node_modules/@scope/x": Object {
        "name": "@scope/x",
        "version": "1.2.3",
        "dependencies": Object {
          "glob": "4",
          "@scope/y": "",
        },
        "peerDependencies": Object {
          "express": "420.69.0-nice",
          "@scope/x": "",
        },
        "optionalDependencies": Object {
          "@scope/y": "",
        },
      },
      "node_modules/@scope/y": Object {
        "name": "@scope/y",
        "version": "1.2.3",
        "dependencies": Object {
          "foo": "99.x",
        },
      },
    },
    "dependencies": Object {
      "../linkedroot": Object {
        "version": "file:",
      },
      "foo": Object {
        "version": "1.2.3",
        "requires": Object {
          "@scope/x": "",
          "express": "npm:abbrev@*",
        },
      },
      "@scope/x": Object {
        "version": "1.2.3",
        "requires": Object {
          "@scope/y": "",
          "glob": "4",
          "express": "420.69.0-nice",
          "@scope/x": "",
        },
      },
      "@scope/y": Object {
        "version": "1.2.3",
        "requires": Object {
          "foo": "99.x",
        },
      },
    },
    "name": "root",
    "version": "1.2.3",
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
    "nest" => Edge {
      "name": "nest",
      "type": "prod",
      "spec": "",
      "to": "links-all-over/node_modules/nest",
    },
    "link-outside-nest" => Edge {
      "name": "link-outside-nest",
      "type": "prod",
      "spec": "",
      "to": "links-all-over/real",
    },
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
  },
  "children": Map {
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
            Edge {
              "name": "a",
              "type": "prod",
              "spec": "",
              "from": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
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
                          "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
                        },
                      },
                      "children": Map {
                        "deep" => Node {
                          "name": "deep",
                          "location": "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
                          "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
                          "top": "links-all-over",
                          "edgesIn": Set {
                            Edge {
                              "name": "deep",
                              "type": "prod",
                              "spec": "",
                              "from": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
                            },
                          },
                          "edgesOut": Map {
                            "deep-a" => Edge {
                              "name": "deep-a",
                              "type": "prod",
                              "spec": "",
                              "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep/node_modules/deep-a",
                            },
                            "a" => Edge {
                              "name": "a",
                              "type": "prod",
                              "spec": "",
                              "to": "links-all-over/node_modules/nest/node_modules/a",
                            },
                          },
                          "children": Map {
                            "deep-a" => Node {
                              "name": "deep-a",
                              "location": "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep/node_modules/deep-a",
                              "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep/node_modules/deep-a",
                              "top": "links-all-over",
                              "edgesIn": Set {
                                Edge {
                                  "name": "deep-a",
                                  "type": "prod",
                                  "spec": "",
                                  "from": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
                                },
                              },
                            },
                          },
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
    "link-deep" => Link {
      "name": "link-deep",
      "location": "node_modules/link-deep",
      "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      "top": "links-all-over",
      "target": Object {
        "name": "deep",
        "parent": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
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
        "parent": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
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
  },
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "links-all-over",
        "version": "1.2.3",
        "dependencies": Object {
          "nest": "",
          "link-outside-nest": "",
          "link-deep": "",
          "link-link": "",
        },
      },
      "node_modules/nest": Object {
        "name": "nest",
        "version": "1.2.3",
        "dependencies": Object {
          "a": "",
          "link-in-nest": "",
        },
      },
      "node_modules/link-outside-nest": Object {
        "resolved": "../../real",
        "link": true,
      },
      "real": Object {
        "name": "real",
        "version": "1.2.3",
        "dependencies": Object {
          "link-link": "",
        },
      },
      "node_modules/link-deep": Object {
        "resolved": "../nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
        "link": true,
      },
      "node_modules/link-link": Object {
        "resolved": "../nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
        "link": true,
      },
      "node_modules/nest/node_modules/a": Object {
        "name": "a",
        "version": "1.2.3",
        "dependencies": Object {
          "b": "",
        },
      },
      "node_modules/nest/node_modules/link-in-nest": Object {
        "resolved": "../../../../real",
        "link": true,
      },
      "node_modules/nest/node_modules/a/node_modules/b": Object {},
      "node_modules/nest/node_modules/a/node_modules/b/node_modules/c": Object {
        "name": "c",
        "version": "1.2.3",
        "dependencies": Object {
          "d": "",
        },
      },
      "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d": Object {
        "name": "d",
        "version": "1.2.3",
        "dependencies": Object {
          "deep": "",
        },
      },
      "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep": Object {
        "name": "deep",
        "version": "1.2.3",
        "dependencies": Object {
          "deep-a": "",
          "a": "",
        },
      },
      "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep/node_modules/deep-a": Object {
        "name": "deep-a",
        "version": "1.2.3",
      },
    },
    "dependencies": Object {
      "nest": Object {
        "version": "1.2.3",
        "requires": Object {
          "a": "",
          "link-in-nest": "",
        },
        "dependencies": Object {
          "a": Object {
            "version": "1.2.3",
            "requires": Object {
              "b": "",
            },
            "dependencies": Object {
              "b": Object {
                "dependencies": Object {
                  "c": Object {
                    "version": "1.2.3",
                    "extraneous": true,
                    "devOptional": true,
                    "dev": true,
                    "optional": true,
                    "requires": Object {
                      "d": "",
                    },
                    "dependencies": Object {
                      "d": Object {
                        "version": "1.2.3",
                        "extraneous": true,
                        "devOptional": true,
                        "dev": true,
                        "optional": true,
                        "requires": Object {
                          "deep": "",
                        },
                        "dependencies": Object {
                          "deep": Object {
                            "version": "1.2.3",
                            "requires": Object {
                              "deep-a": "",
                              "a": "",
                            },
                            "dependencies": Object {
                              "deep-a": Object {
                                "version": "1.2.3",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "link-in-nest": Object {
            "version": "file:real",
          },
        },
      },
      "link-outside-nest": Object {
        "version": "file:real",
      },
      "real": Object {
        "version": "1.2.3",
        "requires": Object {
          "link-link": "",
        },
      },
      "link-deep": Object {
        "version": "file:node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      },
      "link-link": Object {
        "version": "file:node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      },
    },
    "name": "links-all-over",
    "version": "1.2.3",
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
    "notinstalledhere" => Edge {
      "name": "notinstalledhere",
      "type": "optional",
      "spec": "",
      "to": null,
    },
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
  },
  "children": Map {
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
          "type": "optional",
          "spec": "",
          "from": "root/node_modules/foo",
        },
        Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "root/node_modules/@scope/x",
        },
      },
      "edgesOut": Map {
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "root/node_modules/@scope/y",
        },
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "root/node_modules/@scope/x/node_modules/glob",
        },
        "express" => Edge {
          "name": "express",
          "type": "peer",
          "spec": "420.69.0-nice",
          "to": null,
          "error": "MISSING",
        },
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "root/node_modules/@scope/x",
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
                "sigmund" => Edge {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                },
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
  },
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "root",
        "version": "1.2.3",
        "dependencies": Object {
          "@scope/x": "1",
          "notinstalledhere": "",
        },
        "peerDependencies": Object {
          "@scope/y": ">0.99.0",
        },
        "optionalDependencies": Object {
          "notinstalledhere": "",
        },
        "devDependencies": Object {
          "foo": "*",
        },
      },
      "node_modules/foo": Object {
        "name": "foo",
        "version": "1.2.3",
        "dependencies": Object {
          "express": "npm:abbrev@*",
          "@scope/x": "",
        },
        "optionalDependencies": Object {
          "@scope/x": "",
        },
      },
      "node_modules/@scope/x": Object {
        "name": "@scope/x",
        "version": "1.2.3",
        "dependencies": Object {
          "glob": "4",
          "@scope/y": "",
        },
        "peerDependencies": Object {
          "express": "420.69.0-nice",
          "@scope/x": "",
        },
        "optionalDependencies": Object {
          "@scope/y": "",
        },
      },
      "node_modules/@scope/y": Object {
        "name": "@scope/y",
        "version": "1.2.3",
        "dependencies": Object {
          "foo": "99.x",
        },
      },
      "node_modules/foo/node_modules/express": Object {
        "name": "abbrev",
        "version": "1.1.1",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      },
      "node_modules/@scope/x/node_modules/glob": Object {
        "name": "glob",
        "version": "4.0.5",
        "dependencies": Object {
          "graceful-fs": "",
          "inherits": "",
          "minimatch": "",
          "once": "",
        },
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs": Object {
        "name": "graceful-fs",
        "version": "3.0.2",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/inherits": Object {
        "name": "inherits",
        "version": "2.0.1",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch": Object {
        "name": "minimatch",
        "version": "1.0.0",
        "dependencies": Object {
          "sigmund": "",
          "lru-cache": "",
          "once": "",
        },
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/once": Object {
        "name": "once",
        "version": "1.3.0",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache": Object {
        "name": "lru-cache",
        "version": "2.5.0",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund": Object {
        "name": "sigmund",
        "version": "1.0.0",
      },
    },
    "dependencies": Object {
      "foo": Object {
        "version": "1.2.3",
        "requires": Object {
          "@scope/x": "",
          "express": "npm:abbrev@*",
        },
        "dependencies": Object {
          "express": Object {
            "version": "npm:abbrev@1.1.1",
            "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
            "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
          },
        },
      },
      "@scope/x": Object {
        "version": "1.2.3",
        "requires": Object {
          "@scope/y": "",
          "glob": "4",
          "express": "420.69.0-nice",
          "@scope/x": "",
        },
        "dependencies": Object {
          "glob": Object {
            "version": "4.0.5",
            "requires": Object {
              "graceful-fs": "",
              "inherits": "",
              "minimatch": "",
              "once": "",
            },
            "dependencies": Object {
              "graceful-fs": Object {
                "version": "3.0.2",
              },
              "inherits": Object {
                "version": "2.0.1",
              },
              "minimatch": Object {
                "version": "1.0.0",
                "requires": Object {
                  "sigmund": "",
                  "lru-cache": "",
                  "once": "",
                },
                "dependencies": Object {
                  "lru-cache": Object {
                    "version": "2.5.0",
                  },
                  "sigmund": Object {
                    "version": "1.0.0",
                  },
                },
              },
              "once": Object {
                "version": "1.3.0",
              },
            },
          },
        },
      },
      "@scope/y": Object {
        "version": "1.2.3",
        "requires": Object {
          "foo": "99.x",
        },
      },
    },
    "name": "root",
    "version": "1.2.3",
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
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "root",
        "dependencies": Object {
          "a": "",
        },
        "optionalDependencies": Object {
          "a": "",
        },
        "devDependencies": Object {
          "c": "",
        },
      },
      "node_modules/a": Object {
        "name": "a",
        "version": "1.1.1",
        "dependencies": Object {
          "b": "",
        },
      },
      "node_modules/b": Object {
        "name": "b",
        "version": "1.2.3",
        "dependencies": Object {
          "c": "",
        },
      },
      "node_modules/c": Object {
        "name": "c",
        "version": "1.2.3",
        "dependencies": Object {
          "d": "",
        },
      },
      "node_modules/d": Object {
        "name": "d",
        "version": "1.2.3",
        "dependencies": Object {
          "e": "",
        },
      },
      "node_modules/e": Object {
        "name": "e",
        "version": "1.2.3",
      },
    },
    "dependencies": Object {
      "a": Object {
        "version": "1.1.1",
        "devOptional": true,
        "optional": true,
        "requires": Object {
          "b": "",
        },
      },
      "b": Object {
        "version": "1.2.3",
        "devOptional": true,
        "optional": true,
        "requires": Object {
          "c": "",
        },
      },
      "c": Object {
        "version": "1.2.3",
        "devOptional": true,
        "requires": Object {
          "d": "",
        },
      },
      "d": Object {
        "version": "1.2.3",
        "devOptional": true,
        "requires": Object {
          "e": "",
        },
      },
      "e": Object {
        "version": "1.2.3",
        "devOptional": true,
      },
    },
    "name": "mixedloop",
    "version": "npm:root@",
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
    "y" => Edge {
      "name": "y",
      "type": "optional",
      "spec": "",
      "to": "mixedmidway/node_modules/y",
    },
    "x" => Edge {
      "name": "x",
      "type": "prod",
      "spec": "",
      "to": "mixedmidway/node_modules/x",
    },
    "i" => Edge {
      "name": "i",
      "type": "dev",
      "spec": "",
      "to": "mixedmidway/node_modules/i",
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
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "root",
        "dependencies": Object {
          "x": "",
          "a": "",
          "b": "",
          "c": "",
          "k": "",
          "l": "",
          "m": "",
          "y": "",
        },
        "optionalDependencies": Object {
          "a": "",
          "b": "",
          "c": "",
          "k": "",
          "l": "",
          "m": "",
          "y": "",
        },
        "devDependencies": Object {
          "i": "",
        },
      },
      "node_modules/a": Object {
        "name": "a",
        "version": "1.2.3",
        "dependencies": Object {
          "b": "",
        },
      },
      "node_modules/b": Object {
        "name": "b",
        "version": "1.2.3",
        "dependencies": Object {
          "c": "",
          "j": "",
        },
      },
      "node_modules/c": Object {
        "name": "c",
        "version": "1.2.3",
      },
      "node_modules/i": Object {
        "name": "i",
        "dependencies": Object {
          "j": "",
        },
      },
      "node_modules/j": Object {
        "name": "j",
        "dependencies": Object {
          "k": "",
        },
      },
      "node_modules/k": Object {
        "name": "k",
        "dependencies": Object {
          "c": "",
        },
      },
      "node_modules/l": Object {
        "name": "l",
        "dependencies": Object {
          "m": "",
        },
      },
      "node_modules/m": Object {
        "name": "m",
      },
      "node_modules/n": Object {
        "name": "n",
        "dependencies": Object {
          "b": "",
          "j": "",
        },
      },
      "node_modules/x": Object {
        "name": "x",
        "dependencies": Object {
          "y": "",
        },
      },
      "node_modules/y": Object {
        "name": "y",
        "dependencies": Object {
          "z": "",
        },
      },
      "node_modules/z": Object {
        "name": "z",
        "dependencies": Object {
          "l": "",
        },
      },
    },
    "dependencies": Object {
      "a": Object {
        "version": "1.2.3",
        "devOptional": true,
        "optional": true,
        "requires": Object {
          "b": "",
        },
      },
      "b": Object {
        "version": "1.2.3",
        "devOptional": true,
        "optional": true,
        "requires": Object {
          "c": "",
          "j": "",
        },
      },
      "c": Object {
        "version": "1.2.3",
        "devOptional": true,
      },
      "i": Object {
        "devOptional": true,
        "dev": true,
        "requires": Object {
          "j": "",
        },
      },
      "j": Object {
        "devOptional": true,
        "requires": Object {
          "k": "",
        },
      },
      "k": Object {
        "devOptional": true,
        "requires": Object {
          "c": "",
        },
      },
      "l": Object {
        "requires": Object {
          "m": "",
        },
      },
      "m": Object {},
      "n": Object {
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "requires": Object {
          "b": "",
          "j": "",
        },
      },
      "x": Object {
        "requires": Object {
          "y": "",
        },
      },
      "y": Object {
        "requires": Object {
          "z": "",
        },
      },
      "z": Object {
        "requires": Object {
          "l": "",
        },
      },
    },
    "name": "mixedmidway",
    "version": "npm:root@",
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
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {},
      "node_modules/foo": Object {},
    },
    "dependencies": Object {
      "foo": Object {
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
    },
    "name": "noname",
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
          "from": "optionalloop/node_modules/c",
        },
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "optionalloop/node_modules/a",
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
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "optionalloop",
        "dependencies": Object {
          "c": "",
          "a": "",
        },
        "optionalDependencies": Object {
          "a": "",
        },
      },
      "node_modules/c": Object {
        "name": "c",
        "version": "1.2.3",
        "dependencies": Object {
          "d": "",
        },
      },
      "node_modules/b": Object {
        "name": "b",
        "version": "1.2.3",
      },
      "node_modules/a": Object {
        "name": "a",
        "version": "1.2.3",
        "dependencies": Object {
          "b": "",
          "d": "",
        },
      },
      "node_modules/d": Object {
        "name": "d",
        "version": "1.2.3",
        "dependencies": Object {
          "b": "",
        },
      },
    },
    "dependencies": Object {
      "c": Object {
        "version": "1.2.3",
        "requires": Object {
          "d": "",
        },
      },
      "b": Object {
        "version": "1.2.3",
      },
      "a": Object {
        "version": "1.2.3",
        "devOptional": true,
        "optional": true,
        "requires": Object {
          "b": "",
          "d": "",
        },
      },
      "d": Object {
        "version": "1.2.3",
        "requires": Object {
          "b": "",
        },
      },
    },
    "name": "optionalloop",
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
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "optofdev",
        "devDependencies": Object {
          "a": "",
        },
      },
      "node_modules/a": Object {
        "name": "a",
        "dependencies": Object {
          "d": "",
          "b": "",
        },
        "optionalDependencies": Object {
          "b": "",
        },
      },
      "node_modules/c": Object {
        "name": "c",
        "dependencies": Object {
          "e": "",
        },
      },
      "node_modules/d": Object {
        "name": "d",
        "dependencies": Object {
          "e": "",
        },
      },
      "node_modules/b": Object {
        "name": "b",
        "dependencies": Object {
          "c": "",
        },
      },
      "node_modules/e": Object {
        "name": "e",
      },
    },
    "dependencies": Object {
      "a": Object {
        "devOptional": true,
        "dev": true,
        "requires": Object {
          "b": "",
          "d": "",
        },
      },
      "c": Object {
        "devOptional": true,
        "dev": true,
        "optional": true,
        "requires": Object {
          "e": "",
        },
      },
      "d": Object {
        "devOptional": true,
        "dev": true,
        "requires": Object {
          "e": "",
        },
      },
      "b": Object {
        "devOptional": true,
        "dev": true,
        "optional": true,
        "requires": Object {
          "c": "",
        },
      },
      "e": Object {
        "devOptional": true,
        "dev": true,
      },
    },
    "name": "optofdev",
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
        "parent": "root/node_modules/@scope/x",
      },
    },
  },
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {},
      "node_modules/glob": Object {
        "resolved": "../../../root/node_modules/@scope/x/node_modules/glob",
        "link": true,
      },
      "../root/node_modules/@scope/x": Object {
        "name": "@scope/x",
        "version": "1.2.3",
        "dependencies": Object {
          "glob": "4",
          "@scope/y": "",
        },
        "peerDependencies": Object {
          "express": "420.69.0-nice",
          "@scope/x": "",
        },
        "optionalDependencies": Object {
          "@scope/y": "",
        },
      },
      "../root/node_modules/@scope/x/node_modules/glob": Object {
        "name": "glob",
        "version": "4.0.5",
        "dependencies": Object {
          "graceful-fs": "",
          "inherits": "",
          "minimatch": "",
          "once": "",
        },
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs": Object {
        "name": "graceful-fs",
        "version": "3.0.2",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/inherits": Object {
        "name": "inherits",
        "version": "2.0.1",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/once": Object {
        "name": "once",
        "version": "1.3.0",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch": Object {
        "name": "minimatch",
        "version": "1.0.0",
        "dependencies": Object {
          "sigmund": "",
          "lru-cache": "",
          "once": "",
        },
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache": Object {
        "name": "lru-cache",
        "version": "2.5.0",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund": Object {
        "name": "sigmund",
        "version": "1.0.0",
      },
    },
    "dependencies": Object {
      "glob": Object {
        "version": "file:../root/node_modules/@scope/x/node_modules/glob",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
      "../root": Object {
        "dependencies": Object {
          "@scope/x": Object {
            "version": "1.2.3",
            "extraneous": true,
            "devOptional": true,
            "dev": true,
            "optional": true,
            "requires": Object {
              "@scope/y": "",
              "glob": "4",
              "express": "420.69.0-nice",
              "@scope/x": "",
            },
            "dependencies": Object {
              "glob": Object {
                "version": "4.0.5",
                "extraneous": true,
                "devOptional": true,
                "dev": true,
                "optional": true,
                "requires": Object {
                  "graceful-fs": "",
                  "inherits": "",
                  "minimatch": "",
                  "once": "",
                },
                "dependencies": Object {
                  "graceful-fs": Object {
                    "version": "3.0.2",
                    "extraneous": true,
                    "devOptional": true,
                    "dev": true,
                    "optional": true,
                  },
                  "inherits": Object {
                    "version": "2.0.1",
                    "extraneous": true,
                    "devOptional": true,
                    "dev": true,
                    "optional": true,
                  },
                  "once": Object {
                    "version": "1.3.0",
                    "extraneous": true,
                    "devOptional": true,
                    "dev": true,
                    "optional": true,
                  },
                  "minimatch": Object {
                    "version": "1.0.0",
                    "extraneous": true,
                    "devOptional": true,
                    "dev": true,
                    "optional": true,
                    "requires": Object {
                      "sigmund": "",
                      "lru-cache": "",
                      "once": "",
                    },
                    "dependencies": Object {
                      "lru-cache": Object {
                        "version": "2.5.0",
                        "extraneous": true,
                        "devOptional": true,
                        "dev": true,
                        "optional": true,
                      },
                      "sigmund": Object {
                        "version": "1.0.0",
                        "extraneous": true,
                        "devOptional": true,
                        "dev": true,
                        "optional": true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "name": "other",
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
    "a" => Edge {
      "name": "a",
      "type": "prod",
      "spec": "",
      "to": "pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
    },
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "",
      "to": "pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
    },
  },
  "children": Map {
    "a" => Link {
      "name": "a",
      "location": "node_modules/a",
      "realpath": "pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
      "top": "pnpm",
      "target": Object {
        "name": "a",
        "parent": "pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0",
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
    "@scope/x" => Link {
      "name": "@scope/x",
      "location": "node_modules/@scope/x",
      "realpath": "pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
      "top": "pnpm",
      "target": Object {
        "name": "@scope/x",
        "parent": "pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0",
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
  },
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "pnpm-root",
        "version": "1.0.0",
        "dependencies": Object {
          "a": "",
          "@scope/x": "",
        },
      },
      "node_modules/a": Object {
        "resolved": "../.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
        "link": true,
      },
      "node_modules/@scope/x": Object {
        "resolved": "../../.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
        "link": true,
      },
      "node_modules/.pnpm/registry.npmjs.org/a/1.0.0": Object {},
      "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a": Object {
        "name": "a",
        "version": "1.0.0",
        "dependencies": Object {
          "b": "",
          "c": "",
        },
      },
      "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0": Object {},
      "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x": Object {
        "name": "@scope/x",
        "version": "1.0.0",
        "dependencies": Object {
          "a": "",
          "b": "",
          "c": "",
        },
      },
      "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/a": Object {
        "resolved": "../../../../../a/1.0.0/node_modules/a",
        "link": true,
      },
      "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/b": Object {
        "resolved": "../../../../../b/1.0.0/node_modules/b",
        "link": true,
      },
      "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/b": Object {
        "resolved": "../../../../b/1.0.0/node_modules/b",
        "link": true,
      },
      "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/c": Object {
        "resolved": "../../../../../c/1.0.0/node_modules/c",
        "link": true,
      },
      "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/c": Object {
        "resolved": "../../../../c/1.0.0/node_modules/c",
        "link": true,
      },
      "node_modules/.pnpm/registry.npmjs.org/b/1.0.0": Object {},
      "node_modules/.pnpm/registry.npmjs.org/c/1.0.0": Object {},
      "node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/b": Object {
        "name": "b",
        "version": "1.0.0",
        "dependencies": Object {
          "c": "",
        },
      },
      "node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c": Object {
        "name": "c",
        "version": "1.0.0",
        "dependencies": Object {
          "@scope/x": "",
        },
      },
      "node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/c": Object {
        "resolved": "../../../../c/1.0.0/node_modules/c",
        "link": true,
      },
      "node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/@scope/x": Object {
        "resolved": "../../../../../@scope/x/1.0.0/node_modules/@scope/x",
        "link": true,
      },
    },
    "dependencies": Object {
      "a": Object {
        "version": "file:node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
      },
      "@scope/x": Object {
        "version": "file:node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
      },
      ".pnpm/registry.npmjs.org/a/1.0.0": Object {
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "dependencies": Object {
          "a": Object {
            "version": "1.0.0",
            "requires": Object {
              "b": "",
              "c": "",
            },
          },
          "b": Object {
            "version": "file:node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/b",
          },
          "c": Object {
            "version": "file:node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c",
          },
        },
      },
      ".pnpm/registry.npmjs.org/@scope/x/1.0.0": Object {
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "dependencies": Object {
          "@scope/x": Object {
            "version": "1.0.0",
            "requires": Object {
              "a": "",
              "b": "",
              "c": "",
            },
          },
          "a": Object {
            "version": "file:node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
          },
          "b": Object {
            "version": "file:node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/b",
          },
          "c": Object {
            "version": "file:node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c",
          },
        },
      },
      ".pnpm/registry.npmjs.org/b/1.0.0": Object {
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "dependencies": Object {
          "b": Object {
            "version": "1.0.0",
            "extraneous": true,
            "devOptional": true,
            "dev": true,
            "optional": true,
            "requires": Object {
              "c": "",
            },
          },
          "c": Object {
            "version": "file:node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c",
            "extraneous": true,
            "devOptional": true,
            "dev": true,
            "optional": true,
          },
        },
      },
      ".pnpm/registry.npmjs.org/c/1.0.0": Object {
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "dependencies": Object {
          "c": Object {
            "version": "1.0.0",
            "extraneous": true,
            "devOptional": true,
            "dev": true,
            "optional": true,
            "requires": Object {
              "@scope/x": "",
            },
          },
          "@scope/x": Object {
            "version": "file:node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
            "extraneous": true,
            "devOptional": true,
            "dev": true,
            "optional": true,
          },
        },
      },
    },
    "name": "pnpm",
    "version": "npm:pnpm-root@1.0.0",
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
    "notinstalledhere" => Edge {
      "name": "notinstalledhere",
      "type": "optional",
      "spec": "",
      "to": null,
    },
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
  },
  "children": Map {
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
          "type": "optional",
          "spec": "",
          "from": "root/node_modules/foo",
        },
        Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "root/node_modules/@scope/x",
        },
      },
      "edgesOut": Map {
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "root/node_modules/@scope/y",
        },
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "root/node_modules/@scope/x/node_modules/glob",
        },
        "express" => Edge {
          "name": "express",
          "type": "peer",
          "spec": "420.69.0-nice",
          "to": null,
          "error": "MISSING",
        },
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "root/node_modules/@scope/x",
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
                "sigmund" => Edge {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                },
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
  },
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "root",
        "version": "1.2.3",
        "dependencies": Object {
          "@scope/x": "1",
          "notinstalledhere": "",
        },
        "peerDependencies": Object {
          "@scope/y": ">0.99.0",
        },
        "optionalDependencies": Object {
          "notinstalledhere": "",
        },
        "devDependencies": Object {
          "foo": "*",
        },
      },
      "node_modules/foo": Object {
        "name": "foo",
        "version": "1.2.3",
        "dependencies": Object {
          "express": "npm:abbrev@*",
          "@scope/x": "",
        },
        "optionalDependencies": Object {
          "@scope/x": "",
        },
      },
      "node_modules/@scope/x": Object {
        "name": "@scope/x",
        "version": "1.2.3",
        "dependencies": Object {
          "glob": "4",
          "@scope/y": "",
        },
        "peerDependencies": Object {
          "express": "420.69.0-nice",
          "@scope/x": "",
        },
        "optionalDependencies": Object {
          "@scope/y": "",
        },
      },
      "node_modules/@scope/y": Object {
        "name": "@scope/y",
        "version": "1.2.3",
        "dependencies": Object {
          "foo": "99.x",
        },
      },
      "node_modules/foo/node_modules/express": Object {
        "name": "abbrev",
        "version": "1.1.1",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      },
      "node_modules/@scope/x/node_modules/glob": Object {
        "name": "glob",
        "version": "4.0.5",
        "dependencies": Object {
          "graceful-fs": "",
          "inherits": "",
          "minimatch": "",
          "once": "",
        },
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs": Object {
        "name": "graceful-fs",
        "version": "3.0.2",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/inherits": Object {
        "name": "inherits",
        "version": "2.0.1",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch": Object {
        "name": "minimatch",
        "version": "1.0.0",
        "dependencies": Object {
          "sigmund": "",
          "lru-cache": "",
          "once": "",
        },
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/once": Object {
        "name": "once",
        "version": "1.3.0",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache": Object {
        "name": "lru-cache",
        "version": "2.5.0",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund": Object {
        "name": "sigmund",
        "version": "1.0.0",
      },
    },
    "dependencies": Object {
      "foo": Object {
        "version": "1.2.3",
        "requires": Object {
          "@scope/x": "",
          "express": "npm:abbrev@*",
        },
        "dependencies": Object {
          "express": Object {
            "version": "npm:abbrev@1.1.1",
            "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
            "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
          },
        },
      },
      "@scope/x": Object {
        "version": "1.2.3",
        "requires": Object {
          "@scope/y": "",
          "glob": "4",
          "express": "420.69.0-nice",
          "@scope/x": "",
        },
        "dependencies": Object {
          "glob": Object {
            "version": "4.0.5",
            "requires": Object {
              "graceful-fs": "",
              "inherits": "",
              "minimatch": "",
              "once": "",
            },
            "dependencies": Object {
              "graceful-fs": Object {
                "version": "3.0.2",
              },
              "inherits": Object {
                "version": "2.0.1",
              },
              "minimatch": Object {
                "version": "1.0.0",
                "requires": Object {
                  "sigmund": "",
                  "lru-cache": "",
                  "once": "",
                },
                "dependencies": Object {
                  "lru-cache": Object {
                    "version": "2.5.0",
                  },
                  "sigmund": Object {
                    "version": "1.0.0",
                  },
                },
              },
              "once": Object {
                "version": "1.3.0",
              },
            },
          },
        },
      },
      "@scope/y": Object {
        "version": "1.2.3",
        "requires": Object {
          "foo": "99.x",
        },
      },
    },
    "name": "root",
    "version": "1.2.3",
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
    "foo" => Edge {
      "name": "foo",
      "type": "prod",
      "spec": "",
      "to": "selflink/node_modules/foo",
    },
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
  },
  "children": Map {
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
        "selflink" => Edge {
          "name": "selflink",
          "type": "prod",
          "spec": "*",
          "to": "selflink",
        },
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "selflink/node_modules/foo/node_modules/glob",
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
  },
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "selflink",
        "version": "1.2.3",
        "dependencies": Object {
          "foo": "",
          "@scope/x": "",
          "@scope/y": "",
        },
      },
      "node_modules/foo": Object {
        "name": "foo",
        "version": "1.2.3",
        "dependencies": Object {
          "selflink": "*",
          "glob": "4",
        },
      },
      "node_modules/@scope/y": Object {
        "name": "@scope/y",
        "version": "1.2.3",
        "dependencies": Object {
          "foo": "*",
        },
      },
      "node_modules/@scope/z": Object {
        "name": "@scope/z",
        "version": "1.2.3",
        "dependencies": Object {
          "glob": "4",
        },
      },
      "node_modules/foo/node_modules/glob": Object {
        "name": "glob",
        "version": "4.0.5",
      },
      "node_modules/@scope/z/node_modules/glob": Object {
        "resolved": "../../../../foo/node_modules/glob",
        "link": true,
      },
      "node_modules/foo/node_modules/selflink": Object {
        "resolved": "../../../..",
        "link": true,
      },
      "node_modules/foo/node_modules/glob/node_modules/graceful-fs": Object {
        "name": "graceful-fs",
        "version": "3.0.2",
      },
      "node_modules/foo/node_modules/glob/node_modules/inherits": Object {
        "name": "inherits",
        "version": "2.0.1",
      },
      "node_modules/foo/node_modules/glob/node_modules/minimatch": Object {
        "name": "minimatch",
        "version": "1.0.0",
      },
      "node_modules/foo/node_modules/glob/node_modules/once": Object {
        "name": "once",
        "version": "1.3.0",
      },
    },
    "dependencies": Object {
      "foo": Object {
        "version": "1.2.3",
        "requires": Object {
          "selflink": "*",
          "glob": "4",
        },
        "dependencies": Object {
          "glob": Object {
            "version": "4.0.5",
            "dependencies": Object {
              "graceful-fs": Object {
                "version": "3.0.2",
                "extraneous": true,
                "devOptional": true,
                "dev": true,
                "optional": true,
              },
              "inherits": Object {
                "version": "2.0.1",
                "extraneous": true,
                "devOptional": true,
                "dev": true,
                "optional": true,
              },
              "minimatch": Object {
                "version": "1.0.0",
                "extraneous": true,
                "devOptional": true,
                "dev": true,
                "optional": true,
              },
              "once": Object {
                "version": "1.3.0",
                "extraneous": true,
                "devOptional": true,
                "dev": true,
                "optional": true,
              },
            },
          },
          "selflink": Object {
            "version": "file:",
          },
        },
      },
      "@scope/y": Object {
        "version": "1.2.3",
        "requires": Object {
          "foo": "*",
        },
      },
      "@scope/z": Object {
        "version": "1.2.3",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "requires": Object {
          "glob": "4",
        },
        "dependencies": Object {
          "glob": Object {
            "version": "file:node_modules/foo/node_modules/glob",
            "extraneous": true,
            "devOptional": true,
            "dev": true,
            "optional": true,
          },
        },
      },
    },
    "name": "selflink",
    "version": "1.2.3",
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
    "foo" => Edge {
      "name": "foo",
      "type": "prod",
      "spec": "",
      "to": "selflink/node_modules/foo",
    },
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
  },
  "children": Map {
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
        "selflink" => Edge {
          "name": "selflink",
          "type": "prod",
          "spec": "*",
          "to": "selflink",
        },
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "selflink/node_modules/foo/node_modules/glob",
        },
      },
      "children": Map {
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
            "inherits" => Node {
              "name": "inherits",
              "location": "node_modules/foo/node_modules/glob/node_modules/inherits",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/inherits",
              "top": "selflink",
              "extraneous": true,
            },
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "node_modules/foo/node_modules/glob/node_modules/graceful-fs",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/graceful-fs",
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
      },
    },
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
  },
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "selflink",
        "version": "1.2.3",
        "dependencies": Object {
          "foo": "",
          "@scope/x": "",
          "@scope/y": "",
        },
      },
      "node_modules/@scope/z": Object {
        "name": "@scope/z",
        "version": "1.2.3",
        "dependencies": Object {
          "glob": "4",
        },
      },
      "node_modules/foo": Object {
        "name": "foo",
        "version": "1.2.3",
        "dependencies": Object {
          "selflink": "*",
          "glob": "4",
        },
      },
      "node_modules/@scope/y": Object {
        "name": "@scope/y",
        "version": "1.2.3",
        "dependencies": Object {
          "foo": "*",
        },
      },
      "node_modules/@scope/z/node_modules/glob": Object {
        "resolved": "../../../../foo/node_modules/glob",
        "link": true,
      },
      "node_modules/foo/node_modules/selflink": Object {
        "resolved": "../../../..",
        "link": true,
      },
      "node_modules/foo/node_modules/glob": Object {
        "name": "glob",
        "version": "4.0.5",
      },
      "node_modules/foo/node_modules/glob/node_modules/inherits": Object {
        "name": "inherits",
        "version": "2.0.1",
      },
      "node_modules/foo/node_modules/glob/node_modules/graceful-fs": Object {
        "name": "graceful-fs",
        "version": "3.0.2",
      },
      "node_modules/foo/node_modules/glob/node_modules/minimatch": Object {
        "name": "minimatch",
        "version": "1.0.0",
      },
      "node_modules/foo/node_modules/glob/node_modules/once": Object {
        "name": "once",
        "version": "1.3.0",
      },
    },
    "dependencies": Object {
      "@scope/z": Object {
        "version": "1.2.3",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "requires": Object {
          "glob": "4",
        },
        "dependencies": Object {
          "glob": Object {
            "version": "file:node_modules/foo/node_modules/glob",
            "extraneous": true,
            "devOptional": true,
            "dev": true,
            "optional": true,
          },
        },
      },
      "foo": Object {
        "version": "1.2.3",
        "requires": Object {
          "selflink": "*",
          "glob": "4",
        },
        "dependencies": Object {
          "selflink": Object {
            "version": "file:",
          },
          "glob": Object {
            "version": "4.0.5",
            "dependencies": Object {
              "inherits": Object {
                "version": "2.0.1",
                "extraneous": true,
                "devOptional": true,
                "dev": true,
                "optional": true,
              },
              "graceful-fs": Object {
                "version": "3.0.2",
                "extraneous": true,
                "devOptional": true,
                "dev": true,
                "optional": true,
              },
              "minimatch": Object {
                "version": "1.0.0",
                "extraneous": true,
                "devOptional": true,
                "dev": true,
                "optional": true,
              },
              "once": Object {
                "version": "1.3.0",
                "extraneous": true,
                "devOptional": true,
                "dev": true,
                "optional": true,
              },
            },
          },
        },
      },
      "@scope/y": Object {
        "version": "1.2.3",
        "requires": Object {
          "foo": "*",
        },
      },
    },
    "name": "selflink",
    "version": "1.2.3",
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
  },
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "example",
        "version": "1.0.0",
      },
      "node_modules/foo": Object {
        "resolved": "../../../linked-node-modules/foo",
        "link": true,
      },
      "../linked-node-modules/foo": Object {
        "name": "foo",
        "version": "1.0.0",
      },
      "node_modules/bar": Object {
        "resolved": "../../../bar",
        "link": true,
      },
      "../bar": Object {
        "name": "bar",
        "version": "1.0.0",
      },
    },
    "dependencies": Object {
      "foo": Object {
        "version": "file:../linked-node-modules/foo",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
      "../linked-node-modules/foo": Object {
        "version": "1.0.0",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
      "bar": Object {
        "version": "file:../bar",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
      "../bar": Object {
        "version": "1.0.0",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
    },
    "name": "example",
    "version": "1.0.0",
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
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "workspace",
        "dependencies": Object {
          "a": "",
          "b": "",
          "c": "",
        },
      },
      "node_modules/b": Object {
        "resolved": "../../packages/b",
        "link": true,
      },
      "packages/b": Object {
        "name": "b",
        "dependencies": Object {
          "a": "",
          "c": "",
        },
      },
      "node_modules/a": Object {
        "resolved": "../../packages/a",
        "link": true,
      },
      "packages/a": Object {
        "name": "a",
        "dependencies": Object {
          "b": "",
          "c": "",
        },
      },
      "node_modules/c": Object {
        "resolved": "../../packages/c",
        "link": true,
      },
      "packages/c": Object {
        "name": "c",
        "dependencies": Object {
          "a": "",
          "b": "",
        },
      },
      "packages/b/node_modules/a": Object {
        "resolved": "../../../a",
        "link": true,
      },
      "packages/b/node_modules/c": Object {
        "resolved": "../../../c",
        "link": true,
      },
      "packages/a/node_modules/b": Object {
        "resolved": "../../../b",
        "link": true,
      },
      "packages/a/node_modules/c": Object {
        "resolved": "../../../c",
        "link": true,
      },
      "packages/c/node_modules/a": Object {
        "resolved": "../../../a",
        "link": true,
      },
      "packages/c/node_modules/b": Object {
        "resolved": "../../../b",
        "link": true,
      },
    },
    "dependencies": Object {
      "b": Object {
        "version": "file:packages/b",
      },
      "packages/b": Object {
        "requires": Object {
          "a": "",
          "c": "",
        },
        "dependencies": Object {
          "a": Object {
            "version": "file:packages/a",
          },
          "c": Object {
            "version": "file:packages/c",
          },
        },
      },
      "a": Object {
        "version": "file:packages/a",
      },
      "packages/a": Object {
        "requires": Object {
          "b": "",
          "c": "",
        },
        "dependencies": Object {
          "b": Object {
            "version": "file:packages/b",
          },
          "c": Object {
            "version": "file:packages/c",
          },
        },
      },
      "c": Object {
        "version": "file:packages/c",
      },
      "packages/c": Object {
        "requires": Object {
          "a": "",
          "b": "",
        },
        "dependencies": Object {
          "a": Object {
            "version": "file:packages/a",
          },
          "b": Object {
            "version": "file:packages/b",
          },
        },
      },
    },
    "name": "workspace",
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
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "a",
        "version": "1.2.3",
        "dependencies": Object {
          "b": "",
          "c": "",
        },
      },
      "node_modules/b": Object {
        "name": "b",
        "version": "1.2.3",
        "dependencies": Object {
          "d": "",
        },
      },
      "node_modules/c": Object {
        "name": "c",
        "version": "1.2.3",
        "dependencies": Object {
          "d": "",
          "x": "",
        },
      },
      "node_modules/b/node_modules/d": Object {
        "name": "d",
        "version": "1.2.3",
        "dependencies": Object {
          "b": "",
        },
      },
      "node_modules/c/node_modules/d": Object {
        "resolved": "../../../b/node_modules/d",
        "link": true,
      },
      "node_modules/c/node_modules/x": Object {
        "resolved": "../../../../x",
        "link": true,
      },
      "x": Object {
        "name": "x",
        "version": "1.2.3",
        "dependencies": Object {
          "b": "",
        },
      },
    },
    "dependencies": Object {
      "b": Object {
        "version": "1.2.3",
        "requires": Object {
          "d": "",
        },
        "dependencies": Object {
          "d": Object {
            "version": "1.2.3",
            "requires": Object {
              "b": "",
            },
          },
        },
      },
      "c": Object {
        "version": "1.2.3",
        "requires": Object {
          "d": "",
          "x": "",
        },
        "dependencies": Object {
          "d": Object {
            "version": "file:node_modules/b/node_modules/d",
          },
          "x": Object {
            "version": "file:x",
          },
        },
      },
      "x": Object {
        "version": "1.2.3",
        "requires": Object {
          "b": "",
        },
      },
    },
    "name": "workspace2",
    "version": "npm:a@1.2.3",
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
  "meta": Object {
    "lockfileVersion": 2,
    "requires": true,
    "packages": Object {
      "": Object {
        "name": "workspace3",
      },
      "node_modules/app": Object {
        "resolved": "../../app",
        "link": true,
      },
      "app": Object {
        "name": "app",
        "version": "1.2.3",
        "dependencies": Object {
          "a": "",
          "b": "",
          "c": "",
          "i": "",
        },
      },
      "node_modules/a": Object {
        "resolved": "../../packages/a",
        "link": true,
      },
      "packages/a": Object {
        "name": "a",
        "version": "1.2.3",
        "dependencies": Object {
          "b": "",
          "c": "",
          "x": "",
        },
      },
      "node_modules/b": Object {
        "resolved": "../../packages/b",
        "link": true,
      },
      "packages/b": Object {
        "name": "b",
        "version": "1.2.3",
        "dependencies": Object {
          "a": "",
          "c": "",
          "y": "",
        },
      },
      "node_modules/c": Object {
        "resolved": "../../packages/c",
        "link": true,
      },
      "packages/c": Object {
        "name": "c",
        "version": "1.2.3",
        "dependencies": Object {
          "a": "",
          "b": "",
          "z": "",
        },
      },
      "packages/a/node_modules/x": Object {
        "name": "x",
        "version": "1.2.3",
      },
      "app/node_modules/i": Object {
        "name": "i",
        "version": "1.2.3",
      },
      "packages/b/node_modules/y": Object {
        "name": "y",
        "version": "1.2.3",
      },
      "packages/c/node_modules/z": Object {
        "name": "z",
        "version": "1.2.3",
      },
    },
    "dependencies": Object {
      "app": Object {
        "version": "1.2.3",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "requires": Object {
          "a": "",
          "b": "",
          "c": "",
          "i": "",
        },
        "dependencies": Object {
          "i": Object {
            "version": "1.2.3",
            "extraneous": true,
            "devOptional": true,
            "dev": true,
            "optional": true,
          },
        },
      },
      "a": Object {
        "version": "file:packages/a",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
      "packages/a": Object {
        "version": "1.2.3",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "requires": Object {
          "b": "",
          "c": "",
          "x": "",
        },
        "dependencies": Object {
          "x": Object {
            "version": "1.2.3",
            "extraneous": true,
            "devOptional": true,
            "dev": true,
            "optional": true,
          },
        },
      },
      "b": Object {
        "version": "file:packages/b",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
      "packages/b": Object {
        "version": "1.2.3",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "requires": Object {
          "a": "",
          "c": "",
          "y": "",
        },
        "dependencies": Object {
          "y": Object {
            "version": "1.2.3",
            "extraneous": true,
            "devOptional": true,
            "dev": true,
            "optional": true,
          },
        },
      },
      "c": Object {
        "version": "file:packages/c",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
      },
      "packages/c": Object {
        "version": "1.2.3",
        "extraneous": true,
        "devOptional": true,
        "dev": true,
        "optional": true,
        "requires": Object {
          "a": "",
          "b": "",
          "z": "",
        },
        "dependencies": Object {
          "z": Object {
            "version": "1.2.3",
            "extraneous": true,
            "devOptional": true,
            "dev": true,
            "optional": true,
          },
        },
      },
    },
    "name": "workspace3",
  },
}
`

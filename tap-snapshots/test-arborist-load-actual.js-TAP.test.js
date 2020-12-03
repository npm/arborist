/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/arborist/load-actual.js TAP bundle > loaded tree 1`] = `
Node {
  "children": Map {
    "dep" => Node {
      "bundled": true,
      "edgesIn": Set {
        Edge {
          "from": "bundle",
          "name": "dep",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/dep",
      "name": "dep",
      "realpath": "bundle/node_modules/dep",
      "top": "bundle",
    },
  },
  "edgesOut": Map {
    "dep" => Edge {
      "name": "dep",
      "spec": "",
      "to": "bundle/node_modules/dep",
      "type": "prod",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "dep": Object {},
    },
    "lockfileVersion": 2,
    "name": "bundle",
    "packages": Object {
      "": Object {
        "bundleDependencies": Array [
          "dep",
        ],
        "dependencies": Object {
          "dep": "",
        },
      },
      "node_modules/dep": Object {
        "inBundle": true,
      },
    },
    "requires": true,
  },
  "name": "bundle",
  "realpath": "bundle",
  "top": "bundle",
}
`

exports[`test/arborist/load-actual.js TAP cwd is default root > loaded tree 1`] = `
Node {
  "children": Map {
    "@scope/x" => Node {
      "children": Map {
        "glob" => Node {
          "children": Map {
            "graceful-fs" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "graceful-fs",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "name": "graceful-fs",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "top": "root",
            },
            "inherits" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "inherits",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "name": "inherits",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "top": "root",
            },
            "minimatch" => Node {
              "children": Map {
                "lru-cache" => Node {
                  "edgesIn": Set {
                    Edge {
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                      "name": "lru-cache",
                      "spec": "",
                      "type": "prod",
                    },
                  },
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "name": "lru-cache",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "top": "root",
                },
                "sigmund" => Node {
                  "edgesIn": Set {
                    Edge {
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                      "name": "sigmund",
                      "spec": "",
                      "type": "prod",
                    },
                  },
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "name": "sigmund",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "top": "root",
                },
              },
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "minimatch",
                  "spec": "",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "type": "prod",
                },
                "once" => Edge {
                  "name": "once",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
                  "type": "prod",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "name": "minimatch",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "top": "root",
            },
            "once" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "once",
                  "spec": "",
                  "type": "prod",
                },
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                  "name": "once",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/once",
              "name": "once",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
              "top": "root",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "root/node_modules/@scope/x",
              "name": "glob",
              "spec": "4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "type": "prod",
            },
            "inherits" => Edge {
              "name": "inherits",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "type": "prod",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "type": "prod",
            },
            "once" => Edge {
              "name": "once",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
              "type": "prod",
            },
          },
          "location": "node_modules/@scope/x/node_modules/glob",
          "name": "glob",
          "realpath": "root/node_modules/@scope/x/node_modules/glob",
          "top": "root",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "@scope/x",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "root/node_modules/@scope/x",
          "name": "@scope/x",
          "spec": "",
          "type": "peer",
        },
        Edge {
          "from": "root/node_modules/foo",
          "name": "@scope/x",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "spec": "",
          "to": "root/node_modules/@scope/x",
          "type": "peer",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "spec": "",
          "to": "root/node_modules/@scope/y",
          "type": "optional",
        },
        "express" => Edge {
          "error": "MISSING",
          "name": "express",
          "spec": "420.69.0-nice",
          "to": null,
          "type": "peer",
        },
        "glob" => Edge {
          "name": "glob",
          "spec": "4",
          "to": "root/node_modules/@scope/x/node_modules/glob",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/x",
      "name": "@scope/x",
      "realpath": "root/node_modules/@scope/x",
      "top": "root",
    },
    "@scope/y" => Node {
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "@scope/y",
          "spec": ">0.99.0",
          "type": "peer",
        },
        Edge {
          "from": "root/node_modules/@scope/x",
          "name": "@scope/y",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "error": "INVALID",
          "name": "foo",
          "spec": "99.x",
          "to": "root/node_modules/foo",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/y",
      "name": "@scope/y",
      "realpath": "root/node_modules/@scope/y",
      "top": "root",
    },
    "foo" => Node {
      "children": Map {
        "express" => Node {
          "edgesIn": Set {
            Edge {
              "from": "root/node_modules/foo",
              "name": "express",
              "spec": "npm:abbrev@*",
              "type": "prod",
            },
          },
          "location": "node_modules/foo/node_modules/express",
          "name": "express",
          "realpath": "root/node_modules/foo/node_modules/express",
          "top": "root",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "foo",
          "spec": "*",
          "type": "dev",
        },
        Edge {
          "error": "INVALID",
          "from": "root/node_modules/@scope/y",
          "name": "foo",
          "spec": "99.x",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "spec": "",
          "to": "root/node_modules/@scope/x",
          "type": "optional",
        },
        "express" => Edge {
          "name": "express",
          "spec": "npm:abbrev@*",
          "to": "root/node_modules/foo/node_modules/express",
          "type": "prod",
        },
      },
      "location": "node_modules/foo",
      "name": "foo",
      "realpath": "root/node_modules/foo",
      "top": "root",
    },
  },
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "spec": "1",
      "to": "root/node_modules/@scope/x",
      "type": "prod",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "spec": ">0.99.0",
      "to": "root/node_modules/@scope/y",
      "type": "peer",
    },
    "foo" => Edge {
      "name": "foo",
      "spec": "*",
      "to": "root/node_modules/foo",
      "type": "dev",
    },
    "notinstalledhere" => Edge {
      "name": "notinstalledhere",
      "spec": "",
      "to": null,
      "type": "optional",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "@scope/x": Object {
        "dependencies": Object {
          "glob": Object {
            "dependencies": Object {
              "graceful-fs": Object {
                "version": "3.0.2",
              },
              "inherits": Object {
                "version": "2.0.1",
              },
              "minimatch": Object {
                "dependencies": Object {
                  "lru-cache": Object {
                    "version": "2.5.0",
                  },
                  "sigmund": Object {
                    "version": "1.0.0",
                  },
                },
                "requires": Object {
                  "lru-cache": "",
                  "once": "",
                  "sigmund": "",
                },
                "version": "1.0.0",
              },
              "once": Object {
                "version": "1.3.0",
              },
            },
            "requires": Object {
              "graceful-fs": "",
              "inherits": "",
              "minimatch": "",
              "once": "",
            },
            "version": "4.0.5",
          },
        },
        "requires": Object {
          "@scope/y": "",
          "glob": "4",
        },
        "version": "1.2.3",
      },
      "@scope/y": Object {
        "requires": Object {
          "foo": "99.x",
        },
        "version": "1.2.3",
      },
      "foo": Object {
        "dependencies": Object {
          "express": Object {
            "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
            "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
            "version": "npm:abbrev@1.1.1",
          },
        },
        "requires": Object {
          "@scope/x": "",
          "express": "npm:abbrev@*",
        },
        "version": "1.2.3",
      },
    },
    "lockfileVersion": 2,
    "name": "root",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "@scope/x": "1",
          "notinstalledhere": "",
        },
        "devDependencies": Object {
          "foo": "*",
        },
        "optionalDependencies": Object {
          "notinstalledhere": "",
        },
        "peerDependencies": Object {
          "@scope/y": ">0.99.0",
        },
        "version": "1.2.3",
      },
      "node_modules/@scope/x": Object {
        "dependencies": Object {
          "@scope/y": "",
          "glob": "4",
        },
        "optionalDependencies": Object {
          "@scope/y": "",
        },
        "peerDependencies": Object {
          "@scope/x": "",
          "express": "420.69.0-nice",
        },
        "version": "1.2.3",
      },
      "node_modules/@scope/x/node_modules/glob": Object {
        "dependencies": Object {
          "graceful-fs": "",
          "inherits": "",
          "minimatch": "",
          "once": "",
        },
        "version": "4.0.5",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs": Object {
        "version": "3.0.2",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/inherits": Object {
        "version": "2.0.1",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch": Object {
        "dependencies": Object {
          "lru-cache": "",
          "once": "",
          "sigmund": "",
        },
        "version": "1.0.0",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache": Object {
        "version": "2.5.0",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund": Object {
        "version": "1.0.0",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/once": Object {
        "version": "1.3.0",
      },
      "node_modules/@scope/y": Object {
        "dependencies": Object {
          "foo": "99.x",
        },
        "version": "1.2.3",
      },
      "node_modules/foo": Object {
        "dependencies": Object {
          "@scope/x": "",
          "express": "npm:abbrev@*",
        },
        "optionalDependencies": Object {
          "@scope/x": "",
        },
        "version": "1.2.3",
      },
      "node_modules/foo/node_modules/express": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "license": "ISC",
        "name": "abbrev",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "version": "1.1.1",
      },
    },
    "requires": true,
    "version": "1.2.3",
  },
  "name": "root",
  "realpath": "root",
  "top": "root",
}
`

exports[`test/arborist/load-actual.js TAP deepmixedloop > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/z",
          "name": "a",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "deepmixedloop/node_modules/b",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "optional": true,
      "realpath": "deepmixedloop/node_modules/a",
      "top": "deepmixedloop",
    },
    "b" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/a",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "spec": "",
          "to": "deepmixedloop/node_modules/c",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "optional": true,
      "realpath": "deepmixedloop/node_modules/b",
      "top": "deepmixedloop",
    },
    "c" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/b",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "deepmixedloop/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "optional": true,
      "realpath": "deepmixedloop/node_modules/c",
      "top": "deepmixedloop",
    },
    "d" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/c",
          "name": "d",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "spec": "",
          "to": "deepmixedloop/node_modules/e",
          "type": "prod",
        },
      },
      "location": "node_modules/d",
      "name": "d",
      "optional": true,
      "realpath": "deepmixedloop/node_modules/d",
      "top": "deepmixedloop",
    },
    "e" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/d",
          "name": "e",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/e",
      "name": "e",
      "optional": true,
      "realpath": "deepmixedloop/node_modules/e",
      "top": "deepmixedloop",
    },
    "i" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop",
          "name": "i",
          "spec": "",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "j" => Edge {
          "name": "j",
          "spec": "",
          "to": "deepmixedloop/node_modules/j",
          "type": "prod",
        },
      },
      "location": "node_modules/i",
      "name": "i",
      "realpath": "deepmixedloop/node_modules/i",
      "top": "deepmixedloop",
    },
    "j" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/i",
          "name": "j",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "k" => Edge {
          "name": "k",
          "spec": "",
          "to": "deepmixedloop/node_modules/k",
          "type": "prod",
        },
      },
      "location": "node_modules/j",
      "name": "j",
      "realpath": "deepmixedloop/node_modules/j",
      "top": "deepmixedloop",
    },
    "k" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/j",
          "name": "k",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/k",
      "name": "k",
      "realpath": "deepmixedloop/node_modules/k",
      "top": "deepmixedloop",
    },
    "x" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop",
          "name": "x",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "y" => Edge {
          "name": "y",
          "spec": "",
          "to": "deepmixedloop/node_modules/y",
          "type": "prod",
        },
      },
      "location": "node_modules/x",
      "name": "x",
      "realpath": "deepmixedloop/node_modules/x",
      "top": "deepmixedloop",
    },
    "y" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/x",
          "name": "y",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "z" => Edge {
          "name": "z",
          "spec": "",
          "to": "deepmixedloop/node_modules/z",
          "type": "prod",
        },
      },
      "location": "node_modules/y",
      "name": "y",
      "realpath": "deepmixedloop/node_modules/y",
      "top": "deepmixedloop",
    },
    "z" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/y",
          "name": "z",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "deepmixedloop/node_modules/a",
          "type": "optional",
        },
      },
      "location": "node_modules/z",
      "name": "z",
      "realpath": "deepmixedloop/node_modules/z",
      "top": "deepmixedloop",
    },
  },
  "edgesOut": Map {
    "i" => Edge {
      "name": "i",
      "spec": "",
      "to": "deepmixedloop/node_modules/i",
      "type": "dev",
    },
    "x" => Edge {
      "name": "x",
      "spec": "",
      "to": "deepmixedloop/node_modules/x",
      "type": "prod",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "a": Object {
        "optional": true,
        "requires": Object {
          "b": "",
        },
        "version": "1.2.3",
      },
      "b": Object {
        "optional": true,
        "requires": Object {
          "c": "",
        },
        "version": "1.2.3",
      },
      "c": Object {
        "optional": true,
        "requires": Object {
          "d": "",
        },
        "version": "1.2.3",
      },
      "d": Object {
        "optional": true,
        "requires": Object {
          "e": "",
        },
        "version": "1.2.3",
      },
      "e": Object {
        "optional": true,
        "version": "1.2.3",
      },
      "i": Object {
        "dev": true,
        "requires": Object {
          "j": "",
        },
      },
      "j": Object {
        "dev": true,
        "requires": Object {
          "k": "",
        },
      },
      "k": Object {
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
    "lockfileVersion": 2,
    "name": "root",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "x": "",
        },
        "devDependencies": Object {
          "i": "",
        },
        "name": "root",
      },
      "node_modules/a": Object {
        "dependencies": Object {
          "b": "",
        },
        "optional": true,
        "version": "1.2.3",
      },
      "node_modules/b": Object {
        "dependencies": Object {
          "c": "",
        },
        "optional": true,
        "version": "1.2.3",
      },
      "node_modules/c": Object {
        "dependencies": Object {
          "d": "",
        },
        "optional": true,
        "version": "1.2.3",
      },
      "node_modules/d": Object {
        "dependencies": Object {
          "e": "",
        },
        "optional": true,
        "version": "1.2.3",
      },
      "node_modules/e": Object {
        "optional": true,
        "version": "1.2.3",
      },
      "node_modules/i": Object {
        "dependencies": Object {
          "j": "",
        },
        "dev": true,
      },
      "node_modules/j": Object {
        "dependencies": Object {
          "k": "",
        },
        "dev": true,
      },
      "node_modules/k": Object {
        "dev": true,
      },
      "node_modules/x": Object {
        "dependencies": Object {
          "y": "",
        },
      },
      "node_modules/y": Object {
        "dependencies": Object {
          "z": "",
        },
      },
      "node_modules/z": Object {
        "dependencies": Object {
          "a": "",
        },
        "optionalDependencies": Object {
          "a": "",
        },
      },
    },
    "requires": true,
  },
  "name": "deepmixedloop",
  "realpath": "deepmixedloop",
  "top": "deepmixedloop",
}
`

exports[`test/arborist/load-actual.js TAP deeproot/root > loaded tree 1`] = `
Link {
  "location": "../deeproot/root",
  "meta": Object {
    "dependencies": Object {
      "@scope/x": Object {
        "dependencies": Object {
          "glob": Object {
            "dependencies": Object {
              "graceful-fs": Object {
                "version": "3.0.2",
              },
              "inherits": Object {
                "version": "2.0.1",
              },
              "minimatch": Object {
                "dependencies": Object {
                  "lru-cache": Object {
                    "version": "2.5.0",
                  },
                  "sigmund": Object {
                    "version": "1.0.0",
                  },
                },
                "requires": Object {
                  "lru-cache": "",
                  "once": "",
                  "sigmund": "",
                },
                "version": "1.0.0",
              },
              "once": Object {
                "version": "1.3.0",
              },
            },
            "requires": Object {
              "graceful-fs": "",
              "inherits": "",
              "minimatch": "",
              "once": "",
            },
            "version": "4.0.5",
          },
        },
        "requires": Object {
          "@scope/y": "",
          "glob": "4",
        },
        "version": "1.2.3",
      },
      "@scope/y": Object {
        "peer": true,
        "requires": Object {
          "foo": "99.x",
        },
        "version": "1.2.3",
      },
      "foo": Object {
        "dependencies": Object {
          "express": Object {
            "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
            "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
            "version": "npm:abbrev@1.1.1",
          },
        },
        "requires": Object {
          "@scope/x": "",
          "express": "npm:abbrev@*",
        },
        "version": "1.2.3",
      },
    },
    "lockfileVersion": 2,
    "name": "root",
    "packages": Object {
      "": Object {
        "link": true,
        "resolved": "../../root",
      },
      "../../root": Object {
        "dependencies": Object {
          "@scope/x": "1",
          "notinstalledhere": "",
        },
        "devDependencies": Object {
          "foo": "*",
        },
        "optionalDependencies": Object {
          "notinstalledhere": "",
        },
        "peerDependencies": Object {
          "@scope/y": ">0.99.0",
        },
        "version": "1.2.3",
      },
      "../../root/node_modules/@scope/x": Object {
        "dependencies": Object {
          "@scope/y": "",
          "glob": "4",
        },
        "optionalDependencies": Object {
          "@scope/y": "",
        },
        "peerDependencies": Object {
          "@scope/x": "",
          "express": "420.69.0-nice",
        },
        "version": "1.2.3",
      },
      "../../root/node_modules/@scope/x/node_modules/glob": Object {
        "dependencies": Object {
          "graceful-fs": "",
          "inherits": "",
          "minimatch": "",
          "once": "",
        },
        "version": "4.0.5",
      },
      "../../root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs": Object {
        "version": "3.0.2",
      },
      "../../root/node_modules/@scope/x/node_modules/glob/node_modules/inherits": Object {
        "version": "2.0.1",
      },
      "../../root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch": Object {
        "dependencies": Object {
          "lru-cache": "",
          "once": "",
          "sigmund": "",
        },
        "version": "1.0.0",
      },
      "../../root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache": Object {
        "version": "2.5.0",
      },
      "../../root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund": Object {
        "version": "1.0.0",
      },
      "../../root/node_modules/@scope/x/node_modules/glob/node_modules/once": Object {
        "version": "1.3.0",
      },
      "../../root/node_modules/@scope/y": Object {
        "dependencies": Object {
          "foo": "99.x",
        },
        "peer": true,
        "version": "1.2.3",
      },
      "../../root/node_modules/foo": Object {
        "dependencies": Object {
          "@scope/x": "",
          "express": "npm:abbrev@*",
        },
        "optionalDependencies": Object {
          "@scope/x": "",
        },
        "version": "1.2.3",
      },
      "../../root/node_modules/foo/node_modules/express": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "license": "ISC",
        "name": "abbrev",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "version": "1.1.1",
      },
    },
    "requires": true,
    "version": "file:../../root",
  },
  "name": "root",
  "realpath": "root",
  "target": Object {
    "name": "root",
  },
  "top": "root",
}
`

exports[`test/arborist/load-actual.js TAP devloop > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "devloop",
          "name": "a",
          "spec": "",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "devloop/node_modules/b",
          "type": "prod",
        },
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "devloop/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "realpath": "devloop/node_modules/a",
      "top": "devloop",
    },
    "b" => Node {
      "edgesIn": Set {
        Edge {
          "from": "devloop/node_modules/a",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "devloop/node_modules/d",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "realpath": "devloop/node_modules/b",
      "top": "devloop",
    },
    "c" => Node {
      "edgesIn": Set {
        Edge {
          "from": "devloop",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "devloop/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "realpath": "devloop/node_modules/c",
      "top": "devloop",
    },
    "d" => Node {
      "edgesIn": Set {
        Edge {
          "from": "devloop/node_modules/a",
          "name": "d",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "devloop/node_modules/c",
          "name": "d",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "devloop/node_modules/b",
          "type": "prod",
        },
      },
      "location": "node_modules/d",
      "name": "d",
      "realpath": "devloop/node_modules/d",
      "top": "devloop",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "devloop/node_modules/a",
      "type": "dev",
    },
    "c" => Edge {
      "name": "c",
      "spec": "",
      "to": "devloop/node_modules/c",
      "type": "prod",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "a": Object {
        "dev": true,
        "requires": Object {
          "b": "",
          "d": "",
        },
        "version": "1.2.3",
      },
      "b": Object {
        "version": "1.2.3",
      },
      "c": Object {
        "requires": Object {
          "d": "",
        },
        "version": "1.2.3",
      },
      "d": Object {
        "requires": Object {
          "b": "",
        },
        "version": "1.2.3",
      },
    },
    "lockfileVersion": 2,
    "name": "devloop",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "c": "",
        },
        "devDependencies": Object {
          "a": "",
        },
      },
      "node_modules/a": Object {
        "dependencies": Object {
          "b": "",
          "d": "",
        },
        "dev": true,
        "version": "1.2.3",
      },
      "node_modules/b": Object {
        "version": "1.2.3",
      },
      "node_modules/c": Object {
        "dependencies": Object {
          "d": "",
        },
        "version": "1.2.3",
      },
      "node_modules/d": Object {
        "dependencies": Object {
          "b": "",
        },
        "version": "1.2.3",
      },
    },
    "requires": true,
  },
  "name": "devloop",
  "realpath": "devloop",
  "top": "devloop",
}
`

exports[`test/arborist/load-actual.js TAP external-dep/root > loaded tree 1`] = `
Node {
  "edgesOut": Map {
    "dep" => Edge {
      "error": "MISSING",
      "name": "dep",
      "spec": "",
      "to": null,
      "type": "prod",
    },
  },
  "location": "",
  "meta": Object {
    "lockfileVersion": 2,
    "name": "root",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "dep": "",
        },
        "version": "1.0.0",
      },
    },
    "requires": true,
    "version": "1.0.0",
  },
  "name": "root",
  "realpath": "external-dep/root",
  "top": "external-dep/root",
}
`

exports[`test/arborist/load-actual.js TAP external-link-cached-dummy-dep/root > loaded tree 1`] = `
Node {
  "children": Map {
    "x" => Link {
      "edgesIn": Set {
        Edge {
          "from": "external-link-cached-dummy-dep/root",
          "name": "x",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/x",
      "name": "x",
      "realpath": "external-link-cached-dummy-dep/a/node_modules/b/node_modules/x",
      "target": Object {
        "name": "x",
        "parent": "external-link-cached-dummy-dep/a/node_modules/b",
      },
      "top": "external-link-cached-dummy-dep/root",
    },
    "z" => Link {
      "edgesIn": Set {
        Edge {
          "from": "external-link-cached-dummy-dep/root",
          "name": "z",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/z",
      "name": "z",
      "realpath": "external-link-cached-dummy-dep/a/t/u/v/w/x/y/z",
      "target": Object {
        "fsParent": "external-link-cached-dummy-dep/a",
        "name": "z",
      },
      "top": "external-link-cached-dummy-dep/root",
    },
  },
  "edgesOut": Map {
    "x" => Edge {
      "name": "x",
      "spec": "",
      "to": "external-link-cached-dummy-dep/a/node_modules/b/node_modules/x",
      "type": "prod",
    },
    "z" => Edge {
      "name": "z",
      "spec": "",
      "to": "external-link-cached-dummy-dep/a/t/u/v/w/x/y/z",
      "type": "prod",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "x": Object {
        "requires": Object {
          "y": "",
        },
        "version": "file:../a/node_modules/b/node_modules/x",
      },
      "z": Object {
        "requires": Object {
          "b": "",
        },
        "version": "file:../a/t/u/v/w/x/y/z",
      },
    },
    "lockfileVersion": 2,
    "name": "root",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "x": "",
          "z": "",
        },
      },
      "../a": Object {},
      "../a/node_modules/b": Object {
        "dependencies": Object {
          "x": "",
        },
        "version": "1.0.0",
      },
      "../a/node_modules/b/node_modules/x": Object {
        "dependencies": Object {
          "y": "",
        },
        "version": "1.0.0",
      },
      "../a/node_modules/b/node_modules/y": Object {
        "version": "1.0.0",
      },
      "../a/t/u/v/w/x/y/z": Object {
        "dependencies": Object {
          "b": "",
        },
        "version": "1.0.0",
      },
      "node_modules/x": Object {
        "link": true,
        "resolved": "../a/node_modules/b/node_modules/x",
      },
      "node_modules/z": Object {
        "link": true,
        "resolved": "../a/t/u/v/w/x/y/z",
      },
    },
    "requires": true,
  },
  "name": "root",
  "realpath": "external-link-cached-dummy-dep/root",
  "top": "external-link-cached-dummy-dep/root",
}
`

exports[`test/arborist/load-actual.js TAP external-link/root > loaded tree 1`] = `
Node {
  "children": Map {
    "j" => Link {
      "edgesIn": Set {
        Edge {
          "from": "external-link/root",
          "name": "j",
          "spec": "file:../i/j",
          "type": "prod",
        },
      },
      "location": "node_modules/j",
      "name": "j",
      "realpath": "external-link/i/j",
      "target": Object {
        "fsParent": "external-link/i",
        "name": "j",
      },
      "top": "external-link/root",
    },
    "o" => Link {
      "edgesIn": Set {
        Edge {
          "from": "external-link/root",
          "name": "o",
          "spec": "file:../m/node_modules/n/o",
          "type": "prod",
        },
      },
      "location": "node_modules/o",
      "name": "o",
      "realpath": "external-link/m/node_modules/n/o",
      "target": Object {
        "fsParent": "external-link/m",
        "name": "o",
      },
      "top": "external-link/root",
    },
    "o2" => Link {
      "edgesIn": Set {
        Edge {
          "from": "external-link/root",
          "name": "o2",
          "spec": "file:../m/node_modules/n/o2",
          "type": "prod",
        },
      },
      "location": "node_modules/o2",
      "name": "o2",
      "realpath": "external-link/m/node_modules/n/o2",
      "target": Object {
        "fsParent": "external-link/m",
        "name": "o2",
      },
      "top": "external-link/root",
    },
    "x" => Node {
      "children": Map {
        "b" => Link {
          "edgesIn": Set {
            Edge {
              "from": "external-link/root/node_modules/x",
              "name": "b",
              "spec": "file:../../../a/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/x/node_modules/b",
          "name": "b",
          "realpath": "external-link/a/node_modules/b",
          "target": Object {
            "name": "b",
            "parent": "external-link/a",
          },
          "top": "external-link/root",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "external-link/root",
          "name": "x",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "file:../../../a/node_modules/b",
          "to": "external-link/a/node_modules/b",
          "type": "prod",
        },
      },
      "location": "node_modules/x",
      "name": "x",
      "realpath": "external-link/root/node_modules/x",
      "top": "external-link/root",
    },
  },
  "edgesOut": Map {
    "j" => Edge {
      "name": "j",
      "spec": "file:../i/j",
      "to": "external-link/i/j",
      "type": "prod",
    },
    "o" => Edge {
      "name": "o",
      "spec": "file:../m/node_modules/n/o",
      "to": "external-link/m/node_modules/n/o",
      "type": "prod",
    },
    "o2" => Edge {
      "name": "o2",
      "spec": "file:../m/node_modules/n/o2",
      "to": "external-link/m/node_modules/n/o2",
      "type": "prod",
    },
    "x" => Edge {
      "name": "x",
      "spec": "",
      "to": "external-link/root/node_modules/x",
      "type": "prod",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "j": Object {
        "requires": Object {
          "k": "",
        },
        "version": "file:../i/j",
      },
      "o": Object {
        "requires": Object {
          "p": "",
        },
        "version": "file:../m/node_modules/n/o",
      },
      "o2": Object {
        "requires": Object {
          "p": "",
        },
        "version": "file:../m/node_modules/n/o2",
      },
      "x": Object {
        "dependencies": Object {
          "b": Object {
            "requires": Object {
              "c": "",
            },
            "version": "file:../a/node_modules/b",
          },
        },
        "requires": Object {
          "b": "file:../../../a/node_modules/b",
        },
        "version": "1.0.0",
      },
    },
    "lockfileVersion": 2,
    "name": "root",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "j": "file:../i/j",
          "o": "file:../m/node_modules/n/o",
          "o2": "file:../m/node_modules/n/o2",
          "x": "",
        },
        "version": "1.0.0",
      },
      "../a": Object {},
      "../a/node_modules/b": Object {
        "dependencies": Object {
          "c": "",
        },
        "version": "1.0.0",
      },
      "../a/node_modules/c": Object {
        "version": "1.0.0",
      },
      "../i": Object {},
      "../i/j": Object {
        "dependencies": Object {
          "k": "",
        },
        "version": "1.0.0",
      },
      "../i/node_modules/k": Object {
        "version": "1.0.0",
      },
      "../m": Object {},
      "../m/node_modules/n/o": Object {
        "dependencies": Object {
          "p": "",
        },
        "version": "1.0.0",
      },
      "../m/node_modules/n/o2": Object {
        "dependencies": Object {
          "p": "",
        },
        "version": "1.0.0",
      },
      "../m/node_modules/p": Object {
        "version": "1.0.0",
      },
      "node_modules/j": Object {
        "link": true,
        "resolved": "../i/j",
      },
      "node_modules/o": Object {
        "link": true,
        "resolved": "../m/node_modules/n/o",
      },
      "node_modules/o2": Object {
        "link": true,
        "resolved": "../m/node_modules/n/o2",
      },
      "node_modules/x": Object {
        "dependencies": Object {
          "b": "file:../../../a/node_modules/b",
        },
        "version": "1.0.0",
      },
      "node_modules/x/node_modules/b": Object {
        "link": true,
        "resolved": "../a/node_modules/b",
      },
    },
    "requires": true,
    "version": "1.0.0",
  },
  "name": "root",
  "realpath": "external-link/root",
  "top": "external-link/root",
}
`

exports[`test/arborist/load-actual.js TAP install-types > loaded tree 1`] = `
Node {
  "children": Map {
    "abbrev" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "realpath": "install-types/node_modules/abbrev",
      "top": "install-types",
    },
    "balanced-match" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "realpath": "install-types/node_modules/balanced-match",
      "top": "install-types",
    },
    "brace-expansion" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "install-types/node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "install-types/node_modules/concat-map",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/brace-expansion",
      "name": "brace-expansion",
      "realpath": "install-types/node_modules/brace-expansion",
      "top": "install-types",
    },
    "bundler" => Node {
      "children": Map {
        "a" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "install-types/node_modules/bundler",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "install-types/node_modules/bundler/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/a",
          "name": "a",
          "realpath": "install-types/node_modules/bundler/node_modules/a",
          "top": "install-types",
        },
        "b" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "install-types/node_modules/bundler/node_modules/a",
              "name": "b",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "spec": "",
              "to": "install-types/node_modules/bundler/node_modules/c",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/b",
          "name": "b",
          "realpath": "install-types/node_modules/bundler/node_modules/b",
          "top": "install-types",
        },
        "c" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "install-types/node_modules/bundler/node_modules/b",
              "name": "c",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/c",
          "name": "c",
          "realpath": "install-types/node_modules/bundler/node_modules/c",
          "top": "install-types",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "bundler",
          "spec": "1.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "install-types/node_modules/bundler/node_modules/a",
          "type": "prod",
        },
      },
      "location": "node_modules/bundler",
      "name": "bundler",
      "realpath": "install-types/node_modules/bundler",
      "top": "install-types",
    },
    "concat-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "realpath": "install-types/node_modules/concat-map",
      "top": "install-types",
    },
    "fs.realpath" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "realpath": "install-types/node_modules/fs.realpath",
      "top": "install-types",
    },
    "full-git-url" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "full-git-url",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "type": "prod",
        },
      },
      "location": "node_modules/full-git-url",
      "name": "full-git-url",
      "realpath": "install-types/node_modules/full-git-url",
      "top": "install-types",
    },
    "ghshort" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "ghshort",
          "spec": "github:isaacs/abbrev-js",
          "type": "prod",
        },
      },
      "location": "node_modules/ghshort",
      "name": "ghshort",
      "realpath": "install-types/node_modules/ghshort",
      "top": "install-types",
    },
    "ghtgz" => Node {
      "extraneous": true,
      "location": "node_modules/ghtgz",
      "name": "ghtgz",
      "realpath": "install-types/node_modules/ghtgz",
      "top": "install-types",
    },
    "glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "install-types/node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => Edge {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "install-types/node_modules/inflight",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "2",
          "to": "install-types/node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "install-types/node_modules/minimatch",
          "type": "prod",
        },
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "install-types/node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "install-types/node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/glob",
      "name": "glob",
      "realpath": "install-types/node_modules/glob",
      "top": "install-types",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "install-types/node_modules/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "install-types/node_modules/wrappy",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/inflight",
      "name": "inflight",
      "realpath": "install-types/node_modules/inflight",
      "top": "install-types",
    },
    "inherits" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/inherits",
      "name": "inherits",
      "realpath": "install-types/node_modules/inherits",
      "top": "install-types",
    },
    "minimatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "install-types/node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "realpath": "install-types/node_modules/minimatch",
      "top": "install-types",
    },
    "old" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "old",
          "spec": "npm:abbrev@^1.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/old",
      "name": "old",
      "realpath": "install-types/node_modules/old",
      "top": "install-types",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "install-types/node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "install-types/node_modules/wrappy",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/once",
      "name": "once",
      "realpath": "install-types/node_modules/once",
      "top": "install-types",
    },
    "path-is-absolute" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "realpath": "install-types/node_modules/path-is-absolute",
      "top": "install-types",
    },
    "pinned" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "pinned",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/pinned",
      "name": "pinned",
      "realpath": "install-types/node_modules/pinned",
      "top": "install-types",
    },
    "reg" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "reg",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/reg",
      "name": "reg",
      "realpath": "install-types/node_modules/reg",
      "top": "install-types",
    },
    "remote" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "remote",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/remote",
      "name": "remote",
      "realpath": "install-types/node_modules/remote",
      "top": "install-types",
    },
    "rimraf" => Node {
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "install-types/node_modules/glob",
          "type": "optional",
        },
      },
      "extraneous": true,
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "realpath": "install-types/node_modules/rimraf",
      "top": "install-types",
    },
    "symlink" => Link {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "symlink",
          "spec": "file:./abbrev-link-target",
          "type": "prod",
        },
      },
      "location": "node_modules/symlink",
      "name": "symlink",
      "realpath": "install-types/abbrev-link-target",
      "target": Object {
        "fsParent": "install-types",
        "name": "abbrev-link-target",
      },
      "top": "install-types",
    },
    "tarball" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "tarball",
          "spec": "file:abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/tarball",
      "name": "tarball",
      "realpath": "install-types/node_modules/tarball",
      "top": "install-types",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "install-types/node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "realpath": "install-types/node_modules/wrappy",
      "top": "install-types",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "install-types/node_modules/abbrev",
      "type": "prod",
    },
    "bundler" => Edge {
      "name": "bundler",
      "spec": "1.2.3",
      "to": "install-types/node_modules/bundler",
      "type": "prod",
    },
    "full-git-url" => Edge {
      "name": "full-git-url",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "install-types/node_modules/full-git-url",
      "type": "prod",
    },
    "ghshort" => Edge {
      "name": "ghshort",
      "spec": "github:isaacs/abbrev-js",
      "to": "install-types/node_modules/ghshort",
      "type": "prod",
    },
    "old" => Edge {
      "name": "old",
      "spec": "npm:abbrev@^1.0.3",
      "to": "install-types/node_modules/old",
      "type": "prod",
    },
    "pinned" => Edge {
      "name": "pinned",
      "spec": "npm:abbrev@^1.1.1",
      "to": "install-types/node_modules/pinned",
      "type": "prod",
    },
    "reg" => Edge {
      "name": "reg",
      "spec": "npm:abbrev@^1.1.1",
      "to": "install-types/node_modules/reg",
      "type": "prod",
    },
    "remote" => Edge {
      "name": "remote",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "install-types/node_modules/remote",
      "type": "prod",
    },
    "symlink" => Edge {
      "name": "symlink",
      "spec": "file:./abbrev-link-target",
      "to": "install-types/abbrev-link-target",
      "type": "prod",
    },
    "tarball" => Edge {
      "name": "tarball",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "install-types/node_modules/tarball",
      "type": "prod",
    },
  },
  "fsChildren": Array [
    "abbrev-link-target",
  ],
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "abbrev": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "version": "1.1.1",
      },
      "balanced-match": Object {
        "extraneous": true,
        "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
        "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
        "version": "1.0.0",
      },
      "brace-expansion": Object {
        "extraneous": true,
        "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
        "requires": Object {
          "balanced-match": "^1.0.0",
          "concat-map": "0.0.1",
        },
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
        "version": "1.1.11",
      },
      "bundler": Object {
        "dependencies": Object {
          "a": Object {
            "bundled": true,
            "integrity": "sha1-3Klr13/Wjfd5OnMDajug1UBdR3s=",
            "requires": Object {
              "b": "",
            },
            "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
            "version": "1.2.3",
          },
          "b": Object {
            "bundled": true,
            "integrity": "sha1-4Klr13/Wjfd5OnMDajug1UBdR3s=",
            "requires": Object {
              "c": "",
            },
            "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
            "version": "1.2.3",
          },
          "c": Object {
            "bundled": true,
            "integrity": "sha1-5Klr13/Wjfd5OnMDajug1UBdR3s=",
            "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
            "version": "1.2.3",
          },
        },
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
        "requires": Object {
          "a": "",
        },
        "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
        "version": "1.2.3",
      },
      "concat-map": Object {
        "extraneous": true,
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
        "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
        "version": "0.0.1",
      },
      "fs.realpath": Object {
        "extraneous": true,
        "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
        "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
        "version": "1.0.0",
      },
      "full-git-url": Object {
        "from": "full-git-url@git+https://github.com/isaacs/abbrev-js.git",
        "version": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
      },
      "ghshort": Object {
        "from": "ghshort@github:isaacs/abbrev-js",
        "version": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
      },
      "ghtgz": Object {
        "extraneous": true,
        "integrity": "sha512-yowslMd9y/lGBCDVO0RwZoXRK5X0zMsf6XECM6DdeqN7qwVnFQ6IAwJai7BD4mVe1xOdWWqWNkuzyuStvSBnHw==",
        "version": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
      },
      "glob": Object {
        "extraneous": true,
        "integrity": "sha512-hkLPepehmnKk41pUGm3sYxoFs/umurYfYJCerbXEyFIWcAzvpipAgVkBqqT9RBKMGjnq6kMuyYwha6csxbiM1A==",
        "requires": Object {
          "fs.realpath": "^1.0.0",
          "inflight": "^1.0.4",
          "inherits": "2",
          "minimatch": "^3.0.4",
          "once": "^1.3.0",
          "path-is-absolute": "^1.0.0",
        },
        "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
        "version": "7.1.4",
      },
      "inflight": Object {
        "extraneous": true,
        "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
        "requires": Object {
          "once": "^1.3.0",
          "wrappy": "1",
        },
        "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
        "version": "1.0.6",
      },
      "inherits": Object {
        "extraneous": true,
        "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
        "version": "2.0.4",
      },
      "minimatch": Object {
        "extraneous": true,
        "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
        "requires": Object {
          "brace-expansion": "^1.1.7",
        },
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
        "version": "3.0.4",
      },
      "old": Object {
        "integrity": "sha1-qgScln+ZkiKqQuFENPDFYu9GgkE=",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
        "version": "npm:abbrev@1.0.3",
      },
      "once": Object {
        "extraneous": true,
        "integrity": "sha512-oic2VxBO6ZRyhk4W/amcN3D4tGpSELjpXwShWPBHNVDvVXo2+JcNnNx6Dth+Y961vfz7SmCCc6RP2oNQE2yVwQ==",
        "requires": Object {
          "wrappy": "1",
        },
        "version": "1.4.0",
      },
      "path-is-absolute": Object {
        "extraneous": true,
        "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
        "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
        "version": "1.0.1",
      },
      "pinned": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "version": "npm:abbrev@1.1.1",
      },
      "reg": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
        "version": "npm:abbrev@1.1.1",
      },
      "remote": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "version": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      },
      "rimraf": Object {
        "extraneous": true,
        "integrity": "sha512-hKCr1HweNbIu6JN4K8WYBwikeg2ISRHU2D7OTX0fivTb+2dOM7mITni0cAjgWCsNGUQDFI+4BTNeGBVp/WbBow==",
        "requires": Object {
          "glob": "^7.1.3",
        },
        "version": "file:rimraf-2.6.3.tgz",
      },
      "symlink": Object {
        "requires": Object {
          "tap": "^14.4.1",
        },
        "version": "file:abbrev-link-target",
      },
      "tarball": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "version": "file:abbrev-1.1.1.tgz",
      },
      "wrappy": Object {
        "extraneous": true,
        "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
        "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
        "version": "1.0.2",
      },
    },
    "lockfileVersion": 2,
    "name": "a",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "abbrev": "^1.1.1",
          "bundler": "1.2.3",
          "full-git-url": "git+https://github.com/isaacs/abbrev-js.git",
          "ghshort": "github:isaacs/abbrev-js",
          "old": "npm:abbrev@^1.0.3",
          "pinned": "npm:abbrev@^1.1.1",
          "reg": "npm:abbrev@^1.1.1",
          "remote": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "symlink": "file:./abbrev-link-target",
          "tarball": "file:abbrev-1.1.1.tgz",
        },
        "name": "a",
        "version": "1.2.3",
      },
      "abbrev-link-target": Object {
        "devDependencies": Object {
          "tap": "^14.4.1",
        },
        "license": "ISC",
        "name": "abbrev",
        "version": "1.1.1",
      },
      "node_modules/abbrev": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "license": "ISC",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "version": "1.1.1",
      },
      "node_modules/balanced-match": Object {
        "extraneous": true,
        "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
        "license": "MIT",
        "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
        "version": "1.0.0",
      },
      "node_modules/brace-expansion": Object {
        "dependencies": Object {
          "balanced-match": "^1.0.0",
          "concat-map": "0.0.1",
        },
        "extraneous": true,
        "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
        "license": "MIT",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
        "version": "1.1.11",
      },
      "node_modules/bundler": Object {
        "bundleDependencies": Array [
          "a",
        ],
        "dependencies": Object {
          "a": "",
        },
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
        "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
        "version": "1.2.3",
      },
      "node_modules/bundler/node_modules/a": Object {
        "dependencies": Object {
          "b": "",
        },
        "inBundle": true,
        "integrity": "sha1-3Klr13/Wjfd5OnMDajug1UBdR3s=",
        "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
        "version": "1.2.3",
      },
      "node_modules/bundler/node_modules/b": Object {
        "dependencies": Object {
          "c": "",
        },
        "inBundle": true,
        "integrity": "sha1-4Klr13/Wjfd5OnMDajug1UBdR3s=",
        "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
        "version": "1.2.3",
      },
      "node_modules/bundler/node_modules/c": Object {
        "inBundle": true,
        "integrity": "sha1-5Klr13/Wjfd5OnMDajug1UBdR3s=",
        "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
        "version": "1.2.3",
      },
      "node_modules/concat-map": Object {
        "extraneous": true,
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
        "license": "MIT",
        "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
        "version": "0.0.1",
      },
      "node_modules/fs.realpath": Object {
        "extraneous": true,
        "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
        "license": "ISC",
        "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
        "version": "1.0.0",
      },
      "node_modules/full-git-url": Object {
        "license": "ISC",
        "name": "abbrev",
        "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
        "version": "1.1.1",
      },
      "node_modules/ghshort": Object {
        "license": "ISC",
        "name": "abbrev",
        "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
        "version": "1.1.1",
      },
      "node_modules/ghtgz": Object {
        "extraneous": true,
        "integrity": "sha512-yowslMd9y/lGBCDVO0RwZoXRK5X0zMsf6XECM6DdeqN7qwVnFQ6IAwJai7BD4mVe1xOdWWqWNkuzyuStvSBnHw==",
        "license": "ISC",
        "name": "abbrev",
        "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
        "version": "1.1.1",
      },
      "node_modules/glob": Object {
        "dependencies": Object {
          "fs.realpath": "^1.0.0",
          "inflight": "^1.0.4",
          "inherits": "2",
          "minimatch": "^3.0.4",
          "once": "^1.3.0",
          "path-is-absolute": "^1.0.0",
        },
        "engines": Object {
          "node": "*",
        },
        "extraneous": true,
        "integrity": "sha512-hkLPepehmnKk41pUGm3sYxoFs/umurYfYJCerbXEyFIWcAzvpipAgVkBqqT9RBKMGjnq6kMuyYwha6csxbiM1A==",
        "license": "ISC",
        "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
        "version": "7.1.4",
      },
      "node_modules/inflight": Object {
        "dependencies": Object {
          "once": "^1.3.0",
          "wrappy": "1",
        },
        "extraneous": true,
        "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
        "license": "ISC",
        "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
        "version": "1.0.6",
      },
      "node_modules/inherits": Object {
        "extraneous": true,
        "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
        "license": "ISC",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
        "version": "2.0.4",
      },
      "node_modules/minimatch": Object {
        "dependencies": Object {
          "brace-expansion": "^1.1.7",
        },
        "engines": Object {
          "node": "*",
        },
        "extraneous": true,
        "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
        "license": "ISC",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
        "version": "3.0.4",
      },
      "node_modules/old": Object {
        "engines": Object {
          "node": "*",
        },
        "integrity": "sha1-qgScln+ZkiKqQuFENPDFYu9GgkE=",
        "name": "abbrev",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
        "version": "1.0.3",
      },
      "node_modules/once": Object {
        "dependencies": Object {
          "wrappy": "1",
        },
        "extraneous": true,
        "integrity": "sha512-oic2VxBO6ZRyhk4W/amcN3D4tGpSELjpXwShWPBHNVDvVXo2+JcNnNx6Dth+Y961vfz7SmCCc6RP2oNQE2yVwQ==",
        "license": "ISC",
        "resolved": "file:once-1.4.0.tgz",
        "version": "1.4.0",
      },
      "node_modules/path-is-absolute": Object {
        "engines": Object {
          "node": ">=0.10.0",
        },
        "extraneous": true,
        "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
        "license": "MIT",
        "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
        "version": "1.0.1",
      },
      "node_modules/pinned": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "license": "ISC",
        "name": "abbrev",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "version": "1.1.1",
      },
      "node_modules/reg": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "license": "ISC",
        "name": "abbrev",
        "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
        "version": "1.1.1",
      },
      "node_modules/remote": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "license": "ISC",
        "name": "abbrev",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "version": "1.1.1",
      },
      "node_modules/rimraf": Object {
        "bin": Object {
          "rimraf": "bin.js",
        },
        "dependencies": Object {
          "glob": "^7.1.3",
        },
        "extraneous": true,
        "integrity": "sha512-hKCr1HweNbIu6JN4K8WYBwikeg2ISRHU2D7OTX0fivTb+2dOM7mITni0cAjgWCsNGUQDFI+4BTNeGBVp/WbBow==",
        "license": "ISC",
        "optionalDependencies": Object {
          "glob": "^7.1.3",
        },
        "resolved": "file:rimraf-2.6.3.tgz",
        "version": "2.6.3",
      },
      "node_modules/symlink": Object {
        "link": true,
        "resolved": "abbrev-link-target",
      },
      "node_modules/tarball": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "license": "ISC",
        "name": "abbrev",
        "resolved": "file:abbrev-1.1.1.tgz",
        "version": "1.1.1",
      },
      "node_modules/wrappy": Object {
        "extraneous": true,
        "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
        "license": "ISC",
        "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
        "version": "1.0.2",
      },
    },
    "requires": true,
    "version": "1.2.3",
  },
  "name": "install-types",
  "realpath": "install-types",
  "top": "install-types",
}
`

exports[`test/arborist/load-actual.js TAP link-dep-cycle > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "link-dep-cycle",
          "name": "a",
          "spec": "file:a",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "realpath": "link-dep-cycle/a",
      "target": Object {
        "fsParent": "link-dep-cycle",
        "name": "a",
      },
      "top": "link-dep-cycle",
    },
    "b" => Link {
      "edgesIn": Set {
        Edge {
          "from": "link-dep-cycle",
          "name": "b",
          "spec": "file:b",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "realpath": "link-dep-cycle/b",
      "target": Object {
        "fsParent": "link-dep-cycle",
        "name": "b",
      },
      "top": "link-dep-cycle",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "file:a",
      "to": "link-dep-cycle/a",
      "type": "prod",
    },
    "b" => Edge {
      "name": "b",
      "spec": "file:b",
      "to": "link-dep-cycle/b",
      "type": "prod",
    },
  },
  "fsChildren": Array [
    "a",
    "b",
  ],
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "a": Object {
        "dependencies": Object {
          "b": Object {
            "requires": Object {
              "a": "file:../a",
            },
            "version": "file:b",
          },
        },
        "requires": Object {
          "b": "file:../b",
        },
        "version": "file:a",
      },
      "b": Object {
        "dependencies": Object {
          "a": Object {
            "requires": Object {
              "b": "file:../b",
            },
            "version": "file:a",
          },
        },
        "requires": Object {
          "a": "file:../a",
        },
        "version": "file:b",
      },
    },
    "lockfileVersion": 2,
    "name": "link-dep-cycle",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "a": "file:a",
          "b": "file:b",
        },
      },
      "a": Object {
        "dependencies": Object {
          "b": "file:../b",
        },
      },
      "a/node_modules/b": Object {
        "link": true,
        "resolved": "b",
      },
      "b": Object {
        "dependencies": Object {
          "a": "file:../a",
        },
      },
      "b/node_modules/a": Object {
        "link": true,
        "resolved": "a",
      },
      "node_modules/a": Object {
        "link": true,
        "resolved": "a",
      },
      "node_modules/b": Object {
        "link": true,
        "resolved": "b",
      },
    },
    "requires": true,
  },
  "name": "link-dep-cycle",
  "realpath": "link-dep-cycle",
  "top": "link-dep-cycle",
}
`

exports[`test/arborist/load-actual.js TAP link-dep-nested > loaded tree 1`] = `
Node {
  "children": Map {
    "foo" => Link {
      "edgesIn": Set {
        Edge {
          "from": "link-dep-nested",
          "name": "foo",
          "spec": "file:once",
          "type": "prod",
        },
      },
      "location": "node_modules/foo",
      "name": "foo",
      "realpath": "link-dep-nested/once",
      "target": Object {
        "fsParent": "link-dep-nested",
        "name": "once",
      },
      "top": "link-dep-nested",
    },
    "once" => Link {
      "edgesIn": Set {
        Edge {
          "from": "link-dep-nested",
          "name": "once",
          "spec": "file:once",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "realpath": "link-dep-nested/once",
      "target": Object {
        "fsParent": "link-dep-nested",
        "name": "once",
      },
      "top": "link-dep-nested",
    },
  },
  "edgesOut": Map {
    "foo" => Edge {
      "name": "foo",
      "spec": "file:once",
      "to": "link-dep-nested/once",
      "type": "prod",
    },
    "once" => Edge {
      "name": "once",
      "spec": "file:once",
      "to": "link-dep-nested/once",
      "type": "prod",
    },
  },
  "fsChildren": Array [
    "once",
  ],
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "foo": Object {
        "dependencies": Object {
          "wrappy": Object {
            "version": "1.0.2",
          },
        },
        "requires": Object {
          "tap": "^7.0.1",
          "wrappy": "1",
        },
        "version": "file:once",
      },
      "once": Object {
        "dependencies": Object {
          "wrappy": Object {
            "version": "1.0.2",
          },
        },
        "requires": Object {
          "tap": "^7.0.1",
          "wrappy": "1",
        },
        "version": "file:once",
      },
    },
    "lockfileVersion": 2,
    "name": "nested-thingies",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "foo": "file:once",
          "once": "file:once",
        },
        "name": "nested-thingies",
        "version": "1.2.3",
      },
      "node_modules/foo": Object {
        "link": true,
        "resolved": "once",
      },
      "node_modules/once": Object {
        "link": true,
        "resolved": "once",
      },
      "once": Object {
        "dependencies": Object {
          "wrappy": "1",
        },
        "devDependencies": Object {
          "tap": "^7.0.1",
        },
        "license": "ISC",
        "version": "1.4.0",
      },
      "once/node_modules/wrappy": Object {
        "license": "ISC",
        "version": "1.0.2",
      },
    },
    "requires": true,
    "version": "1.2.3",
  },
  "name": "link-dep-nested",
  "realpath": "link-dep-nested",
  "top": "link-dep-nested",
}
`

exports[`test/arborist/load-actual.js TAP link-dep-nested/root > loaded tree 1`] = `
Node {
  "children": Map {
    "bork" => Link {
      "edgesIn": Set {
        Edge {
          "from": "link-dep-nested/root",
          "name": "bork",
          "spec": "file:..",
          "type": "prod",
        },
      },
      "location": "node_modules/bork",
      "name": "bork",
      "realpath": "link-dep-nested",
      "target": Object {
        "name": "link-dep-nested",
      },
      "top": "link-dep-nested/root",
    },
  },
  "edgesOut": Map {
    "bork" => Edge {
      "name": "bork",
      "spec": "file:..",
      "to": "link-dep-nested",
      "type": "prod",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "bork": Object {
        "dependencies": Object {
          "foo": Object {
            "dependencies": Object {
              "wrappy": Object {
                "version": "1.0.2",
              },
            },
            "requires": Object {
              "tap": "^7.0.1",
              "wrappy": "1",
            },
            "version": "file:../once",
          },
          "once": Object {
            "dependencies": Object {
              "wrappy": Object {
                "version": "1.0.2",
              },
            },
            "requires": Object {
              "tap": "^7.0.1",
              "wrappy": "1",
            },
            "version": "file:../once",
          },
        },
        "requires": Object {
          "foo": "file:once",
          "once": "file:once",
        },
        "version": "file:..",
      },
    },
    "lockfileVersion": 2,
    "name": "root",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "bork": "file:..",
        },
        "version": "1.2.3",
      },
      "..": Object {
        "dependencies": Object {
          "foo": "file:once",
          "once": "file:once",
        },
        "name": "nested-thingies",
        "version": "1.2.3",
      },
      "../node_modules/foo": Object {
        "link": true,
        "resolved": "../once",
      },
      "../node_modules/once": Object {
        "link": true,
        "resolved": "../once",
      },
      "../once": Object {
        "dependencies": Object {
          "wrappy": "1",
        },
        "devDependencies": Object {
          "tap": "^7.0.1",
        },
        "license": "ISC",
        "version": "1.4.0",
      },
      "../once/node_modules/wrappy": Object {
        "license": "ISC",
        "version": "1.0.2",
      },
      "node_modules/bork": Object {
        "link": true,
        "resolved": "..",
      },
    },
    "requires": true,
    "version": "1.2.3",
  },
  "name": "root",
  "realpath": "link-dep-nested/root",
  "top": "link-dep-nested/root",
}
`

exports[`test/arborist/load-actual.js TAP linkedroot > loaded tree 1`] = `
Link {
  "location": "../linkedroot",
  "meta": Object {
    "dependencies": Object {
      "@scope/x": Object {
        "dependencies": Object {
          "glob": Object {
            "dependencies": Object {
              "graceful-fs": Object {
                "version": "3.0.2",
              },
              "inherits": Object {
                "version": "2.0.1",
              },
              "minimatch": Object {
                "dependencies": Object {
                  "lru-cache": Object {
                    "version": "2.5.0",
                  },
                  "sigmund": Object {
                    "version": "1.0.0",
                  },
                },
                "requires": Object {
                  "lru-cache": "",
                  "once": "",
                  "sigmund": "",
                },
                "version": "1.0.0",
              },
              "once": Object {
                "version": "1.3.0",
              },
            },
            "requires": Object {
              "graceful-fs": "",
              "inherits": "",
              "minimatch": "",
              "once": "",
            },
            "version": "4.0.5",
          },
        },
        "requires": Object {
          "@scope/y": "",
          "glob": "4",
        },
        "version": "1.2.3",
      },
      "@scope/y": Object {
        "peer": true,
        "requires": Object {
          "foo": "99.x",
        },
        "version": "1.2.3",
      },
      "foo": Object {
        "dependencies": Object {
          "express": Object {
            "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
            "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
            "version": "npm:abbrev@1.1.1",
          },
        },
        "requires": Object {
          "@scope/x": "",
          "express": "npm:abbrev@*",
        },
        "version": "1.2.3",
      },
    },
    "lockfileVersion": 2,
    "name": "root",
    "packages": Object {
      "": Object {
        "link": true,
        "resolved": "../root",
      },
      "../root": Object {
        "dependencies": Object {
          "@scope/x": "1",
          "notinstalledhere": "",
        },
        "devDependencies": Object {
          "foo": "*",
        },
        "optionalDependencies": Object {
          "notinstalledhere": "",
        },
        "peerDependencies": Object {
          "@scope/y": ">0.99.0",
        },
        "version": "1.2.3",
      },
      "../root/node_modules/@scope/x": Object {
        "dependencies": Object {
          "@scope/y": "",
          "glob": "4",
        },
        "optionalDependencies": Object {
          "@scope/y": "",
        },
        "peerDependencies": Object {
          "@scope/x": "",
          "express": "420.69.0-nice",
        },
        "version": "1.2.3",
      },
      "../root/node_modules/@scope/x/node_modules/glob": Object {
        "dependencies": Object {
          "graceful-fs": "",
          "inherits": "",
          "minimatch": "",
          "once": "",
        },
        "version": "4.0.5",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs": Object {
        "version": "3.0.2",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/inherits": Object {
        "version": "2.0.1",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch": Object {
        "dependencies": Object {
          "lru-cache": "",
          "once": "",
          "sigmund": "",
        },
        "version": "1.0.0",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache": Object {
        "version": "2.5.0",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund": Object {
        "version": "1.0.0",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/once": Object {
        "version": "1.3.0",
      },
      "../root/node_modules/@scope/y": Object {
        "dependencies": Object {
          "foo": "99.x",
        },
        "peer": true,
        "version": "1.2.3",
      },
      "../root/node_modules/foo": Object {
        "dependencies": Object {
          "@scope/x": "",
          "express": "npm:abbrev@*",
        },
        "optionalDependencies": Object {
          "@scope/x": "",
        },
        "version": "1.2.3",
      },
      "../root/node_modules/foo/node_modules/express": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "license": "ISC",
        "name": "abbrev",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "version": "1.1.1",
      },
    },
    "requires": true,
    "version": "file:../root",
  },
  "name": "linkedroot",
  "realpath": "root",
  "target": Object {
    "name": "root",
  },
  "top": "root",
}
`

exports[`test/arborist/load-actual.js TAP links-all-over > loaded tree 1`] = `
Node {
  "children": Map {
    "link-deep" => Link {
      "edgesIn": Set {
        Edge {
          "from": "links-all-over",
          "name": "link-deep",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/link-deep",
      "name": "link-deep",
      "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      "target": Object {
        "name": "deep",
        "parent": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
      },
      "top": "links-all-over",
    },
    "link-link" => Link {
      "edgesIn": Set {
        Edge {
          "from": "links-all-over",
          "name": "link-link",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "links-all-over/real",
          "name": "link-link",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/link-link",
      "name": "link-link",
      "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      "target": Object {
        "name": "deep",
        "parent": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
      },
      "top": "links-all-over",
    },
    "link-outside-nest" => Link {
      "edgesIn": Set {
        Edge {
          "from": "links-all-over",
          "name": "link-outside-nest",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/link-outside-nest",
      "name": "link-outside-nest",
      "realpath": "links-all-over/real",
      "target": Object {
        "fsParent": "links-all-over",
        "name": "real",
      },
      "top": "links-all-over",
    },
    "nest" => Node {
      "children": Map {
        "a" => Node {
          "children": Map {
            "b" => Node {
              "children": Map {
                "c" => Node {
                  "children": Map {
                    "d" => Node {
                      "children": Map {
                        "deep" => Node {
                          "children": Map {
                            "deep-a" => Node {
                              "edgesIn": Set {
                                Edge {
                                  "from": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
                                  "name": "deep-a",
                                  "spec": "",
                                  "type": "prod",
                                },
                              },
                              "location": "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep/node_modules/deep-a",
                              "name": "deep-a",
                              "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep/node_modules/deep-a",
                              "top": "links-all-over",
                            },
                          },
                          "edgesIn": Set {
                            Edge {
                              "from": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
                              "name": "deep",
                              "spec": "",
                              "type": "prod",
                            },
                          },
                          "edgesOut": Map {
                            "a" => Edge {
                              "name": "a",
                              "spec": "",
                              "to": "links-all-over/node_modules/nest/node_modules/a",
                              "type": "prod",
                            },
                            "deep-a" => Edge {
                              "name": "deep-a",
                              "spec": "",
                              "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep/node_modules/deep-a",
                              "type": "prod",
                            },
                          },
                          "location": "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
                          "name": "deep",
                          "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
                          "top": "links-all-over",
                        },
                      },
                      "edgesIn": Set {
                        Edge {
                          "from": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c",
                          "name": "d",
                          "spec": "",
                          "type": "prod",
                        },
                      },
                      "edgesOut": Map {
                        "deep" => Edge {
                          "name": "deep",
                          "spec": "",
                          "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
                          "type": "prod",
                        },
                      },
                      "location": "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
                      "name": "d",
                      "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
                      "top": "links-all-over",
                    },
                  },
                  "edgesIn": Set {
                    Edge {
                      "from": "links-all-over/node_modules/nest/node_modules/a/node_modules/b",
                      "name": "c",
                      "spec": "",
                      "type": "prod",
                    },
                  },
                  "edgesOut": Map {
                    "d" => Edge {
                      "name": "d",
                      "spec": "",
                      "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
                      "type": "prod",
                    },
                  },
                  "location": "node_modules/nest/node_modules/a/node_modules/b/node_modules/c",
                  "name": "c",
                  "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c",
                  "top": "links-all-over",
                },
              },
              "edgesIn": Set {
                Edge {
                  "from": "links-all-over/node_modules/nest/node_modules/a",
                  "name": "b",
                  "spec": "",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "c" => Edge {
                  "name": "c",
                  "spec": "",
                  "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c",
                  "type": "prod",
                },
              },
              "location": "node_modules/nest/node_modules/a/node_modules/b",
              "name": "b",
              "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b",
              "top": "links-all-over",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "links-all-over/node_modules/nest",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
            Edge {
              "from": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/nest/node_modules/a",
          "name": "a",
          "realpath": "links-all-over/node_modules/nest/node_modules/a",
          "top": "links-all-over",
        },
        "link-in-nest" => Link {
          "edgesIn": Set {
            Edge {
              "from": "links-all-over/node_modules/nest",
              "name": "link-in-nest",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/nest/node_modules/link-in-nest",
          "name": "link-in-nest",
          "realpath": "links-all-over/real",
          "target": Object {
            "fsParent": "links-all-over",
            "name": "real",
          },
          "top": "links-all-over",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "links-all-over",
          "name": "nest",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "links-all-over/node_modules/nest/node_modules/a",
          "type": "prod",
        },
        "link-in-nest" => Edge {
          "name": "link-in-nest",
          "spec": "",
          "to": "links-all-over/real",
          "type": "prod",
        },
      },
      "location": "node_modules/nest",
      "name": "nest",
      "realpath": "links-all-over/node_modules/nest",
      "top": "links-all-over",
    },
  },
  "edgesOut": Map {
    "link-deep" => Edge {
      "name": "link-deep",
      "spec": "",
      "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      "type": "prod",
    },
    "link-link" => Edge {
      "name": "link-link",
      "spec": "",
      "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      "type": "prod",
    },
    "link-outside-nest" => Edge {
      "name": "link-outside-nest",
      "spec": "",
      "to": "links-all-over/real",
      "type": "prod",
    },
    "nest" => Edge {
      "name": "nest",
      "spec": "",
      "to": "links-all-over/node_modules/nest",
      "type": "prod",
    },
  },
  "fsChildren": Array [
    "real",
  ],
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "link-deep": Object {
        "dependencies": Object {
          "deep-a": Object {
            "version": "1.2.3",
          },
        },
        "requires": Object {
          "a": "",
          "deep-a": "",
        },
        "version": "file:node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      },
      "link-link": Object {
        "dependencies": Object {
          "deep-a": Object {
            "version": "1.2.3",
          },
        },
        "requires": Object {
          "a": "",
          "deep-a": "",
        },
        "version": "file:node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      },
      "link-outside-nest": Object {
        "requires": Object {
          "link-link": "",
        },
        "version": "file:real",
      },
      "nest": Object {
        "dependencies": Object {
          "a": Object {
            "dependencies": Object {
              "b": Object {
                "dependencies": Object {
                  "c": Object {
                    "dependencies": Object {
                      "d": Object {
                        "dependencies": Object {
                          "deep": Object {
                            "dependencies": Object {
                              "deep-a": Object {
                                "version": "1.2.3",
                              },
                            },
                            "requires": Object {
                              "a": "",
                              "deep-a": "",
                            },
                            "version": "1.2.3",
                          },
                        },
                        "requires": Object {
                          "deep": "",
                        },
                        "version": "1.2.3",
                      },
                    },
                    "requires": Object {
                      "d": "",
                    },
                    "version": "1.2.3",
                  },
                },
                "requires": Object {
                  "c": "",
                },
                "version": "1.2.3",
              },
            },
            "requires": Object {
              "b": "",
            },
            "version": "1.2.3",
          },
          "link-in-nest": Object {
            "requires": Object {
              "link-link": "",
            },
            "version": "file:real",
          },
        },
        "requires": Object {
          "a": "",
          "link-in-nest": "",
        },
        "version": "1.2.3",
      },
    },
    "lockfileVersion": 2,
    "name": "links-all-over",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "link-deep": "",
          "link-link": "",
          "link-outside-nest": "",
          "nest": "",
        },
        "version": "1.2.3",
      },
      "node_modules/link-deep": Object {
        "link": true,
        "resolved": "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      },
      "node_modules/link-link": Object {
        "link": true,
        "resolved": "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      },
      "node_modules/link-outside-nest": Object {
        "link": true,
        "resolved": "real",
      },
      "node_modules/nest": Object {
        "dependencies": Object {
          "a": "",
          "link-in-nest": "",
        },
        "version": "1.2.3",
      },
      "node_modules/nest/node_modules/a": Object {
        "dependencies": Object {
          "b": "",
        },
        "version": "1.2.3",
      },
      "node_modules/nest/node_modules/a/node_modules/b": Object {
        "dependencies": Object {
          "c": "",
        },
        "version": "1.2.3",
      },
      "node_modules/nest/node_modules/a/node_modules/b/node_modules/c": Object {
        "dependencies": Object {
          "d": "",
        },
        "version": "1.2.3",
      },
      "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d": Object {
        "dependencies": Object {
          "deep": "",
        },
        "version": "1.2.3",
      },
      "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep": Object {
        "dependencies": Object {
          "a": "",
          "deep-a": "",
        },
        "version": "1.2.3",
      },
      "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep/node_modules/deep-a": Object {
        "version": "1.2.3",
      },
      "node_modules/nest/node_modules/link-in-nest": Object {
        "link": true,
        "resolved": "real",
      },
      "real": Object {
        "dependencies": Object {
          "link-link": "",
        },
        "version": "1.2.3",
      },
    },
    "requires": true,
    "version": "1.2.3",
  },
  "name": "links-all-over",
  "realpath": "links-all-over",
  "top": "links-all-over",
}
`

exports[`test/arborist/load-actual.js TAP load a global space > expect resolving Promise 1`] = `
Node {
  "children": Map {
    "rimraf" => Node {
      "children": Map {
        "balanced-match" => Node {
          "edgesIn": Set {
            Edge {
              "from": "global-style/lib/node_modules/rimraf/node_modules/brace-expansion",
              "name": "balanced-match",
              "spec": "^1.0.0",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/rimraf/node_modules/balanced-match",
          "name": "balanced-match",
          "realpath": "global-style/lib/node_modules/rimraf/node_modules/balanced-match",
          "top": "global-style/lib",
        },
        "brace-expansion" => Node {
          "edgesIn": Set {
            Edge {
              "from": "global-style/lib/node_modules/rimraf/node_modules/minimatch",
              "name": "brace-expansion",
              "spec": "^1.1.7",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "balanced-match" => Edge {
              "name": "balanced-match",
              "spec": "^1.0.0",
              "to": "global-style/lib/node_modules/rimraf/node_modules/balanced-match",
              "type": "prod",
            },
            "concat-map" => Edge {
              "name": "concat-map",
              "spec": "0.0.1",
              "to": "global-style/lib/node_modules/rimraf/node_modules/concat-map",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/rimraf/node_modules/brace-expansion",
          "name": "brace-expansion",
          "realpath": "global-style/lib/node_modules/rimraf/node_modules/brace-expansion",
          "top": "global-style/lib",
        },
        "concat-map" => Node {
          "edgesIn": Set {
            Edge {
              "from": "global-style/lib/node_modules/rimraf/node_modules/brace-expansion",
              "name": "concat-map",
              "spec": "0.0.1",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/rimraf/node_modules/concat-map",
          "name": "concat-map",
          "realpath": "global-style/lib/node_modules/rimraf/node_modules/concat-map",
          "top": "global-style/lib",
        },
        "fs.realpath" => Node {
          "edgesIn": Set {
            Edge {
              "from": "global-style/lib/node_modules/rimraf/node_modules/glob",
              "name": "fs.realpath",
              "spec": "^1.0.0",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/rimraf/node_modules/fs.realpath",
          "name": "fs.realpath",
          "realpath": "global-style/lib/node_modules/rimraf/node_modules/fs.realpath",
          "top": "global-style/lib",
        },
        "glob" => Node {
          "edgesIn": Set {
            Edge {
              "from": "global-style/lib/node_modules/rimraf",
              "name": "glob",
              "spec": "^7.1.3",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "fs.realpath" => Edge {
              "name": "fs.realpath",
              "spec": "^1.0.0",
              "to": "global-style/lib/node_modules/rimraf/node_modules/fs.realpath",
              "type": "prod",
            },
            "inflight" => Edge {
              "name": "inflight",
              "spec": "^1.0.4",
              "to": "global-style/lib/node_modules/rimraf/node_modules/inflight",
              "type": "prod",
            },
            "inherits" => Edge {
              "name": "inherits",
              "spec": "2",
              "to": "global-style/lib/node_modules/rimraf/node_modules/inherits",
              "type": "prod",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "spec": "^3.0.4",
              "to": "global-style/lib/node_modules/rimraf/node_modules/minimatch",
              "type": "prod",
            },
            "once" => Edge {
              "name": "once",
              "spec": "^1.3.0",
              "to": "global-style/lib/node_modules/rimraf/node_modules/once",
              "type": "prod",
            },
            "path-is-absolute" => Edge {
              "name": "path-is-absolute",
              "spec": "^1.0.0",
              "to": "global-style/lib/node_modules/rimraf/node_modules/path-is-absolute",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/rimraf/node_modules/glob",
          "name": "glob",
          "realpath": "global-style/lib/node_modules/rimraf/node_modules/glob",
          "top": "global-style/lib",
        },
        "inflight" => Node {
          "edgesIn": Set {
            Edge {
              "from": "global-style/lib/node_modules/rimraf/node_modules/glob",
              "name": "inflight",
              "spec": "^1.0.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "once" => Edge {
              "name": "once",
              "spec": "^1.3.0",
              "to": "global-style/lib/node_modules/rimraf/node_modules/once",
              "type": "prod",
            },
            "wrappy" => Edge {
              "name": "wrappy",
              "spec": "1",
              "to": "global-style/lib/node_modules/rimraf/node_modules/wrappy",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/rimraf/node_modules/inflight",
          "name": "inflight",
          "realpath": "global-style/lib/node_modules/rimraf/node_modules/inflight",
          "top": "global-style/lib",
        },
        "inherits" => Node {
          "edgesIn": Set {
            Edge {
              "from": "global-style/lib/node_modules/rimraf/node_modules/glob",
              "name": "inherits",
              "spec": "2",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/rimraf/node_modules/inherits",
          "name": "inherits",
          "realpath": "global-style/lib/node_modules/rimraf/node_modules/inherits",
          "top": "global-style/lib",
        },
        "minimatch" => Node {
          "edgesIn": Set {
            Edge {
              "from": "global-style/lib/node_modules/rimraf/node_modules/glob",
              "name": "minimatch",
              "spec": "^3.0.4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "brace-expansion" => Edge {
              "name": "brace-expansion",
              "spec": "^1.1.7",
              "to": "global-style/lib/node_modules/rimraf/node_modules/brace-expansion",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/rimraf/node_modules/minimatch",
          "name": "minimatch",
          "realpath": "global-style/lib/node_modules/rimraf/node_modules/minimatch",
          "top": "global-style/lib",
        },
        "once" => Node {
          "edgesIn": Set {
            Edge {
              "from": "global-style/lib/node_modules/rimraf/node_modules/glob",
              "name": "once",
              "spec": "^1.3.0",
              "type": "prod",
            },
            Edge {
              "from": "global-style/lib/node_modules/rimraf/node_modules/inflight",
              "name": "once",
              "spec": "^1.3.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "wrappy" => Edge {
              "name": "wrappy",
              "spec": "1",
              "to": "global-style/lib/node_modules/rimraf/node_modules/wrappy",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/rimraf/node_modules/once",
          "name": "once",
          "realpath": "global-style/lib/node_modules/rimraf/node_modules/once",
          "top": "global-style/lib",
        },
        "path-is-absolute" => Node {
          "edgesIn": Set {
            Edge {
              "from": "global-style/lib/node_modules/rimraf/node_modules/glob",
              "name": "path-is-absolute",
              "spec": "^1.0.0",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/rimraf/node_modules/path-is-absolute",
          "name": "path-is-absolute",
          "realpath": "global-style/lib/node_modules/rimraf/node_modules/path-is-absolute",
          "top": "global-style/lib",
        },
        "wrappy" => Node {
          "edgesIn": Set {
            Edge {
              "from": "global-style/lib/node_modules/rimraf/node_modules/inflight",
              "name": "wrappy",
              "spec": "1",
              "type": "prod",
            },
            Edge {
              "from": "global-style/lib/node_modules/rimraf/node_modules/once",
              "name": "wrappy",
              "spec": "1",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/rimraf/node_modules/wrappy",
          "name": "wrappy",
          "realpath": "global-style/lib/node_modules/rimraf/node_modules/wrappy",
          "top": "global-style/lib",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "global-style/lib/node_modules/rimraf/node_modules/glob",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "realpath": "global-style/lib/node_modules/rimraf",
      "top": "global-style/lib",
    },
    "which" => Node {
      "children": Map {
        "isexe" => Node {
          "edgesIn": Set {
            Edge {
              "from": "global-style/lib/node_modules/which",
              "name": "isexe",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/which/node_modules/isexe",
          "name": "isexe",
          "realpath": "global-style/lib/node_modules/which/node_modules/isexe",
          "top": "global-style/lib",
        },
      },
      "edgesOut": Map {
        "isexe" => Edge {
          "name": "isexe",
          "spec": "^2.0.0",
          "to": "global-style/lib/node_modules/which/node_modules/isexe",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/which",
      "name": "which",
      "realpath": "global-style/lib/node_modules/which",
      "top": "global-style/lib",
    },
  },
  "location": "",
  "name": "lib",
  "realpath": "global-style/lib",
  "top": "global-style/lib",
}
`

exports[`test/arborist/load-actual.js TAP load a global space symlink > expect resolving Promise 1`] = `
Link {
  "location": "../lib-link",
  "name": "lib-link",
  "realpath": "global-style/lib",
  "target": Object {
    "name": "lib",
  },
  "top": "global-style/lib",
}
`

exports[`test/arborist/load-actual.js TAP load a global space with a filter > expect resolving Promise 1`] = `
Node {
  "location": "",
  "name": "lib",
  "realpath": "global-style/lib",
  "top": "global-style/lib",
}
`

exports[`test/arborist/load-actual.js TAP load from a hidden lockfile > expect resolving Promise 1`] = `
Node {
  "children": Map {
    "abbrev" => Node {
      "edgesIn": Set {
        Edge {
          "from": "hidden-lockfile",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "realpath": "hidden-lockfile/node_modules/abbrev",
      "top": "hidden-lockfile",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "hidden-lockfile/node_modules/abbrev",
      "type": "prod",
    },
  },
  "location": "",
  "meta": Object {
    "lockfileVersion": 2,
    "name": "hidden-lockfile",
    "packages": Object {
      "node_modules/abbrev": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "version": "1.1.1",
      },
    },
    "requires": true,
  },
  "name": "hidden-lockfile",
  "realpath": "hidden-lockfile",
  "top": "hidden-lockfile",
}
`

exports[`test/arborist/load-actual.js TAP look for missing deps by default external-dep/root > "dep" should have missing deps, "link" should not 1`] = `
Node {
  "edgesOut": Map {
    "dep" => Edge {
      "error": "MISSING",
      "name": "dep",
      "spec": "",
      "to": null,
      "type": "prod",
    },
  },
  "location": "",
  "meta": Object {
    "lockfileVersion": 2,
    "name": "root",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "dep": "",
        },
        "version": "1.0.0",
      },
    },
    "requires": true,
    "version": "1.0.0",
  },
  "name": "root",
  "realpath": "external-dep/root",
  "top": "external-dep/root",
}
`

exports[`test/arborist/load-actual.js TAP look for missing deps by default external-link/root > "dep" should have missing deps, "link" should not 1`] = `
Node {
  "children": Map {
    "j" => Link {
      "edgesIn": Set {
        Edge {
          "from": "external-link/root",
          "name": "j",
          "spec": "file:../i/j",
          "type": "prod",
        },
      },
      "location": "node_modules/j",
      "name": "j",
      "realpath": "external-link/i/j",
      "target": Object {
        "fsParent": "external-link/i",
        "name": "j",
      },
      "top": "external-link/root",
    },
    "o" => Link {
      "edgesIn": Set {
        Edge {
          "from": "external-link/root",
          "name": "o",
          "spec": "file:../m/node_modules/n/o",
          "type": "prod",
        },
      },
      "location": "node_modules/o",
      "name": "o",
      "realpath": "external-link/m/node_modules/n/o",
      "target": Object {
        "fsParent": "external-link/m",
        "name": "o",
      },
      "top": "external-link/root",
    },
    "o2" => Link {
      "edgesIn": Set {
        Edge {
          "from": "external-link/root",
          "name": "o2",
          "spec": "file:../m/node_modules/n/o2",
          "type": "prod",
        },
      },
      "location": "node_modules/o2",
      "name": "o2",
      "realpath": "external-link/m/node_modules/n/o2",
      "target": Object {
        "fsParent": "external-link/m",
        "name": "o2",
      },
      "top": "external-link/root",
    },
    "x" => Node {
      "children": Map {
        "b" => Link {
          "edgesIn": Set {
            Edge {
              "from": "external-link/root/node_modules/x",
              "name": "b",
              "spec": "file:../../../a/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/x/node_modules/b",
          "name": "b",
          "realpath": "external-link/a/node_modules/b",
          "target": Object {
            "name": "b",
            "parent": "external-link/a",
          },
          "top": "external-link/root",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "external-link/root",
          "name": "x",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "file:../../../a/node_modules/b",
          "to": "external-link/a/node_modules/b",
          "type": "prod",
        },
      },
      "location": "node_modules/x",
      "name": "x",
      "realpath": "external-link/root/node_modules/x",
      "top": "external-link/root",
    },
  },
  "edgesOut": Map {
    "j" => Edge {
      "name": "j",
      "spec": "file:../i/j",
      "to": "external-link/i/j",
      "type": "prod",
    },
    "o" => Edge {
      "name": "o",
      "spec": "file:../m/node_modules/n/o",
      "to": "external-link/m/node_modules/n/o",
      "type": "prod",
    },
    "o2" => Edge {
      "name": "o2",
      "spec": "file:../m/node_modules/n/o2",
      "to": "external-link/m/node_modules/n/o2",
      "type": "prod",
    },
    "x" => Edge {
      "name": "x",
      "spec": "",
      "to": "external-link/root/node_modules/x",
      "type": "prod",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "j": Object {
        "requires": Object {
          "k": "",
        },
        "version": "file:../i/j",
      },
      "o": Object {
        "requires": Object {
          "p": "",
        },
        "version": "file:../m/node_modules/n/o",
      },
      "o2": Object {
        "requires": Object {
          "p": "",
        },
        "version": "file:../m/node_modules/n/o2",
      },
      "x": Object {
        "dependencies": Object {
          "b": Object {
            "requires": Object {
              "c": "",
            },
            "version": "file:../a/node_modules/b",
          },
        },
        "requires": Object {
          "b": "file:../../../a/node_modules/b",
        },
        "version": "1.0.0",
      },
    },
    "lockfileVersion": 2,
    "name": "root",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "j": "file:../i/j",
          "o": "file:../m/node_modules/n/o",
          "o2": "file:../m/node_modules/n/o2",
          "x": "",
        },
        "version": "1.0.0",
      },
      "../a": Object {},
      "../a/node_modules/b": Object {
        "dependencies": Object {
          "c": "",
        },
        "version": "1.0.0",
      },
      "../a/node_modules/c": Object {
        "version": "1.0.0",
      },
      "../i": Object {},
      "../i/j": Object {
        "dependencies": Object {
          "k": "",
        },
        "version": "1.0.0",
      },
      "../i/node_modules/k": Object {
        "version": "1.0.0",
      },
      "../m": Object {},
      "../m/node_modules/n/o": Object {
        "dependencies": Object {
          "p": "",
        },
        "version": "1.0.0",
      },
      "../m/node_modules/n/o2": Object {
        "dependencies": Object {
          "p": "",
        },
        "version": "1.0.0",
      },
      "../m/node_modules/p": Object {
        "version": "1.0.0",
      },
      "node_modules/j": Object {
        "link": true,
        "resolved": "../i/j",
      },
      "node_modules/o": Object {
        "link": true,
        "resolved": "../m/node_modules/n/o",
      },
      "node_modules/o2": Object {
        "link": true,
        "resolved": "../m/node_modules/n/o2",
      },
      "node_modules/x": Object {
        "dependencies": Object {
          "b": "file:../../../a/node_modules/b",
        },
        "version": "1.0.0",
      },
      "node_modules/x/node_modules/b": Object {
        "link": true,
        "resolved": "../a/node_modules/b",
      },
    },
    "requires": true,
    "version": "1.0.0",
  },
  "name": "root",
  "realpath": "external-link/root",
  "top": "external-link/root",
}
`

exports[`test/arborist/load-actual.js TAP looking outside of cwd > loaded tree 1`] = `
Node {
  "children": Map {
    "@scope/x" => Node {
      "children": Map {
        "glob" => Node {
          "children": Map {
            "graceful-fs" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "graceful-fs",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "name": "graceful-fs",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "top": "root",
            },
            "inherits" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "inherits",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "name": "inherits",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "top": "root",
            },
            "minimatch" => Node {
              "children": Map {
                "lru-cache" => Node {
                  "edgesIn": Set {
                    Edge {
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                      "name": "lru-cache",
                      "spec": "",
                      "type": "prod",
                    },
                  },
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "name": "lru-cache",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "top": "root",
                },
                "sigmund" => Node {
                  "edgesIn": Set {
                    Edge {
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                      "name": "sigmund",
                      "spec": "",
                      "type": "prod",
                    },
                  },
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "name": "sigmund",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "top": "root",
                },
              },
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "minimatch",
                  "spec": "",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "type": "prod",
                },
                "once" => Edge {
                  "name": "once",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
                  "type": "prod",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "name": "minimatch",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "top": "root",
            },
            "once" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "once",
                  "spec": "",
                  "type": "prod",
                },
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                  "name": "once",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/once",
              "name": "once",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
              "top": "root",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "root/node_modules/@scope/x",
              "name": "glob",
              "spec": "4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "type": "prod",
            },
            "inherits" => Edge {
              "name": "inherits",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "type": "prod",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "type": "prod",
            },
            "once" => Edge {
              "name": "once",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
              "type": "prod",
            },
          },
          "location": "node_modules/@scope/x/node_modules/glob",
          "name": "glob",
          "realpath": "root/node_modules/@scope/x/node_modules/glob",
          "top": "root",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "@scope/x",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "root/node_modules/@scope/x",
          "name": "@scope/x",
          "spec": "",
          "type": "peer",
        },
        Edge {
          "from": "root/node_modules/foo",
          "name": "@scope/x",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "spec": "",
          "to": "root/node_modules/@scope/x",
          "type": "peer",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "spec": "",
          "to": "root/node_modules/@scope/y",
          "type": "optional",
        },
        "express" => Edge {
          "error": "MISSING",
          "name": "express",
          "spec": "420.69.0-nice",
          "to": null,
          "type": "peer",
        },
        "glob" => Edge {
          "name": "glob",
          "spec": "4",
          "to": "root/node_modules/@scope/x/node_modules/glob",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/x",
      "name": "@scope/x",
      "realpath": "root/node_modules/@scope/x",
      "top": "root",
    },
    "@scope/y" => Node {
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "@scope/y",
          "spec": ">0.99.0",
          "type": "peer",
        },
        Edge {
          "from": "root/node_modules/@scope/x",
          "name": "@scope/y",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "error": "INVALID",
          "name": "foo",
          "spec": "99.x",
          "to": "root/node_modules/foo",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/y",
      "name": "@scope/y",
      "realpath": "root/node_modules/@scope/y",
      "top": "root",
    },
    "foo" => Node {
      "children": Map {
        "express" => Node {
          "edgesIn": Set {
            Edge {
              "from": "root/node_modules/foo",
              "name": "express",
              "spec": "npm:abbrev@*",
              "type": "prod",
            },
          },
          "location": "node_modules/foo/node_modules/express",
          "name": "express",
          "realpath": "root/node_modules/foo/node_modules/express",
          "top": "root",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "foo",
          "spec": "*",
          "type": "dev",
        },
        Edge {
          "error": "INVALID",
          "from": "root/node_modules/@scope/y",
          "name": "foo",
          "spec": "99.x",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "spec": "",
          "to": "root/node_modules/@scope/x",
          "type": "optional",
        },
        "express" => Edge {
          "name": "express",
          "spec": "npm:abbrev@*",
          "to": "root/node_modules/foo/node_modules/express",
          "type": "prod",
        },
      },
      "location": "node_modules/foo",
      "name": "foo",
      "realpath": "root/node_modules/foo",
      "top": "root",
    },
  },
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "spec": "1",
      "to": "root/node_modules/@scope/x",
      "type": "prod",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "spec": ">0.99.0",
      "to": "root/node_modules/@scope/y",
      "type": "peer",
    },
    "foo" => Edge {
      "name": "foo",
      "spec": "*",
      "to": "root/node_modules/foo",
      "type": "dev",
    },
    "notinstalledhere" => Edge {
      "name": "notinstalledhere",
      "spec": "",
      "to": null,
      "type": "optional",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "@scope/x": Object {
        "dependencies": Object {
          "glob": Object {
            "dependencies": Object {
              "graceful-fs": Object {
                "version": "3.0.2",
              },
              "inherits": Object {
                "version": "2.0.1",
              },
              "minimatch": Object {
                "dependencies": Object {
                  "lru-cache": Object {
                    "version": "2.5.0",
                  },
                  "sigmund": Object {
                    "version": "1.0.0",
                  },
                },
                "requires": Object {
                  "lru-cache": "",
                  "once": "",
                  "sigmund": "",
                },
                "version": "1.0.0",
              },
              "once": Object {
                "version": "1.3.0",
              },
            },
            "requires": Object {
              "graceful-fs": "",
              "inherits": "",
              "minimatch": "",
              "once": "",
            },
            "version": "4.0.5",
          },
        },
        "requires": Object {
          "@scope/y": "",
          "glob": "4",
        },
        "version": "1.2.3",
      },
      "@scope/y": Object {
        "requires": Object {
          "foo": "99.x",
        },
        "version": "1.2.3",
      },
      "foo": Object {
        "dependencies": Object {
          "express": Object {
            "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
            "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
            "version": "npm:abbrev@1.1.1",
          },
        },
        "requires": Object {
          "@scope/x": "",
          "express": "npm:abbrev@*",
        },
        "version": "1.2.3",
      },
    },
    "lockfileVersion": 2,
    "name": "root",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "@scope/x": "1",
          "notinstalledhere": "",
        },
        "devDependencies": Object {
          "foo": "*",
        },
        "optionalDependencies": Object {
          "notinstalledhere": "",
        },
        "peerDependencies": Object {
          "@scope/y": ">0.99.0",
        },
        "version": "1.2.3",
      },
      "node_modules/@scope/x": Object {
        "dependencies": Object {
          "@scope/y": "",
          "glob": "4",
        },
        "optionalDependencies": Object {
          "@scope/y": "",
        },
        "peerDependencies": Object {
          "@scope/x": "",
          "express": "420.69.0-nice",
        },
        "version": "1.2.3",
      },
      "node_modules/@scope/x/node_modules/glob": Object {
        "dependencies": Object {
          "graceful-fs": "",
          "inherits": "",
          "minimatch": "",
          "once": "",
        },
        "version": "4.0.5",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs": Object {
        "version": "3.0.2",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/inherits": Object {
        "version": "2.0.1",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch": Object {
        "dependencies": Object {
          "lru-cache": "",
          "once": "",
          "sigmund": "",
        },
        "version": "1.0.0",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache": Object {
        "version": "2.5.0",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund": Object {
        "version": "1.0.0",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/once": Object {
        "version": "1.3.0",
      },
      "node_modules/@scope/y": Object {
        "dependencies": Object {
          "foo": "99.x",
        },
        "version": "1.2.3",
      },
      "node_modules/foo": Object {
        "dependencies": Object {
          "@scope/x": "",
          "express": "npm:abbrev@*",
        },
        "optionalDependencies": Object {
          "@scope/x": "",
        },
        "version": "1.2.3",
      },
      "node_modules/foo/node_modules/express": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "license": "ISC",
        "name": "abbrev",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "version": "1.1.1",
      },
    },
    "requires": true,
    "version": "1.2.3",
  },
  "name": "root",
  "realpath": "root",
  "top": "root",
}
`

exports[`test/arborist/load-actual.js TAP mixedloop > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedloop",
          "name": "a",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "mixedloop/node_modules/b",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "optional": true,
      "realpath": "mixedloop/node_modules/a",
      "top": "mixedloop",
    },
    "b" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedloop/node_modules/a",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "spec": "",
          "to": "mixedloop/node_modules/c",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "optional": true,
      "realpath": "mixedloop/node_modules/b",
      "top": "mixedloop",
    },
    "c" => Node {
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "from": "mixedloop",
          "name": "c",
          "spec": "",
          "type": "dev",
        },
        Edge {
          "from": "mixedloop/node_modules/b",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "mixedloop/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "realpath": "mixedloop/node_modules/c",
      "top": "mixedloop",
    },
    "d" => Node {
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "from": "mixedloop/node_modules/c",
          "name": "d",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "spec": "",
          "to": "mixedloop/node_modules/e",
          "type": "prod",
        },
      },
      "location": "node_modules/d",
      "name": "d",
      "realpath": "mixedloop/node_modules/d",
      "top": "mixedloop",
    },
    "e" => Node {
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "from": "mixedloop/node_modules/d",
          "name": "e",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/e",
      "name": "e",
      "realpath": "mixedloop/node_modules/e",
      "top": "mixedloop",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "mixedloop/node_modules/a",
      "type": "optional",
    },
    "c" => Edge {
      "name": "c",
      "spec": "",
      "to": "mixedloop/node_modules/c",
      "type": "dev",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "a": Object {
        "optional": true,
        "requires": Object {
          "b": "",
        },
        "version": "1.1.1",
      },
      "b": Object {
        "optional": true,
        "requires": Object {
          "c": "",
        },
        "version": "1.2.3",
      },
      "c": Object {
        "devOptional": true,
        "requires": Object {
          "d": "",
        },
        "version": "1.2.3",
      },
      "d": Object {
        "devOptional": true,
        "requires": Object {
          "e": "",
        },
        "version": "1.2.3",
      },
      "e": Object {
        "devOptional": true,
        "version": "1.2.3",
      },
    },
    "lockfileVersion": 2,
    "name": "root",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "a": "",
        },
        "devDependencies": Object {
          "c": "",
        },
        "name": "root",
        "optionalDependencies": Object {
          "a": "",
        },
      },
      "node_modules/a": Object {
        "dependencies": Object {
          "b": "",
        },
        "optional": true,
        "version": "1.1.1",
      },
      "node_modules/b": Object {
        "dependencies": Object {
          "c": "",
        },
        "optional": true,
        "version": "1.2.3",
      },
      "node_modules/c": Object {
        "dependencies": Object {
          "d": "",
        },
        "devOptional": true,
        "version": "1.2.3",
      },
      "node_modules/d": Object {
        "dependencies": Object {
          "e": "",
        },
        "devOptional": true,
        "version": "1.2.3",
      },
      "node_modules/e": Object {
        "devOptional": true,
        "version": "1.2.3",
      },
    },
    "requires": true,
  },
  "name": "mixedloop",
  "realpath": "mixedloop",
  "top": "mixedloop",
}
`

exports[`test/arborist/load-actual.js TAP mixedmidway > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "a",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "mixedmidway/node_modules/b",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "optional": true,
      "realpath": "mixedmidway/node_modules/a",
      "top": "mixedmidway",
    },
    "b" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "b",
          "spec": "",
          "type": "optional",
        },
        Edge {
          "from": "mixedmidway/node_modules/a",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "mixedmidway/node_modules/n",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "spec": "",
          "to": "mixedmidway/node_modules/c",
          "type": "prod",
        },
        "j" => Edge {
          "name": "j",
          "spec": "",
          "to": "mixedmidway/node_modules/j",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "optional": true,
      "realpath": "mixedmidway/node_modules/b",
      "top": "mixedmidway",
    },
    "c" => Node {
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "c",
          "spec": "",
          "type": "optional",
        },
        Edge {
          "from": "mixedmidway/node_modules/b",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "mixedmidway/node_modules/k",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "realpath": "mixedmidway/node_modules/c",
      "top": "mixedmidway",
    },
    "i" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "i",
          "spec": "",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "j" => Edge {
          "name": "j",
          "spec": "",
          "to": "mixedmidway/node_modules/j",
          "type": "prod",
        },
      },
      "location": "node_modules/i",
      "name": "i",
      "realpath": "mixedmidway/node_modules/i",
      "top": "mixedmidway",
    },
    "j" => Node {
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway/node_modules/b",
          "name": "j",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "mixedmidway/node_modules/i",
          "name": "j",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "mixedmidway/node_modules/n",
          "name": "j",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "k" => Edge {
          "name": "k",
          "spec": "",
          "to": "mixedmidway/node_modules/k",
          "type": "prod",
        },
      },
      "location": "node_modules/j",
      "name": "j",
      "realpath": "mixedmidway/node_modules/j",
      "top": "mixedmidway",
    },
    "k" => Node {
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "k",
          "spec": "",
          "type": "optional",
        },
        Edge {
          "from": "mixedmidway/node_modules/j",
          "name": "k",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "spec": "",
          "to": "mixedmidway/node_modules/c",
          "type": "prod",
        },
      },
      "location": "node_modules/k",
      "name": "k",
      "realpath": "mixedmidway/node_modules/k",
      "top": "mixedmidway",
    },
    "l" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "l",
          "spec": "",
          "type": "optional",
        },
        Edge {
          "from": "mixedmidway/node_modules/z",
          "name": "l",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "m" => Edge {
          "name": "m",
          "spec": "",
          "to": "mixedmidway/node_modules/m",
          "type": "prod",
        },
      },
      "location": "node_modules/l",
      "name": "l",
      "realpath": "mixedmidway/node_modules/l",
      "top": "mixedmidway",
    },
    "m" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "m",
          "spec": "",
          "type": "optional",
        },
        Edge {
          "from": "mixedmidway/node_modules/l",
          "name": "m",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/m",
      "name": "m",
      "realpath": "mixedmidway/node_modules/m",
      "top": "mixedmidway",
    },
    "n" => Node {
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "mixedmidway/node_modules/b",
          "type": "prod",
        },
        "j" => Edge {
          "name": "j",
          "spec": "",
          "to": "mixedmidway/node_modules/j",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/n",
      "name": "n",
      "realpath": "mixedmidway/node_modules/n",
      "top": "mixedmidway",
    },
    "x" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "x",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "y" => Edge {
          "name": "y",
          "spec": "",
          "to": "mixedmidway/node_modules/y",
          "type": "prod",
        },
      },
      "location": "node_modules/x",
      "name": "x",
      "realpath": "mixedmidway/node_modules/x",
      "top": "mixedmidway",
    },
    "y" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "y",
          "spec": "",
          "type": "optional",
        },
        Edge {
          "from": "mixedmidway/node_modules/x",
          "name": "y",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "z" => Edge {
          "name": "z",
          "spec": "",
          "to": "mixedmidway/node_modules/z",
          "type": "prod",
        },
      },
      "location": "node_modules/y",
      "name": "y",
      "realpath": "mixedmidway/node_modules/y",
      "top": "mixedmidway",
    },
    "z" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway/node_modules/y",
          "name": "z",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "l" => Edge {
          "name": "l",
          "spec": "",
          "to": "mixedmidway/node_modules/l",
          "type": "prod",
        },
      },
      "location": "node_modules/z",
      "name": "z",
      "realpath": "mixedmidway/node_modules/z",
      "top": "mixedmidway",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "mixedmidway/node_modules/a",
      "type": "optional",
    },
    "b" => Edge {
      "name": "b",
      "spec": "",
      "to": "mixedmidway/node_modules/b",
      "type": "optional",
    },
    "c" => Edge {
      "name": "c",
      "spec": "",
      "to": "mixedmidway/node_modules/c",
      "type": "optional",
    },
    "i" => Edge {
      "name": "i",
      "spec": "",
      "to": "mixedmidway/node_modules/i",
      "type": "dev",
    },
    "k" => Edge {
      "name": "k",
      "spec": "",
      "to": "mixedmidway/node_modules/k",
      "type": "optional",
    },
    "l" => Edge {
      "name": "l",
      "spec": "",
      "to": "mixedmidway/node_modules/l",
      "type": "optional",
    },
    "m" => Edge {
      "name": "m",
      "spec": "",
      "to": "mixedmidway/node_modules/m",
      "type": "optional",
    },
    "x" => Edge {
      "name": "x",
      "spec": "",
      "to": "mixedmidway/node_modules/x",
      "type": "prod",
    },
    "y" => Edge {
      "name": "y",
      "spec": "",
      "to": "mixedmidway/node_modules/y",
      "type": "optional",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "a": Object {
        "optional": true,
        "requires": Object {
          "b": "",
        },
        "version": "1.2.3",
      },
      "b": Object {
        "optional": true,
        "requires": Object {
          "c": "",
          "j": "",
        },
        "version": "1.2.3",
      },
      "c": Object {
        "devOptional": true,
        "version": "1.2.3",
      },
      "i": Object {
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
    "lockfileVersion": 2,
    "name": "root",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "a": "",
          "b": "",
          "c": "",
          "k": "",
          "l": "",
          "m": "",
          "x": "",
          "y": "",
        },
        "devDependencies": Object {
          "i": "",
        },
        "name": "root",
        "optionalDependencies": Object {
          "a": "",
          "b": "",
          "c": "",
          "k": "",
          "l": "",
          "m": "",
          "y": "",
        },
      },
      "node_modules/a": Object {
        "dependencies": Object {
          "b": "",
        },
        "optional": true,
        "version": "1.2.3",
      },
      "node_modules/b": Object {
        "dependencies": Object {
          "c": "",
          "j": "",
        },
        "optional": true,
        "version": "1.2.3",
      },
      "node_modules/c": Object {
        "devOptional": true,
        "version": "1.2.3",
      },
      "node_modules/i": Object {
        "dependencies": Object {
          "j": "",
        },
        "dev": true,
      },
      "node_modules/j": Object {
        "dependencies": Object {
          "k": "",
        },
        "devOptional": true,
      },
      "node_modules/k": Object {
        "dependencies": Object {
          "c": "",
        },
        "devOptional": true,
      },
      "node_modules/l": Object {
        "dependencies": Object {
          "m": "",
        },
      },
      "node_modules/m": Object {},
      "node_modules/n": Object {
        "dependencies": Object {
          "b": "",
          "j": "",
        },
        "extraneous": true,
      },
      "node_modules/x": Object {
        "dependencies": Object {
          "y": "",
        },
      },
      "node_modules/y": Object {
        "dependencies": Object {
          "z": "",
        },
      },
      "node_modules/z": Object {
        "dependencies": Object {
          "l": "",
        },
      },
    },
    "requires": true,
  },
  "name": "mixedmidway",
  "realpath": "mixedmidway",
  "top": "mixedmidway",
}
`

exports[`test/arborist/load-actual.js TAP noname > loaded tree 1`] = `
Node {
  "children": Map {
    "foo" => Node {
      "errors": Array [
        Object {
          "code": "ENOENT",
          "path": "../fixtures/noname/node_modules/foo/package.json",
        },
      ],
      "extraneous": true,
      "location": "node_modules/foo",
      "name": "foo",
      "realpath": "noname/node_modules/foo",
      "top": "noname",
    },
  },
  "errors": Array [
    Object {
      "code": "ENOENT",
      "path": "../fixtures/noname/package.json",
    },
  ],
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "foo": Object {
        "extraneous": true,
      },
    },
    "lockfileVersion": 2,
    "name": "noname",
    "packages": Object {
      "node_modules/foo": Object {
        "extraneous": true,
      },
    },
    "requires": true,
  },
  "name": "noname",
  "realpath": "noname",
  "top": "noname",
}
`

exports[`test/arborist/load-actual.js TAP optionalloop > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Node {
      "edgesIn": Set {
        Edge {
          "from": "optionalloop",
          "name": "a",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "optionalloop/node_modules/b",
          "type": "prod",
        },
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "optionalloop/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "optional": true,
      "realpath": "optionalloop/node_modules/a",
      "top": "optionalloop",
    },
    "b" => Node {
      "edgesIn": Set {
        Edge {
          "from": "optionalloop/node_modules/a",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "optionalloop/node_modules/d",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "realpath": "optionalloop/node_modules/b",
      "top": "optionalloop",
    },
    "c" => Node {
      "edgesIn": Set {
        Edge {
          "from": "optionalloop",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "optionalloop/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "realpath": "optionalloop/node_modules/c",
      "top": "optionalloop",
    },
    "d" => Node {
      "edgesIn": Set {
        Edge {
          "from": "optionalloop/node_modules/a",
          "name": "d",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "optionalloop/node_modules/c",
          "name": "d",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "optionalloop/node_modules/b",
          "type": "prod",
        },
      },
      "location": "node_modules/d",
      "name": "d",
      "realpath": "optionalloop/node_modules/d",
      "top": "optionalloop",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "optionalloop/node_modules/a",
      "type": "optional",
    },
    "c" => Edge {
      "name": "c",
      "spec": "",
      "to": "optionalloop/node_modules/c",
      "type": "prod",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "a": Object {
        "optional": true,
        "requires": Object {
          "b": "",
          "d": "",
        },
        "version": "1.2.3",
      },
      "b": Object {
        "version": "1.2.3",
      },
      "c": Object {
        "requires": Object {
          "d": "",
        },
        "version": "1.2.3",
      },
      "d": Object {
        "requires": Object {
          "b": "",
        },
        "version": "1.2.3",
      },
    },
    "lockfileVersion": 2,
    "name": "optionalloop",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "a": "",
          "c": "",
        },
        "optionalDependencies": Object {
          "a": "",
        },
      },
      "node_modules/a": Object {
        "dependencies": Object {
          "b": "",
          "d": "",
        },
        "optional": true,
        "version": "1.2.3",
      },
      "node_modules/b": Object {
        "version": "1.2.3",
      },
      "node_modules/c": Object {
        "dependencies": Object {
          "d": "",
        },
        "version": "1.2.3",
      },
      "node_modules/d": Object {
        "dependencies": Object {
          "b": "",
        },
        "version": "1.2.3",
      },
    },
    "requires": true,
  },
  "name": "optionalloop",
  "realpath": "optionalloop",
  "top": "optionalloop",
}
`

exports[`test/arborist/load-actual.js TAP optofdev > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "optofdev",
          "name": "a",
          "spec": "",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "optofdev/node_modules/b",
          "type": "optional",
        },
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "optofdev/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "realpath": "optofdev/node_modules/a",
      "top": "optofdev",
    },
    "b" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "optofdev/node_modules/a",
          "name": "b",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "spec": "",
          "to": "optofdev/node_modules/c",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "optional": true,
      "realpath": "optofdev/node_modules/b",
      "top": "optofdev",
    },
    "c" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "optofdev/node_modules/b",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "spec": "",
          "to": "optofdev/node_modules/e",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "optional": true,
      "realpath": "optofdev/node_modules/c",
      "top": "optofdev",
    },
    "d" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "optofdev/node_modules/a",
          "name": "d",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "spec": "",
          "to": "optofdev/node_modules/e",
          "type": "prod",
        },
      },
      "location": "node_modules/d",
      "name": "d",
      "realpath": "optofdev/node_modules/d",
      "top": "optofdev",
    },
    "e" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "optofdev/node_modules/c",
          "name": "e",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "optofdev/node_modules/d",
          "name": "e",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/e",
      "name": "e",
      "realpath": "optofdev/node_modules/e",
      "top": "optofdev",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "optofdev/node_modules/a",
      "type": "dev",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "a": Object {
        "dev": true,
        "requires": Object {
          "b": "",
          "d": "",
        },
      },
      "b": Object {
        "dev": true,
        "optional": true,
        "requires": Object {
          "c": "",
        },
      },
      "c": Object {
        "dev": true,
        "optional": true,
        "requires": Object {
          "e": "",
        },
      },
      "d": Object {
        "dev": true,
        "requires": Object {
          "e": "",
        },
      },
      "e": Object {
        "dev": true,
      },
    },
    "lockfileVersion": 2,
    "name": "optofdev",
    "packages": Object {
      "": Object {
        "devDependencies": Object {
          "a": "",
        },
      },
      "node_modules/a": Object {
        "dependencies": Object {
          "b": "",
          "d": "",
        },
        "dev": true,
        "optionalDependencies": Object {
          "b": "",
        },
      },
      "node_modules/b": Object {
        "dependencies": Object {
          "c": "",
        },
        "dev": true,
        "optional": true,
      },
      "node_modules/c": Object {
        "dependencies": Object {
          "e": "",
        },
        "dev": true,
        "optional": true,
      },
      "node_modules/d": Object {
        "dependencies": Object {
          "e": "",
        },
        "dev": true,
      },
      "node_modules/e": Object {
        "dev": true,
      },
    },
    "requires": true,
  },
  "name": "optofdev",
  "realpath": "optofdev",
  "top": "optofdev",
}
`

exports[`test/arborist/load-actual.js TAP other > loaded tree 1`] = `
Node {
  "children": Map {
    "glob" => Link {
      "extraneous": true,
      "location": "node_modules/glob",
      "name": "glob",
      "realpath": "root/node_modules/@scope/x/node_modules/glob",
      "target": Object {
        "name": "glob",
      },
      "top": "other",
    },
  },
  "errors": Array [
    Object {
      "code": "ENOENT",
      "path": "../fixtures/other/package.json",
    },
  ],
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "glob": Object {
        "dependencies": Object {
          "graceful-fs": Object {
            "extraneous": true,
            "version": "3.0.2",
          },
          "inherits": Object {
            "extraneous": true,
            "version": "2.0.1",
          },
          "minimatch": Object {
            "dependencies": Object {
              "lru-cache": Object {
                "extraneous": true,
                "version": "2.5.0",
              },
              "sigmund": Object {
                "extraneous": true,
                "version": "1.0.0",
              },
            },
            "extraneous": true,
            "requires": Object {
              "lru-cache": "",
              "once": "",
              "sigmund": "",
            },
            "version": "1.0.0",
          },
          "once": Object {
            "extraneous": true,
            "version": "1.3.0",
          },
        },
        "extraneous": true,
        "requires": Object {
          "graceful-fs": "",
          "inherits": "",
          "minimatch": "",
          "once": "",
        },
        "version": "file:../root/node_modules/@scope/x/node_modules/glob",
      },
    },
    "lockfileVersion": 2,
    "name": "other",
    "packages": Object {
      "../root/node_modules/@scope/x/node_modules/glob": Object {
        "dependencies": Object {
          "graceful-fs": "",
          "inherits": "",
          "minimatch": "",
          "once": "",
        },
        "extraneous": true,
        "version": "4.0.5",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs": Object {
        "extraneous": true,
        "version": "3.0.2",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/inherits": Object {
        "extraneous": true,
        "version": "2.0.1",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch": Object {
        "dependencies": Object {
          "lru-cache": "",
          "once": "",
          "sigmund": "",
        },
        "extraneous": true,
        "version": "1.0.0",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache": Object {
        "extraneous": true,
        "version": "2.5.0",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund": Object {
        "extraneous": true,
        "version": "1.0.0",
      },
      "../root/node_modules/@scope/x/node_modules/glob/node_modules/once": Object {
        "extraneous": true,
        "version": "1.3.0",
      },
      "node_modules/glob": Object {
        "link": true,
        "resolved": "../root/node_modules/@scope/x/node_modules/glob",
      },
    },
    "requires": true,
  },
  "name": "other",
  "realpath": "other",
  "top": "other",
}
`

exports[`test/arborist/load-actual.js TAP pnpm > loaded tree 1`] = `
Node {
  "children": Map {
    "@scope/x" => Link {
      "edgesIn": Set {
        Edge {
          "from": "pnpm",
          "name": "@scope/x",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/x",
      "name": "@scope/x",
      "realpath": "pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
      "target": Object {
        "name": "@scope/x",
        "parent": "pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0",
      },
      "top": "pnpm",
    },
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "pnpm",
          "name": "a",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "realpath": "pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
      "target": Object {
        "name": "a",
        "parent": "pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0",
      },
      "top": "pnpm",
    },
  },
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "spec": "",
      "to": "pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
      "type": "prod",
    },
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
      "type": "prod",
    },
  },
  "fsChildren": Array [
    "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0",
    "node_modules/.pnpm/registry.npmjs.org/a/1.0.0",
    "node_modules/.pnpm/registry.npmjs.org/b/1.0.0",
    "node_modules/.pnpm/registry.npmjs.org/c/1.0.0",
  ],
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "@scope/x": Object {
        "requires": Object {
          "a": "",
          "b": "",
          "c": "",
        },
        "version": "file:node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
      },
      "a": Object {
        "requires": Object {
          "b": "",
          "c": "",
        },
        "version": "file:node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
      },
    },
    "lockfileVersion": 2,
    "name": "pnpm-root",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "@scope/x": "",
          "a": "",
        },
        "name": "pnpm-root",
        "version": "1.0.0",
      },
      "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0": Object {},
      "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x": Object {
        "dependencies": Object {
          "a": "",
          "b": "",
          "c": "",
        },
        "version": "1.0.0",
      },
      "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/a": Object {
        "link": true,
        "resolved": "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
      },
      "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/b": Object {
        "link": true,
        "resolved": "node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/b",
      },
      "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/c": Object {
        "link": true,
        "resolved": "node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c",
      },
      "node_modules/.pnpm/registry.npmjs.org/a/1.0.0": Object {},
      "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a": Object {
        "dependencies": Object {
          "b": "",
          "c": "",
        },
        "version": "1.0.0",
      },
      "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/b": Object {
        "link": true,
        "resolved": "node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/b",
      },
      "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/c": Object {
        "link": true,
        "resolved": "node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c",
      },
      "node_modules/.pnpm/registry.npmjs.org/b/1.0.0": Object {},
      "node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/b": Object {
        "dependencies": Object {
          "c": "",
        },
        "version": "1.0.0",
      },
      "node_modules/.pnpm/registry.npmjs.org/b/1.0.0/node_modules/c": Object {
        "link": true,
        "resolved": "node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c",
      },
      "node_modules/.pnpm/registry.npmjs.org/c/1.0.0": Object {},
      "node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/@scope/x": Object {
        "link": true,
        "resolved": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
      },
      "node_modules/.pnpm/registry.npmjs.org/c/1.0.0/node_modules/c": Object {
        "dependencies": Object {
          "@scope/x": "",
        },
        "version": "1.0.0",
      },
      "node_modules/@scope/x": Object {
        "link": true,
        "resolved": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
      },
      "node_modules/a": Object {
        "link": true,
        "resolved": "node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
      },
    },
    "requires": true,
    "version": "1.0.0",
  },
  "name": "pnpm",
  "realpath": "pnpm",
  "top": "pnpm",
}
`

exports[`test/arborist/load-actual.js TAP root > loaded tree 1`] = `
Node {
  "children": Map {
    "@scope/x" => Node {
      "children": Map {
        "glob" => Node {
          "children": Map {
            "graceful-fs" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "graceful-fs",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "name": "graceful-fs",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "top": "root",
            },
            "inherits" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "inherits",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "name": "inherits",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "top": "root",
            },
            "minimatch" => Node {
              "children": Map {
                "lru-cache" => Node {
                  "edgesIn": Set {
                    Edge {
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                      "name": "lru-cache",
                      "spec": "",
                      "type": "prod",
                    },
                  },
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "name": "lru-cache",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "top": "root",
                },
                "sigmund" => Node {
                  "edgesIn": Set {
                    Edge {
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                      "name": "sigmund",
                      "spec": "",
                      "type": "prod",
                    },
                  },
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "name": "sigmund",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "top": "root",
                },
              },
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "minimatch",
                  "spec": "",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "type": "prod",
                },
                "once" => Edge {
                  "name": "once",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
                  "type": "prod",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "name": "minimatch",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "top": "root",
            },
            "once" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "once",
                  "spec": "",
                  "type": "prod",
                },
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                  "name": "once",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/once",
              "name": "once",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
              "top": "root",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "root/node_modules/@scope/x",
              "name": "glob",
              "spec": "4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "type": "prod",
            },
            "inherits" => Edge {
              "name": "inherits",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "type": "prod",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "type": "prod",
            },
            "once" => Edge {
              "name": "once",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
              "type": "prod",
            },
          },
          "location": "node_modules/@scope/x/node_modules/glob",
          "name": "glob",
          "realpath": "root/node_modules/@scope/x/node_modules/glob",
          "top": "root",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "@scope/x",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "root/node_modules/@scope/x",
          "name": "@scope/x",
          "spec": "",
          "type": "peer",
        },
        Edge {
          "from": "root/node_modules/foo",
          "name": "@scope/x",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "spec": "",
          "to": "root/node_modules/@scope/x",
          "type": "peer",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "spec": "",
          "to": "root/node_modules/@scope/y",
          "type": "optional",
        },
        "express" => Edge {
          "error": "MISSING",
          "name": "express",
          "spec": "420.69.0-nice",
          "to": null,
          "type": "peer",
        },
        "glob" => Edge {
          "name": "glob",
          "spec": "4",
          "to": "root/node_modules/@scope/x/node_modules/glob",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/x",
      "name": "@scope/x",
      "realpath": "root/node_modules/@scope/x",
      "top": "root",
    },
    "@scope/y" => Node {
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "@scope/y",
          "spec": ">0.99.0",
          "type": "peer",
        },
        Edge {
          "from": "root/node_modules/@scope/x",
          "name": "@scope/y",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "error": "INVALID",
          "name": "foo",
          "spec": "99.x",
          "to": "root/node_modules/foo",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/y",
      "name": "@scope/y",
      "realpath": "root/node_modules/@scope/y",
      "top": "root",
    },
    "foo" => Node {
      "children": Map {
        "express" => Node {
          "edgesIn": Set {
            Edge {
              "from": "root/node_modules/foo",
              "name": "express",
              "spec": "npm:abbrev@*",
              "type": "prod",
            },
          },
          "location": "node_modules/foo/node_modules/express",
          "name": "express",
          "realpath": "root/node_modules/foo/node_modules/express",
          "top": "root",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "foo",
          "spec": "*",
          "type": "dev",
        },
        Edge {
          "error": "INVALID",
          "from": "root/node_modules/@scope/y",
          "name": "foo",
          "spec": "99.x",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "spec": "",
          "to": "root/node_modules/@scope/x",
          "type": "optional",
        },
        "express" => Edge {
          "name": "express",
          "spec": "npm:abbrev@*",
          "to": "root/node_modules/foo/node_modules/express",
          "type": "prod",
        },
      },
      "location": "node_modules/foo",
      "name": "foo",
      "realpath": "root/node_modules/foo",
      "top": "root",
    },
  },
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "spec": "1",
      "to": "root/node_modules/@scope/x",
      "type": "prod",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "spec": ">0.99.0",
      "to": "root/node_modules/@scope/y",
      "type": "peer",
    },
    "foo" => Edge {
      "name": "foo",
      "spec": "*",
      "to": "root/node_modules/foo",
      "type": "dev",
    },
    "notinstalledhere" => Edge {
      "name": "notinstalledhere",
      "spec": "",
      "to": null,
      "type": "optional",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "@scope/x": Object {
        "dependencies": Object {
          "glob": Object {
            "dependencies": Object {
              "graceful-fs": Object {
                "version": "3.0.2",
              },
              "inherits": Object {
                "version": "2.0.1",
              },
              "minimatch": Object {
                "dependencies": Object {
                  "lru-cache": Object {
                    "version": "2.5.0",
                  },
                  "sigmund": Object {
                    "version": "1.0.0",
                  },
                },
                "requires": Object {
                  "lru-cache": "",
                  "once": "",
                  "sigmund": "",
                },
                "version": "1.0.0",
              },
              "once": Object {
                "version": "1.3.0",
              },
            },
            "requires": Object {
              "graceful-fs": "",
              "inherits": "",
              "minimatch": "",
              "once": "",
            },
            "version": "4.0.5",
          },
        },
        "requires": Object {
          "@scope/y": "",
          "glob": "4",
        },
        "version": "1.2.3",
      },
      "@scope/y": Object {
        "requires": Object {
          "foo": "99.x",
        },
        "version": "1.2.3",
      },
      "foo": Object {
        "dependencies": Object {
          "express": Object {
            "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
            "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
            "version": "npm:abbrev@1.1.1",
          },
        },
        "requires": Object {
          "@scope/x": "",
          "express": "npm:abbrev@*",
        },
        "version": "1.2.3",
      },
    },
    "lockfileVersion": 2,
    "name": "root",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "@scope/x": "1",
          "notinstalledhere": "",
        },
        "devDependencies": Object {
          "foo": "*",
        },
        "optionalDependencies": Object {
          "notinstalledhere": "",
        },
        "peerDependencies": Object {
          "@scope/y": ">0.99.0",
        },
        "version": "1.2.3",
      },
      "node_modules/@scope/x": Object {
        "dependencies": Object {
          "@scope/y": "",
          "glob": "4",
        },
        "optionalDependencies": Object {
          "@scope/y": "",
        },
        "peerDependencies": Object {
          "@scope/x": "",
          "express": "420.69.0-nice",
        },
        "version": "1.2.3",
      },
      "node_modules/@scope/x/node_modules/glob": Object {
        "dependencies": Object {
          "graceful-fs": "",
          "inherits": "",
          "minimatch": "",
          "once": "",
        },
        "version": "4.0.5",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs": Object {
        "version": "3.0.2",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/inherits": Object {
        "version": "2.0.1",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch": Object {
        "dependencies": Object {
          "lru-cache": "",
          "once": "",
          "sigmund": "",
        },
        "version": "1.0.0",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache": Object {
        "version": "2.5.0",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund": Object {
        "version": "1.0.0",
      },
      "node_modules/@scope/x/node_modules/glob/node_modules/once": Object {
        "version": "1.3.0",
      },
      "node_modules/@scope/y": Object {
        "dependencies": Object {
          "foo": "99.x",
        },
        "version": "1.2.3",
      },
      "node_modules/foo": Object {
        "dependencies": Object {
          "@scope/x": "",
          "express": "npm:abbrev@*",
        },
        "optionalDependencies": Object {
          "@scope/x": "",
        },
        "version": "1.2.3",
      },
      "node_modules/foo/node_modules/express": Object {
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
        "license": "ISC",
        "name": "abbrev",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "version": "1.1.1",
      },
    },
    "requires": true,
    "version": "1.2.3",
  },
  "name": "root",
  "realpath": "root",
  "top": "root",
}
`

exports[`test/arborist/load-actual.js TAP selflink > loaded tree 1`] = `
Node {
  "children": Map {
    "@scope/y" => Node {
      "edgesIn": Set {
        Edge {
          "from": "selflink",
          "name": "@scope/y",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "spec": "*",
          "to": "selflink/node_modules/foo",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/y",
      "name": "@scope/y",
      "realpath": "selflink/node_modules/@scope/y",
      "top": "selflink",
    },
    "@scope/z" => Node {
      "children": Map {
        "glob" => Link {
          "edgesIn": Set {
            Edge {
              "from": "selflink/node_modules/@scope/z",
              "name": "glob",
              "spec": "4",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/@scope/z/node_modules/glob",
          "name": "glob",
          "realpath": "selflink/node_modules/foo/node_modules/glob",
          "target": Object {
            "name": "glob",
            "parent": "selflink/node_modules/foo",
          },
          "top": "selflink",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "4",
          "to": "selflink/node_modules/foo/node_modules/glob",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/@scope/z",
      "name": "@scope/z",
      "realpath": "selflink/node_modules/@scope/z",
      "top": "selflink",
    },
    "foo" => Node {
      "children": Map {
        "glob" => Node {
          "children": Map {
            "graceful-fs" => Node {
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/graceful-fs",
              "name": "graceful-fs",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/graceful-fs",
              "top": "selflink",
            },
            "inherits" => Node {
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/inherits",
              "name": "inherits",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/inherits",
              "top": "selflink",
            },
            "minimatch" => Node {
              "children": Map {
                "lru-cache" => Node {
                  "extraneous": true,
                  "location": "node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "name": "lru-cache",
                  "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "top": "selflink",
                },
                "sigmund" => Node {
                  "extraneous": true,
                  "location": "node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "name": "sigmund",
                  "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "top": "selflink",
                },
              },
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/minimatch",
              "name": "minimatch",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch",
              "top": "selflink",
            },
            "once" => Node {
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/once",
              "name": "once",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/once",
              "top": "selflink",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "selflink/node_modules/foo",
              "name": "glob",
              "spec": "4",
              "type": "prod",
            },
          },
          "location": "node_modules/foo/node_modules/glob",
          "name": "glob",
          "realpath": "selflink/node_modules/foo/node_modules/glob",
          "top": "selflink",
        },
        "selflink" => Link {
          "edgesIn": Set {
            Edge {
              "from": "selflink/node_modules/foo",
              "name": "selflink",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/foo/node_modules/selflink",
          "name": "selflink",
          "realpath": "selflink",
          "target": Object {
            "name": "selflink",
          },
          "top": "selflink",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "selflink",
          "name": "foo",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "selflink/node_modules/@scope/y",
          "name": "foo",
          "spec": "*",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "4",
          "to": "selflink/node_modules/foo/node_modules/glob",
          "type": "prod",
        },
        "selflink" => Edge {
          "name": "selflink",
          "spec": "*",
          "to": "selflink",
          "type": "prod",
        },
      },
      "location": "node_modules/foo",
      "name": "foo",
      "realpath": "selflink/node_modules/foo",
      "top": "selflink",
    },
  },
  "edgesOut": Map {
    "@scope/x" => Edge {
      "error": "MISSING",
      "name": "@scope/x",
      "spec": "",
      "to": null,
      "type": "prod",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "spec": "",
      "to": "selflink/node_modules/@scope/y",
      "type": "prod",
    },
    "foo" => Edge {
      "name": "foo",
      "spec": "",
      "to": "selflink/node_modules/foo",
      "type": "prod",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "@scope/y": Object {
        "requires": Object {
          "foo": "*",
        },
        "version": "1.2.3",
      },
      "@scope/z": Object {
        "dependencies": Object {
          "glob": Object {
            "dependencies": Object {
              "graceful-fs": Object {
                "extraneous": true,
                "version": "3.0.2",
              },
              "inherits": Object {
                "extraneous": true,
                "version": "2.0.1",
              },
              "minimatch": Object {
                "dependencies": Object {
                  "lru-cache": Object {
                    "extraneous": true,
                    "version": "2.5.0",
                  },
                  "sigmund": Object {
                    "extraneous": true,
                    "version": "1.0.0",
                  },
                },
                "extraneous": true,
                "version": "1.0.0",
              },
              "once": Object {
                "extraneous": true,
                "version": "1.3.0",
              },
            },
            "extraneous": true,
            "version": "file:node_modules/foo/node_modules/glob",
          },
        },
        "extraneous": true,
        "requires": Object {
          "glob": "4",
        },
        "version": "1.2.3",
      },
      "foo": Object {
        "dependencies": Object {
          "glob": Object {
            "dependencies": Object {
              "graceful-fs": Object {
                "extraneous": true,
                "version": "3.0.2",
              },
              "inherits": Object {
                "extraneous": true,
                "version": "2.0.1",
              },
              "minimatch": Object {
                "dependencies": Object {
                  "lru-cache": Object {
                    "extraneous": true,
                    "version": "2.5.0",
                  },
                  "sigmund": Object {
                    "extraneous": true,
                    "version": "1.0.0",
                  },
                },
                "extraneous": true,
                "version": "1.0.0",
              },
              "once": Object {
                "extraneous": true,
                "version": "1.3.0",
              },
            },
            "version": "4.0.5",
          },
        },
        "requires": Object {
          "glob": "4",
          "selflink": "*",
        },
        "version": "1.2.3",
      },
    },
    "lockfileVersion": 2,
    "name": "selflink",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "@scope/x": "",
          "@scope/y": "",
          "foo": "",
        },
        "version": "1.2.3",
      },
      "node_modules/@scope/y": Object {
        "dependencies": Object {
          "foo": "*",
        },
        "version": "1.2.3",
      },
      "node_modules/@scope/z": Object {
        "dependencies": Object {
          "glob": "4",
        },
        "extraneous": true,
        "version": "1.2.3",
      },
      "node_modules/@scope/z/node_modules/glob": Object {
        "link": true,
        "resolved": "node_modules/foo/node_modules/glob",
      },
      "node_modules/foo": Object {
        "dependencies": Object {
          "glob": "4",
          "selflink": "*",
        },
        "version": "1.2.3",
      },
      "node_modules/foo/node_modules/glob": Object {
        "version": "4.0.5",
      },
      "node_modules/foo/node_modules/glob/node_modules/graceful-fs": Object {
        "extraneous": true,
        "version": "3.0.2",
      },
      "node_modules/foo/node_modules/glob/node_modules/inherits": Object {
        "extraneous": true,
        "version": "2.0.1",
      },
      "node_modules/foo/node_modules/glob/node_modules/minimatch": Object {
        "extraneous": true,
        "version": "1.0.0",
      },
      "node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/lru-cache": Object {
        "extraneous": true,
        "version": "2.5.0",
      },
      "node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/sigmund": Object {
        "extraneous": true,
        "version": "1.0.0",
      },
      "node_modules/foo/node_modules/glob/node_modules/once": Object {
        "extraneous": true,
        "version": "1.3.0",
      },
      "node_modules/foo/node_modules/selflink": Object {
        "link": true,
        "resolved": "",
      },
    },
    "requires": true,
    "version": "1.2.3",
  },
  "name": "selflink",
  "realpath": "selflink",
  "top": "selflink",
}
`

exports[`test/arborist/load-actual.js TAP shake out Link target timing issue > loaded tree 1`] = `
Node {
  "children": Map {
    "@scope/y" => Node {
      "edgesIn": Set {
        Edge {
          "from": "selflink",
          "name": "@scope/y",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "spec": "*",
          "to": "selflink/node_modules/foo",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/y",
      "name": "@scope/y",
      "realpath": "selflink/node_modules/@scope/y",
      "top": "selflink",
    },
    "@scope/z" => Node {
      "children": Map {
        "glob" => Link {
          "edgesIn": Set {
            Edge {
              "from": "selflink/node_modules/@scope/z",
              "name": "glob",
              "spec": "4",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/@scope/z/node_modules/glob",
          "name": "glob",
          "realpath": "selflink/node_modules/foo/node_modules/glob",
          "target": Object {
            "name": "glob",
            "parent": "selflink/node_modules/foo",
          },
          "top": "selflink",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "4",
          "to": "selflink/node_modules/foo/node_modules/glob",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/@scope/z",
      "name": "@scope/z",
      "realpath": "selflink/node_modules/@scope/z",
      "top": "selflink",
    },
    "foo" => Node {
      "children": Map {
        "glob" => Node {
          "children": Map {
            "graceful-fs" => Node {
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/graceful-fs",
              "name": "graceful-fs",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/graceful-fs",
              "top": "selflink",
            },
            "inherits" => Node {
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/inherits",
              "name": "inherits",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/inherits",
              "top": "selflink",
            },
            "minimatch" => Node {
              "children": Map {
                "lru-cache" => Node {
                  "extraneous": true,
                  "location": "node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "name": "lru-cache",
                  "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "top": "selflink",
                },
                "sigmund" => Node {
                  "extraneous": true,
                  "location": "node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "name": "sigmund",
                  "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "top": "selflink",
                },
              },
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/minimatch",
              "name": "minimatch",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch",
              "top": "selflink",
            },
            "once" => Node {
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/once",
              "name": "once",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/once",
              "top": "selflink",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "selflink/node_modules/foo",
              "name": "glob",
              "spec": "4",
              "type": "prod",
            },
          },
          "location": "node_modules/foo/node_modules/glob",
          "name": "glob",
          "realpath": "selflink/node_modules/foo/node_modules/glob",
          "top": "selflink",
        },
        "selflink" => Link {
          "edgesIn": Set {
            Edge {
              "from": "selflink/node_modules/foo",
              "name": "selflink",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/foo/node_modules/selflink",
          "name": "selflink",
          "realpath": "selflink",
          "target": Object {
            "name": "selflink",
          },
          "top": "selflink",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "selflink",
          "name": "foo",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "selflink/node_modules/@scope/y",
          "name": "foo",
          "spec": "*",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "4",
          "to": "selflink/node_modules/foo/node_modules/glob",
          "type": "prod",
        },
        "selflink" => Edge {
          "name": "selflink",
          "spec": "*",
          "to": "selflink",
          "type": "prod",
        },
      },
      "location": "node_modules/foo",
      "name": "foo",
      "realpath": "selflink/node_modules/foo",
      "top": "selflink",
    },
  },
  "edgesOut": Map {
    "@scope/x" => Edge {
      "error": "MISSING",
      "name": "@scope/x",
      "spec": "",
      "to": null,
      "type": "prod",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "spec": "",
      "to": "selflink/node_modules/@scope/y",
      "type": "prod",
    },
    "foo" => Edge {
      "name": "foo",
      "spec": "",
      "to": "selflink/node_modules/foo",
      "type": "prod",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "@scope/y": Object {
        "requires": Object {
          "foo": "*",
        },
        "version": "1.2.3",
      },
      "@scope/z": Object {
        "dependencies": Object {
          "glob": Object {
            "dependencies": Object {
              "graceful-fs": Object {
                "extraneous": true,
                "version": "3.0.2",
              },
              "inherits": Object {
                "extraneous": true,
                "version": "2.0.1",
              },
              "minimatch": Object {
                "dependencies": Object {
                  "lru-cache": Object {
                    "extraneous": true,
                    "version": "2.5.0",
                  },
                  "sigmund": Object {
                    "extraneous": true,
                    "version": "1.0.0",
                  },
                },
                "extraneous": true,
                "version": "1.0.0",
              },
              "once": Object {
                "extraneous": true,
                "version": "1.3.0",
              },
            },
            "extraneous": true,
            "version": "file:node_modules/foo/node_modules/glob",
          },
        },
        "extraneous": true,
        "requires": Object {
          "glob": "4",
        },
        "version": "1.2.3",
      },
      "foo": Object {
        "dependencies": Object {
          "glob": Object {
            "dependencies": Object {
              "graceful-fs": Object {
                "extraneous": true,
                "version": "3.0.2",
              },
              "inherits": Object {
                "extraneous": true,
                "version": "2.0.1",
              },
              "minimatch": Object {
                "dependencies": Object {
                  "lru-cache": Object {
                    "extraneous": true,
                    "version": "2.5.0",
                  },
                  "sigmund": Object {
                    "extraneous": true,
                    "version": "1.0.0",
                  },
                },
                "extraneous": true,
                "version": "1.0.0",
              },
              "once": Object {
                "extraneous": true,
                "version": "1.3.0",
              },
            },
            "version": "4.0.5",
          },
        },
        "requires": Object {
          "glob": "4",
          "selflink": "*",
        },
        "version": "1.2.3",
      },
    },
    "lockfileVersion": 2,
    "name": "selflink",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "@scope/x": "",
          "@scope/y": "",
          "foo": "",
        },
        "version": "1.2.3",
      },
      "node_modules/@scope/y": Object {
        "dependencies": Object {
          "foo": "*",
        },
        "version": "1.2.3",
      },
      "node_modules/@scope/z": Object {
        "dependencies": Object {
          "glob": "4",
        },
        "extraneous": true,
        "version": "1.2.3",
      },
      "node_modules/@scope/z/node_modules/glob": Object {
        "link": true,
        "resolved": "node_modules/foo/node_modules/glob",
      },
      "node_modules/foo": Object {
        "dependencies": Object {
          "glob": "4",
          "selflink": "*",
        },
        "version": "1.2.3",
      },
      "node_modules/foo/node_modules/glob": Object {
        "version": "4.0.5",
      },
      "node_modules/foo/node_modules/glob/node_modules/graceful-fs": Object {
        "extraneous": true,
        "version": "3.0.2",
      },
      "node_modules/foo/node_modules/glob/node_modules/inherits": Object {
        "extraneous": true,
        "version": "2.0.1",
      },
      "node_modules/foo/node_modules/glob/node_modules/minimatch": Object {
        "extraneous": true,
        "version": "1.0.0",
      },
      "node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/lru-cache": Object {
        "extraneous": true,
        "version": "2.5.0",
      },
      "node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/sigmund": Object {
        "extraneous": true,
        "version": "1.0.0",
      },
      "node_modules/foo/node_modules/glob/node_modules/once": Object {
        "extraneous": true,
        "version": "1.3.0",
      },
      "node_modules/foo/node_modules/selflink": Object {
        "link": true,
        "resolved": "",
      },
    },
    "requires": true,
    "version": "1.2.3",
  },
  "name": "selflink",
  "realpath": "selflink",
  "top": "selflink",
}
`

exports[`test/arborist/load-actual.js TAP symlinked-node-modules/example > loaded tree 1`] = `
Node {
  "children": Map {
    "bar" => Link {
      "extraneous": true,
      "location": "node_modules/bar",
      "name": "bar",
      "realpath": "symlinked-node-modules/bar",
      "target": Object {
        "name": "bar",
      },
      "top": "symlinked-node-modules/example",
    },
    "foo" => Link {
      "extraneous": true,
      "location": "node_modules/foo",
      "name": "foo",
      "realpath": "symlinked-node-modules/linked-node-modules/foo",
      "target": Object {
        "name": "foo",
      },
      "top": "symlinked-node-modules/example",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "bar": Object {
        "extraneous": true,
        "version": "file:../bar",
      },
      "foo": Object {
        "extraneous": true,
        "version": "file:../linked-node-modules/foo",
      },
    },
    "lockfileVersion": 2,
    "name": "example",
    "packages": Object {
      "": Object {
        "version": "1.0.0",
      },
      "../bar": Object {
        "extraneous": true,
        "version": "1.0.0",
      },
      "../linked-node-modules/foo": Object {
        "extraneous": true,
        "version": "1.0.0",
      },
      "node_modules/bar": Object {
        "link": true,
        "resolved": "../bar",
      },
      "node_modules/foo": Object {
        "link": true,
        "resolved": "../linked-node-modules/foo",
      },
    },
    "requires": true,
    "version": "1.0.0",
  },
  "name": "example",
  "realpath": "symlinked-node-modules/example",
  "top": "symlinked-node-modules/example",
}
`

exports[`test/arborist/load-actual.js TAP workspace > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspace",
          "name": "a",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "realpath": "workspace/packages/a",
      "target": Object {
        "fsParent": "workspace",
        "name": "a",
      },
      "top": "workspace",
    },
    "b" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspace",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "realpath": "workspace/packages/b",
      "target": Object {
        "fsParent": "workspace",
        "name": "b",
      },
      "top": "workspace",
    },
    "c" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspace",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "realpath": "workspace/packages/c",
      "target": Object {
        "fsParent": "workspace",
        "name": "c",
      },
      "top": "workspace",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "workspace/packages/a",
      "type": "prod",
    },
    "b" => Edge {
      "name": "b",
      "spec": "",
      "to": "workspace/packages/b",
      "type": "prod",
    },
    "c" => Edge {
      "name": "c",
      "spec": "",
      "to": "workspace/packages/c",
      "type": "prod",
    },
  },
  "fsChildren": Array [
    "packages/a",
    "packages/b",
    "packages/c",
  ],
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "a": Object {
        "dependencies": Object {
          "b": Object {
            "dependencies": Object {
              "c": Object {
                "requires": Object {
                  "a": "",
                  "b": "",
                },
                "version": "file:packages/c",
              },
            },
            "requires": Object {
              "a": "",
              "c": "",
            },
            "version": "file:packages/b",
          },
          "c": Object {
            "dependencies": Object {
              "b": Object {
                "requires": Object {
                  "a": "",
                  "c": "",
                },
                "version": "file:packages/b",
              },
            },
            "requires": Object {
              "a": "",
              "b": "",
            },
            "version": "file:packages/c",
          },
        },
        "requires": Object {
          "b": "",
          "c": "",
        },
        "version": "file:packages/a",
      },
      "b": Object {
        "dependencies": Object {
          "a": Object {
            "dependencies": Object {
              "c": Object {
                "requires": Object {
                  "a": "",
                  "b": "",
                },
                "version": "file:packages/c",
              },
            },
            "requires": Object {
              "b": "",
              "c": "",
            },
            "version": "file:packages/a",
          },
          "c": Object {
            "dependencies": Object {
              "a": Object {
                "requires": Object {
                  "b": "",
                  "c": "",
                },
                "version": "file:packages/a",
              },
            },
            "requires": Object {
              "a": "",
              "b": "",
            },
            "version": "file:packages/c",
          },
        },
        "requires": Object {
          "a": "",
          "c": "",
        },
        "version": "file:packages/b",
      },
      "c": Object {
        "dependencies": Object {
          "a": Object {
            "dependencies": Object {
              "b": Object {
                "requires": Object {
                  "a": "",
                  "c": "",
                },
                "version": "file:packages/b",
              },
            },
            "requires": Object {
              "b": "",
              "c": "",
            },
            "version": "file:packages/a",
          },
          "b": Object {
            "dependencies": Object {
              "a": Object {
                "requires": Object {
                  "b": "",
                  "c": "",
                },
                "version": "file:packages/a",
              },
            },
            "requires": Object {
              "a": "",
              "c": "",
            },
            "version": "file:packages/b",
          },
        },
        "requires": Object {
          "a": "",
          "b": "",
        },
        "version": "file:packages/c",
      },
    },
    "lockfileVersion": 2,
    "name": "workspace",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "a": "",
          "b": "",
          "c": "",
        },
      },
      "node_modules/a": Object {
        "link": true,
        "resolved": "packages/a",
      },
      "node_modules/b": Object {
        "link": true,
        "resolved": "packages/b",
      },
      "node_modules/c": Object {
        "link": true,
        "resolved": "packages/c",
      },
      "packages/a": Object {
        "dependencies": Object {
          "b": "",
          "c": "",
        },
      },
      "packages/a/node_modules/b": Object {
        "link": true,
        "resolved": "packages/b",
      },
      "packages/a/node_modules/c": Object {
        "link": true,
        "resolved": "packages/c",
      },
      "packages/b": Object {
        "dependencies": Object {
          "a": "",
          "c": "",
        },
      },
      "packages/b/node_modules/a": Object {
        "link": true,
        "resolved": "packages/a",
      },
      "packages/b/node_modules/c": Object {
        "link": true,
        "resolved": "packages/c",
      },
      "packages/c": Object {
        "dependencies": Object {
          "a": "",
          "b": "",
        },
      },
      "packages/c/node_modules/a": Object {
        "link": true,
        "resolved": "packages/a",
      },
      "packages/c/node_modules/b": Object {
        "link": true,
        "resolved": "packages/b",
      },
    },
    "requires": true,
  },
  "name": "workspace",
  "realpath": "workspace",
  "top": "workspace",
}
`

exports[`test/arborist/load-actual.js TAP workspace2 > loaded tree 1`] = `
Node {
  "children": Map {
    "b" => Node {
      "children": Map {
        "d" => Node {
          "edgesIn": Set {
            Edge {
              "from": "workspace2/node_modules/b",
              "name": "d",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "workspace2/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/b/node_modules/d",
          "name": "d",
          "realpath": "workspace2/node_modules/b/node_modules/d",
          "top": "workspace2",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "workspace2",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace2/node_modules/b/node_modules/d",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace2/x",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "workspace2/node_modules/b/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "realpath": "workspace2/node_modules/b",
      "top": "workspace2",
    },
    "c" => Node {
      "children": Map {
        "d" => Link {
          "edgesIn": Set {
            Edge {
              "from": "workspace2/node_modules/c",
              "name": "d",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/c/node_modules/d",
          "name": "d",
          "realpath": "workspace2/node_modules/b/node_modules/d",
          "target": Object {
            "name": "d",
            "parent": "workspace2/node_modules/b",
          },
          "top": "workspace2",
        },
        "x" => Link {
          "edgesIn": Set {
            Edge {
              "from": "workspace2/node_modules/c",
              "name": "x",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/c/node_modules/x",
          "name": "x",
          "realpath": "workspace2/x",
          "target": Object {
            "fsParent": "workspace2",
            "name": "x",
          },
          "top": "workspace2",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "workspace2",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "workspace2/node_modules/b/node_modules/d",
          "type": "prod",
        },
        "x" => Edge {
          "name": "x",
          "spec": "",
          "to": "workspace2/x",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "realpath": "workspace2/node_modules/c",
      "top": "workspace2",
    },
  },
  "edgesOut": Map {
    "b" => Edge {
      "name": "b",
      "spec": "",
      "to": "workspace2/node_modules/b",
      "type": "prod",
    },
    "c" => Edge {
      "name": "c",
      "spec": "",
      "to": "workspace2/node_modules/c",
      "type": "prod",
    },
  },
  "fsChildren": Array [
    "x",
  ],
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "b": Object {
        "dependencies": Object {
          "d": Object {
            "requires": Object {
              "b": "",
            },
            "version": "1.2.3",
          },
        },
        "requires": Object {
          "d": "",
        },
        "version": "1.2.3",
      },
      "c": Object {
        "dependencies": Object {
          "d": Object {
            "requires": Object {
              "b": "",
            },
            "version": "file:node_modules/b/node_modules/d",
          },
          "x": Object {
            "requires": Object {
              "b": "",
            },
            "version": "file:x",
          },
        },
        "requires": Object {
          "d": "",
          "x": "",
        },
        "version": "1.2.3",
      },
    },
    "lockfileVersion": 2,
    "name": "a",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "b": "",
          "c": "",
        },
        "name": "a",
        "version": "1.2.3",
      },
      "node_modules/b": Object {
        "dependencies": Object {
          "d": "",
        },
        "version": "1.2.3",
      },
      "node_modules/b/node_modules/d": Object {
        "dependencies": Object {
          "b": "",
        },
        "version": "1.2.3",
      },
      "node_modules/c": Object {
        "dependencies": Object {
          "d": "",
          "x": "",
        },
        "version": "1.2.3",
      },
      "node_modules/c/node_modules/d": Object {
        "link": true,
        "resolved": "node_modules/b/node_modules/d",
      },
      "node_modules/c/node_modules/x": Object {
        "link": true,
        "resolved": "x",
      },
      "x": Object {
        "dependencies": Object {
          "b": "",
        },
        "version": "1.2.3",
      },
    },
    "requires": true,
    "version": "1.2.3",
  },
  "name": "workspace2",
  "realpath": "workspace2",
  "top": "workspace2",
}
`

exports[`test/arborist/load-actual.js TAP workspace3 > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspace3/app",
          "name": "a",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace3/packages/b",
          "name": "a",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace3/packages/c",
          "name": "a",
          "spec": "",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/a",
      "name": "a",
      "realpath": "workspace3/packages/a",
      "target": Object {
        "fsParent": "workspace3",
        "name": "a",
      },
      "top": "workspace3",
    },
    "app" => Link {
      "extraneous": true,
      "location": "node_modules/app",
      "name": "app",
      "realpath": "workspace3/app",
      "target": Object {
        "fsParent": "workspace3",
        "name": "app",
      },
      "top": "workspace3",
    },
    "b" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspace3/app",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace3/packages/a",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace3/packages/c",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/b",
      "name": "b",
      "realpath": "workspace3/packages/b",
      "target": Object {
        "fsParent": "workspace3",
        "name": "b",
      },
      "top": "workspace3",
    },
    "c" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspace3/app",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace3/packages/a",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace3/packages/b",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/c",
      "name": "c",
      "realpath": "workspace3/packages/c",
      "target": Object {
        "fsParent": "workspace3",
        "name": "c",
      },
      "top": "workspace3",
    },
  },
  "fsChildren": Array [
    "app",
    "packages/a",
    "packages/b",
    "packages/c",
  ],
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "a": Object {
        "dependencies": Object {
          "x": Object {
            "extraneous": true,
            "version": "1.2.3",
          },
        },
        "extraneous": true,
        "requires": Object {
          "b": "",
          "c": "",
          "x": "",
        },
        "version": "file:packages/a",
      },
      "app": Object {
        "dependencies": Object {
          "i": Object {
            "extraneous": true,
            "version": "1.2.3",
          },
        },
        "extraneous": true,
        "requires": Object {
          "a": "",
          "b": "",
          "c": "",
          "i": "",
        },
        "version": "file:app",
      },
      "b": Object {
        "dependencies": Object {
          "y": Object {
            "extraneous": true,
            "version": "1.2.3",
          },
        },
        "extraneous": true,
        "requires": Object {
          "a": "",
          "c": "",
          "y": "",
        },
        "version": "file:packages/b",
      },
      "c": Object {
        "dependencies": Object {
          "z": Object {
            "extraneous": true,
            "version": "1.2.3",
          },
        },
        "extraneous": true,
        "requires": Object {
          "a": "",
          "b": "",
          "z": "",
        },
        "version": "file:packages/c",
      },
    },
    "lockfileVersion": 2,
    "name": "workspace3",
    "packages": Object {
      "app": Object {
        "dependencies": Object {
          "a": "",
          "b": "",
          "c": "",
          "i": "",
        },
        "extraneous": true,
        "version": "1.2.3",
      },
      "app/node_modules/i": Object {
        "extraneous": true,
        "version": "1.2.3",
      },
      "node_modules/a": Object {
        "link": true,
        "resolved": "packages/a",
      },
      "node_modules/app": Object {
        "link": true,
        "resolved": "app",
      },
      "node_modules/b": Object {
        "link": true,
        "resolved": "packages/b",
      },
      "node_modules/c": Object {
        "link": true,
        "resolved": "packages/c",
      },
      "packages/a": Object {
        "dependencies": Object {
          "b": "",
          "c": "",
          "x": "",
        },
        "extraneous": true,
        "version": "1.2.3",
      },
      "packages/a/node_modules/x": Object {
        "extraneous": true,
        "version": "1.2.3",
      },
      "packages/b": Object {
        "dependencies": Object {
          "a": "",
          "c": "",
          "y": "",
        },
        "extraneous": true,
        "version": "1.2.3",
      },
      "packages/b/node_modules/y": Object {
        "extraneous": true,
        "version": "1.2.3",
      },
      "packages/c": Object {
        "dependencies": Object {
          "a": "",
          "b": "",
          "z": "",
        },
        "extraneous": true,
        "version": "1.2.3",
      },
      "packages/c/node_modules/z": Object {
        "extraneous": true,
        "version": "1.2.3",
      },
    },
    "requires": true,
  },
  "name": "workspace3",
  "realpath": "workspace3",
  "top": "workspace3",
}
`

exports[`test/arborist/load-actual.js TAP workspaces load a simple install tree containing workspaces > expect resolving Promise 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspaces-simple",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-simple/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "realpath": "workspaces-simple/a",
      "target": Object {
        "fsParent": "workspaces-simple",
        "name": "a",
      },
      "top": "workspaces-simple",
    },
    "b" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspaces-simple",
          "name": "b",
          "spec": "file:{CWD}/test/fixtures/workspaces-simple/b",
          "type": "workspace",
        },
        Edge {
          "from": "workspaces-simple/a",
          "name": "b",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "realpath": "workspaces-simple/b",
      "target": Object {
        "fsParent": "workspaces-simple",
        "name": "b",
      },
      "top": "workspaces-simple",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-simple/a",
      "to": "workspaces-simple/a",
      "type": "workspace",
    },
    "b" => Edge {
      "name": "b",
      "spec": "file:{CWD}/test/fixtures/workspaces-simple/b",
      "to": "workspaces-simple/b",
      "type": "workspace",
    },
  },
  "fsChildren": Array [
    "a",
    "b",
  ],
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "a": Object {
        "requires": Object {
          "b": "^1.0.0",
        },
        "version": "file:a",
      },
      "b": Object {
        "version": "file:b",
      },
    },
    "lockfileVersion": 2,
    "name": "workspace-simple",
    "packages": Object {
      "": Object {
        "name": "workspace-simple",
        "workspaces": Array [
          "a",
          "b",
        ],
      },
      "a": Object {
        "dependencies": Object {
          "b": "^1.0.0",
        },
        "version": "1.0.0",
      },
      "b": Object {
        "version": "1.0.0",
      },
      "node_modules/a": Object {
        "link": true,
        "resolved": "a",
      },
      "node_modules/b": Object {
        "link": true,
        "resolved": "b",
      },
    },
    "requires": true,
  },
  "name": "workspaces-simple",
  "realpath": "workspaces-simple",
  "top": "workspaces-simple",
}
`

exports[`test/arborist/load-actual.js TAP workspaces-simple > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspaces-simple",
          "name": "a",
          "spec": "file:{CWD}/test/fixtures/workspaces-simple/a",
          "type": "workspace",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "realpath": "workspaces-simple/a",
      "target": Object {
        "fsParent": "workspaces-simple",
        "name": "a",
      },
      "top": "workspaces-simple",
    },
    "b" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspaces-simple",
          "name": "b",
          "spec": "file:{CWD}/test/fixtures/workspaces-simple/b",
          "type": "workspace",
        },
        Edge {
          "from": "workspaces-simple/a",
          "name": "b",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "realpath": "workspaces-simple/b",
      "target": Object {
        "fsParent": "workspaces-simple",
        "name": "b",
      },
      "top": "workspaces-simple",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "file:{CWD}/test/fixtures/workspaces-simple/a",
      "to": "workspaces-simple/a",
      "type": "workspace",
    },
    "b" => Edge {
      "name": "b",
      "spec": "file:{CWD}/test/fixtures/workspaces-simple/b",
      "to": "workspaces-simple/b",
      "type": "workspace",
    },
  },
  "fsChildren": Array [
    "a",
    "b",
  ],
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "a": Object {
        "requires": Object {
          "b": "^1.0.0",
        },
        "version": "file:a",
      },
      "b": Object {
        "version": "file:b",
      },
    },
    "lockfileVersion": 2,
    "name": "workspace-simple",
    "packages": Object {
      "": Object {
        "name": "workspace-simple",
        "workspaces": Array [
          "a",
          "b",
        ],
      },
      "a": Object {
        "dependencies": Object {
          "b": "^1.0.0",
        },
        "version": "1.0.0",
      },
      "b": Object {
        "version": "1.0.0",
      },
      "node_modules/a": Object {
        "link": true,
        "resolved": "a",
      },
      "node_modules/b": Object {
        "link": true,
        "resolved": "b",
      },
    },
    "requires": true,
  },
  "name": "workspaces-simple",
  "realpath": "workspaces-simple",
  "top": "workspaces-simple",
}
`

exports[`test/arborist/load-actual.js TAP yarn-lock-mkdirp-file-dep > loaded tree 1`] = `
Node {
  "children": Map {
    "mkdirp" => Node {
      "edgesIn": Set {
        Edge {
          "error": "INVALID",
          "from": "yarn-lock-mkdirp-file-dep",
          "name": "mkdirp",
          "spec": "file:mkdirp",
          "type": "prod",
        },
      },
      "location": "node_modules/mkdirp",
      "name": "mkdirp",
      "realpath": "yarn-lock-mkdirp-file-dep/node_modules/mkdirp",
      "top": "yarn-lock-mkdirp-file-dep",
    },
  },
  "edgesOut": Map {
    "mkdirp" => Edge {
      "error": "INVALID",
      "name": "mkdirp",
      "spec": "file:mkdirp",
      "to": "yarn-lock-mkdirp-file-dep/node_modules/mkdirp",
      "type": "prod",
    },
  },
  "location": "",
  "meta": Object {
    "dependencies": Object {
      "mkdirp": Object {
        "version": "1.0.2",
      },
    },
    "lockfileVersion": 2,
    "name": "yarn-lock-mkdirp-file-dep",
    "packages": Object {
      "": Object {
        "dependencies": Object {
          "mkdirp": "file:mkdirp",
        },
      },
      "node_modules/mkdirp": Object {
        "bin": Object {
          "mkdirp": "bin/cmd.js",
        },
        "engines": Object {
          "node": ">=10",
        },
        "license": "MIT",
        "version": "1.0.2",
      },
    },
    "requires": true,
  },
  "name": "yarn-lock-mkdirp-file-dep",
  "realpath": "yarn-lock-mkdirp-file-dep",
  "top": "yarn-lock-mkdirp-file-dep",
}
`

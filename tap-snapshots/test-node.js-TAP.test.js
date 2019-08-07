/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/node.js TAP basic instantiation > just a lone root node 1`] = `
Node {
  "children": Map {},
  "dev": true,
  "devOptional": true,
  "edgesIn": Set {},
  "edgesOut": Map {},
  "errors": Array [],
  "extraneous": true,
  "inBundle": false,
  "integrity": null,
  "location": "/",
  "meta": undefined,
  "name": "root",
  "optional": true,
  "package": Object {
    "name": "root",
  },
  "path": ".",
  "realpath": "/home/user/projects/root",
  "resolved": null,
}
`

exports[`test/node.js TAP testing with dep tree with meta > add new meta under prod 1`] = `
Node {
  "children": Map {
    "prod" => Node {
      "children": Map {
        "meta" => Node {
          "children": Map {
            "metameta" => Link {
              "dev": true,
              "devOptional": true,
              "edgesIn": Set {},
              "edgesOut": Map {},
              "errors": Array [],
              "extraneous": true,
              "inBundle": false,
              "integrity": null,
              "location": "/prod/meta/metameta",
              "meta": Object {
                "data": Object {
                  "/": Object {
                    "integrity": undefined,
                    "resolved": undefined,
                  },
                  "/bundled": Object {
                    "integrity": "bundled",
                    "resolved": "bundled",
                  },
                  "/dev": Object {
                    "integrity": "dev",
                    "resolved": "dev",
                  },
                  "/extraneous": Object {
                    "integrity": "extraneous",
                    "resolved": "extraneous",
                  },
                  "/meta": Object {
                    "integrity": "meta",
                    "resolved": "meta",
                  },
                  "/optional": Object {
                    "integrity": "opt",
                    "resolved": "opt",
                  },
                  "/peer": Object {
                    "integrity": "peer",
                    "resolved": "peer",
                  },
                  "/prod": Object {
                    "integrity": "prod",
                    "resolved": "prod",
                  },
                  "/prod/meta": Object {
                    "integrity": "newMeta",
                    "resolved": "newMeta",
                  },
                  "/prod/meta/metameta": Object {
                    "integrity": "metameta",
                    "resolved": "metameta",
                  },
                },
                "dememo": Function dememo(node),
                "get": Function get(node),
                "memo": Function memo(node, data),
              },
              "name": "metameta",
              "optional": true,
              "package": Object {
                "integrity": "metameta",
                "name": "metameta",
                "resolved": "metameta",
                "version": "1.2.3",
              },
              "path": "./node_modules/prod/node_modules/meta/node_modules/metameta",
              "realpath": "/home/user/projects/root/node_modules/meta",
              "resolved": null,
              "target": Node {
                "children": Map {},
                "dev": true,
                "devOptional": true,
                "edgesIn": Set {
                  Edge {},
                },
                "edgesOut": Map {
                  "bundled" => Edge {},
                },
                "errors": Array [],
                "extraneous": true,
                "inBundle": false,
                "integrity": "meta",
                "location": "/meta",
                "meta": Object {
                  "data": Object {
                    "/": Object {
                      "integrity": undefined,
                      "resolved": undefined,
                    },
                    "/bundled": Object {
                      "integrity": "bundled",
                      "resolved": "bundled",
                    },
                    "/dev": Object {
                      "integrity": "dev",
                      "resolved": "dev",
                    },
                    "/extraneous": Object {
                      "integrity": "extraneous",
                      "resolved": "extraneous",
                    },
                    "/meta": Object {
                      "integrity": "meta",
                      "resolved": "meta",
                    },
                    "/optional": Object {
                      "integrity": "opt",
                      "resolved": "opt",
                    },
                    "/peer": Object {
                      "integrity": "peer",
                      "resolved": "peer",
                    },
                    "/prod": Object {
                      "integrity": "prod",
                      "resolved": "prod",
                    },
                    "/prod/meta": Object {
                      "integrity": "newMeta",
                      "resolved": "newMeta",
                    },
                    "/prod/meta/metameta": Object {
                      "integrity": "metameta",
                      "resolved": "metameta",
                    },
                  },
                  "dememo": Function dememo(node),
                  "get": Function get(node),
                  "memo": Function memo(node, data),
                },
                "name": "meta",
                "optional": true,
                "package": Object {
                  "dependencies": Object {
                    "bundled": "",
                  },
                  "devDependencies": Object {
                    "missing": "",
                  },
                  "integrity": "meta",
                  "name": "meta",
                  "resolved": "meta",
                  "version": "1.2.3",
                },
                "path": "./node_modules/meta",
                "realpath": "/home/user/projects/root/node_modules/meta",
                "resolved": "meta",
              },
            },
          },
          "dev": true,
          "devOptional": true,
          "edgesIn": Set {
            Edge {},
          },
          "edgesOut": Map {
            "asdf" => Edge {},
          },
          "errors": Array [],
          "extraneous": true,
          "inBundle": false,
          "integrity": "newMeta",
          "location": "/prod/meta",
          "meta": Object {
            "data": Object {
              "/": Object {
                "integrity": undefined,
                "resolved": undefined,
              },
              "/bundled": Object {
                "integrity": "bundled",
                "resolved": "bundled",
              },
              "/dev": Object {
                "integrity": "dev",
                "resolved": "dev",
              },
              "/extraneous": Object {
                "integrity": "extraneous",
                "resolved": "extraneous",
              },
              "/meta": Object {
                "integrity": "meta",
                "resolved": "meta",
              },
              "/optional": Object {
                "integrity": "opt",
                "resolved": "opt",
              },
              "/peer": Object {
                "integrity": "peer",
                "resolved": "peer",
              },
              "/prod": Object {
                "integrity": "prod",
                "resolved": "prod",
              },
              "/prod/meta": Object {
                "integrity": "newMeta",
                "resolved": "newMeta",
              },
              "/prod/meta/metameta": Object {
                "integrity": "metameta",
                "resolved": "metameta",
              },
            },
            "dememo": Function dememo(node),
            "get": Function get(node),
            "memo": Function memo(node, data),
          },
          "name": "meta",
          "optional": true,
          "package": Object {
            "integrity": "newMeta",
            "name": "meta",
            "peerDependencies": Object {
              "asdf": "",
            },
            "peerDependenciesMeta": Object {
              "asdf": Object {
                "optional": true,
              },
            },
            "resolved": "newMeta",
            "version": "2.3.4",
          },
          "path": "./node_modules/prod/node_modules/meta",
          "realpath": "/home/user/projects/root/node_modules/prod/node_modules/meta",
          "resolved": "newMeta",
        },
      },
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
        "peer" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "prod",
      "location": "/prod",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
          "/prod/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/prod/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "prod",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "prod",
        "name": "prod",
        "peerDependencies": Object {
          "peer": "",
        },
        "resolved": "prod",
        "version": "1.2.3",
      },
      "path": "./node_modules/prod",
      "realpath": "/home/user/projects/root/node_modules/prod",
      "resolved": "prod",
    },
    "bundled" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": true,
      "integrity": "bundled",
      "location": "/bundled",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
          "/prod/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/prod/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "bundled",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "bundled",
        "name": "bundled",
        "resolved": "bundled",
        "version": "1.2.3",
      },
      "path": "./node_modules/bundled",
      "realpath": "/home/user/projects/root/node_modules/bundled",
      "resolved": "bundled",
    },
    "dev" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "dev",
      "location": "/dev",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
          "/prod/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/prod/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "dev",
      "optional": true,
      "package": Object {
        "integrity": "dev",
        "name": "dev",
        "resolved": "dev",
        "version": "1.2.3",
      },
      "path": "./node_modules/dev",
      "realpath": "/home/user/projects/root/node_modules/dev",
      "resolved": "dev",
    },
    "optional" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "opt",
      "location": "/optional",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
          "/prod/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/prod/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "optional",
      "optional": true,
      "package": Object {
        "integrity": "opt",
        "name": "optional",
        "resolved": "opt",
        "version": "1.2.3",
      },
      "path": "./node_modules/optional",
      "realpath": "/home/user/projects/root/node_modules/optional",
      "resolved": "opt",
    },
    "peer" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "peer",
      "location": "/peer",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
          "/prod/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/prod/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "peer",
      "optional": true,
      "package": Object {
        "integrity": "peer",
        "name": "peer",
        "resolved": "peer",
        "version": "1.2.3",
      },
      "path": "./node_modules/peer",
      "realpath": "/home/user/projects/root/node_modules/peer",
      "resolved": "peer",
    },
    "extraneous" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {},
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "extraneous",
      "location": "/extraneous",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
          "/prod/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/prod/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "extraneous",
      "optional": true,
      "package": Object {
        "integrity": "extraneous",
        "name": "extraneous",
        "resolved": "extraneous",
        "version": "1.2.3",
      },
      "path": "./node_modules/extraneous",
      "realpath": "/home/user/projects/root/node_modules/extraneous",
      "resolved": "extraneous",
    },
    "meta" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "bundled" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "meta",
      "location": "/meta",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
          "/prod/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/prod/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "meta",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "bundled": "",
        },
        "devDependencies": Object {
          "missing": "",
        },
        "integrity": "meta",
        "name": "meta",
        "resolved": "meta",
        "version": "1.2.3",
      },
      "path": "./node_modules/meta",
      "realpath": "/home/user/projects/root/node_modules/meta",
      "resolved": "meta",
    },
  },
  "dev": true,
  "devOptional": true,
  "edgesIn": Set {},
  "edgesOut": Map {
    "optional" => Edge {},
    "overlap" => Edge {},
    "optMissing" => Edge {},
    "prod" => Edge {},
    "bundled" => Edge {},
    "missing" => Edge {},
    "dev" => Edge {},
  },
  "errors": Array [],
  "extraneous": true,
  "inBundle": false,
  "integrity": undefined,
  "location": "/",
  "meta": Object {
    "data": Object {
      "/": Object {
        "integrity": undefined,
        "resolved": undefined,
      },
      "/bundled": Object {
        "integrity": "bundled",
        "resolved": "bundled",
      },
      "/dev": Object {
        "integrity": "dev",
        "resolved": "dev",
      },
      "/extraneous": Object {
        "integrity": "extraneous",
        "resolved": "extraneous",
      },
      "/meta": Object {
        "integrity": "meta",
        "resolved": "meta",
      },
      "/optional": Object {
        "integrity": "opt",
        "resolved": "opt",
      },
      "/peer": Object {
        "integrity": "peer",
        "resolved": "peer",
      },
      "/prod": Object {
        "integrity": "prod",
        "resolved": "prod",
      },
      "/prod/meta": Object {
        "integrity": "newMeta",
        "resolved": "newMeta",
      },
      "/prod/meta/metameta": Object {
        "integrity": "metameta",
        "resolved": "metameta",
      },
    },
    "dememo": Function dememo(node),
    "get": Function get(node),
    "memo": Function memo(node, data),
  },
  "name": "root",
  "optional": true,
  "package": Object {
    "bundleDependencies": Array [
      "bundled",
    ],
    "dependencies": Object {
      "bundled": "",
      "missing": "",
      "prod": "",
    },
    "devDependencies": Object {
      "dev": "",
      "overlap": "",
    },
    "name": "root",
    "optionalDependencies": Object {
      "optional": "",
      "optMissing": "",
      "overlap": "",
    },
  },
  "path": ".",
  "realpath": "/home/user/projects/root",
  "resolved": undefined,
}
`

exports[`test/node.js TAP testing with dep tree with meta > initial load with some deps 1`] = `
Node {
  "children": Map {
    "prod" => Node {
      "children": Map {
        "meta" => Node {
          "children": Map {},
          "dev": true,
          "devOptional": true,
          "edgesIn": Set {
            Edge {},
          },
          "edgesOut": Map {
            "bundled" => Edge {},
          },
          "errors": Array [],
          "extraneous": true,
          "inBundle": false,
          "integrity": "meta",
          "location": "/prod/meta",
          "meta": Object {
            "data": Object {
              "/": Object {
                "integrity": undefined,
                "resolved": undefined,
              },
              "/bundled": Object {
                "integrity": "bundled",
                "resolved": "bundled",
              },
              "/dev": Object {
                "integrity": "dev",
                "resolved": "dev",
              },
              "/extraneous": Object {
                "integrity": "extraneous",
                "resolved": "extraneous",
              },
              "/optional": Object {
                "integrity": "opt",
                "resolved": "opt",
              },
              "/peer": Object {
                "integrity": "peer",
                "resolved": "peer",
              },
              "/prod": Object {
                "integrity": "prod",
                "resolved": "prod",
              },
              "/prod/meta": Object {
                "integrity": "meta",
                "resolved": "meta",
              },
            },
            "dememo": Function dememo(node),
            "get": Function get(node),
            "memo": Function memo(node, data),
          },
          "name": "meta",
          "optional": true,
          "package": Object {
            "dependencies": Object {
              "bundled": "",
            },
            "devDependencies": Object {
              "missing": "",
            },
            "integrity": "meta",
            "name": "meta",
            "resolved": "meta",
            "version": "1.2.3",
          },
          "path": "./node_modules/prod/node_modules/meta",
          "realpath": "/home/user/projects/root/node_modules/prod/node_modules/meta",
          "resolved": "meta",
        },
      },
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
        "peer" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "prod",
      "location": "/prod",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
          "/prod/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "prod",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "prod",
        "name": "prod",
        "peerDependencies": Object {
          "peer": "",
        },
        "resolved": "prod",
        "version": "1.2.3",
      },
      "path": "./node_modules/prod",
      "realpath": "/home/user/projects/root/node_modules/prod",
      "resolved": "prod",
    },
    "bundled" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": true,
      "integrity": "bundled",
      "location": "/bundled",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
          "/prod/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "bundled",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "bundled",
        "name": "bundled",
        "resolved": "bundled",
        "version": "1.2.3",
      },
      "path": "./node_modules/bundled",
      "realpath": "/home/user/projects/root/node_modules/bundled",
      "resolved": "bundled",
    },
    "dev" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "dev",
      "location": "/dev",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
          "/prod/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "dev",
      "optional": true,
      "package": Object {
        "integrity": "dev",
        "name": "dev",
        "resolved": "dev",
        "version": "1.2.3",
      },
      "path": "./node_modules/dev",
      "realpath": "/home/user/projects/root/node_modules/dev",
      "resolved": "dev",
    },
    "optional" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "opt",
      "location": "/optional",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
          "/prod/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "optional",
      "optional": true,
      "package": Object {
        "integrity": "opt",
        "name": "optional",
        "resolved": "opt",
        "version": "1.2.3",
      },
      "path": "./node_modules/optional",
      "realpath": "/home/user/projects/root/node_modules/optional",
      "resolved": "opt",
    },
    "peer" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "peer",
      "location": "/peer",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
          "/prod/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "peer",
      "optional": true,
      "package": Object {
        "integrity": "peer",
        "name": "peer",
        "resolved": "peer",
        "version": "1.2.3",
      },
      "path": "./node_modules/peer",
      "realpath": "/home/user/projects/root/node_modules/peer",
      "resolved": "peer",
    },
    "extraneous" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {},
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "extraneous",
      "location": "/extraneous",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
          "/prod/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "extraneous",
      "optional": true,
      "package": Object {
        "integrity": "extraneous",
        "name": "extraneous",
        "resolved": "extraneous",
        "version": "1.2.3",
      },
      "path": "./node_modules/extraneous",
      "realpath": "/home/user/projects/root/node_modules/extraneous",
      "resolved": "extraneous",
    },
  },
  "dev": true,
  "devOptional": true,
  "edgesIn": Set {},
  "edgesOut": Map {
    "optional" => Edge {},
    "overlap" => Edge {},
    "optMissing" => Edge {},
    "prod" => Edge {},
    "bundled" => Edge {},
    "missing" => Edge {},
    "dev" => Edge {},
  },
  "errors": Array [],
  "extraneous": true,
  "inBundle": false,
  "integrity": undefined,
  "location": "/",
  "meta": Object {
    "data": Object {
      "/": Object {
        "integrity": undefined,
        "resolved": undefined,
      },
      "/bundled": Object {
        "integrity": "bundled",
        "resolved": "bundled",
      },
      "/dev": Object {
        "integrity": "dev",
        "resolved": "dev",
      },
      "/extraneous": Object {
        "integrity": "extraneous",
        "resolved": "extraneous",
      },
      "/optional": Object {
        "integrity": "opt",
        "resolved": "opt",
      },
      "/peer": Object {
        "integrity": "peer",
        "resolved": "peer",
      },
      "/prod": Object {
        "integrity": "prod",
        "resolved": "prod",
      },
      "/prod/meta": Object {
        "integrity": "meta",
        "resolved": "meta",
      },
    },
    "dememo": Function dememo(node),
    "get": Function get(node),
    "memo": Function memo(node, data),
  },
  "name": "root",
  "optional": true,
  "package": Object {
    "bundleDependencies": Array [
      "bundled",
    ],
    "dependencies": Object {
      "bundled": "",
      "missing": "",
      "prod": "",
    },
    "devDependencies": Object {
      "dev": "",
      "overlap": "",
    },
    "name": "root",
    "optionalDependencies": Object {
      "optional": "",
      "optMissing": "",
      "overlap": "",
    },
  },
  "path": ".",
  "realpath": "/home/user/projects/root",
  "resolved": undefined,
}
`

exports[`test/node.js TAP testing with dep tree with meta > move meta to top level, update stuff 1`] = `
Node {
  "children": Map {
    "prod" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
        "peer" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "prod",
      "location": "/prod",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "prod",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "prod",
        "name": "prod",
        "peerDependencies": Object {
          "peer": "",
        },
        "resolved": "prod",
        "version": "1.2.3",
      },
      "path": "./node_modules/prod",
      "realpath": "/home/user/projects/root/node_modules/prod",
      "resolved": "prod",
    },
    "bundled" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": true,
      "integrity": "bundled",
      "location": "/bundled",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "bundled",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "bundled",
        "name": "bundled",
        "resolved": "bundled",
        "version": "1.2.3",
      },
      "path": "./node_modules/bundled",
      "realpath": "/home/user/projects/root/node_modules/bundled",
      "resolved": "bundled",
    },
    "dev" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "dev",
      "location": "/dev",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "dev",
      "optional": true,
      "package": Object {
        "integrity": "dev",
        "name": "dev",
        "resolved": "dev",
        "version": "1.2.3",
      },
      "path": "./node_modules/dev",
      "realpath": "/home/user/projects/root/node_modules/dev",
      "resolved": "dev",
    },
    "optional" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "opt",
      "location": "/optional",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "optional",
      "optional": true,
      "package": Object {
        "integrity": "opt",
        "name": "optional",
        "resolved": "opt",
        "version": "1.2.3",
      },
      "path": "./node_modules/optional",
      "realpath": "/home/user/projects/root/node_modules/optional",
      "resolved": "opt",
    },
    "peer" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "peer",
      "location": "/peer",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "peer",
      "optional": true,
      "package": Object {
        "integrity": "peer",
        "name": "peer",
        "resolved": "peer",
        "version": "1.2.3",
      },
      "path": "./node_modules/peer",
      "realpath": "/home/user/projects/root/node_modules/peer",
      "resolved": "peer",
    },
    "extraneous" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {},
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "extraneous",
      "location": "/extraneous",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "extraneous",
      "optional": true,
      "package": Object {
        "integrity": "extraneous",
        "name": "extraneous",
        "resolved": "extraneous",
        "version": "1.2.3",
      },
      "path": "./node_modules/extraneous",
      "realpath": "/home/user/projects/root/node_modules/extraneous",
      "resolved": "extraneous",
    },
    "meta" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
        Edge {},
      },
      "edgesOut": Map {
        "bundled" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "meta",
      "location": "/meta",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "meta",
            "resolved": "meta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "meta",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "bundled": "",
        },
        "devDependencies": Object {
          "missing": "",
        },
        "integrity": "meta",
        "name": "meta",
        "resolved": "meta",
        "version": "1.2.3",
      },
      "path": "./node_modules/meta",
      "realpath": "/home/user/projects/root/node_modules/meta",
      "resolved": "meta",
    },
  },
  "dev": true,
  "devOptional": true,
  "edgesIn": Set {},
  "edgesOut": Map {
    "optional" => Edge {},
    "overlap" => Edge {},
    "optMissing" => Edge {},
    "prod" => Edge {},
    "bundled" => Edge {},
    "missing" => Edge {},
    "dev" => Edge {},
  },
  "errors": Array [],
  "extraneous": true,
  "inBundle": false,
  "integrity": undefined,
  "location": "/",
  "meta": Object {
    "data": Object {
      "/": Object {
        "integrity": undefined,
        "resolved": undefined,
      },
      "/bundled": Object {
        "integrity": "bundled",
        "resolved": "bundled",
      },
      "/dev": Object {
        "integrity": "dev",
        "resolved": "dev",
      },
      "/extraneous": Object {
        "integrity": "extraneous",
        "resolved": "extraneous",
      },
      "/meta": Object {
        "integrity": "meta",
        "resolved": "meta",
      },
      "/optional": Object {
        "integrity": "opt",
        "resolved": "opt",
      },
      "/peer": Object {
        "integrity": "peer",
        "resolved": "peer",
      },
      "/prod": Object {
        "integrity": "prod",
        "resolved": "prod",
      },
    },
    "dememo": Function dememo(node),
    "get": Function get(node),
    "memo": Function memo(node, data),
  },
  "name": "root",
  "optional": true,
  "package": Object {
    "bundleDependencies": Array [
      "bundled",
    ],
    "dependencies": Object {
      "bundled": "",
      "missing": "",
      "prod": "",
    },
    "devDependencies": Object {
      "dev": "",
      "overlap": "",
    },
    "name": "root",
    "optionalDependencies": Object {
      "optional": "",
      "optMissing": "",
      "overlap": "",
    },
  },
  "path": ".",
  "realpath": "/home/user/projects/root",
  "resolved": undefined,
}
`

exports[`test/node.js TAP testing with dep tree with meta > move new meta to top level 1`] = `
Node {
  "children": Map {
    "prod" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
        "peer" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "prod",
      "location": "/prod",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "prod",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "prod",
        "name": "prod",
        "peerDependencies": Object {
          "peer": "",
        },
        "resolved": "prod",
        "version": "1.2.3",
      },
      "path": "./node_modules/prod",
      "realpath": "/home/user/projects/root/node_modules/prod",
      "resolved": "prod",
    },
    "bundled" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": true,
      "integrity": "bundled",
      "location": "/bundled",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "bundled",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "bundled",
        "name": "bundled",
        "resolved": "bundled",
        "version": "1.2.3",
      },
      "path": "./node_modules/bundled",
      "realpath": "/home/user/projects/root/node_modules/bundled",
      "resolved": "bundled",
    },
    "dev" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "dev",
      "location": "/dev",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "dev",
      "optional": true,
      "package": Object {
        "integrity": "dev",
        "name": "dev",
        "resolved": "dev",
        "version": "1.2.3",
      },
      "path": "./node_modules/dev",
      "realpath": "/home/user/projects/root/node_modules/dev",
      "resolved": "dev",
    },
    "optional" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "opt",
      "location": "/optional",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "optional",
      "optional": true,
      "package": Object {
        "integrity": "opt",
        "name": "optional",
        "resolved": "opt",
        "version": "1.2.3",
      },
      "path": "./node_modules/optional",
      "realpath": "/home/user/projects/root/node_modules/optional",
      "resolved": "opt",
    },
    "peer" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "peer",
      "location": "/peer",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "peer",
      "optional": true,
      "package": Object {
        "integrity": "peer",
        "name": "peer",
        "resolved": "peer",
        "version": "1.2.3",
      },
      "path": "./node_modules/peer",
      "realpath": "/home/user/projects/root/node_modules/peer",
      "resolved": "peer",
    },
    "extraneous" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {},
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "extraneous",
      "location": "/extraneous",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "extraneous",
      "optional": true,
      "package": Object {
        "integrity": "extraneous",
        "name": "extraneous",
        "resolved": "extraneous",
        "version": "1.2.3",
      },
      "path": "./node_modules/extraneous",
      "realpath": "/home/user/projects/root/node_modules/extraneous",
      "resolved": "extraneous",
    },
    "meta" => Node {
      "children": Map {
        "metameta" => Link {
          "dev": true,
          "devOptional": true,
          "edgesIn": Set {},
          "edgesOut": Map {},
          "errors": Array [],
          "extraneous": true,
          "inBundle": false,
          "integrity": null,
          "location": "/meta/metameta",
          "meta": Object {
            "data": Object {
              "/": Object {
                "integrity": undefined,
                "resolved": undefined,
              },
              "/bundled": Object {
                "integrity": "bundled",
                "resolved": "bundled",
              },
              "/dev": Object {
                "integrity": "dev",
                "resolved": "dev",
              },
              "/extraneous": Object {
                "integrity": "extraneous",
                "resolved": "extraneous",
              },
              "/meta": Object {
                "integrity": "newMeta",
                "resolved": "newMeta",
              },
              "/meta/metameta": Object {
                "integrity": "metameta",
                "resolved": "metameta",
              },
              "/optional": Object {
                "integrity": "opt",
                "resolved": "opt",
              },
              "/peer": Object {
                "integrity": "peer",
                "resolved": "peer",
              },
              "/prod": Object {
                "integrity": "prod",
                "resolved": "prod",
              },
            },
            "dememo": Function dememo(node),
            "get": Function get(node),
            "memo": Function memo(node, data),
          },
          "name": "metameta",
          "optional": true,
          "package": Object {
            "integrity": "metameta",
            "name": "metameta",
            "resolved": "metameta",
            "version": "1.2.3",
          },
          "path": "./node_modules/meta/node_modules/metameta",
          "realpath": "/home/user/projects/root/node_modules/meta",
          "resolved": null,
          "target": Node {
            "children": Map {},
            "dev": true,
            "devOptional": true,
            "edgesIn": Set {},
            "edgesOut": Map {
              "bundled" => Edge {},
            },
            "errors": Array [],
            "extraneous": true,
            "inBundle": false,
            "integrity": "meta",
            "location": "/",
            "meta": null,
            "name": "meta",
            "optional": true,
            "package": Object {
              "dependencies": Object {
                "bundled": "",
              },
              "devDependencies": Object {
                "missing": "",
              },
              "integrity": "meta",
              "name": "meta",
              "resolved": "meta",
              "version": "1.2.3",
            },
            "path": "./node_modules/meta",
            "realpath": "/home/user/projects/root/node_modules/meta",
            "resolved": "meta",
          },
        },
      },
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
        Edge {},
      },
      "edgesOut": Map {
        "asdf" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "newMeta",
      "location": "/meta",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "meta",
      "optional": true,
      "package": Object {
        "integrity": "newMeta",
        "name": "meta",
        "peerDependencies": Object {
          "asdf": "",
        },
        "peerDependenciesMeta": Object {
          "asdf": Object {
            "optional": true,
          },
        },
        "resolved": "newMeta",
        "version": "2.3.4",
      },
      "path": "./node_modules/meta",
      "realpath": "/home/user/projects/root/node_modules/meta",
      "resolved": "newMeta",
    },
  },
  "dev": true,
  "devOptional": true,
  "edgesIn": Set {},
  "edgesOut": Map {
    "optional" => Edge {},
    "overlap" => Edge {},
    "optMissing" => Edge {},
    "prod" => Edge {},
    "bundled" => Edge {},
    "missing" => Edge {},
    "dev" => Edge {},
  },
  "errors": Array [],
  "extraneous": true,
  "inBundle": false,
  "integrity": undefined,
  "location": "/",
  "meta": Object {
    "data": Object {
      "/": Object {
        "integrity": undefined,
        "resolved": undefined,
      },
      "/bundled": Object {
        "integrity": "bundled",
        "resolved": "bundled",
      },
      "/dev": Object {
        "integrity": "dev",
        "resolved": "dev",
      },
      "/extraneous": Object {
        "integrity": "extraneous",
        "resolved": "extraneous",
      },
      "/meta": Object {
        "integrity": "newMeta",
        "resolved": "newMeta",
      },
      "/meta/metameta": Object {
        "integrity": "metameta",
        "resolved": "metameta",
      },
      "/optional": Object {
        "integrity": "opt",
        "resolved": "opt",
      },
      "/peer": Object {
        "integrity": "peer",
        "resolved": "peer",
      },
      "/prod": Object {
        "integrity": "prod",
        "resolved": "prod",
      },
    },
    "dememo": Function dememo(node),
    "get": Function get(node),
    "memo": Function memo(node, data),
  },
  "name": "root",
  "optional": true,
  "package": Object {
    "bundleDependencies": Array [
      "bundled",
    ],
    "dependencies": Object {
      "bundled": "",
      "missing": "",
      "prod": "",
    },
    "devDependencies": Object {
      "dev": "",
      "overlap": "",
    },
    "name": "root",
    "optionalDependencies": Object {
      "optional": "",
      "optMissing": "",
      "overlap": "",
    },
  },
  "path": ".",
  "realpath": "/home/user/projects/root",
  "resolved": undefined,
}
`

exports[`test/node.js TAP testing with dep tree with meta > move new meta to top level second time (no-op) 1`] = `
Node {
  "children": Map {
    "prod" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
        "peer" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "prod",
      "location": "/prod",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "prod",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "prod",
        "name": "prod",
        "peerDependencies": Object {
          "peer": "",
        },
        "resolved": "prod",
        "version": "1.2.3",
      },
      "path": "./node_modules/prod",
      "realpath": "/home/user/projects/root/node_modules/prod",
      "resolved": "prod",
    },
    "bundled" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": true,
      "integrity": "bundled",
      "location": "/bundled",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "bundled",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "bundled",
        "name": "bundled",
        "resolved": "bundled",
        "version": "1.2.3",
      },
      "path": "./node_modules/bundled",
      "realpath": "/home/user/projects/root/node_modules/bundled",
      "resolved": "bundled",
    },
    "dev" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "dev",
      "location": "/dev",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "dev",
      "optional": true,
      "package": Object {
        "integrity": "dev",
        "name": "dev",
        "resolved": "dev",
        "version": "1.2.3",
      },
      "path": "./node_modules/dev",
      "realpath": "/home/user/projects/root/node_modules/dev",
      "resolved": "dev",
    },
    "optional" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "opt",
      "location": "/optional",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "optional",
      "optional": true,
      "package": Object {
        "integrity": "opt",
        "name": "optional",
        "resolved": "opt",
        "version": "1.2.3",
      },
      "path": "./node_modules/optional",
      "realpath": "/home/user/projects/root/node_modules/optional",
      "resolved": "opt",
    },
    "peer" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "peer",
      "location": "/peer",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "peer",
      "optional": true,
      "package": Object {
        "integrity": "peer",
        "name": "peer",
        "resolved": "peer",
        "version": "1.2.3",
      },
      "path": "./node_modules/peer",
      "realpath": "/home/user/projects/root/node_modules/peer",
      "resolved": "peer",
    },
    "extraneous" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {},
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "extraneous",
      "location": "/extraneous",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "extraneous",
      "optional": true,
      "package": Object {
        "integrity": "extraneous",
        "name": "extraneous",
        "resolved": "extraneous",
        "version": "1.2.3",
      },
      "path": "./node_modules/extraneous",
      "realpath": "/home/user/projects/root/node_modules/extraneous",
      "resolved": "extraneous",
    },
    "meta" => Node {
      "children": Map {
        "metameta" => Link {
          "dev": true,
          "devOptional": true,
          "edgesIn": Set {},
          "edgesOut": Map {},
          "errors": Array [],
          "extraneous": true,
          "inBundle": false,
          "integrity": null,
          "location": "/meta/metameta",
          "meta": Object {
            "data": Object {
              "/": Object {
                "integrity": undefined,
                "resolved": undefined,
              },
              "/bundled": Object {
                "integrity": "bundled",
                "resolved": "bundled",
              },
              "/dev": Object {
                "integrity": "dev",
                "resolved": "dev",
              },
              "/extraneous": Object {
                "integrity": "extraneous",
                "resolved": "extraneous",
              },
              "/meta": Object {
                "integrity": "newMeta",
                "resolved": "newMeta",
              },
              "/meta/metameta": Object {
                "integrity": "metameta",
                "resolved": "metameta",
              },
              "/optional": Object {
                "integrity": "opt",
                "resolved": "opt",
              },
              "/peer": Object {
                "integrity": "peer",
                "resolved": "peer",
              },
              "/prod": Object {
                "integrity": "prod",
                "resolved": "prod",
              },
            },
            "dememo": Function dememo(node),
            "get": Function get(node),
            "memo": Function memo(node, data),
          },
          "name": "metameta",
          "optional": true,
          "package": Object {
            "integrity": "metameta",
            "name": "metameta",
            "resolved": "metameta",
            "version": "1.2.3",
          },
          "path": "./node_modules/meta/node_modules/metameta",
          "realpath": "/home/user/projects/root/node_modules/meta",
          "resolved": null,
          "target": Node {
            "children": Map {},
            "dev": true,
            "devOptional": true,
            "edgesIn": Set {},
            "edgesOut": Map {
              "bundled" => Edge {},
            },
            "errors": Array [],
            "extraneous": true,
            "inBundle": false,
            "integrity": "meta",
            "location": "/",
            "meta": null,
            "name": "meta",
            "optional": true,
            "package": Object {
              "dependencies": Object {
                "bundled": "",
              },
              "devDependencies": Object {
                "missing": "",
              },
              "integrity": "meta",
              "name": "meta",
              "resolved": "meta",
              "version": "1.2.3",
            },
            "path": "./node_modules/meta",
            "realpath": "/home/user/projects/root/node_modules/meta",
            "resolved": "meta",
          },
        },
      },
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
        Edge {},
      },
      "edgesOut": Map {
        "asdf" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": "newMeta",
      "location": "/meta",
      "meta": Object {
        "data": Object {
          "/": Object {
            "integrity": undefined,
            "resolved": undefined,
          },
          "/bundled": Object {
            "integrity": "bundled",
            "resolved": "bundled",
          },
          "/dev": Object {
            "integrity": "dev",
            "resolved": "dev",
          },
          "/extraneous": Object {
            "integrity": "extraneous",
            "resolved": "extraneous",
          },
          "/meta": Object {
            "integrity": "newMeta",
            "resolved": "newMeta",
          },
          "/meta/metameta": Object {
            "integrity": "metameta",
            "resolved": "metameta",
          },
          "/optional": Object {
            "integrity": "opt",
            "resolved": "opt",
          },
          "/peer": Object {
            "integrity": "peer",
            "resolved": "peer",
          },
          "/prod": Object {
            "integrity": "prod",
            "resolved": "prod",
          },
        },
        "dememo": Function dememo(node),
        "get": Function get(node),
        "memo": Function memo(node, data),
      },
      "name": "meta",
      "optional": true,
      "package": Object {
        "integrity": "newMeta",
        "name": "meta",
        "peerDependencies": Object {
          "asdf": "",
        },
        "peerDependenciesMeta": Object {
          "asdf": Object {
            "optional": true,
          },
        },
        "resolved": "newMeta",
        "version": "2.3.4",
      },
      "path": "./node_modules/meta",
      "realpath": "/home/user/projects/root/node_modules/meta",
      "resolved": "newMeta",
    },
  },
  "dev": true,
  "devOptional": true,
  "edgesIn": Set {},
  "edgesOut": Map {
    "optional" => Edge {},
    "overlap" => Edge {},
    "optMissing" => Edge {},
    "prod" => Edge {},
    "bundled" => Edge {},
    "missing" => Edge {},
    "dev" => Edge {},
  },
  "errors": Array [],
  "extraneous": true,
  "inBundle": false,
  "integrity": undefined,
  "location": "/",
  "meta": Object {
    "data": Object {
      "/": Object {
        "integrity": undefined,
        "resolved": undefined,
      },
      "/bundled": Object {
        "integrity": "bundled",
        "resolved": "bundled",
      },
      "/dev": Object {
        "integrity": "dev",
        "resolved": "dev",
      },
      "/extraneous": Object {
        "integrity": "extraneous",
        "resolved": "extraneous",
      },
      "/meta": Object {
        "integrity": "newMeta",
        "resolved": "newMeta",
      },
      "/meta/metameta": Object {
        "integrity": "metameta",
        "resolved": "metameta",
      },
      "/optional": Object {
        "integrity": "opt",
        "resolved": "opt",
      },
      "/peer": Object {
        "integrity": "peer",
        "resolved": "peer",
      },
      "/prod": Object {
        "integrity": "prod",
        "resolved": "prod",
      },
    },
    "dememo": Function dememo(node),
    "get": Function get(node),
    "memo": Function memo(node, data),
  },
  "name": "root",
  "optional": true,
  "package": Object {
    "bundleDependencies": Array [
      "bundled",
    ],
    "dependencies": Object {
      "bundled": "",
      "missing": "",
      "prod": "",
    },
    "devDependencies": Object {
      "dev": "",
      "overlap": "",
    },
    "name": "root",
    "optionalDependencies": Object {
      "optional": "",
      "optMissing": "",
      "overlap": "",
    },
  },
  "path": ".",
  "realpath": "/home/user/projects/root",
  "resolved": undefined,
}
`

exports[`test/node.js TAP testing with dep tree without meta > add new meta under prod 1`] = `
Node {
  "children": Map {
    "prod" => Node {
      "children": Map {
        "meta" => Node {
          "children": Map {
            "metameta" => Link {
              "dev": true,
              "devOptional": true,
              "edgesIn": Set {},
              "edgesOut": Map {},
              "errors": Array [],
              "extraneous": true,
              "inBundle": false,
              "integrity": null,
              "location": "/prod/meta/metameta",
              "meta": undefined,
              "name": "metameta",
              "optional": true,
              "package": Object {
                "integrity": "metameta",
                "name": "metameta",
                "resolved": "metameta",
                "version": "1.2.3",
              },
              "path": "./node_modules/prod/node_modules/meta/node_modules/metameta",
              "realpath": "/home/user/projects/root/node_modules/meta",
              "resolved": null,
              "target": Node {
                "children": Map {},
                "dev": true,
                "devOptional": true,
                "edgesIn": Set {
                  Edge {},
                },
                "edgesOut": Map {
                  "bundled" => Edge {},
                },
                "errors": Array [],
                "extraneous": true,
                "inBundle": false,
                "integrity": null,
                "location": "/meta",
                "meta": undefined,
                "name": "meta",
                "optional": true,
                "package": Object {
                  "dependencies": Object {
                    "bundled": "",
                  },
                  "devDependencies": Object {
                    "missing": "",
                  },
                  "integrity": "meta",
                  "name": "meta",
                  "resolved": "meta",
                  "version": "1.2.3",
                },
                "path": "./node_modules/meta",
                "realpath": "/home/user/projects/root/node_modules/meta",
                "resolved": null,
              },
            },
          },
          "dev": true,
          "devOptional": true,
          "edgesIn": Set {
            Edge {},
          },
          "edgesOut": Map {
            "asdf" => Edge {},
          },
          "errors": Array [],
          "extraneous": true,
          "inBundle": false,
          "integrity": null,
          "location": "/prod/meta",
          "meta": undefined,
          "name": "meta",
          "optional": true,
          "package": Object {
            "integrity": "newMeta",
            "name": "meta",
            "peerDependencies": Object {
              "asdf": "",
            },
            "peerDependenciesMeta": Object {
              "asdf": Object {
                "optional": true,
              },
            },
            "resolved": "newMeta",
            "version": "2.3.4",
          },
          "path": "./node_modules/prod/node_modules/meta",
          "realpath": "/home/user/projects/root/node_modules/prod/node_modules/meta",
          "resolved": null,
        },
      },
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
        "peer" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/prod",
      "meta": undefined,
      "name": "prod",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "prod",
        "name": "prod",
        "peerDependencies": Object {
          "peer": "",
        },
        "resolved": "prod",
        "version": "1.2.3",
      },
      "path": "./node_modules/prod",
      "realpath": "/home/user/projects/root/node_modules/prod",
      "resolved": null,
    },
    "bundled" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": true,
      "integrity": null,
      "location": "/bundled",
      "meta": undefined,
      "name": "bundled",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "bundled",
        "name": "bundled",
        "resolved": "bundled",
        "version": "1.2.3",
      },
      "path": "./node_modules/bundled",
      "realpath": "/home/user/projects/root/node_modules/bundled",
      "resolved": null,
    },
    "dev" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/dev",
      "meta": undefined,
      "name": "dev",
      "optional": true,
      "package": Object {
        "integrity": "dev",
        "name": "dev",
        "resolved": "dev",
        "version": "1.2.3",
      },
      "path": "./node_modules/dev",
      "realpath": "/home/user/projects/root/node_modules/dev",
      "resolved": null,
    },
    "optional" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/optional",
      "meta": undefined,
      "name": "optional",
      "optional": true,
      "package": Object {
        "integrity": "opt",
        "name": "optional",
        "resolved": "opt",
        "version": "1.2.3",
      },
      "path": "./node_modules/optional",
      "realpath": "/home/user/projects/root/node_modules/optional",
      "resolved": null,
    },
    "peer" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/peer",
      "meta": undefined,
      "name": "peer",
      "optional": true,
      "package": Object {
        "integrity": "peer",
        "name": "peer",
        "resolved": "peer",
        "version": "1.2.3",
      },
      "path": "./node_modules/peer",
      "realpath": "/home/user/projects/root/node_modules/peer",
      "resolved": null,
    },
    "extraneous" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {},
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/extraneous",
      "meta": undefined,
      "name": "extraneous",
      "optional": true,
      "package": Object {
        "integrity": "extraneous",
        "name": "extraneous",
        "resolved": "extraneous",
        "version": "1.2.3",
      },
      "path": "./node_modules/extraneous",
      "realpath": "/home/user/projects/root/node_modules/extraneous",
      "resolved": null,
    },
    "meta" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "bundled" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/meta",
      "meta": undefined,
      "name": "meta",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "bundled": "",
        },
        "devDependencies": Object {
          "missing": "",
        },
        "integrity": "meta",
        "name": "meta",
        "resolved": "meta",
        "version": "1.2.3",
      },
      "path": "./node_modules/meta",
      "realpath": "/home/user/projects/root/node_modules/meta",
      "resolved": null,
    },
  },
  "dev": true,
  "devOptional": true,
  "edgesIn": Set {},
  "edgesOut": Map {
    "optional" => Edge {},
    "overlap" => Edge {},
    "optMissing" => Edge {},
    "prod" => Edge {},
    "bundled" => Edge {},
    "missing" => Edge {},
    "dev" => Edge {},
  },
  "errors": Array [],
  "extraneous": true,
  "inBundle": false,
  "integrity": null,
  "location": "/",
  "meta": undefined,
  "name": "root",
  "optional": true,
  "package": Object {
    "bundleDependencies": Array [
      "bundled",
    ],
    "dependencies": Object {
      "bundled": "",
      "missing": "",
      "prod": "",
    },
    "devDependencies": Object {
      "dev": "",
      "overlap": "",
    },
    "name": "root",
    "optionalDependencies": Object {
      "optional": "",
      "optMissing": "",
      "overlap": "",
    },
  },
  "path": ".",
  "realpath": "/home/user/projects/root",
  "resolved": null,
}
`

exports[`test/node.js TAP testing with dep tree without meta > initial load with some deps 1`] = `
Node {
  "children": Map {
    "prod" => Node {
      "children": Map {
        "meta" => Node {
          "children": Map {},
          "dev": true,
          "devOptional": true,
          "edgesIn": Set {
            Edge {},
          },
          "edgesOut": Map {
            "bundled" => Edge {},
          },
          "errors": Array [],
          "extraneous": true,
          "inBundle": false,
          "integrity": null,
          "location": "/prod/meta",
          "meta": undefined,
          "name": "meta",
          "optional": true,
          "package": Object {
            "dependencies": Object {
              "bundled": "",
            },
            "devDependencies": Object {
              "missing": "",
            },
            "integrity": "meta",
            "name": "meta",
            "resolved": "meta",
            "version": "1.2.3",
          },
          "path": "./node_modules/prod/node_modules/meta",
          "realpath": "/home/user/projects/root/node_modules/prod/node_modules/meta",
          "resolved": null,
        },
      },
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
        "peer" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/prod",
      "meta": undefined,
      "name": "prod",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "prod",
        "name": "prod",
        "peerDependencies": Object {
          "peer": "",
        },
        "resolved": "prod",
        "version": "1.2.3",
      },
      "path": "./node_modules/prod",
      "realpath": "/home/user/projects/root/node_modules/prod",
      "resolved": null,
    },
    "bundled" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": true,
      "integrity": null,
      "location": "/bundled",
      "meta": undefined,
      "name": "bundled",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "bundled",
        "name": "bundled",
        "resolved": "bundled",
        "version": "1.2.3",
      },
      "path": "./node_modules/bundled",
      "realpath": "/home/user/projects/root/node_modules/bundled",
      "resolved": null,
    },
    "dev" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/dev",
      "meta": undefined,
      "name": "dev",
      "optional": true,
      "package": Object {
        "integrity": "dev",
        "name": "dev",
        "resolved": "dev",
        "version": "1.2.3",
      },
      "path": "./node_modules/dev",
      "realpath": "/home/user/projects/root/node_modules/dev",
      "resolved": null,
    },
    "optional" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/optional",
      "meta": undefined,
      "name": "optional",
      "optional": true,
      "package": Object {
        "integrity": "opt",
        "name": "optional",
        "resolved": "opt",
        "version": "1.2.3",
      },
      "path": "./node_modules/optional",
      "realpath": "/home/user/projects/root/node_modules/optional",
      "resolved": null,
    },
    "peer" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/peer",
      "meta": undefined,
      "name": "peer",
      "optional": true,
      "package": Object {
        "integrity": "peer",
        "name": "peer",
        "resolved": "peer",
        "version": "1.2.3",
      },
      "path": "./node_modules/peer",
      "realpath": "/home/user/projects/root/node_modules/peer",
      "resolved": null,
    },
    "extraneous" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {},
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/extraneous",
      "meta": undefined,
      "name": "extraneous",
      "optional": true,
      "package": Object {
        "integrity": "extraneous",
        "name": "extraneous",
        "resolved": "extraneous",
        "version": "1.2.3",
      },
      "path": "./node_modules/extraneous",
      "realpath": "/home/user/projects/root/node_modules/extraneous",
      "resolved": null,
    },
  },
  "dev": true,
  "devOptional": true,
  "edgesIn": Set {},
  "edgesOut": Map {
    "optional" => Edge {},
    "overlap" => Edge {},
    "optMissing" => Edge {},
    "prod" => Edge {},
    "bundled" => Edge {},
    "missing" => Edge {},
    "dev" => Edge {},
  },
  "errors": Array [],
  "extraneous": true,
  "inBundle": false,
  "integrity": null,
  "location": "/",
  "meta": undefined,
  "name": "root",
  "optional": true,
  "package": Object {
    "bundleDependencies": Array [
      "bundled",
    ],
    "dependencies": Object {
      "bundled": "",
      "missing": "",
      "prod": "",
    },
    "devDependencies": Object {
      "dev": "",
      "overlap": "",
    },
    "name": "root",
    "optionalDependencies": Object {
      "optional": "",
      "optMissing": "",
      "overlap": "",
    },
  },
  "path": ".",
  "realpath": "/home/user/projects/root",
  "resolved": null,
}
`

exports[`test/node.js TAP testing with dep tree without meta > move meta to top level, update stuff 1`] = `
Node {
  "children": Map {
    "prod" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
        "peer" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/prod",
      "meta": undefined,
      "name": "prod",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "prod",
        "name": "prod",
        "peerDependencies": Object {
          "peer": "",
        },
        "resolved": "prod",
        "version": "1.2.3",
      },
      "path": "./node_modules/prod",
      "realpath": "/home/user/projects/root/node_modules/prod",
      "resolved": null,
    },
    "bundled" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": true,
      "integrity": null,
      "location": "/bundled",
      "meta": undefined,
      "name": "bundled",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "bundled",
        "name": "bundled",
        "resolved": "bundled",
        "version": "1.2.3",
      },
      "path": "./node_modules/bundled",
      "realpath": "/home/user/projects/root/node_modules/bundled",
      "resolved": null,
    },
    "dev" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/dev",
      "meta": undefined,
      "name": "dev",
      "optional": true,
      "package": Object {
        "integrity": "dev",
        "name": "dev",
        "resolved": "dev",
        "version": "1.2.3",
      },
      "path": "./node_modules/dev",
      "realpath": "/home/user/projects/root/node_modules/dev",
      "resolved": null,
    },
    "optional" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/optional",
      "meta": undefined,
      "name": "optional",
      "optional": true,
      "package": Object {
        "integrity": "opt",
        "name": "optional",
        "resolved": "opt",
        "version": "1.2.3",
      },
      "path": "./node_modules/optional",
      "realpath": "/home/user/projects/root/node_modules/optional",
      "resolved": null,
    },
    "peer" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/peer",
      "meta": undefined,
      "name": "peer",
      "optional": true,
      "package": Object {
        "integrity": "peer",
        "name": "peer",
        "resolved": "peer",
        "version": "1.2.3",
      },
      "path": "./node_modules/peer",
      "realpath": "/home/user/projects/root/node_modules/peer",
      "resolved": null,
    },
    "extraneous" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {},
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/extraneous",
      "meta": undefined,
      "name": "extraneous",
      "optional": true,
      "package": Object {
        "integrity": "extraneous",
        "name": "extraneous",
        "resolved": "extraneous",
        "version": "1.2.3",
      },
      "path": "./node_modules/extraneous",
      "realpath": "/home/user/projects/root/node_modules/extraneous",
      "resolved": null,
    },
    "meta" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
        Edge {},
      },
      "edgesOut": Map {
        "bundled" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/meta",
      "meta": undefined,
      "name": "meta",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "bundled": "",
        },
        "devDependencies": Object {
          "missing": "",
        },
        "integrity": "meta",
        "name": "meta",
        "resolved": "meta",
        "version": "1.2.3",
      },
      "path": "./node_modules/meta",
      "realpath": "/home/user/projects/root/node_modules/meta",
      "resolved": null,
    },
  },
  "dev": true,
  "devOptional": true,
  "edgesIn": Set {},
  "edgesOut": Map {
    "optional" => Edge {},
    "overlap" => Edge {},
    "optMissing" => Edge {},
    "prod" => Edge {},
    "bundled" => Edge {},
    "missing" => Edge {},
    "dev" => Edge {},
  },
  "errors": Array [],
  "extraneous": true,
  "inBundle": false,
  "integrity": null,
  "location": "/",
  "meta": undefined,
  "name": "root",
  "optional": true,
  "package": Object {
    "bundleDependencies": Array [
      "bundled",
    ],
    "dependencies": Object {
      "bundled": "",
      "missing": "",
      "prod": "",
    },
    "devDependencies": Object {
      "dev": "",
      "overlap": "",
    },
    "name": "root",
    "optionalDependencies": Object {
      "optional": "",
      "optMissing": "",
      "overlap": "",
    },
  },
  "path": ".",
  "realpath": "/home/user/projects/root",
  "resolved": null,
}
`

exports[`test/node.js TAP testing with dep tree without meta > move new meta to top level 1`] = `
Node {
  "children": Map {
    "prod" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
        "peer" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/prod",
      "meta": undefined,
      "name": "prod",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "prod",
        "name": "prod",
        "peerDependencies": Object {
          "peer": "",
        },
        "resolved": "prod",
        "version": "1.2.3",
      },
      "path": "./node_modules/prod",
      "realpath": "/home/user/projects/root/node_modules/prod",
      "resolved": null,
    },
    "bundled" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": true,
      "integrity": null,
      "location": "/bundled",
      "meta": undefined,
      "name": "bundled",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "bundled",
        "name": "bundled",
        "resolved": "bundled",
        "version": "1.2.3",
      },
      "path": "./node_modules/bundled",
      "realpath": "/home/user/projects/root/node_modules/bundled",
      "resolved": null,
    },
    "dev" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/dev",
      "meta": undefined,
      "name": "dev",
      "optional": true,
      "package": Object {
        "integrity": "dev",
        "name": "dev",
        "resolved": "dev",
        "version": "1.2.3",
      },
      "path": "./node_modules/dev",
      "realpath": "/home/user/projects/root/node_modules/dev",
      "resolved": null,
    },
    "optional" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/optional",
      "meta": undefined,
      "name": "optional",
      "optional": true,
      "package": Object {
        "integrity": "opt",
        "name": "optional",
        "resolved": "opt",
        "version": "1.2.3",
      },
      "path": "./node_modules/optional",
      "realpath": "/home/user/projects/root/node_modules/optional",
      "resolved": null,
    },
    "peer" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/peer",
      "meta": undefined,
      "name": "peer",
      "optional": true,
      "package": Object {
        "integrity": "peer",
        "name": "peer",
        "resolved": "peer",
        "version": "1.2.3",
      },
      "path": "./node_modules/peer",
      "realpath": "/home/user/projects/root/node_modules/peer",
      "resolved": null,
    },
    "extraneous" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {},
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/extraneous",
      "meta": undefined,
      "name": "extraneous",
      "optional": true,
      "package": Object {
        "integrity": "extraneous",
        "name": "extraneous",
        "resolved": "extraneous",
        "version": "1.2.3",
      },
      "path": "./node_modules/extraneous",
      "realpath": "/home/user/projects/root/node_modules/extraneous",
      "resolved": null,
    },
    "meta" => Node {
      "children": Map {
        "metameta" => Link {
          "dev": true,
          "devOptional": true,
          "edgesIn": Set {},
          "edgesOut": Map {},
          "errors": Array [],
          "extraneous": true,
          "inBundle": false,
          "integrity": null,
          "location": "/meta/metameta",
          "meta": undefined,
          "name": "metameta",
          "optional": true,
          "package": Object {
            "integrity": "metameta",
            "name": "metameta",
            "resolved": "metameta",
            "version": "1.2.3",
          },
          "path": "./node_modules/meta/node_modules/metameta",
          "realpath": "/home/user/projects/root/node_modules/meta",
          "resolved": null,
          "target": Node {
            "children": Map {},
            "dev": true,
            "devOptional": true,
            "edgesIn": Set {},
            "edgesOut": Map {
              "bundled" => Edge {},
            },
            "errors": Array [],
            "extraneous": true,
            "inBundle": false,
            "integrity": null,
            "location": "/",
            "meta": undefined,
            "name": "meta",
            "optional": true,
            "package": Object {
              "dependencies": Object {
                "bundled": "",
              },
              "devDependencies": Object {
                "missing": "",
              },
              "integrity": "meta",
              "name": "meta",
              "resolved": "meta",
              "version": "1.2.3",
            },
            "path": "./node_modules/meta",
            "realpath": "/home/user/projects/root/node_modules/meta",
            "resolved": null,
          },
        },
      },
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
        Edge {},
      },
      "edgesOut": Map {
        "asdf" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/meta",
      "meta": undefined,
      "name": "meta",
      "optional": true,
      "package": Object {
        "integrity": "newMeta",
        "name": "meta",
        "peerDependencies": Object {
          "asdf": "",
        },
        "peerDependenciesMeta": Object {
          "asdf": Object {
            "optional": true,
          },
        },
        "resolved": "newMeta",
        "version": "2.3.4",
      },
      "path": "./node_modules/meta",
      "realpath": "/home/user/projects/root/node_modules/meta",
      "resolved": null,
    },
  },
  "dev": true,
  "devOptional": true,
  "edgesIn": Set {},
  "edgesOut": Map {
    "optional" => Edge {},
    "overlap" => Edge {},
    "optMissing" => Edge {},
    "prod" => Edge {},
    "bundled" => Edge {},
    "missing" => Edge {},
    "dev" => Edge {},
  },
  "errors": Array [],
  "extraneous": true,
  "inBundle": false,
  "integrity": null,
  "location": "/",
  "meta": undefined,
  "name": "root",
  "optional": true,
  "package": Object {
    "bundleDependencies": Array [
      "bundled",
    ],
    "dependencies": Object {
      "bundled": "",
      "missing": "",
      "prod": "",
    },
    "devDependencies": Object {
      "dev": "",
      "overlap": "",
    },
    "name": "root",
    "optionalDependencies": Object {
      "optional": "",
      "optMissing": "",
      "overlap": "",
    },
  },
  "path": ".",
  "realpath": "/home/user/projects/root",
  "resolved": null,
}
`

exports[`test/node.js TAP testing with dep tree without meta > move new meta to top level second time (no-op) 1`] = `
Node {
  "children": Map {
    "prod" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
        "peer" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/prod",
      "meta": undefined,
      "name": "prod",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "prod",
        "name": "prod",
        "peerDependencies": Object {
          "peer": "",
        },
        "resolved": "prod",
        "version": "1.2.3",
      },
      "path": "./node_modules/prod",
      "realpath": "/home/user/projects/root/node_modules/prod",
      "resolved": null,
    },
    "bundled" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {
        "meta" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": true,
      "integrity": null,
      "location": "/bundled",
      "meta": undefined,
      "name": "bundled",
      "optional": true,
      "package": Object {
        "dependencies": Object {
          "meta": "",
        },
        "integrity": "bundled",
        "name": "bundled",
        "resolved": "bundled",
        "version": "1.2.3",
      },
      "path": "./node_modules/bundled",
      "realpath": "/home/user/projects/root/node_modules/bundled",
      "resolved": null,
    },
    "dev" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/dev",
      "meta": undefined,
      "name": "dev",
      "optional": true,
      "package": Object {
        "integrity": "dev",
        "name": "dev",
        "resolved": "dev",
        "version": "1.2.3",
      },
      "path": "./node_modules/dev",
      "realpath": "/home/user/projects/root/node_modules/dev",
      "resolved": null,
    },
    "optional" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/optional",
      "meta": undefined,
      "name": "optional",
      "optional": true,
      "package": Object {
        "integrity": "opt",
        "name": "optional",
        "resolved": "opt",
        "version": "1.2.3",
      },
      "path": "./node_modules/optional",
      "realpath": "/home/user/projects/root/node_modules/optional",
      "resolved": null,
    },
    "peer" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/peer",
      "meta": undefined,
      "name": "peer",
      "optional": true,
      "package": Object {
        "integrity": "peer",
        "name": "peer",
        "resolved": "peer",
        "version": "1.2.3",
      },
      "path": "./node_modules/peer",
      "realpath": "/home/user/projects/root/node_modules/peer",
      "resolved": null,
    },
    "extraneous" => Node {
      "children": Map {},
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {},
      "edgesOut": Map {},
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/extraneous",
      "meta": undefined,
      "name": "extraneous",
      "optional": true,
      "package": Object {
        "integrity": "extraneous",
        "name": "extraneous",
        "resolved": "extraneous",
        "version": "1.2.3",
      },
      "path": "./node_modules/extraneous",
      "realpath": "/home/user/projects/root/node_modules/extraneous",
      "resolved": null,
    },
    "meta" => Node {
      "children": Map {
        "metameta" => Link {
          "dev": true,
          "devOptional": true,
          "edgesIn": Set {},
          "edgesOut": Map {},
          "errors": Array [],
          "extraneous": true,
          "inBundle": false,
          "integrity": null,
          "location": "/meta/metameta",
          "meta": undefined,
          "name": "metameta",
          "optional": true,
          "package": Object {
            "integrity": "metameta",
            "name": "metameta",
            "resolved": "metameta",
            "version": "1.2.3",
          },
          "path": "./node_modules/meta/node_modules/metameta",
          "realpath": "/home/user/projects/root/node_modules/meta",
          "resolved": null,
          "target": Node {
            "children": Map {},
            "dev": true,
            "devOptional": true,
            "edgesIn": Set {},
            "edgesOut": Map {
              "bundled" => Edge {},
            },
            "errors": Array [],
            "extraneous": true,
            "inBundle": false,
            "integrity": null,
            "location": "/",
            "meta": undefined,
            "name": "meta",
            "optional": true,
            "package": Object {
              "dependencies": Object {
                "bundled": "",
              },
              "devDependencies": Object {
                "missing": "",
              },
              "integrity": "meta",
              "name": "meta",
              "resolved": "meta",
              "version": "1.2.3",
            },
            "path": "./node_modules/meta",
            "realpath": "/home/user/projects/root/node_modules/meta",
            "resolved": null,
          },
        },
      },
      "dev": true,
      "devOptional": true,
      "edgesIn": Set {
        Edge {},
        Edge {},
      },
      "edgesOut": Map {
        "asdf" => Edge {},
      },
      "errors": Array [],
      "extraneous": true,
      "inBundle": false,
      "integrity": null,
      "location": "/meta",
      "meta": undefined,
      "name": "meta",
      "optional": true,
      "package": Object {
        "integrity": "newMeta",
        "name": "meta",
        "peerDependencies": Object {
          "asdf": "",
        },
        "peerDependenciesMeta": Object {
          "asdf": Object {
            "optional": true,
          },
        },
        "resolved": "newMeta",
        "version": "2.3.4",
      },
      "path": "./node_modules/meta",
      "realpath": "/home/user/projects/root/node_modules/meta",
      "resolved": null,
    },
  },
  "dev": true,
  "devOptional": true,
  "edgesIn": Set {},
  "edgesOut": Map {
    "optional" => Edge {},
    "overlap" => Edge {},
    "optMissing" => Edge {},
    "prod" => Edge {},
    "bundled" => Edge {},
    "missing" => Edge {},
    "dev" => Edge {},
  },
  "errors": Array [],
  "extraneous": true,
  "inBundle": false,
  "integrity": null,
  "location": "/",
  "meta": undefined,
  "name": "root",
  "optional": true,
  "package": Object {
    "bundleDependencies": Array [
      "bundled",
    ],
    "dependencies": Object {
      "bundled": "",
      "missing": "",
      "prod": "",
    },
    "devDependencies": Object {
      "dev": "",
      "overlap": "",
    },
    "name": "root",
    "optionalDependencies": Object {
      "optional": "",
      "optMissing": "",
      "overlap": "",
    },
  },
  "path": ".",
  "realpath": "/home/user/projects/root",
  "resolved": null,
}
`

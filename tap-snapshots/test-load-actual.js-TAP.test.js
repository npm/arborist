/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/load-actual.js TAP bundle > loaded tree 1`] = `
Node {
  "name": "bundle",
  "location": "/",
  "realpath": "bundle",
  "top": "bundle",
  "edgesOut": Map {
    "dep" => Edge {
      "name": "dep",
      "type": "prod",
      "spec": "",
      "to": "bundle : dep",
    },
  },
  "children": Map {
    "dep" => Node {
      "name": "dep",
      "location": "/dep",
      "realpath": "bundle : dep",
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

exports[`test/load-actual.js TAP cwd is default root > loaded tree 1`] = `
Node {
  "name": "root",
  "location": "/",
  "realpath": "root",
  "top": "root",
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "root : @scope/x",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "root : @scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "root : foo",
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
      "location": "/@scope/x",
      "realpath": "root : @scope/x",
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
          "from": "root : @scope/x",
        },
        Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "root : foo",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "root : @scope/x",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "root : @scope/y",
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
          "to": "root : @scope/x : glob",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "/@scope/x/glob",
          "realpath": "root : @scope/x : glob",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "root : @scope/x",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : graceful-fs",
            },
            "inherits" => Edge {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : inherits",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : minimatch",
            },
            "once" => Edge {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : once",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "/@scope/x/glob/graceful-fs",
              "realpath": "root : @scope/x : glob : graceful-fs",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
              },
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "/@scope/x/glob/inherits",
              "realpath": "root : @scope/x : glob : inherits",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
              },
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "/@scope/x/glob/minimatch",
              "realpath": "root : @scope/x : glob : minimatch",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "root : @scope/x : glob : minimatch : lru-cache",
                },
                "once" => Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "root : @scope/x : glob : once",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "root : @scope/x : glob : minimatch : sigmund",
                },
              },
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "/@scope/x/glob/minimatch/lru-cache",
                  "realpath": "root : @scope/x : glob : minimatch : lru-cache",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "root : @scope/x : glob : minimatch",
                    },
                  },
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "/@scope/x/glob/minimatch/sigmund",
                  "realpath": "root : @scope/x : glob : minimatch : sigmund",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "root : @scope/x : glob : minimatch",
                    },
                  },
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "/@scope/x/glob/once",
              "realpath": "root : @scope/x : glob : once",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob : minimatch",
                },
              },
            },
          },
        },
      },
    },
    "@scope/y" => Node {
      "name": "@scope/y",
      "location": "/@scope/y",
      "realpath": "root : @scope/y",
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
          "from": "root : @scope/x",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "root : foo",
          "error": "INVALID",
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "realpath": "root : foo",
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
          "from": "root : @scope/y",
          "error": "INVALID",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "root : @scope/x",
        },
        "express" => Edge {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "root : foo : express",
        },
      },
      "children": Map {
        "express" => Node {
          "name": "express",
          "location": "/foo/express",
          "realpath": "root : foo : express",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "root : foo",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP deepmixedloop > loaded tree 1`] = `
Node {
  "name": "deepmixedloop",
  "location": "/",
  "realpath": "deepmixedloop",
  "top": "deepmixedloop",
  "edgesOut": Map {
    "i" => Edge {
      "name": "i",
      "type": "dev",
      "spec": "",
      "to": "deepmixedloop : i",
    },
    "x" => Edge {
      "name": "x",
      "type": "prod",
      "spec": "",
      "to": "deepmixedloop : x",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "/a",
      "realpath": "deepmixedloop : a",
      "top": "deepmixedloop",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "optional",
          "spec": "",
          "from": "deepmixedloop : z",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "deepmixedloop : b",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "/b",
      "realpath": "deepmixedloop : b",
      "top": "deepmixedloop",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop : a",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "deepmixedloop : c",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "/c",
      "realpath": "deepmixedloop : c",
      "top": "deepmixedloop",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop : b",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "deepmixedloop : d",
        },
      },
    },
    "d" => Node {
      "name": "d",
      "location": "/d",
      "realpath": "deepmixedloop : d",
      "top": "deepmixedloop",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop : c",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "deepmixedloop : e",
        },
      },
    },
    "e" => Node {
      "name": "e",
      "location": "/e",
      "realpath": "deepmixedloop : e",
      "top": "deepmixedloop",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop : d",
        },
      },
    },
    "i" => Node {
      "name": "i",
      "location": "/i",
      "realpath": "deepmixedloop : i",
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
          "to": "deepmixedloop : j",
        },
      },
    },
    "j" => Node {
      "name": "j",
      "location": "/j",
      "realpath": "deepmixedloop : j",
      "top": "deepmixedloop",
      "dev": true,
      "edgesIn": Set {
        Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop : i",
        },
      },
      "edgesOut": Map {
        "k" => Edge {
          "name": "k",
          "type": "prod",
          "spec": "",
          "to": "deepmixedloop : k",
        },
      },
    },
    "k" => Node {
      "name": "k",
      "location": "/k",
      "realpath": "deepmixedloop : k",
      "top": "deepmixedloop",
      "dev": true,
      "edgesIn": Set {
        Edge {
          "name": "k",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop : j",
        },
      },
    },
    "x" => Node {
      "name": "x",
      "location": "/x",
      "realpath": "deepmixedloop : x",
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
          "to": "deepmixedloop : y",
        },
      },
    },
    "y" => Node {
      "name": "y",
      "location": "/y",
      "realpath": "deepmixedloop : y",
      "top": "deepmixedloop",
      "edgesIn": Set {
        Edge {
          "name": "y",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop : x",
        },
      },
      "edgesOut": Map {
        "z" => Edge {
          "name": "z",
          "type": "prod",
          "spec": "",
          "to": "deepmixedloop : z",
        },
      },
    },
    "z" => Node {
      "name": "z",
      "location": "/z",
      "realpath": "deepmixedloop : z",
      "top": "deepmixedloop",
      "edgesIn": Set {
        Edge {
          "name": "z",
          "type": "prod",
          "spec": "",
          "from": "deepmixedloop : y",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "type": "optional",
          "spec": "",
          "to": "deepmixedloop : a",
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP deeproot/root > loaded tree 1`] = `
Node {
  "name": "root",
  "location": "/",
  "realpath": "root",
  "top": "root",
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "root : @scope/x",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "root : @scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "root : foo",
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
      "location": "/@scope/x",
      "realpath": "root : @scope/x",
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
          "from": "root : @scope/x",
        },
        Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "root : foo",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "root : @scope/x",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "root : @scope/y",
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
          "to": "root : @scope/x : glob",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "/@scope/x/glob",
          "realpath": "root : @scope/x : glob",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "root : @scope/x",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : graceful-fs",
            },
            "inherits" => Edge {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : inherits",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : minimatch",
            },
            "once" => Edge {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : once",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "/@scope/x/glob/graceful-fs",
              "realpath": "root : @scope/x : glob : graceful-fs",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
              },
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "/@scope/x/glob/inherits",
              "realpath": "root : @scope/x : glob : inherits",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
              },
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "/@scope/x/glob/minimatch",
              "realpath": "root : @scope/x : glob : minimatch",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "root : @scope/x : glob : minimatch : lru-cache",
                },
                "once" => Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "root : @scope/x : glob : once",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "root : @scope/x : glob : minimatch : sigmund",
                },
              },
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "/@scope/x/glob/minimatch/lru-cache",
                  "realpath": "root : @scope/x : glob : minimatch : lru-cache",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "root : @scope/x : glob : minimatch",
                    },
                  },
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "/@scope/x/glob/minimatch/sigmund",
                  "realpath": "root : @scope/x : glob : minimatch : sigmund",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "root : @scope/x : glob : minimatch",
                    },
                  },
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "/@scope/x/glob/once",
              "realpath": "root : @scope/x : glob : once",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob : minimatch",
                },
              },
            },
          },
        },
      },
    },
    "@scope/y" => Node {
      "name": "@scope/y",
      "location": "/@scope/y",
      "realpath": "root : @scope/y",
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
          "from": "root : @scope/x",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "root : foo",
          "error": "INVALID",
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "realpath": "root : foo",
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
          "from": "root : @scope/y",
          "error": "INVALID",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "root : @scope/x",
        },
        "express" => Edge {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "root : foo : express",
        },
      },
      "children": Map {
        "express" => Node {
          "name": "express",
          "location": "/foo/express",
          "realpath": "root : foo : express",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "root : foo",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP devloop > loaded tree 1`] = `
Node {
  "name": "devloop",
  "location": "/",
  "realpath": "devloop",
  "top": "devloop",
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "dev",
      "spec": "",
      "to": "devloop : a",
    },
    "c" => Edge {
      "name": "c",
      "type": "prod",
      "spec": "",
      "to": "devloop : c",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "/a",
      "realpath": "devloop : a",
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
          "to": "devloop : b",
        },
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "devloop : d",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "/b",
      "realpath": "devloop : b",
      "top": "devloop",
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "devloop : a",
        },
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "devloop : d",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "/c",
      "realpath": "devloop : c",
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
          "to": "devloop : d",
        },
      },
    },
    "d" => Node {
      "name": "d",
      "location": "/d",
      "realpath": "devloop : d",
      "top": "devloop",
      "edgesIn": Set {
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "devloop : a",
        },
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "devloop : c",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "devloop : b",
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP install-types > loaded tree 1`] = `
Node {
  "name": "install-types",
  "location": "/",
  "realpath": "install-types",
  "top": "install-types",
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "type": "prod",
      "spec": "^1.1.1",
      "to": "install-types : abbrev",
    },
    "bundler" => Edge {
      "name": "bundler",
      "type": "prod",
      "spec": "1.2.3",
      "to": "install-types : bundler",
    },
    "full-git-url" => Edge {
      "name": "full-git-url",
      "type": "prod",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "install-types : full-git-url",
      "error": "INVALID",
    },
    "ghshort" => Edge {
      "name": "ghshort",
      "type": "prod",
      "spec": "github:isaacs/abbrev-js",
      "to": "install-types : ghshort",
      "error": "INVALID",
    },
    "old" => Edge {
      "name": "old",
      "type": "prod",
      "spec": "npm:abbrev@^1.0.3",
      "to": "install-types : old",
    },
    "pinned" => Edge {
      "name": "pinned",
      "type": "prod",
      "spec": "npm:abbrev@^1.1.1",
      "to": "install-types : pinned",
    },
    "reg" => Edge {
      "name": "reg",
      "type": "prod",
      "spec": "npm:abbrev@^1.1.1",
      "to": "install-types : reg",
    },
    "remote" => Edge {
      "name": "remote",
      "type": "prod",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "install-types : remote",
      "error": "INVALID",
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
      "to": "install-types : tarball",
      "error": "INVALID",
    },
  },
  "children": Map {
    "abbrev" => Node {
      "name": "abbrev",
      "location": "/abbrev",
      "realpath": "install-types : abbrev",
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
      "location": "/balanced-match",
      "realpath": "install-types : balanced-match",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "balanced-match",
          "type": "prod",
          "spec": "^1.0.0",
          "from": "install-types : brace-expansion",
        },
      },
    },
    "brace-expansion" => Node {
      "name": "brace-expansion",
      "location": "/brace-expansion",
      "realpath": "install-types : brace-expansion",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "brace-expansion",
          "type": "prod",
          "spec": "^1.1.7",
          "from": "install-types : minimatch",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "type": "prod",
          "spec": "^1.0.0",
          "to": "install-types : balanced-match",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "type": "prod",
          "spec": "0.0.1",
          "to": "install-types : concat-map",
        },
      },
    },
    "bundler" => Node {
      "name": "bundler",
      "location": "/bundler",
      "realpath": "install-types : bundler",
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
          "to": "install-types : bundler : a",
        },
      },
      "children": Map {
        "a" => Node {
          "name": "a",
          "location": "/bundler/a",
          "realpath": "install-types : bundler : a",
          "top": "install-types",
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "name": "a",
              "type": "prod",
              "spec": "",
              "from": "install-types : bundler",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "type": "prod",
              "spec": "",
              "to": "install-types : bundler : b",
            },
          },
        },
        "b" => Node {
          "name": "b",
          "location": "/bundler/b",
          "realpath": "install-types : bundler : b",
          "top": "install-types",
          "edgesIn": Set {
            Edge {
              "name": "b",
              "type": "prod",
              "spec": "",
              "from": "install-types : bundler : a",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "type": "prod",
              "spec": "",
              "to": "install-types : bundler : c",
            },
          },
        },
        "c" => Node {
          "name": "c",
          "location": "/bundler/c",
          "realpath": "install-types : bundler : c",
          "top": "install-types",
          "edgesIn": Set {
            Edge {
              "name": "c",
              "type": "prod",
              "spec": "",
              "from": "install-types : bundler : b",
            },
          },
        },
      },
    },
    "concat-map" => Node {
      "name": "concat-map",
      "location": "/concat-map",
      "realpath": "install-types : concat-map",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "concat-map",
          "type": "prod",
          "spec": "0.0.1",
          "from": "install-types : brace-expansion",
        },
      },
    },
    "fs.realpath" => Node {
      "name": "fs.realpath",
      "location": "/fs.realpath",
      "realpath": "install-types : fs.realpath",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "fs.realpath",
          "type": "prod",
          "spec": "^1.0.0",
          "from": "install-types : glob",
        },
      },
    },
    "full-git-url" => Node {
      "name": "full-git-url",
      "location": "/full-git-url",
      "realpath": "install-types : full-git-url",
      "top": "install-types",
      "edgesIn": Set {
        Edge {
          "name": "full-git-url",
          "type": "prod",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "from": "install-types",
          "error": "INVALID",
        },
      },
    },
    "ghshort" => Node {
      "name": "ghshort",
      "location": "/ghshort",
      "realpath": "install-types : ghshort",
      "top": "install-types",
      "edgesIn": Set {
        Edge {
          "name": "ghshort",
          "type": "prod",
          "spec": "github:isaacs/abbrev-js",
          "from": "install-types",
          "error": "INVALID",
        },
      },
    },
    "ghtgz" => Node {
      "name": "ghtgz",
      "location": "/ghtgz",
      "realpath": "install-types : ghtgz",
      "top": "install-types",
      "extraneous": true,
    },
    "glob" => Node {
      "name": "glob",
      "location": "/glob",
      "realpath": "install-types : glob",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "glob",
          "type": "optional",
          "spec": "^7.1.3",
          "from": "install-types : rimraf",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "type": "prod",
          "spec": "^1.0.0",
          "to": "install-types : fs.realpath",
        },
        "inflight" => Edge {
          "name": "inflight",
          "type": "prod",
          "spec": "^1.0.4",
          "to": "install-types : inflight",
        },
        "inherits" => Edge {
          "name": "inherits",
          "type": "prod",
          "spec": "2",
          "to": "install-types : inherits",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "type": "prod",
          "spec": "^3.0.4",
          "to": "install-types : minimatch",
        },
        "once" => Edge {
          "name": "once",
          "type": "prod",
          "spec": "^1.3.0",
          "to": "install-types : once",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "type": "prod",
          "spec": "^1.0.0",
          "to": "install-types : path-is-absolute",
        },
      },
    },
    "inflight" => Node {
      "name": "inflight",
      "location": "/inflight",
      "realpath": "install-types : inflight",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "inflight",
          "type": "prod",
          "spec": "^1.0.4",
          "from": "install-types : glob",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "type": "prod",
          "spec": "^1.3.0",
          "to": "install-types : once",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "type": "prod",
          "spec": "1",
          "to": "install-types : wrappy",
        },
      },
    },
    "inherits" => Node {
      "name": "inherits",
      "location": "/inherits",
      "realpath": "install-types : inherits",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "inherits",
          "type": "prod",
          "spec": "2",
          "from": "install-types : glob",
        },
      },
    },
    "minimatch" => Node {
      "name": "minimatch",
      "location": "/minimatch",
      "realpath": "install-types : minimatch",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "minimatch",
          "type": "prod",
          "spec": "^3.0.4",
          "from": "install-types : glob",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "type": "prod",
          "spec": "^1.1.7",
          "to": "install-types : brace-expansion",
        },
      },
    },
    "old" => Node {
      "name": "old",
      "location": "/old",
      "realpath": "install-types : old",
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
      "location": "/once",
      "realpath": "install-types : once",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "once",
          "type": "prod",
          "spec": "^1.3.0",
          "from": "install-types : glob",
        },
        Edge {
          "name": "once",
          "type": "prod",
          "spec": "^1.3.0",
          "from": "install-types : inflight",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "type": "prod",
          "spec": "1",
          "to": "install-types : wrappy",
        },
      },
    },
    "path-is-absolute" => Node {
      "name": "path-is-absolute",
      "location": "/path-is-absolute",
      "realpath": "install-types : path-is-absolute",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "path-is-absolute",
          "type": "prod",
          "spec": "^1.0.0",
          "from": "install-types : glob",
        },
      },
    },
    "pinned" => Node {
      "name": "pinned",
      "location": "/pinned",
      "realpath": "install-types : pinned",
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
      "location": "/reg",
      "realpath": "install-types : reg",
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
      "location": "/remote",
      "realpath": "install-types : remote",
      "top": "install-types",
      "edgesIn": Set {
        Edge {
          "name": "remote",
          "type": "prod",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "from": "install-types",
          "error": "INVALID",
        },
      },
    },
    "rimraf" => Node {
      "name": "rimraf",
      "location": "/rimraf",
      "realpath": "install-types : rimraf",
      "top": "install-types",
      "extraneous": true,
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "type": "optional",
          "spec": "^7.1.3",
          "to": "install-types : glob",
        },
      },
    },
    "symlink" => Link {
      "name": "symlink",
      "location": "/symlink",
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
      "location": "/tarball",
      "realpath": "install-types : tarball",
      "top": "install-types",
      "edgesIn": Set {
        Edge {
          "name": "tarball",
          "type": "prod",
          "spec": "file:abbrev-1.1.1.tgz",
          "from": "install-types",
          "error": "INVALID",
        },
      },
    },
    "wrappy" => Node {
      "name": "wrappy",
      "location": "/wrappy",
      "realpath": "install-types : wrappy",
      "top": "install-types",
      "extraneous": true,
      "edgesIn": Set {
        Edge {
          "name": "wrappy",
          "type": "prod",
          "spec": "1",
          "from": "install-types : inflight",
        },
        Edge {
          "name": "wrappy",
          "type": "prod",
          "spec": "1",
          "from": "install-types : once",
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP linkedroot > loaded tree 1`] = `
Node {
  "name": "linkedroot",
  "location": "/",
  "realpath": "root",
  "top": "root",
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "root : @scope/x",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "root : @scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "root : foo",
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
      "location": "/@scope/x",
      "realpath": "root : @scope/x",
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
          "from": "root : @scope/x",
        },
        Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "root : foo",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "root : @scope/x",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "root : @scope/y",
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
          "to": "root : @scope/x : glob",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "/@scope/x/glob",
          "realpath": "root : @scope/x : glob",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "root : @scope/x",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : graceful-fs",
            },
            "inherits" => Edge {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : inherits",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : minimatch",
            },
            "once" => Edge {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : once",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "/@scope/x/glob/graceful-fs",
              "realpath": "root : @scope/x : glob : graceful-fs",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
              },
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "/@scope/x/glob/inherits",
              "realpath": "root : @scope/x : glob : inherits",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
              },
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "/@scope/x/glob/minimatch",
              "realpath": "root : @scope/x : glob : minimatch",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "root : @scope/x : glob : minimatch : lru-cache",
                },
                "once" => Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "root : @scope/x : glob : once",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "root : @scope/x : glob : minimatch : sigmund",
                },
              },
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "/@scope/x/glob/minimatch/lru-cache",
                  "realpath": "root : @scope/x : glob : minimatch : lru-cache",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "root : @scope/x : glob : minimatch",
                    },
                  },
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "/@scope/x/glob/minimatch/sigmund",
                  "realpath": "root : @scope/x : glob : minimatch : sigmund",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "root : @scope/x : glob : minimatch",
                    },
                  },
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "/@scope/x/glob/once",
              "realpath": "root : @scope/x : glob : once",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob : minimatch",
                },
              },
            },
          },
        },
      },
    },
    "@scope/y" => Node {
      "name": "@scope/y",
      "location": "/@scope/y",
      "realpath": "root : @scope/y",
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
          "from": "root : @scope/x",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "root : foo",
          "error": "INVALID",
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "realpath": "root : foo",
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
          "from": "root : @scope/y",
          "error": "INVALID",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "root : @scope/x",
        },
        "express" => Edge {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "root : foo : express",
        },
      },
      "children": Map {
        "express" => Node {
          "name": "express",
          "location": "/foo/express",
          "realpath": "root : foo : express",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "root : foo",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP links-all-over > loaded tree 1`] = `
Node {
  "name": "links-all-over",
  "location": "/",
  "realpath": "links-all-over",
  "top": "links-all-over",
  "edgesOut": Map {
    "link-deep" => Edge {
      "name": "link-deep",
      "type": "prod",
      "spec": "",
      "to": "links-all-over : nest : a : b : c : d : deep",
    },
    "link-link" => Edge {
      "name": "link-link",
      "type": "prod",
      "spec": "",
      "to": "links-all-over : nest : a : b : c : d : deep",
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
      "to": "links-all-over : nest",
    },
  },
  "children": Map {
    "link-deep" => Link {
      "name": "link-deep",
      "location": "/link-deep",
      "realpath": "links-all-over : nest : a : b : c : d : deep",
      "top": "links-all-over",
      "target": Object {
        "name": "deep",
        "parent": "links-all-over : nest : a : b : c : d",
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
      "location": "/link-link",
      "realpath": "links-all-over : nest : a : b : c : d : deep",
      "top": "links-all-over",
      "target": Object {
        "name": "deep",
        "parent": "links-all-over : nest : a : b : c : d",
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
      "location": "/link-outside-nest",
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
      "location": "/nest",
      "realpath": "links-all-over : nest",
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
          "to": "links-all-over : nest : a",
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
          "location": "/nest/a",
          "realpath": "links-all-over : nest : a",
          "top": "links-all-over",
          "edgesIn": Set {
            Edge {
              "name": "a",
              "type": "prod",
              "spec": "",
              "from": "links-all-over : nest",
            },
            Edge {
              "name": "a",
              "type": "prod",
              "spec": "",
              "from": "links-all-over : nest : a : b : c : d : deep",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "type": "prod",
              "spec": "",
              "to": "links-all-over : nest : a : b",
            },
          },
          "children": Map {
            "b" => Node {
              "name": "b",
              "location": "/nest/a/b",
              "realpath": "links-all-over : nest : a : b",
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
                  "from": "links-all-over : nest : a",
                },
              },
              "children": Map {
                "c" => Node {
                  "name": "c",
                  "location": "/nest/a/b/c",
                  "realpath": "links-all-over : nest : a : b : c",
                  "top": "links-all-over",
                  "extraneous": true,
                  "edgesOut": Map {
                    "d" => Edge {
                      "name": "d",
                      "type": "prod",
                      "spec": "",
                      "to": "links-all-over : nest : a : b : c : d",
                    },
                  },
                  "children": Map {
                    "d" => Node {
                      "name": "d",
                      "location": "/nest/a/b/c/d",
                      "realpath": "links-all-over : nest : a : b : c : d",
                      "top": "links-all-over",
                      "extraneous": true,
                      "edgesIn": Set {
                        Edge {
                          "name": "d",
                          "type": "prod",
                          "spec": "",
                          "from": "links-all-over : nest : a : b : c",
                        },
                      },
                      "edgesOut": Map {
                        "deep" => Edge {
                          "name": "deep",
                          "type": "prod",
                          "spec": "",
                          "to": "links-all-over : nest : a : b : c : d : deep",
                        },
                      },
                      "children": Map {
                        "deep" => Node {
                          "name": "deep",
                          "location": "/nest/a/b/c/d/deep",
                          "realpath": "links-all-over : nest : a : b : c : d : deep",
                          "top": "links-all-over",
                          "edgesIn": Set {
                            Edge {
                              "name": "deep",
                              "type": "prod",
                              "spec": "",
                              "from": "links-all-over : nest : a : b : c : d",
                            },
                          },
                          "edgesOut": Map {
                            "a" => Edge {
                              "name": "a",
                              "type": "prod",
                              "spec": "",
                              "to": "links-all-over : nest : a",
                            },
                            "deep-a" => Edge {
                              "name": "deep-a",
                              "type": "prod",
                              "spec": "",
                              "to": "links-all-over : nest : a : b : c : d : deep : deep-a",
                            },
                          },
                          "children": Map {
                            "deep-a" => Node {
                              "name": "deep-a",
                              "location": "/nest/a/b/c/d/deep/deep-a",
                              "realpath": "links-all-over : nest : a : b : c : d : deep : deep-a",
                              "top": "links-all-over",
                              "edgesIn": Set {
                                Edge {
                                  "name": "deep-a",
                                  "type": "prod",
                                  "spec": "",
                                  "from": "links-all-over : nest : a : b : c : d : deep",
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
          "location": "/nest/link-in-nest",
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
              "from": "links-all-over : nest",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP looking outside of cwd > loaded tree 1`] = `
Node {
  "name": "root",
  "location": "/",
  "realpath": "root",
  "top": "root",
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "root : @scope/x",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "root : @scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "root : foo",
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
      "location": "/@scope/x",
      "realpath": "root : @scope/x",
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
          "from": "root : @scope/x",
        },
        Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "root : foo",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "root : @scope/x",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "root : @scope/y",
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
          "to": "root : @scope/x : glob",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "/@scope/x/glob",
          "realpath": "root : @scope/x : glob",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "root : @scope/x",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : graceful-fs",
            },
            "inherits" => Edge {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : inherits",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : minimatch",
            },
            "once" => Edge {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : once",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "/@scope/x/glob/graceful-fs",
              "realpath": "root : @scope/x : glob : graceful-fs",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
              },
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "/@scope/x/glob/inherits",
              "realpath": "root : @scope/x : glob : inherits",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
              },
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "/@scope/x/glob/minimatch",
              "realpath": "root : @scope/x : glob : minimatch",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "root : @scope/x : glob : minimatch : lru-cache",
                },
                "once" => Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "root : @scope/x : glob : once",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "root : @scope/x : glob : minimatch : sigmund",
                },
              },
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "/@scope/x/glob/minimatch/lru-cache",
                  "realpath": "root : @scope/x : glob : minimatch : lru-cache",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "root : @scope/x : glob : minimatch",
                    },
                  },
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "/@scope/x/glob/minimatch/sigmund",
                  "realpath": "root : @scope/x : glob : minimatch : sigmund",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "root : @scope/x : glob : minimatch",
                    },
                  },
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "/@scope/x/glob/once",
              "realpath": "root : @scope/x : glob : once",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob : minimatch",
                },
              },
            },
          },
        },
      },
    },
    "@scope/y" => Node {
      "name": "@scope/y",
      "location": "/@scope/y",
      "realpath": "root : @scope/y",
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
          "from": "root : @scope/x",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "root : foo",
          "error": "INVALID",
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "realpath": "root : foo",
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
          "from": "root : @scope/y",
          "error": "INVALID",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "root : @scope/x",
        },
        "express" => Edge {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "root : foo : express",
        },
      },
      "children": Map {
        "express" => Node {
          "name": "express",
          "location": "/foo/express",
          "realpath": "root : foo : express",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "root : foo",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP mixedloop > loaded tree 1`] = `
Node {
  "name": "mixedloop",
  "location": "/",
  "realpath": "mixedloop",
  "top": "mixedloop",
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "optional",
      "spec": "",
      "to": "mixedloop : a",
    },
    "c" => Edge {
      "name": "c",
      "type": "dev",
      "spec": "",
      "to": "mixedloop : c",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "/a",
      "realpath": "mixedloop : a",
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
          "to": "mixedloop : b",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "/b",
      "realpath": "mixedloop : b",
      "top": "mixedloop",
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "mixedloop : a",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "mixedloop : c",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "/c",
      "realpath": "mixedloop : c",
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
          "from": "mixedloop : b",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "mixedloop : d",
        },
      },
    },
    "d" => Node {
      "name": "d",
      "location": "/d",
      "realpath": "mixedloop : d",
      "top": "mixedloop",
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "mixedloop : c",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "mixedloop : e",
        },
      },
    },
    "e" => Node {
      "name": "e",
      "location": "/e",
      "realpath": "mixedloop : e",
      "top": "mixedloop",
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "mixedloop : d",
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP mixedmidway > loaded tree 1`] = `
Node {
  "name": "mixedmidway",
  "location": "/",
  "realpath": "mixedmidway",
  "top": "mixedmidway",
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "optional",
      "spec": "",
      "to": "mixedmidway : a",
    },
    "b" => Edge {
      "name": "b",
      "type": "optional",
      "spec": "",
      "to": "mixedmidway : b",
    },
    "c" => Edge {
      "name": "c",
      "type": "optional",
      "spec": "",
      "to": "mixedmidway : c",
    },
    "i" => Edge {
      "name": "i",
      "type": "dev",
      "spec": "",
      "to": "mixedmidway : i",
    },
    "k" => Edge {
      "name": "k",
      "type": "optional",
      "spec": "",
      "to": "mixedmidway : k",
    },
    "l" => Edge {
      "name": "l",
      "type": "optional",
      "spec": "",
      "to": "mixedmidway : l",
    },
    "m" => Edge {
      "name": "m",
      "type": "optional",
      "spec": "",
      "to": "mixedmidway : m",
    },
    "x" => Edge {
      "name": "x",
      "type": "prod",
      "spec": "",
      "to": "mixedmidway : x",
    },
    "y" => Edge {
      "name": "y",
      "type": "optional",
      "spec": "",
      "to": "mixedmidway : y",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "/a",
      "realpath": "mixedmidway : a",
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
          "to": "mixedmidway : b",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "/b",
      "realpath": "mixedmidway : b",
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
          "from": "mixedmidway : a",
        },
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway : n",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway : c",
        },
        "j" => Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway : j",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "/c",
      "realpath": "mixedmidway : c",
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
          "from": "mixedmidway : b",
        },
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway : k",
        },
      },
    },
    "i" => Node {
      "name": "i",
      "location": "/i",
      "realpath": "mixedmidway : i",
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
          "to": "mixedmidway : j",
        },
      },
    },
    "j" => Node {
      "name": "j",
      "location": "/j",
      "realpath": "mixedmidway : j",
      "top": "mixedmidway",
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway : b",
        },
        Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway : i",
        },
        Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway : n",
        },
      },
      "edgesOut": Map {
        "k" => Edge {
          "name": "k",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway : k",
        },
      },
    },
    "k" => Node {
      "name": "k",
      "location": "/k",
      "realpath": "mixedmidway : k",
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
          "from": "mixedmidway : j",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway : c",
        },
      },
    },
    "l" => Node {
      "name": "l",
      "location": "/l",
      "realpath": "mixedmidway : l",
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
          "from": "mixedmidway : z",
        },
      },
      "edgesOut": Map {
        "m" => Edge {
          "name": "m",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway : m",
        },
      },
    },
    "m" => Node {
      "name": "m",
      "location": "/m",
      "realpath": "mixedmidway : m",
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
          "from": "mixedmidway : l",
        },
      },
    },
    "n" => Node {
      "name": "n",
      "location": "/n",
      "realpath": "mixedmidway : n",
      "top": "mixedmidway",
      "extraneous": true,
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway : b",
        },
        "j" => Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway : j",
        },
      },
    },
    "x" => Node {
      "name": "x",
      "location": "/x",
      "realpath": "mixedmidway : x",
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
          "to": "mixedmidway : y",
        },
      },
    },
    "y" => Node {
      "name": "y",
      "location": "/y",
      "realpath": "mixedmidway : y",
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
          "from": "mixedmidway : x",
        },
      },
      "edgesOut": Map {
        "z" => Edge {
          "name": "z",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway : z",
        },
      },
    },
    "z" => Node {
      "name": "z",
      "location": "/z",
      "realpath": "mixedmidway : z",
      "top": "mixedmidway",
      "edgesIn": Set {
        Edge {
          "name": "z",
          "type": "prod",
          "spec": "",
          "from": "mixedmidway : y",
        },
      },
      "edgesOut": Map {
        "l" => Edge {
          "name": "l",
          "type": "prod",
          "spec": "",
          "to": "mixedmidway : l",
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP noname > loaded tree 1`] = `
Node {
  "name": "noname",
  "location": "/",
  "realpath": "noname",
  "top": "noname",
  "errors": Array [
    Object {
      "code": "ENOENT",
      "path": "fixtures/noname/package.json",
    },
  ],
  "children": Map {
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "realpath": "noname : foo",
      "top": "noname",
      "extraneous": true,
      "errors": Array [
        Object {
          "code": "ENOENT",
          "path": "fixtures/noname/node_modules/foo/package.json",
        },
      ],
    },
  },
}
`

exports[`test/load-actual.js TAP optionalloop > loaded tree 1`] = `
Node {
  "name": "optionalloop",
  "location": "/",
  "realpath": "optionalloop",
  "top": "optionalloop",
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "optional",
      "spec": "",
      "to": "optionalloop : a",
    },
    "c" => Edge {
      "name": "c",
      "type": "prod",
      "spec": "",
      "to": "optionalloop : c",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "/a",
      "realpath": "optionalloop : a",
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
          "to": "optionalloop : b",
        },
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "optionalloop : d",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "/b",
      "realpath": "optionalloop : b",
      "top": "optionalloop",
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "optionalloop : a",
        },
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "optionalloop : d",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "/c",
      "realpath": "optionalloop : c",
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
          "to": "optionalloop : d",
        },
      },
    },
    "d" => Node {
      "name": "d",
      "location": "/d",
      "realpath": "optionalloop : d",
      "top": "optionalloop",
      "edgesIn": Set {
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "optionalloop : a",
        },
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "optionalloop : c",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "optionalloop : b",
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP optofdev > loaded tree 1`] = `
Node {
  "name": "optofdev",
  "location": "/",
  "realpath": "optofdev",
  "top": "optofdev",
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "dev",
      "spec": "",
      "to": "optofdev : a",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "/a",
      "realpath": "optofdev : a",
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
          "to": "optofdev : b",
        },
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "optofdev : d",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "/b",
      "realpath": "optofdev : b",
      "top": "optofdev",
      "dev": true,
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "optional",
          "spec": "",
          "from": "optofdev : a",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "optofdev : c",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "/c",
      "realpath": "optofdev : c",
      "top": "optofdev",
      "dev": true,
      "optional": true,
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "optofdev : b",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "optofdev : e",
        },
      },
    },
    "d" => Node {
      "name": "d",
      "location": "/d",
      "realpath": "optofdev : d",
      "top": "optofdev",
      "dev": true,
      "edgesIn": Set {
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "optofdev : a",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "optofdev : e",
        },
      },
    },
    "e" => Node {
      "name": "e",
      "location": "/e",
      "realpath": "optofdev : e",
      "top": "optofdev",
      "dev": true,
      "edgesIn": Set {
        Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "optofdev : c",
        },
        Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "optofdev : d",
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP other > loaded tree 1`] = `
Node {
  "name": "other",
  "location": "/",
  "realpath": "other",
  "top": "other",
  "errors": Array [
    Object {
      "code": "ENOENT",
      "path": "fixtures/other/package.json",
    },
  ],
  "children": Map {
    "glob" => Link {
      "name": "glob",
      "location": "/glob",
      "realpath": "root : @scope/x : glob",
      "top": "other",
      "extraneous": true,
      "target": Object {
        "name": "glob",
        "parent": "root : @scope/x",
      },
    },
  },
}
`

exports[`test/load-actual.js TAP pnpm > loaded tree 1`] = `
Node {
  "name": "pnpm",
  "location": "/",
  "realpath": "pnpm",
  "top": "pnpm",
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "",
      "to": "pnpm : .pnpm/registry.npmjs.org/@scope/x/1.0.0 : @scope/x",
    },
    "a" => Edge {
      "name": "a",
      "type": "prod",
      "spec": "",
      "to": "pnpm : .pnpm/registry.npmjs.org/a/1.0.0 : a",
    },
  },
  "children": Map {
    "@scope/x" => Link {
      "name": "@scope/x",
      "location": "/@scope/x",
      "realpath": "pnpm : .pnpm/registry.npmjs.org/@scope/x/1.0.0 : @scope/x",
      "top": "pnpm",
      "target": Object {
        "name": "@scope/x",
        "parent": "pnpm : .pnpm/registry.npmjs.org/@scope/x/1.0.0",
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
      "location": "/a",
      "realpath": "pnpm : .pnpm/registry.npmjs.org/a/1.0.0 : a",
      "top": "pnpm",
      "target": Object {
        "name": "a",
        "parent": "pnpm : .pnpm/registry.npmjs.org/a/1.0.0",
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

exports[`test/load-actual.js TAP root > loaded tree 1`] = `
Node {
  "name": "root",
  "location": "/",
  "realpath": "root",
  "top": "root",
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "root : @scope/x",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "root : @scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "root : foo",
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
      "location": "/@scope/x",
      "realpath": "root : @scope/x",
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
          "from": "root : @scope/x",
        },
        Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "root : foo",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "root : @scope/x",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "root : @scope/y",
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
          "to": "root : @scope/x : glob",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "/@scope/x/glob",
          "realpath": "root : @scope/x : glob",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "root : @scope/x",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : graceful-fs",
            },
            "inherits" => Edge {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : inherits",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : minimatch",
            },
            "once" => Edge {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "root : @scope/x : glob : once",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "/@scope/x/glob/graceful-fs",
              "realpath": "root : @scope/x : glob : graceful-fs",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
              },
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "/@scope/x/glob/inherits",
              "realpath": "root : @scope/x : glob : inherits",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
              },
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "/@scope/x/glob/minimatch",
              "realpath": "root : @scope/x : glob : minimatch",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "root : @scope/x : glob : minimatch : lru-cache",
                },
                "once" => Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "root : @scope/x : glob : once",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "root : @scope/x : glob : minimatch : sigmund",
                },
              },
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "/@scope/x/glob/minimatch/lru-cache",
                  "realpath": "root : @scope/x : glob : minimatch : lru-cache",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "root : @scope/x : glob : minimatch",
                    },
                  },
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "/@scope/x/glob/minimatch/sigmund",
                  "realpath": "root : @scope/x : glob : minimatch : sigmund",
                  "top": "root",
                  "edgesIn": Set {
                    Edge {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "root : @scope/x : glob : minimatch",
                    },
                  },
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "/@scope/x/glob/once",
              "realpath": "root : @scope/x : glob : once",
              "top": "root",
              "edgesIn": Set {
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob",
                },
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "root : @scope/x : glob : minimatch",
                },
              },
            },
          },
        },
      },
    },
    "@scope/y" => Node {
      "name": "@scope/y",
      "location": "/@scope/y",
      "realpath": "root : @scope/y",
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
          "from": "root : @scope/x",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "root : foo",
          "error": "INVALID",
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "realpath": "root : foo",
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
          "from": "root : @scope/y",
          "error": "INVALID",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "root : @scope/x",
        },
        "express" => Edge {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "root : foo : express",
        },
      },
      "children": Map {
        "express" => Node {
          "name": "express",
          "location": "/foo/express",
          "realpath": "root : foo : express",
          "top": "root",
          "edgesIn": Set {
            Edge {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "root : foo",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP selflink > loaded tree 1`] = `
Node {
  "name": "selflink",
  "location": "/",
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
      "to": "selflink : @scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "prod",
      "spec": "",
      "to": "selflink : foo",
    },
  },
  "children": Map {
    "@scope/y" => Node {
      "name": "@scope/y",
      "location": "/@scope/y",
      "realpath": "selflink : @scope/y",
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
          "to": "selflink : foo",
        },
      },
    },
    "@scope/z" => Node {
      "name": "@scope/z",
      "location": "/@scope/z",
      "realpath": "selflink : @scope/z",
      "top": "selflink",
      "extraneous": true,
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "selflink : foo : glob",
        },
      },
      "children": Map {
        "glob" => Link {
          "name": "glob",
          "location": "/@scope/z/glob",
          "realpath": "selflink : foo : glob",
          "top": "selflink",
          "extraneous": true,
          "target": Object {
            "name": "glob",
            "parent": "selflink : foo",
          },
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "selflink : @scope/z",
            },
          },
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "realpath": "selflink : foo",
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
          "from": "selflink : @scope/y",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "selflink : foo : glob",
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
          "location": "/foo/glob",
          "realpath": "selflink : foo : glob",
          "top": "selflink",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "selflink : foo",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "/foo/glob/graceful-fs",
              "realpath": "selflink : foo : glob : graceful-fs",
              "top": "selflink",
              "extraneous": true,
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "/foo/glob/inherits",
              "realpath": "selflink : foo : glob : inherits",
              "top": "selflink",
              "extraneous": true,
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "/foo/glob/minimatch",
              "realpath": "selflink : foo : glob : minimatch",
              "top": "selflink",
              "extraneous": true,
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "/foo/glob/minimatch/lru-cache",
                  "realpath": "selflink : foo : glob : minimatch : lru-cache",
                  "top": "selflink",
                  "extraneous": true,
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "/foo/glob/minimatch/sigmund",
                  "realpath": "selflink : foo : glob : minimatch : sigmund",
                  "top": "selflink",
                  "extraneous": true,
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "/foo/glob/once",
              "realpath": "selflink : foo : glob : once",
              "top": "selflink",
              "extraneous": true,
            },
          },
        },
        "selflink" => Link {
          "name": "selflink",
          "location": "/foo/selflink",
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
              "from": "selflink : foo",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP shake out Link target timing issue > loaded tree 1`] = `
Node {
  "name": "selflink",
  "location": "/",
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
      "to": "selflink : @scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "prod",
      "spec": "",
      "to": "selflink : foo",
    },
  },
  "children": Map {
    "@scope/y" => Node {
      "name": "@scope/y",
      "location": "/@scope/y",
      "realpath": "selflink : @scope/y",
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
          "to": "selflink : foo",
        },
      },
    },
    "@scope/z" => Node {
      "name": "@scope/z",
      "location": "/@scope/z",
      "realpath": "selflink : @scope/z",
      "top": "selflink",
      "extraneous": true,
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "selflink : foo : glob",
        },
      },
      "children": Map {
        "glob" => Link {
          "name": "glob",
          "location": "/@scope/z/glob",
          "realpath": "selflink : foo : glob",
          "top": "selflink",
          "extraneous": true,
          "target": Object {
            "name": "glob",
            "parent": "selflink : foo",
          },
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "selflink : @scope/z",
            },
          },
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "realpath": "selflink : foo",
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
          "from": "selflink : @scope/y",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "selflink : foo : glob",
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
          "location": "/foo/glob",
          "realpath": "selflink : foo : glob",
          "top": "selflink",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "selflink : foo",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "/foo/glob/graceful-fs",
              "realpath": "selflink : foo : glob : graceful-fs",
              "top": "selflink",
              "extraneous": true,
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "/foo/glob/inherits",
              "realpath": "selflink : foo : glob : inherits",
              "top": "selflink",
              "extraneous": true,
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "/foo/glob/minimatch",
              "realpath": "selflink : foo : glob : minimatch",
              "top": "selflink",
              "extraneous": true,
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "/foo/glob/minimatch/lru-cache",
                  "realpath": "selflink : foo : glob : minimatch : lru-cache",
                  "top": "selflink",
                  "extraneous": true,
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "/foo/glob/minimatch/sigmund",
                  "realpath": "selflink : foo : glob : minimatch : sigmund",
                  "top": "selflink",
                  "extraneous": true,
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "/foo/glob/once",
              "realpath": "selflink : foo : glob : once",
              "top": "selflink",
              "extraneous": true,
            },
          },
        },
        "selflink" => Link {
          "name": "selflink",
          "location": "/foo/selflink",
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
              "from": "selflink : foo",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP symlinked-node-modules/example > loaded tree 1`] = `
Node {
  "name": "example",
  "location": "/",
  "realpath": "symlinked-node-modules/example",
  "top": "symlinked-node-modules/example",
  "children": Map {
    "bar" => Link {
      "name": "bar",
      "location": "/bar",
      "realpath": "symlinked-node-modules/bar",
      "top": "symlinked-node-modules/example",
      "extraneous": true,
      "target": Object {
        "name": "bar",
        "parent": null,
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "realpath": "symlinked-node-modules/example : foo",
      "top": "symlinked-node-modules/example",
      "extraneous": true,
    },
  },
}
`

exports[`test/load-actual.js TAP workspace > loaded tree 1`] = `
Node {
  "name": "workspace",
  "location": "/",
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
      "location": "/a",
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
      "location": "/b",
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
      "location": "/c",
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

exports[`test/load-actual.js TAP workspace2 > loaded tree 1`] = `
Node {
  "name": "workspace2",
  "location": "/",
  "realpath": "workspace2",
  "top": "workspace2",
  "edgesOut": Map {
    "b" => Edge {
      "name": "b",
      "type": "prod",
      "spec": "",
      "to": "workspace2 : b",
    },
    "c" => Edge {
      "name": "c",
      "type": "prod",
      "spec": "",
      "to": "workspace2 : c",
    },
  },
  "children": Map {
    "b" => Node {
      "name": "b",
      "location": "/b",
      "realpath": "workspace2 : b",
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
          "from": "workspace2 : b : d",
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
          "to": "workspace2 : b : d",
        },
      },
      "children": Map {
        "d" => Node {
          "name": "d",
          "location": "/b/d",
          "realpath": "workspace2 : b : d",
          "top": "workspace2",
          "edgesIn": Set {
            Edge {
              "name": "d",
              "type": "prod",
              "spec": "",
              "from": "workspace2 : b",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "type": "prod",
              "spec": "",
              "to": "workspace2 : b",
            },
          },
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "/c",
      "realpath": "workspace2 : c",
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
          "to": "workspace2 : b : d",
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
          "location": "/c/d",
          "realpath": "workspace2 : b : d",
          "top": "workspace2",
          "target": Object {
            "name": "d",
            "parent": "workspace2 : b",
          },
          "edgesIn": Set {
            Edge {
              "name": "d",
              "type": "prod",
              "spec": "",
              "from": "workspace2 : c",
            },
          },
        },
        "x" => Link {
          "name": "x",
          "location": "/c/x",
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
              "from": "workspace2 : c",
            },
          },
        },
      },
    },
  },
}
`

exports[`test/load-actual.js TAP workspace3 > loaded tree 1`] = `
Node {
  "name": "workspace3",
  "location": "/",
  "realpath": "workspace3",
  "top": "workspace3",
  "children": Map {
    "a" => Link {
      "name": "a",
      "location": "/a",
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
      "location": "/app",
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
      "location": "/b",
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
      "location": "/c",
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

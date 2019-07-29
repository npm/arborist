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
  "edgesOut": Map {
    "dep" => Edge {
      "name": "dep",
      "type": "prod",
      "spec": "",
      "to": "/dep",
    },
  },
  "children": Map {
    "dep" => Node {
      "name": "dep",
      "location": "/dep",
      "bundled": true,
      "edgesIn": Set {
        Edge {
          "name": "dep",
          "type": "prod",
          "spec": "",
          "from": "/",
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
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "/@scope/x",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "/@scope/y",
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
      "edgesIn": Set {
        Edge {
          "name": "@scope/x",
          "type": "prod",
          "spec": "1",
          "from": "/",
        },
        Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "/@scope/x",
        },
        Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "/foo",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "/@scope/x",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "/@scope/y",
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
          "to": null,
          "error": "MISSING",
        },
      },
    },
    "@scope/y" => Node {
      "name": "@scope/y",
      "location": "/@scope/y",
      "edgesIn": Set {
        Edge {
          "name": "@scope/y",
          "type": "peer",
          "spec": ">0.99.0",
          "from": "/",
        },
        Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "from": "/@scope/x",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "/foo",
          "error": "INVALID",
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "edgesIn": Set {
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "from": "/@scope/y",
          "error": "INVALID",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "/@scope/x",
        },
        "express" => Edge {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": null,
          "error": "MISSING",
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
  "edgesOut": Map {
    "i" => Edge {
      "name": "i",
      "type": "dev",
      "spec": "",
      "to": "/i",
    },
    "x" => Edge {
      "name": "x",
      "type": "prod",
      "spec": "",
      "to": "/x",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "/a",
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "optional",
          "spec": "",
          "from": "/z",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "/b",
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "/c",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "/c",
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/b",
        },
        Edge {
          "name": "c",
          "type": "dev",
          "spec": "",
          "from": "/z",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "/d",
        },
      },
    },
    "d" => Node {
      "name": "d",
      "location": "/d",
      "edgesIn": Set {
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "/c",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "/e",
        },
      },
    },
    "e" => Node {
      "name": "e",
      "location": "/e",
      "edgesIn": Set {
        Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "/d",
        },
      },
    },
    "i" => Node {
      "name": "i",
      "location": "/i",
      "edgesIn": Set {
        Edge {
          "name": "i",
          "type": "dev",
          "spec": "",
          "from": "/",
        },
      },
      "edgesOut": Map {
        "j" => Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "to": "/j",
        },
      },
    },
    "j" => Node {
      "name": "j",
      "location": "/j",
      "edgesIn": Set {
        Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "/i",
        },
      },
      "edgesOut": Map {
        "k" => Edge {
          "name": "k",
          "type": "prod",
          "spec": "",
          "to": "/k",
        },
      },
    },
    "k" => Node {
      "name": "k",
      "location": "/k",
      "edgesIn": Set {
        Edge {
          "name": "k",
          "type": "prod",
          "spec": "",
          "from": "/j",
        },
      },
    },
    "x" => Node {
      "name": "x",
      "location": "/x",
      "edgesIn": Set {
        Edge {
          "name": "x",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      },
      "edgesOut": Map {
        "y" => Edge {
          "name": "y",
          "type": "prod",
          "spec": "",
          "to": "/y",
        },
      },
    },
    "y" => Node {
      "name": "y",
      "location": "/y",
      "edgesIn": Set {
        Edge {
          "name": "y",
          "type": "prod",
          "spec": "",
          "from": "/x",
        },
      },
      "edgesOut": Map {
        "z" => Edge {
          "name": "z",
          "type": "prod",
          "spec": "",
          "to": "/z",
        },
      },
    },
    "z" => Node {
      "name": "z",
      "location": "/z",
      "edgesIn": Set {
        Edge {
          "name": "z",
          "type": "prod",
          "spec": "",
          "from": "/y",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "type": "optional",
          "spec": "",
          "to": "/a",
        },
        "c" => Edge {
          "name": "c",
          "type": "dev",
          "spec": "",
          "to": "/c",
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
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "/@scope/x",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "/@scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "/foo",
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
      "edgesIn": Set {
        Edge {
          "name": "@scope/x",
          "type": "prod",
          "spec": "1",
          "from": "/",
        },
        Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "/@scope/x",
        },
        Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "/foo",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "/@scope/x",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "/@scope/y",
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
          "to": "/@scope/x/glob",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "/@scope/x/glob",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/@scope/x",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/graceful-fs",
            },
            "inherits" => Edge {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/inherits",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/minimatch",
            },
            "once" => Edge {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/once",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "/@scope/x/glob/graceful-fs",
              "edgesIn": Set {
                Edge {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              },
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "/@scope/x/glob/inherits",
              "edgesIn": Set {
                Edge {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              },
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "/@scope/x/glob/minimatch",
              "edgesIn": Set {
                Edge {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/lru-cache",
                },
                "once" => Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/once",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/sigmund",
                },
              },
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "/@scope/x/glob/minimatch/lru-cache",
                  "edgesIn": Set {
                    Edge {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  },
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "/@scope/x/glob/minimatch/sigmund",
                  "edgesIn": Set {
                    Edge {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  },
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "/@scope/x/glob/once",
              "edgesIn": Set {
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob/minimatch",
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
      "edgesIn": Set {
        Edge {
          "name": "@scope/y",
          "type": "peer",
          "spec": ">0.99.0",
          "from": "/",
        },
        Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "from": "/@scope/x",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "/foo",
          "error": "INVALID",
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "edgesIn": Set {
        Edge {
          "name": "foo",
          "type": "dev",
          "spec": "*",
          "from": "/",
        },
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "from": "/@scope/y",
          "error": "INVALID",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "/@scope/x",
        },
        "express" => Edge {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "/foo/express",
        },
      },
      "children": Map {
        "express" => Node {
          "name": "express",
          "location": "/foo/express",
          "edgesIn": Set {
            Edge {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "/foo",
            },
          },
          "edgesOut": Map {
            "tap" => Edge {
              "name": "tap",
              "type": "dev",
              "spec": "^10.1",
              "to": null,
              "error": "MISSING",
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
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "dev",
      "spec": "",
      "to": "/a",
    },
    "c" => Edge {
      "name": "c",
      "type": "prod",
      "spec": "",
      "to": "/c",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "/a",
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "dev",
          "spec": "",
          "from": "/",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
        },
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "/d",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "/b",
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/d",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "/c",
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "/d",
        },
      },
    },
    "d" => Node {
      "name": "d",
      "location": "/d",
      "edgesIn": Set {
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "/c",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
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
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "/@scope/x",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "/@scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "/foo",
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
      "edgesIn": Set {
        Edge {
          "name": "@scope/x",
          "type": "prod",
          "spec": "1",
          "from": "/",
        },
        Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "/@scope/x",
        },
        Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "/foo",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "/@scope/x",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "/@scope/y",
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
          "to": "/@scope/x/glob",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "/@scope/x/glob",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/@scope/x",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/graceful-fs",
            },
            "inherits" => Edge {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/inherits",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/minimatch",
            },
            "once" => Edge {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/once",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "/@scope/x/glob/graceful-fs",
              "edgesIn": Set {
                Edge {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              },
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "/@scope/x/glob/inherits",
              "edgesIn": Set {
                Edge {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              },
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "/@scope/x/glob/minimatch",
              "edgesIn": Set {
                Edge {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/lru-cache",
                },
                "once" => Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/once",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/sigmund",
                },
              },
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "/@scope/x/glob/minimatch/lru-cache",
                  "edgesIn": Set {
                    Edge {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  },
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "/@scope/x/glob/minimatch/sigmund",
                  "edgesIn": Set {
                    Edge {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  },
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "/@scope/x/glob/once",
              "edgesIn": Set {
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob/minimatch",
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
      "edgesIn": Set {
        Edge {
          "name": "@scope/y",
          "type": "peer",
          "spec": ">0.99.0",
          "from": "/",
        },
        Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "from": "/@scope/x",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "/foo",
          "error": "INVALID",
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "edgesIn": Set {
        Edge {
          "name": "foo",
          "type": "dev",
          "spec": "*",
          "from": "/",
        },
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "from": "/@scope/y",
          "error": "INVALID",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "/@scope/x",
        },
        "express" => Edge {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "/foo/express",
        },
      },
      "children": Map {
        "express" => Node {
          "name": "express",
          "location": "/foo/express",
          "edgesIn": Set {
            Edge {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "/foo",
            },
          },
          "edgesOut": Map {
            "tap" => Edge {
              "name": "tap",
              "type": "dev",
              "spec": "^10.1",
              "to": null,
              "error": "MISSING",
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
  "edgesOut": Map {
    "link-deep" => Edge {
      "name": "link-deep",
      "type": "prod",
      "spec": "",
      "to": "/link-deep",
    },
    "link-link" => Edge {
      "name": "link-link",
      "type": "prod",
      "spec": "",
      "to": "/link-link",
    },
    "link-outside-nest" => Edge {
      "name": "link-outside-nest",
      "type": "prod",
      "spec": "",
      "to": "/link-outside-nest",
    },
    "nest" => Edge {
      "name": "nest",
      "type": "prod",
      "spec": "",
      "to": "/nest",
    },
  },
  "children": Map {
    "link-deep" => Link {
      "name": "link-deep",
      "location": "/link-deep",
      "target": Object {
        "name": "deep",
        "parent": "/nest/a/b/c/d",
      },
      "edgesIn": Set {
        Edge {
          "name": "link-deep",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      },
    },
    "link-link" => Link {
      "name": "link-link",
      "location": "/link-link",
      "target": Object {
        "name": "deep",
        "parent": "/nest/a/b/c/d",
      },
      "edgesIn": Set {
        Edge {
          "name": "link-link",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      },
    },
    "link-outside-nest" => Link {
      "name": "link-outside-nest",
      "location": "/link-outside-nest",
      "target": Object {
        "name": "real",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "link-outside-nest",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      },
    },
    "nest" => Node {
      "name": "nest",
      "location": "/nest",
      "edgesIn": Set {
        Edge {
          "name": "nest",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "type": "prod",
          "spec": "",
          "to": "/nest/a",
        },
        "link-in-nest" => Edge {
          "name": "link-in-nest",
          "type": "prod",
          "spec": "",
          "to": "/nest/link-in-nest",
        },
      },
      "children": Map {
        "a" => Node {
          "name": "a",
          "location": "/nest/a",
          "edgesIn": Set {
            Edge {
              "name": "a",
              "type": "prod",
              "spec": "",
              "from": "/nest",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "type": "prod",
              "spec": "",
              "to": "/nest/a/b",
            },
          },
          "children": Map {
            "b" => Node {
              "name": "b",
              "location": "/nest/a/b",
              "edgesIn": Set {
                Edge {
                  "name": "b",
                  "type": "prod",
                  "spec": "",
                  "from": "/nest/a",
                },
              },
              "children": Map {
                "c" => Node {
                  "name": "c",
                  "location": "/nest/a/b/c",
                  "edgesOut": Map {
                    "d" => Edge {
                      "name": "d",
                      "type": "prod",
                      "spec": "",
                      "to": "/nest/a/b/c/d",
                    },
                  },
                  "children": Map {
                    "d" => Node {
                      "name": "d",
                      "location": "/nest/a/b/c/d",
                      "edgesIn": Set {
                        Edge {
                          "name": "d",
                          "type": "prod",
                          "spec": "",
                          "from": "/nest/a/b/c",
                        },
                      },
                      "edgesOut": Map {
                        "deep" => Edge {
                          "name": "deep",
                          "type": "prod",
                          "spec": "",
                          "to": "/nest/a/b/c/d/deep",
                        },
                      },
                      "children": Map {
                        "deep" => Node {
                          "name": "deep",
                          "location": "/nest/a/b/c/d/deep",
                          "edgesIn": Set {
                            Edge {
                              "name": "deep",
                              "type": "prod",
                              "spec": "",
                              "from": "/nest/a/b/c/d",
                            },
                          },
                          "edgesOut": Map {
                            "deep-a" => Edge {
                              "name": "deep-a",
                              "type": "prod",
                              "spec": "",
                              "to": "/nest/a/b/c/d/deep/deep-a",
                            },
                          },
                          "children": Map {
                            "deep-a" => Node {
                              "name": "deep-a",
                              "location": "/nest/a/b/c/d/deep/deep-a",
                              "edgesIn": Set {
                                Edge {
                                  "name": "deep-a",
                                  "type": "prod",
                                  "spec": "",
                                  "from": "/nest/a/b/c/d/deep",
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
          "target": Object {
            "name": "real",
            "parent": null,
          },
          "edgesIn": Set {
            Edge {
              "name": "link-in-nest",
              "type": "prod",
              "spec": "",
              "from": "/nest",
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
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "/@scope/x",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "/@scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "/foo",
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
      "edgesIn": Set {
        Edge {
          "name": "@scope/x",
          "type": "prod",
          "spec": "1",
          "from": "/",
        },
        Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "/@scope/x",
        },
        Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "/foo",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "/@scope/x",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "/@scope/y",
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
          "to": "/@scope/x/glob",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "/@scope/x/glob",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/@scope/x",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/graceful-fs",
            },
            "inherits" => Edge {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/inherits",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/minimatch",
            },
            "once" => Edge {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/once",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "/@scope/x/glob/graceful-fs",
              "edgesIn": Set {
                Edge {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              },
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "/@scope/x/glob/inherits",
              "edgesIn": Set {
                Edge {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              },
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "/@scope/x/glob/minimatch",
              "edgesIn": Set {
                Edge {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/lru-cache",
                },
                "once" => Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/once",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/sigmund",
                },
              },
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "/@scope/x/glob/minimatch/lru-cache",
                  "edgesIn": Set {
                    Edge {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  },
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "/@scope/x/glob/minimatch/sigmund",
                  "edgesIn": Set {
                    Edge {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  },
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "/@scope/x/glob/once",
              "edgesIn": Set {
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob/minimatch",
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
      "edgesIn": Set {
        Edge {
          "name": "@scope/y",
          "type": "peer",
          "spec": ">0.99.0",
          "from": "/",
        },
        Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "from": "/@scope/x",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "/foo",
          "error": "INVALID",
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "edgesIn": Set {
        Edge {
          "name": "foo",
          "type": "dev",
          "spec": "*",
          "from": "/",
        },
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "from": "/@scope/y",
          "error": "INVALID",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "/@scope/x",
        },
        "express" => Edge {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "/foo/express",
        },
      },
      "children": Map {
        "express" => Node {
          "name": "express",
          "location": "/foo/express",
          "edgesIn": Set {
            Edge {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "/foo",
            },
          },
          "edgesOut": Map {
            "tap" => Edge {
              "name": "tap",
              "type": "dev",
              "spec": "^10.1",
              "to": null,
              "error": "MISSING",
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
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "optional",
      "spec": "",
      "to": "/a",
    },
    "c" => Edge {
      "name": "c",
      "type": "dev",
      "spec": "",
      "to": "/c",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "/a",
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "/b",
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "/c",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "/c",
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "dev",
          "spec": "",
          "from": "/",
        },
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/b",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "/d",
        },
      },
    },
    "d" => Node {
      "name": "d",
      "location": "/d",
      "edgesIn": Set {
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "/c",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "/e",
        },
      },
    },
    "e" => Node {
      "name": "e",
      "location": "/e",
      "edgesIn": Set {
        Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "/d",
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
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "optional",
      "spec": "",
      "to": "/a",
    },
    "b" => Edge {
      "name": "b",
      "type": "optional",
      "spec": "",
      "to": "/b",
    },
    "c" => Edge {
      "name": "c",
      "type": "optional",
      "spec": "",
      "to": "/c",
    },
    "i" => Edge {
      "name": "i",
      "type": "dev",
      "spec": "",
      "to": "/i",
    },
    "k" => Edge {
      "name": "k",
      "type": "optional",
      "spec": "",
      "to": "/k",
    },
    "l" => Edge {
      "name": "l",
      "type": "optional",
      "spec": "",
      "to": "/l",
    },
    "m" => Edge {
      "name": "m",
      "type": "optional",
      "spec": "",
      "to": "/m",
    },
    "x" => Edge {
      "name": "x",
      "type": "prod",
      "spec": "",
      "to": "/x",
    },
    "y" => Edge {
      "name": "y",
      "type": "optional",
      "spec": "",
      "to": "/y",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "/a",
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "/b",
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/n",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "/c",
        },
        "j" => Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "to": "/j",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "/c",
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/b",
        },
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/k",
        },
      },
    },
    "i" => Node {
      "name": "i",
      "location": "/i",
      "edgesIn": Set {
        Edge {
          "name": "i",
          "type": "dev",
          "spec": "",
          "from": "/",
        },
      },
      "edgesOut": Map {
        "j" => Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "to": "/j",
        },
      },
    },
    "j" => Node {
      "name": "j",
      "location": "/j",
      "edgesIn": Set {
        Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "/b",
        },
        Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "/i",
        },
        Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "from": "/n",
        },
      },
      "edgesOut": Map {
        "k" => Edge {
          "name": "k",
          "type": "prod",
          "spec": "",
          "to": "/k",
        },
      },
    },
    "k" => Node {
      "name": "k",
      "location": "/k",
      "edgesIn": Set {
        Edge {
          "name": "k",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
        Edge {
          "name": "k",
          "type": "prod",
          "spec": "",
          "from": "/j",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "/c",
        },
      },
    },
    "l" => Node {
      "name": "l",
      "location": "/l",
      "edgesIn": Set {
        Edge {
          "name": "l",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
        Edge {
          "name": "l",
          "type": "prod",
          "spec": "",
          "from": "/z",
        },
      },
      "edgesOut": Map {
        "m" => Edge {
          "name": "m",
          "type": "prod",
          "spec": "",
          "to": "/m",
        },
      },
    },
    "m" => Node {
      "name": "m",
      "location": "/m",
      "edgesIn": Set {
        Edge {
          "name": "m",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
        Edge {
          "name": "m",
          "type": "prod",
          "spec": "",
          "from": "/l",
        },
      },
    },
    "n" => Node {
      "name": "n",
      "location": "/n",
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
        },
        "j" => Edge {
          "name": "j",
          "type": "prod",
          "spec": "",
          "to": "/j",
        },
      },
    },
    "x" => Node {
      "name": "x",
      "location": "/x",
      "edgesIn": Set {
        Edge {
          "name": "x",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      },
      "edgesOut": Map {
        "y" => Edge {
          "name": "y",
          "type": "prod",
          "spec": "",
          "to": "/y",
        },
      },
    },
    "y" => Node {
      "name": "y",
      "location": "/y",
      "edgesIn": Set {
        Edge {
          "name": "y",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
        Edge {
          "name": "y",
          "type": "prod",
          "spec": "",
          "from": "/x",
        },
      },
      "edgesOut": Map {
        "z" => Edge {
          "name": "z",
          "type": "prod",
          "spec": "",
          "to": "/z",
        },
      },
    },
    "z" => Node {
      "name": "z",
      "location": "/z",
      "edgesIn": Set {
        Edge {
          "name": "z",
          "type": "prod",
          "spec": "",
          "from": "/y",
        },
      },
      "edgesOut": Map {
        "l" => Edge {
          "name": "l",
          "type": "prod",
          "spec": "",
          "to": "/l",
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
  "children": Map {
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
    },
  },
}
`

exports[`test/load-actual.js TAP optionalloop > loaded tree 1`] = `
Node {
  "name": "optionalloop",
  "location": "/",
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "optional",
      "spec": "",
      "to": "/a",
    },
    "c" => Edge {
      "name": "c",
      "type": "prod",
      "spec": "",
      "to": "/c",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "/a",
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "optional",
          "spec": "",
          "from": "/",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
        },
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "/d",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "/b",
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/d",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "/c",
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "/d",
        },
      },
    },
    "d" => Node {
      "name": "d",
      "location": "/d",
      "edgesIn": Set {
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "/c",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "to": "/b",
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
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "dev",
      "spec": "",
      "to": "/a",
    },
  },
  "children": Map {
    "a" => Node {
      "name": "a",
      "location": "/a",
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "dev",
          "spec": "",
          "from": "/",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "type": "optional",
          "spec": "",
          "to": "/b",
        },
        "d" => Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "to": "/d",
        },
      },
    },
    "b" => Node {
      "name": "b",
      "location": "/b",
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "optional",
          "spec": "",
          "from": "/a",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "to": "/c",
        },
      },
    },
    "c" => Node {
      "name": "c",
      "location": "/c",
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/b",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "/e",
        },
      },
    },
    "d" => Node {
      "name": "d",
      "location": "/d",
      "edgesIn": Set {
        Edge {
          "name": "d",
          "type": "prod",
          "spec": "",
          "from": "/a",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "to": "/e",
        },
      },
    },
    "e" => Node {
      "name": "e",
      "location": "/e",
      "edgesIn": Set {
        Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "/c",
        },
        Edge {
          "name": "e",
          "type": "prod",
          "spec": "",
          "from": "/d",
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
  "children": Map {
    "glob" => Link {
      "name": "glob",
      "location": "/glob",
      "target": Object {
        "name": "glob",
        "parent": null,
      },
    },
  },
}
`

exports[`test/load-actual.js TAP root > loaded tree 1`] = `
Node {
  "name": "root",
  "location": "/",
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "type": "prod",
      "spec": "1",
      "to": "/@scope/x",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "type": "peer",
      "spec": ">0.99.0",
      "to": "/@scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "dev",
      "spec": "*",
      "to": "/foo",
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
      "edgesIn": Set {
        Edge {
          "name": "@scope/x",
          "type": "prod",
          "spec": "1",
          "from": "/",
        },
        Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "from": "/@scope/x",
        },
        Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "from": "/foo",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "peer",
          "spec": "",
          "to": "/@scope/x",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "to": "/@scope/y",
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
          "to": "/@scope/x/glob",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "/@scope/x/glob",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/@scope/x",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/graceful-fs",
            },
            "inherits" => Edge {
              "name": "inherits",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/inherits",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/minimatch",
            },
            "once" => Edge {
              "name": "once",
              "type": "prod",
              "spec": "",
              "to": "/@scope/x/glob/once",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "/@scope/x/glob/graceful-fs",
              "edgesIn": Set {
                Edge {
                  "name": "graceful-fs",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              },
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "/@scope/x/glob/inherits",
              "edgesIn": Set {
                Edge {
                  "name": "inherits",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              },
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "/@scope/x/glob/minimatch",
              "edgesIn": Set {
                Edge {
                  "name": "minimatch",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/lru-cache",
                },
                "once" => Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/once",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "type": "prod",
                  "spec": "",
                  "to": "/@scope/x/glob/minimatch/sigmund",
                },
              },
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "/@scope/x/glob/minimatch/lru-cache",
                  "edgesIn": Set {
                    Edge {
                      "name": "lru-cache",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  },
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "/@scope/x/glob/minimatch/sigmund",
                  "edgesIn": Set {
                    Edge {
                      "name": "sigmund",
                      "type": "prod",
                      "spec": "",
                      "from": "/@scope/x/glob/minimatch",
                    },
                  },
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "/@scope/x/glob/once",
              "edgesIn": Set {
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob",
                },
                Edge {
                  "name": "once",
                  "type": "prod",
                  "spec": "",
                  "from": "/@scope/x/glob/minimatch",
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
      "edgesIn": Set {
        Edge {
          "name": "@scope/y",
          "type": "peer",
          "spec": ">0.99.0",
          "from": "/",
        },
        Edge {
          "name": "@scope/y",
          "type": "optional",
          "spec": "",
          "from": "/@scope/x",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "to": "/foo",
          "error": "INVALID",
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "edgesIn": Set {
        Edge {
          "name": "foo",
          "type": "dev",
          "spec": "*",
          "from": "/",
        },
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "99.x",
          "from": "/@scope/y",
          "error": "INVALID",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "type": "optional",
          "spec": "",
          "to": "/@scope/x",
        },
        "express" => Edge {
          "name": "express",
          "type": "prod",
          "spec": "npm:abbrev@*",
          "to": "/foo/express",
        },
      },
      "children": Map {
        "express" => Node {
          "name": "express",
          "location": "/foo/express",
          "edgesIn": Set {
            Edge {
              "name": "express",
              "type": "prod",
              "spec": "npm:abbrev@*",
              "from": "/foo",
            },
          },
          "edgesOut": Map {
            "tap" => Edge {
              "name": "tap",
              "type": "dev",
              "spec": "^10.1",
              "to": null,
              "error": "MISSING",
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
      "to": "/@scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "prod",
      "spec": "",
      "to": "/foo",
    },
  },
  "children": Map {
    "@scope/y" => Node {
      "name": "@scope/y",
      "location": "/@scope/y",
      "edgesIn": Set {
        Edge {
          "name": "@scope/y",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "*",
          "to": "/foo",
        },
      },
    },
    "@scope/z" => Node {
      "name": "@scope/z",
      "location": "/@scope/z",
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "/@scope/z/glob",
        },
      },
      "children": Map {
        "glob" => Link {
          "name": "glob",
          "location": "/@scope/z/glob",
          "target": Object {
            "name": "glob",
            "parent": "/foo",
          },
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/@scope/z",
            },
          },
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "edgesIn": Set {
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "*",
          "from": "/@scope/y",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "/foo/glob",
        },
        "selflink" => Edge {
          "name": "selflink",
          "type": "prod",
          "spec": "*",
          "to": "/foo/selflink",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "/foo/glob",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/foo",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "/foo/glob/graceful-fs",
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "/foo/glob/inherits",
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "/foo/glob/minimatch",
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "/foo/glob/minimatch/lru-cache",
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "/foo/glob/minimatch/sigmund",
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "/foo/glob/once",
            },
          },
        },
        "selflink" => Link {
          "name": "selflink",
          "location": "/foo/selflink",
          "target": Object {
            "name": "selflink",
            "parent": undefined,
          },
          "edgesIn": Set {
            Edge {
              "name": "selflink",
              "type": "prod",
              "spec": "*",
              "from": "/foo",
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
      "to": "/@scope/y",
    },
    "foo" => Edge {
      "name": "foo",
      "type": "prod",
      "spec": "",
      "to": "/foo",
    },
  },
  "children": Map {
    "@scope/y" => Node {
      "name": "@scope/y",
      "location": "/@scope/y",
      "edgesIn": Set {
        Edge {
          "name": "@scope/y",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "type": "prod",
          "spec": "*",
          "to": "/foo",
        },
      },
    },
    "@scope/z" => Node {
      "name": "@scope/z",
      "location": "/@scope/z",
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "/@scope/z/glob",
        },
      },
      "children": Map {
        "glob" => Link {
          "name": "glob",
          "location": "/@scope/z/glob",
          "target": Object {
            "name": "glob",
            "parent": "/foo",
          },
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/@scope/z",
            },
          },
        },
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
      "edgesIn": Set {
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
        Edge {
          "name": "foo",
          "type": "prod",
          "spec": "*",
          "from": "/@scope/y",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "type": "prod",
          "spec": "4",
          "to": "/foo/glob",
        },
        "selflink" => Edge {
          "name": "selflink",
          "type": "prod",
          "spec": "*",
          "to": "/foo/selflink",
        },
      },
      "children": Map {
        "glob" => Node {
          "name": "glob",
          "location": "/foo/glob",
          "edgesIn": Set {
            Edge {
              "name": "glob",
              "type": "prod",
              "spec": "4",
              "from": "/foo",
            },
          },
          "children": Map {
            "graceful-fs" => Node {
              "name": "graceful-fs",
              "location": "/foo/glob/graceful-fs",
            },
            "inherits" => Node {
              "name": "inherits",
              "location": "/foo/glob/inherits",
            },
            "minimatch" => Node {
              "name": "minimatch",
              "location": "/foo/glob/minimatch",
              "children": Map {
                "lru-cache" => Node {
                  "name": "lru-cache",
                  "location": "/foo/glob/minimatch/lru-cache",
                },
                "sigmund" => Node {
                  "name": "sigmund",
                  "location": "/foo/glob/minimatch/sigmund",
                },
              },
            },
            "once" => Node {
              "name": "once",
              "location": "/foo/glob/once",
            },
          },
        },
        "selflink" => Link {
          "name": "selflink",
          "location": "/foo/selflink",
          "target": Object {
            "name": "selflink",
            "parent": undefined,
          },
          "edgesIn": Set {
            Edge {
              "name": "selflink",
              "type": "prod",
              "spec": "*",
              "from": "/foo",
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
  "children": Map {
    "bar" => Link {
      "name": "bar",
      "location": "/bar",
      "target": Object {
        "name": "bar",
        "parent": null,
      },
    },
    "foo" => Node {
      "name": "foo",
      "location": "/foo",
    },
  },
}
`

exports[`test/load-actual.js TAP workspace > loaded tree 1`] = `
Node {
  "name": "workspace",
  "location": "/",
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "type": "prod",
      "spec": "",
      "to": "/a",
    },
    "b" => Edge {
      "name": "b",
      "type": "prod",
      "spec": "",
      "to": "/b",
    },
    "c" => Edge {
      "name": "c",
      "type": "prod",
      "spec": "",
      "to": "/c",
    },
  },
  "children": Map {
    "a" => Link {
      "name": "a",
      "location": "/a",
      "target": Object {
        "name": "a",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "a",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      },
    },
    "b" => Link {
      "name": "b",
      "location": "/b",
      "target": Object {
        "name": "b",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "b",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      },
    },
    "c" => Link {
      "name": "c",
      "location": "/c",
      "target": Object {
        "name": "c",
        "parent": null,
      },
      "edgesIn": Set {
        Edge {
          "name": "c",
          "type": "prod",
          "spec": "",
          "from": "/",
        },
      },
    },
  },
}
`

/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/load-virtual.js TAP load from cwd > loaded virtual tree from fixture 1`] = `
Node {
  "children": Map {
    "abbrev" => Node {
      "children": Map {
        "@scope/name" => Node {
          "children": Map {
            "@otherscope/othername" => Node {
              "edgesIn": Set {
                Edge {
                  "error": "INVALID",
                  "from": "/abbrev/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "fake resolved value",
                  "type": "prod",
                },
              },
              "location": "/abbrev/@scope/name/@otherscope/othername",
              "name": "@otherscope/othername",
              "resolved": "fake resolved value",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "/abbrev",
              "name": "@scope/name",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => Edge {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "fake resolved value",
              "to": "/abbrev/@scope/name/@otherscope/othername",
              "type": "prod",
            },
          },
          "location": "/abbrev/@scope/name",
          "name": "@scope/name",
          "resolved": undefined,
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@scope/name" => Edge {
          "name": "@scope/name",
          "spec": "",
          "to": "/abbrev/@scope/name",
          "type": "prod",
        },
      },
      "location": "/abbrev",
      "name": "abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "balanced-match" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
    },
    "brace-expansion" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "/balanced-match",
          "type": "prod",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "/concat-map",
          "type": "prod",
        },
      },
      "location": "/brace-expansion",
      "name": "brace-expansion",
      "optional": true,
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
    },
    "bundler" => Node {
      "children": Map {
        "a" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "/bundler",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "/bundler/b",
              "type": "prod",
            },
          },
          "location": "/bundler/a",
          "name": "a",
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
        },
        "b" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "/bundler/a",
              "name": "b",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "spec": "",
              "to": "/bundler/c",
              "type": "prod",
            },
          },
          "location": "/bundler/b",
          "name": "b",
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
        },
        "c" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "/bundler/b",
              "name": "c",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "/bundler/c",
          "name": "c",
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "bundler",
          "spec": "1.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "/bundler/a",
          "type": "prod",
        },
      },
      "location": "/bundler",
      "name": "bundler",
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
    },
    "concat-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "/concat-map",
      "name": "concat-map",
      "optional": true,
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
    },
    "fs.realpath" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
    },
    "full-git-url" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "full-git-url",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "type": "prod",
        },
      },
      "location": "/full-git-url",
      "name": "full-git-url",
      "resolved": "git+https://github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "ghshort",
          "spec": "github:isaacs/abbrev-js",
          "type": "prod",
        },
      },
      "location": "/ghshort",
      "name": "ghshort",
      "resolved": "github:isaacs/abbrev-js#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => Node {
      "location": "/ghtgz",
      "name": "ghtgz",
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "/fs.realpath",
          "type": "prod",
        },
        "inflight" => Edge {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "/inflight",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "2",
          "to": "/inherits",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "/minimatch",
          "type": "prod",
        },
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "/once",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "/glob",
      "name": "glob",
      "optional": true,
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "/wrappy",
          "type": "prod",
        },
      },
      "location": "/inflight",
      "name": "inflight",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
    },
    "inherits" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "/inherits",
      "name": "inherits",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
    },
    "minimatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "/brace-expansion",
          "type": "prod",
        },
      },
      "location": "/minimatch",
      "name": "minimatch",
      "optional": true,
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
    },
    "old" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "old",
          "spec": "npm:abbrev@^1.0.3",
          "type": "prod",
        },
      },
      "location": "/old",
      "name": "old",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "/wrappy",
          "type": "prod",
        },
      },
      "location": "/once",
      "name": "once",
      "resolved": "/Users/isaacs/dev/npm/arborist/js/once/once-1.4.0.tgz",
    },
    "path-is-absolute" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
    },
    "pinned" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "pinned",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "/pinned",
      "name": "pinned",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "reg" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "reg",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "/reg",
      "name": "reg",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "remote" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "remote",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "/remote",
      "name": "remote",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "rimraf" => Node {
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "/glob",
          "type": "prod",
        },
      },
      "location": "/rimraf",
      "name": "rimraf",
      "resolved": "/Users/isaacs/dev/npm/arborist/js/rimraf/rimraf-2.6.3.tgz",
    },
    "symlink" => Link {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "symlink",
          "spec": "file:./abbrev-link-target",
          "type": "prod",
        },
      },
      "location": "/symlink",
      "name": "symlink",
      "resolved": "/Users/isaacs/dev/npm/arborist/test/fixtures/install-types/abbrev-link-target",
      "target": Object {
        "name": "abbrev-link-target",
        "parent": null,
      },
    },
    "tarball" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "tarball",
          "spec": "file:abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "/tarball",
      "name": "tarball",
      "resolved": "/Users/isaacs/dev/npm/arborist/test/fixtures/install-types/abbrev-1.1.1.tgz",
    },
    "unhosted-git" => Node {
      "location": "/unhosted-git",
      "name": "unhosted-git",
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "/wrappy",
      "name": "wrappy",
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "/abbrev",
      "type": "prod",
    },
    "bundler" => Edge {
      "name": "bundler",
      "spec": "1.2.3",
      "to": "/bundler",
      "type": "prod",
    },
    "full-git-url" => Edge {
      "name": "full-git-url",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "/full-git-url",
      "type": "prod",
    },
    "ghshort" => Edge {
      "name": "ghshort",
      "spec": "github:isaacs/abbrev-js",
      "to": "/ghshort",
      "type": "prod",
    },
    "old" => Edge {
      "name": "old",
      "spec": "npm:abbrev@^1.0.3",
      "to": "/old",
      "type": "prod",
    },
    "pinned" => Edge {
      "name": "pinned",
      "spec": "npm:abbrev@^1.1.1",
      "to": "/pinned",
      "type": "prod",
    },
    "reg" => Edge {
      "name": "reg",
      "spec": "npm:abbrev@^1.1.1",
      "to": "/reg",
      "type": "prod",
    },
    "remote" => Edge {
      "name": "remote",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "/remote",
      "type": "prod",
    },
    "symlink" => Edge {
      "name": "symlink",
      "spec": "file:./abbrev-link-target",
      "to": "/symlink",
      "type": "prod",
    },
    "tarball" => Edge {
      "name": "tarball",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "/tarball",
      "type": "prod",
    },
  },
  "location": "/",
  "name": "a",
  "resolved": undefined,
}
`

exports[`test/load-virtual.js TAP load from fixture > loaded virtual tree from fixture 1`] = `
Node {
  "children": Map {
    "abbrev" => Node {
      "children": Map {
        "@scope/name" => Node {
          "children": Map {
            "@otherscope/othername" => Node {
              "edgesIn": Set {
                Edge {
                  "error": "INVALID",
                  "from": "/abbrev/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "fake resolved value",
                  "type": "prod",
                },
              },
              "location": "/abbrev/@scope/name/@otherscope/othername",
              "name": "@otherscope/othername",
              "resolved": "fake resolved value",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "/abbrev",
              "name": "@scope/name",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => Edge {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "fake resolved value",
              "to": "/abbrev/@scope/name/@otherscope/othername",
              "type": "prod",
            },
          },
          "location": "/abbrev/@scope/name",
          "name": "@scope/name",
          "resolved": undefined,
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@scope/name" => Edge {
          "name": "@scope/name",
          "spec": "",
          "to": "/abbrev/@scope/name",
          "type": "prod",
        },
      },
      "location": "/abbrev",
      "name": "abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "balanced-match" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
    },
    "brace-expansion" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "/balanced-match",
          "type": "prod",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "/concat-map",
          "type": "prod",
        },
      },
      "location": "/brace-expansion",
      "name": "brace-expansion",
      "optional": true,
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
    },
    "bundler" => Node {
      "children": Map {
        "a" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "/bundler",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "/bundler/b",
              "type": "prod",
            },
          },
          "location": "/bundler/a",
          "name": "a",
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
        },
        "b" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "/bundler/a",
              "name": "b",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "spec": "",
              "to": "/bundler/c",
              "type": "prod",
            },
          },
          "location": "/bundler/b",
          "name": "b",
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
        },
        "c" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "/bundler/b",
              "name": "c",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "/bundler/c",
          "name": "c",
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "bundler",
          "spec": "1.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "/bundler/a",
          "type": "prod",
        },
      },
      "location": "/bundler",
      "name": "bundler",
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
    },
    "concat-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "/concat-map",
      "name": "concat-map",
      "optional": true,
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
    },
    "fs.realpath" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
    },
    "full-git-url" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "full-git-url",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "type": "prod",
        },
      },
      "location": "/full-git-url",
      "name": "full-git-url",
      "resolved": "git+https://github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "ghshort",
          "spec": "github:isaacs/abbrev-js",
          "type": "prod",
        },
      },
      "location": "/ghshort",
      "name": "ghshort",
      "resolved": "github:isaacs/abbrev-js#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => Node {
      "location": "/ghtgz",
      "name": "ghtgz",
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "/fs.realpath",
          "type": "prod",
        },
        "inflight" => Edge {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "/inflight",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "2",
          "to": "/inherits",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "/minimatch",
          "type": "prod",
        },
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "/once",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "/glob",
      "name": "glob",
      "optional": true,
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "/wrappy",
          "type": "prod",
        },
      },
      "location": "/inflight",
      "name": "inflight",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
    },
    "inherits" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "/inherits",
      "name": "inherits",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
    },
    "minimatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "/brace-expansion",
          "type": "prod",
        },
      },
      "location": "/minimatch",
      "name": "minimatch",
      "optional": true,
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
    },
    "old" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "old",
          "spec": "npm:abbrev@^1.0.3",
          "type": "prod",
        },
      },
      "location": "/old",
      "name": "old",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "/wrappy",
          "type": "prod",
        },
      },
      "location": "/once",
      "name": "once",
      "resolved": "/Users/isaacs/dev/npm/arborist/js/once/once-1.4.0.tgz",
    },
    "path-is-absolute" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
    },
    "pinned" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "pinned",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "/pinned",
      "name": "pinned",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "reg" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "reg",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "/reg",
      "name": "reg",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "remote" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "remote",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "/remote",
      "name": "remote",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "rimraf" => Node {
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "/glob",
          "type": "prod",
        },
      },
      "location": "/rimraf",
      "name": "rimraf",
      "resolved": "/Users/isaacs/dev/npm/arborist/js/rimraf/rimraf-2.6.3.tgz",
    },
    "symlink" => Link {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "symlink",
          "spec": "file:./abbrev-link-target",
          "type": "prod",
        },
      },
      "location": "/symlink",
      "name": "symlink",
      "resolved": "/Users/isaacs/dev/npm/arborist/test/fixtures/install-types/abbrev-link-target",
      "target": Object {
        "name": "abbrev-link-target",
        "parent": null,
      },
    },
    "tarball" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "tarball",
          "spec": "file:abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "/tarball",
      "name": "tarball",
      "resolved": "/Users/isaacs/dev/npm/arborist/test/fixtures/install-types/abbrev-1.1.1.tgz",
    },
    "unhosted-git" => Node {
      "location": "/unhosted-git",
      "name": "unhosted-git",
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "/wrappy",
      "name": "wrappy",
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "/abbrev",
      "type": "prod",
    },
    "bundler" => Edge {
      "name": "bundler",
      "spec": "1.2.3",
      "to": "/bundler",
      "type": "prod",
    },
    "full-git-url" => Edge {
      "name": "full-git-url",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "/full-git-url",
      "type": "prod",
    },
    "ghshort" => Edge {
      "name": "ghshort",
      "spec": "github:isaacs/abbrev-js",
      "to": "/ghshort",
      "type": "prod",
    },
    "old" => Edge {
      "name": "old",
      "spec": "npm:abbrev@^1.0.3",
      "to": "/old",
      "type": "prod",
    },
    "pinned" => Edge {
      "name": "pinned",
      "spec": "npm:abbrev@^1.1.1",
      "to": "/pinned",
      "type": "prod",
    },
    "reg" => Edge {
      "name": "reg",
      "spec": "npm:abbrev@^1.1.1",
      "to": "/reg",
      "type": "prod",
    },
    "remote" => Edge {
      "name": "remote",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "/remote",
      "type": "prod",
    },
    "symlink" => Edge {
      "name": "symlink",
      "spec": "file:./abbrev-link-target",
      "to": "/symlink",
      "type": "prod",
    },
    "tarball" => Edge {
      "name": "tarball",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "/tarball",
      "type": "prod",
    },
  },
  "location": "/",
  "name": "install-types",
  "resolved": undefined,
}
`

exports[`test/load-virtual.js TAP load from npm-shrinkwrap.json > loaded virtual tree from fixture 1`] = `
Node {
  "children": Map {
    "abbrev" => Node {
      "children": Map {
        "@scope/name" => Node {
          "children": Map {
            "@otherscope/othername" => Node {
              "edgesIn": Set {
                Edge {
                  "error": "INVALID",
                  "from": "/abbrev/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "fake resolved value",
                  "type": "prod",
                },
              },
              "location": "/abbrev/@scope/name/@otherscope/othername",
              "name": "@otherscope/othername",
              "resolved": "fake resolved value",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "/abbrev",
              "name": "@scope/name",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => Edge {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "fake resolved value",
              "to": "/abbrev/@scope/name/@otherscope/othername",
              "type": "prod",
            },
          },
          "location": "/abbrev/@scope/name",
          "name": "@scope/name",
          "resolved": undefined,
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@scope/name" => Edge {
          "name": "@scope/name",
          "spec": "",
          "to": "/abbrev/@scope/name",
          "type": "prod",
        },
      },
      "location": "/abbrev",
      "name": "abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "balanced-match" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
    },
    "brace-expansion" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "/balanced-match",
          "type": "prod",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "/concat-map",
          "type": "prod",
        },
      },
      "location": "/brace-expansion",
      "name": "brace-expansion",
      "optional": true,
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
    },
    "bundler" => Node {
      "children": Map {
        "a" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "/bundler",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "/bundler/b",
              "type": "prod",
            },
          },
          "location": "/bundler/a",
          "name": "a",
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
        },
        "b" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "/bundler/a",
              "name": "b",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "spec": "",
              "to": "/bundler/c",
              "type": "prod",
            },
          },
          "location": "/bundler/b",
          "name": "b",
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
        },
        "c" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "/bundler/b",
              "name": "c",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "/bundler/c",
          "name": "c",
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "bundler",
          "spec": "1.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "/bundler/a",
          "type": "prod",
        },
      },
      "location": "/bundler",
      "name": "bundler",
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
    },
    "concat-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "/concat-map",
      "name": "concat-map",
      "optional": true,
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
    },
    "fs.realpath" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
    },
    "full-git-url" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "full-git-url",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "type": "prod",
        },
      },
      "location": "/full-git-url",
      "name": "full-git-url",
      "resolved": "git+https://github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "ghshort",
          "spec": "github:isaacs/abbrev-js",
          "type": "prod",
        },
      },
      "location": "/ghshort",
      "name": "ghshort",
      "resolved": "github:isaacs/abbrev-js#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => Node {
      "location": "/ghtgz",
      "name": "ghtgz",
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "/fs.realpath",
          "type": "prod",
        },
        "inflight" => Edge {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "/inflight",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "2",
          "to": "/inherits",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "/minimatch",
          "type": "prod",
        },
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "/once",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "/glob",
      "name": "glob",
      "optional": true,
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "/wrappy",
          "type": "prod",
        },
      },
      "location": "/inflight",
      "name": "inflight",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
    },
    "inherits" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "/inherits",
      "name": "inherits",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
    },
    "minimatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "/brace-expansion",
          "type": "prod",
        },
      },
      "location": "/minimatch",
      "name": "minimatch",
      "optional": true,
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
    },
    "old" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "old",
          "spec": "npm:abbrev@^1.0.3",
          "type": "prod",
        },
      },
      "location": "/old",
      "name": "old",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "/wrappy",
          "type": "prod",
        },
      },
      "location": "/once",
      "name": "once",
      "resolved": "/Users/isaacs/dev/npm/arborist/js/once/once-1.4.0.tgz",
    },
    "path-is-absolute" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
    },
    "pinned" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "pinned",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "/pinned",
      "name": "pinned",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "reg" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "reg",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "/reg",
      "name": "reg",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "remote" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "remote",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "/remote",
      "name": "remote",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "rimraf" => Node {
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "/glob",
          "type": "prod",
        },
      },
      "location": "/rimraf",
      "name": "rimraf",
      "resolved": "/Users/isaacs/dev/npm/arborist/js/rimraf/rimraf-2.6.3.tgz",
    },
    "symlink" => Link {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "symlink",
          "spec": "file:./abbrev-link-target",
          "type": "prod",
        },
      },
      "location": "/symlink",
      "name": "symlink",
      "resolved": "/Users/isaacs/dev/npm/arborist/test/fixtures/install-types/abbrev-link-target",
      "target": Object {
        "name": "abbrev-link-target",
        "parent": null,
      },
    },
    "tarball" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "tarball",
          "spec": "file:abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "/tarball",
      "name": "tarball",
      "resolved": "/Users/isaacs/dev/npm/arborist/test/fixtures/install-types/abbrev-1.1.1.tgz",
    },
    "unhosted-git" => Node {
      "location": "/unhosted-git",
      "name": "unhosted-git",
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "/wrappy",
      "name": "wrappy",
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "/abbrev",
      "type": "prod",
    },
    "bundler" => Edge {
      "name": "bundler",
      "spec": "1.2.3",
      "to": "/bundler",
      "type": "prod",
    },
    "full-git-url" => Edge {
      "name": "full-git-url",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "/full-git-url",
      "type": "prod",
    },
    "ghshort" => Edge {
      "name": "ghshort",
      "spec": "github:isaacs/abbrev-js",
      "to": "/ghshort",
      "type": "prod",
    },
    "old" => Edge {
      "name": "old",
      "spec": "npm:abbrev@^1.0.3",
      "to": "/old",
      "type": "prod",
    },
    "pinned" => Edge {
      "name": "pinned",
      "spec": "npm:abbrev@^1.1.1",
      "to": "/pinned",
      "type": "prod",
    },
    "reg" => Edge {
      "name": "reg",
      "spec": "npm:abbrev@^1.1.1",
      "to": "/reg",
      "type": "prod",
    },
    "remote" => Edge {
      "name": "remote",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "/remote",
      "type": "prod",
    },
    "symlink" => Edge {
      "name": "symlink",
      "spec": "file:./abbrev-link-target",
      "to": "/symlink",
      "type": "prod",
    },
    "tarball" => Edge {
      "name": "tarball",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "/tarball",
      "type": "prod",
    },
  },
  "location": "/",
  "name": "install-types",
  "resolved": undefined,
}
`

exports[`test/load-virtual.js TAP load without a root package.json is fine > loaded virtual no package json 1`] = `
Node {
  "children": Map {
    "abbrev" => Node {
      "children": Map {
        "@scope/name" => Node {
          "children": Map {
            "@otherscope/othername" => Node {
              "edgesIn": Set {
                Edge {
                  "error": "INVALID",
                  "from": "/abbrev/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "fake resolved value",
                  "type": "prod",
                },
              },
              "location": "/abbrev/@scope/name/@otherscope/othername",
              "name": "@otherscope/othername",
              "resolved": "fake resolved value",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "/abbrev",
              "name": "@scope/name",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => Edge {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "fake resolved value",
              "to": "/abbrev/@scope/name/@otherscope/othername",
              "type": "prod",
            },
          },
          "location": "/abbrev/@scope/name",
          "name": "@scope/name",
          "resolved": undefined,
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "abbrev",
          "spec": "1.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@scope/name" => Edge {
          "name": "@scope/name",
          "spec": "",
          "to": "/abbrev/@scope/name",
          "type": "prod",
        },
      },
      "location": "/abbrev",
      "name": "abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "balanced-match" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "balanced-match",
          "spec": "1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
    },
    "brace-expansion" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "brace-expansion",
          "spec": "1.1.11",
          "type": "prod",
        },
        Edge {
          "from": "/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "/balanced-match",
          "type": "prod",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "/concat-map",
          "type": "prod",
        },
      },
      "location": "/brace-expansion",
      "name": "brace-expansion",
      "optional": true,
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
    },
    "bundler" => Node {
      "children": Map {
        "a" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "/bundler",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "/bundler/b",
              "type": "prod",
            },
          },
          "location": "/bundler/a",
          "name": "a",
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
        },
        "b" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "/bundler/a",
              "name": "b",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "spec": "",
              "to": "/bundler/c",
              "type": "prod",
            },
          },
          "location": "/bundler/b",
          "name": "b",
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
        },
        "c" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "/bundler/b",
              "name": "c",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "/bundler/c",
          "name": "c",
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "bundler",
          "spec": "1.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "/bundler/a",
          "type": "prod",
        },
      },
      "location": "/bundler",
      "name": "bundler",
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
    },
    "concat-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
        Edge {
          "from": "/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "/concat-map",
      "name": "concat-map",
      "optional": true,
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
    },
    "fs.realpath" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "fs.realpath",
          "spec": "1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
    },
    "full-git-url" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "full-git-url",
          "spec": "git+https://github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
          "type": "prod",
        },
      },
      "location": "/full-git-url",
      "name": "full-git-url",
      "resolved": "git+https://github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "ghshort",
          "spec": "github:isaacs/abbrev-js#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
          "type": "prod",
        },
      },
      "location": "/ghshort",
      "name": "ghshort",
      "resolved": "github:isaacs/abbrev-js#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "ghtgz",
          "spec": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
          "type": "prod",
        },
      },
      "location": "/ghtgz",
      "name": "ghtgz",
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "glob",
          "spec": "7.1.4",
          "type": "prod",
        },
        Edge {
          "from": "/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "/fs.realpath",
          "type": "prod",
        },
        "inflight" => Edge {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "/inflight",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "2",
          "to": "/inherits",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "/minimatch",
          "type": "prod",
        },
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "/once",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "/glob",
      "name": "glob",
      "optional": true,
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "inflight",
          "spec": "1.0.6",
          "type": "prod",
        },
        Edge {
          "from": "/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "/wrappy",
          "type": "prod",
        },
      },
      "location": "/inflight",
      "name": "inflight",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
    },
    "inherits" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "inherits",
          "spec": "2.0.4",
          "type": "prod",
        },
        Edge {
          "from": "/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "/inherits",
      "name": "inherits",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
    },
    "minimatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "minimatch",
          "spec": "3.0.4",
          "type": "prod",
        },
        Edge {
          "from": "/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "/brace-expansion",
          "type": "prod",
        },
      },
      "location": "/minimatch",
      "name": "minimatch",
      "optional": true,
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
    },
    "old" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "old",
          "spec": "npm:abbrev@1.0.3",
          "type": "prod",
        },
      },
      "location": "/old",
      "name": "old",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "once",
          "spec": "file:../../../js/once/once-1.4.0.tgz",
          "type": "prod",
        },
        Edge {
          "from": "/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "/wrappy",
          "type": "prod",
        },
      },
      "location": "/once",
      "name": "once",
      "resolved": "/Users/isaacs/dev/npm/arborist/js/once/once-1.4.0.tgz",
    },
    "path-is-absolute" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "path-is-absolute",
          "spec": "1.0.1",
          "type": "prod",
        },
        Edge {
          "from": "/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
    },
    "pinned" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "pinned",
          "spec": "npm:abbrev@1.1.1",
          "type": "prod",
        },
      },
      "location": "/pinned",
      "name": "pinned",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "reg" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "reg",
          "spec": "npm:abbrev@1.1.1",
          "type": "prod",
        },
      },
      "location": "/reg",
      "name": "reg",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "remote" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "remote",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "/remote",
      "name": "remote",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "rimraf" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "rimraf",
          "spec": "file:../../../js/rimraf/rimraf-2.6.3.tgz",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "/glob",
          "type": "prod",
        },
      },
      "location": "/rimraf",
      "name": "rimraf",
      "resolved": "/Users/isaacs/dev/npm/arborist/js/rimraf/rimraf-2.6.3.tgz",
    },
    "symlink" => Link {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "symlink",
          "spec": "file:./abbrev-link-target",
          "type": "prod",
        },
      },
      "location": "/symlink",
      "name": "symlink",
      "resolved": "/Users/isaacs/dev/npm/arborist/test/fixtures/install-types/abbrev-link-target",
      "target": Object {
        "name": "abbrev-link-target",
        "parent": null,
      },
    },
    "tarball" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "tarball",
          "spec": "file:abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "/tarball",
      "name": "tarball",
      "resolved": "/Users/isaacs/dev/npm/arborist/test/fixtures/install-types/abbrev-1.1.1.tgz",
    },
    "unhosted-git" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "unhosted-git",
          "spec": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
          "type": "prod",
        },
      },
      "location": "/unhosted-git",
      "name": "unhosted-git",
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "/",
          "name": "wrappy",
          "spec": "1.0.2",
          "type": "prod",
        },
        Edge {
          "from": "/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "/wrappy",
      "name": "wrappy",
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "1.1.1",
      "to": "/abbrev",
      "type": "prod",
    },
    "balanced-match" => Edge {
      "name": "balanced-match",
      "spec": "1.0.0",
      "to": "/balanced-match",
      "type": "prod",
    },
    "brace-expansion" => Edge {
      "name": "brace-expansion",
      "spec": "1.1.11",
      "to": "/brace-expansion",
      "type": "prod",
    },
    "bundler" => Edge {
      "name": "bundler",
      "spec": "1.2.3",
      "to": "/bundler",
      "type": "prod",
    },
    "concat-map" => Edge {
      "name": "concat-map",
      "spec": "0.0.1",
      "to": "/concat-map",
      "type": "prod",
    },
    "fs.realpath" => Edge {
      "name": "fs.realpath",
      "spec": "1.0.0",
      "to": "/fs.realpath",
      "type": "prod",
    },
    "full-git-url" => Edge {
      "name": "full-git-url",
      "spec": "git+https://github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
      "to": "/full-git-url",
      "type": "prod",
    },
    "ghshort" => Edge {
      "name": "ghshort",
      "spec": "github:isaacs/abbrev-js#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
      "to": "/ghshort",
      "type": "prod",
    },
    "ghtgz" => Edge {
      "name": "ghtgz",
      "spec": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
      "to": "/ghtgz",
      "type": "prod",
    },
    "glob" => Edge {
      "name": "glob",
      "spec": "7.1.4",
      "to": "/glob",
      "type": "prod",
    },
    "inflight" => Edge {
      "name": "inflight",
      "spec": "1.0.6",
      "to": "/inflight",
      "type": "prod",
    },
    "inherits" => Edge {
      "name": "inherits",
      "spec": "2.0.4",
      "to": "/inherits",
      "type": "prod",
    },
    "minimatch" => Edge {
      "name": "minimatch",
      "spec": "3.0.4",
      "to": "/minimatch",
      "type": "prod",
    },
    "old" => Edge {
      "name": "old",
      "spec": "npm:abbrev@1.0.3",
      "to": "/old",
      "type": "prod",
    },
    "once" => Edge {
      "name": "once",
      "spec": "file:../../../js/once/once-1.4.0.tgz",
      "to": "/once",
      "type": "prod",
    },
    "path-is-absolute" => Edge {
      "name": "path-is-absolute",
      "spec": "1.0.1",
      "to": "/path-is-absolute",
      "type": "prod",
    },
    "pinned" => Edge {
      "name": "pinned",
      "spec": "npm:abbrev@1.1.1",
      "to": "/pinned",
      "type": "prod",
    },
    "reg" => Edge {
      "name": "reg",
      "spec": "npm:abbrev@1.1.1",
      "to": "/reg",
      "type": "prod",
    },
    "remote" => Edge {
      "name": "remote",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "/remote",
      "type": "prod",
    },
    "rimraf" => Edge {
      "name": "rimraf",
      "spec": "file:../../../js/rimraf/rimraf-2.6.3.tgz",
      "to": "/rimraf",
      "type": "prod",
    },
    "symlink" => Edge {
      "name": "symlink",
      "spec": "file:./abbrev-link-target",
      "to": "/symlink",
      "type": "prod",
    },
    "tarball" => Edge {
      "name": "tarball",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "/tarball",
      "type": "prod",
    },
    "unhosted-git" => Edge {
      "name": "unhosted-git",
      "spec": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
      "to": "/unhosted-git",
      "type": "prod",
    },
    "wrappy" => Edge {
      "name": "wrappy",
      "spec": "1.0.2",
      "to": "/wrappy",
      "type": "prod",
    },
  },
  "location": "/",
  "name": "install-types",
  "resolved": undefined,
}
`

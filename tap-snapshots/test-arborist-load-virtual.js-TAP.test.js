/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/arborist/load-virtual.js TAP load a tree with optional and dev dependencies > loaded virtual tree with dev/optional deps 1`] = `
Node {
  "children": Map {
    "diff-frag" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tcompare",
          "name": "diff-frag",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/diff-frag",
      "name": "diff-frag",
      "resolved": "https://registry.npmjs.org/diff-frag/-/diff-frag-1.0.1.tgz",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "inflight",
          "spec": "^1.0.6",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "once",
          "spec": "^1.4.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
    },
    "tcompare" => Node {
      "dev": true,
      "edgesOut": Map {
        "diff-frag" => Edge {
          "name": "diff-frag",
          "spec": "^1.0.1",
          "to": "node_modules/diff-frag",
          "type": "prod",
        },
      },
      "location": "node_modules/tcompare",
      "name": "tcompare",
      "resolved": "https://registry.npmjs.org/tcompare/-/tcompare-4.0.1.tgz",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "inflight" => Edge {
      "name": "inflight",
      "spec": "^1.0.6",
      "to": "node_modules/inflight",
      "type": "optional",
    },
    "once" => Edge {
      "name": "once",
      "spec": "^1.4.0",
      "to": "node_modules/once",
      "type": "prod",
    },
  },
  "location": "",
  "name": "dev-deps",
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load a tree with some links to nodes outside of node_modules > loaded virtual tree with fsParents 1`] = `
Node {
  "children": Map {
    "@scope/x" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "@scope/x",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/x",
      "name": "@scope/x",
      "resolved": "file:../../.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
      "target": Object {
        "name": "@scope/x",
        "parent": "node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0",
      },
    },
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "a",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "resolved": "file:../.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
      "target": Object {
        "name": "a",
        "parent": "node_modules/.pnpm/registry.npmjs.org/a/1.0.0",
      },
    },
  },
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "spec": "",
      "to": "node_modules/@scope/x",
      "type": "prod",
    },
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "node_modules/a",
      "type": "prod",
    },
  },
  "location": "",
  "name": "pnpm",
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load from cwd > loaded virtual tree from fixture 1`] = `
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
                  "from": "node_modules/abbrev/node_modules/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "1.2.3",
                  "type": "prod",
                },
              },
              "location": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "name": "@otherscope/othername",
              "resolved": "fake resolved value",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => Edge {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "1.2.3",
              "to": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "type": "prod",
            },
            "a-thing-which-is-not-here" => Edge {
              "error": "MISSING",
              "name": "a-thing-which-is-not-here",
              "spec": "2.4.5",
              "to": null,
              "type": "prod",
            },
          },
          "location": "node_modules/abbrev/node_modules/@scope/name",
          "name": "@scope/name",
          "resolved": null,
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "balanced-match" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
    },
    "brace-expansion" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "node_modules/concat-map",
          "type": "prod",
        },
      },
      "location": "node_modules/brace-expansion",
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
              "from": "node_modules/bundler",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "node_modules/bundler/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/a",
          "name": "a",
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
        },
        "b" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/a",
              "name": "b",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "spec": "",
              "to": "node_modules/bundler/node_modules/c",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/b",
          "name": "b",
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
        },
        "c" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/b",
              "name": "c",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/c",
          "name": "c",
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "bundler",
          "spec": "1.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "node_modules/bundler/node_modules/a",
          "type": "prod",
        },
      },
      "location": "node_modules/bundler",
      "name": "bundler",
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
    },
    "concat-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "optional": true,
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
    },
    "fs.realpath" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
    },
    "full-git-url" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "full-git-url",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "type": "prod",
        },
      },
      "location": "node_modules/full-git-url",
      "name": "full-git-url",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "ghshort",
          "spec": "github:isaacs/abbrev-js",
          "type": "prod",
        },
      },
      "location": "node_modules/ghshort",
      "name": "ghshort",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => Node {
      "location": "node_modules/ghtgz",
      "name": "ghtgz",
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => Edge {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "node_modules/inflight",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "2",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "node_modules/glob",
      "name": "glob",
      "optional": true,
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
    },
    "inherits" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "node_modules/inherits",
      "name": "inherits",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
    },
    "minimatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "optional": true,
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
    },
    "old" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "old",
          "spec": "npm:abbrev@^1.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/old",
      "name": "old",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "resolved": "file:../../once-1.4.0.tgz",
    },
    "path-is-absolute" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
    },
    "pinned" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "pinned",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/pinned",
      "name": "pinned",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "really-bad-invalid" => Node {
      "location": "node_modules/really-bad-invalid",
      "name": "really-bad-invalid",
      "resolved": null,
    },
    "reg" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "reg",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/reg",
      "name": "reg",
      "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
    },
    "remote" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "remote",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/remote",
      "name": "remote",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "rimraf" => Node {
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "optional",
        },
      },
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "resolved": "file:../../rimraf-2.6.3.tgz",
    },
    "symlink" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "symlink",
          "spec": "file:./abbrev-link-target",
          "type": "prod",
        },
      },
      "location": "node_modules/symlink",
      "name": "symlink",
      "resolved": "file:../../abbrev-link-target",
      "target": Object {
        "name": "abbrev-link-target",
        "parent": null,
      },
    },
    "symlink-in-tree" => Link {
      "location": "node_modules/symlink-in-tree",
      "name": "symlink-in-tree",
      "resolved": "file:../abbrev",
      "target": Object {
        "name": "abbrev",
        "parent": "",
      },
    },
    "tarball" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "tarball",
          "spec": "file:abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/tarball",
      "name": "tarball",
      "resolved": "file:../../abbrev-1.1.1.tgz",
    },
    "tarball-no-integrity" => Node {
      "dev": true,
      "location": "node_modules/tarball-no-integrity",
      "name": "tarball-no-integrity",
      "resolved": "file:../../abbrev-1.1.1.tgz",
    },
    "unhosted-git" => Node {
      "location": "node_modules/unhosted-git",
      "name": "unhosted-git",
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "bundler" => Edge {
      "name": "bundler",
      "spec": "1.2.3",
      "to": "node_modules/bundler",
      "type": "prod",
    },
    "full-git-url" => Edge {
      "name": "full-git-url",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "node_modules/full-git-url",
      "type": "prod",
    },
    "ghshort" => Edge {
      "name": "ghshort",
      "spec": "github:isaacs/abbrev-js",
      "to": "node_modules/ghshort",
      "type": "prod",
    },
    "old" => Edge {
      "name": "old",
      "spec": "npm:abbrev@^1.0.3",
      "to": "node_modules/old",
      "type": "prod",
    },
    "pinned" => Edge {
      "name": "pinned",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/pinned",
      "type": "prod",
    },
    "reg" => Edge {
      "name": "reg",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/reg",
      "type": "prod",
    },
    "remote" => Edge {
      "name": "remote",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "node_modules/remote",
      "type": "prod",
    },
    "symlink" => Edge {
      "name": "symlink",
      "spec": "file:./abbrev-link-target",
      "to": "node_modules/symlink",
      "type": "prod",
    },
    "tarball" => Edge {
      "name": "tarball",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "node_modules/tarball",
      "type": "prod",
    },
  },
  "location": "",
  "name": "install-types",
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load from fixture > loaded virtual tree from fixture 1`] = `
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
                  "from": "node_modules/abbrev/node_modules/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "1.2.3",
                  "type": "prod",
                },
              },
              "location": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "name": "@otherscope/othername",
              "resolved": "fake resolved value",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => Edge {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "1.2.3",
              "to": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "type": "prod",
            },
            "a-thing-which-is-not-here" => Edge {
              "error": "MISSING",
              "name": "a-thing-which-is-not-here",
              "spec": "2.4.5",
              "to": null,
              "type": "prod",
            },
          },
          "location": "node_modules/abbrev/node_modules/@scope/name",
          "name": "@scope/name",
          "resolved": null,
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "balanced-match" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
    },
    "brace-expansion" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "node_modules/concat-map",
          "type": "prod",
        },
      },
      "location": "node_modules/brace-expansion",
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
              "from": "node_modules/bundler",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "node_modules/bundler/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/a",
          "name": "a",
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
        },
        "b" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/a",
              "name": "b",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "spec": "",
              "to": "node_modules/bundler/node_modules/c",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/b",
          "name": "b",
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
        },
        "c" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/b",
              "name": "c",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/c",
          "name": "c",
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "bundler",
          "spec": "1.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "node_modules/bundler/node_modules/a",
          "type": "prod",
        },
      },
      "location": "node_modules/bundler",
      "name": "bundler",
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
    },
    "concat-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "optional": true,
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
    },
    "fs.realpath" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
    },
    "full-git-url" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "full-git-url",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "type": "prod",
        },
      },
      "location": "node_modules/full-git-url",
      "name": "full-git-url",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "ghshort",
          "spec": "github:isaacs/abbrev-js",
          "type": "prod",
        },
      },
      "location": "node_modules/ghshort",
      "name": "ghshort",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => Node {
      "location": "node_modules/ghtgz",
      "name": "ghtgz",
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => Edge {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "node_modules/inflight",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "2",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "node_modules/glob",
      "name": "glob",
      "optional": true,
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
    },
    "inherits" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "node_modules/inherits",
      "name": "inherits",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
    },
    "minimatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "optional": true,
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
    },
    "old" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "old",
          "spec": "npm:abbrev@^1.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/old",
      "name": "old",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "resolved": "file:../../once-1.4.0.tgz",
    },
    "path-is-absolute" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
    },
    "pinned" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "pinned",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/pinned",
      "name": "pinned",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "really-bad-invalid" => Node {
      "location": "node_modules/really-bad-invalid",
      "name": "really-bad-invalid",
      "resolved": null,
    },
    "reg" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "reg",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/reg",
      "name": "reg",
      "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
    },
    "remote" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "remote",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/remote",
      "name": "remote",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "rimraf" => Node {
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "optional",
        },
      },
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "resolved": "file:../../rimraf-2.6.3.tgz",
    },
    "symlink" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "symlink",
          "spec": "file:./abbrev-link-target",
          "type": "prod",
        },
      },
      "location": "node_modules/symlink",
      "name": "symlink",
      "resolved": "file:../../abbrev-link-target",
      "target": Object {
        "name": "abbrev-link-target",
        "parent": null,
      },
    },
    "symlink-in-tree" => Link {
      "location": "node_modules/symlink-in-tree",
      "name": "symlink-in-tree",
      "resolved": "file:../abbrev",
      "target": Object {
        "name": "abbrev",
        "parent": "",
      },
    },
    "tarball" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "tarball",
          "spec": "file:abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/tarball",
      "name": "tarball",
      "resolved": "file:../../abbrev-1.1.1.tgz",
    },
    "tarball-no-integrity" => Node {
      "dev": true,
      "location": "node_modules/tarball-no-integrity",
      "name": "tarball-no-integrity",
      "resolved": "file:../../abbrev-1.1.1.tgz",
    },
    "unhosted-git" => Node {
      "location": "node_modules/unhosted-git",
      "name": "unhosted-git",
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "bundler" => Edge {
      "name": "bundler",
      "spec": "1.2.3",
      "to": "node_modules/bundler",
      "type": "prod",
    },
    "full-git-url" => Edge {
      "name": "full-git-url",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "node_modules/full-git-url",
      "type": "prod",
    },
    "ghshort" => Edge {
      "name": "ghshort",
      "spec": "github:isaacs/abbrev-js",
      "to": "node_modules/ghshort",
      "type": "prod",
    },
    "old" => Edge {
      "name": "old",
      "spec": "npm:abbrev@^1.0.3",
      "to": "node_modules/old",
      "type": "prod",
    },
    "pinned" => Edge {
      "name": "pinned",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/pinned",
      "type": "prod",
    },
    "reg" => Edge {
      "name": "reg",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/reg",
      "type": "prod",
    },
    "remote" => Edge {
      "name": "remote",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "node_modules/remote",
      "type": "prod",
    },
    "symlink" => Edge {
      "name": "symlink",
      "spec": "file:./abbrev-link-target",
      "to": "node_modules/symlink",
      "type": "prod",
    },
    "tarball" => Edge {
      "name": "tarball",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "node_modules/tarball",
      "type": "prod",
    },
  },
  "location": "",
  "name": "install-types",
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load from npm-shrinkwrap.json > loaded virtual tree from fixture 1`] = `
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
                  "from": "node_modules/abbrev/node_modules/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "1.2.3",
                  "type": "prod",
                },
              },
              "location": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "name": "@otherscope/othername",
              "resolved": "fake resolved value",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => Edge {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "1.2.3",
              "to": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "type": "prod",
            },
            "a-thing-which-is-not-here" => Edge {
              "error": "MISSING",
              "name": "a-thing-which-is-not-here",
              "spec": "2.4.5",
              "to": null,
              "type": "prod",
            },
          },
          "location": "node_modules/abbrev/node_modules/@scope/name",
          "name": "@scope/name",
          "resolved": null,
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "balanced-match" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
    },
    "brace-expansion" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "node_modules/concat-map",
          "type": "prod",
        },
      },
      "location": "node_modules/brace-expansion",
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
              "from": "node_modules/bundler",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "node_modules/bundler/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/a",
          "name": "a",
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
        },
        "b" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/a",
              "name": "b",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "spec": "",
              "to": "node_modules/bundler/node_modules/c",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/b",
          "name": "b",
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
        },
        "c" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/b",
              "name": "c",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/c",
          "name": "c",
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "bundler",
          "spec": "1.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "node_modules/bundler/node_modules/a",
          "type": "prod",
        },
      },
      "location": "node_modules/bundler",
      "name": "bundler",
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
    },
    "concat-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "optional": true,
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
    },
    "fs.realpath" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
    },
    "full-git-url" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "full-git-url",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "type": "prod",
        },
      },
      "location": "node_modules/full-git-url",
      "name": "full-git-url",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "ghshort",
          "spec": "github:isaacs/abbrev-js",
          "type": "prod",
        },
      },
      "location": "node_modules/ghshort",
      "name": "ghshort",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => Node {
      "location": "node_modules/ghtgz",
      "name": "ghtgz",
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => Edge {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "node_modules/inflight",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "2",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "node_modules/glob",
      "name": "glob",
      "optional": true,
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
    },
    "inherits" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "node_modules/inherits",
      "name": "inherits",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
    },
    "minimatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "optional": true,
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
    },
    "old" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "old",
          "spec": "npm:abbrev@^1.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/old",
      "name": "old",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "resolved": "file:../../once-1.4.0.tgz",
    },
    "path-is-absolute" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
    },
    "pinned" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "pinned",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/pinned",
      "name": "pinned",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "really-bad-invalid" => Node {
      "location": "node_modules/really-bad-invalid",
      "name": "really-bad-invalid",
      "resolved": null,
    },
    "reg" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "reg",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/reg",
      "name": "reg",
      "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
    },
    "remote" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "remote",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/remote",
      "name": "remote",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "rimraf" => Node {
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "optional",
        },
      },
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "resolved": "file:../../rimraf-2.6.3.tgz",
    },
    "symlink" => Link {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "symlink",
          "spec": "file:./abbrev-link-target",
          "type": "prod",
        },
      },
      "location": "node_modules/symlink",
      "name": "symlink",
      "resolved": "file:../../abbrev-link-target",
      "target": Object {
        "name": "abbrev-link-target",
        "parent": null,
      },
    },
    "symlink-in-tree" => Link {
      "location": "node_modules/symlink-in-tree",
      "name": "symlink-in-tree",
      "resolved": "file:../abbrev",
      "target": Object {
        "name": "abbrev",
        "parent": "",
      },
    },
    "tarball" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "tarball",
          "spec": "file:abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/tarball",
      "name": "tarball",
      "resolved": "file:../../abbrev-1.1.1.tgz",
    },
    "tarball-no-integrity" => Node {
      "dev": true,
      "location": "node_modules/tarball-no-integrity",
      "name": "tarball-no-integrity",
      "resolved": "file:../../abbrev-1.1.1.tgz",
    },
    "unhosted-git" => Node {
      "location": "node_modules/unhosted-git",
      "name": "unhosted-git",
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "node_modules/abbrev",
      "type": "prod",
    },
    "bundler" => Edge {
      "name": "bundler",
      "spec": "1.2.3",
      "to": "node_modules/bundler",
      "type": "prod",
    },
    "full-git-url" => Edge {
      "name": "full-git-url",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "node_modules/full-git-url",
      "type": "prod",
    },
    "ghshort" => Edge {
      "name": "ghshort",
      "spec": "github:isaacs/abbrev-js",
      "to": "node_modules/ghshort",
      "type": "prod",
    },
    "old" => Edge {
      "name": "old",
      "spec": "npm:abbrev@^1.0.3",
      "to": "node_modules/old",
      "type": "prod",
    },
    "pinned" => Edge {
      "name": "pinned",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/pinned",
      "type": "prod",
    },
    "reg" => Edge {
      "name": "reg",
      "spec": "npm:abbrev@^1.1.1",
      "to": "node_modules/reg",
      "type": "prod",
    },
    "remote" => Edge {
      "name": "remote",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "node_modules/remote",
      "type": "prod",
    },
    "symlink" => Edge {
      "name": "symlink",
      "spec": "file:./abbrev-link-target",
      "to": "node_modules/symlink",
      "type": "prod",
    },
    "tarball" => Edge {
      "name": "tarball",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "node_modules/tarball",
      "type": "prod",
    },
  },
  "location": "",
  "name": "install-types",
  "resolved": null,
}
`

exports[`test/arborist/load-virtual.js TAP load without a root package.json is fine > loaded virtual no package json 1`] = `
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
                  "from": "node_modules/abbrev/node_modules/@scope/name",
                  "name": "@otherscope/othername",
                  "spec": "1.2.3",
                  "type": "prod",
                },
              },
              "location": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "name": "@otherscope/othername",
              "resolved": "fake resolved value",
            },
          },
          "edgesOut": Map {
            "@otherscope/othername" => Edge {
              "error": "INVALID",
              "name": "@otherscope/othername",
              "spec": "1.2.3",
              "to": "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername",
              "type": "prod",
            },
            "a-thing-which-is-not-here" => Edge {
              "error": "MISSING",
              "name": "a-thing-which-is-not-here",
              "spec": "2.4.5",
              "to": null,
              "type": "prod",
            },
          },
          "location": "node_modules/abbrev/node_modules/@scope/name",
          "name": "@scope/name",
          "resolved": null,
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "balanced-match" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "optional": true,
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
    },
    "brace-expansion" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "node_modules/concat-map",
          "type": "prod",
        },
      },
      "location": "node_modules/brace-expansion",
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
              "from": "node_modules/bundler",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "node_modules/bundler/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/a",
          "name": "a",
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
        },
        "b" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/a",
              "name": "b",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "spec": "",
              "to": "node_modules/bundler/node_modules/c",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/b",
          "name": "b",
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
        },
        "c" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "node_modules/bundler/node_modules/b",
              "name": "c",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/c",
          "name": "c",
          "resolved": "https://registry.internal/c/-/c-1.2.3.tgz",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "node_modules/bundler/node_modules/a",
          "type": "prod",
        },
      },
      "location": "node_modules/bundler",
      "name": "bundler",
      "resolved": "https://registry.internal/bundler/-/bundler-1.2.3.tgz",
    },
    "concat-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "optional": true,
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
    },
    "fs.realpath" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "optional": true,
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
    },
    "full-git-url" => Node {
      "location": "node_modules/full-git-url",
      "name": "full-git-url",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort" => Node {
      "location": "node_modules/ghshort",
      "name": "ghshort",
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz" => Node {
      "location": "node_modules/ghtgz",
      "name": "ghtgz",
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => Edge {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "node_modules/inflight",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "2",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "location": "node_modules/glob",
      "name": "glob",
      "optional": true,
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "node_modules/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/inflight",
      "name": "inflight",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
    },
    "inherits" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "location": "node_modules/inherits",
      "name": "inherits",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
    },
    "minimatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "optional": true,
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
    },
    "old" => Node {
      "location": "node_modules/old",
      "name": "old",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "node_modules/wrappy",
          "type": "prod",
        },
      },
      "location": "node_modules/once",
      "name": "once",
      "resolved": "file:../../once-1.4.0.tgz",
    },
    "path-is-absolute" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "optional": true,
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
    },
    "pinned" => Node {
      "location": "node_modules/pinned",
      "name": "pinned",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "really-bad-invalid" => Node {
      "location": "node_modules/really-bad-invalid",
      "name": "really-bad-invalid",
      "resolved": null,
    },
    "reg" => Node {
      "location": "node_modules/reg",
      "name": "reg",
      "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
    },
    "remote" => Node {
      "location": "node_modules/remote",
      "name": "remote",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    },
    "rimraf" => Node {
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "optional",
        },
      },
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "resolved": "file:../../rimraf-2.6.3.tgz",
    },
    "symlink" => Link {
      "location": "node_modules/symlink",
      "name": "symlink",
      "resolved": "file:../../abbrev-link-target",
      "target": Object {
        "name": "abbrev-link-target",
        "parent": null,
      },
    },
    "symlink-in-tree" => Link {
      "location": "node_modules/symlink-in-tree",
      "name": "symlink-in-tree",
      "resolved": "file:../abbrev",
      "target": Object {
        "name": "abbrev",
        "parent": "",
      },
    },
    "tarball" => Node {
      "dev": true,
      "location": "node_modules/tarball",
      "name": "tarball",
      "resolved": "file:../../abbrev-1.1.1.tgz",
    },
    "tarball-no-integrity" => Node {
      "dev": true,
      "location": "node_modules/tarball-no-integrity",
      "name": "tarball-no-integrity",
      "resolved": "file:../../abbrev-1.1.1.tgz",
    },
    "unhosted-git" => Node {
      "location": "node_modules/unhosted-git",
      "name": "unhosted-git",
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
    },
  },
  "location": "",
  "name": "install-types-sw-only",
  "resolved": null,
}
`

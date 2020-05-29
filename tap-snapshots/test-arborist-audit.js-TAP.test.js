/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/arborist/audit.js TAP audit fix reifies out the bad deps > reified out the bad mkdirp and minimist 1`] = `
Node {
  "children": Map {
    "minimist" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/mkdirp",
          "name": "minimist",
          "spec": "^1.2.5",
          "type": "prod",
        },
      },
      "location": "node_modules/minimist",
      "name": "minimist",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
    },
    "mkdirp" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "mkdirp",
          "spec": "^0.5.1 <0.5.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "minimist" => Edge {
          "name": "minimist",
          "spec": "^1.2.5",
          "to": "node_modules/minimist",
          "type": "prod",
        },
      },
      "location": "node_modules/mkdirp",
      "name": "mkdirp",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.3.tgz",
    },
  },
  "edgesOut": Map {
    "mkdirp" => Edge {
      "name": "mkdirp",
      "spec": "^0.5.1 <0.5.4",
      "to": "node_modules/mkdirp",
      "type": "prod",
    },
  },
  "location": "",
  "name": "audit-audit-fix-reifies-out-the-bad-deps",
  "resolved": null,
}
`

exports[`test/arborist/audit.js TAP completely fix tap 13 installed in 2019 > reified out the bad stuff 1`] = `
Node {
  "children": Map {
    "@babel/code-frame" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/template",
          "name": "@babel/code-frame",
          "spec": "^7.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/code-frame",
          "spec": "^7.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/highlight" => Edge {
          "name": "@babel/highlight",
          "spec": "^7.0.0",
          "to": "node_modules/@babel/highlight",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/code-frame",
      "name": "@babel/code-frame",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.0.0.tgz",
    },
    "@babel/generator" => Node {
      "children": Map {
        "jsesc" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/@babel/generator",
              "name": "jsesc",
              "spec": "^2.5.1",
              "type": "prod",
            },
          },
          "location": "node_modules/@babel/generator/node_modules/jsesc",
          "name": "jsesc",
          "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/generator",
          "spec": "^7.4.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "@babel/generator",
          "spec": "^7.4.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/types" => Edge {
          "name": "@babel/types",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
        "jsesc" => Edge {
          "name": "jsesc",
          "spec": "^2.5.1",
          "to": "node_modules/@babel/generator/node_modules/jsesc",
          "type": "prod",
        },
        "lodash" => Edge {
          "name": "lodash",
          "spec": "^4.17.11",
          "to": "node_modules/lodash",
          "type": "prod",
        },
        "source-map" => Edge {
          "name": "source-map",
          "spec": "^0.5.0",
          "to": "node_modules/source-map",
          "type": "prod",
        },
        "trim-right" => Edge {
          "name": "trim-right",
          "spec": "^1.0.1",
          "to": "node_modules/trim-right",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/generator",
      "name": "@babel/generator",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.4.0.tgz",
    },
    "@babel/helper-function-name" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/helper-function-name",
          "spec": "^7.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/helper-get-function-arity" => Edge {
          "name": "@babel/helper-get-function-arity",
          "spec": "^7.0.0",
          "to": "node_modules/@babel/helper-get-function-arity",
          "type": "prod",
        },
        "@babel/template" => Edge {
          "name": "@babel/template",
          "spec": "^7.1.0",
          "to": "node_modules/@babel/template",
          "type": "prod",
        },
        "@babel/types" => Edge {
          "name": "@babel/types",
          "spec": "^7.0.0",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/helper-function-name",
      "name": "@babel/helper-function-name",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.1.0.tgz",
    },
    "@babel/helper-get-function-arity" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/helper-function-name",
          "name": "@babel/helper-get-function-arity",
          "spec": "^7.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/types" => Edge {
          "name": "@babel/types",
          "spec": "^7.0.0",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/helper-get-function-arity",
      "name": "@babel/helper-get-function-arity",
      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.0.0.tgz",
    },
    "@babel/helper-split-export-declaration" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/helper-split-export-declaration",
          "spec": "^7.4.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/types" => Edge {
          "name": "@babel/types",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/helper-split-export-declaration",
      "name": "@babel/helper-split-export-declaration",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.4.0.tgz",
    },
    "@babel/highlight" => Node {
      "children": Map {
        "ansi-styles" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/@babel/highlight/node_modules/chalk",
              "name": "ansi-styles",
              "spec": "^3.2.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "color-convert" => Edge {
              "name": "color-convert",
              "spec": "^1.9.0",
              "to": "node_modules/color-convert",
              "type": "prod",
            },
          },
          "location": "node_modules/@babel/highlight/node_modules/ansi-styles",
          "name": "ansi-styles",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
        },
        "chalk" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/@babel/highlight",
              "name": "chalk",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-styles" => Edge {
              "name": "ansi-styles",
              "spec": "^3.2.1",
              "to": "node_modules/@babel/highlight/node_modules/ansi-styles",
              "type": "prod",
            },
            "escape-string-regexp" => Edge {
              "name": "escape-string-regexp",
              "spec": "^1.0.5",
              "to": "node_modules/escape-string-regexp",
              "type": "prod",
            },
            "supports-color" => Edge {
              "name": "supports-color",
              "spec": "^5.3.0",
              "to": "node_modules/@babel/highlight/node_modules/supports-color",
              "type": "prod",
            },
          },
          "location": "node_modules/@babel/highlight/node_modules/chalk",
          "name": "chalk",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
        },
        "js-tokens" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/@babel/highlight",
              "name": "js-tokens",
              "spec": "^4.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/@babel/highlight/node_modules/js-tokens",
          "name": "js-tokens",
          "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
        },
        "supports-color" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/@babel/highlight/node_modules/chalk",
              "name": "supports-color",
              "spec": "^5.3.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "has-flag" => Edge {
              "name": "has-flag",
              "spec": "^3.0.0",
              "to": "node_modules/has-flag",
              "type": "prod",
            },
          },
          "location": "node_modules/@babel/highlight/node_modules/supports-color",
          "name": "supports-color",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/code-frame",
          "name": "@babel/highlight",
          "spec": "^7.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "chalk" => Edge {
          "name": "chalk",
          "spec": "^2.0.0",
          "to": "node_modules/@babel/highlight/node_modules/chalk",
          "type": "prod",
        },
        "esutils" => Edge {
          "name": "esutils",
          "spec": "^2.0.2",
          "to": "node_modules/esutils",
          "type": "prod",
        },
        "js-tokens" => Edge {
          "name": "js-tokens",
          "spec": "^4.0.0",
          "to": "node_modules/@babel/highlight/node_modules/js-tokens",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/highlight",
      "name": "@babel/highlight",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.0.0.tgz",
    },
    "@babel/parser" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/template",
          "name": "@babel/parser",
          "spec": "^7.4.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/parser",
          "spec": "^7.4.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "@babel/parser",
          "spec": "^7.4.3",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/parser",
      "name": "@babel/parser",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.4.3.tgz",
    },
    "@babel/runtime" => Node {
      "children": Map {
        "regenerator-runtime" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/@babel/runtime",
              "name": "regenerator-runtime",
              "spec": "^0.13.2",
              "type": "prod",
            },
          },
          "location": "node_modules/@babel/runtime/node_modules/regenerator-runtime",
          "name": "regenerator-runtime",
          "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.3.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yaml",
          "name": "@babel/runtime",
          "spec": "^7.6.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "regenerator-runtime" => Edge {
          "name": "regenerator-runtime",
          "spec": "^0.13.2",
          "to": "node_modules/@babel/runtime/node_modules/regenerator-runtime",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/runtime",
      "name": "@babel/runtime",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.8.4.tgz",
    },
    "@babel/template" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/helper-function-name",
          "name": "@babel/template",
          "spec": "^7.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "@babel/template",
          "spec": "^7.4.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/code-frame" => Edge {
          "name": "@babel/code-frame",
          "spec": "^7.0.0",
          "to": "node_modules/@babel/code-frame",
          "type": "prod",
        },
        "@babel/parser" => Edge {
          "name": "@babel/parser",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/parser",
          "type": "prod",
        },
        "@babel/types" => Edge {
          "name": "@babel/types",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/template",
      "name": "@babel/template",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.4.0.tgz",
    },
    "@babel/traverse" => Node {
      "children": Map {
        "debug" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/@babel/traverse",
              "name": "debug",
              "spec": "^4.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ms" => Edge {
              "name": "ms",
              "spec": "^2.1.1",
              "to": "node_modules/@babel/traverse/node_modules/ms",
              "type": "prod",
            },
          },
          "location": "node_modules/@babel/traverse/node_modules/debug",
          "name": "debug",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
        },
        "globals" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/@babel/traverse",
              "name": "globals",
              "spec": "^11.1.0",
              "type": "prod",
            },
          },
          "location": "node_modules/@babel/traverse/node_modules/globals",
          "name": "globals",
          "resolved": "https://registry.npmjs.org/globals/-/globals-11.11.0.tgz",
        },
        "ms" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/@babel/traverse/node_modules/debug",
              "name": "ms",
              "spec": "^2.1.1",
              "type": "prod",
            },
          },
          "location": "node_modules/@babel/traverse/node_modules/ms",
          "name": "ms",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "@babel/traverse",
          "spec": "^7.4.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/code-frame" => Edge {
          "name": "@babel/code-frame",
          "spec": "^7.0.0",
          "to": "node_modules/@babel/code-frame",
          "type": "prod",
        },
        "@babel/generator" => Edge {
          "name": "@babel/generator",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/generator",
          "type": "prod",
        },
        "@babel/helper-function-name" => Edge {
          "name": "@babel/helper-function-name",
          "spec": "^7.1.0",
          "to": "node_modules/@babel/helper-function-name",
          "type": "prod",
        },
        "@babel/helper-split-export-declaration" => Edge {
          "name": "@babel/helper-split-export-declaration",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/helper-split-export-declaration",
          "type": "prod",
        },
        "@babel/parser" => Edge {
          "name": "@babel/parser",
          "spec": "^7.4.3",
          "to": "node_modules/@babel/parser",
          "type": "prod",
        },
        "@babel/types" => Edge {
          "name": "@babel/types",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
        "debug" => Edge {
          "name": "debug",
          "spec": "^4.1.0",
          "to": "node_modules/@babel/traverse/node_modules/debug",
          "type": "prod",
        },
        "globals" => Edge {
          "name": "globals",
          "spec": "^11.1.0",
          "to": "node_modules/@babel/traverse/node_modules/globals",
          "type": "prod",
        },
        "lodash" => Edge {
          "name": "lodash",
          "spec": "^4.17.11",
          "to": "node_modules/lodash",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/traverse",
      "name": "@babel/traverse",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.4.3.tgz",
    },
    "@babel/types" => Node {
      "children": Map {
        "to-fast-properties" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/@babel/types",
              "name": "to-fast-properties",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/@babel/types/node_modules/to-fast-properties",
          "name": "to-fast-properties",
          "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/generator",
          "name": "@babel/types",
          "spec": "^7.4.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/helper-function-name",
          "name": "@babel/types",
          "spec": "^7.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/helper-get-function-arity",
          "name": "@babel/types",
          "spec": "^7.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/helper-split-export-declaration",
          "name": "@babel/types",
          "spec": "^7.4.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/template",
          "name": "@babel/types",
          "spec": "^7.4.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "@babel/types",
          "spec": "^7.4.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "@babel/types",
          "spec": "^7.4.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "esutils" => Edge {
          "name": "esutils",
          "spec": "^2.0.2",
          "to": "node_modules/esutils",
          "type": "prod",
        },
        "lodash" => Edge {
          "name": "lodash",
          "spec": "^4.17.11",
          "to": "node_modules/lodash",
          "type": "prod",
        },
        "to-fast-properties" => Edge {
          "name": "to-fast-properties",
          "spec": "^2.0.0",
          "to": "node_modules/@babel/types/node_modules/to-fast-properties",
          "type": "prod",
        },
      },
      "location": "node_modules/@babel/types",
      "name": "@babel/types",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.4.0.tgz",
    },
    "@types/prop-types" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@types/react",
          "name": "@types/prop-types",
          "spec": "*",
          "type": "prod",
        },
      },
      "location": "node_modules/@types/prop-types",
      "name": "@types/prop-types",
      "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.1.tgz",
    },
    "@types/react" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/auto-bind",
          "name": "@types/react",
          "spec": "^16.8.12",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/ink",
          "name": "@types/react",
          "spec": "^16.8.6",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@types/prop-types" => Edge {
          "name": "@types/prop-types",
          "spec": "*",
          "to": "node_modules/@types/prop-types",
          "type": "prod",
        },
        "csstype" => Edge {
          "name": "csstype",
          "spec": "^2.2.0",
          "to": "node_modules/csstype",
          "type": "prod",
        },
      },
      "location": "node_modules/@types/react",
      "name": "@types/react",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-16.8.14.tgz",
    },
    "ajv" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/har-validator",
          "name": "ajv",
          "spec": "^6.5.5",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "fast-deep-equal" => Edge {
          "name": "fast-deep-equal",
          "spec": "^2.0.1",
          "to": "node_modules/fast-deep-equal",
          "type": "prod",
        },
        "fast-json-stable-stringify" => Edge {
          "name": "fast-json-stable-stringify",
          "spec": "^2.0.0",
          "to": "node_modules/fast-json-stable-stringify",
          "type": "prod",
        },
        "json-schema-traverse" => Edge {
          "name": "json-schema-traverse",
          "spec": "^0.4.1",
          "to": "node_modules/json-schema-traverse",
          "type": "prod",
        },
        "uri-js" => Edge {
          "name": "uri-js",
          "spec": "^4.2.2",
          "to": "node_modules/uri-js",
          "type": "prod",
        },
      },
      "location": "node_modules/ajv",
      "name": "ajv",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.10.0.tgz",
    },
    "ansi-escapes" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/log-update",
          "name": "ansi-escapes",
          "spec": "^3.2.0",
          "type": "prod",
        },
      },
      "location": "node_modules/ansi-escapes",
      "name": "ansi-escapes",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
    },
    "ansi-regex" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/has-ansi",
          "name": "ansi-regex",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/strip-ansi",
          "name": "ansi-regex",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/ansi-regex",
      "name": "ansi-regex",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
    },
    "ansi-styles" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chalk",
          "name": "ansi-styles",
          "spec": "^2.2.1",
          "type": "prod",
        },
      },
      "location": "node_modules/ansi-styles",
      "name": "ansi-styles",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
    },
    "ansicolors" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cardinal",
          "name": "ansicolors",
          "spec": "~0.3.2",
          "type": "prod",
        },
      },
      "location": "node_modules/ansicolors",
      "name": "ansicolors",
      "resolved": "https://registry.npmjs.org/ansicolors/-/ansicolors-0.3.2.tgz",
    },
    "anymatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chokidar",
          "name": "anymatch",
          "spec": "~3.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "normalize-path" => Edge {
          "name": "normalize-path",
          "spec": "^3.0.0",
          "to": "node_modules/normalize-path",
          "type": "prod",
        },
        "picomatch" => Edge {
          "name": "picomatch",
          "spec": "^2.0.4",
          "to": "node_modules/picomatch",
          "type": "prod",
        },
      },
      "location": "node_modules/anymatch",
      "name": "anymatch",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.1.tgz",
    },
    "append-transform" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-hook",
          "name": "append-transform",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "default-require-extensions" => Edge {
          "name": "default-require-extensions",
          "spec": "^2.0.0",
          "to": "node_modules/default-require-extensions",
          "type": "prod",
        },
      },
      "location": "node_modules/append-transform",
      "name": "append-transform",
      "resolved": "https://registry.npmjs.org/append-transform/-/append-transform-1.0.0.tgz",
    },
    "archy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-processinfo",
          "name": "archy",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/nyc",
          "name": "archy",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/archy",
      "name": "archy",
      "resolved": "https://registry.npmjs.org/archy/-/archy-1.0.0.tgz",
    },
    "arg" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ts-node",
          "name": "arg",
          "spec": "^4.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/arg",
      "name": "arg",
      "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.0.tgz",
    },
    "argparse" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/js-yaml",
          "name": "argparse",
          "spec": "^1.0.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "sprintf-js" => Edge {
          "name": "sprintf-js",
          "spec": "~1.0.2",
          "to": "node_modules/sprintf-js",
          "type": "prod",
        },
      },
      "location": "node_modules/argparse",
      "name": "argparse",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
    },
    "arrify" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink",
          "name": "arrify",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/arrify",
      "name": "arrify",
      "resolved": "https://registry.npmjs.org/arrify/-/arrify-1.0.1.tgz",
    },
    "asn1" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/sshpk",
          "name": "asn1",
          "spec": "~0.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "safer-buffer" => Edge {
          "name": "safer-buffer",
          "spec": "~2.1.0",
          "to": "node_modules/safer-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/asn1",
      "name": "asn1",
      "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
    },
    "assert-plus" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/dashdash",
          "name": "assert-plus",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/getpass",
          "name": "assert-plus",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/http-signature",
          "name": "assert-plus",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/jsprim",
          "name": "assert-plus",
          "spec": "1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/sshpk",
          "name": "assert-plus",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/verror",
          "name": "assert-plus",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/assert-plus",
      "name": "assert-plus",
      "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
    },
    "astral-regex" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/string-length",
          "name": "astral-regex",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/astral-regex",
      "name": "astral-regex",
      "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-1.0.0.tgz",
    },
    "async-hook-domain" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "async-hook-domain",
          "spec": "^1.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "source-map-support" => Edge {
          "name": "source-map-support",
          "spec": "^0.5.11",
          "to": "node_modules/source-map-support",
          "type": "prod",
        },
      },
      "location": "node_modules/async-hook-domain",
      "name": "async-hook-domain",
      "resolved": "https://registry.npmjs.org/async-hook-domain/-/async-hook-domain-1.1.0.tgz",
    },
    "asynckit" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/form-data",
          "name": "asynckit",
          "spec": "^0.4.0",
          "type": "prod",
        },
      },
      "location": "node_modules/asynckit",
      "name": "asynckit",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
    },
    "auto-bind" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink",
          "name": "auto-bind",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@types/react" => Edge {
          "name": "@types/react",
          "spec": "^16.8.12",
          "to": "node_modules/@types/react",
          "type": "prod",
        },
      },
      "location": "node_modules/auto-bind",
      "name": "auto-bind",
      "resolved": "https://registry.npmjs.org/auto-bind/-/auto-bind-2.1.0.tgz",
    },
    "aws-sign2" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "aws-sign2",
          "spec": "~0.7.0",
          "type": "prod",
        },
      },
      "location": "node_modules/aws-sign2",
      "name": "aws-sign2",
      "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
    },
    "aws4" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "aws4",
          "spec": "^1.8.0",
          "type": "prod",
        },
      },
      "location": "node_modules/aws4",
      "name": "aws4",
      "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.8.0.tgz",
    },
    "babel-code-frame" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "babel-code-frame",
          "spec": "^6.26.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-traverse",
          "name": "babel-code-frame",
          "spec": "^6.26.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "chalk" => Edge {
          "name": "chalk",
          "spec": "^1.1.3",
          "to": "node_modules/chalk",
          "type": "prod",
        },
        "esutils" => Edge {
          "name": "esutils",
          "spec": "^2.0.2",
          "to": "node_modules/esutils",
          "type": "prod",
        },
        "js-tokens" => Edge {
          "name": "js-tokens",
          "spec": "^3.0.2",
          "to": "node_modules/js-tokens",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-code-frame",
      "name": "babel-code-frame",
      "resolved": "https://registry.npmjs.org/babel-code-frame/-/babel-code-frame-6.26.0.tgz",
    },
    "babel-core" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-register",
          "name": "babel-core",
          "spec": "^6.26.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/import-jsx",
          "name": "babel-core",
          "spec": "^6.25.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "babel-code-frame" => Edge {
          "name": "babel-code-frame",
          "spec": "^6.26.0",
          "to": "node_modules/babel-code-frame",
          "type": "prod",
        },
        "babel-generator" => Edge {
          "name": "babel-generator",
          "spec": "^6.26.0",
          "to": "node_modules/babel-generator",
          "type": "prod",
        },
        "babel-helpers" => Edge {
          "name": "babel-helpers",
          "spec": "^6.24.1",
          "to": "node_modules/babel-helpers",
          "type": "prod",
        },
        "babel-messages" => Edge {
          "name": "babel-messages",
          "spec": "^6.23.0",
          "to": "node_modules/babel-messages",
          "type": "prod",
        },
        "babel-register" => Edge {
          "name": "babel-register",
          "spec": "^6.26.0",
          "to": "node_modules/babel-register",
          "type": "prod",
        },
        "babel-runtime" => Edge {
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "to": "node_modules/babel-runtime",
          "type": "prod",
        },
        "babel-template" => Edge {
          "name": "babel-template",
          "spec": "^6.26.0",
          "to": "node_modules/babel-template",
          "type": "prod",
        },
        "babel-traverse" => Edge {
          "name": "babel-traverse",
          "spec": "^6.26.0",
          "to": "node_modules/babel-traverse",
          "type": "prod",
        },
        "babel-types" => Edge {
          "name": "babel-types",
          "spec": "^6.26.0",
          "to": "node_modules/babel-types",
          "type": "prod",
        },
        "babylon" => Edge {
          "name": "babylon",
          "spec": "^6.18.0",
          "to": "node_modules/babylon",
          "type": "prod",
        },
        "convert-source-map" => Edge {
          "name": "convert-source-map",
          "spec": "^1.5.1",
          "to": "node_modules/convert-source-map",
          "type": "prod",
        },
        "debug" => Edge {
          "name": "debug",
          "spec": "^2.6.9",
          "to": "node_modules/debug",
          "type": "prod",
        },
        "json5" => Edge {
          "name": "json5",
          "spec": "^0.5.1",
          "to": "node_modules/json5",
          "type": "prod",
        },
        "lodash" => Edge {
          "name": "lodash",
          "spec": "^4.17.4",
          "to": "node_modules/lodash",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.1",
          "to": "node_modules/path-is-absolute",
          "type": "prod",
        },
        "private" => Edge {
          "name": "private",
          "spec": "^0.1.8",
          "to": "node_modules/private",
          "type": "prod",
        },
        "slash" => Edge {
          "name": "slash",
          "spec": "^1.0.0",
          "to": "node_modules/slash",
          "type": "prod",
        },
        "source-map" => Edge {
          "name": "source-map",
          "spec": "^0.5.7",
          "to": "node_modules/source-map",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-core",
      "name": "babel-core",
      "resolved": "https://registry.npmjs.org/babel-core/-/babel-core-6.26.3.tgz",
    },
    "babel-generator" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "babel-generator",
          "spec": "^6.26.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "babel-messages" => Edge {
          "name": "babel-messages",
          "spec": "^6.23.0",
          "to": "node_modules/babel-messages",
          "type": "prod",
        },
        "babel-runtime" => Edge {
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "to": "node_modules/babel-runtime",
          "type": "prod",
        },
        "babel-types" => Edge {
          "name": "babel-types",
          "spec": "^6.26.0",
          "to": "node_modules/babel-types",
          "type": "prod",
        },
        "detect-indent" => Edge {
          "name": "detect-indent",
          "spec": "^4.0.0",
          "to": "node_modules/detect-indent",
          "type": "prod",
        },
        "jsesc" => Edge {
          "name": "jsesc",
          "spec": "^1.3.0",
          "to": "node_modules/jsesc",
          "type": "prod",
        },
        "lodash" => Edge {
          "name": "lodash",
          "spec": "^4.17.4",
          "to": "node_modules/lodash",
          "type": "prod",
        },
        "source-map" => Edge {
          "name": "source-map",
          "spec": "^0.5.7",
          "to": "node_modules/source-map",
          "type": "prod",
        },
        "trim-right" => Edge {
          "name": "trim-right",
          "spec": "^1.0.1",
          "to": "node_modules/trim-right",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-generator",
      "name": "babel-generator",
      "resolved": "https://registry.npmjs.org/babel-generator/-/babel-generator-6.26.1.tgz",
    },
    "babel-helper-builder-react-jsx" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-plugin-transform-react-jsx",
          "name": "babel-helper-builder-react-jsx",
          "spec": "^6.24.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "babel-runtime" => Edge {
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "to": "node_modules/babel-runtime",
          "type": "prod",
        },
        "babel-types" => Edge {
          "name": "babel-types",
          "spec": "^6.26.0",
          "to": "node_modules/babel-types",
          "type": "prod",
        },
        "esutils" => Edge {
          "name": "esutils",
          "spec": "^2.0.2",
          "to": "node_modules/esutils",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-helper-builder-react-jsx",
      "name": "babel-helper-builder-react-jsx",
      "resolved": "https://registry.npmjs.org/babel-helper-builder-react-jsx/-/babel-helper-builder-react-jsx-6.26.0.tgz",
    },
    "babel-helpers" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "babel-helpers",
          "spec": "^6.24.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "babel-runtime" => Edge {
          "name": "babel-runtime",
          "spec": "^6.22.0",
          "to": "node_modules/babel-runtime",
          "type": "prod",
        },
        "babel-template" => Edge {
          "name": "babel-template",
          "spec": "^6.24.1",
          "to": "node_modules/babel-template",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-helpers",
      "name": "babel-helpers",
      "resolved": "https://registry.npmjs.org/babel-helpers/-/babel-helpers-6.24.1.tgz",
    },
    "babel-messages" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "babel-messages",
          "spec": "^6.23.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-generator",
          "name": "babel-messages",
          "spec": "^6.23.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-traverse",
          "name": "babel-messages",
          "spec": "^6.23.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "babel-runtime" => Edge {
          "name": "babel-runtime",
          "spec": "^6.22.0",
          "to": "node_modules/babel-runtime",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-messages",
      "name": "babel-messages",
      "resolved": "https://registry.npmjs.org/babel-messages/-/babel-messages-6.23.0.tgz",
    },
    "babel-plugin-syntax-jsx" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-plugin-transform-react-jsx",
          "name": "babel-plugin-syntax-jsx",
          "spec": "^6.8.0",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-plugin-syntax-jsx",
      "name": "babel-plugin-syntax-jsx",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-jsx/-/babel-plugin-syntax-jsx-6.18.0.tgz",
    },
    "babel-plugin-syntax-object-rest-spread" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-plugin-transform-object-rest-spread",
          "name": "babel-plugin-syntax-object-rest-spread",
          "spec": "^6.8.0",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-plugin-syntax-object-rest-spread",
      "name": "babel-plugin-syntax-object-rest-spread",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-object-rest-spread/-/babel-plugin-syntax-object-rest-spread-6.13.0.tgz",
    },
    "babel-plugin-transform-es2015-destructuring" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/import-jsx",
          "name": "babel-plugin-transform-es2015-destructuring",
          "spec": "^6.23.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "babel-runtime" => Edge {
          "name": "babel-runtime",
          "spec": "^6.22.0",
          "to": "node_modules/babel-runtime",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-plugin-transform-es2015-destructuring",
      "name": "babel-plugin-transform-es2015-destructuring",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-destructuring/-/babel-plugin-transform-es2015-destructuring-6.23.0.tgz",
    },
    "babel-plugin-transform-object-rest-spread" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/import-jsx",
          "name": "babel-plugin-transform-object-rest-spread",
          "spec": "^6.23.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "babel-plugin-syntax-object-rest-spread" => Edge {
          "name": "babel-plugin-syntax-object-rest-spread",
          "spec": "^6.8.0",
          "to": "node_modules/babel-plugin-syntax-object-rest-spread",
          "type": "prod",
        },
        "babel-runtime" => Edge {
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "to": "node_modules/babel-runtime",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-plugin-transform-object-rest-spread",
      "name": "babel-plugin-transform-object-rest-spread",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-object-rest-spread/-/babel-plugin-transform-object-rest-spread-6.26.0.tgz",
    },
    "babel-plugin-transform-react-jsx" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/import-jsx",
          "name": "babel-plugin-transform-react-jsx",
          "spec": "^6.24.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "babel-helper-builder-react-jsx" => Edge {
          "name": "babel-helper-builder-react-jsx",
          "spec": "^6.24.1",
          "to": "node_modules/babel-helper-builder-react-jsx",
          "type": "prod",
        },
        "babel-plugin-syntax-jsx" => Edge {
          "name": "babel-plugin-syntax-jsx",
          "spec": "^6.8.0",
          "to": "node_modules/babel-plugin-syntax-jsx",
          "type": "prod",
        },
        "babel-runtime" => Edge {
          "name": "babel-runtime",
          "spec": "^6.22.0",
          "to": "node_modules/babel-runtime",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-plugin-transform-react-jsx",
      "name": "babel-plugin-transform-react-jsx",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-react-jsx/-/babel-plugin-transform-react-jsx-6.24.1.tgz",
    },
    "babel-register" => Node {
      "children": Map {
        "source-map-support" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/babel-register",
              "name": "source-map-support",
              "spec": "^0.4.15",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "source-map" => Edge {
              "name": "source-map",
              "spec": "^0.5.6",
              "to": "node_modules/source-map",
              "type": "prod",
            },
          },
          "location": "node_modules/babel-register/node_modules/source-map-support",
          "name": "source-map-support",
          "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.4.18.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "babel-register",
          "spec": "^6.26.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "babel-core" => Edge {
          "name": "babel-core",
          "spec": "^6.26.0",
          "to": "node_modules/babel-core",
          "type": "prod",
        },
        "babel-runtime" => Edge {
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "to": "node_modules/babel-runtime",
          "type": "prod",
        },
        "core-js" => Edge {
          "name": "core-js",
          "spec": "^2.5.0",
          "to": "node_modules/core-js",
          "type": "prod",
        },
        "home-or-tmp" => Edge {
          "name": "home-or-tmp",
          "spec": "^2.0.0",
          "to": "node_modules/home-or-tmp",
          "type": "prod",
        },
        "lodash" => Edge {
          "name": "lodash",
          "spec": "^4.17.4",
          "to": "node_modules/lodash",
          "type": "prod",
        },
        "mkdirp" => Edge {
          "name": "mkdirp",
          "spec": "^0.5.1",
          "to": "node_modules/mkdirp",
          "type": "prod",
        },
        "source-map-support" => Edge {
          "name": "source-map-support",
          "spec": "^0.4.15",
          "to": "node_modules/babel-register/node_modules/source-map-support",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-register",
      "name": "babel-register",
      "resolved": "https://registry.npmjs.org/babel-register/-/babel-register-6.26.0.tgz",
    },
    "babel-runtime" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-generator",
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-helper-builder-react-jsx",
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-helpers",
          "name": "babel-runtime",
          "spec": "^6.22.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-messages",
          "name": "babel-runtime",
          "spec": "^6.22.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-plugin-transform-es2015-destructuring",
          "name": "babel-runtime",
          "spec": "^6.22.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-plugin-transform-object-rest-spread",
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-plugin-transform-react-jsx",
          "name": "babel-runtime",
          "spec": "^6.22.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-register",
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-template",
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-traverse",
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-types",
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "core-js" => Edge {
          "name": "core-js",
          "spec": "^2.4.0",
          "to": "node_modules/core-js",
          "type": "prod",
        },
        "regenerator-runtime" => Edge {
          "name": "regenerator-runtime",
          "spec": "^0.11.0",
          "to": "node_modules/regenerator-runtime",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-runtime",
      "name": "babel-runtime",
      "resolved": "https://registry.npmjs.org/babel-runtime/-/babel-runtime-6.26.0.tgz",
    },
    "babel-template" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "babel-template",
          "spec": "^6.26.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-helpers",
          "name": "babel-template",
          "spec": "^6.24.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "babel-runtime" => Edge {
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "to": "node_modules/babel-runtime",
          "type": "prod",
        },
        "babel-traverse" => Edge {
          "name": "babel-traverse",
          "spec": "^6.26.0",
          "to": "node_modules/babel-traverse",
          "type": "prod",
        },
        "babel-types" => Edge {
          "name": "babel-types",
          "spec": "^6.26.0",
          "to": "node_modules/babel-types",
          "type": "prod",
        },
        "babylon" => Edge {
          "name": "babylon",
          "spec": "^6.18.0",
          "to": "node_modules/babylon",
          "type": "prod",
        },
        "lodash" => Edge {
          "name": "lodash",
          "spec": "^4.17.4",
          "to": "node_modules/lodash",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-template",
      "name": "babel-template",
      "resolved": "https://registry.npmjs.org/babel-template/-/babel-template-6.26.0.tgz",
    },
    "babel-traverse" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "babel-traverse",
          "spec": "^6.26.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-template",
          "name": "babel-traverse",
          "spec": "^6.26.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "babel-code-frame" => Edge {
          "name": "babel-code-frame",
          "spec": "^6.26.0",
          "to": "node_modules/babel-code-frame",
          "type": "prod",
        },
        "babel-messages" => Edge {
          "name": "babel-messages",
          "spec": "^6.23.0",
          "to": "node_modules/babel-messages",
          "type": "prod",
        },
        "babel-runtime" => Edge {
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "to": "node_modules/babel-runtime",
          "type": "prod",
        },
        "babel-types" => Edge {
          "name": "babel-types",
          "spec": "^6.26.0",
          "to": "node_modules/babel-types",
          "type": "prod",
        },
        "babylon" => Edge {
          "name": "babylon",
          "spec": "^6.18.0",
          "to": "node_modules/babylon",
          "type": "prod",
        },
        "debug" => Edge {
          "name": "debug",
          "spec": "^2.6.8",
          "to": "node_modules/debug",
          "type": "prod",
        },
        "globals" => Edge {
          "name": "globals",
          "spec": "^9.18.0",
          "to": "node_modules/globals",
          "type": "prod",
        },
        "invariant" => Edge {
          "name": "invariant",
          "spec": "^2.2.2",
          "to": "node_modules/invariant",
          "type": "prod",
        },
        "lodash" => Edge {
          "name": "lodash",
          "spec": "^4.17.4",
          "to": "node_modules/lodash",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-traverse",
      "name": "babel-traverse",
      "resolved": "https://registry.npmjs.org/babel-traverse/-/babel-traverse-6.26.0.tgz",
    },
    "babel-types" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "babel-types",
          "spec": "^6.26.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-generator",
          "name": "babel-types",
          "spec": "^6.26.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-helper-builder-react-jsx",
          "name": "babel-types",
          "spec": "^6.26.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-template",
          "name": "babel-types",
          "spec": "^6.26.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-traverse",
          "name": "babel-types",
          "spec": "^6.26.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "babel-runtime" => Edge {
          "name": "babel-runtime",
          "spec": "^6.26.0",
          "to": "node_modules/babel-runtime",
          "type": "prod",
        },
        "esutils" => Edge {
          "name": "esutils",
          "spec": "^2.0.2",
          "to": "node_modules/esutils",
          "type": "prod",
        },
        "lodash" => Edge {
          "name": "lodash",
          "spec": "^4.17.4",
          "to": "node_modules/lodash",
          "type": "prod",
        },
        "to-fast-properties" => Edge {
          "name": "to-fast-properties",
          "spec": "^1.0.3",
          "to": "node_modules/to-fast-properties",
          "type": "prod",
        },
      },
      "location": "node_modules/babel-types",
      "name": "babel-types",
      "resolved": "https://registry.npmjs.org/babel-types/-/babel-types-6.26.0.tgz",
    },
    "babylon" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "babylon",
          "spec": "^6.18.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-template",
          "name": "babylon",
          "spec": "^6.18.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-traverse",
          "name": "babylon",
          "spec": "^6.18.0",
          "type": "prod",
        },
      },
      "location": "node_modules/babylon",
      "name": "babylon",
      "resolved": "https://registry.npmjs.org/babylon/-/babylon-6.18.0.tgz",
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
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
    },
    "bcrypt-pbkdf" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/sshpk",
          "name": "bcrypt-pbkdf",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "tweetnacl" => Edge {
          "name": "tweetnacl",
          "spec": "^0.14.3",
          "to": "node_modules/tweetnacl",
          "type": "prod",
        },
      },
      "location": "node_modules/bcrypt-pbkdf",
      "name": "bcrypt-pbkdf",
      "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
    },
    "binary-extensions" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/is-binary-path",
          "name": "binary-extensions",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/binary-extensions",
      "name": "binary-extensions",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.0.0.tgz",
    },
    "bind-obj-methods" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "bind-obj-methods",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/bind-obj-methods",
      "name": "bind-obj-methods",
      "resolved": "https://registry.npmjs.org/bind-obj-methods/-/bind-obj-methods-2.0.0.tgz",
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
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
    },
    "braces" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chokidar",
          "name": "braces",
          "spec": "~3.0.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "fill-range" => Edge {
          "name": "fill-range",
          "spec": "^7.0.1",
          "to": "node_modules/fill-range",
          "type": "prod",
        },
      },
      "location": "node_modules/braces",
      "name": "braces",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
    },
    "browser-process-hrtime" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "browser-process-hrtime",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/browser-process-hrtime",
      "name": "browser-process-hrtime",
      "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
    },
    "buffer-from" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/source-map-support",
          "name": "buffer-from",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/buffer-from",
      "name": "buffer-from",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
    },
    "caching-transform" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "caching-transform",
          "spec": "^3.0.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "hasha" => Edge {
          "name": "hasha",
          "spec": "^3.0.0",
          "to": "node_modules/hasha",
          "type": "prod",
        },
        "make-dir" => Edge {
          "name": "make-dir",
          "spec": "^2.0.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "package-hash" => Edge {
          "name": "package-hash",
          "spec": "^3.0.0",
          "to": "node_modules/package-hash",
          "type": "prod",
        },
        "write-file-atomic" => Edge {
          "name": "write-file-atomic",
          "spec": "^2.4.2",
          "to": "node_modules/write-file-atomic",
          "type": "prod",
        },
      },
      "location": "node_modules/caching-transform",
      "name": "caching-transform",
      "resolved": "https://registry.npmjs.org/caching-transform/-/caching-transform-3.0.2.tgz",
    },
    "caller-callsite" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/caller-path",
          "name": "caller-callsite",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "callsites" => Edge {
          "name": "callsites",
          "spec": "^2.0.0",
          "to": "node_modules/callsites",
          "type": "prod",
        },
      },
      "location": "node_modules/caller-callsite",
      "name": "caller-callsite",
      "resolved": "https://registry.npmjs.org/caller-callsite/-/caller-callsite-2.0.0.tgz",
    },
    "caller-path" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/import-jsx",
          "name": "caller-path",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "caller-callsite" => Edge {
          "name": "caller-callsite",
          "spec": "^2.0.0",
          "to": "node_modules/caller-callsite",
          "type": "prod",
        },
      },
      "location": "node_modules/caller-path",
      "name": "caller-path",
      "resolved": "https://registry.npmjs.org/caller-path/-/caller-path-2.0.0.tgz",
    },
    "callsites" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/caller-callsite",
          "name": "callsites",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/callsites",
      "name": "callsites",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
    },
    "camelcase" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yargs-parser",
          "name": "camelcase",
          "spec": "^5.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/camelcase",
      "name": "camelcase",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
    },
    "capture-stack-trace" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "capture-stack-trace",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/capture-stack-trace",
      "name": "capture-stack-trace",
      "resolved": "https://registry.npmjs.org/capture-stack-trace/-/capture-stack-trace-1.0.1.tgz",
    },
    "cardinal" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/treport",
          "name": "cardinal",
          "spec": "^2.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ansicolors" => Edge {
          "name": "ansicolors",
          "spec": "~0.3.2",
          "to": "node_modules/ansicolors",
          "type": "prod",
        },
        "redeyed" => Edge {
          "name": "redeyed",
          "spec": "~2.1.0",
          "to": "node_modules/redeyed",
          "type": "prod",
        },
      },
      "location": "node_modules/cardinal",
      "name": "cardinal",
      "resolved": "https://registry.npmjs.org/cardinal/-/cardinal-2.1.1.tgz",
    },
    "caseless" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "caseless",
          "spec": "~0.12.0",
          "type": "prod",
        },
      },
      "location": "node_modules/caseless",
      "name": "caseless",
      "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
    },
    "chalk" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-code-frame",
          "name": "chalk",
          "spec": "^1.1.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ansi-styles" => Edge {
          "name": "ansi-styles",
          "spec": "^2.2.1",
          "to": "node_modules/ansi-styles",
          "type": "prod",
        },
        "escape-string-regexp" => Edge {
          "name": "escape-string-regexp",
          "spec": "^1.0.2",
          "to": "node_modules/escape-string-regexp",
          "type": "prod",
        },
        "has-ansi" => Edge {
          "name": "has-ansi",
          "spec": "^2.0.0",
          "to": "node_modules/has-ansi",
          "type": "prod",
        },
        "strip-ansi" => Edge {
          "name": "strip-ansi",
          "spec": "^3.0.0",
          "to": "node_modules/strip-ansi",
          "type": "prod",
        },
        "supports-color" => Edge {
          "name": "supports-color",
          "spec": "^2.0.0",
          "to": "node_modules/supports-color",
          "type": "prod",
        },
      },
      "location": "node_modules/chalk",
      "name": "chalk",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
    },
    "chokidar" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "chokidar",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "anymatch" => Edge {
          "name": "anymatch",
          "spec": "~3.1.1",
          "to": "node_modules/anymatch",
          "type": "prod",
        },
        "braces" => Edge {
          "name": "braces",
          "spec": "~3.0.2",
          "to": "node_modules/braces",
          "type": "prod",
        },
        "fsevents" => Edge {
          "name": "fsevents",
          "spec": "~2.1.2",
          "to": null,
          "type": "optional",
        },
        "glob-parent" => Edge {
          "name": "glob-parent",
          "spec": "~5.1.0",
          "to": "node_modules/glob-parent",
          "type": "prod",
        },
        "is-binary-path" => Edge {
          "name": "is-binary-path",
          "spec": "~2.1.0",
          "to": "node_modules/is-binary-path",
          "type": "prod",
        },
        "is-glob" => Edge {
          "name": "is-glob",
          "spec": "~4.0.1",
          "to": "node_modules/is-glob",
          "type": "prod",
        },
        "normalize-path" => Edge {
          "name": "normalize-path",
          "spec": "~3.0.0",
          "to": "node_modules/normalize-path",
          "type": "prod",
        },
        "readdirp" => Edge {
          "name": "readdirp",
          "spec": "~3.3.0",
          "to": "node_modules/readdirp",
          "type": "prod",
        },
      },
      "location": "node_modules/chokidar",
      "name": "chokidar",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.3.1.tgz",
    },
    "ci-info" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/is-ci",
          "name": "ci-info",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/ci-info",
      "name": "ci-info",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
    },
    "cli-cursor" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink",
          "name": "cli-cursor",
          "spec": "^2.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/log-update",
          "name": "cli-cursor",
          "spec": "^2.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "restore-cursor" => Edge {
          "name": "restore-cursor",
          "spec": "^2.0.0",
          "to": "node_modules/restore-cursor",
          "type": "prod",
        },
      },
      "location": "node_modules/cli-cursor",
      "name": "cli-cursor",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
    },
    "cli-truncate" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink",
          "name": "cli-truncate",
          "spec": "^1.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "slice-ansi" => Edge {
          "name": "slice-ansi",
          "spec": "^1.0.0",
          "to": "node_modules/slice-ansi",
          "type": "prod",
        },
        "string-width" => Edge {
          "name": "string-width",
          "spec": "^2.0.0",
          "to": "node_modules/string-width",
          "type": "prod",
        },
      },
      "location": "node_modules/cli-truncate",
      "name": "cli-truncate",
      "resolved": "https://registry.npmjs.org/cli-truncate/-/cli-truncate-1.1.0.tgz",
    },
    "cliui" => Node {
      "children": Map {
        "ansi-regex" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/cliui/node_modules/strip-ansi",
              "name": "ansi-regex",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/cliui/node_modules/ansi-regex",
          "name": "ansi-regex",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
        },
        "strip-ansi" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/cliui",
              "name": "strip-ansi",
              "spec": "^4.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-regex" => Edge {
              "name": "ansi-regex",
              "spec": "^3.0.0",
              "to": "node_modules/cliui/node_modules/ansi-regex",
              "type": "prod",
            },
          },
          "location": "node_modules/cliui/node_modules/strip-ansi",
          "name": "strip-ansi",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/jackspeak",
          "name": "cliui",
          "spec": "^4.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "string-width" => Edge {
          "name": "string-width",
          "spec": "^2.1.1",
          "to": "node_modules/string-width",
          "type": "prod",
        },
        "strip-ansi" => Edge {
          "name": "strip-ansi",
          "spec": "^4.0.0",
          "to": "node_modules/cliui/node_modules/strip-ansi",
          "type": "prod",
        },
        "wrap-ansi" => Edge {
          "name": "wrap-ansi",
          "spec": "^2.0.0",
          "to": "node_modules/wrap-ansi",
          "type": "prod",
        },
      },
      "location": "node_modules/cliui",
      "name": "cliui",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-4.1.0.tgz",
    },
    "code-point-at" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/wrap-ansi/node_modules/string-width",
          "name": "code-point-at",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/code-point-at",
      "name": "code-point-at",
      "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
    },
    "color-convert" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/highlight/node_modules/ansi-styles",
          "name": "color-convert",
          "spec": "^1.9.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/ink/node_modules/ansi-styles",
          "name": "color-convert",
          "spec": "^1.9.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/log-update/node_modules/ansi-styles",
          "name": "color-convert",
          "spec": "^1.9.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/treport/node_modules/ansi-styles",
          "name": "color-convert",
          "spec": "^1.9.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/yargs/node_modules/ansi-styles",
          "name": "color-convert",
          "spec": "^1.9.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "color-name" => Edge {
          "name": "color-name",
          "spec": "1.1.3",
          "to": "node_modules/color-name",
          "type": "prod",
        },
      },
      "location": "node_modules/color-convert",
      "name": "color-convert",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
    },
    "color-name" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/color-convert",
          "name": "color-name",
          "spec": "1.1.3",
          "type": "prod",
        },
      },
      "location": "node_modules/color-name",
      "name": "color-name",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
    },
    "color-support" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "color-support",
          "spec": "^1.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap-mocha-reporter",
          "name": "color-support",
          "spec": "^1.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/color-support",
      "name": "color-support",
      "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",
    },
    "combined-stream" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/form-data",
          "name": "combined-stream",
          "spec": "^1.0.6",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/request",
          "name": "combined-stream",
          "spec": "~1.0.6",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "delayed-stream" => Edge {
          "name": "delayed-stream",
          "spec": "~1.0.0",
          "to": "node_modules/delayed-stream",
          "type": "prod",
        },
      },
      "location": "node_modules/combined-stream",
      "name": "combined-stream",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.7.tgz",
    },
    "commander" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/uglify-js",
          "name": "commander",
          "spec": "~2.20.0",
          "type": "prod",
        },
      },
      "location": "node_modules/commander",
      "name": "commander",
      "optional": true,
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.0.tgz",
    },
    "commondir" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/find-cache-dir",
          "name": "commondir",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/commondir",
      "name": "commondir",
      "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
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
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
    },
    "convert-source-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "convert-source-map",
          "spec": "^1.5.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/nyc",
          "name": "convert-source-map",
          "spec": "^1.6.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "safe-buffer" => Edge {
          "name": "safe-buffer",
          "spec": "~5.1.1",
          "to": "node_modules/safe-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/convert-source-map",
      "name": "convert-source-map",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.6.0.tgz",
    },
    "core-js" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-register",
          "name": "core-js",
          "spec": "^2.5.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-runtime",
          "name": "core-js",
          "spec": "^2.4.0",
          "type": "prod",
        },
      },
      "location": "node_modules/core-js",
      "name": "core-js",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.5.tgz",
    },
    "core-util-is" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/readable-stream",
          "name": "core-util-is",
          "spec": "~1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/verror",
          "name": "core-util-is",
          "spec": "1.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/core-util-is",
      "name": "core-util-is",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
    },
    "coveralls" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "coveralls",
          "spec": "^3.0.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "growl" => Edge {
          "name": "growl",
          "spec": "~> 1.10.0",
          "to": "node_modules/growl",
          "type": "prod",
        },
        "js-yaml" => Edge {
          "name": "js-yaml",
          "spec": "^3.11.0",
          "to": "node_modules/js-yaml",
          "type": "prod",
        },
        "lcov-parse" => Edge {
          "name": "lcov-parse",
          "spec": "^0.0.10",
          "to": "node_modules/lcov-parse",
          "type": "prod",
        },
        "log-driver" => Edge {
          "name": "log-driver",
          "spec": "^1.2.7",
          "to": "node_modules/log-driver",
          "type": "prod",
        },
        "minimist" => Edge {
          "name": "minimist",
          "spec": "^1.2.0",
          "to": "node_modules/minimist",
          "type": "prod",
        },
        "request" => Edge {
          "name": "request",
          "spec": "^2.86.0",
          "to": "node_modules/request",
          "type": "prod",
        },
      },
      "location": "node_modules/coveralls",
      "name": "coveralls",
      "resolved": "https://registry.npmjs.org/coveralls/-/coveralls-3.0.3.tgz",
    },
    "cp-file" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "cp-file",
          "spec": "^6.2.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "graceful-fs" => Edge {
          "name": "graceful-fs",
          "spec": "^4.1.2",
          "to": "node_modules/graceful-fs",
          "type": "prod",
        },
        "make-dir" => Edge {
          "name": "make-dir",
          "spec": "^2.0.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "nested-error-stacks" => Edge {
          "name": "nested-error-stacks",
          "spec": "^2.0.0",
          "to": "node_modules/nested-error-stacks",
          "type": "prod",
        },
        "pify" => Edge {
          "name": "pify",
          "spec": "^4.0.1",
          "to": "node_modules/pify",
          "type": "prod",
        },
        "safe-buffer" => Edge {
          "name": "safe-buffer",
          "spec": "^5.0.1",
          "to": "node_modules/safe-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/cp-file",
      "name": "cp-file",
      "resolved": "https://registry.npmjs.org/cp-file/-/cp-file-6.2.0.tgz",
    },
    "cross-spawn" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/foreground-child",
          "name": "cross-spawn",
          "spec": "^4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "lru-cache" => Edge {
          "name": "lru-cache",
          "spec": "^4.0.1",
          "to": "node_modules/lru-cache",
          "type": "prod",
        },
        "which" => Edge {
          "name": "which",
          "spec": "^1.2.9",
          "to": "node_modules/which",
          "type": "prod",
        },
      },
      "location": "node_modules/cross-spawn",
      "name": "cross-spawn",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-4.0.2.tgz",
    },
    "csstype" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@types/react",
          "name": "csstype",
          "spec": "^2.2.0",
          "type": "prod",
        },
      },
      "location": "node_modules/csstype",
      "name": "csstype",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-2.6.4.tgz",
    },
    "dashdash" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/sshpk",
          "name": "dashdash",
          "spec": "^1.12.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "assert-plus" => Edge {
          "name": "assert-plus",
          "spec": "^1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
      },
      "location": "node_modules/dashdash",
      "name": "dashdash",
      "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
    },
    "debug" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "debug",
          "spec": "^2.6.9",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-traverse",
          "name": "debug",
          "spec": "^2.6.8",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap-mocha-reporter",
          "name": "debug",
          "spec": "^2.1.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ms" => Edge {
          "name": "ms",
          "spec": "2.0.0",
          "to": "node_modules/ms",
          "type": "prod",
        },
      },
      "location": "node_modules/debug",
      "name": "debug",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
    },
    "decamelize" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yargs-parser",
          "name": "decamelize",
          "spec": "^1.2.0",
          "type": "prod",
        },
      },
      "location": "node_modules/decamelize",
      "name": "decamelize",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
    },
    "default-require-extensions" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/append-transform",
          "name": "default-require-extensions",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "strip-bom" => Edge {
          "name": "strip-bom",
          "spec": "^3.0.0",
          "to": "node_modules/strip-bom",
          "type": "prod",
        },
      },
      "location": "node_modules/default-require-extensions",
      "name": "default-require-extensions",
      "resolved": "https://registry.npmjs.org/default-require-extensions/-/default-require-extensions-2.0.0.tgz",
    },
    "delayed-stream" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/combined-stream",
          "name": "delayed-stream",
          "spec": "~1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/delayed-stream",
      "name": "delayed-stream",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
    },
    "detect-indent" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-generator",
          "name": "detect-indent",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "repeating" => Edge {
          "name": "repeating",
          "spec": "^2.0.0",
          "to": "node_modules/repeating",
          "type": "prod",
        },
      },
      "location": "node_modules/detect-indent",
      "name": "detect-indent",
      "resolved": "https://registry.npmjs.org/detect-indent/-/detect-indent-4.0.0.tgz",
    },
    "diff" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap-mocha-reporter",
          "name": "diff",
          "spec": "^1.3.2",
          "type": "prod",
        },
      },
      "location": "node_modules/diff",
      "name": "diff",
      "resolved": "https://registry.npmjs.org/diff/-/diff-1.4.0.tgz",
    },
    "domain-browser" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "domain-browser",
          "spec": "^1.2.0",
          "type": "prod",
        },
      },
      "location": "node_modules/domain-browser",
      "name": "domain-browser",
      "resolved": "https://registry.npmjs.org/domain-browser/-/domain-browser-1.2.0.tgz",
    },
    "ecc-jsbn" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/sshpk",
          "name": "ecc-jsbn",
          "spec": "~0.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "jsbn" => Edge {
          "name": "jsbn",
          "spec": "~0.1.0",
          "to": "node_modules/jsbn",
          "type": "prod",
        },
        "safer-buffer" => Edge {
          "name": "safer-buffer",
          "spec": "^2.1.0",
          "to": "node_modules/safer-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/ecc-jsbn",
      "name": "ecc-jsbn",
      "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
    },
    "emoji-regex" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink/node_modules/string-width",
          "name": "emoji-regex",
          "spec": "^7.0.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/log-update/node_modules/string-width",
          "name": "emoji-regex",
          "spec": "^7.0.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/yargs/node_modules/string-width",
          "name": "emoji-regex",
          "spec": "^7.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/emoji-regex",
      "name": "emoji-regex",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
    },
    "error-ex" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/parse-json",
          "name": "error-ex",
          "spec": "^1.3.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-arrayish" => Edge {
          "name": "is-arrayish",
          "spec": "^0.2.1",
          "to": "node_modules/is-arrayish",
          "type": "prod",
        },
      },
      "location": "node_modules/error-ex",
      "name": "error-ex",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
    },
    "es6-error" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/release-zalgo",
          "name": "es6-error",
          "spec": "^4.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/es6-error",
      "name": "es6-error",
      "resolved": "https://registry.npmjs.org/es6-error/-/es6-error-4.1.1.tgz",
    },
    "escape-string-regexp" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/highlight/node_modules/chalk",
          "name": "escape-string-regexp",
          "spec": "^1.0.5",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/chalk",
          "name": "escape-string-regexp",
          "spec": "^1.0.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/ink/node_modules/chalk",
          "name": "escape-string-regexp",
          "spec": "^1.0.5",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap-mocha-reporter",
          "name": "escape-string-regexp",
          "spec": "^1.0.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/treport/node_modules/chalk",
          "name": "escape-string-regexp",
          "spec": "^1.0.5",
          "type": "prod",
        },
      },
      "location": "node_modules/escape-string-regexp",
      "name": "escape-string-regexp",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
    },
    "esm" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "esm",
          "spec": "^3.2.25",
          "type": "prod",
        },
      },
      "location": "node_modules/esm",
      "name": "esm",
      "resolved": "https://registry.npmjs.org/esm/-/esm-3.2.25.tgz",
    },
    "esprima" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/js-yaml",
          "name": "esprima",
          "spec": "^4.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/redeyed",
          "name": "esprima",
          "spec": "~4.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/esprima",
      "name": "esprima",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
    },
    "esutils" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/highlight",
          "name": "esutils",
          "spec": "^2.0.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/types",
          "name": "esutils",
          "spec": "^2.0.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-code-frame",
          "name": "esutils",
          "spec": "^2.0.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-helper-builder-react-jsx",
          "name": "esutils",
          "spec": "^2.0.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-types",
          "name": "esutils",
          "spec": "^2.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/esutils",
      "name": "esutils",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.2.tgz",
    },
    "events-to-array" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap-mocha-reporter/node_modules/tap-parser",
          "name": "events-to-array",
          "spec": "^1.0.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap-parser",
          "name": "events-to-array",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/events-to-array",
      "name": "events-to-array",
      "resolved": "https://registry.npmjs.org/events-to-array/-/events-to-array-1.1.2.tgz",
    },
    "extend" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "extend",
          "spec": "~3.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/extend",
      "name": "extend",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
    },
    "extsprintf" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/jsprim",
          "name": "extsprintf",
          "spec": "1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/verror",
          "name": "extsprintf",
          "spec": "^1.2.0",
          "type": "prod",
        },
      },
      "location": "node_modules/extsprintf",
      "name": "extsprintf",
      "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
    },
    "fast-deep-equal" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ajv",
          "name": "fast-deep-equal",
          "spec": "^2.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/fast-deep-equal",
      "name": "fast-deep-equal",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
    },
    "fast-json-stable-stringify" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ajv",
          "name": "fast-json-stable-stringify",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fast-json-stable-stringify",
      "name": "fast-json-stable-stringify",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.0.0.tgz",
    },
    "fill-range" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/braces",
          "name": "fill-range",
          "spec": "^7.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "to-regex-range" => Edge {
          "name": "to-regex-range",
          "spec": "^5.0.1",
          "to": "node_modules/to-regex-range",
          "type": "prod",
        },
      },
      "location": "node_modules/fill-range",
      "name": "fill-range",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
    },
    "find-cache-dir" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "find-cache-dir",
          "spec": "^2.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "commondir" => Edge {
          "name": "commondir",
          "spec": "^1.0.1",
          "to": "node_modules/commondir",
          "type": "prod",
        },
        "make-dir" => Edge {
          "name": "make-dir",
          "spec": "^2.0.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "pkg-dir" => Edge {
          "name": "pkg-dir",
          "spec": "^3.0.0",
          "to": "node_modules/pkg-dir",
          "type": "prod",
        },
      },
      "location": "node_modules/find-cache-dir",
      "name": "find-cache-dir",
      "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-2.1.0.tgz",
    },
    "find-up" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "find-up",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/pkg-dir",
          "name": "find-up",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/read-pkg-up",
          "name": "find-up",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/yargs",
          "name": "find-up",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "locate-path" => Edge {
          "name": "locate-path",
          "spec": "^3.0.0",
          "to": "node_modules/locate-path",
          "type": "prod",
        },
      },
      "location": "node_modules/find-up",
      "name": "find-up",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
    },
    "findit" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "findit",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/findit",
      "name": "findit",
      "resolved": "https://registry.npmjs.org/findit/-/findit-2.0.0.tgz",
    },
    "foreground-child" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "foreground-child",
          "spec": "^1.5.6",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/spawn-wrap",
          "name": "foreground-child",
          "spec": "^1.5.6",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "foreground-child",
          "spec": "^1.3.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "cross-spawn" => Edge {
          "name": "cross-spawn",
          "spec": "^4",
          "to": "node_modules/cross-spawn",
          "type": "prod",
        },
        "signal-exit" => Edge {
          "name": "signal-exit",
          "spec": "^3.0.0",
          "to": "node_modules/signal-exit",
          "type": "prod",
        },
      },
      "location": "node_modules/foreground-child",
      "name": "foreground-child",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-1.5.6.tgz",
    },
    "forever-agent" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "forever-agent",
          "spec": "~0.6.1",
          "type": "prod",
        },
      },
      "location": "node_modules/forever-agent",
      "name": "forever-agent",
      "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
    },
    "form-data" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "form-data",
          "spec": "~2.3.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "asynckit" => Edge {
          "name": "asynckit",
          "spec": "^0.4.0",
          "to": "node_modules/asynckit",
          "type": "prod",
        },
        "combined-stream" => Edge {
          "name": "combined-stream",
          "spec": "^1.0.6",
          "to": "node_modules/combined-stream",
          "type": "prod",
        },
        "mime-types" => Edge {
          "name": "mime-types",
          "spec": "^2.1.12",
          "to": "node_modules/mime-types",
          "type": "prod",
        },
      },
      "location": "node_modules/form-data",
      "name": "form-data",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
    },
    "fs-exists-cached" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "fs-exists-cached",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/fs-exists-cached",
      "name": "fs-exists-cached",
      "resolved": "https://registry.npmjs.org/fs-exists-cached/-/fs-exists-cached-1.0.0.tgz",
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
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
    },
    "function-loop" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "function-loop",
          "spec": "^1.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/function-loop",
      "name": "function-loop",
      "resolved": "https://registry.npmjs.org/function-loop/-/function-loop-1.0.2.tgz",
    },
    "get-caller-file" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yargs",
          "name": "get-caller-file",
          "spec": "^2.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/get-caller-file",
      "name": "get-caller-file",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
    },
    "getpass" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/sshpk",
          "name": "getpass",
          "spec": "^0.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "assert-plus" => Edge {
          "name": "assert-plus",
          "spec": "^1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
      },
      "location": "node_modules/getpass",
      "name": "getpass",
      "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
    },
    "glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "glob",
          "spec": "^7.1.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap-mocha-reporter",
          "name": "glob",
          "spec": "^7.0.5",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/test-exclude",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "prod",
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
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
    },
    "glob-parent" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chokidar",
          "name": "glob-parent",
          "spec": "~5.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-glob" => Edge {
          "name": "is-glob",
          "spec": "^4.0.1",
          "to": "node_modules/is-glob",
          "type": "prod",
        },
      },
      "location": "node_modules/glob-parent",
      "name": "glob-parent",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.0.tgz",
    },
    "globals" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-traverse",
          "name": "globals",
          "spec": "^9.18.0",
          "type": "prod",
        },
      },
      "location": "node_modules/globals",
      "name": "globals",
      "resolved": "https://registry.npmjs.org/globals/-/globals-9.18.0.tgz",
    },
    "graceful-fs" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cp-file",
          "name": "graceful-fs",
          "spec": "^4.1.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/load-json-file",
          "name": "graceful-fs",
          "spec": "^4.1.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/package-hash",
          "name": "graceful-fs",
          "spec": "^4.1.15",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/write-file-atomic",
          "name": "graceful-fs",
          "spec": "^4.1.11",
          "type": "prod",
        },
      },
      "location": "node_modules/graceful-fs",
      "name": "graceful-fs",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.1.15.tgz",
    },
    "growl" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/coveralls",
          "name": "growl",
          "spec": "~> 1.10.0",
          "type": "prod",
        },
      },
      "location": "node_modules/growl",
      "name": "growl",
      "resolved": "https://registry.npmjs.org/growl/-/growl-1.10.5.tgz",
    },
    "handlebars" => Node {
      "children": Map {
        "source-map" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/handlebars",
              "name": "source-map",
              "spec": "^0.6.1",
              "type": "prod",
            },
          },
          "location": "node_modules/handlebars/node_modules/source-map",
          "name": "source-map",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-reports",
          "name": "handlebars",
          "spec": "^4.1.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "minimist" => Edge {
          "name": "minimist",
          "spec": "^1.2.5",
          "to": "node_modules/minimist",
          "type": "prod",
        },
        "neo-async" => Edge {
          "name": "neo-async",
          "spec": "^2.6.0",
          "to": "node_modules/neo-async",
          "type": "prod",
        },
        "source-map" => Edge {
          "name": "source-map",
          "spec": "^0.6.1",
          "to": "node_modules/handlebars/node_modules/source-map",
          "type": "prod",
        },
        "uglify-js" => Edge {
          "name": "uglify-js",
          "spec": "^3.1.4",
          "to": "node_modules/uglify-js",
          "type": "optional",
        },
        "wordwrap" => Edge {
          "name": "wordwrap",
          "spec": "^1.0.0",
          "to": "node_modules/wordwrap",
          "type": "prod",
        },
      },
      "location": "node_modules/handlebars",
      "name": "handlebars",
      "resolved": "https://registry.npmjs.org/handlebars/-/handlebars-4.7.6.tgz",
    },
    "har-schema" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/har-validator",
          "name": "har-schema",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/har-schema",
      "name": "har-schema",
      "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
    },
    "har-validator" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "har-validator",
          "spec": "~5.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ajv" => Edge {
          "name": "ajv",
          "spec": "^6.5.5",
          "to": "node_modules/ajv",
          "type": "prod",
        },
        "har-schema" => Edge {
          "name": "har-schema",
          "spec": "^2.0.0",
          "to": "node_modules/har-schema",
          "type": "prod",
        },
      },
      "location": "node_modules/har-validator",
      "name": "har-validator",
      "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.3.tgz",
    },
    "has-ansi" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chalk",
          "name": "has-ansi",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ansi-regex" => Edge {
          "name": "ansi-regex",
          "spec": "^2.0.0",
          "to": "node_modules/ansi-regex",
          "type": "prod",
        },
      },
      "location": "node_modules/has-ansi",
      "name": "has-ansi",
      "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",
    },
    "has-flag" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/highlight/node_modules/supports-color",
          "name": "has-flag",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/ink/node_modules/supports-color",
          "name": "has-flag",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-report/node_modules/supports-color",
          "name": "has-flag",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/treport/node_modules/supports-color",
          "name": "has-flag",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/has-flag",
      "name": "has-flag",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
    },
    "hasha" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/caching-transform",
          "name": "hasha",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/package-hash",
          "name": "hasha",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-stream" => Edge {
          "name": "is-stream",
          "spec": "^1.0.1",
          "to": "node_modules/is-stream",
          "type": "prod",
        },
      },
      "location": "node_modules/hasha",
      "name": "hasha",
      "resolved": "https://registry.npmjs.org/hasha/-/hasha-3.0.0.tgz",
    },
    "home-or-tmp" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-register",
          "name": "home-or-tmp",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "os-homedir" => Edge {
          "name": "os-homedir",
          "spec": "^1.0.0",
          "to": "node_modules/os-homedir",
          "type": "prod",
        },
        "os-tmpdir" => Edge {
          "name": "os-tmpdir",
          "spec": "^1.0.1",
          "to": "node_modules/os-tmpdir",
          "type": "prod",
        },
      },
      "location": "node_modules/home-or-tmp",
      "name": "home-or-tmp",
      "resolved": "https://registry.npmjs.org/home-or-tmp/-/home-or-tmp-2.0.0.tgz",
    },
    "hosted-git-info" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/normalize-package-data",
          "name": "hosted-git-info",
          "spec": "^2.1.4",
          "type": "prod",
        },
      },
      "location": "node_modules/hosted-git-info",
      "name": "hosted-git-info",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.7.1.tgz",
    },
    "http-signature" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "http-signature",
          "spec": "~1.2.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "assert-plus" => Edge {
          "name": "assert-plus",
          "spec": "^1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
        "jsprim" => Edge {
          "name": "jsprim",
          "spec": "^1.2.2",
          "to": "node_modules/jsprim",
          "type": "prod",
        },
        "sshpk" => Edge {
          "name": "sshpk",
          "spec": "^1.7.0",
          "to": "node_modules/sshpk",
          "type": "prod",
        },
      },
      "location": "node_modules/http-signature",
      "name": "http-signature",
      "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
    },
    "import-jsx" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "import-jsx",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/treport",
          "name": "import-jsx",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "babel-core" => Edge {
          "name": "babel-core",
          "spec": "^6.25.0",
          "to": "node_modules/babel-core",
          "type": "prod",
        },
        "babel-plugin-transform-es2015-destructuring" => Edge {
          "name": "babel-plugin-transform-es2015-destructuring",
          "spec": "^6.23.0",
          "to": "node_modules/babel-plugin-transform-es2015-destructuring",
          "type": "prod",
        },
        "babel-plugin-transform-object-rest-spread" => Edge {
          "name": "babel-plugin-transform-object-rest-spread",
          "spec": "^6.23.0",
          "to": "node_modules/babel-plugin-transform-object-rest-spread",
          "type": "prod",
        },
        "babel-plugin-transform-react-jsx" => Edge {
          "name": "babel-plugin-transform-react-jsx",
          "spec": "^6.24.1",
          "to": "node_modules/babel-plugin-transform-react-jsx",
          "type": "prod",
        },
        "caller-path" => Edge {
          "name": "caller-path",
          "spec": "^2.0.0",
          "to": "node_modules/caller-path",
          "type": "prod",
        },
        "resolve-from" => Edge {
          "name": "resolve-from",
          "spec": "^3.0.0",
          "to": "node_modules/resolve-from",
          "type": "prod",
        },
      },
      "location": "node_modules/import-jsx",
      "name": "import-jsx",
      "resolved": "https://registry.npmjs.org/import-jsx/-/import-jsx-2.0.0.tgz",
    },
    "imurmurhash" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/write-file-atomic",
          "name": "imurmurhash",
          "spec": "^0.1.4",
          "type": "prod",
        },
      },
      "location": "node_modules/imurmurhash",
      "name": "imurmurhash",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
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
        Edge {
          "from": "node_modules/readable-stream",
          "name": "inherits",
          "spec": "~2.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/inherits",
      "name": "inherits",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
    },
    "ink" => Node {
      "children": Map {
        "ansi-regex" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/ink/node_modules/strip-ansi",
              "name": "ansi-regex",
              "spec": "^4.1.0",
              "type": "prod",
            },
          },
          "location": "node_modules/ink/node_modules/ansi-regex",
          "name": "ansi-regex",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
        },
        "ansi-styles" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/ink/node_modules/chalk",
              "name": "ansi-styles",
              "spec": "^3.2.1",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/ink/node_modules/wrap-ansi",
              "name": "ansi-styles",
              "spec": "^3.2.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "color-convert" => Edge {
              "name": "color-convert",
              "spec": "^1.9.0",
              "to": "node_modules/color-convert",
              "type": "prod",
            },
          },
          "location": "node_modules/ink/node_modules/ansi-styles",
          "name": "ansi-styles",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
        },
        "chalk" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/ink",
              "name": "chalk",
              "spec": "^2.4.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-styles" => Edge {
              "name": "ansi-styles",
              "spec": "^3.2.1",
              "to": "node_modules/ink/node_modules/ansi-styles",
              "type": "prod",
            },
            "escape-string-regexp" => Edge {
              "name": "escape-string-regexp",
              "spec": "^1.0.5",
              "to": "node_modules/escape-string-regexp",
              "type": "prod",
            },
            "supports-color" => Edge {
              "name": "supports-color",
              "spec": "^5.3.0",
              "to": "node_modules/ink/node_modules/supports-color",
              "type": "prod",
            },
          },
          "location": "node_modules/ink/node_modules/chalk",
          "name": "chalk",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
        },
        "string-width" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/ink/node_modules/wrap-ansi",
              "name": "string-width",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "emoji-regex" => Edge {
              "name": "emoji-regex",
              "spec": "^7.0.1",
              "to": "node_modules/emoji-regex",
              "type": "prod",
            },
            "is-fullwidth-code-point" => Edge {
              "name": "is-fullwidth-code-point",
              "spec": "^2.0.0",
              "to": "node_modules/is-fullwidth-code-point",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^5.1.0",
              "to": "node_modules/ink/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/ink/node_modules/string-width",
          "name": "string-width",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
        },
        "strip-ansi" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/ink/node_modules/string-width",
              "name": "strip-ansi",
              "spec": "^5.1.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/ink/node_modules/wrap-ansi",
              "name": "strip-ansi",
              "spec": "^5.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-regex" => Edge {
              "name": "ansi-regex",
              "spec": "^4.1.0",
              "to": "node_modules/ink/node_modules/ansi-regex",
              "type": "prod",
            },
          },
          "location": "node_modules/ink/node_modules/strip-ansi",
          "name": "strip-ansi",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
        },
        "supports-color" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/ink/node_modules/chalk",
              "name": "supports-color",
              "spec": "^5.3.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "has-flag" => Edge {
              "name": "has-flag",
              "spec": "^3.0.0",
              "to": "node_modules/has-flag",
              "type": "prod",
            },
          },
          "location": "node_modules/ink/node_modules/supports-color",
          "name": "supports-color",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
        },
        "wrap-ansi" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/ink",
              "name": "wrap-ansi",
              "spec": "^5.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-styles" => Edge {
              "name": "ansi-styles",
              "spec": "^3.2.0",
              "to": "node_modules/ink/node_modules/ansi-styles",
              "type": "prod",
            },
            "string-width" => Edge {
              "name": "string-width",
              "spec": "^3.0.0",
              "to": "node_modules/ink/node_modules/string-width",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^5.0.0",
              "to": "node_modules/ink/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/ink/node_modules/wrap-ansi",
          "name": "wrap-ansi",
          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/treport",
          "name": "ink",
          "spec": "^2.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@types/react" => Edge {
          "name": "@types/react",
          "spec": "^16.8.6",
          "to": "node_modules/@types/react",
          "type": "prod",
        },
        "arrify" => Edge {
          "name": "arrify",
          "spec": "^1.0.1",
          "to": "node_modules/arrify",
          "type": "prod",
        },
        "auto-bind" => Edge {
          "name": "auto-bind",
          "spec": "^2.0.0",
          "to": "node_modules/auto-bind",
          "type": "prod",
        },
        "chalk" => Edge {
          "name": "chalk",
          "spec": "^2.4.1",
          "to": "node_modules/ink/node_modules/chalk",
          "type": "prod",
        },
        "cli-cursor" => Edge {
          "name": "cli-cursor",
          "spec": "^2.1.0",
          "to": "node_modules/cli-cursor",
          "type": "prod",
        },
        "cli-truncate" => Edge {
          "name": "cli-truncate",
          "spec": "^1.1.0",
          "to": "node_modules/cli-truncate",
          "type": "prod",
        },
        "is-ci" => Edge {
          "name": "is-ci",
          "spec": "^2.0.0",
          "to": "node_modules/is-ci",
          "type": "prod",
        },
        "lodash.throttle" => Edge {
          "name": "lodash.throttle",
          "spec": "^4.1.1",
          "to": "node_modules/lodash.throttle",
          "type": "prod",
        },
        "log-update" => Edge {
          "name": "log-update",
          "spec": "^3.0.0",
          "to": "node_modules/log-update",
          "type": "prod",
        },
        "prop-types" => Edge {
          "name": "prop-types",
          "spec": "^15.6.2",
          "to": "node_modules/prop-types",
          "type": "prod",
        },
        "react" => Edge {
          "name": "react",
          "spec": ">=16.8.0",
          "to": "node_modules/react",
          "type": "peer",
        },
        "react-reconciler" => Edge {
          "name": "react-reconciler",
          "spec": "^0.20.0",
          "to": "node_modules/react-reconciler",
          "type": "prod",
        },
        "scheduler" => Edge {
          "name": "scheduler",
          "spec": "^0.13.2",
          "to": "node_modules/scheduler",
          "type": "prod",
        },
        "signal-exit" => Edge {
          "name": "signal-exit",
          "spec": "^3.0.2",
          "to": "node_modules/signal-exit",
          "type": "prod",
        },
        "slice-ansi" => Edge {
          "name": "slice-ansi",
          "spec": "^1.0.0",
          "to": "node_modules/slice-ansi",
          "type": "prod",
        },
        "string-length" => Edge {
          "name": "string-length",
          "spec": "^2.0.0",
          "to": "node_modules/string-length",
          "type": "prod",
        },
        "widest-line" => Edge {
          "name": "widest-line",
          "spec": "^2.0.0",
          "to": "node_modules/widest-line",
          "type": "prod",
        },
        "wrap-ansi" => Edge {
          "name": "wrap-ansi",
          "spec": "^5.0.0",
          "to": "node_modules/ink/node_modules/wrap-ansi",
          "type": "prod",
        },
        "yoga-layout-prebuilt" => Edge {
          "name": "yoga-layout-prebuilt",
          "spec": "^1.9.3",
          "to": "node_modules/yoga-layout-prebuilt",
          "type": "prod",
        },
      },
      "location": "node_modules/ink",
      "name": "ink",
      "resolved": "https://registry.npmjs.org/ink/-/ink-2.1.1.tgz",
    },
    "invariant" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-traverse",
          "name": "invariant",
          "spec": "^2.2.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "loose-envify" => Edge {
          "name": "loose-envify",
          "spec": "^1.0.0",
          "to": "node_modules/loose-envify",
          "type": "prod",
        },
      },
      "location": "node_modules/invariant",
      "name": "invariant",
      "resolved": "https://registry.npmjs.org/invariant/-/invariant-2.2.4.tgz",
    },
    "is-arrayish" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/error-ex",
          "name": "is-arrayish",
          "spec": "^0.2.1",
          "type": "prod",
        },
      },
      "location": "node_modules/is-arrayish",
      "name": "is-arrayish",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
    },
    "is-binary-path" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chokidar",
          "name": "is-binary-path",
          "spec": "~2.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "binary-extensions" => Edge {
          "name": "binary-extensions",
          "spec": "^2.0.0",
          "to": "node_modules/binary-extensions",
          "type": "prod",
        },
      },
      "location": "node_modules/is-binary-path",
      "name": "is-binary-path",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
    },
    "is-ci" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink",
          "name": "is-ci",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ci-info" => Edge {
          "name": "ci-info",
          "spec": "^2.0.0",
          "to": "node_modules/ci-info",
          "type": "prod",
        },
      },
      "location": "node_modules/is-ci",
      "name": "is-ci",
      "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
    },
    "is-extglob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/is-glob",
          "name": "is-extglob",
          "spec": "^2.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/is-extglob",
      "name": "is-extglob",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
    },
    "is-finite" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/repeating",
          "name": "is-finite",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "number-is-nan" => Edge {
          "name": "number-is-nan",
          "spec": "^1.0.0",
          "to": "node_modules/number-is-nan",
          "type": "prod",
        },
      },
      "location": "node_modules/is-finite",
      "name": "is-finite",
      "resolved": "https://registry.npmjs.org/is-finite/-/is-finite-1.0.2.tgz",
    },
    "is-fullwidth-code-point" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink/node_modules/string-width",
          "name": "is-fullwidth-code-point",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/log-update/node_modules/string-width",
          "name": "is-fullwidth-code-point",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/slice-ansi",
          "name": "is-fullwidth-code-point",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/string-width",
          "name": "is-fullwidth-code-point",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/yargs/node_modules/string-width",
          "name": "is-fullwidth-code-point",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/is-fullwidth-code-point",
      "name": "is-fullwidth-code-point",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
    },
    "is-glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chokidar",
          "name": "is-glob",
          "spec": "~4.0.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/glob-parent",
          "name": "is-glob",
          "spec": "^4.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-extglob" => Edge {
          "name": "is-extglob",
          "spec": "^2.1.1",
          "to": "node_modules/is-extglob",
          "type": "prod",
        },
      },
      "location": "node_modules/is-glob",
      "name": "is-glob",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
    },
    "is-number" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/to-regex-range",
          "name": "is-number",
          "spec": "^7.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/is-number",
      "name": "is-number",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
    },
    "is-stream" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/hasha",
          "name": "is-stream",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/is-stream",
      "name": "is-stream",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
    },
    "is-typedarray" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "is-typedarray",
          "spec": "~1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/is-typedarray",
      "name": "is-typedarray",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
    },
    "isarray" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/readable-stream",
          "name": "isarray",
          "spec": "~1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/isarray",
      "name": "isarray",
      "optional": true,
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
    },
    "isexe" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "isexe",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/which",
          "name": "isexe",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/isexe",
      "name": "isexe",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
    },
    "isstream" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "isstream",
          "spec": "~0.1.2",
          "type": "prod",
        },
      },
      "location": "node_modules/isstream",
      "name": "isstream",
      "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
    },
    "istanbul-lib-coverage" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-processinfo",
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-report",
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-source-maps",
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/nyc",
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-coverage",
      "name": "istanbul-lib-coverage",
      "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.5.tgz",
    },
    "istanbul-lib-hook" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "istanbul-lib-hook",
          "spec": "^2.0.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "append-transform" => Edge {
          "name": "append-transform",
          "spec": "^1.0.0",
          "to": "node_modules/append-transform",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-hook",
      "name": "istanbul-lib-hook",
      "resolved": "https://registry.npmjs.org/istanbul-lib-hook/-/istanbul-lib-hook-2.0.7.tgz",
    },
    "istanbul-lib-instrument" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "istanbul-lib-instrument",
          "spec": "^3.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/generator" => Edge {
          "name": "@babel/generator",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/generator",
          "type": "prod",
        },
        "@babel/parser" => Edge {
          "name": "@babel/parser",
          "spec": "^7.4.3",
          "to": "node_modules/@babel/parser",
          "type": "prod",
        },
        "@babel/template" => Edge {
          "name": "@babel/template",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/template",
          "type": "prod",
        },
        "@babel/traverse" => Edge {
          "name": "@babel/traverse",
          "spec": "^7.4.3",
          "to": "node_modules/@babel/traverse",
          "type": "prod",
        },
        "@babel/types" => Edge {
          "name": "@babel/types",
          "spec": "^7.4.0",
          "to": "node_modules/@babel/types",
          "type": "prod",
        },
        "istanbul-lib-coverage" => Edge {
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "to": "node_modules/istanbul-lib-coverage",
          "type": "prod",
        },
        "semver" => Edge {
          "name": "semver",
          "spec": "^6.0.0",
          "to": "node_modules/semver",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-instrument",
      "name": "istanbul-lib-instrument",
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-3.3.0.tgz",
    },
    "istanbul-lib-processinfo" => Node {
      "children": Map {
        "cross-spawn" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/istanbul-lib-processinfo",
              "name": "cross-spawn",
              "spec": "^6.0.5",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "nice-try" => Edge {
              "name": "nice-try",
              "spec": "^1.0.4",
              "to": "node_modules/nice-try",
              "type": "prod",
            },
            "path-key" => Edge {
              "name": "path-key",
              "spec": "^2.0.1",
              "to": "node_modules/path-key",
              "type": "prod",
            },
            "semver" => Edge {
              "name": "semver",
              "spec": "^5.5.0",
              "to": "node_modules/istanbul-lib-processinfo/node_modules/semver",
              "type": "prod",
            },
            "shebang-command" => Edge {
              "name": "shebang-command",
              "spec": "^1.2.0",
              "to": "node_modules/shebang-command",
              "type": "prod",
            },
            "which" => Edge {
              "name": "which",
              "spec": "^1.2.9",
              "to": "node_modules/which",
              "type": "prod",
            },
          },
          "location": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "name": "cross-spawn",
          "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
        },
        "semver" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
              "name": "semver",
              "spec": "^5.5.0",
              "type": "prod",
            },
          },
          "location": "node_modules/istanbul-lib-processinfo/node_modules/semver",
          "name": "semver",
          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "istanbul-lib-processinfo",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "archy" => Edge {
          "name": "archy",
          "spec": "^1.0.0",
          "to": "node_modules/archy",
          "type": "prod",
        },
        "cross-spawn" => Edge {
          "name": "cross-spawn",
          "spec": "^6.0.5",
          "to": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "type": "prod",
        },
        "istanbul-lib-coverage" => Edge {
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.3",
          "to": "node_modules/istanbul-lib-coverage",
          "type": "prod",
        },
        "rimraf" => Edge {
          "name": "rimraf",
          "spec": "^2.6.3",
          "to": "node_modules/rimraf",
          "type": "prod",
        },
        "uuid" => Edge {
          "name": "uuid",
          "spec": "^3.3.2",
          "to": "node_modules/uuid",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-processinfo",
      "name": "istanbul-lib-processinfo",
      "resolved": "https://registry.npmjs.org/istanbul-lib-processinfo/-/istanbul-lib-processinfo-1.0.0.tgz",
    },
    "istanbul-lib-report" => Node {
      "children": Map {
        "supports-color" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/istanbul-lib-report",
              "name": "supports-color",
              "spec": "^6.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "has-flag" => Edge {
              "name": "has-flag",
              "spec": "^3.0.0",
              "to": "node_modules/has-flag",
              "type": "prod",
            },
          },
          "location": "node_modules/istanbul-lib-report/node_modules/supports-color",
          "name": "supports-color",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "istanbul-lib-report",
          "spec": "^2.0.8",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "istanbul-lib-coverage" => Edge {
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "to": "node_modules/istanbul-lib-coverage",
          "type": "prod",
        },
        "make-dir" => Edge {
          "name": "make-dir",
          "spec": "^2.1.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "supports-color" => Edge {
          "name": "supports-color",
          "spec": "^6.1.0",
          "to": "node_modules/istanbul-lib-report/node_modules/supports-color",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-report",
      "name": "istanbul-lib-report",
      "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-2.0.8.tgz",
    },
    "istanbul-lib-source-maps" => Node {
      "children": Map {
        "debug" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/istanbul-lib-source-maps",
              "name": "debug",
              "spec": "^4.1.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ms" => Edge {
              "name": "ms",
              "spec": "^2.1.1",
              "to": "node_modules/istanbul-lib-source-maps/node_modules/ms",
              "type": "prod",
            },
          },
          "location": "node_modules/istanbul-lib-source-maps/node_modules/debug",
          "name": "debug",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
        },
        "ms" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/istanbul-lib-source-maps/node_modules/debug",
              "name": "ms",
              "spec": "^2.1.1",
              "type": "prod",
            },
          },
          "location": "node_modules/istanbul-lib-source-maps/node_modules/ms",
          "name": "ms",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
        },
        "source-map" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/istanbul-lib-source-maps",
              "name": "source-map",
              "spec": "^0.6.1",
              "type": "prod",
            },
          },
          "location": "node_modules/istanbul-lib-source-maps/node_modules/source-map",
          "name": "source-map",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "istanbul-lib-source-maps",
          "spec": "^3.0.6",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "debug" => Edge {
          "name": "debug",
          "spec": "^4.1.1",
          "to": "node_modules/istanbul-lib-source-maps/node_modules/debug",
          "type": "prod",
        },
        "istanbul-lib-coverage" => Edge {
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "to": "node_modules/istanbul-lib-coverage",
          "type": "prod",
        },
        "make-dir" => Edge {
          "name": "make-dir",
          "spec": "^2.1.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "rimraf" => Edge {
          "name": "rimraf",
          "spec": "^2.6.3",
          "to": "node_modules/rimraf",
          "type": "prod",
        },
        "source-map" => Edge {
          "name": "source-map",
          "spec": "^0.6.1",
          "to": "node_modules/istanbul-lib-source-maps/node_modules/source-map",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-lib-source-maps",
      "name": "istanbul-lib-source-maps",
      "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-3.0.6.tgz",
    },
    "istanbul-reports" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "istanbul-reports",
          "spec": "^2.2.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "handlebars" => Edge {
          "name": "handlebars",
          "spec": "^4.1.2",
          "to": "node_modules/handlebars",
          "type": "prod",
        },
      },
      "location": "node_modules/istanbul-reports",
      "name": "istanbul-reports",
      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-2.2.4.tgz",
    },
    "jackspeak" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "jackspeak",
          "spec": "^1.3.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "cliui" => Edge {
          "name": "cliui",
          "spec": "^4.1.0",
          "to": "node_modules/cliui",
          "type": "prod",
        },
      },
      "location": "node_modules/jackspeak",
      "name": "jackspeak",
      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-1.3.7.tgz",
    },
    "js-tokens" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-code-frame",
          "name": "js-tokens",
          "spec": "^3.0.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/loose-envify",
          "name": "js-tokens",
          "spec": "^3.0.0 || ^4.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/js-tokens",
      "name": "js-tokens",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-3.0.2.tgz",
    },
    "js-yaml" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/coveralls",
          "name": "js-yaml",
          "spec": "^3.11.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/nyc",
          "name": "js-yaml",
          "spec": "^3.13.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "argparse" => Edge {
          "name": "argparse",
          "spec": "^1.0.7",
          "to": "node_modules/argparse",
          "type": "prod",
        },
        "esprima" => Edge {
          "name": "esprima",
          "spec": "^4.0.0",
          "to": "node_modules/esprima",
          "type": "prod",
        },
      },
      "location": "node_modules/js-yaml",
      "name": "js-yaml",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.13.1.tgz",
    },
    "jsbn" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ecc-jsbn",
          "name": "jsbn",
          "spec": "~0.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/sshpk",
          "name": "jsbn",
          "spec": "~0.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/jsbn",
      "name": "jsbn",
      "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
    },
    "jsesc" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-generator",
          "name": "jsesc",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "location": "node_modules/jsesc",
      "name": "jsesc",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-1.3.0.tgz",
    },
    "json-parse-better-errors" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/parse-json",
          "name": "json-parse-better-errors",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/json-parse-better-errors",
      "name": "json-parse-better-errors",
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
    },
    "json-schema" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/jsprim",
          "name": "json-schema",
          "spec": "0.2.3",
          "type": "prod",
        },
      },
      "location": "node_modules/json-schema",
      "name": "json-schema",
      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
    },
    "json-schema-traverse" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ajv",
          "name": "json-schema-traverse",
          "spec": "^0.4.1",
          "type": "prod",
        },
      },
      "location": "node_modules/json-schema-traverse",
      "name": "json-schema-traverse",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
    },
    "json-stringify-safe" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "json-stringify-safe",
          "spec": "~5.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/json-stringify-safe",
      "name": "json-stringify-safe",
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
    },
    "json5" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "json5",
          "spec": "^0.5.1",
          "type": "prod",
        },
      },
      "location": "node_modules/json5",
      "name": "json5",
      "resolved": "https://registry.npmjs.org/json5/-/json5-0.5.1.tgz",
    },
    "jsprim" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/http-signature",
          "name": "jsprim",
          "spec": "^1.2.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "assert-plus" => Edge {
          "name": "assert-plus",
          "spec": "1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
        "extsprintf" => Edge {
          "name": "extsprintf",
          "spec": "1.3.0",
          "to": "node_modules/extsprintf",
          "type": "prod",
        },
        "json-schema" => Edge {
          "name": "json-schema",
          "spec": "0.2.3",
          "to": "node_modules/json-schema",
          "type": "prod",
        },
        "verror" => Edge {
          "name": "verror",
          "spec": "1.10.0",
          "to": "node_modules/verror",
          "type": "prod",
        },
      },
      "location": "node_modules/jsprim",
      "name": "jsprim",
      "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
    },
    "lcov-parse" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/coveralls",
          "name": "lcov-parse",
          "spec": "^0.0.10",
          "type": "prod",
        },
      },
      "location": "node_modules/lcov-parse",
      "name": "lcov-parse",
      "resolved": "https://registry.npmjs.org/lcov-parse/-/lcov-parse-0.0.10.tgz",
    },
    "load-json-file" => Node {
      "children": Map {
        "pify" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/load-json-file",
              "name": "pify",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/load-json-file/node_modules/pify",
          "name": "pify",
          "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/read-pkg",
          "name": "load-json-file",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "graceful-fs" => Edge {
          "name": "graceful-fs",
          "spec": "^4.1.2",
          "to": "node_modules/graceful-fs",
          "type": "prod",
        },
        "parse-json" => Edge {
          "name": "parse-json",
          "spec": "^4.0.0",
          "to": "node_modules/parse-json",
          "type": "prod",
        },
        "pify" => Edge {
          "name": "pify",
          "spec": "^3.0.0",
          "to": "node_modules/load-json-file/node_modules/pify",
          "type": "prod",
        },
        "strip-bom" => Edge {
          "name": "strip-bom",
          "spec": "^3.0.0",
          "to": "node_modules/strip-bom",
          "type": "prod",
        },
      },
      "location": "node_modules/load-json-file",
      "name": "load-json-file",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-4.0.0.tgz",
    },
    "locate-path" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/find-up",
          "name": "locate-path",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "p-locate" => Edge {
          "name": "p-locate",
          "spec": "^3.0.0",
          "to": "node_modules/p-locate",
          "type": "prod",
        },
        "path-exists" => Edge {
          "name": "path-exists",
          "spec": "^3.0.0",
          "to": "node_modules/path-exists",
          "type": "prod",
        },
      },
      "location": "node_modules/locate-path",
      "name": "locate-path",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
    },
    "lodash" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/generator",
          "name": "lodash",
          "spec": "^4.17.11",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/traverse",
          "name": "lodash",
          "spec": "^4.17.11",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/@babel/types",
          "name": "lodash",
          "spec": "^4.17.11",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-core",
          "name": "lodash",
          "spec": "^4.17.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-generator",
          "name": "lodash",
          "spec": "^4.17.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-register",
          "name": "lodash",
          "spec": "^4.17.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-template",
          "name": "lodash",
          "spec": "^4.17.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-traverse",
          "name": "lodash",
          "spec": "^4.17.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-types",
          "name": "lodash",
          "spec": "^4.17.4",
          "type": "prod",
        },
      },
      "location": "node_modules/lodash",
      "name": "lodash",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.15.tgz",
    },
    "lodash.flattendeep" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/package-hash",
          "name": "lodash.flattendeep",
          "spec": "^4.4.0",
          "type": "prod",
        },
      },
      "location": "node_modules/lodash.flattendeep",
      "name": "lodash.flattendeep",
      "resolved": "https://registry.npmjs.org/lodash.flattendeep/-/lodash.flattendeep-4.4.0.tgz",
    },
    "lodash.throttle" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink",
          "name": "lodash.throttle",
          "spec": "^4.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/lodash.throttle",
      "name": "lodash.throttle",
      "resolved": "https://registry.npmjs.org/lodash.throttle/-/lodash.throttle-4.1.1.tgz",
    },
    "log-driver" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/coveralls",
          "name": "log-driver",
          "spec": "^1.2.7",
          "type": "prod",
        },
      },
      "location": "node_modules/log-driver",
      "name": "log-driver",
      "resolved": "https://registry.npmjs.org/log-driver/-/log-driver-1.2.7.tgz",
    },
    "log-update" => Node {
      "children": Map {
        "ansi-regex" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/log-update/node_modules/strip-ansi",
              "name": "ansi-regex",
              "spec": "^4.1.0",
              "type": "prod",
            },
          },
          "location": "node_modules/log-update/node_modules/ansi-regex",
          "name": "ansi-regex",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
        },
        "ansi-styles" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/log-update/node_modules/wrap-ansi",
              "name": "ansi-styles",
              "spec": "^3.2.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "color-convert" => Edge {
              "name": "color-convert",
              "spec": "^1.9.0",
              "to": "node_modules/color-convert",
              "type": "prod",
            },
          },
          "location": "node_modules/log-update/node_modules/ansi-styles",
          "name": "ansi-styles",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
        },
        "string-width" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/log-update/node_modules/wrap-ansi",
              "name": "string-width",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "emoji-regex" => Edge {
              "name": "emoji-regex",
              "spec": "^7.0.1",
              "to": "node_modules/emoji-regex",
              "type": "prod",
            },
            "is-fullwidth-code-point" => Edge {
              "name": "is-fullwidth-code-point",
              "spec": "^2.0.0",
              "to": "node_modules/is-fullwidth-code-point",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^5.1.0",
              "to": "node_modules/log-update/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/log-update/node_modules/string-width",
          "name": "string-width",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
        },
        "strip-ansi" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/log-update/node_modules/string-width",
              "name": "strip-ansi",
              "spec": "^5.1.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/log-update/node_modules/wrap-ansi",
              "name": "strip-ansi",
              "spec": "^5.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-regex" => Edge {
              "name": "ansi-regex",
              "spec": "^4.1.0",
              "to": "node_modules/log-update/node_modules/ansi-regex",
              "type": "prod",
            },
          },
          "location": "node_modules/log-update/node_modules/strip-ansi",
          "name": "strip-ansi",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
        },
        "wrap-ansi" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/log-update",
              "name": "wrap-ansi",
              "spec": "^5.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-styles" => Edge {
              "name": "ansi-styles",
              "spec": "^3.2.0",
              "to": "node_modules/log-update/node_modules/ansi-styles",
              "type": "prod",
            },
            "string-width" => Edge {
              "name": "string-width",
              "spec": "^3.0.0",
              "to": "node_modules/log-update/node_modules/string-width",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^5.0.0",
              "to": "node_modules/log-update/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/log-update/node_modules/wrap-ansi",
          "name": "wrap-ansi",
          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink",
          "name": "log-update",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ansi-escapes" => Edge {
          "name": "ansi-escapes",
          "spec": "^3.2.0",
          "to": "node_modules/ansi-escapes",
          "type": "prod",
        },
        "cli-cursor" => Edge {
          "name": "cli-cursor",
          "spec": "^2.1.0",
          "to": "node_modules/cli-cursor",
          "type": "prod",
        },
        "wrap-ansi" => Edge {
          "name": "wrap-ansi",
          "spec": "^5.0.0",
          "to": "node_modules/log-update/node_modules/wrap-ansi",
          "type": "prod",
        },
      },
      "location": "node_modules/log-update",
      "name": "log-update",
      "resolved": "https://registry.npmjs.org/log-update/-/log-update-3.2.0.tgz",
    },
    "loose-envify" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/invariant",
          "name": "loose-envify",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/prop-types",
          "name": "loose-envify",
          "spec": "^1.4.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/react",
          "name": "loose-envify",
          "spec": "^1.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/react-reconciler",
          "name": "loose-envify",
          "spec": "^1.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/scheduler",
          "name": "loose-envify",
          "spec": "^1.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "js-tokens" => Edge {
          "name": "js-tokens",
          "spec": "^3.0.0 || ^4.0.0",
          "to": "node_modules/js-tokens",
          "type": "prod",
        },
      },
      "location": "node_modules/loose-envify",
      "name": "loose-envify",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
    },
    "lru-cache" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cross-spawn",
          "name": "lru-cache",
          "spec": "^4.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "pseudomap" => Edge {
          "name": "pseudomap",
          "spec": "^1.0.2",
          "to": "node_modules/pseudomap",
          "type": "prod",
        },
        "yallist" => Edge {
          "name": "yallist",
          "spec": "^2.1.2",
          "to": "node_modules/yallist",
          "type": "prod",
        },
      },
      "location": "node_modules/lru-cache",
      "name": "lru-cache",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
    },
    "make-dir" => Node {
      "children": Map {
        "semver" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/make-dir",
              "name": "semver",
              "spec": "^5.6.0",
              "type": "prod",
            },
          },
          "location": "node_modules/make-dir/node_modules/semver",
          "name": "semver",
          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/caching-transform",
          "name": "make-dir",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/cp-file",
          "name": "make-dir",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/find-cache-dir",
          "name": "make-dir",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-report",
          "name": "make-dir",
          "spec": "^2.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-source-maps",
          "name": "make-dir",
          "spec": "^2.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/nyc",
          "name": "make-dir",
          "spec": "^2.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "pify" => Edge {
          "name": "pify",
          "spec": "^4.0.1",
          "to": "node_modules/pify",
          "type": "prod",
        },
        "semver" => Edge {
          "name": "semver",
          "spec": "^5.6.0",
          "to": "node_modules/make-dir/node_modules/semver",
          "type": "prod",
        },
      },
      "location": "node_modules/make-dir",
      "name": "make-dir",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
    },
    "make-error" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ts-node",
          "name": "make-error",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/make-error",
      "name": "make-error",
      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.5.tgz",
    },
    "merge-source-map" => Node {
      "children": Map {
        "source-map" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/merge-source-map",
              "name": "source-map",
              "spec": "^0.6.1",
              "type": "prod",
            },
          },
          "location": "node_modules/merge-source-map/node_modules/source-map",
          "name": "source-map",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "merge-source-map",
          "spec": "^1.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "source-map" => Edge {
          "name": "source-map",
          "spec": "^0.6.1",
          "to": "node_modules/merge-source-map/node_modules/source-map",
          "type": "prod",
        },
      },
      "location": "node_modules/merge-source-map",
      "name": "merge-source-map",
      "resolved": "https://registry.npmjs.org/merge-source-map/-/merge-source-map-1.1.0.tgz",
    },
    "mime-db" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/mime-types",
          "name": "mime-db",
          "spec": "1.40.0",
          "type": "prod",
        },
      },
      "location": "node_modules/mime-db",
      "name": "mime-db",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.40.0.tgz",
    },
    "mime-types" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/form-data",
          "name": "mime-types",
          "spec": "^2.1.12",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/request",
          "name": "mime-types",
          "spec": "~2.1.19",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "mime-db" => Edge {
          "name": "mime-db",
          "spec": "1.40.0",
          "to": "node_modules/mime-db",
          "type": "prod",
        },
      },
      "location": "node_modules/mime-types",
      "name": "mime-types",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.24.tgz",
    },
    "mimic-fn" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/onetime",
          "name": "mimic-fn",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/mimic-fn",
      "name": "mimic-fn",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
    },
    "minimatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/test-exclude",
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
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
    },
    "minimist" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/coveralls",
          "name": "minimist",
          "spec": "^1.2.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/handlebars",
          "name": "minimist",
          "spec": "^1.2.5",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/mkdirp",
          "name": "minimist",
          "spec": "^1.2.5",
          "type": "prod",
        },
      },
      "location": "node_modules/minimist",
      "name": "minimist",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
    },
    "minipass" => Node {
      "children": Map {
        "yallist" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/minipass",
              "name": "yallist",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/minipass/node_modules/yallist",
          "name": "yallist",
          "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.0.3.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "minipass",
          "spec": "^2.3.5",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap-mocha-reporter/node_modules/tap-parser",
          "name": "minipass",
          "spec": "^2.2.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap-parser",
          "name": "minipass",
          "spec": "^2.2.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "safe-buffer" => Edge {
          "name": "safe-buffer",
          "spec": "^5.1.2",
          "to": "node_modules/safe-buffer",
          "type": "prod",
        },
        "yallist" => Edge {
          "name": "yallist",
          "spec": "^3.0.0",
          "to": "node_modules/minipass/node_modules/yallist",
          "type": "prod",
        },
      },
      "location": "node_modules/minipass",
      "name": "minipass",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-2.3.5.tgz",
    },
    "mkdirp" => Node {
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "mkdirp",
          "spec": "^0.5.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-register",
          "name": "mkdirp",
          "spec": "^0.5.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/spawn-wrap",
          "name": "mkdirp",
          "spec": "^0.5.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "mkdirp",
          "spec": "^0.5.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "minimist" => Edge {
          "name": "minimist",
          "spec": "^1.2.5",
          "to": "node_modules/minimist",
          "type": "prod",
        },
      },
      "location": "node_modules/mkdirp",
      "name": "mkdirp",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
    },
    "ms" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/debug",
          "name": "ms",
          "spec": "2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/ms",
      "name": "ms",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
    },
    "neo-async" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/handlebars",
          "name": "neo-async",
          "spec": "^2.6.0",
          "type": "prod",
        },
      },
      "location": "node_modules/neo-async",
      "name": "neo-async",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.0.tgz",
    },
    "nested-error-stacks" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cp-file",
          "name": "nested-error-stacks",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/nested-error-stacks",
      "name": "nested-error-stacks",
      "resolved": "https://registry.npmjs.org/nested-error-stacks/-/nested-error-stacks-2.1.0.tgz",
    },
    "nice-try" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "name": "nice-try",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "location": "node_modules/nice-try",
      "name": "nice-try",
      "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
    },
    "normalize-package-data" => Node {
      "children": Map {
        "semver" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/normalize-package-data",
              "name": "semver",
              "spec": "2 || 3 || 4 || 5",
              "type": "prod",
            },
          },
          "location": "node_modules/normalize-package-data/node_modules/semver",
          "name": "semver",
          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/read-pkg",
          "name": "normalize-package-data",
          "spec": "^2.3.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "hosted-git-info" => Edge {
          "name": "hosted-git-info",
          "spec": "^2.1.4",
          "to": "node_modules/hosted-git-info",
          "type": "prod",
        },
        "resolve" => Edge {
          "name": "resolve",
          "spec": "^1.10.0",
          "to": "node_modules/resolve",
          "type": "prod",
        },
        "semver" => Edge {
          "name": "semver",
          "spec": "2 || 3 || 4 || 5",
          "to": "node_modules/normalize-package-data/node_modules/semver",
          "type": "prod",
        },
        "validate-npm-package-license" => Edge {
          "name": "validate-npm-package-license",
          "spec": "^3.0.1",
          "to": "node_modules/validate-npm-package-license",
          "type": "prod",
        },
      },
      "location": "node_modules/normalize-package-data",
      "name": "normalize-package-data",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
    },
    "normalize-path" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/anymatch",
          "name": "normalize-path",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/chokidar",
          "name": "normalize-path",
          "spec": "~3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/normalize-path",
      "name": "normalize-path",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
    },
    "number-is-nan" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/is-finite",
          "name": "number-is-nan",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/wrap-ansi/node_modules/is-fullwidth-code-point",
          "name": "number-is-nan",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/number-is-nan",
      "name": "number-is-nan",
      "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
    },
    "nyc" => Node {
      "children": Map {
        "resolve-from" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/nyc",
              "name": "resolve-from",
              "spec": "^4.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/nyc/node_modules/resolve-from",
          "name": "resolve-from",
          "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "nyc",
          "spec": "^14.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "archy" => Edge {
          "name": "archy",
          "spec": "^1.0.0",
          "to": "node_modules/archy",
          "type": "prod",
        },
        "caching-transform" => Edge {
          "name": "caching-transform",
          "spec": "^3.0.2",
          "to": "node_modules/caching-transform",
          "type": "prod",
        },
        "convert-source-map" => Edge {
          "name": "convert-source-map",
          "spec": "^1.6.0",
          "to": "node_modules/convert-source-map",
          "type": "prod",
        },
        "cp-file" => Edge {
          "name": "cp-file",
          "spec": "^6.2.0",
          "to": "node_modules/cp-file",
          "type": "prod",
        },
        "find-cache-dir" => Edge {
          "name": "find-cache-dir",
          "spec": "^2.1.0",
          "to": "node_modules/find-cache-dir",
          "type": "prod",
        },
        "find-up" => Edge {
          "name": "find-up",
          "spec": "^3.0.0",
          "to": "node_modules/find-up",
          "type": "prod",
        },
        "foreground-child" => Edge {
          "name": "foreground-child",
          "spec": "^1.5.6",
          "to": "node_modules/foreground-child",
          "type": "prod",
        },
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "prod",
        },
        "istanbul-lib-coverage" => Edge {
          "name": "istanbul-lib-coverage",
          "spec": "^2.0.5",
          "to": "node_modules/istanbul-lib-coverage",
          "type": "prod",
        },
        "istanbul-lib-hook" => Edge {
          "name": "istanbul-lib-hook",
          "spec": "^2.0.7",
          "to": "node_modules/istanbul-lib-hook",
          "type": "prod",
        },
        "istanbul-lib-instrument" => Edge {
          "name": "istanbul-lib-instrument",
          "spec": "^3.3.0",
          "to": "node_modules/istanbul-lib-instrument",
          "type": "prod",
        },
        "istanbul-lib-report" => Edge {
          "name": "istanbul-lib-report",
          "spec": "^2.0.8",
          "to": "node_modules/istanbul-lib-report",
          "type": "prod",
        },
        "istanbul-lib-source-maps" => Edge {
          "name": "istanbul-lib-source-maps",
          "spec": "^3.0.6",
          "to": "node_modules/istanbul-lib-source-maps",
          "type": "prod",
        },
        "istanbul-reports" => Edge {
          "name": "istanbul-reports",
          "spec": "^2.2.4",
          "to": "node_modules/istanbul-reports",
          "type": "prod",
        },
        "js-yaml" => Edge {
          "name": "js-yaml",
          "spec": "^3.13.1",
          "to": "node_modules/js-yaml",
          "type": "prod",
        },
        "make-dir" => Edge {
          "name": "make-dir",
          "spec": "^2.1.0",
          "to": "node_modules/make-dir",
          "type": "prod",
        },
        "merge-source-map" => Edge {
          "name": "merge-source-map",
          "spec": "^1.1.0",
          "to": "node_modules/merge-source-map",
          "type": "prod",
        },
        "resolve-from" => Edge {
          "name": "resolve-from",
          "spec": "^4.0.0",
          "to": "node_modules/nyc/node_modules/resolve-from",
          "type": "prod",
        },
        "rimraf" => Edge {
          "name": "rimraf",
          "spec": "^2.6.3",
          "to": "node_modules/rimraf",
          "type": "prod",
        },
        "signal-exit" => Edge {
          "name": "signal-exit",
          "spec": "^3.0.2",
          "to": "node_modules/signal-exit",
          "type": "prod",
        },
        "spawn-wrap" => Edge {
          "name": "spawn-wrap",
          "spec": "^1.4.2",
          "to": "node_modules/spawn-wrap",
          "type": "prod",
        },
        "test-exclude" => Edge {
          "name": "test-exclude",
          "spec": "^5.2.3",
          "to": "node_modules/test-exclude",
          "type": "prod",
        },
        "uuid" => Edge {
          "name": "uuid",
          "spec": "^3.3.2",
          "to": "node_modules/uuid",
          "type": "prod",
        },
        "yargs" => Edge {
          "name": "yargs",
          "spec": "^13.2.2",
          "to": "node_modules/yargs",
          "type": "prod",
        },
        "yargs-parser" => Edge {
          "name": "yargs-parser",
          "spec": "^13.0.0",
          "to": "node_modules/yargs-parser",
          "type": "prod",
        },
      },
      "location": "node_modules/nyc",
      "name": "nyc",
      "resolved": "https://registry.npmjs.org/nyc/-/nyc-14.1.1.tgz",
    },
    "oauth-sign" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "oauth-sign",
          "spec": "~0.9.0",
          "type": "prod",
        },
      },
      "location": "node_modules/oauth-sign",
      "name": "oauth-sign",
      "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
    },
    "object-assign" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/prop-types",
          "name": "object-assign",
          "spec": "^4.1.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/react",
          "name": "object-assign",
          "spec": "^4.1.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/react-reconciler",
          "name": "object-assign",
          "spec": "^4.1.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/scheduler",
          "name": "object-assign",
          "spec": "^4.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/object-assign",
      "name": "object-assign",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
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
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
    },
    "onetime" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/restore-cursor",
          "name": "onetime",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "mimic-fn" => Edge {
          "name": "mimic-fn",
          "spec": "^1.0.0",
          "to": "node_modules/mimic-fn",
          "type": "prod",
        },
      },
      "location": "node_modules/onetime",
      "name": "onetime",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
    },
    "opener" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "opener",
          "spec": "^1.5.1",
          "type": "prod",
        },
      },
      "location": "node_modules/opener",
      "name": "opener",
      "resolved": "https://registry.npmjs.org/opener/-/opener-1.5.1.tgz",
    },
    "os-homedir" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/home-or-tmp",
          "name": "os-homedir",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/spawn-wrap",
          "name": "os-homedir",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/os-homedir",
      "name": "os-homedir",
      "resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
    },
    "os-tmpdir" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/home-or-tmp",
          "name": "os-tmpdir",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/os-tmpdir",
      "name": "os-tmpdir",
      "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
    },
    "own-or" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/own-or-env",
          "name": "own-or",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "own-or",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/own-or",
      "name": "own-or",
      "resolved": "https://registry.npmjs.org/own-or/-/own-or-1.0.0.tgz",
    },
    "own-or-env" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "own-or-env",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "own-or" => Edge {
          "name": "own-or",
          "spec": "^1.0.0",
          "to": "node_modules/own-or",
          "type": "prod",
        },
      },
      "location": "node_modules/own-or-env",
      "name": "own-or-env",
      "resolved": "https://registry.npmjs.org/own-or-env/-/own-or-env-1.0.1.tgz",
    },
    "p-limit" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/p-locate",
          "name": "p-limit",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "p-try" => Edge {
          "name": "p-try",
          "spec": "^2.0.0",
          "to": "node_modules/p-try",
          "type": "prod",
        },
      },
      "location": "node_modules/p-limit",
      "name": "p-limit",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.2.0.tgz",
    },
    "p-locate" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/locate-path",
          "name": "p-locate",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "p-limit" => Edge {
          "name": "p-limit",
          "spec": "^2.0.0",
          "to": "node_modules/p-limit",
          "type": "prod",
        },
      },
      "location": "node_modules/p-locate",
      "name": "p-locate",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
    },
    "p-try" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/p-limit",
          "name": "p-try",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/p-try",
      "name": "p-try",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
    },
    "package-hash" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/caching-transform",
          "name": "package-hash",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "graceful-fs" => Edge {
          "name": "graceful-fs",
          "spec": "^4.1.15",
          "to": "node_modules/graceful-fs",
          "type": "prod",
        },
        "hasha" => Edge {
          "name": "hasha",
          "spec": "^3.0.0",
          "to": "node_modules/hasha",
          "type": "prod",
        },
        "lodash.flattendeep" => Edge {
          "name": "lodash.flattendeep",
          "spec": "^4.4.0",
          "to": "node_modules/lodash.flattendeep",
          "type": "prod",
        },
        "release-zalgo" => Edge {
          "name": "release-zalgo",
          "spec": "^1.0.0",
          "to": "node_modules/release-zalgo",
          "type": "prod",
        },
      },
      "location": "node_modules/package-hash",
      "name": "package-hash",
      "resolved": "https://registry.npmjs.org/package-hash/-/package-hash-3.0.0.tgz",
    },
    "parse-json" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/load-json-file",
          "name": "parse-json",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "error-ex" => Edge {
          "name": "error-ex",
          "spec": "^1.3.1",
          "to": "node_modules/error-ex",
          "type": "prod",
        },
        "json-parse-better-errors" => Edge {
          "name": "json-parse-better-errors",
          "spec": "^1.0.1",
          "to": "node_modules/json-parse-better-errors",
          "type": "prod",
        },
      },
      "location": "node_modules/parse-json",
      "name": "parse-json",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
    },
    "path-exists" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/locate-path",
          "name": "path-exists",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-exists",
      "name": "path-exists",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
    },
    "path-is-absolute" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "path-is-absolute",
          "spec": "^1.0.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
    },
    "path-key" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "name": "path-key",
          "spec": "^2.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/path-key",
      "name": "path-key",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
    },
    "path-parse" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/resolve",
          "name": "path-parse",
          "spec": "^1.0.6",
          "type": "prod",
        },
      },
      "location": "node_modules/path-parse",
      "name": "path-parse",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
    },
    "path-type" => Node {
      "children": Map {
        "pify" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/path-type",
              "name": "pify",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/path-type/node_modules/pify",
          "name": "pify",
          "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/read-pkg",
          "name": "path-type",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "pify" => Edge {
          "name": "pify",
          "spec": "^3.0.0",
          "to": "node_modules/path-type/node_modules/pify",
          "type": "prod",
        },
      },
      "location": "node_modules/path-type",
      "name": "path-type",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
    },
    "performance-now" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "performance-now",
          "spec": "^2.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/performance-now",
      "name": "performance-now",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
    },
    "picomatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/anymatch",
          "name": "picomatch",
          "spec": "^2.0.4",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/readdirp",
          "name": "picomatch",
          "spec": "^2.0.7",
          "type": "prod",
        },
      },
      "location": "node_modules/picomatch",
      "name": "picomatch",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.1.tgz",
    },
    "pify" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cp-file",
          "name": "pify",
          "spec": "^4.0.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/make-dir",
          "name": "pify",
          "spec": "^4.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/pify",
      "name": "pify",
      "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
    },
    "pkg-dir" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/find-cache-dir",
          "name": "pkg-dir",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "find-up" => Edge {
          "name": "find-up",
          "spec": "^3.0.0",
          "to": "node_modules/find-up",
          "type": "prod",
        },
      },
      "location": "node_modules/pkg-dir",
      "name": "pkg-dir",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
    },
    "private" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "private",
          "spec": "^0.1.8",
          "type": "prod",
        },
      },
      "location": "node_modules/private",
      "name": "private",
      "resolved": "https://registry.npmjs.org/private/-/private-0.1.8.tgz",
    },
    "process-nextick-args" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/readable-stream",
          "name": "process-nextick-args",
          "spec": "~2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/process-nextick-args",
      "name": "process-nextick-args",
      "optional": true,
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.0.tgz",
    },
    "prop-types" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink",
          "name": "prop-types",
          "spec": "^15.6.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/react",
          "name": "prop-types",
          "spec": "^15.6.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/react-reconciler",
          "name": "prop-types",
          "spec": "^15.6.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "loose-envify" => Edge {
          "name": "loose-envify",
          "spec": "^1.4.0",
          "to": "node_modules/loose-envify",
          "type": "prod",
        },
        "object-assign" => Edge {
          "name": "object-assign",
          "spec": "^4.1.1",
          "to": "node_modules/object-assign",
          "type": "prod",
        },
        "react-is" => Edge {
          "name": "react-is",
          "spec": "^16.8.1",
          "to": "node_modules/react-is",
          "type": "prod",
        },
      },
      "location": "node_modules/prop-types",
      "name": "prop-types",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.7.2.tgz",
    },
    "pseudomap" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/lru-cache",
          "name": "pseudomap",
          "spec": "^1.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/pseudomap",
      "name": "pseudomap",
      "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
    },
    "psl" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tough-cookie",
          "name": "psl",
          "spec": "^1.1.24",
          "type": "prod",
        },
      },
      "location": "node_modules/psl",
      "name": "psl",
      "resolved": "https://registry.npmjs.org/psl/-/psl-1.1.31.tgz",
    },
    "punycode" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tough-cookie",
          "name": "punycode",
          "spec": "^1.4.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/unicode-length",
          "name": "punycode",
          "spec": "^1.3.2",
          "type": "prod",
        },
      },
      "location": "node_modules/punycode",
      "name": "punycode",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
    },
    "qs" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "qs",
          "spec": "~6.5.2",
          "type": "prod",
        },
      },
      "location": "node_modules/qs",
      "name": "qs",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
    },
    "react" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink",
          "name": "react",
          "spec": ">=16.8.0",
          "type": "peer",
        },
        Edge {
          "from": "node_modules/react-reconciler",
          "name": "react",
          "spec": "^16.0.0",
          "type": "peer",
        },
        Edge {
          "from": "node_modules/treport",
          "name": "react",
          "spec": "^16.8.6",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "loose-envify" => Edge {
          "name": "loose-envify",
          "spec": "^1.1.0",
          "to": "node_modules/loose-envify",
          "type": "prod",
        },
        "object-assign" => Edge {
          "name": "object-assign",
          "spec": "^4.1.1",
          "to": "node_modules/object-assign",
          "type": "prod",
        },
        "prop-types" => Edge {
          "name": "prop-types",
          "spec": "^15.6.2",
          "to": "node_modules/prop-types",
          "type": "prod",
        },
        "scheduler" => Edge {
          "name": "scheduler",
          "spec": "^0.13.6",
          "to": "node_modules/scheduler",
          "type": "prod",
        },
      },
      "location": "node_modules/react",
      "name": "react",
      "resolved": "https://registry.npmjs.org/react/-/react-16.8.6.tgz",
    },
    "react-is" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/prop-types",
          "name": "react-is",
          "spec": "^16.8.1",
          "type": "prod",
        },
      },
      "location": "node_modules/react-is",
      "name": "react-is",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.8.6.tgz",
    },
    "react-reconciler" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink",
          "name": "react-reconciler",
          "spec": "^0.20.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "loose-envify" => Edge {
          "name": "loose-envify",
          "spec": "^1.1.0",
          "to": "node_modules/loose-envify",
          "type": "prod",
        },
        "object-assign" => Edge {
          "name": "object-assign",
          "spec": "^4.1.1",
          "to": "node_modules/object-assign",
          "type": "prod",
        },
        "prop-types" => Edge {
          "name": "prop-types",
          "spec": "^15.6.2",
          "to": "node_modules/prop-types",
          "type": "prod",
        },
        "react" => Edge {
          "name": "react",
          "spec": "^16.0.0",
          "to": "node_modules/react",
          "type": "peer",
        },
        "scheduler" => Edge {
          "name": "scheduler",
          "spec": "^0.13.6",
          "to": "node_modules/scheduler",
          "type": "prod",
        },
      },
      "location": "node_modules/react-reconciler",
      "name": "react-reconciler",
      "resolved": "https://registry.npmjs.org/react-reconciler/-/react-reconciler-0.20.4.tgz",
    },
    "read-pkg" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/read-pkg-up",
          "name": "read-pkg",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "load-json-file" => Edge {
          "name": "load-json-file",
          "spec": "^4.0.0",
          "to": "node_modules/load-json-file",
          "type": "prod",
        },
        "normalize-package-data" => Edge {
          "name": "normalize-package-data",
          "spec": "^2.3.2",
          "to": "node_modules/normalize-package-data",
          "type": "prod",
        },
        "path-type" => Edge {
          "name": "path-type",
          "spec": "^3.0.0",
          "to": "node_modules/path-type",
          "type": "prod",
        },
      },
      "location": "node_modules/read-pkg",
      "name": "read-pkg",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
    },
    "read-pkg-up" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/test-exclude",
          "name": "read-pkg-up",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "find-up" => Edge {
          "name": "find-up",
          "spec": "^3.0.0",
          "to": "node_modules/find-up",
          "type": "prod",
        },
        "read-pkg" => Edge {
          "name": "read-pkg",
          "spec": "^3.0.0",
          "to": "node_modules/read-pkg",
          "type": "prod",
        },
      },
      "location": "node_modules/read-pkg-up",
      "name": "read-pkg-up",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-4.0.0.tgz",
    },
    "readable-stream" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap-mocha-reporter",
          "name": "readable-stream",
          "spec": "^2.1.5",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "core-util-is" => Edge {
          "name": "core-util-is",
          "spec": "~1.0.0",
          "to": "node_modules/core-util-is",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "~2.0.3",
          "to": "node_modules/inherits",
          "type": "prod",
        },
        "isarray" => Edge {
          "name": "isarray",
          "spec": "~1.0.0",
          "to": "node_modules/isarray",
          "type": "prod",
        },
        "process-nextick-args" => Edge {
          "name": "process-nextick-args",
          "spec": "~2.0.0",
          "to": "node_modules/process-nextick-args",
          "type": "prod",
        },
        "safe-buffer" => Edge {
          "name": "safe-buffer",
          "spec": "~5.1.1",
          "to": "node_modules/safe-buffer",
          "type": "prod",
        },
        "string_decoder" => Edge {
          "name": "string_decoder",
          "spec": "~1.1.1",
          "to": "node_modules/string_decoder",
          "type": "prod",
        },
        "util-deprecate" => Edge {
          "name": "util-deprecate",
          "spec": "~1.0.1",
          "to": "node_modules/util-deprecate",
          "type": "prod",
        },
      },
      "location": "node_modules/readable-stream",
      "name": "readable-stream",
      "optional": true,
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
    },
    "readdirp" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chokidar",
          "name": "readdirp",
          "spec": "~3.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "picomatch" => Edge {
          "name": "picomatch",
          "spec": "^2.0.7",
          "to": "node_modules/picomatch",
          "type": "prod",
        },
      },
      "location": "node_modules/readdirp",
      "name": "readdirp",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.3.0.tgz",
    },
    "redeyed" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cardinal",
          "name": "redeyed",
          "spec": "~2.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "esprima" => Edge {
          "name": "esprima",
          "spec": "~4.0.0",
          "to": "node_modules/esprima",
          "type": "prod",
        },
      },
      "location": "node_modules/redeyed",
      "name": "redeyed",
      "resolved": "https://registry.npmjs.org/redeyed/-/redeyed-2.1.1.tgz",
    },
    "regenerator-runtime" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-runtime",
          "name": "regenerator-runtime",
          "spec": "^0.11.0",
          "type": "prod",
        },
      },
      "location": "node_modules/regenerator-runtime",
      "name": "regenerator-runtime",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.11.1.tgz",
    },
    "release-zalgo" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/package-hash",
          "name": "release-zalgo",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "es6-error" => Edge {
          "name": "es6-error",
          "spec": "^4.0.1",
          "to": "node_modules/es6-error",
          "type": "prod",
        },
      },
      "location": "node_modules/release-zalgo",
      "name": "release-zalgo",
      "resolved": "https://registry.npmjs.org/release-zalgo/-/release-zalgo-1.0.0.tgz",
    },
    "repeating" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/detect-indent",
          "name": "repeating",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-finite" => Edge {
          "name": "is-finite",
          "spec": "^1.0.0",
          "to": "node_modules/is-finite",
          "type": "prod",
        },
      },
      "location": "node_modules/repeating",
      "name": "repeating",
      "resolved": "https://registry.npmjs.org/repeating/-/repeating-2.0.1.tgz",
    },
    "request" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/coveralls",
          "name": "request",
          "spec": "^2.86.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "aws-sign2" => Edge {
          "name": "aws-sign2",
          "spec": "~0.7.0",
          "to": "node_modules/aws-sign2",
          "type": "prod",
        },
        "aws4" => Edge {
          "name": "aws4",
          "spec": "^1.8.0",
          "to": "node_modules/aws4",
          "type": "prod",
        },
        "caseless" => Edge {
          "name": "caseless",
          "spec": "~0.12.0",
          "to": "node_modules/caseless",
          "type": "prod",
        },
        "combined-stream" => Edge {
          "name": "combined-stream",
          "spec": "~1.0.6",
          "to": "node_modules/combined-stream",
          "type": "prod",
        },
        "extend" => Edge {
          "name": "extend",
          "spec": "~3.0.2",
          "to": "node_modules/extend",
          "type": "prod",
        },
        "forever-agent" => Edge {
          "name": "forever-agent",
          "spec": "~0.6.1",
          "to": "node_modules/forever-agent",
          "type": "prod",
        },
        "form-data" => Edge {
          "name": "form-data",
          "spec": "~2.3.2",
          "to": "node_modules/form-data",
          "type": "prod",
        },
        "har-validator" => Edge {
          "name": "har-validator",
          "spec": "~5.1.0",
          "to": "node_modules/har-validator",
          "type": "prod",
        },
        "http-signature" => Edge {
          "name": "http-signature",
          "spec": "~1.2.0",
          "to": "node_modules/http-signature",
          "type": "prod",
        },
        "is-typedarray" => Edge {
          "name": "is-typedarray",
          "spec": "~1.0.0",
          "to": "node_modules/is-typedarray",
          "type": "prod",
        },
        "isstream" => Edge {
          "name": "isstream",
          "spec": "~0.1.2",
          "to": "node_modules/isstream",
          "type": "prod",
        },
        "json-stringify-safe" => Edge {
          "name": "json-stringify-safe",
          "spec": "~5.0.1",
          "to": "node_modules/json-stringify-safe",
          "type": "prod",
        },
        "mime-types" => Edge {
          "name": "mime-types",
          "spec": "~2.1.19",
          "to": "node_modules/mime-types",
          "type": "prod",
        },
        "oauth-sign" => Edge {
          "name": "oauth-sign",
          "spec": "~0.9.0",
          "to": "node_modules/oauth-sign",
          "type": "prod",
        },
        "performance-now" => Edge {
          "name": "performance-now",
          "spec": "^2.1.0",
          "to": "node_modules/performance-now",
          "type": "prod",
        },
        "qs" => Edge {
          "name": "qs",
          "spec": "~6.5.2",
          "to": "node_modules/qs",
          "type": "prod",
        },
        "safe-buffer" => Edge {
          "name": "safe-buffer",
          "spec": "^5.1.2",
          "to": "node_modules/safe-buffer",
          "type": "prod",
        },
        "tough-cookie" => Edge {
          "name": "tough-cookie",
          "spec": "~2.4.3",
          "to": "node_modules/tough-cookie",
          "type": "prod",
        },
        "tunnel-agent" => Edge {
          "name": "tunnel-agent",
          "spec": "^0.6.0",
          "to": "node_modules/tunnel-agent",
          "type": "prod",
        },
        "uuid" => Edge {
          "name": "uuid",
          "spec": "^3.3.2",
          "to": "node_modules/uuid",
          "type": "prod",
        },
      },
      "location": "node_modules/request",
      "name": "request",
      "resolved": "https://registry.npmjs.org/request/-/request-2.88.0.tgz",
    },
    "require-directory" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yargs",
          "name": "require-directory",
          "spec": "^2.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/require-directory",
      "name": "require-directory",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
    },
    "require-main-filename" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/test-exclude",
          "name": "require-main-filename",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/yargs",
          "name": "require-main-filename",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/require-main-filename",
      "name": "require-main-filename",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
    },
    "resolve" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/normalize-package-data",
          "name": "resolve",
          "spec": "^1.10.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "path-parse" => Edge {
          "name": "path-parse",
          "spec": "^1.0.6",
          "to": "node_modules/path-parse",
          "type": "prod",
        },
      },
      "location": "node_modules/resolve",
      "name": "resolve",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.10.1.tgz",
    },
    "resolve-from" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/import-jsx",
          "name": "resolve-from",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/resolve-from",
      "name": "resolve-from",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
    },
    "restore-cursor" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cli-cursor",
          "name": "restore-cursor",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "onetime" => Edge {
          "name": "onetime",
          "spec": "^2.0.0",
          "to": "node_modules/onetime",
          "type": "prod",
        },
        "signal-exit" => Edge {
          "name": "signal-exit",
          "spec": "^3.0.2",
          "to": "node_modules/signal-exit",
          "type": "prod",
        },
      },
      "location": "node_modules/restore-cursor",
      "name": "restore-cursor",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
    },
    "rimraf" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-processinfo",
          "name": "rimraf",
          "spec": "^2.6.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-source-maps",
          "name": "rimraf",
          "spec": "^2.6.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/nyc",
          "name": "rimraf",
          "spec": "^2.6.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/spawn-wrap",
          "name": "rimraf",
          "spec": "^2.6.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "rimraf",
          "spec": "^2.6.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "prod",
        },
      },
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.6.3.tgz",
    },
    "safe-buffer" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/convert-source-map",
          "name": "safe-buffer",
          "spec": "~5.1.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/cp-file",
          "name": "safe-buffer",
          "spec": "^5.0.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/minipass",
          "name": "safe-buffer",
          "spec": "^5.1.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/readable-stream",
          "name": "safe-buffer",
          "spec": "~5.1.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/request",
          "name": "safe-buffer",
          "spec": "^5.1.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/string_decoder",
          "name": "safe-buffer",
          "spec": "~5.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tunnel-agent",
          "name": "safe-buffer",
          "spec": "^5.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/safe-buffer",
      "name": "safe-buffer",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
    },
    "safer-buffer" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/asn1",
          "name": "safer-buffer",
          "spec": "~2.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/ecc-jsbn",
          "name": "safer-buffer",
          "spec": "^2.1.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/sshpk",
          "name": "safer-buffer",
          "spec": "^2.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/safer-buffer",
      "name": "safer-buffer",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
    },
    "scheduler" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink",
          "name": "scheduler",
          "spec": "^0.13.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/react",
          "name": "scheduler",
          "spec": "^0.13.6",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/react-reconciler",
          "name": "scheduler",
          "spec": "^0.13.6",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "loose-envify" => Edge {
          "name": "loose-envify",
          "spec": "^1.1.0",
          "to": "node_modules/loose-envify",
          "type": "prod",
        },
        "object-assign" => Edge {
          "name": "object-assign",
          "spec": "^4.1.1",
          "to": "node_modules/object-assign",
          "type": "prod",
        },
      },
      "location": "node_modules/scheduler",
      "name": "scheduler",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.13.6.tgz",
    },
    "semver" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-instrument",
          "name": "semver",
          "spec": "^6.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/semver",
      "name": "semver",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.0.0.tgz",
    },
    "set-blocking" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yargs",
          "name": "set-blocking",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/set-blocking",
      "name": "set-blocking",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
    },
    "shebang-command" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "name": "shebang-command",
          "spec": "^1.2.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "shebang-regex" => Edge {
          "name": "shebang-regex",
          "spec": "^1.0.0",
          "to": "node_modules/shebang-regex",
          "type": "prod",
        },
      },
      "location": "node_modules/shebang-command",
      "name": "shebang-command",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
    },
    "shebang-regex" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/shebang-command",
          "name": "shebang-regex",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/shebang-regex",
      "name": "shebang-regex",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
    },
    "signal-exit" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/foreground-child",
          "name": "signal-exit",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/ink",
          "name": "signal-exit",
          "spec": "^3.0.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/nyc",
          "name": "signal-exit",
          "spec": "^3.0.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/restore-cursor",
          "name": "signal-exit",
          "spec": "^3.0.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/spawn-wrap",
          "name": "signal-exit",
          "spec": "^3.0.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "signal-exit",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/write-file-atomic",
          "name": "signal-exit",
          "spec": "^3.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/signal-exit",
      "name": "signal-exit",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz",
    },
    "slash" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-core",
          "name": "slash",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/slash",
      "name": "slash",
      "resolved": "https://registry.npmjs.org/slash/-/slash-1.0.0.tgz",
    },
    "slice-ansi" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cli-truncate",
          "name": "slice-ansi",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/ink",
          "name": "slice-ansi",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-fullwidth-code-point" => Edge {
          "name": "is-fullwidth-code-point",
          "spec": "^2.0.0",
          "to": "node_modules/is-fullwidth-code-point",
          "type": "prod",
        },
      },
      "location": "node_modules/slice-ansi",
      "name": "slice-ansi",
      "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-1.0.0.tgz",
    },
    "source-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/generator",
          "name": "source-map",
          "spec": "^0.5.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-core",
          "name": "source-map",
          "spec": "^0.5.7",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-generator",
          "name": "source-map",
          "spec": "^0.5.7",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-register/node_modules/source-map-support",
          "name": "source-map",
          "spec": "^0.5.6",
          "type": "prod",
        },
      },
      "location": "node_modules/source-map",
      "name": "source-map",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
    },
    "source-map-support" => Node {
      "children": Map {
        "source-map" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/source-map-support",
              "name": "source-map",
              "spec": "^0.6.0",
              "type": "prod",
            },
          },
          "location": "node_modules/source-map-support/node_modules/source-map",
          "name": "source-map",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/async-hook-domain",
          "name": "source-map-support",
          "spec": "^0.5.11",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "source-map-support",
          "spec": "^0.5.12",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/ts-node",
          "name": "source-map-support",
          "spec": "^0.5.6",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "buffer-from" => Edge {
          "name": "buffer-from",
          "spec": "^1.0.0",
          "to": "node_modules/buffer-from",
          "type": "prod",
        },
        "source-map" => Edge {
          "name": "source-map",
          "spec": "^0.6.0",
          "to": "node_modules/source-map-support/node_modules/source-map",
          "type": "prod",
        },
      },
      "location": "node_modules/source-map-support",
      "name": "source-map-support",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.12.tgz",
    },
    "spawn-wrap" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "spawn-wrap",
          "spec": "^1.4.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "foreground-child" => Edge {
          "name": "foreground-child",
          "spec": "^1.5.6",
          "to": "node_modules/foreground-child",
          "type": "prod",
        },
        "mkdirp" => Edge {
          "name": "mkdirp",
          "spec": "^0.5.0",
          "to": "node_modules/mkdirp",
          "type": "prod",
        },
        "os-homedir" => Edge {
          "name": "os-homedir",
          "spec": "^1.0.1",
          "to": "node_modules/os-homedir",
          "type": "prod",
        },
        "rimraf" => Edge {
          "name": "rimraf",
          "spec": "^2.6.2",
          "to": "node_modules/rimraf",
          "type": "prod",
        },
        "signal-exit" => Edge {
          "name": "signal-exit",
          "spec": "^3.0.2",
          "to": "node_modules/signal-exit",
          "type": "prod",
        },
        "which" => Edge {
          "name": "which",
          "spec": "^1.3.0",
          "to": "node_modules/which",
          "type": "prod",
        },
      },
      "location": "node_modules/spawn-wrap",
      "name": "spawn-wrap",
      "resolved": "https://registry.npmjs.org/spawn-wrap/-/spawn-wrap-1.4.2.tgz",
    },
    "spdx-correct" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/validate-npm-package-license",
          "name": "spdx-correct",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "spdx-expression-parse" => Edge {
          "name": "spdx-expression-parse",
          "spec": "^3.0.0",
          "to": "node_modules/spdx-expression-parse",
          "type": "prod",
        },
        "spdx-license-ids" => Edge {
          "name": "spdx-license-ids",
          "spec": "^3.0.0",
          "to": "node_modules/spdx-license-ids",
          "type": "prod",
        },
      },
      "location": "node_modules/spdx-correct",
      "name": "spdx-correct",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.0.tgz",
    },
    "spdx-exceptions" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/spdx-expression-parse",
          "name": "spdx-exceptions",
          "spec": "^2.1.0",
          "type": "prod",
        },
      },
      "location": "node_modules/spdx-exceptions",
      "name": "spdx-exceptions",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.2.0.tgz",
    },
    "spdx-expression-parse" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/spdx-correct",
          "name": "spdx-expression-parse",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/validate-npm-package-license",
          "name": "spdx-expression-parse",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "spdx-exceptions" => Edge {
          "name": "spdx-exceptions",
          "spec": "^2.1.0",
          "to": "node_modules/spdx-exceptions",
          "type": "prod",
        },
        "spdx-license-ids" => Edge {
          "name": "spdx-license-ids",
          "spec": "^3.0.0",
          "to": "node_modules/spdx-license-ids",
          "type": "prod",
        },
      },
      "location": "node_modules/spdx-expression-parse",
      "name": "spdx-expression-parse",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.0.tgz",
    },
    "spdx-license-ids" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/spdx-correct",
          "name": "spdx-license-ids",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/spdx-expression-parse",
          "name": "spdx-license-ids",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/spdx-license-ids",
      "name": "spdx-license-ids",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.4.tgz",
    },
    "sprintf-js" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/argparse",
          "name": "sprintf-js",
          "spec": "~1.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/sprintf-js",
      "name": "sprintf-js",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
    },
    "sshpk" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/http-signature",
          "name": "sshpk",
          "spec": "^1.7.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "asn1" => Edge {
          "name": "asn1",
          "spec": "~0.2.3",
          "to": "node_modules/asn1",
          "type": "prod",
        },
        "assert-plus" => Edge {
          "name": "assert-plus",
          "spec": "^1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
        "bcrypt-pbkdf" => Edge {
          "name": "bcrypt-pbkdf",
          "spec": "^1.0.0",
          "to": "node_modules/bcrypt-pbkdf",
          "type": "prod",
        },
        "dashdash" => Edge {
          "name": "dashdash",
          "spec": "^1.12.0",
          "to": "node_modules/dashdash",
          "type": "prod",
        },
        "ecc-jsbn" => Edge {
          "name": "ecc-jsbn",
          "spec": "~0.1.1",
          "to": "node_modules/ecc-jsbn",
          "type": "prod",
        },
        "getpass" => Edge {
          "name": "getpass",
          "spec": "^0.1.1",
          "to": "node_modules/getpass",
          "type": "prod",
        },
        "jsbn" => Edge {
          "name": "jsbn",
          "spec": "~0.1.0",
          "to": "node_modules/jsbn",
          "type": "prod",
        },
        "safer-buffer" => Edge {
          "name": "safer-buffer",
          "spec": "^2.0.2",
          "to": "node_modules/safer-buffer",
          "type": "prod",
        },
        "tweetnacl" => Edge {
          "name": "tweetnacl",
          "spec": "~0.14.0",
          "to": "node_modules/tweetnacl",
          "type": "prod",
        },
      },
      "location": "node_modules/sshpk",
      "name": "sshpk",
      "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
    },
    "stack-utils" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "stack-utils",
          "spec": "^1.0.2",
          "type": "prod",
        },
      },
      "location": "node_modules/stack-utils",
      "name": "stack-utils",
      "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-1.0.2.tgz",
    },
    "string_decoder" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/readable-stream",
          "name": "string_decoder",
          "spec": "~1.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "safe-buffer" => Edge {
          "name": "safe-buffer",
          "spec": "~5.1.0",
          "to": "node_modules/safe-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/string_decoder",
      "name": "string_decoder",
      "optional": true,
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
    },
    "string-length" => Node {
      "children": Map {
        "ansi-regex" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/string-length/node_modules/strip-ansi",
              "name": "ansi-regex",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/string-length/node_modules/ansi-regex",
          "name": "ansi-regex",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
        },
        "strip-ansi" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/string-length",
              "name": "strip-ansi",
              "spec": "^4.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-regex" => Edge {
              "name": "ansi-regex",
              "spec": "^3.0.0",
              "to": "node_modules/string-length/node_modules/ansi-regex",
              "type": "prod",
            },
          },
          "location": "node_modules/string-length/node_modules/strip-ansi",
          "name": "strip-ansi",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink",
          "name": "string-length",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/treport",
          "name": "string-length",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "astral-regex" => Edge {
          "name": "astral-regex",
          "spec": "^1.0.0",
          "to": "node_modules/astral-regex",
          "type": "prod",
        },
        "strip-ansi" => Edge {
          "name": "strip-ansi",
          "spec": "^4.0.0",
          "to": "node_modules/string-length/node_modules/strip-ansi",
          "type": "prod",
        },
      },
      "location": "node_modules/string-length",
      "name": "string-length",
      "resolved": "https://registry.npmjs.org/string-length/-/string-length-2.0.0.tgz",
    },
    "string-width" => Node {
      "children": Map {
        "ansi-regex" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/string-width/node_modules/strip-ansi",
              "name": "ansi-regex",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/string-width/node_modules/ansi-regex",
          "name": "ansi-regex",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
        },
        "strip-ansi" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/string-width",
              "name": "strip-ansi",
              "spec": "^4.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-regex" => Edge {
              "name": "ansi-regex",
              "spec": "^3.0.0",
              "to": "node_modules/string-width/node_modules/ansi-regex",
              "type": "prod",
            },
          },
          "location": "node_modules/string-width/node_modules/strip-ansi",
          "name": "strip-ansi",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cli-truncate",
          "name": "string-width",
          "spec": "^2.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/cliui",
          "name": "string-width",
          "spec": "^2.1.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/widest-line",
          "name": "string-width",
          "spec": "^2.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-fullwidth-code-point" => Edge {
          "name": "is-fullwidth-code-point",
          "spec": "^2.0.0",
          "to": "node_modules/is-fullwidth-code-point",
          "type": "prod",
        },
        "strip-ansi" => Edge {
          "name": "strip-ansi",
          "spec": "^4.0.0",
          "to": "node_modules/string-width/node_modules/strip-ansi",
          "type": "prod",
        },
      },
      "location": "node_modules/string-width",
      "name": "string-width",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
    },
    "strip-ansi" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chalk",
          "name": "strip-ansi",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/treport/node_modules/unicode-length",
          "name": "strip-ansi",
          "spec": "^3.0.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/unicode-length",
          "name": "strip-ansi",
          "spec": "^3.0.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/wrap-ansi",
          "name": "strip-ansi",
          "spec": "^3.0.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/wrap-ansi/node_modules/string-width",
          "name": "strip-ansi",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "ansi-regex" => Edge {
          "name": "ansi-regex",
          "spec": "^2.0.0",
          "to": "node_modules/ansi-regex",
          "type": "prod",
        },
      },
      "location": "node_modules/strip-ansi",
      "name": "strip-ansi",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
    },
    "strip-bom" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/default-require-extensions",
          "name": "strip-bom",
          "spec": "^3.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/load-json-file",
          "name": "strip-bom",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/strip-bom",
      "name": "strip-bom",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
    },
    "supports-color" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/chalk",
          "name": "supports-color",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/supports-color",
      "name": "supports-color",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
    },
    "tap" => Node {
      "children": Map {
        "diff" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap",
              "name": "diff",
              "spec": "^4.0.1",
              "type": "prod",
            },
          },
          "location": "node_modules/tap/node_modules/diff",
          "name": "diff",
          "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.2.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "",
          "name": "tap",
          "spec": "^13.0.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "async-hook-domain" => Edge {
          "name": "async-hook-domain",
          "spec": "^1.1.0",
          "to": "node_modules/async-hook-domain",
          "type": "prod",
        },
        "bind-obj-methods" => Edge {
          "name": "bind-obj-methods",
          "spec": "^2.0.0",
          "to": "node_modules/bind-obj-methods",
          "type": "prod",
        },
        "browser-process-hrtime" => Edge {
          "name": "browser-process-hrtime",
          "spec": "^1.0.0",
          "to": "node_modules/browser-process-hrtime",
          "type": "prod",
        },
        "capture-stack-trace" => Edge {
          "name": "capture-stack-trace",
          "spec": "^1.0.0",
          "to": "node_modules/capture-stack-trace",
          "type": "prod",
        },
        "chokidar" => Edge {
          "name": "chokidar",
          "spec": "^3.0.0",
          "to": "node_modules/chokidar",
          "type": "prod",
        },
        "color-support" => Edge {
          "name": "color-support",
          "spec": "^1.1.0",
          "to": "node_modules/color-support",
          "type": "prod",
        },
        "coveralls" => Edge {
          "name": "coveralls",
          "spec": "^3.0.3",
          "to": "node_modules/coveralls",
          "type": "prod",
        },
        "diff" => Edge {
          "name": "diff",
          "spec": "^4.0.1",
          "to": "node_modules/tap/node_modules/diff",
          "type": "prod",
        },
        "domain-browser" => Edge {
          "name": "domain-browser",
          "spec": "^1.2.0",
          "to": "node_modules/domain-browser",
          "type": "prod",
        },
        "esm" => Edge {
          "name": "esm",
          "spec": "^3.2.25",
          "to": "node_modules/esm",
          "type": "prod",
        },
        "findit" => Edge {
          "name": "findit",
          "spec": "^2.0.0",
          "to": "node_modules/findit",
          "type": "prod",
        },
        "foreground-child" => Edge {
          "name": "foreground-child",
          "spec": "^1.3.3",
          "to": "node_modules/foreground-child",
          "type": "prod",
        },
        "fs-exists-cached" => Edge {
          "name": "fs-exists-cached",
          "spec": "^1.0.0",
          "to": "node_modules/fs-exists-cached",
          "type": "prod",
        },
        "function-loop" => Edge {
          "name": "function-loop",
          "spec": "^1.0.2",
          "to": "node_modules/function-loop",
          "type": "prod",
        },
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.4",
          "to": "node_modules/glob",
          "type": "prod",
        },
        "import-jsx" => Edge {
          "name": "import-jsx",
          "spec": "^2.0.0",
          "to": "node_modules/import-jsx",
          "type": "prod",
        },
        "isexe" => Edge {
          "name": "isexe",
          "spec": "^2.0.0",
          "to": "node_modules/isexe",
          "type": "prod",
        },
        "istanbul-lib-processinfo" => Edge {
          "name": "istanbul-lib-processinfo",
          "spec": "^1.0.0",
          "to": "node_modules/istanbul-lib-processinfo",
          "type": "prod",
        },
        "jackspeak" => Edge {
          "name": "jackspeak",
          "spec": "^1.3.7",
          "to": "node_modules/jackspeak",
          "type": "prod",
        },
        "minipass" => Edge {
          "name": "minipass",
          "spec": "^2.3.5",
          "to": "node_modules/minipass",
          "type": "prod",
        },
        "mkdirp" => Edge {
          "name": "mkdirp",
          "spec": "^0.5.1",
          "to": "node_modules/mkdirp",
          "type": "prod",
        },
        "nyc" => Edge {
          "name": "nyc",
          "spec": "^14.1.0",
          "to": "node_modules/nyc",
          "type": "prod",
        },
        "opener" => Edge {
          "name": "opener",
          "spec": "^1.5.1",
          "to": "node_modules/opener",
          "type": "prod",
        },
        "own-or" => Edge {
          "name": "own-or",
          "spec": "^1.0.0",
          "to": "node_modules/own-or",
          "type": "prod",
        },
        "own-or-env" => Edge {
          "name": "own-or-env",
          "spec": "^1.0.1",
          "to": "node_modules/own-or-env",
          "type": "prod",
        },
        "rimraf" => Edge {
          "name": "rimraf",
          "spec": "^2.6.3",
          "to": "node_modules/rimraf",
          "type": "prod",
        },
        "signal-exit" => Edge {
          "name": "signal-exit",
          "spec": "^3.0.0",
          "to": "node_modules/signal-exit",
          "type": "prod",
        },
        "source-map-support" => Edge {
          "name": "source-map-support",
          "spec": "^0.5.12",
          "to": "node_modules/source-map-support",
          "type": "prod",
        },
        "stack-utils" => Edge {
          "name": "stack-utils",
          "spec": "^1.0.2",
          "to": "node_modules/stack-utils",
          "type": "prod",
        },
        "tap-mocha-reporter" => Edge {
          "name": "tap-mocha-reporter",
          "spec": "^4.0.1",
          "to": "node_modules/tap-mocha-reporter",
          "type": "prod",
        },
        "tap-parser" => Edge {
          "name": "tap-parser",
          "spec": "^9.3.2",
          "to": "node_modules/tap-parser",
          "type": "prod",
        },
        "tap-yaml" => Edge {
          "name": "tap-yaml",
          "spec": "^1.0.0",
          "to": "node_modules/tap-yaml",
          "type": "prod",
        },
        "tcompare" => Edge {
          "name": "tcompare",
          "spec": "^2.3.0",
          "to": "node_modules/tcompare",
          "type": "prod",
        },
        "treport" => Edge {
          "name": "treport",
          "spec": "^0.3.0",
          "to": "node_modules/treport",
          "type": "prod",
        },
        "trivial-deferred" => Edge {
          "name": "trivial-deferred",
          "spec": "^1.0.1",
          "to": "node_modules/trivial-deferred",
          "type": "prod",
        },
        "ts-node" => Edge {
          "name": "ts-node",
          "spec": "^8.1.0",
          "to": "node_modules/ts-node",
          "type": "prod",
        },
        "typescript" => Edge {
          "name": "typescript",
          "spec": "^3.4.5",
          "to": "node_modules/typescript",
          "type": "prod",
        },
        "which" => Edge {
          "name": "which",
          "spec": "^1.3.1",
          "to": "node_modules/which",
          "type": "prod",
        },
        "write-file-atomic" => Edge {
          "name": "write-file-atomic",
          "spec": "^2.4.2",
          "to": "node_modules/write-file-atomic",
          "type": "prod",
        },
        "yaml" => Edge {
          "name": "yaml",
          "spec": "^1.5.1",
          "to": "node_modules/yaml",
          "type": "prod",
        },
        "yapool" => Edge {
          "name": "yapool",
          "spec": "^1.0.0",
          "to": "node_modules/yapool",
          "type": "prod",
        },
      },
      "location": "node_modules/tap",
      "name": "tap",
      "resolved": "https://registry.npmjs.org/tap/-/tap-13.1.11.tgz",
    },
    "tap-mocha-reporter" => Node {
      "children": Map {
        "tap-parser" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/tap-mocha-reporter",
              "name": "tap-parser",
              "spec": "^8.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "events-to-array" => Edge {
              "name": "events-to-array",
              "spec": "^1.0.1",
              "to": "node_modules/events-to-array",
              "type": "prod",
            },
            "minipass" => Edge {
              "name": "minipass",
              "spec": "^2.2.0",
              "to": "node_modules/minipass",
              "type": "prod",
            },
            "tap-yaml" => Edge {
              "name": "tap-yaml",
              "spec": "0 || 1",
              "to": "node_modules/tap-yaml",
              "type": "prod",
            },
          },
          "location": "node_modules/tap-mocha-reporter/node_modules/tap-parser",
          "name": "tap-parser",
          "resolved": "https://registry.npmjs.org/tap-parser/-/tap-parser-8.1.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "tap-mocha-reporter",
          "spec": "^4.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "color-support" => Edge {
          "name": "color-support",
          "spec": "^1.1.0",
          "to": "node_modules/color-support",
          "type": "prod",
        },
        "debug" => Edge {
          "name": "debug",
          "spec": "^2.1.3",
          "to": "node_modules/debug",
          "type": "prod",
        },
        "diff" => Edge {
          "name": "diff",
          "spec": "^1.3.2",
          "to": "node_modules/diff",
          "type": "prod",
        },
        "escape-string-regexp" => Edge {
          "name": "escape-string-regexp",
          "spec": "^1.0.3",
          "to": "node_modules/escape-string-regexp",
          "type": "prod",
        },
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.0.5",
          "to": "node_modules/glob",
          "type": "prod",
        },
        "readable-stream" => Edge {
          "name": "readable-stream",
          "spec": "^2.1.5",
          "to": "node_modules/readable-stream",
          "type": "optional",
        },
        "tap-parser" => Edge {
          "name": "tap-parser",
          "spec": "^8.0.0",
          "to": "node_modules/tap-mocha-reporter/node_modules/tap-parser",
          "type": "prod",
        },
        "tap-yaml" => Edge {
          "name": "tap-yaml",
          "spec": "0 || 1",
          "to": "node_modules/tap-yaml",
          "type": "prod",
        },
        "unicode-length" => Edge {
          "name": "unicode-length",
          "spec": "^1.0.0",
          "to": "node_modules/unicode-length",
          "type": "prod",
        },
      },
      "location": "node_modules/tap-mocha-reporter",
      "name": "tap-mocha-reporter",
      "resolved": "https://registry.npmjs.org/tap-mocha-reporter/-/tap-mocha-reporter-4.0.1.tgz",
    },
    "tap-parser" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "tap-parser",
          "spec": "^9.3.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/treport",
          "name": "tap-parser",
          "spec": "^9.3.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "events-to-array" => Edge {
          "name": "events-to-array",
          "spec": "^1.0.1",
          "to": "node_modules/events-to-array",
          "type": "prod",
        },
        "minipass" => Edge {
          "name": "minipass",
          "spec": "^2.2.0",
          "to": "node_modules/minipass",
          "type": "prod",
        },
        "tap-yaml" => Edge {
          "name": "tap-yaml",
          "spec": "^1.0.0",
          "to": "node_modules/tap-yaml",
          "type": "prod",
        },
      },
      "location": "node_modules/tap-parser",
      "name": "tap-parser",
      "resolved": "https://registry.npmjs.org/tap-parser/-/tap-parser-9.3.2.tgz",
    },
    "tap-yaml" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "tap-yaml",
          "spec": "^1.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap-mocha-reporter",
          "name": "tap-yaml",
          "spec": "0 || 1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap-mocha-reporter/node_modules/tap-parser",
          "name": "tap-yaml",
          "spec": "0 || 1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap-parser",
          "name": "tap-yaml",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "yaml" => Edge {
          "name": "yaml",
          "spec": "^1.5.0",
          "to": "node_modules/yaml",
          "type": "prod",
        },
      },
      "location": "node_modules/tap-yaml",
      "name": "tap-yaml",
      "resolved": "https://registry.npmjs.org/tap-yaml/-/tap-yaml-1.0.0.tgz",
    },
    "tcompare" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "tcompare",
          "spec": "^2.3.0",
          "type": "prod",
        },
      },
      "location": "node_modules/tcompare",
      "name": "tcompare",
      "resolved": "https://registry.npmjs.org/tcompare/-/tcompare-2.3.0.tgz",
    },
    "test-exclude" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "test-exclude",
          "spec": "^5.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "node_modules/glob",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "node_modules/minimatch",
          "type": "prod",
        },
        "read-pkg-up" => Edge {
          "name": "read-pkg-up",
          "spec": "^4.0.0",
          "to": "node_modules/read-pkg-up",
          "type": "prod",
        },
        "require-main-filename" => Edge {
          "name": "require-main-filename",
          "spec": "^2.0.0",
          "to": "node_modules/require-main-filename",
          "type": "prod",
        },
      },
      "location": "node_modules/test-exclude",
      "name": "test-exclude",
      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-5.2.3.tgz",
    },
    "to-fast-properties" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/babel-types",
          "name": "to-fast-properties",
          "spec": "^1.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/to-fast-properties",
      "name": "to-fast-properties",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-1.0.3.tgz",
    },
    "to-regex-range" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/fill-range",
          "name": "to-regex-range",
          "spec": "^5.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "is-number" => Edge {
          "name": "is-number",
          "spec": "^7.0.0",
          "to": "node_modules/is-number",
          "type": "prod",
        },
      },
      "location": "node_modules/to-regex-range",
      "name": "to-regex-range",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
    },
    "tough-cookie" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "tough-cookie",
          "spec": "~2.4.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "psl" => Edge {
          "name": "psl",
          "spec": "^1.1.24",
          "to": "node_modules/psl",
          "type": "prod",
        },
        "punycode" => Edge {
          "name": "punycode",
          "spec": "^1.4.1",
          "to": "node_modules/punycode",
          "type": "prod",
        },
      },
      "location": "node_modules/tough-cookie",
      "name": "tough-cookie",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.4.3.tgz",
    },
    "treport" => Node {
      "children": Map {
        "ansi-styles" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/treport/node_modules/chalk",
              "name": "ansi-styles",
              "spec": "^3.2.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "color-convert" => Edge {
              "name": "color-convert",
              "spec": "^1.9.0",
              "to": "node_modules/color-convert",
              "type": "prod",
            },
          },
          "location": "node_modules/treport/node_modules/ansi-styles",
          "name": "ansi-styles",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
        },
        "chalk" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/treport",
              "name": "chalk",
              "spec": "^2.4.2",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-styles" => Edge {
              "name": "ansi-styles",
              "spec": "^3.2.1",
              "to": "node_modules/treport/node_modules/ansi-styles",
              "type": "prod",
            },
            "escape-string-regexp" => Edge {
              "name": "escape-string-regexp",
              "spec": "^1.0.5",
              "to": "node_modules/escape-string-regexp",
              "type": "prod",
            },
            "supports-color" => Edge {
              "name": "supports-color",
              "spec": "^5.3.0",
              "to": "node_modules/treport/node_modules/supports-color",
              "type": "prod",
            },
          },
          "location": "node_modules/treport/node_modules/chalk",
          "name": "chalk",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
        },
        "ms" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/treport",
              "name": "ms",
              "spec": "^2.1.1",
              "type": "prod",
            },
          },
          "location": "node_modules/treport/node_modules/ms",
          "name": "ms",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
        },
        "punycode" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/treport/node_modules/unicode-length",
              "name": "punycode",
              "spec": "^2.0.0",
              "type": "prod",
            },
          },
          "location": "node_modules/treport/node_modules/punycode",
          "name": "punycode",
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
        },
        "supports-color" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/treport/node_modules/chalk",
              "name": "supports-color",
              "spec": "^5.3.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "has-flag" => Edge {
              "name": "has-flag",
              "spec": "^3.0.0",
              "to": "node_modules/has-flag",
              "type": "prod",
            },
          },
          "location": "node_modules/treport/node_modules/supports-color",
          "name": "supports-color",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
        },
        "unicode-length" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/treport",
              "name": "unicode-length",
              "spec": "^2.0.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "punycode" => Edge {
              "name": "punycode",
              "spec": "^2.0.0",
              "to": "node_modules/treport/node_modules/punycode",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^3.0.1",
              "to": "node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/treport/node_modules/unicode-length",
          "name": "unicode-length",
          "resolved": "https://registry.npmjs.org/unicode-length/-/unicode-length-2.0.1.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "treport",
          "spec": "^0.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "cardinal" => Edge {
          "name": "cardinal",
          "spec": "^2.1.1",
          "to": "node_modules/cardinal",
          "type": "prod",
        },
        "chalk" => Edge {
          "name": "chalk",
          "spec": "^2.4.2",
          "to": "node_modules/treport/node_modules/chalk",
          "type": "prod",
        },
        "import-jsx" => Edge {
          "name": "import-jsx",
          "spec": "^2.0.0",
          "to": "node_modules/import-jsx",
          "type": "prod",
        },
        "ink" => Edge {
          "name": "ink",
          "spec": "^2.1.1",
          "to": "node_modules/ink",
          "type": "prod",
        },
        "ms" => Edge {
          "name": "ms",
          "spec": "^2.1.1",
          "to": "node_modules/treport/node_modules/ms",
          "type": "prod",
        },
        "react" => Edge {
          "name": "react",
          "spec": "^16.8.6",
          "to": "node_modules/react",
          "type": "prod",
        },
        "string-length" => Edge {
          "name": "string-length",
          "spec": "^2.0.0",
          "to": "node_modules/string-length",
          "type": "prod",
        },
        "tap-parser" => Edge {
          "name": "tap-parser",
          "spec": "^9.3.2",
          "to": "node_modules/tap-parser",
          "type": "prod",
        },
        "unicode-length" => Edge {
          "name": "unicode-length",
          "spec": "^2.0.1",
          "to": "node_modules/treport/node_modules/unicode-length",
          "type": "prod",
        },
      },
      "location": "node_modules/treport",
      "name": "treport",
      "resolved": "https://registry.npmjs.org/treport/-/treport-0.3.0.tgz",
    },
    "trim-right" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/@babel/generator",
          "name": "trim-right",
          "spec": "^1.0.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/babel-generator",
          "name": "trim-right",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/trim-right",
      "name": "trim-right",
      "resolved": "https://registry.npmjs.org/trim-right/-/trim-right-1.0.1.tgz",
    },
    "trivial-deferred" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "trivial-deferred",
          "spec": "^1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/trivial-deferred",
      "name": "trivial-deferred",
      "resolved": "https://registry.npmjs.org/trivial-deferred/-/trivial-deferred-1.0.1.tgz",
    },
    "ts-node" => Node {
      "children": Map {
        "diff" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/ts-node",
              "name": "diff",
              "spec": "^3.1.0",
              "type": "prod",
            },
          },
          "location": "node_modules/ts-node/node_modules/diff",
          "name": "diff",
          "resolved": "https://registry.npmjs.org/diff/-/diff-3.5.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "ts-node",
          "spec": "^8.1.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "arg" => Edge {
          "name": "arg",
          "spec": "^4.1.0",
          "to": "node_modules/arg",
          "type": "prod",
        },
        "diff" => Edge {
          "name": "diff",
          "spec": "^3.1.0",
          "to": "node_modules/ts-node/node_modules/diff",
          "type": "prod",
        },
        "make-error" => Edge {
          "name": "make-error",
          "spec": "^1.1.1",
          "to": "node_modules/make-error",
          "type": "prod",
        },
        "source-map-support" => Edge {
          "name": "source-map-support",
          "spec": "^0.5.6",
          "to": "node_modules/source-map-support",
          "type": "prod",
        },
        "typescript" => Edge {
          "name": "typescript",
          "spec": ">=2.0",
          "to": "node_modules/typescript",
          "type": "peer",
        },
        "yn" => Edge {
          "name": "yn",
          "spec": "^3.0.0",
          "to": "node_modules/yn",
          "type": "prod",
        },
      },
      "location": "node_modules/ts-node",
      "name": "ts-node",
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-8.1.0.tgz",
    },
    "tunnel-agent" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/request",
          "name": "tunnel-agent",
          "spec": "^0.6.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "safe-buffer" => Edge {
          "name": "safe-buffer",
          "spec": "^5.0.1",
          "to": "node_modules/safe-buffer",
          "type": "prod",
        },
      },
      "location": "node_modules/tunnel-agent",
      "name": "tunnel-agent",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
    },
    "tweetnacl" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/bcrypt-pbkdf",
          "name": "tweetnacl",
          "spec": "^0.14.3",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/sshpk",
          "name": "tweetnacl",
          "spec": "~0.14.0",
          "type": "prod",
        },
      },
      "location": "node_modules/tweetnacl",
      "name": "tweetnacl",
      "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
    },
    "typescript" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "typescript",
          "spec": "^3.4.5",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/ts-node",
          "name": "typescript",
          "spec": ">=2.0",
          "type": "peer",
        },
      },
      "location": "node_modules/typescript",
      "name": "typescript",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-3.4.5.tgz",
    },
    "uglify-js" => Node {
      "children": Map {
        "source-map" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/uglify-js",
              "name": "source-map",
              "spec": "~0.6.1",
              "type": "prod",
            },
          },
          "location": "node_modules/uglify-js/node_modules/source-map",
          "name": "source-map",
          "optional": true,
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/handlebars",
          "name": "uglify-js",
          "spec": "^3.1.4",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "commander" => Edge {
          "name": "commander",
          "spec": "~2.20.0",
          "to": "node_modules/commander",
          "type": "prod",
        },
        "source-map" => Edge {
          "name": "source-map",
          "spec": "~0.6.1",
          "to": "node_modules/uglify-js/node_modules/source-map",
          "type": "prod",
        },
      },
      "location": "node_modules/uglify-js",
      "name": "uglify-js",
      "optional": true,
      "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.5.8.tgz",
    },
    "unicode-length" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap-mocha-reporter",
          "name": "unicode-length",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "punycode" => Edge {
          "name": "punycode",
          "spec": "^1.3.2",
          "to": "node_modules/punycode",
          "type": "prod",
        },
        "strip-ansi" => Edge {
          "name": "strip-ansi",
          "spec": "^3.0.1",
          "to": "node_modules/strip-ansi",
          "type": "prod",
        },
      },
      "location": "node_modules/unicode-length",
      "name": "unicode-length",
      "resolved": "https://registry.npmjs.org/unicode-length/-/unicode-length-1.0.3.tgz",
    },
    "uri-js" => Node {
      "children": Map {
        "punycode" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/uri-js",
              "name": "punycode",
              "spec": "^2.1.0",
              "type": "prod",
            },
          },
          "location": "node_modules/uri-js/node_modules/punycode",
          "name": "punycode",
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ajv",
          "name": "uri-js",
          "spec": "^4.2.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "punycode" => Edge {
          "name": "punycode",
          "spec": "^2.1.0",
          "to": "node_modules/uri-js/node_modules/punycode",
          "type": "prod",
        },
      },
      "location": "node_modules/uri-js",
      "name": "uri-js",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
    },
    "util-deprecate" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/readable-stream",
          "name": "util-deprecate",
          "spec": "~1.0.1",
          "type": "prod",
        },
      },
      "location": "node_modules/util-deprecate",
      "name": "util-deprecate",
      "optional": true,
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
    },
    "uuid" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/istanbul-lib-processinfo",
          "name": "uuid",
          "spec": "^3.3.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/nyc",
          "name": "uuid",
          "spec": "^3.3.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/request",
          "name": "uuid",
          "spec": "^3.3.2",
          "type": "prod",
        },
      },
      "location": "node_modules/uuid",
      "name": "uuid",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.3.2.tgz",
    },
    "validate-npm-package-license" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/normalize-package-data",
          "name": "validate-npm-package-license",
          "spec": "^3.0.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "spdx-correct" => Edge {
          "name": "spdx-correct",
          "spec": "^3.0.0",
          "to": "node_modules/spdx-correct",
          "type": "prod",
        },
        "spdx-expression-parse" => Edge {
          "name": "spdx-expression-parse",
          "spec": "^3.0.0",
          "to": "node_modules/spdx-expression-parse",
          "type": "prod",
        },
      },
      "location": "node_modules/validate-npm-package-license",
      "name": "validate-npm-package-license",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
    },
    "verror" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/jsprim",
          "name": "verror",
          "spec": "1.10.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "assert-plus" => Edge {
          "name": "assert-plus",
          "spec": "^1.0.0",
          "to": "node_modules/assert-plus",
          "type": "prod",
        },
        "core-util-is" => Edge {
          "name": "core-util-is",
          "spec": "1.0.2",
          "to": "node_modules/core-util-is",
          "type": "prod",
        },
        "extsprintf" => Edge {
          "name": "extsprintf",
          "spec": "^1.2.0",
          "to": "node_modules/extsprintf",
          "type": "prod",
        },
      },
      "location": "node_modules/verror",
      "name": "verror",
      "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
    },
    "which" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cross-spawn",
          "name": "which",
          "spec": "^1.2.9",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/istanbul-lib-processinfo/node_modules/cross-spawn",
          "name": "which",
          "spec": "^1.2.9",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/spawn-wrap",
          "name": "which",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "which",
          "spec": "^1.3.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "isexe" => Edge {
          "name": "isexe",
          "spec": "^2.0.0",
          "to": "node_modules/isexe",
          "type": "prod",
        },
      },
      "location": "node_modules/which",
      "name": "which",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
    },
    "which-module" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yargs",
          "name": "which-module",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/which-module",
      "name": "which-module",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
    },
    "widest-line" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink",
          "name": "widest-line",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "string-width" => Edge {
          "name": "string-width",
          "spec": "^2.1.1",
          "to": "node_modules/string-width",
          "type": "prod",
        },
      },
      "location": "node_modules/widest-line",
      "name": "widest-line",
      "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-2.0.1.tgz",
    },
    "wordwrap" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/handlebars",
          "name": "wordwrap",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/wordwrap",
      "name": "wordwrap",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz",
    },
    "wrap-ansi" => Node {
      "children": Map {
        "is-fullwidth-code-point" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/wrap-ansi/node_modules/string-width",
              "name": "is-fullwidth-code-point",
              "spec": "^1.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "number-is-nan" => Edge {
              "name": "number-is-nan",
              "spec": "^1.0.0",
              "to": "node_modules/number-is-nan",
              "type": "prod",
            },
          },
          "location": "node_modules/wrap-ansi/node_modules/is-fullwidth-code-point",
          "name": "is-fullwidth-code-point",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
        },
        "string-width" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/wrap-ansi",
              "name": "string-width",
              "spec": "^1.0.1",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "code-point-at" => Edge {
              "name": "code-point-at",
              "spec": "^1.0.0",
              "to": "node_modules/code-point-at",
              "type": "prod",
            },
            "is-fullwidth-code-point" => Edge {
              "name": "is-fullwidth-code-point",
              "spec": "^1.0.0",
              "to": "node_modules/wrap-ansi/node_modules/is-fullwidth-code-point",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^3.0.0",
              "to": "node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/wrap-ansi/node_modules/string-width",
          "name": "string-width",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/cliui",
          "name": "wrap-ansi",
          "spec": "^2.0.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "string-width" => Edge {
          "name": "string-width",
          "spec": "^1.0.1",
          "to": "node_modules/wrap-ansi/node_modules/string-width",
          "type": "prod",
        },
        "strip-ansi" => Edge {
          "name": "strip-ansi",
          "spec": "^3.0.1",
          "to": "node_modules/strip-ansi",
          "type": "prod",
        },
      },
      "location": "node_modules/wrap-ansi",
      "name": "wrap-ansi",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
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
    "write-file-atomic" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/caching-transform",
          "name": "write-file-atomic",
          "spec": "^2.4.2",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap",
          "name": "write-file-atomic",
          "spec": "^2.4.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "graceful-fs" => Edge {
          "name": "graceful-fs",
          "spec": "^4.1.11",
          "to": "node_modules/graceful-fs",
          "type": "prod",
        },
        "imurmurhash" => Edge {
          "name": "imurmurhash",
          "spec": "^0.1.4",
          "to": "node_modules/imurmurhash",
          "type": "prod",
        },
        "signal-exit" => Edge {
          "name": "signal-exit",
          "spec": "^3.0.2",
          "to": "node_modules/signal-exit",
          "type": "prod",
        },
      },
      "location": "node_modules/write-file-atomic",
      "name": "write-file-atomic",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-2.4.2.tgz",
    },
    "y18n" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/yargs",
          "name": "y18n",
          "spec": "^4.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/y18n",
      "name": "y18n",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.0.tgz",
    },
    "yallist" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/lru-cache",
          "name": "yallist",
          "spec": "^2.1.2",
          "type": "prod",
        },
      },
      "location": "node_modules/yallist",
      "name": "yallist",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
    },
    "yaml" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "yaml",
          "spec": "^1.5.1",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/tap-yaml",
          "name": "yaml",
          "spec": "^1.5.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@babel/runtime" => Edge {
          "name": "@babel/runtime",
          "spec": "^7.6.3",
          "to": "node_modules/@babel/runtime",
          "type": "prod",
        },
      },
      "location": "node_modules/yaml",
      "name": "yaml",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.7.2.tgz",
    },
    "yapool" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/tap",
          "name": "yapool",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/yapool",
      "name": "yapool",
      "resolved": "https://registry.npmjs.org/yapool/-/yapool-1.0.0.tgz",
    },
    "yargs" => Node {
      "children": Map {
        "ansi-regex" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/yargs/node_modules/strip-ansi",
              "name": "ansi-regex",
              "spec": "^4.1.0",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/ansi-regex",
          "name": "ansi-regex",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
        },
        "ansi-styles" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/yargs/node_modules/wrap-ansi",
              "name": "ansi-styles",
              "spec": "^3.2.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "color-convert" => Edge {
              "name": "color-convert",
              "spec": "^1.9.0",
              "to": "node_modules/color-convert",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/ansi-styles",
          "name": "ansi-styles",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
        },
        "cliui" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/yargs",
              "name": "cliui",
              "spec": "^5.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "string-width" => Edge {
              "name": "string-width",
              "spec": "^3.1.0",
              "to": "node_modules/yargs/node_modules/string-width",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^5.2.0",
              "to": "node_modules/yargs/node_modules/strip-ansi",
              "type": "prod",
            },
            "wrap-ansi" => Edge {
              "name": "wrap-ansi",
              "spec": "^5.1.0",
              "to": "node_modules/yargs/node_modules/wrap-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/cliui",
          "name": "cliui",
          "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
        },
        "string-width" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/yargs",
              "name": "string-width",
              "spec": "^3.0.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/yargs/node_modules/cliui",
              "name": "string-width",
              "spec": "^3.1.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/yargs/node_modules/wrap-ansi",
              "name": "string-width",
              "spec": "^3.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "emoji-regex" => Edge {
              "name": "emoji-regex",
              "spec": "^7.0.1",
              "to": "node_modules/emoji-regex",
              "type": "prod",
            },
            "is-fullwidth-code-point" => Edge {
              "name": "is-fullwidth-code-point",
              "spec": "^2.0.0",
              "to": "node_modules/is-fullwidth-code-point",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^5.1.0",
              "to": "node_modules/yargs/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/string-width",
          "name": "string-width",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
        },
        "strip-ansi" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/yargs/node_modules/cliui",
              "name": "strip-ansi",
              "spec": "^5.2.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/yargs/node_modules/string-width",
              "name": "strip-ansi",
              "spec": "^5.1.0",
              "type": "prod",
            },
            Edge {
              "from": "node_modules/yargs/node_modules/wrap-ansi",
              "name": "strip-ansi",
              "spec": "^5.0.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-regex" => Edge {
              "name": "ansi-regex",
              "spec": "^4.1.0",
              "to": "node_modules/yargs/node_modules/ansi-regex",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/strip-ansi",
          "name": "strip-ansi",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
        },
        "wrap-ansi" => Node {
          "edgesIn": Set {
            Edge {
              "from": "node_modules/yargs/node_modules/cliui",
              "name": "wrap-ansi",
              "spec": "^5.1.0",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "ansi-styles" => Edge {
              "name": "ansi-styles",
              "spec": "^3.2.0",
              "to": "node_modules/yargs/node_modules/ansi-styles",
              "type": "prod",
            },
            "string-width" => Edge {
              "name": "string-width",
              "spec": "^3.0.0",
              "to": "node_modules/yargs/node_modules/string-width",
              "type": "prod",
            },
            "strip-ansi" => Edge {
              "name": "strip-ansi",
              "spec": "^5.0.0",
              "to": "node_modules/yargs/node_modules/strip-ansi",
              "type": "prod",
            },
          },
          "location": "node_modules/yargs/node_modules/wrap-ansi",
          "name": "wrap-ansi",
          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "yargs",
          "spec": "^13.2.2",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "cliui" => Edge {
          "name": "cliui",
          "spec": "^5.0.0",
          "to": "node_modules/yargs/node_modules/cliui",
          "type": "prod",
        },
        "find-up" => Edge {
          "name": "find-up",
          "spec": "^3.0.0",
          "to": "node_modules/find-up",
          "type": "prod",
        },
        "get-caller-file" => Edge {
          "name": "get-caller-file",
          "spec": "^2.0.1",
          "to": "node_modules/get-caller-file",
          "type": "prod",
        },
        "require-directory" => Edge {
          "name": "require-directory",
          "spec": "^2.1.1",
          "to": "node_modules/require-directory",
          "type": "prod",
        },
        "require-main-filename" => Edge {
          "name": "require-main-filename",
          "spec": "^2.0.0",
          "to": "node_modules/require-main-filename",
          "type": "prod",
        },
        "set-blocking" => Edge {
          "name": "set-blocking",
          "spec": "^2.0.0",
          "to": "node_modules/set-blocking",
          "type": "prod",
        },
        "string-width" => Edge {
          "name": "string-width",
          "spec": "^3.0.0",
          "to": "node_modules/yargs/node_modules/string-width",
          "type": "prod",
        },
        "which-module" => Edge {
          "name": "which-module",
          "spec": "^2.0.0",
          "to": "node_modules/which-module",
          "type": "prod",
        },
        "y18n" => Edge {
          "name": "y18n",
          "spec": "^4.0.0",
          "to": "node_modules/y18n",
          "type": "prod",
        },
        "yargs-parser" => Edge {
          "name": "yargs-parser",
          "spec": "^13.1.1",
          "to": "node_modules/yargs-parser",
          "type": "prod",
        },
      },
      "location": "node_modules/yargs",
      "name": "yargs",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-13.3.0.tgz",
    },
    "yargs-parser" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/nyc",
          "name": "yargs-parser",
          "spec": "^13.0.0",
          "type": "prod",
        },
        Edge {
          "from": "node_modules/yargs",
          "name": "yargs-parser",
          "spec": "^13.1.1",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "camelcase" => Edge {
          "name": "camelcase",
          "spec": "^5.0.0",
          "to": "node_modules/camelcase",
          "type": "prod",
        },
        "decamelize" => Edge {
          "name": "decamelize",
          "spec": "^1.2.0",
          "to": "node_modules/decamelize",
          "type": "prod",
        },
      },
      "location": "node_modules/yargs-parser",
      "name": "yargs-parser",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-13.1.1.tgz",
    },
    "yn" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ts-node",
          "name": "yn",
          "spec": "^3.0.0",
          "type": "prod",
        },
      },
      "location": "node_modules/yn",
      "name": "yn",
      "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.0.tgz",
    },
    "yoga-layout-prebuilt" => Node {
      "edgesIn": Set {
        Edge {
          "from": "node_modules/ink",
          "name": "yoga-layout-prebuilt",
          "spec": "^1.9.3",
          "type": "prod",
        },
      },
      "location": "node_modules/yoga-layout-prebuilt",
      "name": "yoga-layout-prebuilt",
      "resolved": "https://registry.npmjs.org/yoga-layout-prebuilt/-/yoga-layout-prebuilt-1.9.3.tgz",
    },
  },
  "edgesOut": Map {
    "mkdirp" => Edge {
      "name": "mkdirp",
      "spec": "^0.5.1",
      "to": "node_modules/mkdirp",
      "type": "prod",
    },
    "tap" => Edge {
      "name": "tap",
      "spec": "^13.0.3",
      "to": "node_modules/tap",
      "type": "prod",
    },
  },
  "location": "",
  "name": "audit-completely-fix-tap-13-installed-in-2019",
  "resolved": null,
}
`

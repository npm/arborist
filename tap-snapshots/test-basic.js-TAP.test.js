/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/basic.js TAP deeproot > logical 1`] = `
root@1.2.3 test/fixtures/deeproot/root
├─┬ @scope/x@1.2.3 test/fixtures/deeproot/root/node_modules/@scope/x
│ ├─┬ glob@4.0.5 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob
│ │ ├── graceful-fs@3.0.2 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs
│ │ ├── inherits@2.0.1 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/inherits
│ │ ├─┬ minimatch@1.0.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch
│ │ │ ├── sigmund@1.0.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund
│ │ │ ├── lru-cache@2.5.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache
│ │ │ └── once@1.3.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/once (deduped)
│ │ └── once@1.3.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/once
│ ├─┬ @scope/y@1.2.3 test/fixtures/deeproot/root/node_modules/@scope/y (deduped)
│ │ └─┬ foo@1.2.3 test/fixtures/deeproot/root/node_modules/foo (invalid for test/fixtures/deeproot/root/node_modules/@scope/y) (deduped)
│ │   ├── abbrev@1.1.1 test/fixtures/deeproot/root/node_modules/foo/node_modules/express
│ │   └── @scope/x@1.2.3 test/fixtures/deeproot/root/node_modules/@scope/x (deduped)
│ └── @scope/x@1.2.3 test/fixtures/deeproot/root/node_modules/@scope/x (deduped)
├─┬ foo@1.2.3 test/fixtures/deeproot/root/node_modules/foo (invalid for test/fixtures/deeproot/root/node_modules/@scope/y)
│ ├── abbrev@1.1.1 test/fixtures/deeproot/root/node_modules/foo/node_modules/express
│ └── @scope/x@1.2.3 test/fixtures/deeproot/root/node_modules/@scope/x (deduped)
└─┬ @scope/y@1.2.3 test/fixtures/deeproot/root/node_modules/@scope/y
  └─┬ foo@1.2.3 test/fixtures/deeproot/root/node_modules/foo (invalid for test/fixtures/deeproot/root/node_modules/@scope/y) (deduped)
    ├── abbrev@1.1.1 test/fixtures/deeproot/root/node_modules/foo/node_modules/express
    └── @scope/x@1.2.3 test/fixtures/deeproot/root/node_modules/@scope/x (deduped)
`

exports[`test/basic.js TAP deeproot > package lock 1`] = `
{
  "name": "root",
  "version": "1.2.3",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@scope/x": {
      "version": "1.2.3",
      "requires": {
        "glob": "4",
        "@scope/y": ""
      },
      "dependencies": {
        "glob": {
          "version": "4.0.5",
          "integrity": "sha1-qmCKL2xXetNX4a5aXCbZqNGWklU=",
          "requires": {
            "graceful-fs": "",
            "inherits": "",
            "minimatch": "",
            "once": ""
          },
          "dependencies": {
            "graceful-fs": {
              "version": "3.0.2"
            },
            "inherits": {
              "version": "2.0.1"
            },
            "minimatch": {
              "version": "1.0.0",
              "requires": {
                "sigmund": "",
                "lru-cache": "",
                "once": ""
              },
              "dependencies": {
                "lru-cache": {
                  "version": "2.5.0"
                },
                "sigmund": {
                  "version": "1.0.0"
                }
              }
            },
            "once": {
              "version": "1.3.0"
            }
          }
        }
      }
    },
    "@scope/y": {
      "version": "1.2.3",
      "requires": {
        "foo": "99.x"
      }
    },
    "foo": {
      "version": "1.2.3",
      "requires": {
        "express": "npm:abbrev@*",
        "@scope/x": ""
      },
      "dependencies": {
        "express": {
          "version": "npm:abbrev@1.1.1",
          "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="
        }
      }
    }
  }
}
`

exports[`test/basic.js TAP deeproot > physical 1`] = `
root@1.2.3 test/fixtures/deeproot/root
├─┬ @scope/x@1.2.3 test/fixtures/deeproot/root/node_modules/@scope/x
│ └─┬ glob@4.0.5 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob
│   ├── graceful-fs@3.0.2 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs
│   ├── inherits@2.0.1 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/inherits
│   ├─┬ minimatch@1.0.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch
│   │ ├── lru-cache@2.5.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache
│   │ └── sigmund@1.0.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund
│   └── once@1.3.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/once
├── @scope/y@1.2.3 test/fixtures/deeproot/root/node_modules/@scope/y
└─┬ foo@1.2.3 test/fixtures/deeproot/root/node_modules/foo (invalid for test/fixtures/deeproot/root/node_modules/@scope/y)
  └── abbrev@1.1.1 test/fixtures/deeproot/root/node_modules/foo/node_modules/express
`

exports[`test/basic.js TAP filterWith > logical 1`] = `
root@1.2.3 test/fixtures/root
├─┬ @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x
│ ├─┬ @scope/y@1.2.3 test/fixtures/root/node_modules/@scope/y (deduped)
│ │ └─┬ foo@1.2.3 test/fixtures/root/node_modules/foo (invalid for test/fixtures/root/node_modules/@scope/y) (deduped)
│ │   └── @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x (deduped)
│ └── @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x (deduped)
├─┬ foo@1.2.3 test/fixtures/root/node_modules/foo (invalid for test/fixtures/root/node_modules/@scope/y)
│ └── @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x (deduped)
└─┬ @scope/y@1.2.3 test/fixtures/root/node_modules/@scope/y
  └─┬ foo@1.2.3 test/fixtures/root/node_modules/foo (invalid for test/fixtures/root/node_modules/@scope/y) (deduped)
    └── @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x (deduped)
`

exports[`test/basic.js TAP filterWith > package lock 1`] = `
{
  "name": "root",
  "version": "1.2.3",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@scope/x": {
      "version": "1.2.3",
      "requires": {
        "glob": "4",
        "@scope/y": ""
      }
    },
    "@scope/y": {
      "version": "1.2.3",
      "requires": {
        "foo": "99.x"
      }
    },
    "foo": {
      "version": "1.2.3",
      "requires": {
        "express": "npm:abbrev@*",
        "@scope/x": ""
      }
    }
  }
}
`

exports[`test/basic.js TAP filterWith > physical 1`] = `
root@1.2.3 test/fixtures/root
├── @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x
├── @scope/y@1.2.3 test/fixtures/root/node_modules/@scope/y
└── foo@1.2.3 test/fixtures/root/node_modules/foo (invalid for test/fixtures/root/node_modules/@scope/y)
`

exports[`test/basic.js TAP linkedroot > logical 1`] = `
root@1.2.3 test/fixtures/linkedroot
├─┬ @scope/x@1.2.3 test/fixtures/linkedroot/node_modules/@scope/x
│ ├─┬ glob@4.0.5 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob
│ │ ├── graceful-fs@3.0.2 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs
│ │ ├── inherits@2.0.1 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/inherits
│ │ ├─┬ minimatch@1.0.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/minimatch
│ │ │ ├── sigmund@1.0.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund
│ │ │ ├── lru-cache@2.5.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache
│ │ │ └── once@1.3.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/once (deduped)
│ │ └── once@1.3.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/once
│ ├─┬ @scope/y@1.2.3 test/fixtures/linkedroot/node_modules/@scope/y (deduped)
│ │ └─┬ foo@1.2.3 test/fixtures/linkedroot/node_modules/foo (invalid for test/fixtures/linkedroot/node_modules/@scope/y) (deduped)
│ │   ├── abbrev@1.1.1 test/fixtures/linkedroot/node_modules/foo/node_modules/express
│ │   └── @scope/x@1.2.3 test/fixtures/linkedroot/node_modules/@scope/x (deduped)
│ └── @scope/x@1.2.3 test/fixtures/linkedroot/node_modules/@scope/x (deduped)
├─┬ foo@1.2.3 test/fixtures/linkedroot/node_modules/foo (invalid for test/fixtures/linkedroot/node_modules/@scope/y)
│ ├── abbrev@1.1.1 test/fixtures/linkedroot/node_modules/foo/node_modules/express
│ └── @scope/x@1.2.3 test/fixtures/linkedroot/node_modules/@scope/x (deduped)
└─┬ @scope/y@1.2.3 test/fixtures/linkedroot/node_modules/@scope/y
  └─┬ foo@1.2.3 test/fixtures/linkedroot/node_modules/foo (invalid for test/fixtures/linkedroot/node_modules/@scope/y) (deduped)
    ├── abbrev@1.1.1 test/fixtures/linkedroot/node_modules/foo/node_modules/express
    └── @scope/x@1.2.3 test/fixtures/linkedroot/node_modules/@scope/x (deduped)
`

exports[`test/basic.js TAP linkedroot > package lock 1`] = `
{
  "name": "root",
  "version": "1.2.3",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@scope/x": {
      "version": "1.2.3",
      "requires": {
        "glob": "4",
        "@scope/y": ""
      },
      "dependencies": {
        "glob": {
          "version": "4.0.5",
          "integrity": "sha1-qmCKL2xXetNX4a5aXCbZqNGWklU=",
          "requires": {
            "graceful-fs": "",
            "inherits": "",
            "minimatch": "",
            "once": ""
          },
          "dependencies": {
            "graceful-fs": {
              "version": "3.0.2"
            },
            "inherits": {
              "version": "2.0.1"
            },
            "minimatch": {
              "version": "1.0.0",
              "requires": {
                "sigmund": "",
                "lru-cache": "",
                "once": ""
              },
              "dependencies": {
                "lru-cache": {
                  "version": "2.5.0"
                },
                "sigmund": {
                  "version": "1.0.0"
                }
              }
            },
            "once": {
              "version": "1.3.0"
            }
          }
        }
      }
    },
    "@scope/y": {
      "version": "1.2.3",
      "requires": {
        "foo": "99.x"
      }
    },
    "foo": {
      "version": "1.2.3",
      "requires": {
        "express": "npm:abbrev@*",
        "@scope/x": ""
      },
      "dependencies": {
        "express": {
          "version": "npm:abbrev@1.1.1",
          "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="
        }
      }
    }
  }
}
`

exports[`test/basic.js TAP linkedroot > physical 1`] = `
root@1.2.3 test/fixtures/linkedroot
├─┬ @scope/x@1.2.3 test/fixtures/linkedroot/node_modules/@scope/x
│ └─┬ glob@4.0.5 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob
│   ├── graceful-fs@3.0.2 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs
│   ├── inherits@2.0.1 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/inherits
│   ├─┬ minimatch@1.0.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/minimatch
│   │ ├── lru-cache@2.5.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache
│   │ └── sigmund@1.0.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund
│   └── once@1.3.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/once
├── @scope/y@1.2.3 test/fixtures/linkedroot/node_modules/@scope/y
└─┬ foo@1.2.3 test/fixtures/linkedroot/node_modules/foo (invalid for test/fixtures/linkedroot/node_modules/@scope/y)
  └── abbrev@1.1.1 test/fixtures/linkedroot/node_modules/foo/node_modules/express
`

exports[`test/basic.js TAP looking outside of cwd > logical 1`] = `
root@1.2.3 
├─┬ @scope/x@1.2.3 
│ ├─┬ glob@4.0.5 es/glob
│ │ ├── graceful-fs@3.0.2 es/glob/node_modules/graceful-fs
│ │ ├── inherits@2.0.1 es/glob/node_modules/inherits
│ │ ├─┬ minimatch@1.0.0 es/glob/node_modules/minimatch
│ │ │ ├── sigmund@1.0.0 es/glob/node_modules/minimatch/node_modules/sigmund
│ │ │ ├── lru-cache@2.5.0 es/glob/node_modules/minimatch/node_modules/lru-cache
│ │ │ └── once@1.3.0 es/glob/node_modules/once (deduped)
│ │ └── once@1.3.0 es/glob/node_modules/once
│ ├─┬ @scope/y@1.2.3  (deduped)
│ │ └─┬ foo@1.2.3  (invalid for ) (deduped)
│ │   ├── abbrev@1.1.1 press
│ │   └── @scope/x@1.2.3  (deduped)
│ └── @scope/x@1.2.3  (deduped)
├─┬ foo@1.2.3  (invalid for )
│ ├── abbrev@1.1.1 press
│ └── @scope/x@1.2.3  (deduped)
└─┬ @scope/y@1.2.3 
  └─┬ foo@1.2.3  (invalid for ) (deduped)
    ├── abbrev@1.1.1 press
    └── @scope/x@1.2.3  (deduped)
`

exports[`test/basic.js TAP looking outside of cwd > package lock 1`] = `
{
  "name": "root",
  "version": "1.2.3",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@scope/x": {
      "version": "1.2.3",
      "requires": {
        "glob": "4",
        "@scope/y": ""
      },
      "dependencies": {
        "glob": {
          "version": "4.0.5",
          "integrity": "sha1-qmCKL2xXetNX4a5aXCbZqNGWklU=",
          "requires": {
            "graceful-fs": "",
            "inherits": "",
            "minimatch": "",
            "once": ""
          },
          "dependencies": {
            "graceful-fs": {
              "version": "3.0.2"
            },
            "inherits": {
              "version": "2.0.1"
            },
            "minimatch": {
              "version": "1.0.0",
              "requires": {
                "sigmund": "",
                "lru-cache": "",
                "once": ""
              },
              "dependencies": {
                "lru-cache": {
                  "version": "2.5.0"
                },
                "sigmund": {
                  "version": "1.0.0"
                }
              }
            },
            "once": {
              "version": "1.3.0"
            }
          }
        }
      }
    },
    "@scope/y": {
      "version": "1.2.3",
      "requires": {
        "foo": "99.x"
      }
    },
    "foo": {
      "version": "1.2.3",
      "requires": {
        "express": "npm:abbrev@*",
        "@scope/x": ""
      },
      "dependencies": {
        "express": {
          "version": "npm:abbrev@1.1.1",
          "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="
        }
      }
    }
  }
}
`

exports[`test/basic.js TAP looking outside of cwd > physical 1`] = `
root@1.2.3 
├─┬ @scope/x@1.2.3 
│ └─┬ glob@4.0.5 es/glob
│   ├── graceful-fs@3.0.2 es/glob/node_modules/graceful-fs
│   ├── inherits@2.0.1 es/glob/node_modules/inherits
│   ├─┬ minimatch@1.0.0 es/glob/node_modules/minimatch
│   │ ├── lru-cache@2.5.0 es/glob/node_modules/minimatch/node_modules/lru-cache
│   │ └── sigmund@1.0.0 es/glob/node_modules/minimatch/node_modules/sigmund
│   └── once@1.3.0 es/glob/node_modules/once
├── @scope/y@1.2.3 
└─┬ foo@1.2.3  (invalid for )
  └── abbrev@1.1.1 press
`

exports[`test/basic.js TAP noname > logical 1`] = `
test/fixtures/noname
`

exports[`test/basic.js TAP noname > package lock 1`] = `
{
  "name": "noname",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "foo": {
      "dev": true,
      "optional": true
    }
  }
}
`

exports[`test/basic.js TAP noname > physical 1`] = `
test/fixtures/noname
└── test/fixtures/noname/node_modules/foo
`

exports[`test/basic.js TAP other > logical 1`] = `
test/fixtures/other
`

exports[`test/basic.js TAP other > package lock 1`] = `
{
  "name": "other",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "glob": {
      "version": "file:test/fixtures/root/node_modules/@scope/x/node_modules/glob",
      "integrity": "sha1-qmCKL2xXetNX4a5aXCbZqNGWklU=",
      "dev": true,
      "optional": true
    }
  }
}
`

exports[`test/basic.js TAP other > physical 1`] = `
test/fixtures/other
└── glob@4.0.5 test/fixtures/other/node_modules/glob (symlink)
`

exports[`test/basic.js TAP root > logical 1`] = `
root@1.2.3 test/fixtures/root
├─┬ @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x
│ ├─┬ glob@4.0.5 test/fixtures/root/node_modules/@scope/x/node_modules/glob
│ │ ├── graceful-fs@3.0.2 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs
│ │ ├── inherits@2.0.1 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/inherits
│ │ ├─┬ minimatch@1.0.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch
│ │ │ ├── sigmund@1.0.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund
│ │ │ ├── lru-cache@2.5.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache
│ │ │ └── once@1.3.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/once (deduped)
│ │ └── once@1.3.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/once
│ ├─┬ @scope/y@1.2.3 test/fixtures/root/node_modules/@scope/y (deduped)
│ │ └─┬ foo@1.2.3 test/fixtures/root/node_modules/foo (invalid for test/fixtures/root/node_modules/@scope/y) (deduped)
│ │   ├── abbrev@1.1.1 test/fixtures/root/node_modules/foo/node_modules/express
│ │   └── @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x (deduped)
│ └── @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x (deduped)
├─┬ foo@1.2.3 test/fixtures/root/node_modules/foo (invalid for test/fixtures/root/node_modules/@scope/y)
│ ├── abbrev@1.1.1 test/fixtures/root/node_modules/foo/node_modules/express
│ └── @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x (deduped)
└─┬ @scope/y@1.2.3 test/fixtures/root/node_modules/@scope/y
  └─┬ foo@1.2.3 test/fixtures/root/node_modules/foo (invalid for test/fixtures/root/node_modules/@scope/y) (deduped)
    ├── abbrev@1.1.1 test/fixtures/root/node_modules/foo/node_modules/express
    └── @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x (deduped)
`

exports[`test/basic.js TAP root > package lock 1`] = `
{
  "name": "root",
  "version": "1.2.3",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@scope/x": {
      "version": "1.2.3",
      "requires": {
        "glob": "4",
        "@scope/y": ""
      },
      "dependencies": {
        "glob": {
          "version": "4.0.5",
          "integrity": "sha1-qmCKL2xXetNX4a5aXCbZqNGWklU=",
          "requires": {
            "graceful-fs": "",
            "inherits": "",
            "minimatch": "",
            "once": ""
          },
          "dependencies": {
            "graceful-fs": {
              "version": "3.0.2"
            },
            "inherits": {
              "version": "2.0.1"
            },
            "minimatch": {
              "version": "1.0.0",
              "requires": {
                "sigmund": "",
                "lru-cache": "",
                "once": ""
              },
              "dependencies": {
                "lru-cache": {
                  "version": "2.5.0"
                },
                "sigmund": {
                  "version": "1.0.0"
                }
              }
            },
            "once": {
              "version": "1.3.0"
            }
          }
        }
      }
    },
    "@scope/y": {
      "version": "1.2.3",
      "requires": {
        "foo": "99.x"
      }
    },
    "foo": {
      "version": "1.2.3",
      "requires": {
        "express": "npm:abbrev@*",
        "@scope/x": ""
      },
      "dependencies": {
        "express": {
          "version": "npm:abbrev@1.1.1",
          "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="
        }
      }
    }
  }
}
`

exports[`test/basic.js TAP root > physical 1`] = `
root@1.2.3 test/fixtures/root
├─┬ @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x
│ └─┬ glob@4.0.5 test/fixtures/root/node_modules/@scope/x/node_modules/glob
│   ├── graceful-fs@3.0.2 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs
│   ├── inherits@2.0.1 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/inherits
│   ├─┬ minimatch@1.0.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch
│   │ ├── lru-cache@2.5.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache
│   │ └── sigmund@1.0.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund
│   └── once@1.3.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/once
├── @scope/y@1.2.3 test/fixtures/root/node_modules/@scope/y
└─┬ foo@1.2.3 test/fixtures/root/node_modules/foo (invalid for test/fixtures/root/node_modules/@scope/y)
  └── abbrev@1.1.1 test/fixtures/root/node_modules/foo/node_modules/express
`

exports[`test/basic.js TAP selflink > logical 1`] = `
selflink@1.2.3 test/fixtures/selflink
├─┬ foo@1.2.3 test/fixtures/selflink/node_modules/foo
│ ├── selflink@1.2.3 test/fixtures/selflink (symlink)
│ └── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob
└─┬ @scope/y@1.2.3 test/fixtures/selflink/node_modules/@scope/y
  └─┬ foo@1.2.3 test/fixtures/selflink/node_modules/foo (deduped)
    ├── selflink@1.2.3 test/fixtures/selflink (symlink)
    └── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob
`

exports[`test/basic.js TAP selflink > package lock 1`] = `
{
  "name": "selflink",
  "version": "1.2.3",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@scope/y": {
      "version": "1.2.3",
      "requires": {
        "foo": "*"
      }
    },
    "@scope/z": {
      "version": "1.2.3",
      "dev": true,
      "optional": true,
      "dependencies": {
        "glob": {
          "version": "file:test/fixtures/selflink/node_modules/foo/node_modules/glob",
          "dev": true,
          "optional": true
        }
      }
    },
    "foo": {
      "version": "1.2.3",
      "requires": {
        "selflink": "*",
        "glob": "4"
      },
      "dependencies": {
        "glob": {
          "version": "4.0.5"
        },
        "selflink": {
          "version": "file:test/fixtures/selflink"
        }
      }
    }
  }
}
`

exports[`test/basic.js TAP selflink > physical 1`] = `
selflink@1.2.3 test/fixtures/selflink
├── @scope/y@1.2.3 test/fixtures/selflink/node_modules/@scope/y
├─┬ @scope/z@1.2.3 test/fixtures/selflink/node_modules/@scope/z
│ └── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob (symlink)
└─┬ foo@1.2.3 test/fixtures/selflink/node_modules/foo
  ├── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob
  └── selflink@1.2.3 test/fixtures/selflink (symlink)
`

exports[`test/basic.js TAP shake out Link target timing issue > logical 1`] = `
selflink@1.2.3 test/fixtures/selflink
├─┬ foo@1.2.3 test/fixtures/selflink/node_modules/foo
│ ├── selflink@1.2.3 test/fixtures/selflink (symlink)
│ └── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob
└─┬ @scope/y@1.2.3 test/fixtures/selflink/node_modules/@scope/y
  └─┬ foo@1.2.3 test/fixtures/selflink/node_modules/foo (deduped)
    ├── selflink@1.2.3 test/fixtures/selflink (symlink)
    └── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob
`

exports[`test/basic.js TAP shake out Link target timing issue > package lock 1`] = `
{
  "name": "selflink",
  "version": "1.2.3",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@scope/y": {
      "version": "1.2.3",
      "requires": {
        "foo": "*"
      }
    },
    "@scope/z": {
      "version": "1.2.3",
      "dev": true,
      "optional": true,
      "dependencies": {
        "glob": {
          "version": "file:test/fixtures/selflink/node_modules/foo/node_modules/glob",
          "dev": true,
          "optional": true
        }
      }
    },
    "foo": {
      "version": "1.2.3",
      "requires": {
        "selflink": "*",
        "glob": "4"
      },
      "dependencies": {
        "glob": {
          "version": "4.0.5"
        },
        "selflink": {
          "version": "file:test/fixtures/selflink"
        }
      }
    }
  }
}
`

exports[`test/basic.js TAP shake out Link target timing issue > physical 1`] = `
selflink@1.2.3 test/fixtures/selflink
├── @scope/y@1.2.3 test/fixtures/selflink/node_modules/@scope/y
├─┬ @scope/z@1.2.3 test/fixtures/selflink/node_modules/@scope/z
│ └── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob (symlink)
└─┬ foo@1.2.3 test/fixtures/selflink/node_modules/foo
  ├── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob
  └── selflink@1.2.3 test/fixtures/selflink (symlink)
`

exports[`test/basic.js TAP walking through trees logical sprint > logical walk log 1`] = `
Array [
  Array [
    "ENTER",
    "/",
  ],
  Array [
    "ENTER",
    "/@scope/x",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/graceful-fs",
  ],
  Array [
    "EXIT",
    Array [
      "/@scope/x/glob/graceful-fs",
      Array [],
    ],
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/inherits",
  ],
  Array [
    "EXIT",
    Array [
      "/@scope/x/glob/inherits",
      Array [],
    ],
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/minimatch",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/minimatch/sigmund",
  ],
  Array [
    "EXIT",
    Array [
      "/@scope/x/glob/minimatch/sigmund",
      Array [],
    ],
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/minimatch/lru-cache",
  ],
  Array [
    "EXIT",
    Array [
      "/@scope/x/glob/minimatch/lru-cache",
      Array [],
    ],
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/once",
  ],
  Array [
    "EXIT",
    Array [
      "/@scope/x/glob/once",
      Array [],
    ],
  ],
  Array [
    "EXIT",
    Array [
      "/@scope/x/glob/minimatch",
      Array [
        Array [
          "/@scope/x/glob/minimatch/sigmund",
          Array [],
        ],
        Array [
          "/@scope/x/glob/minimatch/lru-cache",
          Array [],
        ],
        Array [
          "/@scope/x/glob/once",
          Array [],
        ],
      ],
    ],
  ],
  Array [
    "EXIT",
    Array [
      "/@scope/x/glob",
      Array [
        Array [
          "/@scope/x/glob/graceful-fs",
          Array [],
        ],
        Array [
          "/@scope/x/glob/inherits",
          Array [],
        ],
        Array [
          "/@scope/x/glob/minimatch",
          Array [
            Array [
              "/@scope/x/glob/minimatch/sigmund",
              Array [],
            ],
            Array [
              "/@scope/x/glob/minimatch/lru-cache",
              Array [],
            ],
            Array [
              "/@scope/x/glob/once",
              Array [],
            ],
          ],
        ],
        Array [
          "/@scope/x/glob/once",
          Array [],
        ],
      ],
    ],
  ],
  Array [
    "ENTER",
    "/@scope/y",
  ],
  Array [
    "ENTER",
    "/foo",
  ],
  Array [
    "ENTER",
    "/foo/express",
  ],
  Array [
    "EXIT",
    Array [
      "/foo/express",
      Array [],
    ],
  ],
  Array [
    "EXIT",
    &ref_1 Array [
      "/foo",
      Array [
        Array [
          "/foo/express",
          Array [],
        ],
        &ref_2 Array [
          "/@scope/x",
          Array [
            Array [
              "/@scope/x/glob",
              Array [
                Array [
                  "/@scope/x/glob/graceful-fs",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/inherits",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/minimatch",
                  Array [
                    Array [
                      "/@scope/x/glob/minimatch/sigmund",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/minimatch/lru-cache",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/once",
                      Array [],
                    ],
                  ],
                ],
                Array [
                  "/@scope/x/glob/once",
                  Array [],
                ],
              ],
            ],
            Array [
              "/@scope/y",
              Array [
                <*ref_1>,
              ],
            ],
            <*ref_2>,
          ],
        ],
      ],
    ],
  ],
  Array [
    "EXIT",
    &ref_3 Array [
      "/@scope/y",
      Array [
        Array [
          "/foo",
          Array [
            Array [
              "/foo/express",
              Array [],
            ],
            &ref_2 Array [
              "/@scope/x",
              Array [
                Array [
                  "/@scope/x/glob",
                  Array [
                    Array [
                      "/@scope/x/glob/graceful-fs",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/inherits",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/minimatch",
                      Array [
                        Array [
                          "/@scope/x/glob/minimatch/sigmund",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/minimatch/lru-cache",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/once",
                          Array [],
                        ],
                      ],
                    ],
                    Array [
                      "/@scope/x/glob/once",
                      Array [],
                    ],
                  ],
                ],
                <*ref_3>,
                <*ref_2>,
              ],
            ],
          ],
        ],
      ],
    ],
  ],
  Array [
    "EXIT",
    &ref_2 Array [
      "/@scope/x",
      Array [
        Array [
          "/@scope/x/glob",
          Array [
            Array [
              "/@scope/x/glob/graceful-fs",
              Array [],
            ],
            Array [
              "/@scope/x/glob/inherits",
              Array [],
            ],
            Array [
              "/@scope/x/glob/minimatch",
              Array [
                Array [
                  "/@scope/x/glob/minimatch/sigmund",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/minimatch/lru-cache",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/once",
                  Array [],
                ],
              ],
            ],
            Array [
              "/@scope/x/glob/once",
              Array [],
            ],
          ],
        ],
        Array [
          "/@scope/y",
          Array [
            Array [
              "/foo",
              Array [
                Array [
                  "/foo/express",
                  Array [],
                ],
                <*ref_2>,
              ],
            ],
          ],
        ],
        <*ref_2>,
      ],
    ],
  ],
  Array [
    "EXIT",
    Array [
      "/",
      Array [
        &ref_2 Array [
          "/@scope/x",
          Array [
            Array [
              "/@scope/x/glob",
              Array [
                Array [
                  "/@scope/x/glob/graceful-fs",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/inherits",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/minimatch",
                  Array [
                    Array [
                      "/@scope/x/glob/minimatch/sigmund",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/minimatch/lru-cache",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/once",
                      Array [],
                    ],
                  ],
                ],
                Array [
                  "/@scope/x/glob/once",
                  Array [],
                ],
              ],
            ],
            Array [
              "/@scope/y",
              Array [
                Array [
                  "/foo",
                  Array [
                    Array [
                      "/foo/express",
                      Array [],
                    ],
                    <*ref_2>,
                  ],
                ],
              ],
            ],
            <*ref_2>,
          ],
        ],
        &ref_1 Array [
          "/foo",
          Array [
            Array [
              "/foo/express",
              Array [],
            ],
            &ref_2 Array [
              "/@scope/x",
              Array [
                Array [
                  "/@scope/x/glob",
                  Array [
                    Array [
                      "/@scope/x/glob/graceful-fs",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/inherits",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/minimatch",
                      Array [
                        Array [
                          "/@scope/x/glob/minimatch/sigmund",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/minimatch/lru-cache",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/once",
                          Array [],
                        ],
                      ],
                    ],
                    Array [
                      "/@scope/x/glob/once",
                      Array [],
                    ],
                  ],
                ],
                Array [
                  "/@scope/y",
                  Array [
                    <*ref_1>,
                  ],
                ],
                <*ref_2>,
              ],
            ],
          ],
        ],
        &ref_3 Array [
          "/@scope/y",
          Array [
            Array [
              "/foo",
              Array [
                Array [
                  "/foo/express",
                  Array [],
                ],
                &ref_2 Array [
                  "/@scope/x",
                  Array [
                    Array [
                      "/@scope/x/glob",
                      Array [
                        Array [
                          "/@scope/x/glob/graceful-fs",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/inherits",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/minimatch",
                          Array [
                            Array [
                              "/@scope/x/glob/minimatch/sigmund",
                              Array [],
                            ],
                            Array [
                              "/@scope/x/glob/minimatch/lru-cache",
                              Array [],
                            ],
                            Array [
                              "/@scope/x/glob/once",
                              Array [],
                            ],
                          ],
                        ],
                        Array [
                          "/@scope/x/glob/once",
                          Array [],
                        ],
                      ],
                    ],
                    <*ref_3>,
                    <*ref_2>,
                  ],
                ],
              ],
            ],
          ],
        ],
      ],
    ],
  ],
]
`

exports[`test/basic.js TAP walking through trees logical sprint > logical walk result 1`] = `
Array [
  "/",
  Array [
    &ref_1 Array [
      "/@scope/x",
      Array [
        Array [
          "/@scope/x/glob",
          Array [
            Array [
              "/@scope/x/glob/graceful-fs",
              Array [],
            ],
            Array [
              "/@scope/x/glob/inherits",
              Array [],
            ],
            Array [
              "/@scope/x/glob/minimatch",
              Array [
                Array [
                  "/@scope/x/glob/minimatch/sigmund",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/minimatch/lru-cache",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/once",
                  Array [],
                ],
              ],
            ],
            Array [
              "/@scope/x/glob/once",
              Array [],
            ],
          ],
        ],
        Array [
          "/@scope/y",
          Array [
            Array [
              "/foo",
              Array [
                Array [
                  "/foo/express",
                  Array [],
                ],
                <*ref_1>,
              ],
            ],
          ],
        ],
        <*ref_1>,
      ],
    ],
    &ref_2 Array [
      "/foo",
      Array [
        Array [
          "/foo/express",
          Array [],
        ],
        &ref_1 Array [
          "/@scope/x",
          Array [
            Array [
              "/@scope/x/glob",
              Array [
                Array [
                  "/@scope/x/glob/graceful-fs",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/inherits",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/minimatch",
                  Array [
                    Array [
                      "/@scope/x/glob/minimatch/sigmund",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/minimatch/lru-cache",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/once",
                      Array [],
                    ],
                  ],
                ],
                Array [
                  "/@scope/x/glob/once",
                  Array [],
                ],
              ],
            ],
            Array [
              "/@scope/y",
              Array [
                <*ref_2>,
              ],
            ],
            <*ref_1>,
          ],
        ],
      ],
    ],
    &ref_3 Array [
      "/@scope/y",
      Array [
        Array [
          "/foo",
          Array [
            Array [
              "/foo/express",
              Array [],
            ],
            &ref_1 Array [
              "/@scope/x",
              Array [
                Array [
                  "/@scope/x/glob",
                  Array [
                    Array [
                      "/@scope/x/glob/graceful-fs",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/inherits",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/minimatch",
                      Array [
                        Array [
                          "/@scope/x/glob/minimatch/sigmund",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/minimatch/lru-cache",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/once",
                          Array [],
                        ],
                      ],
                    ],
                    Array [
                      "/@scope/x/glob/once",
                      Array [],
                    ],
                  ],
                ],
                <*ref_3>,
                <*ref_1>,
              ],
            ],
          ],
        ],
      ],
    ],
  ],
]
`

exports[`test/basic.js TAP walking through trees logical stroll > logical walk log 1`] = `
Array [
  Array [
    "ENTER",
    "/",
  ],
  Array [
    "ENTER",
    "/@scope/x",
  ],
  Array [
    "ENTER",
    "/foo",
  ],
  Array [
    "ENTER",
    "/@scope/y",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob",
  ],
  Array [
    "ENTER",
    "/foo/express",
  ],
  Array [
    "EXIT",
    &ref_1 Array [
      "/@scope/y",
      Array [
        Array [
          "/foo",
          Array [
            Array [
              "/foo/express",
              Array [],
            ],
            &ref_2 Array [
              "/@scope/x",
              Array [
                Array [
                  "/@scope/x/glob",
                  Array [
                    Array [
                      "/@scope/x/glob/graceful-fs",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/inherits",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/minimatch",
                      Array [
                        Array [
                          "/@scope/x/glob/minimatch/sigmund",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/minimatch/lru-cache",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/once",
                          Array [],
                        ],
                      ],
                    ],
                    Array [
                      "/@scope/x/glob/once",
                      Array [],
                    ],
                  ],
                ],
                <*ref_1>,
                <*ref_2>,
              ],
            ],
          ],
        ],
      ],
    ],
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/graceful-fs",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/inherits",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/minimatch",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/once",
  ],
  Array [
    "EXIT",
    Array [
      "/foo/express",
      Array [],
    ],
  ],
  Array [
    "EXIT",
    Array [
      "/@scope/x/glob/graceful-fs",
      Array [],
    ],
  ],
  Array [
    "EXIT",
    Array [
      "/@scope/x/glob/inherits",
      Array [],
    ],
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/minimatch/sigmund",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/minimatch/lru-cache",
  ],
  Array [
    "EXIT",
    Array [
      "/@scope/x/glob/once",
      Array [],
    ],
  ],
  Array [
    "EXIT",
    Array [
      "/@scope/x/glob/minimatch/sigmund",
      Array [],
    ],
  ],
  Array [
    "EXIT",
    Array [
      "/@scope/x/glob/minimatch/lru-cache",
      Array [],
    ],
  ],
  Array [
    "EXIT",
    &ref_3 Array [
      "/foo",
      Array [
        Array [
          "/foo/express",
          Array [],
        ],
        &ref_2 Array [
          "/@scope/x",
          Array [
            Array [
              "/@scope/x/glob",
              Array [
                Array [
                  "/@scope/x/glob/graceful-fs",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/inherits",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/minimatch",
                  Array [
                    Array [
                      "/@scope/x/glob/minimatch/sigmund",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/minimatch/lru-cache",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/once",
                      Array [],
                    ],
                  ],
                ],
                Array [
                  "/@scope/x/glob/once",
                  Array [],
                ],
              ],
            ],
            Array [
              "/@scope/y",
              Array [
                <*ref_3>,
              ],
            ],
            <*ref_2>,
          ],
        ],
      ],
    ],
  ],
  Array [
    "EXIT",
    Array [
      "/@scope/x/glob/minimatch",
      Array [
        Array [
          "/@scope/x/glob/minimatch/sigmund",
          Array [],
        ],
        Array [
          "/@scope/x/glob/minimatch/lru-cache",
          Array [],
        ],
        Array [
          "/@scope/x/glob/once",
          Array [],
        ],
      ],
    ],
  ],
  Array [
    "EXIT",
    Array [
      "/@scope/x/glob",
      Array [
        Array [
          "/@scope/x/glob/graceful-fs",
          Array [],
        ],
        Array [
          "/@scope/x/glob/inherits",
          Array [],
        ],
        Array [
          "/@scope/x/glob/minimatch",
          Array [
            Array [
              "/@scope/x/glob/minimatch/sigmund",
              Array [],
            ],
            Array [
              "/@scope/x/glob/minimatch/lru-cache",
              Array [],
            ],
            Array [
              "/@scope/x/glob/once",
              Array [],
            ],
          ],
        ],
        Array [
          "/@scope/x/glob/once",
          Array [],
        ],
      ],
    ],
  ],
  Array [
    "EXIT",
    &ref_2 Array [
      "/@scope/x",
      Array [
        Array [
          "/@scope/x/glob",
          Array [
            Array [
              "/@scope/x/glob/graceful-fs",
              Array [],
            ],
            Array [
              "/@scope/x/glob/inherits",
              Array [],
            ],
            Array [
              "/@scope/x/glob/minimatch",
              Array [
                Array [
                  "/@scope/x/glob/minimatch/sigmund",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/minimatch/lru-cache",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/once",
                  Array [],
                ],
              ],
            ],
            Array [
              "/@scope/x/glob/once",
              Array [],
            ],
          ],
        ],
        Array [
          "/@scope/y",
          Array [
            Array [
              "/foo",
              Array [
                Array [
                  "/foo/express",
                  Array [],
                ],
                <*ref_2>,
              ],
            ],
          ],
        ],
        <*ref_2>,
      ],
    ],
  ],
  Array [
    "EXIT",
    Array [
      "/",
      Array [
        &ref_2 Array [
          "/@scope/x",
          Array [
            Array [
              "/@scope/x/glob",
              Array [
                Array [
                  "/@scope/x/glob/graceful-fs",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/inherits",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/minimatch",
                  Array [
                    Array [
                      "/@scope/x/glob/minimatch/sigmund",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/minimatch/lru-cache",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/once",
                      Array [],
                    ],
                  ],
                ],
                Array [
                  "/@scope/x/glob/once",
                  Array [],
                ],
              ],
            ],
            Array [
              "/@scope/y",
              Array [
                Array [
                  "/foo",
                  Array [
                    Array [
                      "/foo/express",
                      Array [],
                    ],
                    <*ref_2>,
                  ],
                ],
              ],
            ],
            <*ref_2>,
          ],
        ],
        &ref_3 Array [
          "/foo",
          Array [
            Array [
              "/foo/express",
              Array [],
            ],
            &ref_2 Array [
              "/@scope/x",
              Array [
                Array [
                  "/@scope/x/glob",
                  Array [
                    Array [
                      "/@scope/x/glob/graceful-fs",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/inherits",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/minimatch",
                      Array [
                        Array [
                          "/@scope/x/glob/minimatch/sigmund",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/minimatch/lru-cache",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/once",
                          Array [],
                        ],
                      ],
                    ],
                    Array [
                      "/@scope/x/glob/once",
                      Array [],
                    ],
                  ],
                ],
                Array [
                  "/@scope/y",
                  Array [
                    <*ref_3>,
                  ],
                ],
                <*ref_2>,
              ],
            ],
          ],
        ],
        &ref_1 Array [
          "/@scope/y",
          Array [
            Array [
              "/foo",
              Array [
                Array [
                  "/foo/express",
                  Array [],
                ],
                &ref_2 Array [
                  "/@scope/x",
                  Array [
                    Array [
                      "/@scope/x/glob",
                      Array [
                        Array [
                          "/@scope/x/glob/graceful-fs",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/inherits",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/minimatch",
                          Array [
                            Array [
                              "/@scope/x/glob/minimatch/sigmund",
                              Array [],
                            ],
                            Array [
                              "/@scope/x/glob/minimatch/lru-cache",
                              Array [],
                            ],
                            Array [
                              "/@scope/x/glob/once",
                              Array [],
                            ],
                          ],
                        ],
                        Array [
                          "/@scope/x/glob/once",
                          Array [],
                        ],
                      ],
                    ],
                    <*ref_1>,
                    <*ref_2>,
                  ],
                ],
              ],
            ],
          ],
        ],
      ],
    ],
  ],
]
`

exports[`test/basic.js TAP walking through trees logical stroll > logical walk result 1`] = `
Array [
  "/",
  Array [
    &ref_1 Array [
      "/@scope/x",
      Array [
        Array [
          "/@scope/x/glob",
          Array [
            Array [
              "/@scope/x/glob/graceful-fs",
              Array [],
            ],
            Array [
              "/@scope/x/glob/inherits",
              Array [],
            ],
            Array [
              "/@scope/x/glob/minimatch",
              Array [
                Array [
                  "/@scope/x/glob/minimatch/sigmund",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/minimatch/lru-cache",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/once",
                  Array [],
                ],
              ],
            ],
            Array [
              "/@scope/x/glob/once",
              Array [],
            ],
          ],
        ],
        Array [
          "/@scope/y",
          Array [
            Array [
              "/foo",
              Array [
                Array [
                  "/foo/express",
                  Array [],
                ],
                <*ref_1>,
              ],
            ],
          ],
        ],
        <*ref_1>,
      ],
    ],
    &ref_2 Array [
      "/foo",
      Array [
        Array [
          "/foo/express",
          Array [],
        ],
        &ref_1 Array [
          "/@scope/x",
          Array [
            Array [
              "/@scope/x/glob",
              Array [
                Array [
                  "/@scope/x/glob/graceful-fs",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/inherits",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/minimatch",
                  Array [
                    Array [
                      "/@scope/x/glob/minimatch/sigmund",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/minimatch/lru-cache",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/once",
                      Array [],
                    ],
                  ],
                ],
                Array [
                  "/@scope/x/glob/once",
                  Array [],
                ],
              ],
            ],
            Array [
              "/@scope/y",
              Array [
                <*ref_2>,
              ],
            ],
            <*ref_1>,
          ],
        ],
      ],
    ],
    &ref_3 Array [
      "/@scope/y",
      Array [
        Array [
          "/foo",
          Array [
            Array [
              "/foo/express",
              Array [],
            ],
            &ref_1 Array [
              "/@scope/x",
              Array [
                Array [
                  "/@scope/x/glob",
                  Array [
                    Array [
                      "/@scope/x/glob/graceful-fs",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/inherits",
                      Array [],
                    ],
                    Array [
                      "/@scope/x/glob/minimatch",
                      Array [
                        Array [
                          "/@scope/x/glob/minimatch/sigmund",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/minimatch/lru-cache",
                          Array [],
                        ],
                        Array [
                          "/@scope/x/glob/once",
                          Array [],
                        ],
                      ],
                    ],
                    Array [
                      "/@scope/x/glob/once",
                      Array [],
                    ],
                  ],
                ],
                <*ref_3>,
                <*ref_1>,
              ],
            ],
          ],
        ],
      ],
    ],
  ],
]
`

exports[`test/basic.js TAP walking through trees no entry > no entry walk log 1`] = `
Array [
  Array [
    "EXIT",
    "/node_modules/glob/node_modules/graceful-fs",
  ],
  Array [
    "EXIT",
    "/node_modules/glob/node_modules/inherits",
  ],
  Array [
    "EXIT",
    "/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
  ],
  Array [
    "EXIT",
    "/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
  ],
  Array [
    "EXIT",
    "/node_modules/glob/node_modules/minimatch",
  ],
  Array [
    "EXIT",
    "/node_modules/glob/node_modules/once",
  ],
  Array [
    "EXIT",
    "/node_modules/glob",
  ],
  Array [
    "EXIT",
    "",
  ],
  Array [
    "EXIT",
    "",
  ],
  Array [
    "EXIT",
    "_modules/express",
  ],
  Array [
    "EXIT",
    "",
  ],
  Array [
    "EXIT",
    "",
  ],
]
`

exports[`test/basic.js TAP walking through trees no exit > no exit walk log 1`] = `
Array [
  Array [
    "ENTER",
    "",
  ],
]
`

exports[`test/basic.js TAP walking through trees physical sprint > physical walk log 1`] = `
Array [
  Array [
    "ENTER",
    "/",
  ],
  Array [
    "ENTER",
    "/@scope/x",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/graceful-fs",
  ],
  Array [
    "EXIT",
    "/@scope/x/glob/graceful-fs",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/inherits",
  ],
  Array [
    "EXIT",
    "/@scope/x/glob/inherits",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/minimatch",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/minimatch/lru-cache",
  ],
  Array [
    "EXIT",
    "/@scope/x/glob/minimatch/lru-cache",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/minimatch/sigmund",
  ],
  Array [
    "EXIT",
    "/@scope/x/glob/minimatch/sigmund",
  ],
  Array [
    "EXIT",
    "/@scope/x/glob/minimatch",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/once",
  ],
  Array [
    "EXIT",
    "/@scope/x/glob/once",
  ],
  Array [
    "EXIT",
    "/@scope/x/glob",
  ],
  Array [
    "EXIT",
    "/@scope/x",
  ],
  Array [
    "ENTER",
    "/@scope/y",
  ],
  Array [
    "EXIT",
    "/@scope/y",
  ],
  Array [
    "ENTER",
    "/foo",
  ],
  Array [
    "ENTER",
    "/foo/express",
  ],
  Array [
    "EXIT",
    "/foo/express",
  ],
  Array [
    "EXIT",
    "/foo",
  ],
  Array [
    "EXIT",
    "/",
  ],
]
`

exports[`test/basic.js TAP walking through trees physical sprint > physical walk result 1`] = `
Array [
  "/",
  Array [
    Array [
      "/@scope/x",
      Array [
        Array [
          "/@scope/x/glob",
          Array [
            Array [
              "/@scope/x/glob/graceful-fs",
              Array [],
            ],
            Array [
              "/@scope/x/glob/inherits",
              Array [],
            ],
            Array [
              "/@scope/x/glob/minimatch",
              Array [
                Array [
                  "/@scope/x/glob/minimatch/lru-cache",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/minimatch/sigmund",
                  Array [],
                ],
              ],
            ],
            Array [
              "/@scope/x/glob/once",
              Array [],
            ],
          ],
        ],
      ],
    ],
    Array [
      "/@scope/y",
      Array [],
    ],
    Array [
      "/foo",
      Array [
        Array [
          "/foo/express",
          Array [],
        ],
      ],
    ],
  ],
]
`

exports[`test/basic.js TAP walking through trees physical stroll > physical walk log 1`] = `
Array [
  Array [
    "ENTER",
    "/",
  ],
  Array [
    "ENTER",
    "/@scope/x",
  ],
  Array [
    "ENTER",
    "/@scope/y",
  ],
  Array [
    "ENTER",
    "/foo",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob",
  ],
  Array [
    "EXIT",
    "/@scope/y",
  ],
  Array [
    "ENTER",
    "/foo/express",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/graceful-fs",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/inherits",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/minimatch",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/once",
  ],
  Array [
    "EXIT",
    "/foo/express",
  ],
  Array [
    "EXIT",
    "/@scope/x/glob/graceful-fs",
  ],
  Array [
    "EXIT",
    "/@scope/x/glob/inherits",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/minimatch/lru-cache",
  ],
  Array [
    "ENTER",
    "/@scope/x/glob/minimatch/sigmund",
  ],
  Array [
    "EXIT",
    "/@scope/x/glob/once",
  ],
  Array [
    "EXIT",
    "/@scope/x/glob/minimatch/lru-cache",
  ],
  Array [
    "EXIT",
    "/@scope/x/glob/minimatch/sigmund",
  ],
  Array [
    "EXIT",
    "/foo",
  ],
  Array [
    "EXIT",
    "/@scope/x/glob/minimatch",
  ],
  Array [
    "EXIT",
    "/@scope/x/glob",
  ],
  Array [
    "EXIT",
    "/@scope/x",
  ],
  Array [
    "EXIT",
    "/",
  ],
]
`

exports[`test/basic.js TAP walking through trees physical stroll > physical walk result 1`] = `
Array [
  "/",
  Array [
    Array [
      "/@scope/x",
      Array [
        Array [
          "/@scope/x/glob",
          Array [
            Array [
              "/@scope/x/glob/graceful-fs",
              Array [],
            ],
            Array [
              "/@scope/x/glob/inherits",
              Array [],
            ],
            Array [
              "/@scope/x/glob/minimatch",
              Array [
                Array [
                  "/@scope/x/glob/minimatch/lru-cache",
                  Array [],
                ],
                Array [
                  "/@scope/x/glob/minimatch/sigmund",
                  Array [],
                ],
              ],
            ],
            Array [
              "/@scope/x/glob/once",
              Array [],
            ],
          ],
        ],
      ],
    ],
    Array [
      "/@scope/y",
      Array [],
    ],
    Array [
      "/foo",
      Array [
        Array [
          "/foo/express",
          Array [],
        ],
      ],
    ],
  ],
]
`

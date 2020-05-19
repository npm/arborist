/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/shrinkwrap.js TAP construct metadata from node and package data > a peer dep 1`] = `
Object {
  "dependencies": Object {
    "peerdep": "",
  },
  "integrity": "sha512-peerpeerpeer",
  "peer": true,
  "resolved": "https://peer.com/peer.tgz",
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > a peer meta-dep 1`] = `
Object {
  "integrity": "sha512-peerdeppeerdep",
  "peer": true,
  "resolved": "https://peer.com/peerdep.tgz",
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > bundled pkg metadata 1`] = `
Object {
  "dev": true,
  "inBundle": true,
  "name": "not-bundled-tho",
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > data calculated from nodes themselves 1`] = `
Object {
  "dependencies": Object {
    "a": Object {
      "integrity": "sha512-helloyesthisisdog",
      "resolved": "https://example.com/a.tgz",
      "version": "1.2.3",
    },
    "d": Object {
      "dependencies": Object {
        "bundled": Object {
          "bundled": true,
          "dev": true,
          "version": "npm:not-bundled-tho@1.2.3",
        },
        "git-dep": Object {
          "dev": true,
          "from": "git-dep@github:foo/bar",
          "version": "git+ssh://git@github.com/foo/bar.git#0000000000000000000000000000000000000000",
        },
      },
      "dev": true,
      "requires": Object {
        "bundled": "npm:not-bundled-tho@*",
        "e": "1.2.3",
        "git-dep": "github:foo/bar",
      },
      "version": "1.2.3",
    },
    "devit": Object {
      "dev": true,
      "requires": Object {
        "devo": "",
      },
      "version": "1.2.3",
    },
    "devo": Object {
      "devOptional": true,
      "version": "1.2.3",
    },
    "e": Object {
      "dev": true,
      "requires": Object {
        "tgz": "",
        "tgz-pkg-resolved": "",
      },
      "version": "https://foo.com/e.tgz",
    },
    "link": Object {
      "version": "file:target",
    },
    "nopkg": Object {
      "extraneous": true,
    },
    "optin": Object {
      "optional": true,
      "requires": Object {
        "devo": "",
      },
      "version": "1.2.3",
    },
    "peer": Object {
      "dependencies": Object {
        "peerdep": Object {
          "integrity": "sha512-peerdeppeerdep",
          "peer": true,
          "resolved": "https://peer.com/peerdep.tgz",
          "version": "1.2.3",
        },
      },
      "integrity": "sha512-peerpeerpeer",
      "peer": true,
      "requires": Object {
        "peerdep": "",
      },
      "resolved": "https://peer.com/peer.tgz",
      "version": "1.2.3",
    },
    "tgz": Object {
      "dev": true,
      "version": "1.2.3",
    },
    "tgz-pkg-resolved": Object {
      "dev": true,
      "integrity": "sha512-tarball/package/resolved/integrity",
      "version": "1.2.3",
    },
  },
  "lockfileVersion": 2,
  "name": "root",
  "packages": Object {
    "": Object {
      "dependencies": Object {
        "a": "",
        "link": "",
        "link2": "",
        "optin": "",
      },
      "devDependencies": Object {
        "d": "",
        "devit": "",
        "e": "https://foo.com/e.tgz",
      },
      "hasInstallScript": true,
      "optionalDependencies": Object {
        "optin": "",
      },
      "peerDependencies": Object {
        "peer": "",
      },
      "version": "1.2.3",
    },
    "node_modules/a": Object {
      "integrity": "sha512-helloyesthisisdog",
      "resolved": "https://example.com/a.tgz",
      "version": "1.2.3",
    },
    "node_modules/d": Object {
      "bundleDependencies": Array [
        "bundled",
      ],
      "dependencies": Object {
        "bundled": "npm:not-bundled-tho@*",
        "e": "1.2.3",
        "git-dep": "github:foo/bar",
      },
      "dev": true,
      "version": "1.2.3",
    },
    "node_modules/d/node_modules/bundled": Object {
      "dev": true,
      "inBundle": true,
      "name": "not-bundled-tho",
      "version": "1.2.3",
    },
    "node_modules/d/node_modules/git-dep": Object {
      "dev": true,
      "resolved": "git+ssh://git@github.com/foo/bar.git#0000000000000000000000000000000000000000",
      "version": "1.2.3",
    },
    "node_modules/devit": Object {
      "dependencies": Object {
        "devo": "",
      },
      "dev": true,
      "version": "1.2.3",
    },
    "node_modules/devo": Object {
      "devOptional": true,
      "version": "1.2.3",
    },
    "node_modules/e": Object {
      "dependencies": Object {
        "tgz": "",
        "tgz-pkg-resolved": "",
      },
      "dev": true,
      "license": "blurb",
      "resolved": "https://foo.com/e.tgz",
      "version": "1.2.3",
    },
    "node_modules/link": Object {
      "link": true,
      "resolved": "target",
    },
    "node_modules/nopkg": Object {
      "extraneous": true,
    },
    "node_modules/optin": Object {
      "dependencies": Object {
        "devo": "",
      },
      "optional": true,
      "version": "1.2.3",
    },
    "node_modules/peer": Object {
      "dependencies": Object {
        "peerdep": "",
      },
      "integrity": "sha512-peerpeerpeer",
      "peer": true,
      "resolved": "https://peer.com/peer.tgz",
      "version": "1.2.3",
    },
    "node_modules/peer/node_modules/peerdep": Object {
      "integrity": "sha512-peerdeppeerdep",
      "peer": true,
      "resolved": "https://peer.com/peerdep.tgz",
      "version": "1.2.3",
    },
    "node_modules/tgz": Object {
      "cpu": Array [
        "x64",
      ],
      "dev": true,
      "engines": Object {
        "node": ">=10",
      },
      "funding": Object {
        "url": "https://example.com/",
      },
      "os": Array [
        "any",
        "!win32",
      ],
      "resolved": "file:archives/tarball.tgz",
      "version": "1.2.3",
    },
    "node_modules/tgz-pkg-resolved": Object {
      "dev": true,
      "funding": Object {
        "url": "https://example.com/",
      },
      "integrity": "sha512-tarball/package/resolved/integrity",
      "resolved": "file:archives/tarball-pkg-resolved.tgz",
      "version": "1.2.3",
    },
    "target": Object {
      "funding": Object {
        "url": "https://example.com/payme",
      },
      "name": "link",
      "resolved": "git+ssh://git@github.com/isaacs/foobarbaz.git#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "version": "1.2.3",
    },
  },
  "requires": true,
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > dep a metadata 1`] = `
Object {
  "integrity": "sha512-helloyesthisisdog",
  "resolved": "https://example.com/a.tgz",
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > dep d metadata 1`] = `
Object {
  "bundleDependencies": Array [
    "bundled",
  ],
  "dependencies": Object {
    "bundled": "npm:not-bundled-tho@*",
    "e": "1.2.3",
    "git-dep": "github:foo/bar",
  },
  "dev": true,
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > dep e metadata 1`] = `
Object {
  "dependencies": Object {
    "tgz": "",
    "tgz-pkg-resolved": "",
  },
  "dev": true,
  "license": "blurb",
  "resolved": "https://foo.com/e.tgz",
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > git dep metadata 1`] = `
Object {
  "dev": true,
  "resolved": "git+ssh://git@github.com/foo/bar.git#0000000000000000000000000000000000000000",
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > link metadata 1`] = `
Object {
  "link": true,
  "resolved": "target",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > link target metadata 1`] = `
Object {
  "funding": Object {
    "url": "https://example.com/payme",
  },
  "name": "link",
  "resolved": "git+ssh://git@github.com/isaacs/foobarbaz.git#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > meta for dev dep 1`] = `
Object {
  "dependencies": Object {
    "devo": "",
  },
  "dev": true,
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > meta for devOptional dep 1`] = `
Object {
  "devOptional": true,
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > meta for optional dep 1`] = `
Object {
  "dependencies": Object {
    "devo": "",
  },
  "optional": true,
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > metadata for tarball file pkg 1`] = `
Object {
  "cpu": Array [
    "x64",
  ],
  "dev": true,
  "engines": Object {
    "node": ">=10",
  },
  "funding": Object {
    "url": "https://example.com/",
  },
  "os": Array [
    "any",
    "!win32",
  ],
  "resolved": "file:archives/tarball.tgz",
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > metadata for tarball file pkg with _resolved value 1`] = `
Object {
  "dev": true,
  "funding": Object {
    "url": "https://example.com/",
  },
  "integrity": "sha512-tarball/package/resolved/integrity",
  "resolved": "file:archives/tarball-pkg-resolved.tgz",
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > node without a package 1`] = `
Object {
  "extraneous": true,
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > root metadata, no package version 1`] = `
Object {
  "dependencies": Object {
    "a": "",
    "link": "",
    "link2": "",
    "optin": "",
  },
  "devDependencies": Object {
    "d": "",
    "devit": "",
    "e": "https://foo.com/e.tgz",
  },
  "hasInstallScript": true,
  "optionalDependencies": Object {
    "optin": "",
  },
  "peerDependencies": Object {
    "peer": "",
  },
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > root metadata, with package version 1`] = `
Object {
  "dependencies": Object {
    "a": "",
    "link": "",
    "link2": "",
    "optin": "",
  },
  "devDependencies": Object {
    "d": "",
    "devit": "",
    "e": "https://foo.com/e.tgz",
  },
  "hasInstallScript": true,
  "optionalDependencies": Object {
    "optin": "",
  },
  "peerDependencies": Object {
    "peer": "",
  },
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP handle missing dependencies object without borking > must match snapshot 1`] = `
Object {
  "dependencies": Object {
    "foo": Object {
      "integrity": "foo integrity",
      "resolved": "http://foo.com",
    },
  },
  "packages": Object {
    "node_modules/foo": Object {},
  },
}
`

exports[`test/shrinkwrap.js TAP load a hidden lockfile > must match snapshot 1`] = `
Object {
  "lockfileVersion": 2,
  "name": "hidden-lockfile",
  "packages": Object {
    "": Object {
      "dependencies": Object {
        "abbrev": "^1.1.1",
      },
    },
    "node_modules/abbrev": Object {
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "name": "abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
  },
  "requires": true,
}
`

exports[`test/shrinkwrap.js TAP load a legacy shrinkwrap without a package.json > did our best with what we had 1`] = `
Object {
  "dependencies": Object {
    "abbrev": Object {
      "dependencies": Object {
        "@scope/name": Object {
          "dependencies": Object {
            "@otherscope/othername": Object {
              "integrity": "the integrity is not valid, clearly",
              "resolved": "fake resolved value",
            },
          },
          "requires": Object {
            "@otherscope/othername": "1.2.3",
            "a-thing-which-is-not-here": "2.4.5",
          },
        },
      },
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "balanced-match": Object {
      "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
      "optional": true,
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "version": "1.0.0",
    },
    "brace-expansion": Object {
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "optional": true,
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
          "bundled": "true",
          "integrity": "sha1-3Klr13/Wjfd5OnMDajug1UBdR3s=",
          "requires": Object {
            "b": "",
          },
          "resolved": "https://registry.internal/a/-/a-1.2.3.tgz",
          "version": "1.2.3",
        },
        "b": Object {
          "bundled": "true",
          "integrity": "sha1-4Klr13/Wjfd5OnMDajug1UBdR3s=",
          "requires": Object {
            "c": "",
          },
          "resolved": "https://registry.internal/b/-/b-1.2.3.tgz",
          "version": "1.2.3",
        },
        "c": Object {
          "bundled": "true",
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
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
      "optional": true,
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "version": "0.0.1",
    },
    "fs.realpath": Object {
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
      "optional": true,
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "version": "1.0.0",
    },
    "full-git-url": Object {
      "from": "git+https://github.com/isaacs/abbrev-js.git",
      "version": "git+https://github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghshort": Object {
      "from": "github:isaacs/abbrev-js",
      "version": "github:isaacs/abbrev-js#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "ghtgz": Object {
      "integrity": "sha512-yowslMd9y/lGBCDVO0RwZoXRK5X0zMsf6XECM6DdeqN7qwVnFQ6IAwJai7BD4mVe1xOdWWqWNkuzyuStvSBnHw==",
      "version": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "glob": Object {
      "integrity": "sha512-hkLPepehmnKk41pUGm3sYxoFs/umurYfYJCerbXEyFIWcAzvpipAgVkBqqT9RBKMGjnq6kMuyYwha6csxbiM1A==",
      "optional": true,
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
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "optional": true,
      "requires": Object {
        "once": "^1.3.0",
        "wrappy": "1",
      },
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "version": "1.0.6",
    },
    "inherits": Object {
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "version": "2.0.4",
    },
    "minimatch": Object {
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "optional": true,
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
      "integrity": "sha512-oic2VxBO6ZRyhk4W/amcN3D4tGpSELjpXwShWPBHNVDvVXo2+JcNnNx6Dth+Y961vfz7SmCCc6RP2oNQE2yVwQ==",
      "requires": Object {
        "wrappy": "1",
      },
      "version": "file:once-1.4.0.tgz",
    },
    "path-is-absolute": Object {
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
      "optional": true,
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "version": "1.0.1",
    },
    "pinned": Object {
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "npm:abbrev@1.1.1",
    },
    "really-bad-invalid": Object {
      "resolved": "this: is: also: not: valid!",
      "version": "url:// not even close to a ! valid @ npm @ specifier",
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
      "integrity": "sha512-hKCr1HweNbIu6JN4K8WYBwikeg2ISRHU2D7OTX0fivTb+2dOM7mITni0cAjgWCsNGUQDFI+4BTNeGBVp/WbBow==",
      "requires": Object {
        "glob": "^7.1.3",
      },
      "version": "file:rimraf-2.6.3.tgz",
    },
    "symlink": Object {
      "version": "file:./abbrev-link-target",
    },
    "symlink-in-tree": Object {
      "version": "file:./node_modules/abbrev",
    },
    "tarball": Object {
      "dev": true,
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "version": "file:abbrev-1.1.1.tgz",
    },
    "tarball-no-integrity": Object {
      "dev": true,
      "version": "file:abbrev-1.1.1.tgz",
    },
    "unhosted-git": Object {
      "from": "git+https://mygit.com/isaacs/abbrev-js.git",
      "version": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "wrappy": Object {
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
  },
  "lockfileVersion": 2,
  "name": "a",
  "packages": Object {
    "": Object {
      "name": "a",
      "version": "1.2.3",
    },
    "node_modules/abbrev": Object {
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "node_modules/abbrev/node_modules/@scope/name": Object {
      "dependencies": Object {
        "@otherscope/othername": "1.2.3",
        "a-thing-which-is-not-here": "2.4.5",
      },
    },
    "node_modules/abbrev/node_modules/@scope/name/node_modules/@otherscope/othername": Object {
      "integrity": "the integrity is not valid, clearly",
      "resolved": "fake resolved value",
    },
    "node_modules/balanced-match": Object {
      "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
      "optional": true,
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "version": "1.0.0",
    },
    "node_modules/brace-expansion": Object {
      "dependencies": Object {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1",
      },
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "optional": true,
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "version": "1.1.11",
    },
    "node_modules/bundler": Object {
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
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
      "optional": true,
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "version": "0.0.1",
    },
    "node_modules/fs.realpath": Object {
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
      "optional": true,
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "version": "1.0.0",
    },
    "node_modules/full-git-url": Object {
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "node_modules/ghshort": Object {
      "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "node_modules/ghtgz": Object {
      "integrity": "sha512-yowslMd9y/lGBCDVO0RwZoXRK5X0zMsf6XECM6DdeqN7qwVnFQ6IAwJai7BD4mVe1xOdWWqWNkuzyuStvSBnHw==",
      "resolved": "https://codeload.github.com/isaacs/abbrev-js/tar.gz/a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
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
      "integrity": "sha512-hkLPepehmnKk41pUGm3sYxoFs/umurYfYJCerbXEyFIWcAzvpipAgVkBqqT9RBKMGjnq6kMuyYwha6csxbiM1A==",
      "optional": true,
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
      "version": "7.1.4",
    },
    "node_modules/inflight": Object {
      "dependencies": Object {
        "once": "^1.3.0",
        "wrappy": "1",
      },
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "version": "1.0.6",
    },
    "node_modules/inherits": Object {
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "version": "2.0.4",
    },
    "node_modules/minimatch": Object {
      "dependencies": Object {
        "brace-expansion": "^1.1.7",
      },
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "optional": true,
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "version": "3.0.4",
    },
    "node_modules/old": Object {
      "integrity": "sha1-qgScln+ZkiKqQuFENPDFYu9GgkE=",
      "name": "abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
      "version": "1.0.3",
    },
    "node_modules/once": Object {
      "dependencies": Object {
        "wrappy": "1",
      },
      "integrity": "sha512-oic2VxBO6ZRyhk4W/amcN3D4tGpSELjpXwShWPBHNVDvVXo2+JcNnNx6Dth+Y961vfz7SmCCc6RP2oNQE2yVwQ==",
      "resolved": "file:once-1.4.0.tgz",
      "version": "1.4.0",
    },
    "node_modules/path-is-absolute": Object {
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
      "optional": true,
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "version": "1.0.1",
    },
    "node_modules/pinned": Object {
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "name": "abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "node_modules/really-bad-invalid": Object {},
    "node_modules/reg": Object {
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "name": "abbrev",
      "resolved": "https://localhost:8080/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "node_modules/remote": Object {
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "name": "abbrev",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "version": "1.1.1",
    },
    "node_modules/rimraf": Object {
      "integrity": "sha512-hKCr1HweNbIu6JN4K8WYBwikeg2ISRHU2D7OTX0fivTb+2dOM7mITni0cAjgWCsNGUQDFI+4BTNeGBVp/WbBow==",
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
    "node_modules/symlink-in-tree": Object {
      "link": true,
      "resolved": "node_modules/abbrev",
    },
    "node_modules/tarball": Object {
      "dev": true,
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "resolved": "file:abbrev-1.1.1.tgz",
    },
    "node_modules/tarball-no-integrity": Object {
      "dev": true,
      "resolved": "file:abbrev-1.1.1.tgz",
    },
    "node_modules/unhosted-git": Object {
      "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
    },
    "node_modules/wrappy": Object {
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
      "resolved": "https://localhost:8080/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
  },
  "requires": true,
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP load a shrinkwrap with some dev and optional flags > got expected dependency types 1`] = `
Object {
  "dependencies": Object {
    "diff-frag": Object {
      "dev": true,
      "integrity": "sha512-6/v2PC/6UTGcWPPetb9acL8foberUg/CtPdALeJUdD1B/weHNvzftoo00gYznqHGRhHEbykUGzqfG9RWOSr5yw==",
      "resolved": "https://registry.npmjs.org/diff-frag/-/diff-frag-1.0.1.tgz",
      "version": "1.0.1",
    },
    "inflight": Object {
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "optional": true,
      "requires": Object {
        "once": "^1.3.0",
        "wrappy": "1",
      },
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "version": "1.0.6",
    },
    "once": Object {
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "requires": Object {
        "wrappy": "1",
      },
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "version": "1.4.0",
    },
    "tcompare": Object {
      "dev": true,
      "integrity": "sha512-IXBWPevQHZ1Z81Af7YViBpFxaQLZmi+m57JpcvhAULj6lbVtoHfbYu7PxMwcF+pDWS9F6ZQcZPAF2hQqxCzZwQ==",
      "requires": Object {
        "diff-frag": "^1.0.1",
      },
      "resolved": "https://registry.npmjs.org/tcompare/-/tcompare-4.0.1.tgz",
      "version": "4.0.1",
    },
    "wrappy": Object {
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
  },
  "lockfileVersion": 2,
  "name": "dev-deps",
  "packages": Object {
    "": Object {
      "dependencies": Object {
        "inflight": "^1.0.6",
        "once": "^1.4.0",
      },
      "license": "ISC",
      "name": "dev-deps",
      "optionalDependencies": Object {
        "inflight": "^1.0.6",
      },
      "version": "1.0.0",
    },
    "node_modules/diff-frag": Object {
      "dev": true,
      "integrity": "sha512-6/v2PC/6UTGcWPPetb9acL8foberUg/CtPdALeJUdD1B/weHNvzftoo00gYznqHGRhHEbykUGzqfG9RWOSr5yw==",
      "resolved": "https://registry.npmjs.org/diff-frag/-/diff-frag-1.0.1.tgz",
      "version": "1.0.1",
    },
    "node_modules/inflight": Object {
      "dependencies": Object {
        "once": "^1.3.0",
        "wrappy": "1",
      },
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "optional": true,
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "version": "1.0.6",
    },
    "node_modules/once": Object {
      "dependencies": Object {
        "wrappy": "1",
      },
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "version": "1.4.0",
    },
    "node_modules/tcompare": Object {
      "dependencies": Object {
        "diff-frag": "^1.0.1",
      },
      "dev": true,
      "integrity": "sha512-IXBWPevQHZ1Z81Af7YViBpFxaQLZmi+m57JpcvhAULj6lbVtoHfbYu7PxMwcF+pDWS9F6ZQcZPAF2hQqxCzZwQ==",
      "resolved": "https://registry.npmjs.org/tcompare/-/tcompare-4.0.1.tgz",
      "version": "4.0.1",
    },
    "node_modules/wrappy": Object {
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "version": "1.0.2",
    },
  },
  "requires": true,
  "version": "1.0.0",
}
`

exports[`test/shrinkwrap.js TAP look up from locks and such > basic package 1`] = `
Object {
  "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
  "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
  "version": "1.1.1",
}
`

exports[`test/shrinkwrap.js TAP look up from locks and such > fall off the dep tree 1`] = `
Object {}
`

exports[`test/shrinkwrap.js TAP look up from locks and such > must match snapshot 1`] = `
Object {
  "integrity": "the integrity is not valid, clearly",
  "resolved": "fake resolved value",
}
`

exports[`test/shrinkwrap.js TAP look up from locks and such > not found 1`] = `
Object {}
`

exports[`test/shrinkwrap.js TAP look up from locks and such lockfile > basic pkg, from lock 1`] = `
Object {
  "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
  "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
  "version": "1.1.1",
}
`

exports[`test/shrinkwrap.js TAP look up from locks and such lockfile > full git 1`] = `
Object {
  "resolved": "git+ssh://git@github.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
}
`

exports[`test/shrinkwrap.js TAP look up from locks and such lockfile > must match snapshot 1`] = `
Object {
  "integrity": "the integrity is not valid, clearly",
  "resolved": "fake resolved value",
}
`

exports[`test/shrinkwrap.js TAP look up from locks and such lockfile > not found 1`] = `
Object {}
`

exports[`test/shrinkwrap.js TAP look up from locks and such lockfile > saved fetched metadata back to packages section 1`] = `
Object {
  "node_modules/abbrev": Object {
    "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
    "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
    "version": "1.1.1",
  },
}
`

exports[`test/shrinkwrap.js TAP look up from locks and such lockfile > symlink 1`] = `
Object {
  "link": true,
  "resolved": "abbrev-link-target",
}
`

exports[`test/shrinkwrap.js TAP look up from locks and such lockfile > unhosted git 1`] = `
Object {
  "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
}
`

/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
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
          "dev": true,
          "inBundle": true,
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
    "target": Object {
      "version": "github:isaacs/foobarbaz#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    "tgz": Object {
      "dev": true,
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
      },
      "devDependencies": Object {
        "d": "",
        "devit": "",
        "e": "https://foo.com/e.tgz",
      },
      "name": "root",
      "optionalDependencies": Object {
        "optin": "",
      },
      "version": "1.2.3",
    },
    "node_modules/a": Object {
      "integrity": "sha512-helloyesthisisdog",
      "name": "a",
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
      "name": "d",
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
      "name": "git-dep",
      "resolved": "git+ssh://git@github.com/foo/bar.git#0000000000000000000000000000000000000000",
      "version": "1.2.3",
    },
    "node_modules/devit": Object {
      "dependencies": Object {
        "devo": "",
      },
      "dev": true,
      "name": "devit",
      "version": "1.2.3",
    },
    "node_modules/devo": Object {
      "devOptional": true,
      "name": "devo",
      "version": "1.2.3",
    },
    "node_modules/e": Object {
      "dependencies": Object {
        "tgz": "",
      },
      "dev": true,
      "name": "e",
      "resolved": "https://foo.com/e.tgz",
      "version": "1.2.3",
    },
    "node_modules/link": Object {
      "link": true,
      "resolved": "../../target",
    },
    "node_modules/nopkg": Object {
      "extraneous": true,
    },
    "node_modules/optin": Object {
      "dependencies": Object {
        "devo": "",
      },
      "name": "optin",
      "optional": true,
      "version": "1.2.3",
    },
    "node_modules/tgz": Object {
      "dev": true,
      "name": "tgz",
      "resolved": "file:archives/tarball.tgz",
      "version": "1.2.3",
    },
    "target": Object {
      "name": "link",
      "resolved": "github:isaacs/foobarbaz#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
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
  "name": "a",
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
  "name": "d",
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > dep e metadata 1`] = `
Object {
  "dependencies": Object {
    "tgz": "",
  },
  "dev": true,
  "name": "e",
  "resolved": "https://foo.com/e.tgz",
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > git dep metadata 1`] = `
Object {
  "dev": true,
  "name": "git-dep",
  "resolved": "git+ssh://git@github.com/foo/bar.git#0000000000000000000000000000000000000000",
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > link metadata 1`] = `
Object {
  "link": true,
  "resolved": "../../target",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > link target metadata 1`] = `
Object {
  "name": "link",
  "resolved": "github:isaacs/foobarbaz#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > meta for dev dep 1`] = `
Object {
  "dependencies": Object {
    "devo": "",
  },
  "dev": true,
  "name": "devit",
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > meta for devOptional dep 1`] = `
Object {
  "devOptional": true,
  "name": "devo",
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > meta for optional dep 1`] = `
Object {
  "dependencies": Object {
    "devo": "",
  },
  "name": "optin",
  "optional": true,
  "version": "1.2.3",
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > metadata for tarball file pkg 1`] = `
Object {
  "dev": true,
  "name": "tgz",
  "resolved": "file:archives/tarball.tgz",
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
  },
  "devDependencies": Object {
    "d": "",
    "devit": "",
    "e": "https://foo.com/e.tgz",
  },
  "name": "root",
  "optionalDependencies": Object {
    "optin": "",
  },
}
`

exports[`test/shrinkwrap.js TAP construct metadata from node and package data > root metadata, with package version 1`] = `
Object {
  "dependencies": Object {
    "a": "",
    "link": "",
    "link2": "",
  },
  "devDependencies": Object {
    "d": "",
    "devit": "",
    "e": "https://foo.com/e.tgz",
  },
  "name": "root",
  "optionalDependencies": Object {
    "optin": "",
  },
  "version": "1.2.3",
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
  "resolved": "../../abbrev-link-target",
}
`

exports[`test/shrinkwrap.js TAP look up from locks and such lockfile > unhosted git 1`] = `
Object {
  "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
}
`

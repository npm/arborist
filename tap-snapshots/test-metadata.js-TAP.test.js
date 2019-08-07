/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/metadata.js TAP look up from locks and such > fall off the dep tree 1`] = `
Object {}
`

exports[`test/metadata.js TAP look up from locks and such > from arbmeta 1`] = `
Object {
  "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
  "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
}
`

exports[`test/metadata.js TAP look up from locks and such > must match snapshot 1`] = `
Object {
  "integrity": "the integrity is not valid, clearly",
  "resolved": "fake resolved value",
}
`

exports[`test/metadata.js TAP look up from locks and such > not found arb 1`] = `
Object {}
`

exports[`test/metadata.js TAP look up from locks and such lockfile > basic pkg 1`] = `
Object {
  "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
  "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
}
`

exports[`test/metadata.js TAP look up from locks and such lockfile > full git 1`] = `
Object {
  "resolved": "git+ssh://git@github.com:isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
}
`

exports[`test/metadata.js TAP look up from locks and such lockfile > must match snapshot 1`] = `
Object {
  "integrity": "the integrity is not valid, clearly",
  "resolved": "fake resolved value",
}
`

exports[`test/metadata.js TAP look up from locks and such lockfile > not found 1`] = `
Object {}
`

exports[`test/metadata.js TAP look up from locks and such lockfile > symlink 1`] = `
Object {
  "integrity": undefined,
  "resolved": "{CWD}/test/fixtures/install-types/abbrev-link-target",
}
`

exports[`test/metadata.js TAP look up from locks and such lockfile > unhosted git 1`] = `
Object {
  "resolved": "git+https://mygit.com/isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
}
`

exports[`test/metadata.js TAP look up from locks and such package > get from basic package.json 1`] = `
Object {
  "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
  "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
}
`

exports[`test/metadata.js TAP look up from locks and such package > get from gh shorthand package.json 1`] = `
Object {
  "integrity": null,
  "resolved": "git+ssh://git@github.com:isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
}
`

exports[`test/metadata.js TAP look up from locks and such package > get from gh shorthand package.json 2`] = `
Object {
  "integrity": null,
  "resolved": "git+ssh://git@github.com:isaacs/abbrev-js.git#a9ee72ebc8fe3975f1b0c7aeb3a8f2a806a432eb",
}
`

exports[`test/metadata.js TAP look up from locks and such package > get from pinned-version package.json 1`] = `
Object {
  "integrity": "sha1-qgScln+ZkiKqQuFENPDFYu9GgkE=",
  "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz",
}
`

exports[`test/metadata.js TAP look up from locks and such package > get from symlinked package.json 1`] = `
Object {
  "resolved": "{CWD}/test/fixtures/install-types/abbrev-link-target",
}
`

exports[`test/metadata.js TAP look up from locks and such package > not found pkg 1`] = `
Object {}
`

exports[`test/metadata.js TAP look up from locks and such package > package with no metas 1`] = `
Object {}
`

exports[`test/metadata.js TAP memoize and dememoize > dememoized locationless node, no-op 1`] = `
Object {
  "/asdf": Object {
    "integrity": "integral",
    "resolved": "resolute",
  },
}
`

exports[`test/metadata.js TAP memoize and dememoize > dememoized node 1`] = `
Object {}
`

exports[`test/metadata.js TAP memoize and dememoize > memoized empty node, no-op 1`] = `
Object {}
`

exports[`test/metadata.js TAP memoize and dememoize > memoized node 1`] = `
Object {
  "/asdf": Object {
    "integrity": "integral",
    "resolved": "resolute",
  },
}
`

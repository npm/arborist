/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/spec-from-lock.js TAP > directory symlink 1`] = `
Object {
  "escapedName": "x",
  "fetchSpec": "{..}/some/path",
  "gitCommittish": undefined,
  "gitRange": undefined,
  "hosted": undefined,
  "name": "x",
  "raw": "x@file:../some/path",
  "rawSpec": "file:../some/path",
  "registry": undefined,
  "saveSpec": "file:../some/path",
  "scope": undefined,
  "type": "directory",
  "where": "{CWD}",
}
`

exports[`test/spec-from-lock.js TAP > file with from, no integrity 1`] = `
Object {
  "escapedName": "x",
  "fetchSpec": "{CWD}/x-1.2.3.tgz",
  "gitCommittish": undefined,
  "gitRange": undefined,
  "hosted": undefined,
  "name": "x",
  "raw": "x@x-1.2.3.tgz",
  "rawSpec": "x-1.2.3.tgz",
  "registry": undefined,
  "saveSpec": "file:x-1.2.3.tgz",
  "scope": undefined,
  "type": "file",
  "where": "{CWD}",
}
`

exports[`test/spec-from-lock.js TAP > file with resolved and from 1`] = `
Object {
  "escapedName": "x",
  "fetchSpec": "/path/to/x-1.2.3.tgz",
  "gitCommittish": undefined,
  "gitRange": undefined,
  "hosted": undefined,
  "name": "x",
  "raw": "x@/path/to/x-1.2.3.tgz",
  "rawSpec": "/path/to/x-1.2.3.tgz",
  "registry": undefined,
  "saveSpec": "file:/path/to/x-1.2.3.tgz",
  "scope": undefined,
  "type": "file",
  "where": "{CWD}",
}
`

exports[`test/spec-from-lock.js TAP > file with resolved, no integrity 1`] = `
Object {
  "escapedName": "x",
  "fetchSpec": "/path/to/x-1.2.3.tgz",
  "gitCommittish": undefined,
  "gitRange": undefined,
  "hosted": undefined,
  "name": "x",
  "raw": "x@/path/to/x-1.2.3.tgz",
  "rawSpec": "/path/to/x-1.2.3.tgz",
  "registry": undefined,
  "saveSpec": "file:/path/to/x-1.2.3.tgz",
  "scope": undefined,
  "type": "file",
  "where": "{CWD}",
}
`

exports[`test/spec-from-lock.js TAP > version (file) and integrity set 1`] = `
Object {
  "escapedName": "x",
  "fetchSpec": "{CWD}/foo.tgz",
  "gitCommittish": undefined,
  "gitRange": undefined,
  "hosted": undefined,
  "name": "x",
  "raw": "x@foo.tgz",
  "rawSpec": "foo.tgz",
  "registry": undefined,
  "saveSpec": "file:foo.tgz",
  "scope": undefined,
  "type": "file",
  "where": "{CWD}",
}
`

exports[`test/spec-from-lock.js TAP > version and integrity 1`] = `
Object {
  "escapedName": "x",
  "fetchSpec": "1.2.3",
  "gitCommittish": undefined,
  "gitRange": undefined,
  "hosted": undefined,
  "name": "x",
  "raw": "x@1.2.3",
  "rawSpec": "1.2.3",
  "registry": true,
  "saveSpec": null,
  "scope": undefined,
  "type": "version",
  "where": undefined,
}
`

exports[`test/spec-from-lock.js TAP > version and range, no integrity 1`] = `
Object {
  "escapedName": "x",
  "fetchSpec": "1.2.3",
  "gitCommittish": undefined,
  "gitRange": undefined,
  "hosted": undefined,
  "name": "x",
  "raw": "x@1.2.3",
  "rawSpec": "1.2.3",
  "registry": true,
  "saveSpec": null,
  "scope": undefined,
  "type": "version",
  "where": undefined,
}
`

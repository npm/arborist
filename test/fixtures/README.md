# `@npmcli/arborist` test fixtures

Hello, and welcome to Arborist's test fixture library!

Here you will find:

- A functional mock registry server, which can act as a caching proxy, so
  that tests don't have to hit the main registry.
- A bunch of project layouts that exercise various cases, ranging from the
  common and mundane, to the truly baffling and bizarre.
- Several of those project layouts snapshotted as `tap` fixture definition
  objects, and a script to generate those fixture definitions.

## Test Project Examples

Most of the folders in `test/fixtures/` are example project layouts.
Several of these are in fact published to the npm registry under the
`@isaacs/...` scope, but when used in tests, they should always be fetched
from the mock registry.

### Symbolic Links

Several of these project folder examples involve symbolic links.  The
symlinks are created the first time `test/fixtures/index.js` is loaded, and
are all ignored in the `.gitignore` file.

To create all the symlinks and add them to the `.gitignore` file
automatically:

```
node test/fixtures/index.js
```

To remove them all:

```
node test/fixtures/index.js cleanup
```

## Reify Test Case Fixtures

Since `Arborist.reify()` writes to the file system, it would not do to have
it dropping junk in those example project folders, as that would disturb
other tests running 

The reify test case fixtures are stored in `test/fixtures/reify-cases/`.
To generate a new test case:

```
node test/fixtures/reify-cases/create.js <folder>
```

where `<folder>` is a path to the test case example you wish to store.
Note that this encodes the entire folder in a single node module, and has
to be re-created fresh for each test run, so make sure it's not full of too
much garbage or extraneous files that aren't relevant to the test.

## Mock Registry

The mock registry is in `test/fixtures/registry-mocks`.  The server itself
is in `test/fixtures/registry-mocks/server.js`.  The contents are in
`test/fixtures/registry-mocks/content/`.

You can run the server directly by running:

```
node test/fixtures/registry-mocks/server.js
```

In tests, it's loaded by requiring the server module, and then running the
exported method, passing in a `tap` test object, and using the exported
`registry` property as the registry config for all its business.

```js
const registryServer = require('../fixtures/registry-mocks/server.js')
const {registry} = registryServer
t.test('setup server', { bail: true, buffered: false }, registryServer)
```

This automatically sets up the appropriate teardown on the parent test
object provided, and ends the test when the server is up and running.

### Updating Contents

When contents on the registry change, and you wish to update the mock
contents, the easiest way is to just delete the mock file you wish to
update, and then run the test with the mock registry server in proxy mode.

```bash
# delete the some-package.json, some-package.min.json, and the
# tarball artifacts in some-package/*
rm -rf test/fixtures/registry-mocks/content/some-package*
npm run test-proxy test/arborist/reify.js
```

The server will fetch whatever it doesn't have from the registry, and save
it in the appropriate place under `test/fixtures/registry-mocks/content/`.

There is also a script at
`test/fixtures/registry-mocks/fetch-lock-contents.js` which will fetch and
store the packuments and tarballs referenced in a `package-lock.json` file.

And of course, you could just delete the entire `content` folder and run
`npm run test-proxy`, and it'll reload everything (and take a while).

Note that it's not a great idea to update the registry mocks too casually,
since changes in the packages published to the registry can cause tests to
no longer exercise the edge cases that they are intended to.

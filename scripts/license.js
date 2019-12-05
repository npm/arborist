const Arborist = require('../')
const path = process.argv[2] || '.'
const a = new Arborist({ path })
const query = process.argv[3]
a.loadVirtual().then(tree => {
  // only load the actual tree if the virtual one doesn't have modern metadata
  if (!tree.meta || !(tree.meta.originalLockfileVersion >= 2))
    throw 'load actual'
  else
    return tree
}).catch(() => a.loadActual()).then(tree => {
  if (!query) {
    for (const license of tree.inventory.query('license')) {
      console.log(license)
    }
  } else {
    for (const node of tree.inventory.query('license', query)) {
      console.log(`${node.name} ${node.location} ${node.package.description}`)
    }
  }
})

/* output:

$ node license.js
MIT
ISC
Apache-2.0
BSD-3-Clause
BSD-2-Clause
undefined
(WTFPL OR MIT)
MIT/X11
CC-BY-3.0
CC0-1.0
Unlicense
(MIT OR CC0-1.0)

$ node license.js . MIT
aggregate-error node_modules/aggregate-error Create an error from multiple errors
ansi-regex node_modules/ansi-regex Regular expression for matching ANSI escape codes
ajv node_modules/ajv Another JSON Schema Validator
agent-base node_modules/agent-base Turn a function into an `http.Agent` instance
ansi-styles node_modules/ansi-styles ANSI escape codes for styling strings in the terminal
archy node_modules/archy render nested hierarchies `npm ls` style with unicode pipes
agentkeepalive node_modules/agentkeepalive Missing keepalive http.Agent
append-transform node_modules/append-transform Install a transform to `require.extensions` that always runs last, even if additional extensions are added later.
asap node_modules/asap High-priority task queue for Node.js and browsers
argparse node_modules/argparse Very powerful CLI arguments parser. Native port of argparse - python's options parsing library
arg node_modules/arg Another simple argument parser
assert-plus node_modules/assert-plus Extra assertions on top of node's assert module
asynckit node_modules/asynckit Minimal async jobs utility library, with streams support
aws4 node_modules/aws4 Signs and prepares requests using AWS Signature Version 4
balanced-match node_modules/balanced-match Match balanced character pairs, like "{" and "}"
asn1 node_modules/asn1 Contains parsers and serializers for ASN.1 (currently BER only)
binary-extensions node_modules/binary-extensions List of binary file extensions
bluebird node_modules/bluebird Full featured Promises/A+ implementation with exceptionally good performance
brace-expansion node_modules/brace-expansion Brace expansion as known from sh/bash
builtins node_modules/builtins List of node.js builtin modules
buffer-from node_modules/buffer-from A [ponyfill](https://ponyfill.com) for `Buffer.from`, uses native implementation if available.
braces node_modules/braces Bash-like brace expansion, implemented in JavaScript. Safer than other brace expansion libs, with complete support for the Bash 4.3 braces specification, without sacrificing speed.
caching-transform node_modules/caching-transform Wraps a transform and provides caching
chokidar node_modules/chokidar A neat wrapper around node.js fs.watch / fs.watchFile / fsevents.
camelcase node_modules/camelcase Convert a dash/dot/underscore/space separated string to camelCase or PascalCase: `foo-bar` → `fooBar`
clean-stack node_modules/clean-stack Clean up error stack traces
code-point-at node_modules/code-point-at ES2015 `String#codePointAt()` ponyfill
chalk node_modules/chalk Terminal string styling done right
color-convert node_modules/color-convert Plain color conversion functions
color-name node_modules/color-name A list of color names and its values
cobertura-parse node_modules/cobertura-parse Parse cobertura coverage to JSON, based on output from lcov-parse
commondir node_modules/commondir compute the closest common parent for file paths
concat-map node_modules/concat-map concatenative mapdashery
convert-source-map node_modules/convert-source-map Converts a source-map from/to  different formats and allows adding/changing properties.
combined-stream node_modules/combined-stream A stream that emits multiple other streams one after another.
core-util-is node_modules/core-util-is The `util.is*` functions introduced in Node v0.12.
cp-file node_modules/cp-file Copy a file
dashdash node_modules/dashdash A light, featureful and explicit option parsing library.
commander node_modules/commander the complete solution for node.js command-line programs
debuglog node_modules/debuglog backport of util.debuglog from node v0.11
cross-spawn node_modules/cross-spawn Cross platform child_process#spawn and child_process#spawnSync
decamelize node_modules/decamelize Convert a camelized string into a lowercased one with a custom separator: unicornRainbow → unicorn_rainbow
delayed-stream node_modules/delayed-stream Buffers events from a stream until you are ready to handle them.
default-require-extensions node_modules/default-require-extensions Node's default require extensions as a separate module
encoding node_modules/encoding Convert encodings, uses iconv by default and fallbacks to iconv-lite if needed
debug node_modules/debug small debugging utility
ecc-jsbn node_modules/ecc-jsbn ECC JS code based on JSBN
err-code node_modules/err-code Create an error with a code
emoji-regex node_modules/emoji-regex A regular expression to match all Emoji-only symbols as per the Unicode Standard.
es6-error node_modules/es6-error Easily-extendable error for use with ES6 classes
es6-promise node_modules/es6-promise A lightweight library that provides tools for organizing asynchronous code
esm node_modules/esm Tomorrow's ECMAScript modules today!
escape-string-regexp node_modules/escape-string-regexp Escape RegExp special characters
error-ex node_modules/error-ex Easy error subclassing and stack customization
es6-promisify node_modules/es6-promisify Converts callback-based functions to ES6 Promises
extsprintf node_modules/extsprintf extended POSIX-style sprintf
fast-deep-equal node_modules/fast-deep-equal Fast deep equal
extend node_modules/extend Port of jQuery.extend for node.js and the browser
fast-json-stable-stringify node_modules/fast-json-stable-stringify deterministic `JSON.stringify()` - a faster version of substack's json-stable-strigify without jsonify
fill-range node_modules/fill-range Fill in a range of numbers or letters, optionally passing an increment or `step` to use, or create a regex-compatible range with `options.toRegex`
find-cache-dir node_modules/find-cache-dir Finds the common standard cache directory
flow-parser node_modules/flow-parser JavaScript parser written in OCaml. Produces ESTree AST
findit node_modules/findit walk a directory tree recursively with events
find-up node_modules/find-up Find a file or directory by walking up parent directories
form-data node_modules/form-data A library to create readable "multipart/form-data" streams. Can be used to submit forms and file uploads to other web applications.
flow-remove-types node_modules/flow-remove-types Removes Flow type annotations from JavaScript files with speed and simplicity.
fsevents node_modules/fsevents Native Access to MacOS FSEvents
globals node_modules/globals Global identifiers from different JavaScript environments
getpass node_modules/getpass getpass for node.js
har-validator node_modules/har-validator Extremely fast HTTP Archive (HAR) validator using JSON Schema
growl node_modules/growl Growl unobtrusive notifications
handlebars node_modules/handlebars Handlebars provides the power necessary to let you build semantic templates effectively with no frustration
he node_modules/he A robust HTML entities encoder/decoder with full Unicode support.
http-proxy-agent node_modules/http-proxy-agent An HTTP(s) proxy `http.Agent` implementation for HTTP
has-flag node_modules/has-flag Check if argv has a specific flag
hasha node_modules/hasha Hashing made simple. Get the hash of a buffer/string/stream/file.
iconv-lite node_modules/iconv-lite Convert character encodings in pure javascript.
iferr node_modules/iferr Higher-order functions for easier error handling
indent-string node_modules/indent-string Indent each line in a string
imurmurhash node_modules/imurmurhash An incremental implementation of MurmurHash3
humanize-ms node_modules/humanize-ms transform humanize time to ms
http-signature node_modules/http-signature Reference implementation of Joyent's HTTP Signature scheme.
ip node_modules/ip [![](https://badge.fury.io/js/ip.svg)](https://www.npmjs.com/package/ip)
https-proxy-agent node_modules/https-proxy-agent An HTTP(s) proxy `http.Agent` implementation for HTTPS
is-binary-path node_modules/is-binary-path Check if a file path is a binary file
is-arrayish node_modules/is-arrayish Determines if an object can be used as an array
is-extglob node_modules/is-extglob Returns true if a string has an extglob.
is-glob node_modules/is-glob Returns `true` if the given string looks like a glob pattern or an extglob pattern. This makes it easy to create code that only uses external modules like node-glob when necessary, resulting in much faster code execution and initialization time, and a better user experience.
is-fullwidth-code-point node_modules/is-fullwidth-code-point Check if the character represented by a given Unicode code point is fullwidth
isarray node_modules/isarray Array#isArray for older browsers
is-number node_modules/is-number Returns true if a number or string value is a finite number. Useful for regex matches, parsing, user input, etc.
is-stream node_modules/is-stream Check if something is a Node.js stream
isstream node_modules/isstream Determine if an object is a Stream
is-typedarray node_modules/is-typedarray Detect whether or not an object is a Typed Array
js-tokens node_modules/js-tokens A regex that tokenizes JavaScript.
js-yaml node_modules/js-yaml YAML 1.2 parser and serializer
json-parse-better-errors node_modules/json-parse-better-errors JSON.parse with context information on error
json-parse-even-better-errors node_modules/json-parse-even-better-errors JSON.parse with context information on error
jsbn node_modules/jsbn The jsbn library is a fast, portable implementation of large-number math in pure JavaScript, enabling public-key crypto and other applications on desktop and mobile browsers.
jsesc node_modules/jsesc Given some data, jsesc returns the shortest possible stringified & ASCII-safe representation of that data.
just-diff node_modules/just-diff Return an object representing the diffs between two objects. Supports jsonPatch protocol
jsonparse node_modules/jsonparse This is a pure-js JSON streaming parser for node.js
json-schema-traverse node_modules/json-schema-traverse Traverse JSON Schema passing each schema object to callback
just-diff-apply node_modules/just-diff-apply Apply a diff to an object. Optionally supports jsonPatch protocol
load-json-file node_modules/load-json-file Read and parse a JSON file
locate-path node_modules/locate-path Get the first path that exists on disk of multiple paths
jsprim node_modules/jsprim utilities for primitive JavaScript types
lodash node_modules/lodash Lodash modular utilities.
lodash.flattendeep node_modules/lodash.flattendeep The lodash method `_.flattenDeep` exported as a module.
make-dir node_modules/make-dir Make a directory and its parents if needed - Think `mkdir -p`
merge-source-map node_modules/merge-source-map Merge old source map and new source map in multi-transform flow
mime-db node_modules/mime-db Media Type Database
minipass-fetch node_modules/minipass-fetch An implementation of window.fetch in Node.js using Minipass streams
minipass-json-stream node_modules/minipass-json-stream Like JSONStream, but using Minipass streams
mime-types node_modules/mime-types The ultimate javascript content-type utility.
minimist node_modules/minimist parse argument options
mkdirp node_modules/mkdirp Recursively mkdir, like `mkdir -p`
neo-async node_modules/neo-async Neo-Async is thought to be used as a drop-in replacement for Async, it almost fully covers its functionality and runs faster 
ms node_modules/ms Tiny millisecond conversion utility
mocha node_modules/mocha simple, flexible, fun test framework
nice-try node_modules/nice-try Tries to execute a function and discards any error that occurs
nested-error-stacks node_modules/nested-error-stacks An Error subclass that will chain nested Errors and dump nested stacktraces
node-modules-regexp node_modules/node-modules-regexp A regular expression for file paths that contain a `node_modules` folder.
minizlib node_modules/minizlib A small fast zlib stream built on [minipass](http://npm.im/minipass) and Node.js's zlib binding.
normalize-path node_modules/normalize-path Normalize slashes in a file path to be posix/unix-like forward slashes. Also condenses repeat slashes to a single slash and removes and trailing slashes, unless disabled.
number-is-nan node_modules/number-is-nan ES2015 Number.isNaN() ponyfill
os-homedir node_modules/os-homedir Node.js 4 `os.homedir()` ponyfill
os-tmpdir node_modules/os-tmpdir Node.js os.tmpdir() ponyfill
p-map node_modules/p-map Map over promises concurrently
p-locate node_modules/p-locate Get the first fulfilled promise that satisfies the provided testing function
p-try node_modules/p-try `Start a promise chain
p-limit node_modules/p-limit Run multiple promise-returning & async functions with limited concurrency
parse-json node_modules/parse-json Parse JSON with more helpful errors
path-exists node_modules/path-exists Check if a path exists
path-is-absolute node_modules/path-is-absolute Node.js 0.12 path.isAbsolute() ponyfill
path-parse node_modules/path-parse Node.js path.parse() ponyfill
performance-now node_modules/performance-now Implements performance.now (based on process.hrtime).
path-type node_modules/path-type Check if a path is a file, directory, or symlink
path-key node_modules/path-key Get the PATH environment variable key cross-platform
picomatch node_modules/picomatch Blazing fast and accurate glob matcher written in JavaScript, with no dependencies and full support for standard and extended Bash glob features, including braces, extglobs, POSIX brackets, and regular expressions.
process-nextick-args node_modules/process-nextick-args process.nextTick but always with args
pirates node_modules/pirates Properly hijack require
promise-retry node_modules/promise-retry Retries a function that returns a promise, leveraging the power of the retry module.
pify node_modules/pify Promisify a callback-style function
punycode node_modules/punycode A robust Punycode converter that fully complies to RFC 3492 and RFC 5891, and works on nearly all JavaScript platforms.
readable-stream node_modules/readable-stream Streams3, a user-land copy of the stream library from Node.js
psl node_modules/psl Domain name parser based on the Public Suffix List
read-pkg node_modules/read-pkg Read a package.json file
regenerator-runtime node_modules/regenerator-runtime Runtime for Regenerator-compiled generator and async functions.
readdirp node_modules/readdirp Recursive version of fs.readdir with streaming api.
require-directory node_modules/require-directory Recursively iterates over specified directory, require()'ing each file, and returning a nested hash structure containing those modules.
read-pkg-up node_modules/read-pkg-up Read the closest package.json file
resolve node_modules/resolve resolve like require.resolve() on behalf of files asynchronously and synchronously
pkg-dir node_modules/pkg-dir Find the root directory of a Node.js project or npm package
resolve-from node_modules/resolve-from Resolve the path of a module like `require.resolve()` but from a given path
retry node_modules/retry Abstraction for exponential and custom retry strategies for failed operations.
safe-buffer node_modules/safe-buffer Safer Node.js Buffer API
safer-buffer node_modules/safer-buffer Modern Buffer API polyfill without footguns
shebang-command node_modules/shebang-command Get the command from a shebang
shebang-regex node_modules/shebang-regex Regular expression for matching a shebang
source-map-support node_modules/source-map-support Fixes stack traces for files with source maps
smart-buffer node_modules/smart-buffer smart-buffer is a Buffer wrapper that adds automatic read & write offset tracking, string operations, data insertions, and more.
socks-proxy-agent node_modules/socks-proxy-agent A SOCKS proxy `http.Agent` implementation for HTTP and HTTPS
spdx-expression-parse node_modules/spdx-expression-parse parse SPDX license expressions
socks node_modules/socks Fully featured SOCKS proxy client supporting SOCKSv4, SOCKSv4a, and SOCKSv5. Includes Bind and Associate functionality.
string-width node_modules/string-width Get the visual width of a string - the number of columns required to display it
stack-utils node_modules/stack-utils Captures and cleans stack traces
string_decoder node_modules/string_decoder The string_decoder module from Node core
strip-ansi node_modules/strip-ansi Strip ANSI escape codes
sshpk node_modules/sshpk A library for finding and using SSH public keys
supports-color node_modules/supports-color Detect whether a terminal supports color
strip-bom node_modules/strip-bom Strip UTF-8 byte order mark (BOM) from a string
tap-parser node_modules/tap-parser parse the test anything protocol
to-fast-properties node_modules/to-fast-properties Force V8 to use fast properties for an object
to-regex-range node_modules/to-regex-range Pass two numbers, get a regex-compatible source string for matching ranges. Validated against more than 2.78 million test assertions.
ts-node node_modules/ts-node TypeScript execution environment and REPL for node.js, with source map support
util-deprecate node_modules/util-deprecate The Node.js `util.deprecate()` function with browser support
typedarray-to-buffer node_modules/typedarray-to-buffer Convert a typed array to a Buffer without a copy
uuid node_modules/uuid RFC4122 (v1, v4, and v5) UUIDs
unicode-length node_modules/unicode-length Get the length of unicode strings
verror node_modules/verror richer JavaScript errors
wrap-ansi node_modules/wrap-ansi Wordwrap a string with ANSI escape codes
wordwrap node_modules/wordwrap Wrap those words. Show them at what columns to start and stop.
xml2js node_modules/xml2js Simple XML to JavaScript object converter.
xmlbuilder node_modules/xmlbuilder An XML builder for node.js
yn node_modules/yn Parse yes/no like values
@babel/generator node_modules/@babel/generator Turns an AST into code.
@babel/helper-function-name node_modules/@babel/helper-function-name Helper function to change the property 'name' of every function
@babel/code-frame node_modules/@babel/code-frame Generate errors that contain a code frame that point to source locations.
@babel/helper-get-function-arity node_modules/@babel/helper-get-function-arity Helper function to get function arity
yargs node_modules/yargs yargs the modern, pirate-themed, successor to optimist.
@babel/highlight node_modules/@babel/highlight Syntax highlight JavaScript strings for output in terminals.
@babel/runtime node_modules/@babel/runtime babel's modular runtime helpers
@babel/helper-split-export-declaration node_modules/@babel/helper-split-export-declaration >
@babel/template node_modules/@babel/template Generate an AST from a string template.
vlq node_modules/vlq Generate, and decode, base64 VLQ mappings for source maps and other uses
@babel/traverse node_modules/@babel/traverse The Babel Traverse module maintains the overall tree state, and is responsible for replacing, removing, and adding nodes
@babel/parser node_modules/@babel/parser A JavaScript parser
@babel/types node_modules/@babel/types Babel Types is a Lodash-esque utility library for AST nodes
has-flag node_modules/chalk/node_modules/has-flag Check if argv has a specific flag
safe-buffer node_modules/convert-source-map/node_modules/safe-buffer Safer Node.js Buffer API
minimist node_modules/coveralls/node_modules/minimist parse argument options
debug node_modules/istanbul-lib-source-maps/node_modules/debug small debugging utility
cross-spawn node_modules/istanbul-lib-processinfo/node_modules/cross-spawn Cross platform child_process#spawn and child_process#spawnSync
has-flag node_modules/istanbul-lib-report/node_modules/has-flag Check if argv has a specific flag
supports-color node_modules/chalk/node_modules/supports-color Detect whether a terminal supports color
supports-color node_modules/istanbul-lib-report/node_modules/supports-color Detect whether a terminal supports color
pify node_modules/load-json-file/node_modules/pify Promisify a callback-style function
ms node_modules/debug/node_modules/ms Tiny milisecond conversion utility
safe-buffer node_modules/readable-stream/node_modules/safe-buffer Safer Node.js Buffer API
pify node_modules/path-type/node_modules/pify Promisify a callback-style function
agent-base node_modules/socks-proxy-agent/node_modules/agent-base Turn a function into an `http.Agent` instance
debug node_modules/tap-mocha-reporter/node_modules/debug small debugging utility
safe-buffer node_modules/string_decoder/node_modules/safe-buffer Safer Node.js Buffer API
ms node_modules/tap-mocha-reporter/node_modules/ms Tiny milisecond conversion utility
punycode node_modules/tough-cookie/node_modules/punycode A robust Punycode converter that fully complies to RFC 3492 and RFC 5891, and works on nearly all JavaScript platforms.
commander node_modules/uglify-js/node_modules/commander the complete solution for node.js command-line programs
ansi-regex node_modules/unicode-length/node_modules/ansi-regex Regular expression for matching ANSI escape codes
strip-ansi node_modules/unicode-length/node_modules/strip-ansi Strip ANSI escape codes
is-fullwidth-code-point node_modules/wrap-ansi/node_modules/is-fullwidth-code-point Check if the character represented by a given Unicode code point is fullwidth
string-width node_modules/wrap-ansi/node_modules/string-width Get the visual width of a string - the number of columns required to display it
punycode node_modules/unicode-length/node_modules/punycode A robust Punycode converter that fully complies to RFC 3492 and RFC 5891, and works on nearly all JavaScript platforms.
strip-ansi node_modules/wrap-ansi/node_modules/strip-ansi Strip ANSI escape codes
ansi-regex node_modules/wrap-ansi/node_modules/ansi-regex Regular expression for matching ANSI escape codes
string-width node_modules/yargs/node_modules/string-width Get the visual width of a string - the number of columns required to display it
ansi-regex node_modules/yargs/node_modules/ansi-regex Regular expression for matching ANSI escape codes
strip-ansi node_modules/yargs/node_modules/strip-ansi Strip ANSI escape codes from a string
wrap-ansi node_modules/yargs/node_modules/wrap-ansi Wordwrap a string with ANSI escape codes
debug node_modules/@babel/traverse/node_modules/debug small debugging utility
ansicolors node_modules/tap/node_modules/ansicolors Functions that surround a string with ansicolor codes so it prints in color.
ansi-escapes node_modules/tap/node_modules/ansi-escapes ANSI escape codes for manipulating the terminal
ansi-regex node_modules/tap/node_modules/ansi-regex Regular expression for matching ANSI escape codes
ansi-styles node_modules/tap/node_modules/ansi-styles ANSI escape codes for styling strings in the terminal
astral-regex node_modules/tap/node_modules/astral-regex Regular expression for matching astral symbols
arrify node_modules/tap/node_modules/arrify Convert a value to an array
auto-bind node_modules/tap/node_modules/auto-bind Automatically bind methods to their class instance
babel-code-frame node_modules/tap/node_modules/babel-code-frame Generate errors that contain a code frame that point to source locations.
babel-generator node_modules/tap/node_modules/babel-generator Turns an AST into code.
babel-core node_modules/tap/node_modules/babel-core Babel compiler core.
babel-helper-builder-react-jsx node_modules/tap/node_modules/babel-helper-builder-react-jsx Helper function to build react jsx
babel-helpers node_modules/tap/node_modules/babel-helpers Collection of helper functions used by Babel transforms.
babel-plugin-syntax-jsx node_modules/tap/node_modules/babel-plugin-syntax-jsx Allow parsing of jsx
babel-messages node_modules/tap/node_modules/babel-messages Collection of debug messages used by Babel.
babel-plugin-syntax-object-rest-spread node_modules/tap/node_modules/babel-plugin-syntax-object-rest-spread Allow parsing of object rest/spread
babel-plugin-transform-es2015-destructuring node_modules/tap/node_modules/babel-plugin-transform-es2015-destructuring Compile ES2015 destructuring to ES5
babel-register node_modules/tap/node_modules/babel-register babel require hook
babel-plugin-transform-object-rest-spread node_modules/tap/node_modules/babel-plugin-transform-object-rest-spread Compile object rest and spread to ES5
babel-runtime node_modules/tap/node_modules/babel-runtime babel selfContained runtime
babel-plugin-transform-react-jsx node_modules/tap/node_modules/babel-plugin-transform-react-jsx Turn JSX into React function calls
babel-template node_modules/tap/node_modules/babel-template Generate an AST from a string template.
babylon node_modules/tap/node_modules/babylon A JavaScript parser
babel-traverse node_modules/tap/node_modules/babel-traverse The Babel Traverse module maintains the overall tree state, and is responsible for replacing, removing, and adding nodes
babel-types node_modules/tap/node_modules/babel-types Babel Types is a Lodash-esque utility library for AST nodes
balanced-match node_modules/tap/node_modules/balanced-match Match balanced character pairs, like "{" and "}"
brace-expansion node_modules/tap/node_modules/brace-expansion Brace expansion as known from sh/bash
callsites node_modules/tap/node_modules/callsites Get callsites from the V8 stack trace API
ci-info node_modules/tap/node_modules/ci-info Get details about the current Continuous Integration environment
caller-callsite node_modules/tap/node_modules/caller-callsite Get the callsite of the caller function
cli-cursor node_modules/tap/node_modules/cli-cursor Toggle the CLI cursor
chalk node_modules/tap/node_modules/chalk Terminal string styling done right. Much color.
color-convert node_modules/tap/node_modules/color-convert Plain color conversion functions
cli-truncate node_modules/tap/node_modules/cli-truncate Truncate a string to a specific width in the terminal
color-name node_modules/tap/node_modules/color-name A list of color names and its values
cardinal node_modules/tap/node_modules/cardinal Syntax highlights JavaScript code with ANSI colors to be printed to the terminal.
concat-map node_modules/tap/node_modules/concat-map concatenative mapdashery
convert-source-map node_modules/tap/node_modules/convert-source-map Converts a source-map from/to  different formats and allows adding/changing properties.
core-js node_modules/tap/node_modules/core-js Standard library
csstype node_modules/tap/node_modules/csstype Strict TypeScript and Flow types for style based on MDN data
caller-path node_modules/tap/node_modules/caller-path Get the path of the caller function
detect-indent node_modules/tap/node_modules/detect-indent Detect the indentation of code
escape-string-regexp node_modules/tap/node_modules/escape-string-regexp Escape RegExp special characters
emoji-regex node_modules/tap/node_modules/emoji-regex A regular expression to match all Emoji-only symbols as per the Unicode Standard.
globals node_modules/tap/node_modules/globals Global identifiers from different JavaScript environments
debug node_modules/tap/node_modules/debug small debugging utility
has-ansi node_modules/tap/node_modules/has-ansi Check if a string has ANSI escape codes
has-flag node_modules/tap/node_modules/has-flag Check if argv has a specific flag
ink node_modules/tap/node_modules/ink React for CLI
home-or-tmp node_modules/tap/node_modules/home-or-tmp Get the user home directory with fallback to the system temp directory
is-ci node_modules/tap/node_modules/is-ci Detect if the current environment is a CI server
import-jsx node_modules/tap/node_modules/import-jsx Require and transpile JSX on the fly
invariant node_modules/tap/node_modules/invariant invariant
is-finite node_modules/tap/node_modules/is-finite ES2015 Number.isFinite() ponyfill
js-tokens node_modules/tap/node_modules/js-tokens A regex that tokenizes JavaScript.
json5 node_modules/tap/node_modules/json5 JSON for the ES5 era.
lodash node_modules/tap/node_modules/lodash Lodash modular utilities.
lodash.throttle node_modules/tap/node_modules/lodash.throttle The lodash method `_.throttle` exported as a module.
is-fullwidth-code-point node_modules/tap/node_modules/is-fullwidth-code-point Check if the character represented by a given Unicode code point is fullwidth
log-update node_modules/tap/node_modules/log-update Log by overwriting the previous output in the terminal. Useful for rendering progress bars, animations, etc.
loose-envify node_modules/tap/node_modules/loose-envify Fast (and loose) selective `process.env` replacer using js-tokens instead of an AST
mimic-fn node_modules/tap/node_modules/mimic-fn Make a function mimic another one
mkdirp node_modules/tap/node_modules/mkdirp Recursively mkdir, like `mkdir -p`
ms node_modules/tap/node_modules/ms Tiny milisecond conversion utility
jsesc node_modules/tap/node_modules/jsesc A JavaScript library for escaping JavaScript strings while generating the shortest possible valid output.
number-is-nan node_modules/tap/node_modules/number-is-nan ES2015 Number.isNaN() ponyfill
object-assign node_modules/tap/node_modules/object-assign ES2015 `Object.assign()` ponyfill
onetime node_modules/tap/node_modules/onetime Ensure a function is only called once
os-homedir node_modules/tap/node_modules/os-homedir Node.js 4 `os.homedir()` ponyfill
path-is-absolute node_modules/tap/node_modules/path-is-absolute Node.js 0.12 path.isAbsolute() ponyfill
private node_modules/tap/node_modules/private Utility for associating truly private state with any JavaScript object
prop-types node_modules/tap/node_modules/prop-types Runtime type checking for React props and similar objects.
react node_modules/tap/node_modules/react React is a JavaScript library for building user interfaces.
react-is node_modules/tap/node_modules/react-is Brand checking of React Elements.
punycode node_modules/tap/node_modules/punycode A robust Punycode converter that fully complies to RFC 3492 and RFC 5891, and works on nearly all JavaScript platforms.
os-tmpdir node_modules/tap/node_modules/os-tmpdir Node.js os.tmpdir() ponyfill
regenerator-runtime node_modules/tap/node_modules/regenerator-runtime Runtime for Regenerator-compiled generator and async functions.
react-reconciler node_modules/tap/node_modules/react-reconciler React package for creating custom renderers.
repeating node_modules/tap/node_modules/repeating Repeat a string - fast
resolve-from node_modules/tap/node_modules/resolve-from Resolve the path of a module like `require.resolve()` but from a given path
restore-cursor node_modules/tap/node_modules/restore-cursor Gracefully restore the CLI cursor on exit
scheduler node_modules/tap/node_modules/scheduler Cooperative scheduler for the browser environment.
slash node_modules/tap/node_modules/slash Convert Windows backslash paths to slash paths
redeyed node_modules/tap/node_modules/redeyed Takes JavaScript code, along with a config and returns the original code with tokens wrapped as configured.
slice-ansi node_modules/tap/node_modules/slice-ansi Slice a string with ANSI escape codes
string-length node_modules/tap/node_modules/string-length Get the real length of a string - by correctly counting astral symbols and ignoring ansi escape codes
strip-ansi node_modules/tap/node_modules/strip-ansi Strip ANSI escape codes
string-width node_modules/tap/node_modules/string-width Get the visual width of a string - the number of columns required to display it
supports-color node_modules/tap/node_modules/supports-color Detect whether a terminal supports color
tap-parser node_modules/tap/node_modules/tap-parser parse the test anything protocol
to-fast-properties node_modules/tap/node_modules/to-fast-properties Force V8 to use fast properties for an object
trim-right node_modules/tap/node_modules/trim-right Similar to String#trim() but removes only whitespace on the right
widest-line node_modules/tap/node_modules/widest-line Get the visual width of the widest line in a string - the number of columns required to display it
wrap-ansi node_modules/tap/node_modules/wrap-ansi Wordwrap a string with ANSI escape codes
yoga-layout-prebuilt node_modules/tap/node_modules/yoga-layout-prebuilt Prebuilt yoga-layout package
@babel/runtime node_modules/tap/node_modules/@babel/runtime babel's modular runtime helpers
@types/react node_modules/tap/node_modules/@types/react TypeScript definitions for React
@types/prop-types node_modules/tap/node_modules/@types/prop-types TypeScript definitions for prop-types
source-map-support node_modules/tap/node_modules/babel-register/node_modules/source-map-support Fixes stack traces for files with source maps
chalk node_modules/tap/node_modules/ink/node_modules/chalk Terminal string styling done right
safe-buffer node_modules/tap/node_modules/convert-source-map/node_modules/safe-buffer Safer Node.js Buffer API
ansi-styles node_modules/tap/node_modules/ink/node_modules/ansi-styles ANSI escape codes for styling strings in the terminal
supports-color node_modules/tap/node_modules/ink/node_modules/supports-color Detect whether a terminal supports color
minimist node_modules/tap/node_modules/mkdirp/node_modules/minimist parse argument options
ansi-regex node_modules/tap/node_modules/string-length/node_modules/ansi-regex Regular expression for matching ANSI escape codes
ansi-regex node_modules/tap/node_modules/wrap-ansi/node_modules/ansi-regex Regular expression for matching ANSI escape codes
strip-ansi node_modules/tap/node_modules/string-length/node_modules/strip-ansi Strip ANSI escape codes
strip-ansi node_modules/tap/node_modules/string-width/node_modules/strip-ansi Strip ANSI escape codes
ansi-escapes node_modules/tap/node_modules/log-update/node_modules/ansi-escapes ANSI escape codes for manipulating the terminal
ansi-styles node_modules/tap/node_modules/wrap-ansi/node_modules/ansi-styles ANSI escape codes for styling strings in the terminal
ansi-regex node_modules/tap/node_modules/string-width/node_modules/ansi-regex Regular expression for matching ANSI escape codes
regenerator-runtime node_modules/tap/node_modules/@babel/runtime/node_modules/regenerator-runtime Runtime for Regenerator-compiled generator and async functions.
ansi-styles node_modules/tap/node_modules/treport/node_modules/ansi-styles ANSI escape codes for styling strings in the terminal
strip-ansi node_modules/tap/node_modules/wrap-ansi/node_modules/strip-ansi Strip ANSI escape codes from a string
chalk node_modules/tap/node_modules/treport/node_modules/chalk Terminal string styling done right
string-width node_modules/tap/node_modules/wrap-ansi/node_modules/string-width Get the visual width of a string - the number of columns required to display it
supports-color node_modules/tap/node_modules/treport/node_modules/supports-color Detect whether a terminal supports color
ms node_modules/tap/node_modules/treport/node_modules/ms Tiny millisecond conversion utility
unicode-length node_modules/tap/node_modules/treport/node_modules/unicode-length Get the length of unicode strings
*/

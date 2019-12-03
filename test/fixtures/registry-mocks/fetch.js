const deps = {
  "async-hook-domain": "^1.1.3",
  "bind-obj-methods": "^2.0.0",
  "browser-process-hrtime": "^1.0.0",
  "chokidar": "^3.3.0",
  "color-support": "^1.1.0",
  "coveralls": "^3.0.8",
  "diff": "^4.0.1",
  "esm": "^3.2.25",
  "findit": "^2.0.0",
  "flow-remove-types": "^2.112.0",
  "foreground-child": "^1.3.3",
  "fs-exists-cached": "^1.0.0",
  "function-loop": "^1.0.2",
  "glob": "^7.1.6",
  "import-jsx": "^3.0.0",
  "ink": "^2.5.0",
  "isexe": "^2.0.0",
  "istanbul-lib-processinfo": "^1.0.0",
  "jackspeak": "^1.4.0",
  "minipass": "^3.1.1",
  "mkdirp": "^0.5.1",
  "nyc": "^14.1.1",
  "opener": "^1.5.1",
  "own-or": "^1.0.0",
  "own-or-env": "^1.0.1",
  "react": "^16.12.0",
  "rimraf": "^2.7.1",
  "signal-exit": "^3.0.0",
  "source-map-support": "^0.5.16",
  "stack-utils": "^1.0.2",
  "tap-mocha-reporter": "^5.0.0",
  "tap-parser": "^10.0.1",
  "tap-yaml": "^1.0.0",
  "tcompare": "^3.0.0",
  "treport": "^1.0.0",
  "trivial-deferred": "^1.0.1",
  "ts-node": "^8.5.2",
  "typescript": "^3.7.2",
  "which": "^2.0.2",
  "write-file-atomic": "^3.0.1",
  "yaml": "^1.7.2",
  "yapool": "^1.0.0"
}

const pacote = require('pacote')
const {promisify} = require('util')
const fs = require('fs')
const writeFile = promisify(fs.writeFile)

Promise.all(Object.keys(deps).map(name =>
  pacote.packument(name)
    .then(mani => writeFile(`${name}.json`, JSON.stringify(mani, 0, 2)))))
.then(() => console.log('ok!'))


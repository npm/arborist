// generated from test/fixtures/link-dep-lifecycle-scripts
module.exports = t => {
  const path = t.testdir({
  "a": {
    "package.json": JSON.stringify({
      "name": "a",
      "version": "1.0.0",
      "scripts": {
        "prepare": "node -e \"require('fs').writeFileSync(require('path').resolve('a-prepare'), '')\""
      }
    })
  },
  "package-lock.json": JSON.stringify({
    "name": "link-dep-lifecycle-scripts",
    "version": "1.0.0",
    "lockfileVersion": 2,
    "requires": true,
    "packages": {
      "": {
        "version": "1.0.0",
        "dependencies": {
          "@ruyadorno/dep-with-a-link": "^1.1.0",
          "a": "file:./a"
        }
      },
      "a": {
        "version": "1.0.0"
      },
      "node_modules/@ruyadorno/dep-with-a-link": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/@ruyadorno/dep-with-a-link/-/dep-with-a-link-1.1.0.tgz",
        "integrity": "sha512-lMNI/+zSaSlNZ3m9JILIysu/A51qSfAtgBs36A4nLyuIBEWLvpuN6XOnWW5kKERjO55t9Z759wC1qKnW3IL1mg==",
        "dependencies": {
          "linked-dep": "file:linked-dep"
        }
      },
      "node_modules/@ruyadorno/dep-with-a-link/linked-dep": {},
      "node_modules/a": {
        "resolved": "a",
        "link": true
      },
      "node_modules/linked-dep": {
        "resolved": "node_modules/@ruyadorno/dep-with-a-link/linked-dep",
        "link": true
      }
    },
    "dependencies": {
      "@ruyadorno/dep-with-a-link": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/@ruyadorno/dep-with-a-link/-/dep-with-a-link-1.1.0.tgz",
        "integrity": "sha512-lMNI/+zSaSlNZ3m9JILIysu/A51qSfAtgBs36A4nLyuIBEWLvpuN6XOnWW5kKERjO55t9Z759wC1qKnW3IL1mg==",
        "requires": {
          "linked-dep": "file:linked-dep"
        }
      },
      "a": {
        "version": "file:a"
      },
      "linked-dep": {
        "version": "file:node_modules/@ruyadorno/dep-with-a-link/linked-dep"
      }
    }
  }),
  "package.json": JSON.stringify({
    "name": "link-dep-lifecycle-scripts",
    "version": "1.0.0",
    "dependencies": {
      "a": "file:./a",
      "@ruyadorno/dep-with-a-link": "^1.1.0"
    }
  })
})
  return path
}

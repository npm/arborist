// generated from test/fixtures/dedupe-lockfile
module.exports = t => ({
    "node_modules": {
      "@isaacs/dedupe-tests-a": {
        "package.json": JSON.stringify({
          "name": "@isaacs/dedupe-tests-a",
          "version": "1.0.1",
          "dependencies": {
            "@isaacs/dedupe-tests-b": "1"
          }
        })
      },
      "@isaacs/dedupe-tests-b": {
        "package.json": JSON.stringify({
          "name": "@isaacs/dedupe-tests-b",
          "version": "1.0.0"
        })
      }
    },
    "package.json": JSON.stringify({
      "name": "dedupe-lockfile",
      "version": "1.0.0",
      "dependencies": {
        "@isaacs/dedupe-tests-a": "1.0.1",
        "@isaacs/dedupe-tests-b": "1||2"
      }
    })
  })
  
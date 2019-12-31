// generated from test/fixtures/link-dep-empty
module.exports = t => ({
  "package-lock.json": JSON.stringify({
    "requires": true,
    "lockfileVersion": 1,
    "dependencies": {
      "linked-dep": {
        "version": "file:target"
      }
    }
  }),
  "package.json": JSON.stringify({
    "dependencies": {
      "linked-dep": "file:target"
    }
  }),
  "target": {
    "package.json": JSON.stringify({
      "name": "linked-dep",
      "version": "1.2.3"
    })
  }
})

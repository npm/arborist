// generated from test/fixtures/workspaces-simple
module.exports = t => ({
  "a": {
    "package.json": JSON.stringify({
      "name": "a",
      "version": "1.0.0",
      "dependencies": {
        "b": "^1.0.0"
      }
    })
  },
  "b": {
    "package.json": JSON.stringify({
      "name": "b",
      "version": "1.0.0"
    })
  },
  "package.json": JSON.stringify({
    "name": "workspace-simple",
    "workspaces": [
      "a",
      "b"
    ]
  })
})

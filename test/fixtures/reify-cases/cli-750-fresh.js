// generated from test/fixtures/cli-750
module.exports = t => ({
  "app": {
    "package.json": JSON.stringify({
      "name": "app",
      "dependencies": {
        "lib": "file:../lib"
      }
    })
  },
  "lib": {
    "package.json": JSON.stringify({
      "name": "lib"
    })
  },
  "package.json": JSON.stringify({
    "name": "monorepo",
    "dependencies": {
      "app": "file:./app"
    }
  })
})

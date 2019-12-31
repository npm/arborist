// generated from test/fixtures/peer-dep-cycle
module.exports = t => ({
  "package.json": JSON.stringify({
    "name": "@isaacs/peer-dep-cycle",
    "version": "1.0.0",
    "description": "a -> b -> c -> a.  Can we upgrade a?",
    "dependencies": {
      "@isaacs/peer-dep-cycle-a": "1"
    }
  })
})

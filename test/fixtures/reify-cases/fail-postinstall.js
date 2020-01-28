// generated from test/fixtures/fail-postinstall
module.exports = t => ({
  "package.json": JSON.stringify({
    "name": "@isaacs/testing-fail-postinstall",
    "version": "1.0.0",
    "scripts": {
      "postinstall": "exit 1"
    },
    "license": "ISC"
  })
})

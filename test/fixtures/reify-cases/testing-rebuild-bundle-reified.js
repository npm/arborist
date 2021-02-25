// generated from test/fixtures/testing-rebuild-bundle-reified
module.exports = t => {
  const path = t.testdir({
  "README.md": `- \`root\` depends on \`parent\`
- \`parent\` bundles \`a\`
- \`a\` depends on \`b\`
- \`b\` has a build script

Should get rebuilt if \`rebuildBundle\` is true, otherwise not.
`,
  "node_modules": {
    ".package-lock.json": JSON.stringify({
      "name": "@isaacs/testing-rebuild-bundle-reified",
      "version": "1.0.0",
      "lockfileVersion": 2,
      "requires": true,
      "packages": {
        "": {
          "name": "@isaacs/testing-rebuild-bundle-reified",
          "version": "1.0.0",
          "dependencies": {
            "@isaacs/testing-rebuild-bundle-parent": ""
          }
        },
        "node_modules/@isaacs/testing-rebuild-bundle-a": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/@isaacs/testing-rebuild-bundle-a/-/testing-rebuild-bundle-a-1.0.0.tgz",
          "integrity": "sha512-PlwlgYtgfN0xj0L0+nXryuWi2/G2w3AJ3vmg1pZMW1MazkmQddNkBexGKtZ7gY6kbROtwSAZb8Yc2gQc9VtFhQ==",
          "bundleDependencies": [
            "@isaacs/testing-rebuild-bundle-b"
          ],
          "dependencies": {
            "@isaacs/testing-rebuild-bundle-b": ""
          }
        },
        "node_modules/@isaacs/testing-rebuild-bundle-a/node_modules/@isaacs/testing-rebuild-bundle-b": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/@isaacs/testing-rebuild-bundle-b/-/testing-rebuild-bundle-b-1.0.0.tgz",
          "integrity": "sha512-LfOAULGGyxgQrxiJtp0Q4aXZnFYmvbmqq9oJRl21KFZRzzDLxCebvIGVCiBspmO/xIoAPhPwulJyKV3CgbI6mQ==",
          "hasInstallScript": true,
          "inBundle": true
        },
        "node_modules/@isaacs/testing-rebuild-bundle-parent": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/@isaacs/testing-rebuild-bundle-parent/-/testing-rebuild-bundle-parent-1.0.0.tgz",
          "integrity": "sha512-fa+mV2K+BDLzuxfI1LUWNmii92sylksrtaUITSO74ylcdWslvTFyr+REJfwdH5fDOxGqBH6kbVcDvWY8WqhgXg==",
          "dependencies": {
            "@isaacs/testing-rebuild-bundle-a": ""
          }
        }
      }
    }),
    "@isaacs": {
      "testing-rebuild-bundle-a": {
        "node_modules": {
          "@isaacs": {
            "testing-rebuild-bundle-b": {
              "package.json": JSON.stringify({
                "_from": "@isaacs/testing-rebuild-bundle-b@",
                "_id": "@isaacs/testing-rebuild-bundle-b@1.0.0",
                "_inBundle": false,
                "_integrity": "sha512-LfOAULGGyxgQrxiJtp0Q4aXZnFYmvbmqq9oJRl21KFZRzzDLxCebvIGVCiBspmO/xIoAPhPwulJyKV3CgbI6mQ==",
                "_location": "/@isaacs/testing-rebuild-bundle-b",
                "_phantomChildren": {},
                "_requested": {
                  "type": "tag",
                  "registry": true,
                  "raw": "@isaacs/testing-rebuild-bundle-b@",
                  "name": "@isaacs/testing-rebuild-bundle-b",
                  "escapedName": "@isaacs%2ftesting-rebuild-bundle-b",
                  "scope": "@isaacs",
                  "rawSpec": "",
                  "saveSpec": null,
                  "fetchSpec": "latest"
                },
                "_requiredBy": [
                  "/"
                ],
                "_resolved": "https://registry.npmjs.org/@isaacs/testing-rebuild-bundle-b/-/testing-rebuild-bundle-b-1.0.0.tgz",
                "_shasum": "8f0b63335cb1ff1602d9a33dee347dd54d8f19e6",
                "_spec": "@isaacs/testing-rebuild-bundle-b@",
                "_where": "/Users/isaacs/dev/npm/arborist/test/fixtures/testing-rebuild-bundle/a",
                "bundleDependencies": false,
                "deprecated": false,
                "name": "@isaacs/testing-rebuild-bundle-b",
                "scripts": {
                  "install": "node -e 'require(\"fs\").writeFileSync(\"cwd\", process.cwd())'"
                },
                "version": "1.0.0"
              })
            }
          }
        },
        "package.json": JSON.stringify({
          "name": "@isaacs/testing-rebuild-bundle-a",
          "version": "1.0.0",
          "dependencies": {
            "@isaacs/testing-rebuild-bundle-b": ""
          },
          "bundleDependencies": [
            "@isaacs/testing-rebuild-bundle-b"
          ]
        })
      },
      "testing-rebuild-bundle-parent": {
        "package.json": JSON.stringify({
          "name": "@isaacs/testing-rebuild-bundle-parent",
          "version": "1.0.0",
          "dependencies": {
            "@isaacs/testing-rebuild-bundle-a": ""
          }
        })
      }
    }
  },
  "package-lock.json": JSON.stringify({
    "name": "@isaacs/testing-rebuild-bundle-reified",
    "version": "1.0.0",
    "lockfileVersion": 2,
    "requires": true,
    "packages": {
      "": {
        "name": "@isaacs/testing-rebuild-bundle-reified",
        "version": "1.0.0",
        "dependencies": {
          "@isaacs/testing-rebuild-bundle-parent": ""
        }
      },
      "node_modules/@isaacs/testing-rebuild-bundle-a": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-rebuild-bundle-a/-/testing-rebuild-bundle-a-1.0.0.tgz",
        "integrity": "sha512-PlwlgYtgfN0xj0L0+nXryuWi2/G2w3AJ3vmg1pZMW1MazkmQddNkBexGKtZ7gY6kbROtwSAZb8Yc2gQc9VtFhQ==",
        "bundleDependencies": [
          "@isaacs/testing-rebuild-bundle-b"
        ],
        "dependencies": {
          "@isaacs/testing-rebuild-bundle-b": ""
        }
      },
      "node_modules/@isaacs/testing-rebuild-bundle-a/node_modules/@isaacs/testing-rebuild-bundle-b": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-rebuild-bundle-b/-/testing-rebuild-bundle-b-1.0.0.tgz",
        "integrity": "sha512-LfOAULGGyxgQrxiJtp0Q4aXZnFYmvbmqq9oJRl21KFZRzzDLxCebvIGVCiBspmO/xIoAPhPwulJyKV3CgbI6mQ==",
        "hasInstallScript": true,
        "inBundle": true
      },
      "node_modules/@isaacs/testing-rebuild-bundle-parent": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-rebuild-bundle-parent/-/testing-rebuild-bundle-parent-1.0.0.tgz",
        "integrity": "sha512-fa+mV2K+BDLzuxfI1LUWNmii92sylksrtaUITSO74ylcdWslvTFyr+REJfwdH5fDOxGqBH6kbVcDvWY8WqhgXg==",
        "dependencies": {
          "@isaacs/testing-rebuild-bundle-a": ""
        }
      }
    },
    "dependencies": {
      "@isaacs/testing-rebuild-bundle-a": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-rebuild-bundle-a/-/testing-rebuild-bundle-a-1.0.0.tgz",
        "integrity": "sha512-PlwlgYtgfN0xj0L0+nXryuWi2/G2w3AJ3vmg1pZMW1MazkmQddNkBexGKtZ7gY6kbROtwSAZb8Yc2gQc9VtFhQ==",
        "requires": {
          "@isaacs/testing-rebuild-bundle-b": ""
        },
        "dependencies": {
          "@isaacs/testing-rebuild-bundle-b": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/@isaacs/testing-rebuild-bundle-b/-/testing-rebuild-bundle-b-1.0.0.tgz",
            "integrity": "sha512-LfOAULGGyxgQrxiJtp0Q4aXZnFYmvbmqq9oJRl21KFZRzzDLxCebvIGVCiBspmO/xIoAPhPwulJyKV3CgbI6mQ==",
            "bundled": true
          }
        }
      },
      "@isaacs/testing-rebuild-bundle-parent": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-rebuild-bundle-parent/-/testing-rebuild-bundle-parent-1.0.0.tgz",
        "integrity": "sha512-fa+mV2K+BDLzuxfI1LUWNmii92sylksrtaUITSO74ylcdWslvTFyr+REJfwdH5fDOxGqBH6kbVcDvWY8WqhgXg==",
        "requires": {
          "@isaacs/testing-rebuild-bundle-a": ""
        }
      }
    }
  }),
  "package.json": JSON.stringify({
    "name": "@isaacs/testing-rebuild-bundle-reified",
    "version": "1.0.0",
    "dependencies": {
      "@isaacs/testing-rebuild-bundle-parent": ""
    },
    "files": []
  })
})
  const {utimesSync} = require('fs')
  const n = Date.now() + 10000
  const {resolve} = require('path')
  
  utimesSync(resolve(path, "node_modules/.package-lock.json"), new Date(n), new Date(n))
  return path
}

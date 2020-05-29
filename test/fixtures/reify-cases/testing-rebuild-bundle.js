// generated from test/fixtures/testing-rebuild-bundle
module.exports = t => {
  const path = t.testdir({
  "README.md": "- `root` depends on `parent`\n- `parent` bundles `a`\n- `a` depends on `b`\n- `b` has a build script\n\nShould get rebuilt if `rebuildBundle` is true, otherwise not.\n",
  "a": {
    "package-lock.json": JSON.stringify({
      "name": "@isaacs/testing-rebuild-bundle-a",
      "version": "1.0.0",
      "lockfileVersion": 1,
      "requires": true,
      "dependencies": {
        "@isaacs/testing-rebuild-bundle-b": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/@isaacs/testing-rebuild-bundle-b/-/testing-rebuild-bundle-b-1.0.0.tgz",
          "integrity": "sha512-LfOAULGGyxgQrxiJtp0Q4aXZnFYmvbmqq9oJRl21KFZRzzDLxCebvIGVCiBspmO/xIoAPhPwulJyKV3CgbI6mQ=="
        }
      }
    }),
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
  "b": {
    "package.json": JSON.stringify({
      "name": "@isaacs/testing-rebuild-bundle-b",
      "version": "1.0.0",
      "scripts": {
        "install": "node -e 'require(\"fs\").writeFileSync(\"cwd\", process.cwd())'"
      }
    })
  },
  "package-lock.json": JSON.stringify({
    "name": "@isaacs/testing-rebuild-bundle",
    "version": "1.0.0",
    "lockfileVersion": 1,
    "requires": true,
    "dependencies": {
      "@isaacs/testing-rebuild-bundle-a": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-rebuild-bundle-a/-/testing-rebuild-bundle-a-1.0.0.tgz",
        "integrity": "sha512-PlwlgYtgfN0xj0L0+nXryuWi2/G2w3AJ3vmg1pZMW1MazkmQddNkBexGKtZ7gY6kbROtwSAZb8Yc2gQc9VtFhQ==",
        "requires": {
          "@isaacs/testing-rebuild-bundle-b": "^1.0.0"
        },
        "dependencies": {
          "@isaacs/testing-rebuild-bundle-b": {
            "version": "1.0.0",
            "bundled": true
          }
        }
      },
      "@isaacs/testing-rebuild-bundle-parent": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-rebuild-bundle-parent/-/testing-rebuild-bundle-parent-1.0.0.tgz",
        "integrity": "sha512-fa+mV2K+BDLzuxfI1LUWNmii92sylksrtaUITSO74ylcdWslvTFyr+REJfwdH5fDOxGqBH6kbVcDvWY8WqhgXg==",
        "requires": {
          "@isaacs/testing-rebuild-bundle-a": "^1.0.0"
        }
      }
    }
  }),
  "package.json": JSON.stringify({
    "name": "@isaacs/testing-rebuild-bundle",
    "version": "1.0.0",
    "dependencies": {
      "@isaacs/testing-rebuild-bundle-parent": ""
    },
    "files": []
  }),
  "parent": {
    "package-lock.json": JSON.stringify({
      "name": "@isaacs/testing-rebuild-bundle-parent",
      "version": "1.0.0",
      "lockfileVersion": 1,
      "requires": true,
      "dependencies": {
        "@isaacs/testing-rebuild-bundle-a": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/@isaacs/testing-rebuild-bundle-a/-/testing-rebuild-bundle-a-1.0.0.tgz",
          "integrity": "sha512-PlwlgYtgfN0xj0L0+nXryuWi2/G2w3AJ3vmg1pZMW1MazkmQddNkBexGKtZ7gY6kbROtwSAZb8Yc2gQc9VtFhQ==",
          "requires": {
            "@isaacs/testing-rebuild-bundle-b": "^1.0.0"
          },
          "dependencies": {
            "@isaacs/testing-rebuild-bundle-b": {
              "version": "1.0.0",
              "bundled": true
            }
          }
        }
      }
    }),
    "package.json": JSON.stringify({
      "name": "@isaacs/testing-rebuild-bundle-parent",
      "version": "1.0.0",
      "dependencies": {
        "@isaacs/testing-rebuild-bundle-a": ""
      }
    })
  }
})
  return path
}

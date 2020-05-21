// generated from test/fixtures/testing-rebuild-script-env-flags
module.exports = t => ({
  "README.md": "Root has a dev dep on `devdep` and optional dep on `optdep`.\n\n`optdep` has a prod dep on `devopt`.\n\n`devdep` han an prod dep on `devopt`, and an optional dep on `opt-and-dev`.\n\ndevdep: optional false, dev true, devOpt false\ndevopt: optional false, dev false, devOpt true\noptdep: optional true, dev false, devOpt false\nopt-and-dev: optional true, dev true, devOpt false\n",
  "env.js": "const {writeFileSync} = require('fs')\nwriteFileSync('env', Object.keys(process.env).sort()\n  .filter(k => process.env[k] === '1' && /^npm_package_(dev|optional)/.test(k))\n  .join('\\n'))\n",
  "node_modules": {
    "devdep": {
      "package.json": JSON.stringify({
        "name": "devdep",
        "version": "1.0.0",
        "dependencies": {
          "devopt": ""
        },
        "optionalDependencies": {
          "opt-and-dev": ""
        },
        "scripts": {
          "postinstall": "node ../../env.js"
        }
      })
    },
    "devopt": {
      "package.json": JSON.stringify({
        "name": "devopt",
        "version": "1.0.0",
        "scripts": {
          "postinstall": "node ../../env.js"
        }
      })
    },
    "opt-and-dev": {
      "package.json": JSON.stringify({
        "name": "opt-and-dev",
        "version": "1.0.0",
        "scripts": {
          "postinstall": "node ../../env.js"
        }
      })
    },
    "optdep": {
      "package.json": JSON.stringify({
        "name": "optdep",
        "version": "1.0.0",
        "dependencies": {
          "devopt": ""
        },
        "scripts": {
          "postinstall": "node ../../env.js"
        }
      })
    }
  },
  "package-lock.json": JSON.stringify({
    "name": "testing-rebuild-script-env-flags",
    "lockfileVersion": 2,
    "requires": true,
    "packages": {
      "": {
        "dependencies": {
          "optdep": "1.0.0"
        },
        "devDependencies": {
          "devdep": "1.0.0"
        },
        "optionalDependencies": {
          "optdep": "1.0.0"
        }
      },
      "node_modules/devdep": {
        "version": "1.0.0",
        "dev": true,
        "hasInstallScript": true,
        "dependencies": {
          "devopt": "",
          "opt-and-dev": ""
        },
        "optionalDependencies": {
          "opt-and-dev": ""
        }
      },
      "node_modules/devopt": {
        "version": "1.0.0",
        "devOptional": true,
        "hasInstallScript": true
      },
      "node_modules/opt-and-dev": {
        "version": "1.0.0",
        "dev": true,
        "hasInstallScript": true,
        "optional": true
      },
      "node_modules/optdep": {
        "version": "1.0.0",
        "hasInstallScript": true,
        "optional": true,
        "dependencies": {
          "devopt": ""
        }
      }
    },
    "dependencies": {
      "devdep": {
        "version": "1.0.0",
        "dev": true,
        "requires": {
          "devopt": "",
          "opt-and-dev": ""
        }
      },
      "devopt": {
        "version": "1.0.0",
        "devOptional": true
      },
      "opt-and-dev": {
        "version": "1.0.0",
        "dev": true,
        "optional": true
      },
      "optdep": {
        "version": "1.0.0",
        "optional": true,
        "requires": {
          "devopt": ""
        }
      }
    }
  }),
  "package.json": JSON.stringify({
    "devDependencies": {
      "devdep": "1.0.0"
    },
    "optionalDependencies": {
      "optdep": "1.0.0"
    }
  })
})

/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/edge.js TAP > clobbered and detached 1`] = `
Edge {
  "dev": false,
  "error": "DETACHED",
  "from": null,
  "name": "aa",
  "optional": false,
  "peer": false,
  "spec": "",
  "to": null,
  "type": "prod",
  "valid": false,
}
`

exports[`test/edge.js TAP > clobbered edge 1`] = `
Edge {
  "dev": false,
  "error": "DETACHED",
  "from": null,
  "name": "b",
  "optional": false,
  "peer": true,
  "spec": "1.2.3",
  "to": null,
  "type": "peer",
  "valid": false,
}
`

exports[`test/edge.js TAP > clobbering edge 1`] = `
Edge {
  "dev": false,
  "error": null,
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "c" => Edge {},
      "b" => Edge {},
    },
    "isTop": false,
    "package": Object {
      "name": "a",
      "version": "1.2.3",
    },
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {},
      },
      "isTop": true,
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "parent": null,
      "resolve": Function resolve(n),
    },
    "resolve": Function resolve(n),
  },
  "name": "b",
  "optional": false,
  "peer": false,
  "spec": "*",
  "to": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {
      Edge {},
    },
    "edgesOut": Map {},
    "isTop": false,
    "package": Object {
      "name": "b",
      "version": "1.2.3",
    },
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {},
      },
      "isTop": true,
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "parent": null,
      "resolve": Function resolve(n),
    },
    "resolve": Function resolve(n),
  },
  "type": "prod",
  "valid": true,
}
`

exports[`test/edge.js TAP > invalid dependency 1`] = `
Edge {
  "dev": false,
  "error": "INVALID",
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "b" => Edge {},
    },
    "isTop": false,
    "package": Object {
      "name": "a",
      "version": "1.2.3",
    },
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {},
      },
      "isTop": true,
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "parent": null,
      "resolve": Function resolve(n),
    },
    "resolve": Function resolve(n),
  },
  "name": "b",
  "optional": true,
  "peer": false,
  "spec": "1.69.420-nice",
  "to": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {
      Edge {},
    },
    "edgesOut": Map {},
    "isTop": false,
    "package": Object {
      "name": "b",
      "version": "1.2.3",
    },
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {},
      },
      "isTop": true,
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "parent": null,
      "resolve": Function resolve(n),
    },
    "resolve": Function resolve(n),
  },
  "type": "optional",
  "valid": false,
}
`

exports[`test/edge.js TAP > missing optional dep is fine 1`] = `
Edge {
  "dev": false,
  "error": null,
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "missing" => Edge {},
    },
    "isTop": true,
    "package": Object {
      "name": "top",
      "version": "1.2.3",
    },
    "parent": null,
    "resolve": Function resolve(n),
  },
  "name": "missing",
  "optional": true,
  "peer": false,
  "spec": "",
  "to": null,
  "type": "optional",
  "valid": true,
}
`

exports[`test/edge.js TAP > new location, found dep 1`] = `
Edge {
  "dev": false,
  "error": null,
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "aa" => Edge {},
    },
    "isTop": false,
    "package": Object {
      "name": "bb",
      "version": "1.2.3",
    },
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "b" => Edge {},
      },
      "isTop": false,
      "package": Object {
        "name": "a",
        "version": "1.2.3",
      },
      "parent": Object {
        "addEdgeIn": Function addEdgeIn(edge),
        "addEdgeOut": Function addEdgeOut(edge),
        "edgesIn": Set {},
        "edgesOut": Map {
          "missing" => Edge {},
        },
        "isTop": true,
        "package": Object {
          "name": "top",
          "version": "1.2.3",
        },
        "parent": null,
        "resolve": Function resolve(n),
      },
      "resolve": Function resolve(n),
    },
    "resolve": Function resolve(n),
  },
  "name": "aa",
  "optional": false,
  "peer": false,
  "spec": "",
  "to": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {
      Edge {},
    },
    "edgesOut": Map {},
    "isTop": false,
    "package": Object {
      "name": "aa",
      "version": "1.2.3",
    },
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "b" => Edge {},
      },
      "isTop": false,
      "package": Object {
        "name": "a",
        "version": "1.2.3",
      },
      "parent": Object {
        "addEdgeIn": Function addEdgeIn(edge),
        "addEdgeOut": Function addEdgeOut(edge),
        "edgesIn": Set {},
        "edgesOut": Map {
          "missing" => Edge {},
        },
        "isTop": true,
        "package": Object {
          "name": "top",
          "version": "1.2.3",
        },
        "parent": null,
        "resolve": Function resolve(n),
      },
      "resolve": Function resolve(n),
    },
    "resolve": Function resolve(n),
  },
  "type": "prod",
  "valid": true,
}
`

exports[`test/edge.js TAP > new location, missing dep again 1`] = `
Edge {
  "dev": false,
  "error": "MISSING",
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "aa" => Edge {},
    },
    "isTop": false,
    "package": Object {
      "name": "bb",
      "version": "1.2.3",
    },
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {},
      },
      "isTop": true,
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "parent": null,
      "resolve": Function resolve(n),
    },
    "resolve": Function resolve(n),
  },
  "name": "aa",
  "optional": false,
  "peer": false,
  "spec": "",
  "to": null,
  "type": "prod",
  "valid": false,
}
`

exports[`test/edge.js TAP > old location, missing dep 1`] = `
Edge {
  "dev": false,
  "error": null,
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "aa" => Edge {},
    },
    "isTop": false,
    "package": Object {
      "name": "bb",
      "version": "1.2.3",
    },
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {
        Edge {},
      },
      "edgesOut": Map {},
      "isTop": false,
      "package": Object {
        "name": "b",
        "version": "1.2.3",
      },
      "parent": Object {
        "addEdgeIn": Function addEdgeIn(edge),
        "addEdgeOut": Function addEdgeOut(edge),
        "edgesIn": Set {},
        "edgesOut": Map {
          "missing" => Edge {},
        },
        "isTop": true,
        "package": Object {
          "name": "top",
          "version": "1.2.3",
        },
        "parent": null,
        "resolve": Function resolve(n),
      },
      "resolve": Function resolve(n),
    },
    "resolve": Function resolve(n),
  },
  "name": "aa",
  "optional": false,
  "peer": false,
  "spec": "",
  "to": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {
      Edge {},
    },
    "edgesOut": Map {},
    "isTop": false,
    "package": Object {
      "name": "aa",
      "version": "1.2.3",
    },
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "b" => Edge {},
      },
      "isTop": false,
      "package": Object {
        "name": "a",
        "version": "1.2.3",
      },
      "parent": Object {
        "addEdgeIn": Function addEdgeIn(edge),
        "addEdgeOut": Function addEdgeOut(edge),
        "edgesIn": Set {},
        "edgesOut": Map {
          "missing" => Edge {},
        },
        "isTop": true,
        "package": Object {
          "name": "top",
          "version": "1.2.3",
        },
        "parent": null,
        "resolve": Function resolve(n),
      },
      "resolve": Function resolve(n),
    },
    "resolve": Function resolve(n),
  },
  "type": "prod",
  "valid": true,
}
`

exports[`test/edge.js TAP > peer dep at top level, nesting is ok 1`] = `
Edge {
  "dev": false,
  "error": null,
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "a" => Edge {},
    },
    "isTop": true,
    "package": Object {
      "name": "top",
      "version": "1.2.3",
    },
    "parent": null,
    "resolve": Function resolve(n),
  },
  "name": "a",
  "optional": false,
  "peer": true,
  "spec": "1.2.3",
  "to": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {
      Edge {},
    },
    "edgesOut": Map {},
    "isTop": false,
    "package": Object {
      "name": "a",
      "version": "1.2.3",
    },
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "a" => Edge {},
      },
      "isTop": true,
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "parent": null,
      "resolve": Function resolve(n),
    },
    "resolve": Function resolve(n),
  },
  "type": "peer",
  "valid": true,
}
`

exports[`test/edge.js TAP > peer dep below top level, nesting not ok 1`] = `
Edge {
  "dev": false,
  "error": "PEER LOCAL",
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "aa" => Edge {},
    },
    "isTop": false,
    "package": Object {
      "name": "a",
      "version": "1.2.3",
    },
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {},
      },
      "isTop": true,
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "parent": null,
      "resolve": Function resolve(n),
    },
    "resolve": Function resolve(n),
  },
  "name": "aa",
  "optional": false,
  "peer": true,
  "spec": "1.2.3",
  "to": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {
      Edge {},
    },
    "edgesOut": Map {},
    "isTop": false,
    "package": Object {
      "name": "aa",
      "version": "1.2.3",
    },
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "aa" => Edge {},
      },
      "isTop": false,
      "package": Object {
        "name": "a",
        "version": "1.2.3",
      },
      "parent": Object {
        "addEdgeIn": Function addEdgeIn(edge),
        "addEdgeOut": Function addEdgeOut(edge),
        "edgesIn": Set {},
        "edgesOut": Map {
          "missing" => Edge {},
        },
        "isTop": true,
        "package": Object {
          "name": "top",
          "version": "1.2.3",
        },
        "parent": null,
        "resolve": Function resolve(n),
      },
      "resolve": Function resolve(n),
    },
    "resolve": Function resolve(n),
  },
  "type": "peer",
  "valid": false,
}
`

exports[`test/edge.js TAP > peer dep below top level, parallel ok 1`] = `
Edge {
  "dev": false,
  "error": null,
  "from": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {},
    "edgesOut": Map {
      "b" => Edge {},
    },
    "isTop": false,
    "package": Object {
      "name": "a",
      "version": "1.2.3",
    },
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {},
      },
      "isTop": true,
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "parent": null,
      "resolve": Function resolve(n),
    },
    "resolve": Function resolve(n),
  },
  "name": "b",
  "optional": false,
  "peer": true,
  "spec": "1.2.3",
  "to": Object {
    "addEdgeIn": Function addEdgeIn(edge),
    "addEdgeOut": Function addEdgeOut(edge),
    "edgesIn": Set {
      Edge {},
    },
    "edgesOut": Map {},
    "isTop": false,
    "package": Object {
      "name": "b",
      "version": "1.2.3",
    },
    "parent": Object {
      "addEdgeIn": Function addEdgeIn(edge),
      "addEdgeOut": Function addEdgeOut(edge),
      "edgesIn": Set {},
      "edgesOut": Map {
        "missing" => Edge {},
      },
      "isTop": true,
      "package": Object {
        "name": "top",
        "version": "1.2.3",
      },
      "parent": null,
      "resolve": Function resolve(n),
    },
    "resolve": Function resolve(n),
  },
  "type": "peer",
  "valid": true,
}
`

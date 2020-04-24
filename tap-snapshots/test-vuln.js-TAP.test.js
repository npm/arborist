/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/vuln.js TAP basic vulnerability object tests > json formatted after loading 1`] = `
{
  "name": "name",
  "severity": "critical",
  "via": [
    {
      "some": "advisory",
      "severity": "critical"
    },
    {
      "another": "advisory",
      "severity": "info"
    }
  ],
  "effects": [
    "another"
  ],
  "range": "1.0.0 - 3.0.0",
  "nodes": [
    ""
  ],
  "fixAvailable": {
    "isSemVerMajor": true
  }
}
`

exports[`test/vuln.js TAP basic vulnerability object tests > json formatted before packument 1`] = `
{
  "name": "name",
  "severity": "critical",
  "via": [
    {
      "some": "advisory",
      "severity": "critical"
    },
    {
      "another": "advisory",
      "severity": "info"
    }
  ],
  "effects": [],
  "range": "",
  "nodes": [],
  "fixAvailable": true
}
`

exports[`test/vuln.js TAP basic vulnerability object tests > json formatted metavuln 1`] = `
{
  "name": "another",
  "severity": "critical",
  "via": [
    "name"
  ],
  "effects": [],
  "range": "",
  "nodes": [],
  "fixAvailable": {
    "isSemVerMajor": true
  }
}
`

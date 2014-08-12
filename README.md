# read-package-tree

Read the contents of node_modules.

## USAGE

```javascript
var rpt = require ('read-package-tree')
rpt('/path/to/pkg/root', function (er, data) {
  // er means that something didn't work.
  // data is a structure like:
  // {
  //   package: <package.json data, or null>
  //   children: [ <more things like this, inside node_modules> ]
  //   path: <real path where package lives>
  // }
})
```

That's it.  It doesn't figure out if dependencies are met, it doesn't
mutate package.json data objects (beyond what
[read-package-json](http://npm.im/read-package-json) already does), it
doesn't limit its search to include/exclude `devDependencies`, or
anything else.

Just follows the links in the `node_modules` heirarchy and reads the
package.json files it finds therein.

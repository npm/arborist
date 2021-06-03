# Link class

A `Link` represents a symbolic link to a [`Node`](./node.md).  This class
does not do I/O.

Extends the [`Node`](./node.md) class.

## Properties

Only properties and methods distinct from Node are listed here.

### link.target

The Node that this is a symbolic link to.

Changing this value will update the `link.realpath`, and `node.linksIn` for
the new and previous targets.

### link.children

Always an empty `Map` object.

### link.fsChildren

Always an empty `Set` object.

### link.isLink

Always `true`.

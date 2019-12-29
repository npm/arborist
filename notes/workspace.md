# workspaces

A few ways to do this:

## Option A: link packages to root `node_modules`, install others

This is how yarn does it.  Probably better.

```
root
+-- app (uses a, b, c, i)
|   +-- node_modules
|       +-- i
+-- node_modules
|   +-- app => root/app
|   +-- a => root/pkgs/a
|   +-- b => root/pkgs/b
|   +-- c => root/pkgs/c
+-- pkgs
    +-- a (b, c, x)
    |   +-- node_modules
    |       +-- x
    +-- b (a, c, y)
    |   +-- node_modules
    |       +-- y
    +-- c (a, b, z)
        +-- node_modules
            +-- z
```

## Option B: Link packages into one another

Kind of a mess.  Not as good, but should still be supported, because that's
what pre-arborist `npm link ../foo` would generate.

```
root
+-- pkgs
    +-- app
    |   +-- node_modules
    |       +-- a => pkgs/a
    |       +-- b => pkgs/b
    |       +-- c => pkgs/c
    |       +-- i
    +-- a (b, c, x)
    |   +-- node_modules
    |       +-- x
    |       +-- b => pkgs/b
    |       +-- c => pkgs/c
    +-- b (a, c, y)
    |   +-- node_modules
    |       +-- y
    |       +-- a => pkgs/a
    |       +-- c => pkgs/c
    +-- c (a, b, z)
        +-- node_modules
            +-- z
            +-- a => pkgs/a
            +-- b => pkgs/b
```

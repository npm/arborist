# handling optional dependencies failures

If optional dependencies fail to install, we should remove the optional dep
from the disk, but keep them included in the lockfile.  If they are
unresolveable, then they should be removed from the `idealTree`.

Types of failure:

1. Optional dependency metadata failure (404, etc.) `optional-dep-missing`
2. Optional dependency tgz download failure `optional-dep-tgz-missing`
3. Optional dependency version not satisfiable `optional-dep-enotarget`
4. Optional dependency build failure `optional-dep-postinstall-fail`
5. Optional dependency depends on any failure above
      1. `optional-metadep-missing`
      2. `optional-metadep-tgz-missing`
      3. `optional-metadep-enotarget`
      4. `optional-metadep-postinstall-fail`

These failures can occur in one of three places:

1. buildIdealTree (unresolveable or failed metadata optional dep/meta-dep)

2. reifyNode (failure to download/unpack tgz)

3. lifecycle scripts

## During `buildIdealTree`

The only relevant way that an optional dep can fail while building the
ideal tree is:

- 404 fetching package metadata
- enotarget resolving spec against packument

(Can also fail to _place_ the dep due to an unresolvable conflict, but in
that case, it should fail the install, since the optional dependency will
be found, but in the incorrect specification.)

Both of these occur in the `pacote.manifest()` call in `_nodeFromSpec`.
The challenge here is that we do not know, at that point, whether the
failing module is _going_ to be an optional dependency when the tree is
fully resolved.  Looking at the spec or parent triggering its load is not
sufficient, because:

1. It may be an optional dependency of the node causing its inclusion, but
   a subsequent dep will rely on it as a production dependency.
2. It may be a production dependency or meta-dep of an optional dependency.

Thus, we need to load the entirety of the tree, to the greatest extent
possible, then set all the appropriate dep flags, _and then_ make sure that
any load failures were for optional nodes, and prune their optional sets
from the tree.

Optional dep failures in `buildIdealTree` are reflected in the
package-lock.json, as they are not platform-specific.

## During `reify`

Reification errors can occur when:

- tarball download/extraction (ie, `pacote.extract`) fails
- lifecycle scripts fail

These failures should _not_ be reflected in the idealTree, but _should_ be
reflected in the actualTree.

After taking the diff, get the list of modules to remove.

Also add the retired folders to the trash list when they're ready to be
removed.

If a dep fails, and it has `optional: true`, then gather the set of all
modules within the optional section of the tree.  (That is, call
`optionalSet` starting from the failing node.)  Add the nodes in the
optional set to the trash list. 

Before `_removeRetiredAndDeletedNodes`, clone (don't move or reference) the
ideal tree to the actual tree.  Then remove those affected nodes from the
actual tree.

## Problematic edge case

Given the dependency graph of:

```
root -> (a@1, b@1)
b@1 -> (OPT a@2)
```

If `a@1` succeeds, but `a@2` fails (whether due to enotarget, 404, or
build-time failure), the tree will resolve to:

```
root
+-- a (1)
+-- b (1)
```

Thus, `a@2` dep will be missing from the tree, but `b` will resolve its
dependency to `node_modules/a` which is version 1, and thus a violation of
the contract that optionalDependencies are either missing or valid.

Some potential solutions:

1. Leave it.  It's probably rare enough that it's not an issue, and since
   it would always have been an issue for npm and yarn, it's probably fine
   to leave it as one for now.
2. Go all the way to a pnpm style symlink tree reification, so that nodes
   only have access to their direct dependencies anyway.  This is probably
   not a workable solution in the short term (for npm 7).
3. Place a dummy module in place that throws a convincing "module not
   found" error when loaded.

If it turns out that 1 is not satisfactory at some point in the future, we
can explore option 2 or 3.

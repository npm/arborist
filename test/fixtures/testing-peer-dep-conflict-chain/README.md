A chain of peer deps.  Installing v1 of any of them requires v1 of all of
them.  v2 of any requires v2 of all.  No v1 can coexist with any v2.

`a-e`: each has a peerDep on the next one in the loop.  `a -> b`, `b -> c`,
and so on.

`i-m`: each has a regular dep on the corresponding item in the loop.  `i ->
a`, `j -> b`, and so on.

`ii - mm`: each has a regular dep on the `i - m` module.  `ii -> i`, `jj ->
j`, etc.

`v-z`: each has a peerDep on the corresponding item in the loop.  `v ->
a`, `w -> b`, and so on.

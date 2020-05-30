```
a@1 -> b@1
a@2 -> b@2
b@1 -> a@2
b@2 -> a@1
```

Resulting nesting goes:

```
+-- a@1
+-- b@1
    +-- a@2
    +-- b@2
        +-- a@1
        +-- b@1
            ... and so on
```

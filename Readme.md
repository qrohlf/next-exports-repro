# NextJS package.json "exports" issue repro:

### To demonstrate that this Next's module resolution works as expected when the `valid-cjs-module` uses the package.json "main" field to define its export:

```sh
git clone https://github.com/qrohlf/next-exports-repro.git
cd next-exports-repro
nvm use # => "Now using node v19.x"
node demonstrate-cjs-resolution.js
# gives good, expected output
node demonstrate-broken-resolution.js
# gives bad, unexpected output despite the package files being identical!
```

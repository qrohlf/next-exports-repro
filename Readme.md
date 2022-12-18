# Node package.json "exports" issue repro:

While Node's behavior around package.json files that only define a `main` is unchanged by whether or not the module is a relative import or a `node_modules` import, the behavior around the `exports` field changes depending on where the module is located!

```sh
git clone https://github.com/qrohlf/next-exports-repro.git
cd next-exports-repro
nvm use # => "Now using node v19.x"
node demonstrate-cjs-resolution.js
# gives good, expected output
node demonstrate-broken-resolution.js
# gives bad, unexpected output despite the package files being identical!
```

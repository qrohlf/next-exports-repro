// ./valid-cjs-module is *identical* to ./node_modules/valid-cjs-module, but
// it gets treated completely differently as a result of not being a part of
// the node_modules directory!
const helloWorld = require('./valid-cjs-module')
console.log(helloWorld) // => "WRONG EXPORT"

// this will throw "Error: Cannot find module './valid-cjs-module/subpath'"
const subpath = require('./valid-cjs-module/subpath')
console.log(subpath)

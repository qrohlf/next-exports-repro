// demonstrate that the valid-cjs-module works as expected when it's nested within node_modules:
const helloWorld = require('valid-cjs-module')
const subpath = require('valid-cjs-module/subpath')
console.log(helloWorld)
console.log(subpath)

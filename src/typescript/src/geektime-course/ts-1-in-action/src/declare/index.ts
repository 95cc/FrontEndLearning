import $ from 'jquery'

$('.app').css('color', 'blue')

globalLib({ x: 1 })
console.log(globalLib.version)
globalLib.doSomething()
console.log(globalLib)

console.log('------')

import moduleLib from './libs/module-lib'
moduleLib.doSomething()
console.log(moduleLib.version)
moduleLib({ a: 1 })

console.log('------')

// 通过index.html里直接引入umd-lib.js。并打开tsconfig.json中allowUmdGlobalAccess: true
// import umdLib from './libs/umd-lib'
console.log(umdLib.version)
umdLib.doSomething()

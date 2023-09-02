let c1 = require('./a.node')
let c2 = require('./b.node')
let c3 = require('../es6/a')
import c4 = require('../es6/d')
// 和上面的等价
// This module is declared with 'export =', and can only be used with a default import when using the 'esModuleInterop' flag.
// import c5 from '../es6/d' // 如果 tsconfig.json中 esModuleInterop设置为false，这个将不会允许

console.log(c1)
console.log(c2)

console.log(c3)
c3.default()

console.log(c4)
c4()

// console.log(c5)
// c5()

// esModuleInterop作用
/*
背景：很多库使用了 CommonJS 的导出方式，如 module.exports=a，这样会导致使用ES的方式导入时失败，如 import a from 'X'。因为ES会默认访问 a 的 default 属性。TypeScript 为了兼容，引入了 esModuleInterop 选项，在编辑时自动添加default属性。

用法：当 module 指定为 commonjs 时，设置 esModuleInterop 为 true 即可。
*/

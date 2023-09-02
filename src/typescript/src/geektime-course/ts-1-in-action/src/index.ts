import './demo'
import './es6/c'
import './declare'

let hello: string = 'Hello TypeScript'
document.querySelectorAll('.app')[0].innerHTML = hello

// 给外部模块添加方法
// 给moment自定义方法
import m from 'moment'
declare module 'moment' {
  export function myFunction(): void
}
m.myFunction = () => {}

// 给全局变量添加方法
declare global {
  namespace globalLib {
    function doAnything(): void
  }
}

globalLib.doAnything = () => {
  console.log('globalLib doAnything.')
}

globalLib.doAnything()

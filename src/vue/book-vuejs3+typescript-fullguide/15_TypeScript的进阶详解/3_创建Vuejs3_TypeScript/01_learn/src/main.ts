import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// 1. declare声明变量
declare const appName: string
declare const appVersion: string
console.log(appName)
console.log(appVersion)
// 2. declare声明函数
declare function getAppName(): string
console.log(getAppName())
// 3. declare声明类
declare class Person {
  name: string
  age: number

  constructor(name: string, age: number)
}

const p = new Person('why', 18)
console.log(p)
// 4. declare声明文件
// // 声明导入 .jpg、.jpeg、.png等文件
// declare module '*.jpg'
// declare module '*.jpeg'
// declare module '*.png'
// declare module '*.svg'
// declare module '*.gif'
import nhltImg from '../public/nhlt.png'
console.log(nhltImg)
// 5. declare声明模块
// 报错: Cannot find module 'locash' or its corresponding type declarations.ts(2307)
import lodash from 'locash'
// 8. declare声明命名空间
declare namespace $ {
  function ajax(settings: any): void
}

$.ajax({
  url: 'https://httpbin.org/get',
  success: (res: any) => {
    console.log(res)
  },
})

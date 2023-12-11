/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 4. declare声明文件
// 声明导入 .jpg、.jpeg、.png等文件
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg'
declare module '*.gif'

// 7. declare声明模块
declare module 'locash' {
  export function join(args: ang[]): any
}

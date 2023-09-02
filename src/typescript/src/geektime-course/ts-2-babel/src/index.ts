class A {
  a: number = 1
}

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
let n = { x, y, ...z }

// 使用 tsc --watch，进行类型检查
let a = 1
// a = '1'

// 课程中提到的4种ts语法在babel中无法编译
// 1. 命名空间（已支持）
namespace Test {
  export const a = 1
}
// 2. 类型断言写法（已支持）
let s = {} as A
s.a = 1

// 3. 常量枚举（已支持）
const enum E {
  a,
  b,
}

// 4. 默认导出（已支持）
export = E

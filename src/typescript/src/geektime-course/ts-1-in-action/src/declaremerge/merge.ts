// 接口的合并
interface A {
  x: number
  // y: string // 和下面的定义不兼容
  foo(bar: number): number // 5
  foo(bar: 'a'): number // 2
}

interface A {
  y: number
  foo(bar: string): string // 3
  foo(bar: number[]): number[] // 4
  foo(bar: 'b'): number // 1
}

let a1: A = {
  x: 1,
  y: 2,
  foo(bar: any) {
    return bar
  },
}

// 命名空间和函数合并
function Lib() {
  console.log('Lib')
}
namespace Lib {
  export let version = '1.0'
}
console.log(Lib.version)
Lib()

// 命名空间和类合并
class C {}
namespace C {
  export let state = 1
}
console.log(C.state)

// 命名空间和枚举合并（无先后顺序）
enum Color {
  Red,
  Yellow,
  Blue,
}
namespace Color {
  export function mix() {
    console.log('mix')
  }
}
Color.mix()

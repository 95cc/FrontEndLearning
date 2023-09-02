/// <reference path="./a.ts" />

namespace Shape {
  export function square(x: number) {
    return x * x
  }
}

console.log(Shape.circle(1))
console.log(Shape.square(1))

// 命名空间中的方法别名
import myCircle = Shape.circle

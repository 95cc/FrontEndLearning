// https://www.typescriptlang.org/play
// 基本类型
{
  // 原始类型
  {
    let bool: boolean = true
    let num: number = 1
    let str: string = 'abc'
    // console.log(bool, num, str)
  }

  // 数组
  {
    let arr1: number[] = [1, 2]
    let arr2: Array<number> = [1, 2]
    let arr3: Array<number | string> = [1, 2, '3']
  }

  // 元组
  {
    let tuple: [number, string] = [1, '2']
  }

  // 函数
  {
    let add: (x: number, y: number) => number
    add = (a, b) => a + b
    // console.log(add(1, 2))
  }

  // 对象
  {
    let obj: { x: number; y: number }
    obj = { x: 1, y: 2 }
  }

  // symbol
  {
    let s1: symbol = Symbol()
    let s2 = Symbol()
    // console.log(s1 === s2)
  }

  // undefined, null
  {
    let und: undefined = undefined
    let nul: null = null
  }

  // void
  {
    let noReturn = () => {}
  }

  // any
  {
    let a
  }

  // never
  {
    let error = () => {
      throw new Error('error')
    }
    let endless = () => {
      while (true) {}
    }
  }
}

// 枚举类型
{
  // 数字枚举
  {
    /*
      "use strict";
      var Role;
      (function (Role) {
          Role[Role["Reporter"] = 0] = "Reporter";
          Role[Role["Developer"] = 1] = "Developer";
          Role[Role["Maintainer"] = 2] = "Maintainer";
          Role[Role["Owner"] = 3] = "Owner";
          Role[Role["Guest"] = 4] = "Guest";
      })(Role || (Role = {}));
     */
    enum Role {
      Reporter,
      Developer,
      Maintainer,
      Owner,
      Guest,
    }
    // console.log(Role, Role.Reporter, Role.Developer)
  }

  // 字符串枚举
  {
    enum Message {
      Success = '成功',
      Failure = '失败',
    }
  }

  // 异构枚举
  {
    enum Answer {
      N,
      Y = 'yes',
    }
  }

  // 枚举成员
  // 枚举类型分为2类：
  // 1. const number（包括3种情况：没有初始值的情况；对已有枚举成员的引用、常量表达式）、
  // 2. computed number (需要被计算的成员，程序执行阶段计算)
  {
    enum Char {
      a, // 没有初始值的情况
      b = Char.a, // 对已有枚举成员的引用
      c = 1 + 2, // 常量表达式
      d = Math.random(),
      e = '123'.length,
      // 在computed number的后面，一定要赋初始值
      f = 3,
    }
    // console.log(Char)
  }

  // 常量枚举（编译后会被移除）
  // 当不需要对象，而是需要值的时候，就可以使用常量枚举
  {
    const enum Month {
      Jan,
      Feb,
      Mar,
    }
    let month = [Month.Jan, Month.Feb, Month.Mar]
    // 编译后
    // "use strict";
    // let month = [0 /* Month.Jan */, 1 /* Month.Feb */, 2 /* Month.Mar */];
  }

  // 枚举类型
  {
    enum E {
      a,
      b,
    }
    enum F {
      a = 1,
      b = 1,
    }
    enum G {
      a = 'apple',
      b = 'banana',
    }

    let e: E = E.a
    let f: F = F.a

    let e1: E.a = E.a
  }
}

// 接口
{
  // 对象类型接口
  {
    interface List {
      readonly id: number
      name: string
      age?: string
    }
    interface Result {
      data: List[]
    }

    function render(result: Result) {
      result.data.forEach((value) => {
        // console.log(value.name)
        if (value.age) {
          // console.log(value.age)
        }
      })
    }

    let result = {
      data: [
        {
          id: 1,
          name: '1',
          age: 12,
        },
        { id: 2, name: '2' },
      ],
    } as Result

    render(result)

    interface StringArray {
      [index: number]: string
    }
    let chars: StringArray = ['a', 'b']

    // 数字索引签名的返回值一定要是字符串索引签名的子类型（⚠️最新的ts好像不支持字符串索引签名了）
    interface Names {
      // [x: string]: string
      [z: number]: number
    }
    let ns: Names = [1, 2]
  }

  // 函数类型接口
  {
    interface Add {
      (x: number, y: number): number
    }

    type Add1 = (x: number, y: number) => number

    let add: Add = (a, b) => a + b
    let add1: Add1 = (a, b) => a + b

    interface Lib {
      (): void
      versioin: string
      doSomething(): void
    }

    let getLib = () => {
      let lib: Lib = (() => {}) as Lib
      lib.versioin = '1'
      lib.doSomething = () => {}
      return lib
    }

    let lib1 = getLib()
    let lib2 = getLib()
  }

  // 函数定义
  {
    function add1(x: number, y: number) {
      return x + y
    }
    let add2: (x: number, y: number) => number
    type add3 = (x: number, y: number) => number
    interface add4 {
      (x: number, y: number): number
    }

    // 报错：个数必须一致
    // add1(1, 2, 3)

    // 可选参数必须在必选参数之后
    function add5(x: number, y?: number) {
      return y ? x + y : x
    }

    function add6(x: number, y = 0, z: number, q = 1) {
      console.log(x, y, z, q)
      return x + y + z + q
    }
    // add6(1, undefined, 3)

    function add7(x: number, ...rest: number[]) {
      return x + rest.reduce((pre, cur) => pre + cur)
    }
    // console.log(add7(1, 2, 3, 4, 5))

    // 函数重载
    function add8(...rest: number[]): number
    function add8(...rest: string[]): string
    function add8(...rest: any[]): any {
      console.log(typeof rest)

      if (typeof rest[0] === 'number') {
        return rest.reduce((pre, cur) => pre + cur)
      }
      if (typeof rest[0] === 'string') {
        return rest.join('')
      }
    }

    // console.log(add8(1, 2, 3))
    // console.log(add8('a', 'b', 'c'))
  }
}

// 类（继承和成员修饰符）
{
  class Dog {
    constructor(name: string) {
      this.name = name
    }

    name: string
    run() {}
    static food: string = 'bones'
    readonly legs: number = 4
    private pri() {}
    protected pro() {}
  }

  class Husky extends Dog {
    constructor(
      name: string,
      color: string,
      public instanceP1: string
    ) {
      super(name)
      this.color = color
      this.instanceP1 = instanceP1
    }

    color: string

    testPro() {
      this.pro()
    }
  }
}

// 类（抽象类（只能被继承不能被实例化）与多态）
{
  abstract class Animal {
    abstract run(): void
  }

  // Cannot create an instance of an abstract class.
  // let animal = new Animal()

  class Dog extends Animal {
    constructor(public name: string) {
      super()
      this.name = name
    }

    run() {
      console.log('dog run')
    }
  }

  class Cat extends Animal {
    run() {
      console.log('cat run')
    }
  }

  let animals: Animal[] = [new Dog('wangcai'), new Cat()]
  animals.forEach((value) => {
    // value.run()
  })
}

// 类与接口的关系
{
}

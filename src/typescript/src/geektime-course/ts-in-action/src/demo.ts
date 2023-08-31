// https://www.typescriptlang.org/play

/// --- 基础篇
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
/**
 * 1. 接口和类直接可以相互继承
 * 2. 类之间也可以相互继承，实现方法和属性的复用
 * 3. 接口可以通过类来实现（但是接口只能约束类的公有成员）
 * 4. 接口可以抽离类的成员（包括公有成员、私有成员、受保护成员）
 */
{
  interface Human {
    name: string
    eat(): void
  }

  class Asian implements Human {
    constructor(name: string) {
      this.name = name
    }

    name: string
    eat() {}
  }

  // 接口继承
  interface Man extends Human {
    run(): void
  }

  interface Child {
    cry(): void
  }

  interface Boy extends Man, Child {}

  let boy: Boy = {
    name: '',
    run() {},
    cry() {},
    eat() {},
  }

  // 接口继承类
  class Auto {
    state = 1
    // private state2 = 2
  }
  interface AutoInterface extends Auto {}

  class C implements AutoInterface {
    state = 1
  }

  class Bus extends Auto implements AutoInterface {}
}

// 泛型: 不预先确定的数据类型，具体的类型在使用的时候才能确定
// 好处
// 1. 函数和类可以轻松地支持多种类型，增强程序的扩展性
// 2. 不必写多条函数重载，冗长的联合类型声明，增强代码可读性
// 3. 灵活控制类型之间的约束
{
  // 泛型函数与泛型接口
  {
    function log<T>(value: T): T {
      console.log(value)
      return value
    }
    // log<string>('sdfds')
    // log<number>(1)

    type Log = <T>(value: T) => T
    let myLog: Log = log

    interface Log1<T = string> {
      (value: T): T
    }
    let mylog1: Log1<number> = log
    // mylog1(3)
    let mylog2: Log1 = log
    // mylog2('string')
  }

  // 泛型类与泛型约束
  {
    class Log<T> {
      run(value: T) {
        console.log(value)
        return value
      }
    }

    let log1 = new Log<number>()
    // log1.run(1)
    let log2 = new Log()
    // log2.run({ a: 1 })

    interface Length {
      length: number
    }
    function logF<T extends Length>(value: T) {
      console.log(value, value.length)
      return value
    }
    // logF<string>('sdafsdf')
  }
}

/*
  类型检查机制
  TypeScript编译器在做类型检查时，所秉承的一些原则，以及表现出的一些行为
  作用：辅助开发，提高开发效率
  * 类型推断
  * 类型兼容性
  * 类型保护
 */
{
  // 类型推断
  {
    let a = 1 // let a: number
    let b = [1] // let b: number[]
    let c = (x = 1) => x + 1 // let c: (x?: number) => number
  }

  // 类型兼容性: x（目标类型） = y（源类型）。代表x兼容y
  // 口诀：
  // 1. 结构之间兼容：成员少的兼容成员多的
  // 2. 函数之间兼容：参数多的兼容参数少的
  {
    let x: string = 'a'
    let y: string | number = 'b'
    x = y
    // 接口兼容性
    interface X {
      a: any
      b: any
    }
    interface Y {
      a: any
      b: any
      c: any
    }
    let x1: X = { a: 1, b: 2 }
    let y1: Y = { a: 1, b: 2, c: 3 }
    // 源类型必须具备目标类型的必要属性
    x1 = y1
    // 接口之间相互兼容的时候，成员少的兼容成员多的

    // 函数兼容性
    type Handler = (a: number, b: number) => void
    function hof(handler: Handler) {
      return handler
    }
    // 函数兼容的条件1. 目标函数的参数个数 >= 源函数的参数格式
    let h1 = hof((a: number) => {})
    /*
    Argument of type '(a: number, b: number, c: number) => void' is not assignable to parameter of type 'Handler'.
    Target signature provides too few arguments. Expected 3 or more, but got 2.
  */
    // let h2 = hof((a: number, b: number, c: number) => {})

    // 可选参数和剩余参数
    // 固定参数可以兼容可选参数和剩余参数
    let a1 = (p1: number, p2: number) => {}
    let b1 = (p1?: number, p2?: number) => {}
    let c1 = (...args: number[]) => {}
    a1 = b1
    a1 = c1
    // 可选参数不兼容固定参数和剩余参数
    // b1 = a1
    // b1 = c1

    // 剩余参数可以兼容固定参数和可选参数
    c1 = a1
    c1 = b1

    // 函数兼容的条件2. 参数类型必须要匹配
    // hof((a: string) => {})

    interface Point3D {
      x: number
      y: number
      z: number
    }
    interface Point2D {
      x: number
      y: number
    }
    let p3d = (point: Point3D) => {}
    let p2d = (point: Point2D) => {}
    // p2d = p3d
    // 成员个数多的要兼容成员个数少的
    p3d = p2d

    // 函数兼容的条件3: 返回值类型
    // 多 赋 少
    let f = () => {
      return {
        name: 'a',
      }
    }
    let g = () => {
      return { name: 'a', age: '18' }
    }
    f = g
    // g = f

    // 函数重载
    function overload(a: number, b: number): number
    function overload(a: string, b: string): string
    function overload(a: any, b: any): any {}

    // 枚举兼容性
    enum Fruit {
      Apple,
      Banana,
    }
    enum Color {
      Red,
      Yellow,
    }
    // let fruit: Fruit.Apple = 3 // Type '3' is not assignable to type 'Fruit.Apple'.
    let no: number = Fruit.Apple
    // let color: Color.Red = Fruit.Apple Type 'Fruit.Apple' is not assignable to type 'Color.Red'.

    // 类兼容性
    class A {
      constructor(p: number, q: number) {}
      id: number = 1
    }
    class B {
      constructor(p: number) {}
      id: number = 2
    }
    let objA = new A(1, 2)
    let objB = new B(1)
    objA = objB
    objB = objA

    class A1 {
      constructor(p: number, q: number) {}
      id: number = 1
      private t1 = 1
    }
    class B1 {
      constructor(p: number) {}
      id: number = 2
      private t1 = 2
    }
    let objA1 = new A1(1, 2)
    let objB1 = new B1(1)
    // Type 'B1' is not assignable to type 'A1'.
    // Types have separate declarations of a private property 't1'.
    // objA1 = objB1
    // Type 'A1' is not assignable to type 'B1'.
    // Types have separate declarations of a private property 't1'.
    // objB1 = objA1

    class C1 extends A1 {}
    let objc1 = new C1(1, 2)
    objc1 = objA1
    objA1 = objc1

    // 泛型兼容性
    interface Empty<T> {}
    let e1: Empty<string> = {}
    let e2: Empty<number> = {}
    e1 = e2
    e2 = e1

    interface Empty1<T> {
      value: T
    }
    let e3: Empty1<string> = { value: '1' }
    let e4: Empty1<number> = { value: 1 }
    /**
     * Type 'Empty1<number>' is not assignable to type 'Empty1<string>'.
     * Type 'number' is not assignable to type 'string'.
     */
    // e3 = e4
    /**
     * Type 'Empty1<string>' is not assignable to type 'Empty1<number>'.
     * Type 'string' is not assignable to type 'number'.
     */
    // e4 = e3

    let log1 = <T>(x: T): T => {
      return x
    }
    let log2 = <U>(x: U): U => {
      return x
    }
    log1 = log2
    log2 = log1
  }

  // 类型保护
  // TypeScript能够在特定的区块中保证变量属于某种确定的类型
  // 可以在此区块中放心地引用此类型的属性，或者调用此类型的方法
  {
    enum Type {
      Strong,
      Weak,
    }

    class Java {
      helloJava() {
        console.log('hello java')
      }
      java: string = 'java'
    }

    class JavaScript {
      helloJavaScript() {
        console.log('hello javascript')
      }
      javascript: string = 'javascript'
    }

    function getLanguage(type: Type) {
      let lang: Java | JavaScript =
        type === Type.Strong ? new Java() : new JavaScript()

      // instanceof
      if (lang instanceof Java) {
        lang.helloJava()
      } else {
        lang.helloJavaScript()
      }

      // in
      if ('java' in lang) {
        lang.helloJava()
      } else {
        lang.helloJavaScript()
      }

      // typeof
      let x: string | number = 1
      if (typeof x === 'string') {
        console.log('string')
      } else {
        console.log('number')
      }

      // isX
      function isJava(pLang: Java | JavaScript): pLang is Java {
        return (pLang as Java).helloJava !== undefined
      }

      if (isJava(lang)) {
        lang.helloJava()
      } else {
        lang.helloJavaScript()
      }
    }
  }
}

// 高级类型
{
  // 1. 交叉类型（并集）
  {
    interface DogInterface {
      run(): void
    }
    interface CatInterface {
      jump(): void
    }
    let pet: DogInterface & CatInterface = {
      run() {},
      jump() {},
    }
  }

  // 2. 联合类型
  {
    let a: number | string = 1
    a = '1'
    let b: 'a' | 'b' = 'a'
    let c: 1 | 2 | 3 = 1

    interface DogInterface {
      run(): void
    }
    interface CatInterface {
      jump(): void
    }

    class Dog implements DogInterface {
      run() {}
      eat() {}
    }
    class Cat implements CatInterface {
      jump(): void {}
      eat() {}
    }
    enum Master {
      Boy,
      Girl,
    }
    function getPet(master: Master) {
      let pet = master == Master.Boy ? new Dog() : new Cat()
      pet.eat()
      return pet
    }

    interface Square {
      kind: 'square'
      size: number
    }
    interface Rectangle {
      kind: 'rectangle'
      width: number
      height: number
    }
    type Shape = Square | Rectangle
    function area(s: Shape) {
      switch (s.kind) {
        case 'square':
          return s.size * s.size
        case 'rectangle':
          return s.width * s.height
      }
    }
  }

  // 3. 索引类型
  {
    let obj = {
      a: 1,
      b: 2,
      c: 3,
    }
    function getValues(obj: any, keys: string[]) {
      return keys.map((key) => obj[key])
    }
    // [1, 2, 3, undefined]
    // console.log(getValues(obj, ['a', 'b', 'c', 'd']))

    // keyof T
    interface Obj {
      a: number
      b: string
    }
    let key: keyof Obj
    // T[K]
    let value: Obj['a']

    // T extends U
    function newGetValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
      return keys.map((key) => obj[key])
    }
    let obj2: Obj = {
      a: 1,
      b: '2',
    }
    // console.log(newGetValues(obj2, ['a', 'b']))
  }

  // 4. 映射类型
  {
    interface Obj {
      a: string
      b: number
      c: boolean
    }
    type ReadonlyObj = Readonly<Obj>
    type PartialObj = Partial<Obj>
    type PickObj = Pick<Obj, 'a' | 'b'>
    type RecordObj = Record<'x' | 'y', Obj>
  }

  // 5. 条件类型
  {
    // T extends U ? X : Y

    type TypeName<T> = T extends string
      ? 'string'
      : T extends number
      ? 'number'
      : T extends boolean
      ? 'boolean'
      : T extends undefined
      ? 'undefined'
      : T extends Function
      ? 'function'
      : 'object'

    // type T1 = "string"
    type T1 = TypeName<string>
    // type T2 = "object"
    type T2 = TypeName<string[]>
    // type T3 = "string" | "object"
    type T3 = TypeName<string | string[]>

    type Diff<T, U> = T extends U ? never : T
    // type T4 = "b" | "c"
    type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>
    // 上面Diff进行拆解
    // Diff<'a', 'a' | 'e'> | Diff<'b', 'a' | 'e'> | Diff<'c', 'a' | 'e'>
    // never | 'b' | 'c'

    type NotNull<T> = Diff<T, undefined | null>
    // type T5 = string | number
    type T5 = NotNull<string | number | undefined | null>

    // Exclude<T, U>
    // type T6 = "a"
    type T6 = Exclude<'a' | 'b', 'b'>

    // NonNullable<T>
    // type T7 = string
    type T7 = NonNullable<string | undefined | null>

    // Extract<T, U>
    // type T8 = "a"
    type T8 = Extract<'a' | 'b', 'a' | 'c'>

    // ReturnType<T>
    // type T9 = string
    type T9 = ReturnType<() => string>
  }
}

/// --- 工程篇
{
  // 1. 使用命名空间 查看 src/namespace
  // 2. 理解声明合并 查看 src/declaremerge
  // 3. 如何编写声明文件
}

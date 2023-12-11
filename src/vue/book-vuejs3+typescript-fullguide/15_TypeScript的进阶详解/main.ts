// 1. ------ TypeScript类的使用 ------
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log('person eating')
  }
}
const p1 = new Person('why', 18)
console.log(p1.name, p1.age)
p1.eating()

class Student extends Person {
  sno: number

  constructor(name: string, age: number, sno: number) {
    super(name, age)

    this.sno = sno
  }

  eating(): void {
    console.log('student eating')
    super.eating()
  }
}
new Student('why1', 18, 100).eating()

// ------ 2.TypeScript接口的使用 ------
// 2.1. 接口的声明
type IInfoType1 = {
  readonly name: string
  age?: number
  height: number
}
interface IInfoType2 {
  readonly name: string
  age?: number
  height: number
}
const info: IInfoType2 = {
  name: 'why',
  age: 18,
  height: 1.88,
}
info.age = 20

// 2.2. 索引类型
const frontLanguage = {
  0: 'html',
  1: 'css',
  2: 'javascript',
  3: 'vue',
}
const languageYear = {
  C: 1972,
  Java: 1995,
  JavaScript: 1996,
  TypeScript: 2014,
}
// 定义索引类型
interface IndexLanguage {
  [index: number]: string
}
interface ILanguageYear {
  [name: string]: number
}
const indexTypeValue1: IndexLanguage = frontLanguage
const indexTypeValue2: ILanguageYear = languageYear
// 具体的属性可以和索引签名混合在一起使用，但是属性的类型必须是索引值的子集
interface LanguageBirth {
  [name: string]: number
  Java: number // Java属性的类型必须是索引值的子集（与顺序无关）
}
const LanguageBirthValue: LanguageBirth = {
  Java: 1995,
  JavaScript: 1996,
  C: 1972,
}

// 2.3 函数类型
// 2.3.1 用type定义
type CalcFn1 = (n1: number, n2: number) => number
// 2.3.2 用Interface定义
interface CalcFn2 {
  (n1: number, n2: number): number
}
const calcFn1Value1: CalcFn1 = (n1, n2) => n1 + n2
function calcFnImp(n1: number, n2: number, calcFn: CalcFn2) {
  return calcFn(n1, n2)
}
// console.log(calcFnImp(1, 2, calcFn1Value1))
// 2.3.3 用interface定义函数的类型，该函数还有get和post属性
interface FakeAxiosType {
  (config: any): Promise<any>
  get(url: string): string
  post: (url: string) => string
}
const FakeAxios: FakeAxiosType = function (config: any) {
  return Promise.resolve(config)
}
FakeAxios.get = function (url: string): string {
  return 'abc' + url
}
FakeAxios.post = function (url: string): string {
  return 'def' + url
}
// 2.4 接口的继承
interface ISwim {
  swimming: () => void
}
interface IFly {
  flying: () => void
}
interface IAction extends ISwim, IFly {}
const action1: IAction = {
  swimming() {},
  flying() {},
}
// 2.5 交叉类型
type MyType1 = ISwim | IFly
type MyTpye2 = ISwim & IFly
const obj1: MyType1 = {
  flying() {},
}
const obj2: MyTpye2 = {
  swimming() {},
  flying() {},
}
// 2.6 接口的实现
interface IEat {
  eating: () => void
}
class Animal {}

class Fish extends Animal implements ISwim, IEat {
  swimming() {
    console.log('Fish Swimming.')
  }
  eating() {
    console.log('Fish Eating.')
  }
}
class Person2 implements ISwim {
  swimming() {
    console.log('person2 swimming.')
  }
}
function swimAction(swimable: ISwim) {
  swimable.swimming()
}
swimAction(new Fish())
swimAction(new Person2())
// 2.7 interface和type区别
interface ITest1 {
  name: string
}
interface ITest1 {
  age: number
}
const itest1Value: ITest1 = {
  name: 'why',
  age: 18,
}

type abc = string
// type abc = number // 不能重复定义
const testValue1: abc = 'a'
// 2.8 字面量赋值
interface IPersonA {
  name: string
}
// const info: IPersonA = {
//   name: 'why',
//   age: 18 // Type '{ name: string; age: number; }' is not assignable to type 'IPersonA'.
//           //  Object literal may only specify known properties, and 'age' does not exist in type 'IPersonA'.
// }
const infoA = {
  name: 'why',
  age: 18,
}
const infoB: IPersonA = infoA // 字面量赋值。TypeScript会擦除(freshness)IPersonA类型之外的类型检查

// ------ 3. TypeScript枚举类型 ------
enum Direction {
  LEFT, // 默认值为0
  RIGHT, // 默认值为1
  UP = 'up', // 'up'
}
function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log('向左')
      break
    case Direction.RIGHT:
      console.log('向右')
      break
    case Direction.UP:
      console.log('向上')
      break
    default:
      const foo: never = direction
      break
  }
}
console.log(Direction.LEFT, Direction.RIGHT, Direction.UP)
turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)

// 4. TypeScript泛型的应用
// 4.1 认识泛型
function foo1<T, E>(a1: T, a2: E) {
  console.log(a1, a2)
}
foo1(1, '2')
// 4.2 泛型接口
interface IPersona1<T1 = string, T2 = number> {
  name: T1
  age: T2
}
const p1x: IPersona1 = { name: 'why', age: 18 }
const p2x: IPersona1<string, string> = {
  name: 'why',
  age: '18',
}
// 4.3 泛型类
class PointA<T> {
  x: T
  y: T
  z: T

  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = z
  }
}
const point11 = new PointA('1.1', '2.2', '3.3')
const point22 = new PointA<string>('4.4', '5.5', '6.6')
const point33: PointA<string> = new PointA('7.7', '8.8', '9.9')
// 4.4 泛型约束
interface ILength {
  length: number
}
function getLength<T extends ILength>(arg: T) {
  return arg.length
}
getLength('1')
getLength([1, 2])
// Argument of type 'number' is not assignable to parameter of type 'ILength'.ts(2345)
// getLength(1)

// 5. 模块和命名空间
// 5.1 模块化开发
import { add, sub } from './1_math_esm'
console.log(add(1, 2))
console.log(sub(2, 1))
// 5.2 命名空间
import { Time, Price } from './2_format_namespace'
console.log(Time.name) // coder
console.log(Time.format(['2023', '12', '11'])) // 2023-12-11
console.log(Price.format(2999.7834)) // 2999.78

console.log('------ 1. TypeScript类的使用 ------')
console.log('1. 类的定义')
console.log('2. 类的继承')
console.log('3. 类的多态')
console.log('4. 成员修饰符')
console.log('5. 只读属性')
console.log('6. getter/setter')
console.log('7. 静态成员')
console.log('8. 抽象类')
console.log('------ 2. TypeScript接口的使用 ------')
console.log('1. 接口的声明')
console.log('2. 索引类型')
console.log('3. 函数类型 (所有的key或者value类型都是相同的)')
console.log('4. 接口的继承 (接口支持多继承；类不支持多继承)')
console.log('5. 交叉类型')
console.log('6. 接口的实现')
console.log(`
7. interface和type的区别:
* 在定义非对象类型时，推荐使用type。比如Direction、Alignment以及一些Function
* 定义对象类型时，interface和type有如下区别:
  * interface: 可以重复地对某个接口定义属性和方法
  * type: 定义的是别名，别名不能重复
`)
console.log('8. 字面量赋值')
console.log('------ 3. TypeScript枚举类型 ------')
console.log('1. 认识枚举')
console.log('2. 枚举的值')
console.log('------ 4. TypeScript泛型的应用 ------')
console.log('1. 认识泛型')
console.log('2. 泛型接口')
console.log('3. 泛型类')
console.log('4. 泛型约束')
console.log('------ 5. 模块和命名空间 ------')
console.log('1. 模块化开发')
console.log('2. 命名空间')

export {}

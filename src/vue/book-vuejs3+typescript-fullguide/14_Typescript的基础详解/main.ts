function sum(n1: number, n2: number) {
  return n1 + n2
}

console.log('sum(n1: number, n2: number)', sum(1, 2))

console.log('------ JavaScript的数据类型 ------')
// JavaScript的数据类型
let n1: number = 1 // 1. number
let b1: boolean = true // 2. boolean
let s1: string = 'str1' // 3. string
let array1: string[] = ['a', 'b', 'c'] // 4. array
let array2: Array<string> = ['d', 'e', 'f']
// object类型表示。不推荐，因为推导不出明确的属性
const info: object = {
  // 5. object
  name: 'why',
  age: 18,
}
// typescript会自动进行类型推导（推荐）
const newInfo = {
  name: 'why',
  age: 18,
}
let null1: null = null // 6. null、undefined
let null2 = null
let undefined1: undefined = undefined
let undefined2 = undefined

const symbol1 = Symbol('identity') // 7. symbol
const symbol2 = Symbol('identity')
const preson1 = {
  [symbol1]: '程序员',
  [symbol2]: '老师',
}

console.log('1. number', n1)
console.log('2. boolean', b1)
console.log('3. string', s1)
console.log('4. array', array1)
console.log('5. object', newInfo)
console.log('6. null、undefined', null1, undefined1)
console.log('7. symbol', symbol1, symbol2, preson1)

console.log('------ TypeScript的数据类型 ------')
// 1. any
let any1: any = 'hello world'
any1 = 1
any1 = true
// 2. unknown
function foo() {
  return 'abc'
}
function bar() {
  return 123
}
let flag = true
let result: unknown // 可接收类型
if (flag) {
  result = foo()
} else {
  result = bar()
}
console.log(result) // abc
// 下面两个赋值会报错，因为unknown类型只能赋值给any和unknown类型
// let msssage1: string = result
// let num1: number = result
// 3. void
function sum1(n1: number, n2: number): void {
  console.log('n1 + n2 = ', n1 + n2)
}
// 4. never
function loopFoo(): never {
  while (true) {
    console.log('123')
  }
}
function loopBar(): never {
  throw new Error()
}
function handleMsg(msg: number | string) {
  switch (typeof msg) {
    case 'string':
      console.log('foo')
      break
    case 'number':
      console.log('bar')
      break
    default:
      // 当执行这里的代码时，将message赋值给never类型的check会报错
      // 这样就可以保证，当修改参数的类型之后，一旦出现case没有处理到的情况，就会报错
      // 例如，参数增加对boolean类型的支持时，必须在case中编写对应的处理情况，否则报错
      const check: never = msg
  }
}
// 5. tuple
const infoTuple: [string, number, number] = ['why', 18, 1.88]
console.log(infoTuple[0], infoTuple[1], infoTuple[2])
function useState(state: any) {
  let currentState = state
  const changeState = (newState: any) => {
    currentState = newState
  }
  const tuple: [any, (newState: any) => void] = [currentState, changeState]
  return tuple
}
const [counter, setCounter] = useState(10)

console.log('1. any: 可以赋值给任意类型')
console.log('2. unknown: 只能赋值给any 和 unknown类型')
console.log(
  '3. void: 用于指定一个函数没有返回值，因此其返回值类型为void。如果函数返回void类型，则可以将null或undefined赋值给该函数，即函数可以返回null或undefined'
)
console.log('4. never: 表示永远不会有返回值的类型')
console.log('5. tuple: 多个元素的组合')

console.log('------ TypeScript类型的补充 ------')
// 1. 函数的参数和返回值
// 2. 对象类型
// 3. 联合类型
const id1: number | string | boolean = true
// 4. 类型别名
type PointType = {
  x: number
  y: number
  z?: number
}
type IDType = string | number | boolean
// 5. 类型断言
// 5.1 类型断言as
// 5.2 非空类型断言 (xx!.yy)
// 5.3 可选链的使用 (?.)
// 5.4 !!操作符
// 5.5 ??操作符 (空值合并操作符，用于判断一个值是否为null或undefined)
let message2: string | null = 'hello world'
// ①以前的方式是使用三元运算符判空，赋默认值（会判断null、undefined、''、false为假）
const content1 = message2 ? message2 : '你好啊，李银河1'
// ②使用||操作符判空，赋默认值（会判断null、undefined、''、false为假）
const content2 = message2 || '你好啊，李银河2'
// ③使用??操作符判空，赋默认值（只判断null或undefined为假）
const content3 = message2 ?? '你好啊，李银河3'
// 6. 字面量类型
type Alignment = 'left' | 'center' | 'right'
let align: Alignment = 'left'

type Method = 'GET' | 'POST'
function request(url: string, method: Method) {}

const options = {
  url: 'https://www.coderwhy.org/abc',
  method: 'POST',
}
// Argument of type 'string' is not assignable to parameter of type 'Method'.ts(2345)
// request(options.url, options.method)

// 3种解决方式
// ① 使用类型断言as
request(options.url, options.method as Method)
// ② 为options指定类型
type Request = { url: string; method: Method }
const options2: Request = {
  url: 'https://www.coderwhy.org/abc',
  method: 'POST',
}
request(options2.url, options2.method)
// ③ 使用字面量推理 as const
const options3 = {
  url: 'https://www.coderwhy.org/abc',
  method: 'POST',
} as const // 将options对象的类型推导为字面量类型
request(options3.url, options3.method)
// 7. 类型缩小
// ①typeof
typeof options2.url === 'string'
// ②平等缩小: switch、===、==、!==、!=
// ③instanceof: 检查一个值是否为另一个值的实例。
// ④in: 用于判断对象是否具有指定名称的属性
console.log(`
1. 函数的参数和返回值
2. 对象类型
3. 联合类型
4. 类型别名
5. 类型断言
  5.1 类型断言as
  5.2 非空类型断言 (xx!.yy)
  5.3 可选链的使用 (?.)
  5.4 !!操作符
  5.5 ??操作符 (空值合并操作符，用于判断一个值是否为null或undefined)
    ① 以前的方式是使用三元运算符判空，赋默认值（会判断null、undefined、''、false为假）
      const content1 = message2 ? message2 : '你好啊，李银河1'
    ② 使用||操作符判空，赋默认值（会判断null、undefined、''、false为假）
      const content2 = message2 || '你好啊，李银河2'
    ③ 使用??操作符判空，赋默认值（只判断null或undefined为假）
      const content3 = message2 ?? '你好啊，李银河3'
6. 字面量类型
7. 类型缩小
  ① typeof
    typeof options2.url === 'string'
  ② 平等缩小: switch、===、==、!==、!=
  ③ instanceof: 检查一个值是否为另一个值的实例。
  ④ in: 用于判断对象是否具有指定名称的属性
`)

console.log('------ TypeScript函数类型详解 ------')
// 1. 函数的类型
type AddFnType = (n1: number, n2: number) => number
const add1: AddFnType = (a1: number, a2: number) => a1 + a2
// 2. 函数参数的类型
// 2.1 可选参数 (可选参数必须放在必选类型参数的后面)
// 2.2 默认参数
// ⚠️: 在函数参数中，顺序应该是: 必传参数，默认值参数，可选参数
// 2.3 剩余参数
function sum2(initialNum: number, ...nums: number[]): number {
  let total = initialNum
  nums.forEach((num) => {
    total += num
  })
  return total
}
console.log(sum2(1, 2, 3, 4, 5))
// 3. this的类型 (看链接14-3文章)
// 4. 函数重载 (函数名称相同但参数的数量或类型不同)
function add2(a1: number | string, a2: number | string) {
  if (typeof a1 === 'number' && typeof a2 === 'number') {
    return a1 + a2
  }
  if (typeof a1 === 'string' && typeof a2 === 'string') {
    return a1 + a2
  }
}

function sumx(a1: number, a2: number): number
function sumx(a1: string, a2: string): string
function sumx(a1: any, a2: any): any {
  return a1 + a2
}
console.log(sumx(1, 2))
console.log(sumx('1', '2'))

// export {} 可以把该TypeScript文件当成一个模块处理，防止与全局变量冲突
export {}

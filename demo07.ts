// 在TypeScript中也给我们提供了一些引用类型，例如：Array（数组）、String（字符串）、Date（日期对象）、RegExp（正则表达式）等

// let itxing = {
//   name: 'itxing',
//   website: 'itxing.net',
//   age: 18,
//   saySomething: function() {
//     console.log('为了前端技术')
//   }
// }
// console.log(itxing.name)
// itxing.saySomething()


// // 初始化数组德两种方法
// let arr1:number[]  // 声明一个数值类型德数组
// let arr2:Array<string>  // 声明一个字符串类型的数组


// // 给数组赋值
// 1.字面量赋值法
// 2.构造函数赋值
// let arr1:number[] = []
// let arr2:number[] = [1,2,3,4,5]
// let arr3:Array<string> = ['itxing', 'hehe', 'hello']
// let arr4:Array<boolean> = [true, false, false]


// let arr1:number[] = new Array()
// let arr2:number[] = new Array(1,2,3,4,5)
// let arr3:Array<string> = new Array('itxing', 'hehe', 'hello')
// let arr4:Array<boolean> = new Array(true, false, false)


//声明一个元祖类型
let x: [string,number]
//正确的初始化
x = ['hello',10]
//错误的初始化方法
// x = [10,'hello']
console.log(x)



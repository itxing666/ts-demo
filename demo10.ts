import { exec } from "child_process"

// 1.new关键字 2.字面量
// // 构造函数法
// let reg1:RegExp = new RegExp("itxing") //表示字符串规则里含有itxing
// console.log(reg1)
// let reg2:RegExp = new RegExp("itxing", 'gi')
// console.log(reg2)


// 字面量法
let reg3:RegExp = /itxing/
let reg4:RegExp = /itxing/gi

// // RegExp中的常用方法
// test(string) // 返回true或false
// exec(string) // exec() 方法执行成功，则返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null


let website:string = 'itxing.net'
let result:boolean = reg3.test(website)
console.log(result)
console.log(reg3.exec(website))
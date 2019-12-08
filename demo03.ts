// TypeScript中的数据类型有：

// Undefined :
// Number:数值类型;
// string : 字符串类型;
// Boolean: 布尔类型；
// enum：枚举类型；
// any : 任意类型，一个牛X的类型；
// void：空类型；
// Array : 数组类型;
// Tuple : 元祖类型；
// Null ：空类型。

// 声明数值类型的变量age，但不予赋值
// var age:number
// console.log(age);  // 报错 没有赋值



// // Number类型
// var age:number = 18
// var stature:number = 178.5
// console.log(age)
// console.log(stature) // NaN：它是Not a Number 的简写


// // string 类型
// var str:string = "itxing"
// console.log(str)


// // enum 类型
// enum REN { nan, nv, yao }
// console.log(REN.yao)  // 返回2,索引index

// enum REN {
//   nan= '男',
//   nv= '女',
//   yao= '妖'
// }
// console.log(REN.yao)


var t:any = 10
t = "itxing"
t = true
console.log(t)

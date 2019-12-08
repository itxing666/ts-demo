// // 三种函数定义的方式
// // 1.函数声明法
// function add(n1:number, n2:number):number {
//   return n1+n2
// }
// console.log(add(1, 4))


// // 2.函数表达式法
// var add = function(n1:number,n2:number):number{
//   return n1+n2
// }
// console.log(add(1, 4))


// 3.箭头函数
var add = (n1:number, n2:number) => {
  return n1+n2
}
console.log(add(2, 4))
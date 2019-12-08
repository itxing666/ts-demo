// // 函数外部读取这个变量读取不到
// function zhengXing():void {
//   var yangzi = '刘德华'
//   console.log(yangzi)
// }
// zhengXing()
// console.log(yangzi) // not defined


// var yangzi:string = '刘德华'
// function zhengXing():void {
//   console.log('技术胖整形成了'+yangzi+'的样子')
// }
// zhengXing()
// console.log(yangzi)


// // 局部变量与全局变量重名，有变量提升的坑
// var yangzi:string = '刘德华'
// function zhengXing():void{
//   var yangzi:string = '马德华'
//   console.log('技术胖整形成了'+yangzi+'的样子')
// }
// zhengXing()
// console.log(yangzi)


// var yangzi:string = '刘德华'
// function zhengXing():void {
//   console.log('技术胖整形成了'+yangzi+'的样子')  // 变量提升
//   var yangzi:string = '马德华'
//   console.log('技术胖整形成了'+yangzi+'的样子')
// }
// zhengXing()
// console.log(yangzi)


// // 产生原因变量提升,真实代码
// var yangzi:string = '刘德华'
// function zhengXing():void {
//   var yangzi:string
//   console.log('技术胖整形成了'+yangzi+'的样子')  // 变量提升 undefined
//   yangzi = '马德华'
//   console.log('技术胖整形成了'+yangzi+'的样子')
// }
// zhengXing()
// console.log(yangzi)


function zhengXing():void{
  var yangzia:string = '刘德华'
  {
    let yangzib:string = '小沈阳'
    console.log('技术胖整形成了'+yangzib+'的样子')
  }
  console.log('技术胖整形成了'+yangzia+'的样子')
  // console.log('技术胖整形成了'+yangzib+'的样子')
}
zhengXing()
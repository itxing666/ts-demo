// 基本类型字符串 引用类型字符串
// 1.基本类型字符串：由''或""
// 2.引用类型字符串：new实例化的String类型

// let itxing:String = 'itxing'
// let itxinga:String = new String('itxing.net')
// console.log(itxing)
// console.log(itxinga)

// 字符串常用的方法
// 查找字符串 str.indexOf(subStr)
// 截取字符串 str.substring(startIndex, [endIndex])
// 替换字符串 str.replace(subStr, newstr)
let something:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。"
let xiaoJieJie:string = "小姐姐"
console.log(something.indexOf(xiaoJieJie))
console.log(something.lastIndexOf("心情美美的"))
console.log(something.substring(8))
console.log(something.substring(8,14))
console.log(something.replace(xiaoJieJie, '小哥哥'))
// 本次作业用到了 string, 主要是...
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
//

//
// 定义我们的 log 函数
const log = console.log.bind(console)


// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
const ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败:', message)
    } else {
        log('||| 测试成功')
    }
}
//
//
// // 作业 1
// // 10 分钟做不出就看提示
// //
// const find = function(s1, s2) {
//     /*
//     s1 s2 都是 string
//     但 s2 的长度是 1
//
//     返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
//     */
//     let finder = s2
//     let exit = false
//     for (let i = 0; i < s1.length; i++) {
//         if (finder == s1[i]) {
//             return i
//             result = true
//             break
//         }
//     }
//     if (!exit) {
//         return -1
//     }
// }
//
// // 测试函数
// const test_find = function() {
//     ensure(find('hello', 'a') === -1, 'find 1')
//     ensure(find('hello', 'e') === 1, 'find 2')
//     ensure(find('hello', 'l') === 2, 'find 3')
// }
//
// test_find()


/*
作业 2

定义一个函数
参数是一个字符串 s
返回大写后的字符串
注意, 假设 s 字符串全是小写字母
*/


/*
下面给出一个例子作为后面作业的参考
返回字符串的小写形式的函数
注意, 这里假设了 s 字符串全是大写字母
*/

const lowercase = function(s) {
    // 这里是两个字符串, 包含了大写字母和小写字母
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // 初始化一个空字符串
    let result = ""
    for (let i = 0; i < s.length; i++) {
        // 注意, 这个 find 是你要实现的函数
        let index = find(upper, s[i])
        // 字符串可以用加号拼接, 不明白可以 log 一下
        result += lower[index]
    }
    return result
}

const uppercase = function(s) {
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let index = find(lower, s[i])
        result += upper[index]
    }
    return result
}

const test_uppercase = function() {
    ensure(uppercase('hello') === 'HELLO', 'uppercase 1')
    ensure(uppercase('gua') === 'GUA', 'uppercase 2')
}

test_uppercase()
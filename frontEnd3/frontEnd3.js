// console.log太长了
// var log = function(arguments){
//     console.log(arguments)
// }

var log = function(){
    console.log.apply(console, arguments)
}

var grade = 3
if(grade < 7) {
    log('小学生')
}

if(1 > 2) {
    log('条件成立')
} else {
    log('条件不成立')
}

var grade = 8
if(grade < 7) {
    log('小学生')
} else if(grade < 10) {
    log('初中生')
} else {
    log('高中生')
}

// 求绝对值
var n = -1
if(n < 0) {
    n = -n
}

// 判断奇偶
var n = 1
if(n % 2 == 0) {
    log('偶数')
} else {
    log('奇数')
}

// 比较运算
// return true or false
// 7种比较运算
// 严格相等, 相等、不等、小于、大于、小于等于、大于等于
// === == ！= < > <= >=

// 逻辑操作
// 与、或、非
// &&
// ||
// !

// if(用户名存在 && 密码验证成功) {
//     登录成功
// } else {
//     登录失败
// }

// 注意
// 比较运算和逻辑操作的结果都是 bool（布尔类型），结果是 True 和 False


// 函数返回值
// 函数调用得到的结果 就是函数的返回值

var add = function(a, b) {
    return a + b
}

log('add 函数的返回值', add(1, 2))
number = add(1, 3)
log('add 函数的返回值 number ', number)

var abs = function(n) {
    if(n < 0) {
        n = -n
    }
    return n
}

log(abs(0))
log(abs(-8))
log(abs(3))

var minus = function(a, b) {
    return a - b
    log('这一句是不会被执行的, 因为 return 的时候函数就结束了')
}

// 是否为奇数
var isOdd = function(n) {
    // 取余数的操作符是 %
    if(n % 2 != 0) {
        return true
    } else {
        return false
    }
}

log(isOdd(1))
log(isOdd(2))
log(isOdd(3))
log(isOdd(4))

// 标准库  Standard Library
// 库 是一个编程术语, 意思是一系列函数的集合
// 标准库 也是一个术语, 指的是语言自带的库

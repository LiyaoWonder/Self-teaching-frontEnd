// 自动化测试
var log = function() {
    console.log.apply(console, arguments)
}

// 比较array中数字的大小
var max = function(array) {
    var a = array[0]
    for (var i = 1; i < array.length; i++) {
        var b = array[i]
        if (b > a) {
            a = b
        }
    }
    return a
}

// 写一个测试函数
var ensure = function(condition, message) {
    if (!condition) {
        log(message)
    }
}

var  ensureEqual = function(a, b, message) {
    if (a != b) {
        log(message, a, b)
    }
}

ensureEqual(max([1, 2, 3, 4, 5, 6, 3, 8, 1]), 8, '此函数错误')

// 判断输入是否相等

// C语言
validUser(char *u1, char *u2) {
    return strcmp(u1, u2) == 0; // C语言无法直接比较，那么可以做个函数
    // return stingEqual(u1,u2)
}

// Js
var validUser = function(u1, u2) {
    return u1 == u2
}

// python
def validUser(u1, u2):
    return u1 == u2


// 很多语言 就是可以直接的写 类比去写
// 比如用Js 类比去写 C语言

var fac = function(n) {
    var s = 1
    for (var i = 1; i <= n; i++) {
        s *= i
    }
    return s
}

// C语言
multiSum(int *array, int length) {
    int s = 0;
    for (int i=1; i <= length; i++) {
        int n = array[i]
        a += n
    }
}

// 递归
// 递归中一定有一个条件可以终止
var fac = function(n) {
    if (n ==0 ) {  // n == 0 是用来终止条件的
        return 1
    } else {
        return n * fac(n-1)
    }
}

// fac(3)
// 3 * fac(2)
//   2 * fac(1)
//     1 * fac(0)
//       1

// 斐波那契数列
// 1 1 2 3 5 8 13 21 34
// 斐波那契汤
// 注意当 n=1/2 返回 1
var fib = function(n) {
    if (n == 1 || n == 12) {
        return 1
    } else {
        return fib(n - 2) + fib(n - 1)
    }
}

// 递归有时用于不知道运算次数的程序

// 写一个测试程序
var testSum = function() {
    var numbers = [1, 2, 3, 4]
    var value = 10
    ensure(value == sum(numbers), 'sum 错误')
    ensure(1 == sum([1]), 'sum  1 错误')
}


var testProduct = function() {
    ensure(product([1, 2, 3]) === 6, 'test product 1')
    ensure(product([1, 2, 0]) === 0, 'test product 2')
}


var testAbs = function() {
    ensure(abs(0) === 0, 'abs 0 错误')
    ensure(abs(-6) === 6, 'abs -6 错误')
    ensure(abs(5) === 5, 'abs 5 错误')
}


var __main = function() {
    testSum()
    testAbs()
    testMin()
}

__main()

log('fe3 test 结束')

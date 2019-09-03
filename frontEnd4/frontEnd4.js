var log = function() {
    console.log.apply(console, arguments)
}

// array.length
var arr = [1,2,3,4,4,10,90]
var compare = function(array) {
    var max = array[0]
    var i = 0
    for (var i = 0; i < array.length; i++) {
        if (max < array[i + 1]){
            max = array[i + 1]
            // 还可以累乘
            // max *= arrar[i + 1]
        }
    }
    return max
}

log("max", compare(arr))

// 求和 + 自动化

var sum = function(array) {
    var s = 0
    for (var i = 0; i < array.length; i++) {
         s = s + array[i]
    }
    return s
}

log("sum", sum(arr))
// 每次都要用log去测试，如何自动测试

var ensure = function(condition, message) {
    if (!condition) {
        console.log(message)
    }
}

var testSum = function() {
    var numbers = [1, 2, 3, 4]
    var value = 10
    // ensure 是接受两个参数，（condition, message）
    ensure(value == sum(numbers), "sum错误")
    ensure(1 == sum([1]), "sum 1 错误")
}

testSum()

var abs = function(n){
    if (n < 0) {
        return -n
    } else{
        return n
    }
}

// 有时候要求不要多个return
// var abs = function(n){
//     var value = 0
//     if (n < 0) {
//         value = -n
//     } else{
//         value = n
//     }
//     return value
// }

var testAbs = function() {
    ensure(abs(0) === 0, "abs 0 错误")
    ensure(abs(-9) === 9, "abs -9 错误")
}

testAbs()

// 1 - 2 + 3 - 4 ......
var sum_1 = function(n) {
    var value = 0
    for (var i = 0; i < n; i++) {
        if (i % 2 != 0){
            value += i
        } else {
            value -= i
        }
    }
    return value
}

log(sum_1(5))

// 1 + 2 - 3 + 4
// 可以变为 2 - 1 + 2 - 3 + 4

/*
applylist 函数
op + - * / 之一
oprands 是一个只包含数字的 array
var applylist("-", [4, 3, 2, 1])
代表 4 - 后面全部
*/

var applyList = function(op, opprands){
    var value = opprands[0]
    // 注意 i 的初始值
    for (var i = 1; i < opprands.length; i++) {
        if (op == "-"){
            value -= opprands[i]
        } else if (op == "+") {
            value += opprands[i]
        } else if (op == "*"){
            value *= opprands[i]
        } else {
            value /= opprands[i]
        }
    }
    return value
}

log("applyList", applyList("+", [4, 3, 2, 1]))

// expression包含三个元素 1:< > == 2,3是数字
var applyCompare = function(expression) {
    var op = expression[0]
    var a = expression[1]
    var b = expression[2]
    if (op == "<") {
        return a < b
    }
    if (op == ">") {
        return a > b
    }
    if (op == "==") {
        return a == b
    }
}

var applyOps = function(expression) {
    var op = expression[0]
    if (op == '+' || op == '-' || op == '*' || op == '/') {
        var oprands = expression.slice(1)
        return applyList(op, oprands)
    } else if (op == '>' || op == '<' || op == '==') {
        return applyCompare(expression)
    }
}

// break 语句
var i = 0
while (i < 10){
    log('while break')
    break
    i += 1
}
log('break结束的i值'， i)

// continue 跳过单次循环
var i = 0
while (i < 10){
    i += 1
    if (i % 2 ==0){
        continue
    }
    log('while continue', i)
}

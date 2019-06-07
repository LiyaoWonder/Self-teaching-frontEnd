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
    ensure(value == sum(numbers), "sum错误")
    ensure(1 == sum([1]), "sum 1 错误")
}

testSum()

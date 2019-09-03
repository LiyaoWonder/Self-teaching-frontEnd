var log = function() {
    console.log.apply(console, arguments)
}

var foo1 = function() {
    log(1)
}

const foo2 = function() {
    log(2)
}

foo1 = function(x) {
    log(x)
}
foo1(10) // 可以运行

foo2 = function(x) {
    log(x)
}
// 直接报错

var foo2 = function(x) {
    log(x)
}
// 直接报错
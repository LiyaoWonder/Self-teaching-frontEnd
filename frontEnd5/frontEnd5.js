var log = function() {
    console.log.apply(console, arguments)
}

// object 对象
// object是一个重要的储存数据的类型
// key:value 的索引方式
var wonder = {
    'name': 'Wonder', // name 上面引号可以省略
    'gender': 'Male',
    'height': '179',
    'a b c': '111',
}
log('name', wonder)
// 对象与字典是同一个东西
// value：array int string bool function3
log(wonder.name)
log(wonder['name'])
// 这个不可以log(wonder. a b c)-> log(wonder['abc'])

// wonder.name 是将name当作字符串
// 所以‘.’只能访问没有间隙的字符串

var k = 'name'
log(wonder[k])
// 不行 log[wonder.k]

// 如果访问不存的key --> undefined

// 创建新的key -> atom中会报错
wonder['grades'] = 59
log(wonder)

wonder['gender'] = "notSure"
log(wonder.gender)

delete wonder.gender
log(wonder)

wonder.hello = function(){
    log('Hello, i am wonder.')
}

log(wonder.hello())

// 使用递归来写阶乘
// n! = n * (n-1)!
var fac = function(n){
    if (n == 0){
        return 1
    } else {
        return n * fac(n-1)
    }
}
log("递归recurse", fac(5))
// return 5 * fac(4)
//  4 * fac(3) 3 * fac(2) 2 * fac(1) 1 * fac(0)

// 用递归来求斐波那契数列
// fib(n) = fib(n-2) + fib(n-1)
// 当n = 1,2的时候， fib(n) = 1
// 1 1 2 3 5 8 13 21 34 55 89
var fib = function(n){
    if (n == 1 || n == 2){
        return 1
    } else {
        return fib(n-2) + fib(n-1)
    }
}

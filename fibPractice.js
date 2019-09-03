var fib = function(N) {
    if (N == 0 || N == 1) {
        return // NOTE:
    }
    let [a, b] = [0, 1]
    for (let i = 0; i < N - 1; i++) {
        [a, b] = [b, a + b]
        // 结构化赋值
    }
    return b
}

let c = fib(3)
let d = fib(10)
console.log(c)
console.log(d)

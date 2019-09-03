// 定义我们的 log 函数
const log = console.log.bind(console)

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

const find = function(s1, s2) {
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
    let finder = s2
    let exit = false
    for (let i = 0; i < s1.length; i++) {
        if (finder == s1[i]) {
            return i
            result = true
            break
        }
    }
    if (!exit) {
        return -1
    }
}

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

const __main = function() {

}

// test_uppercase()

const lowercase1 = function(s) {
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let indexUpper = -1
        let indexLower = -1
        indexLower = find(lower, s[i])
        if (indexLower != -1) {
            result += lower[indexLower]
            log('indexLower result', result, indexLower)
        }
        indexUpper = find(upper, s[i])
        if (indexUpper != -1) {
            result += lower[indexUpper]
            log('indexUpper result', result, indexUpper)
        }
    }
    return result
}

// const test_lowercase1 = function() {
//     ensure(lowercase1('heLLo') === 'hello', 'lowercase1 1')
//     ensure(lowercase1('gua') === 'gua', 'lowercase1 2')
//     ensure(lowercase1('GW') === 'gw', 'lowercase1 3')
// }

// test_lowercase1()


const uppercase1 = function(s) {
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let indexUpper = -1
        let indexLower = -1
        indexLower = find(lower, s[i])
        if (indexLower != -1) {
            result += upper[indexLower]
            log('indexLower result', result, indexLower)
        }
        indexUpper = find(upper, s[i])
        if (indexUpper != -1) {
            result += upper[indexUpper]
            log('indexUpper result', result, indexUpper)
        }
    }
    return result
}


const test_uppercase1 = function() {
    ensure(uppercase1('helLo') === 'HELLO', 'uppercase1 1')
    ensure(uppercase1('gUA') === 'GUA', 'uppercase1 2')
}

// test_uppercase1()

/*
作业 5
实现一个叫 凯撒加密 的加密算法, 描述如下
对于一个字符串, 整体移位, 就是加密
以右移 1 位为例
原始信息 'afz' 会被加密为 'bga'
实现 encode1 函数, 把明文加密成密码并返回
右移 1 位

注意:
    s 是一个只包含小写字母的字符串
*/
const encode1 = function(s) {
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let indexUpper = -1
        let indexLower = -1
        indexLower = find(lower, s[i])
        log('s[i]', s[i])
        let nextLowIndex = ((indexLower + 1) % lower.length)
        if (indexLower != -1) {
            result += lower[nextLowIndex]
            log('indexLower result', result, indexLower, nextLowIndex)
        }
        indexUpper = find(upper, s[i])
        let nextUpperIndex = ((indexLower + 1) % lower.length)
        if (indexUpper != -1) {
            result += upper[nextUpperIndex]
            log('indexUpper result', result, indexUpper, nextUpperIndex)
        }
    }
    return result
}

const test_encode1 = function() {
    ensure(encode1('afz') === 'bga', 'encode1 1')
    ensure(encode1('gW') === 'hX', 'encode1 2')
}

// test_encode1()

const decode1 = function(s) {
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let indexUpper = -1
        let indexLower = -1
        indexLower = find(lower, s[i])
        log('s[i]', s[i])
        let nextLowIndex = ((indexLower - 1 + lower.length) % lower.length)
        if (indexLower != -1) {
            result += lower[nextLowIndex]
            log('indexLower result', result, indexLower, nextLowIndex)
        }
    }
    return result
}

const test_decode1 = function() {
    ensure(decode1('bga') === 'afz', 'decode1 1')
    ensure(decode1('hx') === 'gw', 'decode1 2')
}
// test_decode1()

/*
作业 7
实现 encode2
多了一个参数 shift 表示移的位数

注意:
    s 是一个只包含小写字母的字符串

*/
const encode2 = function(s, shift) {
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let indexUpper = -1
        let indexLower = -1
        indexLower = find(lower, s[i])
        log('s[i]', s[i])
        let nextLowIndex = ((indexLower + shift) % lower.length)
        if (indexLower != -1) {
            result += lower[nextLowIndex]
            log('indexLower result', result, indexLower, nextLowIndex)
        }
    }
    return result
}

const test_encode2 = function() {
    ensure(encode2('afz', 2) === 'chb', 'encode2 1')
    ensure(encode2('gw', 3) === 'jz', 'encode2 2')
}

// test_encode2()

/*
作业 8
实现 decode2
多了一个参数 shift 表示移的位数

注意:
    s 是一个只包含小写字母的字符串

*/
const decode2 = function(s, shift) {
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let indexUpper = -1
        let indexLower = -1
        indexLower = find(lower, s[i])
        log('s[i]', s[i])
        let nextLowIndex = ((indexLower - shift + lower.length) % lower.length)
        if (indexLower != -1) {
            result += lower[nextLowIndex]
            log('indexLower result', result, indexLower, nextLowIndex)
        }
    }
    return result
}

const test_decode2 = function() {
    ensure(decode2('chb', 2) === 'afz', 'decode2 1')
    ensure(decode2('jz', 3) === 'gw', 'decode2 2')
}

// test_decode2()

const encode3 = function(s, shift) {
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let indexUpper = -1
        let indexLower = -1
        indexLower = find(lower, s[i])
        log('s[i]', s[i])
        let nextLowIndex = ((indexLower + shift) % lower.length)
        if (indexLower != -1) {
            result += lower[nextLowIndex]
            log('indexLower result', result, indexLower, nextLowIndex)
        } else {
            result += s[i]
        }
    }
    return result
}

const test_encode3 = function() {
    ensure(encode3('a fz', 2) === 'c hb', 'encode3 1')
    ensure(encode3('g#w', 3) === 'j#z', 'encode3 2')
}

// test_encode3()

/*
作业 10
实现 decode3
多了一个参数 shift 表示移的位数
如果 s 中包含了不是字母的字符, 比如空格或者其他符号, 则对这个字符不做处理保留原样

注意:
    s 是一个只包含小写字母和不是字母的字符的字符串
*/
const decode3 = function(s, shift) {
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let indexUpper = -1
        let indexLower = -1
        indexLower = find(lower, s[i])
        log('s[i]', s[i])
        let nextLowIndex = ((indexLower - shift + lower.length) % lower.length)
        if (indexLower != -1) {
            result += lower[nextLowIndex]
            log('indexLower result', result, indexLower, nextLowIndex)
        } else {
            result += s[i]
        }
    }
    return result
}

const test_decode3 = function() {
    ensure(decode3('ch#b', 2) === 'af#z', 'decode3 1')
    ensure(decode3('j z', 3) === 'g w', 'decode3 2')
}

// test_decode3()

const code = 'VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX'

const decode4 = function(s) {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let indexUpper = -1
        let indexLower = -1
        indexLower = find(upper, s[i])
        log('s[i]', s[i])
        let nextLowIndex = ((indexLower - 3 + upper.length) % upper.length)
        if (indexLower != -1) {
            result += lower[nextLowIndex]
            log('indexLower result', result, indexLower, nextLowIndex)
        } else {
            result += s[i]
        }
    }
    return result
}

const test_decode4 = function() {
    ensure(decode4('VRPHWLPHV L ZDQW WR FKDW ZLWK BRX, EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX') === 'sometimes i want to chat with you, but i have no reason to chat with you', 'decode4')
}

test_decode4()
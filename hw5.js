// ensure

const log = console.log.bind(console)

const ensure = function(condition, message) {
    if (!condition) {
        log('***** 测试失败:', message)
    } else {
        log('||||| 测试成功')
    }
}

// String 函数可以把数字转成字符串
// 例如 String(1) 就能得到 '1'
//


// 作业 1
//
const zfill = function(n, width) {
    // n 是 数字 类型
    // width 是 数字 类型

    // 把 n 的位数变成 width 这么长，并在右对齐，不足部分用 0 补足并返回
    // 具体请看测试, 注意, 返回的是 str 类型

    // 返回 String 类型

    // 提示:
    // 计算 n 的长度, 随后生成一串指定长度的 0, 使两者组合后长度为 width

    // 分步提示:
    // 1. 将 n 转化为字符串并计算长度
    // 2. 在 zfill 函数前, 构建一个辅助函数 n_char, 生成一个长度为 n 的 0 字符串
    // 3. 算出需要填充的 0 的个数并使用 n_char 生成
    // 4. 拼接
    let nString = String(n)
    let nLength = nString.length
    let result = ''
    if (nLength <= width) {
        let n = width - nLength
        for (let i = 0; i < n; i++) {
            result += 0
        }
        for (let i = 0; i < nString.length; i++) {
            result += nString[i]
        }
        return result
    } else {
        return nString
    }
}

// 测试函数
const test_zfill = function() {
    ensure(zfill(1, 4) === '0001', 'zfill 测试 1')
    ensure(zfill(23, 4) === '0023', 'zfill 测试 2')
    ensure(zfill(12345, 4) === '12345', 'zfill 测试 3')
    ensure(zfill(169, 5) === '00169', 'zfill 测试 4')
}


// 调用测试函数
test_zfill()

// 作业 2
//
const rjust = function(s, width, fillchar = ' ') {
    // s 是 String
    // width 是 整数
    // fillchar 是 长度为 1 的字符串, 默认为空格 ' '

    // 如果 s 长度小于 width, 则在开头用 fillchar 填充并返回

    // 返回 String 类型

    // 提示:
    // 类似于作业 1, 但有几个区别
    // 一是不需要先用 String() 转换类型
    // 二是填充的字符不是 0 而是可以自行定义


    // 分步提示：
    // 1. 计算需要用 fillchar 生成的字符串长度
    // 2. 使用作业 1 中的辅助函数 n_char, 修改它以便符合本题的使用
    // 3. 调用修改后的 n_char 生成填充用的字符串
    // 4. 拼接并返回结果
    let result = ''
    if (s.length <= width) {
        let n = width - s.length
        for (let i = 0; i < n; i++) {
            result += fillchar
        }
        for (let i = 0; i < s.length; i++) {
            result += s[i]
        }
        return result
    } else {
        return s
    }
}


// 测试函数
const test_rjust = function() {
    ensure(rjust('gua', 5) === '  gua', 'rjust 测试 1')
    ensure(rjust('guagua', 5) === 'guagua', 'rjust 测试 2')
    ensure(rjust('gua', 5, '*') === '**gua', 'rjust 测试 3')
}

test_rjust()


// 作业 3
//
const ljust = function(s, width, fillchar = ' ') {
    // s 是 String
    // width 是 整数
    // fillchar 是 长度为 1 的字符串, 默认为空格 ' '

    // 如果 s 长度小于 width, 则在末尾用 fillchar 填充并返回
    // 否则, 原样返回, 不做额外处理

    // 返回 String 类型

    // 提示:
    // 类似于作业 2, 区别是填充位置在左侧而不是右侧

    // 分步提示:
    // 1. 复制作业 2 中的代码, 记得把函数名改成 ljust
    // 2. 把作业 2 最后一步的字符串拼接的两个元素调换位置
    let result = s
    if (s.length <= width) {
        let n = width - s.length
        for (let i = 0; i < n; i++) {
            result += fillchar
        }
        return result
    } else {
        return s
    }
}


// 测试函数
const test_ljust = function() {
    ensure(ljust('gua', 5) === 'gua  ', 'ljust 测试 1')
    ensure(ljust('guagua', 5) === 'guagua', 'ljust 测试 2')
    ensure(ljust('gua', 5, '*') === 'gua**', 'ljust 测试 3')
}

test_ljust()

const center = function(s, width, fillchar = ' ') {
    // s 是 String
    // width 是 整数
    // fillchar 是 长度为 1 的字符串, 默认为空格 ' '

    // 如果 s 长度小于 width, 则在两边用 fillchar 填充并返回
    // 如果 s 长度和 width 互为奇偶, 则无法平均分配两边的 fillchar
    //     这种情况下, 让左边的 fillchar 数量小于右边

    // 返回 String 类型
    let result = s
    for (var i = 0; i < width - s.length; i++) {
        if (s.length > width) {
            return s
        }
        if (i % 2 == 0) {
            result = result + fillchar
            log('odd numbers', i, result)
        } else {
            result = fillchar + result
            log('even numbers', i, result)
        }
    }
    return result
}


// 测试函数
const test_center = () => {
    ensure(center('gua', 5, '/') === '/gua/', 'center 测试 1')
    ensure(center('gua', 5, '*') === '*gua*', 'center 测试 2')
    ensure(center('gw', 5) === ' gw  ', 'center 测试 3')
    ensure(center('gua', 6) === ' gua  ', 'center 测试 4')
}

test_center()

// 作业 5
//
const is_space = function(s) {
    // s 是 String
    // 检查 s 中是否只包含空格

    // 返回 布尔值, 如果 s 中包含的只有空格则返回 true, 否则返回 false

    // 提示:
    // 遍历 s 中的所有字符, 其中如果包含非空格字符, 返回 false, 否则返回 true

    // 分步提示:
    // 1. 如果是一个空字符串返回 false
    // 2. 遍历 s 中的每个字符
    // 3. 如果字符不是空格, 返回 false
    // 4. 在循环结束后, 返回 true

    if (s == '') {
        return false
    }
    for (let i = 0; i < s.length; i++) {
        let check = s[i]
        log('check', check, s[i])
        if (check != ' ') {
            return false
        }
    }
    log(s)
    return true
}

// 测试函数
const test_is_space = () => {
    ensure(is_space(' '), 'center 测试 1')
    ensure(is_space('   '), 'center 测试 2')
    ensure(!is_space(''), 'center 测试 3')
    ensure(!is_space('gua'), 'center 测试 4')
    ensure(!is_space('  gua'), 'center 测试 5')
}

test_is_space()

// 作业 6

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
            return true
        }
    }
    return false
}

const is_digit = (s) => {
    // s 是字符串
    // 检查 s 中是否只包含数字
    // 返回: Boolean

    // 提示:
    // 类似于作业 5, 判断的条件从空格变为了数字

    // 分步提示:
    // 1. 复制 is_space 函数中的代码
    // 2. 将判断字符是否为空格的部分改为判断是否为数字
    //     通过判断字符是否在字符串 '0123456789' 中, 来判断其是否为数字
    let numbers = '0123456789'
    if (s == '') {
        return false
    }
    for (let i = 0; i < s.length; i++) {
        if (!find(numbers, s[i])) {
            return false
        }
    }
    return true
}


// 测试函数
const test_is_digit = () => {
    ensure(is_digit('123'), 'is_digit 测试 1')
    ensure(is_digit('0'), 'is_digit 测试 2')
    ensure(!is_digit('  '), 'is_digit 测试 3')
    ensure(!is_digit('1.1'), 'is_digit 测试 4')
    ensure(!is_digit('gua'), 'is_digit 测试 5')
    ensure(!is_digit(''), 'is_digit 测试 6')
}

test_is_digit()

// 作业 7
//
const strip_left = (s) => {
    // s 是 String
    // 返回一个「删除了字符串开始的所有空格」的字符串

    // 返回 String

    // 提示:
    // 从左侧遍历字符串, 记录第一个非空格字符的位置, 并由此切割字符串

    // 分步提示:
    // 1. 使用作业 5 的 is_space 函数来判断 s 是否只包含空格，
    //    如果 s 只包含空格，返回空字符串
    // 2. 遍历字符串找到不是空格的字符的下标
    // 3. 切片并返回
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            count += 1
        } else {
            break
        }
    }
    return s.slice(count, s.length)
}


// 测试函数
const test_strip_left = () => {
    ensure(strip_left('  gua') === 'gua', 'strip_left 测试 1')
    ensure(strip_left(' gua  ') === 'gua  ', 'strip_left 测试 2')
    ensure(strip_left('') === '', 'strip_left 测试 3')
    ensure(strip_left('    ') === '', 'strip_left 测试 4')
}

test_strip_left()

// 作业 8
//
const strip_right = (s) => {
    // s 是 String
    // 返回一个「删除了字符串末尾的所有空格」的字符串

    // 返回 String

    // 提示:
    // 类似于作业 7
    // 区别在于这次需要从右至左遍历字符串

    // 分步提示:
    // 1. 创建一个循环, 从右到左遍历字符串
    //     从右到左遍历的方式是让数字从 n 到 0
    // 2. 遍历字符串找到不是空格的字符的下标
    // 3. 切片并返回
    let count = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == ' ') {
            count += 1
            log('count', count)
        } else {
            break
        }
    }
    let result = s.slice(0, s.length - count)
    log('result', result)
    return result
}

// 测试函数
const test_strip_right = () => {
    ensure(strip_right('gua') === 'gua', 'strip_right 测试 1')
    ensure(strip_right(' gua//') === ' gua', 'strip_right 测试 2')
    ensure(strip_right('') === '', 'strip_right 测试 3')
    ensure(strip_right('////') === '', 'strip_right 测试 4')
}

// test_strip_right()

// 作业 9
//
const strip = (s) => {
    // s 是 String
    // 返回一个「删除了字符串首尾的所有空格」的字符串

    // 返回 String

    // 提示:
    // 依次调用作业 7 和作业 8 中的函数即可

    // 分布提示:
    // 1. 调用 strip_left
    // 2. 对上一步的结果继续调用 strip_right
    // 3. 返回结果
    let left_result = strip_left(s)
    let right_result = strip_right(left_result)
    log('left_result, right_result', left_result, right_result)
    return right_result
}


// 测试函数
const test_strip = () => {
    ensure(strip('  gua') === 'gua', 'strip 测试 1')
    ensure(strip(' gua  ') === 'gua', 'strip 测试 2')
    ensure(strip('') === '', 'strip 测试 3')
    ensure(strip('    ') === '', 'strip 测试 4')
}

test_strip()

// 作业 10
//
// const replace = (s, old_str, new_str) => {
//     // 3 个参数 s old_str new_str 都是字符串
//     // 返回一个「将 s 中的 old_str 字符串替换为 new_str 字符串」的字符串
//     // 假设 old 存在并且只出现一次
//
//     // 返回 String
//
//     // 提示:
//     // 找到指定旧字符串的起始下标, 将其前后字符串与新字符串进行拼接
//
//     // 分步提示:
//     // 1. 找到 old_str 的下标
//     // 2. 把 s 切成 2 个不包含 old_str 的字符串
//     // 3. 拼接并返回结果
//     let length = old_str.length
//     let result = ''
//     for (var i = 0; i < s.length; i++) {
//         if (s[i] == old_str[0]) {
//             log('i', i)
//             break
//         }
//     }
//     for (let j = 0; j < i + 1; j++) {
//         result += s[j]
//         log('result', result)
//     }
//     let final_result = result + new_str
//     log('final_result', final_result)
//     return final_result
// }
//
// const test_replace = () => {
//     ensure(replace('abc', 'a', 'o') === 'obc', 'strip 测试 1')
// }
//
// test_replace()

// 测试函数自行添加
// 必须包含至少 3 个测试用例

const replace = (s, old_str, new_str) => {
    let length = old_str.length
    let result = ''
    for (var i = 0; i < s.length; i++) {
        log('before i', i, i + old_str.length - 1, s.slice(i, i + old_str.length))
        if (s.slice(i, i + old_str.length) == old_str) {
            log('i', i)
            break
        }
    }
    result = s.slice(0, i) + new_str + s.slice(i + new_str.length, s.length)
    log('result', result)
    return result
}

const test_replace = () => {
    ensure(replace('cab', 'a', 'o') === 'cob', 'replace 测试 1')
    ensure(replace('cabc', 'a', 'o') === 'cobc', 'replace 测试 2')
    ensure(replace('edcdkdf', 'cd', 'ee')) == 'edeekdf', 'replace 测试 3'
}

test_replace()
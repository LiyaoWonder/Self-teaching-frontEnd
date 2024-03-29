// 16/09/20
//
// 此为第 3 课的上课内容
//
// 今天上课的内容是
// 作业 2 讲解
// 选择结构与比较、逻辑运算
// 函数返回值
// 标准库
//
// 看不懂, 很正常, 因为我们还没上课


// ———选择控制———
//
// if 可以根据情况选择性执行某些语句
// 例如
//
// 定义一个变量 grade 代表年级

var grade = 3
// 如果 grade 小于 7
if(grade < 7) {
    // 这句 log 只在 grade 小于 7 这个条件满足的情况下会被执行
    log('小学生')
}

// 选择控制有多种不同的用法
// 只有if
if(1 > 2) {
    log('条件成立')
}

// if 带 else
// if else 必定会执行一个语句
if(1 > 2) {
    log('条件成立')
} else {
    log('条件不成立')
}

// 多个if else
var grade = 8
if(grade < 7) {
    log('小学生')
} else if(grade < 10) {
    log('初中生')
} else {
    log('高中生')
}

// 例子
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


// ——比较运算和逻辑操作——
//
// if 判断的条件其实是一个值, 这种值叫 布尔值 (bool, Boolean)
// 这种值只有两种结果, 一个是 真, 一个是 假
// 在 JavaScript 中, 这两种值分别是 true 和 false
//
// 1 > 2 实际上是一个值, false
// if 是根据这个值来决定执行的语句的
//
// 一共有 7 种比较运算
// 下面分别是
// 严格相等, 相等、不等、小于、大于、小于等于、大于等于
// ===
// ==
// !=
// <
// >
// <=
// >=

// 例子
// 1 === '1'
// 1 == 1
// 1 == 2
// 1 != 1
// 1 != 2
// 1 < 2
// 1 > 2
// 1 <= 1
// 1 >= 1

// 除了比较运算, 还有三种逻辑操作
// 三种逻辑操作分别是 与、或、非
// 在 JavaScript 中 分别如下
// &&
// ||
// !
//
// 用到的地方很广, 比如你登录网站的时候, 服务器要做如下判断
// if(用户名存在 && 密码验证成功) {
//     登录成功
// } else {
//     登录失败
// }

// 注意
// 比较运算和逻辑操作的结果都是 bool（布尔类型），结果是 True 和 False

// 例子
// 1 == 1 && 2 == 2   // true
// 1 == 1 && 1 == 2   // false
// 1 == 1 || 1 == 2    // true
// ! 1 == 1

// 可以加括号来让代码直观一点
// ((1 == 1) && (2 == 2)) || (1 == 2)


// 函数返回值
//
// 函数不仅可以合并操作重复性的代码
// 还可以通过计算得到一个结果, 结果就是返回值
// 函数可以有「返回值」
// 返回值的意思是函数调用的结果是一个值，可以被赋值给变量


// 例
// 定义一个函数 add
// 接受 a b 两个参数
var add = function(a, b) {
    // 用 return 语句来得到一个返回值
    // 函数执行到 return 的时候 就结束了
    return a + b
}

// 用法
log('add 函数的返回值', add(1, 2))
number = add(1, 3)
log('add 函数的返回值 number ', number)

// 注意看上面的语句，add(1, 3)被当做一个值赋值给了变量number
// 也就是说这个函数调用是一个数值，数值的值就是函数的返回值
// 例如，使用函数来求绝对值
var abs = function(n) {
    if(n < 0) {
        n = -n
    }
    return n
}

log(abs(0))
log(abs(-8))
log(abs(3))

// 函数执行遇到 return 就结束
var minus = function(a, b) {
    return a - b
    log('这一句是不会被执行的, 因为 return 的时候函数就结束了')
}

// 例
// 使用函数检查一个数字是否是奇数（奇数对2取余数不等于0）
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

// 练习，实现isEven函数，偶数返回True，奇数返回False

// 返回两个参数中较小的一个
var min = function(a, b) {
    if(a < b) {
        return a
    } else {
        return b
    }
}

log(min(1, 2))
log(min(3, 2))

// 练习，实现max函数，接受两个参数，返回较大的那一个值


// 标准库
// 库 是一个编程术语, 意思是一系列函数的集合
//
// 标准库 也是一个术语, 指的是语言自带的库
//
// JavaScript 的文档(以 MDN 为例)有所有标准库的文档(当然, 不那么容易看懂)
// 我们可以用标准库实现很多功能
//
// 使用标准库就是直接使用即可
// 例如, 标准数学库可以这样用

// 得到一个随机的小数(0 - 1 之间)
Math.random()

// 求正弦
log('30度的正弦应该是 0.5', Math.sin(30))
// 但是结果并不是这样
// 所以应该查看文档
//
// JavaScript 有很多有用的标准库, 所以应该大致翻阅一下目录
// 这样遇到某件事/问题你就知道该用什么方法去解决了



// CSS 内容


CSS 的使用
内联(inline style attribute) 非常不推荐
<head> 标签内的 <style> 标签
<link> 标签中的外联



三种主要的选择器
元素选择器
class 选择器
id 选择器



样式优先级(从高到低)
!important
内联样式
<style> 中的样式
link 中的样式



选择器优先级(从高到第)
!important
内联样式
id 选择器
class 选择器
元素选择器



盒模型
内容
padding
border
margin



元素定位
static relative absolute fixed
非 static 元素可以用 top left bottom right 属性来设置坐标
relative 是相对定位
absolute 完全绝对定位, 忽略其他所有东西, 往上浮动到 relative 的元素
fixed 基于 window 的绝对定位, 不随页面滚动改变



display 属性
block inline inline-block

block
占一行
默认 block 的标签有
div p ul ol li h1 h2 h3 h4 h5 h6

inline
只占 content 的尺寸

inline-block
inline 布局 block 模式
inline-block 对外表现为 inline，所以可以放在一行
对内表现为 block，所以可以设置宽高

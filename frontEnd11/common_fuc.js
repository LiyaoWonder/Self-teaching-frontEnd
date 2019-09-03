var e = function(selector) {
    return document.querySelector(selector)
}

var log = function() {
    console.log.apply(console, arguments)
}

var appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

// responseClass 是 事件委托 的当事方
var bindAll = function(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

// find 函数可以查找以 element 为根的所有子元素
var find = function(element, selector) {
    //  以任意元素查找 querySelector 找到就是子元素
    return element.querySelector(selector)
}

var removeClassAll = function(element, className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}
var log = function() {
    console.log.apply(console, arguments)
}

// 捕获class
var e = function(selector) {
    return document.querySelector(selector)
}

var addButton = e('.button-add')

addButton.addEventListener('click', function(){
    log('click')
    // 找到 input 的地方
    var todoInput = e('.text-input')
    // 获得 input 的 value
    var todo = todoInput.value
    // 添加到 container 的 content 中
    // 事件委托
    insertTodo(todo, false)
    // var del = document.getElementByTagClass("text-input").value
    // return del.remove()
    clearThis(todoInput)
})


var todo = function() {
    var td = {
        actions: {},
        keydowns: {},
    }

    window.addEventListener('keydown', function(event){
        log(event)
        td.keydowns[event.key] = true
    })

    window.addEventListener('keyup', function(event){
        td.keydowns[event.key] = false
    })

    td.registerAction = function(key, callback) {
        td.actions[key] = callback
    }

    return td
}


todo()


window.addEventListener('keydown', function(event){
    log(event)
    window.keydowns[event.key] = true
})
// var todo = todo()
// todo.registerAction("Enter", function(){
//     log('click')
//     // 找到 input 的地方
//     var todoInput = e('.text-input')
//     // 获得 input 的 value
//     var todo = todoInput.value
//     // 添加到 container 的 content 中
//     // 事件委托
//     insertTodo(todo, false)
//     // var del = document.getElementByTagClass("text-input").value
//     // return del.remove()
//     clearThis(todoInput)
// })



var clearThis = function(target) {
        target.value= "";
    }

// 事件委托之 insertTodo
var insertTodo = function(todo, done) {
    // 找到 container
    var todoContainer = e('.todoContainer')
    // 这种添加方式一定是加入一套HTML的模版
    var temp = templateTodo(todo, done)
    // 将 temp 添加到HTML中
    // afterbegin: 插入元素内部的第一个子节点之前
    todoContainer.insertAdjacentHTML('afterbegin', temp)
}

// 添加内容的一套模版
var templateTodo = function(todo, done) {
    var status = ''
    if (done) {
        status = 'done'
    }
    var temp = `
    <div class="todo-cell ${status}">
        <span class="todo-content" contenteditable="true">${todo}</span>
        <button class="todo-done" type="button" name="完成">我完成啦！</button>
        <button class="todo-delete"type="button" name="button">不想再看见它啦！</button>
    </div>
    `
    return temp
}

// 事件委托
var todoContainer = e('.todoContainer')

todoContainer.addEventListener('click', function(event){
    log('container click', event, event.target)
    // 通过event.target的class来检查点击的是什么
    var target = event.target
    // classList.contains

    if(target.classList.contains('todo-done')) {
        log('done')
        // target.parentElement 用来获取按钮的父节点
        var todoDiv = target.parentElement
        toggleClass(todoDiv, 'done')
    } else if (target.classList.contains('todo-delete')) {
        log('delete')
        // 找到按钮的父节点并且删除 访问parentElement
        var todoDiv = target.parentElement
        todoDiv.remove()
    }
})

// 开关某个状态
var toggleClass = function(element, className) {
    // 检查元素是否拥有某个 classs
    if (element.classList.contains(className)) {
        // 拥有则删除之
        element.classList.remove(className)
    } else {
        // 没有则加上
        element.classList.add(className)
    }
}

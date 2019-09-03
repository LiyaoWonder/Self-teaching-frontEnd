/*
1. 不要慌
2. 拆分需求，如下所示(以5-10min为拆分粒度)
3. 有问题的需求先跳过，最后回头再看
4. 边实现需求边测试，不要到最后一锅粥
*/


/*
1. 往页面中添加输入框与提交按钮
    绑定提交按钮事件
    点击提交按钮会发送创建 todo 的 ajax
    ajax 成功后会在页面中添加创建
2. 载入所有的 todos
3. 现实所有的 todos
4. 每一个 todo 要显示删除按钮
5. 删除按钮可以删掉这个 todo
    绑定删除按钮的事件
    写出删除函数 需要 todo_id
    在事件中调用删除函数， 需要得到 todo_id 并传给删除函数
6. 每个 todo 要显示更新按钮
7. 点击更新按钮会进行保存
8. 添加CSS样式
*/


// tool1: selector
var e = function(selector) {
    return document.querySelector(selector)
}


// tool2: insertHtml
var appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

// tool3: ajax
var ajax = function(method, path, data, responseCallback) {
    // 发送登录数据
    // 创建 AJAX 对象
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open(method, path, true)
    // 设置发送的数据的格式 headers是一个字典要把所有的东西都放进去
    r.setRequestHeader('Content-Type', 'application/json')
    // 注册响应函数
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            responseCallback(r)
        }
    }
    r.send(data)
}

// tool4: log
var log = function() {
    console.log.apply(console, arguments)
}

// 1. 往页面中添加输入框与提交按钮
var init = function() {
    var t = `
    <input id=id-input-task>
    <button id=id-button-add>add todo</button>
    `
    appendHtml(e('id-div-todo-container'), t)

}

// 2. 载入所有 todos
var baseUrl = 'http://www.XXXX'
var loadTodos = function() {
    var method = 'GET'
    var path = '/all'
    var url = baseUrl + path
    ajax(method, url, '', function() {
        var todos = JSON.parse(r.response)
        log(todos)
        insertTodos(todos)
    })
}

// 3.show all 显示所有的 todos
var insertTodos = function(todos) {
    var container = e('#id-div-todo-container')
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i]
        var t = rodoTemplate(todo)
        appendHtml(container, t)
    }
}

// 4. 每一个 todo 要显示删除按钮
var todoTemplate = function(todo) {
    /*
    {
        'created_time': 1474785849,
        'id': 698,
        'qq': 995399396
        'task': 'study'
    }
    */
    var task = todo.task
    var id = todo.id
    // 对删除按钮绑事件用class
    // 添加删除按钮
    var t = `
        <div id=${id}>
            <button class=todo-delete>Delete</button>
            <button class=todo-update>Update</button>
            <span id=task-${id}>
            ${task}
            </span>
         </div>
        `
}

// 5. 删除按钮可以删掉这个 todo
//     绑定删除按钮的事件
//     写出删除函数 需要 todo_id
//     在事件中调用删除函数， 需要得到 todo_id 并传给删除函数
//     删除 todo 这个 div 暂时不关心服务器那边是否删除成功
var bindEventDelete = function() {
    var container = e('#id-div-todo-container')
    container.addEventListener('click', function(event) {
        var target = event.target
        if (target.classList.contains('todo-delete')) {
            log('This is a delete button.')
            // 获取 todo id
            var todoId = target.parentElement.id
            deleteTodo(todoId)
            // 删除 todo 的 div
            target.parentElement.remove()
        }
    })
}

var deleteTodo = function(todoId) {
    var url = 'http://'
    ajax('GET', url, '', function(r) {
        var t = JSON.parse(r.response)
        console.log(t)
    })
}

// 8. 添加CSS
var addCss = function() {
    var style = `
    <style>
        div {
            outline: blue 1px solid;
        }
    </style>
    `
    var head = e('head')
    appendHtml(head, style)
}

// 7. 点击更新按钮
//          给提交按钮绑定事件
//          点击提交按钮的时候 发送 ajax 请求到服务器
var bindEventUpdate = function() {
    var container = e('#id-div-todo-container')
    container.addEventListener('click', function(event) {
        var target = event.target
        if (target.classList.contains('todo-update')) {
            log('This is a update button.')
            // 获取 todo id
            var todoId = target.parentElement.id
            // 往 div 中添加两个元素 input 和 提交按钮
            // 得到 input 的值

            var t = `
            <input id=update-${todoId}>
            <button id=submit class=button-submit>提交</button>
            `
            appendHtml(target.parentElement, t)
        }
    })
}

var bindEventSubmit = function() {
    var container = e('#id-div-todo-container')
    container.addEventListener('click', function(event) {
        var target = event.parentElemen.target
        // log(target.classList)
        if (target.classList.contains('button-submit')) {
            log('This is a submit button.')
            var todoId = target.parentElement.id
            //  点击提交按钮的时候 发送 ajax 请求到服务器
            //          得到 input 的值
            //          input 的 id 是 update-<id>
            var inputId = 'update-' + todoId
            var selector = '#' + inputId
            var task = e(selector).value
            //          发送跟新请求
            updateTodo(todoId, task)
            //          更新页面上的 todo task
            var taskId = 'task-' + todoId
            var selector = '#' + taskId
            e(selector).innerHTML = task
        }
    })
}

var updateTodo = function(todoId, task) {
    var url = ''
    var data = {
        'task': task,
    }
    data = JSON.stringify(data)
    ajax('POST', url, null, data, function(r) {
        var t = JSON.parse(r.response)
        console.log(t)
    })
}

var bindEvents = function() {
    bindEventDelete()
    bindEventUpdate()
    // 给提交按钮绑定事件
    bindEventSubmit()
}

var __main = function() {
    loadTodos()
    addCss()
    bindEvents()
}

__main()
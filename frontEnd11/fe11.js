// 1.写出HTML
// 2.给按钮绑定事件

// var bindEventToggle = function() {
//     var btn = e('.id-menu-toggle')
//
//     bindEvent(btn, 'click', function(event) {
//         console.log('click button')
//         // 找到 id-menu-content
//         var content = e('.id-menu-content')
//         // 开关 id-hide class
//         toggleClass(content, 'id-hide')
//     })
// }

var bindEventToggles = function() {
    var btn = '.id-menu-toggle'
    bindAll(btn, 'click', function(event) {
        log('click button')
        // 找到自己菜单的 id-menu-content
        var parent = event.target.parentElement
        var contents = find(parent, '.id-menu-content')
        // 开关 id-hide class
        toggleClass(contents, 'id-hide')
    })
}

bindEventToggles()
// 3.在点击按钮的时候切换HTML内容
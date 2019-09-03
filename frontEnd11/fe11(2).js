var bindEventItems = function() {
    // 注意 .
    var selector = '.class-item'
    bindAll(selector, 'mouseenter', function(event) {
        log('mouseenter')
        // 找到自己选择的图片
        var item = event.target
        // 加上 class-highlight
        item.classList.add('class-highlight')
    })
    bindAll(selector, 'mouseleave', function(event) {
        log('mouseleave')
        // 找到自己选择的图片
        var item = event.target
        // 删除 class-highlight
        item.classList.remove('class-highlight')
    })
}

bindEventItems()
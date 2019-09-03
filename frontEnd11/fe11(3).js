// 轮播图

// 每一个网站都有的组件 轮播图组件

/*

1. 自动播放

2. 通过index来运转

3. 通过左右button来选择

    比较担心这些功能之前会不会有耦合
*/

/*
1. 有三个 img 标签，只显示当前活动的 img 标签
2. 加一个按钮，点击的时候切换图片
    切换图片： 1. 先求出active在slide中的index(0,1,2) 2. 给每一个要展示的图片加上class

    每次都是在父节点上绑上？ 不太理解
*/


var bindEventSlide = function() {
    var selector = '.class-slide-button'
    bindAll(selector, 'click', function(event) {
        log('btn-click next page')
        // 找到 slide 的 div
        var slide = event.target.parentElement
        // 得到图片总数
        var numberOfImgs = parseInt(slide.dataset.imgs)
        log(`${numberOfImgs}`, typeof numberOfImgs)
        // 得到当前图片的 index
        var activeIndex = parseInt(slide.dataset.active)
        log(activeIndex, typeof activeIndex)
        // 求出下一张图片的 id
        // 0 1 2 0 1 2
        var nextIndex = (activeIndex + 1) % numberOfImgs
        // 设置父节点的 data-active
        slide.dataset.active = nextIndex
        var nextSelector = '#id-imgs-' + String(nextIndex)
        // 删除当前图片的 class 给下一张图片加上 class
        removeClassAll(slide, 'class-img-active')
        var img = e(nextSelector)
        img.classList.add('class-img-active')
    })

    var selector = '.class-lastSlide-button'
    bindAll(selector, 'click', function(event) {
        log('btn-click last page')
        var slide = event.target.parentElement
        var numberOfImgs = parseInt(slide.dataset.imgs)
        var activeIndex = parseInt(slide.dataset.active)
        // 求出上一张图片的 index
        // 0 1 2 1 0 2
        //  2 - 1 1 - 1
        var lastIndex = (activeIndex + 2) % 3
        slide.dataset.active = lastIndex
        var lastSelector = '#id-imgs-' + String(lastIndex)
        // 删除当前图片的 class 给下一张图片加上 class
        removeClassAll(slide, 'class-img-active')
        var img = e(lastSelector)
        img.classList.add('class-img-active')
    })
}

bindEventSlide()
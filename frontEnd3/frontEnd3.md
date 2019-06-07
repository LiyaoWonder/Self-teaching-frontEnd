# CSS初试

## CSS三种写法
    <h style:>内联(inline style attribute) 即元素 不推荐
    <head> 标签内的 <style> 标签
    <link> 标签中的外联

    优先级
            样式优先级(从高到低)

            !important  --> color: white !important;
            内联样式
            <style> 中的样式
            link 中的样式


## 选择器
    id选择 --> #id name {}
    tag选择 --> tag {} 元素选择
    class选择 --> .class {}

    优先级
        选择器优先级(从高到第)

        !important
        内联样式
        id 选择器
        class 选择器
        元素选择器

## 盒模型

    content
    padding
    border
    margin

    元素定位(position)
    static relative absolute fixed
    非 static 元素可以用 top left bottom right 属性来设置坐标
    relative 是相对定位
    absolute 完全绝对定位, 忽略其他所有东西, 往上浮动到 relative 的元素
    fixed 基于 window 的绝对定位, 不随页面滚动改变

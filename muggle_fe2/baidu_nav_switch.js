var theme = {
    night: "background: black; color: white;",
    day: "background: white; color: black;",
}

var btn = document.querySelector('.s_tab_inner')
var body = document.querySelector('body')

var theme_toggle = function() {
    if (body.style.cssText == theme.night) {
        body.style.cssText = theme.day
    } else {
        body.style.cssText = theme.night
    }
}

var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

bindEvent(btn, 'click', theme_toggle)
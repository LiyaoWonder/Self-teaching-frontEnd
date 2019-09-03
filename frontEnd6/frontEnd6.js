var log = function(){
    console.log.apply(console, arguments)
}


/*
s 是一个string
返回一个「删除了字符串开始的所有空格」的字符串
返回一个string
*/
a = "   abcdefg"
var strip_left = function(s) {
    var l = s.length
    if (l == 0) {
        return ''
    } else {
        for (var i = 0; i < l; i++){
            log('for', i, s[i])
            if (s[0] == [" "]){
                log('if')
                var s = s.slice(i + 1)
                continue
            } else {
                log(s.slice(0))
                return s.slice(0)
                break
            }
        }
    }
}

strip_left(a)

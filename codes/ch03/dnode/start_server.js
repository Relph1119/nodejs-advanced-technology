/**
 * @author: HuRuiFeng
 * @file: start_server.js
 * @time: 2023/1/16 20:25
 * @project: nodejs-advanced-technology
 * @desc: P181 DNode启动服务器端
 */

var dnode = require('dnode')
var server = dnode({
    transform: function (s, cb) {
        cb(s.replace(/[aeiou]{2,}/, 'oo').toUpperCase())
    }
})

server.listen(5004)

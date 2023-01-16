/**
 * @author: HuRuiFeng
 * @file: debug_demo.js
 * @time: 2023/1/13 20:29
 * @project: nodejs-advanced-technology
 * @desc: P48 使用debug模块进行调试
 */

var debug = require('debug')('http'),
    http = require('http'),
    name = 'My App'

debug('booting %o', name)

http.createServer(function (req, res) {
    debug(req.method + ' ' + req.url)
    res.end('hello\n')
}).listen(3000, function () {
    debug('listening')
})

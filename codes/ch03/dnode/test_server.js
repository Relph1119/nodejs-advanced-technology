/**
 * @author: HuRuiFeng
 * @file: test_server.js
 * @time: 2023/1/16 20:27
 * @project: nodejs-advanced-technology
 * @desc: 测试服务器端是否启动成功
 */
var dnode = require('dnode')

var d = dnode.connect(5004)
d.on('remote', function (remote) {
    remote.transform('beep', function (s) {
        console.log('beep => ' + s)
        d.end()
    })
})


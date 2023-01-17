/**
 * @author: HuRuiFeng
 * @file: postmortem.js
 * @time: 2023/1/17 14:04
 * @project: nodejs-advanced-technology
 * @desc: P248 事后分析示例
 */

var app = require('express')()
var http = require('http').Server(app)
var heapdump = require('heapdump')
var leakObjs = []

function LeakClass() {
    this.x = 1
}

app.get('/', function (req, res) {
    for (var i = 0; i < 10000; i++) {
        leakObjs.push(new LeakClass())
    }
    res.send('<h2>Hello world</h2>>')
})

setInterval(function () {
    heapdump.writeSnapshot('.' + Date.now() + '.heapsnapshot')
}, 3000)

http.listen(3000, function () {
    console.log('listening on port 3000')
})

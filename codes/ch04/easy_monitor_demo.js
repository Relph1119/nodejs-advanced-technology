/**
 * @author: HuRuiFeng
 * @file: easy_monitor_demo.js
 * @time: 2023/1/17 14:16
 * @project: nodejs-advanced-technology
 * @desc: Easy-Monitor示例
 */
const easyMonitor = require('easy-monitor')
easyMonitor('Mercury')
const express = require('express')
const app = express()

app.get('/hello', function (req, res, next) {
    res.send('hello')
})

app.listen(3000)

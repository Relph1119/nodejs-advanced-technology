/**
 * @author: HuRuiFeng
 * @file: db.js
 * @time: 2023/1/16 11:05
 * @project: mvc
 * @desc:
 */

const Mongoose = require('mongoose')

// 2. 通过Mongoose.connect连接MongoDB数据库
Mongoose.connect("mongodb://127.0.0.1:27017/db_helloworld")

Mongoose.connection.on("error", function (error) {
    console.log("数据库连接失败" + error)
})

Mongoose.connection.on("open", function () {
    console.log("数据库连接成功")
})

module.exports = Mongoose

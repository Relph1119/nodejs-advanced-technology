/**
 * @author: HuRuiFeng
 * @file: user.js.js
 * @time: 2023/1/16 11:05
 * @project: mvc
 * @desc: User模型
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MongooseDao = require('mongoosedao')

const userSchema = new Schema(
    {
        "name": "String",
        "password": "String"
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User

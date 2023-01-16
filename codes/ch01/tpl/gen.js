/**
 * @author: HuRuiFeng
 * @file: gen.js
 * @time: 2023/1/13 20:07
 * @project: nodejs-advanced-technology
 * @desc: P34 使用模板引擎
 */
var fs = require('fs');
var nunjucks = require('nunjucks')

var tpl = fs.readFileSync('./gen.tpl').toString()

var compliedData = nunjucks.renderString(tpl, {username: 'James'})
console.log(compliedData)
fs.writeFileSync('./gen.out', compliedData)

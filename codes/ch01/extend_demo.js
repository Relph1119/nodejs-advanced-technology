/**
 * @author: HuRuiFeng
 * @file: extend_demo.js
 * @time: 2023/1/13 20:57
 * @project: nodejs-advanced-technology
 * @desc: P56 xtend库示例
 */

const extend = require('xtend')

// 返回一个新对象
const combination = extend({

}, {
    a : "a",
    b : "c"
}, {
    b : "b"
})

console.log(combination)

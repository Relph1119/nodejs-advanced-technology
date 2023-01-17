/**
 * @author: HuRuiFeng
 * @file: test_framework_demo.js
 * @time: 2023/1/17 16:18
 * @project: nodejs-advanced-technology
 * @desc: P292 编写测试框架
 */

const rgb = require('barecolor')

module.exports = function (headline) {
    // 定义好测试用例分组的数据存储结构
    const suite = [], before = [], after = [], only = []

    // 外层suite存储
    function self(name, fn) {
        suite.push({name: name, fn: fn})
    }

    // only存储
    self.only = function (name, fn) {
        only.push({name: name, fn: fn})
    }

    // hook存储
    self.before = function (fn) {before.push(fn)}
    self.after = function (fn) {after.push(fn)}
    self.skip = function (fn) {}

    // 核心执行方法
    self.run = async function() {
        // 确认是否有only分组，如果存在则执行only分组里的所有测试用例，否则执行suite分组里的测试
        const tests = only[0] ? only : suite

        rgb.cyan(headline + ' ')

        // 遍历测试，执行kook和具体的测试方法
        for (const test of tests) {
            try {
                for (const fn of before) await fn()
                await test.fn()
                rgb.gray('·')
            } catch (e) {
                for (const fn of after) await fn()
                rgb.red(`\n\n! ${test.name} \n\n`)
                prettyError(e)
                return false
            }
        }

        for (const fn of after) await fn()
        rgb.greenln(`V ${tests.length}`)
        console.info('\n')
        return true
    }
    return self
}

function prettyError(e) {
    const msg = e.stack
    if (!msg) return rgb.yellow(e)

    const i = msg.indexOf('\n')
    rgb.yellowln(msg.slice(0, i))
    rgb.gray(msg.slice(i))
}

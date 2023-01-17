/**
 * @author: HuRuiFeng
 * @file: tap_demo.js
 * @time: 2023/1/17 14:49
 * @project: nodejs-advanced-technology
 * @desc: P272 基于node-tap编写的测试用例
 */

var tap = require('tap')

// 可以使用test，仅使用顶层对象
tap.pass('this is fine')

tap.equal(1, 1, 'check if numbers still work')
tap.not(1, 2, '1 should not equal 2')

// 可以对sub-test进行分组
// 对异步支持友好

tap.test('first stuff', function (t) {
    t.ok(true, 'true is ok')
    t.match({a: [1, 2, 3]}, {a: [1, 2, 3]})
    t.end()
})

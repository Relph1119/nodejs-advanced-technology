/**
 * @author: HuRuiFeng
 * @file: test.js.js
 * @time: 2023/1/17 14:44
 * @project: nodejs-advanced-technology
 * @desc: Baretest测试脚本
 */

const test = require('baretest')('Sum tests')
const assert = require('assert')
const sum = require('./sum')

test('1 + 2 = 3', function () {
    assert.equal(sum(1, 2), 3)
})

test('2 + 3 != 6', function () {
    assert.notEqual(sum(2, 3), 6)
})

test.only('2 + 3 = 5', function () {
    assert.equal(sum(2, 3), 5)
})

test.run()

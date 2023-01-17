/**
 * @author: HuRuiFeng
 * @file: spy_demo.js
 * @time: 2023/1/17 16:07
 * @project: nodejs-advanced-technology
 * @desc: P288 Spy示例
 */

const sinon = require('sinon')
const expect = require('chai').expect

const orginObj = {
    'launch': function () {
        console.log('I am launch function')
    }
}

// 监视orginObj.launch.
const myspy = sinon.spy(orginObj, 'launch')
console.log(typeof myspy)

// 调用orginObj.launch
orginObj.launch('sss')

// 函数调用次数
expect(orginObj.launch.callCount).to.be.equal(1)

// 函数参数
expect(orginObj.launch.called).be.true

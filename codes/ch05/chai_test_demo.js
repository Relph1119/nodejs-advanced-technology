/**
 * @author: HuRuiFeng
 * @file: chai_test_demo.js
 * @time: 2023/1/17 15:03
 * @project: nodejs-advanced-technology
 * @desc: P277 使用Chai.js模块示例
 */

const assert = require('chai').assert

const foo = 'foo'
// typeof
assert.typeOf(foo, 'string')
// equal
assert.equal(foo, 'foo')
// lengthOf第三个参数表示断言可选信息
assert.lengthOf(foo, 3, 'foo的长度等于3')

const should = require('chai').should()

foo.should.be.a('string')
foo.should.have.lengthOf(3)

const expect = require('chai').expect

const dinner = {fruits: ['apple', 'banana', 'orange']}

expect(foo).to.be.a('string')
expect(foo).to.equal('foo')
expect(foo).to.have.lengthOf(3)
expect(dinner).to.have.property('fruits').with.lengthOf(3)

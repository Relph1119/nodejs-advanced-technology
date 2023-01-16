/**
 * @author: HuRuiFeng
 * @file: user.js.js
 * @time: 2023/1/16 11:08
 * @project: mvc
 * @desc: P92 测试User模型
 */

import test from 'ava'

require('../../../db')

const User = require('../../../models/user')

let user = new User({
    username: 'i5ting',
    password: '0123456789'
})

test('User.save()', async t => {
    let u = await user.saveAsync()
    t.is(u.username, 'i5ting')
})

test.afterEach(async t => {
    await User.deleteOne({username: 'i5ting'})
})

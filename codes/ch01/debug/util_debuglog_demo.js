/**
 * @author: HuRuiFeng
 * @file: util_debuglog_demo.js
 * @time: 2023/1/13 20:27
 * @project: nodejs-advanced-technology
 * @desc: P47 使用util.debuglog方法
 */

const util = require('util')
const debuglog = util.debuglog('foo')

debuglog('hello from foo [%d]', 123)

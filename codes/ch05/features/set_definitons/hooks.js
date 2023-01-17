/**
 * @author: HuRuiFeng
 * @file: hooks.js.js
 * @time: 2023/1/17 15:41
 * @project: nodejs-advanced-technology
 * @desc:
 */

var {defineSupportCode} = require('cucumber')

defineSupportCode(function ({After}) {
    After(function () {
        return this.driver.quit()
    })
})

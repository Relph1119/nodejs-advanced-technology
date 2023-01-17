/**
 * @author: HuRuiFeng
 * @file: world.js
 * @time: 2023/1/17 15:31
 * @project: nodejs-advanced-technology
 * @desc:
 */

require('chromedriver')
var seleniumWebdriver = require('selenium-webdriver')
var {defineSupportCode} = require('cucumber')

function CustomWorld() {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build()
}

defineSupportCode(function ({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
})

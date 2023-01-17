/**
 * @author: HuRuiFeng
 * @file: browser_steps.js
 * @time: 2023/1/17 15:35
 * @project: nodejs-advanced-technology
 * @desc: P287 验证代码，存放测试用例
 */
const seleniumWebdriver = require('selenium-webdriver');
const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
    Given('I am on the Cucumber.js GitHub repository', function () {
        return this.driver.get('https://github.com/cucumber/cucumber-js/tree/master')
    })

    When('I click on {string}', function (text) {
        return this.driver.findElement({linkText: text}).then(function (element) {
            return element.click()
        })
    })

    Then('I should see {string}', function (text) {
        const xpath = "//*[contains(text(), '" + text + "')]";
        const condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000)
    })
})

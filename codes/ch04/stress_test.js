/**
 * @author: HuRuiFeng
 * @file: stress_test.js
 * @time: 2023/1/17 13:50
 * @project: nodejs-advanced-technology
 * @desc: P241 压力测试
 */
const autocannon = require('autocannon')

const instance = autocannon({
    url: 'http://localhost:3000',
    setupClient: setupClient
}, (err, result) => handleResults(result))
// 压力测试完成时，触发done事件
instance.on('done', handleResults)

instance.on('tick', () => console.log('ticking'))

instance.on('response', handleResponse)

function setupClient(client) {
    client.on('body', console.log)

}

function handleResponse(client, statusCode, resBytes, responseTime) {
    console.log(`Got response with code ${statusCode} in ${responseTime} milliseconds`)
    console.log(`response: ${resBytes.toString()}`)

    // 更新body或headers内容
    client.setHeaders({new: "header"})
    client.setBody('new body')
    client.setHeadersAndBody({new: 'header'}, 'new body')
}

function handleResults(result) {

}

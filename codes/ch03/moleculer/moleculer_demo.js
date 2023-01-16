/**
 * @author: HuRuiFeng
 * @file: moleculer_demo.js
 * @time: 2023/1/16 20:42
 * @project: nodejs-advanced-technology
 * @desc: P187 服务调用示例
 */

const { ServiceBroker } = require('moleculer')

// 创建ServiceBroker
const broker = new ServiceBroker()

// 定义服务
broker.createService({
    name: 'math',
    actions: {
        add(ctx) {
            return Number(ctx.params.a) + Number(ctx.params.b)
        }
    }
})

// 启动Broker
broker.start()
.then(() => broker.call("math.add", {a: 5, b: 3}))
.then(res => console.log("5 + 3 = ", res))
.catch(err => console.error(`Error occured! ${err.message}`))

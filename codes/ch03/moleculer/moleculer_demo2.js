/**
 * @author: HuRuiFeng
 * @file: moleculer_demo2.js
 * @time: 2023/1/16 20:47
 * @project: nodejs-advanced-technology
 * @desc: 创建两个以上的服务调用
 */

const {ServiceBroker} = require('moleculer')
const HTTPServer = require('moleculer-web')

// 为node-1创建Broker
// 定义nodeID并放到参数里
const brokerNode1 = new ServiceBroker({
    nodeID: 'node-1',
    transporter: "NATS"
})

// 创建网关服务
brokerNode1.createService({
    // 定义服务名
    name: "gateway",
    // 加载HTTP服务
    mixins: [HTTPServer],
    settings: {
        routes: [
            {
                aliases: {
                    "GET /products": "products.listProducts"
                }
            }
        ]
    }
})

// 为node-2创建Broker
// 定义nodeID并放到参数里
const brokerNode2 = new ServiceBroker({
    nodeID: "node-2",
    transporter: "NATS"
})

// 创建”products“服务
brokerNode2.createService({
    // 定义服务名
    name: "products",
    actions: {
        listProducts(ctx) {
            return [
                {name: "Apples", price: 5},
                {name: "Oranges", price: 3},
                {name: "Bananas", price: 2}
            ]
        }
    }
})

// 同时启动两个Broker
Promise.all([brokerNode1.start(), brokerNode2.start()])

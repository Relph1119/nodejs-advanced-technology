/**
 * @author: HuRuiFeng
 * @file: seneca_demo.js
 * @time: 2023/1/16 20:32
 * @project: nodejs-advanced-technology
 * @desc: P183 Seneca基于消息的微服务系统示例
 */

const seneca = require('seneca')
seneca.bind('role:math, cmd:sum', (msg, reply) => {
    reply(null, {answer: (msg.left + msg.right)})
})

seneca.use({
    role: 'math',
    cmd: 'sum',
    left: 1,
    right: 2
}, (err, result) => {
    if(err) {
        return console.error(err)
    }
    console.log(result)
})


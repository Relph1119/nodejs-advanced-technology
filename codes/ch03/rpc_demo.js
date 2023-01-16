/**
 * @author: HuRuiFeng
 * @file: rpc_demo.js
 * @time: 2023/1/16 20:17
 * @project: nodejs-advanced-technology
 * @desc: P181 RPC通信协议的编码和解码过程
 */

// 编码
function encode() {
    const payload = {
        service: 'com.alipay.nodejs.HelloService:1.0',
        methodName: 'plus',
        args: [1, 2]
    };
    const body = new Buffer(JSON.stringify(payload))

    const header = new Buffer(10)
    header[0] = 0
    header.writeInt32BE(1000, 1)
    header[5] = 1
    header.writeInt32BE(body.length, 6)

    const packet = Buffer.concat([header, body], 10 + body.length)

    return packet
}

function decode(buf) {
    // 解码
    const type = buf[0]
    const requestId = buf.readInt32BE(1)
    const codec = buf[5]
    const bodyLength = buf.readInt32BE(6)
    const body = buf.slice(10, 10 + bodyLength)
    const payload = JSON.parse(body)
}


/**
 * @author: HuRuiFeng
 * @file: index.js
 * @time: 2023/1/16 10:48
 * @project: mvc
 * @desc:
 */
module.exports = {
    'start': function (client) {
        client.url('http://localhost:8080/')
    },

    '<h1>visible' : function (client) {
        client.expect.element('[h1').to.be.visible
    },

    'end': function (client) {
        client.end()
    }
}

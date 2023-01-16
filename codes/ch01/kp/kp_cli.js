/**
 * @author: HuRuiFeng
 * @file: kp_cli.js
 * @time: 2023/1/13 17:00
 * @project: nodejs-advanced-technology
 * @desc: P23 kp命令实现
 */

var debug = require('debug')('kp')

function exec_kp(server_port, pre) {
    if (arguments.length == 1) {
        pre = "";
    }

    var child_process = require('child_process')
    var script = pre + ' losf -i:' + server_port + '|xargs killall'

    debug(script)

    child_process.exec(script, function (error, stdout, stderr) {
        if (error != null) {
            console.log('Failed to kill process on port ' + server_port + ':' + error)
        } else {
            console.log('Killed process on port ' + server_port)
        }
    })
}

module.exports = exec_kp

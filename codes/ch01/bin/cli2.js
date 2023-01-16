/**
 * @author: HuRuiFeng
 * @file: cli2.js.js
 * @time: 2023/1/13 16:22
 * @project: nodejs-advanced-technology
 * @desc: P12 基于Yargs库解析process.argv
 */

require('yargs')
    .command('serve [port]', 'start the server', (yargs) => {
        yargs.positional('port', {
            describe: 'port to bind on',
            default: 5000
        })
    }, (argv) => {
        if (argv.verbose)
            console.log(`start server on:${argv.port}`)
        serve(argv.port)
    })
    .option('verbose', {
        alias: 'v',
        default: false
    }).argv

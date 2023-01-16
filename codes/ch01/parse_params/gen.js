/**
 * @author: HuRuiFeng
 * @file: gen.js
 * @time: 2023/1/13 20:13
 * @project: nodejs-advanced-technology
 * @desc: P36 解析CLI参数和路径
 */
var fs = require('fs');
var nunjucks = require('nunjucks')
var argv = process.argv
var filePath = __dirname
var currentPath = process.cwd()

// cli parse
argv.shift()
argv.shift()
console.log(argv)

var data = {
    model: argv[0],
    attr: {}
}

for (var i = 1; i < argv.length; i++) {
    var arr = argv[i].split(':')
    var k = arr[0]
    var v = arr[1]

    data.attr[k] = v
}
console.log('data = ')
console.dir(data)

// read tpl
var tpl = fs.readFileSync( filePath + './gen.tpl').toString()
console.dir(data)

// tpl compile
var compliedData = nunjucks.renderString(tpl, data)
console.log(compliedData)

// write file
fs.writeFileSync(currentPath + './gen.out', compliedData)

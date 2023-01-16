/**
 * @author: HuRuiFeng
 * @file: mini_web_framework.js
 * @time: 2023/1/16 15:29
 * @project: nodejs-advanced-technology
 * @desc: P125 自制Web框架
 */

const http = require('http')
const router = require('find-my-way')()

const FN_ARGS = /^(function)?\s*\*?\s*[^\(]*\(\s*([^\)]*)\)/m
const FN_ARGS_SPLIT = /,/
const FN_ARG = /^\s*(_?)(\S+?)\1\s*$/
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg

const cache = {}

// 通过正则表达式获取参数
function getParameters(fn) {
    const fnText = fn.toString()
    if (!cache[fnText]) {
        const inject = {};
        const argDecl = fnText.replace(STRIP_COMMENTS, '').match(FN_ARGS)

        argDecl[2].split(FN_ARGS_SPLIT).forEach(function (arg) {
            if (arg.indexOf('=') !== -1) {
                var i = arg.split('=')
                inject[i[0].trim()] = i[1].split('"')[1]
            }
            arg.replace(FN_ARG, function (all, underscore, name) {
                inject[name] = null
            });
        });

        cache[fnText] = inject
    }

    return cache[fnText]
}

// 为了测试方便
class A {
    get(path = "/") {
        return '{"message":"hello world!"}'
    }
}

// 实例化，处理具体逻辑
var a = new A()

var propertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(a));
console.dir(propertyNames)

// 向路由上加载具体的处理函数
for (const i in propertyNames) {
    if ('constructor' !== propertyNames[i]) {
        const parameters = getParameters(a[propertyNames[i]]);
        const path = parameters['path'];

        const _original = a[propertyNames[i]];
        const _newfn = function () {
            return _original.apply(this, arguments)
        };

        router.on(propertyNames[i].toUpperCase(), path, (req, res, params) => {
            a.req = req
            a.res = res

            const html = _newfn.bind(a)(path, req, res, params);
            res.end(html)
        })
    }
}

const server = http.createServer((req, res) => {
    router.lookup(req, res)
})

server.listen(3000, err => {
    if (err) throw err
    console.log('Server listening on: http://localhost:3000')
})

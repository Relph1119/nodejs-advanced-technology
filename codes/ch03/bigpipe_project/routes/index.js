const router = require('koa-router')()
const bigpipe = require('koa-bigpipe')
const sleep = ms => new Promise(r => setTimeout(r, ms))

router.get('/', async (ctx, next) => {
    let html = layout()

    ctx.write(html)

    return sleep(2000).then(function () {
        let a = pagelet1()
        ctx.write(a)
        return sleep(5000)
    }).then(function () {
        let b = pagelet2()
        ctx.write(b)
    }).then(function () {
        ctx.end()
    })
})

function layout() {
    let options = {
        filename: 'png',
        basedir: process.cwd() + '/views',
        title: 'This is Koa bigpipe Demo'
    }
    let file = process.cwd() + '/views/index.pug'

    // 渲染函数
    let html = pug.renderFile(file, options)

    return html
}

function pagelet1() {
    let payload = {
        domid: "pagelet1",
        html: `<h1>this is pagelet1</h1>`
    }
    return `<script charset="utf-8">bigview.view(${JSON.stringify(payload)})</script>`
}

function pagelet2() {
    let payload = {
        domid: "pagelet2",
        html: `<h1>this is pagelet2</h1>`
    }
    return `<script charset="utf-8">bigview.view(${JSON.stringify(payload)})</script>`
}

module.exports = router

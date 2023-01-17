/**
 * @author: HuRuiFeng
 * @file: benchmark_demo.js
 * @time: 2023/1/17 13:45
 * @project: nodejs-advanced-technology
 * @desc: P240 基准测试
 */
var suite = new Benchmark.Suite;

// 通过add方法增加测试
suite.add('RegExp#test', function () {
    /o/.test('Hello, World!')
})
    .add('String#indexOf', function () {
        'Hello World!'.indexOf('o') > -1
    })
    // 增加事件监听
    .on('cycle', function (event) {
        console.log(String(event.target))
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'))
    })
    // 判断是否以异步形式执行
    .run({'async': true})

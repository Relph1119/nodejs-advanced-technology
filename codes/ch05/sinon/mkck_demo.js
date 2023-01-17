/**
 * @author: HuRuiFeng
 * @file: mkck_demo.js
 * @time: 2023/1/17 16:13
 * @project: nodejs-advanced-technology
 * @desc: P290 Mock使用示例
 */

it('should pass object with correct values to save only once', function () {
    var info = {name: 'test'}
    var expectedUser = {
        name: info.name,
        nameLowercase: info.name.toLowerCase()
    }
    var database = sinon.mock(Database)
    database.expects('save').once().withArgs(expectedUser)

    setupNewUser(info, function (){})

    database.verify()
    database.restore()
})

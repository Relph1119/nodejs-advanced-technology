/**
 * @author: HuRuiFeng
 * @file: stub_demo.js
 * @time: 2023/1/17 16:11
 * @project: nodejs-advanced-technology
 * @desc: P289 Stub示例
 */

it('should pass object with correct values to save', function () {
    var save = sinon.stub(Database, 'save')
    var info = {name: 'test'}
    var expectedUser = {
        name: info.name,
        nameLowercase: info.name.toLowerCase()
    }

    setupNewUser(info, function (){})

    save.restore()
    sinon.assert.calledWith(save, expectedUser)
})

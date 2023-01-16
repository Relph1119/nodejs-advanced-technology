/**
 * @author: HuRuiFeng
 * @file: app.js
 * @time: 2023/1/16 14:25
 * @project: nodejs-advanced-technology
 * @desc:
 */

function click_del(url) {
    if (!confirm("确认要删除？")) {
        return window.event.returnValue = false
    }

    $.ajax({
        type: "DELETE",
        url: url
    })
        .done(function (res) {
            if (res.status.code === 0) {
                window.location.href = location.href
            } else {
                alert("Date delete fail: " + res.status.msg)
            }
        })
}

function click_edit(id, url) {
    console.log(url)

    if (!confirm("确认要更新？")) {
        return window.event.returnValue = false
    }

    var form = document.querySelector('form')
    var data = form2obj(form)
    console.log(data)

    $.ajax({
        type: "PATCH",
        url: url,
        data: data
    })
        .done(function (res) {
            if (res.status.code === 0) {
                window.location.href = res.data.redirect
            } else {
                alert("Data delete fail: " + res.status.msg)
            }
        })
}

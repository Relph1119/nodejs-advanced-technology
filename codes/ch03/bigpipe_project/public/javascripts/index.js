/**
 * @author: HuRuiFeng
 * @file: index.js
 * @time: 2023/1/16 17:17
 * @project: nodejs-advanced-technology
 * @desc:
 */

bigview.on('pageletArrave', function (payload) {
    $('#' + payload.domid).html(payload.html)
})

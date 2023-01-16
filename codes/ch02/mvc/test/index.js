/**
 * @author: HuRuiFeng
 * @file: index.js
 * @time: 2023/1/16 9:30
 * @project: mvc
 * @desc: P85 添加单元测试
 */

import test from "ava";
import request from 'superkoa'
import app from '../app.js'

test("GET /", async t => {
    const res = await request(app).get("/")
    t.is(res.status, 200)
})

/**
 * @author: HuRuiFeng
 * @file: graphql_demo.js
 * @time: 2023/1/16 20:59
 * @project: nodejs-advanced-technology
 * @desc: P194 GraphQL使用示例
 */

const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const {buildSchema} = require('graphql')

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

const root = {hello: () => 'Hello world!'}

const app = express()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))

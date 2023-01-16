/**
 * @author: HuRuiFeng
 * @file: lru_demo.js
 * @time: 2023/1/13 20:45
 * @project: nodejs-advanced-technology
 * @desc: P52 LRU缓存示例
 */

const LRUMap= require('js-lru')

// 注意：缓存里最多存放3条数据
let c = new LRUMap.LRUCache(3)
c.set('adam', 29)
c.set('jhon', 26)
c.set('angela', 24)
c.toString()
c.get('john')

// 因为获取了john的信息，所以john变成了最新的数据
console.log(c.toString());

// 对已满的缓存增加移交记录
c.set('zorro', 141)

// 已经有3条数据，上面又添加了zorro，就会导致最不常用且最早加入的adam被移除
console.log(c.toString());

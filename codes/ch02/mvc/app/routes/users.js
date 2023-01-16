const router = require('koa-router')()

const $middlewares = require('mount-middlewares')(__dirname)
const $ = require('mount-controllers')(__dirname).users_controller


router.get('/new', $.new)
router.get('/:id/edit', $.edit)
router.get('/', $.list)
router.post('/', $.create)
router.get(':/id', $.show)
router.patch('/:id', $.update)
router.delete(':/id', $.destroy)

module.exports = router

const Router = require('koa-router');

const router = new Router({
  prefix: '/v1/user',
});

// 用户注册
router.post('/register', async ctx => {});

module.exports = router;

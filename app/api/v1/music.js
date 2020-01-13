const Router = require('koa-router');
const router = new Router();
const { ParameterException } = require('../../../core/http-exception');
const { PositiveIntegerValidator } = require('../../validators/validator');

router.get('/v1/music/latest', (ctx, next) => {
  ctx.body = {
    key: 'music',
  };
});

router.get('/v1/music/:id', async (ctx, next) => {
  const v = await new PositiveIntegerValidator().validate(ctx);
  const id = v.get('path.id');
  // if (Math.random() < 0.5) {
  //   const error = new ParameterException();
  //   throw error;
  // }
  ctx.body = {
    id,
  };
});

module.exports = router;

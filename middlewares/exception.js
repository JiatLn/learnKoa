const { HttpException } = require('../core/http-exception');

const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    const isHttpException = error instanceof HttpException;
    const isDev = global.config.environment === 'dev';
    // 开发环境中
    if (isDev && !isHttpException) {
      throw error;
    }
    // 生产环境
    if (isHttpException) {
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`,
      };
      ctx.status = error.code;
    } else {
      ctx.body = {
        msg: '未知的错误发生了~',
        error_code: 999,
        request: `${ctx.method} ${ctx.path}`,
      };
      // 服务器内部错误
      ctx.status = 500;
    }
  }
};

module.exports = catchError;

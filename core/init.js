const requireDirectives = require('require-directory');
const Router = require('koa-router');

class InitManager {
  static initCore(app) {
    // 入口方法
    InitManager.app = app;
    InitManager.initLoadRouters();
    // InitManager.loadHttpException();
    InitManager.loadConfig();
  }
  static initLoadRouters() {
    // 自动加载Router
    const apiDirectory = `${process.cwd()}/app/api`;
    requireDirectives(module, apiDirectory, {
      visit: whenLoadModule,
    });

    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes());
      }
    }
  }
  // 装载异常类
  // static loadHttpException() {
  //   const errors = require('./http-exception');
  //   global.errs = errors;
  // }

  // 导入配置项
  static loadConfig(path = '') {
    const configPath = path || process.cwd() + '/config/config.js';
    const config = require(configPath);
    global.config = config;
  }
}

module.exports = InitManager;

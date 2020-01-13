const Sequelize = require('sequelize');

const { dbName, user, password, host, port } = require('../config/config').database;

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {},
});

sequelize.sync();

module.exports = { sequelize };

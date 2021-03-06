const Sequelize = require('sequelize');

const { dbName, user, password, host, port } = require('../config/config').database;

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {
    // create_time update_time delete_time
    timestamp: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true,
  },
});

sequelize.sync({
  force: true,
});

module.exports = { sequelize };

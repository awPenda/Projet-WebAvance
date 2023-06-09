const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('users', 'root', 'Jibrilaissa2', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;

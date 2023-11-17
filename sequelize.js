// // sequelize.js
// const { Sequelize } = require('sequelize');
// const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];

// const sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   {
//     host: config.host,
//     dialect: config.dialect,
//     operatorsAliases: config.operatorsAliases,
//   }
// );

// module.exports = sequelize;

// sequelize.js
const { Sequelize } = require('sequelize');
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    port: 3306,
    operators: false, // Use this instead of operatorsAliases
  }
);

module.exports = sequelize;


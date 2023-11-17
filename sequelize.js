
const { Sequelize } = require('sequelize');
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    operators: false, // Use this instead of operatorsAliases
  }
);

module.exports = sequelize;

// module.exports = {
//   development: {
//     username: uihnjgtnvoqbtrzn,
//     password: B8Raxzzj5mNDlnTkZJ8i,
//     database: bjjyouxhtjqgyszcu4wq,
//     host: 'bjjyouxhtjqgyszcu4wq-mysql.services.clever-cloud.com',
//     dialect: mysql,
//   },
// sequelize.config.js
require('dotenv').config(); // Load environment variables if using dotenv
const { orders, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } = process.env;

// module.exports = {
//   development: {
//     username: root,
//     password: root,
//     database: orders,
//     host: '127.0.0.1',
//     dialect: mysql,
//   },
//   // Add configurations for other environments if needed
// };

module.exports = {
  development: {
    username: uihnjgtnvoqbtrzn,
    password: B8Raxzzj5mNDlnTkZJ8i,
    database: bjjyouxhtjqgyszcu4wq,
    host: 'bjjyouxhtjqgyszcu4wq-mysql.services.clever-cloud.com',
    dialect: mysql,
  },
  // Add configurations for other environments if needed
};

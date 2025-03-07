const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: process.env.DB_NAME, 
    username: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectModule: require("mysql2"),
    benchmark: true
});


module.exports = sequelize;
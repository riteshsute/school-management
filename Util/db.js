const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: "school-management", 
    username: "root", 
    password: "@Ritesh123",
    host: "localhost",
    dialect: 'mysql',
    dialectModule: require("mysql2"),
    benchmark: true
});

module.exports = sequelize;
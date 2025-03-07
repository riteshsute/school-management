const Sequelize = require('sequelize');
const sequelize = require('../Util/db');

const School = sequelize.define("school", {
    id: {
        type: Sequelize.DataTypes.INTEGER, 
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.DataTypes.STRING, 
        allowNull: false
    },
    address: {
        type: Sequelize.DataTypes.STRING, 
        allowNull: false
    },
    latitude: {
        type: Sequelize.DataTypes.FLOAT, 
        allowNull: false
    },
    longitude: {
        type: Sequelize.DataTypes.FLOAT, 
        allowNull: false
    }
});

module.exports = School;
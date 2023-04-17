const Sequelize = require('sequelize')
const sequelize = require('../UTIL/database')
const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    Name: {
        type: Sequelize.STRING,
        allowNull:false

    },
    PhoneNo: {
        type: Sequelize.INTEGER(10),
        allowNull:false,
        unique:true
        

    },
    Email: {
        type: Sequelize.STRING,
        unique:true
    }
})
module.exports = User


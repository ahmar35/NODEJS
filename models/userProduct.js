const Sequelize = require('sequelize')
const sequelize = require('../UTIL/database')
const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    Name: Sequelize.STRING,

    Email:Sequelize.STRING
        
})
module.exports = User
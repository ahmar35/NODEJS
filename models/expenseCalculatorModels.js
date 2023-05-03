const seq=require('../UTIL/database')
const Sequelize=require("sequelize")
const expenseModels=seq.define('signUp Credentials',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        unique:true,
        primaryKey:true

    },
    Name:{
        type:Sequelize.STRING

    },
    Email:{
        type:Sequelize.STRING,
    },
    Password:{
        type:Sequelize.STRING,
    }
}


)
module.exports=expenseModels
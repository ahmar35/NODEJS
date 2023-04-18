const  Sequelize=require('sequelize')
const seq=require('../UTIL/database')
const ExpenseDetails=seq.define('Expense' ,{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Amount:{
        type:Sequelize.INTEGER,
    },
    Description:{
        type:Sequelize.STRING
        
    },
    Category:{
        type:Sequelize.STRING,
    }

})
module.exports=ExpenseDetails
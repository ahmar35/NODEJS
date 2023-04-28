const sequelize=require('sequelize')
const seq = require("../UTIL/database")
const StoreModels=seq.define('itemList' ,{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true

    },
    Name:{
        type:sequelize.STRING
        
    },
    description:{
        type:sequelize.STRING

    },

    price:{
        type:sequelize.INTEGER
        
    },
    quantity:{
        type:sequelize.INTEGER
        
    }
    

})
module.exports=StoreModels


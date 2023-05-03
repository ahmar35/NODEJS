const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')
const cors=require('cors')
const sequelize = require('./UTIL/database')
const UserCredentials=require('./models/expenseCalculatorModels')
const { error } = require('console')
const app=express()
app.use(cors())
app.use(bodyParser.json())


app.post('/User/SignUp',async(req,res,next)=>{
    try{
    const Name=req.body.NAME
    const Email=req.body.EMAIL
    const Password=req.body.PASSWORD
    const info =await UserCredentials.findAll()
    for (var i=0;i<info.length;i++){
        if (info[i].Email===Email){
            res.status(403).json(info)
        }
    }
    
    
   await UserCredentials.create({Name,Email,Password})
}catch(err){
    console.log(err)

}
 
} )

sequelize.sync(/* {force:true} */)

app.listen(3000)

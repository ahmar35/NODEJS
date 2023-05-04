const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')
const cors=require('cors')
const sequelize = require('./UTIL/database')
const UserDetails=require('./models/expenseCalculatorModels')
const { error } = require('console')
const app=express()
app.use(cors())
app.use(bodyParser.json())


app.post('/User/SignUp',async(req,res,next)=>{
    try{
    const Name=req.body.NAME
    const Email=req.body.EMAIL
    const Password=req.body.PASSWORD
   
    
    
   const info=await UserDetails.create({Name,Email,Password})
        res.status(201).json(info)
}catch(err){
    res.status(403).json(err)

}
 
} )

app.post('/User/LogIn',async(req,res,next)=>{
    try{
    
    

    const Email=req.body.EMAIL
    const Password=req.body.PASSWORD
    const User=await UserDetails.findAll()
    for (i=0;i<User.length;i++){

        if(User[i].Email===Email){
            if(User[i].Password===Password){
                res.status(201).json({message:'loginSuccesful'})
            }else {
                return res.status(401).json({message:'Incorrect Password'})
            }
        }
    }
    return res.status(404).json({message:'User Not Found'}) 

}catch(err){


}



})

sequelize.sync(/* {force:true} */)

app.listen(3000)

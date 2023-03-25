const express=require('express');
const app=express()
app.use((req,res,next)=>{
    console.log("in middleware")
    next()

})
app.use((req,res,next)=>{
    console.log("in another  middleware")
    res.send("<h1>WELCOME TO EXPRESS JS</h2>")
})
app.listen(3000)

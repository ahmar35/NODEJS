const express=require('express');
const bodyparser=require('body-parser')
const app=express()
app.use(bodyparser.urlencoded({extended:false}))


app.use("/addProduct",(req,res,next)=>{

    res.send("<form action='/product' method='POST'><input type='text' name='title'><label>QTY</label><input type ='text' name='quantity'><button type='submit'>ADD PRODUCT</button></form>")
    

})
app.use("/product",(req,res,next)=>{
    console.log(req.body)

    res.redirect("/")
    
})
app.use('/',(req,res,next)=>{
    res.send("<h1>WELCOME TO EXPRESS JS</h1>")
})

app.listen(3000)

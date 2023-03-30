const express=require("express")
const router=express.Router()
const path=require('path')

router.get("/addProduct",(req,res,next)=>{

    res.sendFile(path.join(__dirname,'..','views','addProduct.html'))
    

})
router.post("/addProduct",(req,res,next)=>{
    console.log(req.body)

    res.redirect("/")
    
})
router.get("/contact",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','contact.html'))
})
router.post("/contact",(req,res,next)=>{

    res.redirect("/admin/success")
    
})
router.get("/success",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','success.html'))
})
module.exports=router
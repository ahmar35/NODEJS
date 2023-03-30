
const path = require("path")

exports.contact=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','contact.html'))
}

exports.postContact=(req,res,next)=>{

    res.redirect("/admin/success")
    
}
const path=require('path')

exports.submitContact=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','success.html'))
}
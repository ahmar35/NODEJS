const express=require("express")
const router=express.Router()
const contactController=require('../controllers/contact')
router.get("/contact",contactController.contact)
router.post("/contact",contactController.postContact)
module.exports=router
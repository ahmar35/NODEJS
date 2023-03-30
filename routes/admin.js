const express=require("express")
const router=express.Router()
const path=require('path')
const productsController=require('../controllers/product')
const contactController=require('../controllers/contact')
const submitContactController=require('../controllers/success')


router.get("/addProduct",productsController.getAddProduct)
router.post("/addProduct",productsController.postAddProduct)
router.get("/contact",contactController.contact)
router.post("/contact",contactController.postContact)
router.get("/success",submitContactController.submitContact)
module.exports=router
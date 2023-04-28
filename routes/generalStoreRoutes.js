const express=require("express")
const router=express.Router()
const controller=require("../controllers/generalStoreControllers")
router.post('/addProduct',controller.addProduct)
router.get('/getProduct',controller.getProduct)
router.delete('/deleteProduct/:id',controller.deleteProduct)
router.put('/updateProduct/:id',controller.updateProduct)
router.put('/buyProduct/:id',controller.buyProduct);
module.exports=router
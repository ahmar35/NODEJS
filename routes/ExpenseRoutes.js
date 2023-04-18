const express=require("express")
const router=express.Router()
const controllers=require('../controllers/expenseApp')

router.post('/addUser',controllers.postUser  )   
router.get('/getUser', controllers.getUser) 
router.delete('/delete-user/:id', controllers.deleteUser)
router.put('/update/:id',controllers.updateUser)
module.exports=router
    
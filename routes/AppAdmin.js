const path = require('path');
const Controller=require('../controllers/appointment')

const express = require('express');
const router = express.Router();
router.post('/user/adduser',Controller.postUser)
router.get('/user/get-users',Controller.getUser )
router.delete('/user/delete-user/:id',Controller.deleteUser)



module.exports = router;

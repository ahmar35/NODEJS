const req = require('express/lib/request')
const User=require('../models/User')

exports.postUser=async (req, res, next) => {
    
  const Name = req.body.name;
  const Email = req.body.mail;
  const PhoneNo = req.body.contact;
  const users = await User.create({ Name: Name, Email: Email, PhoneNo: PhoneNo}); 
  res.status(201).json(users);
}

exports.getUser=async (req, res, next) => {
  const users=await User.findAll(); 
  res.status(200).json({allUsers: users})
}

exports.deleteUser=async (req, res) => {
  const uId= req.params.id; 
  await User.destroy({where: {id: uId}}); 
  res.sendStatus (200);
  }
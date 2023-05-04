const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const sequelize = require('./UTIL/database')
const bcrypt = require('bcrypt')
const UserDetails = require('./models/expenseCalculatorModels')
const { error } = require('console')
const app = express()
app.use(cors())
app.use(bodyParser.json())


app.post('/User/SignUp', (req, res, next) => {

    const Name = req.body.NAME
    const Email = req.body.EMAIL
    const Password = req.body.PASSWORD
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(Password, salt, function (err, hash) {
            const info = UserDetails.create({ Name, Email, Password: hash }).then(() => {
                res.status(201).json({ message: 'Successfuly create new user' })
            }).catch(err => {
                res.status(403).json(err);
            })

        })
    })


})

//userLogin
app.post('/User/LogIn', async (req, res, next) => {
    try {
        const Email = req.body.EMAIL
        const Password = req.body.PASSWORD
        const User = await UserDetails.findAll({ where: { Email } })

        if (User.length > 0) {
            bcrypt.compare(Password, User[0].Password, (err, result) => {
                if (err) {
                    res.status(500).json({ message: 'Something Went Wrong' })
                } else if (result == true) {
                    res.status(201).json({ message: 'loginSuccesful' })
                } else {
                    return res.status(401).json({ message: 'Incorrect Password' })
                }
            })
        }
        else {
            return res.status(404).json({ message: 'User Not Found' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something Went Wrong' })

    }
})
//user Login End
sequelize.sync(/* {force:true} */)
app.listen(3000)

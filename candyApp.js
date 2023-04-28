const express=require('express')
const path=require('path')
const bodyParser = require('body-parser');
const sequelize=require('./UTIL/database')
const details=express()
const cors = require('cors')
const routes=require('./routes/generalStoreRoutes')
const storeModels=require('./models/StoreModel')
details.use(bodyParser.json());
details.use(cors())
details.use(routes)
sequelize.sync()
details.listen(4000)
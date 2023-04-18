const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors')
const errorController = require('./controllers/404');
const sequelize=require('./UTIL/database');
sequelize.sync()
const app = express();
app.use(cors())
const ExpenseRoutes=require('./routes/ExpenseRoutes')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(ExpenseRoutes)
app.listen(3000);

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./UTIL/database')
const User = require('./models/User')
const cors = require('cors')
const router = express.Router();
const app = express();
const AppAdminRoutes = require('./routes/AppAdmin')
app.use(cors())
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(AppAdminRoutes)

sequelize.sync().then((result) => {

})
    .catch(err => console.log(err))
app.listen(4000)

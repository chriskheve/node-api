const express = require('express')
const app = express()
const cors = require('cors');
require('./models/dbConfig')
const usersRoutes = require('./routes/usersController');
const bodyParser = require('body-parser')


app.use(cors());
app.use(bodyParser.json())
app.use('/', usersRoutes)

app.listen(5500,()=> console.log('Server started: 5500'))
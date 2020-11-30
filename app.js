const mysql = require('mysql')
const express = require('express')
const bodyParser = require('body-parser')

var app = express();

//Configuring express server
app.use(bodyParser.json());

// Database
const db = require('./config/connection');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const userRouter = require('./routes/UserRouter')
app.use('/users',userRouter)

const port = 8095;
app.listen(port, () => console.log(`Listening on port ${port}..`));

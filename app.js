const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

//setting permission for CORS
const permission = cors('http://localhost:4200')
const hostingSite = cors('https://stackhack.web.app');

//using dotenv to use environmental variables to store passwords
require('dotenv').config()

//routes from different controllers
const taskRoutes = require('./routes/taskRoutes.js')

//connecting mongoose to db
const url = 'mongodb+srv://Rishabh:'+ process.env.PASSWORD + '@stackhack-gahij.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(url, {
    useNewUrlParser: true
})
.then((result) => {
    console.log('Connected to database')
})
.catch((err) => {
    console.log('Error in connecting to db ', err)
})
const db = mongoose.connection
db.on('error', () => { console.log('Error connecting to database') })

//starting express
const app = express()

//using CORS
app.use(permission);
app.use(hostingSite);

//embedding routes in express app
app.use(taskRoutes)

const server = app.listen(process.env.PORT, () => {
    console.log('Server started at port : ' + server.address().port);
})
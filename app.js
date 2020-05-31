const express = require('express')
const mongoose = require('mongoose')

//routes from different controllers
const taskRoutes = require('./routes/taskRoutes.js')

//connecting mongoose to db
mongoose.connect('mongodb://localhost/tasks', {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', () => { console.log('Error connecting to database') })

//starting express
const app = express()

//embedding routes in express app
app.use(taskRoutes)

const server = app.listen(8080, () => {
    console.log('Server started at port : ' + server.address().port)
})
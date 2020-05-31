const mongoose = require('mongoose')

//created schema for storing element
var taskSchema = new mongoose.Schema({
    category: String,
    task: String,
    priority: Number,
    completed: Boolean
})

//created modal using that schema
var Task = mongoose.model('Task', taskSchema)

module.exports = Task
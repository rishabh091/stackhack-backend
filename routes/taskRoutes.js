const express = require('express')
const routes = express.Router()
const json = require('body-parser').json()

const taskService = require('../service/taskService')

routes.get('/', (req, res) => {
    res.send('Hello World')
})

routes.post('/add', json, (req, res) => {
    //intialise service that will add data in db
    const task = req.body
    taskService.add(task)

    res.send(true)
})

routes.get('/getTask', (req, res) => {
    //get all tasks from service
    const tasks = taskService.get()
    
    tasks.then((documents) => {
        res.send(documents)
    })
    .catch((err) => {
        res.status(500)
        res.send(err)
    })
})

routes.get('/completed/:id', (req, res) => {
    //get id of a parameter
    const id = req.params.id;

    //call service function that will update progress
    taskService.update(id)
    .then((value) => {
        res.status(200)
        res.send(true)
    })
    .catch((err) => {
        res.status(500)
        res.send(false)
    })
})

module.exports = routes;
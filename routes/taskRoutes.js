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

routes.get('/getCompleted', (req, res) => {
    //get tasks that are completed
    taskService.getCompleted()
    .then((result) => {
        res.status(200)
        res.send(result)
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
    taskService.completed(id)
    .then((value) => {
        res.status(200)
        res.send(true)
    })
    .catch((err) => {
        res.status(500)
        res.send(false)
    })
})

routes.post('/edit', json, (req, res) => {
    //user can edit anything in it therefore save whole file as a whole
    const task = req.body

    taskService.update(task)
    .then((value) => {
        res.status(200)
        res.send(true)
    })
    .catch((err) => {
        res.status(500)
        res.send(false)
    })
})

routes.get('/category/:category', (req, res) => {
    const category = req.params.category

    taskService.category(category)
    .then((result) => {
        res.status(200)
        res.send(result)
    })
    .catch((err) => {
        res.status(500)
        res.send(err)
    })
})

routes.get('/all', (req, res) => {
    //returns all tasks
    taskService.all()
    .then((result) => {
        res.status(200)
        res.send(result)
    })
    .catch((err) => {
        res.status(500)
        res.send(err)
    })
})

routes.get('/priority/:priority', (req, res) => {
    //returns tasks according to priority
    const priority = req.params.priority

    taskService.byPriority(priority)
    .then((result) => {
        res.status(200)
        res.send(result)
    })
    .catch((err) => {
        res.status(500)
        res.send(err)
    })
})

module.exports = routes;
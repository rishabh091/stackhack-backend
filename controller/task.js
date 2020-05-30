const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const addTask = require('../repository/addTask.js');
const getTask = require('../repository/getTask.js');
const updateProgress = require('../repository/updateProgress.js');

const json = bodyParser.json();

router.post("/setTask", json, (req,res) => {
    const data = req.body;

    //store data and send request
    addTask.add(data)
    .then((result) => {
        console.log('Data stored');
        res.send(true);
    })
    .catch((err) => {
        console.log('Error : ', err);
        res.status(501);
        res.send(false);
    });
});

router.get("/getTask", (req, res) => {

    //get data from atlas
    getTask.get()
    .then((value) => {
        res.status(200);
        res.send(value);
    })
    .catch((err) => {
        res.status(501);
        res.send(err);
    })
});

router.post('/isCompleted', json, (req, res) => {
    const id = req._id;

    updateProgress.update(id)
    .then((result) => {
        res.send(true);
    })
    .catch((err) => {
        res.send(false);
    });
});

module.exports = {
    taskRouter: router
}
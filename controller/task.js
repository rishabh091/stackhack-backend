const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const addTask = require('../repository/addTask.js');
const getTask = require('../repository/getTask.js');

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

module.exports = {
    taskRouter: router
}
const express = require('express');
const bodyParser = require('body-parser');

const addTask = require('./repository/addTask.js');
const getTask = require('./repository/getTask.js');

const json = bodyParser.json();
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/setTask", json, (req,res) => {
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

app.get("/getTask", (req, res) => {

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

const server = app.listen(8080, "127.0.0.1", ()=> {
    console.log('Server listed on port : ' + server.address().port);
    console.log('IP Address : ', server.address().address);
});
const express = require('express');
const bodyParser = require('body-parser');

const addTask = require('./repository/addTask.js');

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
    
});

const server = app.listen(8080, "127.0.0.1", ()=> {
    console.log('Server listed on port : ' + server.address().port);
    console.log('IP Address : ', server.address().address);
});
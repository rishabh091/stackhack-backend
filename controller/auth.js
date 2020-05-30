//will contain login and sign up
const express = require('express');
const router = express.Router();
const json = require('body-parser').json();
const saveUser = require('../repository/saveUser.js');

router.post('/signup', json, (req, res) => {
    const data = req.body;

    //save user data in db
    saveUser.save(data)
    .then((value) => {
        res.send(value);
    })
    .catch((err) => {
        res.send(false);
    });
});

module.exports = {
    authRouter: router
}
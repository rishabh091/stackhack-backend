const express = require('express');
const loginRouter = require('./controller/login.js').loginRouter;
const taskRouter = require('./controller/task.js').taskRouter;

const app = express();

app.use(taskRouter);
app.use(loginRouter);

const server = app.listen(8080, "127.0.0.1", ()=> {
    console.log('Server listed on port : ' + server.address().port);
    console.log('IP Address : ', server.address().address);
});
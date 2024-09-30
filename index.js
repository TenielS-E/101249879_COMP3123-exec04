const express = require('express');
const app = express();
const SERVER_PORT = process.env.port || 3000;

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Welcome to Lab Exercise 4 For COMP3123!');
})

// http://localhost:3000/hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
})

// http://localhost:3000/user?firstname={}&lastname={}
app.get('/user', (req, res) => {
    var firstname = req.query.firstname;
    var lastname = req.query.lastname;

    if(firstname == null && lastname == null){
        firstname = "Pritesh";
        lastname = "Patel"
    }
    res.send(`{"firstname":"${firstname}", "lastname":"${lastname}"}`);
})

// http://localhost:3000/user/{fistname}/{lastname}
app.post('/user/:firstname/:lastname', (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    res.json(`{"firstname":"${firstname}", "lastname":"${lastname}"}`);
})


// Listen to the server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})
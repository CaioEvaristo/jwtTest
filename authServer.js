require('dotenv').config()
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json())

app.post('/login', (req, res) => {
    // Authentication User

    const username = req.body.username;
    const user = {name: username};

    const accesstoken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken: accesstoken});
})

app.listen(4000);
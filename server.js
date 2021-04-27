require('dotenv').config()
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json())

const posts = [{
    username: 'Caio',
    title: 'Post 1'
}, {
    username: 'Cintia',
    title: 'Post 2'
}]

app.get('/', authenticateToken, (req, res) => {

    res.json(posts.filter(post => post.username === req.user.name));
})

app.post('/login', (req, res) => {
    // Authentication User

    const username = req.body.username;
    const user = {name: username};

    const accesstoken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken: accesstoken});
})

function authenticateToken(req, res, next) {
    console.log(req.headers.authorization);
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user

        next()
    })

}

app.listen(3000);
const express = require('express')
const cookieParser = require('cookie-parser')
const crypto = require('crypto');

const port = 3000

const app = express()
app.use(cookieParser());

app.get('/a', function (req, res) {
    let user_token = req.cookies['house_user']; // always empty

    console.log(user_token)

            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
            // res.cookie('house_user', "ddddddddswqwqswddd", {maxAge: 9000000000, httpOnly: true, secure: true });
            // res.append('Set-Cookie', 'house_user=' + "twqdwqqddwqdw" + ';');
            res.send("token");
});

app.get('/', (request, response) => {
    response.send('Hello from Express!')
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})
/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();


app.use(compression());
app.use(express.static('dist'));


// Routing
// Index Route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Users Route
app.get('/users', function(req, res) {
    // Hard coding for simplicity. Pretend this hits a real database
    res.json([
        {
            "id": 1,
            "firstName": "Bob",
            "lastName": "Smith",
            "email": "bob@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Tammy",
            "lastName": "Norton",
            "email": "tnorton@yahoo.com"
        },
        {
            "id": 3,
            "firstName": "Tina",
            "lastName": "Lee",
            "email": "lee.tina@hotmail.com"
        }
    ]);
});


// Listen
app.listen(port, function(error) {
    if (error) {
        console.log(`Express Error: ${error}`)
    } else {
        open('http://localhost:' + port);
    }
});
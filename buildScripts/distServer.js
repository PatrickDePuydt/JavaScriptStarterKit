import express from 'express';
import path from 'path';
import open from 'open';


/* eslint-disable no-console */
const port = 3000;
const app = express();

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


app.use(express.static('dist'));

app.use(compression()); // eslint-disable-line no-undef

// Listen
app.listen(port, function(error) {
    if (error) {
        console.log(`Express Error: ${error}`)
    } else {
        open('http://localhost:' + port);
    }
});
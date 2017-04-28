import express from 'express';
import path from 'path';
import open from 'open';


const port = 3000;

const app = express();

// Routing
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});


// Listen
app.listen(port, function(error) {
    if (error) {
        console.log(`Express Error: ${error}`)
    } else {
        open('http://localhost:' + port);
    }
});
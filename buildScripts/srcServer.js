var express = require('express');
var path = require('path');
var open = require('open');


var port = 3000;

var app = express();

// Routing
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});


// Listen
 
app.listen(port, function(error){
	if (error) {
		console.log(`Express Error: ${error}`)
	} else {
		open('http://localhost:' + port);
	}
});

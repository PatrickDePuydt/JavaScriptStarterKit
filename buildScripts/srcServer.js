import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);

// Configure Express to use Webpack Bundler
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));


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
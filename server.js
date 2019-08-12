const express = require('express');
const app = express();
const port = 3000;

// set up a handler to respond to requests to the root path

app.get('/', function(req, res) {
    res.send('Hello World, you are on the homepage');
});

app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`)
});
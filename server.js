const express = require('express');
const path = require('path'); // allows us to generate dynamic paths
const blogsController = require('./controllers/blogs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set(path.join(__dirname, 'views'));

app.use('/blogs', blogsController);

app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`)
});
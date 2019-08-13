const express = require('express');
const path = require('path');
const blogsController = require('./controllers/blogs')
const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.set(path.join(__dirname, 'views'));

app.use('/blogs', blogsController);

app.listen(port, () => console.log(`Express is listening on port ${port}!`));
// Create a web server that listens on port 3000 and serves the comments.html file.
// Use the express module to create the web server.
// The file comments.html is provided and is in the same directory as the solution file.

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/comments', (req, res) => {
    res.sendFile(path.join(__dirname, 'comments.html'));
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
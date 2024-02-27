// Create a web server
// 1. Create a web server
// 2. Define a port to listen to
// 3. Start the server and listen to the port
// 4. Create a route to handle the request
// 5. Get the data from the comments.json
// 6. Convert the data to a string
// 7. Send the data back to the client
// 8. Send the error message to the client if there is an error

const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    fs.readFile(path.join(__dirname, 'comments.json'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: err.message }));
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
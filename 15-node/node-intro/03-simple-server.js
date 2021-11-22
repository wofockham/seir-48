// A simple HTTP web server in Node with just the standard library.

const http = require('http'); // from the Node Standard Library

http.createServer((req, res) => {
  console.log(`Serving request: ${ req.method } ${ req.url }`); // Budget logging
  if (req.url === '/hello') {
    res.end('Hello from Node.js');
  } else if (req.url === '/goodbye') {
    res.end('Goodbye cruel world');
  } else if (req.url === '/groucho') {
    res.end('This is the groucho page');
  } else {
    res.end('Hello from any random page');
  }
}).listen(1337); // Port to listen on

console.log('Server started at http://localhost:1337');

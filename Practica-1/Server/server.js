// First Practice in LTAW
// Made by Felipe Sandoval.

var http = require('http');

console.log("Running server...")

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
  console.log("Request solved.")
}).listen(8080);

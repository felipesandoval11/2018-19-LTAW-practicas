// First Practice in LTAW
// Made by Felipe Sandoval.

var http = require('http');

console.log("Running server...\n")

// Creating a server object
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write('First document solved.') // response for client
  res.write(req.url);
  //res.end('\.'); // end response for client
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  console.log("Testing")
}).listen(8080);

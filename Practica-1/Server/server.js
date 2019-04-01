// First Practice in LTAW
// Made by Felipe Sandoval.

var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("Running server...\n")

// Creating a server object
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write('First document solved.') // response for client
  //res.write(req.url);
  //res.end('\.'); // end response for client
  //var q = url.parse(req.url, true).query;
  //var txt = q.year + " " + q.month;
  //res.write(txt);
  //fs.readFile('doc1.html', function(err, data) {
  //  res.writeHead(200, {'Content-Type': 'text/html'});
  //  res.write(data);
  //  res.end();
  if (req.url == '/adios'){
    res.write('Petition 1');
  }else if (req.url == '/hola'){
    res.write('Petition 2');
  }else{
    res.write('Petition 3');
  }
  console.log("Request Solved");
}).listen(8080);

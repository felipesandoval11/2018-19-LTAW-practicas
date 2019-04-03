// First Practice in LTAW
// Made by Felipe Sandoval.

var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("Running server...\n")

// Creating a server object
http.createServer((req, res) => {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  console.log("Pathname: " +  q.pathname)
  console.log("search: " + q.search)
  console.log("Búsqueda:")
  var qdata = q.query
  console.log(qdata)
  //-- Acceso al objeto
  console.log("Artículo: " + qdata.articulo)
  console.log("Color: " + qdata.color)
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found " + q.pathname +
                     ' but we will create it.');
    }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();
   });
  console.log('This was the requested page (URL) ' + req.url);
  console.log(" Request Solved.");
  console.log("\nHOST: " + req.headers.host)
  console.log("\nUSER AGENT: " + req.headers['user-agent'] + '\n')
}).listen(8080);

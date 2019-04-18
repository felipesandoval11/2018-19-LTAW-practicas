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
  console.log('____________NEW REQUEST____________\n');
  console.log('This was the requested page (URL) ' + req.url);
  console.log("Request Solved.\n");
  console.log("Pathname: " +  q.pathname);

// if not search is included I don't return nothing
  if(q.search != null){
    console.log("search: " + q.search);
    var qdata = q.query;
    console.log(qdata) // Object access
    console.log("Article: " + qdata.article);
    console.log("Color: " + qdata.color);
  }

  console.log("\nHOST: " + req.headers.host);
  console.log("\nUSER AGENT: " + req.headers['user-agent'] + '\n')

// creating generic index
  var filename = ""
  if (q.pathname == "/")
    filename += "/index.html";
  else {
    filename = q.pathname;
  }

  type = filename.split(".")[1]
  filename = "." + filename

  console.log("Filename: " + filename);
  console.log("Type: " + type);

  var mime = "text/html"
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': mime});
      return res.end("404 Not Found " + q.pathname +
                     ' but we will create it.');
    }

// default mime type
  var mime = "text/html"
// for images
  if (['png', 'jpg'].includes(type)) {
    console.log("LOADING IMAGE")
    mime = "image/" + type;
  }
// for css
  if (type == "css"){
    mime = "text/css";
    console.log("SI ENTROOO");
  }

  res.writeHead(200, {'Content-Type': mime});
  res.write(data);
  res.end();
  console.log('____________END REQUEST____________\n');
});
}).listen(8080);

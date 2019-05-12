// Third Practice in LTAW
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
  //console.log("\nHOST: " + req.headers.host);
  //console.log("\nUSER AGENT: " + req.headers['user-agent'] + '\n')
  // creating generic index
  if (q.pathname == "/"){
    filename = "./index.html";
  }
  var type = filename.split(".")[2];
  console.log("Filename: " + filename);
  console.log("Type: " + type);

  var mime = "text/html"
  switch (type) {
    //-- Pagina principal
    case "html":
      //-- Leer las cookies
      var cookie = req.headers.cookie;
      console.log("Cookie: " + cookie);

      if (!cookie) {
        console.log("No hay cookies aún.");
      } else {
        console.log("Ya hay cookies");
      }

      if (q.pathname == '/login.html'){
        // CREATING COOKIE!
        //res.setHeader('Set-Cookie', 'user=obijuan')
        //console.log(req.headers.cookie);
        console.log("CREO LA COOKIE");
      }

      break
    case "png":
    case "jpg":
      mime = "image/" + type;
      console.log("LOADING IMAGE");
      break
    case "css":
      mime = "text/css";
      console.log("LOADING CSS")
      break
  }
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': mime});
      return res.end("404 Not Found " + q.pathname +
                     'please go to /index.html');
    }
  res.writeHead(200, {'Content-Type': mime});
  res.write(data);
  res.end();
  console.log('Request Solved.')
  console.log('____________END REQUEST____________\n');
});
}).listen(8080);

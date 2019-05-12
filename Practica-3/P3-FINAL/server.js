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
      var pathname = q.pathname;
      if (pathname == '/login.html'){
        // CREATING COOKIE!
        res.setHeader('Set-Cookie', 'user=Felipe')
        console.log(req.headers.cookie);
        console.log("Cookie Created");
      }else if (pathname == '/cart.html'){
        if (!cookie) {
          filename = "./error.html";
        }
      }

      switch (pathname) {
        case "/buy1.html":
          filename = "./index.html";
          console.log("1");
          break;
        case "/buy2.html":
          filename = "./index.html";
          console.log("2");
          break;
        case "/buy3.html":
          filename = "./index.html";
          console.log("3");
          break;
        case "/buy4.html":
          filename = "./index.html";
          break;
        case "/buy5.html":
          filename = "./index.html";
          console.log("5");
          break;
        case "/buy6.html":
          filename = "./index.html";
          console.log("6");
          break;
        case "/buy7.html":
          filename = "./index.html";
          console.log("7");
          break;
        case "/buy8.html":
          filename = "./index.html";
          console.log("8");
          break;
        case "/buy9.html":
          filename = "./index.html";
          console.log("9");
          break;
        case "/buy10.html":
          filename = "./index.html";
          console.log("10");
          break;
        case "/buy11.html":
          filename = "./index.html";
          console.log("11");
          break;
        case "/buy12.html":
          filename = "./index.html";
          console.log("12");
          break;
        default:
          break;
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

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
      var pathname = q.pathname;
      if (pathname == '/login.html'){
        // CREATING COOKIE!
        res.setHeader('Set-Cookie', 'user=Felipe')
        console.log("Cookie Created");
      }else if (pathname == '/cart.html'){
        if (!cookie) {
          filename = "./error.html";
        }
      }
      // PARA LEER LA INFO DE COMPRA
      if (pathname == '/bill.html') {
          if (req.method === 'POST') {
          // Handle post info...
          var content = `
          <!DOCTYPE html>
          <html lang="es" dir="ltr">
            <head>
              <meta charset="utf-8">
              <title>ARTSHOP - SHOP ART ONLINE</title>
              <link rel="stylesheet" href="/css/micss.css">
            </head>
            <body>
              <div class="sticky">
                <h1 id="mainTitle" style="font-size:6vw"> ART SHOP <h1>
                <a href="index.html"><img class="ecom" id="ecom1" src="icon/home.png"></a>
                <a href="login.html"><img class="ecom" id="ecom2" src="icon/search.png"></a>
                <a href="cart.html"><img class="ecom" id="ecom3" src="icon/cart.png"></a>
              </div>
              <div class="log">
                <p> <span id="cart">THIS IS YOUR BILL: </span></p>
              </div>
              <div class="factura">
                <p>
              `
          req.on('data', chunk => {
              // Reading data and parsing it all.
              info_form = chunk.toString().split("&");
              var name_client = info_form[0].split("=")[1];
              name_client = name_client.replace("+", " ")
              var lastname_client = info_form[1].split("=")[1];
              lastname_client = lastname_client.replace("+", " ")
              var mail_client = info_form[2].split("=")[1];
              mail_client = mail_client.replace("%40", "@")
              var payment_client = info_form[3].split("=")[1];
              //  Showing the data collected
              console.log("Recieved from form: NAME: " + name_client + " LAST NAME: "
                          + lastname_client + " MAIL: " + mail_client
                          + " PAYMENT: " + payment_client);
              content += 'NAME: ' + name_client + "<br />LAST NAME: "
                          + lastname_client + "<br />MAIL: " + mail_client
                          + "<br />PAYMENT: " + payment_client
              content += `
                  </p>
                  </div>
                  <img id="icon" src="icon/creditcards.png">
                  <p id="footer"> <a href="https://github.com/felipesandoval11">
                        © Felipe Sandoval
                      </a>
                  </p>
                  </body>
              </html>
              `
              res.statusCode = 200;
           });

           req.on('end', ()=> {
             //-- Generar el mensaje de respuesta
             res.setHeader('Content-Type', 'text/html')
             res.write(content);
             res.end();
           })
           return
        }
        break
      }

      // LAS COOKIES
      if (cookie) {
        var value_cookie = cookie.split(";");
        if (value_cookie.length > 1){
          value_cookie = value_cookie[1];
          value_cookie = value_cookie.split("=")[1];
          value_cookie = [value_cookie];
        }else{
          value_cookie = [];
        }
        console.log("La Cookie: " + cookie);
        console.log(value_cookie);
        switch (pathname) {
          case "/buy1.html":
            value_cookie.push('baz1');
            res.setHeader('Set-Cookie', 'cart=' + value_cookie);
            filename = "./index.html";
            break;
          case "/buy2.html":
            value_cookie.push('baz2');
            res.setHeader('Set-Cookie', 'cart=' + value_cookie);
            filename = "./index.html";
            break;
          case "/buy3.html":
            value_cookie.push('baz3');
            res.setHeader('Set-Cookie', 'cart=' + value_cookie);
            filename = "./index.html";
            break;
          case "/buy4.html":
            value_cookie.push('baz4');
            res.setHeader('Set-Cookie', 'cart=' + value_cookie);
            filename = "./index.html";
            break;
          case "/buy5.html":
            value_cookie.push('baz5');
            res.setHeader('Set-Cookie', 'cart=' + value_cookie);
            filename = "./index.html";
            break;
          case "/buy6.html":
            value_cookie.push('baz6');
            res.setHeader('Set-Cookie', 'cart=' + value_cookie);
            filename = "./index.html";
            break;
          case "/buy7.html":
            value_cookie.push('baz7');
            res.setHeader('Set-Cookie', 'cart=' + value_cookie);
            filename = "./index.html";
            break;
          case "/buy8.html":
            value_cookie.push('baz8');
            res.setHeader('Set-Cookie', 'cart=' + value_cookie);
            filename = "./index.html";
            break;
          case "/buy9.html":
            value_cookie.push('baz9');
            res.setHeader('Set-Cookie', 'cart=' + value_cookie);
            filename = "./index.html";
            break;
          case "/buy10.html":
            value_cookie.push('baz10');
            res.setHeader('Set-Cookie', 'cart=' + value_cookie);
            filename = "./index.html";
            break;
          case "/buy11.html":
            value_cookie.push('baz11');
            res.setHeader('Set-Cookie', 'cart=' + value_cookie);
            filename = "./index.html";
            break;
          case "/buy12.html":
            value_cookie.push('baz12');
            res.setHeader('Set-Cookie', 'cart=' + value_cookie);
            filename = "./index.html";
            break;
          default:
            break;
        }
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
      return res.end("404 Not Found. YOU MAY NEED TO LOG IN FIRST!" + q.pathname +
                     'please go to /index.html');
    }
  res.writeHead(200, {'Content-Type': mime});
  res.write(data);
  res.end();
  console.log('Request Solved.')
  console.log('____________END REQUEST____________\n');
});
}).listen(8080);

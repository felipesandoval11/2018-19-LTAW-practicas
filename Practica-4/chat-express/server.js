/*  CHAT SERVER for LTAW.
    Made by Felipe Sandoval.
*/

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//--Servir la pagina principal
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log("/: Showing index to user.");
  console.log("___________\n");
});

app.get('/hello', (req, res) => {
  res.sendFile(__dirname + '/hello.html');
  console.log("HELLO: Salute to client.");
  console.log("___________\n");
})

//  Get the chat_client JS
app.get('/chat-client.js', function(req, res){
  res.sendFile(__dirname + '/chat-client.js');
  console.log("JS requested");
});

//  Get the CSS for CHAT
app.get('/css/micss.css', function(req, res){
  res.sendFile(__dirname + '/css/micss.css');
  res.sendFile(__dirname + '/css/Hasthon.ttf');
  res.sendFile(__dirname + '/css/futurist.TTF');
  console.log("CSS requested");
});

//-- Lanzar el servidor
http.listen(3000, function(){
  console.log('listening on *:3000');
});

//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado!
io.on('connection', function(socket){
  console.log('--> Usuario conectado!');

  //-- Detectar si el usuario se ha desconectado
  socket.on('disconnect', function(){
    console.log('--> Usuario Desconectado');
  });

  //-- Detectar si se ha recibido un mensaje del cliente
  socket.on('new_message', msg => {

    //-- Notificarlo en la consola del servidor
    console.log("Mensaje recibido: " + msg)

    //-- Emitir un mensaje a todos los clientes conectados
    io.emit('new_message', msg);
  })
});

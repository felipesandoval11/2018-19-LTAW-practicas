/*  CHAT SERVER for LTAW.
    Made by Felipe Sandoval.
*/

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const PORT = 3000;

//  Get the index of my CHAT
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log("/: Showing index to user.");
  console.log("___________\n");
});

//  Get the hello html
app.get('/hello', (req, res) => {
  res.sendFile(__dirname + '/hello.html');
  console.log("HELLO: Salute to client.");
  console.log("___________\n");
})

//  Get the chat_client JS
app.get('/chat-client.js', function(req, res){
  res.sendFile(__dirname + '/chat-client.js');
  console.log("JS requested");
  console.log("___________\n");
});

//  Get the CSS for CHAT
app.get('/css/micss.css', function(req, res){
  res.sendFile(__dirname + '/css/micss.css');
  console.log("CSS requested");
  console.log("___________\n");
});

//  Lauching Server
http.listen(PORT, function(){
  console.log('Listening on *:3000');
});

//  Handling events.
io.on('connection', function(socket){
  console.log('--> New user connected!');
  io.emit('Welcome', 'Welcome new user');
  //  Knowing if a user disconnects from the chat
  socket.on('disconnect', function(){
    console.log('--> User disconnected!');
  });

  // If a message from a client is RECEIVED
  socket.on('new_message', msg => {
    console.log("MESSAGE RECEIVED: " + msg)
    //  that message is shown to all my clients
    io.emit('new_message', msg);
  })
});

/*  CHAT SERVER for LTAW.
    Made by Felipe Sandoval.
*/

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var clients = 0;
const PORT = 3000;

//  Get the index of my CHAT
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log("/: Showing index to user.");
  console.log("___________\n");
});

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
  console.log("___________");
});

function getDate(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  return today = dd + '/' + mm + '/' + yyyy;
}

//  Handling events.
io.on('connection', function(socket){
  clients += 1;
  console.log('--> New user connected!');
  io.emit('Welcome', 'SERVER: Welcome new user!\n');
  io.emit('new_message', 'SERVER: New user joined the chat!\n');
  //  Knowing if a user disconnects from the chat
  socket.on('disconnect', function(){
    clients -= 1;
    console.log('--> User disconnected!');
  });

  // If a message from a client is RECEIVED
  socket.on('new_message', msg => {
    console.log("MESSAGE RECEIVED: " + msg)
    if(msg == "/help"){
      var ans = "SERVER:    /help = Show commands.   /list = Show how many users are connected.\n"
              + "/hello = I salute to you. /date = I show you the date.\n"
      socket.emit('new_message', ans);
      console.log('--> Sending help to an user.');
    }else if (msg == "/list") {
      var ans = "SERVER: " + clients + " connected users.";
      socket.emit('new_message', ans);
      console.log('--> Sending list of connected users.');
    }else if (msg == "/hello") {
      var ans = "SERVER: Hello user! I'm the server.\n"
      socket.emit('new_message', ans);
      console.log('--> Sending a salute to an user.');
    }else if (msg == "/date") {
      var today = getDate();
      var ans = "SERVER: Today is " + today + "\n";
      socket.emit('new_message', ans);
      console.log('--> Sending date to an user.');
    }else{
      //  that message is shown to all my clients
      io.emit('new_message', msg);
    }
  })
});

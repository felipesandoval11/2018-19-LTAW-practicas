/*  CHAT CLIENT for LTAW.
    Made by Felipe Sandoval.
*/

function main() {
  // Creating WEB SOCKET
  var user = prompt("Please enter your user:");
  var socket = io();
  var welcomed = false;
  var recieving = false;

  var send = document.getElementById('send')

  var display = document.getElementById('display')

  var msg = document.getElementById("msg")

  msg.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) { // 13 is enter
        if (msg.value != ""){
          socket.emit('new_message', user + ": " + msg.value);
          console.log("Message sent.");
          msg.value = "";
        }
      }
  });

  send.onclick = () => {
//  Sending message with event NEW_MESSAGE
    if (msg.value != ""){
      recieving = true;
      socket.emit('new_message', user + ": " + msg.value);
      console.log("Message sent.");
      msg.value = "";
    }
  }

//  Handling events. RECEIVED messages from server.
  socket.on('Welcome', wel => {
    if (!welcomed) {  // if is an old client I DON'T sent the salute from server
      display.innerHTML += wel;
      display.innerHTML += ("\n");
      welcomed = true;
    }
  });

  socket.on('new_message', msg => {
    if(!recieving){
      recieving = true;
    }else{
      display.innerHTML += msg;
      display.innerHTML += ("\n");
    }
  });
}

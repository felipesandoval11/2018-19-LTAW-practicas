const electron = require('electron');
const io = require('socket.io-client');
const socket = io('http://localhost:3000');

console.log("Lauching electron...")

  // When is ready executes this
electron.app.on('ready', ()=>{
  console.log("Event Ready!")

  // Creating UI
  win = new electron.BrowserWindow({
    width: 600,
    height: 400
  })

  win.loadFile('index.html')
})

function main() {
  // Creating WEB SOCKET
  var welcomed = false;
  var recieving = false;

  var send = document.getElementById('send')

  var display = document.getElementById('display')

  var msg = document.getElementById("msg")

  msg.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) { // 13 is enter
        if (msg.value != ""){
          socket.emit('new_message', msg.value);
          console.log("Message sent.");
          msg.value = "";
        }
      }
  });

  send.onclick = () => {
//  Sending message with event NEW_MESSAGE
    if (msg.value != ""){
      recieving = true;
      socket.emit('new_message', msg.value);
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

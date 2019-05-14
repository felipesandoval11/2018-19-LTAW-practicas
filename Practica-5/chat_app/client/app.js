/*  CHAT CLIENT for LTAW.
    Made by Felipe Sandoval.
*/

var ipcRenderer = require('electron').ipcRenderer;//

function main() {
  // Creating WEB SOCKET
  //var socket = io();
  var recieving = false;
  var send = document.getElementById('send')
  var display = document.getElementById('display')
  var msg = document.getElementById("msg")

  msg.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) { // 13 is enter
        if (msg.value != ""){
          recieving = true;
          ipcRenderer.send('send_chat_msg', msg.value);
          console.log("Message sent.");
          msg.value = "";
        }
      }
  });

  send.onclick = () => {
//  Sending message with event NEW_MESSAGE
    if (msg.value != ""){
      recieving = true;
      ipcRenderer.send('new_message', msg.value);
      console.log("Message sent.");
      msg.value = "";
    }
  }

//  Handling events. RECEIVED messages from server.
  ipcRenderer.on('Welcome', (event,msg) => {
    display.innerHTML += msg;
    display.innerHTML += ("\n");
    console.log("recibi LA BIENVENIDA");
  });

  ipcRenderer.on('new_message', (event,msg) => {
    if(!recieving){
      recieving = true;
    }else{
      display.innerHTML += msg;
      display.innerHTML += ("\n");
    }
  });
}

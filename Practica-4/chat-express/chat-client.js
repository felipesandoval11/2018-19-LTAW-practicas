/*  CHAT CLIENT for LTAW.
    Made by Felipe Sandoval.
*/

function main() {
  // Creating WEB SOCKET
  var socket = io();
  var welcomed = false;
  var recieving = false;
  //-- Obtener los elementos de interfaz:

  //-- Boton de envio de mensaje
  var send = document.getElementById('send')

  //-- Parrafo para mostrar mensajes recibidos
  var display = document.getElementById('display')

  //-- Caja con el mensaje a enviar
  var msg = document.getElementById("msg")

  //-- Cuando se aprieta el botón de enviar...
  send.onclick = () => {
    //  Sending message with event NEW_MESSAGE
    recieving = true;
    socket.emit('new_message', msg.value);
    console.log("Message sent.")
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

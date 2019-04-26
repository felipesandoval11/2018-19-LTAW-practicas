/*  CHAT CLIENT for LTAW.
    Made by Felipe Sandoval.
*/

function main() {
  // Creating WEB SOCKET
  var socket = io();

  //-- Obtener los elementos de interfaz:

  //-- Boton de envio de mensaje
  var send = document.getElementById('send')

  //-- Parrafo para mostrar mensajes recibidos
  var display = document.getElementById('display')

  //-- Caja con el mensaje a enviar
  var msg = document.getElementById("msg")

  //-- Cuando se aprieta el botón de enviar...
  send.onclick = () => {

    //-- Enviar el mensaje, con el evento "new_message"
    socket.emit('new_message', msg.value);

    //-- Lo notificamos en la consola del navegador
    console.log("Mensaje emitido")
  }

//  Handling events.
  socket.on('Welcome', msg => {
    display.innerHTML = msg;
  });

  socket.on('new_message', msg => {
    display.innerHTML = msg;
  });
}

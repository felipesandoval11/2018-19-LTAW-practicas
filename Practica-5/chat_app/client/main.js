const electron = require('electron');
var ipcMain = electron.ipcMain;
const io = require('socket.io-client');
const socket = io('http://localhost:3000');

console.log("Lauching electron...")

  // When is ready executes this
electron.app.on('ready', ()=>{
  console.log("Event Ready!")

  // Creating UI
  win = new electron.BrowserWindow({
    width: 1200,
    height: 900
  })

  win.loadFile('index.html');

  win.on('close', function() { //   <---- Catch close event
    console.log("Closing electron...")
    win.removeAllListeners('close');
 });

 win.webContents.once('dom-ready', () => {

  const socket = io('http://localhost:4500');

  socket.on('server_message', msg =>{                      //on server message
  //ipcMain.send('new_message', msg);
    console.log(msg)
    win.webContents.send('server_message', msg);

  });

  socket.on('new_message', msg => {
  //when a new message is received, print it in display element
  //ipcMain.send('new_message', msg);
    win.webContents.send('new_message', msg);
  });

  ipcMain.on('send_chat_msg', (event,payload) =>{
    socket.emit('new_message', payload);
  });

  });

});

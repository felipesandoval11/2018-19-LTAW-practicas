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

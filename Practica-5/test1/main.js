const electron = require('electron')

console.log("Lauching electron...")

//-- Punto de entrada. En cuanto electron está listo,
//-- ejecuta esta función
electron.app.on('ready', ()=>{
  console.log("Evento Ready!")

  // Crear la ventana principal de nuestra Interfaz Gráfica
  win = new electron.BrowserWindow({
    width: 600,
    height: 400
  })
  // win.setMenuBarVisibility(false) // Don't show the to menu bar
  win.loadFile('index.html')
})

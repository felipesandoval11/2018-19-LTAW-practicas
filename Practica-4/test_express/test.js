const express = require('express')
const app = express()
const http = require('http').Server(app);

//-- Puerto donde lanzar el servidor
const PORT = 3000

//-- Punto de entrada pricipal
app.get('/', (req, res) => {
  res.send('Probando express... ¡¡¡qué fácil!!!');
  console.log("Acceso a /");
})

app.get('/woala', (req, res) => {
  res.send('WOALA!!! Chuck norris approved!!! :-)');
  console.log("Acceso a /woala");
})

//-- Lanzar servidor
http.listen(PORT, function(){
  console.log('Servidor lanzado en puerto ' + PORT);
});

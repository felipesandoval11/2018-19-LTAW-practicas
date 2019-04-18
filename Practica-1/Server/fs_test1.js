var fs = require('fs');

//-- Leer el fichero. Al terminar se invoca a la función show_file
fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) {
    console.log()
    console.log("-------> ERROR!!")
    console.log(err.message)
    console.log()
  } else{
    console.log("---> Comienzo del fichero leido\n")
    console.log(data)
    console.log("---> Final del fichero")
  }
});

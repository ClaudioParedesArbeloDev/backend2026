//llamamos a la libreria file system
const fs = require("fs");

//la orden WriteFileSync sirve para crear un nuevo archivo, o sobreescribir
fs.writeFileSync("./ejemplo.txt", "Hola clase de backEnd!!!");

//la orden readFileSync sirve para leer el contenido de un archivo
const contenido = fs.readFileSync("./ejemplo.txt", "utf-8");
console.log(contenido);

if (fs.existsSync("./ejemplo.txt")) {
  console.log("El archivo existe");
} else {
  console.log("El archivo no existe");
}

//la orden appendFileSync sirve para agregar contenido a un archivo sin sobreescribirlo
fs.appendFileSync(
  "./ejemplo.txt",
  "\nEsto se agrego despues de crear el archivo",
);

const nuevoContenido = fs.readFileSync("./ejemplo.txt", "utf-8");
console.log(nuevoContenido);

//la orden unlinkSync sirve para eliminar un archivo
fs.unlinkSync("./ejemplo.txt");

if (fs.existsSync("./ejemplo.txt")) {
  console.log("El archivo existe");
} else {
  console.log("El archivo no existe");
}
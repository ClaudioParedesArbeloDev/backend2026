const fs = require('fs');

fs.writeFile('archivo.txt', 'Hola, este es un archivo de texto', (err) => {
    if (err) {
        console.error('Error al escribir el archivo:', err);
    } else {
        console.log('Archivo creado exitosamente');
    }
}
)

//en writeFile vamos a tener 3 parametros, el primer parametro es el nombre del archivo,
//el segundo parametro es el contenido,
//el tercer parametro es la funcion callback que se ejecuta una vez que se ha creado el archivo, esta funcion recibe un parametro de error en caso de que ocurra un error al crear el archivo.

fs.readFile('archivo.txt', 'utf-8', (error, resultado) => {
    if (error) {
        console.error('Error al leer el archivo:', error);
    } else {
        console.log('Contenido del archivo:', resultado);
    }
});

//3 parametros, el primero es el nombre del archivo,
//el segundo es la codificacion,
//y el tercero es el callback
//mi funcion trae dos caminos posibles (error o resultado)
//si da error muestra el mensaje de error y sino muestra el contenido del archivo

fs.appendFile('archivo.txt', '\nEste es un nuevo contenido agregado al archivo', (err) => {
    if (err) {
        console.error('Error al agregar contenido al archivo:', err);
    }else {
        console.log('Contenido agregado exitosamente');
    }
});

//3 parametros, el primero es el nombre del archivo,
//el segundo es el contenido a agregar,
//y el tercero es el callback

fs.unlink('archivo.txt', (err) => {
    if (err) {
        console.error('Error al eliminar el archivo:', err);
    } else {
        console.log('Archivo eliminado exitosamente');
    }
});

//unlink sirve para eliminar un archivo, recibe dos parametros, el primero es el nombre del archivo y el segundo es la funcion callback que se ejecuta una vez que se ha eliminado el archivo, esta funcion recibe un parametro de error en caso de que ocurra un error al eliminar el archivo.
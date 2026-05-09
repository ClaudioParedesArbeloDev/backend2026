const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Hola este es mi primera respuesta desde un servidor')
})

server.listen(8080,() => {
    console.log('Servidor escuchando constantemente en el puerto 8080')
})
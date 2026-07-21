import express from 'express';
import __dirname from './utils.js';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js'
import {Server} from 'socket.io';

//guardamos la libreria express en app
const app = express();

//en la variable httpServer guardamos como levantar el servidor
const httpServer = app.listen(8000, () => console.log('Escuchando en el puerto 8000'));

//en esta variable guardamos como levantar el webSocket
const socketServer = new Server(httpServer);


app.engine('handlebars', handlebars.engine());

app.set('views', __dirname + '/views');

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use('/', viewsRouter)

socketServer.on('connection', socket => {
    console.log('nuevo cliente conectado')
    socket.on('message', data => {
        console.log(data)
    })

    socket.emit("evento_para_socket_individual", 'Este mensaje solo lo debe recibir el socket');

    socket.broadcast.emit("evento_para_todos_menos_el_socket_actual", 'este evento lo veran todos los socket conectados, menos el socket actual');

    socketServer.emit("evento_para_todos", 'Este evento lo reciben todos los socket');
})


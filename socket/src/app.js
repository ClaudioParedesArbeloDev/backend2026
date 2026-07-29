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

let messages = []

socketServer.on('connection', socket => {
    console.log('nuevo cliente conectado')
    socket.on('message', data => {
        messages.push(data)
        socketServer.emit('messageLogs', messages)
    })

    
})


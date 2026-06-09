//importamos express
import express from 'express';

//importamos las rutas de usuario y archivos
import userRoutes from './routes/user.routes.js';
import fileRoutes from './routes/file.routes.js';
import viewsRoutes from './routes/views.routes.js';

//importamos handlebars
import {engine} from 'express-handlebars'

//importamos sockets
import { Server } from 'socket.io';

//importamos utils
import __dirname from './utils.js';

//importamos las rutas de views
import path from 'path';


//creamos una instancia de express
const app = express();

//iniciamos el servidor
const httpServer = app.listen(8080, () => {
    console.log("Server is running on port 8080");
  });

//iniciamos el servidor de sockets
const socketServer = new Server(httpServer);

//middleware para usar handlebars
app.engine('handlebars', engine());

//middleware para usar handlebars
app.set('view engine', 'handlebars');

//middleware que nos lleva a la carpeta de views
app.set('views', path.join(__dirname, 'views'));

//middleware que nos lleva a la carpeta de layouts



//middleware para servir archivos estáticos desde la carpeta "public"
app.use('/static', express.static('public'));

//middlewares para parsear el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//usamos las rutas de usuario
app.use('/api/users', userRoutes);


app.use('/api/files', fileRoutes);

app.use('/', viewsRoutes);

/* function mid1(req, res, next){
    req.dato1 = 'un dato'
    next();
}

app.get('/ruta1', mid1, (req, res)=>{
    res.json({dato: req.dato1})
}) */




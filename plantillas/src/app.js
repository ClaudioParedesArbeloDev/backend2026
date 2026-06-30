import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import ViewsRouter from './routes/views.router.js'

//guardamos en esta variable la libreria express para poder utilizarla
const app = express();


//encender el motor de plantillas handlebars
app.engine('handlebars', handlebars.engine());

app.set('views', __dirname + '/views');

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use('/', ViewsRouter)



const server = app.listen(8080, ()=>console.log('Servidor escuchando en el puerto 8080'))




//importamos express y las rutas de usuario
import express from 'express';
import userRoutes from './routes/user.routes.js';
import fileRoutes from './routes/file.routes.js';


//creamos una instancia de express
const app = express();

//middleware para servir archivos estáticos desde la carpeta "public"
app.use('/static', express.static('public'));

//middlewares para parsear el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//usamos las rutas de usuario
app.use('/api/users', userRoutes);


app.use('/api/files', fileRoutes);

/* function mid1(req, res, next){
    req.dato1 = 'un dato'
    next();
}

app.get('/ruta1', mid1, (req, res)=>{
    res.json({dato: req.dato1})
}) */



//iniciamos el servidor
app.listen(8080, () => {console.log('Server is running on port 8080')});
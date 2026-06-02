//importamos express y las rutas de usuario
import express from 'express';
import userRoutes from './routes/user.routes.js';

//creamos una instancia de express
const app = express();


app.use(express.static('public'));

//middlewares para parsear el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//usamos las rutas de usuario
app.use('/api/users', userRoutes);



//iniciamos el servidor
app.listen(8080, () => {console.log('Server is running on port 8080')});
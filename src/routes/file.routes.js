//importamos el router de express
import { Router } from "express";

//importamos el uploader de utils
import { uploader } from "../utils.js";

//creamos una instancia del router
const router = Router();


//Array para almacenar los archivos subidos
let files = [];


//esta ruta devuelve todos los archivos subidos
router.get('/', (req, res) => {
    res.send({status: 'success', payload: files});
}),


//esta ruta permite subir un archivo
router.post('/upload', uploader.single('file'), (req, res) => {
    if(!req.file){
        return res.status(400).send({status: 'error', error: 'No se ha cargado ningún archivo'});
    }
    console.log(req.file);

    let file = req.file;
    
    files.push(file);
    res.send({status: 'success', payload: file});
});

export default router;
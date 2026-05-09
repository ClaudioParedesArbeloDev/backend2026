import express from 'express';

const app = express();

//los verbos HTTP son: GET, POST, PUT, DELETE, PATCH
/* Que es un CRUD?
C: Create -> POST
R: Read -> GET
U: Update -> PUT/PATCH
D: Delete -> DELETE
*/

//Array de objetos que va a actuar de base de datos
const usuarios = [
    {id: 1, nombre: 'Claudio', apellido: 'Gomez', edad: 30},
    {id: 2, nombre: 'Maria', apellido: 'Perez', edad: 25},
    {id: 3, nombre: 'Juan', apellido: 'Lopez', edad: 35},
    {id: 4, nombre: 'Ana', apellido: 'Garcia', edad: 28},
]

let idA = 1
let user = usuarios.find(u => u.id === idA)
console.log(user)


app.get('/saludo', (req, res)=>{
    res.send('Hola este es mi primera respuesta desde un servidor con Express')
})

app.get('/saludo/:comotellamas', (req, res)=>{
    console.log(req.params.comotellamas)
    res.send(`hola ${req.params.comotellamas}`)
})


app.get('/saludo/:nombre/:apellido', (req, res)=>{
    console.log(req.params.nombre)
    console.log(req.params.apellido)
    res.send(`Hola ${req.params.nombre} este es mi primera respuesta desde un servidor con Express`)
})

app.get('/usuarios', (req, res)=>{
    res.send(usuarios)
})

app.get('/usuarios/:idUsuario', (req, res)=>{
    let idUsuario = parseInt(req.params.idUsuario)
    console.log(typeof(idUsuario))
    let usuario = usuarios.find(u=>u.id===idUsuario)
    if(!usuario){
        res.send('No se encontro el usuario')
    }
    console.log(usuario)
    res.send({usuario})
})



app.listen(8080, () =>console.log('Servidor escuchando en el puerto 8080'))
//Este archivo js corresponde a la vista del index.handlebars
//que va a ser el cliente

//aca guardamos en socket la libreria io
const socket = io()

//hacemos una variable user vacia
let user;

//capturamos el input que creamos en la vista
let chatBox = document.getElementById('chatBox')

//Sweet Alert, que es una libreria para que se vea mas bonito los alert
//solo para ingresar el usuario
Swal.fire({
  title: "Identificate",//el titulo del alert
  input: "text",//que tenga un input y que sea tipo text
  text: "Ingresa el usuario para indentificarte en el chat",//texto que va a ver el usuario
  inputValidator: (value) => {
    return !value && 'Necesitas escribir un nombre de usuario'//valida que tenga contenido el input
  },
  allowOutsideClick: false //no permite que el usuario haga click fuera del boton
}).then(result => {
    user= result.value//guardar el resultado del input en el user vacio que declaramos antes
});

//ingresa el texto que queremos enviar en el chat
chatBox.addEventListener('keyup', evt => {//escuchamos el evento del input
    if(evt.key === "Enter"){//si, escuchamos evento tecla y es igual al enter
        if(chatBox.value.trim().length>0){//trim borra los espacios en blanco adelante o atras del texto
            socket.emit('message', {user:user, message: chatBox.value});//emita el mensaje y pase el usuario
            chatBox.value= "";//una vez que lo envio que quede en blanco de nuevo
        }
    }

})
//configuracion para recibir mensajes
socket.on('messageLogs', data => {//socket.on que escucha
    let log = document.getElementById('messageLogs');//capturamos el nodo del html
    let messages = '';//declaramos un variable vacia
    data.forEach(message => {//forEach recorre el array que es data
        messages = messages + `${message.user} dice: ${message.message}</br>`//aca le decimos que va a hacer con cada cosa que encuentre
    })
    log.innerHTML = messages;//es el nodo que capturamos y le decime que inserte html y que eso es igual a messages
})

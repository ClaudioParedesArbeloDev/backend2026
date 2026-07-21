const socket = io()

socket.emit('message', 'Hola, me estoy comunicando desde el websocket es mi segundo mensaje!!!!!')

socket.on('evento_para_socket_individual', data => {
    console.log(data);
})

socket.on('evento_para_todos_menos_el_socket_actual', data => {
    console.log(data);
})

socket.on('evento_para_todos', data =>{
    console.log(data);
})
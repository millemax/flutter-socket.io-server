const {io}= require('../index');

//mensajes de sockets
io.on('connection', client => {
    console.log('cliente conectado');
     //se disparara este callback cuando el cliente se desconecte
     client.on('disconnect', () => { 
 
         console.log('cliente desconectado')
     });
 
     //escuchamos un mensaje emitido
     client.on('mensaje', (payload) => {
         console.log('Mensaje !!!', payload);
 
         //enviamos mensaje a todos los dispositivos conectados
         io.emit('mensaje', {admin: 'nuevo mensaje del administrador'});
 
 
     });
 
 
 });
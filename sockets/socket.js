const { io } = require('../index');

// [Sockets Messages]
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => { 
        console.log('Cliente desconectado');
    });

    client.on('message', (messageInfoPayload) => {
        console.log('Message: ', messageInfoPayload);

        io.emit('message', { admin: 'New message' });
    });

    client.on('emitir-mensaje', ( payload ) => {
        // Esto emite a todos los clientes conectados
        // io.emit('nuevo-mensaje', payload);
        // Si lo quiero emitir a todos menos al que lo emitio es:
        client.broadcast.emit('nuevo-mensaje', payload);
    });
});
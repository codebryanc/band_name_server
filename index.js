// [Properties]
const express = require('express');
const path = require('path');
require('dotenv').config();

// [APP de express]
const app = require('express')();

// [Node server]
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// [Sockets Messages]
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => { 
        console.log('Cliente desconectado');
    });
});

// [Public path]
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// [Constructor]
server.listen(process.env.PORT, (err) => {
    if(err) {
        throw new Error(err);
    }

    console.log(`Servidor corriendo en puerto: ${process.env.PORT}`);
});
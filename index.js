// [Properties]
const express = require('express');
const path = require('path');
require('dotenv').config();

// [APP de express]
const app = require('express')();

// [Node server]
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

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
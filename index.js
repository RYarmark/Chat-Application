const express = require('express');
const http = require('http');
const io = require('socket.io');
const path = require('path');
const app = express();

//create server
const server = http.createServer(app);
//wrap server in socketIO
const socketIo = io(server);

app.use(express.static(path.join(__dirname, 'public')));

socketIo.on('connection', socket => {

    //when recive a message from socket, broadcast it to other clients
    socket.on('msg', msg => {
        socket.broadcast.emit('msg', msg)
    });
});


server.listen(80);

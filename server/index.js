const express = require('express');
const socketio = require('socket.io');

const http = require('http');
const app = express();

const router = require('./router');

const server = http.createServer(app);
const io = socketio(server);

io.on('connection',(socket) => {
    console.log("A new Connection !!");

    socket.on('join', ({name , room}) => {
        console.log(name,room);

    });

    socket.on('disconnect',()=> {
        console.log('User has left !!');
    })
});

const PORT = process.env.PORT || 5000;

app.use(router);

server.listen(PORT , () => console.log('Server has Started'));
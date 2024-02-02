const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on('connection', (socket) => {
  console.log('um usuario conectou');
  socket.on('nova mensagem', (msg) => {
    io.emit('nova mensagem', msg);
  });
});

app.use(express.static('public'));

module.exports = httpServer;
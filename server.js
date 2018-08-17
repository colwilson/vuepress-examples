var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', socket => {
  console.log('someone connected');
  socket.on('button_clicked', function (msg) {
    console.log('message:', msg);
    io.emit('messages', { message: msg });
  })
});

http.listen(9999, () => {
  console.log('listening on *:9999');
});
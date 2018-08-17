const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let clicks = 0

io.on('connection', socket => {
  console.log('someone connected');
  io.emit('clicks', { count: clicks });
  socket.on('button_clicked', msg => {
    console.log('message:', msg);
    clicks += 1
    console.log('incrementing clicks to', clicks);
    io.emit('clicks', { count: clicks });
  })
});

http.listen(9999, () => {
  console.log('listening on *:9999');
});
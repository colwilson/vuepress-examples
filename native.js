const WebSocketServer = require('websocket').server;
const http = require('http');

let clicks = 0

const server = http.createServer((request, response) => {
  // process HTTP request. Since we're writing just WebSockets
  // server we don't have to implement anything.
});
server.listen(9998, () => {
  console.log('listening on *:9998');
});

// create the server
let wsServer = new WebSocketServer({
  httpServer: server
});

// WebSocket server
wsServer.on('request', request => {
  let connection = request.accept(null, request.origin);
  console.log('someone connected');
  connection.on('message', msg => {
    if (msg.type === 'utf8') {
      console.log('message:', msg.utf8Data);
      clicks += 1
      console.log('incrementing clicks to', clicks);
      connection.sendUTF(clicks);
    }
  });

  connection.on('close', connection => {
  });
});
import * as http from 'http'
import * as websocket from 'ws'

const server = http.createServer((req, res) => {
    res.end("I'm connected");
});
const socket = new websocket.Server({ server });
socket.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
});
server.listen(8080);



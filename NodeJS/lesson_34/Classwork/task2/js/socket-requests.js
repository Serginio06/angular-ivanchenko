/**
 * Created by sergiiivanchenko on 09/08/2017.
 */

module.exports = function (server) {
    const io = require('socket.io')(server);

    io.on('connection', function (socket) {

        socket.send('Hello world');

        socket.emit('greet', {text: 'Hello from Socket.IO'});

        socket.on('receive_message',function (data) {
            console.log('Client response = ', data);
        });

        socket.on('connect_error',function (err) {
            console.log('connection error= ', err);
        })
    });
};

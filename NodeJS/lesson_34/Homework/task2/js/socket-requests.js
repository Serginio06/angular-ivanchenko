/**
 * Created by sergiiivanchenko on 09/08/2017.
 */

module.exports = function (server) {
    const io = require('socket.io')(server);

    io.on('connection', function (socket) {

        socket.on('send_message',function (data) {
            socket.emit('chat_message',data);
            socket.emit('msg_broadcated')

        });
    });
};

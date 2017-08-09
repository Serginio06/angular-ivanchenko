/**
 * Created by sergiiivanchenko on 09/08/2017.
 */
const express = require('express');
const app = express();
const port = process.env.port || 1337;
const server = require('http').Server(app);
const socket = require('socket.io');
const io = socket(server);



server.listen(port, function () {
    
    console.log('Server is running');
});

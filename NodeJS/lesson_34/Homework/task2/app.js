const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.port || 1337;
const ejs = require('ejs');

app.set('views','./views');
app.set('view engine','ejs');

require('./js/socket-requests')(server);

app.get('/', function (req, res) {
   res.render('index');
});

app.use(function (req, res, next) {
    res.statusMessage = "Sorry can't find this page!";
    res.status(404).sendFile(__dirname +  '/views/error.html');
});

server.listen(port, function () {
    console.log('Server running');
});

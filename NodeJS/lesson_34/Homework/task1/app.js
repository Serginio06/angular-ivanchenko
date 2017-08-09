const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.port || 1337;
const ejs = require('ejs');

app.set('views','./views');
app.set('view engine','ejs');

require('./js/socket-requests')(server);

app.all('/', function (req,res) {
    res.redirect('/message')
});

app.get('/message', function (req, res) {
   res.render('index');
});


server.listen(port, function () {

    console.log('Server running');
});


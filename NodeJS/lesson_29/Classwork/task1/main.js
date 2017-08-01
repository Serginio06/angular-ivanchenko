const http = require ('http');

var server = new http.Server(function (req, res) {

    console.log( 'Method= ' + req.method + ' . Path= ', req.url);
    res.write('<h1>Hello world</h1>');
    res.end();
});

server.listen(1337, '127.0.0.1');
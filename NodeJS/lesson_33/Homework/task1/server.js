const ejs = require('ejs');
const restify = require('restify');
const server = restify.createServer();
var serveStatic = require('serve-static-restify');
const port = process.env.port || 1337;
// var todos = require('./js/todos');

server.use(restify.bodyParser());


server.get(/\/views\/?.*/, serveStatic(__dirname));
server.get(/\/templates\/?.*/, serveStatic(__dirname));

require ('./routes') (server);


server.on('NotFound', function (req,res,next) {
    res.status(404);
    res.send('This page does not exist.');
});

server.on('InternalServer', function (req, res, err) {
    err.body = 'Error on the server';
    res.send(err);
});


server.listen (port, function (err, next) {
    if (err) next (err);
    
    console.log('Server is running on port ', port);
});
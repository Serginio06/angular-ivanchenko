/**
 * Created by sergiiivanchenko on 08/08/2017.
 */
const restify = require('restify');
const server = restify.createServer();
const bodyParser = require('restify-plugins').bodyParser;

const port = process.env.port || 1337;

server.use(bodyParser());

server.get('/test', function (req,res) {
    res.json(req.headers)
});

server.post('/test', function (req,res) {
    res.send(req.body)
});

server.on('NotFound', function (req,res,next) {
    res.status(404);
    res.send('This page does not exist.');
});

server.on('InternalServer', function (req, res, err) {
    err.body = 'Error on the server';
    res.send(err);
});

server.listen(port, function () {
    console.log('Server is running');
});

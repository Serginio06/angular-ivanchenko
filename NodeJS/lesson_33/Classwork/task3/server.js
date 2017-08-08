/**
 * Created by sergiiivanchenko on 08/08/2017.
 */
const restify = require('restify');
const server = restify.createServer();
const bodyParser = require('restify-plugins').bodyParser;

const port = process.env.port || 1337;

var users = [
    { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
    { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
];

function deleteUser(index) {
    users.splice(index,1)
}

function updateUser(index, name, age) {
    users[index].name = name;
    users[index].age = age;
}

server.use(bodyParser());

server.get('/users', function (req,res) {
    res.json(users)
});

server.post('/users', function (req,res) {
    users.push(JSON.parse('{"name": "random user", "age": 30}'));

    res.json(users)
});

server.put('/users/:index', function (req,res) {
    users.push(JSON.parse('{"name": "random user", "age": 30}'));

    // {name: 'updated name', age: 'updated age'}
    updateUser(req.params.index, 'updated name','updated age');

    res.json(users)
});


server.del('/users/:index', function (req,res) {
    deleteUser(req.params.index);

    res.json(users)
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

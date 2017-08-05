const express = require ('express');
const {pool} = require ('./js/connectionPool');
const bodyParser = require ('body-parser');
const port = process.env.port || 1337;

// console.log('pool=', pool);

const app = express ();

app.use (bodyParser.text ());
app.use ('/public',express.static (__dirname + '/public'));

app.all ('/', function (req, res) {

    res.sendFile(__dirname + '/public/table.html');
});


app.get ('/get-data', function (req, res) {

    pool.query ('SELECT * FROM test_table', function (err, result, fields) {

        if (err) {console.log ('err on query: ', err.stack)}

        // console.log ('result= ', result);
        res.send(result);



    });



});

process.on('exit', function () {
    pool.end();
});

app.listen(port);

const express = require ('express');
const {pool} = require ('./js/connectionPool');
const bodyParser = require ('body-parser');
const port = process.env.port || 1337;

const app = express ();

app.use (bodyParser.text ());
app.use (bodyParser.json ());
app.use ('/public', express.static (__dirname + '/public'));

app.all ('/', function (req, res) {

    res.sendFile (__dirname + '/public/table.html');
});


app.get ('/get-data', function (req, res) {

    pool.query ('SELECT * FROM test_table', function (err, result, fields) {

        if (err) {console.log ('err on query: ', err.stack)}
        res.send (result);
    });
});

app.get ('/addItem', function (req, res) {
    res.sendFile (__dirname + '/public/add-item.html');
});

app.post ('/newItem', function (req, res) {

    let sql = `INSERT INTO test_table (name,info) VALUES ('${req.body.name}','${req.body.info}')`;

    pool.query(sql,function (err, result) {

        if ( err ) {
        console.log('Error on insert : ', err.message);
            res.status(500).send();
        }

        res.status (200).send ();
    })

});

process.on ('exit', function () {
    pool.end ();
});

app.listen (port);

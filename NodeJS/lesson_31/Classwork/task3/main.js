const express = require ('express');
const app = express ();
const mysql = require ('mysql');
const port = process.env.port || 1337;
const bodyParser = require ('body-parser');

const connection = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'test'

});

connection.connect (function (err) {
    if (err) console.log ('Error during connection, ', err);
    console.log ('connected sussessfully');
});


app.use ('/public', express.static (__dirname + '/public'));
app.use (bodyParser.text ());
app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({extended: true}));

app.all ('/', function (req, res) {
    res.sendFile (__dirname + '/public/table.html')
});

app.get ('/get-data', function (req, res) {

    connection.query ('SELECT * FROM test_table', function (err, rows) {
        if (err) console.log ('Error in query, ', err);
        res.send (JSON.stringify (rows));


    });


});

app.post ('/add-item', function (req, res) {

    let rqstBodyObj = JSON.parse (req.body);

    console.log ('req.body', rqstBodyObj.name);

    let sql = "INSERT INTO test_table (name, info) VALUES ('" + rqstBodyObj.name + "', '" + rqstBodyObj.info + "')";

    console.log ('sql= ', sql);

    connection.query (sql, function (err, resp) {

        if (err) {
            console.log ('error on INSERT into table');
            res.status (500).send ();
        }


        console.log ('INSERT resp = ', resp);
        res.status (200).send ();
    });


});

app.use (function (req, res, next) {

    res.sendFile (__dirname + '/public/error.html');
    // next('Page not found');

});

process.on ('exit', function () {

    connection.end (function (err) {
        if (err) console.log ('Error during close connection, ', err);
        console.log ('connection to DB close sussessfully');
    });
});

app.listen (port);

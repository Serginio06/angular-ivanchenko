const express = require('express');
const app = express();
const mysql = require('mysql');
const port = process.env.port || 1337;

const connection = mysql.createConnection( {
    host:'localhost',
    port:3306,
    user:'root',
    password:'123456',
    database:'test'

});

app.get('/', function (req,res) {

    connection.connect(function (err) {

        if (err) console.log('Error during connection, ', err);

        console.log('connected sussessfully');

        connection.query('SELECT * FROM test_table', function (err, rows) {
            if (err) console.log('Error on query, ', err);

            console.log('rows= ', rows);


        })
    });


    res.send();
});

process.on('exit', function () {

    connection.end (function (err) {
        if (err) console.log ('Error during close connection, ', err);
        console.log ('connection to DB close sussessfully');
    });
});

app.listen(port);

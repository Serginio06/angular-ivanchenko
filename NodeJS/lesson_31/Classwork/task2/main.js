const express = require ('express');
const app = express ();
const mysql = require ('mysql');
const port = process.env.port || 1337;

const connection = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'test'

});


app.use ('/public', express.static (__dirname + '/public'));

app.get('/',function (req,res) {

    res.sendFile(__dirname+ '/public/table.html')
});

app.get ('/get-data', function (req, res) {

    connection.connect (function (err) {

        if (err) console.log ('Error during connection, ', err);

        console.log ('connected sussessfully');

        connection.query ('SELECT * FROM test_table', function (err, rows) {
            if (err) console.log ('Error in query, ', err);
            // console.log ('rows= ', rows);
            res.send (JSON.stringify(rows));


        });

    });


});

app.use(function (req,res,next) {

    res.sendFile(__dirname+'/public/error.html');
    // next('Page not found');

});

process.on('exit', function () {

    connection.end (function (err) {
        if (err) console.log ('Error during close connection, ', err);
        console.log ('connection to DB close sussessfully');
    });
});

app.listen (port);

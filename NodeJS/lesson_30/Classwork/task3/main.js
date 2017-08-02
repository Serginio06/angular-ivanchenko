const express = require ('express');
const app = express ();
const http = require('http');

const htmlDir ='./static/';

app.get ('/test' ,function (req, res) {

    res.sendFile(__dirname+'/static/form.html');
    console.log('GET on localhost/test');

});

app.post('/test', function (req,res) {
    console.log('POST on localhost/test');

    req.on('data',function (chunk) {
       console.log('POST body =', chunk.toString());
    });

    req.pipe(res);
});

app.use(function (req,res) {
    res.send();
    console.log('other methods or paths ');
});

app.listen (1337);

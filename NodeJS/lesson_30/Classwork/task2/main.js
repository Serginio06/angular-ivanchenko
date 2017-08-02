const express = require ('express');
const app = express ();

app.use (function (req, res, next) {
    let responseText = "<h1>Hello from Express</h1>";
    res.send (responseText);
    next ();
});

app.use (function (req, res) {
    console.log ('Method: ', req.method);
    console.log ('Path: ', req.url);
});

app.listen (1337);


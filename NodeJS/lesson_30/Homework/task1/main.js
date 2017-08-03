const express = require ('express');
const app = express ();
var serveIndex = require('serve-index');
const path = require ('path');
const port = process.env.port || 1337;

app.use("/public", express.static(__dirname + "/public"));

app.all('/',function (req,res) {
   res.redirect('/public');
});

app.use('/public', serveIndex('public', {'icons': true}));

app.listen (port);
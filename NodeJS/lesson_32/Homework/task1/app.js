const express = require ('express');
const app = express ();
const config = require('./config')(app);
const ejs = require('ejs');
const bodyParser = require('body-parser');


app.use(bodyParser.text());
app.use(bodyParser.json());

app.set('views', './templates');
app.set('view engine', 'ejs');

app.use('/views', express.static(__dirname + '/views'));
app.use('/templates', express.static(__dirname + '/templates'));

require ('./routes') (app);

app.use(function (req, res, next) {
    // res.status(404).send("Sorry can't find this page!")
    res.statusMessage = "Sorry can't find this page!";
    res.status(404).sendFile(__dirname +  '/views/error.html');
});

app.use (function (err, req, res, next) {
    console.log ('Error occured: Error (code: ' + err.status + '). Message: ' + err.message);

    if (err.status) {
        res.statusMessage = err.message;
        res.status (err.status);
        res.send ('Error template');
    } else {
        next (err.stack);
    }
});


app.listen (config.get('port'), function (err, next) {
    if (err) next (err);
    
    console.log('Server is running on port ', config.get('port'));
});
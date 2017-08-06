const express = require('express');
const app = express();
const port = process.env.port || 1337;
const session = require('express-session');
const expressMysqlSession = require('express-mysql-session')(session);
const sessionStoreOptions = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123456',
    database:'session_test',
    checkExpirationInterval: 9000,
    expiration:200000
};

const sessionStore = new expressMysqlSession(sessionStoreOptions);
var previouseSessionVar1 = '';

app.use(session({
secret:'coockieSecredCode',
    saveUninitialized:true,
    resave:false,
    store: sessionStore
}));



app.all('/', function (req,res) {

    res.send();

});



app.listen(port);

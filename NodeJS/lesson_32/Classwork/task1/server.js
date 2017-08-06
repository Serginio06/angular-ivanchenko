/**
 * Created by sergiiivanchenko on 06/08/2017.
 */
const express = require('express');
const cookieParser = require('cookie-parser');
const port = process.env.port || 1337;

const app = express();

app.use(cookieParser('secret123456'));

app.all('/', function (req,res) {

    res.cookie('myCookie2','my Cookie',{
        httpOnly:true,
        signed:true,
        expires:new Date(Date.now() + 604800000)
    });

    res.send();

});

app.listen(port);


const express = require('express');
const app = express();

app.use(function (req,res) {
    let responseText = "<h1>Hello from Express</h1>";
    res.send(responseText);

});

app.listen(1337);


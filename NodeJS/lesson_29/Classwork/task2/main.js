const http = require ('http');
const url = require ('url');
const port = 1337;

// const fs = require ('fs');
// const writeStream = fs.WriteStream('./resOutput.txt');

var server = new http.Server (function (req, res) {

    console.log ('Method= ' + req.method + ' . Path= ', req.url);

    if (req.method === "GET" && req.url === "/test") {
        let respMsg = '{"message": "Hello World!"}';
        res.end (respMsg);

    } else {
        res.write ('<h2>Try GET request on 127.0.0.1/test</h2>');
        res.write ('<h2>And see result in command line </h2>');
        res.end ();
    }

});

var reqOptions = {
    host: '127.0.0.1',
    port: '1337',
    path: '/test'
};


let getReqest = () => {
    console.log( ' GET request on path /test has been sent');

    let outReq = http.request (reqOptions, function (res) {

        res.on('data', function (data) {
            console.log('GET request returned = ', data.toString());
        });

    });

    outReq.end();
};

setTimeout (getReqest, 2000);


server.listen (port, '127.0.0.1');

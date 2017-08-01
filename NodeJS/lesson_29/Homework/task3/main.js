const http = require ('http');
const fs = require ('fs');
const path = require ('path');
const url = require ('url');
const port = process.env.port || 1337;
let fileNumber = 1;

var server = http.createServer (function (req, res) {
    let receivedData = '';

    if (req.url != "/favicon.ico" && req.url != "/robots.txt") {

        if (req.method === "POST" && req.url === "/test") {

            req.pipe (res);

        } else if(req.url === "/") {

            let filePath = path.join ('./' + fileNumber + ".txt");
            let writeStream = fs.WriteStream (filePath);

            writeStream.end (JSON.stringify (req.headers));
            let respondBody = '<h2>Please, find file ' + fileNumber + '.txt with headers in the project directory</h2>';

            res.write (respondBody);
            res.end ();
            fileNumber++;

        } else {
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(404,'Requested resource not found');
            res.write("<h2>Sorry, requested resource not found</h2>");
            res.end();
        }
    }
    else {
        res.end ();
    }


}).listen (port, function () {


    let postData = '{"message": "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ' +
        'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."}';
    let receivedData = '';
    let options = {
        "port": 1337,
        "method": "POST",
        "path": "/test"

    };

    let postRqst = http.request (options, function (res) {
        console.log ('POST request has been sent \n');

        res.on ('data', function (chunk) {
            receivedData += chunk;
        });

        res.on ('end', function () {

            let parsedData = JSON.parse(receivedData);
            console.log ('Parsed respond from POST request: ', parsedData.message);
        })
    });

    setTimeout (()=> {
        postRqst.write (postData);
        postRqst.end ()
    }, 2000)

});
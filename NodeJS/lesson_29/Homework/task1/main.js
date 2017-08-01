const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.port || 1337;
let fileNumber = 1;

var server = http.createServer(function (req,res) {



    if ( req.url != "/favicon.ico" && req.url !="/robots.txt" ) {

        let filePath = path.join('./' + fileNumber + ".txt");
        let writeStream = fs.WriteStream(filePath);

        writeStream.end(JSON.stringify(req.headers));
        let respondBody = '<h2>Please, find file ' + fileNumber + '.txt with headers in the project directory</h2>';

        res.write(respondBody);
        res.end();
        fileNumber++;
    } else {
        res.end();

    }





}).listen(port);
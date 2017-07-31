const fs = require('fs');

const inFile = fs.FileReadStream('./test.txt',{start:10, end:20});
const outFile = fs.FileWriteStream('./output.txt');

inFile.pipe(outFile).on('close',function () {
    console.log( 'output.txt is ready with bytes from 10 to 20 ');
});


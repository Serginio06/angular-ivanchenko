const fs = require ('fs');

let [, ,...textdata] = process.argv;

if (textdata.length) {
    fs.writeFile('test.txt',textdata.join(' '),function (err) {
        if (err) {console.log('Error during test.txt creation. Error message: ', err)}
    });
} else {
    console.log("Pease, run 'npm test' to create test.txt with test data \n or 'npm start some data' where some data data for test.txt file");

}
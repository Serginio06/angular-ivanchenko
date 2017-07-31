const fs = require ('fs');

fs.open ('test.txt', 'r', function (err, fd) {
    let buff = Buffer.alloc (6);

    // console.log ('err= ', err);
    if (err) {
        if (err.code == 'ENOENT') {
            console.log ('File not found. Please check path to file. Error message: ', err.message);
        } else {
            throw err;
        }
    } else {

        fs.read (fd, buff, 0, 6, 9, function (err, bytes) {

            if (err) throw err;

            // console.log('Read string length = '+ bytes + ' bytes');
            console.log ('Read string = ', buff.toString ());


            fs.close (fd, function (err) {
                if (err) throw err;

                // console.log ('File was closed');
            })
        });
    }
});
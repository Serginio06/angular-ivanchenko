var path = require ("path");

const fs = require ('fs');

function sendFile(filePath, res) {
    var fileStream = fs.createReadStream (filePath);
    var data = '';

    fileStream.on ('readable', function () {

        res.write (fileStream.read ())
    });

    fileStream.on ('end', function () {

        res.end ();
    });
}


module.exports = function (server, pool) {

    server.get ('/', function (req, res, next) {
        sendFile (path.join (__dirname, "..", "views/table.html"), res);
    });

    server.get ('/get-data', function (req, res, next) {

        pool.query ('SELECT * FROM todo_items', function (err, rows) {
            if (err) next (err);

            res.send (rows);
        });
    });

    server.get ('/check-id/:id', function (req, res, next) {

        var sql = 'SELECT * FROM todo_items WHERE id=?';
        var values = [req.params.id];

        pool.query (sql, values, function (err, rows) {
            if (err) {
                res.status (500);
                res.send ('Error on server on check id')
            }

            res.status (200);
            // res.send (rows.length.toString ());
            res.send (rows);
        });
    });

    // server.get ('/addItem', function (req, res, next) {
    //     res.render ('add-item', {data: 'some dta here'})
    // });

    server.get ('/editItem/:id', function (req, res, next) {

        var sql = 'SELECT * FROM todo_items WHERE id=?';
        var values = [req.params.id];

        pool.query (sql, values, function (err, rows) {
            if (err) {
                res.status (500);
                res.send ('Error on server on check id');
            }


            res.send ('edit item');
            // res.render ('edit-item', {name: rows[0].name, info: rows[0].description, id: req.params.id})
            // sendFile ('edit-item', {name: rows[0].name, info: rows[0].description, id: req.params.id}, res)
        });
    })
};
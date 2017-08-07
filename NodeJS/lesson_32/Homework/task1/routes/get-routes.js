var path = require ("path");

module.exports = function (app, pool) {

    app.get ('/', function (req, res, next) {
        res.sendFile (path.join (__dirname, "..", "views/table.html"));
    });

    app.get ('/get-data', function (req, res, next) {
        pool.query ('SELECT * FROM test_table', function (err, rows) {
            if (err) next (err);
            res.send (rows);
        });
    });

    app.get ('/check-id/:id', function (req, res, next) {

        console.log ('id to check: ', req.params.id);

        var sql = 'SELECT * FROM test_table WHERE id=?';
        var values = [req.params.id];

        pool.query (sql, values, function (err, rows) {
            if (err) { res.status (500).send ('Error on server on check id')}

            res.status (200).send (rows.length.toString ());
        });
    });

    app.get ('/addItem', function (req, res, next) {
        res.render ('add-item', {data: 'some dta here'})
    });

    app.get ('/editItem/:id', function (req, res, next) {

        var sql = 'SELECT * FROM test_table WHERE id=?';
        var values = [req.params.id];

        pool.query (sql, values, function (err, rows) {
            if (err) { res.status (500).send ('Error on server on check id')}

            res.render ('edit-item', {name: rows[0].name, info: rows[0].info, id: req.params.id})
        });
    })
};
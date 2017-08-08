module.exports = function (server, pool) {

    server.post ('/addItem', function (req, res, next) {

        let sql = 'INSERT INTO todo_items(name,description) VALUES (?,?)';
        let values = [req.body.name, req.body.description];

        pool.query (sql, values, function (err, result) {

            if (err) {
                console.log('Error on server on insert', err);
                res.status (500);
                res.send ('Error on server on insert');
            }


            res.status (200);
            res.send ();
        })

    })
};
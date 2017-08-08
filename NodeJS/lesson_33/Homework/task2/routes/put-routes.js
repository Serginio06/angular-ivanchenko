module.exports = function (server, pool) {

    server.put ('/changeItem', function (req, res, next) {

        let sql = 'UPDATE todo_items SET name=?, description=? WHERE id=? ';
        let values = [req.body.name, req.body.description, req.body.id];

        pool.query (sql, values, function (err, result) {
            if (err) { res.status (500).send ('Error on server on update')}

            res.status (200);
               res.send ();
        })

    })
};
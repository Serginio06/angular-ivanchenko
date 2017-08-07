module.exports = function (app, pool) {

    app.put ('/changeItem', function (req, res, next) {

        let sql = 'UPDATE test_table SET name=?, info=? WHERE id=? ';
        let values = [req.body.name, req.body.info, req.body.id];

        pool.query (sql, values, function (err, result) {
            if (err) { res.status (500).send ('Error on server on update')}

            res.status (200).send ();
        })

    })
};
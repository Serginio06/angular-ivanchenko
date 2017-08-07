
module.exports = function (app, pool) {


    app.delete ('/delete-item', function (req, res, next) {

        let sql = 'DELETE FROM test_table WHERE id=?';
        let values = [req.body.id];

        pool.query (sql, values, function (err, result) {

            if (err ) { res.status (500).send ('Error on server on delete')}

            res.status (200).send (result.affectedRows.toString());
        })

    })
};
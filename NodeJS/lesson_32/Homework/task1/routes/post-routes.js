module.exports = function (app, pool) {

    app.post ('/newItem', function (req, res, next) {

        let sql = 'INSERT INTO test_table(name,info) VALUES (?,?)';
        let values = [req.body.name, req.body.info];

        pool.query (sql, values, function (err, result) {

            if (err) { res.status (500).send ('Error on server on insert')}

            console.log ('result of insert= ', result);
            res.status (200).send ();
        })

    })
};
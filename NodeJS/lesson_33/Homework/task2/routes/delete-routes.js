
module.exports = function (server, pool) {


    server.del ('/delete/:id', function (req, res, next) {
        
        let sql = 'DELETE FROM todo_items WHERE id=?';
        let values = [req.params.id];

        pool.query (sql, values, function (err, result) {
            
            if (err ) {
                console.log('Error on server on delete' + err);
                res.status (500).send ('Error on server on delete' )
            }

            res.status (200);
            res.send (result.affectedRows.toString());
        })

    })
};
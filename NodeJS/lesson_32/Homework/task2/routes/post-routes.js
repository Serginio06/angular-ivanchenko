/**
 * Created by sergiiivanchenko on 07/08/2017.
 */
const passwordHandler = require ('./../js/password_handler');

module.exports = function (app, pool) {

    app.post ('/registerUser', function (req, res) {

        let hashedPass = passwordHandler.encryptPassword (req.body.pass);

        let sql = 'INSERT INTO users (username, passwordHash) VALUES(?,?)';
        let values = [req.body.userName, hashedPass];

        pool.query (sql, values, function (err, result) {

            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    let obj = '{"status":2}';
                    res.status (200).send (obj);
                } else {
                    console.log ('err on post /registerUser= ', err);
                }
            } else {
                if (result && result.affectedRows > 0) {
                    res.setHeader ('Content-type', 'application/json');
                    let obj = '{"status":1}';
                    res.status (200).send (obj);
                }
            }
        });
    })
};

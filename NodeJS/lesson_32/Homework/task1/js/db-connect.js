/**
 * Created by sergiiivanchenko on 06/08/2017.
 */

const mysql = require('mysql');

module.exports = mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123456',
    database:'test'
});



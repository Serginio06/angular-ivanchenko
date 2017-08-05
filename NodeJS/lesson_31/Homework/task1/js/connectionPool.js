/**
 * Created by sergiiivanchenko on 04/08/2017.
 */
const mysql = require('mysql');

const connOptions = {
    host:'localhost',
    port:'3306',
    database:'test',
    user:'root',
    password:'123456'

};

const pool = mysql.createPool(connOptions);

module.exports = {
    pool:pool
};


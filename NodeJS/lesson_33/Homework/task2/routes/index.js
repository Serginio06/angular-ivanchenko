/**
 * Created by sergiiivanchenko on 06/08/2017.
 */
const pool = require('./../js/db-connect');

module.exports = function (server) {
    require('./get-routes')(server, pool);
    require('./post-routes')(server, pool);
    require('./delete-routes')(server, pool);
    require('./put-routes')(server, pool);
};

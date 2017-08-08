var todos = require('./../js/todos');

module.exports = function (server) {
    require('./get-routes')(server, todos);
    require('./post-routes')(server, todos);
    require('./delete-routes')(server, todos);
    require('./put-routes')(server, todos);
};

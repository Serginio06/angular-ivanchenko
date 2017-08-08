var path = require ("path");
const sendFile = require('./../js/file-Render');

module.exports = function (server, todos) {

    server.get ('/', function (req, res, next) {
        sendFile (path.join (__dirname, "..", "views/table.html"), res);
    });

    server.get ('/get-data', function (req, res, next) {
        res.send (todos.getData ());
    });

    server.get ('/check-id/:id', function (req, res, next) {
        res.status (200);
        res.send (todos.checkId (req.params.id));
    });
};
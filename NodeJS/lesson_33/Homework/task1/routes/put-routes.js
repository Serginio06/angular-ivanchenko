module.exports = function (server, todos) {

    server.put ('/changeItem', function (req, res, next) {

        todos.changeItem(req.body.name, req.body.description, req.body.id);

        res.status (200);
        res.send ();

    })
};
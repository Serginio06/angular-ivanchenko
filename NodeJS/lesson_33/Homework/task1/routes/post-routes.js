module.exports = function (server, todos) {

    server.post ('/addItem', function (req, res, next) {

        todos.addItem(req.body.name, req.body.description);

        res.status (200);
        res.send ();

    })
};
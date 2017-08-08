
module.exports = function (server, todos) {
    server.del ('/delete/:id', function (req, res, next) {

        var isIdExist = todos.checkId(req.params.id);

        if ( isIdExist.length) {
            todos.deleteItem(req.params.id);
            res.status (200);
            res.send ('1');
        } else {
            res.status (200);
            res.send ('0');
        }
    })
};
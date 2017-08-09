/**
 * Created by sergiiivanchenko on 07/08/2017.
 */

module.exports = function (app, pool) {

    app.get ('/', function (req, res) {
        if ( req.session.username ) {
            res.redirect('/chat');
        } else {
            res.redirect('/login');
        }
    });

    app.get('/login', function (req,res) {
        res.render ('login');
    });

    app.get('/chat',function (req,res) {
        if ( req.session.username ) {
            res.render('chat',{userName:req.session.username});
        } else {
            res.render('err_notLogin');
            console.log('User are not logged in');
        }

    });

    app.get('/logout', function (req,res) {
        req.session.username = '';
        res.redirect('/login');
    })
};

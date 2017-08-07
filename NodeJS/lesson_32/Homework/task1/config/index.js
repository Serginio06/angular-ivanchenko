module.exports = function (app) {

    // console.log (' this is config');

    app.set ('var1', 'value of var1');
    app.set ('port', process.env.port || 1337);


    return {
        get: function (variable) {
            return app.get (variable);
        }
    };

};

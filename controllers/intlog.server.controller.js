var Intlog = require('../models/intlog.server.model.js');

exports.list = function(req, res) {
    var query = Intlog.find();

    query
        .limit(100)
        .exec(function(err, results){
            res.render('intlog', {title: 'Intlog items', items: results});
        });

};

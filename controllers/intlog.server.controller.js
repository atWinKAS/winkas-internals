var Intlog = require('../models/intlog.server.model.js');
var viewbag = require('../viewbag');

exports.list = function(req, res) {
    var appData = viewbag.getAppData(req);
    
    var query = Intlog.find();

    query
        .limit(100)
        .exec(function(err, results){
            res.render('intlog', {title: 'Intlog items', viewbag : appData, items: results});
        });

};

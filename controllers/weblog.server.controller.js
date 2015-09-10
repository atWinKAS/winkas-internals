var Weblog = require('../models/weblog.server.model.js');

exports.list = function(req, res) {
	var query = Weblog.find();

    query
        .limit(100)
        .exec(function(err, results){			
	       res.render('weblog', {title: 'Weblog items', items: results});
        });

};

exports.single = function(req, res) {
    var query = Weblog.findById(req.params.id);
 
     query
         .exec(function(err, result){			
           res.render('weblogitem', {title: 'Weblog item', item: result});
         });

};

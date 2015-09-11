var Weblog = require('../models/weblog.server.model.js');
var viewbag = require('../viewbag');

exports.list = function(req, res) {
    
    var appData = viewbag.getAppData(req);
    
	var query = Weblog.find();

    query
        .limit(100)
        .exec(function(err, results){			
	       res.render('weblog', {title: 'Weblog items', viewbag : appData, items: results});
        });

};

exports.single = function(req, res) {
    
    var appData = viewbag.getAppData(req);
    
    var query = Weblog.findById(req.params.id);
 
     query
         .exec(function(err, result){			
           res.render('weblogitem', {title: 'Weblog item', viewbag : appData, item: result});
         });

};

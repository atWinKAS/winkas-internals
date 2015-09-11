var viewbag = require('../viewbag');

exports.get = function(req, res) {
    var appData = viewbag.getAppData(req);  
    res.render('index', { title: 'Home', viewbag : appData });
};


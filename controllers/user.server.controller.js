var viewbag = require('../viewbag');

exports.login = function(req, res) {
	res.render('login', { message: req.flash('loginMessage') });
};

exports.signup = function(req, res) {
    res.render('signup', { message: req.flash('signupMessage') });
};

exports.profile = function(req, res) {
    var appData = viewbag.getAppData(req);
    res.render('profile', {
            viewbag : appData,
            user : req.user // get the user out of session and pass to template
        });
};

exports.logout = function(req, res) {
	req.logout();
	res.redirect('/');    
};

var express = require('express');
var router = express.Router();
var homeCtrl = require('../controllers/home.server.controller');
var standupCtrl = require('../controllers/standup.server.controller');
var weblogCtrl = require('../controllers/weblog.server.controller');
var intlogCtrl = require('../controllers/intlog.server.controller');
var userCtrl = require('../controllers/user.server.controller');
var passport = require('passport');


router.get('/', function(req, res) {
  return homeCtrl.get(req, res);
});

// Users

router.get('/login', function(req, res) {
  return userCtrl.login(req, res);
});

// process the login form
    router.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

router.get('/signup', function(req, res) {
  return userCtrl.signup(req, res);
});
// process the signup form
router.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

router.get('/profile', isLoggedIn, function(req, res) {
  return userCtrl.profile(req, res);
});

router.get('/logout', function(req, res) {
  return userCtrl.logout(req, res);
});

// End User

router.get('/notes', function(req, res) {
  return standupCtrl.list(req, res);
});

router.post('/notes', function(req, res) {
    return standupCtrl.filterByMember(req, res);
});

router.get('/newnote', function(req, res) {
    return standupCtrl.getNote(req, res);
});

router.post('/newnote', function(req, res) {
    return standupCtrl.create(req, res);
});

router.get('/weblog', isLoggedIn, function(req, res) {
  return weblogCtrl.list(req, res);
});
router.get('/weblog/:id', isLoggedIn, function(req, res) {
  return weblogCtrl.single(req, res);
});

router.get('/intlog', isLoggedIn, function(req, res) {
  return intlogCtrl.list(req, res);
});


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}


module.exports = router;

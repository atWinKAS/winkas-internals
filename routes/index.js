var express = require('express');
var router = express.Router();
var homeCtrl = require('../controllers/home.server.controller');
var standupCtrl = require('../controllers/standup.server.controller');
var weblogCtrl = require('../controllers/weblog.server.controller');
var intlogCtrl = require('../controllers/intlog.server.controller');

router.get('/', function(req, res) {
  return homeCtrl.get(req, res);
});

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

router.get('/weblog', function(req, res) {
  return weblogCtrl.list(req, res);
});

router.get('/intlog', function(req, res) {
  return intlogCtrl.list(req, res);
});
module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/index', function(req, res, next) {
  res.render('index');
});
router.get('/dictionary', function(req, res, next) {
  res.render('dictionary');
});
router.get('/extension2', function(req, res, next) {
  res.render('extension2');
});
router.get('/extension3', function(req, res, next) {
  res.render('extension3');
});
router.get('/extension4', function(req, res, next) {
  res.render('extension4');
});
router.get('/nav', function(req, res, next) {
  res.render('nav');
});

module.exports = router;

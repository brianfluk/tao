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
router.get('/nav', function(req, res, next) {
  res.render('nav');
});

module.exports = router;

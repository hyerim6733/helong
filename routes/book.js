var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('book', { title: 'HeLong - book📙' });
  //res.send('book');
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'HeLong - About 💡' });
  //res.send('about');
});

module.exports = router;

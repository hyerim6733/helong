var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('menu', { title: 'HeLong - Menu 📜' });
  //res.send('menu');
});

module.exports = router;

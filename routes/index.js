var express = require('express');
var router = express.Router();
const storage = require('../storage');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { events: storage.all() });
});

module.exports = router;

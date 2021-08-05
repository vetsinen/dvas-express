var express = require('express');
var router = express.Router();
const storage = require('../storage')

/* Event endpoint. */

router.post('/', function(req, res, next) {
    console.log(req.body);
    storage.put(req.body);
    res.render('index', { title: 'Express' });
});

module.exports = router;
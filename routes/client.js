var express = require('express');
var router = express.Router();

/* List of clients */
router.get('/', function(req, res, next) {
	res.send('Clients');
});

module.exports = router;
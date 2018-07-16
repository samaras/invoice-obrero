var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Invoice = require('../models/Invoice.js');

/* List of invoices */
router.get('/', function(req, res, next) {
	res.send('Invoices');
	/*Invoice.find(function(err, client){
		if(err) return next(err);
		res.json(client);
	});*/
});

/* Get invoice by id */
router.get(':/id', function(req, res, next) {
	Invoice.findById(req.params.id, function(err, post){
		if(err) return next(err);
		res.json(post);	
	});
});

module.exports = router;
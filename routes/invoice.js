var express = require('express');
var router = express.Router();

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

/* GET /Invoices listing. */
router.get('/', function(req, res, next) {
  Invoice.find(function (err, Invoices) {
    if (err) return next(err);
    res.json(Invoices);
  });
});

/* POST /Invoices */
router.post('/', function(req, res, next) {
  Invoice.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /Invoices/id */
router.get('/:id', function(req, res, next) {
  Invoice.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Invoices/:id */
router.put('/:id', function(req, res, next) {
  Invoice.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Invoices/:id */
router.delete('/:id', function(req, res, next) {
  Invoice.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
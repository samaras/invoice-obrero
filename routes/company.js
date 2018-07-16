var express = require('express');
var router = express.Router();

/* GET /Companys listing. */
router.get('/', function(req, res, next) {
  Company.find(function (err, companies) {
    if (err) return next(err);
    res.json(companies);
  });
});

/* POST /Companys */
router.post('/', function(req, res, next) {
  Company.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /Companys/id */
router.get('/:id', function(req, res, next) {
  Company.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Companys/:id */
router.put('/:id', function(req, res, next) {
  Company.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Companys/:id */
router.delete('/:id', function(req, res, next) {
  Company.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

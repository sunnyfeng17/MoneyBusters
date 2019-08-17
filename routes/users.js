var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/budgets', function(req, res, next) {
  res.send([
    { title: 'Rent', amount: 200 },
    { title: 'Food', amount: 30 }
  ]);
});

module.exports = router;

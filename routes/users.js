var express = require('express');
var router = express.Router();
var categories = require('../test/categories');

/* GET users listing. */
router.get('/category', async function(req, res, next) {
  var data = await categories.get();
  res.send(data);
});

module.exports = router;

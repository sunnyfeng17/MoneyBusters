var express = require('express');
var router = express.Router();
var budgetDetails = require('../models/budget-details')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Money Busters' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Money Busters' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Money Busters', error: '' });
});

router.post('/login', function(req, res, next) {
  const {username, password} = req.body;
  if(username === "test@test.com" && password === "test1") {
    res.redirect('/main');
  } else {
    res.render('login', {title: 'Money Busters', error: 'Invalid Username or Password'})
  }
});

router.get('/main', function(req, res, next) {
  res.render('main', { title: 'Money Busters', amount: 100, days: 6 });
});

router.get('/details', function(req, res, next) {
  res.render('details', budgetDetails.createFakeData());
});

router.get('/budget', function(req, res, next) {
  res.render('budget', { title: 'Money Busters' });
});

router.get('/rent', function(req, res, next) {
  res.render('rent', { title: 'Money Busters' });
});

router.get('/transport', function(req, res, next) {
  res.render('transport', { title: 'Money Busters' });
});

router.get('/groceries', function(req, res, next) {
  res.render('groceries', { title: 'Money Busters' });
});

router.get('/phone', function(req, res, next) {
  res.render('phone', { title: 'Money Busters' });
});

// router.get('/allowance', function(req, res, next) {
//   res.render('allowance', { title: 'Money Busters' });
// });

router.get('/income', function(req, res, next) {
  res.render('income', { title: 'Money Busters' });
});

router.post('/income', function(req, res, next) {
  const budget = JSON.parse(req.body.budget);
  console.log(budget);
  // do something with data
  res.redirect('/main');
});

module.exports = router;

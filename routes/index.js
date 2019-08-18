var express = require('express');
var router = express.Router();
var budgetDetails = require('../models/budget-details');
var editBudget = require('../models/edit-budget');
var categories = require('../test/categories');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MoneyBusters' });
});

// router.get('/signup', function(req, res, next) {
//   res.render('signup', { title: 'MoneyBusters' });
// });

router.get('/categories', async function(req, res, next) {
  res.render('test', {categories: await categories.get()});
});

router.get('/categories', async function(req, res, next) {
  res.render('test', {categories: await categories.get()});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'MoneyBusters', error: '' });
});

router.post('/login', function(req, res, next) {
  const {username, password} = req.body;
  if(username === "test@test.com" && password === "test1") {
    res.redirect('/begin');
  } else {
    res.render('login', {title: 'MoneyBusters', error: 'Invalid Username or Password'})
  }
});

router.get('/begin', function(req, res, next) {
  res.render('begin', { title: 'MoneyBusters', amount: 100, days: 6 });
});

router.get('/main', function(req, res, next) {
  res.render('main', { title: 'MoneyBusters', amount: 100, days: 6 });
});

router.get('/details', function(req, res, next) {
  res.render('details', budgetDetails.createFakeData());
});

router.get('/budget', function(req, res, next) {
  res.render('budget', editBudget.createFakeData());
});

router.get('/rent', function(req, res, next) {
  res.render('rent', { title: 'MoneyBusters' });
});

router.get('/transport', function(req, res, next) {
  res.render('transport', { title: 'MoneyBusters' });
});

router.get('/groceries', function(req, res, next) {
  res.render('groceries', { title: 'MoneyBusters' });
});

router.get('/phone', function(req, res, next) {
  res.render('phone', { title: 'MoneyBusters' });
});

// router.get('/allowance', function(req, res, next) {
//   res.render('allowance', { title: 'Money Busters' });
// });

router.get('/income', function(req, res, next) {
  res.render('income', { title: 'MoneyBusters' });
});

router.post('/income', function(req, res, next) {
  const budget = JSON.parse(req.body.budget);
  console.log(budget);
  // do something with data
  res.redirect('/main');
});

module.exports = router;

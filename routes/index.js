var express = require('express');
var router = express.Router();

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
  console.log(req.body)
  if(username === "test" && password === "test1") {
    res.redirect('/main');
  } else {
    res.render('login', {title: 'Money Busters', error: 'Invalid Username or Password'})
  }
});

router.get('/main', function(req, res, next) {
  res.render('main', { amount: 100, days: 6 });
});

module.exports = router;

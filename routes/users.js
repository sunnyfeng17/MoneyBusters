var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/category', async function(req, res, next) {
  var categories = await getCategories();
  res.send(categories);
});

var pocketSmithBaseUrl = 'https://api.pocketsmith.com/v2';

var config = {
  headers: {
    'Content-Type': 'application/json',
    'X-Developer-Key': 'e1f63b2a8d4a4d0f552900fa5eaf42421018d82abd31d362cd2c37b5cdfac4d2e3c7ba02d569e9e8ee24b9377dae4a1ae931f255114506de5c53d6369df9fdf5'
  }
};

getCategories = async () => {
  try{
    var categories = await axios.get(`${pocketSmithBaseUrl}/users/197004/budget`, config);
    return getTitleAndAmount(categories.data);
  }
  catch(error) {
      console.log(error);
      return null;
  }
}

getTitleAndAmount = function(data) {
  var filteredList = [];
  data.forEach(element => {
    var rawAmount = element.expense.total_forecast_amount;
    var positiveAmount = rawAmount * -1;
    var category = {
      title: element.category.title,
      amount: positiveAmount
    };
    filteredList.push(category);
  });
  return filteredList;
}

module.exports = router;

var express = require('express');
var router = express.Router();
const { getUserData, getUsers, getUserScoreLineChart, getUserDurationLineChart } = require('../controller/apiController')
const tokenValidator = require('../middlewares/tokenValidator')

/* GET home page. */
router.get('/apiusers/:username', tokenValidator, getUserData);
router.get('/apiusers', tokenValidator, getUsers);
router.get('/apiusers/:username/score-data-chart', tokenValidator, getUserScoreLineChart);
router.get('/apiusers/:username/duration-data-chart', tokenValidator, getUserDurationLineChart);

module.exports = router;

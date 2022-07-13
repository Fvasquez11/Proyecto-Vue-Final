var express = require('express');
var router = express.Router();
const { getUserData, getUsers, getUserScoreLineChart, getUserDurationLineChart, getUserSessions } = require('../controller/apiController')

/* GET home page. */
router.get('/apiusers/:id', getUserData);

router.get('/apiusers', getUsers);

router.get('/apiusers/:id/score-data-chart', getUserScoreLineChart);

router.get('/apiusers/:id/sessions', getUserSessions);

router.get('/apiusers/:id/duration-data-chart', getUserDurationLineChart);

module.exports = router;

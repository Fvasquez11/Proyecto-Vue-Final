var express = require('express');
var router = express.Router();
const { getUserData, getUsers, getUserScoreLineChart, getUserDurationLineChart } = require('../controller/apiController')

/* GET home page. */
router.get('/apiusers/:username', getUserData);
router.get('/apiusers', getUsers);
router.get('/apiusers/:username/score-data-chart', getUserScoreLineChart);
router.get('/apiusers/:username/duration-data-chart', getUserDurationLineChart);

// router.get('/apiusers/:username/sessions', getUserSessions);

module.exports = router;

var express = require('express');
var router = express.Router();
const { getUserData, getUserScoreLineChart, getUserScoreLineChart } = require('../controller/apiController')

/* GET home page. */
router.get('/apiusers/:id', getUserData(req.params.id));

router.get('/apiusers/:id/score-data-chart', async (req, res, next) => {
  const id = req.params.id
  try {
    res.json(await getUserScoreLineChart(id))
  } catch (error) {
    res.status(400).json({error: error.message}) 
  }
});

module.exports = router;

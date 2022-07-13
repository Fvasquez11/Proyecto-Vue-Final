var express = require('express');
var router = express.Router();
const { getUserData, getUsers, getUserScoreLineChart, getUserDurationLineChart, getUserSessions } = require('../controller/apiController')

/* GET home page. */
router.get('/apiusers/:id', async (req, res) => {
  try {
    const foundUser = await getUserData(req.params.id)
    return res.json({ user: foundUser }).status(200)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
});

router.get('/apiusers', async (req, res) => {
  try {
    const users = await getUsers()
    return res.json({users}).status(200)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
});

router.get('/apiusers/:id/score-data-chart', async (req, res) => {
  try {
    const chart = await getUserScoreLineChart(req.params.id)
    return res.json({ chart }).status(200)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
});

router.get('/apiusers/:id/sessions', async (req, res) => {
  try {
    const sessions = await getUserSessions(req.params.id)
    return res.json({ sessions }).status(200)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
});

router.get('/apiusers/:id/duration-data-chart', async (req, res) => {
  try {
    const chart = await getUserDurationLineChart(req.params.id)
    return res.json({ chart }).status(200)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
});

module.exports = router;

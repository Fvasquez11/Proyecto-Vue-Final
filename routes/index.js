var express = require('express');
var router = express.Router();
const User = require('../models/UserModel')


/* GET home page. */
router.get('/', async (req, res, next) => {
  const users = await User.find()
  res.render('index', { title: 'Express', users: users });
});

module.exports = router;

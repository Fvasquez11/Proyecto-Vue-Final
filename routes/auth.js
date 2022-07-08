var express = require('express');
var router = express.Router();
const login = require('../controller/controller.auth').login;
const register = require('../controller/controller.auth').register;

/* POST home page. */
router.post('/register', async (req, res, next) => {
  register(req, res);
});

router.post('/login', async (req, res, next) => {
  login(req, res);
});

module.exports = router;

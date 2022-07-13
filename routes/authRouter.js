var express = require('express');
const { infoUser } = require('../controller/authController');
const tokenValidator = require('../middlewares/tokenValidator');
var router = express.Router();
const login = require('../controller/authController').login;
const register = require('../controller/authController').register;


/* POST home page. */
router.post('/register', async (req, res, next) => {
  register(req, res);
});

router.post('/login', async (req, res, next) => {
  login(req, res);
});

router.get("/user/:name",infoUser)

module.exports = router;

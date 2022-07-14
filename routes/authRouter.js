var express = require('express');
const { infoUser } = require('../controller/authController');
const tokenValidator = require('../middlewares/tokenValidator');
var router = express.Router();
const login = require('../controller/authController').login;
const register = require('../controller/authController').register;
const getUserRoles = require('../controller/authController').getUserRoles;


/* POST home page. */
router.post('/register', register);

router.post('/login', login);

router.get('/:username/roles', tokenValidator, getUserRoles)

module.exports = router;

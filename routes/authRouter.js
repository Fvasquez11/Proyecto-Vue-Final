var express = require('express');
const tokenValidator = require('../middlewares/tokenValidator');
var router = express.Router();
const login = require('../controller/authController').login;
const register = require('../controller/authController').register;
const getUserRoles = require('../controller/authController').getUserRoles;
const logout = require('../controller/authController').logout;


/* POST home page. */
router.post('/register', register);

router.post('/login', login);

router.get('/:username/roles', tokenValidator, getUserRoles)

router.post('/logout', tokenValidator, logout)

module.exports = router;

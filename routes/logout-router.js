const express = require('express');
const router = express.Router();

const LogoutController = require('../controllers/logoutController');
router.get('/', LogoutController.destroySession)

module.exports = router
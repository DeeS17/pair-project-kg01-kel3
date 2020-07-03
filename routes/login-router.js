const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/loginController')

router.get('/', LoginController.loginForm);
router.post('/', LoginController.loginPost)

module.exports = router
const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/loginController')

router.get('/', LoginController.loginForm);
//Jika sudah ada form bisa dilanjutkan POST nyay

module.exports = router
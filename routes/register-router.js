const express = require('express');
const router = express.Router();

const RegisterController = require('../controllers/registerController')

router.get('/', RegisterController.registerForm);
//Jika sudah ada form bisa dilanjutkan POST nya


module.exports = router
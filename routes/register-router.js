const express = require('express');
const router = express.Router();

const RegisterController = require('../controllers/registerController')

router.get('/', RegisterController.registerForm);
router.post('/', RegisterController.registerPost)



module.exports = router
const express = require('express');
const router = express.Router();

const Controller = require('../controllers/index');
router.get('/', Controller.getRootHandler);

const register = require('./register-router');
router.use('/register', register)

const login = require('./login-router');
router.use('/login', login);

const logout = require('./logout-router');
router.use('/logout', logout);

const item = require('./item-router');
router.use('/item', item);

const user = require('./user-router');
router.use('/user', user);

const transaction = require('./transaction-router');
router.use('/transaction', transaction);

module.exports = router
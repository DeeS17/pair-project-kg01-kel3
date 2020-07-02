const express = require('express');
const router = express.Router();

const ItemController = require('../controllers/itemController');
router.get('/', ItemController.listItem);
router.get('/:id', ItemController.detailItem);

module.exports = router
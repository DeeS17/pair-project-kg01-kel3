const express = require('express');
const router = express.Router();

const ItemController = require('../controllers/itemController');

router.get('/create', ItemController.getItemAddHandler);
router.post('/create', ItemController.postItemAddHandler);

router.get('/update/:id', ItemController.getItemUpdateHandler);
router.post('/update/:id', ItemController.postItemUpdateHandler);

router.get('/buy/:id', ItemController.getItemBuyHandler);
router.post('/buy/:id', ItemController.postItemBuyHandler);

router.get('/delete/:id', ItemController.getItemDeleteHandler);

router.get('/:id', ItemController.getItemDetailHandler);

module.exports = router;
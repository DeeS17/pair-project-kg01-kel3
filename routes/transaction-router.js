const express = require('express');
const router = express.Router();

const TransactionController = require('../controllers/transactionController');

// router.get('/create', ItemController.getItemAddHandler);
// router.post('/create', ItemController.postItemAddHandler);

// router.get('/update/:id', ItemController.getItemUpdateHandler);
// router.post('/update/:id', ItemController.postItemUpdateHandler);

// router.get('/buy/:id', ItemController.getItemBuyHandler);
// router.post('/buy/:id', ItemController.postItemBuyHandler);

// router.get('/delete/:id', ItemController.getItemDeleteHandler);

router.get('/', TransactionController.getTransactionRootHandler);

router.get('/create', TransactionController.getTransactionAddHandler);
router.post('/create', TransactionController.postTransactionAddHandler);

router.get('/:id', TransactionController.getTransactionDetailHandler);

module.exports = router;
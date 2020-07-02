const express = require('express');
const router = express.Router();

const TransactionController = require('../controllers/transactionController');

router.get('/', TransactionController.getTransactionRootHandler);

router.get('/create', TransactionController.getTransactionAddHandler);
router.post('/create', TransactionController.postTransactionAddHandler);

router.get('/:id', TransactionController.getTransactionDetailHandler);
router.post('/:id', TransactionController.postTransactionDetailHandler);

module.exports = router;
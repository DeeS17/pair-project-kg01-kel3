const {Transaction, User, TransactionDetail, Item} = require('../models/index.js');

class TransactionController {
    static getTransactionRootHandler(req, res) {
        Transaction.findAll()
            .then((transactions) => {
                res.render('index-transaction', {transactions});
            })
            .catch((err) => {
                res.send(err);
            })
    }

    static getTransactionAddHandler(req, res) {
        User.findAll()
            .then((users) => {
                res.render('form-add-transaction', (users));
            })
            .catch((err) => {
                res.send(err);
            })
    }

    static postTransactionAddHandler(req, res) {
        const objTransaction = {
            CustomerId: Number(req.body.customer)
        }
        Transaction.create(objTransaction)
            .then(() => {
                res.redirect('/transaction');
            })
            .catch((err) => {
                res.send(err);
            })
    }

    static getTransactionDetailHandler(req, res) {
        const paramId = Number(req.params.id);
        let transaction;
        Transaction.findByPk(paramId, {
            include: [
                {
                    model: TransactionDetail,
                    include: [
                        {
                            model: Item
                        }
                    ]
                }
            ]
        })
            .then(data => {
                if(!data) {
                    throw 'Cannot find id';
                }

                transaction = data;
                return Item.findAll();
            })
            .then(items => {
                res.render('transaction-detail', {transaction, items});
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = TransactionController;
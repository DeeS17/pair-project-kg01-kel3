const {Transaction, User, TransactionDetail, Item} = require('../models/index.js');
const {getTotalPrice} = require('../helpers/helpers-view.js');


class TransactionController {
    static getTransactionRootHandler(req, res) {
        let usernameLogged = req.session.username
        Transaction.findAll()
            .then((transactions) => {
                res.render('index-transaction', {transactions, usernameLogged});
            })
            .catch((err) => {
                res.send(err);
            })
    }

    static getTransactionAddHandler(req, res) {
        let usernameLogged = req.session.username
        User.findAll()
            .then((users) => {
                res.render('form-add-transaction', {users, usernameLogged, alert: req.query.message});
            })
            .catch((err) => {
                res.send(err);
            })
    }

    static postTransactionAddHandler(req, res) {
        let usernameLogged = req.session.username
        const objTransaction = {
            UserId: req.body.customer === '' ? '' : Number(req.body.customer)
        }
        Transaction.create(objTransaction)
            .then(() => {
                res.redirect('/transaction');
            })
            .catch((err) => {
                let error = err.errors.map(er => {
                    return er.message;
                })

                res.redirect(`/transaction/create?message=${error.join(', ')}`);
            })
    }

    static getTransactionDetailHandler(req, res) {
        let usernameLogged = req.session.username
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
                
                res.render('transaction-detail', {transaction, items, usernameLogged, getTotalPrice, alert: req.query.message});
            })
            .catch(err => {
                
                res.send(err);
            })
    }

    static postTransactionDetailHandler(req, res) {
        const TransactionId = Number(req.params.id);
        const ItemId = Number(req.body.item) === 0 ? '' : Number(req.body.item);

        const objTransactionItem = {
            TransactionId,
            ItemId,
            quantity: req.body.quantity
        }

        console.log(objTransactionItem);
        
        TransactionDetail.create(objTransactionItem)
            .then(() => {
                res.redirect(`/transaction/${TransactionId}`);
            })
            .catch(err => {
                let error = err.errors.map(er => {
                    return er.message;
                })

                res.redirect(`/transaction/${TransactionId}?message=${error.join(', ')}`);
            })

    }
}

module.exports = TransactionController;
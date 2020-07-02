const {Transaction, User, TransactionDetail, Item} = require('../models/index.js');

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
                res.render('form-add-transaction', {users, usernameLogged});
            })
            .catch((err) => {
                res.send(err);
            })
    }

    static postTransactionAddHandler(req, res) {
        let usernameLogged = req.session.username
        const objTransaction = {
            UserId: Number(req.body.customer)
        }
        Transaction.create(objTransaction)
            .then(() => {
                res.redirect('/transaction');
            })
            .catch((err) => {
                console.log(err);
                res.send(err);
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
                res.render('transaction-detail', {transaction, items, usernameLogged});
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = TransactionController;
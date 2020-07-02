const {Item} = require('../models/index.js');

class ItemController {
    static getItemAddHandler(req, res) {
        res.render('form-add-item');
    }

    static postItemAddHandler(req, res) {
        const objItem = {
            name: req.body.name,
            imageURL: req.body.imageurl,
            price: req.body.price,
            stock: req.body.stock
        }

        Item.create(objItem)
            .then(() => {
                res.redirect('/');
            })
            .catch((err) => {
                res.send(err);
            })
    }

    static getItemUpdateHandler(req, res) {
        const paramId = Number(req.params.id);
        Item.findByPk({
            where: {
                id: paramId
            }
        })
            .then((item) => {
                res.render('form-update-item', item);
            })
            .catch((err) => {
                res.send(err);
            })
    }

    static postItemUpdateHandler(req, res) {
        const paramId = Number(req.params.id);
        const objItem = {
            name: req.body.name,
            imageURL: req.body.imageurl,
            price: req.body.price,
            stock: req.body.stock
        }
        Item.update(objItem, {
            where: {
                id: paramId
            }
        })
            .then(() => {
                res.redirect('/');
            })
            .catch(() => {
                res.send(err);
            })
    }

    static getItemBuyHandler(req, res) {
        const paramId = Number(req.params.id);
        Item.findByPk({
            where: {
                id: paramId
            }
        })
            .then((item) => {
                res.render('form-buy-item', item);
            })
            .catch((err) => {
                res.send(err);
            })
    }

    static postItemBuyHandler(req, res) {
        const paramId = Number(req.params.id);
        
        const objItem = {
            stock: req.body.stock
        }
        Item.update(objItem, {
            where: {
                id: paramId
            }
        })
            .then(() => {
                res.redirect('/');
            })
            .catch(() => {
                res.send(err);
            })
    }

    static getItemDeleteHandler(req, res) {
        const paramId = Number(req.params.id);
    
        Item.destroy({
            where: {
                id: paramId
            }
        })
            .then(() => {
                res.redirect('/');
            })
            .catch((err) => {
                res.send(err);
            });
    }

    static getItemDetailHandler(req, res) {
        const paramId = Number(req.params.id);

        
    }
}

module.exports = ItemController;
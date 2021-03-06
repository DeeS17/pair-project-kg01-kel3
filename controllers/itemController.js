const {Item} = require('../models/index.js');

class ItemController {
    static getItemAddHandler(req, res) {
        let usernameLogged = req.session.username
        res.render('form-add-item', {usernameLogged, alert: req.query.message});
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
                let error = err.errors.map(er => {
                    return er.message;
                })

                res.redirect(`/item/create?message=${error.join(', ')}`);
            })
    }

    static getItemUpdateHandler(req, res) {
        const paramId = Number(req.params.id);
        let usernameLogged = req.session.username
        Item.findByPk(paramId)
            .then((item) => {
                // console.log(item)

                res.render('form-edit-item', {item, usernameLogged, alert: req.query.message});
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
            .catch((err) => {
                let error = err.errors.map(er => {
                    return er.message;
                })

                res.redirect(`/item/update/${paramId}?message=${error.join(', ')}`);
            })
    }

    // static getItemBuyHandler(req, res) {
    //     const paramId = Number(req.params.id);
    //     let usernameLogged = req.session.username
    //     Item.findByPk({
    //         where: {
    //             id: paramId
    //         }
    //     })
    //         .then((item) => {
    //             res.render('form-buy-item', {item, usernameLogged});
    //         })
    //         .catch((err) => {
    //             res.send(err);
    //         })
    // }

    // static postItemBuyHandler(req, res) {
    //     const paramId = Number(req.params.id);
        
    //     const objItem = {
    //         stock: req.body.stock
    //     }
    //     Item.update(objItem, {
    //         where: {
    //             id: paramId
    //         }
    //     })
    //         .then(() => {
    //             res.redirect('/');
    //         })
    //         .catch(() => {
    //             res.send(err);
    //         })
    // }

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

    // static getItemDetailHandler(req, res) {
    //     const paramId = Number(req.params.id);

    // }
/* class ItemController {
    static listItem(req, res) {
        let usernameLogged = req.session.username

        res.render('item', {title: `Item List`, usernameLogged})
    }

    static detailItem(req, res) {
        res.render('item', {title: `item ${req.params.id}`, usernameLogged})
        */

    
}

module.exports = ItemController;
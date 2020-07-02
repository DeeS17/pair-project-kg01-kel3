const {Item, User} = require('../models/index.js');

class Controller {
    static getRootHandler(req, res) {
        Item.findAll()
            .then((items) => {
                res.render('index', {items});
            })
            .catch((err) => {
                res.send(err);
            })
    }
}

module.exports = Controller
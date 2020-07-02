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
      
//        let usernameLogged = req.session.username
//         let roleLogged= req.session.role

//         res.render('index', {title: `Home`, usernameLogged})
    }
}

module.exports = Controller
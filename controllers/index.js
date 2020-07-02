const {Item, User} = require('../models/index.js');

class Controller {

    static getRootHandler(req, res) {
        let usernameLogged = req.session.username
        let roleLogged= req.session.role
        
        Item.findAll()
            .then((items) => {
                res.render('index', {items, usernameLogged});
            })
            .catch((err) => {

                res.send(err);
            })
      


//         res.render('index', {title: `Home`, usernameLogged})
    }
}

module.exports = Controller
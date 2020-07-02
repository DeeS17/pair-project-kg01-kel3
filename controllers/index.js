const {Item, User} = require('../models/index.js');
const {timeDifference} = require('../helpers/helpers-view.js');

class Controller {

    static getRootHandler(req, res) {
        let usernameLogged = req.session.username
        let roleLogged= req.session.role
        
        Item.findAll()
            .then((items) => {
                res.render('index', {items, usernameLogged, timeDifference});
            })
            .catch((err) => {

                res.send(err);
            })
      


//         res.render('index', {title: `Home`, usernameLogged})
    }
}

module.exports = Controller
const {Item, User} = require('../models/index.js');
const {timeDifference, numberWithCommas} = require('../helpers/helpers-view.js');

class Controller {

    static getRootHandler(req, res) {
        let usernameLogged = req.session.username
        let roleLogged= req.session.role
        
        const title = req.query;

        if(!title.keyword) {
            Item.findAll()
                .then((items) => {
                    res.render('index', {items, usernameLogged, timeDifference, numberWithCommas});
                })
                .catch((err) => {
    
                    res.send(err);
                })
        } else {
            const keyword = req.query.keyword;

            Item.findAllByKeyword(keyword)
                .then((items) => {
                    res.render('index', {items, usernameLogged, timeDifference, numberWithCommas});
                })
                .catch((err) => {

                    res.send(err);
                })
        }
      


//         res.render('index', {title: `Home`, usernameLogged})
    }
}

module.exports = Controller
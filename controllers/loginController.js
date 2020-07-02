const { User } = require('../models/index');

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

class LoginController {
    static loginForm(req, res) {
        
        // console.log(req.query)
        let errors = req.query.err

        console.log(errors)

        let usernameLogged = req.session.username
        res.render('Login', { title: `Login`, usernameLogged, errors})
    }

    static loginPost(req, res) {
        
        // console.log(req.body)
        
        let findUser;
        
        User.findOne({where: {username:req.body.username}})
        .then(user => {

            if(user == null) res.redirect('/login?err=User not found')
            else {
                findUser = user
                return bcrypt.compare(req.body.password, user.password)
            }
        })
        .then(result => {
            if(result == true) {
                req.session.LoggedIn = true;
                req.session.username = findUser.username;
                req.session.role = findUser.role
                res.redirect('/')
            } else {
                res.redirect('/login?err=Wrong password')
            }
        })
        .catch(err => res.send(err.message))
    }
}

module.exports = LoginController
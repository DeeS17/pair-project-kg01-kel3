const { User } = require('../models/index') 

class RegisterController {
    static registerForm(req, res) {
        let usernameLogged = req.session.username;
        
        res.render('register', {title: `register`, usernameLogged})
    }

    static registerPost(req, res) {
        
        // console.log(req.body)

        User.create({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            email: req.body.email,
            role: req.body.role
        })
        .then(user => {
            res.redirect(`/login/?success=${req.body.name}`)
        })
        .catch(err => res.redirect(`/register?err=${err.messange}`))
    }
}

module.exports = RegisterController
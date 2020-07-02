const { User } = require('../models/index') 

class RegisterController {
    static registerForm(req, res) {
        let usernameLogged = req.session.username;

        let errors = req.query.err;
        if(errors) errors = errors.split('\n');

        // console.log(errors)
        
        res.render('register', {title: `register`, usernameLogged, errors})
    }

    static registerPost(req, res) {
        
        // console.log(req.body)

        User.create({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            email: req.body.email,
        })
        .then(user => {
            res.redirect(`/login/?success=${req.body.name}`)
        })
        .catch(err => {
            let errors = err.errors.map(error => error.message)
                .join('\n')

            // console.log(errors)

            res.redirect(`/register?err=${errors}`)
        })
    }
}

module.exports = RegisterController
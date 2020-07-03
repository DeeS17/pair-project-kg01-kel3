const { User } = require('../models/index');
const nodemailer = require('nodemailer');
const { normalize } = require('path');

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
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: `tokohijauadventure@gmail.com`,
                    pass: `hacktiv8`
                }
            });

            const mailOptions = {
                from: `cvmakmurianusantara@gmail.com`,
                to: req.body.email,
                subject: `Thanks for your registration`,
                html: `<h1> Mini E-Commerce </h1> <br><br>
                <p> Thanks for your registration ${req.body.name} </p>`
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if(err) throw err;
                else res.redirect(`/login/?success=${req.body.name}`)
            })

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
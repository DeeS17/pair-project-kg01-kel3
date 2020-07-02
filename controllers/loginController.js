class LoginController {
    static loginForm(req, res) {
        res.render('Login', {title: `Login`})
    }
}

module.exports = LoginController
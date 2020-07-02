class RegisterController {
    static registerForm(req, res) {
        res.render('register', {title: `register`})
    }
}

module.exports = RegisterController
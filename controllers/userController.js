class UserController {
    static userHome(req, res) {
        let usernameLogged = req.session.username;
        res.render('user', {title: `User`, usernameLogged})
    }
}

module.exports = UserController
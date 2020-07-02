class UserController {
    static userHome(req, res) {
        res.render('user', {title: `user`})
    }
}

module.exports = UserController
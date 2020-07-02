
class LogoutController{
    static destroySession(req, res) {
        req.session.destroy(err => {
            if (err) res.send(err.message);
            else res.redirect('./login')
        })
    }
}

module.exports = LogoutController;
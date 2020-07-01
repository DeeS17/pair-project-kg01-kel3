class AdminController {
    static adminHome(req, res) {
        res.render('admin', {title: `Admin Home`})
    }
}

module.exports = AdminController
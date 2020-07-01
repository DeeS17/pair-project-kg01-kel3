class Controller {
    static rootHandler(req, res) {
        res.render('index', {title: `Home`})
    }
}

module.exports = Controller
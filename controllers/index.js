class Controller {
    static rootHandler(req, res) {
        
        // console.log(req.session.username, req.session.role)

        let usernameLogged = req.session.username
        let roleLogged= req.session.role

        res.render('index', {title: `Home`, usernameLogged})
    }
}

module.exports = Controller
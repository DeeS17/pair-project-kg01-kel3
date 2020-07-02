

class ItemController {
    static listItem(req, res) {
        let usernameLogged = req.session.username

        res.render('item', {title: `Item List`, usernameLogged})
    }

    static detailItem(req, res) {
        res.render('item', {title: `item ${req.params.id}`, usernameLogged})
    }
}

module.exports = ItemController
class ItemController {
    static listItem(req, res) {
        res.render('item', {title: `Item List`})
    }

    static detailItem(req, res) {
        res.render('item', {title: `item ${req.params.id}`})
    }
}

module.exports = ItemController
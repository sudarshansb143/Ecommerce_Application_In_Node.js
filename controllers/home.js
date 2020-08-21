//This is the controller

const cart = []
exports.sendPortHome = (req, res, next) => {
    res.render("portfolio")
};

exports.renderCard = (req, res, next) => {
    let temp = req.body.product
    cart.push(temp);
    res.render("added", { products: cart })
};
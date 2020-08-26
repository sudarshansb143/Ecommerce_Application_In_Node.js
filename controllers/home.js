//This is the controller


let cart = []
exports.sendPortHome = (req, res, next) => {
    res.render("portfolio")
};

//rendering the cart
exports.renderCard = (req, res, next) => {
    let temp = req.body.product
    if (temp != undefined) {
        cart.push(temp);
    }
    res.render("added", { products: cart })
};

//Clearing the cart
exports.clearCart = (req, res, next) => {
    cart = [];
    res.render("added", { products: cart })
};

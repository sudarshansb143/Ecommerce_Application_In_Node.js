const express = require("express")
const portFolio = require("../controllers/home")
const router = express.Router()

router.use("/info", (req, res, next) => {
    res.render("product_home")
})

router.use("/clear_cart", portFolio.clearCart)

router.use("/portfolio", portFolio.sendPortHome)

router.use("/add_to_cart", portFolio.renderCard)

router.use("/", (req, res, next) => {
    res.render("404")
})

module.exports = router
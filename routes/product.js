const express = require("express")
const portFolio = require("../controllers/home")


const router = express.Router()


router.use("/info", (req, res, next) => {
    res.render("product_home")
})

router.use("/portfolio", portFolio.sendPortHome)

router.post("/add_to_cart", portFolio.renderCard)


router.use("/", (req, res, next) => {
    res.render("404")
})



module.exports = router
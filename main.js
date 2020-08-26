const express = require("express")
const product_router = require("./routes/product")
const port = 3000
const app = express()

//Configartation paths

app.set("view engine", "ejs")

app.set("views", "./views");

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

//Routing starts
app.use("/", (req, res, next) => {
    console.log(req.url)
    next()
})

//Serving the static assests
app.use(express.static("public"))

//Home directiory
app.use("/home", (req, res, next) =>
    res.render("index")
)


app.use("/abt", (req, res, next) =>
    res.render("abt")
)

app.use("/product", product_router)

app.use("/", (req, res, next) =>
    res.render("404")
)


app.listen(port);
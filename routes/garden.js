const Express = require("express");
const router = Express.Router();
const fs = require("fs");

const cookieParser = require("cookie-parser");

//const garden = require('./views/garden.handlebars')

router.get("/", (req, res) => {
  res.render("garden", { gardens: "" });
});

router.post("/postform", (req, res) => {

  res.redirect("back")
})

module.exports = router;

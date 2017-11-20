const Express = require("express");
const router = Express.Router();
const fs = require("fs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//const garden = require('./views/garden.handlebars')

router.get("/", (req, res) => {
  res.render("garden", { gardens: "" });
});

router.post("/postform", (req, res) => {
  console.log("Body: " + req.body.goodEvil);
  //console.log("Good or Evil: " + goodEvil);
  res.redirect("back");
});

module.exports = router;

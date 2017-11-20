const Express = require("express");
const router = Express.Router();
const fs = require("fs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//const garden = require('./views/garden.handlebars')

let backgroundClass = "";

router.get("/", (req, res) => {
  if (req.cookies.goodevil === "good") {
    backgroundClass = "good";
  } else if (req.cookies.goodevil === "evil") {
    backgroundClass = "evil";
  }
  res.render("garden", { backgroundClass });
});

router.post("/postform", (req, res) => {
  res.cookie("goodevil", req.body.goodevil);
  res.cookie("favoritefood", req.body.favoritefood);
  res.cookie("favoritecolor", req.body.favoritecolor);
  res.cookie("insanity", req.body.insanity);
  res.redirect("back");
});

module.exports = router;

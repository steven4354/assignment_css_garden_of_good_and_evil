const Express = require("express");
const router = Express.Router();
const fs = require("fs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//const garden = require('./views/garden.handlebars')

router.get("/", (req, res) => {
  if (req.cookies){
    console.log("cookies" + req.cookies);
  }
  res.render("garden", { });
});

router.post("/postform", (req, res) => {
  res.cookie('goodevil', req.body.goodevil)
  res.cookie('favoritefood', req.body.favoritefood)
  res.cookie('favoritecolor', req.body.favoritecolor)
  res.cookie('insanity', req.body.insanity)
  res.redirect("back");
});

module.exports = router;

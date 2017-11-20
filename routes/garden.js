const Express = require("express");
const router = Express.Router();
//const fs = require("fs");
//const bodyParser = require("body-parser");
//const cookieParser = require("cookie-parser");

//const garden = require('./views/garden.handlebars')

// let backgroundClass = "";

router.get("/", (req, res) => {
  // if (req.cookies.goodevil === "good") {
  //   backgroundClass = "good";
  // } else if (req.cookies.goodevil === "evil") {
  //   backgroundClass = "evil";
  // }

  res.render("garden", {
  });
});

router.get("/responses", (req, res) => {
  res.render("responses", {
    backgroundClass: req.cookies.goodevil,
    favoritefood: req.cookies.favoritefood,
    favoritecolor: req.cookies.favoritecolor,
    favoriteanimal: req.cookies.favoriteanimal,
    worstfood: req.cookies.worstfood,
    worstcolor: req.cookies.worstcolor,
    worstanimal: req.cookies.worstanimal,
  })
})

router.post("/postform", (req, res) => {
  res.cookie("goodevil", req.body.goodevil);
  res.cookie("favoritefood", req.body.favoritefood);
  res.cookie("favoritecolor", req.body.favoritecolor);
  res.cookie("insanity", req.body.insanity);
  res.cookie("worstfood", req.body.worstfood)
  res.cookie("worstcolor", req.body.worstcolor)
  res.cookie("favoriteanime", req.body.favoriteanimal)
  res.cookie("worstanimal", req.body.worstanimal)
  res.cookie("bio", req.body.bio)
  //res.redirect("back");
  for (let i = 0; i < Object.keys(req.body).length; i++){
    let key = Object.keys(req.body)[i]
    if(req.body[key] == ""){
      req.flash('error', 'fill out everything!');
      res.redirect("back")
    }
  }
  res.redirect("/responses")
});

module.exports = router;

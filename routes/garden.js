const Express = require("express");
const router = Express.Router();
//const fs = require("fs");
//const bodyParser = require("body-parser");
//const cookieParser = require("cookie-parser");

//const garden = require('./views/garden.handlebars')

// let backgroundClass = "";

router.get("/", (req, res) => {
  res.render("garden", {});
});

router.get("/responses", (req, res) => {
  let job1, job2;
  if (req.cookies.goodevil === "good") {
    job1 = "Angel";
    job2 = "Luke Skywalker";
  } else if (req.cookies.goodevil === "evil") {
    job1 = "Devil";
    job2 = "Darth Vader";
  }
  res.render("responses", {
    goodEvil: req.cookies.goodevil,
    backgroundClass: req.cookies.goodevil,
    favoritefood: req.cookies.favoritefood,
    favoritecolor: req.cookies.favoritecolor,
    favoriteanimal: req.cookies.favoriteanimal,
    worstfood: req.cookies.worstfood,
    worstcolor: req.cookies.worstcolor,
    worstanimal: req.cookies.worstanimal,
    job1: job1,
    job2: job2
  });
});

router.post("/postform", (req, res) => {
  res.cookie("goodevil", req.body.goodevil);
  res.cookie("favoritefood", req.body.favoritefood);
  res.cookie("favoritecolor", req.body.favoritecolor);
  res.cookie("insanity", req.body.insanity);
  res.cookie("worstfood", req.body.worstfood);
  res.cookie("worstcolor", req.body.worstcolor);
  res.cookie("favoriteanimal", req.body.favoriteanimal);
  res.cookie("worstanimal", req.body.worstanimal);
  res.cookie("bio", req.body.bio);
  //res.redirect("back");
  for (let i = 0; i < Object.keys(req.body).length; i++) {
    let key = Object.keys(req.body)[i];
    if (req.body[key] == "") {
      req.flash("error", "Please fill out all fields!");
      res.redirect("back");
    }
  }
  req.flash("success", "Responses successfully submitted!");
  res.redirect("/responses");
});

module.exports = router;
